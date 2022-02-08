import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Patente from '../models/Patente';
class PatenteController {

    async list(req: Request, res: Response) {
        const repository = getRepository(Patente);
        const lista = await repository.find();
        return res.json(lista);
    }

    async store(req: Request, res: Response) {

        const repository = getRepository(Patente);
        const j = repository.create(req.body);
        await repository.save(j);
        console.log("patente adicionada com sucesso ", req.body)
        return res.json(j);
    }
    async delete(req: Request, res: Response) {
        const repository = getRepository(Patente);
        const ID = req.body.id;
        const idExists = await repository.findOne({ where: { id: ID } });

        if (idExists) {
            await repository.remove(idExists);
            console.log("patente removida com sucesso ", req.body)
            return res.sendStatus(204);
        } else {
            return res.sendStatus(404);
        }
    }

} export default new PatenteController();