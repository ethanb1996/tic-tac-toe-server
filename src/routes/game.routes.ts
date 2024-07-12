import { Router } from 'express';
import { initGame, makeMove, resetGame } from '../controllers/game.controller';

const gameRoutes = Router();

gameRoutes.get('/init', initGame);

export { gameRoutes };