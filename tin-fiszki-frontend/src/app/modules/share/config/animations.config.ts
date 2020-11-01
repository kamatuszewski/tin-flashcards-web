import { animate, style, transition, trigger } from '@angular/animations';

export const FadeAnimations = [
  trigger('fadeAnimation', [
    transition(':enter', [
      style({opacity: 0}),
      animate(500)
    ]),
    transition(':leave', [
      style({opacity: 1}),
      animate(0)
    ])
  ])
];
