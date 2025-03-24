function changeContent(page) {
	var contentDiv = document.getElementById('content');

	switch (page) {
		case 'home':
			contentDiv.innerHTML = `
				<h2>Technik-Support und Schulungen</h2>
				<div id="text">
					<p>
						Wolfgangs Support hilft bei IT-Problemen aller Art: Notebook, Handy, Hardware und Software.
					</p>
				</div>
			`;
			break;
		case 'about':
			contentDiv.innerHTML = `
				<h2>Über mich</h2>
				<img src="./me-14-bw.jpg">
				<div id="text">
					<p>
						Mein Name ist Wolfgang Römer und bereits mit 13 Jahren begann ich Heimcomputer zu programmieren. Später lernte ich PCs und Großrechner kennen und studierte schließlich Physik mit der Spezialisierung auf Elektronik.
					</p>
					<p>
						Seit mehr als 25 Jahren arbeite ich in der Software-Branche und habe dabei in verschiedenen Rollen und in verschiedenen Unternehmen erfolgreich neue Produkte an den Markt gebracht. Dabei war ich zunächst als Software Developer und Teamleiter aktiv, um dann auch Coaching Aufgaben wie Scrum Master und Agile Coach erfolgreich zu übernehmen.
					</p>
					<p>
						Meine sehr schnelle Auffassungsgabe und mein Kommunikationstalent führten dazu, dass ich sowohl als Product Owner als auch Produktmanager tätig wurde. Diese Rollen sind meine Steckenpferde und ich konzentriere mich mehr und mehr ausschließlich auf sie.
					</p>
				</div>
			`;
			break;
		case 'contact':
			contentDiv.innerHTML = `
				<h2>Kontakt</h2> 
				<img src="./me-14-bw.jpg">
				<div id="text">
					<p>
						Impressum:
					<p>
						Wolfgang Römer <br>
						Liebermannstr. 25 <br>
						69126 Heidelberg
					</p>
					<p>
						Sie erreichen mich per E-Mail unter: <a href="mailto:info@wolfgangs.support">info@wolfgangs.support</a>
					</p>
				</div>
				`;
			break;

		default:
			contentDiv.innerHTML = '<h2>Seite nicht gefunden!</h2>';
	}
}

window.onload = function() {
	changeContent('home');
  };

