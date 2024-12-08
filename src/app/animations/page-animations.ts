import { trigger, transition, style, animate, state } from '@angular/animations';

export const pageAnimation = trigger('pageAnimation', [
  transition('* => right', [
    style({ transform: 'translateX(100%)' }),
    animate('0.5s ease-out', style({ transform: 'translateX(0)' }))
  ]),
  transition('* => left', [
    style({ transform: 'translateX(-100%)' }),
    animate('0.5s ease-out', style({ transform: 'translateX(0)' }))
  ]),
  transition('* => bottom', [
    style({ transform: 'translateY(100%)' }),
    animate('0.5s ease-out', style({ transform: 'translateY(0)' }))
  ]),
  transition('* => top', [
    style({ transform: 'translateY(-100%)' }),
    animate('0.5s ease-out', style({ transform: 'translateY(0)' }))
  ])
]);
