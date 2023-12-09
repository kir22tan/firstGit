// let tl = gsap.timeline()

// tl.from("#box1",{
//     duration:2,
//     // scale:1.3,
//     onStart: function(){ $('#box1').textillate({ in: { effect: 'fadeInUp' } });}
// })

let tl = gsap.timeline();

gsap.from("#box1", {
//   duration: 2,
//   scale: 1.3,
  onStart: function() {
    $('#box1').textillate({ in: { effect: 'fadeInUp' } });
  }
});

// tl.from(["#box1"],{
//     y:100,
//     opacity:0,
//     scale:1.2,
//     // delay:2,
//     duration:1,
//     // repeat:-1,
//     // yoyo:true
// })
// .to('#box3',{
//     x:100,
//     duration:1,
//     // repeat:-1,
//     // yoyo:true,
//     onStart: function(){
//         document.querySelector('#box3').style.backgroundColor='green'
//     },
// })