
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Jogador from '../models/Jogador';
import Endereco from '../models/Endereco';
class JogadorController {

    async delete(req: Request, res: Response) {
        const repository = getRepository(Jogador);
        const ID = req.body.nickname;
        const idExists = await repository.findOne({ where: { nickname: ID } });

        if (idExists) {
            await repository.remove(idExists);
            console.log("Jogador removido com sucesso ", req.body)
            return res.sendStatus(204);
        } else {
            return res.sendStatus(404);
        }
    }

    async store(req: Request, res: Response) {

        const repository = getRepository(Jogador);
        const j = repository.create(req.body);
        await repository.save(j);
        console.log("Jogador adicionado com sucesso! ", j)
        return res.json(j);
   
    }
    async update(req: Request, res: Response) {

        const repository = getRepository(Jogador);
        const { nickname, endereco } = req.body;
        const nicknameExists = await repository.findOne({
            where: { nickname }
        });
        const enderecoExists = await
            getRepository(Endereco).findOne({ where: { "id": endereco.id } });
        if (!endereco || !nicknameExists || !enderecoExists) {
            return res.sendStatus(404);
        }
        const j = repository.create(req.body);
        await repository.save(j);
        return res.json(j);
    }
   
    async list(req: Request, res: Response) {
      
        const repository = getRepository(Jogador);
        const lista = await repository.find();
        return res.json(lista);
    }
} export default new JogadorController();
