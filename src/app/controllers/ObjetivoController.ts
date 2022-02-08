import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Objetivo from '../models/Objetivo';
class ObjetivoController {
    async list(req: Request, res: Response) {
        const repository = getRepository(Objetivo);
        const lista = await repository.find();
        return res.json(lista);
    }
    async store(req: Request, res: Response) {
        const repository = getRepository(Objetivo);
        const j = repository.create(req.body);
        await repository.save(j);
        console.log("Objetivo adicionado com sucesso! ", j)
        return res.json(j);
    }
} export default new ObjetivoController();