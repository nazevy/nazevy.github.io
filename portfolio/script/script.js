gsap.registerPlugin(ScrollTrigger)

const timeline = gsap.timeline({ defaults: { duration: 1 }})
const myText = new SplitType('.mytext')

timeline
    .from('.box', { y: '100%', ease: 'bounce' })
    .to('.char', { y: 0, stagger: 0.05, duration: 0 })
