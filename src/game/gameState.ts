export interface GameState {
    player: Position;
    exit: Position;
}

export type Position = {
    row: number;
    col: number;
};

export const gameState: GameState = {
    player: {
        row: 0,
        col: 0
    },

    exit: {
        row: 4,
        col: 0
    }
}
