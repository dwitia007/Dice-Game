//setting image 1
var randomNumber1 = Math.floor(Math.random()*6+1);// create random nuymber 1-6

var diceImage1 = "dice" + randomNumber1 + ".png"; //creating dice number image
var imageDice1 = "images/" + diceImage1; //adding folder

var img1 = document.querySelectorAll("img")[0];// taking img1 as object
img1.setAttribute("src", imageDice1);//changing img1 attribute


//setting image 2
var randomNumber2 = Math.floor(Math.random()*6)+1;
var diceImage2 = "dice" + randomNumber2 + ".png";
var imageDice2 = "images/" + diceImage2;

var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",imageDice2);


//changing title 
var title = document.querySelector("h1");
if(randomNumber1 === randomNumber2)
{
    title.textContent = "Draw";
}
else if(randomNumber1 > randomNumber2)
{
    title.textContent = "Player 1 Wins!";
}
else{
    title.textContent = "Player 2 Wins!";
}