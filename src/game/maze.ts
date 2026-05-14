export const maze = [
    ["S", ".", ".", "W", ".", ".", "W", ".", "W", "."],
    ["W", "W", ".", "W", ".", "W", "W", ".", "W", "."],
    [".", "W", ".", ".", ".", ".", "W", ".", ".", "."],
    [".", "W", "W", "W", "W", ".", "W", "W", "W", "."],
    [".", "W", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "W", ".", "W", "W", ".", "W", "W"],
    ["W", "W", ".", "W", ".", ".", "W", ".", "W", "."],
    [".", "W", ".", ".", ".", ".", "W", ".", ".", "."],
    [".", "W", "W", "W", ".", "W", "W", "W", "W", "."],
    [".", ".", ".", "W", ".", ".", "W", ".", "W", "E"],
    // [".", "W", ".", ".", ".", ".", "W", ".", ".", "E"]
];

// const randomInt = (min: number, max: number) => {
//     return Math.floor(min + (Math.random() * (max - min)));
// }

// export const maze = generateMaze(11);

// function generateMaze(size: number) {
//     let maze = [];

//     for (let i = 0; i < size; i++) {
//         let row = [];
//         for (let i = 0; i < size; i++) {
//             row.push(".");
//         }

//         maze.push(row);
//     }

//     console.log(maze);

//     console.log(randomInt(0, size));

//     for (let i = 0; i < size; i += randomInt(0, size / 3)) {
//         for(let i =0; i<m)
//     }

//     return maze;
// }
