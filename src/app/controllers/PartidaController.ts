import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Partida from '../models/Partida';
class PartidaController {
    async list(req: Request, res: Response) {
        const repository = getRepository(Partida);
        const lista = await repository.find();
        return res.json(lista);
    }
    async store(req: Request, res: Response) {
        const repository = getRepository(Partida);
        const j = repository.create(req.body);
        await repository.save(j);
        console.log("Partida adicionada com sucesso! ", j)
        return res.json(j);
    }
    async delete(req: Request, res: Response) {
        const repository = getRepository(Partida);
        const ID = req.body.id
        const idExists = await repository.findOne({ "id": ID })
        if (idExists) {
            await repository.remove(idExists);
            console.log("Partida deletada com sucesso! Id: " + ID)
            return res.sendStatus(204); //---> No content
        } else {
            console.log("Partida não encontrada na tabela!")
            return res.sendStatus(404); //---> Not found
        }
    }
} export default new PartidaController();