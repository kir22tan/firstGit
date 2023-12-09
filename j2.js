let p2 = document.getElementById("p2")

let imgp2 = document.createElement("img")
imgp2.setAttribute('src','p2.png')
p2.appendChild(imgp2)

imgp2.style.height = "30dvh"
imgp2.style.position = 'absolute'
imgp2.style.display = 'none'
// imgp2.style.mixBlendMode = 'difference'
imgp2.style.opacity='0.5'
// imgp2.style.transform="translate(-50%,-50%)"
imgp2.style.transition = 'all 1.5s ease-out'
p2.addEventListener('mousemove',(m)=>{
    // console.log(m.clientX , m.clientY , m.offsetY, "yo")
    imgp2.style.display = 'block'
    imgp2.style.left = `${m.clientX}px`
    imgp2.style.top = `${m.clientY -100}px`
    
    
})
p2.addEventListener('mouseleave',(m)=>{
    // console.log(m.clientX , m.clientY , "yo")
    // imgp2.style.display = 'block'
    imgp2.style.display = 'none'
    
    
})
