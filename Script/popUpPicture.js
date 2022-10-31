/*
Inspiration and code from https://www.w3schools.com/howto/howto_css_modal_images.asp
*/
//take inspo from https://bqardi.dk/tutorials/js/image-popup/index.php
//Get the popup element from the div in the gallery html page
var popup = document.getElementById("myPopup");
//Get the images from the gallery html page
var img1 = document.getElementById("perEgil");
var img2 = document.getElementById("solveig");
var img3 = document.getElementById("monika");
var img4 = document.getElementById("jostein");
//Get the popup image from the div in the gallery html page
var popupImg = document.getElementById("img01");
//Get caption from popup div
var captionText = document.getElementById("caption");

//function that gives the pupup the correct style, image and caption
//the image is set to be the one you click on, and the caption is also taken
//from the alt attribute on the img you click on.
const stylePopup = function () {
  popup.style.display = "block";
  popupImg.src = this.src;
  captionText.innerHTML = this.alt;
};

//add onclick funtion to the image
img1.onclick = stylePopup;
img2.onclick = stylePopup;
img3.onclick = stylePopup;
img4.onclick = stylePopup;

// get the close button that is used for closing the window
var closeButton = document.getElementsByClassName("close")[0];

//Function that closes the popup when you click on the x button
closeButton.onclick = () => {
  popup.style.display = "none";
};
