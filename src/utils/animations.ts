import { trigger, state, style, transition, animate } from '@angular/animations';

export const fadeInOut = (time:any) => trigger('fadeInOut', [
  state('void', style({
    opacity: 0
  })),
  transition('void <=> *', animate(time  + ' ease-in-out'))
]);

