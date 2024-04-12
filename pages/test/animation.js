export function animate() {

    let firstdt = 100

    var timeline_ball = anime.timeline({
        targets: '#app svg:last-child #g41',
        easing: 'easeOutSine',
        loop: false
    })

    var timeline_circles = anime.timeline({
        targets: '#app svg:last-child #g1',
        easing: 'easeOutSine',
        loop: false
    })

    var timeline_sombra = anime.timeline({
        targets: '#app svg:last-child #sombra',
        easing: 'easeOutSine',
        loop: false
    })

    timeline_sombra.add({
        opacity: [
            { value: 0, duration: 0 },
            { value: .6, duration: 200, easing: 'easeInExpo' }
        ],
        scale: [
            { value: .2, duration: 0 },
            { value: 1, duration: 400, easing: 'spring(1, 60, 10, 0)' }
        ],
        translateX: [
            { value: 300, duration: 0 },
            { value: 0, duration: 400, easing: 'spring(1, 60, 10, 0)' }
        ],
        translateY: [
            { value: 300, duration: 0 },
            { value: 0, duration: 400, easing: 'spring(1, 60, 10, 0)' }
        ]
    })

    timeline_ball.add({
        scale: [
            { value: .2, duration: 0 },
            { value: 1, duration: 400, easing: 'spring(1, 60, 10, 0)' }
        ],
        translateX: [
            { value: 300, duration: 0 },
            { value: 0, duration: 400, easing: 'spring(1, 60, 10, 0)' }
        ],
        translateY: [
            { value: 300, duration: 0 },
            { value: 0, duration: 400, easing: 'spring(1, 60, 10, 0)' }
        ]
    })

    timeline_ball.add({
        translateY: [
            { value: 10, duration: firstdt },
        ],
    })

    timeline_ball.add({
        translateY: [
            { value: 4, duration: firstdt * 2 },
        ],
    })
    timeline_ball.add({
        translateY: [
            { value: 10, duration: firstdt / 4 * 2 },
        ],
    })

    timeline_ball.add({
        translateY: [
            { value: 4, duration: firstdt * 2 },
        ],
    })
    timeline_ball.add({
        translateY: [
            { value: 10, duration: firstdt / 4 * 2 },
        ],
    })

    timeline_circles.add({
        scaleY: [
            { value: .9, duration: firstdt },
        ],
        translateY: [
            { value: -15, duration: firstdt },
        ],
    })

    timeline_circles.add({
        scaleY: [
            { value: 1, duration: firstdt * 2 },
        ],
        translateY: [
            { value: 5, duration: firstdt * 2 },
        ],
    })

    timeline_circles.add({
        scaleY: [
            { value: 1, duration: firstdt * 2 },
        ],
        translateY: [
            { value: 0, duration: firstdt * 2 },
        ],
    })

    timeline_circles.add({
        scaleY: [
            { value: 1, duration: firstdt * 2 },
        ],
        translateY: [
            { value: 5, duration: firstdt * 2 },
        ],
    })

    timeline_circles.add({
        scaleY: [
            { value: 1, duration: firstdt * 2 },
        ],
        translateY: [
            { value: 0, duration: firstdt * 2 },
        ],
    })

    //segundas e terceiras bolas

    var penultimateChild = $('#app svg:last-child').prev();

    // Verifica se o penúltimo filho foi encontrado
    
        // Cria a timeline usando o penúltimo filho como alvo
        var timeline_ball2 = anime.timeline({
            targets: '#app svg:nth-child(2) #g41',
            easing: 'easeOutSine',
            loop: false
        });

        var timeline_all2 = anime.timeline({
            targets: '#app svg:nth-child(2)',
            easing: 'easeOutSine',
            loop: false
        });

        timeline_ball2.add({
            translateY: [
                { value: 10, duration: firstdt * 2 },
            ],
        })
        timeline_all2.add({
            scale: [
                { value: .6, duration: firstdt * 2 },
            ],
            translateX: [
                { value: '-5%', duration: 0},
                { value: '53%', duration: firstdt * 2 }//3
            ]
        }) 
    
        var timeline_ball3 = anime.timeline({
            targets: '#app svg:nth-child(1) #g41',
            easing: 'easeOutSine',
            loop: false
        });

        var timeline_all3 = anime.timeline({
            targets: '#app svg:nth-child(1)',
            easing: 'easeOutSine',
            loop: false
        });

        timeline_ball3.add({
            translateY: [
                { value: 10, duration: firstdt * 2 },
            ],
        })
        timeline_all3.add({
            scale: [
                { value: .5, duration: firstdt * 2 },
            ],
            translateX: [
                { value: '53%', duration: 0 },
                { value: '120%', duration: firstdt * 2 } //4
            ]
        })
    
    var timeline_ball4 = anime.timeline({
        targets: '#app svg:nth-child(3) #g41',
        easing: 'easeOutSine',
        loop: false
    });

    var timeline_all4 = anime.timeline({
        targets: '#app svg:nth-child(3)',
        easing: 'easeOutSine',
        loop: false
    });

    timeline_ball4.add({
        translateY: [
            { value: 10, duration: firstdt * 2 },
        ],
    })
    timeline_all4.add({
        scale: [
            { value: .7, duration: firstdt * 2 },
        ],
        translateX: [
            { value: '-50%', duration: 0 },
            { value: '-5%', duration: firstdt * 2 } //2
        ]
    })


    var timeline_allfirst = anime.timeline({
        targets: '#app svg:nth-child(4)',
        easing: 'easeOutSine',
        loop: false
    });

    timeline_allfirst.add({
        translateX: [
            { value: '-50%', duration: firstdt * 2 } // 1
        ]
    })
    
    
}