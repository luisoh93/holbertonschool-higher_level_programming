#!/usr/bin/node
/* task 9
 * WWrite a JavaScript script that adds, removes and clears
 * `li` elements from a list when the user clicks:
 *
 * - The new element must be: `<li>Item</li>
 * - The new element must be added to the element with id `my_list
 * - When the user clicks on the element with id `add_item`:
 *   a new element is added to the list
 * - When the user clicks on the element with id `remove_item`:
 *   the last element is removed from the list
 * - When the user clicks on the element with id `clear_list`:
 *   all elements of the list are removed
 */

document.addEventListener('DOMContentLoaded', () => {
	const addItem = document.querySelector('#add_item');
	const removeItem = document.querySelector('#remove_item');
	const clearList = document.querySelector('#clear_list');
	const myList = document.querySelector('.my_list');

	addItem.addEventListener('click', () => {
		const liElement = document.createElement('li');
		liElement.textContent = 'Item';
		myList.append(liElement);
	});

	removeItem.addEventListener('click', () => {
		const liRemove = document.querySelector('.my_list li:last-child');
		liRemove.remove();
	});

	clearList.addEventListener('click', () => {
		const allLiElements = document.querySelectorAll('.my_list li');
		allLiElements.forEach(li => li.remove());
	});
});
