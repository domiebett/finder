import { trigger, state, style, animate, transition } from '@angular/animations';

export const foundFadeInOutAnimation = trigger('foundFadeInOut', [
    state('found', style({
        opacity: 1,
        transform: 'scaleX(1)',
        display: 'block',
    })),
    state('lost', style({
        opacity: 0,
        transform: 'scaleX(0)',
        display: 'none'
    })),
    transition('found => lost', animate('100ms ease-in')),
    transition('lost => found', animate('300ms ease-in'))
]);

export const lostFadeInOutAnimation = trigger('lostFadeInOut', [
    state('lost', style({
        opacity: 1,
        transform: 'scaleX(1)',
        display: 'block'
    })),
    state('found', style({
        opacity: 0,
        transform: 'scaleX(0)',
        display: 'none'
    })),
    transition('lost => found', animate('100ms ease-out')),
    transition('found => lost', animate('300ms ease-in'))
]);
