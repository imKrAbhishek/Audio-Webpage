
 var tl=gsap.timeline()
 tl.from("#navhead",{
y:-30,
opacity:0,
duration:1,
delay:0.5,
stagger:1
})
tl.from(".nav-item ",{
    y:-30,
    opacity:0,
    duration:0.5,
    stagger:1
    })

let headphone = document.getElementById("headphoneimg");
headphone.addEventListener("mousemove", function(dets){
   gsap.to("#headphoneimg",{
 rotateY:360,
 rotateZ:50,
 delay:0.5,
 rotateX:10,duration:3,
 scrub:5,scale:1.4
   })
   
})

gsap.from("#tws",{
    opacity:0,
    y:70,
    rotateY:130,
    duration:3,
    delay:3,
    scrollTrigger:{
        trigger:"#tws",
        scroller:"body",
        markers:true,
        start:"top 30%",
        end:"top 0",
        scrub:5
    }
})

let para=document.getElementById("para").innerText;
var splittext=para.split("")
var clutter=""
splittext.forEach(function(){
   clutter=clutter+"hey" 
})
console.log(clutter)

