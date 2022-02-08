import {
    Entity, Column, PrimaryColumn, ManyToMany, JoinTable,
    ChildEntity
} from 'typeorm';
import Artefato from './Artefato';
import Municao from './Municao';
import { Tipo } from './Tipo';
@ChildEntity()
export default class Arma extends Artefato {
    @Column()
    comprimento_cano: number;
    @Column({
        type: "enum",
        enum: Tipo,
    })
    tipo: Tipo;
    @ManyToMany(() => Municao)
    @JoinTable({
        name: "tb_arma_municao", joinColumn: {
            name: "arma_id",
            referencedColumnName: "id"
        }, inverseJoinColumn: {
            name: "municao_id",
            referencedColumnName: "id"
        }
    })
    municoes: Municao[];

}