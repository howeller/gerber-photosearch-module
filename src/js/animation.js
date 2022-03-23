(function(window, document){

	let tl, txt, windowWidth;

	const cl = txt => console.log('%c '+txt,'background: rgba(51, 255, 0, 0.3); color: white;');
	const id = txt => document.getElementById(txt);

	// console.group('Gerber Hero');
	function init(e){
		cl('init');
		windowWidth = window.innerWidth;
		// gsap.registerPlugin(SplitText);
		gsap.set('.hero',{visibility:'visible'});
		// txt = new SplitText('#txt', {type:'words', /*wordsClass: "line-span",*/ reduceWhiteSpace:false});
		startAnimation(windowWidth);
	}

	function startAnimation() {
		console.table(windowWidth);

		if (windowWidth > 1024) {
			animateDesktop();
		}
		else if (windowWidth > 780) {
			animateTablet();
		} 
		else {
			animateMobile();
		}
	}

	function onResize(event) {
		windowWidth = event.target.innerWidth;
		tl.seek(0);
		tl.kill();
		cl('onResize: '+windowWidth);
		startAnimation();
	}

	function animateDesktop() {
		cl('animateDesktop!');

		tl = gsap.timeline({ defaults:{ paused:false, duration:0.5, ease:'power3.out' }});

		tl
			.add('start')
			.fromTo('#wave_dt', { /*x:'-50%', */y:'100%', skewX:.01},{y:0},'start')
			.fromTo('#logo-wrapper', { scale:0, x:getCenterX('#logo-wrapper'), y:'50px', skewX:.1}, { scale:1.1, transformOrigin:'50% 50%', duration:1, ease:'back.out(1.3)'},'start')
			.add(popInTl('#burst-logo','bottom right'))
			.to('#wave_dt', {  x:getWaveX('#wave_dt'), duration: 4, ease:'power1.inOut'})
			.to('#logo-wrapper', { scale: 1, x: '20%', duration: 4}, '-=4')
			.add('frame2','-=1.5')
			.add(popInTl('#book'), 'frame2')
			.add('end', 'frame2+=0.75')
			.add(kidRollInTl('#kid1', 1, 360), 'end')
			.add(kidRollInTl('#kid2', 0.5, 360), 'end')
			.add(kidRollInTl('#kid3', 0.5, -360), 'end')
			.add(kidRollInTl('#kid4', 1, -360), 'end')
			.add(popInTl('#heart'), 'end')
			.add(popInTl('#stars'), 'end+=.3')
			.add(enterBubInTl({x:0, rotation:-5}))
			.add(popInTl('#hearts', 'bottom left'), '-=1')
			.add(txtInTl())
			.add(popInOutTl('#burst-logo', 'bottom right'))
			.add(popInOutTl('#hearts','bottom left'), '+=3')
			.add(popInOutTl('#heart'), '+=.5')
			// .seek('end')
			// tl.pause(.6);
	}

	function animateTablet() {
		cl('animateTablet!');

		tl = gsap.timeline({ defaults:{ paused:false, duration:0.5, ease:'power3.out' }});
	
		tl
			.add('start')
			.fromTo('#wave_tab', { y:'100%', skewX:.01},{y:0, duration:.5},'start')
			// .fromTo('#wave_tab', { x:'-50%', y:'100%'},{y:0})
			.fromTo('#logo-wrapper', { scale:0, x:0, y:'50%' }, { scale:1.4, transformOrigin:'50% 50%', duration:1, ease:'back.out(1.3)'},'start')
			.add(popInTl('#burst-logo','bottom right'))
			.add('frame2','+=1')
			.to('#wave_tab', {  x:getWaveX('#wave_tab'), duration: 4, ease:'power3.inOut'}, 'frame2-=0.5')
			.to('#logo-wrapper', { scale: 1, y:0, duration: 2, ease:'power3.inOut'}, 'frame2')
			.add(popInTl('#book'), '-=1.5')
			.add('end','-=1')
			.add(popInTl('#hearts'), 'end')
			.add(kidRollInTl('#kid1', 1, -360), 'end')
			.add(kidRollInTl('#kid2', 0.5, 360), 'end')
			.add(kidRollInTl('#kid3', 1, 360), 'end')
			.add(kidRollInTl('#kid4', 0.5, -360), 'end')
			.add(popInTl('#heart'), 'end')
			.add(popInTl('#stars'), 'end')
			.add(enterBubInTl())
			.add(txtInTl())
			.add(popInOutTl('#burst-logo', 'bottom right'))
			.add(popInOutTl('#hearts'), '+=3')
			.add(popInOutTl('#heart'), '+=1')
			.add(popInOutTl('#stars'), '+=1')
			// .seek('end')
			// tl.pause(.6);
	}

	function animateMobile() {
		cl('animateMobile!');

		tl = gsap.timeline({ defaults:{ paused:false, duration:0.5, ease:'power3.out' }});

		tl.add('start')
			.fromTo('#wave_m', { y:'100%', skewX:.01},{y:0},'start')
			.fromTo('#logo-wrapper', { scale:0, x:0, y:0 }, { scale:1, transformOrigin:'50% 50%', duration:1, ease:'back.out(1.2)'}, 'start')
			.add(popInTl('#burst-logo','bottom right'))
			.add(popInTl('#hearts'), '-=.3')
			.add(popInTl('#heart'), '-=.3')
			.add('frame2','-=1')
			.to('#wave_m', {  x:getWaveX('#wave_m'), duration: 4, ease:'power3.inOut'}, 'frame2')
			.add(popInTl('#book'),'frame2+=2.5')
			.add('end','-=.5')
			.add(kidRollInTl('#kid1', 0.5, -360), 'end')
			.add(kidRollInTl('#kid2', 0.5, 360), 'end')
			.add(kidRollInTl('#kid4', 0.5, -360), 'end')
			.add(popInTl('#heart'), 'end')
			.add(popInTl('#stars'), 'end')
			.add(txtInTl(), '-=0.5')
			.add(enterBubInTl())
			.add(popInOutTl('#burst-logo', 'bottom right'))
			.add(popInOutTl('#hearts'), '+=2')
			.add(popInOutTl('#heart'), '+=1')
			.add(popInOutTl('#stars'), '+=1')
			// .seek('end')

			// tl.pause(.6);
	}

	function getWaveX(_id){
		let _props = gsap.getProperty(_id),
			_distanceX = windowWidth - _props('width');
		// cl('getWaveX '+_id);	
		// cl('getWaveX '+_distanceX);
		return _distanceX;
	}

	function popInOutTl(_id, _origin='50% 50%', _repeat=-1) {
		let _delay = _repeat >= 0 ? 0 : 10; // Do not add delay if repeat # is passed in.
		return gsap.timeline({defaults:{duration:0.5}, repeat:_repeat, repeatDelay:_delay})
			.to(_id, { scale: 0, transformOrigin:_origin, ease:'back.in(1.2)', yoyo:true, repeat:1})
	}

	function popInTl(_id, _origin='50% 50%') {
		return gsap.timeline()
			.fromTo(_id, { scale:0, y:0 }, { duration:0.5, scale:1, transformOrigin:_origin, ease:'back.out(1.2)'});
	}
	function txtInTl(){

		return gsap.timeline()
			.fromTo('#txt', { scale:0, y:0 }, { duration:1, scale:1, transformOrigin:'0% 50%', ease:'back.out(1.2)'})
			.fromTo('#txt span', { alpha:0 }, {alpha:1, duration: 0.2, ease:'none', stagger:0.1 },'-=1')
			// .fromTo(txt.words, { alpha:0 }, {alpha:1, duration: 0.2, ease:'none', stagger:0.1 },'-=1') //try "center" and "edges"
	}

	function enterBubInTl( _prop={x:0, rotation:-5}){
		return gsap.timeline({ defaults:{ ease:'back.out(1.2)', transformOrigin:'50% 50%' }})
			.set('#enter',{ x:_prop.x, rotation:_prop.rotation, transformOrigin:'50% 50%',})
			.fromTo('#enter-back', { scale:0, y:0 }, { scale:1, duration:0.5})
			.fromTo('#enter-txt', { scale:0, y:0 }, { scale:1, duration:0.4}, '-=.3' )
			.fromTo('#arrow-enter', { scale:0, y:'50%', x:'-50%' }, { scale:1, duration:0.4, transformOrigin:'0% 100%'}, '-=.3' )
			.fromTo('#burst-enter .cls-3', { scale:0, y:0, x:0 }, { x:0, scale:1, duration:0.2, stagger:.1, ease:'back.out(1.5)', transformOrigin:'0% center'}, '-=0.5')
			// .add(popInTl('#burst-enter', '0% 50%'),'-=0.5')
	}
	function kidRollInTl(_id, _speed, _startRotation ) {
		let props = getKidTweenProps(_id);

		return gsap.timeline({defaults:{duration:_speed, ease:'power3.inOut'}})
			.fromTo(_id, { x:props.x, y:props.y, rotation:_startRotation, scale:.3}, { display:'block', x:0, y:0, rotation:0, scale:1, transformOrigin:'50% 50%'});
	}
	function getKidTweenProps(_id) {
		let _bubProp = gsap.getProperty('#bubble-wrapper'),
			_kidProp = gsap.getProperty(_id),
			_bw = _bubProp('width')/2,
			_bh = _bubProp('height')/2,
			_kidX = _kidProp('left'),
			_kidY = _kidProp('top'),
			_distanceX = (_kidX > 0 ) ? (_kidX+_bw) * -1 : Math.abs(_kidX-_bw ), // Determine if X position is a + or - #.
			_distanceY = (_bh-_kidY > 0 ) ? (_kidY)* -1 : Math.abs(_kidY+_bh );
		// console.group(_id);

		// // cl('? '+window.getComputedStyle(id('bubble-wrapper')).height);
		// cl('bh '+_bh)// cl(' _kidX '+ _kidX);
		// cl(' _distanceX '+ _distanceX);
		// cl(' _kidY '+ _kidY);
		// cl(' _distanceY '+ _distanceY);

		// // console.table(bubProp);
		// console.groupEnd();
		return { x:_distanceX, y:_distanceY };
	}
	function getCenterX(_id){
		return Math.round(windowWidth / 2 - (gsap.getProperty(_id, 'width') / 2));
		// cl('	getCenterX '+x);
		// return x;
	}

	// console.groupEnd();
	window.addEventListener('load', init);
	window.addEventListener('resize', onResize, true);
	
})(window, document)