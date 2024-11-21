import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pageAnimation } from '../../animations/page-animations';  // Correct import path

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  animations: [pageAnimation]  // Add animation here
})
export class ResultComponent implements OnInit {
  direction: string = 'right';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.direction = params['direction'];  // Capture direction from query params
    });
  }
}
