export type Position = {
    row: number;
    col: number;
};

export interface GameState {
    player: Position;
    exit: Position;
    time: number;
    moves: number;
    firstInput: boolean;
    intervalId: number;
}

export let gameState: GameState = {
    player: {
        row: 0,
        col: 0
    },

    exit: {
        row: 3,
        col: 0
    },

    time: 50,
    moves: 0,
    firstInput: true,
    intervalId: 0
}