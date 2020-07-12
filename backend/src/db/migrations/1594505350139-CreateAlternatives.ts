import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreteAlternatives1594505350139 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table ({
          name: 'alternatives',
          columns: [
            {
              name: 'id',
              type: 'integer',
              isPrimary: true,
              isGenerated: true,
              generationStrategy: 'increment',
            },
            {
              name: 'questionId',
              type: 'integer',
            },
            {
              name: 'alternative',
              type: 'varchar',
            },
            {
              name: 'createdAt',
              type: 'timestamp',
              default: 'now()',
            },
            {
              name: 'updatedAt',
              type: 'timestamp',
              default: 'now()',
            }
          ]
        })
      )
      await queryRunner.createForeignKey(
        'alternatives',
        new TableForeignKey({
          columnNames: ['questionId'],
          referencedColumnNames: ['id'],
          referencedTableName: 'questions',
          name: 'AlternativeQuestion',
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        })
      )
    };

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('alternatives', 'AlternativeQuestion');
      await queryRunner.dropTable('alternatives');
    }

}
