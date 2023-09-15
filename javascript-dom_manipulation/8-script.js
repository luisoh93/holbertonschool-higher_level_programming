#!/usr/bin/node
/* task 8
 * Write a JavaScript script that fetches from
 * `https://fourtonfish.com/hellosalut/?lang=fr`
 * and displays the value of `hello` from that fetch
 * in the HTML element with id `hello`.
 *
 * - The translation of “hello” must be displayed
 *   in the HTML element with id `hello`
 * - Your script must work when it is
 *   imported from the `<head>` tag
 */

document.addEventListener('DOMContentLoaded', () => {
	const apiURL = ' https://hellosalut.stefanbohacek.dev/?lang=fr';
	const element = document.querySelector('#hello');

	fetch(apiURL)
		.then(response => response.json())
		.then(data => {
			element.textContent = data.hello;
	}).catch(err => console.log(err));
});
