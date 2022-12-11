let resultFinal = document.getElementById("result");
let [computer_score, user_score] = [0,0];




function checker (input) {

let choices = ["rock", "paper", "scissors"];
let num = Math.floor(Math.random() * 3);
let pc_choice = choices[num];

  document.getElementById("pc_choice").innerHTML = `PC choose <span> ${choices[num].toUpperCase()}</span>`;
  document.getElementById("user_choice").innerHTML = `You choose <span> ${input.toUpperCase()}</span>`;
  

   if(pc_choice === input) {
    document.getElementById("result").innerText = "Draw";
    resultFinal.style.cssText = "background-color : blue; color:antiquewhite";
   } else if (pc_choice === choices[0] && input === choices[1]) {
    document.getElementById("result").innerText = "You Win";
    resultFinal.style.cssText = "background-color : green; color:antiquewhite";
    user_score++;
   } else if (pc_choice === choices[0] && input === choices[2]) {
    document.getElementById("result").innerText = "PC Win";
    resultFinal.style.cssText = "background-color : red; color:antiquewhite";
    computer_score++;
   } else if (pc_choice === choices[1] && input === choices[0]) {
    document.getElementById("result").innerText = "PC Win";
    resultFinal.style.cssText = "background-color : red; color:antiquewhite";
    computer_score++;
   } else if (pc_choice === choices[1] && input === choices[2]) {
    document.getElementById("result").innerText = "You Win";
    resultFinal.style.cssText = "background-color : green; color:antiquewhite";
    user_score++;
   } else if (pc_choice === choices[2] && input === choices[0]) {
    document.getElementById("result").innerText = "You Win";
    resultFinal.style.cssText = "background-color : green; color:antiquewhite";
    user_score++;
   } else if (pc_choice === choices[2] && input === choices[1]) {
    document.getElementById("result").innerText = "PC Win";
    resultFinal.style.cssText = "background-color : red; color:antiquewhite";
    computer_score++;
   }
   
   document.getElementById("pc_score").innerHTML = computer_score;
   document.getElementById("user_score").innerHTML = user_score;



  }


checker()
