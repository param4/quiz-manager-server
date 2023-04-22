import { Controller, Get } from '@nestjs/common';
import { QuizService } from '../services/quiz.service';

@Controller('quiz')
export class QuizController {
    constructor (private quizService: QuizService) {}

    @Get() 
    public async getQuiz() : Promise<number[]> {
        return this.quizService.getQuizzes();
    }
}
