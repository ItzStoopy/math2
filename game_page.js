player_1=localStorage.getItem("text1");
player_2=localStorage.getItem("text2");

score_1=0;
score_2=0;

document.getElementById("corner1").innerHTML=player_1 + " = ";
document.getElementById("corner2").innerHTML=player_2 + " = ";
document.getElementById("score_1").innerHTML=score_1 ;
document.getElementById("score_2").innerHTML=score_2 ;
document.getElementById("question").innerHTML= "Equation = " + player_1 ; 
document.getElementById("answer").innerHTML= "Answer = " + player_2 ; 