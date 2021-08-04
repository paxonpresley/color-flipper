const colors = ["green", "red", "rgba(133,122,300)", "#f15025"]; // this is index and remember that it starts at 0
const btn = document.getElementById('btn'); // const color means declaring a constant value as something that can be used later on. the = links that word to another source. the document.getElementById('color') means that this is what i want the word 'color' to link to when it's refrenced
const color = document.querySelector('.color'); // why you use querySelector not getElementById: the querySelector returns the first element that matches a specified CSS selector(s) in the document. 
btn.addEventListener('click', function() { //the btn is that constant value. the rest of line 5 means that it will wait for a click. if the user clicks then it triggers a function to run... right below is where you set up the logic for the function
    const randomNumber = getRandomNumber(); //get random number between 0 - 3 colors[3]
    document.body.style.backgroundColor = colors[randomNumber]; // this styling is in js bc the color is going to change with every spin
    color.textContent = colors[randomNumber]; // textContent is the property that lets you change the text
});

function getRandomNumber() { // keyword:function  called:getRandomNumber
    return Math.floor(Math.random() * colors.length); // return:  Math:allows you to perform mathematical tasks on numbers. random():function that is used to return a pseudo-random number or random number within a range
} 