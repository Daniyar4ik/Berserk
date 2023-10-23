gsap.registerPlugin(ScrollTrigger, ScrollSmoother)


ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content',
	smooth: 3,
	effects: true,
});

gsap.fromTo('.header', {opacity: 1}, {
	opacity: 0,
	scrollTrigger: {
		trigger: '.header',
		start: '100',
		end: '600',
		scrub: true,
	}
})

gsap.fromTo('.telka', {opacity: 0}, {
	opacity: 1,
	scrollTrigger: {
		trigger: '.telka',
		start: '-450',
		end: '100',
		scrub: true,
	}
})

gsap.fromTo('.pidoras', {x: -200, y: -200, opacity: 0}, {
	opacity: 1, x: 0, y: 0,
	scrollTrigger: {
		trigger: '.girl',
		start: '-550',
		end: '-100',
		scrub: true,
	}
})

gsap.fromTo('.pidoras', {x: -200, y: -200, opacity: 0}, {
	opacity: 1, x: 0, y: 0,
	scrollTrigger: {
		trigger: '.girl',
		start: '-550',
		end: '0',
		scrub: true,
	}
})

gsap.fromTo('.text-1', {opacity: 0, scale: 2}, {
	opacity: 1, scale: 1,
	scrollTrigger: {
		trigger: '.girl',
		start: '-750',
		end: '-50',
		scrub: true,
	}
})

gsap.fromTo('.text-2', {opacity: 0, scale: 0.5}, {
	opacity: 1, scale: 1,
	scrollTrigger: {
		trigger: '.girl',
		start: '-50',
		end: '400',
		scrub: true,
	}
})
