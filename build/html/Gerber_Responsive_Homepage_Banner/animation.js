!function(e){let t,r;function d(){1024<r?(t=gsap.timeline({defaults:{paused:!1,duration:.5,ease:"power3.out"}})).add("start").fromTo("#wave_dt",{y:"100%",skewX:.01},{y:0},"start").fromTo("#logo-wrapper",{scale:0,x:Math.round(r/2-gsap.getProperty("#logo-wrapper","width")/2),y:"50px",skewX:.1},{scale:1.1,transformOrigin:"50% 50%",duration:1,ease:"back.out(1.3)"},"start").add(n("#burst-logo","bottom right")).to("#wave_dt",{x:a("#wave_dt"),duration:6.5,ease:"power2.inOut"}).to("#logo-wrapper",{scale:1,x:"20%",duration:6.5,ease:"power3.inOut"},"-=6.5").add("frame2","-=1.5").add(n("#book"),"frame2").add("end","frame2+=0.75").add(u("#kid1",1.5,360),"end").add(u("#kid3",1,360),"end").add(u("#kid2",1,-360),"end").add(u("#kid4",1.5,-360),"end").add(n("#heart"),"end").add(n("#stars"),"end+=.3").add(i({x:0,rotation:-5}),"-=1").add(n("#hearts","bottom left"),"-=1").add(s(),"-=0.5").add(o("#burst-logo","bottom right")).add(o("#arrow-enter","0% 100%"),"+=.5").add(o("#hearts","bottom left"),"+=3").add(o("#heart"),"+=.5"):(780<r?(t=gsap.timeline({defaults:{paused:!1,duration:.5,ease:"power3.out"}})).add("start").fromTo("#wave_tab",{y:"100%",skewX:.01},{y:0,duration:.5},"start").fromTo("#logo-wrapper",{scale:0,x:0,y:"50%",skewX:.1},{scale:1.4,transformOrigin:"50% 50%",duration:1,ease:"back.out(1.3)"},"start").add(n("#burst-logo","bottom right")).add("frame2","+=1").to("#wave_tab",{x:a("#wave_tab"),duration:6.5,ease:"power2.inOut"},"frame2").to("#logo-wrapper",{scale:1,y:0,duration:3.25,ease:"power3.inOut"},"frame2").add(n("#book"),"-="+6.5/3).add("end","-=1").add(n("#hearts"),"end").add(u("#kid1",1.3,-360),"end").add(u("#kid2",.8,360),"end").add(u("#kid3",1.3,360),"end").add(u("#kid4",1.3,-360),"end").add(n("#heart"),"end").add(n("#stars"),"end").add(i(),"-=0.6").add(s(),"-=0.4").add(o("#burst-logo","bottom right")).add(o("#arrow-enter","0% 100%"),"+=.5").add(o("#hearts"),"+=3"):(t=gsap.timeline({defaults:{paused:!1,duration:.5,ease:"power3.out"}})).add("start").fromTo("#wave_m",{y:"100%",skewX:.01},{y:0},"start").fromTo("#logo-wrapper",{scale:0,x:0,y:0},{scale:1,transformOrigin:"50% 50%",duration:1,ease:"back.out(1.2)"},"start").add(n("#burst-logo","bottom right")).add(n("#hearts"),"-=.3").add(n("#heart"),"-=.3").add("frame2","-=1").to("#wave_m",{x:a("#wave_m"),duration:6.5,ease:"power3.inOut"},"frame2").add(n("#book"),"frame2+=3.25").add("end","frame2+=4.75").add(u("#kid1",1.1,-360),"end").add(u("#kid2",1.1,360),"end").add(u("#kid4",1.1,-360),"end").add(n("#heart"),"end").add(n("#stars"),"end+=0.5").add(i(),"-=1").add(s(),"-=0.5").add(o("#burst-logo","bottom right")).add(o("#arrow-enter","0% 100%"),"+=.5").add(o("#hearts"),"+=2")).add(o("#heart"),"+=1").add(o("#stars"),"+=1")}function a(a){let e=gsap.getProperty(a),t=r-e("width");return t}function o(a,e="50% 50%",t=-1){return gsap.timeline({defaults:{duration:.5},repeat:t,repeatDelay:0<=t?0:10}).to(a,{scale:0,transformOrigin:e,ease:"back.in(1.2)",yoyo:!0,repeat:1})}function n(a,e="50% 50%"){return gsap.timeline().fromTo(a,{scale:0,y:0},{duration:.5,scale:1,transformOrigin:e,ease:"back.out(1.2)"})}function s(){return gsap.timeline().fromTo("#txt",{scale:0,y:0},{duration:1,scale:1,transformOrigin:"0% 50%",ease:"back.out(1.2)"}).fromTo("#txt span",{alpha:0},{alpha:1,duration:.2,ease:"none",stagger:.1},"-=1")}function i(a={x:0,rotation:-5}){return gsap.timeline({defaults:{ease:"back.out(1.2)",transformOrigin:"50% 50%"}}).set("#enter",{x:a.x,rotation:a.rotation,transformOrigin:"50% 50%"}).fromTo("#enter-back",{scale:0,y:0},{scale:1,duration:.5}).fromTo("#enter-txt",{scale:0,y:0},{scale:1,duration:.4},"-=.3").fromTo("#arrow-enter",{scale:0,y:"50%",x:"-50%"},{scale:1,duration:.4,transformOrigin:"0% 100%"},"-=.3").fromTo("#burst-enter .cls-3",{scale:0,y:0,x:0},{x:0,scale:1,duration:.2,stagger:.1,ease:"back.out(1.5)",transformOrigin:"0% center"},"-=0.5")}function u(a,e,t){var r=function(a){let e=gsap.getProperty("#bubble-wrapper"),t=gsap.getProperty(a),r=e("width"),d=e("height"),o=(e("left"),t("left","px")),n=t("width","px"),s=(t("height","px"),t("top","px")),i=-1*(o-n/2),u=-1*(s-d/2);return{x:i,y:u}}(a);return gsap.timeline({defaults:{duration:e,ease:"power3.out"}}).fromTo(a,{x:r.x,y:r.y,rotation:t,scale:.5},{display:"block",x:0,y:0,rotation:0,scale:1,transformOrigin:"50% 50%"})}e.addEventListener("load",function(a){r=e.innerWidth,gsap.set(".hero",{visibility:"visible"}),d(r)}),e.addEventListener("resize",function(a){r=a.target.innerWidth,t.seek(0),t.kill(),d()},!0)}(window,document);
//# sourceMappingURL=maps/animation.js.map
