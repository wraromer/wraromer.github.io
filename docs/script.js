
// Array of image URLs
const leftImageUrls = [
	'lady-1.jpg',
	'lady-2.jpg',
	'lady-3.jpg',
	'lady-4.jpg',
	'lady-5.jpg'
]

const rightImageUrls = [
	'sir-1.jpg',
	'sir-2.jpg',
	'sir-3.jpg',
	'sir-4.jpg'
]


// Function to set a random image
function setRandomImageHomepage () {
  const randomIndexLeft = Math.floor(Math.random() * leftImageUrls.length);
  const randomImageLeftUrl = leftImageUrls[randomIndexLeft];
	document.getElementById('randomImageLeft').src = 'images/' + randomImageLeftUrl;

	const randomIndexRight = Math.floor(Math.random() * rightImageUrls.length);
	const randomImageRightUrl = rightImageUrls[randomIndexRight];
	document.getElementById('randomImageRight').src = 'images/' + randomImageRightUrl;
}

document.addEventListener('DOMContentLoaded', () => {
  const contentDiv = document.getElementById('content');
	const cache = {}; // In-memory cache object

  // Function to handle route changes and load external content
  async function handleRoute(route)
	{
		if (cache[route])
		{
      // If content is in cache, use it
			console.info ('Content taken from cache');
      contentDiv.innerHTML = cache[route];
    }
		else
		{
	    try
			{
	      const response = await fetch(`${route}.html`); // Assumes files are named like the route + .html
	      if (response.ok)
				{
	        const content = await response.text();
	        contentDiv.innerHTML = content;

					if (route === 'home') 
					{
						setRandomImageHomepage ();		
					}

					cache[route] = contentDiv.innerHTML; // Store content in cache
	      }
				else
				{
	        contentDiv.innerHTML = '<h1>Ein Fehler ist aufgetreten</h1><p>Seite nicht gefunden.</p>';
	      }
	    }
			catch (error)
			{
	      console.error('Error during content loading:', error);
	      contentDiv.innerHTML = '<h1>Ein Fehler ist aufgetreten</h1><p>Ein Fehler ist beim Laden des Inhaltes aufgetreten.</p>';
	    }
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
