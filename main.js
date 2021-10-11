const tl = gsap.timeline();

tl.pause();
tl.to('.overlay', {
  duration: 1,
  clipPath: 'circle(100%)',
  ease: "power2.out"
})
.to('.sidebar', {
  duration: 1,
  visibility: 'visible',
  opacity: 1,
  background: '#FFF'
}, '-=1')


.fromTo('.sidebar a', {
  color: "#FFF",
  opacity: 0,
  scale: 1.5,
  y: 'random(200, 200)',
},{
  opacity: 1,
  stagger: .5,
  y : 0,
  scale: 1.0,
  color: '#777'
})
.to('.menu2 .bar1', 
  {
  rotate: '45deg',
  top: "45%",
  opacity: 1,
  x: 0
  },
  '-=3')
.to('.menu2 .bar2', {
  rotate: '-45deg',
  top: "45%"
}, '-=3')
let menu = document.querySelector('.menu');

menu.addEventListener('click', () => {
  console.log("clicked");
  tl.play();
  
  const closeBtn = document.querySelector('.menu2');
  closeBtn.onclick = () => {
    tl.reverse(.7);
    while (menu) {
      tl.exit()
      menu = false;
    }
  }
})