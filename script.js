//player one random num generator & setAttribute

let randomNum1 = Math.floor(Math.random() * 6 + 1);
let randomDiceImg = "images/dice" + randomNum1 + ".png";

let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImg);

//player two random num generator & setAttribute

let randomNum2 = Math.floor(Math.random() * 6 + 1);
let randomDiceImg2 = "images/dice" + randomNum2 + ".png";
let image2 = document.querySelectorAll("img")[1].setAttribute("src", randomDiceImg2);

// condition winner & if draw

if (randomNum1 > randomNum2) {
    document.querySelector("h1").innerHTML = " 🏁 Player 1 Wins!";
}else if (randomNum1 < randomNum2) {
    document.querySelector("h1").innerHTML = " Player 2 Wins! 🏁 "
}else {
    document.querySelector("h1").innerHTML = " 🏳️ it's  a  draw 🏳️ "
}



 