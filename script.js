var t1 = gsap.timeline()

t1.from("#nav h3",{
    y:-50,
    opacity :0,
    delay:0.4,
    duration:0.8,
    stagger:0.3
})

t1.from('#main h1',{
    x:-500,
    opacity:0,
    duration:0.8,
    stagger:0.4
})

t1.from('#imgcon img',{
    x:100,
    rotate:45,
    opacity:0,
    duration:0.5,
    stagger:0.5
})

t1.from('#footer h3', {
    y:50,
    opacity:0,
    duration:0.5,
    stagger:0.5
})

gsap.to("#page2 img",{
    width:"100%",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        // markers:true,
        start:"top 0",
        end:"top -100%",
        scrub:2,
        pin:true

    }
})

gsap.to("#page3 h1",{
    transform:"translateX(-430%)",
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        // markers:true,
        start:"top 0",
        end:"top -100%",
        scrub:10,
        pin:true

    }
})