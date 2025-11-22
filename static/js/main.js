gsap.from(".title", { y: 80, opacity: 0, duration: 1.2, ease: "power3.out" })
gsap.from(".subtitle", { y: 40, opacity: 0, delay: 0.3, duration: 1 })
gsap.from(".buttons", { opacity: 0, delay: 0.6, duration: 1 })

gsap.to(".orb1", {
  x: 80,
  y: 40,
  duration: 8,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
})

gsap.to(".orb2", {
  x: -60,
  y: -50,
  duration: 9,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
})

gsap.from(".pillar", {
  scrollTrigger: ".vision",
  y: 40,
  opacity: 0,
  stagger: 0.2,
  duration: 1
})

gsap.from(".card", {
  scrollTrigger: ".clubs",
  y: 60,
  opacity: 0,
  stagger: 0.2,
  duration: 1.2
})

gsap.from(".impact h2, .impact p", {
  scrollTrigger: ".impact",
  y: 50,
  opacity: 0,
  duration: 1
})

gsap.from(".join h2, .join p, .join a", {
  scrollTrigger: ".join",
  y: 30,
  opacity: 0,
  stagger: 0.2,
  duration: 1
})
