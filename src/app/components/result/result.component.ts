import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pageAnimation } from '../../animations/page-animations';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  animations: [pageAnimation]
})
export class ResultComponent implements OnInit {
  direction: string = "right";
  resultId: string | null = null;
  questionId: string | null = null;
  previousQuestion: any;
  questions: any;

  constructor(private route: ActivatedRoute, private questionService: QuestionService) { }


  ngOnInit(): void {
    this.resultId = this.route.snapshot.paramMap.get('id');  
    this.route.queryParams.subscribe(params => {
      this.direction = params['direction'];
      this.questionId = params['questionId'];
    });
    this.questionService.getQuestions().subscribe((data: any) => {
      this.questions = data;
      this.previousQuestion = this.questions.find((q: { id: string; }) => q.id === this.questionId);
    });
  }
}
