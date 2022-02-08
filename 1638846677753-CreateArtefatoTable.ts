import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateArtefatoTable1638846677753 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'tb_artefato',
            columns: [
                {
                    name: 'id',
                    type: 'serial',
                    isPrimary: true
                },
                {
                    name: 'nome',
                    type: 'varchar(100)',
                    isNullable: false
                },
                {
                    name: 'peso',
                    type: 'numeric(7,2)',
                    isNullable: true,
                    default: 0
                },
                {
                    name: 'valor',
                    type: 'numeric(7,2)',
                    isNullable: true,
                    default: 0
                },
                {
                    name: 'explosiva',
                    type: 'boolean',
                    isNullable: true,
                },
                {
                    name: 'calibre',
                    type: 'text',
                    isNullable: true
                },
                {
                    name: 'comprimento_cano',
                    type: 'numeric(7,2)',
                    isNullable: true
                },
                {
                    name: 'tipo',
                    type: 'text',
                    isNullable: true
                },
                {
                    name: 'type',
                    type: 'varchar',
                    isNullable: true
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tb_artefato'); 
    }

}
