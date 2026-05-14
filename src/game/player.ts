import { gameState } from "./gameState";
import { maze } from "./maze";
import { renderMaze } from "./renderer";
import { initializeGame } from "../main";

export function movePlayer(x: number, y: number) {
    const newRow = gameState.player.row + x;
    const newColumn = gameState.player.col + y;

    if (newRow < 0 || newRow >= maze[0].length || newColumn < 0 || newColumn >= maze.length) {
        return;
    }

    if (maze[newRow][newColumn] === "W") {
        return;
    }

    gameState.player.row = newRow;
    gameState.player.col = newColumn;

    renderMaze();
    checkWin();
}

function checkWin() {
    if (gameState.player.row === gameState.exit.row && gameState.player.col === gameState.exit.col) {
        setTimeout(() => alert("You win!"), 200);
        setTimeout(initializeGame, 1000);
    }
}
