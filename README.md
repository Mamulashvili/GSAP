# GSAP

### `Basic animations`
### `Timeline animation with pizza example`
draw basic shapes and animate with gsap

The `gsap` object serves as the access point for most of GSAP's functionality. It's just a generic object with various methods and properties that create and control `Tweens` and `Timelines`;

```js
const tl = gsap.timeline();
tl.from(target, optionsObj, position)
```
### `GSAP timeline ScrollTrigger`
```js
    gsap.to(target, {
        y: '100vh',
        scrollTrigger: {
            markers: true,
            trigger: target,
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
```
### `ScrollTrigger CGI effect`
repeat scroll down text animation infinitely
```js
gsap.to('#scroll-down', {
    y: -50,
    duration: 1,
    repeat: -1,     // repeat count
   //Gets or sets the tween's yoyo state, where true causes the tween to go back and forth, alternating backward and forward on each repeat.
   yoyo: true
}, 2);
```

