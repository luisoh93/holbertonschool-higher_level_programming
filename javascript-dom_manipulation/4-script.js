#!/usr/bin/node
/* task 4
 * Write a JavaScript script that adds a `li` element
 * to a list when the user clicks on the element with id `add_item`:
 *
 * The new element must be: `<li>Item</li>`
 * The new element must be added to the `ul`
 * element with class `my_list`
 */

const addItem = document.querySelector('#add_item');
const ul = document.querySelector('ul.my_list');

addItem.addEventListener('click', () => {
	const li = document.createElement('li');
	li.textContent = 'Item';
	ul.appendChild(li);
});
