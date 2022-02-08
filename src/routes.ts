import {Router} from 'express'
import JogadorController from './app/controllers/JogadorController'
import AuthController from './app/controllers/AuthController'
import EnderecoController from './app/controllers/EnderecoController'
import PatenteController from './app/controllers/PatenteController'
import CompraController from './app/controllers/CompraController'
import ArtefatoController from './app/controllers/ArtefatoController'
import PartidaController from './app/controllers/PartidaController'
import ObjetivoController from './app/controllers/ObjetivoController'
import RoundController from './app/controllers/RoundController'
import ResultadoController from './app/controllers/ResultadoController'
const router = Router();
router.post('/auth', AuthController.authenticate);
router.post('/jogador/store', JogadorController.store);
router.post('/jogador/update', JogadorController.update);
router.post('/jogador/delete', JogadorController.delete);
router.post('/jogador/list', JogadorController.list);
router.post('/endereco/store', EnderecoController.store);
router.post('/endereco/list', EnderecoController.list);
router.post('/patente/store', PatenteController.store);
router.post('/patente/list', PatenteController.list);
router.post('/patente/delete', PatenteController.delete);
router.post('/compra/store', CompraController.store);
router.post('/compra/list', CompraController.list);
router.post('/artefato/store', ArtefatoController.store);
router.post('/artefato/list', ArtefatoController.list);
router.post('/artefato/update', ArtefatoController.update);
router.post('/partida/store', PartidaController.store);
router.post('/partida/list', PartidaController.list);
router.post('/partida/delete', PartidaController.delete);
router.post('/objetivo/store', ObjetivoController.store);
router.post('/objetivo/list', ObjetivoController.list);
router.post('/round/store', RoundController.store);
router.post('/round/list', RoundController.list);
router.post('/round/delete', RoundController.delete);
router.post('/resultado/store', ResultadoController.store);
router.post('/resultado/list', ResultadoController.list);
router.post('/endereco/delete', EnderecoController.delete);
router.post('/endereco/find', EnderecoController.find);
export default router;