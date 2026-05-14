import { setupControls } from "./game/input";
import { renderMaze, updateMoves, updateTimer } from "./game/renderer";
import { gameState } from "./game/gameState";
import { maze } from "./game/maze";

const restart = document.querySelector(".restart-btn") as HTMLElement;

restart.addEventListener("click", () => {
  gameState.moves = 0;
  updateMoves();

  gameState.time = 50;
  clearInterval(gameState.intervalId);
  updateTimer();

  gameState.firstInput = true;
  initializeGame();
});

export function initializeGame() {
  initializeState();
  renderMaze();
}

initializeGame();
setupControls();

function initializeState() {
  maze.forEach((row, rowIndex) => {
    row.forEach((cell, columnIndex) => {
      if (cell === "S") {
        gameState.player.row = rowIndex;
        gameState.player.col = columnIndex;
      }

      if (cell === "E") {
        gameState.exit.row = rowIndex;
        gameState.exit.col = columnIndex;
      }
    });
  });

  gameState.firstInput = true;
  gameState.moves = 0;
  updateMoves();
  gameState.time = 50;
  updateTimer();
}
