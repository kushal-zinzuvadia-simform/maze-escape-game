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

            if (cell === "W")
                tile.classList.add("wall");
            else
                tile.classList.add("path");

            if (gameState.player.row === rowIndex && gameState.player.col === columnIndex) {
                tile.textContent = "P";
                // tile.classList.add("player");
            }

            if (gameState.exit.row === rowIndex && gameState.exit.col === columnIndex) {
                tile.textContent = "E";
                tile.classList.add("exit");
            }

            grid.appendChild(tile);
        });
    });
}
