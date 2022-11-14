/*
Inspiration and code from https://www.w3schools.com/howto/howto_css_modal_images.asp & https://bqardi.dk/tutorials/js/image-popup/index.php
*/

//Get the popup element from the div in the gallery html page
var popup = document.getElementById("myPopup");

//Get the popup image from the div in the gallery html page
var popupImg = document.getElementById("img01");

//Get caption from popup div
var captionText = document.getElementById("caption");

//Get all images with class popupImage
let images = document.querySelectorAll(".popupImage");

//function that gives the pupup the correct style, image and caption
//the image is set to be the one you click on, and the caption is also taken
//from the alt attribute on the img you click on.

images.forEach((image) => {
  image.addEventListener("click", function () {
    popup.style.display = "block"; //Display the popup;
    captionText.innerHTML = this.alt; //Set the popup title text to the same as the thumbnails alt text;
    popupImg.src = this.src; //Set the popup image src to the same as the thumbnail src;
  });
});

// get the close button that is used for closing the window
var closeButton = document.getElementsByClassName("close")[0];

//Function that closes the popup when you click on the x button
closeButton.onclick = () => {
  popup.style.display = "none";
};
