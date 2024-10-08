# Server info:
IP: 34.233.139.189

URL: http://cs260-profile.click/

## Commands to access
cd ~

ssh -i [file path to keys, format of ~/keys/production.pem] ubuntu@34.233.139.189


## Deploy commands

cd ~/source/repos/CS_BYU/simon-html


Simon:
./deployFiles.sh -k <yourpemkey> -h cs260-profile.click -s simon

Startup:
 cd C:/Users/blaze/source/repos/CS_BYU/startup

 ./deployFiles.sh -k <yourpemkey> -h cs260-profile.click -s startup


## startup notes

Random html tags:
`<center>`: deprecated, but used for formatting in the center when you have no css like me!
`<button>`: For button like elements. Useful for placeholders

html startup notes:
* Helpful to clear cache when editing icons

CSS startup notes:
Bootstrap docs: https://getbootstrap.com/docs/5.2/getting-started/introduction/

Demo codepen: https://codepen.io/leesjensen/pen/JjZavjW

Tag to use bootstrap:  `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">`



## Class notes


### JS

Arrays:
* push	Add an item to the end of the array	a.push(4)
* pop	Remove an item from the end of the array	x = a.pop()
* slice	Return a sub-array	a.slice(1,-1)
* sort	Run a function to sort an array in place	a.sort((a,b) => b-a)
  * The function sorts by if it's negative, it goes earlier. Positive goes later.
* values	Creates an iterator for use with a for of loop	for (i of a.values()) {...}
* find	Find the first item satisfied by a test function	a.find(i => i < 2)
* forEach	Run a function on each array item	a.forEach(console.log)
* reduce	Run a function to reduce each array item to a single item	a.reduce((a, c) => a + c)
* map	Run a function to map an array to a new array	a.map(i => i+i)
* filter	Run a function to remove items	a.filter(i => i%2)
* every	Run a function to test if all items match	a.every(i => i < 3)
* some	Run a function to test if any items match	a.some(i => i < 1)


DOM:
* Accessed with the `document` global variable
* `document.querySelectorAll` uses a css selector as a filter
* textContent contains the text of the element
* use `appendChild` to add to the dom

* Example use:

```js
function displayElement(el) {
  console.log(el.tagName);
  for (const child of el.children) {
    displayElement(child);
  }
}

displayElement(document);
```


Event listeners:
Let's you make things interactive!

Ex:
```js
const submitDataEl = document.querySelector('#submitData');
submitDataEl.addEventListener('click', function (event) {
  console.log(event.type);
});
```
Listener types: 
* Clipboard	Cut, copied, pasted
* Focus	An element gets focus
* Keyboard	Keys are pressed
* Mouse	Click events
* Text selection	When text is selected
