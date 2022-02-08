import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Round from '../models/Round';
class RoundController {
    async list(req: Request, res: Response) {
        const repository = getRepository(Round);
        const lista = await repository.find();
        return res.json(lista);
    }
    async store(req: Request, res: Response) {
        const repository = getRepository(Round);
        const j = repository.create(req.body);
        await repository.save(j);
        console.log("Round adicionado com sucesso! ", j)
        return res.json(j);
    }
    async delete(req: Request, res: Response) {
        const repository = getRepository(Round);
        const ID = req.body.id
        const idExists = await repository.findOne({ "id": ID })
        if (idExists) {
            await repository.remove(idExists);
            console.log("Round deletado com sucesso! Id: " + ID)
            return res.sendStatus(204); //---> No content
        } else {
            console.log("Round não encontrado na tabela!")
            return res.sendStatus(404); //---> Not found
        }
    }
} export default new RoundController();