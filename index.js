var randomNumber1=Math.floor((Math.random()*6))+1;  //Generate Random Number Between 1-6
var randomimageSource1="images/dice"+randomNumber1+".png";  //Generate Random Image Source
document.querySelectorAll("img")[0].setAttribute("src",randomimageSource1);   //Replace image source with random image Source  of Dice1

// Doing the same for Dice2
var randomNumber2=Math.floor((Math.random()*6))+1;  //Generate Random Number Between 1-6
var randomimageSource2="images/dice"+randomNumber2+".png";  //Generate Random Image Source
document.querySelectorAll("img")[1].setAttribute("src",randomimageSource2);

//Declare Results

//If Player1 Wins
if(randomNumber1>randomNumber2) {
  document.querySelector("h1").textContent="Player1 Wins!";
}
//if Player2 Wins
else if (randomNumber1<randomNumber2) {
    document.querySelector("h1").textContent="Player2 Wins!";
}
//If it is a Draw
else {
  document.querySelector("h1").textContent="Draw!";
}
