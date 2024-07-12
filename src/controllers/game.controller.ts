import { Request, Response } from 'express';
import { io } from '../app';


type GameState = string[][];

let gameState: GameState = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];


const initGame = (req: Request, res: Response): void => {
  res.json(gameState);
};

const makeMove = (req: Request, res: Response): void => {
  
};

const resetGame = (req: Request, res: Response): void => {
};

export { initGame, makeMove, resetGame };
