import { movePlayer } from "./player";

let firstInput = true;

export function resetFirstInput() {
    firstInput = true;
}

export function setupControls() {
    window.addEventListener("keydown", (e: KeyboardEvent) => {
        switch (e.key.toLowerCase()) {
            case "arrowup":
            case "w":
                movePlayer(-1, 0);
                break;

            case "arrowdown":
            case "s":
                movePlayer(1, 0);
                break;

            case "arrowleft":
            case "a":
                movePlayer(0, -1);
                break;

            case "arrowright":
            case "d":
                movePlayer(0, 1);
                break;
        }
    });
}
