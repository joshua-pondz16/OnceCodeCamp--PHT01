//Accessing Element using ID
var elementWithID = document.getElementById('student1');
elementWithID.textContent = 'Student 1 - Anna'


//Accessing Elements using Class
var elementWithClass = document.getElementsByClassName('section-A')
//Modifying class
for (var i = 0; i < elementWithClass.length; i++ ){
    var element = elementWithClass[i];
    element.textContent += '- Enrolled'
}


//Accessing Elements using Tag names
var styleElement = document.getElementsByTagName('span') [0];
styleElement.style.backgroundColor = 'lightblue';


//Accessing the first element
const firstElementChild = document.getElementById('parent').firstElementChild;
firstElementChild.textContent = 'Modified first child!'

const lastElementChild = document.getElementById('parent').lastElementChild;
lastElementChild.textContent = 'Modified last child!'


//Previous sibling
var child3 = document.getElementById('child3');
var PreviousSibling = child3.previousElementSibling;
PreviousSibling.style.backgroundColor = 'lightblue';


//Next Sibling
var child3 = document.getElementById('child3')
var NextSibling = child3.nextElementSibling;
NextSibling.style.backgroundColor = 'red';


//Adding Event Listener
var button = document.getElementById('button');
button.addEventListener('click', function(){
    var buttonDiv = document.getElementById('buttonDiv');
    buttonDiv.textContent = 'Hello World!'
    alert("Button Clicked!")
});

// Modifying element content
var modify = document.getElementById('modify');
modify.textContent = 'Content Modified';


//Appending new elements
var append = document.getElementById('append')
var newElement = document.createElement('div');
newElement.textContent = "Newly appended Element"
append.appendChild(newElement)


//Removing elements
const removeThis = document.getElementById('remove');
removeThis.remove();


//Updating element attribute
const image = document.getElementById('image');
image.setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/3688/3688129.png')


//Manipulating element styles
const style = document.getElementById('style')
style.style.backgroundColor = 'black';
style.style.color = 'white'

const mode = document.getElementById('mode');
mode.textContent = 'Dark mode'