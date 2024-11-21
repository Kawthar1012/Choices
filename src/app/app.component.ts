import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimations', [
      transition('isLeft <=> isRight', [
        style({ position: 'relative', overflow: 'hidden' }),
        animate('0.5s ease', style({ transform: 'translateX(0)' })),
      ]),
      transition('isTop <=> isBottom', [
        style({ position: 'relative', overflow: 'hidden' }),
        animate('0.5s ease', style({ transform: 'translateY(0)' })),
      ])
    ]),
  ]
})
export class AppComponent {
  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}
