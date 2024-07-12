import { Request, Response } from 'express';
import { io } from '../app';


type GameState = string[][];

let gameState: GameState = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

const checkWinCondition = (gameState:any) => {}
const initGame = (req: Request, res: Response): void => {
  res.json(gameState);
};

const makeMove = (req: Request, res: Response): void => {
  const { row, col, player } = req.body;
  if (gameState[row][col] === '') {
    gameState[row][col] = player;
    const winner = checkWinCondition(gameState);
    io.emit('moveMade', { gameState, winner });
    res.json({ gameState, winner });
  } else {
    res.status(400).send('Invalid move');
  }
};

const resetGame = (req: Request, res: Response): void => {
};

export { initGame, makeMove, resetGame };
