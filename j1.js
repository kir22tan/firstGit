let p1 = document.getElementById("p1")

let imgp1 = document.createElement("img")
imgp1.setAttribute('src','p1.png')
p1.appendChild(imgp1)

imgp1.style.height = "30dvh"
imgp1.style.position = 'absolute'
imgp1.style.display = 'none'
// imgp1.style.mixBlendMode = 'difference'
imgp1.style.opacity='0.5'
// imgp1.style.transform="translate(-50%,-50%)"
imgp1.style.transition = 'all 1.5s ease-out'
p1.addEventListener('mousemove',(m)=>{
    // console.log(m.clientX , m.clientY , m.offsetY, "yo")
    imgp1.style.display = 'block'
    imgp1.style.left = `${m.clientX}px`
    imgp1.style.top = `${m.clientY -100}px`
    
    
})
p1.addEventListener('mouseleave',(m)=>{
    imgp1.style.display = 'none'
})
p1.addEventListener('click',(m)=>{
    window.alert("Due to limitation of hosting , You can view this project through my github page.")
})
