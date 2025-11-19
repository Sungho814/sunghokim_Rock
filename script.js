const buttons = document.querySelectorAll("button");
const cpuText = document.getElementById("cpu");
const playerText = document.getElementById("player");
const finalResult = document.getElementById("final-result");

// 게임 규칙
const rules = {
  ROCK: ["SCISSORS", "LIZARD"],
  PAPER: ["ROCK", "SPOCK"],
  SCISSORS: ["PAPER", "LIZARD"],
  LIZARD: ["SPOCK", "PAPER"],
  SPOCK: ["SCISSORS", "ROCK"]
};

const choices = ["ROCK", "PAPER", "SCISSORS", "LIZARD", "SPOCK"];

// CPU 선택
function getCpuChoice() {
  const rand = Math.floor(Math.random() * choices.length);
  return choices[rand];
}

// 버튼 클릭 이벤트
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const playerChoice = btn.dataset.choice;
    const cpuChoice = getCpuChoice();

    playerText.textContent = "Player chose: " + playerChoice;
    cpuText.textContent = "CPU chose: " + cpuChoice;

    // 승부 판정
    if (playerChoice === cpuChoice) {
      finalResult.textContent = "DRAW!";
      finalResult.style.color = "gray";
    } else if (rules[playerChoice].includes(cpuChoice)) {
      finalResult.textContent = "YOU WIN!";
      finalResult.style.color = "green";
    } else {
      finalResult.textContent = "YOU LOSE!";
      finalResult.style.color = "red";
    }
  });
});
