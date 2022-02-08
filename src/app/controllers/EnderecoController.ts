import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Endereco from '../models/Endereco';
class EnderecoController {

    async list(req: Request, res: Response) {
        const repository = getRepository(Endereco);
        const lista = await repository.find();
        return res.json(lista);
    }

    async store(req: Request, res: Response) {

        const repository = getRepository(Endereco);
        const j = repository.create(req.body);
        await repository.save(j);
        console.log("Endereço adicionado com sucesso! ", j)
        return res.json(j);
    }

    async delete(req: Request, res: Response) {
        try {
            const repository = getRepository(Endereco);
            const { id } = req.body;
            const end = await repository.findOne({ where: { "id": id } });
            if (end) {
                await repository.remove(end);
                return res.sendStatus(204);
            } else {
                return res.sendStatus(404);
            }
        } catch (e: unknown) {
            console.log(e);
            return res.sendStatus(500);
        }
    }
    
    async find(req: Request, res: Response) {
        const repository = getRepository(Endereco);
        const { cep } = req.body;
        const end = await repository.findOne({ where: { cep } });
        if (end) {
            return res.json(end);
        } else {
            return res.sendStatus(404);
        }
    }
} export default new EnderecoController();