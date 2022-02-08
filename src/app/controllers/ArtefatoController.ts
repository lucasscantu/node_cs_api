import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Jogador from '../models/Jogador';
import Arma from '../models/Arma';
import Municao from '../models/Municao';
import Artefato from '../models/Artefato';
class ArtefatoController {
    async store(req: Request, res: Response) {

        const { type } = req.body;
        if (type == "Arma") {
            const repository = getRepository(Arma);
            const j = repository.create(req.body); //cria a entidade
            Jogador
            await repository.save(j); //persiste a entidade na tabela.

            return res.json(j);
        } else if (type == "Municao") {
            const repository = getRepository(Municao);
            const j = repository.create(req.body); //cria a entidade
            Jogador
            await repository.save(j); //persiste a entidade na tabela.

            return res.json(j);
        } else {
            return res.sendStatus(404);
        }
    }
    async update(req: Request, res: Response) {

        const { id, type } = req.body;
        if (id) {
            if (type == "Arma") {
                const repository = getRepository(Arma);
                const j = repository.create(req.body); //cria a entidade
                Jogador
                await repository.save(j); //persiste a entidade na tabela.
                return res.json(j);

            } else if (type == "Municao") {

                const repository = getRepository(Municao);

                const j = repository.create(req.body);
                Jogador

                await repository.save(j);
                return res.json(j);

            } else {

                return res.sendStatus(404);
            }
        } else {
            return res.sendStatus(404);
        }
    }
    async list(req: Request, res: Response) {
        const repository = getRepository(Artefato);
        const lista = await
            repository.createQueryBuilder('tb_artefato').getMany();
        return res.json(lista);
    }
} export default new ArtefatoController();