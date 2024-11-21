import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private direction: string = 'Left'; // Default transition direction

  setDirection(dir: string) {
    this.direction = dir;
  }

  getDirection(): string {
    return this.direction;
  }
}
