import { maze } from "./maze";
import { gameState } from "./gameState";

const grid = document.querySelector(".maze") as HTMLElement;
const moves = document.querySelector(".moves") as HTMLElement;
const timer = document.querySelector(".timer") as HTMLElement;

export function renderMaze() {
    grid.replaceChildren("");
    const mazeRow = maze[0] as string[];

    grid.style.gridTemplateColumns = `repeat(${mazeRow.length}, 50px)`;

    maze.forEach((row, rowIndex) => {
        row.forEach((cell, columnIndex) => {
            const tile = document.createElement("div");
            tile.classList.add("cell");

            if (cell === "W") {
                tile.classList.add("wall");
            }

            if (cell === ".") {
                tile.classList.add("path");
            }

            if (cell === "E") {
                tile.classList.add("exit");
            }

            if (gameState.player.row === rowIndex && gameState.player.col === columnIndex) {
                tile.textContent = "P";
            }

            grid.appendChild(tile);
        });
    });
}

export function updateMoves() {
    moves.textContent = `Moves: ${gameState.moves}`;
}

export function updateTimer() {
    timer.textContent = `Time left: ${gameState.time} secs`;
}