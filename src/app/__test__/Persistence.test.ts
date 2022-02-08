import { app, setup } from "../../index";
import { afterAll, describe, expect, test, beforeAll } from "@jest/globals";
import supertest, { agent } from "supertest";
import { getConnection } from "typeorm";


//vetor de ID's:
let allId = new Array()

const gerarIds = () => {
    allId = []
    for (let i = 0; i < 100; i++) {
        allId.push(i)
    }
}

//Aqui retornaremos o ID aleatório do vetor allID:

const createId = () => {
    let aleat = Math.floor(allId.length * Math.random())
    const id = allId[aleat]
    allId.splice(aleat, 1)
    return id
}
const createCEP = () => {
    let newCep = ""
    for (let i = 0; i < 8; i++) {
        newCep += Math.floor(10 * Math.random())
    } return newCep
}
const createComp = () => {
    return "Apt. " + Math.floor(Math.random() * 100)
}
const endereco = new Array()

//Aqui vamos adicionar ao vetor allID valores de 0 até 99:

gerarIds()


//Cria endereços aleatórios:
for (let i = 0; i < 5; i++) {
    endereco.push({
        id: createId(),
        cep: createCEP(),
        complemento: createComp()
    })
}

//Aqui temos os vetores de jogadores e patentes que iremos adicionar/remover do Banco de dados:
const players = [
    { nickname: "PigKiller", senha: "aiaiaiuiuiui", pontos: 999, endereco_id:"" },
    { nickname: "Bereta", senha: "gaucho", pontos: 69, endereco_id:""},
    { nickname: "20Matar_70Correr", senha: "warwar", pontos: 143, endereco_id:""}
]; const patentes = [
    { id: 1, nome: "ferro", cor: "ferro" },
    { id: 2, nome: "prata", cor: "prata" },
    { id: 3, nome: "ouro", cor: "ouro" },
    { id: 4, nome: "platina", cor: "platina" },
    { id: 5, nome: "diamante", cor: "diamante" }
]

describe("Testes de persistência", () => {
    beforeAll(async () => {
        await setup()
    });
    afterAll(async () => {
        await getConnection().close()
        console.log("Conexão finalizada!")
    });

    //aqui vamos fazer uma função para retornar todos os endereços,jogadores e patentes que serão listados em um console.log():
    it('Mostrar todas as tabelas', async () => {
        var agent = supertest(app)
        const j = await agent.post('/jogador/list')
        console.log("Jogadores:\n", j.body)
        const e = await agent.post('/endereco/list')
        console.log("Endereços:\n", e.body)
        const p = await agent.post('/patente/list')
        console.log("Patentes:\n", p.body)
    })

    //Aqui iremos adicionar endereços para o banco de dados para assim adicionar jogadores, pois é necessario o ID de um endereço:
    it('Adicionar itens', async () => {
        var agent = supertest(app)
        for (let E of endereco) {
            await agent.post('/endereco/store').send(E)
        }
    })

    // PARTE PRINCIPAL DO TRABALHO
    it('Adicionar ou remover jogadores e patentes (mostrar se tiver)', async () => {
        //Aqui vamos retornar de dentro do banco de dados os jogadores e patentes armazenados:
        var agent = supertest(app)
        const listaJ = await agent.post('/jogador/list')
        const listaP = await agent.post('/patente/list')
        const J = listaJ.body
        const P = listaP.body
        //Caso não haja jogadores ou patentes eles serão adicionados pelos respectivos vetores:
        if (J.length == 0 && P.length == 0) {
            let E = await agent.post('/endereco/list')
            console.log("Não há jogadores e patentes armazenados. Vão ser inseridos " + players.length + " jogadores e " + patentes.length + " patentes!")
            for (let P of players) {
                const newP = P
                const idEnd = Math.floor(E.body.length*Math.random())
                newP.endereco_id = E.body[idEnd].id 
                E.body.splice(idEnd, 1)
                await agent.post('/jogador/store').send(newP)
            }
            for (let P of patentes) {
                await agent.post('/patente/store').send(P)
            } 
        }
        else {
            console.log("Jogadores:\n", J)
            console.log("Patentes:\n", P)
            for (let j of J) {
                await agent.post('/jogador/delete').send({ nickname: j.nickname })
            }
            for (let p of P) {
                await agent.post('/patente/delete').send({ id: p.id })
            }
        }
    })
});