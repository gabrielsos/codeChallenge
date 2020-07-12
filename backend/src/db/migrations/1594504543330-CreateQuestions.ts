import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreteQuestions1594504543330 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'questions',
          columns: [
            {
              name: 'id',
              type: 'integer',
              isPrimary: true,
              isGenerated: true,
              generationStrategy: 'increment',
            },
            {
              name: 'question',
              type: 'varchar',
              length: '500'
            },
            {
              name: 'image',
              type: 'varchar',
              isNullable: true,
            },
            {
              name: 'createdAt',
              type: 'timestamp',
              default: 'now()'
            },
            {
              name: 'updatedAt',
              type: 'timestamp',
              default: 'now()'
            }
          ]
        })
      )
    };

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('questions');
    }

}
