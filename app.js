var crsr = document.querySelector("#cursor");
var crsrBlur = document.querySelector("#cursor-blur");


document.addEventListener("mousemove", (dets) => {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    crsrBlur.style.left = dets.x - 250 + "px";
    crsrBlur.style.top = dets.y - 250 + "px";
})


var h4All = document.querySelectorAll("#nav h4");

h4All.forEach((e) => {
    e.addEventListener("mouseenter", () => {
        crsr.style.scale = 4;
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent";
    })
    e.addEventListener("mouseleave", () => {
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #95C11E";
        crsr.style.backgroundColor = "#95C11E";

    })
})

var navImg = document.querySelector("#nav img");

navImg.addEventListener("mouseenter", () => {
    navImg.style.scale = 0.8;
    crsr.style.scale = 5;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
})
navImg.addEventListener("mouseleave", () => {
    navImg.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
})


gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "115px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers:true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers:true,
        start: "top -15%",
        end: "top -70%",
        scrub: 2,
    }
})

gsap.from("#about-us img , #about-us-in", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
        trigger: "#about-us",
        scoller: "body",
        // markers:true,
        start: "top 70%",
        end: "top 65%",
        scrub: 3,
    }
})

// gsap.from(".card", {
//     scale: 0.8,
//     opacity: 0,
//     duration: 0.5,
//     stagger: 0.1,
//     scrollTrigger: {
//         trigger: ".card",
//         scoller: "body",
//         // markers:true,
//         start: "top 70%",
//         end: "top 65%",
//         scrub: 1,
//     }
// })

gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scoller: "body",
        // markers:true,
        start: "top 55%",
        end: "top 45%",
        scrub: 4,
    }
})

gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#colon1",
        scoller: "body",
        // markers:true,
        start: "top 55%",
        end: "top 45%",
        scrub: 4,
    }
})

gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scoller: "body",
        // markers:true,
        start: "top 75%",
        end: "top 70%",
        scrub: 2,
    }
})



