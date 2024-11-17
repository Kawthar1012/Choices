import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-two',
  templateUrl: './question-two.component.html',
  styleUrls: ['./question-two.component.css'],
})
export class QuestionTwoComponent {
  questionText = 'other question';

  constructor(private router: Router) { }

  
  onYes() {
    this.router.navigate(['/question1']); 
  }

  
  onNo() {
    this.router.navigate(['/question2']); 
  }
}

