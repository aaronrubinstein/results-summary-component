(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();function L(){}function Ge(e){return e()}function ze(){return Object.create(null)}function G(e){e.forEach(Ge)}function Xe(e){return typeof e=="function"}function se(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let te;function Ne(e,t){return te||(te=document.createElement("a")),te.href=t,e===te.href}function bt(e){return Object.keys(e).length===0}function b(e,t){e.appendChild(t)}function ce(e,t,r){e.insertBefore(t,r||null)}function X(e){e.parentNode&&e.parentNode.removeChild(e)}function xt(e,t){for(let r=0;r<e.length;r+=1)e[r]&&e[r].d(t)}function I(e){return document.createElement(e)}function be(e){return document.createTextNode(e)}function D(){return be(" ")}function M(e,t,r){r==null?e.removeAttribute(t):e.getAttribute(t)!==r&&e.setAttribute(t,r)}function wt(e){return Array.from(e.childNodes)}function He(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function Mt(e,t,r,a){r===null?e.style.removeProperty(t):e.style.setProperty(t,r,a?"important":"")}let Y;function K(e){Y=e}function Tt(){if(!Y)throw new Error("Function called outside component initialization");return Y}function Ct(e){Tt().$$.on_mount.push(e)}const H=[],ae=[],re=[],qe=[],Pt=Promise.resolve();let xe=!1;function It(){xe||(xe=!0,Pt.then(et))}function we(e){re.push(e)}const ye=new Set;let N=0;function et(){if(N!==0)return;const e=Y;do{try{for(;N<H.length;){const t=H[N];N++,K(t),$t(t.$$)}}catch(t){throw H.length=0,N=0,t}for(K(null),H.length=0,N=0;ae.length;)ae.pop()();for(let t=0;t<re.length;t+=1){const r=re[t];ye.has(r)||(ye.add(r),r())}re.length=0}while(H.length);for(;qe.length;)qe.pop()();xe=!1,ye.clear(),K(e)}function $t(e){if(e.fragment!==null){e.update(),G(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(we)}}const ne=new Set;let F;function Et(){F={r:0,c:[],p:F}}function Ot(){F.r||G(F.c),F=F.p}function V(e,t){e&&e.i&&(ne.delete(e),e.i(t))}function J(e,t,r,a){if(e&&e.o){if(ne.has(e))return;ne.add(e),F.c.push(()=>{ne.delete(e),a&&(r&&e.d(1),a())}),e.o(t)}else a&&a()}function Me(e){e&&e.c()}function ie(e,t,r,a){const{fragment:n,after_update:o}=e.$$;n&&n.m(t,r),a||we(()=>{const u=e.$$.on_mount.map(Ge).filter(Xe);e.$$.on_destroy?e.$$.on_destroy.push(...u):G(u),e.$$.on_mount=[]}),o.forEach(we)}function oe(e,t){const r=e.$$;r.fragment!==null&&(G(r.on_destroy),r.fragment&&r.fragment.d(t),r.on_destroy=r.fragment=null,r.ctx=[])}function St(e,t){e.$$.dirty[0]===-1&&(H.push(e),It(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function fe(e,t,r,a,n,o,u,f=[-1]){const i=Y;K(e);const s=e.$$={fragment:null,ctx:[],props:o,update:L,not_equal:n,bound:ze(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(i?i.$$.context:[])),callbacks:ze(),dirty:f,skip_bound:!1,root:t.target||i.$$.root};u&&u(s.root);let l=!1;if(s.ctx=r?r(e,t.props||{},(c,d,...m)=>{const h=m.length?m[0]:d;return s.ctx&&n(s.ctx[c],s.ctx[c]=h)&&(!s.skip_bound&&s.bound[c]&&s.bound[c](h),l&&St(e,c)),d}):[],s.update(),l=!0,G(s.before_update),s.fragment=a?a(s.ctx):!1,t.target){if(t.hydrate){const c=wt(t.target);s.fragment&&s.fragment.l(c),c.forEach(X)}else s.fragment&&s.fragment.c();t.intro&&V(e.$$.fragment),ie(e,t.target,t.anchor,t.customElement),et()}K(i)}class le{$destroy(){oe(this,1),this.$destroy=L}$on(t,r){if(!Xe(r))return L;const a=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return a.push(r),()=>{const n=a.indexOf(r);n!==-1&&a.splice(n,1)}}$set(t){this.$$set&&!bt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Te=[{category:"Reaction",score:80,icon:"/src/assets/icon-reaction.svg"},{category:"Memory",score:92,icon:"/src/assets/icon-memory.svg"},{category:"Verbal",score:61,icon:"/src/assets/icon-verbal.svg"},{category:"Visual",score:72,icon:"/src/assets/icon-visual.svg"}];var tt={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},Ie={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},Lt=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],ue={CSS:{},springs:{}};function O(e,t,r){return Math.min(Math.max(e,t),r)}function Q(e,t){return e.indexOf(t)>-1}function _e(e,t){return e.apply(null,t)}var v={arr:function(e){return Array.isArray(e)},obj:function(e){return Q(Object.prototype.toString.call(e),"Object")},pth:function(e){return v.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||v.svg(e)},str:function(e){return typeof e=="string"},fnc:function(e){return typeof e=="function"},und:function(e){return typeof e>"u"},nil:function(e){return v.und(e)||e===null},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return v.hex(e)||v.rgb(e)||v.hsl(e)},key:function(e){return!tt.hasOwnProperty(e)&&!Ie.hasOwnProperty(e)&&e!=="targets"&&e!=="keyframes"}};function rt(e){var t=/\(([^)]+)\)/.exec(e);return t?t[1].split(",").map(function(r){return parseFloat(r)}):[]}function nt(e,t){var r=rt(e),a=O(v.und(r[0])?1:r[0],.1,100),n=O(v.und(r[1])?100:r[1],.1,100),o=O(v.und(r[2])?10:r[2],.1,100),u=O(v.und(r[3])?0:r[3],.1,100),f=Math.sqrt(n/a),i=o/(2*Math.sqrt(n*a)),s=i<1?f*Math.sqrt(1-i*i):0,l=1,c=i<1?(i*f+-u)/s:-u+f;function d(h){var g=t?t*h/1e3:h;return i<1?g=Math.exp(-g*i*f)*(l*Math.cos(s*g)+c*Math.sin(s*g)):g=(l+c*g)*Math.exp(-g*f),h===0||h===1?h:1-g}function m(){var h=ue.springs[e];if(h)return h;for(var g=1/6,_=0,T=0;;)if(_+=g,d(_)===1){if(T++,T>=16)break}else T=0;var y=_*g*1e3;return ue.springs[e]=y,y}return t?d:m}function Dt(e){return e===void 0&&(e=10),function(t){return Math.ceil(O(t,1e-6,1)*e)*(1/e)}}var At=function(){var e=11,t=1/(e-1);function r(l,c){return 1-3*c+3*l}function a(l,c){return 3*c-6*l}function n(l){return 3*l}function o(l,c,d){return((r(c,d)*l+a(c,d))*l+n(c))*l}function u(l,c,d){return 3*r(c,d)*l*l+2*a(c,d)*l+n(c)}function f(l,c,d,m,h){var g,_,T=0;do _=c+(d-c)/2,g=o(_,m,h)-l,g>0?d=_:c=_;while(Math.abs(g)>1e-7&&++T<10);return _}function i(l,c,d,m){for(var h=0;h<4;++h){var g=u(c,d,m);if(g===0)return c;var _=o(c,d,m)-l;c-=_/g}return c}function s(l,c,d,m){if(!(0<=l&&l<=1&&0<=d&&d<=1))return;var h=new Float32Array(e);if(l!==c||d!==m)for(var g=0;g<e;++g)h[g]=o(g*t,l,d);function _(T){for(var y=0,p=1,P=e-1;p!==P&&h[p]<=T;++p)y+=t;--p;var k=(T-h[p])/(h[p+1]-h[p]),w=y+k*t,B=u(w,l,d);return B>=.001?i(T,w,l,d):B===0?w:f(T,y,y+t,l,d)}return function(T){return l===c&&d===m||T===0||T===1?T:o(_(T),c,m)}}return s}(),at=function(){var e={linear:function(){return function(a){return a}}},t={Sine:function(){return function(a){return 1-Math.cos(a*Math.PI/2)}},Circ:function(){return function(a){return 1-Math.sqrt(1-a*a)}},Back:function(){return function(a){return a*a*(3*a-2)}},Bounce:function(){return function(a){for(var n,o=4;a<((n=Math.pow(2,--o))-1)/11;);return 1/Math.pow(4,3-o)-7.5625*Math.pow((n*3-2)/22-a,2)}},Elastic:function(a,n){a===void 0&&(a=1),n===void 0&&(n=.5);var o=O(a,1,10),u=O(n,.1,2);return function(f){return f===0||f===1?f:-o*Math.pow(2,10*(f-1))*Math.sin((f-1-u/(Math.PI*2)*Math.asin(1/o))*(Math.PI*2)/u)}}},r=["Quad","Cubic","Quart","Quint","Expo"];return r.forEach(function(a,n){t[a]=function(){return function(o){return Math.pow(o,n+2)}}}),Object.keys(t).forEach(function(a){var n=t[a];e["easeIn"+a]=n,e["easeOut"+a]=function(o,u){return function(f){return 1-n(o,u)(1-f)}},e["easeInOut"+a]=function(o,u){return function(f){return f<.5?n(o,u)(f*2)/2:1-n(o,u)(f*-2+2)/2}},e["easeOutIn"+a]=function(o,u){return function(f){return f<.5?(1-n(o,u)(1-f*2))/2:(n(o,u)(f*2-1)+1)/2}}}),e}();function $e(e,t){if(v.fnc(e))return e;var r=e.split("(")[0],a=at[r],n=rt(e);switch(r){case"spring":return nt(e,t);case"cubicBezier":return _e(At,n);case"steps":return _e(Dt,n);default:return _e(a,n)}}function it(e){try{var t=document.querySelectorAll(e);return t}catch{return}}function de(e,t){for(var r=e.length,a=arguments.length>=2?arguments[1]:void 0,n=[],o=0;o<r;o++)if(o in e){var u=e[o];t.call(a,u,o,e)&&n.push(u)}return n}function ve(e){return e.reduce(function(t,r){return t.concat(v.arr(r)?ve(r):r)},[])}function Ue(e){return v.arr(e)?e:(v.str(e)&&(e=it(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function Ee(e,t){return e.some(function(r){return r===t})}function Oe(e){var t={};for(var r in e)t[r]=e[r];return t}function Ce(e,t){var r=Oe(e);for(var a in e)r[a]=t.hasOwnProperty(a)?t[a]:e[a];return r}function ge(e,t){var r=Oe(e);for(var a in t)r[a]=v.und(e[a])?t[a]:e[a];return r}function kt(e){var t=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e);return t?"rgba("+t[1]+",1)":e}function Bt(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,r=e.replace(t,function(f,i,s,l){return i+i+s+s+l+l}),a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r),n=parseInt(a[1],16),o=parseInt(a[2],16),u=parseInt(a[3],16);return"rgba("+n+","+o+","+u+",1)"}function Ft(e){var t=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),r=parseInt(t[1],10)/360,a=parseInt(t[2],10)/100,n=parseInt(t[3],10)/100,o=t[4]||1;function u(d,m,h){return h<0&&(h+=1),h>1&&(h-=1),h<1/6?d+(m-d)*6*h:h<1/2?m:h<2/3?d+(m-d)*(2/3-h)*6:d}var f,i,s;if(a==0)f=i=s=n;else{var l=n<.5?n*(1+a):n+a-n*a,c=2*n-l;f=u(c,l,r+1/3),i=u(c,l,r),s=u(c,l,r-1/3)}return"rgba("+f*255+","+i*255+","+s*255+","+o+")"}function Vt(e){if(v.rgb(e))return kt(e);if(v.hex(e))return Bt(e);if(v.hsl(e))return Ft(e)}function A(e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(t)return t[1]}function jt(e){if(Q(e,"translate")||e==="perspective")return"px";if(Q(e,"rotate")||Q(e,"skew"))return"deg"}function Pe(e,t){return v.fnc(e)?e(t.target,t.id,t.total):e}function S(e,t){return e.getAttribute(t)}function Se(e,t,r){var a=A(t);if(Ee([r,"deg","rad","turn"],a))return t;var n=ue.CSS[t+r];if(!v.und(n))return n;var o=100,u=document.createElement(e.tagName),f=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;f.appendChild(u),u.style.position="absolute",u.style.width=o+r;var i=o/u.offsetWidth;f.removeChild(u);var s=i*parseFloat(t);return ue.CSS[t+r]=s,s}function ot(e,t,r){if(t in e.style){var a=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),n=e.style[t]||getComputedStyle(e).getPropertyValue(a)||"0";return r?Se(e,n,r):n}}function Le(e,t){if(v.dom(e)&&!v.inp(e)&&(!v.nil(S(e,t))||v.svg(e)&&e[t]))return"attribute";if(v.dom(e)&&Ee(Lt,t))return"transform";if(v.dom(e)&&t!=="transform"&&ot(e,t))return"css";if(e[t]!=null)return"object"}function ut(e){if(v.dom(e)){for(var t=e.style.transform||"",r=/(\w+)\(([^)]*)\)/g,a=new Map,n;n=r.exec(t);)a.set(n[1],n[2]);return a}}function Rt(e,t,r,a){var n=Q(t,"scale")?1:0+jt(t),o=ut(e).get(t)||n;return r&&(r.transforms.list.set(t,o),r.transforms.last=t),a?Se(e,o,a):o}function De(e,t,r,a){switch(Le(e,t)){case"transform":return Rt(e,t,a,r);case"css":return ot(e,t,r);case"attribute":return S(e,t);default:return e[t]||0}}function Ae(e,t){var r=/^(\*=|\+=|-=)/.exec(e);if(!r)return e;var a=A(e)||0,n=parseFloat(t),o=parseFloat(e.replace(r[0],""));switch(r[0][0]){case"+":return n+o+a;case"-":return n-o+a;case"*":return n*o+a}}function st(e,t){if(v.col(e))return Vt(e);if(/\s/g.test(e))return e;var r=A(e),a=r?e.substr(0,e.length-r.length):e;return t?a+t:a}function ke(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function zt(e){return Math.PI*2*S(e,"r")}function Nt(e){return S(e,"width")*2+S(e,"height")*2}function Ht(e){return ke({x:S(e,"x1"),y:S(e,"y1")},{x:S(e,"x2"),y:S(e,"y2")})}function ct(e){for(var t=e.points,r=0,a,n=0;n<t.numberOfItems;n++){var o=t.getItem(n);n>0&&(r+=ke(a,o)),a=o}return r}function qt(e){var t=e.points;return ct(e)+ke(t.getItem(t.numberOfItems-1),t.getItem(0))}function ft(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return zt(e);case"rect":return Nt(e);case"line":return Ht(e);case"polyline":return ct(e);case"polygon":return qt(e)}}function Ut(e){var t=ft(e);return e.setAttribute("stroke-dasharray",t),t}function Wt(e){for(var t=e.parentNode;v.svg(t)&&v.svg(t.parentNode);)t=t.parentNode;return t}function lt(e,t){var r=t||{},a=r.el||Wt(e),n=a.getBoundingClientRect(),o=S(a,"viewBox"),u=n.width,f=n.height,i=r.viewBox||(o?o.split(" "):[0,0,u,f]);return{el:a,viewBox:i,x:i[0]/1,y:i[1]/1,w:u,h:f,vW:i[2],vH:i[3]}}function Zt(e,t){var r=v.str(e)?it(e)[0]:e,a=t||100;return function(n){return{property:n,el:r,svg:lt(r),totalLength:ft(r)*(a/100)}}}function Kt(e,t,r){function a(l){l===void 0&&(l=0);var c=t+l>=1?t+l:0;return e.el.getPointAtLength(c)}var n=lt(e.el,e.svg),o=a(),u=a(-1),f=a(1),i=r?1:n.w/n.vW,s=r?1:n.h/n.vH;switch(e.property){case"x":return(o.x-n.x)*i;case"y":return(o.y-n.y)*s;case"angle":return Math.atan2(f.y-u.y,f.x-u.x)*180/Math.PI}}function We(e,t){var r=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,a=st(v.pth(e)?e.totalLength:e,t)+"";return{original:a,numbers:a.match(r)?a.match(r).map(Number):[0],strings:v.str(e)||t?a.split(r):[]}}function Be(e){var t=e?ve(v.arr(e)?e.map(Ue):Ue(e)):[];return de(t,function(r,a,n){return n.indexOf(r)===a})}function dt(e){var t=Be(e);return t.map(function(r,a){return{target:r,id:a,total:t.length,transforms:{list:ut(r)}}})}function Qt(e,t){var r=Oe(t);if(/^spring/.test(r.easing)&&(r.duration=nt(r.easing)),v.arr(e)){var a=e.length,n=a===2&&!v.obj(e[0]);n?e={value:e}:v.fnc(t.duration)||(r.duration=t.duration/a)}var o=v.arr(e)?e:[e];return o.map(function(u,f){var i=v.obj(u)&&!v.pth(u)?u:{value:u};return v.und(i.delay)&&(i.delay=f?0:t.delay),v.und(i.endDelay)&&(i.endDelay=f===o.length-1?t.endDelay:0),i}).map(function(u){return ge(u,r)})}function Yt(e){for(var t=de(ve(e.map(function(o){return Object.keys(o)})),function(o){return v.key(o)}).reduce(function(o,u){return o.indexOf(u)<0&&o.push(u),o},[]),r={},a=function(o){var u=t[o];r[u]=e.map(function(f){var i={};for(var s in f)v.key(s)?s==u&&(i.value=f[s]):i[s]=f[s];return i})},n=0;n<t.length;n++)a(n);return r}function Jt(e,t){var r=[],a=t.keyframes;a&&(t=ge(Yt(a),t));for(var n in t)v.key(n)&&r.push({name:n,tweens:Qt(t[n],e)});return r}function Gt(e,t){var r={};for(var a in e){var n=Pe(e[a],t);v.arr(n)&&(n=n.map(function(o){return Pe(o,t)}),n.length===1&&(n=n[0])),r[a]=n}return r.duration=parseFloat(r.duration),r.delay=parseFloat(r.delay),r}function Xt(e,t){var r;return e.tweens.map(function(a){var n=Gt(a,t),o=n.value,u=v.arr(o)?o[1]:o,f=A(u),i=De(t.target,e.name,f,t),s=r?r.to.original:i,l=v.arr(o)?o[0]:s,c=A(l)||A(i),d=f||c;return v.und(u)&&(u=s),n.from=We(l,d),n.to=We(Ae(u,l),d),n.start=r?r.end:0,n.end=n.start+n.delay+n.duration+n.endDelay,n.easing=$e(n.easing,n.duration),n.isPath=v.pth(o),n.isPathTargetInsideSVG=n.isPath&&v.svg(t.target),n.isColor=v.col(n.from.original),n.isColor&&(n.round=1),r=n,n})}var vt={css:function(e,t,r){return e.style[t]=r},attribute:function(e,t,r){return e.setAttribute(t,r)},object:function(e,t,r){return e[t]=r},transform:function(e,t,r,a,n){if(a.list.set(t,r),t===a.last||n){var o="";a.list.forEach(function(u,f){o+=f+"("+u+") "}),e.style.transform=o}}};function gt(e,t){var r=dt(e);r.forEach(function(a){for(var n in t){var o=Pe(t[n],a),u=a.target,f=A(o),i=De(u,n,f,a),s=f||A(i),l=Ae(st(o,s),i),c=Le(u,n);vt[c](u,n,l,a.transforms,!0)}})}function er(e,t){var r=Le(e.target,t.name);if(r){var a=Xt(t,e),n=a[a.length-1];return{type:r,property:t.name,animatable:e,tweens:a,duration:n.end,delay:a[0].delay,endDelay:n.endDelay}}}function tr(e,t){return de(ve(e.map(function(r){return t.map(function(a){return er(r,a)})})),function(r){return!v.und(r)})}function ht(e,t){var r=e.length,a=function(o){return o.timelineOffset?o.timelineOffset:0},n={};return n.duration=r?Math.max.apply(Math,e.map(function(o){return a(o)+o.duration})):t.duration,n.delay=r?Math.min.apply(Math,e.map(function(o){return a(o)+o.delay})):t.delay,n.endDelay=r?n.duration-Math.max.apply(Math,e.map(function(o){return a(o)+o.duration-o.endDelay})):t.endDelay,n}var Ze=0;function rr(e){var t=Ce(tt,e),r=Ce(Ie,e),a=Jt(r,e),n=dt(e.targets),o=tr(n,a),u=ht(o,r),f=Ze;return Ze++,ge(t,{id:f,children:[],animatables:n,animations:o,duration:u.duration,delay:u.delay,endDelay:u.endDelay})}var E=[],mt=function(){var e;function t(){!e&&(!Ke()||!x.suspendWhenDocumentHidden)&&E.length>0&&(e=requestAnimationFrame(r))}function r(n){for(var o=E.length,u=0;u<o;){var f=E[u];f.paused?(E.splice(u,1),o--):(f.tick(n),u++)}e=u>0?requestAnimationFrame(r):void 0}function a(){x.suspendWhenDocumentHidden&&(Ke()?e=cancelAnimationFrame(e):(E.forEach(function(n){return n._onDocumentVisibility()}),mt()))}return typeof document<"u"&&document.addEventListener("visibilitychange",a),t}();function Ke(){return!!document&&document.hidden}function x(e){e===void 0&&(e={});var t=0,r=0,a=0,n,o=0,u=null;function f(y){var p=window.Promise&&new Promise(function(P){return u=P});return y.finished=p,p}var i=rr(e);f(i);function s(){var y=i.direction;y!=="alternate"&&(i.direction=y!=="normal"?"normal":"reverse"),i.reversed=!i.reversed,n.forEach(function(p){return p.reversed=i.reversed})}function l(y){return i.reversed?i.duration-y:y}function c(){t=0,r=l(i.currentTime)*(1/x.speed)}function d(y,p){p&&p.seek(y-p.timelineOffset)}function m(y){if(i.reversePlayback)for(var P=o;P--;)d(y,n[P]);else for(var p=0;p<o;p++)d(y,n[p])}function h(y){for(var p=0,P=i.animations,k=P.length;p<k;){var w=P[p],B=w.animatable,q=w.tweens,j=q.length-1,C=q[j];j&&(C=de(q,function(_t){return y<_t.end})[0]||C);for(var R=O(y-C.start-C.delay,0,C.duration)/C.duration,ee=isNaN(R)?1:C.easing(R),$=C.to.strings,he=C.round,me=[],yt=C.to.numbers.length,z=void 0,U=0;U<yt;U++){var W=void 0,Fe=C.to.numbers[U],Ve=C.from.numbers[U]||0;C.isPath?W=Kt(C.value,ee*Fe,C.isPathTargetInsideSVG):W=Ve+ee*(Fe-Ve),he&&(C.isColor&&U>2||(W=Math.round(W*he)/he)),me.push(W)}var je=$.length;if(!je)z=me[0];else{z=$[0];for(var Z=0;Z<je;Z++){$[Z];var Re=$[Z+1],pe=me[Z];isNaN(pe)||(Re?z+=pe+Re:z+=pe+" ")}}vt[w.type](B.target,w.property,z,B.transforms),w.currentValue=z,p++}}function g(y){i[y]&&!i.passThrough&&i[y](i)}function _(){i.remaining&&i.remaining!==!0&&i.remaining--}function T(y){var p=i.duration,P=i.delay,k=p-i.endDelay,w=l(y);i.progress=O(w/p*100,0,100),i.reversePlayback=w<i.currentTime,n&&m(w),!i.began&&i.currentTime>0&&(i.began=!0,g("begin")),!i.loopBegan&&i.currentTime>0&&(i.loopBegan=!0,g("loopBegin")),w<=P&&i.currentTime!==0&&h(0),(w>=k&&i.currentTime!==p||!p)&&h(p),w>P&&w<k?(i.changeBegan||(i.changeBegan=!0,i.changeCompleted=!1,g("changeBegin")),g("change"),h(w)):i.changeBegan&&(i.changeCompleted=!0,i.changeBegan=!1,g("changeComplete")),i.currentTime=O(w,0,p),i.began&&g("update"),y>=p&&(r=0,_(),i.remaining?(t=a,g("loopComplete"),i.loopBegan=!1,i.direction==="alternate"&&s()):(i.paused=!0,i.completed||(i.completed=!0,g("loopComplete"),g("complete"),!i.passThrough&&"Promise"in window&&(u(),f(i)))))}return i.reset=function(){var y=i.direction;i.passThrough=!1,i.currentTime=0,i.progress=0,i.paused=!0,i.began=!1,i.loopBegan=!1,i.changeBegan=!1,i.completed=!1,i.changeCompleted=!1,i.reversePlayback=!1,i.reversed=y==="reverse",i.remaining=i.loop,n=i.children,o=n.length;for(var p=o;p--;)i.children[p].reset();(i.reversed&&i.loop!==!0||y==="alternate"&&i.loop===1)&&i.remaining++,h(i.reversed?i.duration:0)},i._onDocumentVisibility=c,i.set=function(y,p){return gt(y,p),i},i.tick=function(y){a=y,t||(t=a),T((a+(r-t))*x.speed)},i.seek=function(y){T(l(y))},i.pause=function(){i.paused=!0,c()},i.play=function(){i.paused&&(i.completed&&i.reset(),i.paused=!1,E.push(i),c(),mt())},i.reverse=function(){s(),i.completed=!i.reversed,c()},i.restart=function(){i.reset(),i.play()},i.remove=function(y){var p=Be(y);pt(p,i)},i.reset(),i.autoplay&&i.play(),i}function Qe(e,t){for(var r=t.length;r--;)Ee(e,t[r].animatable.target)&&t.splice(r,1)}function pt(e,t){var r=t.animations,a=t.children;Qe(e,r);for(var n=a.length;n--;){var o=a[n],u=o.animations;Qe(e,u),!u.length&&!o.children.length&&a.splice(n,1)}!r.length&&!a.length&&t.pause()}function nr(e){for(var t=Be(e),r=E.length;r--;){var a=E[r];pt(t,a)}}function ar(e,t){t===void 0&&(t={});var r=t.direction||"normal",a=t.easing?$e(t.easing):null,n=t.grid,o=t.axis,u=t.from||0,f=u==="first",i=u==="center",s=u==="last",l=v.arr(e),c=parseFloat(l?e[0]:e),d=l?parseFloat(e[1]):0,m=A(l?e[1]:e)||0,h=t.start||0+(l?c:0),g=[],_=0;return function(T,y,p){if(f&&(u=0),i&&(u=(p-1)/2),s&&(u=p-1),!g.length){for(var P=0;P<p;P++){if(!n)g.push(Math.abs(u-P));else{var k=i?(n[0]-1)/2:u%n[0],w=i?(n[1]-1)/2:Math.floor(u/n[0]),B=P%n[0],q=Math.floor(P/n[0]),j=k-B,C=w-q,R=Math.sqrt(j*j+C*C);o==="x"&&(R=-j),o==="y"&&(R=-C),g.push(R)}_=Math.max.apply(Math,g)}a&&(g=g.map(function($){return a($/_)*_})),r==="reverse"&&(g=g.map(function($){return o?$<0?$*-1:-$:Math.abs(_-$)}))}var ee=l?(d-c)/_:c;return h+ee*(Math.round(g[y]*100)/100)+m}}function ir(e){e===void 0&&(e={});var t=x(e);return t.duration=0,t.add=function(r,a){var n=E.indexOf(t),o=t.children;n>-1&&E.splice(n,1);function u(d){d.passThrough=!0}for(var f=0;f<o.length;f++)u(o[f]);var i=ge(r,Ce(Ie,e));i.targets=i.targets||e.targets;var s=t.duration;i.autoplay=!1,i.direction=t.direction,i.timelineOffset=v.und(a)?s:Ae(a,s),u(t),t.seek(i.timelineOffset);var l=x(i);u(l),o.push(l);var c=ht(o,e);return t.delay=c.delay,t.endDelay=c.endDelay,t.duration=c.duration,t.seek(0),t.reset(),t.autoplay&&t.play(),t},t}x.version="3.2.1";x.speed=1;x.suspendWhenDocumentHidden=!0;x.running=E;x.remove=nr;x.get=De;x.set=gt;x.convertPx=Se;x.path=Zt;x.setDashoffset=Ut;x.stagger=ar;x.timeline=ir;x.easing=$e;x.penner=at;x.random=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};function or(e){let t,r,a,n,o,u,f,i,s;return{c(){t=I("div"),r=I("h3"),r.textContent="Your Result",a=D(),n=I("div"),o=I("h1"),o.textContent="0",u=D(),f=I("p"),f.textContent="of 100",i=D(),s=I("div"),s.innerHTML=`<h2 class="svelte-492s85">Great</h2> 
        <p class="result-text svelte-492s85">Your performance exceeded 65% of people conducting the test!</p>`,M(r,"class","svelte-492s85"),M(o,"class","svelte-492s85"),M(f,"class","out-of svelte-492s85"),M(n,"class","result-container svelte-492s85"),Mt(s,"opacity","0"),M(t,"class","card svelte-492s85")},m(l,c){ce(l,t,c),b(t,r),b(t,a),b(t,n),b(n,o),e[3](o),b(n,u),b(n,f),b(t,i),b(t,s),e[4](s)},p:L,i:L,o:L,d(l){l&&X(t),e[3](null),e[4](null)}}}function ur(e,t,r){let{result:a}=t,n,o;Ct(()=>{x.timeline().add({targets:n,innerHTML:a,easing:"easeOutCirc",round:1,duration:4e3,delay:500}).add({targets:o,opacity:1,duration:1e3,easing:"easeInExpo"},"-=1000")});function u(i){ae[i?"unshift":"push"](()=>{n=i,r(0,n)})}function f(i){ae[i?"unshift":"push"](()=>{o=i,r(1,o)})}return e.$$set=i=>{"result"in i&&r(2,a=i.result)},[n,o,a,u,f]}class sr extends le{constructor(t){super(),fe(this,t,ur,or,se,{result:2})}}function cr(e){let t,r,a,n,o,u,f,i,s,l,c,d,m,h;return{c(){t=I("div"),r=I("img"),o=D(),u=I("span"),f=be(e[0]),i=D(),s=I("div"),l=I("span"),c=be(e[1]),d=D(),m=I("span"),m.textContent="/ 100",Ne(r.src,a=e[2])||M(r,"src",a),M(r,"alt",n=e[0]+" icon"),M(u,"class","category svelte-1pc5hi1"),M(l,"class","score svelte-1pc5hi1"),M(m,"class","out-of svelte-1pc5hi1"),M(s,"class","score-container svelte-1pc5hi1"),M(t,"class",h="card "+e[0].toLowerCase()+" svelte-1pc5hi1")},m(g,_){ce(g,t,_),b(t,r),b(t,o),b(t,u),b(u,f),b(t,i),b(t,s),b(s,l),b(l,c),b(s,d),b(s,m)},p(g,[_]){_&4&&!Ne(r.src,a=g[2])&&M(r,"src",a),_&1&&n!==(n=g[0]+" icon")&&M(r,"alt",n),_&1&&He(f,g[0]),_&2&&He(c,g[1]),_&1&&h!==(h="card "+g[0].toLowerCase()+" svelte-1pc5hi1")&&M(t,"class",h)},i:L,o:L,d(g){g&&X(t)}}}function fr(e,t,r){let{category:a}=t,{score:n}=t,{icon:o}=t;return e.$$set=u=>{"category"in u&&r(0,a=u.category),"score"in u&&r(1,n=u.score),"icon"in u&&r(2,o=u.icon)},[a,n,o]}class lr extends le{constructor(t){super(),fe(this,t,fr,cr,se,{category:0,score:1,icon:2})}}function Ye(e,t,r){const a=e.slice();return a[1]=t[r],a}function Je(e){let t,r;return t=new lr({props:{category:e[1].category,score:e[1].score,icon:e[1].icon}}),{c(){Me(t.$$.fragment)},m(a,n){ie(t,a,n),r=!0},p(a,n){const o={};n&1&&(o.category=a[1].category),n&1&&(o.score=a[1].score),n&1&&(o.icon=a[1].icon),t.$set(o)},i(a){r||(V(t.$$.fragment,a),r=!0)},o(a){J(t.$$.fragment,a),r=!1},d(a){oe(t,a)}}}function dr(e){let t,r,a,n,o,u,f,i=e[0],s=[];for(let c=0;c<i.length;c+=1)s[c]=Je(Ye(e,i,c));const l=c=>J(s[c],1,1,()=>{s[c]=null});return{c(){t=I("div"),r=I("h3"),r.textContent="Summary",a=D(),n=I("div");for(let c=0;c<s.length;c+=1)s[c].c();o=D(),u=I("button"),u.textContent="Continue",M(r,"class","svelte-1nuowlr"),M(n,"class","items svelte-1nuowlr"),M(u,"type","button"),M(u,"class","svelte-1nuowlr"),M(t,"class","card svelte-1nuowlr")},m(c,d){ce(c,t,d),b(t,r),b(t,a),b(t,n);for(let m=0;m<s.length;m+=1)s[m].m(n,null);b(t,o),b(t,u),f=!0},p(c,[d]){if(d&1){i=c[0];let m;for(m=0;m<i.length;m+=1){const h=Ye(c,i,m);s[m]?(s[m].p(h,d),V(s[m],1)):(s[m]=Je(h),s[m].c(),V(s[m],1),s[m].m(n,null))}for(Et(),m=i.length;m<s.length;m+=1)l(m);Ot()}},i(c){if(!f){for(let d=0;d<i.length;d+=1)V(s[d]);f=!0}},o(c){s=s.filter(Boolean);for(let d=0;d<s.length;d+=1)J(s[d]);f=!1},d(c){c&&X(t),xt(s,c)}}}function vr(e,t,r){let{data:a}=t;return e.$$set=n=>{"data"in n&&r(0,a=n.data)},[a]}class gr extends le{constructor(t){super(),fe(this,t,vr,dr,se,{data:0})}}function hr(e){let t,r,a,n,o;return r=new sr({props:{result:e[0]}}),n=new gr({props:{data:Te}}),{c(){t=I("main"),Me(r.$$.fragment),a=D(),Me(n.$$.fragment),M(t,"class","svelte-1dhi5ey")},m(u,f){ce(u,t,f),ie(r,t,null),b(t,a),ie(n,t,null),o=!0},p:L,i(u){o||(V(r.$$.fragment,u),V(n.$$.fragment,u),o=!0)},o(u){J(r.$$.fragment,u),J(n.$$.fragment,u),o=!1},d(u){u&&X(t),oe(r),oe(n)}}}function mr(e){let t=Te.reduce((n,o)=>n+o.score,0),r=Te.length*100;return[Math.round(t/r*100)]}class pr extends le{constructor(t){super(),fe(this,t,mr,hr,se,{})}}new pr({target:document.getElementById("app")});
