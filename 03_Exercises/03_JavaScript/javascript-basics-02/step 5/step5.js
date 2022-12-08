
let image1 = document.querySelector("#image1") 
let image2 = document.querySelector("#image2") 
let image3 = document.querySelector("#image3") 
let image4 = document.querySelector("#image4") 
let image5 = document.querySelector("#image5") 
const image = [image1, image2, image3, image4, image5];
const value = ['./images/image1_2.jpg', './images/image2_2.jpg', './images/image3_2.jpg', './images/image4_2.jpg', './images/image5_2.jpg']
for (let i = 0; 4; i++){
image[i].addEventListener("mouseover", function() {
    image[i].src = value[i]
})};
  