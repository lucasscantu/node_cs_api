import { Entity, Column, PrimaryColumn, ManyToMany, JoinTable } from "typeorm";
import Local from "./Local";

@Entity('tb_mapa')
class Mapa {
    @PrimaryColumn('int')
    id: number;

    @Column('text')
    name: string;

    //@OneToMany(() => Local, local => local.mapa)
    //locals: Local[];

    @ManyToMany(() => Local)
    @JoinTable({
        name: "tb_mapa_local", joinColumn: {
            name: "mapa_id", referencedColumnName: "id"
        }, inverseJoinColumn: {
            name: "local_id", referencedColumnName: "id"
        }
    })
    locals: Local[]
}
export default Mapa;