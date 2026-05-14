import { gameState } from "./gameState";
import { maze } from "./maze";
import { renderMaze, updateMoves, updateTimer } from "./renderer";
import { initializeGame } from "../main";
import { startTimer } from "./timer";

export function movePlayer(x: number, y: number) {
    const newRow = gameState.player.row + x;
    const newColumn = gameState.player.col + y;

    const mazeRow = maze[0] as string[];

    if (newRow < 0 || newRow >= mazeRow.length || newColumn < 0 || newColumn >= maze.length) {
        return;
    }

    if (maze[newRow]?.[newColumn] === "W") {
        return;
    }

    if (gameState.firstInput) {
        startTimer();
        gameState.firstInput = false;
    }

    gameState.moves++;
    updateMoves();

    gameState.player.row = newRow;
    gameState.player.col = newColumn;

    renderMaze();
    checkWin();
}

function checkWin() {
    if (gameState.player.row === gameState.exit.row && gameState.player.col === gameState.exit.col) {
        setTimeout(() => alert("You win!"), 200);
        setTimeout(initializeGame, 100);

        gameState.moves = 0;
        updateMoves();
        gameState.time = 50;
        updateTimer();
        gameState.firstInput = true;
    }
}
