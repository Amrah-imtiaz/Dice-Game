var n1 = Math.floor( Math.random() *6)+1;
var diceimg1 = "dice"+n1+".png";
var srcdice = "images/" + diceimg1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",srcdice);

var n2 = Math.floor( Math.random() *6)+1;
var diceimg2 = "dice"+n2+".png";
var srcdice2 = "images/" + diceimg2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",srcdice2);

if(n1>n2){

document.querySelector("h1").innerHTML = "Player One Wins";

}

else if(n2>n1){

document.querySelector("h1").innerHTML="Player Two Wins";
    
}