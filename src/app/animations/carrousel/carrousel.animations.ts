import { animate, query, state, style, transition, trigger } from "@angular/animations";

export const CarrouselAnimations = trigger('changeVisualizacion', [
    state('visible', style({
        transform: 'translateX(0%)',
        opacity: 1
    })),
    state('nonVisible', style({
        transform: 'translateX(-100%)',
        opacity: 0,
        display: 'none'
    })),
    transition('visible => nonVisible', [
        animate('5s ease-in')
    ]),
    transition('nonVisible => visible', [
        style({position: 'relative'}),
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                left: 0
            })
        ]),
        animate('5s ease-out')
    ])
])