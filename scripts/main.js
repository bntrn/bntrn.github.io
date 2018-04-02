var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/TheSadStoryofHenry12.jpg') {
      myImage.setAttribute ('src','images/SecondAngryTrain.png');
    } else {
      myImage.setAttribute ('src','images/TheSadStoryofHenry12.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Hi ' + myName + ' - meet Grumpy Train';
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hi ' + storedName + ' - meet Grumpy Train';
}

myButton.onclick = function() {
  setUserName();
}
