export interface GameState {
    player: Position;
    exit: Position;
}

export type Position = {
    row: number;
    col: number;
};

export let gameState: GameState = {
    player: {
        row: 0,
        col: 0
    },

    exit: {
        row: 3,
        col: 0
    }
}
