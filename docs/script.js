
// Array of image URLs
const imageUrls = [
  'wolfgangs.support-5.jpg',
  'wolfgangs.support-6.jpg',
  'wolfgangs.support-7.jpg',
  'wolfgangs.support-8.jpg',
  'wolfgangs.support-9.jpg',
  'wolfgangs.support-10.jpg',
	'wolfgangs.support-11.jpg',
	'wolfgangs.support-12.jpg'
]

// Function to set a random image
function setRandomImageHomepage () {
  randomIndexLeft = Math.floor(Math.random() * imageUrls.length);
  randomImageLeftUrl = imageUrls[randomIndexLeft];
	document.getElementById('randomImageLeft').src = 'images/' + randomImageLeftUrl;

	randomIndexRight = randomIndexLeft;
	// Ensure the right image is different from the left one
	do {
		randomIndexRight = Math.floor(Math.random() * imageUrls.length);
	}
	while (randomIndexRight === randomIndexLeft);

  randomImageRightUrl = imageUrls[randomIndexRight];
	document.getElementById('randomImageRight').src = 'images/' + randomImageRightUrl;
}

document.addEventListener('DOMContentLoaded', () => {
  const contentDiv = document.getElementById('content');
	const cache = {}; // In-memory cache object

  // Function to handle route changes and load external content
  async function handleRoute(route) {
		if (cache[route]) {
      // If content is in cache, use it
			console.info ('Content taken from cache');
      contentDiv.innerHTML = cache[route];
    }
		else {
	    try {
	      const response = await fetch(`${route}.html`); // Assumes files are named like the route + .html
	      if (response.ok) {
	        const content = await response.text();
					cache[route] = content; // Store content in cache
	        contentDiv.innerHTML = content;
	      } else {
	        contentDiv.innerHTML = '<h1>Ein Fehler ist aufgetreten</h1><p>Seite nicht gefunden.</p>';
	      }
	    } catch (error) {
	      console.error('Error during content loading:', error);
	      contentDiv.innerHTML = '<h1>Ein Fehler ist aufgetreten</h1><p>Ein Fehler ist beim Laden des Inhaltes aufgetreten.</p>';
	    }
		}

		if (route === 'home') {
			console.info ('Choose random images')
			setRandomImageHomepage ();		
		}
  }

  // Add event listeners to navigation links
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const route = event.target.getAttribute('data-route');
			if (route === null)
			{
				console.warn ('No data-route attribute set');
			}
			else
			{
				console.info ('Handling route', route)
				window.history.pushState({}, '', `#${route}`);
				handleRoute(route);
			}
    });
  });

  // Handle browser back/forward buttons
  window.addEventListener('popstate', () => {
    const route = window.location.hash.substring(1);
    handleRoute(route);
  });

  // Initial route handling
  const initialRoute = window.location.hash.substring(1) || 'home';
  handleRoute(initialRoute);
}
);
