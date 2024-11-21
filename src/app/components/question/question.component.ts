import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { pageAnimation } from '../../animations/page-animations'; 

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  animations: [pageAnimation]
})
export class QuestionComponent {

  constructor(private router: Router) { }

  navigate(direction: string): void {
    // This will add a dynamic URL parameter to track the direction, if needed.
    this.router.navigate(['/result'], { queryParams: { direction: direction } });
  }
}
