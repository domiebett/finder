import { trigger, state, style, animate, transition } from '@angular/animations';

export const foundSwitcherAnimation = trigger('foundSwitcher', [
    state('found', style({
        border: '1px solid transparent',
        borderBottom: '4px solid #28a745'
    })),
    state('lost', style({
        border: '1px solid  transparent',
        borderBottom: '1px solid #ddd'
    })),
    transition('found => lost', animate('100ms ease-out')),
    transition('lost => found', animate('100ms ease-in'))
]);

export const lostSwitcherAnimation = trigger('lostSwitcher', [
    state('lost', style({
        border: '1px solid transparent',
        borderBottom: '4px solid #28a745',
    })),
    state('found', style({
        border: '1px solid transparent',
        borderBottom: '1px solid #ddd'
    })),
    transition('found => lost', animate('100ms ease-in')),
    transition('lost => found', animate('100ms ease-out'))
]);
