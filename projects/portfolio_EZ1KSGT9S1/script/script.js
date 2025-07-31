gsap.registerPlugin(ScrollTrigger)

const timeline = gsap.timeline({ defaults: { duration: 1 }})
const myText = new SplitType('.mytext')

/*timeline
    .from('.box', { y: '100%', ease: 'bounce' })
    .to('.char', { y: 0, stagger: 0.05, duration: 0 })*/

document.querySelectorAll('.box').forEach(box => {
    timeline
    .from(box, {
        y: '100',
        ease: 'bounce',
        scrollTrigger: {
            trigger: box,
            start: 'top center',
            end: '+=500',
            markers: true,
            scrub: 1,
            toggleActions: 'play none none reset'
        }
    })
})
    timeline.to('.char', { y: 0, stagger: 0.05, duration: 0 }) 
