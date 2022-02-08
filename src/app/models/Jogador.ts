import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import Endereco from './Endereco';
import Patente from './Patente';
import Compra from './Compra';
import Artefato from "./Artefato"
@Entity('tb_jogador')
class Jogador {

    @PrimaryColumn('text')
    nickname: string;

    @Column('text')
    senha: string;

    @Column('int')
    pontos: number

    @ManyToOne(type => Endereco)
    @JoinColumn({ name: "endereco_id", referencedColumnName: "id" })
    endereco_id: Endereco

    @ManyToMany(() => Patente)
    @JoinTable({
        name: "tb_jogador_patente", joinColumn: {
            name: "jogador_nickname", referencedColumnName: "nickname"
        }, inverseJoinColumn: {
            name: "patente_id", referencedColumnName: "id"
        }
    })
    patentes: Patente[];

    @ManyToMany(() => Artefato)
    @JoinTable({
        name: "tb_jogador_artefato", joinColumn: {
            name: "jogador_nickname", referencedColumnName: "nickname"
        }, inverseJoinColumn: {
            name: "artefato_id", referencedColumnName: "id"
        }
    })
    artefatos: Artefato[]

    @OneToMany(() => Compra, compra => compra.jogador)
    compras: Compra[];
}
export default Jogador;