let tl = gsap.timeline()
tl.from('#nav1',{
    delay:1,
    duration:1,
    opacity:0,
    y:20,
})
.from('#nav2',{
    duration:1,
    opacity:0,
    y:20,
})
.to('#maintop',{
    duration:1,
    opacity:0,
    y:-100,
    // top:'-100%'
})