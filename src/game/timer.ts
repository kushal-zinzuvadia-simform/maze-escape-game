import { initializeGame } from "../main";
import { gameState } from "./gameState";

const timer = document.querySelector(".timer") as HTMLElement;

let time = gameState.time;

export function startTimer() {
    gameState.intervalId = setInterval(() => {
        if (time === 0) {
            alert("Time is up.");
            time = 50;
            time++;
            initializeGame();
            clearInterval(gameState.intervalId);
        }

        time--;
        timer.textContent = `Time left: ${time} secs`;
    }, 1000);
}
