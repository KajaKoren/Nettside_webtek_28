/*Inspiration from https://stackoverflow.com/questions/23671407/restrict-future-dates-in-html5-date-input*/

//Getting the element where we are supposed to add a min Data
let dateInput = document.getElementById("dateInput");

//Getting the date, year, month and day
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();

//If month is under 10 we need to put a 0 in front of it to get correct input on minDate. The same goes for day.
if (month < 10) {
  month = "0" + month.toString();
} else if (day < 10) {
  day = "0" + day.toString();
}
//Setting the string together
let minDate = year + "-" + month + "-" + day;

//Setting the min attribute
dateInput.setAttribute("min", minDate);
