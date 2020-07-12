import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateAnswers1594506064815 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table ({
          name: 'answers',
          columns: [
            {
              name: 'questionId',
              type: 'integer',
              isPrimary: true,
            },
            {
              name: 'answer',
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
        'answers',
        new TableForeignKey({
          columnNames: ['questionId'],
          referencedColumnNames: ['id'],
          referencedTableName: 'questions',
          name: 'AnswerQuestion',
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        })
      )
    };

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('answers', 'AnswerQuestion');
      await queryRunner.dropTable('answers');
    }
}