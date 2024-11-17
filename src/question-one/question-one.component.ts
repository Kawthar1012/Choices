import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-one',
  templateUrl: './question-one.component.html',
  styleUrls: ['./question-one.component.css']
  /*standalone: true*/
})
export class QuestionOneComponent {
  questionText = 'Is rent less than $2000?';

  constructor(private router: Router) { }

  
  onYes() {
    this.router.navigate(['/question2']); 
  }

  
  onNo() {
    this.router.navigate(['/question1']); 
  }
}

