		{const myImages = [{
		title: "coupe",
		description: "Blue Coupe",
		width: 400,
		pathURL: "assets/images/coupe.jpg",
		linkURL: "https://en.wikipedia.org/wiki/Ferrari",
		credit: "grahamejennkins",
		creditURL: "https://unsplash.com/@grahamejenkins",
		}, {
		title: "Blue Volkswagen",
		description: "Blue Volkswagen ",
		width: 400,
		pathURL: "assets/images/bluevolkswagen.jpg",
		linkURL: "https://en.wikipedia.org/wiki/Volkswagen",
		credit: "daoud_abismail",
		creditURL: "https://unsplash.com/@daoud_abismail",
		}, {
		title: "mustang",
		description: "Silver Mustang",
		width: 400,
		pathURL: "assets/images/mustang.jpg",
		linkURL: "https://en.wikipedia.org/wiki/Ford_Mustang",
		credit: "behzad95",
		creditURL: "https://unsplash.com/@behzad95",
		}, {
		title: "Porsche",
		description:  "Sweet looking porsche",
		width: 400,
		pathURL: "assets/images/porsche.jpg",
		linkURL: "https://en.wikipedia.org/wiki/Porsche",
		credit: "wesselhampsink",
		creditURL: "https://unsplash.com/@wesselhampsink",
		}, {
		title: " Shelby Mustang",
		description: "Black Shelby mustang",
		width: 400,
		pathURL: "assets/images/blackshelby.jpg",
		linkURL: "https://en.wikipedia.org/wiki/Shelby_Mustang",
		credit: "joeyabanks",
		creditURL: "https://unsplash.com/@joeyabanks",
		}, {
		title: " beetle",
		description: "Brown Volkswagen Beetle ",
		width: 400,
		pathURL: "assets/images/volkswagen.jpg",
		linkURL: "https://en.wikipedia.org/wiki/Volkswagen_Beetle",
		credit: "danielcgold",
		creditURL: "https://unsplash.com/@danielcgold",
		}, {
		title:  "ferrari",
		description: "yellow ferrari ",
		width: 400,
		pathURL: "assets/images/Ferrari.jpg",
		linkURL: "https://en.wikipedia.org/wiki/Ferrari",
		credit: "gohrhyyan",
		creditURL: "https://unsplash.com/@gohrhyyan",
		}, {
		title: "Gmc PickupTruck",
		description: "Red Gmc PickupTruck ",
		width: 400,
		pathURL: "assets/images/GmcTruck.jpg",
		linkURL: "https://unsplash.com/photos/O8I7Cm74MJw",
		credit: "churchoftodd",
		creditURL: "https://unsplash.com/@churchoftodd",
		}, {
		title: "Tesla",
		description: "White Tesla parked beside a mountain ",
		width: 400,
		pathURL: "assets/images/tesla.jpg",
		linkURL: "https://en.wikipedia.org/wiki/Bald_eagle",
		credit: "grantritchie",
		creditURL: "https://unsplash.com/@charliedeets",
		}, ]
		// For loop that generates the gallery.
		//used querySelector to to return the first element
		// to a specific css selector. 
		const container = document.querySelector('.container');

		for (let i = 1; i < myImages.length; i++) {

		// Creating the figure That grabs my images.
		//nested with one element {my Images}.

		const figure = document.createElement('figure');
		figure.style.maxWidth = `${myImages[i].width}px`;
		container.appendChild(figure);

		// Title for each image.
		// This was what we just learned. 
		//this allows me to creat a new div.
		//behind the scenes instead of in the html
		const title = document.createElement('h2');
		title.innerText = `${myImages[i].title}`;
		figure.appendChild(title);

		// Creating the link for the images.
		//Div (a)created 

		const figLink = document.createElement('a');
		figLink.href = `${myImages[i].linkURL}`;
		figLink.target = "_blank";
		figure.appendChild(figLink);

		// Creating image and links
		//Div (img)created 

		const figLinkImg = document.createElement('img');
		figLinkImg.src = `${myImages[i].pathURL}`;
		figLinkImg.alt = `${myImages[i].description}`;
		figLink.appendChild(figLinkImg);

		// Adding fig caption with the credits.
		//Div (Figcaption) created 

		const figCap = document.createElement('figcaption');
		figure.appendChild(figCap);

		//Div (a)created. Fig, Figcaption (a)
		
		const figCapLink = document.createElement('a');
		figCapLink.href = `${myImages[i].creditURL}`;
		figCapLink.target = "_blank";
		figCapLink.innerText = `Photo by: ${myImages[i].credit}`;
		figCap.appendChild(figCapLink);
		}}
		