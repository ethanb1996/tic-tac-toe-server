import { io } from '../app';
import { Request, Response } from 'express';


type GameState = string[][];

let gameState: GameState = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

const checkWinCondition = (row:number,col: number, player:string) => {
  
  const checkRow = () =>{
    for (let i = 0; i < gameState[0].length; i++) {
      console.log(row,i, gameState[row][i])
      if (gameState[row][i] != player)
        return null
    }
    return player
  }
  const checkCol = () =>{
    for (let i = 0; i < gameState[0].length; i++) {
      if (gameState[i][col] != player)
        return null
    }
    return player;
  }
  const checkDiag = () =>{
    for (let i = 0; i < gameState[0].length; i++) {
      if (gameState[i][i] != player)
        return null
    }
    return player;
  }
  const checkAntiDiag = () =>{
    for (let i = 0; i < gameState[0].length; i++) {
      if (gameState[i][gameState[0].length - 1 - i] != player)
      return null
    }
    return player;
  }

  return [checkRow(),checkCol(),checkDiag(),checkAntiDiag()].some(val => val === player)? player: null
}
const initGame = (req: Request, res: Response): void => {
  res.json(gameState);
};

const makeMove = (req: Request, res: Response): void => {
  const { row,col, player } = req.body;
  if (gameState[row][col] === '') {
    gameState[row][col] = player;
    const winner = checkWinCondition(row,col,player);
    io.emit('moveMade', { gameState, winner });
  } else {
    res.status(400).send('Invalid move');
  }
};

const resetGame = (req: Request, res: Response): void => {
  gameState = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  io.emit('initGame', gameState);
};

export { initGame, makeMove, resetGame };
