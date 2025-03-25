
document.addEventListener('DOMContentLoaded', () => {
  const contentDiv = document.getElementById('content');
  const blogContentDiv = document.getElementById('blog_content');
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
	        contentDiv.innerHTML = '<h1>Seite nicht gefunden</h1><p>Seite nicht gefunden.</p>';
	      }
	    } catch (error) {
	      console.error('Error during content loading:', error);
	      contentDiv.innerHTML = '<h1>Error</h1><p>Ein Fehler ist beim Laden des Inhaltes aufgetreten.</p>';
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
