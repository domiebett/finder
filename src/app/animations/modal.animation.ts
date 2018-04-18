import { trigger, state, style, animate, transition } from '@angular/animations';

export const modalSlideInOut = trigger('slideInOut', [
    state('none', style({
        opacity: 0,
        display: 'none',
        left: '100vw'
    })),
    state('*', style({
        opacity: 1,
        display: 'block',
        right: '0'
    })),
    transition('none => *', animate('500ms ease-in')),
    transition('* => none', animate('500ms ease-out')),
    transition('none => login', animate('500ms ease-in')),
    transition('none => register', animate('500ms ease-in')),
    transition('none => addItem', animate('500ms ease-in')),
]);

export const modalFadeInOut = trigger('fadeInOut', [
    state('none', style({
        opacity: 0,
        display: 'none',
    })),
    state('*', style({
        opacity: 1,
        display: 'block'
    })),
    transition('none => *', animate('200ms ease-in')),
    transition('* => none', animate('200ms ease-out')),
    transition('none => login', animate('200ms ease-in')),
    transition('none => register', animate('200ms ease-in')),
    transition('none => addItem', animate('200ms ease-in')),
]);
