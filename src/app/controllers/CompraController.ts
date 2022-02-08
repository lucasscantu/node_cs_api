import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Compra from '../models/Compra';
class CompraController {

    async list(req: Request, res: Response) {
        const repository = getRepository(Compra);
        const lista = await repository.find();
        return res.json(lista);
    }

    async store(req: Request, res: Response) {
        const repository = getRepository(Compra);
        const j = repository.create(req.body);
        await repository.save(j);
        return res.json(j);
    }
} export default new CompraController();