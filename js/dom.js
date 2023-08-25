// we get all tag from HTML elements by use getElementsByTagName
const tags = document.getElementsByTagName('section')
// console.log(tags);
// or
const tag = document.getElementsByTagName('h1');
// console.log(tag);

// we get all id element from HTML elements by use getElementById
const titles = document.getElementById('titles');
// console.log(items.innerText);
const item = document.getElementById('item-one');
// console.log(item.innerText='item5');
const itemStyle = item.style.color='blue';
// console.log(itemStyle);
const itemStyle2 = item.style.fontSize='2rem';

// we get all className elements from HTML elements by use getElementsByClassName
const ul = document.getElementsByClassName('item-list');
// console.log(ul);
const liItem = document.createElement('li');
// console.log(li);
liItem.innerText='item7';
console.log(liItem);
ul.appendChild(liItem);
console.log(ul);
// ata vol hocce



