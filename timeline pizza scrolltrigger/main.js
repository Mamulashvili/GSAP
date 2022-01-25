document.addEventListener('DOMContentLoaded', function () {

    gsap.defaults({
        duration: .5
    });

    const tl = gsap.timeline();

    tl
        .to('#p1', {
            y: -120,
        }, 0)
        .to('#p2', {
            y: -70,
        }, 0)
        .to('#p3', {
            y: -30,
        }, 0)
        .to('#p4', {
            y: 50,
        }, 0)
        .to('#p5', {
            y: 90,
        }, 0)
        .to('#p6', {
            y: 120,
        }, 0)

    ScrollTrigger.create({
        animation: tl,
        trigger: ".bd",
        start: "start start",
        end: "bottom bottom",
        markers: true,
        scrub: 1,
        pin: true,
    });

    // tl
    //     .from('img', {
    //         opacity: 0,
    //         scale: 1.2,
    //         // duration: 1,
    //         stagger: {
    //             each: 1,
    //             from: 'end',
    //         }
    //     })
    //     .from('#p6', { y: -180 }, 0)

    //     .from('#p5', { y: -180 }, "<")
    //     .to('#p5', { x: -5, y: -22, }, "<")

    //     .from('#p4', { y: -180 }, "<")
    //     .to('#p4', { x: -10, y: -22, }, "<")

    //     .from('#p3', { y: -180 }, 3)
    //     .to('#p3', { x: -24, y: -29, }, 3)

    //     .from('#p2', { y: -180 }, 4)
    //     .to('#p2', { x: -37, y: -31, }, 4)

    //     .from('#p1', { y: -180 }, 5)
    //     .to('#p1', { x: 0, y: -62, }, 5)

    //     .from('ul li', {
    //         opacity: 0,
    //         scale: .7,
    //         stagger: .3,
    //     })
})