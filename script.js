const buttons = document.querySelectorAll("button");
const cpuText = document.getElementById("cpu");
const playerText = document.getElementById("player");
const finalResult = document.getElementById("final-result");

// 점수 변수
let wins = 0;
let losses = 0;
let draws = 0;

// DOM 요소
const winsText = document.getElementById("wins");
const lossesText = document.getElementById("losses");
const drawsText = document.getElementById("draws");
const winrateText = document.getElementById("winrate");

// 승률 계산 함수
function updateStats() {
  let total = wins + losses + draws;
  let rate = total > 0 ? ((wins / total) * 100).toFixed(1) : 0;
  winrateText.textContent = `Win Rate: ${rate}%`;
}

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
      draws++;
    } else if (rules[playerChoice].includes(cpuChoice)) {
      finalResult.textContent = "YOU WIN!";
      finalResult.style.color = "green";
      wins++;
    } else {
      finalResult.textContent = "YOU LOSE!";
      finalResult.style.color = "red";
      losses++;
    }

    // 점수판 업데이트
    winsText.textContent = `Wins: ${wins}`;
    lossesText.textContent = `Losses: ${losses}`;
    drawsText.textContent = `Draws: ${draws}`;
    updateStats();
  });
});