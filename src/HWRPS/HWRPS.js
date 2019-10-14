import React from "react";
//import ReactDOM from "react-dom";
//import "./RPS.html";
import "./RPSstyle.css";

var message = "m";
var result_div = document.getElementById("result");

function RockPaperScissors() {
  var random = 0;
  var rock = "Rock";
  var paper = "Paper";
  var scis = "Scissor";
  var player = "nothing";
  //var cont = "no";
  var comChoice = "nothing";
  //  var message = "m";
  //var game = true;

  //function Comp()
  //{
  random = Math.floor(Math.random() * 3 + 1); //random num b/t 1 and 3
  if (random === 1) {
    comChoice = rock;
  } else if (random === 2) {
    comChoice = paper;
  } else if (random === 3) {
    comChoice = scis;
  } else {
    comChoice = "something went wrong";
  }
  //}

  player = prompt("Rock, Paper, or Scissor?", "nothing");

  //player = "Paper"
  //function vs()
  //{
  if (player === rock && comChoice === paper) {
    message = player + " vs " + comChoice + " comp wins"; //comp wins
  } else if (player === rock && comChoice === scis) {
    message = player + " vs " + comChoice + " player wins"; //player wins
  } else if (player === scis && comChoice === rock) {
    message = player + " vs " + comChoice + " comp wins"; //comp wins
  } else if (player === scis && comChoice === paper) {
    message = player + " vs " + comChoice + " player wins"; //player wins
  } else if (player === paper && comChoice === scis) {
    message = player + " vs " + comChoice + " comp wins"; //comp wins
  } else if (player === paper && comChoice === rock) {
    message = player + " vs " + comChoice + " player wins"; //player wins
  } else if (player === comChoice) {
    message = player + " vs " + comChoice + " Tie"; //Tie
  } else {
    message = "something is incorrect"; //
  }
  //}

  //result_div = player + " vs " + comChoice + " "+ message;
  //result_div.innerHTML = message;
  //return (result_div = message);
  render(){
    return(<div className="body"></div>);
  }
}
 
export default RockPaperScissors;
/*class HWRPS {
  render() {
    return (
      <div className="HWRPS">
        
      </div>
    )
  }
}
RockPaperScissors();
const rootElement = document.getElementById("root");
ReactDOM.render(<RockPaperScissors />, rootElement);*/
