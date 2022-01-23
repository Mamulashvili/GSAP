document.addEventListener("DOMContentLoaded", function () {
    // Gsap default properties
    gsap.defaults({
        ease: Power0.easeNone,
        duration: 1,
    })


    // Example 1
    gsap.to('.rectangle-1', {
        x: window.innerWidth - 100,
        duration: 3,
        repeat: -1,
        yoyo: true,
    });


    /**
     * Example 2
     * Timeline is a acontainer for multiple tweens
     */

    const tl = gsap.timeline();
    let rec2 = document.getElementsByClassName('rectangle-2');
    tl.from(rec2, {
        x: -100,
        duration: 1,
    })
        .to(rec2, {
            x: window.innerWidth - 100,
            rotate: 360,
            background: 'red',
            duration: 3,
            stagger: 1.5,
            ease: Power0.easeNone
        })
        .set(rec2, {
            borderRadius: 100,
            background: 'blue',
        })
        .to(rec2, { x: 0, duration: 1 })
        .from('.circle-1', {
            x: 0,
            y: -300,
            duration: 2,
        }, 0)
        .to('.circle-1', {
            x: window.innerWidth - 50,
            y: 0,
            repeat: 3,
            yoyo: true,
            scale: 2,
        }, 2)


    /**
     * Example 3
     * Stagger types
     */

    setStagger = param => {
        // Reset animation
        gsap.killTweensOf('.timign-reactangle');
        gsap.set('.timign-reactangle', { x: 0, y: 0 });
        // Animate
        gsap
            .to('.timign-reactangle', {
                y: -150,
                repeat: -1,
                stagger: {
                    each: 0.2,
                    from: param,
                },
            })
    }


    /**
     * Example 4
     * Animation controls
     * plau, pause, reverse, restart
     */

    const controlTween = gsap.to('.controlled-rectangle', {
        x: window.innerWidth - 100,
        duration: 5,
        paused: true,
    })

    document.getElementById('play').onclick = () => controlTween.play();
    document.getElementById('pause').onclick = () => controlTween.pause();
    document.getElementById('reverse').onclick = () => controlTween.reverse();
    document.getElementById('restart').onclick = () => controlTween.restart();



});

