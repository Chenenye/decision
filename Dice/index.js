// 1st Die Functionality
// Generating random number:range (1-6)
const randomNum1 = Math.floor(Math.random()*6) +1;

// Using the generated random number to cycle through the dice by the number in the image file name
const diceImg1 = "images/dice" + randomNum1 + ".png";

// Getting the 1st die image tag by index then setting attribute to source and changing it's behvior to perform variable diceImg1 instructions
document.querySelectorAll("img")[0].setAttribute("src", diceImg1);



// 2nd Die Functionality
// Generating random number:range (1-6)
const randomNum2 = Math.floor(Math.random()*6) +1;

// Using the generated random number to cycle through the dice by the number in the image file name
const diceImg2 = "images/dice" + randomNum2 + ".png";

// Getting the 2nd die image tag by index then setting attribute to source and changing it's behvior to perform variable diceImg2 instructions
document.querySelectorAll("img")[1].setAttribute("src", diceImg2);


// Output text for highest number
// If/Else Statement that targets empty h2 tag and inputs desired text
if(randomNum1 > randomNum2) {
  document.querySelector("h2").innerHTML = "Kiddo # 1 gets to choose! Choose well young Padawan!";
} else if (randomNum2 > randomNum1) {
  document.querySelector("h2").innerHTML = "Kiddo # 2 gets to choose! Don't choke on on your abmition!";
} else {
  document.querySelector("h2").innerHTML = "Mom gets to choose! As IF!";
}





