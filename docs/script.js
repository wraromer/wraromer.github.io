function changeContent(page) {
	var contentDiv = document.getElementById('content');

	switch (page) {
		case 'home':
			contentDiv.innerHTML = `
				<h2>Technik-Support und Schulungen</h2>
				<p>
          Wolfgangs Support hilft bei IT-Problemen aller Art: Notebook, Handy, Hardware und Software.
				</p>
			`;
			break;
		case 'about':
			contentDiv.innerHTML = `
				<h2>Über mich</h2>
				<img src= "./me-14-bw.jpg" width="512">
				<p>
        Mein Name ist Wolfgang Römer und bereits mit 13 Jahren begann ich Heimcomputer zu programmieren. Später lernte ich PCs und Großrechner kennen und studierte schließlich Physik mit der Spezialisierung auf Elektronik.
        </p>
        <p>
Seit nunmehr 25 Jahren arbeite ich in der Software-Branche und habe dabei in verschiedenen Rollen und in verschiedenen Unternehmen erfolgreich neue Produkte an den Markt gebracht. Dabei war ich zunächst als Software Developer und Teamleiter aktiv, um dann auch Coaching Aufgaben wie Scrum Master und Agile Coach erfolgreich zu übernehmen.
        </p>
        <p>
Meine sehr schnelle Auffassungsgabe und mein Kommunikationstalent führten dazu, dass ich sowohl als Product Owner als auch Produktmanager tätig wurde. Diese Rollen sind meine Steckenpferde und ich konzentriere mich mehr und mehr ausschließlich auf sie.
				</p>
			`;
			break;
		case 'contact':
			contentDiv.innerHTML = 
				`<h2>Kontakt</h2> 
				<img src= "./me-14-bw.jpg" width="512">
				<p>
          Wolfgang Römer<br>
          wraromer@duck.com<br>

          Heidelberg
				</p>
        <!--
				<form> 
				<label for="name">Name:</label> 
				<input type="text" id="name" name="name" 
						placeholder="Your Name" required>
				<label for="email">Email:</label> 
				<input type="email" id="email" name="email" 
						placeholder="Your Email" required>
				<label for="message">Message:</label> 
				<textarea id="message" name="message" 
							placeholder="Your Message" 
							rows="4" required>
					</textarea>
				<button type="submit">Send Message</button> 
				</form>
        -->`;
			break;

		default:
			contentDiv.innerHTML = '<h2>Page not found!</h2>';
	}
}

