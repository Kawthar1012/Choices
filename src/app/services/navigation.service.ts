import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private direction: string = 'Left'; 

  setDirection(dir: string) {
    this.direction = dir;
  }

  getDirection(): string {
    return this.direction;
  }
}
