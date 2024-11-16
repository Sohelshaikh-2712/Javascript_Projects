"use strict";

// selecting all elements
const currentHours = document.querySelector('#currentHour');
const currentMinutes = document.querySelector('#currentMinute');
const currentSeconds = document.querySelector('#currentSecond');
const todaysDate = document.querySelector('#todaysDate');
const currentMonth = document.querySelector('#currentMonth');
const fullYear= document.querySelector('#FullYear');



// clock function for setting and updating valyes of times and dates
const Clock=()=>{

  // creating date object
const date = new Date();

// setting the daynamic values of time and date
currentHours.textContent = String(date.getHours()).padStart(2,'0');
currentMinutes.textContent = String(date.getMinutes()).padStart(2,'0');
currentSeconds.textContent = String(date.getSeconds()).padStart(2,'0');

todaysDate.textContent = String(date.getDate()).padStart(2,'0');
currentMonth.textContent = String(date.getMonth() +1).padStart(2,'0');
fullYear.textContent = date.getFullYear();


}

// setInterval function for updating values every second
setInterval(Clock, 1000);

// calling the clock function
Clock();