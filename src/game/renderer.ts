import { maze } from "./maze";
import { gameState } from "./gameState";

const grid = document.querySelector(".maze") as HTMLElement;

export function renderMaze() {
    grid.replaceChildren("");

    grid.style.gridTemplateColumns = `repeat(${maze[0].length}, 50px)`;

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
