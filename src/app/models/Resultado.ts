import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { ResultadoID } from "./ResultadoID";
import { Status } from './Status';
import Round from './Round';
import Objetivo from './Objetivo';
@Entity('tb_resultado')
export default class Resultado {
    @Column(() => ResultadoID)
    id: ResultadoID;
    @Column({
        type: "enum",
        enum: Status,
    })
    status: Status;
}