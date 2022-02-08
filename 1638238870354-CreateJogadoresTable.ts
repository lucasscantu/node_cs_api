import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateJogadoresTable1638238870354 implements MigrationInterface {

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
                    type: 'timestamp',
                    isNullable: true
                },
                {
                    name: 'endereco_id',
                    type: 'int',
                    isNullable: false
                }
            ]
        }))
        await queryRunner.createForeignKey(
            'tb_jogador',
            new TableForeignKey({
                name: 'fk_jogador_endereco',
                columnNames: ['endereco_id'],
                referencedTableName: 'tb_endereco',
                referencedColumnNames: ['id']
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('tb_jogador', "fk_jogador_endereco")
        await queryRunner.dropTable('tb_jogador')
    }

}
