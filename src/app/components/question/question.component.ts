import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../../services/question.service';
import { pageAnimation } from '../../animations/page-animations';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  animations: [pageAnimation]
})
export class QuestionComponent implements OnInit {
  direction: string = "right";
  questions: any;
  question: any;
  previousQuestion: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private questionService: QuestionService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.direction = params['direction'];  
    });
    const questionId = this.route.snapshot.paramMap.get('id');
    this.loadQuestion(questionId);
  }

  loadQuestion(questionId: string | null): void {
    this.questionService.getQuestions().subscribe((data) => {
      this.questions = data;
      this.question = this.questions[0]; 
    });
  }

  onOptionClick(nextId: string, dir: string): void {
    this.previousQuestion = this.question;
    this.direction = dir;
    const nextQuestion = this.questions.find((q: { id: string; }) => q.id === nextId);

    if (nextId.startsWith('result')) {
      this.router.navigate(['/result/' + nextId], { queryParams: { direction: dir, questionId: this.route.snapshot.paramMap.get('id') } });
    } else {
      this.question = nextQuestion;
      setTimeout(() => {        
        this.previousQuestion = null; 
        this.router.navigate(['/question/' + nextId], { queryParams: { direction: dir } });
      }, 1000);
    }
  }
}
