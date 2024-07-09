window.onload = function(){
    var randomNumber1 = Math.random()*5 + 1;
    randomNumber1 = Math.round(randomNumber1);

    var randomNumber2 = Math.random()*5 + 1;
    randomNumber2 = Math.round(randomNumber2);

    var img1 = "../images/dice"+randomNumber1+".png";
    var img2 = "../images/dice"+randomNumber2+".png";

    document.querySelector(".dice1").setAttribute("src", img1);
    document.querySelector(".dice2").setAttribute("src", img2);

    if(randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML ="&#128681 Player 1 wins!"
    }
    else if(randomNumber1 < randomNumber2){
         document.querySelector("h1").innerHTML ="Player 2 wins! &#128681 "
    }
    else{
        document.querySelector("h1").innerHTML = "It's a Draw.."
    }
}