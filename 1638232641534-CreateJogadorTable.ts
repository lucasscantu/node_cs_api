import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateJogadorTable1638232641534 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'tb_jogador',
            columns: [
            {
                name: 'nickname',
                type: 'varchar(10)',
                isPrimary: true
            },
            {
                name: 'senha',
                type: 'varchar(5)'
            },
            {
                name: 'pontos',
                type: 'int',
                default: 0
            },
            {
                name: 'data_cadastro',
                type: 'date',
                default: 'now()'
            },
            {
                name: 'data_ultimo_login',
                type: 'timestamp'
            }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tb_jogador');
    }

}
