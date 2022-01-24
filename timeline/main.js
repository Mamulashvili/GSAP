document.addEventListener('DOMContentLoaded', function () {

    gsap.config({
        duration: .5
    })
    const tl = gsap.timeline();
    tl
        .from('img', {
            opacity: 0,
            scale: 1.2,
            duration: 1,
            stagger: {
                each: 1,
                from: 'end',
            }
        })
        .from('#p6', { y: -180 }, 0)

        .from('#p5', { y: -180 }, 1)
        .to('#p5', { x: -5, y: -22, }, 1)

        .from('#p4', { y: -180 }, 2)
        .to('#p4', { x: -10, y: -22, }, 2)

        .from('#p3', { y: -180 }, 3)
        .to('#p3', { x: -24, y: -29, }, 3)

        .from('#p2', { y: -180 }, 4)
        .to('#p2', { x: -37, y: -31, }, 4)

        .from('#p1', { y: -180 }, 5)
        .to('#p1', { x: 0, y: -62, }, 5)

})