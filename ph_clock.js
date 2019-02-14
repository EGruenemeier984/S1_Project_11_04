"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 4

   Countdown Clock for Ticket Ordering
   Author: Ethan Gruenemeier
   Date: 2.13.19

   Filename:   ph_clock.js     

*/

/* ------------------------------------------------- */
// set variables for mins, secs and the time left.
var minsLeft = 30;
var secsLeft = 0;
var timeLeft = minsLeft * 60 + secsLeft;
// This sets the CountDown function to run evrey second.
var clockID = setInterval("countDown()", 1000);
/* This function sets the minsLeft var to timeLeft divided by 60 
also sets the secsLeft var to timeLeft - 60 * the minsLeft variable.
then establishes two new vars that are set to the addleadingzero function with
the minsLeft and secsLeft as the parameters.
Then sets the text content of the minutes and seconds ID equal to the minsString 
and secsString variables.
calls the checkTimer function then decreases timeleft by one.
*/
function countDown() {
    minsLeft = Math.floor(timeLeft / 60);
    secsLeft = timeLeft - 60 * minsLeft;
    var minsString = addLeadingZero(minsLeft);
    var secsString = addLeadingZero(secsLeft);
    document.getElementById("minutes").textContent = minsString;
    document.getElementById("seconds").textContent = secsString;
    checkTimer();
    timeLeft--;
}
/*
This function just inserts an elment adjacent to the element ID of TimeHead before the end of the tag.
*/
function stopClock() {
    document.getElementById("TimeHead").insertAdjacentElement("beforeend", `<br /> (Order Expired),`);
    clearInterval();
}

/* The checkTimer() function tests whether there is any time left to make the
   ticket order. If the time left is 0, the stopClock() function is run;
   otherwise nothing happens and the program continues to run. */

function checkTimer() {
    if (timeLeft === 0) stopClock();
}


/* The addLeadingZero() function adds a leading zero to values which are less than 10 */

function addLeadingZero(num) {
    var numStr = (num < 10) ? ("0" + num) : "" + num;
    return numStr;
}