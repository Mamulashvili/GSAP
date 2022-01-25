document.addEventListener('DOMContentLoaded', function () {

    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({
        ease: 'none',
        duration: 2,
    });

    const tl = gsap.timeline();

    tl
        .from('.section1', {
            yPercent: 100
        })
        .from('.section2', {
            xPercent: 100
        })
        .from('.section3', {
            xPercent: -100
        })

    ScrollTrigger.create({
        animation: tl,
        trigger: '#container',
        scrub: true, // Animates when scrolling
        pin: true,
    });


    gsap.to('.welcome-section h1', {
        y: '100vh',
        scrollTrigger: {
            markers: true,
            trigger: '.welcome-section',
            start: "top top", // start position, marker position
            end: "bottom 50%",

            // available options for toggleActions:
            // play, pause, resume, reverse,restart, reset, complete

            // 1 - when viewport is applied
            // 2 - animation is not ended but user scrolled down (animation paused)
            // 3 - resume paused animation when user scrolls up
            // 4 - when we scroll back to start
            toggleActions: 'start pause resume reset',
            scrub: 1, // Animation depends on scroll
        }
    })
})