import { Router } from 'express';
import { initGame, makeMove, resetGame } from '../controllers/game.controller';

const gameRoutes = Router();

gameRoutes.get('/init', initGame);
gameRoutes.post('/move', makeMove);
gameRoutes.post('/reset', resetGame);

export { gameRoutes };