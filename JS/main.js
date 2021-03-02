			"use strict"
			{		const  myImages = [{
			title: "Xbox Controller",
			description: "White Xbox Controller",
			width: 400,
			pathURL: "assets/images/Xbox.jpg",
			linkURL: "https://en.wikipedia.org/wiki/Nintendo",
			credit: "@lppoitras",
			creditURL: "https://unsplash.com/@lppoitras",
		}, {

			title: "nintendo controller",
			description: "Nintendo Controller ",
			width: 400,
			pathURL: "assets/images/nintendo.jpg",
			linkURL: "https://en.wikipedia.org/wiki/Nintendo",
			credit: "@helloimnik",
			creditURL: "hhttps://unsplash.com/@helloimnik",
		}, {
			title: "Pinball",
			description: "Pinball machine",
			width: 400,
			pathURL: "assets/images/Pinball.jpg",
			linkURL: "https://en.wikipedia.org/wiki/Pinball",
			credit: "@sickhews",
			creditURL: "https://unsplash.com/@sickhews",
			}, {
			title: "Ps5",
			description:  "White ps5",
			width: 400,
			pathURL: "assets/images/ps5.jpg",
			linkURL: "https://en.wikipedia.org/wiki/PlayStation_5",
			credit: "@cortes",
			creditURL: "https://unsplash.com/@cortes",
			}, {
			title: " 2DS",
			description: "White 2ds",
			width: 400,
			pathURL: "assets/images/2ds.jpg",
			linkURL: "https://en.wikipedia.org/wiki/Nintendo_2DS",
			credit: "@dmjdenises",
			creditURL: "https://unsplash.com/@dmjdenise",
			}, {
			title: " Switch",
			description: "Nintendo Switch ",
			width: 400,
			pathURL: "assets/images/switch.jpg",
			linkURL: "https://en.wikipedia.org/wiki/Nintendo_Switch",
			credit: "@sigmund",
			creditURL: "https://unsplash.com/@sigmund",
			}, {
			title:  "Gameboy",
			description: "Clear Gameboy ",
			width: 400,
			pathURL: "assets/images/Gameboy.jpg",
			linkURL: "https://en.wikipedia.org/wiki/Game_Boy",
			credit: "@spen",
			creditURL: "https://unsplash.com/@spen",
			}, {
			title: "Nintendo Family console",
			description: "Family consol ",
			width: 400,
			pathURL: "assets/images/family.jpg",
				linkURL: "https://en.wikipedia.org/wiki/Famicom_Disk_System",
			credit: "@possessedphotography",
			creditURL: "https://unsplash.com/@possessedphotography",
			}, 
			{
			title: "N64",
			description: "N54 controller ",
			width: 400,
			pathURL: "assets/images/N64.jpg",
			linkURL: "https://en.wikipedia.org/wiki/Bald_eagle",
			credit: "@jawfox_photography",
			creditURL: "https://unsplash.com/@jawfox_photography",
			} ];
			// For loop that generates the gallery.
			//used querySelector to to return the first element
			// to a specific css selector. 
			const container = document.querySelector('.container');

			for (let i = 0; i < myImages.length ; i++) {

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
			