import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import Alternative from './db/models/alternativeModel';
import Question from './db/models/questionModel';
import Answer from './db/models/answerModel';

@Injectable()
class RepoService {
  public constructor(
    @InjectRepository(Question) public readonly questionRepo: Repository<Question>,
    @InjectRepository(Alternative) public readonly alternativeRepo: Repository<Alternative>,
    @InjectRepository(Answer) public readonly answerRepo: Repository<Answer>,
  ) {}
}

export default RepoService;