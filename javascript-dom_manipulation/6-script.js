#!/usr/bin/node
/* task 6
 * Write a JavaScript script that fetches the character `name`
 * from this URL: `https://swapi-api.hbtn.io/api/people/5/?format=json`
 *
 * - The name must be displayed in the HTML tag with id `character`.
 */

const starWarsCharacter = document.querySelector('#character');

fetch('https://swapi-api.hbtn.io/api/people/5/?format=json')
	.then(response => response.json())
	.then(data => {
		starWarsCharacter.textContent = data.name;
	})
	.catch(err => console.error(err));
