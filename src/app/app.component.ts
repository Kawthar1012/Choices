import { trigger, transition, style, animate, query } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

export const slideInAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    query(':enter, :leave', [
      style({ position: 'absolute', width: '100%' })
    ], { optional: true }),
    query(':enter', [
      style({ transform: 'translateX(100%)', opacity: 0 })
    ], { optional: true }),
    query(':leave', [
      animate('600ms ease', style({ transform: 'translateX(-100%)', opacity: 0 }))
    ], { optional: true }),
    query(':enter', [
      animate('600ms ease', style({ transform: 'translateX(0%)', opacity: 1 }))
    ], { optional: true })
  ])
]);


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  /*standalone: true,*/
  animations: [slideInAnimation]// Attach the animation here
})
export class AppComponent {
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
