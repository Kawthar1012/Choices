import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pageAnimation } from '../../animations/page-animations';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  animations: [pageAnimation]
})
export class ResultComponent implements OnInit {
  direction: string = "right";
  resultId: string | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Get the result ID from the route
    this.resultId = this.route.snapshot.paramMap.get('id');
    this.route.queryParams.subscribe(params => {
      this.direction = params['direction'];  // Capture direction from query params
    });
  }
}
