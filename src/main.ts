import { setupControls } from "./game/input";
import { renderMaze } from "./game/renderer";
import { gameState } from "./game/gameState";
import { maze } from "./game/maze";

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
}
