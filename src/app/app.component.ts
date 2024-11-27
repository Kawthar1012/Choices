import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { pageAnimation } from './animations/page-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [pageAnimation],
})
export class AppComponent {
  getRouterOutletState(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
