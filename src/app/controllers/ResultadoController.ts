import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Resultado from '../models/Resultado';
class ResultadoController {
    async list(req: Request, res: Response) {
        const repository = getRepository(Resultado);
        const lista = await repository.find();
        console.log(lista);
        return res.json(lista);
    }
    async store(req: Request, res: Response) {
        const repository = getRepository(Resultado);
        const j = repository.create(req.body);
        console.log(j);
        await repository.save(j);
        return res.json(j);
    }
} export default new ResultadoController();