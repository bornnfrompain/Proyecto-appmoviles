"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8594],{8594:(tt,W,P)=>{P.r(W),P.d(W,{iosTransitionAnimation:()=>Z,shadow:()=>q});var n=P(9),J=P(191);const Y=e=>document.querySelector(`${e}.ion-cloned-element`),q=e=>e.shadowRoot||e,D=e=>{const a="ION-TABS"===e.tagName?e:e.querySelector("ion-tabs"),r="ion-content ion-header:not(.header-collapse-condense-inactive) ion-title.title-large";if(null!=a){const o=a.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");return null!=o?o.querySelector(r):null}return e.querySelector(r)},G=(e,a)=>{const r="ION-TABS"===e.tagName?e:e.querySelector("ion-tabs");let o=[];if(null!=r){const t=r.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");null!=t&&(o=t.querySelectorAll("ion-buttons"))}else o=e.querySelectorAll("ion-buttons");for(const t of o){const c=t.closest("ion-header"),l=c&&!c.classList.contains("header-collapse-condense-inactive"),g=t.querySelector("ion-back-button"),i=t.classList.contains("buttons-collapse");if(null!==g&&("start"===t.slot||""===t.slot)&&(i&&l&&a||!i))return g}return null},U=(e,a,r,o,t,c)=>{const l=a?`calc(100% - ${c.right+4}px)`:c.left-4+"px",g=a?"7px":"-7px",i=a?"-4px":"4px",p=a?"-4px":"4px",u=a?"right":"left",m=a?"left":"right",F=r?[{offset:0,opacity:1,transform:`translate3d(${i}, ${c.top-46}px, 0) scale(1)`},{offset:.6,opacity:0},{offset:1,opacity:0,transform:`translate3d(${g}, ${t.top-40}px, 0) scale(2.1)`}]:[{offset:0,opacity:0,transform:`translate3d(${g}, ${t.top-40}px, 0) scale(2.1)`},{offset:1,opacity:1,transform:`translate3d(${i}, ${c.top-46}px, 0) scale(1)`}],E=r?[{offset:0,opacity:1,transform:`translate3d(${p}, ${c.top-46}px, 0) scale(1)`},{offset:.2,opacity:0,transform:`translate3d(${p}, ${c.top-41}px, 0) scale(0.6)`},{offset:1,opacity:0,transform:`translate3d(${p}, ${c.top-41}px, 0) scale(0.6)`}]:[{offset:0,opacity:0,transform:`translate3d(${p}, ${c.top-41}px, 0) scale(0.6)`},{offset:1,opacity:1,transform:`translate3d(${p}, ${c.top-46}px, 0) scale(1)`}],$=(0,n.c)(),B=(0,n.c)(),T=Y("ion-back-button"),H=q(T).querySelector(".button-text"),s=q(T).querySelector("ion-icon");T.text=o.text,T.mode=o.mode,T.icon=o.icon,T.color=o.color,T.disabled=o.disabled,T.style.setProperty("display","block"),T.style.setProperty("position","fixed"),B.addElement(s),$.addElement(H),$.beforeStyles({"transform-origin":`${u} center`}).beforeAddWrite(()=>{o.style.setProperty("display","none"),T.style.setProperty(u,l)}).afterAddWrite(()=>{o.style.setProperty("display",""),T.style.setProperty("display","none"),T.style.removeProperty(u)}).keyframes(F),B.beforeStyles({"transform-origin":`${m} center`}).keyframes(E),e.addAnimation([$,B])},z=(e,a,r,o,t,c)=>{const l=a?`calc(100% - ${t.right}px)`:`${t.left}px`,g=a?"-18px":"18px",i=a?"right":"left",m=r?[{offset:0,opacity:0,transform:`translate3d(${g}, ${c.top-4}px, 0) scale(0.49)`},{offset:.1,opacity:0},{offset:1,opacity:1,transform:`translate3d(0, ${t.top+2}px, 0) scale(1)`}]:[{offset:0,opacity:.99,transform:`translate3d(0, ${t.top+2}px, 0) scale(1)`},{offset:.6,opacity:0},{offset:1,opacity:0,transform:`translate3d(${g}, ${c.top-4}px, 0) scale(0.5)`}],d=Y("ion-title"),A=(0,n.c)();d.innerText=o.innerText,d.size=o.size,d.color=o.color,A.addElement(d),A.beforeStyles({"transform-origin":`${i} center`,height:"46px",display:"",position:"relative",[i]:l}).beforeAddWrite(()=>{o.style.setProperty("opacity","0")}).afterAddWrite(()=>{o.style.setProperty("opacity",""),d.style.setProperty("display","none")}).keyframes(m),e.addAnimation(A)},Z=(e,a)=>{var r;try{const o="cubic-bezier(0.32,0.72,0,1)",t="opacity",c="transform",l="0%",i="rtl"===e.ownerDocument.dir,p=i?"-99.5%":"99.5%",u=i?"33%":"-33%",m=a.enteringEl,d=a.leavingEl,A="back"===a.direction,F=m.querySelector(":scope > ion-content"),w=m.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),K=m.querySelectorAll(":scope > ion-header > ion-toolbar"),E=(0,n.c)(),$=(0,n.c)();if(E.addElement(m).duration((null!==(r=a.duration)&&void 0!==r?r:0)||540).easing(a.easing||o).fill("both").beforeRemoveClass("ion-page-invisible"),d&&null!=e){const s=(0,n.c)();s.addElement(e),E.addAnimation(s)}if(F||0!==K.length||0!==w.length?($.addElement(F),$.addElement(w)):$.addElement(m.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),E.addAnimation($),A?$.beforeClearStyles([t]).fromTo("transform",`translateX(${u})`,`translateX(${l})`).fromTo(t,.8,1):$.beforeClearStyles([t]).fromTo("transform",`translateX(${p})`,`translateX(${l})`),F){const s=q(F).querySelector(".transition-effect");if(s){const v=s.querySelector(".transition-cover"),_=s.querySelector(".transition-shadow"),h=(0,n.c)(),f=(0,n.c)(),y=(0,n.c)();h.addElement(s).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),f.addElement(v).beforeClearStyles([t]).fromTo(t,0,.1),y.addElement(_).beforeClearStyles([t]).fromTo(t,.03,.7),h.addAnimation([f,y]),$.addAnimation([h])}}const B=m.querySelector("ion-header.header-collapse-condense"),{forward:T,backward:H}=((e,a,r,o,t)=>{const c=G(o,r),l=D(t),g=D(o),i=G(t,r),p=null!==c&&null!==l&&!r,u=null!==g&&null!==i&&r;if(p){const m=l.getBoundingClientRect(),d=c.getBoundingClientRect();z(e,a,r,l,m,d),U(e,a,r,c,m,d)}else if(u){const m=g.getBoundingClientRect(),d=i.getBoundingClientRect();z(e,a,r,g,m,d),U(e,a,r,i,m,d)}return{forward:p,backward:u}})(E,i,A,m,d);if(K.forEach(s=>{const v=(0,n.c)();v.addElement(s),E.addAnimation(v);const _=(0,n.c)();_.addElement(s.querySelector("ion-title"));const h=(0,n.c)(),f=Array.from(s.querySelectorAll("ion-buttons,[menuToggle]")),y=s.closest("ion-header"),C=y?.classList.contains("header-collapse-condense-inactive");let b;b=f.filter(A?R=>{const O=R.classList.contains("buttons-collapse");return O&&!C||!O}:R=>!R.classList.contains("buttons-collapse")),h.addElement(b);const X=(0,n.c)();X.addElement(s.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));const S=(0,n.c)();S.addElement(q(s).querySelector(".toolbar-background"));const x=(0,n.c)(),I=s.querySelector("ion-back-button");if(I&&x.addElement(I),v.addAnimation([_,h,X,S,x]),h.fromTo(t,.01,1),X.fromTo(t,.01,1),A)C||_.fromTo("transform",`translateX(${u})`,`translateX(${l})`).fromTo(t,.01,1),X.fromTo("transform",`translateX(${u})`,`translateX(${l})`),x.fromTo(t,.01,1);else if(B||_.fromTo("transform",`translateX(${p})`,`translateX(${l})`).fromTo(t,.01,1),X.fromTo("transform",`translateX(${p})`,`translateX(${l})`),S.beforeClearStyles([t,"transform"]),y?.translucent?S.fromTo("transform",i?"translateX(-100%)":"translateX(100%)","translateX(0px)"):S.fromTo(t,.01,"var(--opacity)"),T||x.fromTo(t,.01,1),I&&!T){const O=(0,n.c)();O.addElement(q(I).querySelector(".button-text")).fromTo("transform",i?"translateX(-100px)":"translateX(100px)","translateX(0px)"),v.addAnimation(O)}}),d){const s=(0,n.c)(),v=d.querySelector(":scope > ion-content"),_=d.querySelectorAll(":scope > ion-header > ion-toolbar"),h=d.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");if(v||0!==_.length||0!==h.length?(s.addElement(v),s.addElement(h)):s.addElement(d.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),E.addAnimation(s),A){s.beforeClearStyles([t]).fromTo("transform",`translateX(${l})`,i?"translateX(-100%)":"translateX(100%)");const f=(0,J.g)(d);E.afterAddWrite(()=>{"normal"===E.getDirection()&&f.style.setProperty("display","none")})}else s.fromTo("transform",`translateX(${l})`,`translateX(${u})`).fromTo(t,1,.8);if(v){const f=q(v).querySelector(".transition-effect");if(f){const y=f.querySelector(".transition-cover"),C=f.querySelector(".transition-shadow"),b=(0,n.c)(),X=(0,n.c)(),S=(0,n.c)();b.addElement(f).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),X.addElement(y).beforeClearStyles([t]).fromTo(t,.1,0),S.addElement(C).beforeClearStyles([t]).fromTo(t,.7,.03),b.addAnimation([X,S]),s.addAnimation([b])}}_.forEach(f=>{const y=(0,n.c)();y.addElement(f);const C=(0,n.c)();C.addElement(f.querySelector("ion-title"));const b=(0,n.c)(),X=f.querySelectorAll("ion-buttons,[menuToggle]"),S=f.closest("ion-header"),x=S?.classList.contains("header-collapse-condense-inactive"),I=Array.from(X).filter(j=>{const N=j.classList.contains("buttons-collapse");return N&&!x||!N});b.addElement(I);const R=(0,n.c)(),O=f.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");O.length>0&&R.addElement(O);const L=(0,n.c)();L.addElement(q(f).querySelector(".toolbar-background"));const M=(0,n.c)(),k=f.querySelector("ion-back-button");if(k&&M.addElement(k),y.addAnimation([C,b,R,M,L]),E.addAnimation(y),M.fromTo(t,.99,0),b.fromTo(t,.99,0),R.fromTo(t,.99,0),A){if(x||C.fromTo("transform",`translateX(${l})`,i?"translateX(-100%)":"translateX(100%)").fromTo(t,.99,0),R.fromTo("transform",`translateX(${l})`,i?"translateX(-100%)":"translateX(100%)"),L.beforeClearStyles([t,"transform"]),S?.translucent?L.fromTo("transform","translateX(0px)",i?"translateX(-100%)":"translateX(100%)"):L.fromTo(t,"var(--opacity)",0),k&&!H){const N=(0,n.c)();N.addElement(q(k).querySelector(".button-text")).fromTo("transform",`translateX(${l})`,`translateX(${(i?-124:124)+"px"})`),y.addAnimation(N)}}else x||C.fromTo("transform",`translateX(${l})`,`translateX(${u})`).fromTo(t,.99,0).afterClearStyles([c,t]),R.fromTo("transform",`translateX(${l})`,`translateX(${u})`).afterClearStyles([c,t]),M.afterClearStyles([t]),C.afterClearStyles([t]),b.afterClearStyles([t])})}return E}catch(o){throw o}}}}]);