document.addEventListener('DOMContentLoaded', function () {

    gsap.defaults({
        duration: .5
    });

    gsap.to('.container span', {
        width: '100%',
        ease: 'none',
        scrollTrigger: {
            markers: true,
            trigger: '.container',
            pin: true,
            start: "top top",
            end: "bottom 50%",
            scrub: 1,
            // pinSpacing: true,
        },
    })


})