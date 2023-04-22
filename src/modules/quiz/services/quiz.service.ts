import { Injectable } from '@nestjs/common';

@Injectable()
export class QuizService {
    public getQuizzes() : number[] {
        return [1, 2, 3, 4];
    }
}
