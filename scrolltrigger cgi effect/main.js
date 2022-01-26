document.addEventListener('DOMContentLoaded', function () {

    gsap.defaults({
        duration: 1
    });

    const headerTl = gsap.timeline();
    headerTl
        .from('h1', {
            opacity: 0,
            scale: 0.9,
            duration: 3,
        })
        .from('.small', {
            x: '-100vh',
            opacity: 0,
            duration: 1,
        }, 1)
        .from('#scroll-down', {
            x: '100vh',
            opacity: 0,
            duration: 1,
        }, 1)
        .to('#scroll-down', {
            y: -50,
            duration: 1,
            repeat: -1,
            yoyo: true,
        }, 2);

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
    });

    const layers = gsap.utils.toArray('.multiple-layers span');
    layers.map((el, ind) => {
        gsap.to(layers, {
            width: '100%',
            ease: 'none',
            repeat: -1,
            yoyo: true,
            stagger: 1,
        })
    })

})