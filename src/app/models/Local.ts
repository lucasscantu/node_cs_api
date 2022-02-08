import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import Mapa from "./Mapa";
import Objetivo from "./Objetivo";

@Entity('tb_local')
class Local{
    @PrimaryColumn('int')
    id: number;

    @Column('text')
    name: string;

    @Column("varchar")
    latitude: string;
    
    @Column("varchar")
    longitude: string;

    @ManyToOne(() => Mapa, map => map.locals)
    mapa: Mapa;

    @ManyToOne(() => Objetivo, Objetivo => Objetivo.id)
    Objetivo: Objetivo;
/*
    @ManyToOne(type => Map)
    @JoinColumn({name: "map_id", referencedColumnName: "id"})
    map: Map;

    @ManyToOne(type => Objetivo)
    @JoinColumn({name: "Objetivo_id", referencedColumnName: "id"})
    Objetivo: Objetivo;
    */
}
export default Local;