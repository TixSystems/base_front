export function animate() {

    console.log('hello')
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
}