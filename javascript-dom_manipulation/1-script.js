#!/usr/bin/node
/* task 1
 * Write a JavaScript script that updates the text color
 * of the `header` element to red (`#FF0000`)
 * when the user clicks on the tag with id `red_header`
 */

const header = document.querySelector('header');

const redHeader = document.querySelector('#red_header');
redHeader.addEventListener('click', () => {
	header.style.color = '#FF0000';
});
