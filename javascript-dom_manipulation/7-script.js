#!/usr/bin/node
/* task 7
 * Write a JavaScript script that fetches and
 * lists the `title` for all movies by using
 * this URL: `https://swapi-api.hbtn.io/api/films/?format=json`
 *
 * - All movie titles must be list in the HTML
 *   `ul` element with id `list_movies`
 */

const requestURL = 'https://swapi-api.hbtn.io/api/films/?format=json';
const ulElement = document.querySelector('ul#list_movies');

fetch(requestURL)
	.then(
		response => response.json()
	)
	.then(data => {
		for (const movie of data.results) {
			const liElement = document.createElement('li');
			liElement.textContent = movie.title;
			ulElement.append(liElement);
		}
	})
	.catch(err => console.log(err));
