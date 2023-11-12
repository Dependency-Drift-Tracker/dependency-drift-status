let t,e,i,n,r;function a(t){return t&&t.__esModule?t.default:t}/*!
 * Chart.js v4.4.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 *//*!
 * Chart.js v4.4.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 *//*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */function o(t){return t+.5|0}const s=(t,e,i)=>Math.max(Math.min(t,i),e);function l(t){return s(o(2.55*t),0,255)}function h(t){return s(o(255*t),0,255)}function c(t){return s(o(t/2.55)/100,0,1)}function u(t){return s(o(100*t),0,100)}const d={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},f=[..."0123456789ABCDEF"],p=t=>f[15&t],g=t=>f[(240&t)>>4]+f[15&t],m=t=>(240&t)>>4==(15&t),b=t=>m(t.r)&&m(t.g)&&m(t.b)&&m(t.a),v=(t,e)=>t<255?e(t):"",y=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function x(t,e,i){let n=e*Math.min(i,1-i),r=(e,r=(e+t/30)%12)=>i-n*Math.max(Math.min(r-3,9-r,1),-1);return[r(0),r(8),r(4)]}function _(t,e,i){let n=(n,r=(n+t/60)%6)=>i-i*e*Math.max(Math.min(r,4-r,1),0);return[n(5),n(3),n(1)]}function w(t,e,i){let n;let r=x(t,1,.5);for(e+i>1&&(n=1/(e+i),e*=n,i*=n),n=0;n<3;n++)r[n]*=1-e-i,r[n]+=e;return r}function S(t){let e,i,n;let r=t.r/255,a=t.g/255,o=t.b/255,s=Math.max(r,a,o),l=Math.min(r,a,o),h=(s+l)/2;return s!==l&&(n=s-l,i=h>.5?n/(2-s-l):n/(s+l),e=60*(e=r===s?(a-o)/n+(a<o?6:0):a===s?(o-r)/n+2:(r-a)/n+4)+.5),[0|e,i||0,h]}function D(t,e,i,n){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,i,n)).map(h)}function C(t){return(t%360+360)%360}const T={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},k={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"},M=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/,A=t=>t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055,P=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4);function L(t,e,i){if(t){let n=S(t);n[e]=Math.max(0,Math.min(n[e]+n[e]*i,0===e?360:1)),n=D(x,n,void 0,void 0),t.r=n[0],t.g=n[1],t.b=n[2]}}function E(t,e){return t?Object.assign(e||{},t):t}function I(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=h(t[3]))):(e=E(t,{r:0,g:0,b:0,a:1})).a=h(e.a),e}class O{constructor(e){let i;if(e instanceof O)return e;let n=typeof e;if("object"===n)i=I(e);else if("string"===n){var r,a;a=e.length,"#"===e[0]&&(4===a||5===a?r={r:255&17*d[e[1]],g:255&17*d[e[2]],b:255&17*d[e[3]],a:5===a?17*d[e[4]]:255}:(7===a||9===a)&&(r={r:d[e[1]]<<4|d[e[2]],g:d[e[3]]<<4|d[e[4]],b:d[e[5]]<<4|d[e[6]],a:9===a?d[e[7]]<<4|d[e[8]]:255})),i=r||function(e){t||((t=function(){let t,e,i,n,r;let a={},o=Object.keys(k),s=Object.keys(T);for(t=0;t<o.length;t++){for(e=0,n=r=o[t];e<s.length;e++)i=s[e],r=r.replace(i,T[i]);i=parseInt(k[n],16),a[r]=[i>>16&255,i>>8&255,255&i]}return a}()).transparent=[0,0,0,0]);let i=t[e.toLowerCase()];return i&&{r:i[0],g:i[1],b:i[2],a:4===i.length?i[3]:255}}(e)||("r"===e.charAt(0)?function(t){let e,i,n;let r=M.exec(t),a=255;if(r){if(r[7]!==e){let t=+r[7];a=r[8]?l(t):s(255*t,0,255)}return e=+r[1],i=+r[3],n=+r[5],{r:e=255&(r[2]?l(e):s(e,0,255)),g:i=255&(r[4]?l(i):s(i,0,255)),b:n=255&(r[6]?l(n):s(n,0,255)),a:a}}}(e):function(t){let e;let i=y.exec(t),n=255;if(!i)return;i[5]!==e&&(n=i[6]?l(+i[5]):h(+i[5]));let r=C(+i[2]),a=+i[3]/100,o=+i[4]/100;return{r:(e="hwb"===i[1]?D(w,r,a,o):"hsv"===i[1]?D(_,r,a,o):D(x,r,a,o))[0],g:e[1],b:e[2],a:n}}(e))}this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var t=E(this._rgb);return t&&(t.a=c(t.a)),t}set rgb(t){this._rgb=I(t)}rgbString(){var t;return this._valid?(t=this._rgb)&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${c(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`):void 0}hexString(){var t,e;return this._valid?(e=b(t=this._rgb)?p:g,t?"#"+e(t.r)+e(t.g)+e(t.b)+v(t.a,e):void 0):void 0}hslString(){return this._valid?function(t){if(!t)return;let e=S(t),i=e[0],n=u(e[1]),r=u(e[2]);return t.a<255?`hsla(${i}, ${n}%, ${r}%, ${c(t.a)})`:`hsl(${i}, ${n}%, ${r}%)`}(this._rgb):void 0}mix(t,e){if(t){let i;let n=this.rgb,r=t.rgb,a=e===i?.5:e,o=2*a-1,s=n.a-r.a,l=((o*s==-1?o:(o+s)/(1+o*s))+1)/2;i=1-l,n.r=255&l*n.r+i*r.r+.5,n.g=255&l*n.g+i*r.g+.5,n.b=255&l*n.b+i*r.b+.5,n.a=a*n.a+(1-a)*r.a,this.rgb=n}return this}interpolate(t,e){return t&&(this._rgb=function(t,e,i){let n=P(c(t.r)),r=P(c(t.g)),a=P(c(t.b));return{r:h(A(n+i*(P(c(e.r))-n))),g:h(A(r+i*(P(c(e.g))-r))),b:h(A(a+i*(P(c(e.b))-a))),a:t.a+i*(e.a-t.a)}}(this._rgb,t._rgb,e)),this}clone(){return new O(this.rgb)}alpha(t){return this._rgb.a=h(t),this}clearer(t){let e=this._rgb;return e.a*=1-t,this}greyscale(){let t=this._rgb,e=o(.3*t.r+.59*t.g+.11*t.b);return t.r=t.g=t.b=e,this}opaquer(t){let e=this._rgb;return e.a*=1+t,this}negate(){let t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return L(this._rgb,2,t),this}darken(t){return L(this._rgb,2,-t),this}saturate(t){return L(this._rgb,1,t),this}desaturate(t){return L(this._rgb,1,-t),this}rotate(t){var e,i;return(i=S(e=this._rgb))[0]=C(i[0]+t),i=D(x,i,void 0,void 0),e.r=i[0],e.g=i[1],e.b=i[2],this}}/**
 * @namespace Chart.helpers
 *//**
 * An empty function that can be used, for example, for optional callback.
 */function R(){/* noop */}/**
 * Returns a unique id, sequentially generated from a global variable.
 */const F=(r=0,()=>r++);/**
 * Returns true if `value` is neither null nor undefined, else returns false.
 * @param value - The value to test.
 * @since 2.7.0
 */function j(t){return null==t}/**
 * Returns true if `value` is an array (including typed arrays), else returns false.
 * @param value - The value to test.
 * @function
 */function N(t){if(Array.isArray&&Array.isArray(t))return!0;let e=Object.prototype.toString.call(t);return"[object"===e.slice(0,7)&&"Array]"===e.slice(-6)}/**
 * Returns true if `value` is an object (excluding null), else returns false.
 * @param value - The value to test.
 * @since 2.7.0
 */function H(t){return null!==t&&"[object Object]"===Object.prototype.toString.call(t)}/**
 * Returns true if `value` is a finite number, else returns false
 * @param value  - The value to test.
 */function W(t){return("number"==typeof t||t instanceof Number)&&isFinite(+t)}/**
 * Returns `value` if finite, else returns `defaultValue`.
 * @param value - The value to return if defined.
 * @param defaultValue - The value to return if `value` is not finite.
 */function B(t,e){return W(t)?t:e}/**
 * Returns `value` if defined, else returns `defaultValue`.
 * @param value - The value to return if defined.
 * @param defaultValue - The value to return if `value` is undefined.
 */function z(t,e){return void 0===t?e:t}const V=(t,e)=>"string"==typeof t&&t.endsWith("%")?parseFloat(t)/100:+t/e,$=(t,e)=>"string"==typeof t&&t.endsWith("%")?parseFloat(t)/100*e:+t;/**
 * Calls `fn` with the given `args` in the scope defined by `thisArg` and returns the
 * value returned by `fn`. If `fn` is not a function, this method returns undefined.
 * @param fn - The function to call.
 * @param args - The arguments with which `fn` should be called.
 * @param [thisArg] - The value of `this` provided for the call to `fn`.
 */function q(t,e,i){if(t&&"function"==typeof t.call)return t.apply(i,e)}function U(t,e,i,n){let r,a,o;if(N(t)){if(a=t.length,n)for(r=a-1;r>=0;r--)e.call(i,t[r],r);else for(r=0;r<a;r++)e.call(i,t[r],r)}else if(H(t))for(r=0,a=(o=Object.keys(t)).length;r<a;r++)e.call(i,t[o[r]],o[r])}/**
 * Returns true if the `a0` and `a1` arrays have the same content, else returns false.
 * @param a0 - The array to compare
 * @param a1 - The array to compare
 * @private
 */function X(t,e){let i,n,r,a;if(!t||!e||t.length!==e.length)return!1;for(i=0,n=t.length;i<n;++i)if(r=t[i],a=e[i],r.datasetIndex!==a.datasetIndex||r.index!==a.index)return!1;return!0}/**
 * Returns a deep copy of `source` without keeping references on objects and arrays.
 * @param source - The value to clone.
 */function Y(t){if(N(t))return t.map(Y);if(H(t)){let e=Object.create(null),i=Object.keys(t),n=i.length,r=0;for(;r<n;++r)e[i[r]]=Y(t[i[r]]);return e}return t}function J(t){return -1===["__proto__","prototype","constructor"].indexOf(t)}/**
 * The default merger when Chart.helpers.merge is called without merger option.
 * Note(SB): also used by mergeConfig and mergeScaleConfig as fallback.
 * @private
 */function G(t,e,i,n){if(!J(t))return;let r=e[t],a=i[t];H(r)&&H(a)?K(r,a,n):e[t]=Y(a)}function K(t,e,i){let n;let r=N(e)?e:[e],a=r.length;if(!H(t))return t;i=i||{};let o=i.merger||G;for(let e=0;e<a;++e){if(!H(n=r[e]))continue;let a=Object.keys(n);for(let e=0,r=a.length;e<r;++e)o(a[e],t,n,i)}return t}function Z(t,e){// eslint-disable-next-line @typescript-eslint/no-use-before-define
return K(t,e,{merger:Q})}/**
 * Merges source[key] in target[key] only if target[key] is undefined.
 * @private
 */function Q(t,e,i){if(!J(t))return;let n=e[t],r=i[t];H(n)&&H(r)?Z(n,r):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=Y(r))}// resolveObjectKey resolver cache
const tt={// Chart.helpers.core resolveObjectKey should resolve empty key to root object
"":t=>t,// default resolvers
x:t=>t.x,y:t=>t.y};function te(t,e){let i=tt[e]||(tt[e]=function(t){let e=/**
 * @private
 */function(t){let e=t.split("."),i=[],n="";for(let t of e)(n+=t).endsWith("\\")?n=n.slice(0,-1)+".":(i.push(n),n="");return i}(t);return t=>{for(let i of e){if(""===i)break;t=t&&t[i]}return t}}(e));return i(t)}/**
 * @private
 */function ti(t){return t.charAt(0).toUpperCase()+t.slice(1)}const tn=t=>void 0!==t,tr=t=>"function"==typeof t,ta=(t,e)=>{if(t.size!==e.size)return!1;for(let i of t)if(!e.has(i))return!1;return!0},to=Math.PI,ts=2*to,tl=ts+to,th=Number.POSITIVE_INFINITY,tc=to/180,tu=to/2,td=to/4,tf=2*to/3,tp=Math.log10,tg=Math.sign;function tm(t,e,i){return Math.abs(t-e)<i}/**
 * Implementation of the nice number algorithm used in determining where axis labels will go
 */function tb(t){let e=Math.round(t);t=tm(t,e,t/1e3)?e:t;let i=Math.pow(10,Math.floor(tp(t))),n=t/i;return(n<=1?1:n<=2?2:n<=5?5:10)*i}function tv(t){return!isNaN(parseFloat(t))&&isFinite(t)}/**
 * @private
 */function ty(t,e,i){let n,r,a;for(n=0,r=t.length;n<r;n++)isNaN(a=t[n][i])||(e.min=Math.min(e.min,a),e.max=Math.max(e.max,a))}function tx(t){return t*(to/180)}/**
 * Returns the number of decimal places
 * i.e. the number of digits after the decimal point, of the value of this Number.
 * @param x - A number.
 * @returns The number of decimal places.
 * @private
 */function t_(t){if(!W(t))return;let e=1,i=0;for(;Math.round(t*e)/e!==t;)e*=10,i++;return i}// Gets the angle from vertical upright to the point about a centre.
function tw(t,e){let i=e.x-t.x,n=e.y-t.y,r=Math.atan2(n,i);return r<-.5*to&&(r+=ts),{angle:r,distance:Math.sqrt(i*i+n*n)}}function tS(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}/**
 * Shortest distance between angles, in either direction.
 * @private
 */function tD(t,e){return(t-e+tl)%ts-to}/**
 * Normalize angle to be between 0 and 2*PI
 * @private
 */function tC(t){return(t%ts+ts)%ts}/**
 * @private
 */function tT(t,e,i,n){let r=tC(t),a=tC(e),o=tC(i),s=tC(a-r),l=tC(o-r),h=tC(r-a),c=tC(r-o);return r===a||r===o||n&&a===o||s>l&&h<c}/**
 * Limit `value` between `min` and `max`
 * @param value
 * @param min
 * @param max
 * @private
 */function tk(t,e,i){return Math.max(e,Math.min(i,t))}/**
 * @param value
 * @param start
 * @param end
 * @param [epsilon]
 * @private
 */function tM(t,e,i,n=1e-6){return t>=Math.min(e,i)-n&&t<=Math.max(e,i)+n}function tA(t,e,i){let n;i=i||(i=>t[i]<e);let r=t.length-1,a=0;for(;r-a>1;)i(n=a+r>>1)?a=n:r=n;return{lo:a,hi:r}}/**
 * Binary search
 * @param table - the table search. must be sorted!
 * @param key - property name for the value in each entry
 * @param value - value to find
 * @param last - lookup last index
 * @private
 */const tP=(t,e,i,n)=>tA(t,i,n?n=>{let r=t[n][e];return r<i||r===i&&t[n+1][e]===i}:n=>t[n][e]<i),tL=(t,e,i)=>tA(t,i,n=>t[n][e]>=i),tE=["push","pop","shift","splice","unshift"];function tI(t,e){let i=t._chartjs;if(!i)return;let n=i.listeners,r=n.indexOf(e);-1!==r&&n.splice(r,1),n.length>0||(tE.forEach(e=>{delete t[e]}),delete t._chartjs)}/**
 * @param items
 */function tO(t){let e=new Set(t);return e.size===t.length?t:Array.from(e)}/**
* Request animation polyfill
*/const tR="undefined"==typeof window?function(t){return t()}:window.requestAnimationFrame;/**
 * Throttles calling `fn` once per animation frame
 * Latest arguments are used on the actual call
 */function tF(t,e){let i=[],n=!1;return function(...r){// Save the args for use later
i=r,n||(n=!0,tR.call(window,()=>{n=!1,t.apply(e,i)}))}}/**
 * Converts 'start' to 'left', 'end' to 'right' and others to 'center'
 * @private
 */const tj=t=>"start"===t?"left":"end"===t?"right":"center",tN=(t,e,i)=>"start"===t?e:"end"===t?i:(e+i)/2,tH=(t,e,i,n)=>t===(n?"left":"right")?i:"center"===t?(e+i)/2:e;/**
 * Return start and count of visible points.
 * @private
 */function tW(t,e,i){let n=e.length,r=0,a=n;if(t._sorted){let{iScale:o,_parsed:s}=t,l=o.axis,{min:h,max:c,minDefined:u,maxDefined:d}=o.getUserBounds();u&&(r=tk(Math.min(tP(s,l,h).lo,i?n:tP(e,l,o.getPixelForValue(h)).lo),0,n-1)),a=d?tk(Math.max(tP(s,o.axis,c,!0).hi+1,i?0:tP(e,l,o.getPixelForValue(c),!0).hi+1),r,n)-r:n-r}return{start:r,count:a}}/**
 * Checks if the scale ranges have changed.
 * @param {object} meta - dataset meta.
 * @returns {boolean}
 * @private
 */function tB(t){let{xScale:e,yScale:i,_scaleRanges:n}=t,r={xmin:e.min,xmax:e.max,ymin:i.min,ymax:i.max};if(!n)return t._scaleRanges=r,!0;let a=n.xmin!==e.min||n.xmax!==e.max||n.ymin!==i.min||n.ymax!==i.max;return Object.assign(n,r),a}const tz=t=>0===t||1===t,tV=(t,e,i)=>-(Math.pow(2,10*(t-=1))*Math.sin((t-e)*ts/i)),t$=(t,e,i)=>Math.pow(2,-10*t)*Math.sin((t-e)*ts/i)+1,tq={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>-Math.cos(t*tu)+1,easeOutSine:t=>Math.sin(t*tu),easeInOutSine:t=>-.5*(Math.cos(to*t)-1),easeInExpo:t=>0===t?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>1===t?1:-Math.pow(2,-10*t)+1,easeInOutExpo:t=>tz(t)?t:t<.5?.5*Math.pow(2,10*(2*t-1)):.5*(-Math.pow(2,-10*(2*t-1))+2),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>tz(t)?t:tV(t,.075,.3),easeOutElastic:t=>tz(t)?t:t$(t,.075,.3),easeInOutElastic:t=>tz(t)?t:t<.5?.5*tV(2*t,.1125,.45):.5+.5*t$(2*t-1,.1125,.45),easeInBack:t=>t*t*(2.70158*t-1.70158),easeOutBack:t=>(t-=1)*t*(2.70158*t+1.70158)+1,easeInOutBack(t){let e=1.70158;return(t/=.5)<1?.5*(t*t*(((e*=1.525)+1)*t-e)):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},easeInBounce:t=>1-tq.easeOutBounce(1-t),easeOutBounce:t=>t<.36363636363636365?7.5625*t*t:t<.7272727272727273?7.5625*(t-=.5454545454545454)*t+.75:t<.9090909090909091?7.5625*(t-=.8181818181818182)*t+.9375:7.5625*(t-=.9545454545454546)*t+.984375,easeInOutBounce:t=>t<.5?.5*tq.easeInBounce(2*t):.5*tq.easeOutBounce(2*t-1)+.5};function tU(t){if(t&&"object"==typeof t){let e=t.toString();return"[object CanvasPattern]"===e||"[object CanvasGradient]"===e}return!1}function tX(t){return tU(t)?t:new O(t)}function tY(t){return tU(t)?t:new O(t).saturate(.5).darken(.1).hexString()}const tJ=["x","y","borderWidth","radius","tension"],tG=["color","borderColor","backgroundColor"],tK=new Map;function tZ(t,e,i){return(function(t,e){e=e||{};let i=t+JSON.stringify(e),n=tK.get(i);return n||(n=new Intl.NumberFormat(t,e),tK.set(i,n)),n})(e,i).format(t)}const tQ={values:t=>N(t)?t:""+t,numeric(t,e,i){let n;if(0===t)return"0";let r=this.chart.options.locale,a=t;if(i.length>1){let e;let r=Math.max(Math.abs(i[0].value),Math.abs(i[i.length-1].value));(r<1e-4||r>1e15)&&(n="scientific"),Math.abs(e=i.length>3?i[2].value-i[1].value:i[1].value-i[0].value)>=1&&t!==Math.floor(t)&&(e=t-Math.floor(t)),a=e}let o=tp(Math.abs(a)),s=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),l={notation:n,minimumFractionDigits:s,maximumFractionDigits:s};return Object.assign(l,this.options.ticks.format),tZ(t,r,l)},logarithmic(t,e,i){if(0===t)return"0";let n=i[e].significand||t/Math.pow(10,Math.floor(tp(t)));return[1,2,3,5,10,15].includes(n)||e>.8*i.length?tQ.numeric.call(this,t,e,i):""}};var t0,t1,t2,t5,t3,t4,t8={formatters:tQ};const t6=Object.create(null),t9=Object.create(null);function t7(t,e){if(!e)return t;let i=e.split(".");for(let e=0,n=i.length;e<n;++e){let n=i[e];t=t[n]||(t[n]=Object.create(null))}return t}function et(t,e,i){return"string"==typeof e?K(t7(t,e),i):K(t7(t,""),e)}var ee=/* #__PURE__ */new class{constructor(t,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=t=>t.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(t,e)=>tY(e.backgroundColor),this.hoverBorderColor=(t,e)=>tY(e.borderColor),this.hoverColor=(t,e)=>tY(e.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(e)}set(t,e){return et(this,t,e)}get(t){return t7(this,t)}describe(t,e){return et(t9,t,e)}override(t,e){return et(t6,t,e)}route(t,e,i,n){let r=t7(this,t),a=t7(this,i),o="_"+e;Object.defineProperties(r,{[o]:{value:r[e],writable:!0},[e]:{enumerable:!0,get(){let t=this[o],e=a[n];return H(t)?Object.assign({},e,t):z(t,e)},set(t){this[o]=t}}})}apply(t){t.forEach(t=>t(this))}}({_scriptable:t=>!t.startsWith("on"),_indexable:t=>"events"!==t,hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[function(t){t.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),t.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>"onProgress"!==t&&"onComplete"!==t&&"fn"!==t}),t.set("animations",{colors:{type:"color",properties:tG},numbers:{type:"number",properties:tJ}}),t.describe("animations",{_fallback:"animation"}),t.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>0|t}}}})},function(t){t.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})},function(t){t.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:t8.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),t.route("scale.ticks","color","","color"),t.route("scale.grid","color","","borderColor"),t.route("scale.border","color","","borderColor"),t.route("scale.title","color","","color"),t.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&"callback"!==t&&"parser"!==t,_indexable:t=>"borderDash"!==t&&"tickBorderDash"!==t&&"dash"!==t}),t.describe("scales",{_fallback:"scale"}),t.describe("scale.ticks",{_scriptable:t=>"backdropPadding"!==t&&"callback"!==t,_indexable:t=>"backdropPadding"!==t})}]);/**
 * @private
 */function ei(t,e,i,n,r){let a=e[r];return a||(a=e[r]=t.measureText(r).width,i.push(r)),a>n&&(n=a),n}/**
 * Returns the aligned pixel value to avoid anti-aliasing blur
 * @param chart - The chart instance.
 * @param pixel - A pixel value.
 * @param width - The width of the element.
 * @returns The aligned pixel value.
 * @private
 */function en(t,e,i){let n=t.currentDevicePixelRatio,r=0!==i?Math.max(i/2,.5):0;return Math.round((e-r)*n)/n+r}/**
 * Clears the entire canvas.
 */function er(t,e){(e=e||t.getContext("2d")).save(),// canvas.width and canvas.height do not consider the canvas transform,
// while clearRect does
e.resetTransform(),e.clearRect(0,0,t.width,t.height),e.restore()}function ea(t,e,i,n){// eslint-disable-next-line @typescript-eslint/no-use-before-define
eo(t,e,i,n,null)}// eslint-disable-next-line complexity
function eo(t,e,i,n,r){let a,o,s,l,h,c,u,d;let f=e.pointStyle,p=e.rotation,g=e.radius,m=(p||0)*tc;if(f&&"object"==typeof f&&("[object HTMLImageElement]"===(a=f.toString())||"[object HTMLCanvasElement]"===a)){t.save(),t.translate(i,n),t.rotate(m),t.drawImage(f,-f.width/2,-f.height/2,f.width,f.height),t.restore();return}if(!isNaN(g)&&!(g<=0)){switch(t.beginPath(),f){// Default includes circle
default:r?t.ellipse(i,n,r/2,g,0,0,ts):t.arc(i,n,g,0,ts),t.closePath();break;case"triangle":c=r?r/2:g,t.moveTo(i+Math.sin(m)*c,n-Math.cos(m)*g),m+=tf,t.lineTo(i+Math.sin(m)*c,n-Math.cos(m)*g),m+=tf,t.lineTo(i+Math.sin(m)*c,n-Math.cos(m)*g),t.closePath();break;case"rectRounded":// NOTE: the rounded rect implementation changed to use `arc` instead of
// `quadraticCurveTo` since it generates better results when rect is
// almost a circle. 0.516 (instead of 0.5) produces results with visually
// closer proportion to the previous impl and it is inscribed in the
// circle with `radius`. For more details, see the following PRs:
// https://github.com/chartjs/Chart.js/issues/5597
// https://github.com/chartjs/Chart.js/issues/5858
h=.516*g,o=Math.cos(m+td)*(l=g-h),u=Math.cos(m+td)*(r?r/2-h:l),s=Math.sin(m+td)*l,d=Math.sin(m+td)*(r?r/2-h:l),t.arc(i-u,n-s,h,m-to,m-tu),t.arc(i+d,n-o,h,m-tu,m),t.arc(i+u,n+s,h,m,m+tu),t.arc(i-d,n+o,h,m+tu,m+to),t.closePath();break;case"rect":if(!p){l=Math.SQRT1_2*g,c=r?r/2:l,t.rect(i-c,n-l,2*c,2*l);break}m+=td;/* falls through */case"rectRot":u=Math.cos(m)*(r?r/2:g),o=Math.cos(m)*g,s=Math.sin(m)*g,d=Math.sin(m)*(r?r/2:g),t.moveTo(i-u,n-s),t.lineTo(i+d,n-o),t.lineTo(i+u,n+s),t.lineTo(i-d,n+o),t.closePath();break;case"crossRot":m+=td;/* falls through */case"cross":u=Math.cos(m)*(r?r/2:g),o=Math.cos(m)*g,s=Math.sin(m)*g,d=Math.sin(m)*(r?r/2:g),t.moveTo(i-u,n-s),t.lineTo(i+u,n+s),t.moveTo(i+d,n-o),t.lineTo(i-d,n+o);break;case"star":u=Math.cos(m)*(r?r/2:g),o=Math.cos(m)*g,s=Math.sin(m)*g,d=Math.sin(m)*(r?r/2:g),t.moveTo(i-u,n-s),t.lineTo(i+u,n+s),t.moveTo(i+d,n-o),t.lineTo(i-d,n+o),m+=td,u=Math.cos(m)*(r?r/2:g),o=Math.cos(m)*g,s=Math.sin(m)*g,d=Math.sin(m)*(r?r/2:g),t.moveTo(i-u,n-s),t.lineTo(i+u,n+s),t.moveTo(i+d,n-o),t.lineTo(i-d,n+o);break;case"line":o=r?r/2:Math.cos(m)*g,s=Math.sin(m)*g,t.moveTo(i-o,n-s),t.lineTo(i+o,n+s);break;case"dash":t.moveTo(i,n),t.lineTo(i+Math.cos(m)*(r?r/2:g),n+Math.sin(m)*g);break;case!1:t.closePath()}t.fill(),e.borderWidth>0&&t.stroke()}}/**
 * Returns true if the point is inside the rectangle
 * @param point - The point to test
 * @param area - The rectangle
 * @param margin - allowed margin
 * @private
 */function es(t,e,i){return i=i||.5,!e||t&&t.x>e.left-i&&t.x<e.right+i&&t.y>e.top-i&&t.y<e.bottom+i}function el(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()}function eh(t){t.restore()}/**
 * @private
 */function ec(t,e,i,n,r){if(!e)return t.lineTo(i.x,i.y);if("middle"===r){let n=(e.x+i.x)/2;t.lineTo(n,e.y),t.lineTo(n,i.y)}else"after"===r!=!!n?t.lineTo(e.x,i.y):t.lineTo(i.x,e.y);t.lineTo(i.x,i.y)}/**
 * @private
 */function eu(t,e,i,n){if(!e)return t.lineTo(i.x,i.y);t.bezierCurveTo(n?e.cp1x:e.cp2x,n?e.cp1y:e.cp2y,n?i.cp2x:i.cp1x,n?i.cp2y:i.cp1y,i.x,i.y)}/**
 * Render text onto the canvas
 */function ed(t,e,i,n,r,a={}){let o,s;let l=N(e)?e:[e],h=a.strokeWidth>0&&""!==a.strokeColor;for(t.save(),t.font=r.string,a.translation&&t.translate(a.translation[0],a.translation[1]),j(a.rotation)||t.rotate(a.rotation),a.color&&(t.fillStyle=a.color),a.textAlign&&(t.textAlign=a.textAlign),a.textBaseline&&(t.textBaseline=a.textBaseline),o=0;o<l.length;++o)s=l[o],a.backdrop&&function(t,e){let i=t.fillStyle;t.fillStyle=e.color,t.fillRect(e.left,e.top,e.width,e.height),t.fillStyle=i}(t,a.backdrop),h&&(a.strokeColor&&(t.strokeStyle=a.strokeColor),j(a.strokeWidth)||(t.lineWidth=a.strokeWidth),t.strokeText(s,i,n,a.maxWidth)),t.fillText(s,i,n,a.maxWidth),function(t,e,i,n,r){if(r.strikethrough||r.underline){/**
     * Now that IE11 support has been dropped, we can use more
     * of the TextMetrics object. The actual bounding boxes
     * are unflagged in Chrome, Firefox, Edge, and Safari so they
     * can be safely used.
     * See https://developer.mozilla.org/en-US/docs/Web/API/TextMetrics#Browser_compatibility
     */let a=t.measureText(n),o=e-a.actualBoundingBoxLeft,s=e+a.actualBoundingBoxRight,l=i-a.actualBoundingBoxAscent,h=i+a.actualBoundingBoxDescent,c=r.strikethrough?(l+h)/2:h;t.strokeStyle=t.fillStyle,t.beginPath(),t.lineWidth=r.decorationWidth||2,t.moveTo(o,c),t.lineTo(s,c),t.stroke()}}(t,i,n,s,a),n+=Number(r.lineHeight);t.restore()}/**
 * Add a path of a rectangle with rounded corners to the current sub-path
 * @param ctx - Context
 * @param rect - Bounding rect
 */function ef(t,e){let{x:i,y:n,w:r,h:a,radius:o}=e;// top left arc
t.arc(i+o.topLeft,n+o.topLeft,o.topLeft,1.5*to,to,!0),// line from top left to bottom left
t.lineTo(i,n+a-o.bottomLeft),// bottom left arc
t.arc(i+o.bottomLeft,n+a-o.bottomLeft,o.bottomLeft,to,tu,!0),// line from bottom left to bottom right
t.lineTo(i+r-o.bottomRight,n+a),// bottom right arc
t.arc(i+r-o.bottomRight,n+a-o.bottomRight,o.bottomRight,tu,0,!0),// line from bottom right to top right
t.lineTo(i+r,n+o.topRight),// top right arc
t.arc(i+r-o.topRight,n+o.topRight,o.topRight,0,-tu,!0),// line from top right to top left
t.lineTo(i+o.topLeft,n)}const ep=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,eg=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/,em=t=>+t||0;function eb(t,e){let i={},n=H(e),r=n?Object.keys(e):e,a=H(t)?n?i=>z(t[i],t[e[i]]):e=>t[e]:()=>t;for(let t of r)i[t]=em(a(t));return i}/**
 * Converts the given value into a TRBL object.
 * @param value - If a number, set the value to all TRBL component,
 *  else, if an object, use defined properties and sets undefined ones to 0.
 *  x / y are shorthands for same value for left/right and top/bottom.
 * @returns The padding values (top, right, bottom, left)
 * @since 3.0.0
 */function ev(t){return eb(t,{top:"y",right:"x",bottom:"y",left:"x"})}/**
 * Converts the given value into a TRBL corners object (similar with css border-radius).
 * @param value - If a number, set the value to all TRBL corner components,
 *  else, if an object, use defined properties and sets undefined ones to 0.
 * @returns The TRBL corner values (topLeft, topRight, bottomLeft, bottomRight)
 * @since 3.0.0
 */function ey(t){return eb(t,["topLeft","topRight","bottomLeft","bottomRight"])}/**
 * Converts the given value into a padding object with pre-computed width/height.
 * @param value - If a number, set the value to all TRBL component,
 *  else, if an object, use defined properties and sets undefined ones to 0.
 *  x / y are shorthands for same value for left/right and top/bottom.
 * @returns The padding values (top, right, bottom, left, width, height)
 * @since 2.7.0
 */function ex(t){let e=ev(t);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}/**
 * Parses font options and returns the font object.
 * @param options - A object that contains font options to be parsed.
 * @param fallback - A object that contains fallback font options.
 * @return The font object.
 * @private
 */function e_(t,e){t=t||{},e=e||ee.font;let i=z(t.size,e.size);"string"==typeof i&&(i=parseInt(i,10));let n=z(t.style,e.style);n&&!(""+n).match(eg)&&(console.warn('Invalid font style specified: "'+n+'"'),n=void 0);let r={family:z(t.family,e.family),lineHeight:/**
 * @alias Chart.helpers.options
 * @namespace
 *//**
 * Converts the given line height `value` in pixels for a specific font `size`.
 * @param value - The lineHeight to parse (eg. 1.6, '14px', '75%', '1.6em').
 * @param size - The font size (in pixels) used to resolve relative `value`.
 * @returns The effective line height in pixels (size * 1.2 if value is invalid).
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
 * @since 2.7.0
 */function(t,e){let i=(""+t).match(ep);if(!i||"normal"===i[1])return 1.2*e;switch(t=+i[2],i[3]){case"px":return t;case"%":t/=100}return e*t}(z(t.lineHeight,e.lineHeight),i),size:i,style:n,weight:z(t.weight,e.weight),string:""};return r.string=!r||j(r.size)||j(r.family)?null:(r.style?r.style+" ":"")+(r.weight?r.weight+" ":"")+r.size+"px "+r.family,r}/**
 * Evaluates the given `inputs` sequentially and returns the first defined value.
 * @param inputs - An array of values, falling back to the last value.
 * @param context - If defined and the current value is a function, the value
 * is called with `context` as first argument and the result becomes the new input.
 * @param index - If defined and the current value is an array, the value
 * at `index` become the new input.
 * @param info - object to return information about resolution in
 * @param info.cacheable - Will be set to `false` if option is not cacheable.
 * @since 2.7.0
 */function ew(t,e,i,n){let r,a,o,s=!0;for(r=0,a=t.length;r<a;++r)if(void 0!==(o=t[r])&&(void 0!==e&&"function"==typeof o&&(o=o(e),s=!1),void 0!==i&&N(o)&&(o=o[i%o.length],s=!1),void 0!==o))return n&&!s&&(n.cacheable=!1),o}function eS(t,e){return Object.assign(Object.create(t),e)}/**
 * Creates a Proxy for resolving raw values for options.
 * @param scopes - The option scopes to look for values, in resolution order
 * @param prefixes - The prefixes for values, in resolution order.
 * @param rootScopes - The root option scopes
 * @param fallback - Parent scopes fallback
 * @param getTarget - callback for getting the target for changed values
 * @returns Proxy
 * @private
 */function eD(t,e=[""],i,n,r=()=>t[0]){let a=i||t;void 0===n&&(n=eI("_fallback",t));let o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:t,_rootScopes:a,_fallback:n,_getTarget:r,override:i=>eD([i,...t],e,a,n)};return new Proxy(o,{/**
     * A trap for the delete operator.
     */deleteProperty:(e,i)=>(delete e[i],delete e._keys,delete t[0][i],!0),/**
     * A trap for getting property values.
     */get:(i,n)=>eA(i,n,()=>(function(t,e,i,n){let r;for(let a of e)if(void 0!==(r=eI(ek(a,t),i)))return eM(t,r)?eL(i,n,t,r):r})(n,e,t,i)),/**
     * A trap for Object.getOwnPropertyDescriptor.
     * Also used by Object.hasOwnProperty.
     */getOwnPropertyDescriptor:(t,e)=>Reflect.getOwnPropertyDescriptor(t._scopes[0],e),/**
     * A trap for Object.getPrototypeOf.
     */getPrototypeOf:()=>Reflect.getPrototypeOf(t[0]),/**
     * A trap for the in operator.
     */has:(t,e)=>eO(t).includes(e),/**
     * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
     */ownKeys:t=>eO(t),/**
     * A trap for setting property values.
     */set(t,e,i){let n=t._storage||(t._storage=r());return t[e]=n[e]=i,delete t._keys,!0}})}/**
 * Returns an Proxy for resolving option values with context.
 * @param proxy - The Proxy returned by `_createResolver`
 * @param context - Context object for scriptable/indexable options
 * @param subProxy - The proxy provided for scriptable options
 * @param descriptorDefaults - Defaults for descriptors
 * @private
 */function eC(t,e,i,n){let r={_cacheable:!1,_proxy:t,_context:e,_subProxy:i,_stack:new Set,_descriptors:eT(t,n),setContext:e=>eC(t,e,i,n),override:r=>eC(t.override(r),e,i,n)};return new Proxy(r,{/**
     * A trap for the delete operator.
     */deleteProperty:(e,i)=>(delete e[i],delete t[i],!0),/**
     * A trap for getting property values.
     */get:(t,e,i)=>eA(t,e,()=>(function(t,e,i){let{_proxy:n,_context:r,_subProxy:a,_descriptors:o}=t,s=n[e];return tr(s)&&o.isScriptable(e)&&(s=function(t,e,i,n){let{_proxy:r,_context:a,_subProxy:o,_stack:s}=i;if(s.has(t))throw Error("Recursion detected: "+Array.from(s).join("->")+"->"+t);s.add(t);let l=e(a,o||n);return s.delete(t),eM(t,l)&&(l=eL(r._scopes,r,t,l)),l}(e,s,t,i)),N(s)&&s.length&&(s=function(t,e,i,n){let{_proxy:r,_context:a,_subProxy:o,_descriptors:s}=i;if(void 0!==a.index&&n(t))return e[a.index%e.length];if(H(e[0])){// Array of objects, return array or resolvers
        let i=e,n=r._scopes.filter(t=>t!==i);for(let l of(e=[],i)){let i=eL(n,r,t,l);e.push(eC(i,a,o&&o[t],s))}}return e}(e,s,t,o.isIndexable)),eM(e,s)&&(s=eC(s,r,a&&a[e],o)),s})(t,e,i)),/**
     * A trap for Object.getOwnPropertyDescriptor.
     * Also used by Object.hasOwnProperty.
     */getOwnPropertyDescriptor:(e,i)=>e._descriptors.allKeys?Reflect.has(t,i)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(t,i),/**
     * A trap for Object.getPrototypeOf.
     */getPrototypeOf:()=>Reflect.getPrototypeOf(t),/**
     * A trap for the in operator.
     */has:(e,i)=>Reflect.has(t,i),/**
     * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
     */ownKeys:()=>Reflect.ownKeys(t),/**
     * A trap for setting property values.
     */set:(e,i,n)=>(t[i]=n,delete e[i],!0)})}/**
 * @private
 */function eT(t,e={scriptable:!0,indexable:!0}){let{_scriptable:i=e.scriptable,_indexable:n=e.indexable,_allKeys:r=e.allKeys}=t;return{allKeys:r,scriptable:i,indexable:n,isScriptable:tr(i)?i:()=>i,isIndexable:tr(n)?n:()=>n}}const ek=(t,e)=>t?t+ti(e):e,eM=(t,e)=>H(e)&&"adapters"!==t&&(null===Object.getPrototypeOf(e)||e.constructor===Object);function eA(t,e,i){if(Object.prototype.hasOwnProperty.call(t,e))return t[e];let n=i();return(// cache the resolved value
t[e]=n,n)}const eP=(t,e)=>!0===t?e:"string"==typeof t?te(e,t):void 0;function eL(t,e,i,n){var r;let a=e._rootScopes,o=tr(r=e._fallback)?r(i,n):r,s=[...t,...a],l=new Set;l.add(n);let h=eE(l,s,i,o||i,n);return null!==h&&(void 0===o||o===i||null!==(h=eE(l,s,o,h,n)))&&eD(Array.from(l),[""],a,o,()=>(function(t,e,i){let n=t._getTarget();e in n||(n[e]={});let r=n[e];return N(r)&&H(i)?i:r||{}})(e,i,n))}function eE(t,e,i,n,r){for(;i;)i=function(t,e,i,n,r){for(let o of e){let e=eP(i,o);if(e){var a;t.add(e);let o=tr(a=e._fallback)?a(i,r):a;if(void 0!==o&&o!==i&&o!==n)// The fallback will resume to that new scope.
return o}else if(!1===e&&void 0!==n&&i!==n)// For example `interaction` from `hover` or `plugins.tooltip` and `animation` from `animations`
return null}return!1}(t,e,i,n,r);return i}function eI(t,e){for(let i of e){if(!i)continue;let e=i[t];if(void 0!==e)return e}}function eO(t){let e=t._keys;return e||(e=t._keys=function(t){let e=new Set;for(let i of t)for(let t of Object.keys(i).filter(t=>!t.startsWith("_")))e.add(t);return Array.from(e)}(t._scopes)),e}function eR(t,e,i,n){let r,a,o;let{iScale:s}=t,{key:l="r"}=this._parsing,h=Array(n);for(r=0;r<n;++r)o=e[a=r+i],h[r]={r:s.parse(te(o,l),a)};return h}const eF=Number.EPSILON||1e-14,ej=(t,e)=>e<t.length&&!t[e].skip&&t[e],eN=t=>"x"===t?"y":"x";function eH(t,e,i){return Math.max(Math.min(t,i),e)}/**
 * Note: typedefs are auto-exported, so use a made-up `dom` namespace where
 * necessary to avoid duplicates with `export * from './helpers`; see
 * https://github.com/microsoft/TypeScript/issues/46011
 * @typedef { import('../core/core.controller.js').default } dom.Chart
 * @typedef { import('../../types').ChartEvent } ChartEvent
 *//**
 * @private
 */function eW(){return"undefined"!=typeof window&&"undefined"!=typeof document}/**
 * @private
 */function eB(t){let e=t.parentNode;return e&&"[object ShadowRoot]"===e.toString()&&(e=e.host),e}/**
 * convert max-width/max-height values that may be percentages into a number
 * @private
 */function ez(t,e,i){let n;return"string"==typeof t?(n=parseInt(t,10),-1!==t.indexOf("%")&&(n=n/100*e.parentNode[i])):n=t,n}const eV=t=>t.ownerDocument.defaultView.getComputedStyle(t,null),e$=["top","right","bottom","left"];function eq(t,e,i){let n={};i=i?"-"+i:"";for(let r=0;r<4;r++){let a=e$[r];n[a]=parseFloat(t[e+"-"+a+i])||0}return n.width=n.left+n.right,n.height=n.top+n.bottom,n}const eU=(t,e,i)=>(t>0||e>0)&&(!i||!i.shadowRoot);/**
 * Gets an event's x, y coordinates, relative to the chart area
 * @param event
 * @param chart
 * @returns x and y coordinates of the event
 */function eX(t,e){if("native"in t)return t;let{canvas:i,currentDevicePixelRatio:n}=e,r=eV(i),a="border-box"===r.boxSizing,o=eq(r,"padding"),s=eq(r,"border","width"),{x:l,y:h,box:c}=/**
 * @param e
 * @param canvas
 * @returns Canvas position
 */function(t,e){let i,n;let r=t.touches,a=r&&r.length?r[0]:t,{offsetX:o,offsetY:s}=a,l=!1;if(eU(o,s,t.target))i=o,n=s;else{let t=e.getBoundingClientRect();i=a.clientX-t.left,n=a.clientY-t.top,l=!0}return{x:i,y:n,box:l}}(t,i),u=o.left+(c&&s.left),d=o.top+(c&&s.top),{width:f,height:p}=e;return a&&(f-=o.width+s.width,p-=o.height+s.height),{x:Math.round((l-u)/f*i.width/n),y:Math.round((h-d)/p*i.height/n)}}const eY=t=>Math.round(10*t)/10;/**
 * @param chart
 * @param forceRatio
 * @param forceStyle
 * @returns True if the canvas context size or transformation has changed.
 */function eJ(t,e,i){let n=e||1,r=Math.floor(t.height*n),a=Math.floor(t.width*n);t.height=Math.floor(t.height),t.width=Math.floor(t.width);let o=t.canvas;return o.style&&(i||!o.style.height&&!o.style.width)&&(o.style.height=`${t.height}px`,o.style.width=`${t.width}px`),(t.currentDevicePixelRatio!==n||o.height!==r||o.width!==a)&&(t.currentDevicePixelRatio=n,o.height=r,o.width=a,t.ctx.setTransform(n,0,0,n,0,0),!0)}/**
 * Detects support for options object argument in addEventListener.
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
 * @private
 */const eG=function(){let t=!1;try{let e={get passive(){return t=!0,!1}};window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(t){// continue regardless of error
}return t}();/**
 * The "used" size is the final value of a dimension property after all calculations have
 * been performed. This method uses the computed style of `element` but returns undefined
 * if the computed style is not expressed in pixels. That can happen in some cases where
 * `element` has a size relative to its parent and this last one is not yet displayed,
 * for example because of `display: none` on a parent node.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/used_value
 * @returns Size in pixels or undefined if unknown.
 */function eK(t,e){let i=eV(t).getPropertyValue(e),n=i&&i.match(/^(\d+)(\.\d+)?px$/);return n?+n[1]:void 0}/**
 * @private
 */function eZ(t,e,i,n){return{x:t.x+i*(e.x-t.x),y:t.y+i*(e.y-t.y)}}/**
 * @private
 */function eQ(t,e,i,n){return{x:t.x+i*(e.x-t.x),y:"middle"===n?i<.5?t.y:e.y:"after"===n?i<1?t.y:e.y:i>0?e.y:t.y}}/**
 * @private
 */function e0(t,e,i,n){let r={x:t.cp2x,y:t.cp2y},a={x:e.cp1x,y:e.cp1y},o=eZ(t,r,i),s=eZ(r,a,i),l=eZ(a,e,i),h=eZ(o,s,i),c=eZ(s,l,i);return eZ(h,c,i)}function e1(t,e,i){var n;return t?(n=i,{x:t=>e+e+n-t,setWidth(t){n=t},textAlign:t=>"center"===t?t:"right"===t?"left":"right",xPlus:(t,e)=>t-e,leftForLtr:(t,e)=>t-e}):{x:t=>t,setWidth(t){},textAlign:t=>t,xPlus:(t,e)=>t+e,leftForLtr:(t,e)=>t}}function e2(t,e){let i,n;("ltr"===e||"rtl"===e)&&(n=[(i=t.canvas.style).getPropertyValue("direction"),i.getPropertyPriority("direction")],i.setProperty("direction",e,"important"),t.prevTextDirection=n)}function e5(t,e){void 0!==e&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}function e3(t){return"angle"===t?{between:tT,compare:tD,normalize:tC}:{between:tM,compare:(t,e)=>t-e,normalize:t=>t}}function e4({start:t,end:e,count:i,loop:n,style:r}){return{start:t%i,end:e%i,loop:n&&(e-t+1)%i==0,style:r}}function e8(t,e,i){let n,r,a;if(!i)return[t];let{property:o,start:s,end:l}=i,h=e.length,{compare:c,between:u,normalize:d}=e3(o),{start:f,end:p,loop:g,style:m}=function(t,e,i){let n;let{property:r,start:a,end:o}=i,{between:s,normalize:l}=e3(r),h=e.length,{start:c,end:u,loop:d}=t;if(d){for(c+=h,u+=h,n=0;n<h&&s(l(e[c%h][r]),a,o);++n)c--,u--;c%=h,u%=h}return u<c&&(u+=h),{start:c,end:u,loop:d,style:t.style}}(t,e,i),b=[],v=!1,y=null,x=()=>u(s,a,n)&&0!==c(s,a),_=()=>0===c(l,n)||u(l,a,n),w=()=>v||x(),S=()=>!v||_();for(let t=f,i=f;t<=p;++t)(r=e[t%h]).skip||(n=d(r[o]))===a||(v=u(n,s,l),null===y&&w()&&(y=0===c(n,s)?t:i),null!==y&&S()&&(b.push(e4({start:y,end:t,loop:g,count:h,style:m})),y=null),i=t,a=n);return null!==y&&b.push(e4({start:y,end:p,loop:g,count:h,style:m})),b}function e6(t,e){let i=[],n=t.segments;for(let r=0;r<n.length;r++){let a=e8(n[r],t.points,e);a.length&&i.push(...a)}return i}function e9(t,e,i,n){return n&&n.setContext&&i?function(t,e,i,n){let r=t._chart.getContext(),a=e7(t.options),{_datasetIndex:o,options:{spanGaps:s}}=t,l=i.length,h=[],c=a,u=e[0].start,d=u;function f(t,e,n,r){let a=s?-1:1;if(t!==e){for(t+=l;i[t%l].skip;)t-=a;for(;i[e%l].skip;)e+=a;t%l!=e%l&&(h.push({start:t%l,end:e%l,loop:n,style:r}),c=r,u=e%l)}}for(let t of e){let e;let a=i[(u=s?u:t.start)%l];for(d=u+1;d<=t.end;d++){let s=i[d%l];(function(t,e){if(!e)return!1;let i=[],n=function(t,e){return tU(e)?(i.includes(e)||i.push(e),i.indexOf(e)):e};return JSON.stringify(t,n)!==JSON.stringify(e,n)})(e=e7(n.setContext(eS(r,{type:"segment",p0:a,p1:s,p0DataIndex:(d-1)%l,p1DataIndex:d%l,datasetIndex:o}))),c)&&f(u,d-1,t.loop,c),a=s,c=e}u<d-1&&f(u,d-1,t.loop,c)}return h}(t,e,i,n):e}function e7(t){return{backgroundColor:t.backgroundColor,borderCapStyle:t.borderCapStyle,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderJoinStyle:t.borderJoinStyle,borderWidth:t.borderWidth,borderColor:t.borderColor}}var it=/* #__PURE__ */new class{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,i,n){let r=e.listeners[n],a=e.duration;r.forEach(n=>n({chart:t,initial:e.initial,numSteps:a,currentStep:Math.min(i-e.start,a)}))}_refresh(){this._request||(this._running=!0,this._request=tR.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let e=0;this._charts.forEach((i,n)=>{let r;if(!i.running||!i.items.length)return;let a=i.items,o=a.length-1,s=!1;for(;o>=0;--o)(r=a[o])._active?(r._total>i.duration&&(i.duration=r._total),r.tick(t),s=!0):(a[o]=a[a.length-1],a.pop());s&&(n.draw(),this._notify(n,i,t,"progress")),a.length||(i.running=!1,this._notify(n,i,t,"complete"),i.initial=!1),e+=a.length}),this._lastDate=t,0===e&&(this._running=!1)}_getAnims(t){let e=this._charts,i=e.get(t);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,i)),i}listen(t,e,i){this._getAnims(t).listeners[e].push(i)}add(t,e){e&&e.length&&this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){let e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((t,e)=>Math.max(t,e._duration),0),this._refresh())}running(t){if(!this._running)return!1;let e=this._charts.get(t);return!!e&&!!e.running&&!!e.items.length}stop(t){let e=this._charts.get(t);if(!e||!e.items.length)return;let i=e.items,n=i.length-1;for(;n>=0;--n)i[n].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}};const ie="transparent",ii={boolean:(t,e,i)=>i>.5?e:t,color(t,e,i){let n=tX(t||ie),r=n.valid&&tX(e||ie);return r&&r.valid?r.mix(n,i).hexString():e},number:(t,e,i)=>t+(e-t)*i};class ir{constructor(t,e,i,n){let r=e[i];n=ew([t.to,n,r,t.from]);let a=ew([t.from,r,n]);this._active=!0,this._fn=t.fn||ii[t.type||typeof a],this._easing=tq[t.easing]||tq.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=i,this._from=a,this._to=n,this._promises=void 0}active(){return this._active}update(t,e,i){if(this._active){this._notify(!1);let n=this._target[this._prop],r=i-this._start,a=this._duration-r;this._start=i,this._duration=Math.floor(Math.max(a,t.duration)),this._total+=r,this._loop=!!t.loop,this._to=ew([t.to,e,n,t.from]),this._from=ew([t.from,n,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){let e;let i=t-this._start,n=this._duration,r=this._prop,a=this._from,o=this._loop,s=this._to;if(this._active=a!==s&&(o||i<n),!this._active){this._target[r]=s,this._notify(!0);return}if(i<0){this._target[r]=a;return}e=i/n%2,e=o&&e>1?2-e:e,e=this._easing(Math.min(1,Math.max(0,e))),this._target[r]=this._fn(a,s,e)}wait(){let t=this._promises||(this._promises=[]);return new Promise((e,i)=>{t.push({res:e,rej:i})})}_notify(t){let e=t?"res":"rej",i=this._promises||[];for(let t=0;t<i.length;t++)i[t][e]()}}class ia{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!H(t))return;let e=Object.keys(ee.animation),i=this._properties;Object.getOwnPropertyNames(t).forEach(n=>{let r=t[n];if(!H(r))return;let a={};for(let t of e)a[t]=r[t];(N(r.properties)&&r.properties||[n]).forEach(t=>{t!==n&&i.has(t)||i.set(t,a)})})}_animateOptions(t,e){let i=e.options,n=function(t,e){if(!e)return;let i=t.options;if(!i){t.options=e;return}return i.$shared&&(t.options=i=Object.assign({},i,{$shared:!1,$animations:{}})),i}(t,i);if(!n)return[];let r=this._createAnimations(n,i);return i.$shared&&(function(t,e){let i=[],n=Object.keys(e);for(let e=0;e<n.length;e++){let r=t[n[e]];r&&r.active()&&i.push(r.wait())}return Promise.all(i)})(t.options.$animations,i).then(()=>{t.options=i},()=>{}),r}_createAnimations(t,e){let i;let n=this._properties,r=[],a=t.$animations||(t.$animations={}),o=Object.keys(e),s=Date.now();for(i=o.length-1;i>=0;--i){let l=o[i];if("$"===l.charAt(0))continue;if("options"===l){r.push(...this._animateOptions(t,e));continue}let h=e[l],c=a[l],u=n.get(l);if(c){if(u&&c.active()){c.update(u,h,s);continue}c.cancel()}if(!u||!u.duration){t[l]=h;continue}a[l]=c=new ir(u,t,l,h),r.push(c)}return r}update(t,e){if(0===this._properties.size){Object.assign(t,e);return}let i=this._createAnimations(t,e);if(i.length)return it.add(this._chart,i),!0}}function io(t,e){let i=t&&t.options||{},n=i.reverse,r=void 0===i.min?e:0,a=void 0===i.max?e:0;return{start:n?a:r,end:n?r:a}}function is(t,e){let i,n;let r=[],a=t._getSortedDatasetMetas(e);for(i=0,n=a.length;i<n;++i)r.push(a[i].index);return r}function il(t,e,i,n={}){let r,a,o,s;let l=t.keys,h="single"===n.mode;if(null!==e){for(r=0,a=l.length;r<a;++r){if((o=+l[r])===i){if(n.all)continue;break}W(s=t.values[o])&&(h||0===e||tg(e)===tg(s))&&(e+=s)}return e}}function ih(t,e){let i=t&&t.options.stacked;return i||void 0===i&&void 0!==e.stack}function ic(t,e,i,n){for(let r of e.getMatchingVisibleMetas(n).reverse()){let e=t[r.index];if(i&&e>0||!i&&e<0)return r.index}return null}function iu(t,e){let i;let{chart:n,_cachedMeta:r}=t,a=n._stacks||(n._stacks={}),{iScale:o,vScale:s,index:l}=r,h=o.axis,c=s.axis,u=`${o.id}.${s.id}.${r.stack||r.type}`,d=e.length;for(let t=0;t<d;++t){let n=e[t],{[h]:o,[c]:d}=n,f=n._stacks||(n._stacks={});(i=f[c]=function(t,e,i){let n=t[e]||(t[e]={});return n[i]||(n[i]={})}(a,u,o))[l]=d,i._top=ic(i,s,!0,r.type),i._bottom=ic(i,s,!1,r.type);let p=i._visualValues||(i._visualValues={});p[l]=d}}function id(t,e){let i=t.scales;return Object.keys(i).filter(t=>i[t].axis===e).shift()}function ip(t,e){let i=t.controller.index,n=t.vScale&&t.vScale.axis;if(n)for(let r of e=e||t._parsed){let t=r._stacks;if(!t||void 0===t[n]||void 0===t[n][i])return;delete t[n][i],void 0!==t[n]._visualValues&&void 0!==t[n]._visualValues[i]&&delete t[n]._visualValues[i]}}const ig=t=>"reset"===t||"none"===t,im=(t,e)=>e?t:Object.assign({},t),ib=(t,e,i)=>t&&!e.hidden&&e._stacked&&{keys:is(i,!0),values:null};class iv{static defaults={};static datasetElementType=null;static dataElementType=null;constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){let t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=ih(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&ip(this._cachedMeta),this.index=t}linkScales(){let t=this.chart,e=this._cachedMeta,i=this.getDataset(),n=(t,e,i,n)=>"x"===t?e:"r"===t?n:i,r=e.xAxisID=z(i.xAxisID,id(t,"x")),a=e.yAxisID=z(i.yAxisID,id(t,"y")),o=e.rAxisID=z(i.rAxisID,id(t,"r")),s=e.indexAxis,l=e.iAxisID=n(s,r,a,o),h=e.vAxisID=n(s,a,r,o);e.xScale=this.getScaleForId(r),e.yScale=this.getScaleForId(a),e.rScale=this.getScaleForId(o),e.iScale=this.getScaleForId(l),e.vScale=this.getScaleForId(h)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){let e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){let t=this._cachedMeta;this._data&&tI(this._data,this),t._stacked&&ip(t)}_dataCheck(){let t=this.getDataset(),e=t.data||(t.data=[]),i=this._data;if(H(e))this._data=function(t){let e,i,n;let r=Object.keys(t),a=Array(r.length);for(e=0,i=r.length;e<i;++e)n=r[e],a[e]={x:n,y:t[n]};return a}(e);else if(i!==e){if(i){tI(i,this);let t=this._cachedMeta;ip(t),t._parsed=[]}e&&Object.isExtensible(e)&&function(t,e){if(t._chartjs){t._chartjs.listeners.push(e);return}Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),tE.forEach(e=>{let i="_onData"+ti(e),n=t[e];Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value(...e){let r=n.apply(this,e);return t._chartjs.listeners.forEach(t=>{"function"==typeof t[i]&&t[i](...e)}),r}})})}(e,this),this._syncList=[],this._data=e}}addElements(){let t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){let e=this._cachedMeta,i=this.getDataset(),n=!1;this._dataCheck();let r=e._stacked;e._stacked=ih(e.vScale,e),e.stack!==i.stack&&(n=!0,ip(e),e.stack=i.stack),this._resyncElements(t),(n||r!==e._stacked)&&iu(this,e._parsed)}configure(){let t=this.chart.config,e=t.datasetScopeKeys(this._type),i=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){let i,n,r;let{_cachedMeta:a,_data:o}=this,{iScale:s,_stacked:l}=a,h=s.axis,c=0===t&&e===o.length||a._sorted,u=t>0&&a._parsed[t-1];if(!1===this._parsing)a._parsed=o,a._sorted=!0,r=o;else{r=N(o[t])?this.parseArrayData(a,o,t,e):H(o[t])?this.parseObjectData(a,o,t,e):this.parsePrimitiveData(a,o,t,e);let s=()=>null===n[h]||u&&n[h]<u[h];for(i=0;i<e;++i)a._parsed[i+t]=n=r[i],c&&(s()&&(c=!1),u=n);a._sorted=c}l&&iu(this,r)}parsePrimitiveData(t,e,i,n){let r,a;let{iScale:o,vScale:s}=t,l=o.axis,h=s.axis,c=o.getLabels(),u=o===s,d=Array(n);for(r=0;r<n;++r)a=r+i,d[r]={[l]:u||o.parse(c[a],a),[h]:s.parse(e[a],a)};return d}parseArrayData(t,e,i,n){let r,a,o;let{xScale:s,yScale:l}=t,h=Array(n);for(r=0;r<n;++r)o=e[a=r+i],h[r]={x:s.parse(o[0],a),y:l.parse(o[1],a)};return h}parseObjectData(t,e,i,n){let r,a,o;let{xScale:s,yScale:l}=t,{xAxisKey:h="x",yAxisKey:c="y"}=this._parsing,u=Array(n);for(r=0;r<n;++r)o=e[a=r+i],u[r]={x:s.parse(te(o,h),a),y:l.parse(te(o,c),a)};return u}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,i){let n=this.chart,r=this._cachedMeta,a=e[t.axis],o={keys:is(n,!0),values:e._stacks[t.axis]._visualValues};return il(o,a,r.index,{mode:i})}updateRangeFromParsed(t,e,i,n){let r=i[e.axis],a=null===r?NaN:r,o=n&&i._stacks[e.axis];n&&o&&(n.values=o,a=il(n,r,this._cachedMeta.index)),t.min=Math.min(t.min,a),t.max=Math.max(t.max,a)}getMinMax(t,e){let i,n;let r=this._cachedMeta,a=r._parsed,o=r._sorted&&t===r.iScale,s=a.length,l=this._getOtherScale(t),h=ib(e,r,this.chart),c={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:u,max:d}=function(t){let{min:e,max:i,minDefined:n,maxDefined:r}=t.getUserBounds();return{min:n?e:Number.NEGATIVE_INFINITY,max:r?i:Number.POSITIVE_INFINITY}}(l);function f(){n=a[i];let e=n[l.axis];return!W(n[t.axis])||u>e||d<e}for(i=0;i<s&&(f()||(this.updateRangeFromParsed(c,t,n,h),!o));++i);if(o){for(i=s-1;i>=0;--i)if(!f()){this.updateRangeFromParsed(c,t,n,h);break}}return c}getAllParsedValues(t){let e,i,n;let r=this._cachedMeta._parsed,a=[];for(e=0,i=r.length;e<i;++e)W(n=r[e][t.axis])&&a.push(n);return a}getMaxOverflow(){return!1}getLabelAndValue(t){let e=this._cachedMeta,i=e.iScale,n=e.vScale,r=this.getParsed(t);return{label:i?""+i.getLabelForValue(r[i.axis]):"",value:n?""+n.getLabelForValue(r[n.axis]):""}}_update(t){var e;let i,n,r,a;let o=this._cachedMeta;this.update(t||"default"),o._clip=(H(e=z(this.options.clip,function(t,e,i){if(!1===i)return!1;let n=io(t,i),r=io(e,i);return{top:r.end,right:n.end,bottom:r.start,left:n.start}}(o.xScale,o.yScale,this.getMaxOverflow())))?(i=e.top,n=e.right,r=e.bottom,a=e.left):i=n=r=a=e,{top:i,right:n,bottom:r,left:a,disabled:!1===e})}update(t){}draw(){let t;let e=this._ctx,i=this.chart,n=this._cachedMeta,r=n.data||[],a=i.chartArea,o=[],s=this._drawStart||0,l=this._drawCount||r.length-s,h=this.options.drawActiveElementsOnTop;for(n.dataset&&n.dataset.draw(e,a,s,l),t=s;t<s+l;++t){let i=r[t];i.hidden||(i.active&&h?o.push(i):i.draw(e,a))}for(t=0;t<o.length;++t)o[t].draw(e,a)}getStyle(t,e){let i=e?"active":"default";return void 0===t&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(t||0,i)}getContext(t,e,i){var n;let r;let a=this.getDataset();if(t>=0&&t<this._cachedMeta.data.length){let e=this._cachedMeta.data[t];(r=e.$context||(e.$context=eS(this.getContext(),{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:e,index:t,mode:"default",type:"data"}))).parsed=this.getParsed(t),r.raw=a.data[t],r.index=r.dataIndex=t}else(r=this.$context||(this.$context=eS(this.chart.getContext(),{active:!1,dataset:void 0,datasetIndex:n=this.index,index:n,mode:"default",type:"dataset"}))).dataset=a,r.index=r.datasetIndex=this.index;return r.active=!!e,r.mode=i,r}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",i){let n="active"===e,r=this._cachedDataOpts,a=t+"-"+e,o=r[a],s=this.enableOptionSharing&&tn(i);if(o)return im(o,s);let l=this.chart.config,h=l.datasetElementScopeKeys(this._type,t),c=n?[`${t}Hover`,"hover",t,""]:[t,""],u=l.getOptionScopes(this.getDataset(),h),d=Object.keys(ee.elements[t]),f=l.resolveNamedOptions(u,d,()=>this.getContext(i,n,e),c);return f.$shared&&(f.$shared=s,r[a]=Object.freeze(im(f,s))),f}_resolveAnimations(t,e,i){let n;let r=this.chart,a=this._cachedDataOpts,o=`animation-${e}`,s=a[o];if(s)return s;if(!1!==r.options.animation){let r=this.chart.config,a=r.datasetAnimationScopeKeys(this._type,e),o=r.getOptionScopes(this.getDataset(),a);n=r.createResolver(o,this.getContext(t,i,e))}let l=new ia(r,n&&n.animations);return n&&n._cacheable&&(a[o]=Object.freeze(l)),l}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||ig(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){let i=this.resolveDataElementOptions(t,e),n=this._sharedOptions,r=this.getSharedOptions(i),a=this.includeOptions(e,r)||r!==n;return this.updateSharedOptions(r,e,i),{sharedOptions:r,includeOptions:a}}updateElement(t,e,i,n){ig(n)?Object.assign(t,i):this._resolveAnimations(e,n).update(t,i)}updateSharedOptions(t,e,i){t&&!ig(e)&&this._resolveAnimations(void 0,e).update(t,i)}_setStyle(t,e,i,n){t.active=n;let r=this.getStyle(e,n);this._resolveAnimations(e,i,n).update(t,{options:!n&&this.getSharedOptions(r)||r})}removeHoverStyle(t,e,i){this._setStyle(t,i,"active",!1)}setHoverStyle(t,e,i){this._setStyle(t,i,"active",!0)}_removeDatasetHoverStyle(){let t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){let t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){let e=this._data,i=this._cachedMeta.data;for(let[t,e,i]of this._syncList)this[t](e,i);this._syncList=[];let n=i.length,r=e.length,a=Math.min(r,n);a&&this.parse(0,a),r>n?this._insertElements(n,r-n,t):r<n&&this._removeElements(r,n-r)}_insertElements(t,e,i=!0){let n;let r=this._cachedMeta,a=r.data,o=t+e,s=t=>{for(t.length+=e,n=t.length-1;n>=o;n--)t[n]=t[n-e]};for(s(a),n=t;n<o;++n)a[n]=new this.dataElementType;this._parsing&&s(r._parsed),this.parse(t,e),i&&this.updateElements(a,t,e,"reset")}updateElements(t,e,i,n){}_removeElements(t,e){let i=this._cachedMeta;if(this._parsing){let n=i._parsed.splice(t,e);i._stacked&&ip(i,n)}i.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{let[e,i,n]=t;this[e](i,n)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){let t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);let i=arguments.length-2;i&&this._sync(["_insertElements",t,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}function iy(t,e,i,n){return N(t)?function(t,e,i,n){let r=i.parse(t[0],n),a=i.parse(t[1],n),o=Math.min(r,a),s=Math.max(r,a),l=o,h=s;Math.abs(o)>Math.abs(s)&&(l=s,h=o),e[i.axis]=h,e._custom={barStart:l,barEnd:h,start:r,end:a,min:o,max:s}}(t,e,i,n):e[i.axis]=i.parse(t,n),e}function ix(t,e,i,n){let r,a,o,s;let l=t.iScale,h=t.vScale,c=l.getLabels(),u=l===h,d=[];for(r=i,a=i+n;r<a;++r)s=e[r],(o={})[l.axis]=u||l.parse(c[r],r),d.push(iy(s,o,h,r));return d}function i_(t){return t&&void 0!==t.barStart&&void 0!==t.barEnd}function iw(t,e,i,n){var r;return t=n?iS(t=(r=t)===e?i:r===i?e:r,i,e):iS(t,e,i)}function iS(t,e,i){return"start"===t?e:"end"===t?i:t}class iD extends iv{static id="doughnut";static defaults={datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"};static descriptors={_scriptable:t=>"spacing"!==t,_indexable:t=>"spacing"!==t&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")};static overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){let e=t.data;if(e.labels.length&&e.datasets.length){let{labels:{pointStyle:i,color:n}}=t.legend.options;return e.labels.map((e,r)=>{let a=t.getDatasetMeta(0),o=a.controller.getStyle(r);return{text:e,fillStyle:o.backgroundColor,strokeStyle:o.borderColor,fontColor:n,lineWidth:o.borderWidth,pointStyle:i,hidden:!t.getDataVisibility(r),index:r}})}return[]}},onClick(t,e,i){i.chart.toggleDataVisibility(e.index),i.chart.update()}}}};constructor(t,e){super(t,e),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,e){let i=this.getDataset().data,n=this._cachedMeta;if(!1===this._parsing)n._parsed=i;else{let r,a,o=t=>+i[t];if(H(i[t])){let{key:t="value"}=this._parsing;o=e=>+te(i[e],t)}for(r=t,a=t+e;r<a;++r)n._parsed[r]=o(r)}}_getRotation(){return tx(this.options.rotation-90)}_getCircumference(){return tx(this.options.circumference)}_getRotationExtents(){let t=ts,e=-ts;for(let i=0;i<this.chart.data.datasets.length;++i)if(this.chart.isDatasetVisible(i)&&this.chart.getDatasetMeta(i).type===this._type){let n=this.chart.getDatasetMeta(i).controller,r=n._getRotation(),a=n._getCircumference();t=Math.min(t,r),e=Math.max(e,r+a)}return{rotation:t,circumference:e-t}}update(t){let e=this.chart,{chartArea:i}=e,n=this._cachedMeta,r=n.data,a=this.getMaxBorderWidth()+this.getMaxOffset(r)+this.options.spacing,o=Math.max((Math.min(i.width,i.height)-a)/2,0),s=Math.min(V(this.options.cutout,o),1),l=this._getRingWeight(this.index),{circumference:h,rotation:c}=this._getRotationExtents(),{ratioX:u,ratioY:d,offsetX:f,offsetY:p}=function(t,e,i){let n=1,r=1,a=0,o=0;if(e<ts){let s=t+e,l=Math.cos(t),h=Math.sin(t),c=Math.cos(s),u=Math.sin(s),d=(e,n,r)=>tT(e,t,s,!0)?1:Math.max(n,n*i,r,r*i),f=(e,n,r)=>tT(e,t,s,!0)?-1:Math.min(n,n*i,r,r*i),p=d(0,l,c),g=d(tu,h,u),m=f(to,l,c),b=f(to+tu,h,u);n=(p-m)/2,r=(g-b)/2,a=-(p+m)/2,o=-(g+b)/2}return{ratioX:n,ratioY:r,offsetX:a,offsetY:o}}(c,h,s),g=(i.width-a)/u,m=(i.height-a)/d,b=$(this.options.radius,Math.max(Math.min(g,m)/2,0)),v=Math.max(b*s,0),y=(b-v)/this._getVisibleDatasetWeightTotal();this.offsetX=f*b,this.offsetY=p*b,n.total=this.calculateTotal(),this.outerRadius=b-y*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-y*l,0),this.updateElements(r,0,r.length,t)}_circumference(t,e){let i=this.options,n=this._cachedMeta,r=this._getCircumference();return e&&i.animation.animateRotate||!this.chart.getDataVisibility(t)||null===n._parsed[t]||n.data[t].hidden?0:this.calculateCircumference(n._parsed[t]*r/ts)}updateElements(t,e,i,n){let r;let a="reset"===n,o=this.chart,s=o.chartArea,l=o.options,h=l.animation,c=(s.left+s.right)/2,u=(s.top+s.bottom)/2,d=a&&h.animateScale,f=d?0:this.innerRadius,p=d?0:this.outerRadius,{sharedOptions:g,includeOptions:m}=this._getSharedOptions(e,n),b=this._getRotation();for(r=0;r<e;++r)b+=this._circumference(r,a);for(r=e;r<e+i;++r){let e=this._circumference(r,a),i=t[r],o={x:c+this.offsetX,y:u+this.offsetY,startAngle:b,endAngle:b+e,circumference:e,outerRadius:p,innerRadius:f};m&&(o.options=g||this.resolveDataElementOptions(r,i.active?"active":n)),b+=e,this.updateElement(i,r,o,n)}}calculateTotal(){let t;let e=this._cachedMeta,i=e.data,n=0;for(t=0;t<i.length;t++){let r=e._parsed[t];null!==r&&!isNaN(r)&&this.chart.getDataVisibility(t)&&!i[t].hidden&&(n+=Math.abs(r))}return n}calculateCircumference(t){let e=this._cachedMeta.total;return e>0&&!isNaN(t)?ts*(Math.abs(t)/e):0}getLabelAndValue(t){let e=this._cachedMeta,i=this.chart,n=i.data.labels||[],r=tZ(e._parsed[t],i.options.locale);return{label:n[t]||"",value:r}}getMaxBorderWidth(t){let e,i,n,r,a,o=0,s=this.chart;if(!t){for(e=0,i=s.data.datasets.length;e<i;++e)if(s.isDatasetVisible(e)){t=(n=s.getDatasetMeta(e)).data,r=n.controller;break}}if(!t)return 0;for(e=0,i=t.length;e<i;++e)"inner"!==(a=r.resolveDataElementOptions(e)).borderAlign&&(o=Math.max(o,a.borderWidth||0,a.hoverBorderWidth||0));return o}getMaxOffset(t){let e=0;for(let i=0,n=t.length;i<n;++i){let t=this.resolveDataElementOptions(i);e=Math.max(e,t.offset||0,t.hoverOffset||0)}return e}_getRingWeightOffset(t){let e=0;for(let i=0;i<t;++i)this.chart.isDatasetVisible(i)&&(e+=this._getRingWeight(i));return e}_getRingWeight(t){return Math.max(z(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}class iC extends iv{static id="polarArea";static defaults={dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0};static overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){let e=t.data;if(e.labels.length&&e.datasets.length){let{labels:{pointStyle:i,color:n}}=t.legend.options;return e.labels.map((e,r)=>{let a=t.getDatasetMeta(0),o=a.controller.getStyle(r);return{text:e,fillStyle:o.backgroundColor,strokeStyle:o.borderColor,fontColor:n,lineWidth:o.borderWidth,pointStyle:i,hidden:!t.getDataVisibility(r),index:r}})}return[]}},onClick(t,e,i){i.chart.toggleDataVisibility(e.index),i.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}};constructor(t,e){super(t,e),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){let e=this._cachedMeta,i=this.chart,n=i.data.labels||[],r=tZ(e._parsed[t].r,i.options.locale);return{label:n[t]||"",value:r}}parseObjectData(t,e,i,n){return eR.bind(this)(t,e,i,n)}update(t){let e=this._cachedMeta.data;this._updateRadius(),this.updateElements(e,0,e.length,t)}getMinMax(){let t=this._cachedMeta,e={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((t,i)=>{let n=this.getParsed(i).r;!isNaN(n)&&this.chart.getDataVisibility(i)&&(n<e.min&&(e.min=n),n>e.max&&(e.max=n))}),e}_updateRadius(){let t=this.chart,e=t.chartArea,i=t.options,n=Math.min(e.right-e.left,e.bottom-e.top),r=Math.max(n/2,0),a=Math.max(i.cutoutPercentage?r/100*i.cutoutPercentage:1,0),o=(r-a)/t.getVisibleDatasetCount();this.outerRadius=r-o*this.index,this.innerRadius=this.outerRadius-o}updateElements(t,e,i,n){let r;let a="reset"===n,o=this.chart,s=o.options,l=s.animation,h=this._cachedMeta.rScale,c=h.xCenter,u=h.yCenter,d=h.getIndexAngle(0)-.5*to,f=d,p=360/this.countVisibleElements();for(r=0;r<e;++r)f+=this._computeAngle(r,n,p);for(r=e;r<e+i;r++){let e=t[r],i=f,s=f+this._computeAngle(r,n,p),g=o.getDataVisibility(r)?h.getDistanceFromCenterForValue(this.getParsed(r).r):0;f=s,a&&(l.animateScale&&(g=0),l.animateRotate&&(i=s=d));let m={x:c,y:u,innerRadius:0,outerRadius:g,startAngle:i,endAngle:s,options:this.resolveDataElementOptions(r,e.active?"active":n)};this.updateElement(e,r,m,n)}}countVisibleElements(){let t=this._cachedMeta,e=0;return t.data.forEach((t,i)=>{!isNaN(this.getParsed(i).r)&&this.chart.getDataVisibility(i)&&e++}),e}_computeAngle(t,e,i){return this.chart.getDataVisibility(t)?tx(this.resolveDataElementOptions(t,e).angle||i):0}}var iT=/*#__PURE__*/Object.freeze({__proto__:null,BarController:class extends iv{static id="bar";static defaults={datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}};static overrides={scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}};parsePrimitiveData(t,e,i,n){return ix(t,e,i,n)}parseArrayData(t,e,i,n){return ix(t,e,i,n)}parseObjectData(t,e,i,n){let r,a,o,s;let{iScale:l,vScale:h}=t,{xAxisKey:c="x",yAxisKey:u="y"}=this._parsing,d="x"===l.axis?c:u,f="x"===h.axis?c:u,p=[];for(r=i,a=i+n;r<a;++r)s=e[r],(o={})[l.axis]=l.parse(te(s,d),r),p.push(iy(te(s,f),o,h,r));return p}updateRangeFromParsed(t,e,i,n){super.updateRangeFromParsed(t,e,i,n);let r=i._custom;r&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,r.min),t.max=Math.max(t.max,r.max))}getMaxOverflow(){return 0}getLabelAndValue(t){let e=this._cachedMeta,{iScale:i,vScale:n}=e,r=this.getParsed(t),a=r._custom,o=i_(a)?"["+a.start+", "+a.end+"]":""+n.getLabelForValue(r[n.axis]);return{label:""+i.getLabelForValue(r[i.axis]),value:o}}initialize(){this.enableOptionSharing=!0,super.initialize();let t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){let e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,i,n){let r="reset"===n,{index:a,_cachedMeta:{vScale:o}}=this,s=o.getBasePixel(),l=o.isHorizontal(),h=this._getRuler(),{sharedOptions:c,includeOptions:u}=this._getSharedOptions(e,n);for(let d=e;d<e+i;d++){let e=this.getParsed(d),i=r||j(e[o.axis])?{base:s,head:s}:this._calculateBarValuePixels(d),f=this._calculateBarIndexPixels(d,h),p=(e._stacks||{})[o.axis],g={horizontal:l,base:i.base,enableBorderRadius:!p||i_(e._custom)||a===p._top||a===p._bottom,x:l?i.head:f.center,y:l?f.center:i.head,height:l?f.size:Math.abs(i.size),width:l?Math.abs(i.size):f.size};u&&(g.options=c||this.resolveDataElementOptions(d,t[d].active?"active":n));let m=g.options||t[d].options;!function(t,e,i,n){let r,a,o,s,l,h=e.borderSkipped,c={};if(!h){t.borderSkipped=c;return}if(!0===h){t.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}let{start:u,end:d,reverse:f,top:p,bottom:g}=(t.horizontal?(r=t.base>t.x,a="left",o="right"):(r=t.base<t.y,a="bottom",o="top"),r?(s="end",l="start"):(s="start",l="end"),{start:a,end:o,reverse:r,top:s,bottom:l});"middle"===h&&i&&(t.enableBorderRadius=!0,(i._top||0)===n?h=p:(i._bottom||0)===n?h=g:(c[iw(g,u,d,f)]=!0,h=p)),c[iw(h,u,d,f)]=!0,t.borderSkipped=c}(g,m,p,a),function(t,{inflateAmount:e},i){t.inflateAmount="auto"===e?1===i?.33:0:e}(g,m,h.ratio),this.updateElement(t[d],d,g,n)}}_getStacks(t,e){let{iScale:i}=this._cachedMeta,n=i.getMatchingVisibleMetas(this._type).filter(t=>t.controller.options.grouped),r=i.options.stacked,a=[],o=t=>{let i=t.controller.getParsed(e),n=i&&i[t.vScale.axis];if(j(n)||isNaN(n))return!0};for(let i of n)if(!(void 0!==e&&o(i))&&((!1===r||-1===a.indexOf(i.stack)||void 0===r&&void 0===i.stack)&&a.push(i.stack),i.index===t))break;return a.length||a.push(void 0),a}_getStackCount(t){return this._getStacks(void 0,t).length}_getStackIndex(t,e,i){let n=this._getStacks(t,i),r=void 0!==e?n.indexOf(e):-1;return -1===r?n.length-1:r}_getRuler(){let t,e;let i=this.options,n=this._cachedMeta,r=n.iScale,a=[];for(t=0,e=n.data.length;t<e;++t)a.push(r.getPixelForValue(this.getParsed(t)[r.axis],t));let o=i.barThickness,s=o||function(t){let e,i,n,r;let a=t.iScale,o=function(t,e){if(!t._cache.$bar){let i=t.getMatchingVisibleMetas(e),n=[];for(let e=0,r=i.length;e<r;e++)n=n.concat(i[e].controller.getAllParsedValues(t));t._cache.$bar=tO(n.sort((t,e)=>t-e))}return t._cache.$bar}(a,t.type),s=a._length,l=()=>{32767!==n&&-32768!==n&&(tn(r)&&(s=Math.min(s,Math.abs(n-r)||s)),r=n)};for(e=0,i=o.length;e<i;++e)n=a.getPixelForValue(o[e]),l();for(e=0,r=void 0,i=a.ticks.length;e<i;++e)n=a.getPixelForTick(e),l();return s}(n);return{min:s,pixels:a,start:r._startPixel,end:r._endPixel,stackCount:this._getStackCount(),scale:r,grouped:i.grouped,ratio:o?1:i.categoryPercentage*i.barPercentage}}_calculateBarValuePixels(t){let e,i;let{_cachedMeta:{vScale:n,_stacked:r,index:a},options:{base:o,minBarLength:s}}=this,l=o||0,h=this.getParsed(t),c=h._custom,u=i_(c),d=h[n.axis],f=0,p=r?this.applyStack(n,h,r):d;p!==d&&(f=p-d,p=d),u&&(d=c.barStart,p=c.barEnd-c.barStart,0!==d&&tg(d)!==tg(c.barEnd)&&(f=0),f+=d);let g=j(o)||u?f:o,m=n.getPixelForValue(g);if(Math.abs(i=(e=this.chart.getDataVisibility(t)?n.getPixelForValue(f+p):m)-m)<s){var b;i=(0!==(b=i)?tg(b):(n.isHorizontal()?1:-1)*(n.min>=l?1:-1))*s,d===l&&(m-=i/2);let t=n.getPixelForDecimal(0),o=n.getPixelForDecimal(1);e=(m=Math.max(Math.min(m,Math.max(t,o)),Math.min(t,o)))+i,r&&!u&&(h._stacks[n.axis]._visualValues[a]=n.getValueForPixel(e)-n.getValueForPixel(m))}if(m===n.getPixelForValue(l)){let t=tg(i)*n.getLineWidthForValue(l)/2;m+=t,i-=t}return{size:i,base:m,head:e,center:e+i/2}}_calculateBarIndexPixels(t,e){let i,n;let r=e.scale,a=this.options,o=a.skipNull,s=z(a.maxBarThickness,1/0);if(e.grouped){let r=o?this._getStackCount(t):e.stackCount,l="flex"===a.barThickness?function(t,e,i,n){let r=e.pixels,a=r[t],o=t>0?r[t-1]:null,s=t<r.length-1?r[t+1]:null,l=i.categoryPercentage;null===o&&(o=a-(null===s?e.end-e.start:s-a)),null===s&&(s=a+a-o);let h=a-(a-Math.min(o,s))/2*l,c=Math.abs(s-o)/2*l;return{chunk:c/n,ratio:i.barPercentage,start:h}}(t,e,a,r):function(t,e,i,n){let r,a;let o=i.barThickness;return j(o)?(r=e.min*i.categoryPercentage,a=i.barPercentage):(r=o*n,a=1),{chunk:r/n,ratio:a,start:e.pixels[t]-r/2}}(t,e,a,r),h=this._getStackIndex(this.index,this._cachedMeta.stack,o?t:void 0);i=l.start+l.chunk*h+l.chunk/2,n=Math.min(s,l.chunk*l.ratio)}else i=r.getPixelForValue(this.getParsed(t)[r.axis],t),n=Math.min(s,e.min*e.ratio);return{base:i-n/2,head:i+n/2,center:i,size:n}}draw(){let t=this._cachedMeta,e=t.vScale,i=t.data,n=i.length,r=0;for(;r<n;++r)null!==this.getParsed(r)[e.axis]&&i[r].draw(this._ctx)}},BubbleController:class extends iv{static id="bubble";static defaults={datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}};static overrides={scales:{x:{type:"linear"},y:{type:"linear"}}};initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,e,i,n){let r=super.parsePrimitiveData(t,e,i,n);for(let t=0;t<r.length;t++)r[t]._custom=this.resolveDataElementOptions(t+i).radius;return r}parseArrayData(t,e,i,n){let r=super.parseArrayData(t,e,i,n);for(let t=0;t<r.length;t++){let n=e[i+t];r[t]._custom=z(n[2],this.resolveDataElementOptions(t+i).radius)}return r}parseObjectData(t,e,i,n){let r=super.parseObjectData(t,e,i,n);for(let t=0;t<r.length;t++){let n=e[i+t];r[t]._custom=z(n&&n.r&&+n.r,this.resolveDataElementOptions(t+i).radius)}return r}getMaxOverflow(){let t=this._cachedMeta.data,e=0;for(let i=t.length-1;i>=0;--i)e=Math.max(e,t[i].size(this.resolveDataElementOptions(i))/2);return e>0&&e}getLabelAndValue(t){let e=this._cachedMeta,i=this.chart.data.labels||[],{xScale:n,yScale:r}=e,a=this.getParsed(t),o=n.getLabelForValue(a.x),s=r.getLabelForValue(a.y),l=a._custom;return{label:i[t]||"",value:"("+o+", "+s+(l?", "+l:"")+")"}}update(t){let e=this._cachedMeta.data;this.updateElements(e,0,e.length,t)}updateElements(t,e,i,n){let r="reset"===n,{iScale:a,vScale:o}=this._cachedMeta,{sharedOptions:s,includeOptions:l}=this._getSharedOptions(e,n),h=a.axis,c=o.axis;for(let u=e;u<e+i;u++){let e=t[u],i=!r&&this.getParsed(u),d={},f=d[h]=r?a.getPixelForDecimal(.5):a.getPixelForValue(i[h]),p=d[c]=r?o.getBasePixel():o.getPixelForValue(i[c]);d.skip=isNaN(f)||isNaN(p),l&&(d.options=s||this.resolveDataElementOptions(u,e.active?"active":n),r&&(d.options.radius=0)),this.updateElement(e,u,d,n)}}resolveDataElementOptions(t,e){let i=this.getParsed(t),n=super.resolveDataElementOptions(t,e);n.$shared&&(n=Object.assign({},n,{$shared:!1}));let r=n.radius;return"active"!==e&&(n.radius=0),n.radius+=z(i&&i._custom,r),n}},DoughnutController:iD,LineController:class extends iv{static id="line";static defaults={datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1};static overrides={scales:{_index_:{type:"category"},_value_:{type:"linear"}}};initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){let e=this._cachedMeta,{dataset:i,data:n=[],_dataset:r}=e,a=this.chart._animationsDisabled,{start:o,count:s}=tW(e,n,a);this._drawStart=o,this._drawCount=s,tB(e)&&(o=0,s=n.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!r._decimated,i.points=n;let l=this.resolveDatasetElementOptions(t);this.options.showLine||(l.borderWidth=0),l.segment=this.options.segment,this.updateElement(i,void 0,{animated:!a,options:l},t),this.updateElements(n,o,s,t)}updateElements(t,e,i,n){let r="reset"===n,{iScale:a,vScale:o,_stacked:s,_dataset:l}=this._cachedMeta,{sharedOptions:h,includeOptions:c}=this._getSharedOptions(e,n),u=a.axis,d=o.axis,{spanGaps:f,segment:p}=this.options,g=tv(f)?f:Number.POSITIVE_INFINITY,m=this.chart._animationsDisabled||r||"none"===n,b=e+i,v=t.length,y=e>0&&this.getParsed(e-1);for(let i=0;i<v;++i){let f=t[i],v=m?f:{};if(i<e||i>=b){v.skip=!0;continue}let x=this.getParsed(i),_=j(x[d]),w=v[u]=a.getPixelForValue(x[u],i),S=v[d]=r||_?o.getBasePixel():o.getPixelForValue(s?this.applyStack(o,x,s):x[d],i);v.skip=isNaN(w)||isNaN(S)||_,v.stop=i>0&&Math.abs(x[u]-y[u])>g,p&&(v.parsed=x,v.raw=l.data[i]),c&&(v.options=h||this.resolveDataElementOptions(i,f.active?"active":n)),m||this.updateElement(f,i,v,n),y=x}}getMaxOverflow(){let t=this._cachedMeta,e=t.dataset,i=e.options&&e.options.borderWidth||0,n=t.data||[];if(!n.length)return i;let r=n[0].size(this.resolveDataElementOptions(0)),a=n[n.length-1].size(this.resolveDataElementOptions(n.length-1));return Math.max(i,r,a)/2}draw(){let t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}},PieController:class extends iD{static id="pie";static defaults={cutout:0,rotation:0,circumference:360,radius:"100%"}},PolarAreaController:iC,RadarController:class extends iv{static id="radar";static defaults={datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}};static overrides={aspectRatio:1,scales:{r:{type:"radialLinear"}}};getLabelAndValue(t){let e=this._cachedMeta.vScale,i=this.getParsed(t);return{label:e.getLabels()[t],value:""+e.getLabelForValue(i[e.axis])}}parseObjectData(t,e,i,n){return eR.bind(this)(t,e,i,n)}update(t){let e=this._cachedMeta,i=e.dataset,n=e.data||[],r=e.iScale.getLabels();if(i.points=n,"resize"!==t){let e=this.resolveDatasetElementOptions(t);this.options.showLine||(e.borderWidth=0);let a={_loop:!0,_fullLoop:r.length===n.length,options:e};this.updateElement(i,void 0,a,t)}this.updateElements(n,0,n.length,t)}updateElements(t,e,i,n){let r=this._cachedMeta.rScale,a="reset"===n;for(let o=e;o<e+i;o++){let e=t[o],i=this.resolveDataElementOptions(o,e.active?"active":n),s=r.getPointPositionForValue(o,this.getParsed(o).r),l=a?r.xCenter:s.x,h=a?r.yCenter:s.y,c={x:l,y:h,angle:s.angle,skip:isNaN(l)||isNaN(h),options:i};this.updateElement(e,o,c,n)}}},ScatterController:class extends iv{static id="scatter";static defaults={datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1};static overrides={interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}};getLabelAndValue(t){let e=this._cachedMeta,i=this.chart.data.labels||[],{xScale:n,yScale:r}=e,a=this.getParsed(t),o=n.getLabelForValue(a.x),s=r.getLabelForValue(a.y);return{label:i[t]||"",value:"("+o+", "+s+")"}}update(t){let e=this._cachedMeta,{data:i=[]}=e,n=this.chart._animationsDisabled,{start:r,count:a}=tW(e,i,n);if(this._drawStart=r,this._drawCount=a,tB(e)&&(r=0,a=i.length),this.options.showLine){this.datasetElementType||this.addElements();let{dataset:r,_dataset:a}=e;r._chart=this.chart,r._datasetIndex=this.index,r._decimated=!!a._decimated,r.points=i;let o=this.resolveDatasetElementOptions(t);o.segment=this.options.segment,this.updateElement(r,void 0,{animated:!n,options:o},t)}else this.datasetElementType&&(delete e.dataset,this.datasetElementType=!1);this.updateElements(i,r,a,t)}addElements(){let{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,e,i,n){let r="reset"===n,{iScale:a,vScale:o,_stacked:s,_dataset:l}=this._cachedMeta,h=this.resolveDataElementOptions(e,n),c=this.getSharedOptions(h),u=this.includeOptions(n,c),d=a.axis,f=o.axis,{spanGaps:p,segment:g}=this.options,m=tv(p)?p:Number.POSITIVE_INFINITY,b=this.chart._animationsDisabled||r||"none"===n,v=e>0&&this.getParsed(e-1);for(let h=e;h<e+i;++h){let e=t[h],i=this.getParsed(h),p=b?e:{},y=j(i[f]),x=p[d]=a.getPixelForValue(i[d],h),_=p[f]=r||y?o.getBasePixel():o.getPixelForValue(s?this.applyStack(o,i,s):i[f],h);p.skip=isNaN(x)||isNaN(_)||y,p.stop=h>0&&Math.abs(i[d]-v[d])>m,g&&(p.parsed=i,p.raw=l.data[h]),u&&(p.options=c||this.resolveDataElementOptions(h,e.active?"active":n)),b||this.updateElement(e,h,p,n),v=i}this.updateSharedOptions(c,n,h)}getMaxOverflow(){let t=this._cachedMeta,e=t.data||[];if(!this.options.showLine){let t=0;for(let i=e.length-1;i>=0;--i)t=Math.max(t,e[i].size(this.resolveDataElementOptions(i))/2);return t>0&&t}let i=t.dataset,n=i.options&&i.options.borderWidth||0;if(!e.length)return n;let r=e[0].size(this.resolveDataElementOptions(0)),a=e[e.length-1].size(this.resolveDataElementOptions(e.length-1));return Math.max(n,r,a)/2}}});/**
 * @namespace Chart._adapters
 * @since 2.8.0
 * @private
 */function ik(){throw Error("This method is not implemented: Check that a complete date adapter is provided.")}/**
 * Date adapter (current used by the time scale)
 * @namespace Chart._adapters._date
 * @memberof Chart._adapters
 * @private
 */class iM{/**
   * Override default date adapter methods.
   * Accepts type parameter to define options type.
   * @example
   * Chart._adapters._date.override<{myAdapterOption: string}>({
   *   init() {
   *     console.log(this.options.myAdapterOption);
   *   }
   * })
   */static override(t){Object.assign(iM.prototype,t)}options;constructor(t){this.options=t||{}}// eslint-disable-next-line @typescript-eslint/no-empty-function
init(){}formats(){return ik()}parse(){return ik()}format(){return ik()}add(){return ik()}diff(){return ik()}startOf(){return ik()}endOf(){return ik()}}var iA={_date:iM};function iP(t,e,i,n,r){let a=t.getSortedVisibleDatasetMetas(),o=i[e];for(let t=0,i=a.length;t<i;++t){let{index:i,data:s}=a[t],{lo:l,hi:h}=function(t,e,i,n){let{controller:r,data:a,_sorted:o}=t,s=r._cachedMeta.iScale;if(s&&e===s.axis&&"r"!==e&&o&&a.length){let t=s._reversePixels?tL:tP;if(!n)return t(a,e,i);if(r._sharedOptions){let n=a[0],r="function"==typeof n.getRange&&n.getRange(e);if(r){let n=t(a,e,i-r),o=t(a,e,i+r);return{lo:n.lo,hi:o.hi}}}}return{lo:0,hi:a.length-1}}(a[t],e,o,r);for(let t=l;t<=h;++t){let e=s[t];e.skip||n(e,i,t)}}}function iL(t,e,i,n,r){let a=[];return(r||t.isPointInArea(e))&&iP(t,i,e,function(i,o,s){(r||es(i,t.chartArea,0))&&i.inRange(e.x,e.y,n)&&a.push({element:i,datasetIndex:o,index:s})},!0),a}function iE(t,e,i,n,r,a){let o;return a||t.isPointInArea(e)?"r"!==i||n?function(t,e,i,n,r,a){let o=[],s=function(t){let e=-1!==t.indexOf("x"),i=-1!==t.indexOf("y");return function(t,n){let r=e?Math.abs(t.x-n.x):0,a=i?Math.abs(t.y-n.y):0;return Math.sqrt(Math.pow(r,2)+Math.pow(a,2))}}(i),l=Number.POSITIVE_INFINITY;return iP(t,i,e,function(i,h,c){let u=i.inRange(e.x,e.y,r);if(n&&!u)return;let d=i.getCenterPoint(r),f=!!a||t.isPointInArea(d);if(!f&&!u)return;let p=s(e,d);p<l?(o=[{element:i,datasetIndex:h,index:c}],l=p):p===l&&o.push({element:i,datasetIndex:h,index:c})}),o}(t,e,i,n,r,a):(o=[],iP(t,i,e,function(t,i,n){let{startAngle:a,endAngle:s}=t.getProps(["startAngle","endAngle"],r),{angle:l}=tw(t,{x:e.x,y:e.y});tT(l,a,s)&&o.push({element:t,datasetIndex:i,index:n})}),o):[]}function iI(t,e,i,n,r){let a=[],o="x"===i?"inXRange":"inYRange",s=!1;return(iP(t,i,e,(t,n,l)=>{t[o](e[i],r)&&(a.push({element:t,datasetIndex:n,index:l}),s=s||t.inRange(e.x,e.y,r))}),n&&!s)?[]:a}var iO={modes:{index(t,e,i,n){let r=eX(e,t),a=i.axis||"x",o=i.includeInvisible||!1,s=i.intersect?iL(t,r,a,n,o):iE(t,r,a,!1,n,o),l=[];return s.length?(t.getSortedVisibleDatasetMetas().forEach(t=>{let e=s[0].index,i=t.data[e];i&&!i.skip&&l.push({element:i,datasetIndex:t.index,index:e})}),l):[]},dataset(t,e,i,n){let r=eX(e,t),a=i.axis||"xy",o=i.includeInvisible||!1,s=i.intersect?iL(t,r,a,n,o):iE(t,r,a,!1,n,o);if(s.length>0){let e=s[0].datasetIndex,i=t.getDatasetMeta(e).data;s=[];for(let t=0;t<i.length;++t)s.push({element:i[t],datasetIndex:e,index:t})}return s},point(t,e,i,n){let r=eX(e,t),a=i.axis||"xy",o=i.includeInvisible||!1;return iL(t,r,a,n,o)},nearest(t,e,i,n){let r=eX(e,t),a=i.axis||"xy",o=i.includeInvisible||!1;return iE(t,r,a,i.intersect,n,o)},x(t,e,i,n){let r=eX(e,t);return iI(t,r,"x",i.intersect,n)},y(t,e,i,n){let r=eX(e,t);return iI(t,r,"y",i.intersect,n)}}};const iR=["left","top","right","bottom"];function iF(t,e){return t.filter(t=>t.pos===e)}function ij(t,e){return t.filter(t=>-1===iR.indexOf(t.pos)&&t.box.axis===e)}function iN(t,e){return t.sort((t,i)=>{let n=e?i:t,r=e?t:i;return n.weight===r.weight?n.index-r.index:n.weight-r.weight})}function iH(t,e,i,n){return Math.max(t[i],e[i])+Math.max(t[n],e[n])}function iW(t,e){t.top=Math.max(t.top,e.top),t.left=Math.max(t.left,e.left),t.bottom=Math.max(t.bottom,e.bottom),t.right=Math.max(t.right,e.right)}function iB(t,e,i,n){let r,a,o,s,l,h;let c=[];for(r=0,a=t.length,l=0;r<a;++r){(s=(o=t[r]).box).update(o.width||e.w,o.height||e.h,function(t,e){let i=e.maxPadding;return function(t){let n={left:0,top:0,right:0,bottom:0};return t.forEach(t=>{n[t]=Math.max(e[t],i[t])}),n}(t?["left","right"]:["top","bottom"])}(o.horizontal,e));let{same:a,other:u}=function(t,e,i,n){let{pos:r,box:a}=i,o=t.maxPadding;if(!H(r)){i.size&&(t[r]-=i.size);let e=n[i.stack]||{size:0,count:1};e.size=Math.max(e.size,i.horizontal?a.height:a.width),i.size=e.size/e.count,t[r]+=i.size}a.getPadding&&iW(o,a.getPadding());let s=Math.max(0,e.outerWidth-iH(o,t,"left","right")),l=Math.max(0,e.outerHeight-iH(o,t,"top","bottom")),h=s!==t.w,c=l!==t.h;return t.w=s,t.h=l,i.horizontal?{same:h,other:c}:{same:c,other:h}}(e,i,o,n);l|=a&&c.length,h=h||u,s.fullSize||c.push(o)}return l&&iB(c,e,i,n)||h}function iz(t,e,i,n,r){t.top=i,t.left=e,t.right=e+n,t.bottom=i+r,t.width=n,t.height=r}function iV(t,e,i,n){let r=i.padding,{x:a,y:o}=e;for(let s of t){let t=s.box,l=n[s.stack]||{count:1,placed:0,weight:1},h=s.stackWeight/l.weight||1;if(s.horizontal){let n=e.w*h,a=l.size||t.height;tn(l.start)&&(o=l.start),t.fullSize?iz(t,r.left,o,i.outerWidth-r.right-r.left,a):iz(t,e.left+l.placed,o,n,a),l.start=o,l.placed+=n,o=t.bottom}else{let n=e.h*h,o=l.size||t.width;tn(l.start)&&(a=l.start),t.fullSize?iz(t,a,r.top,o,i.outerHeight-r.bottom-r.top):iz(t,a,e.top+l.placed,o,n),l.start=a,l.placed+=n,a=t.right}}e.x=a,e.y=o}var i$={addBox(t,e){t.boxes||(t.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(t){e.draw(t)}}]},t.boxes.push(e)},removeBox(t,e){let i=t.boxes?t.boxes.indexOf(e):-1;-1!==i&&t.boxes.splice(i,1)},configure(t,e,i){e.fullSize=i.fullSize,e.position=i.position,e.weight=i.weight},update(t,e,i,n){if(!t)return;let r=ex(t.options.layout.padding),a=Math.max(e-r.width,0),o=Math.max(i-r.height,0),s=function(t){let e=function(t){let e,i,n,r,a,o;let s=[];for(e=0,i=(t||[]).length;e<i;++e)n=t[e],({position:r,options:{stack:a,stackWeight:o=1}}=n),s.push({index:e,box:n,pos:r,horizontal:n.isHorizontal(),weight:n.weight,stack:a&&r+a,stackWeight:o});return s}(t),i=iN(e.filter(t=>t.box.fullSize),!0),n=iN(iF(e,"left"),!0),r=iN(iF(e,"right")),a=iN(iF(e,"top"),!0),o=iN(iF(e,"bottom")),s=ij(e,"x"),l=ij(e,"y");return{fullSize:i,leftAndTop:n.concat(a),rightAndBottom:r.concat(l).concat(o).concat(s),chartArea:iF(e,"chartArea"),vertical:n.concat(r).concat(l),horizontal:a.concat(o).concat(s)}}(t.boxes),l=s.vertical,h=s.horizontal;U(t.boxes,t=>{"function"==typeof t.beforeLayout&&t.beforeLayout()});let c=l.reduce((t,e)=>e.box.options&&!1===e.box.options.display?t:t+1,0)||1,u=Object.freeze({outerWidth:e,outerHeight:i,padding:r,availableWidth:a,availableHeight:o,vBoxMaxWidth:a/2/c,hBoxMaxHeight:o/2}),d=Object.assign({},r);iW(d,ex(n));let f=Object.assign({maxPadding:d,w:a,h:o,x:r.left,y:r.top},r),p=function(t,e){let i,n,r;let a=function(t){let e={};for(let i of t){let{stack:t,pos:n,stackWeight:r}=i;if(!t||!iR.includes(n))continue;let a=e[t]||(e[t]={count:0,placed:0,weight:0,size:0});a.count++,a.weight+=r}return e}(t),{vBoxMaxWidth:o,hBoxMaxHeight:s}=e;for(i=0,n=t.length;i<n;++i){r=t[i];let{fullSize:n}=r.box,l=a[r.stack],h=l&&r.stackWeight/l.weight;r.horizontal?(r.width=h?h*o:n&&e.availableWidth,r.height=s):(r.width=o,r.height=h?h*s:n&&e.availableHeight)}return a}(l.concat(h),u);iB(s.fullSize,f,u,p),iB(l,f,u,p),iB(h,f,u,p)&&iB(l,f,u,p),function(t){let e=t.maxPadding;function i(i){let n=Math.max(e[i]-t[i],0);return t[i]+=n,n}t.y+=i("top"),t.x+=i("left"),i("right"),i("bottom")}(f),iV(s.leftAndTop,f,u,p),f.x+=f.w,f.y+=f.h,iV(s.rightAndBottom,f,u,p),t.chartArea={left:f.left,top:f.top,right:f.left+f.w,bottom:f.top+f.h,height:f.h,width:f.w},U(s.chartArea,e=>{let i=e.box;Object.assign(i,t.chartArea),i.update(f.w,f.h,{left:0,top:0,right:0,bottom:0})})}};class iq{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,i){}removeEventListener(t,e,i){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,i,n){return e=Math.max(0,e||t.width),i=i||t.height,{width:e,height:Math.max(0,n?Math.floor(e/n):i)}}isAttached(t){return!0}updateConfig(t){}}class iU extends iq{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const iX="$chartjs",iY={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},iJ=t=>null===t||""===t,iG=!!eG&&{passive:!0};function iK(t,e,i){t.canvas.removeEventListener(e,i,iG)}function iZ(t,e){for(let i of t)if(i===e||i.contains(e))return!0}function iQ(t,e,i){let n=t.canvas,r=new MutationObserver(t=>{let e=!1;for(let i of t)e=(e=e||iZ(i.addedNodes,n))&&!iZ(i.removedNodes,n);e&&i()});return r.observe(document,{childList:!0,subtree:!0}),r}function i0(t,e,i){let n=t.canvas,r=new MutationObserver(t=>{let e=!1;for(let i of t)e=(e=e||iZ(i.removedNodes,n))&&!iZ(i.addedNodes,n);e&&i()});return r.observe(document,{childList:!0,subtree:!0}),r}const i1=new Map;let i2=0;function i5(){let t=window.devicePixelRatio;t!==i2&&(i2=t,i1.forEach((e,i)=>{i.currentDevicePixelRatio!==t&&e()}))}function i3(t,e,i){let n=t.canvas,r=n&&eB(n);if(!r)return;let a=tF((t,e)=>{let n=r.clientWidth;i(t,e),n<r.clientWidth&&i()},window),o=new ResizeObserver(t=>{let e=t[0],i=e.contentRect.width,n=e.contentRect.height;(0!==i||0!==n)&&a(i,n)});return o.observe(r),i1.size||window.addEventListener("resize",i5),i1.set(t,a),o}function i4(t,e,i){i&&i.disconnect(),"resize"===e&&(i1.delete(t),i1.size||window.removeEventListener("resize",i5))}function i8(t,e,i){let n=t.canvas,r=tF(e=>{null!==t.ctx&&i(function(t,e){let i=iY[t.type]||t.type,{x:n,y:r}=eX(t,e);return{type:i,chart:e,native:t,x:void 0!==n?n:null,y:void 0!==r?r:null}}(e,t))},t);return!function(t,e,i){t.addEventListener(e,i,iG)}(n,e,r),r}class i6 extends iq{acquireContext(t,e){let i=t&&t.getContext&&t.getContext("2d");return i&&i.canvas===t?(!function(t,e){let i=t.style,n=t.getAttribute("height"),r=t.getAttribute("width");if(t[iX]={initial:{height:n,width:r,style:{display:i.display,height:i.height,width:i.width}}},i.display=i.display||"block",i.boxSizing=i.boxSizing||"border-box",iJ(r)){let e=eK(t,"width");void 0!==e&&(t.width=e)}if(iJ(n)){if(""===t.style.height)t.height=t.width/(e||2);else{let e=eK(t,"height");void 0!==e&&(t.height=e)}}}(t,e),i):null}releaseContext(t){let e=t.canvas;if(!e[iX])return!1;let i=e[iX].initial;["height","width"].forEach(t=>{let n=i[t];j(n)?e.removeAttribute(t):e.setAttribute(t,n)});let n=i.style||{};return Object.keys(n).forEach(t=>{e.style[t]=n[t]}),e.width=e.width,delete e[iX],!0}addEventListener(t,e,i){this.removeEventListener(t,e);let n=t.$proxies||(t.$proxies={}),r={attach:iQ,detach:i0,resize:i3}[e]||i8;n[e]=r(t,e,i)}removeEventListener(t,e){let i=t.$proxies||(t.$proxies={}),n=i[e];if(!n)return;let r={attach:i4,detach:i4,resize:i4}[e]||iK;r(t,e,n),i[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,i,n){return(// eslint-disable-next-line complexity
function(t,e,i,n){let r=eV(t),a=eq(r,"margin"),o=ez(r.maxWidth,t,"clientWidth")||th,s=ez(r.maxHeight,t,"clientHeight")||th,l=function(t,e,i){let n,r;if(void 0===e||void 0===i){let a=eB(t);if(a){let t=a.getBoundingClientRect(),o=eV(a),s=eq(o,"border","width"),l=eq(o,"padding");// this is the border box of the container
e=t.width-l.width-s.width,i=t.height-l.height-s.height,n=ez(o.maxWidth,a,"clientWidth"),r=ez(o.maxHeight,a,"clientHeight")}else e=t.clientWidth,i=t.clientHeight}return{width:e,height:i,maxWidth:n||th,maxHeight:r||th}}(t,e,i),{width:h,height:c}=l;if("content-box"===r.boxSizing){let t=eq(r,"border","width"),e=eq(r,"padding");h-=e.width+t.width,c-=e.height+t.height}h=Math.max(0,h-a.width),c=Math.max(0,n?h/n:c-a.height),h=eY(Math.min(h,o,l.maxWidth)),c=eY(Math.min(c,s,l.maxHeight)),h&&!c&&// If the canvas has width, but no height, default to aspectRatio of 2 (canvas default)
(c=eY(h/2));let u=void 0!==e||void 0!==i;return u&&n&&l.height&&c>l.height&&(h=eY(Math.floor((c=l.height)*n))),{width:h,height:c}}(t,e,i,n))}isAttached(t){let e=eB(t);return!!(e&&e.isConnected)}}class i9{static defaults={};static defaultRoutes=void 0;x;y;active=!1;options;$animations;tooltipPosition(t){let{x:e,y:i}=this.getProps(["x","y"],t);return{x:e,y:i}}hasValue(){return tv(this.x)&&tv(this.y)}getProps(t,e){let i=this.$animations;if(!e||!i)return this;let n={};return t.forEach(t=>{n[t]=i[t]&&i[t].active()?i[t]._to:this[t]}),n}}function i7(t,e,i,n,r){let a,o,s;let l=z(n,0),h=Math.min(z(r,t.length),t.length),c=0;for(i=Math.ceil(i),r&&(i=(a=r-n)/Math.floor(a/i)),s=l;s<0;)s=Math.round(l+ ++c*i);for(o=Math.max(l,0);o<h;o++)o===s&&(e.push(t[o]),s=Math.round(l+ ++c*i))}const nt=t=>"left"===t?"right":"right"===t?"left":t,ne=(t,e,i)=>"top"===e||"left"===e?t[e]+i:t[e]-i,ni=(t,e)=>Math.min(e||t,t);function nn(t,e){let i=[],n=t.length/e,r=t.length,a=0;for(;a<r;a+=n)i.push(t[Math.floor(a)]);return i}function nr(t){return t.drawTicks?t.tickLength:0}function na(t,e){if(!t.display)return 0;let i=e_(t.font,e),n=ex(t.padding),r=N(t.text)?t.text.length:1;return r*i.lineHeight+n.height}class no extends i9{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:i,_suggestedMax:n}=this;return t=B(t,Number.POSITIVE_INFINITY),e=B(e,Number.NEGATIVE_INFINITY),i=B(i,Number.POSITIVE_INFINITY),n=B(n,Number.NEGATIVE_INFINITY),{min:B(t,i),max:B(e,n),minDefined:W(t),maxDefined:W(e)}}getMinMax(t){let e,{min:i,max:n,minDefined:r,maxDefined:a}=this.getUserBounds();if(r&&a)return{min:i,max:n};let o=this.getMatchingVisibleMetas();for(let s=0,l=o.length;s<l;++s)e=o[s].controller.getMinMax(this,t),r||(i=Math.min(i,e.min)),a||(n=Math.max(n,e.max));return i=a&&i>n?n:i,n=r&&i>n?i:n,{min:B(i,B(n,i)),max:B(n,B(i,n))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){let t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){let e=this._labelItems||(this._labelItems=this._computeLabelItems(t));return e}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){q(this.options.beforeUpdate,[this])}update(t,e,i){let{beginAtZero:n,grace:r,ticks:a}=this.options,o=a.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=/**
 * @param minmax
 * @param grace
 * @param beginAtZero
 * @private
 */function(t,e,i){let{min:n,max:r}=t,a=$(e,(r-n)/2),o=(t,e)=>i&&0===t?0:t+e;return{min:o(n,-Math.abs(a)),max:o(r,a)}}(this,r,n),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();let s=o<this.ticks.length;this._convertTicksToLabels(s?nn(this.ticks,o):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),a.display&&(a.autoSkip||"auto"===a.source)&&(this.ticks=function(t,e){let i=t.options.ticks,n=function(t){let e=t.options.offset,i=t._tickSize(),n=t._length/i+(e?0:1),r=t._maxLength/i;return Math.floor(Math.min(n,r))}(t),r=Math.min(i.maxTicksLimit||n,n),a=i.major.enabled?function(t){let e,i;let n=[];for(e=0,i=t.length;e<i;e++)t[e].major&&n.push(e);return n}(e):[],o=a.length,s=a[0],l=a[o-1],h=[];if(o>r)return function(t,e,i,n){let r,a=0,o=i[0];for(r=0,n=Math.ceil(n);r<t.length;r++)r===o&&(e.push(t[r]),o=i[++a*n])}(e,h,a,o/r),h;let c=function(t,e,i){let n=function(t){let e,i;let n=t.length;if(n<2)return!1;for(i=t[0],e=1;e<n;++e)if(t[e]-t[e-1]!==i)return!1;return i}(t),r=e.length/i;if(!n)return Math.max(r,1);let a=/**
 * Returns an array of factors sorted from 1 to sqrt(value)
 * @private
 */function(t){let e;let i=[],n=Math.sqrt(t);for(e=1;e<n;e++)t%e==0&&(i.push(e),i.push(t/e));return n===(0|n)&&i.push(n),i.sort((t,e)=>t-e).pop(),i}(n);for(let t=0,e=a.length-1;t<e;t++){let e=a[t];if(e>r)return e}return Math.max(r,1)}(a,e,r);if(o>0){let t,i;let n=o>1?Math.round((l-s)/(o-1)):null;for(i7(e,h,c,j(n)?0:s-n,s),t=0,i=o-1;t<i;t++)i7(e,h,c,a[t],a[t+1]);return i7(e,h,c,l,j(n)?e.length:l+n),h}return i7(e,h,c),h}(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),s&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t,e,i=this.options.reverse;this.isHorizontal()?(t=this.left,e=this.right):(t=this.top,e=this.bottom,i=!i),this._startPixel=t,this._endPixel=e,this._reversePixels=i,this._length=e-t,this._alignToPixels=this.options.alignToPixels}afterUpdate(){q(this.options.afterUpdate,[this])}beforeSetDimensions(){q(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){q(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),q(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){q(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){let e,i,n;let r=this.options.ticks;for(e=0,i=t.length;e<i;e++)(n=t[e]).label=q(r.callback,[n.value,e,t],this)}afterTickToLabelConversion(){q(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){q(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){let t,e,i;let n=this.options,r=n.ticks,a=ni(this.ticks.length,n.ticks.maxTicksLimit),o=r.minRotation||0,s=r.maxRotation,l=o;if(!this._isVisible()||!r.display||o>=s||a<=1||!this.isHorizontal()){this.labelRotation=o;return}let h=this._getLabelSizes(),c=h.widest.width,u=h.highest.height,d=tk(this.chart.width-c,0,this.maxWidth);c+6>(t=n.offset?this.maxWidth/a:d/(a-1))&&(t=d/(a-(n.offset?.5:1)),e=this.maxHeight-nr(n.grid)-r.padding-na(n.title,this.chart.options.font),i=Math.sqrt(c*c+u*u),l=Math.max(o,Math.min(s,l=Math.min(Math.asin(tk((h.highest.height+6)/t,-1,1)),Math.asin(tk(e/i,-1,1))-Math.asin(tk(u/i,-1,1)))*(180/to)))),this.labelRotation=l}afterCalculateLabelRotation(){q(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){q(this.options.beforeFit,[this])}fit(){let t={width:0,height:0},{chart:e,options:{ticks:i,title:n,grid:r}}=this,a=this._isVisible(),o=this.isHorizontal();if(a){let a=na(n,e.options.font);if(o?(t.width=this.maxWidth,t.height=nr(r)+a):(t.height=this.maxHeight,t.width=nr(r)+a),i.display&&this.ticks.length){let{first:e,last:n,widest:r,highest:a}=this._getLabelSizes(),s=2*i.padding,l=tx(this.labelRotation),h=Math.cos(l),c=Math.sin(l);if(o){let e=i.mirror?0:c*r.width+h*a.height;t.height=Math.min(this.maxHeight,t.height+e+s)}else{let e=i.mirror?0:h*r.width+c*a.height;t.width=Math.min(this.maxWidth,t.width+e+s)}this._calculatePadding(e,n,c,h)}}this._handleMargins(),o?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,i,n){let{ticks:{align:r,padding:a},position:o}=this.options,s=0!==this.labelRotation,l="top"!==o&&"x"===this.axis;if(this.isHorizontal()){let o=this.getPixelForTick(0)-this.left,h=this.right-this.getPixelForTick(this.ticks.length-1),c=0,u=0;s?l?(c=n*t.width,u=i*e.height):(c=i*t.height,u=n*e.width):"start"===r?u=e.width:"end"===r?c=t.width:"inner"!==r&&(c=t.width/2,u=e.width/2),this.paddingLeft=Math.max((c-o+a)*this.width/(this.width-o),0),this.paddingRight=Math.max((u-h+a)*this.width/(this.width-h),0)}else{let i=e.height/2,n=t.height/2;"start"===r?(i=0,n=t.height):"end"===r&&(i=e.height,n=0),this.paddingTop=i+a,this.paddingBottom=n+a}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){q(this.options.afterFit,[this])}isHorizontal(){let{axis:t,position:e}=this.options;return"top"===e||"bottom"===e||"x"===t}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){let e,i;for(this.beforeTickToLabelConversion(),this.generateTickLabels(t),e=0,i=t.length;e<i;e++)j(t[e].label)&&(t.splice(e,1),i--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){let e=this.options.ticks.sampleSize,i=this.ticks;e<i.length&&(i=nn(i,e)),this._labelSizes=t=this._computeLabelSizes(i,i.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,e,i){let n,r,a,o,s,l,h,c,u,d,f;let{ctx:p,_longestTextCache:g}=this,m=[],b=[],v=Math.floor(e/ni(e,i)),y=0,x=0;for(n=0;n<e;n+=v){if(o=t[n].label,s=this._resolveTickFontOptions(n),p.font=l=s.string,h=g[l]=g[l]||{data:{},gc:[]},c=s.lineHeight,u=d=0,j(o)||N(o)){if(N(o))for(r=0,a=o.length;r<a;++r)j(f=o[r])||N(f)||(u=ei(p,h.data,h.gc,u,f),d+=c)}else u=ei(p,h.data,h.gc,u,o),d=c;m.push(u),b.push(d),y=Math.max(u,y),x=Math.max(d,x)}U(g,t=>{let i;let n=t.gc,r=n.length/2;if(r>e){for(i=0;i<r;++i)delete t.data[n[i]];n.splice(0,r)}});let _=m.indexOf(y),w=b.indexOf(x),S=t=>({width:m[t]||0,height:b[t]||0});return{first:S(0),last:S(e-1),widest:S(_),highest:S(w),widths:m,heights:b}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){let e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);let e=this._startPixel+t*this._length;return tk(this._alignToPixels?en(this.chart,e,0):e,-32768,32767)}getDecimalForPixel(t){let e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){let{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){let e=this.ticks||[];if(t>=0&&t<e.length){let i=e[t];return i.$context||(i.$context=eS(this.getContext(),{tick:i,index:t,type:"tick"}))}return this.$context||(this.$context=eS(this.chart.getContext(),{scale:this,type:"scale"}))}_tickSize(){let t=this.options.ticks,e=tx(this.labelRotation),i=Math.abs(Math.cos(e)),n=Math.abs(Math.sin(e)),r=this._getLabelSizes(),a=t.autoSkipPadding||0,o=r?r.widest.width+a:0,s=r?r.highest.height+a:0;return this.isHorizontal()?s*i>o*n?o/i:s/n:s*n<o*i?s/i:o/n}_isVisible(){let t=this.options.display;return"auto"!==t?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){let e,i,n,r,a,o,s,l,h,c,u,d;let f=this.axis,p=this.chart,g=this.options,{grid:m,position:b,border:v}=g,y=m.offset,x=this.isHorizontal(),_=this.ticks,w=_.length+(y?1:0),S=nr(m),D=[],C=v.setContext(this.getContext()),T=C.display?C.width:0,k=T/2,M=function(t){return en(p,t,T)};if("top"===b)e=M(this.bottom),o=this.bottom-S,l=e-k,c=M(t.top)+k,d=t.bottom;else if("bottom"===b)e=M(this.top),c=t.top,d=M(t.bottom)-k,o=e+k,l=this.top+S;else if("left"===b)e=M(this.right),a=this.right-S,s=e-k,h=M(t.left)+k,u=t.right;else if("right"===b)e=M(this.left),h=t.left,u=M(t.right)-k,a=e+k,s=this.left+S;else if("x"===f){if("center"===b)e=M((t.top+t.bottom)/2+.5);else if(H(b)){let t=Object.keys(b)[0],i=b[t];e=M(this.chart.scales[t].getPixelForValue(i))}c=t.top,d=t.bottom,l=(o=e+k)+S}else if("y"===f){if("center"===b)e=M((t.left+t.right)/2);else if(H(b)){let t=Object.keys(b)[0],i=b[t];e=M(this.chart.scales[t].getPixelForValue(i))}s=(a=e-k)-S,h=t.left,u=t.right}let A=z(g.ticks.maxTicksLimit,w),P=Math.max(1,Math.ceil(w/A));for(i=0;i<w;i+=P){let t=this.getContext(i),e=m.setContext(t),f=v.setContext(t),g=e.lineWidth,b=e.color,_=f.dash||[],w=f.dashOffset,S=e.tickWidth,C=e.tickColor,T=e.tickBorderDash||[],k=e.tickBorderDashOffset;void 0!==(n=function(t,e,i){let n;let r=t.ticks.length,a=Math.min(e,r-1),o=t._startPixel,s=t._endPixel,l=t.getPixelForTick(a);if(!i||(n=1===r?Math.max(l-o,s-l):0===e?(t.getPixelForTick(1)-l)/2:(l-t.getPixelForTick(a-1))/2,!((l+=a<e?n:-n)<o-1e-6)&&!(l>s+1e-6)))return l}(this,i,y))&&(r=en(p,n,g),x?a=s=h=u=r:o=l=c=d=r,D.push({tx1:a,ty1:o,tx2:s,ty2:l,x1:h,y1:c,x2:u,y2:d,width:g,color:b,borderDash:_,borderDashOffset:w,tickWidth:S,tickColor:C,tickBorderDash:T,tickBorderDashOffset:k}))}return this._ticksLength=w,this._borderValue=e,D}_computeLabelItems(t){let e,i,n,r,a,o,s,l,h,c,u;let d=this.axis,f=this.options,{position:p,ticks:g}=f,m=this.isHorizontal(),b=this.ticks,{align:v,crossAlign:y,padding:x,mirror:_}=g,w=nr(f.grid),S=w+x,D=_?-x:S,C=-tx(this.labelRotation),T=[],k="middle";if("top"===p)a=this.bottom-D,o=this._getXAxisLabelAlignment();else if("bottom"===p)a=this.top+D,o=this._getXAxisLabelAlignment();else if("left"===p){let t=this._getYAxisLabelAlignment(w);o=t.textAlign,r=t.x}else if("right"===p){let t=this._getYAxisLabelAlignment(w);o=t.textAlign,r=t.x}else if("x"===d){if("center"===p)a=(t.top+t.bottom)/2+S;else if(H(p)){let t=Object.keys(p)[0],e=p[t];a=this.chart.scales[t].getPixelForValue(e)+S}o=this._getXAxisLabelAlignment()}else if("y"===d){if("center"===p)r=(t.left+t.right)/2-S;else if(H(p)){let t=Object.keys(p)[0],e=p[t];r=this.chart.scales[t].getPixelForValue(e)}o=this._getYAxisLabelAlignment(w).textAlign}"y"===d&&("start"===v?k="top":"end"===v&&(k="bottom"));let M=this._getLabelSizes();for(e=0,i=b.length;e<i;++e){let t;n=b[e].label;let d=g.setContext(this.getContext(e));s=this.getPixelForTick(e)+g.labelOffset,h=(l=this._resolveTickFontOptions(e)).lineHeight,c=N(n)?n.length:1;let f=c/2,v=d.color,x=d.textStrokeColor,w=d.textStrokeWidth,S=o;if(m?(r=s,"inner"===o&&(S=e===i-1?this.options.reverse?"left":"right":0===e?this.options.reverse?"right":"left":"center"),u="top"===p?"near"===y||0!==C?-c*h+h/2:"center"===y?-M.highest.height/2-f*h+h:-M.highest.height+h/2:"near"===y||0!==C?h/2:"center"===y?M.highest.height/2-f*h:M.highest.height-c*h,_&&(u*=-1),0===C||d.showLabelBackdrop||(r+=h/2*Math.sin(C))):(a=s,u=(1-c)*h/2),d.showLabelBackdrop){let i=ex(d.backdropPadding),n=M.heights[e],r=M.widths[e],a=u-i.top,s=0-i.left;switch(k){case"middle":a-=n/2;break;case"bottom":a-=n}switch(o){case"center":s-=r/2;break;case"right":s-=r}t={left:s,top:a,width:r+i.width,height:n+i.height,color:d.backdropColor}}T.push({label:n,font:l,textOffset:u,options:{rotation:C,color:v,strokeColor:x,strokeWidth:w,textAlign:S,textBaseline:k,translation:[r,a],backdrop:t}})}return T}_getXAxisLabelAlignment(){let{position:t,ticks:e}=this.options,i=-tx(this.labelRotation);if(i)return"top"===t?"left":"right";let n="center";return"start"===e.align?n="left":"end"===e.align?n="right":"inner"===e.align&&(n="inner"),n}_getYAxisLabelAlignment(t){let e,i;let{position:n,ticks:{crossAlign:r,mirror:a,padding:o}}=this.options,s=this._getLabelSizes(),l=t+o,h=s.widest.width;return"left"===n?a?(i=this.right+o,"near"===r?e="left":"center"===r?(e="center",i+=h/2):(e="right",i+=h)):(i=this.right-l,"near"===r?e="right":"center"===r?(e="center",i-=h/2):(e="left",i=this.left)):"right"===n?a?(i=this.left+o,"near"===r?e="right":"center"===r?(e="center",i-=h/2):(e="left",i-=h)):(i=this.left+l,"near"===r?e="left":"center"===r?(e="center",i+=h/2):(e="right",i=this.right)):e="right",{textAlign:e,x:i}}_computeLabelArea(){if(this.options.ticks.mirror)return;let t=this.chart,e=this.options.position;return"left"===e||"right"===e?{top:0,left:this.left,bottom:t.height,right:this.right}:"top"===e||"bottom"===e?{top:this.top,left:0,bottom:this.bottom,right:t.width}:void 0}drawBackground(){let{ctx:t,options:{backgroundColor:e},left:i,top:n,width:r,height:a}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(i,n,r,a),t.restore())}getLineWidthForValue(t){let e=this.options.grid;if(!this._isVisible()||!e.display)return 0;let i=this.ticks,n=i.findIndex(e=>e.value===t);if(n>=0){let t=e.setContext(this.getContext(n));return t.lineWidth}return 0}drawGrid(t){let e,i;let n=this.options.grid,r=this.ctx,a=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t)),o=(t,e,i)=>{i.width&&i.color&&(r.save(),r.lineWidth=i.width,r.strokeStyle=i.color,r.setLineDash(i.borderDash||[]),r.lineDashOffset=i.borderDashOffset,r.beginPath(),r.moveTo(t.x,t.y),r.lineTo(e.x,e.y),r.stroke(),r.restore())};if(n.display)for(e=0,i=a.length;e<i;++e){let t=a[e];n.drawOnChartArea&&o({x:t.x1,y:t.y1},{x:t.x2,y:t.y2},t),n.drawTicks&&o({x:t.tx1,y:t.ty1},{x:t.tx2,y:t.ty2},{color:t.tickColor,width:t.tickWidth,borderDash:t.tickBorderDash,borderDashOffset:t.tickBorderDashOffset})}}drawBorder(){let t,e,i,n;let{chart:r,ctx:a,options:{border:o,grid:s}}=this,l=o.setContext(this.getContext()),h=o.display?l.width:0;if(!h)return;let c=s.setContext(this.getContext(0)).lineWidth,u=this._borderValue;this.isHorizontal()?(t=en(r,this.left,h)-h/2,e=en(r,this.right,c)+c/2,i=n=u):(i=en(r,this.top,h)-h/2,n=en(r,this.bottom,c)+c/2,t=e=u),a.save(),a.lineWidth=l.width,a.strokeStyle=l.color,a.beginPath(),a.moveTo(t,i),a.lineTo(e,n),a.stroke(),a.restore()}drawLabels(t){let e=this.options.ticks;if(!e.display)return;let i=this.ctx,n=this._computeLabelArea();n&&el(i,n);let r=this.getLabelItems(t);for(let t of r){let e=t.options,n=t.font,r=t.label,a=t.textOffset;ed(i,r,0,a,n,e)}n&&eh(i)}drawTitle(){let t;let{ctx:e,options:{position:i,title:n,reverse:r}}=this;if(!n.display)return;let a=e_(n.font),o=ex(n.padding),s=n.align,l=a.lineHeight/2;"bottom"===i||"center"===i||H(i)?(l+=o.bottom,N(n.text)&&(l+=a.lineHeight*(n.text.length-1))):l+=o.top;let{titleX:h,titleY:c,maxWidth:u,rotation:d}=function(t,e,i,n){let r,a,o;let{top:s,left:l,bottom:h,right:c,chart:u}=t,{chartArea:d,scales:f}=u,p=0,g=h-s,m=c-l;if(t.isHorizontal()){if(a=tN(n,l,c),H(i)){let t=Object.keys(i)[0],n=i[t];o=f[t].getPixelForValue(n)+g-e}else o="center"===i?(d.bottom+d.top)/2+g-e:ne(t,i,e);r=c-l}else{if(H(i)){let t=Object.keys(i)[0],n=i[t];a=f[t].getPixelForValue(n)-m+e}else a="center"===i?(d.left+d.right)/2-m+e:ne(t,i,e);o=tN(n,h,s),p="left"===i?-tu:tu}return{titleX:a,titleY:o,maxWidth:r,rotation:p}}(this,l,i,s);ed(e,n.text,0,0,a,{color:n.color,maxWidth:u,rotation:d,textAlign:(t=tj(s),(r&&"right"!==i||!r&&"right"===i)&&(t=nt(t)),t),textBaseline:"middle",translation:[h,c]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){let t=this.options,e=t.ticks&&t.ticks.z||0,i=z(t.grid&&t.grid.z,-1),n=z(t.border&&t.border.z,0);return this._isVisible()&&this.draw===no.prototype.draw?[{z:i,draw:t=>{this.drawBackground(),this.drawGrid(t),this.drawTitle()}},{z:n,draw:()=>{this.drawBorder()}},{z:e,draw:t=>{this.drawLabels(t)}}]:[{z:e,draw:t=>{this.draw(t)}}]}getMatchingVisibleMetas(t){let e,i;let n=this.chart.getSortedVisibleDatasetMetas(),r=this.axis+"AxisID",a=[];for(e=0,i=n.length;e<i;++e){let i=n[e];i[r]!==this.id||t&&i.type!==t||a.push(i)}return a}_resolveTickFontOptions(t){let e=this.options.ticks.setContext(this.getContext(t));return e_(e.font)}_maxDigits(){let t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class ns{constructor(t,e,i){this.type=t,this.scope=e,this.override=i,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){let e;let i=Object.getPrototypeOf(t);"id"in i&&"defaults"in i&&(e=this.register(i));let n=this.items,r=t.id,a=this.scope+"."+r;if(!r)throw Error("class does not have id: "+t);return r in n||(n[r]=t,function(t,e,i){let n=K(Object.create(null),[i?ee.get(i):{},ee.get(e),t.defaults]);ee.set(e,n),t.defaultRoutes&&function(t,e){Object.keys(e).forEach(i=>{let n=i.split("."),r=n.pop(),a=[t].concat(n).join("."),o=e[i].split("."),s=o.pop(),l=o.join(".");ee.route(a,r,l,s)})}(e,t.defaultRoutes),t.descriptors&&ee.describe(e,t.descriptors)}(t,a,e),this.override&&ee.override(t.id,t.overrides)),a}get(t){return this.items[t]}unregister(t){let e=this.items,i=t.id,n=this.scope;i in e&&delete e[i],n&&i in ee[n]&&(delete ee[n][i],this.override&&delete t6[i])}}var nl=/* #__PURE__ */new class{constructor(){this.controllers=new ns(iv,"datasets",!0),this.elements=new ns(i9,"elements"),this.plugins=new ns(Object,"plugins"),this.scales=new ns(no,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,i){[...e].forEach(e=>{let n=i||this._getRegistryForType(e);i||n.isForType(e)||n===this.plugins&&e.id?this._exec(t,n,e):U(e,e=>{let n=i||this._getRegistryForType(e);this._exec(t,n,e)})})}_exec(t,e,i){let n=ti(t);q(i["before"+n],[],i),e[t](i),q(i["after"+n],[],i)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){let i=this._typedRegistries[e];if(i.isForType(t))return i}return this.plugins}_get(t,e,i){let n=e.get(t);if(void 0===n)throw Error('"'+t+'" is not a registered '+i+".");return n}};class nh{constructor(){this._init=[]}notify(t,e,i,n){"beforeInit"===e&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install"));let r=n?this._descriptors(t).filter(n):this._descriptors(t),a=this._notify(r,t,e,i);return"afterDestroy"===e&&(this._notify(r,t,"stop"),this._notify(this._init,t,"uninstall")),a}_notify(t,e,i,n){for(let r of(n=n||{},t)){let t=r.plugin,a=t[i],o=[e,n,r.options];if(!1===q(a,o,t)&&n.cancelable)return!1}return!0}invalidate(){j(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;let e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){let i=t&&t.config,n=z(i.options&&i.options.plugins,{}),r=function(t){let e={},i=[],n=Object.keys(nl.plugins.items);for(let t=0;t<n.length;t++)i.push(nl.getPlugin(n[t]));let r=t.plugins||[];for(let t=0;t<r.length;t++){let n=r[t];-1===i.indexOf(n)&&(i.push(n),e[n.id]=!0)}return{plugins:i,localIds:e}}(i);return!1!==n||e?function(t,{plugins:e,localIds:i},n,r){let a=[],o=t.getContext();for(let l of e){var s;let e=l.id,h=(s=n[e],r||!1!==s?!0===s?{}:s:null);null!==h&&a.push({plugin:l,options:function(t,{plugin:e,local:i},n,r){let a=t.pluginScopeKeys(e),o=t.getOptionScopes(n,a);return i&&e.defaults&&o.push(e.defaults),t.createResolver(o,r,[""],{scriptable:!1,indexable:!1,allKeys:!0})}(t.config,{plugin:l,local:i[e]},h,o)})}return a}(t,r,n,e):[]}_notifyStateChanges(t){let e=this._oldCache||[],i=this._cache,n=(t,e)=>t.filter(t=>!e.some(e=>t.plugin.id===e.plugin.id));this._notify(n(e,i),t,"stop"),this._notify(n(i,e),t,"start")}}function nc(t,e){let i=ee.datasets[t]||{},n=(e.datasets||{})[t]||{};return n.indexAxis||e.indexAxis||i.indexAxis||"x"}function nu(t){if("x"===t||"y"===t||"r"===t)return t}function nd(t,...e){if(nu(t))return t;for(let n of e){var i;let e=n.axis||("top"===(i=n.position)||"bottom"===i?"x":"left"===i||"right"===i?"y":void 0)||t.length>1&&nu(t[0].toLowerCase());if(e)return e}throw Error(`Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`)}function nf(t,e,i){if(i[e+"AxisID"]===t)return{axis:e}}function np(t){let e=t.options||(t.options={});e.plugins=z(e.plugins,{}),e.scales=function(t,e){let i=t6[t.type]||{scales:{}},n=e.scales||{},r=nc(t.type,e),a=Object.create(null);return Object.keys(n).forEach(e=>{let o=n[e];if(!H(o))return console.error(`Invalid scale configuration for scale: ${e}`);if(o._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${e}`);let s=nd(e,o,function(t,e){if(e.data&&e.data.datasets){let i=e.data.datasets.filter(e=>e.xAxisID===t||e.yAxisID===t);if(i.length)return nf(t,"x",i[0])||nf(t,"y",i[0])}return{}}(e,t),ee.scales[o.type]),l=s===r?"_index_":"_value_",h=i.scales||{};a[e]=Z(Object.create(null),[{axis:s},o,h[s],h[l]])}),t.data.datasets.forEach(i=>{let r=i.type||t.type,o=i.indexAxis||nc(r,e),s=t6[r]||{},l=s.scales||{};Object.keys(l).forEach(t=>{let e;let r=(e=t,"_index_"===t?e=o:"_value_"===t&&(e="x"===o?"y":"x"),e),s=i[r+"AxisID"]||r;a[s]=a[s]||Object.create(null),Z(a[s],[{axis:r},n[s],l[t]])})}),Object.keys(a).forEach(t=>{let e=a[t];Z(e,[ee.scales[e.type],ee.scale])}),a}(t,e)}function ng(t){return(t=t||{}).datasets=t.datasets||[],t.labels=t.labels||[],t}const nm=new Map,nb=new Set;function nv(t,e){let i=nm.get(t);return i||(i=e(),nm.set(t,i),nb.add(i)),i}const ny=(t,e,i)=>{let n=te(e,i);void 0!==n&&t.add(n)};class nx{constructor(t){var e;this._config=((e=(e=t)||{}).data=ng(e.data),np(e),e),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=ng(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){let t=this._config;this.clearCache(),np(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return nv(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,e){return nv(`${t}.transition.${e}`,()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,e){return nv(`${t}-${e}`,()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]])}pluginScopeKeys(t){let e=t.id,i=this.type;return nv(`${i}-plugin-${e}`,()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,e){let i=this._scopeCache,n=i.get(t);return(!n||e)&&(n=new Map,i.set(t,n)),n}getOptionScopes(t,e,i){let{options:n,type:r}=this,a=this._cachedScopes(t,i),o=a.get(e);if(o)return o;let s=new Set;e.forEach(e=>{t&&(s.add(t),e.forEach(e=>ny(s,t,e))),e.forEach(t=>ny(s,n,t)),e.forEach(t=>ny(s,t6[r]||{},t)),e.forEach(t=>ny(s,ee,t)),e.forEach(t=>ny(s,t9,t))});let l=Array.from(s);return 0===l.length&&l.push(Object.create(null)),nb.has(e)&&a.set(e,l),l}chartOptionScopes(){let{options:t,type:e}=this;return[t,t6[e]||{},ee.datasets[e]||{},{type:e},ee,t9]}resolveNamedOptions(t,e,i,n=[""]){let r={$shared:!0},{resolver:a,subPrefixes:o}=n_(this._resolverCache,t,n),s=a;if(function(t,e){let{isScriptable:i,isIndexable:n}=eT(t);for(let r of e){let e=i(r),a=n(r),o=(a||e)&&t[r];if(e&&(tr(o)||nw(o))||a&&N(o))return!0}return!1}(a,e)){r.$shared=!1,i=tr(i)?i():i;let e=this.createResolver(t,i,o);s=eC(a,i,e)}for(let t of e)r[t]=s[t];return r}createResolver(t,e,i=[""],n){let{resolver:r}=n_(this._resolverCache,t,i);return H(e)?eC(r,e,void 0,n):r}}function n_(t,e,i){let n=t.get(e);n||(n=new Map,t.set(e,n));let r=i.join(),a=n.get(r);if(!a){let t=eD(e,i);a={resolver:t,subPrefixes:i.filter(t=>!t.toLowerCase().includes("hover"))},n.set(r,a)}return a}const nw=t=>H(t)&&Object.getOwnPropertyNames(t).reduce((e,i)=>e||tr(t[i]),!1),nS=["top","bottom","left","right","chartArea"];function nD(t,e){return"top"===t||"bottom"===t||-1===nS.indexOf(t)&&"x"===e}function nC(t,e){return function(i,n){return i[t]===n[t]?i[e]-n[e]:i[t]-n[t]}}function nT(t){let e=t.chart,i=e.options.animation;e.notifyPlugins("afterRender"),q(i&&i.onComplete,[t],e)}function nk(t){let e=t.chart,i=e.options.animation;q(i&&i.onProgress,[t],e)}function nM(t){return eW()&&"string"==typeof t?t=document.getElementById(t):t&&t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas),t}const nA={},nP=t=>{let e=nM(t);return Object.values(nA).filter(t=>t.canvas===e).pop()};function nL(t,e,i){return t.options.clip?t[i]:e[i]}class nE{static defaults=ee;static instances=nA;static overrides=t6;static registry=nl;static version="4.4.0";static getChart=nP;static register(...t){nl.add(...t),nI()}static unregister(...t){nl.remove(...t),nI()}constructor(t,e){var i,n;let r;let a=this.config=new nx(e),o=nM(t),s=nP(o);if(s)throw Error("Canvas is already in use. Chart with ID '"+s.id+"' must be destroyed before the canvas with ID '"+s.canvas.id+"' can be reused.");let l=a.createResolver(a.chartOptionScopes(),this.getContext());this.platform=new(a.platform||(!eW()||"undefined"!=typeof OffscreenCanvas&&o instanceof OffscreenCanvas?iU:i6)),this.platform.updateConfig(a);let h=this.platform.acquireContext(o,l.aspectRatio),c=h&&h.canvas,u=c&&c.height,d=c&&c.width;if(this.id=F(),this.ctx=h,this.canvas=c,this.width=d,this.height=u,this._options=l,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new nh,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=(i=t=>this.update(t),n=l.resizeDelay||0,function(...t){return n?(clearTimeout(r),r=setTimeout(i,n,t)):i.apply(this,t),n}),this._dataChanges=[],nA[this.id]=this,!h||!c){console.error("Failed to create chart: can't acquire context from the given item");return}it.listen(this,"complete",nT),it.listen(this,"progress",nk),this._initialize(),this.attached&&this.update()}get aspectRatio(){let{options:{aspectRatio:t,maintainAspectRatio:e},width:i,height:n,_aspectRatio:r}=this;return j(t)?e&&r?r:n?i/n:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return nl}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():eJ(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return er(this.canvas,this.ctx),this}stop(){return it.stop(this),this}resize(t,e){it.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){let i=this.options,n=this.canvas,r=i.maintainAspectRatio&&this.aspectRatio,a=this.platform.getMaximumSize(n,t,e,r),o=i.devicePixelRatio||this.platform.getDevicePixelRatio(),s=this.width?"resize":"attach";this.width=a.width,this.height=a.height,this._aspectRatio=this.aspectRatio,eJ(this,o,!0)&&(this.notifyPlugins("resize",{size:a}),q(i.onResize,[this,a],this),this.attached&&this._doResize(s)&&this.render())}ensureScalesHaveIDs(){let t=this.options,e=t.scales||{};U(e,(t,e)=>{t.id=e})}buildOrUpdateScales(){let t=this.options,e=t.scales,i=this.scales,n=Object.keys(i).reduce((t,e)=>(t[e]=!1,t),{}),r=[];e&&(r=r.concat(Object.keys(e).map(t=>{let i=e[t],n=nd(t,i),r="r"===n,a="x"===n;return{options:i,dposition:r?"chartArea":a?"bottom":"left",dtype:r?"radialLinear":a?"category":"linear"}}))),U(r,e=>{let r=e.options,a=r.id,o=nd(a,r),s=z(r.type,e.dtype);(void 0===r.position||nD(r.position,o)!==nD(e.dposition))&&(r.position=e.dposition),n[a]=!0;let l=null;if(a in i&&i[a].type===s)l=i[a];else{let t=nl.getScale(s);i[(l=new t({id:a,type:s,ctx:this.ctx,chart:this})).id]=l}l.init(r,t)}),U(n,(t,e)=>{t||delete i[e]}),U(i,t=>{i$.configure(this,t,t.options),i$.addBox(this,t)})}_updateMetasets(){let t=this._metasets,e=this.data.datasets.length,i=t.length;if(t.sort((t,e)=>t.index-e.index),i>e){for(let t=e;t<i;++t)this._destroyDatasetMeta(t);t.splice(e,i-e)}this._sortedMetasets=t.slice(0).sort(nC("order","index"))}_removeUnreferencedMetasets(){let{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach((t,i)=>{0===e.filter(e=>e===t._dataset).length&&this._destroyDatasetMeta(i)})}buildOrUpdateControllers(){let t,e;let i=[],n=this.data.datasets;for(this._removeUnreferencedMetasets(),t=0,e=n.length;t<e;t++){let e=n[t],r=this.getDatasetMeta(t),a=e.type||this.config.type;if(r.type&&r.type!==a&&(this._destroyDatasetMeta(t),r=this.getDatasetMeta(t)),r.type=a,r.indexAxis=e.indexAxis||nc(a,this.options),r.order=e.order||0,r.index=t,r.label=""+e.label,r.visible=this.isDatasetVisible(t),r.controller)r.controller.updateIndex(t),r.controller.linkScales();else{let e=nl.getController(a),{datasetElementType:n,dataElementType:o}=ee.datasets[a];Object.assign(e,{dataElementType:nl.getElement(o),datasetElementType:n&&nl.getElement(n)}),r.controller=new e(this,t),i.push(r.controller)}}return this._updateMetasets(),i}_resetElements(){U(this.data.datasets,(t,e)=>{this.getDatasetMeta(e).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){let e=this.config;e.update();let i=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),n=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),!1===this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0}))return;let r=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let a=0;for(let t=0,e=this.data.datasets.length;t<e;t++){let{controller:e}=this.getDatasetMeta(t),i=!n&&-1===r.indexOf(e);e.buildOrUpdateElements(i),a=Math.max(+e.getMaxOverflow(),a)}a=this._minPadding=i.layout.autoPadding?a:0,this._updateLayout(a),n||U(r,t=>{t.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(nC("z","_idx"));let{_active:o,_lastEvent:s}=this;s?this._eventHandler(s,!0):o.length&&this._updateHoverStyles(o,o,!0),this.render()}_updateScales(){U(this.scales,t=>{i$.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){let t=this.options,e=new Set(Object.keys(this._listeners)),i=new Set(t.events);ta(e,i)&&!!this._responsiveListeners===t.responsive||(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){let{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(let{method:i,start:n,count:r}of e){let e="_removeElements"===i?-r:r;!function(t,e,i){let n=Object.keys(t);for(let r of n){let n=+r;if(n>=e){let a=t[r];delete t[r],(i>0||n>e)&&(t[n+i]=a)}}}(t,n,e)}}_getUniformDataChanges(){let t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];let e=this.data.datasets.length,i=e=>new Set(t.filter(t=>t[0]===e).map((t,e)=>e+","+t.splice(1).join(","))),n=i(0);for(let t=1;t<e;t++)if(!ta(n,i(t)))return;return Array.from(n).map(t=>t.split(",")).map(t=>({method:t[1],start:+t[2],count:+t[3]}))}_updateLayout(t){if(!1===this.notifyPlugins("beforeLayout",{cancelable:!0}))return;i$.update(this,this.width,this.height,t);let e=this.chartArea,i=e.width<=0||e.height<=0;this._layers=[],U(this.boxes,t=>{i&&"chartArea"===t.position||(t.configure&&t.configure(),this._layers.push(...t._layers()))},this),this._layers.forEach((t,e)=>{t._idx=e}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(!1!==this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})){for(let t=0,e=this.data.datasets.length;t<e;++t)this.getDatasetMeta(t).controller.configure();for(let e=0,i=this.data.datasets.length;e<i;++e)this._updateDataset(e,tr(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){let i=this.getDatasetMeta(t),n={meta:i,index:t,mode:e,cancelable:!0};!1!==this.notifyPlugins("beforeDatasetUpdate",n)&&(i.controller._update(e),n.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",n))}render(){!1!==this.notifyPlugins("beforeRender",{cancelable:!0})&&(it.has(this)?this.attached&&!it.running(this)&&it.start(this):(this.draw(),nT({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){let{width:t,height:e}=this._resizeBeforeDraw;this._resize(t,e),this._resizeBeforeDraw=null}if(this.clear(),this.width<=0||this.height<=0||!1===this.notifyPlugins("beforeDraw",{cancelable:!0}))return;let e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){let e,i;let n=this._sortedMetasets,r=[];for(e=0,i=n.length;e<i;++e){let i=n[e];(!t||i.visible)&&r.push(i)}return r}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(!1===this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0}))return;let t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){let e=this.ctx,i=t._clip,n=!i.disabled,r=function(t,e){let{xScale:i,yScale:n}=t;return i&&n?{left:nL(i,e,"left"),right:nL(i,e,"right"),top:nL(n,e,"top"),bottom:nL(n,e,"bottom")}:e}(t,this.chartArea),a={meta:t,index:t.index,cancelable:!0};!1!==this.notifyPlugins("beforeDatasetDraw",a)&&(n&&el(e,{left:!1===i.left?0:r.left-i.left,right:!1===i.right?this.width:r.right+i.right,top:!1===i.top?0:r.top-i.top,bottom:!1===i.bottom?this.height:r.bottom+i.bottom}),t.controller.draw(),n&&eh(e),a.cancelable=!1,this.notifyPlugins("afterDatasetDraw",a))}isPointInArea(t){return es(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,i,n){let r=iO.modes[e];return"function"==typeof r?r(this,t,i,n):[]}getDatasetMeta(t){let e=this.data.datasets[t],i=this._metasets,n=i.filter(t=>t&&t._dataset===e).pop();return n||(n={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},i.push(n)),n}getContext(){return this.$context||(this.$context=eS(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){let e=this.data.datasets[t];if(!e)return!1;let i=this.getDatasetMeta(t);return"boolean"==typeof i.hidden?!i.hidden:!e.hidden}setDatasetVisibility(t,e){let i=this.getDatasetMeta(t);i.hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,i){let n=i?"show":"hide",r=this.getDatasetMeta(t),a=r.controller._resolveAnimations(void 0,n);tn(e)?(r.data[e].hidden=!i,this.update()):(this.setDatasetVisibility(t,i),a.update(r,{visible:i}),this.update(e=>e.datasetIndex===t?n:void 0))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){let e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),it.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");let{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),er(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),delete nA[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){let t=this._listeners,e=this.platform,i=(i,n)=>{e.addEventListener(this,i,n),t[i]=n},n=(t,e,i)=>{t.offsetX=e,t.offsetY=i,this._eventHandler(t)};U(this.options.events,t=>i(t,n))}bindResponsiveEvents(){let t;this._responsiveListeners||(this._responsiveListeners={});let e=this._responsiveListeners,i=this.platform,n=(t,n)=>{i.addEventListener(this,t,n),e[t]=n},r=(t,n)=>{e[t]&&(i.removeEventListener(this,t,n),delete e[t])},a=(t,e)=>{this.canvas&&this.resize(t,e)},o=()=>{r("attach",o),this.attached=!0,this.resize(),n("resize",a),n("detach",t)};t=()=>{this.attached=!1,r("resize",a),this._stop(),this._resize(0,0),n("attach",o)},i.isAttached(this.canvas)?o():t()}unbindEvents(){U(this._listeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._listeners={},U(this._responsiveListeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,e,i){let n,r,a;let o=i?"set":"remove";for("dataset"===e&&this.getDatasetMeta(t[0].datasetIndex).controller["_"+o+"DatasetHoverStyle"](),r=0,a=t.length;r<a;++r){n=t[r];let e=n&&this.getDatasetMeta(n.datasetIndex).controller;e&&e[o+"HoverStyle"](n.element,n.datasetIndex,n.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){let e=this._active||[],i=t.map(({datasetIndex:t,index:e})=>{let i=this.getDatasetMeta(t);if(!i)throw Error("No dataset found at index "+t);return{datasetIndex:t,element:i.data[e],index:e}}),n=!X(i,e);n&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,e))}notifyPlugins(t,e,i){return this._plugins.notify(this,t,e,i)}isPluginEnabled(t){return 1===this._plugins._cache.filter(e=>e.plugin.id===t).length}_updateHoverStyles(t,e,i){let n=this.options.hover,r=(t,e)=>t.filter(t=>!e.some(e=>t.datasetIndex===e.datasetIndex&&t.index===e.index)),a=r(e,t),o=i?t:r(t,e);a.length&&this.updateHoverStyle(a,n.mode,!1),o.length&&n.mode&&this.updateHoverStyle(o,n.mode,!0)}_eventHandler(t,e){let i={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},n=e=>(e.options.events||this.options.events).includes(t.native.type);if(!1===this.notifyPlugins("beforeEvent",i,n))return;let r=this._handleEvent(t,e,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,n),(r||i.changed)&&this.render(),this}_handleEvent(t,e,i){var n;let{_active:r=[],options:a}=this,o=this._getActiveElements(t,r,i,e),s="mouseup"===t.type||"click"===t.type||"contextmenu"===t.type,l=(n=this._lastEvent,i&&"mouseout"!==t.type?s?n:t:null);i&&(this._lastEvent=null,q(a.onHover,[t,o,this],this),s&&q(a.onClick,[t,o,this],this));let h=!X(o,r);return(h||e)&&(this._active=o,this._updateHoverStyles(o,r,e)),this._lastEvent=l,h}_getActiveElements(t,e,i,n){if("mouseout"===t.type)return[];if(!i)return e;let r=this.options.hover;return this.getElementsAtEventForMode(t,r.mode,r,n)}}function nI(){return U(nE.instances,t=>t._plugins.invalidate())}/**
 * Convert (r, 𝜃) to (x, y)
 */function nO(t,e,i,n){return{x:i+t*Math.cos(e),y:n+t*Math.sin(e)}}/**
 * Path the arc, respecting border radius by separating into left and right halves.
 *
 *   Start      End
 *
 *    1--->a--->2    Outer
 *   /           \
 *   8           3
 *   |           |
 *   |           |
 *   7           4
 *   \           /
 *    6<---b<---5    Inner
 */function nR(t,e,i,n,r,a){let{x:o,y:s,startAngle:l,pixelMargin:h,innerRadius:c}=e,u=Math.max(e.outerRadius+n+i-h,0),d=c>0?c+n+i+h:0,f=0,p=r-l;if(n){let t=u>0?u-n:0,e=((c>0?c-n:0)+t)/2;f=(p-(0!==e?p*e/(e+n):p))/2}let g=Math.max(.001,p*u-i/to)/u,m=(p-g)/2,b=l+m+f,v=r-m-f,{outerStart:y,outerEnd:x,innerStart:_,innerEnd:w}=/**
 * Parse border radius from the provided options
 */function(t,e,i,n){let r=eb(t.options.borderRadius,["outerStart","outerEnd","innerStart","innerEnd"]),a=(i-e)/2,o=Math.min(a,n*e/2),s=t=>{let e=(i-Math.min(a,t))*n/2;return tk(t,0,Math.min(a,e))};return{outerStart:s(r.outerStart),outerEnd:s(r.outerEnd),innerStart:tk(r.innerStart,0,o),innerEnd:tk(r.innerEnd,0,o)}}(e,d,u,v-b),S=u-y,D=u-x,C=b+y/S,T=v-x/D,k=d+_,M=d+w,A=b+_/k,P=v-w/M;if(t.beginPath(),a){// The first arc segments from point 1 to point a to point 2
let e=(C+T)/2;// The corner segment from point 2 to point 3
if(t.arc(o,s,u,C,e),t.arc(o,s,u,e,T),x>0){let e=nO(D,T,o,s);t.arc(e.x,e.y,x,T,v+tu)}// The line from point 3 to point 4
let i=nO(M,v,o,s);// The corner segment from point 4 to point 5
if(t.lineTo(i.x,i.y),w>0){let e=nO(M,P,o,s);t.arc(e.x,e.y,w,v+tu,P+Math.PI)}// The inner arc from point 5 to point b to point 6
let n=(v-w/d+(b+_/d))/2;// The corner segment from point 6 to point 7
if(t.arc(o,s,d,v-w/d,n,!0),t.arc(o,s,d,n,b+_/d,!0),_>0){let e=nO(k,A,o,s);t.arc(e.x,e.y,_,A+Math.PI,b-tu)}// The line from point 7 to point 8
let r=nO(S,b,o,s);// The corner segment from point 8 to point 1
if(t.lineTo(r.x,r.y),y>0){let e=nO(S,C,o,s);t.arc(e.x,e.y,y,b-tu,C)}}else{t.moveTo(o,s);let e=Math.cos(C)*u+o,i=Math.sin(C)*u+s;t.lineTo(e,i);let n=Math.cos(T)*u+o,r=Math.sin(T)*u+s;t.lineTo(n,r)}t.closePath()}function nF(t,e,i=e){t.lineCap=z(i.borderCapStyle,e.borderCapStyle),t.setLineDash(z(i.borderDash,e.borderDash)),t.lineDashOffset=z(i.borderDashOffset,e.borderDashOffset),t.lineJoin=z(i.borderJoinStyle,e.borderJoinStyle),t.lineWidth=z(i.borderWidth,e.borderWidth),t.strokeStyle=z(i.borderColor,e.borderColor)}function nj(t,e,i){t.lineTo(i.x,i.y)}function nN(t,e,i={}){let n=t.length,{start:r=0,end:a=n-1}=i,{start:o,end:s}=e,l=Math.max(r,o),h=Math.min(a,s);return{count:n,start:l,loop:e.loop,ilen:h<l&&!(r<o&&a<o||r>s&&a>s)?n+h-l:h-l}}function nH(t,e,i,n){let r,a,o;let{points:s,options:l}=e,{count:h,start:c,loop:u,ilen:d}=nN(s,i,n),f=l.stepped?ec:l.tension||"monotone"===l.cubicInterpolationMode?eu:nj,{move:p=!0,reverse:g}=n||{};for(r=0;r<=d;++r)(a=s[(c+(g?d-r:r))%h]).skip||(p?(t.moveTo(a.x,a.y),p=!1):f(t,o,a,g,l.stepped),o=a);return u&&f(t,o,a=s[(c+(g?d:0))%h],g,l.stepped),!!u}function nW(t,e,i,n){let r,a,o,s,l,h;let c=e.points,{count:u,start:d,ilen:f}=nN(c,i,n),{move:p=!0,reverse:g}=n||{},m=0,b=0,v=t=>(d+(g?f-t:t))%u,y=()=>{s!==l&&(t.lineTo(m,l),t.lineTo(m,s),t.lineTo(m,h))};for(p&&(a=c[v(0)],t.moveTo(a.x,a.y)),r=0;r<=f;++r){if((a=c[v(r)]).skip)continue;let e=a.x,i=a.y,n=0|e;n===o?(i<s?s=i:i>l&&(l=i),m=(b*m+e)/++b):(y(),t.lineTo(e,i),o=n,b=0,s=l=i),h=i}y()}function nB(t){let e=t.options,i=e.borderDash&&e.borderDash.length,n=!t._decimated&&!t._loop&&!e.tension&&"monotone"!==e.cubicInterpolationMode&&!e.stepped&&!i;return n?nW:nH}const nz="function"==typeof Path2D;class nV extends i9{static id="line";static defaults={borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};static descriptors={_scriptable:!0,_indexable:t=>"borderDash"!==t&&"fill"!==t};constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){let i=this.options;if((i.tension||"monotone"===i.cubicInterpolationMode)&&!i.stepped&&!this._pointsUpdated){let n=i.spanGaps?this._loop:this._fullLoop;!/**
 * @private
 */function(t,e,i,n,r){let a,o,s,l;if(e.spanGaps&&(t=t.filter(t=>!t.skip)),"monotone"===e.cubicInterpolationMode)!/**
 * This function calculates Bézier control points in a similar way than |splineCurve|,
 * but preserves monotonicity of the provided data and ensures no local extremums are added
 * between the dataset discrete points due to the interpolation.
 * See : https://en.wikipedia.org/wiki/Monotone_cubic_interpolation
 */function(t,e="x"){let i,n,r;let a=eN(e),o=t.length,s=Array(o).fill(0),l=Array(o),h=ej(t,0);for(i=0;i<o;++i)if(n=r,r=h,h=ej(t,i+1),r){if(h){let t=h[e]-r[e];// In the case of two points that appear at the same x pixel, slopeDeltaX is 0
s[i]=0!==t?(h[a]-r[a])/t:0}l[i]=n?h?tg(s[i-1])!==tg(s[i])?0:(s[i-1]+s[i])/2:s[i-1]:s[i]}/**
 * Adjust tangents to ensure monotonic properties
 */(function(t,e,i){let n,r,a,o,s;let l=t.length,h=ej(t,0);for(let c=0;c<l-1;++c)if(s=h,h=ej(t,c+1),s&&h){if(tm(e[c],0,eF)){i[c]=i[c+1]=0;continue}(o=Math.pow(n=i[c]/e[c],2)+Math.pow(r=i[c+1]/e[c],2))<=9||(a=3/Math.sqrt(o),i[c]=n*a*e[c],i[c+1]=r*a*e[c])}})(t,s,l),function(t,e,i="x"){let n,r,a;let o=eN(i),s=t.length,l=ej(t,0);for(let h=0;h<s;++h){if(r=a,a=l,l=ej(t,h+1),!a)continue;let s=a[i],c=a[o];r&&(n=(s-r[i])/3,a[`cp1${i}`]=s-n,a[`cp1${o}`]=c-n*e[h]),l&&(n=(l[i]-s)/3,a[`cp2${i}`]=s+n,a[`cp2${o}`]=c+n*e[h])}}(t,l,e)}(t,r);else{let i=n?t[t.length-1]:t[0];for(a=0,o=t.length;a<o;++a)l=function(t,e,i,n){// Props to Rob Spencer at scaled innovation for his post on splining between points
// http://scaledinnovation.com/analytics/splines/aboutSplines.html
// This function must also respect "skipped" points
let r=t.skip?e:t,a=i.skip?e:i,o=tS(e,r),s=tS(a,e),l=o/(o+s),h=s/(o+s);// If all points are the same, s01 & s02 will be inf
l=isNaN(l)?0:l,h=isNaN(h)?0:h;let c=n*l,u=n*h;// scaling factor for triangle Ta
return{previous:{x:e.x-c*(a.x-r.x),y:e.y-c*(a.y-r.y)},next:{x:e.x+u*(a.x-r.x),y:e.y+u*(a.y-r.y)}}}(i,s=t[a],t[Math.min(a+1,o-(n?0:1))%o],e.tension),s.cp1x=l.previous.x,s.cp1y=l.previous.y,s.cp2x=l.next.x,s.cp2y=l.next.y,i=s}e.capBezierPoints&&function(t,e){let i,n,r,a,o;let s=es(t[0],e);for(i=0,n=t.length;i<n;++i)o=a,a=s,s=i<n-1&&es(t[i+1],e),a&&(r=t[i],o&&(r.cp1x=eH(r.cp1x,e.left,e.right),r.cp1y=eH(r.cp1y,e.top,e.bottom)),s&&(r.cp2x=eH(r.cp2x,e.left,e.right),r.cp2y=eH(r.cp2y,e.top,e.bottom)))}(t,i)}(this._points,i,t,n,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=function(t,e){let i=t.points,n=t.options.spanGaps,r=i.length;if(!r)return[];let a=!!t._loop,{start:o,end:s}=function(t,e,i,n){let r=0,a=e-1;if(i&&!n)for(;r<e&&!t[r].skip;)r++;for(;r<e&&t[r].skip;)r++;for(r%=e,i&&(a+=r);a>r&&t[a%e].skip;)a--;return{start:r,end:a%=e}}(i,r,a,n);if(!0===n)return e9(t,[{start:o,end:s,loop:a}],i,e);let l=s<o?s+r:s,h=!!t._fullLoop&&0===o&&s===r-1;return e9(t,function(t,e,i,n){let r;let a=t.length,o=[],s=e,l=t[e];for(r=e+1;r<=i;++r){let i=t[r%a];i.skip||i.stop?l.skip||(n=!1,o.push({start:e%a,end:(r-1)%a,loop:n}),e=s=i.stop?r:null):(s=r,l.skip&&(e=r)),l=i}return null!==s&&o.push({start:e%a,end:s%a,loop:n}),o}(i,o,l,h),i,e)}(this,this.options.segment))}first(){let t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){let t=this.segments,e=this.points,i=t.length;return i&&e[t[i-1].end]}interpolate(t,e){let i,n;let r=this.options,a=t[e],o=this.points,s=e6(this,{property:e,start:a,end:a});if(!s.length)return;let l=[],h=r.stepped?eQ:r.tension||"monotone"===r.cubicInterpolationMode?e0:eZ;for(i=0,n=s.length;i<n;++i){let{start:n,end:c}=s[i],u=o[n],d=o[c];if(u===d){l.push(u);continue}let f=Math.abs((a-u[e])/(d[e]-u[e])),p=h(u,d,f,r.stepped);p[e]=t[e],l.push(p)}return 1===l.length?l[0]:l}pathSegment(t,e,i){let n=nB(this);return n(t,this,e,i)}path(t,e,i){let n=this.segments,r=nB(this),a=this._loop;for(let o of(e=e||0,i=i||this.points.length-e,n))a&=r(t,this,o,{start:e,end:e+i-1});return!!a}draw(t,e,i,n){let r=this.options||{},a=this.points||[];a.length&&r.borderWidth&&(t.save(),function(t,e,i,n){if(nz&&!e.options.segment){let r;(r=e._path)||(r=e._path=new Path2D,e.path(r,i,n)&&r.closePath()),nF(t,e.options),t.stroke(r)}else!function(t,e,i,n){let{segments:r,options:a}=e,o=nB(e);for(let s of r)nF(t,a,s.style),t.beginPath(),o(t,e,s,{start:i,end:i+n-1})&&t.closePath(),t.stroke()}(t,e,i,n)}(t,this,i,n),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}function n$(t,e,i,n){let r=t.options,{[i]:a}=t.getProps([i],n);return Math.abs(e-a)<r.radius+r.hitRadius}function nq(t,e){let i,n,r,a,o;let{x:s,y:l,base:h,width:c,height:u}=t.getProps(["x","y","base","width","height"],e);return t.horizontal?(o=u/2,i=Math.min(s,h),n=Math.max(s,h),r=l-o,a=l+o):(i=s-(o=c/2),n=s+o,r=Math.min(l,h),a=Math.max(l,h)),{left:i,top:r,right:n,bottom:a}}function nU(t,e,i,n){return t?0:tk(e,i,n)}function nX(t,e,i,n){let r=null===e,a=null===i,o=t&&!(r&&a)&&nq(t,n);return o&&(r||tM(e,o.left,o.right))&&(a||tM(i,o.top,o.bottom))}function nY(t,e){t.rect(e.x,e.y,e.w,e.h)}function nJ(t,e,i={}){let n=t.x!==i.x?-e:0,r=t.y!==i.y?-e:0,a=(t.x+t.w!==i.x+i.w?e:0)-n,o=(t.y+t.h!==i.y+i.h?e:0)-r;return{x:t.x+n,y:t.y+r,w:t.w+a,h:t.h+o,radius:t.radius}}var nG=/*#__PURE__*/Object.freeze({__proto__:null,ArcElement:class extends i9{static id="arc";static defaults={borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0};static defaultRoutes={backgroundColor:"backgroundColor"};static descriptors={_scriptable:!0,_indexable:t=>"borderDash"!==t};circumference;endAngle;fullCircles;innerRadius;outerRadius;pixelMargin;startAngle;constructor(t){super(),this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,t&&Object.assign(this,t)}inRange(t,e,i){let n=this.getProps(["x","y"],i),{angle:r,distance:a}=tw(n,{x:t,y:e}),{startAngle:o,endAngle:s,innerRadius:l,outerRadius:h,circumference:c}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],i),u=(this.options.spacing+this.options.borderWidth)/2,d=z(c,s-o),f=d>=ts||tT(r,o,s),p=tM(a,l+u,h+u);return f&&p}getCenterPoint(t){let{x:e,y:i,startAngle:n,endAngle:r,innerRadius:a,outerRadius:o}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],t),{offset:s,spacing:l}=this.options,h=(n+r)/2,c=(a+o+l+s)/2;return{x:e+Math.cos(h)*c,y:i+Math.sin(h)*c}}tooltipPosition(t){return this.getCenterPoint(t)}draw(t){let{options:e,circumference:i}=this,n=(e.offset||0)/4,r=(e.spacing||0)/2,a=e.circular;if(this.pixelMargin="inner"===e.borderAlign?.33:0,this.fullCircles=i>ts?Math.floor(i/ts):0,0===i||this.innerRadius<0||this.outerRadius<0)return;t.save();let o=(this.startAngle+this.endAngle)/2;t.translate(Math.cos(o)*n,Math.sin(o)*n);let s=1-Math.sin(Math.min(to,i||0)),l=n*s;t.fillStyle=e.backgroundColor,t.strokeStyle=e.borderColor,function(t,e,i,n,r){let{fullCircles:a,startAngle:o,circumference:s}=e,l=e.endAngle;if(a){nR(t,e,i,n,l,r);for(let e=0;e<a;++e)t.fill();isNaN(s)||(l=o+(s%ts||ts))}nR(t,e,i,n,l,r),t.fill()}(t,this,l,r,a),function(t,e,i,n,r){let{fullCircles:a,startAngle:o,circumference:s,options:l}=e,{borderWidth:h,borderJoinStyle:c,borderDash:u,borderDashOffset:d}=l,f="inner"===l.borderAlign;if(!h)return;t.setLineDash(u||[]),t.lineDashOffset=d,f?(t.lineWidth=2*h,t.lineJoin=c||"round"):(t.lineWidth=h,t.lineJoin=c||"bevel");let p=e.endAngle;if(a){nR(t,e,i,n,p,r);for(let e=0;e<a;++e)t.stroke();isNaN(s)||(p=o+(s%ts||ts))}f&&function(t,e,i){let{startAngle:n,pixelMargin:r,x:a,y:o,outerRadius:s,innerRadius:l}=e,h=r/s;// Draw an inner border by clipping the arc and drawing a double-width border
// Enlarge the clipping arc by 0.33 pixels to eliminate glitches between borders
t.beginPath(),t.arc(a,o,s,n-h,i+h),l>r?(h=r/l,t.arc(a,o,l,i+h,n-h,!0)):t.arc(a,o,r,i+tu,n-tu),t.closePath(),t.clip()}(t,e,p),a||(nR(t,e,i,n,p,r),t.stroke())}(t,this,l,r,a),t.restore()}},BarElement:class extends i9{static id="bar";static defaults={borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){var e;let{inflateAmount:i,options:{borderColor:n,backgroundColor:r}}=this,{inner:a,outer:o}=function(t){let e=nq(t),i=e.right-e.left,n=e.bottom-e.top,r=function(t,e,i){let n=t.options.borderWidth,r=t.borderSkipped,a=ev(n);return{t:nU(r.top,a.top,0,i),r:nU(r.right,a.right,0,e),b:nU(r.bottom,a.bottom,0,i),l:nU(r.left,a.left,0,e)}}(t,i/2,n/2),a=function(t,e,i){let{enableBorderRadius:n}=t.getProps(["enableBorderRadius"]),r=t.options.borderRadius,a=ey(r),o=Math.min(e,i),s=t.borderSkipped,l=n||H(r);return{topLeft:nU(!l||s.top||s.left,a.topLeft,0,o),topRight:nU(!l||s.top||s.right,a.topRight,0,o),bottomLeft:nU(!l||s.bottom||s.left,a.bottomLeft,0,o),bottomRight:nU(!l||s.bottom||s.right,a.bottomRight,0,o)}}(t,i/2,n/2);return{outer:{x:e.left,y:e.top,w:i,h:n,radius:a},inner:{x:e.left+r.l,y:e.top+r.t,w:i-r.l-r.r,h:n-r.t-r.b,radius:{topLeft:Math.max(0,a.topLeft-Math.max(r.t,r.l)),topRight:Math.max(0,a.topRight-Math.max(r.t,r.r)),bottomLeft:Math.max(0,a.bottomLeft-Math.max(r.b,r.l)),bottomRight:Math.max(0,a.bottomRight-Math.max(r.b,r.r))}}}}(this),s=(e=o.radius).topLeft||e.topRight||e.bottomLeft||e.bottomRight?ef:nY;t.save(),(o.w!==a.w||o.h!==a.h)&&(t.beginPath(),s(t,nJ(o,i,a)),t.clip(),s(t,nJ(a,-i,o)),t.fillStyle=n,t.fill("evenodd")),t.beginPath(),s(t,nJ(a,i)),t.fillStyle=r,t.fill(),t.restore()}inRange(t,e,i){return nX(this,t,e,i)}inXRange(t,e){return nX(this,t,null,e)}inYRange(t,e){return nX(this,null,t,e)}getCenterPoint(t){let{x:e,y:i,base:n,horizontal:r}=this.getProps(["x","y","base","horizontal"],t);return{x:r?(e+n)/2:e,y:r?i:(i+n)/2}}getRange(t){return"x"===t?this.width/2:this.height/2}},LineElement:nV,PointElement:class extends i9{static id="point";parsed;skip;stop;/**
   * @type {any}
   */static defaults={borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0};/**
   * @type {any}
   */static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};constructor(t){super(),this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,t&&Object.assign(this,t)}inRange(t,e,i){let n=this.options,{x:r,y:a}=this.getProps(["x","y"],i);return Math.pow(t-r,2)+Math.pow(e-a,2)<Math.pow(n.hitRadius+n.radius,2)}inXRange(t,e){return n$(this,t,"x",e)}inYRange(t,e){return n$(this,t,"y",e)}getCenterPoint(t){let{x:e,y:i}=this.getProps(["x","y"],t);return{x:e,y:i}}size(t){let e=(t=t||this.options||{}).radius||0;e=Math.max(e,e&&t.hoverRadius||0);let i=e&&t.borderWidth||0;return(e+i)*2}draw(t,e){let i=this.options;!this.skip&&!(i.radius<.1)&&es(this,e,this.size(i)/2)&&(t.strokeStyle=i.borderColor,t.lineWidth=i.borderWidth,t.fillStyle=i.backgroundColor,ea(t,i,this.x,this.y))}getRange(){let t=this.options||{};// @ts-expect-error Fallbacks should never be hit in practice
return t.radius+t.hitRadius}}});const nK=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"// grey
],nZ=/* #__PURE__ */nK.map(t=>t.replace("rgb(","rgba(").replace(")",", 0.5)"));function nQ(t){return nK[t%nK.length]}function n0(t){return nZ[t%nZ.length]}function n1(t){let e;for(e in t)if(t[e].borderColor||t[e].backgroundColor)return!0;return!1}function n2(t){if(t._decimated){let e=t._data;delete t._decimated,delete t._data,Object.defineProperty(t,"data",{configurable:!0,enumerable:!0,writable:!0,value:e})}}function n5(t){t.data.datasets.forEach(t=>{n2(t)})}function n3(t,e,i,n){if(n)return;let r=e[t],a=i[t];return"angle"===t&&(r=tC(r),a=tC(a)),{property:t,start:r,end:a}}function n4(t,e,i){for(;e>t;e--){let t=i[e];if(!isNaN(t.x)&&!isNaN(t.y))break}return e}function n8(t,e,i,n){return t&&e?n(t[i],e[i]):t?t[i]:e?e[i]:0}function n6(t,e){let i=[],n=!1;return N(t)?(n=!0,i=t):i=function(t,e){let{x:i=null,y:n=null}=t||{},r=e.points,a=[];return e.segments.forEach(({start:t,end:e})=>{e=n4(t,e,r);let o=r[t],s=r[e];null!==n?(a.push({x:o.x,y:n}),a.push({x:s.x,y:n})):null!==i&&(a.push({x:i,y:o.y}),a.push({x:i,y:s.y}))}),a}(t,e),i.length?new nV({points:i,options:{tension:0},_loop:n,_fullLoop:n}):null}function n9(t){return t&&!1!==t.fill}class n7{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,i){let{x:n,y:r,radius:a}=this;return e=e||{start:0,end:ts},t.arc(n,r,a,e.end,e.start,!0),!i.bounds}interpolate(t){let{x:e,y:i,radius:n}=this,r=t.angle;return{x:e+Math.cos(r)*n,y:i+Math.sin(r)*n,angle:r}}}function rt(t,e,i){let n=function(t){let{chart:e,fill:i,line:n}=t;if(W(i))return function(t,e){let i=t.getDatasetMeta(e),n=i&&t.isDatasetVisible(e);return n?i.dataset:null}(e,i);if("stack"===i)return function(t){let{scale:e,index:i,line:n}=t,r=[],a=n.segments,o=n.points,s=function(t,e){let i=[],n=t.getMatchingVisibleMetas("line");for(let t=0;t<n.length;t++){let r=n[t];if(r.index===e)break;r.hidden||i.unshift(r.dataset)}return i}(e,i);s.push(n6({x:null,y:e.bottom},n));for(let t=0;t<a.length;t++){let e=a[t];for(let t=e.start;t<=e.end;t++)!function(t,e,i){let n=[];for(let r=0;r<i.length;r++){let a=i[r],{first:o,last:s,point:l}=function(t,e,i){let n=t.interpolate(e,i);if(!n)return{};let r=n[i],a=t.segments,o=t.points,s=!1,l=!1;for(let t=0;t<a.length;t++){let e=a[t],n=o[e.start][i],h=o[e.end][i];if(tM(r,n,h)){s=r===n,l=r===h;break}}return{first:s,last:l,point:n}}(a,e,"x");if(l&&(!o||!s)){if(o)n.unshift(l);else if(t.push(l),!s)break}}t.push(...n)}(r,o[t],s)}return new nV({points:r,options:{}})}(t);if("shape"===i)return!0;let r=function(t){let e=t.scale||{};return e.getPointPositionForValue?function(t){let{scale:e,fill:i}=t,n=e.options,r=e.getLabels().length,a=n.reverse?e.max:e.min,o="start"===i?a:"end"===i?e.options.reverse?e.min:e.max:H(i)?i.value:e.getBaseValue(),s=[];if(n.grid.circular){let t=e.getPointPositionForValue(0,a);return new n7({x:t.x,y:t.y,radius:e.getDistanceFromCenterForValue(o)})}for(let t=0;t<r;++t)s.push(e.getPointPositionForValue(t,o));return s}(t):function(t){let e;let{scale:i={},fill:n}=t,r=(e=null,"start"===n?e=i.bottom:"end"===n?e=i.top:H(n)?e=i.getPixelForValue(n.value):i.getBasePixel&&(e=i.getBasePixel()),e);if(W(r)){let t=i.isHorizontal();return{x:t?r:null,y:t?null:r}}return null}(t)}(t);return r instanceof n7?r:n6(r,n)}(e),{line:r,scale:a,axis:o}=e,s=r.options,l=s.fill,h=s.backgroundColor,{above:c=h,below:u=h}=l||{};n&&r.points.length&&(el(t,i),function(t,e){let{line:i,target:n,above:r,below:a,area:o,scale:s}=e,l=i._loop?"angle":e.axis;t.save(),"x"===l&&a!==r&&(re(t,n,o.top),ri(t,{line:i,target:n,color:r,scale:s,property:l}),t.restore(),t.save(),re(t,n,o.bottom)),ri(t,{line:i,target:n,color:a,scale:s,property:l}),t.restore()}(t,{line:r,target:n,above:c,below:u,area:i,scale:a,axis:o}),eh(t))}function re(t,e,i){let{segments:n,points:r}=e,a=!0,o=!1;for(let s of(t.beginPath(),n)){let{start:n,end:l}=s,h=r[n],c=r[n4(n,l,r)];a?(t.moveTo(h.x,h.y),a=!1):(t.lineTo(h.x,i),t.lineTo(h.x,h.y)),(o=!!e.pathSegment(t,s,{move:o}))?t.closePath():t.lineTo(c.x,i)}t.lineTo(e.first().x,i),t.closePath(),t.clip()}function ri(t,e){let{line:i,target:n,property:r,color:a,scale:o}=e,s=function(t,e,i){let n=t.segments,r=t.points,a=e.points,o=[];for(let t of n){let{start:n,end:s}=t;s=n4(n,s,r);let l=n3(i,r[n],r[s],t.loop);if(!e.segments){o.push({source:t,target:l,start:r[n],end:r[s]});continue}let h=e6(e,l);for(let e of h){let n=n3(i,a[e.start],a[e.end],e.loop),s=e8(t,r,n);for(let t of s)o.push({source:t,target:e,start:{[i]:n8(l,n,"start",Math.max)},end:{[i]:n8(l,n,"end",Math.min)}})}}return o}(i,n,r);for(let{source:e,target:l,start:h,end:c}of s){let s;let{style:{backgroundColor:u=a}={}}=e,d=!0!==n;t.save(),t.fillStyle=u,function(t,e,i){let{top:n,bottom:r}=e.chart.chartArea,{property:a,start:o,end:s}=i||{};"x"===a&&(t.beginPath(),t.rect(o,n,s-o,r-n),t.clip())}(t,o,d&&n3(r,h,c)),t.beginPath();let f=!!i.pathSegment(t,e);if(d){f?t.closePath():rn(t,n,c,r);let e=!!n.pathSegment(t,l,{move:f,reverse:!0});(s=f&&e)||rn(t,n,h,r)}t.closePath(),t.fill(s?"evenodd":"nonzero"),t.restore()}}function rn(t,e,i,n){let r=e.interpolate(i,n);r&&t.lineTo(r.x,r.y)}const rr=(t,e)=>{let{boxHeight:i=e,boxWidth:n=e}=t;return t.usePointStyle&&(i=Math.min(i,e),n=t.pointStyleWidth||Math.min(n,e)),{boxWidth:n,boxHeight:i,itemHeight:Math.max(e,i)}},ra=(t,e)=>null!==t&&null!==e&&t.datasetIndex===e.datasetIndex&&t.index===e.index;class ro extends i9{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,i){this.maxWidth=t,this.maxHeight=e,this._margins=i,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){let t=this.options.labels||{},e=q(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter(e=>t.filter(e,this.chart.data))),t.sort&&(e=e.sort((e,i)=>t.sort(e,i,this.chart.data))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){let t,e;let{options:i,ctx:n}=this;if(!i.display){this.width=this.height=0;return}let r=i.labels,a=e_(r.font),o=a.size,s=this._computeTitleHeight(),{boxWidth:l,itemHeight:h}=rr(r,o);n.font=a.string,this.isHorizontal()?(t=this.maxWidth,e=this._fitRows(s,o,l,h)+10):(e=this.maxHeight,t=this._fitCols(s,a,l,h)+10),this.width=Math.min(t,i.maxWidth||this.maxWidth),this.height=Math.min(e,i.maxHeight||this.maxHeight)}_fitRows(t,e,i,n){let{ctx:r,maxWidth:a,options:{labels:{padding:o}}}=this,s=this.legendHitBoxes=[],l=this.lineWidths=[0],h=n+o,c=t;r.textAlign="left",r.textBaseline="middle";let u=-1,d=-h;return this.legendItems.forEach((t,f)=>{let p=i+e/2+r.measureText(t.text).width;(0===f||l[l.length-1]+p+2*o>a)&&(c+=h,l[l.length-(f>0?0:1)]=0,d+=h,u++),s[f]={left:0,top:d,row:u,width:p,height:n},l[l.length-1]+=p+o}),c}_fitCols(t,e,i,n){let{ctx:r,maxHeight:a,options:{labels:{padding:o}}}=this,s=this.legendHitBoxes=[],l=this.columnSizes=[],h=a-t,c=o,u=0,d=0,f=0,p=0;return this.legendItems.forEach((t,a)=>{let{itemWidth:g,itemHeight:m}=function(t,e,i,n,r){var a;let o,s;let l=((o=n.text)&&"string"!=typeof o&&(o=o.reduce((t,e)=>t.length>e.length?t:e)),t+e.size/2+i.measureText(o).width),h=(a=e.lineHeight,s=r,"string"!=typeof n.text&&(s=rs(n,a)),s);return{itemWidth:l,itemHeight:h}}(i,e,r,t,n);a>0&&d+m+2*o>h&&(c+=u+o,l.push({width:u,height:d}),f+=u+o,p++,u=d=0),s[a]={left:f,top:d,col:p,width:g,height:m},u=Math.max(u,g),d+=m+o}),c+=u,l.push({width:u,height:d}),c}adjustHitBoxes(){if(!this.options.display)return;let t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:i,labels:{padding:n},rtl:r}}=this,a=e1(r,this.left,this.width);if(this.isHorizontal()){let r=0,o=tN(i,this.left+n,this.right-this.lineWidths[r]);for(let s of e)r!==s.row&&(r=s.row,o=tN(i,this.left+n,this.right-this.lineWidths[r])),s.top+=this.top+t+n,s.left=a.leftForLtr(a.x(o),s.width),o+=s.width+n}else{let r=0,o=tN(i,this.top+t+n,this.bottom-this.columnSizes[r].height);for(let s of e)s.col!==r&&(r=s.col,o=tN(i,this.top+t+n,this.bottom-this.columnSizes[r].height)),s.top=o,s.left+=this.left+n,s.left=a.leftForLtr(a.x(s.left),s.width),o+=s.height+n}}isHorizontal(){return"top"===this.options.position||"bottom"===this.options.position}draw(){if(this.options.display){let t=this.ctx;el(t,this),this._draw(),eh(t)}}_draw(){let t;let{options:e,columnSizes:i,lineWidths:n,ctx:r}=this,{align:a,labels:o}=e,s=ee.color,l=e1(e.rtl,this.left,this.width),h=e_(o.font),{padding:c}=o,u=h.size,d=u/2;this.drawTitle(),r.textAlign=l.textAlign("left"),r.textBaseline="middle",r.lineWidth=.5,r.font=h.string;let{boxWidth:f,boxHeight:p,itemHeight:g}=rr(o,u),m=function(t,e,i){if(isNaN(f)||f<=0||isNaN(p)||p<0)return;r.save();let n=z(i.lineWidth,1);if(r.fillStyle=z(i.fillStyle,s),r.lineCap=z(i.lineCap,"butt"),r.lineDashOffset=z(i.lineDashOffset,0),r.lineJoin=z(i.lineJoin,"miter"),r.lineWidth=n,r.strokeStyle=z(i.strokeStyle,s),r.setLineDash(z(i.lineDash,[])),o.usePointStyle){let a={radius:p*Math.SQRT2/2,pointStyle:i.pointStyle,rotation:i.rotation,borderWidth:n},s=l.xPlus(t,f/2);eo(r,a,s,e+d,o.pointStyleWidth&&f)}else{let a=e+Math.max((u-p)/2,0),o=l.leftForLtr(t,f),s=ey(i.borderRadius);r.beginPath(),Object.values(s).some(t=>0!==t)?ef(r,{x:o,y:a,w:f,h:p,radius:s}):r.rect(o,a,f,p),r.fill(),0!==n&&r.stroke()}r.restore()},b=function(t,e,i){ed(r,i.text,t,e+g/2,h,{strikethrough:i.hidden,textAlign:l.textAlign(i.textAlign)})},v=this.isHorizontal(),y=this._computeTitleHeight();t=v?{x:tN(a,this.left+c,this.right-n[0]),y:this.top+c+y,line:0}:{x:this.left+c,y:tN(a,this.top+y+c,this.bottom-i[0].height),line:0},e2(this.ctx,e.textDirection);let x=g+c;this.legendItems.forEach((s,u)=>{r.strokeStyle=s.fontColor,r.fillStyle=s.fontColor;let p=r.measureText(s.text).width,g=l.textAlign(s.textAlign||(s.textAlign=o.textAlign)),_=f+d+p,w=t.x,S=t.y;l.setWidth(this.width),v?u>0&&w+_+c>this.right&&(S=t.y+=x,t.line++,w=t.x=tN(a,this.left+c,this.right-n[t.line])):u>0&&S+x>this.bottom&&(w=t.x=w+i[t.line].width+c,t.line++,S=t.y=tN(a,this.top+y+c,this.bottom-i[t.line].height));let D=l.x(w);if(m(D,S,s),w=tH(g,w+f+d,v?w+_:this.right,e.rtl),b(l.x(w),S,s),v)t.x+=_+c;else if("string"!=typeof s.text){let e=h.lineHeight;t.y+=rs(s,e)+c}else t.y+=x}),e5(this.ctx,e.textDirection)}drawTitle(){let t;let e=this.options,i=e.title,n=e_(i.font),r=ex(i.padding);if(!i.display)return;let a=e1(e.rtl,this.left,this.width),o=this.ctx,s=i.position,l=n.size/2,h=r.top+l,c=this.left,u=this.width;if(this.isHorizontal())u=Math.max(...this.lineWidths),t=this.top+h,c=tN(e.align,c,this.right-u);else{let i=this.columnSizes.reduce((t,e)=>Math.max(t,e.height),0);t=h+tN(e.align,this.top,this.bottom-i-e.labels.padding-this._computeTitleHeight())}let d=tN(s,c,c+u);o.textAlign=a.textAlign(tj(s)),o.textBaseline="middle",o.strokeStyle=i.color,o.fillStyle=i.color,o.font=n.string,ed(o,i.text,d,t,n)}_computeTitleHeight(){let t=this.options.title,e=e_(t.font),i=ex(t.padding);return t.display?e.lineHeight+i.height:0}_getLegendItemAt(t,e){let i,n,r;if(tM(t,this.left,this.right)&&tM(e,this.top,this.bottom)){for(i=0,r=this.legendHitBoxes;i<r.length;++i)if(tM(t,(n=r[i]).left,n.left+n.width)&&tM(e,n.top,n.top+n.height))return this.legendItems[i]}return null}handleEvent(t){var e;let i=this.options;if(("mousemove"!==(e=t.type)&&"mouseout"!==e||!i.onHover&&!i.onLeave)&&(!i.onClick||"click"!==e&&"mouseup"!==e))return;let n=this._getLegendItemAt(t.x,t.y);if("mousemove"===t.type||"mouseout"===t.type){let e=this._hoveredItem,r=ra(e,n);e&&!r&&q(i.onLeave,[t,e,this],this),this._hoveredItem=n,n&&!r&&q(i.onHover,[t,n,this],this)}else n&&q(i.onClick,[t,n,this],this)}}function rs(t,e){let i=t.text?t.text.length:0;return e*i}class rl extends i9{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e){let i=this.options;if(this.left=0,this.top=0,!i.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=e;let n=N(i.text)?i.text.length:1;this._padding=ex(i.padding);let r=n*e_(i.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=r:this.width=r}isHorizontal(){let t=this.options.position;return"top"===t||"bottom"===t}_drawArgs(t){let e,i,n;let{top:r,left:a,bottom:o,right:s,options:l}=this,h=l.align,c=0;return this.isHorizontal()?(i=tN(h,a,s),n=r+t,e=s-a):("left"===l.position?(i=a+t,n=tN(h,o,r),c=-.5*to):(i=s-t,n=tN(h,r,o),c=.5*to),e=o-r),{titleX:i,titleY:n,maxWidth:e,rotation:c}}draw(){let t=this.ctx,e=this.options;if(!e.display)return;let i=e_(e.font),n=i.lineHeight,r=n/2+this._padding.top,{titleX:a,titleY:o,maxWidth:s,rotation:l}=this._drawArgs(r);ed(t,e.text,0,0,i,{color:e.color,maxWidth:s,rotation:l,textAlign:tj(e.align),textBaseline:"middle",translation:[a,o]})}}const rh=new WeakMap,rc={average(t){let e,i;if(!t.length)return!1;let n=0,r=0,a=0;for(e=0,i=t.length;e<i;++e){let i=t[e].element;if(i&&i.hasValue()){let t=i.tooltipPosition();n+=t.x,r+=t.y,++a}}return{x:n/a,y:r/a}},nearest(t,e){let i,n,r;if(!t.length)return!1;let a=e.x,o=e.y,s=Number.POSITIVE_INFINITY;for(i=0,n=t.length;i<n;++i){let n=t[i].element;if(n&&n.hasValue()){let t=n.getCenterPoint(),i=tS(e,t);i<s&&(s=i,r=n)}}if(r){let t=r.tooltipPosition();a=t.x,o=t.y}return{x:a,y:o}}};function ru(t,e){return e&&(N(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function rd(t){return("string"==typeof t||t instanceof String)&&t.indexOf("\n")>-1?t.split("\n"):t}function rf(t,e){let i=t.chart.ctx,{body:n,footer:r,title:a}=t,{boxWidth:o,boxHeight:s}=e,l=e_(e.bodyFont),h=e_(e.titleFont),c=e_(e.footerFont),u=a.length,d=r.length,f=n.length,p=ex(e.padding),g=p.height,m=0,b=n.reduce((t,e)=>t+e.before.length+e.lines.length+e.after.length,0);if(b+=t.beforeBody.length+t.afterBody.length,u&&(g+=u*h.lineHeight+(u-1)*e.titleSpacing+e.titleMarginBottom),b){let t=e.displayColors?Math.max(s,l.lineHeight):l.lineHeight;g+=f*t+(b-f)*l.lineHeight+(b-1)*e.bodySpacing}d&&(g+=e.footerMarginTop+d*c.lineHeight+(d-1)*e.footerSpacing);let v=0,y=function(t){m=Math.max(m,i.measureText(t).width+v)};return i.save(),i.font=h.string,U(t.title,y),i.font=l.string,U(t.beforeBody.concat(t.afterBody),y),v=e.displayColors?o+2+e.boxPadding:0,U(n,t=>{U(t.before,y),U(t.lines,y),U(t.after,y)}),v=0,i.font=c.string,U(t.footer,y),i.restore(),{width:m+=p.width,height:g}}function rp(t,e,i){let n=i.yAlign||e.yAlign||function(t,e){let{y:i,height:n}=e;return i<n/2?"top":i>t.height-n/2?"bottom":"center"}(t,i);return{xAlign:i.xAlign||e.xAlign||function(t,e,i,n){let{x:r,width:a}=i,{width:o,chartArea:{left:s,right:l}}=t,h="center";return"center"===n?h=r<=(s+l)/2?"left":"right":r<=a/2?h="left":r>=o-a/2&&(h="right"),function(t,e,i,n){let{x:r,width:a}=n,o=i.caretSize+i.caretPadding;if("left"===t&&r+a+o>e.width||"right"===t&&r-a-o<0)return!0}(h,t,e,i)&&(h="center"),h}(t,e,i,n),yAlign:n}}function rg(t,e,i,n){let{caretSize:r,caretPadding:a,cornerRadius:o}=t,{xAlign:s,yAlign:l}=i,h=r+a,{topLeft:c,topRight:u,bottomLeft:d,bottomRight:f}=ey(o),p=function(t,e){let{x:i,width:n}=t;return"right"===e?i-=n:"center"===e&&(i-=n/2),i}(e,s),g=function(t,e,i){let{y:n,height:r}=t;return"top"===e?n+=i:"bottom"===e?n-=r+i:n-=r/2,n}(e,l,h);return"center"===l?"left"===s?p+=h:"right"===s&&(p-=h):"left"===s?p-=Math.max(c,d)+r:"right"===s&&(p+=Math.max(u,f)+r),{x:tk(p,0,n.width-e.width),y:tk(g,0,n.height-e.height)}}function rm(t,e,i){let n=ex(i.padding);return"center"===e?t.x+t.width/2:"right"===e?t.x+t.width-n.right:t.x+n.left}function rb(t,e){let i=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return i?t.override(i):t}const rv={beforeTitle:R,title(t){if(t.length>0){let e=t[0],i=e.chart.data.labels,n=i?i.length:0;if(this&&this.options&&"dataset"===this.options.mode)return e.dataset.label||"";if(e.label)return e.label;if(n>0&&e.dataIndex<n)return i[e.dataIndex]}return""},afterTitle:R,beforeBody:R,beforeLabel:R,label(t){if(this&&this.options&&"dataset"===this.options.mode)return t.label+": "+t.formattedValue||t.formattedValue;let e=t.dataset.label||"";e&&(e+=": ");let i=t.formattedValue;return j(i)||(e+=i),e},labelColor(t){let e=t.chart.getDatasetMeta(t.datasetIndex),i=e.controller.getStyle(t.dataIndex);return{borderColor:i.borderColor,backgroundColor:i.backgroundColor,borderWidth:i.borderWidth,borderDash:i.borderDash,borderDashOffset:i.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(t){let e=t.chart.getDatasetMeta(t.datasetIndex),i=e.controller.getStyle(t.dataIndex);return{pointStyle:i.pointStyle,rotation:i.rotation}},afterLabel:R,afterBody:R,beforeFooter:R,footer:R,afterFooter:R};function ry(t,e,i,n){let r=t[e].call(i,n);return void 0===r?rv[e].call(i,n):r}class rx extends i9{static positioners=rc;constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){let t=this._cachedAnimations;if(t)return t;let e=this.chart,i=this.options.setContext(this.getContext()),n=i.enabled&&e.options.animation&&i.animations,r=new ia(this.chart,n);return n._cacheable&&(this._cachedAnimations=Object.freeze(r)),r}getContext(){return this.$context||(this.$context=eS(this.chart.getContext(),{tooltip:this,tooltipItems:this._tooltipItems,type:"tooltip"}))}getTitle(t,e){let{callbacks:i}=e,n=ry(i,"beforeTitle",this,t),r=ry(i,"title",this,t),a=ry(i,"afterTitle",this,t),o=[];return o=ru(o,rd(n)),o=ru(o,rd(r)),o=ru(o,rd(a))}getBeforeBody(t,e){return ru([],rd(ry(e.callbacks,"beforeBody",this,t)))}getBody(t,e){let{callbacks:i}=e,n=[];return U(t,t=>{let e={before:[],lines:[],after:[]},r=rb(i,t);ru(e.before,rd(ry(r,"beforeLabel",this,t))),ru(e.lines,ry(r,"label",this,t)),ru(e.after,rd(ry(r,"afterLabel",this,t))),n.push(e)}),n}getAfterBody(t,e){return ru([],rd(ry(e.callbacks,"afterBody",this,t)))}getFooter(t,e){let{callbacks:i}=e,n=ry(i,"beforeFooter",this,t),r=ry(i,"footer",this,t),a=ry(i,"afterFooter",this,t),o=[];return o=ru(o,rd(n)),o=ru(o,rd(r)),o=ru(o,rd(a))}_createItems(t){let e,i;let n=this._active,r=this.chart.data,a=[],o=[],s=[],l=[];for(e=0,i=n.length;e<i;++e)l.push(function(t,e){let{element:i,datasetIndex:n,index:r}=e,a=t.getDatasetMeta(n).controller,{label:o,value:s}=a.getLabelAndValue(r);return{chart:t,label:o,parsed:a.getParsed(r),raw:t.data.datasets[n].data[r],formattedValue:s,dataset:a.getDataset(),dataIndex:r,datasetIndex:n,element:i}}(this.chart,n[e]));return t.filter&&(l=l.filter((e,i,n)=>t.filter(e,i,n,r))),t.itemSort&&(l=l.sort((e,i)=>t.itemSort(e,i,r))),U(l,e=>{let i=rb(t.callbacks,e);a.push(ry(i,"labelColor",this,e)),o.push(ry(i,"labelPointStyle",this,e)),s.push(ry(i,"labelTextColor",this,e))}),this.labelColors=a,this.labelPointStyles=o,this.labelTextColors=s,this.dataPoints=l,l}update(t,e){let i;let n=this.options.setContext(this.getContext()),r=this._active,a=[];if(r.length){let t=rc[n.position].call(this,r,this._eventPosition);a=this._createItems(n),this.title=this.getTitle(a,n),this.beforeBody=this.getBeforeBody(a,n),this.body=this.getBody(a,n),this.afterBody=this.getAfterBody(a,n),this.footer=this.getFooter(a,n);let e=this._size=rf(this,n),o=Object.assign({},t,e),s=rp(this.chart,n,o),l=rg(n,o,s,this.chart);this.xAlign=s.xAlign,this.yAlign=s.yAlign,i={opacity:1,x:l.x,y:l.y,width:e.width,height:e.height,caretX:t.x,caretY:t.y}}else 0!==this.opacity&&(i={opacity:0});this._tooltipItems=a,this.$context=void 0,i&&this._resolveAnimations().update(this,i),t&&n.external&&n.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,i,n){let r=this.getCaretPosition(t,i,n);e.lineTo(r.x1,r.y1),e.lineTo(r.x2,r.y2),e.lineTo(r.x3,r.y3)}getCaretPosition(t,e,i){let n,r,a,o,s,l;let{xAlign:h,yAlign:c}=this,{caretSize:u,cornerRadius:d}=i,{topLeft:f,topRight:p,bottomLeft:g,bottomRight:m}=ey(d),{x:b,y:v}=t,{width:y,height:x}=e;return"center"===c?(s=v+x/2,"left"===h?(r=(n=b)-u,o=s+u,l=s-u):(r=(n=b+y)+u,o=s-u,l=s+u),a=n):(r="left"===h?b+Math.max(f,g)+u:"right"===h?b+y-Math.max(p,m)-u:this.caretX,"top"===c?(s=(o=v)-u,n=r-u,a=r+u):(s=(o=v+x)+u,n=r+u,a=r-u),l=o),{x1:n,x2:r,x3:a,y1:o,y2:s,y3:l}}drawTitle(t,e,i){let n,r,a;let o=this.title,s=o.length;if(s){let l=e1(i.rtl,this.x,this.width);for(a=0,t.x=rm(this,i.titleAlign,i),e.textAlign=l.textAlign(i.titleAlign),e.textBaseline="middle",n=e_(i.titleFont),r=i.titleSpacing,e.fillStyle=i.titleColor,e.font=n.string;a<s;++a)e.fillText(o[a],l.x(t.x),t.y+n.lineHeight/2),t.y+=n.lineHeight+r,a+1===s&&(t.y+=i.titleMarginBottom-r)}}_drawColorBox(t,e,i,n,r){let a=this.labelColors[i],o=this.labelPointStyles[i],{boxHeight:s,boxWidth:l}=r,h=e_(r.bodyFont),c=rm(this,"left",r),u=n.x(c),d=s<h.lineHeight?(h.lineHeight-s)/2:0,f=e.y+d;if(r.usePointStyle){let e={radius:Math.min(l,s)/2,pointStyle:o.pointStyle,rotation:o.rotation,borderWidth:1},i=n.leftForLtr(u,l)+l/2,h=f+s/2;t.strokeStyle=r.multiKeyBackground,t.fillStyle=r.multiKeyBackground,ea(t,e,i,h),t.strokeStyle=a.borderColor,t.fillStyle=a.backgroundColor,ea(t,e,i,h)}else{t.lineWidth=H(a.borderWidth)?Math.max(...Object.values(a.borderWidth)):a.borderWidth||1,t.strokeStyle=a.borderColor,t.setLineDash(a.borderDash||[]),t.lineDashOffset=a.borderDashOffset||0;let e=n.leftForLtr(u,l),i=n.leftForLtr(n.xPlus(u,1),l-2),o=ey(a.borderRadius);Object.values(o).some(t=>0!==t)?(t.beginPath(),t.fillStyle=r.multiKeyBackground,ef(t,{x:e,y:f,w:l,h:s,radius:o}),t.fill(),t.stroke(),t.fillStyle=a.backgroundColor,t.beginPath(),ef(t,{x:i,y:f+1,w:l-2,h:s-2,radius:o}),t.fill()):(t.fillStyle=r.multiKeyBackground,t.fillRect(e,f,l,s),t.strokeRect(e,f,l,s),t.fillStyle=a.backgroundColor,t.fillRect(i,f+1,l-2,s-2))}t.fillStyle=this.labelTextColors[i]}drawBody(t,e,i){let n,r,a,o,s,l,h;let{body:c}=this,{bodySpacing:u,bodyAlign:d,displayColors:f,boxHeight:p,boxWidth:g,boxPadding:m}=i,b=e_(i.bodyFont),v=b.lineHeight,y=0,x=e1(i.rtl,this.x,this.width),_=function(i){e.fillText(i,x.x(t.x+y),t.y+v/2),t.y+=v+u},w=x.textAlign(d);for(e.textAlign=d,e.textBaseline="middle",e.font=b.string,t.x=rm(this,w,i),e.fillStyle=i.bodyColor,U(this.beforeBody,_),y=f&&"right"!==w?"center"===d?g/2+m:g+2+m:0,o=0,l=c.length;o<l;++o){for(n=c[o],r=this.labelTextColors[o],e.fillStyle=r,U(n.before,_),a=n.lines,f&&a.length&&(this._drawColorBox(e,t,o,x,i),v=Math.max(b.lineHeight,p)),s=0,h=a.length;s<h;++s)_(a[s]),v=b.lineHeight;U(n.after,_)}y=0,v=b.lineHeight,U(this.afterBody,_),t.y-=u}drawFooter(t,e,i){let n,r;let a=this.footer,o=a.length;if(o){let s=e1(i.rtl,this.x,this.width);for(t.x=rm(this,i.footerAlign,i),t.y+=i.footerMarginTop,e.textAlign=s.textAlign(i.footerAlign),e.textBaseline="middle",n=e_(i.footerFont),e.fillStyle=i.footerColor,e.font=n.string,r=0;r<o;++r)e.fillText(a[r],s.x(t.x),t.y+n.lineHeight/2),t.y+=n.lineHeight+i.footerSpacing}}drawBackground(t,e,i,n){let{xAlign:r,yAlign:a}=this,{x:o,y:s}=t,{width:l,height:h}=i,{topLeft:c,topRight:u,bottomLeft:d,bottomRight:f}=ey(n.cornerRadius);e.fillStyle=n.backgroundColor,e.strokeStyle=n.borderColor,e.lineWidth=n.borderWidth,e.beginPath(),e.moveTo(o+c,s),"top"===a&&this.drawCaret(t,e,i,n),e.lineTo(o+l-u,s),e.quadraticCurveTo(o+l,s,o+l,s+u),"center"===a&&"right"===r&&this.drawCaret(t,e,i,n),e.lineTo(o+l,s+h-f),e.quadraticCurveTo(o+l,s+h,o+l-f,s+h),"bottom"===a&&this.drawCaret(t,e,i,n),e.lineTo(o+d,s+h),e.quadraticCurveTo(o,s+h,o,s+h-d),"center"===a&&"left"===r&&this.drawCaret(t,e,i,n),e.lineTo(o,s+c),e.quadraticCurveTo(o,s,o+c,s),e.closePath(),e.fill(),n.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){let e=this.chart,i=this.$animations,n=i&&i.x,r=i&&i.y;if(n||r){let i=rc[t.position].call(this,this._active,this._eventPosition);if(!i)return;let a=this._size=rf(this,t),o=Object.assign({},i,this._size),s=rp(e,t,o),l=rg(t,o,s,e);(n._to!==l.x||r._to!==l.y)&&(this.xAlign=s.xAlign,this.yAlign=s.yAlign,this.width=a.width,this.height=a.height,this.caretX=i.x,this.caretY=i.y,this._resolveAnimations().update(this,l))}}_willRender(){return!!this.opacity}draw(t){let e=this.options.setContext(this.getContext()),i=this.opacity;if(!i)return;this._updateAnimationTarget(e);let n={width:this.width,height:this.height},r={x:this.x,y:this.y};i=.001>Math.abs(i)?0:i;let a=ex(e.padding),o=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&o&&(t.save(),t.globalAlpha=i,this.drawBackground(r,t,n,e),e2(t,e.textDirection),r.y+=a.top,this.drawTitle(r,t,e),this.drawBody(r,t,e),this.drawFooter(r,t,e),e5(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){let i=this._active,n=t.map(({datasetIndex:t,index:e})=>{let i=this.chart.getDatasetMeta(t);if(!i)throw Error("Cannot find a dataset at index "+t);return{datasetIndex:t,element:i.data[e],index:e}}),r=!X(i,n),a=this._positionChanged(n,e);(r||a)&&(this._active=n,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,i=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;let n=this.options,r=this._active||[],a=this._getActiveElements(t,r,e,i),o=this._positionChanged(a,t),s=e||!X(a,r)||o;return s&&(this._active=a,(n.enabled||n.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),s}_getActiveElements(t,e,i,n){let r=this.options;if("mouseout"===t.type)return[];if(!n)return e;let a=this.chart.getElementsAtEventForMode(t,r.mode,r,i);return r.reverse&&a.reverse(),a}_positionChanged(t,e){let{caretX:i,caretY:n,options:r}=this,a=rc[r.position].call(this,t,e);return!1!==a&&(i!==a.x||n!==a.y)}}var r_=/*#__PURE__*/Object.freeze({__proto__:null,Colors:{id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(t,e,i){let n;if(!i.enabled)return;let{data:{datasets:r},options:a}=t.config,{elements:o}=a;if(!i.forceOverride&&(n1(r)||a&&(a.borderColor||a.backgroundColor)||o&&n1(o)))return;let s=(n=0,(e,i)=>{var r,a,o;let s=t.getDatasetMeta(i).controller;s instanceof iD?(r=n,e.backgroundColor=e.data.map(()=>nQ(r++)),n=r):s instanceof iC?(a=n,e.backgroundColor=e.data.map(()=>n0(a++)),n=a):s&&(o=n,e.borderColor=nQ(o),e.backgroundColor=n0(o),n=++o)});r.forEach(s)}},Decimation:{id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(t,e,i)=>{if(!i.enabled){n5(t);return}let n=t.width;t.data.datasets.forEach((e,r)=>{let a;let{_data:o,indexAxis:s}=e,l=t.getDatasetMeta(r),h=o||e.data;if("y"===ew([s,t.options.indexAxis])||!l.controller.supportsDecimation)return;let c=t.scales[l.xAxisID];if("linear"!==c.type&&"time"!==c.type||t.options.parsing)return;let{start:u,count:d}=function(t,e){let i;let n=e.length,r=0,{iScale:a}=t,{min:o,max:s,minDefined:l,maxDefined:h}=a.getUserBounds();return l&&(r=tk(tP(e,a.axis,o).lo,0,n-1)),i=h?tk(tP(e,a.axis,s).hi+1,r,n)-r:n-r,{start:r,count:i}}(l,h),f=i.threshold||4*n;if(d<=f){n2(e);return}switch(j(o)&&(e._data=h,delete e.data,Object.defineProperty(e,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(t){this._data=t}})),i.algorithm){case"lttb":a=function(t,e,i,n,r){let a,o,s,l,h;let c=r.samples||n;if(c>=i)return t.slice(e,e+i);let u=[],d=(i-2)/(c-2),f=0,p=e+i-1,g=e;for(a=0,u[f++]=t[g];a<c-2;a++){let n,r=0,c=0,p=Math.floor((a+1)*d)+1+e,m=Math.min(Math.floor((a+2)*d)+1,i)+e,b=m-p;for(n=p;n<m;n++)r+=t[n].x,c+=t[n].y;r/=b,c/=b;let v=Math.floor(a*d)+1+e,y=Math.min(Math.floor((a+1)*d)+1,i)+e,{x:x,y:_}=t[g];for(s=l=-1,n=v;n<y;n++)(l=.5*Math.abs((x-r)*(t[n].y-_)-(x-t[n].x)*(c-_)))>s&&(s=l,o=t[n],h=n);u[f++]=o,g=h}return u[f++]=t[p],u}(h,u,d,n,i);break;case"min-max":a=function(t,e,i,n){let r,a,o,s,l,h,c,u,d,f,p=0,g=0,m=[],b=t[e].x,v=t[e+i-1].x,y=v-b;for(r=e;r<e+i;++r){o=((a=t[r]).x-b)/y*n,s=a.y;let e=0|o;if(e===l)s<d?(d=s,h=r):s>f&&(f=s,c=r),p=(g*p+a.x)/++g;else{let i=r-1;if(!j(h)&&!j(c)){let e=Math.min(h,c),n=Math.max(h,c);e!==u&&e!==i&&m.push({...t[e],x:p}),n!==u&&n!==i&&m.push({...t[n],x:p})}r>0&&i!==u&&m.push(t[i]),m.push(a),l=e,g=0,d=f=s,h=c=u=r}}return m}(h,u,d,n);break;default:throw Error(`Unsupported decimation algorithm '${i.algorithm}'`)}e._decimated=a})},destroy(t){n5(t)}},Filler:{id:"filler",afterDatasetsUpdate(t,e,i){let n,r,a,o;let s=(t.data.datasets||[]).length,l=[];for(r=0;r<s;++r)a=(n=t.getDatasetMeta(r)).dataset,o=null,a&&a.options&&a instanceof nV&&(o={visible:t.isDatasetVisible(r),index:r,fill:function(t,e,i){var n,r;let a=function(t){let e=t.options,i=e.fill,n=z(i&&i.target,i);return void 0===n&&(n=!!e.backgroundColor),!1!==n&&null!==n&&(!0===n?"origin":n)}(t);if(H(a))return!isNaN(a.value)&&a;let o=parseFloat(a);return W(o)&&Math.floor(o)===o?(n=a[0],r=o,("-"===n||"+"===n)&&(r=e+r),r!==e&&!(r<0)&&!(r>=i)&&r):["origin","start","end","stack","shape"].indexOf(a)>=0&&a}(a,r,s),chart:t,axis:n.controller.options.indexAxis,scale:n.vScale,line:a}),n.$filler=o,l.push(o);for(r=0;r<s;++r)(o=l[r])&&!1!==o.fill&&(o.fill=function(t,e,i){let n;let r=t[e],a=r.fill,o=[e];if(!i)return a;for(;!1!==a&&-1===o.indexOf(a);){if(!W(a))return a;if(!(n=t[a]))break;if(n.visible)return a;o.push(a),a=n.fill}return!1}(l,r,i.propagate))},beforeDraw(t,e,i){let n="beforeDraw"===i.drawTime,r=t.getSortedVisibleDatasetMetas(),a=t.chartArea;for(let e=r.length-1;e>=0;--e){let i=r[e].$filler;i&&(i.line.updateControlPoints(a,i.axis),n&&i.fill&&rt(t.ctx,i,a))}},beforeDatasetsDraw(t,e,i){if("beforeDatasetsDraw"!==i.drawTime)return;let n=t.getSortedVisibleDatasetMetas();for(let e=n.length-1;e>=0;--e){let i=n[e].$filler;n9(i)&&rt(t.ctx,i,t.chartArea)}},beforeDatasetDraw(t,e,i){let n=e.meta.$filler;n9(n)&&"beforeDatasetDraw"===i.drawTime&&rt(t.ctx,n,t.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}},Legend:{id:"legend",_element:ro,start(t,e,i){let n=t.legend=new ro({ctx:t.ctx,options:i,chart:t});i$.configure(t,n,i),i$.addBox(t,n)},stop(t){i$.removeBox(t,t.legend),delete t.legend},beforeUpdate(t,e,i){let n=t.legend;i$.configure(t,n,i),n.options=i},afterUpdate(t){let e=t.legend;e.buildLabels(),e.adjustHitBoxes()},afterEvent(t,e){e.replay||t.legend.handleEvent(e.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(t,e,i){let n=e.datasetIndex,r=i.chart;r.isDatasetVisible(n)?(r.hide(n),e.hidden=!0):(r.show(n),e.hidden=!1)},onHover:null,onLeave:null,labels:{color:t=>t.chart.options.color,boxWidth:40,padding:10,generateLabels(t){let e=t.data.datasets,{labels:{usePointStyle:i,pointStyle:n,textAlign:r,color:a,useBorderRadius:o,borderRadius:s}}=t.legend.options;return t._getSortedDatasetMetas().map(t=>{let l=t.controller.getStyle(i?0:void 0),h=ex(l.borderWidth);return{text:e[t.index].label,fillStyle:l.backgroundColor,fontColor:a,hidden:!t.visible,lineCap:l.borderCapStyle,lineDash:l.borderDash,lineDashOffset:l.borderDashOffset,lineJoin:l.borderJoinStyle,lineWidth:(h.width+h.height)/4,strokeStyle:l.borderColor,pointStyle:n||l.pointStyle,rotation:l.rotation,textAlign:r||l.textAlign,borderRadius:o&&(s||l.borderRadius),datasetIndex:t.index}},this)}},title:{color:t=>t.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:t=>!t.startsWith("on"),labels:{_scriptable:t=>!["generateLabels","filter","sort"].includes(t)}}},SubTitle:{id:"subtitle",start(t,e,i){let n=new rl({ctx:t.ctx,options:i,chart:t});i$.configure(t,n,i),i$.addBox(t,n),rh.set(t,n)},stop(t){i$.removeBox(t,rh.get(t)),rh.delete(t)},beforeUpdate(t,e,i){let n=rh.get(t);i$.configure(t,n,i),n.options=i},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}},Title:{id:"title",_element:rl,start(t,e,i){!function(t,e){let i=new rl({ctx:t.ctx,options:e,chart:t});i$.configure(t,i,e),i$.addBox(t,i),t.titleBlock=i}(t,i)},stop(t){let e=t.titleBlock;i$.removeBox(t,e),delete t.titleBlock},beforeUpdate(t,e,i){let n=t.titleBlock;i$.configure(t,n,i),n.options=i},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}},Tooltip:{id:"tooltip",_element:rx,positioners:rc,afterInit(t,e,i){i&&(t.tooltip=new rx({chart:t,options:i}))},beforeUpdate(t,e,i){t.tooltip&&t.tooltip.initialize(i)},reset(t,e,i){t.tooltip&&t.tooltip.initialize(i)},afterDraw(t){let e=t.tooltip;if(e&&e._willRender()){let i={tooltip:e};if(!1===t.notifyPlugins("beforeTooltipDraw",{...i,cancelable:!0}))return;e.draw(t.ctx),t.notifyPlugins("afterTooltipDraw",i)}},afterEvent(t,e){if(t.tooltip){let i=e.replay;t.tooltip.handleEvent(e.event,i,e.inChartArea)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(t,e)=>e.bodyFont.size,boxWidth:(t,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:rv},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:t=>"filter"!==t&&"itemSort"!==t&&"external"!==t,_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]}});const rw=(t,e,i,n)=>("string"==typeof e?(i=t.push(e)-1,n.unshift({index:i,label:e})):isNaN(e)&&(i=null),i),rS=(t,e)=>null===t?null:tk(Math.round(t),0,e);function rD(t){let e=this.getLabels();return t>=0&&t<e.length?e[t]:t}function rC(t,e,{horizontal:i,minRotation:n}){let r=tx(n),a=.75*e*(""+t).length;return Math.min(e/((i?Math.sin(r):Math.cos(r))||.001),a)}class rT extends no{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return j(t)||("number"==typeof t||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){let{beginAtZero:t}=this.options,{minDefined:e,maxDefined:i}=this.getUserBounds(),{min:n,max:r}=this,a=t=>n=e?n:t,o=t=>r=i?r:t;if(t){let t=tg(n),e=tg(r);t<0&&e<0?o(0):t>0&&e>0&&a(0)}if(n===r){let e=0===r?1:Math.abs(.05*r);o(r+e),t||a(n-e)}this.min=n,this.max=r}getTickLimit(){let t;let e=this.options.ticks,{maxTicksLimit:i,stepSize:n}=e;return n?(t=Math.ceil(this.max/n)-Math.floor(this.min/n)+1)>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${n} would result generating up to ${t} ticks. Limiting to 1000.`),t=1e3):(t=this.computeTickLimit(),i=i||11),i&&(t=Math.min(i,t)),t}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){let t=this.options,e=t.ticks,i=this.getTickLimit();i=Math.max(2,i);let n={maxTicks:i,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:!1!==e.includeBounds},r=this._range||this,a=function(t,e){let i,n,r,a;let o=[],{bounds:s,step:l,min:h,max:c,precision:u,count:d,maxTicks:f,maxDigits:p,includeBounds:g}=t,m=l||1,b=f-1,{min:v,max:y}=e,x=!j(h),_=!j(c),w=!j(d),S=(y-v)/(p+1),D=tb((y-v)/b/m)*m;if(D<1e-14&&!x&&!_)return[{value:v},{value:y}];(a=Math.ceil(y/D)-Math.floor(v/D))>b&&(D=tb(a*D/b/m)*m),j(u)||(D=Math.ceil(D*(i=Math.pow(10,u)))/i),"ticks"===s?(n=Math.floor(v/D)*D,r=Math.ceil(y/D)*D):(n=v,r=y),x&&_&&l&&function(t,e){let i=Math.round(t);return i-e<=t&&i+e>=t}((c-h)/l,D/1e3)?(a=Math.round(Math.min((c-h)/D,f)),D=(c-h)/a,n=h,r=c):w?(n=x?h:n,D=((r=_?c:r)-n)/(a=d-1)):a=tm(a=(r-n)/D,Math.round(a),D/1e3)?Math.round(a):Math.ceil(a);let C=Math.max(t_(D),t_(n));n=Math.round(n*(i=Math.pow(10,j(u)?C:u)))/i,r=Math.round(r*i)/i;let T=0;for(x&&(g&&n!==h?(o.push({value:h}),n<h&&T++,tm(Math.round((n+T*D)*i)/i,h,rC(h,S,t))&&T++):n<h&&T++);T<a;++T){let t=Math.round((n+T*D)*i)/i;if(_&&t>c)break;o.push({value:t})}return _&&g&&r!==c?o.length&&tm(o[o.length-1].value,c,rC(c,S,t))?o[o.length-1].value=c:o.push({value:c}):_&&r!==c||o.push({value:r}),o}(n,r);return"ticks"===t.bounds&&ty(a,this,"value"),t.reverse?(a.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),a}configure(){let t=this.ticks,e=this.min,i=this.max;if(super.configure(),this.options.offset&&t.length){let n=(i-e)/Math.max(t.length-1,1)/2;e-=n,i+=n}this._startValue=e,this._endValue=i,this._valueRange=i-e}getLabelForValue(t){return tZ(t,this.chart.options.locale,this.options.ticks.format)}}class rk extends rT{static id="linear";static defaults={ticks:{callback:t8.formatters.numeric}};determineDataLimits(){let{min:t,max:e}=this.getMinMax(!0);this.min=W(t)?t:0,this.max=W(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){let t=this.isHorizontal(),e=t?this.width:this.height,i=tx(this.options.ticks.minRotation),n=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,n.lineHeight/((t?Math.sin(i):Math.cos(i))||.001)))}getPixelForValue(t){return null===t?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}const rM=t=>Math.floor(tp(t)),rA=(t,e)=>Math.pow(10,rM(t)+e);function rP(t){let e=t/Math.pow(10,rM(t));return 1===e}function rL(t,e,i){let n=Math.pow(10,i);return Math.ceil(e/n)-Math.floor(t/n)}class rE extends no{static id="logarithmic";static defaults={ticks:{callback:t8.formatters.logarithmic,major:{enabled:!0}}};constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){let i=rT.prototype.parse.apply(this,[t,e]);if(0===i){this._zero=!0;return}return W(i)&&i>0?i:null}determineDataLimits(){let{min:t,max:e}=this.getMinMax(!0);this.min=W(t)?Math.max(0,t):null,this.max=W(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!W(this._userMin)&&(this.min=t===rA(this.min,0)?rA(this.min,-1):rA(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){let{minDefined:t,maxDefined:e}=this.getUserBounds(),i=this.min,n=this.max,r=e=>i=t?i:e,a=t=>n=e?n:t;i===n&&(i<=0?(r(1),a(10)):(r(rA(i,-1)),a(rA(n,1)))),i<=0&&r(rA(n,-1)),n<=0&&a(rA(i,1)),this.min=i,this.max=n}buildTicks(){let t=this.options,e={min:this._userMin,max:this._userMax},i=function(t,{min:e,max:i}){e=B(t.min,e);let n=[],r=rM(e),a=function(t,e){let i=e-t,n=rM(i);for(;rL(t,e,n)>10;)n++;for(;10>rL(t,e,n);)n--;return Math.min(n,rM(t))}(e,i),o=a<0?Math.pow(10,Math.abs(a)):1,s=Math.pow(10,a),l=r>a?Math.pow(10,r):0,h=Math.round((e-l)*o)/o,c=Math.floor((e-l)/s/10)*s*10,u=Math.floor((h-c)/Math.pow(10,a)),d=B(t.min,Math.round((l+c+u*Math.pow(10,a))*o)/o);for(;d<i;)n.push({value:d,major:rP(d),significand:u}),u>=10?u=u<15?15:20:u++,u>=20&&(u=2,o=++a>=0?1:o),d=Math.round((l+c+u*Math.pow(10,a))*o)/o;let f=B(t.max,d);return n.push({value:f,major:rP(f),significand:u}),n}(e,this);return"ticks"===t.bounds&&ty(i,this,"value"),t.reverse?(i.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),i}getLabelForValue(t){return void 0===t?"0":tZ(t,this.chart.options.locale,this.options.ticks.format)}configure(){let t=this.min;super.configure(),this._startValue=tp(t),this._valueRange=tp(this.max)-tp(t)}getPixelForValue(t){return((void 0===t||0===t)&&(t=this.min),null===t||isNaN(t))?NaN:this.getPixelForDecimal(t===this.min?0:(tp(t)-this._startValue)/this._valueRange)}getValueForPixel(t){let e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}}function rI(t){let e=t.ticks;if(e.display&&t.display){let t=ex(e.backdropPadding);return z(e.font&&e.font.size,ee.font.size)+t.height}return 0}function rO(t,e,i,n,r){return t===n||t===r?{start:e-i/2,end:e+i/2}:t<n||t>r?{start:e-i,end:e}:{start:e,end:e+i}}function rR(t,e,i,n){let{ctx:r}=t;if(i)r.arc(t.xCenter,t.yCenter,e,0,ts);else{let i=t.getPointPosition(0,e);r.moveTo(i.x,i.y);for(let a=1;a<n;a++)i=t.getPointPosition(a,e),r.lineTo(i.x,i.y)}}class rF extends rT{static id="radialLinear";static defaults={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:t8.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback:t=>t,padding:5,centerPointLabels:!1}};static defaultRoutes={"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"};static descriptors={angleLines:{_fallback:"grid"}};constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){let t=this._padding=ex(rI(this.options)/2),e=this.width=this.maxWidth-t.width,i=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+i/2+t.top),this.drawingArea=Math.floor(Math.min(e,i)/2)}determineDataLimits(){let{min:t,max:e}=this.getMinMax(!1);this.min=W(t)&&!isNaN(t)?t:0,this.max=W(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/rI(this.options))}generateTickLabels(t){rT.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((t,e)=>{let i=q(this.options.pointLabels.callback,[t,e],this);return i||0===i?i:""}).filter((t,e)=>this.chart.getDataVisibility(e))}fit(){let t=this.options;t.display&&t.pointLabels.display?function(t){let e={l:t.left+t._padding.left,r:t.right-t._padding.right,t:t.top+t._padding.top,b:t.bottom-t._padding.bottom},i=Object.assign({},e),n=[],r=[],a=t._pointLabels.length,o=t.options.pointLabels,s=o.centerPointLabels?to/a:0;for(let c=0;c<a;c++){var l,h;let a=o.setContext(t.getPointLabelContext(c));r[c]=a.padding;let u=t.getPointPosition(c,t.drawingArea+r[c],s),d=e_(a.font),f=(l=t.ctx,h=N(h=t._pointLabels[c])?h:[h],{w:/**
 * @private
 */// eslint-disable-next-line complexity
function(t,e,i,n){let r,a,o,s,l;let h=(n=n||{}).data=n.data||{},c=n.garbageCollect=n.garbageCollect||[];n.font!==e&&(h=n.data={},c=n.garbageCollect=[],n.font=e),t.save(),t.font=e;let u=0,d=i.length;for(r=0;r<d;r++)// Undefined strings and arrays should not be measured
if(null==(s=i[r])||N(s)){if(N(s))// to do maybe simplify this function a bit so we can do this more recursively?
for(a=0,o=s.length;a<o;a++)// Undefined strings and arrays should not be measured
null==(l=s[a])||N(l)||(u=ei(t,h,c,u,l))}else u=ei(t,h,c,u,s);t.restore();let f=c.length/2;if(f>i.length){for(r=0;r<f;r++)delete h[c[r]];c.splice(0,f)}return u}(l,d.string,h),h:h.length*d.lineHeight});n[c]=f;let p=tC(t.getIndexAngle(c)+s),g=Math.round(p*(180/to)),m=rO(g,u.x,f.w,0,180),b=rO(g,u.y,f.h,90,270);!function(t,e,i,n,r){let a=Math.abs(Math.sin(i)),o=Math.abs(Math.cos(i)),s=0,l=0;n.start<e.l?(s=(e.l-n.start)/a,t.l=Math.min(t.l,e.l-s)):n.end>e.r&&(s=(n.end-e.r)/a,t.r=Math.max(t.r,e.r+s)),r.start<e.t?(l=(e.t-r.start)/o,t.t=Math.min(t.t,e.t-l)):r.end>e.b&&(l=(r.end-e.b)/o,t.b=Math.max(t.b,e.b+l))}(i,e,p,m,b)}t.setCenterPoint(e.l-i.l,i.r-e.r,e.t-i.t,i.b-e.b),t._pointLabelItems=function(t,e,i){let n;let r=[],a=t._pointLabels.length,o=t.options,{centerPointLabels:s,display:l}=o.pointLabels,h={extra:rI(o)/2,additionalAngle:s?to/a:0};for(let o=0;o<a;o++){h.padding=i[o],h.size=e[o];let a=function(t,e,i){var n,r,a,o;let s=t.drawingArea,{extra:l,additionalAngle:h,padding:c,size:u}=i,d=t.getPointPosition(e,s+l+c,h),f=Math.round(tC(d.angle+tu)*(180/to)),p=(n=d.y,r=u.h,90===f||270===f?n-=r/2:(f>270||f<90)&&(n-=r),n),g=0===f||180===f?"center":f<180?"left":"right",m=(a=d.x,o=u.w,"right"===g?a-=o:"center"===g&&(a-=o/2),a);return{visible:!0,x:d.x,y:p,textAlign:g,left:m,top:p,right:m+u.w,bottom:p+u.h}}(t,o,h);r.push(a),"auto"===l&&(a.visible=function(t,e){if(!e)return!0;let{left:i,top:n,right:r,bottom:a}=t,o=es({x:i,y:n},e)||es({x:i,y:a},e)||es({x:r,y:n},e)||es({x:r,y:a},e);return!o}(a,n),a.visible&&(n=a))}return r}(t,n,r)}(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,i,n){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((i-n)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,i,n))}getIndexAngle(t){let e=ts/(this._pointLabels.length||1),i=this.options.startAngle||0;return tC(t*e+tx(i))}getDistanceFromCenterForValue(t){if(j(t))return NaN;let e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(j(t))return NaN;let e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){let e=this._pointLabels||[];if(t>=0&&t<e.length){let i=e[t];return eS(this.getContext(),{label:i,index:t,type:"pointLabel"})}}getPointPosition(t,e,i=0){let n=this.getIndexAngle(t)-tu+i;return{x:Math.cos(n)*e+this.xCenter,y:Math.sin(n)*e+this.yCenter,angle:n}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){let{left:e,top:i,right:n,bottom:r}=this._pointLabelItems[t];return{left:e,top:i,right:n,bottom:r}}drawBackground(){let{backgroundColor:t,grid:{circular:e}}=this.options;if(t){let i=this.ctx;i.save(),i.beginPath(),rR(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),i.closePath(),i.fillStyle=t,i.fill(),i.restore()}}drawGrid(){let t,e,i;let n=this.ctx,r=this.options,{angleLines:a,grid:o,border:s}=r,l=this._pointLabels.length;if(r.pointLabels.display&&function(t,e){let{ctx:i,options:{pointLabels:n}}=t;for(let r=e-1;r>=0;r--){let e=t._pointLabelItems[r];if(!e.visible)continue;let a=n.setContext(t.getPointLabelContext(r));!function(t,e,i){let{left:n,top:r,right:a,bottom:o}=i,{backdropColor:s}=e;if(!j(s)){let i=ey(e.borderRadius),l=ex(e.backdropPadding);t.fillStyle=s;let h=n-l.left,c=r-l.top,u=a-n+l.width,d=o-r+l.height;Object.values(i).some(t=>0!==t)?(t.beginPath(),ef(t,{x:h,y:c,w:u,h:d,radius:i}),t.fill()):t.fillRect(h,c,u,d)}}(i,a,e);let o=e_(a.font),{x:s,y:l,textAlign:h}=e;ed(i,t._pointLabels[r],s,l+o.lineHeight/2,o,{color:a.color,textAlign:h,textBaseline:"middle"})}}(this,l),o.display&&this.ticks.forEach((t,i)=>{if(0!==i){e=this.getDistanceFromCenterForValue(t.value);let n=this.getContext(i),r=o.setContext(n),a=s.setContext(n);!function(t,e,i,n,r){let a=t.ctx,o=e.circular,{color:s,lineWidth:l}=e;(o||n)&&s&&l&&!(i<0)&&(a.save(),a.strokeStyle=s,a.lineWidth=l,a.setLineDash(r.dash),a.lineDashOffset=r.dashOffset,a.beginPath(),rR(t,i,o,n),a.closePath(),a.stroke(),a.restore())}(this,r,e,l,a)}}),a.display){for(n.save(),t=l-1;t>=0;t--){let o=a.setContext(this.getPointLabelContext(t)),{color:s,lineWidth:l}=o;l&&s&&(n.lineWidth=l,n.strokeStyle=s,n.setLineDash(o.borderDash),n.lineDashOffset=o.borderDashOffset,e=this.getDistanceFromCenterForValue(r.ticks.reverse?this.min:this.max),i=this.getPointPosition(t,e),n.beginPath(),n.moveTo(this.xCenter,this.yCenter),n.lineTo(i.x,i.y),n.stroke())}n.restore()}}drawBorder(){}drawLabels(){let t,e;let i=this.ctx,n=this.options,r=n.ticks;if(!r.display)return;let a=this.getIndexAngle(0);i.save(),i.translate(this.xCenter,this.yCenter),i.rotate(a),i.textAlign="center",i.textBaseline="middle",this.ticks.forEach((a,o)=>{if(0===o&&!n.reverse)return;let s=r.setContext(this.getContext(o)),l=e_(s.font);if(t=this.getDistanceFromCenterForValue(this.ticks[o].value),s.showLabelBackdrop){i.font=l.string,e=i.measureText(a.label).width,i.fillStyle=s.backdropColor;let n=ex(s.backdropPadding);i.fillRect(-e/2-n.left,-t-l.size/2-n.top,e+n.width,l.size+n.height)}ed(i,a.label,0,-t,l,{color:s.color,strokeColor:s.textStrokeColor,strokeWidth:s.textStrokeWidth})}),i.restore()}drawTitle(){}}const rj={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},rN=/* #__PURE__ */Object.keys(rj);function rH(t,e){return t-e}function rW(t,e){if(j(e))return null;let i=t._adapter,{parser:n,round:r,isoWeekday:a}=t._parseOpts,o=e;return("function"==typeof n&&(o=n(o)),W(o)||(o="string"==typeof n?i.parse(o,n):i.parse(o)),null===o)?null:(r&&(o="week"===r&&(tv(a)||!0===a)?i.startOf(o,"isoWeek",a):i.startOf(o,r)),+o)}function rB(t,e,i,n){let r=rN.length;for(let a=rN.indexOf(t);a<r-1;++a){let t=rj[rN[a]],r=t.steps?t.steps:Number.MAX_SAFE_INTEGER;if(t.common&&Math.ceil((i-e)/(r*t.size))<=n)return rN[a]}return rN[r-1]}function rz(t,e,i){if(i){if(i.length){let{lo:n,hi:r}=tA(i,e),a=i[n]>=e?i[n]:i[r];t[a]=!0}}else t[e]=!0}function rV(t,e,i){let n,r;let a=[],o={},s=e.length;for(n=0;n<s;++n)o[r=e[n]]=n,a.push({value:r,major:!1});return 0!==s&&i?function(t,e,i,n){let r,a;let o=t._adapter,s=+o.startOf(e[0].value,n),l=e[e.length-1].value;for(r=s;r<=l;r=+o.add(r,1,n))(a=i[r])>=0&&(e[a].major=!0);return e}(t,a,o,i):a}class r$ extends no{static id="time";static defaults={bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}};constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e={}){let i=t.time||(t.time={}),n=this._adapter=new iA._date(t.adapters.date);n.init(e),Z(i.displayFormats,n.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return void 0===t?null:rW(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){let t=this.options,e=this._adapter,i=t.time.unit||"day",{min:n,max:r,minDefined:a,maxDefined:o}=this.getUserBounds();function s(t){a||isNaN(t.min)||(n=Math.min(n,t.min)),o||isNaN(t.max)||(r=Math.max(r,t.max))}a&&o||(s(this._getLabelBounds()),("ticks"!==t.bounds||"labels"!==t.ticks.source)&&s(this.getMinMax(!1))),n=W(n)&&!isNaN(n)?n:+e.startOf(Date.now(),i),r=W(r)&&!isNaN(r)?r:+e.endOf(Date.now(),i)+1,this.min=Math.min(n,r-1),this.max=Math.max(n+1,r)}_getLabelBounds(){let t=this.getLabelTimestamps(),e=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],i=t[t.length-1]),{min:e,max:i}}buildTicks(){let t=this.options,e=t.time,i=t.ticks,n="labels"===i.source?this.getLabelTimestamps():this._generate();"ticks"===t.bounds&&n.length&&(this.min=this._userMin||n[0],this.max=this._userMax||n[n.length-1]);let r=this.min,a=this.max,o=/**
 * Return subset of `values` between `min` and `max` inclusive.
 * Values are assumed to be in sorted order.
 * @param values - sorted array of values
 * @param min - min value
 * @param max - max value
 */function(t,e,i){let n=0,r=t.length;for(;n<r&&t[n]<e;)n++;for(;r>n&&t[r-1]>i;)r--;return n>0||r<t.length?t.slice(n,r):t}(n,r,a);return this._unit=e.unit||(i.autoSkip?rB(e.minUnit,this.min,this.max,this._getLabelCapacity(r)):function(t,e,i,n,r){for(let a=rN.length-1;a>=rN.indexOf(i);a--){let i=rN[a];if(rj[i].common&&t._adapter.diff(r,n,i)>=e-1)return i}return rN[i?rN.indexOf(i):0]}(this,o.length,e.minUnit,this.min,this.max)),this._majorUnit=i.major.enabled&&"year"!==this._unit?function(t){for(let e=rN.indexOf(t)+1,i=rN.length;e<i;++e)if(rj[rN[e]].common)return rN[e]}(this._unit):void 0,this.initOffsets(n),t.reverse&&o.reverse(),rV(this,o,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let e,i,n=0,r=0;this.options.offset&&t.length&&(e=this.getDecimalForValue(t[0]),n=1===t.length?1-e:(this.getDecimalForValue(t[1])-e)/2,i=this.getDecimalForValue(t[t.length-1]),r=1===t.length?i:(i-this.getDecimalForValue(t[t.length-2]))/2);let a=t.length<3?.5:.25;n=tk(n,0,a),r=tk(r,0,a),this._offsets={start:n,end:r,factor:1/(n+1+r)}}_generate(){let t,e;let i=this._adapter,n=this.min,r=this.max,a=this.options,o=a.time,s=o.unit||rB(o.minUnit,n,r,this._getLabelCapacity(n)),l=z(a.ticks.stepSize,1),h="week"===s&&o.isoWeekday,c=tv(h)||!0===h,u={},d=n;if(c&&(d=+i.startOf(d,"isoWeek",h)),d=+i.startOf(d,c?"day":s),i.diff(r,n,s)>1e5*l)throw Error(n+" and "+r+" are too far apart with stepSize of "+l+" "+s);let f="data"===a.ticks.source&&this.getDataTimestamps();for(t=d,e=0;t<r;t=+i.add(t,l,s),e++)rz(u,t,f);return(t===r||"ticks"===a.bounds||1===e)&&rz(u,t,f),Object.keys(u).sort(rH).map(t=>+t)}getLabelForValue(t){let e=this._adapter,i=this.options.time;return i.tooltipFormat?e.format(t,i.tooltipFormat):e.format(t,i.displayFormats.datetime)}format(t,e){let i=this.options,n=i.time.displayFormats,r=this._unit,a=e||n[r];return this._adapter.format(t,a)}_tickFormatFunction(t,e,i,n){let r=this.options,a=r.ticks.callback;if(a)return q(a,[t,e,i],this);let o=r.time.displayFormats,s=this._unit,l=this._majorUnit,h=s&&o[s],c=l&&o[l],u=i[e],d=l&&c&&u&&u.major;return this._adapter.format(t,n||(d?c:h))}generateTickLabels(t){let e,i,n;for(e=0,i=t.length;e<i;++e)(n=t[e]).label=this._tickFormatFunction(n.value,e,t)}getDecimalForValue(t){return null===t?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){let e=this._offsets,i=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+i)*e.factor)}getValueForPixel(t){let e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+i*(this.max-this.min)}_getLabelSize(t){let e=this.options.ticks,i=this.ctx.measureText(t).width,n=tx(this.isHorizontal()?e.maxRotation:e.minRotation),r=Math.cos(n),a=Math.sin(n),o=this._resolveTickFontOptions(0).size;return{w:i*r+o*a,h:i*a+o*r}}_getLabelCapacity(t){let e=this.options.time,i=e.displayFormats,n=i[e.unit]||i.millisecond,r=this._tickFormatFunction(t,0,rV(this,[t],this._majorUnit),n),a=this._getLabelSize(r),o=Math.floor(this.isHorizontal()?this.width/a.w:this.height/a.h)-1;return o>0?o:1}getDataTimestamps(){let t,e,i=this._cache.data||[];if(i.length)return i;let n=this.getMatchingVisibleMetas();if(this._normalized&&n.length)return this._cache.data=n[0].controller.getAllParsedValues(this);for(t=0,e=n.length;t<e;++t)i=i.concat(n[t].controller.getAllParsedValues(this));return this._cache.data=this.normalize(i)}getLabelTimestamps(){let t,e;let i=this._cache.labels||[];if(i.length)return i;let n=this.getLabels();for(t=0,e=n.length;t<e;++t)i.push(rW(this,n[t]));return this._cache.labels=this._normalized?i:this.normalize(i)}normalize(t){return tO(t.sort(rH))}}function rq(t,e,i){let n,r,a,o,s=0,l=t.length-1;i?(e>=t[s].pos&&e<=t[l].pos&&({lo:s,hi:l}=tP(t,"pos",e)),{pos:n,time:a}=t[s],{pos:r,time:o}=t[l]):(e>=t[s].time&&e<=t[l].time&&({lo:s,hi:l}=tP(t,"time",e)),{time:n,pos:a}=t[s],{time:r,pos:o}=t[l]);let h=r-n;return h?a+(o-a)*(e-n)/h:a}class rU extends r${static id="timeseries";static defaults=r$.defaults;constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){let t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=rq(e,this.min),this._tableRange=rq(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){let e,i,n;let{min:r,max:a}=this,o=[],s=[];for(e=0,i=t.length;e<i;++e)(n=t[e])>=r&&n<=a&&o.push(n);if(o.length<2)return[{time:r,pos:0},{time:a,pos:1}];for(e=0,i=o.length;e<i;++e)Math.round((o[e+1]+o[e-1])/2)!==(n=o[e])&&s.push({time:n,pos:e/(i-1)});return s}_generate(){let t=this.min,e=this.max,i=super.getDataTimestamps();return i.includes(t)&&i.length||i.splice(0,0,t),i.includes(e)&&1!==i.length||i.push(e),i.sort((t,e)=>t-e)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;let e=this.getDataTimestamps(),i=this.getLabelTimestamps();return t=e.length&&i.length?this.normalize(e.concat(i)):e.length?e:i,t=this._cache.all=t}getDecimalForValue(t){return(rq(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){let e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return rq(this._table,i*this._tableRange+this._minPos,!0)}}var rX=/*#__PURE__*/Object.freeze({__proto__:null,CategoryScale:class extends no{static id="category";static defaults={ticks:{callback:rD}};constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){let e=this._addedLabels;if(e.length){let t=this.getLabels();for(let{index:i,label:n}of e)t[i]===n&&t.splice(i,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(j(t))return null;let i=this.getLabels();return rS(e=isFinite(e)&&i[e]===t?e:function(t,e,i,n){let r=t.indexOf(e);if(-1===r)return rw(t,e,i,n);let a=t.lastIndexOf(e);return r!==a?i:r}(i,t,z(e,t),this._addedLabels),i.length-1)}determineDataLimits(){let{minDefined:t,maxDefined:e}=this.getUserBounds(),{min:i,max:n}=this.getMinMax(!0);"ticks"!==this.options.bounds||(t||(i=0),e||(n=this.getLabels().length-1)),this.min=i,this.max=n}buildTicks(){let t=this.min,e=this.max,i=this.options.offset,n=[],r=this.getLabels();r=0===t&&e===r.length-1?r:r.slice(t,e+1),this._valueRange=Math.max(r.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let i=t;i<=e;i++)n.push({value:i});return n}getLabelForValue(t){return rD.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return"number"!=typeof t&&(t=this.parse(t)),null===t?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){let e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}},LinearScale:rk,LogarithmicScale:rE,RadialLinearScale:rF,TimeScale:r$,TimeSeriesScale:rU});nE.register(...[iT,nG,r_,rX]);/*! DataTables Bootstrap 3 integration
 * ©2011-2015 SpryMedia Ltd - datatables.net/license
 */var rY={};t0="undefined"!=typeof window?window:rY,t1=function(t,e){var i,n=[],r=Object.getPrototypeOf,a=n.slice,o=n.flat?function(t){return n.flat.call(t)}:function(t){return n.concat.apply([],t)},s=n.push,l=n.indexOf,h={},c=h.toString,u=h.hasOwnProperty,d=u.toString,f=d.call(Object),p={},g=function(t){// Support: Chrome <=57, Firefox <=52
// In some browsers, typeof returns "function" for HTML <object> elements
// (i.e., `typeof document.createElement( "object" ) === "function"`).
// We don't want to classify *any* DOM node as a function.
// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
// Plus for old WebKit, typeof returns "function" for HTML collections
// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
return"function"==typeof t&&"number"!=typeof t.nodeType&&"function"!=typeof t.item},m=function(t){return null!=t&&t===t.window},b=t.document,v={type:!0,src:!0,nonce:!0,noModule:!0};function y(t,e,i){var n,r,a=(i=i||b).createElement("script");if(a.text=t,e)for(n in v)// Support: Firefox 64+, Edge 18+
// Some browsers don't support the "nonce" property on scripts.
// On the other hand, just using `getAttribute` is not enough as
// the `nonce` attribute is reset to an empty string whenever it
// becomes browsing-context connected.
// See https://github.com/whatwg/html/issues/2369
// See https://html.spec.whatwg.org/#nonce-attributes
// The `node.getAttribute` check was added for the sake of
// `jQuery.globalEval` so that it can fake a nonce-containing node
// via an object.
(r=e[n]||e.getAttribute&&e.getAttribute(n))&&a.setAttribute(n,r);i.head.appendChild(a).parentNode.removeChild(a)}function x(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?h[c.call(t)]||"object":typeof t}/* global Symbol */// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module
var _="3.7.1",w=/HTML$/i,S=function(t,e){// The jQuery object is actually just the init constructor 'enhanced'
// Need init if jQuery is called (just allow error to be thrown if not included)
return new S.fn.init(t,e)};function D(t){// Support: real iOS 8.2 only (not reproducible in simulator)
// `in` check used to prevent JIT error (gh-2145)
// hasOwn isn't used here due to false negatives
// regarding Nodelist length in IE
var e=!!t&&"length"in t&&t.length,i=x(t);return!(g(t)||m(t))&&("array"===i||0===e||"number"==typeof e&&e>0&&e-1 in t)}function C(t,e){return t.nodeName&&t.nodeName.toLowerCase()===e.toLowerCase()}S.fn=S.prototype={// The current version of jQuery being used
jquery:_,constructor:S,// The default length of a jQuery object is 0
length:0,toArray:function(){return a.call(this)},// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function(t){return(// Return all the elements in a clean array
null==t?a.call(this):t<0?this[t+this.length]:this[t])},// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function(t){// Build a new jQuery matched element set
var e=S.merge(this.constructor(),t);// Return the newly-formed element set
return(// Add the old object onto the stack (as a reference)
e.prevObject=this,e)},// Execute a callback for every element in the matched set.
each:function(t){return S.each(this,t)},map:function(t){return this.pushStack(S.map(this,function(e,i){return t.call(e,i,e)}))},slice:function(){return this.pushStack(a.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(t,e){return(e+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(t,e){return e%2}))},eq:function(t){var e=this.length,i=+t+(t<0?e:0);return this.pushStack(i>=0&&i<e?[this[i]]:[])},end:function(){return this.prevObject||this.constructor()},// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:s,sort:n.sort,splice:n.splice},S.extend=S.fn.extend=function(){var t,e,i,n,r,a,o=arguments[0]||{},s=1,l=arguments.length,h=!1;for("boolean"==typeof o&&(h=o,// Skip the boolean and the target
o=arguments[s]||{},s++),"object"==typeof o||g(o)||(o={}),s===l&&(o=this,s--);s<l;s++)// Only deal with non-null/undefined values
if(null!=(t=arguments[s]))for(e in t)n=t[e],"__proto__"!==e&&o!==n&&(h&&n&&(S.isPlainObject(n)||(r=Array.isArray(n)))?(i=o[e],a=r&&!Array.isArray(i)?[]:r||S.isPlainObject(i)?i:{},r=!1,// Never move original objects, clone them
o[e]=S.extend(h,a,n)):void 0!==n&&(o[e]=n));// Return the modified object
return o},S.extend({// Unique for each copy of jQuery on the page
expando:"jQuery"+(_+Math.random()).replace(/\D/g,""),// Assume jQuery is ready without the ready module
isReady:!0,error:function(t){throw Error(t)},noop:function(){},isPlainObject:function(t){var e,i;return(// Detect obvious negatives
// Use toString instead of jQuery.type to catch host objects
!!t&&"[object Object]"===c.call(t)&&(!(e=r(t))||"function"==typeof// Objects with prototype are plain iff they were constructed by a global Object function
(i=u.call(e,"constructor")&&e.constructor)&&d.call(i)===f))},isEmptyObject:function(t){var e;for(e in t)return!1;return!0},// Evaluates a script in a provided context; falls back to the global one
// if not specified.
globalEval:function(t,e,i){y(t,{nonce:e&&e.nonce},i)},each:function(t,e){var i,n=0;if(D(t))for(i=t.length;n<i&&!1!==e.call(t[n],n,t[n]);n++);else for(n in t)if(!1===e.call(t[n],n,t[n]))break;return t},// Retrieve the text value of an array of DOM nodes
text:function(t){var e,i="",n=0,r=t.nodeType;if(!r)for(;e=t[n++];)i+=S.text(e);return 1===r||11===r?t.textContent:9===r?t.documentElement.textContent:3===r||4===r?t.nodeValue:i},// results is for internal usage only
makeArray:function(t,e){var i=e||[];return null!=t&&(D(Object(t))?S.merge(i,"string"==typeof t?[t]:t):s.call(i,t)),i},inArray:function(t,e,i){return null==e?-1:l.call(e,t,i)},isXMLDoc:function(t){var e=t&&t.namespaceURI,i=t&&(t.ownerDocument||t).documentElement;// Assume HTML when documentElement doesn't yet exist, such as inside
// document fragments.
return!w.test(e||i&&i.nodeName||"HTML")},// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
merge:function(t,e){for(var i=+e.length,n=0,r=t.length;n<i;n++)t[r++]=e[n];return t.length=r,t},grep:function(t,e,i){// Go through the array, only saving the items
// that pass the validator function
for(var n=[],r=0,a=t.length,o=!i;r<a;r++)!e(t[r],r)!==o&&n.push(t[r]);return n},// arg is for internal usage only
map:function(t,e,i){var n,r,a=0,s=[];// Go through the array, translating each of the items to their new values
if(D(t))for(n=t.length;a<n;a++)null!=(r=e(t[a],a,i))&&s.push(r);else for(a in t)null!=(r=e(t[a],a,i))&&s.push(r);// Flatten any nested arrays
return o(s)},// A global GUID counter for objects
guid:1,// jQuery.support is not used in Core but other projects attach their
// properties to it so it needs to exist.
support:p}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=n[Symbol.iterator]),// Populate the class2type map
S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(t,e){h["[object "+e+"]"]=e.toLowerCase()});var T=n.pop,k=n.sort,M=n.splice,A="[\\x20\\t\\r\\n\\f]",P=RegExp("^"+A+"+|((?:^|[^\\\\])(?:\\\\.)*)"+A+"+$","g");// Note: an element does not contain itself
S.contains=function(t,e){var i=e&&e.parentNode;return t===i||!!(i&&1===i.nodeType&&// Support: IE 9 - 11+
// IE doesn't have `contains` on SVG.
(t.contains?t.contains(i):t.compareDocumentPosition&&16&t.compareDocumentPosition(i)))};// CSS string/identifier serialization
// https://drafts.csswg.org/cssom/#common-serializing-idioms
var L=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function E(t,e){return e?// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
"\x00"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t}S.escapeSelector=function(t){return(t+"").replace(L,E)},function(){var e,i,r,o,h,c,d,f,g,m,v=s,y=S.expando,x=0,_=0,w=tt(),D=tt(),L=tt(),E=tt(),I=function(t,e){return t===e&&(h=!0),0},O="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
R="(?:\\\\[\\da-fA-F]{1,6}"+A+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\x00-\\x7f])+",F="\\["+A+"*("+R+")(?:"+A+// Operator (capture 2)
"*([*^$|!~]?=)"+A+// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+A+"*\\]",j=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+F+")*)|.*)\\)|)",N=RegExp(A+"+","g"),H=RegExp("^"+A+"*,"+A+"*"),W=RegExp("^"+A+"*([>+~]|"+A+")"+A+"*"),B=RegExp(A+"|>"),z=new RegExp(j),V=RegExp("^"+R+"$"),$={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R+"|[*])"),ATTR:RegExp("^"+F),PSEUDO:RegExp("^"+j),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+A+"*(even|odd|(([+-]|)(\\d*)n|)"+A+"*(?:([+-]|)"+A+"*(\\d+)|))"+A+"*\\)|)","i"),bool:RegExp("^(?:"+O+")$","i"),// For use in libraries implementing .is()
// We use this for POS matching in `select`
needsContext:RegExp("^"+A+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+A+"*((?:-\\d)?\\d*)"+A+"*\\)|)(?=[^-]|$)","i")},q=/^(?:input|select|textarea|button)$/i,U=/^h\d$/i,X=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Y=/[+~]/,// https://www.w3.org/TR/CSS21/syndata.html#escaped-characters
J=RegExp("\\\\[\\da-fA-F]{1,6}"+A+"?|\\\\([^\\r\\n\\f])","g"),G=function(t,e){var i="0x"+t.slice(1)-65536;return e||(i<0?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,1023&i|56320))},// Support: IE 9 - 11+, Edge 12 - 18+
// Removing the function wrapper causes a "Permission Denied"
// error in IE/Edge.
K=function(){to()},Z=tc(function(t){return!0===t.disabled&&C(t,"fieldset")},{dir:"parentNode",next:"legend"});// Optimize for push.apply( _, NodeList )
try{v.apply(n=a.call(b.childNodes),b.childNodes),// Support: Android <=4.0
// Detect silently failing push.apply
// eslint-disable-next-line no-unused-expressions
n[b.childNodes.length].nodeType}catch(t){v={apply:function(t,e){s.apply(t,a.call(e))},call:function(t){s.apply(t,a.call(arguments,1))}}}function Q(t,e,i,n){var r,a,o,s,l,h,u,d=e&&e.ownerDocument,m=e?e.nodeType:9;// Return early from calls with invalid selector or context
if(i=i||[],"string"!=typeof t||!t||1!==m&&9!==m&&11!==m)return i;// Try to shortcut find operations (as opposed to filters) in HTML documents
if(!n&&(to(e),e=e||c,f)){// If the selector is sufficiently simple, try using a "get*By*" DOM method
// (excepting DocumentFragment context, where the methods don't exist)
if(11!==m&&(l=X.exec(t))){// ID selector
if(r=l[1]){// Document context
if(9===m){if(!(o=e.getElementById(r)))return i;if(o.id===r)return v.call(i,o),i;// Element context
}else // getElementById can match elements by name instead of ID
if(d&&(o=d.getElementById(r))&&Q.contains(e,o)&&o.id===r)return v.call(i,o),i}else if(l[2])return v.apply(i,e.getElementsByTagName(t)),i;else if((r=l[3])&&e.getElementsByClassName)return v.apply(i,e.getElementsByClassName(r)),i}// Take advantage of querySelectorAll
if(!E[t+" "]&&(!g||!g.test(t))){// qSA considers elements outside a scoping root when evaluating child or
// descendant combinators, which is not what we want.
// In such cases, we work around the behavior by prefixing every selector in the
// list with an ID selector referencing the scope context.
// The technique has to be used as well when a leading combinator is used
// as such selectors are not recognized by querySelectorAll.
// Thanks to Andrew Dupont for this technique.
if(u=t,d=e,1===m&&(B.test(t)||W.test(t))){for(// Expand context for sibling selectors
(d=Y.test(t)&&ta(e.parentNode)||e)==e&&p.scope||((s=e.getAttribute("id"))?s=S.escapeSelector(s):e.setAttribute("id",s=y)),a=// Prefix every selector in the list
(h=tl(t)).length;a--;)h[a]=(s?"#"+s:":scope")+" "+th(h[a]);u=h.join(",")}try{return v.apply(i,d.querySelectorAll(u)),i}catch(e){E(t,!0)}finally{s===y&&e.removeAttribute("id")}}}// All others
return tp(t.replace(P,"$1"),e,i,n)}/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */function tt(){var t=[];return function e(n,r){return t.push(n+" ")>i.cacheLength&&delete e[t.shift()],e[n+" "]=r}}/**
 * Mark a function for special use by jQuery selector module
 * @param {Function} fn The function to mark
 */function te(t){return t[y]=!0,t}/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */function ti(t){var e=c.createElement("fieldset");try{return!!t(e)}catch(t){return!1}finally{e.parentNode&&e.parentNode.removeChild(e),// release memory in IE
e=null}}/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */function tn(t){// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
return function(e){// Only certain elements can match :enabled or :disabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
if("form"in e)return(// Check for inherited disabledness on relevant non-disabled elements:
// * listed form-associated elements in a disabled fieldset
//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
// * option elements in a disabled optgroup
//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
// All such elements have a "form" property.
e.parentNode&&!1===e.disabled?// Option elements defer to a parent optgroup if present
"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||// Where there is no isDisabled, check manually
!t!==e.isDisabled&&Z(e)===t:e.disabled===t);return"label"in e&&e.disabled===t}}/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */function tr(t){return te(function(e){return e=+e,te(function(i,n){// Match elements found at the specified indexes
for(var r,a=t([],i.length,e),o=a.length;o--;)i[r=a[o]]&&(i[r]=!(n[r]=i[r]))})})}/**
 * Checks a node for validity as a jQuery selector context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */function ta(t){return t&&void 0!==t.getElementsByTagName&&t}/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [node] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */function to(t){var e,n=t?t.ownerDocument||t:b;return n!=c&&9===n.nodeType&&n.documentElement&&(d=// Update global variables
(c=n).documentElement,f=!S.isXMLDoc(c),// Support: iOS 7 only, IE 9 - 11+
// Older browsers didn't support unprefixed `matches`.
m=d.matches||d.webkitMatchesSelector||d.msMatchesSelector,d.msMatchesSelector&&// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
b!=c&&(e=c.defaultView)&&e.top!==e&&e.addEventListener("unload",K),// Support: IE <10
// Check if getElementById returns elements by name
// The broken getElementById methods don't pick up programmatically-set names,
// so use a roundabout getElementsByName test
p.getById=ti(function(t){return d.appendChild(t).id=S.expando,!c.getElementsByName||!c.getElementsByName(S.expando).length}),// Support: IE 9 only
// Check to see if it's possible to do matchesSelector
// on a disconnected node.
p.disconnectedMatch=ti(function(t){return m.call(t,"*")}),// Support: IE 9 - 11+, Edge 12 - 18+
// IE/Edge don't support the :scope pseudo-class.
p.scope=ti(function(){return c.querySelectorAll(":scope")}),// Support: Chrome 105 - 111 only, Safari 15.4 - 16.3 only
// Make sure the `:has()` argument is parsed unforgivingly.
// We include `*` in the test to detect buggy implementations that are
// _selectively_ forgiving (specifically when the list includes at least
// one valid selector).
// Note that we treat complete lack of support for `:has()` as if it were
// spec-compliant support, which is fine because use of `:has()` in such
// environments will fail in the qSA path and fall back to jQuery traversal
// anyway.
p.cssHas=ti(function(){try{return c.querySelector(":has(*,:jqfake)"),!1}catch(t){return!0}}),p.getById?(i.filter.ID=function(t){var e=t.replace(J,G);return function(t){return t.getAttribute("id")===e}},i.find.ID=function(t,e){if(void 0!==e.getElementById&&f){var i=e.getElementById(t);return i?[i]:[]}}):(i.filter.ID=function(t){var e=t.replace(J,G);return function(t){var i=void 0!==t.getAttributeNode&&t.getAttributeNode("id");return i&&i.value===e}},// Support: IE 6 - 7 only
// getElementById is not reliable as a find shortcut
i.find.ID=function(t,e){if(void 0!==e.getElementById&&f){var i,n,r,a=e.getElementById(t);if(a){if(// Verify the id attribute
(i=a.getAttributeNode("id"))&&i.value===t)return[a];for(// Fall back on getElementsByName
r=e.getElementsByName(t),n=0;a=r[n++];)if((i=a.getAttributeNode("id"))&&i.value===t)return[a]}return[]}}),// Tag
i.find.TAG=function(t,e){return void 0!==e.getElementsByTagName?e.getElementsByTagName(t):e.querySelectorAll(t)},// Class
i.find.CLASS=function(t,e){if(void 0!==e.getElementsByClassName&&f)return e.getElementsByClassName(t)},/* QSA/matchesSelector
	---------------------------------------------------------------------- */// QSA and matchesSelector support
g=[],// Build QSA regex
// Regex strategy adopted from Diego Perini
ti(function(t){var e;d.appendChild(t).innerHTML="<a id='"+y+"' href='' disabled='disabled'></a><select id='"+y+"-\r\\' disabled='disabled'><option selected=''></option></select>",t.querySelectorAll("[selected]").length||g.push("\\["+A+"*(?:value|"+O+")"),t.querySelectorAll("[id~="+y+"-]").length||g.push("~="),t.querySelectorAll("a#"+y+"+*").length||g.push(".#.+[+~]"),t.querySelectorAll(":checked").length||g.push(":checked"),// Support: Windows 8 Native Apps
// The type and name attributes are restricted during .innerHTML assignment
(e=c.createElement("input")).setAttribute("type","hidden"),t.appendChild(e).setAttribute("name","D"),// Support: IE 9 - 11+
// IE's :disabled selector does not pick up the children of disabled fieldsets
// Support: Chrome <=105+, Firefox <=104+, Safari <=15.4+
// In some of the document kinds, these selectors wouldn't work natively.
// This is probably OK but for backwards compatibility we want to maintain
// handling them through jQuery traversal in jQuery 3.x.
d.appendChild(t).disabled=!0,2!==t.querySelectorAll(":disabled").length&&g.push(":enabled",":disabled"),// Support: IE 11+, Edge 15 - 18+
// IE 11/Edge don't find elements on a `[name='']` query in some cases.
// Adding a temporary attribute to the document before the selection works
// around the issue.
// Interestingly, IE 10 & older don't seem to have the issue.
(e=c.createElement("input")).setAttribute("name",""),t.appendChild(e),t.querySelectorAll("[name='']").length||g.push("\\["+A+"*name"+A+"*="+A+"*(?:''|\"\")")}),p.cssHas||// Our regular `try-catch` mechanism fails to detect natively-unsupported
// pseudo-classes inside `:has()` (such as `:has(:contains("Foo"))`)
// in browsers that parse the `:has()` argument as a forgiving selector list.
// https://drafts.csswg.org/selectors/#relational now requires the argument
// to be parsed unforgivingly, but browsers have not yet fully adjusted.
g.push(":has"),g=g.length&&new RegExp(g.join("|")),/* Sorting
	---------------------------------------------------------------------- */// Document order sorting
I=function(t,e){// Flag for duplicate removal
if(t===e)return h=!0,0;// Sort on method existence if only one input has compareDocumentPosition
var i=!t.compareDocumentPosition-!e.compareDocumentPosition;return i||(1&// Calculate position if both inputs belong to the same document
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
(i=(t.ownerDocument||t)==(e.ownerDocument||e)?t.compareDocumentPosition(e):1)||!p.sortDetached&&e.compareDocumentPosition(t)===i?// Choose the first element that is related to our preferred document
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
t===c||t.ownerDocument==b&&Q.contains(b,t)?-1:e===c||e.ownerDocument==b&&Q.contains(b,e)?1:o?l.call(o,t)-l.call(o,e):0:4&i?-1:1)}),c}// Add button/input type pseudos
for(e in Q.matches=function(t,e){return Q(t,null,null,e)},Q.matchesSelector=function(t,e){if(to(t),f&&!E[e+" "]&&(!g||!g.test(e)))try{var i=m.call(t,e);// IE 9's matchesSelector returns false on disconnected nodes
if(i||p.disconnectedMatch||// As well, disconnected nodes are said to be in a document
// fragment in IE 9
t.document&&11!==t.document.nodeType)return i}catch(t){E(e,!0)}return Q(e,c,null,[t]).length>0},Q.contains=function(t,e){return(t.ownerDocument||t)!=c&&to(t),S.contains(t,e)},Q.attr=function(t,e){// Set document vars if needed
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
(t.ownerDocument||t)!=c&&to(t);var n=i.attrHandle[e.toLowerCase()],r=n&&u.call(i.attrHandle,e.toLowerCase())?n(t,e,!f):void 0;return void 0!==r?r:t.getAttribute(e)},Q.error=function(t){throw Error("Syntax error, unrecognized expression: "+t)},/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */S.uniqueSort=function(t){var e,i=[],n=0,r=0;if(// Unless we *know* we can detect duplicates, assume their presence
//
// Support: Android <=4.0+
// Testing for detecting duplicates is unpredictable so instead assume we can't
// depend on duplicate detection in all browsers without a stable sort.
h=!p.sortStable,o=!p.sortStable&&a.call(t,0),k.call(t,I),h){for(;e=t[r++];)e===t[r]&&(n=i.push(r));for(;n--;)M.call(t,i[n],1)}return(// Clear input after sorting to release objects
// See https://github.com/jquery/sizzle/pull/225
o=null,t)},S.fn.uniqueSort=function(){return this.pushStack(S.uniqueSort(a.apply(this)))},(i=S.expr={// Can be adjusted by the user
cacheLength:50,createPseudo:te,match:$,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(t){return t[1]=t[1].replace(J,G),// Move the given value to match[3] whether quoted or unquoted
t[3]=(t[3]||t[4]||t[5]||"").replace(J,G),"~="===t[2]&&(t[3]=" "+t[3]+" "),t.slice(0,4)},CHILD:function(t){return(/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/t[1]=t[1].toLowerCase(),"nth"===t[1].slice(0,3)?(t[3]||Q.error(t[0]),// numeric x and y parameters for Expr.filter.CHILD
// remember that false/true cast respectively to 0/1
t[4]=+(t[4]?t[5]+(t[6]||1):2*("even"===t[3]||"odd"===t[3])),t[5]=+(t[7]+t[8]||"odd"===t[3])):t[3]&&Q.error(t[0]),t)},PSEUDO:function(t){var e,i=!t[6]&&t[2];return $.CHILD.test(t[0])?null:(t[3]?t[2]=t[4]||t[5]||"":i&&z.test(i)&&// Get excess from tokenize (recursively)
(e=tl(i,!0))&&// advance to the next closing parenthesis
(e=i.indexOf(")",i.length-e)-i.length)&&(// excess is a negative index
t[0]=t[0].slice(0,e),t[2]=i.slice(0,e)),t.slice(0,3))}},filter:{TAG:function(t){var e=t.replace(J,G).toLowerCase();return"*"===t?function(){return!0}:function(t){return C(t,e)}},CLASS:function(t){var e=w[t+" "];return e||(e=RegExp("(^|"+A+")"+t+"("+A+"|$)"),w(t,function(t){return e.test("string"==typeof t.className&&t.className||void 0!==t.getAttribute&&t.getAttribute("class")||"")}))},ATTR:function(t,e,i){return function(n){var r=Q.attr(n,t);return null==r?"!="===e:!e||((r+="","="===e)?r===i:"!="===e?r!==i:"^="===e?i&&0===r.indexOf(i):"*="===e?i&&r.indexOf(i)>-1:"$="===e?i&&r.slice(-i.length)===i:"~="===e?(" "+r.replace(N," ")+" ").indexOf(i)>-1:"|="===e&&(r===i||r.slice(0,i.length+1)===i+"-"))}},CHILD:function(t,e,i,n,r){var a="nth"!==t.slice(0,3),o="last"!==t.slice(-4),s="of-type"===e;return 1===n&&0===r?function(t){return!!t.parentNode}:function(e,i,l){var h,c,u,d,f,p=a!==o?"nextSibling":"previousSibling",g=e.parentNode,m=s&&e.nodeName.toLowerCase(),b=!l&&!s,v=!1;if(g){// :(first|last|only)-(child|of-type)
if(a){for(;p;){for(u=e;u=u[p];)if(s?C(u,m):1===u.nodeType)return!1;// Reverse direction for :only-* (if we haven't yet done so)
f=p="only"===t&&!f&&"nextSibling"}return!0}// non-xml :nth-child(...) stores cache data on `parent`
if(f=[o?g.firstChild:g.lastChild],o&&b){for(v=(d=(h=// Seek `elem` from a previously-cached index
(c=g[y]||(g[y]={}))[t]||[])[0]===x&&h[1])&&h[2],u=d&&g.childNodes[d];u=++d&&u&&u[p]||// Fallback to seeking `elem` from the start
(v=d=0)||f.pop();)if(1===u.nodeType&&++v&&u===e){c[t]=[x,d,v];break}}else // xml :nth-child(...)
// or :nth-last-child(...) or :nth(-last)?-of-type(...)
if(b&&(v=d=(h=(c=e[y]||(e[y]={}))[t]||[])[0]===x&&h[1]),!1===v)// Use the same loop as above to seek `elem` from the start
for(;(u=++d&&u&&u[p]||(v=d=0)||f.pop())&&(!((s?C(u,m):1===u.nodeType)&&++v)||(b&&((c=u[y]||(u[y]={}))[t]=[x,v]),u!==e)););return(// Incorporate the offset, then check against cycle size
(v-=r)===n||v%n==0&&v/n>=0)}}},PSEUDO:function(t,e){// pseudo-class names are case-insensitive
// https://www.w3.org/TR/selectors/#pseudo-classes
// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
// Remember that setFilters inherits from pseudos
var n,r=i.pseudos[t]||i.setFilters[t.toLowerCase()]||Q.error("unsupported pseudo: "+t);return(// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as jQuery does
r[y]?r(e):r.length>1?(n=[t,t,"",e],i.setFilters.hasOwnProperty(t.toLowerCase())?te(function(t,i){for(var n,a=r(t,e),o=a.length;o--;)n=l.call(t,a[o]),t[n]=!(i[n]=a[o])}):function(t){return r(t,0,n)}):r)}},pseudos:{// Potentially complex pseudos
not:te(function(t){// Trim the selector passed to compile
// to avoid treating leading and trailing
// spaces as combinators
var e=[],i=[],n=tf(t.replace(P,"$1"));return n[y]?te(function(t,e,i,r){// Match elements unmatched by `matcher`
for(var a,o=n(t,null,r,[]),s=t.length;s--;)(a=o[s])&&(t[s]=!(e[s]=a))}):function(t,r,a){return e[0]=t,n(e,null,a,i),// Don't keep the element
// (see https://github.com/jquery/sizzle/issues/299)
e[0]=null,!i.pop()}}),has:te(function(t){return function(e){return Q(t,e).length>0}}),contains:te(function(t){return t=t.replace(J,G),function(e){return(e.textContent||S.text(e)).indexOf(t)>-1}}),// "Whether an element is represented by a :lang() selector
// is based solely on the element's language value
// being equal to the identifier C,
// or beginning with the identifier C immediately followed by "-".
// The matching of C against the element's language value is performed case-insensitively.
// The identifier C does not have to be a valid language name."
// https://www.w3.org/TR/selectors/#lang-pseudo
lang:te(function(t){return V.test(t||"")||Q.error("unsupported lang: "+t),t=t.replace(J,G).toLowerCase(),function(e){var i;do if(i=f?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(i=i.toLowerCase())===t||0===i.indexOf(t+"-");while((e=e.parentNode)&&1===e.nodeType)return!1}}),// Miscellaneous
target:function(e){var i=t.location&&t.location.hash;return i&&i.slice(1)===e.id},root:function(t){return t===d},focus:function(t){return t===// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function(){try{return c.activeElement}catch(t){}}()&&c.hasFocus()&&!!(t.type||t.href||~t.tabIndex)},// Boolean properties
enabled:tn(!1),disabled:tn(!0),checked:function(t){// In CSS3, :checked should return both checked and selected elements
// https://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
return C(t,"input")&&!!t.checked||C(t,"option")&&!!t.selected},selected:function(t){return t.parentNode&&t.parentNode.selectedIndex,!0===t.selected},// Contents
empty:function(t){// https://www.w3.org/TR/selectors/#empty-pseudo
// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
//   but not by others (comment: 8; processing instruction: 7; etc.)
// nodeType < 6 works because attributes (2) do not appear as children
for(t=t.firstChild;t;t=t.nextSibling)if(t.nodeType<6)return!1;return!0},parent:function(t){return!i.pseudos.empty(t)},// Element/input types
header:function(t){return U.test(t.nodeName)},input:function(t){return q.test(t.nodeName)},button:function(t){return C(t,"input")&&"button"===t.type||C(t,"button")},text:function(t){var e;return C(t,"input")&&"text"===t.type&&// Support: IE <10 only
// New HTML5 attribute values (e.g., "search") appear
// with elem.type === "text"
(null==(e=t.getAttribute("type"))||"text"===e.toLowerCase())},// Position-in-collection
first:tr(function(){return[0]}),last:tr(function(t,e){return[e-1]}),eq:tr(function(t,e,i){return[i<0?i+e:i]}),even:tr(function(t,e){for(var i=0;i<e;i+=2)t.push(i);return t}),odd:tr(function(t,e){for(var i=1;i<e;i+=2)t.push(i);return t}),lt:tr(function(t,e,i){var n;for(n=i<0?i+e:i>e?e:i;--n>=0;)t.push(n);return t}),gt:tr(function(t,e,i){for(var n=i<0?i+e:i;++n<e;)t.push(n);return t})}}).pseudos.nth=i.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[e]=/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */function(t){return function(e){return C(e,"input")&&e.type===t}}(e);for(e in{submit:!0,reset:!0})i.pseudos[e]=/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */function(t){return function(e){return(C(e,"input")||C(e,"button"))&&e.type===t}}(e);// Easy API for creating new setFilters
function ts(){}function tl(t,e){var n,r,a,o,s,l,h,c=D[t+" "];if(c)return e?0:c.slice(0);for(s=t,l=[],h=i.preFilter;s;){// Filters
for(o in(!n||(r=H.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(a=[])),n=!1,(r=W.exec(s))&&(n=r.shift(),a.push({value:n,// Cast descendant combinators to space
type:r[0].replace(P," ")}),s=s.slice(n.length)),i.filter)(r=$[o].exec(s))&&(!h[o]||(r=h[o](r)))&&(n=r.shift(),a.push({value:n,type:o,matches:r}),s=s.slice(n.length));if(!n)break}return(// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
e?s.length:s?Q.error(t):D(t,l).slice(0))}function th(t){for(var e=0,i=t.length,n="";e<i;e++)n+=t[e].value;return n}function tc(t,e,i){var n=e.dir,r=e.next,a=r||n,o=i&&"parentNode"===a,s=_++;return e.first?function(e,i,r){for(;e=e[n];)if(1===e.nodeType||o)return t(e,i,r);return!1}:function(e,i,l){var h,c,u=[x,s];// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
if(l){for(;e=e[n];)if((1===e.nodeType||o)&&t(e,i,l))return!0}else for(;e=e[n];)if(1===e.nodeType||o){if(c=e[y]||(e[y]={}),r&&C(e,r))e=e[n]||e;else{if((h=c[a])&&h[0]===x&&h[1]===s)return u[2]=h[2];// A match means we're done; a fail means we have to keep checking
if(// Reuse newcache so results back-propagate to previous elements
c[a]=u,u[2]=t(e,i,l))return!0}}return!1}}function tu(t){return t.length>1?function(e,i,n){for(var r=t.length;r--;)if(!t[r](e,i,n))return!1;return!0}:t[0]}function td(t,e,i,n,r){for(var a,o=[],s=0,l=t.length,h=null!=e;s<l;s++)(a=t[s])&&(!i||i(a,n,r))&&(o.push(a),h&&e.push(s));return o}function tf(t,e/* Internal Use Only */){var n,a,o,s,h=[],u=[],d=L[t+" "];if(!d){for(e||(e=tl(t)),s=e.length;s--;)(d=function t(e){for(var n,a,o,s=e.length,h=i.relative[e[0].type],c=h||i.relative[" "],u=h?1:0,d=tc(function(t){return t===n},c,!0),f=tc(function(t){return l.call(n,t)>-1},c,!0),p=[function(t,e,i){// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
var a=!h&&(i||e!=r)||((n=e).nodeType?d(t,e,i):f(t,e,i));return(// Avoid hanging onto element
// (see https://github.com/jquery/sizzle/issues/299)
n=null,a)}];u<s;u++)if(a=i.relative[e[u].type])p=[tc(tu(p),a)];else{// Return special upon seeing a positional matcher
if((a=i.filter[e[u].type].apply(null,e[u].matches))[y]){for(// Find the next relative operator (if any) for proper handling
o=++u;o<s&&!i.relative[e[o].type];o++);return function t(e,i,n,r,a,o){return r&&!r[y]&&(r=t(r)),a&&!a[y]&&(a=t(a,o)),te(function(t,o,s,h){var c,u,d,f,p=[],g=[],m=o.length,b=t||function(t,e,i){for(var n=0,r=e.length;n<r;n++)Q(t,e[n],i);return i}(i||"*",s.nodeType?[s]:s,[]),y=e&&(t||!i)?td(b,p,e,s,h):b;// Apply postFilter
if(n?// Find primary matches
n(y,// If we have a postFinder, or filtered seed, or non-seed postFilter
// or preexisting results,
f=a||(t?e:m||r)?[]:o,s,h):f=y,r)for(c=td(f,g),r(c,[],s,h),// Un-match failing elements by moving them back to matcherIn
u=c.length;u--;)(d=c[u])&&(f[g[u]]=!(y[g[u]]=d));if(t){if(a||e){if(a){for(// Get the final matcherOut by condensing this intermediate into postFinder contexts
c=[],u=f.length;u--;)(d=f[u])&&c.push(y[u]=d);a(null,f=[],c,h)}for(// Move matched elements from seed to results to keep them synchronized
u=f.length;u--;)(d=f[u])&&(c=a?l.call(t,d):p[u])>-1&&(t[c]=!(o[c]=d))}}else f=td(f===o?f.splice(m,f.length):f),a?a(null,o,f,h):v.apply(o,f)})}(u>1&&tu(p),u>1&&th(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(P,"$1"),a,u<o&&t(e.slice(u,o)),o<s&&t(e=e.slice(o)),o<s&&th(e))}p.push(a)}return tu(p)}(e[s]))[y]?h.push(d):u.push(d);// Save selector and tokenization
// Cache the compiled function
(d=L(t,(n=h.length>0,a=u.length>0,o=function(t,e,o,s,l){var d,p,g,m=0,b="0",y=t&&[],_=[],w=r,D=t||a&&i.find.TAG("*",l),C=x+=null==w?1:Math.random()||.1,k=D.length;// Add elements passing elementMatchers directly to results
// Support: iOS <=7 - 9 only
// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching
// elements by id. (see trac-14142)
for(l&&// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
(r=e==c||e||l);b!==k&&null!=(d=D[b]);b++){if(a&&d){for(p=0,e||d.ownerDocument==c||(to(d),o=!f);g=u[p++];)if(g(d,e||c,o)){v.call(s,d);break}l&&(x=C)}// Track unmatched elements for set filters
n&&((d=!g&&d)&&m--,t&&y.push(d))}// Apply set filters to unmatched elements
// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
// no element matchers and no seed.
// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
// case, which will result in a "00" `matchedCount` that differs from `i` but is also
// numerically zero.
if(// `i` is now the count of elements visited above, and adding it to `matchedCount`
// makes the latter nonnegative.
m+=b,n&&b!==m){for(p=0;g=h[p++];)g(y,_,e,o);if(t){// Reintegrate element matches to eliminate the need for sorting
if(m>0)for(;b--;)y[b]||_[b]||(_[b]=T.call(s));// Discard index placeholder values to get only actual matches
_=td(_)}// Add matches to results
v.apply(s,_),l&&!t&&_.length>0&&m+h.length>1&&S.uniqueSort(s)}return l&&(x=C,r=w),y},n?te(o):o))).selector=t}return d}/**
 * A low-level selection function that works with jQuery's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with jQuery selector compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */function tp(t,e,n,r){var a,o,s,l,h,c="function"==typeof t&&t,u=!r&&tl(t=c.selector||t);// Try to minimize operations if there is only one selector in the list and no seed
// (the latter of which guarantees us context)
if(n=n||[],1===u.length){if(// Reduce context if the leading compound selector is an ID
(o=u[0]=u[0].slice(0)).length>2&&"ID"===(s=o[0]).type&&9===e.nodeType&&f&&i.relative[o[1].type]){if(!(e=(i.find.ID(s.matches[0].replace(J,G),e)||[])[0]))return n;c&&(e=e.parentNode),t=t.slice(o.shift().value.length)}for(// Fetch a seed set for right-to-left matching
a=$.needsContext.test(t)?0:o.length;// Abort if we hit a combinator
a--&&(s=o[a],!i.relative[l=s.type]);)if((h=i.find[l])&&(r=h(s.matches[0].replace(J,G),Y.test(o[0].type)&&ta(e.parentNode)||e))){if(// If seed is empty or no tokens remain, we can return early
o.splice(a,1),!(t=r.length&&th(o)))return v.apply(n,r),n;break}}return(// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
(c||tf(t,u))(r,e,!f,n,!e||Y.test(t)&&ta(e.parentNode)||e),n)}ts.prototype=i.filters=i.pseudos,i.setFilters=new ts,// One-time assignments
// Support: Android <=4.0 - 4.1+
// Sort stability
p.sortStable=y.split("").sort(I).join("")===y,// Initialize against the default document
to(),// Support: Android <=4.0 - 4.1+
// Detached nodes confoundingly follow *each other*
p.sortDetached=ti(function(t){// Should return 1, but returns 4 (following)
return 1&t.compareDocumentPosition(c.createElement("fieldset"))}),S.find=Q,// Deprecated
S.expr[":"]=S.expr.pseudos,S.unique=S.uniqueSort,// These have always been private, but they used to be documented as part of
// Sizzle so let's maintain them for now for backwards compatibility purposes.
Q.compile=tf,Q.select=tp,Q.setDocument=to,Q.tokenize=tl,Q.escape=S.escapeSelector,Q.getText=S.text,Q.isXML=S.isXMLDoc,Q.selectors=S.expr,Q.support=S.support,Q.uniqueSort=S.uniqueSort;/* eslint-enable */}();var I=function(t,e,i){for(var n=[],r=void 0!==i;(t=t[e])&&9!==t.nodeType;)if(1===t.nodeType){if(r&&S(t).is(i))break;n.push(t)}return n},O=function(t,e){for(var i=[];t;t=t.nextSibling)1===t.nodeType&&t!==e&&i.push(t);return i},R=S.expr.match.needsContext,F=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;// Implement the identical functionality for filter and not
function j(t,e,i){return g(e)?S.grep(t,function(t,n){return!!e.call(t,n,t)!==i}):e.nodeType?S.grep(t,function(t){return t===e!==i}):"string"!=typeof e?S.grep(t,function(t){return l.call(e,t)>-1!==i}):S.filter(e,t,i)}S.filter=function(t,e,i){var n=e[0];return(i&&(t=":not("+t+")"),1===e.length&&1===n.nodeType)?S.find.matchesSelector(n,t)?[n]:[]:S.find.matches(t,S.grep(e,function(t){return 1===t.nodeType}))},S.fn.extend({find:function(t){var e,i,n=this.length,r=this;if("string"!=typeof t)return this.pushStack(S(t).filter(function(){for(e=0;e<n;e++)if(S.contains(r[e],this))return!0}));for(e=0,i=this.pushStack([]);e<n;e++)S.find(t,r[e],i);return n>1?S.uniqueSort(i):i},filter:function(t){return this.pushStack(j(this,t||[],!1))},not:function(t){return this.pushStack(j(this,t||[],!0))},is:function(t){return!!j(this,// so $("p:first").is("p:last") won't return true for a doc with two "p".
"string"==typeof t&&R.test(t)?S(t):t||[],!1).length}});// Initialize a jQuery object
// A central reference to the root jQuery(document)
var N,// Prioritize #id over <tag> to avoid XSS via location.hash (trac-9521)
// Strict HTML recognition (trac-11290: must start with <)
// Shortcut simple #id case for speed
H=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;// Give the init function the jQuery prototype for later instantiation
(S.fn.init=function(t,e,i){var n,r;// HANDLE: $(""), $(null), $(undefined), $(false)
if(!t)return this;// Handle HTML strings
if(// Method init() accepts an alternate rootjQuery
// so migrate can support jQuery.sub (gh-2101)
i=i||N,"string"==typeof t){// Match html or make sure no context is specified for #id
if((n="<"===t[0]&&">"===t[t.length-1]&&t.length>=3?[null,t,null]:H.exec(t))&&(n[1]||!e)){// HANDLE: $(html) -> $(array)
if(!n[1])return(r=b.getElementById(n[2]))&&(// Inject the element directly into the jQuery object
this[0]=r,this.length=1),this;// HANDLE: $(html, props)
if(e=e instanceof S?e[0]:e,// Option to run scripts is true for back-compat
// Intentionally let the error be thrown if parseHTML is not present
S.merge(this,S.parseHTML(n[1],e&&e.nodeType?e.ownerDocument||e:b,!0)),F.test(n[1])&&S.isPlainObject(e))for(n in e)g(this[n])?this[n](e[n]):this.attr(n,e[n]);return this}return!e||e.jquery?(e||i).find(t):this.constructor(e).find(t);// HANDLE: $(DOMElement)
}return t.nodeType?(this[0]=t,this.length=1,this):g(t)?void 0!==i.ready?i.ready(t):t(S):S.makeArray(t,this)}).prototype=S.fn,// Initialize central reference
N=S(b);var W=/^(?:parents|prev(?:Until|All))/,B={children:!0,contents:!0,next:!0,prev:!0};function z(t,e){for(;(t=t[e])&&1!==t.nodeType;);return t}S.fn.extend({has:function(t){var e=S(t,this),i=e.length;return this.filter(function(){for(var t=0;t<i;t++)if(S.contains(this,e[t]))return!0})},closest:function(t,e){var i,n=0,r=this.length,a=[],o="string"!=typeof t&&S(t);// Positional selectors never match, since there's no _selection_ context
if(!R.test(t)){for(;n<r;n++)for(i=this[n];i&&i!==e;i=i.parentNode)if(i.nodeType<11&&(o?o.index(i)>-1:1===i.nodeType&&S.find.matchesSelector(i,t))){a.push(i);break}}return this.pushStack(a.length>1?S.uniqueSort(a):a)},// Determine the position of an element within the set
index:function(t){return(// No argument, return index in parent
t?"string"==typeof t?l.call(S(t),this[0]):l.call(this,t.jquery?t[0]:t):this[0]&&this[0].parentNode?this.first().prevAll().length:-1)},add:function(t,e){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(t,e))))},addBack:function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}}),S.each({parent:function(t){var e=t.parentNode;return e&&11!==e.nodeType?e:null},parents:function(t){return I(t,"parentNode")},parentsUntil:function(t,e,i){return I(t,"parentNode",i)},next:function(t){return z(t,"nextSibling")},prev:function(t){return z(t,"previousSibling")},nextAll:function(t){return I(t,"nextSibling")},prevAll:function(t){return I(t,"previousSibling")},nextUntil:function(t,e,i){return I(t,"nextSibling",i)},prevUntil:function(t,e,i){return I(t,"previousSibling",i)},siblings:function(t){return O((t.parentNode||{}).firstChild,t)},children:function(t){return O(t.firstChild)},contents:function(t){return null!=t.contentDocument&&// Support: IE 11+
// <object> elements with no `data` attribute has an object
// `contentDocument` with a `null` prototype.
r(t.contentDocument)?t.contentDocument:(C(t,"template")&&(t=t.content||t),S.merge([],t.childNodes))}},function(t,e){S.fn[t]=function(i,n){var r=S.map(this,e,i);return"Until"!==t.slice(-5)&&(n=i),n&&"string"==typeof n&&(r=S.filter(n,r)),this.length>1&&(B[t]||S.uniqueSort(r),W.test(t)&&r.reverse()),this.pushStack(r)}});var V=/[^\x20\t\r\n\f]+/g;function $(t){return t}function q(t){throw t}function U(t,e,i,n){var r;try{// Check for promise aspect first to privilege synchronous behavior
t&&g(r=t.promise)?r.call(t).done(e).fail(i):t&&g(r=t.then)?r.call(t,e,i):// * false: [ value ].slice( 0 ) => resolve( value )
// * true: [ value ].slice( 1 ) => resolve()
e.apply(void 0,[t].slice(n));// For Promises/A+, convert exceptions into rejections
// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
// Deferred#then to conditionally suppress rejection.
}catch(t){// Support: Android 4.0 only
// Strict mode functions invoked without .call/.apply get global-object context
i.apply(void 0,[t])}}/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */S.Callbacks=function(t){// Convert options from String-formatted to Object-formatted if needed
// (we check in cache first)
t="string"==typeof t?(e=t,i={},S.each(e.match(V)||[],function(t,e){i[e]=!0}),i):S.extend({},t);var e,i,n,r,a,o,s=[],l=[],h=-1,c=function(){for(// Enforce single-firing
o=o||t.once,// Execute callbacks for all pending executions,
// respecting firingIndex overrides and runtime changes
a=n=!0;l.length;h=-1)for(r=l.shift();++h<s.length;)!1===s[h].apply(r[0],r[1])&&t.stopOnFalse&&(// Jump to end and forget the data so .add doesn't re-fire
h=s.length,r=!1);t.memory||(r=!1),n=!1,o&&(s=r?[]:"")},u={// Add a callback or a collection of callbacks to the list
add:function(){return s&&(r&&!n&&(h=s.length-1,l.push(r)),function e(i){S.each(i,function(i,n){g(n)?t.unique&&u.has(n)||s.push(n):n&&n.length&&"string"!==x(n)&&e(n)})}(arguments),r&&!n&&c()),this},// Remove a callback from the list
remove:function(){return S.each(arguments,function(t,e){for(var i;(i=S.inArray(e,s,i))>-1;)s.splice(i,1),i<=h&&h--}),this},// Check if a given callback is in the list.
// If no argument is given, return whether or not list has callbacks attached.
has:function(t){return t?S.inArray(t,s)>-1:s.length>0},// Remove all callbacks from the list
empty:function(){return s&&(s=[]),this},// Disable .fire and .add
// Abort any current/pending executions
// Clear all callbacks and values
disable:function(){return o=l=[],s=r="",this},disabled:function(){return!s},// Disable .fire
// Also disable .add unless we have memory (since it would have no effect)
// Abort any pending executions
lock:function(){return o=l=[],r||n||(s=r=""),this},locked:function(){return!!o},// Call all callbacks with the given context and arguments
fireWith:function(t,e){return o||(e=[t,(e=e||[]).slice?e.slice():e],l.push(e),n||c()),this},// Call all the callbacks with the given arguments
fire:function(){return u.fireWith(this,arguments),this},// To know if the callbacks have already been called at least once
fired:function(){return!!a}};return u},S.extend({Deferred:function(e){var i=[// action, add listener, callbacks,
// ... .then handlers, argument index, [final state]
["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],n="pending",r={state:function(){return n},always:function(){return a.done(arguments).fail(arguments),this},catch:function(t){return r.then(null,t)},// Keep pipe for back-compat
pipe:function(){var t=arguments;return S.Deferred(function(e){S.each(i,function(i,n){// Map tuples (progress, done, fail) to arguments (done, fail, progress)
var r=g(t[n[4]])&&t[n[4]];// deferred.progress(function() { bind to newDefer or newDefer.notify })
// deferred.done(function() { bind to newDefer or newDefer.resolve })
// deferred.fail(function() { bind to newDefer or newDefer.reject })
a[n[1]](function(){var t=r&&r.apply(this,arguments);t&&g(t.promise)?t.promise().progress(e.notify).done(e.resolve).fail(e.reject):e[n[0]+"With"](this,r?[t]:arguments)})}),t=null}).promise()},then:function(e,n,r){var a=0;function o(e,i,n,r){return function(){var s=this,l=arguments,h=function(){var t,h;// Support: Promises/A+ section 2.3.3.3.3
// https://promisesaplus.com/#point-59
// Ignore double-resolution attempts
if(!(e<a)){// Support: Promises/A+ section 2.3.1
// https://promisesaplus.com/#point-48
if((t=n.apply(s,l))===i.promise())throw TypeError("Thenable self-resolution");// Handle a returned thenable
g(// Support: Promises/A+ sections 2.3.3.1, 3.5
// https://promisesaplus.com/#point-54
// https://promisesaplus.com/#point-75
// Retrieve `then` only once
h=t&&// Support: Promises/A+ section 2.3.4
// https://promisesaplus.com/#point-64
// Only check objects and functions for thenability
("object"==typeof t||"function"==typeof t)&&t.then)?r?h.call(t,o(a,i,$,r),o(a,i,q,r)):(// ...and disregard older resolution values
a++,h.call(t,o(a,i,$,r),o(a,i,q,r),o(a,i,$,i.notifyWith))):(n!==$&&(s=void 0,l=[t]),// Process the value(s)
// Default process is resolve
(r||i.resolveWith)(s,l))}},c=r?h:function(){try{h()}catch(t){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(t,c.error),e+1>=a&&(n!==q&&(s=void 0,l=[t]),i.rejectWith(s,l))}};// Support: Promises/A+ section 2.3.3.3.1
// https://promisesaplus.com/#point-57
// Re-resolve promises immediately to dodge false rejection from
// subsequent errors
e?c():(S.Deferred.getErrorHook?c.error=S.Deferred.getErrorHook():S.Deferred.getStackHook&&(c.error=S.Deferred.getStackHook()),t.setTimeout(c))}}return S.Deferred(function(t){// progress_handlers.add( ... )
i[0][3].add(o(0,t,g(r)?r:$,t.notifyWith)),// fulfilled_handlers.add( ... )
i[1][3].add(o(0,t,g(e)?e:$)),// rejected_handlers.add( ... )
i[2][3].add(o(0,t,g(n)?n:q))}).promise()},// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function(t){return null!=t?S.extend(t,r):r}},a={};// All done!
return(// Add list-specific methods
S.each(i,function(t,e){var o=e[2],s=e[5];// promise.progress = list.add
// promise.done = list.add
// promise.fail = list.add
r[e[1]]=o.add,s&&o.add(function(){// state = "resolved" (i.e., fulfilled)
// state = "rejected"
n=s},// fulfilled_callbacks.disable
i[3-t][2].disable,// fulfilled_handlers.disable
i[3-t][3].disable,i[0][2].lock,i[0][3].lock),// progress_handlers.fire
// fulfilled_handlers.fire
// rejected_handlers.fire
o.add(e[3].fire),// deferred.notify = function() { deferred.notifyWith(...) }
// deferred.resolve = function() { deferred.resolveWith(...) }
// deferred.reject = function() { deferred.rejectWith(...) }
a[e[0]]=function(){return a[e[0]+"With"](this===a?void 0:this,arguments),this},// deferred.notifyWith = list.fireWith
// deferred.resolveWith = list.fireWith
// deferred.rejectWith = list.fireWith
a[e[0]+"With"]=o.fireWith}),// Make the deferred a promise
r.promise(a),e&&e.call(a,a),a)},// Deferred helper
when:function(t){var e=arguments.length,i=e,n=Array(i),r=a.call(arguments),o=S.Deferred(),s=function(t){return function(i){n[t]=this,r[t]=arguments.length>1?a.call(arguments):i,--e||o.resolveWith(n,r)}};// Single- and empty arguments are adopted like Promise.resolve
if(e<=1&&(U(t,o.done(s(i)).resolve,o.reject,!e),"pending"===o.state()||g(r[i]&&r[i].then)))return o.then();// Multiple arguments are aggregated like Promise.all array elements
for(;i--;)U(r[i],s(i),o.reject);return o.promise()}});// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var X=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;// If `jQuery.Deferred.getErrorHook` is defined, `asyncError` is an error
// captured before the async barrier to get the original error cause
// which may otherwise be hidden.
S.Deferred.exceptionHook=function(e,i){// Support: IE 8 - 9 only
// Console exists when dev tools are open, which can happen at any time
t.console&&t.console.warn&&e&&X.test(e.name)&&t.console.warn("jQuery.Deferred exception: "+e.message,e.stack,i)},S.readyException=function(e){t.setTimeout(function(){throw e})};// The deferred used on DOM ready
var Y=S.Deferred();// The ready event handler and self cleanup method
function J(){b.removeEventListener("DOMContentLoaded",J),t.removeEventListener("load",J),S.ready()}S.fn.ready=function(t){return Y.then(t)// Wrap jQuery.readyException in a function so that the lookup
// happens at the time of error handling instead of callback
// registration.
.catch(function(t){S.readyException(t)}),this},S.extend({// Is the DOM ready to be used? Set to true once it occurs.
isReady:!1,// A counter to track how many items to wait for before
// the ready event fires. See trac-6781
readyWait:1,// Handle when the DOM is ready
ready:function(t){// Abort if there are pending holds or we're already ready
!(!0===t?--S.readyWait:S.isReady)&&(// Remember that the DOM is ready
S.isReady=!0,!0!==t&&--S.readyWait>0||// If there are functions bound, to execute
Y.resolveWith(b,[S]))}}),S.ready.then=Y.then,"complete"!==b.readyState&&("loading"===b.readyState||b.documentElement.doScroll)?(// Use the handy event callback
b.addEventListener("DOMContentLoaded",J),// A fallback to window.onload, that will always work
t.addEventListener("load",J)):t.setTimeout(S.ready);// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var G=function(t,e,i,n,r,a,o){var s=0,l=t.length,h=null==i;// Sets many values
if("object"===x(i))for(s in r=!0,i)G(t,e,s,i[s],!0,a,o);else if(void 0!==n&&(r=!0,g(n)||(o=!0),h&&(o?(e.call(t,n),e=null):(h=e,e=function(t,e,i){return h.call(S(t),i)})),e))for(;s<l;s++)e(t[s],i,o?n:n.call(t[s],s,e(t[s],i)));return r?t:h?e.call(t):l?e(t[0],i):a},K=/^-ms-/,Z=/-([a-z])/g;// Used by camelCase as callback to replace()
function Q(t,e){return e.toUpperCase()}// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (trac-9572)
function tt(t){return t.replace(K,"ms-").replace(Z,Q)}var te=function(t){// Accepts only:
//  - Node
//    - Node.ELEMENT_NODE
//    - Node.DOCUMENT_NODE
//  - Object
//    - Any
return 1===t.nodeType||9===t.nodeType||!+t.nodeType};function ti(){this.expando=S.expando+ti.uid++}ti.uid=1,ti.prototype={cache:function(t){// Check if the owner object already has a cache
var e=t[this.expando];return!e&&(e={},te(t)&&(t.nodeType?t[this.expando]=e:Object.defineProperty(t,this.expando,{value:e,configurable:!0}))),e},set:function(t,e,i){var n,r=this.cache(t);// Handle: [ owner, key, value ] args
// Always use camelCase key (gh-2257)
if("string"==typeof e)r[tt(e)]=i;else for(n in e)r[tt(n)]=e[n];return r},get:function(t,e){return void 0===e?this.cache(t):t[this.expando]&&t[this.expando][tt(e)]},access:function(t,e,i){return(// In cases where either:
//
//   1. No key was specified
//   2. A string key was specified, but no value provided
//
// Take the "read" path and allow the get method to determine
// which value to return, respectively either:
//
//   1. The entire cache object
//   2. The data stored at the key
//
void 0===e||e&&"string"==typeof e&&void 0===i?this.get(t,e):(// When the key is not a string, or both a key and value
// are specified, set or extend (existing objects) with either:
//
//   1. An object of properties
//   2. A key and value
//
this.set(t,e,i),void 0!==i?i:e))},remove:function(t,e){var i,n=t[this.expando];if(void 0!==n){if(void 0!==e)for(i=(// We always set camelCase keys, so remove that.
e=Array.isArray(e)?e.map(tt):((e=tt(e))in n)?[e]:e.match(V)||[]).length;i--;)delete n[e[i]];// Remove the expando if there's no more data
(void 0===e||S.isEmptyObject(n))&&(t.nodeType?t[this.expando]=void 0:delete t[this.expando])}},hasData:function(t){var e=t[this.expando];return void 0!==e&&!S.isEmptyObject(e)}};var tn=new ti,tr=new ti,ta=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,to=/[A-Z]/g;function ts(t,e,i){var n,r;// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(void 0===i&&1===t.nodeType){if(n="data-"+e.replace(to,"-$&").toLowerCase(),"string"==typeof(i=t.getAttribute(n))){try{r=i,i="true"===r||"false"!==r&&("null"===r?null:r===+r+""?+r:ta.test(r)?JSON.parse(r):r)}catch(t){}// Make sure we set the data so it isn't changed later
tr.set(t,e,i)}else i=void 0}return i}S.extend({hasData:function(t){return tr.hasData(t)||tn.hasData(t)},data:function(t,e,i){return tr.access(t,e,i)},removeData:function(t,e){tr.remove(t,e)},// TODO: Now that all calls to _data and _removeData have been replaced
// with direct calls to dataPriv methods, these can be deprecated.
_data:function(t,e,i){return tn.access(t,e,i)},_removeData:function(t,e){tn.remove(t,e)}}),S.fn.extend({data:function(t,e){var i,n,r,a=this[0],o=a&&a.attributes;// Gets all values
if(void 0===t){if(this.length&&(r=tr.get(a),1===a.nodeType&&!tn.get(a,"hasDataAttrs"))){for(i=o.length;i--;)// The attrs elements can be null (trac-14894)
o[i]&&0===(n=o[i].name).indexOf("data-")&&ts(a,n=tt(n.slice(5)),r[n]);tn.set(a,"hasDataAttrs",!0)}return r}return(// Sets multiple values
"object"==typeof t?this.each(function(){tr.set(this,t)}):G(this,function(e){var i;// The calling jQuery object (element matches) is not empty
// (and therefore has an element appears at this[ 0 ]) and the
// `value` parameter was not undefined. An empty jQuery object
// will result in `undefined` for elem = this[ 0 ] which will
// throw an exception if an attempt to read a data cache is made.
if(a&&void 0===e)return void 0!==// Attempt to get data from the cache
// The key will always be camelCased in Data
(i=tr.get(a,t))||void 0!==// Attempt to "discover" the data in
// HTML5 custom data-* attrs
(i=ts(a,t))?i:// We tried really hard, but the data doesn't exist.
void 0;// Set the data...
this.each(function(){// We always store the camelCased key
tr.set(this,t,e)})},null,e,arguments.length>1,null,!0))},removeData:function(t){return this.each(function(){tr.remove(this,t)})}}),S.extend({queue:function(t,e,i){var n;if(t)return e=(e||"fx")+"queue",n=tn.get(t,e),i&&(!n||Array.isArray(i)?n=tn.access(t,e,S.makeArray(i)):n.push(i)),n||[]},dequeue:function(t,e){e=e||"fx";var i=S.queue(t,e),n=i.length,r=i.shift(),a=S._queueHooks(t,e);"inprogress"===r&&(r=i.shift(),n--),r&&("fx"===e&&i.unshift("inprogress"),// Clear up the last queue stop function
delete a.stop,r.call(t,function(){S.dequeue(t,e)},a)),!n&&a&&a.empty.fire()},// Not public - generate a queueHooks object, or return the current one
_queueHooks:function(t,e){var i=e+"queueHooks";return tn.get(t,i)||tn.access(t,i,{empty:S.Callbacks("once memory").add(function(){tn.remove(t,[e+"queue",i])})})}}),S.fn.extend({queue:function(t,e){var i=2;return("string"!=typeof t&&(e=t,t="fx",i--),arguments.length<i)?S.queue(this[0],t):void 0===e?this:this.each(function(){var i=S.queue(this,t,e);// Ensure a hooks for this queue
S._queueHooks(this,t),"fx"===t&&"inprogress"!==i[0]&&S.dequeue(this,t)})},dequeue:function(t){return this.each(function(){S.dequeue(this,t)})},clearQueue:function(t){return this.queue(t||"fx",[])},// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function(t,e){var i,n=1,r=S.Deferred(),a=this,o=this.length,s=function(){--n||r.resolveWith(a,[a])};for("string"!=typeof t&&(e=t,t=void 0),t=t||"fx";o--;)(i=tn.get(a[o],t+"queueHooks"))&&i.empty&&(n++,i.empty.add(s));return s(),r.promise(e)}});var tl=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,th=RegExp("^(?:([+-])=|)("+tl+")([a-z%]*)$","i"),tc=["Top","Right","Bottom","Left"],tu=b.documentElement,td=function(t){return S.contains(t.ownerDocument,t)},tf={composed:!0};tu.getRootNode&&(td=function(t){return S.contains(t.ownerDocument,t)||t.getRootNode(tf)===t.ownerDocument});var tp=function(t,e){// Inline style trumps all
return"none"===// isHiddenWithinTree might be called from jQuery#filter function;
// in that case, element will be second argument
(t=e||t).style.display||""===t.style.display&&// Otherwise, check computed style
// Support: Firefox <=43 - 45
// Disconnected elements can have computed display: none, so first confirm that elem is
// in the document.
td(t)&&"none"===S.css(t,"display")};function tg(t,e,i,n){var r,a,o=20,s=n?function(){return n.cur()}:function(){return S.css(t,e,"")},l=s(),h=i&&i[3]||(S.cssNumber[e]?"":"px"),c=t.nodeType&&(S.cssNumber[e]||"px"!==h&&+l)&&th.exec(S.css(t,e));if(c&&c[3]!==h){for(// Support: Firefox <=54
// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
l/=2,// Trust units reported by jQuery.css
h=h||c[3],// Iteratively approximate from a nonzero starting point
c=+l||1;o--;)// Evaluate and update our best guess (doubling guesses that zero out).
// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
S.style(t,e,c+h),(1-a)*(1-(a=s()/l||.5))<=0&&(o=0),c/=a;c*=2,S.style(t,e,c+h),// Make sure we update the tween properties later on
i=i||[]}return i&&(c=+c||+l||0,// Apply relative offset (+=/-=) if specified
r=i[1]?c+(i[1]+1)*i[2]:+i[2],n&&(n.unit=h,n.start=c,n.end=r)),r}var tm={};function tb(t,e){// Determine new display value for elements that need to change
for(var i,n,r=[],a=0,o=t.length;a<o;a++)(n=t[a]).style&&(i=n.style.display,e?("none"!==i||(r[a]=tn.get(n,"display")||null,r[a]||(n.style.display="")),""===n.style.display&&tp(n)&&(r[a]=function(t){var e,i=t.ownerDocument,n=t.nodeName,r=tm[n];return r||(e=i.body.appendChild(i.createElement(n)),r=S.css(e,"display"),e.parentNode.removeChild(e),"none"===r&&(r="block"),tm[n]=r),r}(n))):"none"!==i&&(r[a]="none",// Remember what we're overwriting
tn.set(n,"display",i)));// Set the display of the elements in a second loop to avoid constant reflow
for(a=0;a<o;a++)null!=r[a]&&(t[a].style.display=r[a]);return t}S.fn.extend({show:function(){return tb(this,!0)},hide:function(){return tb(this)},toggle:function(t){return"boolean"==typeof t?t?this.show():this.hide():this.each(function(){tp(this)?S(this).show():S(this).hide()})}});var tv=/^(?:checkbox|radio)$/i,ty=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,tx=/^$|^module$|\/(?:java|ecma)script/i;t3=b.createDocumentFragment().appendChild(b.createElement("div")),// Support: Android 4.0 - 4.3 only
// Check state lost if the name is set (trac-11217)
// Support: Windows Web Apps (WWA)
// `name` and `type` must use .setAttribute for WWA (trac-14901)
(t4=b.createElement("input")).setAttribute("type","radio"),t4.setAttribute("checked","checked"),t4.setAttribute("name","t"),t3.appendChild(t4),// Support: Android <=4.1 only
// Older WebKit doesn't clone checked state correctly in fragments
p.checkClone=t3.cloneNode(!0).cloneNode(!0).lastChild.checked,// Support: IE <=11 only
// Make sure textarea (and checkbox) defaultValue is properly cloned
t3.innerHTML="<textarea>x</textarea>",p.noCloneChecked=!!t3.cloneNode(!0).lastChild.defaultValue,// Support: IE <=9 only
// IE <=9 replaces <option> tags with their contents when inserted outside of
// the select element.
t3.innerHTML="<option></option>",p.option=!!t3.lastChild;// We have to close these tags to support XHTML (trac-13200)
var t_={// XHTML parsers do not magically insert elements in the
// same way that tag soup parsers do. So we cannot shorten
// this by omitting <tbody> or other required elements.
thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function tw(t,e){// Support: IE <=9 - 11 only
// Use typeof to avoid zero-argument method invocation on host objects (trac-15151)
var i;return(i=void 0!==t.getElementsByTagName?t.getElementsByTagName(e||"*"):void 0!==t.querySelectorAll?t.querySelectorAll(e||"*"):[],void 0===e||e&&C(t,e))?S.merge([t],i):i}// Mark scripts as having already been evaluated
function tS(t,e){for(var i=0,n=t.length;i<n;i++)tn.set(t[i],"globalEval",!e||tn.get(e[i],"globalEval"))}t_.tbody=t_.tfoot=t_.colgroup=t_.caption=t_.thead,t_.th=t_.td,p.option||(t_.optgroup=t_.option=[1,"<select multiple='multiple'>","</select>"]);var tD=/<|&#?\w+;/;function tC(t,e,i,n,r){for(var a,o,s,l,h,c=e.createDocumentFragment(),u=[],d=0,f=t.length;d<f;d++)if((a=t[d])||0===a){// Add nodes directly
if("object"===x(a))// push.apply(_, arraylike) throws on ancient WebKit
S.merge(u,a.nodeType?[a]:a);else if(tD.test(a)){for(o=o||c.appendChild(e.createElement("div")),s=t_[(ty.exec(a)||["",""])[1].toLowerCase()]||t_._default,o.innerHTML=s[1]+S.htmlPrefilter(a)+s[2],// Descend through wrappers to the right content
h=s[0];h--;)o=o.lastChild;// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
S.merge(u,o.childNodes),// Ensure the created nodes are orphaned (trac-12392)
// Remember the top-level container
(o=c.firstChild).textContent=""}else u.push(e.createTextNode(a))}for(// Remove wrapper from fragment
c.textContent="",d=0;a=u[d++];){// Skip elements already in the context collection (trac-4087)
if(n&&S.inArray(a,n)>-1){r&&r.push(a);continue}// Capture executables
if(l=td(a),// Append to fragment
o=tw(c.appendChild(a),"script"),l&&tS(o),i)for(h=0;a=o[h++];)tx.test(a.type||"")&&i.push(a)}return c}var tT=/^([^.]*)(?:\.(.+)|)/;function tk(){return!0}function tM(){return!1}function tA(t,e,i,n,r,a){var o,s;// Types can be a map of types/handlers
if("object"==typeof e){for(s in"string"!=typeof i&&(// ( types-Object, data )
n=n||i,i=void 0),e)tA(t,s,i,n,e[s],a);return t}if(null==n&&null==r?(// ( types, fn )
r=i,n=i=void 0):null==r&&("string"==typeof i?(// ( types, selector, fn )
r=n,n=void 0):(// ( types, data, fn )
r=n,n=i,i=void 0)),!1===r)r=tM;else if(!r)return t;return 1===a&&(o=r,// Use same guid so caller can remove using origFn
(r=function(t){return(// Can use an empty set, since event contains the info
S().off(t),o.apply(this,arguments))}).guid=o.guid||(o.guid=S.guid++)),t.each(function(){S.event.add(this,e,r,n,i)})}// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function tP(t,e,i){// Missing `isSetup` indicates a trigger call, which must force setup through jQuery.event.add
if(!i){void 0===tn.get(t,e)&&S.event.add(t,e,tk);return}// Register the controller as a special universal handler for all event namespaces
tn.set(t,e,!1),S.event.add(t,e,{namespace:!1,handler:function(t){var i,n=tn.get(this,e);if(1&t.isTrigger&&this[e]){// Interrupt processing of the outer synthetic .trigger()ed event
if(n)(S.event.special[e]||{}).delegateType&&t.stopPropagation();else if(// Store arguments for use when handling the inner native event
// There will always be at least one argument (an event object), so this array
// will not be confused with a leftover capture object.
n=a.call(arguments),tn.set(this,e,n),// Trigger the native event and capture its result
this[e](),i=tn.get(this,e),tn.set(this,e,!1),n!==i)return(// Cancel the outer synthetic event
t.stopImmediatePropagation(),t.preventDefault(),i)}else n&&(// ...and capture the result
tn.set(this,e,S.event.trigger(n[0],n.slice(1),this)),// Abort handling of the native event by all jQuery handlers while allowing
// native handlers on the same element to run. On target, this is achieved
// by stopping immediate propagation just on the jQuery event. However,
// the native event is re-wrapped by a jQuery one on each level of the
// propagation so the only way to stop it for jQuery is to stop it for
// everyone via native `stopPropagation()`. This is not a problem for
// focus/blur which don't bubble, but it does also stop click on checkboxes
// and radios. We accept this limitation.
t.stopPropagation(),t.isImmediatePropagationStopped=tk)}})}/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */S.event={global:{},add:function(t,e,i,n,r){var a,o,s,l,h,c,u,d,f,p,g,m=tn.get(t);// Only attach events to objects that accept data
if(te(t))for(i.handler&&(i=(a=i).handler,r=a.selector),r&&S.find.matchesSelector(tu,r),i.guid||(i.guid=S.guid++),(l=m.events)||(l=m.events=Object.create(null)),(o=m.handle)||(o=m.handle=function(e){// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),h=// Handle multiple events separated by a space
(e=(e||"").match(V)||[""]).length;h--;)// There *must* be a type, no attaching namespace-only handlers
f=g=(s=tT.exec(e[h])||[])[1],p=(s[2]||"").split(".").sort(),f&&(// If event changes its type, use the special event handlers for the changed type
u=S.event.special[f]||{},// If selector defined, determine special event api type, otherwise given type
f=(r?u.delegateType:u.bindType)||f,// Update special based on newly reset type
u=S.event.special[f]||{},// handleObj is passed to all event handlers
c=S.extend({type:f,origType:g,data:n,handler:i,guid:i.guid,selector:r,needsContext:r&&S.expr.match.needsContext.test(r),namespace:p.join(".")},a),(d=l[f])||((d=l[f]=[]).delegateCount=0,(!u.setup||!1===u.setup.call(t,n,p,o))&&t.addEventListener&&t.addEventListener(f,o)),u.add&&(u.add.call(t,c),c.handler.guid||(c.handler.guid=i.guid)),r?d.splice(d.delegateCount++,0,c):d.push(c),// Keep track of which events have ever been used, for event optimization
S.event.global[f]=!0)},// Detach an event or set of events from an element
remove:function(t,e,i,n,r){var a,o,s,l,h,c,u,d,f,p,g,m=tn.hasData(t)&&tn.get(t);if(m&&(l=m.events)){for(h=// Once for each type.namespace in types; type may be omitted
(e=(e||"").match(V)||[""]).length;h--;){// Unbind all events (on this namespace, if provided) for the element
if(f=g=(s=tT.exec(e[h])||[])[1],p=(s[2]||"").split(".").sort(),!f){for(f in l)S.event.remove(t,f+e[h],i,n,!0);continue}for(u=S.event.special[f]||{},d=l[f=(n?u.delegateType:u.bindType)||f]||[],s=s[2]&&RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),// Remove matching events
o=a=d.length;a--;)c=d[a],(r||g===c.origType)&&(!i||i.guid===c.guid)&&(!s||s.test(c.namespace))&&(!n||n===c.selector||"**"===n&&c.selector)&&(d.splice(a,1),c.selector&&d.delegateCount--,u.remove&&u.remove.call(t,c));o&&!d.length&&(u.teardown&&!1!==u.teardown.call(t,p,m.handle)||S.removeEvent(t,f,m.handle),delete l[f])}S.isEmptyObject(l)&&tn.remove(t,"handle events")}},dispatch:function(t){var e,i,n,r,a,o,s=Array(arguments.length),l=S.event.fix(t),h=(tn.get(this,"events")||Object.create(null))[l.type]||[],c=S.event.special[l.type]||{};for(e=1,// Use the fix-ed jQuery.Event rather than the (read-only) native event
s[0]=l;e<arguments.length;e++)s[e]=arguments[e];// Call the preDispatch hook for the mapped type, and let it bail if desired
if(l.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,l)){for(// Determine handlers
o=S.event.handlers.call(this,l,h),// Run delegates first; they may want to stop propagation beneath us
e=0;(r=o[e++])&&!l.isPropagationStopped();)for(l.currentTarget=r.elem,i=0;(a=r.handlers[i++])&&!l.isImmediatePropagationStopped();)// specially universal or its namespaces are a superset of the event's.
(!l.rnamespace||!1===a.namespace||l.rnamespace.test(a.namespace))&&(l.handleObj=a,l.data=a.data,void 0!==(n=((S.event.special[a.origType]||{}).handle||a.handler).apply(r.elem,s))&&!1===(l.result=n)&&(l.preventDefault(),l.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,l),l.result}},handlers:function(t,e){var i,n,r,a,o,s=[],l=e.delegateCount,h=t.target;// Find delegate handlers
if(l&&// Support: IE <=9
// Black-hole SVG <use> instance trees (trac-13180)
h.nodeType&&// Support: Firefox <=42
// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
// Support: IE 11 only
// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
!("click"===t.type&&t.button>=1)){for(;h!==this;h=h.parentNode||this)// Don't process clicks on disabled elements (trac-6911, trac-8165, trac-11382, trac-11764)
if(1===h.nodeType&&!("click"===t.type&&!0===h.disabled)){for(i=0,a=[],o={};i<l;i++)void 0===o[// Don't conflict with Object.prototype properties (trac-13203)
r=(n=e[i]).selector+" "]&&(o[r]=n.needsContext?S(r,this).index(h)>-1:S.find(r,this,null,[h]).length),o[r]&&a.push(n);a.length&&s.push({elem:h,handlers:a})}}return(// Add the remaining (directly-bound) handlers
h=this,l<e.length&&s.push({elem:h,handlers:e.slice(l)}),s)},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:g(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(t){return t[S.expando]?t:new S.Event(t)},special:{load:{// Prevent triggered image.load events from bubbling to window.load
noBubble:!0},click:{// Utilize native event to ensure correct state for checkable inputs
setup:function(t){// For mutual compressibility with _default, replace `this` access with a local var.
// `|| data` is dead code meant only to preserve the variable through minification.
var e=this||t;// Return false to allow normal processing in the caller
return tv.test(e.type)&&e.click&&C(e,"input")&&tP(e,"click",!0),!1},trigger:function(t){// For mutual compressibility with _default, replace `this` access with a local var.
// `|| data` is dead code meant only to preserve the variable through minification.
var e=this||t;// Return non-false to allow normal event-path propagation
return tv.test(e.type)&&e.click&&C(e,"input")&&tP(e,"click"),!0},// For cross-browser consistency, suppress native .click() on links
// Also prevent it if we're currently inside a leveraged native-event stack
_default:function(t){var e=t.target;return tv.test(e.type)&&e.click&&C(e,"input")&&tn.get(e,"click")||C(e,"a")}},beforeunload:{postDispatch:function(t){// Support: Firefox 20+
// Firefox doesn't alert if the returnValue field is not set.
void 0!==t.result&&t.originalEvent&&(t.originalEvent.returnValue=t.result)}}}},S.removeEvent=function(t,e,i){// This "if" is needed for plain objects
t.removeEventListener&&t.removeEventListener(e,i)},S.Event=function(t,e){// Allow instantiation without the 'new' keyword
if(!(this instanceof S.Event))return new S.Event(t,e);t&&t.type?(this.originalEvent=t,this.type=t.type,// Events bubbling up the document may have been marked as prevented
// by a handler lower down the tree; reflect the correct value.
this.isDefaultPrevented=t.defaultPrevented||void 0===t.defaultPrevented&&// Support: Android <=2.3 only
!1===t.returnValue?tk:tM,// Create target properties
// Support: Safari <=6 - 7 only
// Target should not be a text node (trac-504, trac-13143)
this.target=t.target&&3===t.target.nodeType?t.target.parentNode:t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget):this.type=t,e&&S.extend(this,e),// Create a timestamp if incoming event doesn't have one
this.timeStamp=t&&t.timeStamp||Date.now(),// Mark it as fixed
this[S.expando]=!0},// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
S.Event.prototype={constructor:S.Event,isDefaultPrevented:tM,isPropagationStopped:tM,isImmediatePropagationStopped:tM,isSimulated:!1,preventDefault:function(){var t=this.originalEvent;this.isDefaultPrevented=tk,t&&!this.isSimulated&&t.preventDefault()},stopPropagation:function(){var t=this.originalEvent;this.isPropagationStopped=tk,t&&!this.isSimulated&&t.stopPropagation()},stopImmediatePropagation:function(){var t=this.originalEvent;this.isImmediatePropagationStopped=tk,t&&!this.isSimulated&&t.stopImmediatePropagation(),this.stopPropagation()}},// Includes all common event props including KeyEvent and MouseEvent specific props
S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(t,e){function i(t){if(b.documentMode){// Support: IE 11+
// Attach a single focusin/focusout handler on the document while someone wants
// focus/blur. This is because the former are synchronous in IE while the latter
// are async. In other browsers, all those handlers are invoked synchronously.
// `handle` from private data would already wrap the event, but we need
// to change the `type` here.
var i=tn.get(this,"handle"),n=S.event.fix(t);n.type="focusin"===t.type?"focus":"blur",n.isSimulated=!0,// First, handle focusin/focusout
i(t),n.target===n.currentTarget&&// `jQuery.event.add`, so event handle will already have been set
// by this point.
i(n)}else // while someone wants focusin/focusout.
S.event.simulate(e,t.target,S.event.fix(t))}S.event.special[t]={// Utilize native event if possible so blur/focus sequence is correct
setup:function(){var n;if(// Claim the first handler
// dataPriv.set( this, "focus", ... )
// dataPriv.set( this, "blur", ... )
tP(this,t,!0),!b.documentMode)return!1;// Support: IE 9 - 11+
// We use the same native handler for focusin & focus (and focusout & blur)
// so we need to coordinate setup & teardown parts between those events.
// Use `delegateType` as the key as `type` is already used by `leverageNative`.
(n=tn.get(this,e))||this.addEventListener(e,i),tn.set(this,e,(n||0)+1)},trigger:function(){// Return non-false to allow normal event-path propagation
return(// Force setup before trigger
tP(this,t),!0)},teardown:function(){var t;if(!b.documentMode)return!1;(t=tn.get(this,e)-1)?tn.set(this,e,t):(this.removeEventListener(e,i),tn.remove(this,e))},// Suppress native focus or blur if we're currently inside
// a leveraged native-event stack
_default:function(e){return tn.get(e.target,t)},delegateType:e},// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
//
// Support: IE 9 - 11+
// To preserve relative focusin/focus & focusout/blur event order guaranteed on the 3.x branch,
// attach a single handler for both events in IE.
S.event.special[e]={setup:function(){// Handle: regular nodes (via `this.ownerDocument`), window
// (via `this.document`) & document (via `this`).
var n=this.ownerDocument||this.document||this,r=b.documentMode?this:n,a=tn.get(r,e);a||(b.documentMode?this.addEventListener(e,i):n.addEventListener(t,i,!0)),tn.set(r,e,(a||0)+1)},teardown:function(){var n=this.ownerDocument||this.document||this,r=b.documentMode?this:n,a=tn.get(r,e)-1;a?tn.set(r,e,a):(b.documentMode?this.removeEventListener(e,i):n.removeEventListener(t,i,!0),tn.remove(r,e))}}}),// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(t,e){S.event.special[t]={delegateType:e,bindType:e,handle:function(t){var i,n=t.relatedTarget,r=t.handleObj;return n&&(n===this||S.contains(this,n))||(t.type=r.origType,i=r.handler.apply(this,arguments),t.type=e),i}}}),S.fn.extend({on:function(t,e,i,n){return tA(this,t,e,i,n)},one:function(t,e,i,n){return tA(this,t,e,i,n,1)},off:function(t,e,i){var n,r;if(t&&t.preventDefault&&t.handleObj)return(// ( event )  dispatched jQuery.Event
n=t.handleObj,S(t.delegateTarget).off(n.namespace?n.origType+"."+n.namespace:n.origType,n.selector,n.handler),this);if("object"==typeof t){// ( types-object [, selector] )
for(r in t)this.off(r,e,t[r]);return this}return(!1===e||"function"==typeof e)&&(// ( types [, fn] )
i=e,e=void 0),!1===i&&(i=tM),this.each(function(){S.event.remove(this,t,i,e)})}});var // In IE/Edge using regex groups here causes severe slowdowns.
// See https://connect.microsoft.com/IE/feedback/details/1736512/
tL=/<script|<style|<link/i,tE=/checked\s*(?:[^=]|=\s*.checked.)/i,tI=/^\s*<!\[CDATA\[|\]\]>\s*$/g;// Prefer a tbody over its parent table for containing new rows
function tO(t,e){return C(t,"table")&&C(11!==e.nodeType?e:e.firstChild,"tr")&&S(t).children("tbody")[0]||t}// Replace/restore the type attribute of script elements for safe DOM manipulation
function tR(t){return t.type=(null!==t.getAttribute("type"))+"/"+t.type,t}function tF(t){return"true/"===(t.type||"").slice(0,5)?t.type=t.type.slice(5):t.removeAttribute("type"),t}function tj(t,e){var i,n,r,a,o,s;if(1===e.nodeType){// 1. Copy private data: events, handlers, etc.
if(tn.hasData(t)&&(s=tn.get(t).events))for(r in tn.remove(e,"handle events"),s)for(i=0,n=s[r].length;i<n;i++)S.event.add(e,r,s[r][i]);// 2. Copy user data
tr.hasData(t)&&(a=tr.access(t),o=S.extend({},a),tr.set(e,o))}}function tN(t,e,i,n){// Flatten any nested arrays
e=o(e);var r,a,s,l,h,c,u=0,d=t.length,f=d-1,m=e[0],b=g(m);// We can't cloneNode fragments that contain checked, in WebKit
if(b||d>1&&"string"==typeof m&&!p.checkClone&&tE.test(m))return t.each(function(r){var a=t.eq(r);b&&(e[0]=m.call(this,r,a.html())),tN(a,e,i,n)});if(d&&(a=(r=tC(e,t[0].ownerDocument,!1,t,n)).firstChild,1===r.childNodes.length&&(r=a),a||n)){// Use the original fragment for the last item
// instead of the first because it can end up
// being emptied incorrectly in certain situations (trac-8070).
for(l=(s=S.map(tw(r,"script"),tR)).length;u<d;u++)h=r,u!==f&&(h=S.clone(h,!0,!0),l&&// push.apply(_, arraylike) throws on ancient WebKit
S.merge(s,tw(h,"script"))),i.call(t[u],h,u);if(l)// Evaluate executable scripts on first document insertion
for(c=s[s.length-1].ownerDocument,// Re-enable scripts
S.map(s,tF),u=0;u<l;u++)h=s[u],tx.test(h.type||"")&&!tn.access(h,"globalEval")&&S.contains(c,h)&&(h.src&&"module"!==(h.type||"").toLowerCase()?S._evalUrl&&!h.noModule&&S._evalUrl(h.src,{nonce:h.nonce||h.getAttribute("nonce")},c):// needed as in XML documents they're already not visible when
// inspecting element contents and in HTML documents they have no
// meaning but we're preserving that logic for backwards compatibility.
// This will be removed completely in 4.0. See gh-4904.
y(h.textContent.replace(tI,""),h,c))}return t}function tH(t,e,i){for(var n,r=e?S.filter(e,t):t,a=0;null!=(n=r[a]);a++)i||1!==n.nodeType||S.cleanData(tw(n)),n.parentNode&&(i&&td(n)&&tS(tw(n,"script")),n.parentNode.removeChild(n));return t}S.extend({htmlPrefilter:function(t){return t},clone:function(t,e,i){var n,r,a,o,s=t.cloneNode(!0),l=td(t);// Fix IE cloning issues
if(!p.noCloneChecked&&(1===t.nodeType||11===t.nodeType)&&!S.isXMLDoc(t))for(n=0,// We eschew jQuery#find here for performance reasons:
// https://jsperf.com/getall-vs-sizzle/2
o=tw(s),r=(a=tw(t)).length;n<r;n++)!// Fix IE bugs, see support tests
function(t,e){var i=e.nodeName.toLowerCase();// Fails to persist the checked state of a cloned checkbox or radio button.
"input"===i&&tv.test(t.type)?e.checked=t.checked:("input"===i||"textarea"===i)&&(e.defaultValue=t.defaultValue)}(a[n],o[n]);// Copy the events from the original to the clone
if(e){if(i)for(n=0,a=a||tw(t),o=o||tw(s),r=a.length;n<r;n++)tj(a[n],o[n]);else tj(t,s)}// Return the cloned set
return(// Preserve script evaluation history
(o=tw(s,"script")).length>0&&tS(o,!l&&tw(t,"script")),s)},cleanData:function(t){for(var e,i,n,r=S.event.special,a=0;void 0!==(i=t[a]);a++)if(te(i)){if(e=i[tn.expando]){if(e.events)for(n in e.events)r[n]?S.event.remove(i,n):S.removeEvent(i,n,e.handle);// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
i[tn.expando]=void 0}i[tr.expando]&&// Assign undefined instead of using delete, see Data#remove
(i[tr.expando]=void 0)}}}),S.fn.extend({detach:function(t){return tH(this,t,!0)},remove:function(t){return tH(this,t)},text:function(t){return G(this,function(t){return void 0===t?S.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=t)})},null,t,arguments.length)},append:function(){return tN(this,arguments,function(t){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&tO(this,t).appendChild(t)})},prepend:function(){return tN(this,arguments,function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=tO(this,t);e.insertBefore(t,e.firstChild)}})},before:function(){return tN(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this)})},after:function(){return tN(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this.nextSibling)})},empty:function(){for(var t,e=0;null!=(t=this[e]);e++)1===t.nodeType&&(// Prevent memory leaks
S.cleanData(tw(t,!1)),// Remove any remaining nodes
t.textContent="");return this},clone:function(t,e){return t=null!=t&&t,e=null==e?t:e,this.map(function(){return S.clone(this,t,e)})},html:function(t){return G(this,function(t){var e=this[0]||{},i=0,n=this.length;if(void 0===t&&1===e.nodeType)return e.innerHTML;// See if we can take a shortcut and just use innerHTML
if("string"==typeof t&&!tL.test(t)&&!t_[(ty.exec(t)||["",""])[1].toLowerCase()]){t=S.htmlPrefilter(t);try{for(;i<n;i++)e=this[i]||{},1===e.nodeType&&(S.cleanData(tw(e,!1)),e.innerHTML=t);e=0;// If using innerHTML throws an exception, use the fallback method
}catch(t){}}e&&this.empty().append(t)},null,t,arguments.length)},replaceWith:function(){var t=[];// Make the changes, replacing each non-ignored context element with the new content
return tN(this,arguments,function(e){var i=this.parentNode;0>S.inArray(this,t)&&(S.cleanData(tw(this)),i&&i.replaceChild(e,this));// Force callback invocation
},t)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,e){S.fn[t]=function(t){for(var i,n=[],r=S(t),a=r.length-1,o=0;o<=a;o++)i=o===a?this:this.clone(!0),S(r[o])[e](i),// Support: Android <=4.0 only, PhantomJS 1 only
// .get() because push.apply(_, arraylike) throws on ancient WebKit
s.apply(n,i.get());return this.pushStack(n)}});var tW=RegExp("^("+tl+")(?!px)[a-z%]+$","i"),tB=/^--/,tz=function(e){// Support: IE <=11 only, Firefox <=30 (trac-15098, trac-14150)
// IE throws on elements created in popups
// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
var i=e.ownerDocument.defaultView;return i&&i.opener||(i=t),i.getComputedStyle(e)},tV=function(t,e,i){var n,r,a={};// Remember the old values, and insert the new ones
for(r in e)a[r]=t.style[r],t.style[r]=e[r];// Revert the old values
for(r in n=i.call(t),e)t.style[r]=a[r];return n},t$=RegExp(tc.join("|"),"i");function tq(t,e,i){var n,r,a,o,s=tB.test(e),// Retrieving style before computed somehow
// fixes an issue with getting wrong values
// on detached elements
l=t.style;return(i=i||tz(t))&&(// Support: IE <=9 - 11+
// IE only supports `"float"` in `getPropertyValue`; in computed styles
// it's only available as `"cssFloat"`. We no longer modify properties
// sent to `.css()` apart from camelCasing, so we need to check both.
// Normally, this would create difference in behavior: if
// `getPropertyValue` returns an empty string, the value returned
// by `.css()` would be `undefined`. This is usually the case for
// disconnected elements. However, in IE even disconnected elements
// with no styles return `"none"` for `getPropertyValue( "float" )`
o=i.getPropertyValue(e)||i[e],s&&o&&// Spec requires trimming whitespace for custom properties (gh-4926).
// Firefox only trims leading whitespace. Chrome just collapses
// both leading & trailing whitespace to a single space.
//
// Fall back to `undefined` if empty string returned.
// This collapses a missing definition with property defined
// and set to an empty string but there's no standard API
// allowing us to differentiate them without a performance penalty
// and returning `undefined` aligns with older jQuery.
//
// rtrimCSS treats U+000D CARRIAGE RETURN and U+000C FORM FEED
// as whitespace while CSS does not, but this is not a problem
// because CSS preprocessing replaces them with U+000A LINE FEED
// (which *is* CSS whitespace)
// https://www.w3.org/TR/css-syntax-3/#input-preprocessing
(o=o.replace(P,"$1")||void 0),""!==o||td(t)||(o=S.style(t,e)),!p.pixelBoxStyles()&&tW.test(o)&&t$.test(e)&&(// Remember the original values
n=l.width,r=l.minWidth,a=l.maxWidth,// Put in the new values to get a computed value out
l.minWidth=l.maxWidth=l.width=o,o=i.width,// Revert the changed values
l.width=n,l.minWidth=r,l.maxWidth=a)),void 0!==o?// IE returns zIndex value as an integer.
o+"":o}function tU(t,e){// Define the hook, we'll check on the first run if it's really needed.
return{get:function(){if(t()){// Hook not needed (or it's not possible to use it due
// to missing dependency), remove it.
delete this.get;return}// Hook needed; redefine it so that the support test is not executed again.
return(this.get=e).apply(this,arguments)}}}!function(){// Executing both pixelPosition & boxSizingReliable tests require only one layout
// so they're executed at the same time to save the second computation.
function e(){// This is a singleton, we need to execute it only once
if(c){h.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",tu.appendChild(h).appendChild(c);var e=t.getComputedStyle(c);n="1%"!==e.top,// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
l=12===i(e.marginLeft),// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
// Some styles come back with percentage values, even though they shouldn't
c.style.right="60%",o=36===i(e.right),// Support: IE 9 - 11 only
// Detect misreporting of content dimensions for box-sizing:border-box elements
r=36===i(e.width),// Support: IE 9 only
// Detect overflow:scroll screwiness (gh-3699)
// Support: Chrome <=64
// Don't get tricked when zoom affects offsetWidth (gh-4029)
c.style.position="absolute",a=12===i(c.offsetWidth/3),tu.removeChild(h),// Nullify the div so it wouldn't be stored in the memory and
// it will also be a sign that checks already performed
c=null}}function i(t){return Math.round(parseFloat(t))}var n,r,a,o,s,l,h=b.createElement("div"),c=b.createElement("div");// Finish early in limited (non-browser) environments
c.style&&(// Support: IE <=9 - 11 only
// Style of cloned element affects source element cloned (trac-8908)
c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",p.clearCloneStyle="content-box"===c.style.backgroundClip,S.extend(p,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),l},scrollboxSize:function(){return e(),a},// Support: IE 9 - 11+, Edge 15 - 18+
// IE/Edge misreport `getComputedStyle` of table rows with width/height
// set in CSS while `offset*` properties report correct values.
// Behavior in IE 9 is more subtle than in newer versions & it passes
// some versions of this test; make sure not to make it pass there!
//
// Support: Firefox 70+
// Only Firefox includes border widths
// in computed dimensions. (gh-4529)
reliableTrDimensions:function(){var e,i,n,r;return null==s&&(e=b.createElement("table"),i=b.createElement("tr"),n=b.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",i.style.cssText="box-sizing:content-box;border:1px solid",// Support: Chrome 86+
// Height set through cssText does not get applied.
// Computed height then comes back as 0.
i.style.height="1px",n.style.height="9px",// Support: Android 8 Chrome 86+
// In our bodyBackground.html iframe,
// display for all div elements is set to "inline",
// which causes a problem only in Android 8 Chrome 86.
// Ensuring the div is `display: block`
// gets around this issue.
n.style.display="block",tu.appendChild(e).appendChild(i).appendChild(n),s=parseInt((r=t.getComputedStyle(i)).height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===i.offsetHeight,tu.removeChild(e)),s}}))}();var tX=["Webkit","Moz","ms"],tY=b.createElement("div").style,tJ={};// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function tG(t){return S.cssProps[t]||tJ[t]||(t in tY?t:tJ[t]=// Return a vendor-prefixed property or undefined
function(t){for(// Check for vendor prefixed names
var e=t[0].toUpperCase()+t.slice(1),i=tX.length;i--;)if((t=tX[i]+e)in tY)return t}(t)||t)}var // except "table", "table-cell", or "table-caption"
// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
tK=/^(none|table(?!-c[ea]).+)/,tZ={position:"absolute",visibility:"hidden",display:"block"},tQ={letterSpacing:"0",fontWeight:"400"};function t0(t,e,i){// Any relative (+/-) values have already been
// normalized at this point
var n=th.exec(e);return n?Math.max(0,n[2]-(i||0))+(n[3]||"px"):e}function t1(t,e,i,n,r,a){var o="width"===e?1:0,s=0,l=0,h=0;// Adjustment may not be necessary
if(i===(n?"border":"content"))return 0;for(;o<4;o+=2)"margin"===i&&(h+=S.css(t,i+tc[o],!0,r)),n?("content"===i&&(l-=S.css(t,"padding"+tc[o],!0,r)),"margin"!==i&&(l-=S.css(t,"border"+tc[o]+"Width",!0,r))):(// Add padding
l+=S.css(t,"padding"+tc[o],!0,r),"padding"!==i?l+=S.css(t,"border"+tc[o]+"Width",!0,r):s+=S.css(t,"border"+tc[o]+"Width",!0,r));return!n&&a>=0&&// Assuming integer scroll gutter, subtract the rest and round down
(l+=Math.max(0,Math.ceil(t["offset"+e[0].toUpperCase()+e.slice(1)]-a-l-s-.5))||0),l+h}function t2(t,e,i){// Start with computed style
var n=tz(t),r=(!p.boxSizingReliable()||i)&&"border-box"===S.css(t,"boxSizing",!1,n),a=r,o=tq(t,e,n),s="offset"+e[0].toUpperCase()+e.slice(1);// Support: Firefox <=54
// Return a confounding non-pixel value or feign ignorance, as appropriate.
if(tW.test(o)){if(!i)return o;o="auto"}// Adjust for the element's box model
return(!p.boxSizingReliable()&&r||// Support: IE 10 - 11+, Edge 15 - 18+
// IE/Edge misreport `getComputedStyle` of table rows with width/height
// set in CSS while `offset*` properties report correct values.
// Interestingly, in some cases IE 9 doesn't suffer from this issue.
!p.reliableTrDimensions()&&C(t,"tr")||// Fall back to offsetWidth/offsetHeight when value is "auto"
// This happens for inline elements with no explicit setting (gh-3571)
"auto"===o||// Support: Android <=4.1 - 4.3 only
// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
!parseFloat(o)&&"inline"===S.css(t,"display",!1,n))&&// Make sure the element is visible & connected
t.getClientRects().length&&(r="border-box"===S.css(t,"boxSizing",!1,n),// Where available, offsetWidth/offsetHeight approximate border box dimensions.
// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
// retrieved value as a content box dimension.
(a=s in t)&&(o=t[s])),// Normalize "" and auto
(o=parseFloat(o)||0)+t1(t,e,i||(r?"border":"content"),a,n,o)+"px"}function t5(t,e,i,n,r){return new t5.prototype.init(t,e,i,n,r)}S.extend({// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function(t,e){if(e){// We should always get a number back from opacity
var i=tq(t,"opacity");return""===i?"1":i}}}},// Don't automatically add "px" to these possibly-unitless properties
cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,// SVG-related
fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{},// Get and set the style property on a DOM Node
style:function(t,e,i,n){// Don't set styles on text and comment nodes
if(t&&3!==t.nodeType&&8!==t.nodeType&&t.style){// Make sure that we're working with the right name
var r,a,o,s=tt(e),l=tB.test(e),h=t.style;// Check if we're setting a value
if(l||(e=tG(s)),// Gets hook for the prefixed version, then unprefixed version
o=S.cssHooks[e]||S.cssHooks[s],void 0===i)return(// If a hook was provided get the non-computed value from there
o&&"get"in o&&void 0!==(r=o.get(t,!1,n))?r:h[e]);// Make sure that null and NaN values aren't set (trac-7116)
"string"==(a=typeof i)&&(r=th.exec(i))&&r[1]&&(i=tg(t,e,r),// Fixes bug trac-9237
a="number"),null!=i&&i==i&&("number"!==a||l||(i+=r&&r[3]||(S.cssNumber[s]?"":"px")),p.clearCloneStyle||""!==i||0!==e.indexOf("background")||(h[e]="inherit"),o&&"set"in o&&void 0===(i=o.set(t,i,n))||(l?h.setProperty(e,i):h[e]=i))}},css:function(t,e,i,n){var r,a,o,s=tt(e);return(// Make numeric if forced or a qualifier was provided and val looks numeric
(tB.test(e)||(e=tG(s)),// Try prefixed name followed by the unprefixed name
(o=S.cssHooks[e]||S.cssHooks[s])&&"get"in o&&(r=o.get(t,!0,i)),void 0===r&&(r=tq(t,e,n)),"normal"===r&&e in tQ&&(r=tQ[e]),""===i||i)?(a=parseFloat(r),!0===i||isFinite(a)?a||0:r):r)}}),S.each(["height","width"],function(t,e){S.cssHooks[e]={get:function(t,i,n){if(i)// but it must have a current display style that would benefit
return!tK.test(S.css(t,"display"))||// Support: Safari 8+
// Table columns in Safari have non-zero offsetWidth & zero
// getBoundingClientRect().width unless display is changed.
// Support: IE <=11 only
// Running getBoundingClientRect on a disconnected node
// in IE throws an error.
t.getClientRects().length&&t.getBoundingClientRect().width?t2(t,e,n):tV(t,tZ,function(){return t2(t,e,n)})},set:function(t,i,n){var r,a=tz(t),// to avoid forcing a reflow.
o=!p.scrollboxSize()&&"absolute"===a.position,s=(o||n)&&"border-box"===S.css(t,"boxSizing",!1,a),l=n?t1(t,e,n,s,a):0;return s&&o&&(l-=Math.ceil(t["offset"+e[0].toUpperCase()+e.slice(1)]-parseFloat(a[e])-t1(t,e,"border",!1,a)-.5)),l&&(r=th.exec(i))&&"px"!==(r[3]||"px")&&(t.style[e]=i,i=S.css(t,e)),t0(t,i,l)}}}),S.cssHooks.marginLeft=tU(p.reliableMarginLeft,function(t,e){if(e)return(parseFloat(tq(t,"marginLeft"))||t.getBoundingClientRect().left-tV(t,{marginLeft:0},function(){return t.getBoundingClientRect().left}))+"px"}),// These hooks are used by animate to expand properties
S.each({margin:"",padding:"",border:"Width"},function(t,e){S.cssHooks[t+e]={expand:function(i){for(var n=0,r={},a="string"==typeof i?i.split(" "):[i];n<4;n++)r[t+tc[n]+e]=a[n]||a[n-2]||a[0];return r}},"margin"!==t&&(S.cssHooks[t+e].set=t0)}),S.fn.extend({css:function(t,e){return G(this,function(t,e,i){var n,r,a={},o=0;if(Array.isArray(e)){for(n=tz(t),r=e.length;o<r;o++)a[e[o]]=S.css(t,e[o],!1,n);return a}return void 0!==i?S.style(t,e,i):S.css(t,e)},t,e,arguments.length>1)}}),S.Tween=t5,t5.prototype={constructor:t5,init:function(t,e,i,n,r,a){this.elem=t,this.prop=i,this.easing=r||S.easing._default,this.options=e,this.start=this.now=this.cur(),this.end=n,this.unit=a||(S.cssNumber[i]?"":"px")},cur:function(){var t=t5.propHooks[this.prop];return t&&t.get?t.get(this):t5.propHooks._default.get(this)},run:function(t){var e,i=t5.propHooks[this.prop];return this.options.duration?this.pos=e=S.easing[this.easing](t,this.options.duration*t,0,1,this.options.duration):this.pos=e=t,this.now=(this.end-this.start)*e+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),i&&i.set?i.set(this):t5.propHooks._default.set(this),this}},t5.prototype.init.prototype=t5.prototype,t5.propHooks={_default:{get:function(t){var e;return(// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
1!==t.elem.nodeType||null!=t.elem[t.prop]&&null==t.elem.style[t.prop]?t.elem[t.prop]:// Passing an empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails.
// Simple values such as "10px" are parsed to Float;
// complex values such as "rotate(1rad)" are returned as-is.
(e=S.css(t.elem,t.prop,""))&&"auto"!==e?e:0)},set:function(t){// Use step hook for back compat.
// Use cssHook if its there.
// Use .style if available and use plain properties where available.
S.fx.step[t.prop]?S.fx.step[t.prop](t):1===t.elem.nodeType&&(S.cssHooks[t.prop]||null!=t.elem.style[tG(t.prop)])?S.style(t.elem,t.prop,t.now+t.unit):t.elem[t.prop]=t.now}}},// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
t5.propHooks.scrollTop=t5.propHooks.scrollLeft={set:function(t){t.elem.nodeType&&t.elem.parentNode&&(t.elem[t.prop]=t.now)}},S.easing={linear:function(t){return t},swing:function(t){return .5-Math.cos(t*Math.PI)/2},_default:"swing"},S.fx=t5.prototype.init,// Back compat <1.8 extension point
S.fx.step={};var t3,t4,t8,t6,t9=/^(?:toggle|show|hide)$/,t7=/queueHooks$/;// Animations created synchronously will run synchronously
function et(){return t.setTimeout(function(){t8=void 0}),t8=Date.now()}// Generate parameters to create a standard animation
function ee(t,e){var i,n=0,r={height:t};for(// If we include width, step value is 1 to do all cssExpand values,
// otherwise step value is 2 to skip over Left and Right
e=e?1:0;n<4;n+=2-e)r["margin"+(i=tc[n])]=r["padding"+i]=t;return e&&(r.opacity=r.width=t),r}function ei(t,e,i){for(var n,r=(Animation.tweeners[e]||[]).concat(Animation.tweeners["*"]),a=0,o=r.length;a<o;a++)if(n=r[a].call(i,e,t))return n}function Animation(t,e,i){var n,r,a=0,o=Animation.prefilters.length,s=S.Deferred().always(function(){// Don't match elem in the :animated selector
delete l.elem}),l=function(){if(r)return!1;for(var e=t8||et(),i=Math.max(0,h.startTime+h.duration-e),n=1-(i/h.duration||0),a=0,o=h.tweens.length;a<o;a++)h.tweens[a].run(n);return(// If there's more to do, yield
(s.notifyWith(t,[h,n,i]),n<1&&o)?i:(o||s.notifyWith(t,[h,1,0]),// Resolve the animation and report its conclusion
s.resolveWith(t,[h]),!1))},h=s.promise({elem:t,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},i),originalProperties:e,originalOptions:i,startTime:t8||et(),duration:i.duration,tweens:[],createTween:function(e,i){var n=S.Tween(t,h.opts,e,i,h.opts.specialEasing[e]||h.opts.easing);return h.tweens.push(n),n},stop:function(e){var i=0,// otherwise we skip this part
n=e?h.tweens.length:0;if(r)return this;for(r=!0;i<n;i++)h.tweens[i].run(1);return e?(s.notifyWith(t,[h,1,0]),s.resolveWith(t,[h,e])):s.rejectWith(t,[h,e]),this}}),c=h.props;for(function(t,e){var i,n,r,a,o;// camelCase, specialEasing and expand cssHook pass
for(i in t)if(r=e[n=tt(i)],Array.isArray(a=t[i])&&(r=a[1],a=t[i]=a[0]),i!==n&&(t[n]=a,delete t[i]),(o=S.cssHooks[n])&&("expand"in o))// Not quite $.extend, this won't overwrite existing keys.
// Reusing 'index' because we have the correct "name"
for(i in a=o.expand(a),delete t[n],a)(i in t)||(t[i]=a[i],e[i]=r);else e[n]=r}(c,h.opts.specialEasing);a<o;a++)if(n=Animation.prefilters[a].call(h,t,c,h.opts))return g(n.stop)&&(S._queueHooks(h.elem,h.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ei,h),g(h.opts.start)&&h.opts.start.call(t,h),// Attach callbacks from options
h.progress(h.opts.progress).done(h.opts.done,h.opts.complete).fail(h.opts.fail).always(h.opts.always),S.fx.timer(S.extend(l,{elem:t,anim:h,queue:h.opts.queue})),h}S.Animation=S.extend(Animation,{tweeners:{"*":[function(t,e){var i=this.createTween(t,e);return tg(i.elem,t,th.exec(e),i),i}]},tweener:function(t,e){g(t)?(e=t,t=["*"]):t=t.match(V);for(var i,n=0,r=t.length;n<r;n++)i=t[n],Animation.tweeners[i]=Animation.tweeners[i]||[],Animation.tweeners[i].unshift(e)},prefilters:[function(t,e,i){var n,r,a,o,s,l,h,c,u="width"in e||"height"in e,d=this,f={},p=t.style,g=t.nodeType&&tp(t),m=tn.get(t,"fxshow");// Detect show/hide animations
for(n in i.queue||(null==(o=S._queueHooks(t,"fx")).unqueued&&(o.unqueued=0,s=o.empty.fire,o.empty.fire=function(){o.unqueued||s()}),o.unqueued++,d.always(function(){// Ensure the complete handler is called before this completes
d.always(function(){o.unqueued--,S.queue(t,"fx").length||o.empty.fire()})})),e)if(r=e[n],t9.test(r)){if(delete e[n],a=a||"toggle"===r,r===(g?"hide":"show")){// Pretend to be hidden if this is a "show" and
// there is still data from a stopped show/hide
if("show"!==r||!m||void 0===m[n])continue;g=!0}f[n]=m&&m[n]||S.style(t,n)}if(!(!// Bail out if this is a no-op like .hide().hide()
(l=!S.isEmptyObject(e))&&S.isEmptyObject(f)))for(n in u&&1===t.nodeType&&(// Support: IE <=9 - 11, Edge 12 - 15
// Record all 3 overflow attributes because IE does not infer the shorthand
// from identically-valued overflowX and overflowY and Edge just mirrors
// the overflowX value there.
i.overflow=[p.overflow,p.overflowX,p.overflowY],null==// Identify a display type, preferring old show/hide data over the CSS cascade
(h=m&&m.display)&&(h=tn.get(t,"display")),"none"===(c=S.css(t,"display"))&&(h?c=h:(// Get nonempty value(s) by temporarily forcing visibility
tb([t],!0),h=t.style.display||h,c=S.css(t,"display"),tb([t]))),("inline"===c||"inline-block"===c&&null!=h)&&"none"===S.css(t,"float")&&(l||(d.done(function(){p.display=h}),null!=h||(h="none"===(c=p.display)?"":c)),p.display="inline-block")),i.overflow&&(p.overflow="hidden",d.always(function(){p.overflow=i.overflow[0],p.overflowX=i.overflow[1],p.overflowY=i.overflow[2]})),// Implement show/hide animations
l=!1,f)l||(m?"hidden"in m&&(g=m.hidden):m=tn.access(t,"fxshow",{display:h}),a&&(m.hidden=!g),g&&tb([t],!0),/* eslint-disable no-loop-func */d.done(function(){for(n in g||tb([t]),tn.remove(t,"fxshow"),f)S.style(t,n,f[n])})),// Per-property setup
l=ei(g?m[n]:0,n,d),n in m||(m[n]=l.start,g&&(l.end=l.start,l.start=0))}],prefilter:function(t,e){e?Animation.prefilters.unshift(t):Animation.prefilters.push(t)}}),S.speed=function(t,e,i){var n=t&&"object"==typeof t?S.extend({},t):{complete:i||!i&&e||g(t)&&t,duration:t,easing:i&&e||e&&!g(e)&&e};return S.fx.off?n.duration=0:"number"!=typeof n.duration&&(n.duration in S.fx.speeds?n.duration=S.fx.speeds[n.duration]:n.duration=S.fx.speeds._default),(null==n.queue||!0===n.queue)&&(n.queue="fx"),// Queueing
n.old=n.complete,n.complete=function(){g(n.old)&&n.old.call(this),n.queue&&S.dequeue(this,n.queue)},n},S.fn.extend({fadeTo:function(t,e,i,n){// Show any hidden elements after setting opacity to 0
return this.filter(tp).css("opacity",0).show()// Animate to the value specified
.end().animate({opacity:e},t,i,n)},animate:function(t,e,i,n){var r=S.isEmptyObject(t),a=S.speed(e,i,n),o=function(){// Operate on a copy of prop so per-property easing won't be lost
var e=Animation(this,S.extend({},t),a);// Empty animations, or finishing resolves immediately
(r||tn.get(this,"finish"))&&e.stop(!0)};return o.finish=o,r||!1===a.queue?this.each(o):this.queue(a.queue,o)},stop:function(t,e,i){var n=function(t){var e=t.stop;delete t.stop,e(i)};return"string"!=typeof t&&(i=e,e=t,t=void 0),e&&this.queue(t||"fx",[]),this.each(function(){var e=!0,r=null!=t&&t+"queueHooks",a=S.timers,o=tn.get(this);if(r)o[r]&&o[r].stop&&n(o[r]);else for(r in o)o[r]&&o[r].stop&&t7.test(r)&&n(o[r]);for(r=a.length;r--;)a[r].elem===this&&(null==t||a[r].queue===t)&&(a[r].anim.stop(i),e=!1,a.splice(r,1));// Start the next in the queue if the last step wasn't forced.
// Timers currently will call their complete callbacks, which
// will dequeue but only if they were gotoEnd.
(e||!i)&&S.dequeue(this,t)})},finish:function(t){return!1!==t&&(t=t||"fx"),this.each(function(){var e,i=tn.get(this),n=i[t+"queue"],r=i[t+"queueHooks"],a=S.timers,o=n?n.length:0;// Look for any active animations, and finish them
for(// Enable finishing flag on private data
i.finish=!0,// Empty the queue first
S.queue(this,t,[]),r&&r.stop&&r.stop.call(this,!0),e=a.length;e--;)a[e].elem===this&&a[e].queue===t&&(a[e].anim.stop(!0),a.splice(e,1));// Look for any animations in the old queue and finish them
for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);// Turn off finishing flag
delete i.finish})}}),S.each(["toggle","show","hide"],function(t,e){var i=S.fn[e];S.fn[e]=function(t,n,r){return null==t||"boolean"==typeof t?i.apply(this,arguments):this.animate(ee(e,!0),t,n,r)}}),// Generate shortcuts for custom animations
S.each({slideDown:ee("show"),slideUp:ee("hide"),slideToggle:ee("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(t,e){S.fn[t]=function(t,i,n){return this.animate(e,t,i,n)}}),S.timers=[],S.fx.tick=function(){var t,e=0,i=S.timers;for(t8=Date.now();e<i.length;e++)// Run the timer and safely remove it when done (allowing for external removal)
(t=i[e])()||i[e]!==t||i.splice(e--,1);i.length||S.fx.stop(),t8=void 0},S.fx.timer=function(t){S.timers.push(t),S.fx.start()},S.fx.interval=13,S.fx.start=function(){t6||(t6=!0,function e(){t6&&(!1===b.hidden&&t.requestAnimationFrame?t.requestAnimationFrame(e):t.setTimeout(e,S.fx.interval),S.fx.tick())}())},S.fx.stop=function(){t6=null},S.fx.speeds={slow:600,fast:200,// Default speed
_default:400},// Based off of the plugin by Clint Helfers, with permission.
S.fn.delay=function(e,i){return e=S.fx&&S.fx.speeds[e]||e,i=i||"fx",this.queue(i,function(i,n){var r=t.setTimeout(i,e);n.stop=function(){t.clearTimeout(r)}})},en=b.createElement("input"),er=b.createElement("select").appendChild(b.createElement("option")),en.type="checkbox",// Support: Android <=4.3 only
// Default value for a checkbox should be "on"
p.checkOn=""!==en.value,// Support: IE <=11 only
// Must access selectedIndex to make default options select
p.optSelected=er.selected,// Support: IE <=11 only
// An input loses its value after becoming a radio
(en=b.createElement("input")).value="t",en.type="radio",p.radioValue="t"===en.value;var en,er,ea,eo=S.expr.attrHandle;S.fn.extend({attr:function(t,e){return G(this,S.attr,t,e,arguments.length>1)},removeAttr:function(t){return this.each(function(){S.removeAttr(this,t)})}}),S.extend({attr:function(t,e,i){var n,r,a=t.nodeType;// Don't get/set attributes on text, comment and attribute nodes
if(3!==a&&8!==a&&2!==a){// Fallback to prop when attributes are not supported
if(void 0===t.getAttribute)return S.prop(t,e,i);if(1===a&&S.isXMLDoc(t)||(r=S.attrHooks[e.toLowerCase()]||(S.expr.match.bool.test(e)?ea:void 0)),void 0!==i){if(null===i){S.removeAttr(t,e);return}return r&&"set"in r&&void 0!==(n=r.set(t,i,e))?n:(t.setAttribute(e,i+""),i)}return r&&"get"in r&&null!==(n=r.get(t,e))?n:null==(n=S.find.attr(t,e))?void 0:n}},attrHooks:{type:{set:function(t,e){if(!p.radioValue&&"radio"===e&&C(t,"input")){var i=t.value;return t.setAttribute("type",e),i&&(t.value=i),e}}}},removeAttr:function(t,e){var i,n=0,// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
r=e&&e.match(V);if(r&&1===t.nodeType)for(;i=r[n++];)t.removeAttribute(i)}}),// Hooks for boolean attributes
ea={set:function(t,e,i){return!1===e?S.removeAttr(t,i):t.setAttribute(i,i),i}},S.each(S.expr.match.bool.source.match(/\w+/g),function(t,e){var i=eo[e]||S.find.attr;eo[e]=function(t,e,n){var r,a,o=e.toLowerCase();return n||(// Avoid an infinite loop by temporarily removing this function from the getter
a=eo[o],eo[o]=r,r=null!=i(t,e,n)?o:null,eo[o]=a),r}});var es=/^(?:input|select|textarea|button)$/i,el=/^(?:a|area)$/i;// Strip and collapse whitespace according to HTML spec
// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
function eh(t){return(t.match(V)||[]).join(" ")}function ec(t){return t.getAttribute&&t.getAttribute("class")||""}function eu(t){return Array.isArray(t)?t:"string"==typeof t&&t.match(V)||[]}S.fn.extend({prop:function(t,e){return G(this,S.prop,t,e,arguments.length>1)},removeProp:function(t){return this.each(function(){delete this[S.propFix[t]||t]})}}),S.extend({prop:function(t,e,i){var n,r,a=t.nodeType;// Don't get/set properties on text, comment and attribute nodes
if(3!==a&&8!==a&&2!==a)return(1===a&&S.isXMLDoc(t)||(// Fix name and attach hooks
e=S.propFix[e]||e,r=S.propHooks[e]),void 0!==i)?r&&"set"in r&&void 0!==(n=r.set(t,i,e))?n:t[e]=i:r&&"get"in r&&null!==(n=r.get(t,e))?n:t[e]},propHooks:{tabIndex:{get:function(t){// Support: IE <=9 - 11 only
// elem.tabIndex doesn't always return the
// correct value when it hasn't been explicitly set
// Use proper attribute retrieval (trac-12072)
var e=S.find.attr(t,"tabindex");return e?parseInt(e,10):es.test(t.nodeName)||el.test(t.nodeName)&&t.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),p.optSelected||(S.propHooks.selected={get:function(t){/* eslint no-unused-expressions: "off" */var e=t.parentNode;return e&&e.parentNode&&e.parentNode.selectedIndex,null},set:function(t){/* eslint no-unused-expressions: "off" */var e=t.parentNode;e&&(e.selectedIndex,e.parentNode&&e.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,i,n,r,a,o;return g(t)?this.each(function(e){S(this).addClass(t.call(this,e,ec(this)))}):(e=eu(t)).length?this.each(function(){if(n=ec(this),i=1===this.nodeType&&" "+eh(n)+" "){for(a=0;a<e.length;a++)r=e[a],0>i.indexOf(" "+r+" ")&&(i+=r+" ");n!==// Only assign if different to avoid unneeded rendering.
(o=eh(i))&&this.setAttribute("class",o)}}):this},removeClass:function(t){var e,i,n,r,a,o;return g(t)?this.each(function(e){S(this).removeClass(t.call(this,e,ec(this)))}):arguments.length?(e=eu(t)).length?this.each(function(){if(n=ec(this),// This expression is here for better compressibility (see addClass)
i=1===this.nodeType&&" "+eh(n)+" "){for(a=0;a<e.length;a++)// Remove *all* instances
for(r=e[a];i.indexOf(" "+r+" ")>-1;)i=i.replace(" "+r+" "," ");n!==// Only assign if different to avoid unneeded rendering.
(o=eh(i))&&this.setAttribute("class",o)}}):this:this.attr("class","")},toggleClass:function(t,e){var i,n,r,a,o=typeof t,s="string"===o||Array.isArray(t);return g(t)?this.each(function(i){S(this).toggleClass(t.call(this,i,ec(this),e),e)}):"boolean"==typeof e&&s?e?this.addClass(t):this.removeClass(t):(i=eu(t),this.each(function(){if(s)for(r=0,// Toggle individual class names
a=S(this);r<i.length;r++)n=i[r],a.hasClass(n)?a.removeClass(n):a.addClass(n);else(void 0===t||"boolean"===o)&&((n=ec(this))&&tn.set(this,"__className__",n),this.setAttribute&&this.setAttribute("class",n||!1===t?"":tn.get(this,"__className__")||""))}))},hasClass:function(t){var e,i,n=0;for(e=" "+t+" ";i=this[n++];)if(1===i.nodeType&&(" "+eh(ec(i))+" ").indexOf(e)>-1)return!0;return!1}});var ed=/\r/g;S.fn.extend({val:function(t){var e,i,n,r=this[0];return arguments.length?(n=g(t),this.each(function(i){var r;1!==this.nodeType||(null==(r=n?t.call(this,i,S(this).val()):t)?r="":"number"==typeof r?r+="":Array.isArray(r)&&(r=S.map(r,function(t){return null==t?"":t+""})),(e=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in e&&void 0!==e.set(this,r,"value")||(this.value=r))})):r?(e=S.valHooks[r.type]||S.valHooks[r.nodeName.toLowerCase()])&&"get"in e&&void 0!==(i=e.get(r,"value"))?i:"string"==typeof(i=r.value)?i.replace(ed,""):null==i?"":i:void 0}}),S.extend({valHooks:{option:{get:function(t){var e=S.find.attr(t,"value");return null!=e?e:// option.text throws exceptions (trac-14686, trac-14858)
// Strip and collapse whitespace
// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
eh(S.text(t))}},select:{get:function(t){var e,i,n,r=t.options,a=t.selectedIndex,o="select-one"===t.type,s=o?null:[],l=o?a+1:r.length;// Loop through all the selected options
for(n=a<0?l:o?a:0;n<l;n++)// Support: IE <=9 only
// IE8-9 doesn't update selected after form reset (trac-2551)
if(((i=r[n]).selected||n===a)&&// Don't return options that are disabled or in a disabled optgroup
!i.disabled&&(!i.parentNode.disabled||!C(i.parentNode,"optgroup"))){// We don't need an array for one selects
if(// Get the specific value for the option
e=S(i).val(),o)return e;// Multi-Selects return an array
s.push(e)}return s},set:function(t,e){for(var i,n,r=t.options,a=S.makeArray(e),o=r.length;o--;)/* eslint-disable no-cond-assign */((n=r[o]).selected=S.inArray(S.valHooks.option.get(n),a)>-1)&&(i=!0);return i||(t.selectedIndex=-1),a}}}}),// Radios and checkboxes getter/setter
S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(t,e){if(Array.isArray(e))return t.checked=S.inArray(S(t).val(),e)>-1}},p.checkOn||(S.valHooks[this].get=function(t){return null===t.getAttribute("value")?"on":t.value})});// Return jQuery for attributes-only inclusion
var ef=t.location,ep={guid:Date.now()},eg=/\?/;// Cross-browser xml parsing
S.parseXML=function(e){var i,n;if(!e||"string"!=typeof e)return null;// Support: IE 9 - 11 only
// IE throws on parseFromString with invalid input.
try{i=new t.DOMParser().parseFromString(e,"text/xml")}catch(t){}return n=i&&i.getElementsByTagName("parsererror")[0],(!i||n)&&S.error("Invalid XML: "+(n?S.map(n.childNodes,function(t){return t.textContent}).join("\n"):e)),i};var em=/^(?:focusinfocus|focusoutblur)$/,eb=function(t){t.stopPropagation()};S.extend(S.event,{trigger:function(e,i,n,r){var a,o,s,l,h,c,d,f,p=[n||b],v=u.call(e,"type")?e.type:e,y=u.call(e,"namespace")?e.namespace.split("."):[];// Don't do events on text and comment nodes
if(o=f=s=n=n||b,!(3===n.nodeType||8===n.nodeType||em.test(v+S.event.triggered))&&(v.indexOf(".")>-1&&(v=// Namespaced trigger; create a regexp to match event type in handle()
(y=v.split(".")).shift(),y.sort()),h=0>v.indexOf(":")&&"on"+v,// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
// Caller can pass in a jQuery.Event object, Object, or just an event type string
(e=e[S.expando]?e:new S.Event(v,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=y.join("."),e.rnamespace=e.namespace?RegExp("(^|\\.)"+y.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,// Clean up the event in case it is being reused
e.result=void 0,e.target||(e.target=n),// Clone any incoming data and prepend the event, creating the handler arg list
i=null==i?[e]:S.makeArray(i,[e]),// Allow special events to draw outside the lines
d=S.event.special[v]||{},r||!d.trigger||!1!==d.trigger.apply(n,i))){// Determine event propagation path in advance, per W3C events spec (trac-9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (trac-9724)
if(!r&&!d.noBubble&&!m(n)){for(l=d.delegateType||v,em.test(l+v)||(o=o.parentNode);o;o=o.parentNode)p.push(o),s=o;s===(n.ownerDocument||b)&&p.push(s.defaultView||s.parentWindow||t)}for(// Fire handlers on the event path
a=0;(o=p[a++])&&!e.isPropagationStopped();)f=o,e.type=a>1?l:d.bindType||v,// jQuery handler
(c=(tn.get(o,"events")||Object.create(null))[e.type]&&tn.get(o,"handle"))&&c.apply(o,i),// Native handler
(c=h&&o[h])&&c.apply&&te(o)&&(e.result=c.apply(o,i),!1===e.result&&e.preventDefault());return e.type=v,!r&&!e.isDefaultPrevented()&&(!d._default||!1===d._default.apply(p.pop(),i))&&te(n)&&h&&g(n[v])&&!m(n)&&(// Don't re-trigger an onFOO event when we call its FOO() method
(s=n[h])&&(n[h]=null),// Prevent re-triggering of the same event, since we already bubbled it above
S.event.triggered=v,e.isPropagationStopped()&&f.addEventListener(v,eb),n[v](),e.isPropagationStopped()&&f.removeEventListener(v,eb),S.event.triggered=void 0,s&&(n[h]=s)),e.result}},// Piggyback on a donor event to simulate a different one
// Used only for `focus(in | out)` events
simulate:function(t,e,i){var n=S.extend(new S.Event,i,{type:t,isSimulated:!0});S.event.trigger(n,null,e)}}),S.fn.extend({trigger:function(t,e){return this.each(function(){S.event.trigger(t,e,this)})},triggerHandler:function(t,e){var i=this[0];if(i)return S.event.trigger(t,e,i,!0)}});var ev=/\[\]$/,ey=/\r?\n/g,ex=/^(?:submit|button|image|reset|file)$/i,e_=/^(?:input|select|textarea|keygen)/i;// Serialize an array of form elements or a set of
// key/values into a query string
S.param=function(t,e){var i,n=[],r=function(t,e){// If value is a function, invoke it and use its return value
var i=g(e)?e():e;n[n.length]=encodeURIComponent(t)+"="+encodeURIComponent(null==i?"":i)};if(null==t)return"";// If an array was passed in, assume that it is an array of form elements.
if(Array.isArray(t)||t.jquery&&!S.isPlainObject(t))S.each(t,function(){r(this.name,this.value)});else // did it), otherwise encode params recursively.
for(i in t)!function t(e,i,n,r){var a;if(Array.isArray(i))S.each(i,function(i,a){n||ev.test(e)?r(e,a):t(e+"["+("object"==typeof a&&null!=a?i:"")+"]",a,n,r)});else if(n||"object"!==x(i))r(e,i);else for(a in i)t(e+"["+a+"]",i[a],n,r)}(i,t[i],e,r);// Return the resulting serialization
return n.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){// Can add propHook for "elements" to filter or add form elements
var t=S.prop(this,"elements");return t?S.makeArray(t):this}).filter(function(){var t=this.type;// Use .is( ":disabled" ) so that fieldset[disabled] works
return this.name&&!S(this).is(":disabled")&&e_.test(this.nodeName)&&!ex.test(t)&&(this.checked||!tv.test(t))}).map(function(t,e){var i=S(this).val();return null==i?null:Array.isArray(i)?S.map(i,function(t){return{name:e.name,value:t.replace(ey,"\r\n")}}):{name:e.name,value:i.replace(ey,"\r\n")}}).get()}});var ew=/%20/g,eS=/#.*$/,eD=/([?&])_=[^&]*/,eC=/^(.*?):[ \t]*([^\r\n]*)$/mg,eT=/^(?:GET|HEAD)$/,ek=/^\/\//,/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */eM={},/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */eA={},eP="*/".concat("*"),eL=b.createElement("a");// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function eE(t){// dataTypeExpression is optional and defaults to "*"
return function(e,i){"string"!=typeof e&&(i=e,e="*");var n,r=0,a=e.toLowerCase().match(V)||[];if(g(i))// For each dataType in the dataTypeExpression
for(;n=a[r++];)"+"===n[0]?(t[n=n.slice(1)||"*"]=t[n]||[]).unshift(i):(t[n]=t[n]||[]).push(i)}}// Base inspection function for prefilters and transports
function eI(t,e,i,n){var r={},a=t===eA;function o(s){var l;return r[s]=!0,S.each(t[s]||[],function(t,s){var h=s(e,i,n);return"string"!=typeof h||a||r[h]?a?!(l=h):void 0:(e.dataTypes.unshift(h),o(h),!1)}),l}return o(e.dataTypes[0])||!r["*"]&&o("*")}// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes trac-9887
function eO(t,e){var i,n,r=S.ajaxSettings.flatOptions||{};for(i in e)void 0!==e[i]&&((r[i]?t:n||(n={}))[i]=e[i]);return n&&S.extend(!0,t,n),t}eL.href=ef.href,S.extend({// Counter for holding the number of active queries
active:0,// Last-Modified header cache for next request
lastModified:{},etag:{},ajaxSettings:{url:ef.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ef.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/accepts:{"*":eP,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},// Data converters
// Keys separate source (or catchall "*") and destination types with a single space
converters:{// Convert anything to text
"* text":String,// Text to html (true = no transformation)
"text html":!0,// Evaluate text as a json expression
"text json":JSON.parse,// Parse text as xml
"text xml":S.parseXML},// For options that shouldn't be deep extended:
// you can add your own custom options here if
// and when you create one that shouldn't be
// deep extended (see ajaxExtend)
flatOptions:{url:!0,context:!0}},// Creates a full fledged settings object into target
// with both ajaxSettings and settings fields.
// If target is omitted, writes into ajaxSettings.
ajaxSetup:function(t,e){return e?eO(eO(t,S.ajaxSettings),e):eO(S.ajaxSettings,t)},ajaxPrefilter:eE(eM),ajaxTransport:eE(eA),// Main method
ajax:function(e,i){"object"==typeof e&&(i=e,e=void 0),// Force options to be an object
i=i||{};var n,r,a,o,s,l,h,c,u,d,f=S.ajaxSetup({},i),p=f.context||f,g=f.context&&(p.nodeType||p.jquery)?S(p):S.event,m=S.Deferred(),v=S.Callbacks("once memory"),y=f.statusCode||{},x={},_={},w="canceled",D={readyState:0,// Builds headers hashtable if needed
getResponseHeader:function(t){var e;if(h){if(!o)for(o={};e=eC.exec(a);)o[e[1].toLowerCase()+" "]=(o[e[1].toLowerCase()+" "]||[]).concat(e[2]);e=o[t.toLowerCase()+" "]}return null==e?null:e.join(", ")},// Raw string
getAllResponseHeaders:function(){return h?a:null},// Caches the header
setRequestHeader:function(t,e){return null==h&&(x[t=_[t.toLowerCase()]=_[t.toLowerCase()]||t]=e),this},// Overrides response content-type header
overrideMimeType:function(t){return null==h&&(f.mimeType=t),this},// Status-dependent callbacks
statusCode:function(t){var e;if(t){if(h)D.always(t[D.status]);else for(e in t)y[e]=[y[e],t[e]]}return this},// Cancel the request
abort:function(t){var e=t||w;return n&&n.abort(e),C(0,e),this}};// A cross-domain request is in order when the origin doesn't match the current origin.
if(// Attach deferreds
m.promise(D),// Add protocol if not provided (prefilters might expect it)
// Handle falsy url in the settings object (trac-10093: consistency with old signature)
// We also use the url parameter if available
f.url=((e||f.url||ef.href)+"").replace(ek,ef.protocol+"//"),// Alias method option to type as per ticket trac-12004
f.type=i.method||i.type||f.method||f.type,// Extract dataTypes list
f.dataTypes=(f.dataType||"*").toLowerCase().match(V)||[""],null==f.crossDomain){l=b.createElement("a");// Support: IE <=8 - 11, Edge 12 - 15
// IE throws exception on accessing the href property if url is malformed,
// e.g. http://example.com:80x/
try{l.href=f.url,// Support: IE <=8 - 11 only
// Anchor's host property isn't correctly set when s.url is relative
l.href=l.href,f.crossDomain=eL.protocol+"//"+eL.host!=l.protocol+"//"+l.host}catch(t){// If there is an error parsing the URL, assume it is crossDomain,
// it can be rejected by the transport if it is invalid
f.crossDomain=!0}}// If request was aborted inside a prefilter, stop there
if(f.data&&f.processData&&"string"!=typeof f.data&&(f.data=S.param(f.data,f.traditional)),// Apply prefilters
eI(eM,f,i,D),h)return D;// Check for headers option
for(u in// We can fire global events as of now if asked to
// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (trac-15118)
(c=S.event&&f.global)&&0==S.active++&&S.event.trigger("ajaxStart"),// Uppercase the type
f.type=f.type.toUpperCase(),// Determine if request has content
f.hasContent=!eT.test(f.type),// Save the URL in case we're toying with the If-Modified-Since
// and/or If-None-Match header later on
// Remove hash to simplify url manipulation
r=f.url.replace(eS,""),f.hasContent?f.data&&f.processData&&0===(f.contentType||"").indexOf("application/x-www-form-urlencoded")&&(f.data=f.data.replace(ew,"+")):(// Remember the hash so we can put it back
d=f.url.slice(r.length),f.data&&(f.processData||"string"==typeof f.data)&&(r+=(eg.test(r)?"&":"?")+f.data,// trac-9682: remove data so that it's not used in an eventual retry
delete f.data),!1===f.cache&&(r=r.replace(eD,"$1"),d=(eg.test(r)?"&":"?")+"_="+ep.guid+++d),// Put hash and anti-cache on the URL that will be requested (gh-1732)
f.url=r+d),f.ifModified&&(S.lastModified[r]&&D.setRequestHeader("If-Modified-Since",S.lastModified[r]),S.etag[r]&&D.setRequestHeader("If-None-Match",S.etag[r])),(f.data&&f.hasContent&&!1!==f.contentType||i.contentType)&&D.setRequestHeader("Content-Type",f.contentType),// Set the Accepts header for the server, depending on the dataType
D.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+eP+"; q=0.01":""):f.accepts["*"]),f.headers)D.setRequestHeader(u,f.headers[u]);// Allow custom headers/mimetypes and early abort
if(f.beforeSend&&(!1===f.beforeSend.call(p,D,f)||h))return D.abort();// If no transport, we auto-abort
if(// Aborting is no longer a cancellation
w="abort",// Install callbacks on deferreds
v.add(f.complete),D.done(f.success),D.fail(f.error),// Get transport
n=eI(eA,f,i,D)){// If request was aborted inside ajaxSend, stop there
if(D.readyState=1,c&&g.trigger("ajaxSend",[D,f]),h)return D;f.async&&f.timeout>0&&(s=t.setTimeout(function(){D.abort("timeout")},f.timeout));try{h=!1,n.send(x,C)}catch(t){// Rethrow post-completion exceptions
if(h)throw t;// Propagate others as results
C(-1,t)}}else C(-1,"No Transport");// Callback for when everything is done
function C(e,i,o,l){var u,d,b,x,_,w=i;// Ignore repeat invocations
h||(h=!0,s&&t.clearTimeout(s),// Dereference transport for early garbage collection
// (no matter how long the jqXHR object will be used)
n=void 0,// Cache response headers
a=l||"",// Set readyState
D.readyState=e>0?4:0,// Determine if successful
u=e>=200&&e<300||304===e,o&&(x=/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */function(t,e,i){// Remove auto dataType and get content-type in the process
for(var n,r,a,o,s=t.contents,l=t.dataTypes;"*"===l[0];)l.shift(),void 0===n&&(n=t.mimeType||e.getResponseHeader("Content-Type"));// Check if we're dealing with a known content-type
if(n){for(r in s)if(s[r]&&s[r].test(n)){l.unshift(r);break}}// Check to see if we have a response for the expected dataType
if(l[0]in i)a=l[0];else{// Try convertible dataTypes
for(r in i){if(!l[0]||t.converters[r+" "+l[0]]){a=r;break}o||(o=r)}// Or just use first one
a=a||o}// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
if(a)return a!==l[0]&&l.unshift(a),i[a]}(f,D,o)),!u&&S.inArray("script",f.dataTypes)>-1&&0>S.inArray("json",f.dataTypes)&&(f.converters["text script"]=function(){}),// Convert no matter what (that way responseXXX fields are always set)
x=/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */function(t,e,i,n){var r,a,o,s,l,h={},c=t.dataTypes.slice();// Create converters map with lowercased keys
if(c[1])for(o in t.converters)h[o.toLowerCase()]=t.converters[o];// Convert to each sequential dataType
for(a=c.shift();a;)if(t.responseFields[a]&&(i[t.responseFields[a]]=e),!l&&n&&t.dataFilter&&(e=t.dataFilter(e,t.dataType)),l=a,a=c.shift()){// There's only work to do if current dataType is non-auto
if("*"===a)a=l;else if("*"!==l&&l!==a){// If none found, seek a pair
if(!// Seek a direct converter
(o=h[l+" "+a]||h["* "+a])){for(r in h)if(// If conv2 outputs current
(s=r.split(" "))[1]===a&&// If prev can be converted to accepted input
(o=h[l+" "+s[0]]||h["* "+s[0]])){// Condense equivalence converters
!0===o?o=h[r]:!0!==h[r]&&(a=s[0],c.unshift(s[1]));break}}// Apply converter (if not an equivalence)
if(!0!==o){// Unless errors are allowed to bubble, catch and return them
if(o&&t.throws)e=o(e);else try{e=o(e)}catch(t){return{state:"parsererror",error:o?t:"No conversion from "+l+" to "+a}}}}}return{state:"success",data:e}}(f,x,D,u),u?(f.ifModified&&((_=D.getResponseHeader("Last-Modified"))&&(S.lastModified[r]=_),(_=D.getResponseHeader("etag"))&&(S.etag[r]=_)),204===e||"HEAD"===f.type?w="nocontent":304===e?w="notmodified":(w=x.state,d=x.data,u=!(b=x.error))):(// Extract error from statusText and normalize for non-aborts
b=w,(e||!w)&&(w="error",e<0&&(e=0))),// Set data for the fake xhr object
D.status=e,D.statusText=(i||w)+"",u?m.resolveWith(p,[d,w,D]):m.rejectWith(p,[D,w,b]),// Status-dependent callbacks
D.statusCode(y),y=void 0,c&&g.trigger(u?"ajaxSuccess":"ajaxError",[D,f,u?d:b]),// Complete
v.fireWith(p,[D,w]),!c||(g.trigger("ajaxComplete",[D,f]),--S.active||S.event.trigger("ajaxStop")))}return D},getJSON:function(t,e,i){return S.get(t,e,i,"json")},getScript:function(t,e){return S.get(t,void 0,e,"script")}}),S.each(["get","post"],function(t,e){S[e]=function(t,i,n,r){// The url can be an options object (which then must have .url)
return g(i)&&(r=r||n,n=i,i=void 0),S.ajax(S.extend({url:t,type:e,dataType:r,data:i,success:n},S.isPlainObject(t)&&t))}}),S.ajaxPrefilter(function(t){var e;for(e in t.headers)"content-type"===e.toLowerCase()&&(t.contentType=t.headers[e]||"")}),S._evalUrl=function(t,e,i){return S.ajax({url:t,// Make this explicit, since user can override this through ajaxSetup (trac-11264)
type:"GET",dataType:"script",cache:!0,async:!1,global:!1,// Only evaluate the response if it is successful (gh-4126)
// dataFilter is not invoked for failure responses, so using it instead
// of the default converter is kludgy but it works.
converters:{"text script":function(){}},dataFilter:function(t){S.globalEval(t,e,i)}})},S.fn.extend({wrapAll:function(t){var e;return this[0]&&(g(t)&&(t=t.call(this[0])),// The elements to wrap the target around
e=S(t,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&e.insertBefore(this[0]),e.map(function(){for(var t=this;t.firstElementChild;)t=t.firstElementChild;return t}).append(this)),this},wrapInner:function(t){return g(t)?this.each(function(e){S(this).wrapInner(t.call(this,e))}):this.each(function(){var e=S(this),i=e.contents();i.length?i.wrapAll(t):e.append(t)})},wrap:function(t){var e=g(t);return this.each(function(i){S(this).wrapAll(e?t.call(this,i):t)})},unwrap:function(t){return this.parent(t).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(t){return!S.expr.pseudos.visible(t)},S.expr.pseudos.visible=function(t){return!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new t.XMLHttpRequest}catch(t){}};var eR={// File protocol always yields status code 0, assume 200
0:200,// Support: IE <=9 only
// trac-1450: sometimes IE returns 1223 when it should be 204
1223:204},eF=S.ajaxSettings.xhr();p.cors=!!eF&&"withCredentials"in eF,p.ajax=eF=!!eF,S.ajaxTransport(function(e){var i,n;// Cross domain only allowed if supported through XMLHttpRequest
if(p.cors||eF&&!e.crossDomain)return{send:function(r,a){var o,s=e.xhr();// Apply custom fields if provided
if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(o in e.xhrFields)s[o]=e.xhrFields[o];// Set headers
for(o in e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||r["X-Requested-With"]||(r["X-Requested-With"]="XMLHttpRequest"),r)s.setRequestHeader(o,r[o]);// Callback
i=function(t){return function(){i&&(i=n=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===t?s.abort():"error"===t?"number"!=typeof s.status?a(0,"error"):a(s.status,s.statusText):a(eR[s.status]||s.status,s.statusText,"text"!==// IE9 has no XHR2 but throws on binary (trac-11426)
// For XHR2 non-text, let the caller handle it (gh-2498)
(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},// Listen to events
s.onload=i(),n=s.onerror=s.ontimeout=i("error"),void 0!==s.onabort?s.onabort=n:s.onreadystatechange=function(){// Check readyState before timeout as it changes
4===s.readyState&&// but that will not handle a native abort
// Also, save errorCallback to a variable
// as xhr.onerror cannot be accessed
t.setTimeout(function(){i&&n()})},// Create the abort callback
i=i("abort");try{// Do send the request (this may raise an exception)
s.send(e.hasContent&&e.data||null)}catch(t){// trac-14683: Only rethrow if this hasn't been notified as an error yet
if(i)throw t}},abort:function(){i&&i()}}}),// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
S.ajaxPrefilter(function(t){t.crossDomain&&(t.contents.script=!1)}),// Install script dataType
S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(t){return S.globalEval(t),t}}}),// Handle cache's special case and crossDomain
S.ajaxPrefilter("script",function(t){void 0===t.cache&&(t.cache=!1),t.crossDomain&&(t.type="GET")}),// Bind script tag hack transport
S.ajaxTransport("script",function(t){// This transport only deals with cross domain or forced-by-attrs requests
if(t.crossDomain||t.scriptAttrs){var e,i;return{send:function(n,r){e=S("<script>").attr(t.scriptAttrs||{}).prop({charset:t.scriptCharset,src:t.url}).on("load error",i=function(t){e.remove(),i=null,t&&r("error"===t.type?404:200,t.type)}),// Use native DOM manipulation to avoid our domManip AJAX trickery
b.head.appendChild(e[0])},abort:function(){i&&i()}}}});var ej=[],eN=/(=)\?(?=&|$)|\?\?/;// Default jsonp settings
S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var t=ej.pop()||S.expando+"_"+ep.guid++;return this[t]=!0,t}}),// Detect, normalize options and install callbacks for jsonp requests
S.ajaxPrefilter("json jsonp",function(e,i,n){var r,a,o,s=!1!==e.jsonp&&(eN.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&eN.test(e.data)&&"data");// Handle iff the expected data type is "jsonp" or we have a parameter to set
if(s||"jsonp"===e.dataTypes[0])// Delegate to script
return(// Get callback name, remembering preexisting value associated with it
r=e.jsonpCallback=g(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,s?e[s]=e[s].replace(eN,"$1"+r):!1!==e.jsonp&&(e.url+=(eg.test(e.url)?"&":"?")+e.jsonp+"="+r),// Use data converter to retrieve json after script execution
e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},// Force json dataType
e.dataTypes[0]="json",// Install callback
a=t[r],t[r]=function(){o=arguments},// Clean-up function (fires after converters)
n.always(function(){void 0===a?S(t).removeProp(r):t[r]=a,e[r]&&(// Make sure that re-using the options doesn't screw things around
e.jsonpCallback=i.jsonpCallback,// Save the callback name for future use
ej.push(r)),o&&g(a)&&a(o[0]),o=a=void 0}),"script")}),// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
p.createHTMLDocument=((i=b.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===i.childNodes.length),// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
S.parseHTML=function(t,e,i){var n,r,a;return"string"!=typeof t?[]:("boolean"==typeof e&&(i=e,e=!1),e||(p.createHTMLDocument?(// Set the base href for the created document
// so any parsed elements with URLs
// are based on the document's URL (gh-2965)
(n=(e=b.implementation.createHTMLDocument("")).createElement("base")).href=b.location.href,e.head.appendChild(n)):e=b),r=F.exec(t),a=!i&&[],r)?[e.createElement(r[1])]:(r=tC([t],e,a),a&&a.length&&S(a).remove(),S.merge([],r.childNodes))},/**
 * Load a url into a page
 */S.fn.load=function(t,e,i){var n,r,a,o=this,s=t.indexOf(" ");return s>-1&&(n=eh(t.slice(s)),t=t.slice(0,s)),g(e)?(// We assume that it's the callback
i=e,e=void 0):e&&"object"==typeof e&&(r="POST"),o.length>0&&S.ajax({url:t,// If "type" variable is undefined, then "GET" method will be used.
// Make value of this field explicit since
// user can override it through ajaxSetup method
type:r||"GET",dataType:"html",data:e}).done(function(t){// Save response for use in complete callback
a=arguments,o.html(n?// Exclude scripts to avoid IE 'Permission Denied' errors
S("<div>").append(S.parseHTML(t)).find(n):t);// If the request succeeds, this function gets "data", "status", "jqXHR"
// but they are ignored because response was set above.
// If it fails, this function gets "jqXHR", "status", "error"
}).always(i&&function(t,e){o.each(function(){i.apply(this,a||[t.responseText,e,t])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(t,e,i){var n,r,a,o,s,l,h=S.css(t,"position"),c=S(t),u={};"static"===h&&(t.style.position="relative"),s=c.offset(),a=S.css(t,"top"),l=S.css(t,"left"),("absolute"===h||"fixed"===h)&&(a+l).indexOf("auto")>-1?(o=(n=c.position()).top,r=n.left):(o=parseFloat(a)||0,r=parseFloat(l)||0),g(e)&&(e=e.call(t,i,S.extend({},s))),null!=e.top&&(u.top=e.top-s.top+o),null!=e.left&&(u.left=e.left-s.left+r),"using"in e?e.using.call(t,u):c.css(u)}},S.fn.extend({// offset() relates an element's border box to the document origin
offset:function(t){// Preserve chaining for setter
if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,i,n=this[0];if(n)return(// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
// Support: IE <=11 only
// Running getBoundingClientRect on a
// disconnected node in IE throws an error
n.getClientRects().length?(// Get document-relative position by adding viewport scroll to viewport-relative gBCR
e=n.getBoundingClientRect(),i=n.ownerDocument.defaultView,{top:e.top+i.pageYOffset,left:e.left+i.pageXOffset}):{top:0,left:0})},// position() relates an element's margin box to its offset parent's padding box
// This corresponds to the behavior of CSS absolute positioning
position:function(){if(this[0]){var t,e,i,n=this[0],r={top:0,left:0};// position:fixed elements are offset from the viewport, which itself always has zero offset
if("fixed"===S.css(n,"position"))e=n.getBoundingClientRect();else{for(e=this.offset(),// Account for the *real* offset parent, which can be the document or its root element
// when a statically positioned element is identified
i=n.ownerDocument,t=n.offsetParent||i.documentElement;t&&(t===i.body||t===i.documentElement)&&"static"===S.css(t,"position");)t=t.parentNode;t&&t!==n&&1===t.nodeType&&(// Incorporate borders into its offset, since they are outside its content origin
r=S(t).offset(),r.top+=S.css(t,"borderTopWidth",!0),r.left+=S.css(t,"borderLeftWidth",!0))}// Subtract parent offsets and element margins
return{top:e.top-r.top-S.css(n,"marginTop",!0),left:e.left-r.left-S.css(n,"marginLeft",!0)}}},// This method will return documentElement in the following cases:
// 1) For the element inside the iframe without offsetParent, this method will return
//    documentElement of the parent window
// 2) For the hidden or detached element
// 3) For body or html element, i.e. in case of the html node - it will return itself
//
// but those exceptions were never presented as a real life use-cases
// and might be considered as more preferable results.
//
// This logic, however, is not guaranteed and can change at any point in the future
offsetParent:function(){return this.map(function(){for(var t=this.offsetParent;t&&"static"===S.css(t,"position");)t=t.offsetParent;return t||tu})}}),// Create scrollLeft and scrollTop methods
S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,e){var i="pageYOffset"===e;S.fn[t]=function(n){return G(this,function(t,n,r){// Coalesce documents and windows
var a;if(m(t)?a=t:9===t.nodeType&&(a=t.defaultView),void 0===r)return a?a[e]:t[n];a?a.scrollTo(i?a.pageXOffset:r,i?r:a.pageYOffset):t[n]=r},t,n,arguments.length)}}),// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
S.each(["top","left"],function(t,e){S.cssHooks[e]=tU(p.pixelPosition,function(t,i){if(i)// If curCSS returns percentage, fallback to offset
return i=tq(t,e),tW.test(i)?S(t).position()[e]+"px":i})}),// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
S.each({Height:"height",Width:"width"},function(t,e){S.each({padding:"inner"+t,content:e,"":"outer"+t},function(i,n){// Margin is only for outerHeight, outerWidth
S.fn[n]=function(r,a){var o=arguments.length&&(i||"boolean"!=typeof r),s=i||(!0===r||!0===a?"margin":"border");return G(this,function(e,i,r){var a;return m(e)?0===n.indexOf("outer")?e["inner"+t]:e.document.documentElement["client"+t]:9===e.nodeType?(a=e.documentElement,Math.max(e.body["scroll"+t],a["scroll"+t],e.body["offset"+t],a["offset"+t],a["client"+t])):void 0===r?S.css(e,i,s):S.style(e,i,r,s)},e,o?r:void 0,o)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(t,e){S.fn[e]=function(t){return this.on(e,t)}}),S.fn.extend({bind:function(t,e,i){return this.on(t,null,e,i)},unbind:function(t,e){return this.off(t,null,e)},delegate:function(t,e,i,n){return this.on(e,t,i,n)},undelegate:function(t,e,i){// ( namespace ) or ( selector, types [, fn] )
return 1==arguments.length?this.off(t,"**"):this.off(e,t||"**",i)},hover:function(t,e){return this.on("mouseenter",t).on("mouseleave",e||t)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(t,e){// Handle event binding
S.fn[e]=function(t,i){return arguments.length>0?this.on(e,null,t,i):this.trigger(e)}});// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
// Require that the "whitespace run" starts from a non-whitespace
// to avoid O(N^2) behavior when the engine would try matching "\s+$" at each space position.
var eH=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
S.proxy=function(t,e){var i,n,r;// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
if("string"==typeof e&&(i=t[e],e=t,t=i),g(t))return(// Simulated bind
n=a.call(arguments,2),// Set the guid of unique handler to the same of original handler, so it can be removed
(r=function(){return t.apply(e||this,n.concat(a.call(arguments)))}).guid=t.guid=t.guid||S.guid++,r)},S.holdReady=function(t){t?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=C,S.isFunction=g,S.isWindow=m,S.camelCase=tt,S.type=x,S.now=Date.now,S.isNumeric=function(t){// As of jQuery 3.0, isNumeric is limited to
// strings and numbers (primitives or objects)
// that can be coerced to finite numbers (gh-2662)
var e=S.type(t);return("number"===e||"string"===e)&&// parseFloat NaNs numeric-cast false positives ("")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
!isNaN(t-parseFloat(t))},S.trim=function(t){return null==t?"":(t+"").replace(eH,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var eW=t.jQuery,eB=t.$;return S.noConflict=function(e){return t.$===S&&(t.$=eB),e&&t.jQuery===S&&(t.jQuery=eW),S},void 0===e&&(t.jQuery=t.$=S),S},"object"==typeof rY?// is present, execute the factory and get jQuery.
// For environments that do not have a `window` with a `document`
// (such as Node.js), expose a factory as module.exports.
// This accentuates the need for the creation of a real `window`.
// e.g. var jQuery = require("jquery")(window);
// See ticket trac-14549 for more info.
rY=t0.document?t1(t0,!0):function(t){if(!t.document)throw Error("jQuery requires a window with a document");return t1(t)}:t1(t0);/*! DataTables 1.13.7
 * ©2008-2023 SpryMedia Ltd - datatables.net/license
 */// DataTables code uses $ internally, but we want to be able to
// reassign $ with the `use` method, so it is a regular var.
var rJ=/*@__PURE__*/a(rY),rG=function(t,e){// Check if called with a window or jQuery object for DOM less applications
// This is for backwards compatibility
if(rG.factory(t,e))return rG;// When creating with `new`, create a new DataTable, returning the API instance
if(this instanceof rG)return rJ(t).DataTable(e);e=t,/**
	 * Perform a jQuery selector action on the table's TR elements (from the tbody) and
	 * return the resulting jQuery object.
	 *  @param {string|node|jQuery} sSelector jQuery selector or node collection to act on
	 *  @param {object} [oOpts] Optional parameters for modifying the rows to be included
	 *  @param {string} [oOpts.filter=none] Select TR elements that meet the current filter
	 *    criterion ("applied") or all TR elements (i.e. no filter).
	 *  @param {string} [oOpts.order=current] Order of the TR elements in the processed array.
	 *    Can be either 'current', whereby the current sorting of the table is used, or
	 *    'original' whereby the original order the data was read into the table is used.
	 *  @param {string} [oOpts.page=all] Limit the selection to the currently displayed page
	 *    ("current") or not ("all"). If 'current' is given, then order is assumed to be
	 *    'current' and filter is 'applied', regardless of what they might be given as.
	 *  @returns {object} jQuery object, filtered by the given selector.
	 *  @dtopt API
	 *  @deprecated Since v1.10
	 *
	 *  @example
	 *    $(document).ready(function() {
	 *      var oTable = $('#example').dataTable();
	 *
	 *      // Highlight every second row
	 *      oTable.$('tr:odd').css('backgroundColor', 'blue');
	 *    } );
	 *
	 *  @example
	 *    $(document).ready(function() {
	 *      var oTable = $('#example').dataTable();
	 *
	 *      // Filter to rows with 'Webkit' in them, add a background colour and then
	 *      // remove the filter, thus highlighting the 'Webkit' rows only.
	 *      oTable.fnFilter('Webkit');
	 *      oTable.$('tr', {"search": "applied"}).css('backgroundColor', 'blue');
	 *      oTable.fnFilter('');
	 *    } );
	 */this.$=function(t,e){return this.api(!0).$(t,e)},/**
	 * Almost identical to $ in operation, but in this case returns the data for the matched
	 * rows - as such, the jQuery selector used should match TR row nodes or TD/TH cell nodes
	 * rather than any descendants, so the data can be obtained for the row/cell. If matching
	 * rows are found, the data returned is the original data array/object that was used to
	 * create the row (or a generated array if from a DOM source).
	 *
	 * This method is often useful in-combination with $ where both functions are given the
	 * same parameters and the array indexes will match identically.
	 *  @param {string|node|jQuery} sSelector jQuery selector or node collection to act on
	 *  @param {object} [oOpts] Optional parameters for modifying the rows to be included
	 *  @param {string} [oOpts.filter=none] Select elements that meet the current filter
	 *    criterion ("applied") or all elements (i.e. no filter).
	 *  @param {string} [oOpts.order=current] Order of the data in the processed array.
	 *    Can be either 'current', whereby the current sorting of the table is used, or
	 *    'original' whereby the original order the data was read into the table is used.
	 *  @param {string} [oOpts.page=all] Limit the selection to the currently displayed page
	 *    ("current") or not ("all"). If 'current' is given, then order is assumed to be
	 *    'current' and filter is 'applied', regardless of what they might be given as.
	 *  @returns {array} Data for the matched elements. If any elements, as a result of the
	 *    selector, were not TR, TD or TH elements in the DataTable, they will have a null
	 *    entry in the array.
	 *  @dtopt API
	 *  @deprecated Since v1.10
	 *
	 *  @example
	 *    $(document).ready(function() {
	 *      var oTable = $('#example').dataTable();
	 *
	 *      // Get the data from the first row in the table
	 *      var data = oTable._('tr:first');
	 *
	 *      // Do something useful with the data
	 *      alert( "First cell is: "+data[0] );
	 *    } );
	 *
	 *  @example
	 *    $(document).ready(function() {
	 *      var oTable = $('#example').dataTable();
	 *
	 *      // Filter to 'Webkit' and get all data for
	 *      oTable.fnFilter('Webkit');
	 *      var data = oTable._('tr', {"search": "applied"});
	 *
	 *      // Do something with the data
	 *      alert( data.length+" rows matched the search" );
	 *    } );
	 */this._=function(t,e){return this.api(!0).rows(t,e).data()},/**
	 * Create a DataTables Api instance, with the currently selected tables for
	 * the Api's context.
	 * @param {boolean} [traditional=false] Set the API instance's context to be
	 *   only the table referred to by the `DataTable.ext.iApiIndex` option, as was
	 *   used in the API presented by DataTables 1.9- (i.e. the traditional mode),
	 *   or if all tables captured in the jQuery object should be used.
	 * @return {DataTables.Api}
	 */this.api=function(t){return new t5(t?oL(this[t2.iApiIndex]):this)},/**
	 * Add a single new row or multiple rows of data to the table. Please note
	 * that this is suitable for client-side processing only - if you are using
	 * server-side processing (i.e. "bServerSide": true), then to add data, you
	 * must add it to the data source, i.e. the server-side, through an Ajax call.
	 *  @param {array|object} data The data to be added to the table. This can be:
	 *    <ul>
	 *      <li>1D array of data - add a single row with the data provided</li>
	 *      <li>2D array of arrays - add multiple rows in a single call</li>
	 *      <li>object - data object when using <i>mData</i></li>
	 *      <li>array of objects - multiple data objects when using <i>mData</i></li>
	 *    </ul>
	 *  @param {bool} [redraw=true] redraw the table or not
	 *  @returns {array} An array of integers, representing the list of indexes in
	 *    <i>aoData</i> ({@link DataTable.models.oSettings}) that have been added to
	 *    the table.
	 *  @dtopt API
	 *  @deprecated Since v1.10
	 *
	 *  @example
	 *    // Global var for counter
	 *    var giCount = 2;
	 *
	 *    $(document).ready(function() {
	 *      $('#example').dataTable();
	 *    } );
	 *
	 *    function fnClickAddRow() {
	 *      $('#example').dataTable().fnAddData( [
	 *        giCount+".1",
	 *        giCount+".2",
	 *        giCount+".3",
	 *        giCount+".4" ]
	 *      );
	 *
	 *      giCount++;
	 *    }
	 */this.fnAddData=function(t,e){var i=this.api(!0),n=Array.isArray(t)&&(Array.isArray(t[0])||rJ.isPlainObject(t[0]))?i.rows.add(t):i.row.add(t);return(void 0===e||e)&&i.draw(),n.flatten().toArray()},/**
	 * This function will make DataTables recalculate the column sizes, based on the data
	 * contained in the table and the sizes applied to the columns (in the DOM, CSS or
	 * through the sWidth parameter). This can be useful when the width of the table's
	 * parent element changes (for example a window resize).
	 *  @param {boolean} [bRedraw=true] Redraw the table or not, you will typically want to
	 *  @dtopt API
	 *  @deprecated Since v1.10
	 *
	 *  @example
	 *    $(document).ready(function() {
	 *      var oTable = $('#example').dataTable( {
	 *        "sScrollY": "200px",
	 *        "bPaginate": false
	 *      } );
	 *
	 *      $(window).on('resize', function () {
	 *        oTable.fnAdjustColumnSizing();
	 *      } );
	 *    } );
	 */this.fnAdjustColumnSizing=function(t){var e=this.api(!0).columns.adjust(),i=e.settings()[0],n=i.oScroll;void 0===t||t?e.draw(!1):(""!==n.sX||""!==n.sY)&&/* If not redrawing, but scrolling, we want to apply the new column sizes anyway */od(i)},/**
	 * Quickly and simply clear a table
	 *  @param {bool} [bRedraw=true] redraw the table or not
	 *  @dtopt API
	 *  @deprecated Since v1.10
	 *
	 *  @example
	 *    $(document).ready(function() {
	 *      var oTable = $('#example').dataTable();
	 *
	 *      // Immediately 'nuke' the current rows (perhaps waiting for an Ajax callback...)
	 *      oTable.fnClearTable();
	 *    } );
	 */this.fnClearTable=function(t){var e=this.api(!0).clear();(void 0===t||t)&&e.draw()},/**
	 * The exact opposite of 'opening' a row, this function will close any rows which
	 * are currently 'open'.
	 *  @param {node} nTr the table row to 'close'
	 *  @returns {int} 0 on success, or 1 if failed (can't find the row)
	 *  @dtopt API
	 *  @deprecated Since v1.10
	 *
	 *  @example
	 *    $(document).ready(function() {
	 *      var oTable;
	 *
	 *      // 'open' an information row when a row is clicked on
	 *      $('#example tbody tr').click( function () {
	 *        if ( oTable.fnIsOpen(this) ) {
	 *          oTable.fnClose( this );
	 *        } else {
	 *          oTable.fnOpen( this, "Temporary row opened", "info_row" );
	 *        }
	 *      } );
	 *
	 *      oTable = $('#example').dataTable();
	 *    } );
	 */this.fnClose=function(t){this.api(!0).row(t).child.hide()},/**
	 * Remove a row for the table
	 *  @param {mixed} target The index of the row from aoData to be deleted, or
	 *    the TR element you want to delete
	 *  @param {function|null} [callBack] Callback function
	 *  @param {bool} [redraw=true] Redraw the table or not
	 *  @returns {array} The row that was deleted
	 *  @dtopt API
	 *  @deprecated Since v1.10
	 *
	 *  @example
	 *    $(document).ready(function() {
	 *      var oTable = $('#example').dataTable();
	 *
	 *      // Immediately remove the first row
	 *      oTable.fnDeleteRow( 0 );
	 *    } );
	 */this.fnDeleteRow=function(t,e,i){var n=this.api(!0),r=n.rows(t),a=r.settings()[0],o=a.aoData[r[0][0]];return r.remove(),e&&e.call(this,a,o),(void 0===i||i)&&n.draw(),o},/**
	 * Restore the table to it's original state in the DOM by removing all of DataTables
	 * enhancements, alterations to the DOM structure of the table and event listeners.
	 *  @param {boolean} [remove=false] Completely remove the table from the DOM
	 *  @dtopt API
	 *  @deprecated Since v1.10
	 *
	 *  @example
	 *    $(document).ready(function() {
	 *      // This example is fairly pointless in reality, but shows how fnDestroy can be used
	 *      var oTable = $('#example').dataTable();
	 *      oTable.fnDestroy();
	 *    } );
	 */this.fnDestroy=function(t){this.api(!0).destroy(t)},/**
	 * Redraw the table
	 *  @param {bool} [complete=true] Re-filter and resort (if enabled) the table before the draw.
	 *  @dtopt API
	 *  @deprecated Since v1.10
	 *
	 *  @example
	 *    $(document).ready(function() {
	 *      var oTable = $('#example').dataTable();
	 *
	 *      // Re-draw the table - you wouldn't want to do it here, but it's an example :-)
	 *      oTable.fnDraw();
	 *    } );
	 */this.fnDraw=function(t){// Note that this isn't an exact match to the old call to _fnDraw - it takes
// into account the new data, but can hold position.
this.api(!0).draw(t)},/**
	 * Filter the input based on data
	 *  @param {string} sInput String to filter the table on
	 *  @param {int|null} [iColumn] Column to limit filtering to
	 *  @param {bool} [bRegex=false] Treat as regular expression or not
	 *  @param {bool} [bSmart=true] Perform smart filtering or not
	 *  @param {bool} [bShowGlobal=true] Show the input global filter in it's input box(es)
	 *  @param {bool} [bCaseInsensitive=true] Do case-insensitive matching (true) or not (false)
	 *  @dtopt API
	 *  @deprecated Since v1.10
	 *
	 *  @example
	 *    $(document).ready(function() {
	 *      var oTable = $('#example').dataTable();
	 *
	 *      // Sometime later - filter...
	 *      oTable.fnFilter( 'test string' );
	 *    } );
	 */this.fnFilter=function(t,e,i,n,r,a){var o=this.api(!0);null==e?o.search(t,i,n,a):o.column(e).search(t,i,n,a),o.draw()},/**
	 * Get the data for the whole table, an individual row or an individual cell based on the
	 * provided parameters.
	 *  @param {int|node} [src] A TR row node, TD/TH cell node or an integer. If given as
	 *    a TR node then the data source for the whole row will be returned. If given as a
	 *    TD/TH cell node then iCol will be automatically calculated and the data for the
	 *    cell returned. If given as an integer, then this is treated as the aoData internal
	 *    data index for the row (see fnGetPosition) and the data for that row used.
	 *  @param {int} [col] Optional column index that you want the data of.
	 *  @returns {array|object|string} If mRow is undefined, then the data for all rows is
	 *    returned. If mRow is defined, just data for that row, and is iCol is
	 *    defined, only data for the designated cell is returned.
	 *  @dtopt API
	 *  @deprecated Since v1.10
	 *
	 *  @example
	 *    // Row data
	 *    $(document).ready(function() {
	 *      oTable = $('#example').dataTable();
	 *
	 *      oTable.$('tr').click( function () {
	 *        var data = oTable.fnGetData( this );
	 *        // ... do something with the array / object of data for the row
	 *      } );
	 *    } );
	 *
	 *  @example
	 *    // Individual cell data
	 *    $(document).ready(function() {
	 *      oTable = $('#example').dataTable();
	 *
	 *      oTable.$('td').click( function () {
	 *        var sData = oTable.fnGetData( this );
	 *        alert( 'The cell clicked on had the value of '+sData );
	 *      } );
	 *    } );
	 */this.fnGetData=function(t,e){var i=this.api(!0);if(void 0!==t){var n=t.nodeName?t.nodeName.toLowerCase():"";return void 0!==e||"td"==n||"th"==n?i.cell(t,e).data():i.row(t).data()||null}return i.data().toArray()},/**
	 * Get an array of the TR nodes that are used in the table's body. Note that you will
	 * typically want to use the '$' API method in preference to this as it is more
	 * flexible.
	 *  @param {int} [iRow] Optional row index for the TR element you want
	 *  @returns {array|node} If iRow is undefined, returns an array of all TR elements
	 *    in the table's body, or iRow is defined, just the TR element requested.
	 *  @dtopt API
	 *  @deprecated Since v1.10
	 *
	 *  @example
	 *    $(document).ready(function() {
	 *      var oTable = $('#example').dataTable();
	 *
	 *      // Get the nodes from the table
	 *      var nNodes = oTable.fnGetNodes( );
	 *    } );
	 */this.fnGetNodes=function(t){var e=this.api(!0);return void 0!==t?e.row(t).node():e.rows().nodes().flatten().toArray()},/**
	 * Get the array indexes of a particular cell from it's DOM element
	 * and column index including hidden columns
	 *  @param {node} node this can either be a TR, TD or TH in the table's body
	 *  @returns {int} If nNode is given as a TR, then a single index is returned, or
	 *    if given as a cell, an array of [row index, column index (visible),
	 *    column index (all)] is given.
	 *  @dtopt API
	 *  @deprecated Since v1.10
	 *
	 *  @example
	 *    $(document).ready(function() {
	 *      $('#example tbody td').click( function () {
	 *        // Get the position of the current data from the node
	 *        var aPos = oTable.fnGetPosition( this );
	 *
	 *        // Get the data array for this row
	 *        var aData = oTable.fnGetData( aPos[0] );
	 *
	 *        // Update the data array and return the value
	 *        aData[ aPos[1] ] = 'clicked';
	 *        this.innerHTML = 'clicked';
	 *      } );
	 *
	 *      // Init DataTables
	 *      oTable = $('#example').dataTable();
	 *    } );
	 */this.fnGetPosition=function(t){var e=this.api(!0),i=t.nodeName.toUpperCase();if("TR"==i)return e.row(t).index();if("TD"==i||"TH"==i){var n=e.cell(t).index();return[n.row,n.columnVisible,n.column]}return null},/**
	 * Check to see if a row is 'open' or not.
	 *  @param {node} nTr the table row to check
	 *  @returns {boolean} true if the row is currently open, false otherwise
	 *  @dtopt API
	 *  @deprecated Since v1.10
	 *
	 *  @example
	 *    $(document).ready(function() {
	 *      var oTable;
	 *
	 *      // 'open' an information row when a row is clicked on
	 *      $('#example tbody tr').click( function () {
	 *        if ( oTable.fnIsOpen(this) ) {
	 *          oTable.fnClose( this );
	 *        } else {
	 *          oTable.fnOpen( this, "Temporary row opened", "info_row" );
	 *        }
	 *      } );
	 *
	 *      oTable = $('#example').dataTable();
	 *    } );
	 */this.fnIsOpen=function(t){return this.api(!0).row(t).child.isShown()},/**
	 * This function will place a new row directly after a row which is currently
	 * on display on the page, with the HTML contents that is passed into the
	 * function. This can be used, for example, to ask for confirmation that a
	 * particular record should be deleted.
	 *  @param {node} nTr The table row to 'open'
	 *  @param {string|node|jQuery} mHtml The HTML to put into the row
	 *  @param {string} sClass Class to give the new TD cell
	 *  @returns {node} The row opened. Note that if the table row passed in as the
	 *    first parameter, is not found in the table, this method will silently
	 *    return.
	 *  @dtopt API
	 *  @deprecated Since v1.10
	 *
	 *  @example
	 *    $(document).ready(function() {
	 *      var oTable;
	 *
	 *      // 'open' an information row when a row is clicked on
	 *      $('#example tbody tr').click( function () {
	 *        if ( oTable.fnIsOpen(this) ) {
	 *          oTable.fnClose( this );
	 *        } else {
	 *          oTable.fnOpen( this, "Temporary row opened", "info_row" );
	 *        }
	 *      } );
	 *
	 *      oTable = $('#example').dataTable();
	 *    } );
	 */this.fnOpen=function(t,e,i){return this.api(!0).row(t).child(e,i).show().child()[0]},/**
	 * Change the pagination - provides the internal logic for pagination in a simple API
	 * function. With this function you can have a DataTables table go to the next,
	 * previous, first or last pages.
	 *  @param {string|int} mAction Paging action to take: "first", "previous", "next" or "last"
	 *    or page number to jump to (integer), note that page 0 is the first page.
	 *  @param {bool} [bRedraw=true] Redraw the table or not
	 *  @dtopt API
	 *  @deprecated Since v1.10
	 *
	 *  @example
	 *    $(document).ready(function() {
	 *      var oTable = $('#example').dataTable();
	 *      oTable.fnPageChange( 'next' );
	 *    } );
	 */this.fnPageChange=function(t,e){var i=this.api(!0).page(t);(void 0===e||e)&&i.draw(!1)},/**
	 * Show a particular column
	 *  @param {int} iCol The column whose display should be changed
	 *  @param {bool} bShow Show (true) or hide (false) the column
	 *  @param {bool} [bRedraw=true] Redraw the table or not
	 *  @dtopt API
	 *  @deprecated Since v1.10
	 *
	 *  @example
	 *    $(document).ready(function() {
	 *      var oTable = $('#example').dataTable();
	 *
	 *      // Hide the second column after initialisation
	 *      oTable.fnSetColumnVis( 1, false );
	 *    } );
	 */this.fnSetColumnVis=function(t,e,i){var n=this.api(!0).column(t).visible(e);(void 0===i||i)&&n.columns.adjust().draw()},/**
	 * Get the settings for a particular table for external manipulation
	 *  @returns {object} DataTables settings object. See
	 *    {@link DataTable.models.oSettings}
	 *  @dtopt API
	 *  @deprecated Since v1.10
	 *
	 *  @example
	 *    $(document).ready(function() {
	 *      var oTable = $('#example').dataTable();
	 *      var oSettings = oTable.fnSettings();
	 *
	 *      // Show an example parameter from the settings
	 *      alert( oSettings._iDisplayStart );
	 *    } );
	 */this.fnSettings=function(){return oL(this[t2.iApiIndex])},/**
	 * Sort the table by a particular column
	 *  @param {int} iCol the data index to sort on. Note that this will not match the
	 *    'display index' if you have hidden data entries
	 *  @dtopt API
	 *  @deprecated Since v1.10
	 *
	 *  @example
	 *    $(document).ready(function() {
	 *      var oTable = $('#example').dataTable();
	 *
	 *      // Sort immediately with columns 0 and 1
	 *      oTable.fnSort( [ [0,'asc'], [1,'asc'] ] );
	 *    } );
	 */this.fnSort=function(t){this.api(!0).order(t).draw()},/**
	 * Attach a sort listener to an element for a given column
	 *  @param {node} nNode the element to attach the sort listener to
	 *  @param {int} iColumn the column that a click on this node will sort on
	 *  @param {function} [fnCallback] callback function when sort is run
	 *  @dtopt API
	 *  @deprecated Since v1.10
	 *
	 *  @example
	 *    $(document).ready(function() {
	 *      var oTable = $('#example').dataTable();
	 *
	 *      // Sort on column 1, when 'sorter' is clicked on
	 *      oTable.fnSortListener( document.getElementById('sorter'), 1 );
	 *    } );
	 */this.fnSortListener=function(t,e,i){this.api(!0).order.listener(t,e,i)},/**
	 * Update a table cell or row - this method will accept either a single value to
	 * update the cell with, an array of values with one element for each column or
	 * an object in the same format as the original data source. The function is
	 * self-referencing in order to make the multi column updates easier.
	 *  @param {object|array|string} mData Data to update the cell/row with
	 *  @param {node|int} mRow TR element you want to update or the aoData index
	 *  @param {int} [iColumn] The column to update, give as null or undefined to
	 *    update a whole row.
	 *  @param {bool} [bRedraw=true] Redraw the table or not
	 *  @param {bool} [bAction=true] Perform pre-draw actions or not
	 *  @returns {int} 0 on success, 1 on error
	 *  @dtopt API
	 *  @deprecated Since v1.10
	 *
	 *  @example
	 *    $(document).ready(function() {
	 *      var oTable = $('#example').dataTable();
	 *      oTable.fnUpdate( 'Example update', 0, 0 ); // Single cell
	 *      oTable.fnUpdate( ['a', 'b', 'c', 'd', 'e'], $('tbody tr')[0] ); // Row
	 *    } );
	 */this.fnUpdate=function(t,e,i,n,r){var a=this.api(!0);return null==i?a.row(e).data(t):a.cell(e,i).data(t),(void 0===r||r)&&a.columns.adjust(),(void 0===n||n)&&a.draw(),0},/**
	 * Provide a common method for plug-ins to check the version of DataTables being used, in order
	 * to ensure compatibility.
	 *  @param {string} sVersion Version string to check for, in the format "X.Y.Z". Note that the
	 *    formats "X" and "X.Y" are also acceptable.
	 *  @returns {boolean} true if this version of DataTables is greater or equal to the required
	 *    version, or false if this version of DataTales is not suitable
	 *  @method
	 *  @dtopt API
	 *  @deprecated Since v1.10
	 *
	 *  @example
	 *    $(document).ready(function() {
	 *      var oTable = $('#example').dataTable();
	 *      alert( oTable.fnVersionCheck( '1.9.0' ) );
	 *    } );
	 */this.fnVersionCheck=t2.fnVersionCheck;var i=this,n=void 0===e,r=this.length;// Extend with old style plug-in API methods
for(var a in n&&(e={}),this.oApi=this.internal=t2.internal,rG.ext.internal)a&&(this[a]=sd(a));return this.each(function(){var t,a,o=r>1?oO({},e,!0):e,s=0,l=this.getAttribute("id"),h=!1,c=rG.defaults,u=rJ(this);/* Sanity check */if("table"!=this.nodeName.toLowerCase()){oE(null,0,"Non-table node initialisation ("+this.nodeName+")",2);return}/* Backwards compatibility for the defaults */au(c),ad(c.column),/* Convert the camel-case defaults to Hungarian */al(c,c,!0),al(c.column,c.column,!0),/* Setting up the initialisation object */al(c,rJ.extend(o,u.data()),!0);/* Check to see if we are re-initialising a table */var d=rG.settings;for(s=0,a=d.length;s<a;s++){var f=d[s];/* Base check on table node */if(f.nTable==this||f.nTHead&&f.nTHead.parentNode==this||f.nTFoot&&f.nTFoot.parentNode==this){var p=void 0!==o.bRetrieve?o.bRetrieve:c.bRetrieve,g=void 0!==o.bDestroy?o.bDestroy:c.bDestroy;if(n||p)return f.oInstance;if(g){f.oInstance.fnDestroy();break}oE(f,0,"Cannot reinitialise DataTable",3);return}/* If the element we are initialising has the same ID as a table which was previously
			 * initialised, but the table nodes don't match (from before) then we destroy the old
			 * instance by simply deleting it. This is under the assumption that the table has been
			 * destroyed by other methods. Anyone using non-id selectors will need to do this manually
			 */if(f.sTableId==this.id){d.splice(s,1);break}}(null===l||""===l)&&(l="DataTables_Table_"+rG.ext._unique++,this.id=l);/* Create the settings object for this table and set some of the default parameters */var m=rJ.extend(!0,{},rG.models.oSettings,{sDestroyWidth:u[0].style.width,sInstance:l,sTableId:l});m.nTable=this,m.oApi=i.internal,m.oInit=o,d.push(m),// Need to add the instance after the instance after the settings object has been added
// to the settings array, so we can self reference the table instance if more than one
m.oInstance=1===i.length?i:u.dataTable(),// Backwards compatibility, before we apply all the defaults
au(o),ah(o.oLanguage),o.aLengthMenu&&!o.iDisplayLength&&(o.iDisplayLength=Array.isArray(o.aLengthMenu[0])?o.aLengthMenu[0][0]:o.aLengthMenu[0]),// Apply the defaults and init options to make a single init object will all
// options defined from defaults and instance options.
o=oO(rJ.extend(!0,{},c),o),// Map the initialisation options onto the settings object
oI(m.oFeatures,o,["bPaginate","bLengthChange","bFilter","bSort","bSortMulti","bInfo","bProcessing","bAutoWidth","bSortClasses","bServerSide","bDeferRender"]),oI(m,o,["asStripeClasses","ajax","fnServerData","fnFormatNumber","sServerMethod","aaSorting","aaSortingFixed","aLengthMenu","sPaginationType","sAjaxSource","sAjaxDataProp","iStateDuration","sDom","bSortCellsTop","iTabIndex","fnStateLoadCallback","fnStateSaveCallback","renderer","searchDelay","rowId",["iCookieDuration","iStateDuration"],["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"]]),oI(m.oScroll,o,[["sScrollX","sX"],["sScrollXInner","sXInner"],["sScrollY","sY"],["bScrollCollapse","bCollapse"]]),oI(m.oLanguage,o,"fnInfoCallback"),/* Callback functions which are array driven */oF(m,"aoDrawCallback",o.fnDrawCallback,"user"),oF(m,"aoServerParams",o.fnServerParams,"user"),oF(m,"aoStateSaveParams",o.fnStateSaveParams,"user"),oF(m,"aoStateLoadParams",o.fnStateLoadParams,"user"),oF(m,"aoStateLoaded",o.fnStateLoaded,"user"),oF(m,"aoRowCallback",o.fnRowCallback,"user"),oF(m,"aoRowCreatedCallback",o.fnCreatedRow,"user"),oF(m,"aoHeaderCallback",o.fnHeaderCallback,"user"),oF(m,"aoFooterCallback",o.fnFooterCallback,"user"),oF(m,"aoInitComplete",o.fnInitComplete,"user"),oF(m,"aoPreDrawCallback",o.fnPreDrawCallback,"user"),m.rowIdFn=aL(o.rowId),/* Browser support detection */af(m);var b=m.oClasses;if(rJ.extend(b,rG.ext.classes,o.oClasses),u.addClass(b.sTable),void 0===m.iInitDisplayStart&&(/* Display start point, taking into account the save saving */m.iInitDisplayStart=o.iDisplayStart,m._iDisplayStart=o.iDisplayStart),null!==o.iDeferLoading){m.bDeferLoading=!0;var v=Array.isArray(o.iDeferLoading);m._iRecordsDisplay=v?o.iDeferLoading[0]:o.iDeferLoading,m._iRecordsTotal=v?o.iDeferLoading[1]:o.iDeferLoading}/* Language definitions */var y=m.oLanguage;rJ.extend(!0,y,o.oLanguage),y.sUrl?(/* Get the language definitions from a file - because this Ajax call makes the language
			 * get async to the remainder of this function we use bInitHandedOff to indicate that
			 * _fnInitialise will be fired by the returned Ajax handler, rather than the constructor
			 */rJ.ajax({dataType:"json",url:y.sUrl,success:function(t){al(c.oLanguage,t),ah(t),rJ.extend(!0,y,t,m.oInit.oLanguage),oj(m,null,"i18n",[m]),on(m)},error:function(){// Error occurred loading language file, continue on as best we can
on(m)}}),h=!0):oj(m,null,"i18n",[m]),null===o.asStripeClasses&&(m.asStripeClasses=[b.sStripeOdd,b.sStripeEven]);/* Remove row stripe classes if they are already on the table row */var x=m.asStripeClasses,_=u.children("tbody").find("tr").eq(0);-1!==rJ.inArray(!0,rJ.map(x,function(t,e){return _.hasClass(t)}))&&(rJ("tbody tr",this).removeClass(x.join(" ")),m.asDestroyStripes=x.slice());/*
		 * Columns
		 * See if we should load columns automatically or use defined ones
		 */var w=[],S=this.getElementsByTagName("thead");/* If not given a column array, generate one with nulls */if(0!==S.length&&(aq(m.aoHeader,S[0]),w=aU(m)),null===o.aoColumns)for(s=0,t=[],a=w.length;s<a;s++)t.push(null);else t=o.aoColumns;/* Add the columns */for(s=0,a=t.length;s<a;s++)ag(m,w?w[s]:null);/* HTML5 attribute detection - build an mData object automatically if the
		 * attributes are found
		 */if(/* Apply the column definitions */aS(m,o.aoColumnDefs,t,function(t,e){am(m,t,e)}),_.length){var D=function(t,e){return null!==t.getAttribute("data-"+e)?e:null};rJ(_[0]).children("th, td").each(function(t,e){var i=m.aoColumns[t];if(i||oE(m,0,"Incorrect column count",18),i.mData===t){var n=D(e,"sort")||D(e,"order"),r=D(e,"filter")||D(e,"search");(null!==n||null!==r)&&(i.mData={_:t+".display",sort:null!==n?t+".@data-"+n:void 0,type:null!==n?t+".@data-"+n:void 0,filter:null!==r?t+".@data-"+r:void 0},i._isArrayHost=!0,am(m,t))}})}var C=m.oFeatures,T=function(){/*
			 * Sorting
			 * @todo For modularisation (1.11) this needs to do into a sort start up handler
			 */// If aaSorting is not defined, then we use the first indicator in asSorting
// in case that has been altered, so the default sort reflects that option
if(void 0===o.aaSorting){var t=m.aaSorting;for(s=0,a=t.length;s<a;s++)t[s][1]=m.aoColumns[s].asSorting[0]}/* Do a first pass on the sorting classes (allows any size changes to be taken into
			 * account, and also will apply sorting disabled classes if disabled
			 */oT(m),C.bSort&&oF(m,"aoDrawCallback",function(){if(m.bSorted){var t=o_(m),e={};rJ.each(t,function(t,i){e[i.src]=i.dir}),oj(m,null,"order",[m,t,e]),oS(m)}}),oF(m,"aoDrawCallback",function(){(m.bSorted||"ssp"===oW(m)||C.bDeferRender)&&oT(m)},"sc");/*
			 * Final init
			 * Cache the header, body and footer as required, creating them if needed
			 */// Work around for Webkit bug 83867 - store the caption-side before removing from doc
var e=u.children("caption").each(function(){this._captionSide=rJ(this).css("caption-side")}),i=u.children("thead");0===i.length&&(i=rJ("<thead/>").appendTo(u)),m.nTHead=i[0];var n=u.children("tbody");0===n.length&&(n=rJ("<tbody/>").insertAfter(i)),m.nTBody=n[0];var r=u.children("tfoot");/* Check if there is data passing into the constructor */if(0===r.length&&e.length>0&&(""!==m.oScroll.sX||""!==m.oScroll.sY)&&// a tfoot element for the caption element to be appended to
(r=rJ("<tfoot/>").appendTo(u)),0===r.length||0===r.children().length?u.addClass(b.sNoFooter):r.length>0&&(m.nTFoot=r[0],aq(m.aoFooter,m.nTFoot)),o.aaData)for(s=0;s<o.aaData.length;s++)aD(m,o.aaData[s]);else(m.bDeferLoading||"dom"==oW(m))&&/* Grab the data from the page - only do this when deferred loading or no Ajax
				 * source since there is no point in reading the DOM data if we are then going
				 * to replace it with Ajax data
				 */aC(m,rJ(m.nTBody).children("tr"));/* Copy the data index array */m.aiDisplay=m.aiDisplayMaster.slice(),/* Initialisation complete - table can be drawn */m.bInitialised=!0,!1===h&&on(m)};/* Must be done after everything which can be overridden by the state saving! */oF(m,"aoDrawCallback",oM,"state_save"),o.bStateSave?(C.bStateSave=!0,oA(m,o,T)):T()}),i=null,this},rK={},rZ=/[\r\n\u2028]/g,rQ=/<.*?>/g,r0=/^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,r1=RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)","g"),r2=/['\u00A0,$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi,r5=function(t){return!t||!0===t||"-"===t},r3=function(t){var e=parseInt(t,10);return!isNaN(e)&&isFinite(t)?e:null},r4=function(t,e){return rK[e]||(rK[e]=RegExp(a3(e),"g")),"string"==typeof t&&"."!==e?t.replace(/\./g,"").replace(rK[e],"."):t},r8=function(t,e,i){var n=typeof t,r="string"===n;return!!("number"===n||"bigint"===n||r5(t))||(e&&r&&(t=r4(t,e)),i&&r&&(t=t.replace(r2,"")),!isNaN(parseFloat(t))&&isFinite(t))},r6=function(t,e,i){return!!r5(t)||(r5(t)||"string"==typeof t)&&!!r8(ai(t),e,i)||null},r9=function(t,e,i){var n=[],r=0,a=t.length;// Could have the test in the loop for slightly smaller code, but speed
// is essential here
if(void 0!==i)for(;r<a;r++)t[r]&&t[r][e]&&n.push(t[r][e][i]);else for(;r<a;r++)t[r]&&n.push(t[r][e]);return n},r7=function(t,e,i,n){var r=[],a=0,o=e.length;// Could have the test in the loop for slightly smaller code, but speed
// is essential here
if(void 0!==n)for(;a<o;a++)t[e[a]][i]&&r.push(t[e[a]][i][n]);else for(;a<o;a++)r.push(t[e[a]][i]);return r},at=function(t,e){var i,n=[];void 0===e?(e=0,i=t):(i=e,e=t);for(var r=e;r<i;r++)n.push(r);return n},ae=function(t){for(var e=[],i=0,n=t.length;i<n;i++)t[i]&&e.push(t[i]);return e},ai=function(t){return t.replace(rQ,"")// Complete tags
.replace(/<script/i,"");// Safety for incomplete script tag
},an=function(t){if(t.length<2)return!0;for(var e=t.slice().sort(),i=e[0],n=1,r=e.length;n<r;n++){if(e[n]===i)return!1;i=e[n]}return!0},ar=function(t){if(an(t))return t.slice();// A faster unique method is to use object keys to identify used values,
// but this doesn't work with arrays or objects, which we must also
// consider. See jsperf.com/compare-array-unique-versions/4 for more
// information.
var e,i,n,r=[],a=t.length,o=0;t:for(i=0;i<a;i++){for(n=0,e=t[i];n<o;n++)if(r[n]===e)continue t;r.push(e),o++}return r},aa=function(t,e){if(Array.isArray(e))for(var i=0;i<e.length;i++)aa(t,e[i]);else t.push(e);return t},ao=function(t,e){return void 0===e&&(e=0),-1!==this.indexOf(t,e)};/**
 * Create a mapping object that allows camel case parameters to be looked up
 * for their Hungarian counterparts. The mapping is stored in a private
 * parameter called `_hungarianMap` which can be accessed on the source object.
 *  @param {object} o
 *  @memberof DataTable#oApi
 */function as(t){var e,i={};rJ.each(t,function(n,r){(e=n.match(/^([^A-Z]+?)([A-Z])/))&&-1!=="a aa ai ao as b fn i m o s ".indexOf(e[1]+" ")&&(i[n.replace(e[0],e[2].toLowerCase())]=n,"o"===e[1]&&as(t[n]))}),t._hungarianMap=i}/**
 * Convert from camel case parameters to Hungarian, based on a Hungarian map
 * created by _fnHungarianMap.
 *  @param {object} src The model object which holds all parameters that can be
 *    mapped.
 *  @param {object} user The object to convert from camel case to Hungarian.
 *  @param {boolean} force When set to `true`, properties which already have a
 *    Hungarian value in the `user` object will be overwritten. Otherwise they
 *    won't be.
 *  @memberof DataTable#oApi
 */function al(t,e,i){var n;t._hungarianMap||as(t),rJ.each(e,function(r,a){void 0!==(n=t._hungarianMap[r])&&(i||void 0===e[n])&&("o"===n.charAt(0)?(e[n]||(e[n]={}),rJ.extend(!0,e[n],e[r]),al(t[n],e[n],i)):e[n]=e[r])})}/**
 * Language compatibility - when certain options are given, and others aren't, we
 * need to duplicate the values over, in order to provide backwards compatibility
 * with older language files.
 *  @param {object} oSettings dataTables settings object
 *  @memberof DataTable#oApi
 */function ah(t){// Note the use of the Hungarian notation for the parameters in this method as
// this is called after the mapping of camelCase to Hungarian
var e=rG.defaults.oLanguage,i=e.sDecimal;if(i&&si(i),t){var n=t.sZeroRecords;!t.sEmptyTable&&n&&"No data available in table"===e.sEmptyTable&&oI(t,t,"sZeroRecords","sEmptyTable"),!t.sLoadingRecords&&n&&"Loading..."===e.sLoadingRecords&&oI(t,t,"sZeroRecords","sLoadingRecords"),t.sInfoThousands&&(t.sThousands=t.sInfoThousands);var r=t.sDecimal;r&&i!==r&&si(r)}}Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),Array.prototype.includes||(Array.prototype.includes=ao),String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}),String.prototype.includes||(String.prototype.includes=ao),/**
 * DataTables utility methods
 * 
 * This namespace provides helper methods that DataTables uses internally to
 * create a DataTable, but which are not exclusively used only for DataTables.
 * These methods can be used by extension authors to save the duplication of
 * code.
 *
 *  @namespace
 */rG.util={/**
	 * Throttle the calls to a function. Arguments and context are maintained
	 * for the throttled function.
	 *
	 * @param {function} fn Function to be called
	 * @param {integer} freq Call frequency in mS
	 * @return {function} Wrapped function
	 */throttle:function(t,e){var i,n,r=void 0!==e?e:200;return function(){var e=this,a=+new Date,o=arguments;i&&a<i+r?(clearTimeout(n),n=setTimeout(function(){i=void 0,t.apply(e,o)},r)):(i=a,t.apply(e,o))}},/**
	 * Escape a string such that it can be used in a regular expression
	 *
	 *  @param {string} val string to escape
	 *  @returns {string} escaped string
	 */escapeRegex:function(t){return t.replace(r1,"\\$1")},/**
	 * Create a function that will write to a nested object or array
	 * @param {*} source JSON notation string
	 * @returns Write function
	 */set:function(t){if(rJ.isPlainObject(t))/* Unlike get, only the underscore (global) option is used for for
			 * setting data since we don't know the type here. This is why an object
			 * option is not documented for `mData` (which is read/write), but it is
			 * for `mRender` which is read only.
			 */return rG.util.set(t._);if(null===t)return function(){};if("function"==typeof t)return function(e,i,n){t(e,"set",i,n)};if("string"!=typeof t||-1===t.indexOf(".")&&-1===t.indexOf("[")&&-1===t.indexOf("("))return function(e,i){e[t]=i};// Like the get, we need to get data from a nested object
var e=function(t,i,n){for(var r,a,o,s,l,h=aP(n),c=h[h.length-1],u=0,d=h.length-1;u<d;u++){// Protect against prototype pollution
if("__proto__"===h[u]||"constructor"===h[u])throw Error("Cannot set prototype values");if(// Check if we are dealing with an array notation request
r=h[u].match(aM),a=h[u].match(aA),r){// Traverse each entry in the array setting the properties requested
if(h[u]=h[u].replace(aM,""),t[h[u]]=[],// Get the remainder of the nested object to set so we can recurse
(l=h.slice()).splice(0,u+1),s=l.join("."),Array.isArray(i))for(var f=0,p=i.length;f<p;f++)e(o={},i[f],s),t[h[u]].push(o);else // isn't array data to be saved. Best that can be done
// is to just save the value.
t[h[u]]=i;// The inner call to setData has already traversed through the remainder
// of the source and has set the data, thus we can exit here
return}a&&(// Function call
h[u]=h[u].replace(aA,""),t=t[h[u]](i)),(null===t[h[u]]||void 0===t[h[u]])&&(t[h[u]]={}),t=t[h[u]]}// Last item in the input - i.e, the actual set
c.match(aA)?t=t[c.replace(aA,"")](i):// and assign the value. If it isn't used, then we get the result we want anyway
t[c.replace(aM,"")]=i};return function(i,n){return e(i,n,t)}},/**
	 * Create a function that will read nested objects from arrays, based on JSON notation
	 * @param {*} source JSON notation string
	 * @returns Value read
	 */get:function(t){if(rJ.isPlainObject(t)){// Build an object of get functions, and wrap them in a single call
var e={};return rJ.each(t,function(t,i){i&&(e[t]=rG.util.get(i))}),function(t,i,n,r){var a=e[i]||e._;return void 0!==a?a(t,i,n,r):t}}if(null===t)return function(t){return t};if("function"==typeof t)return function(e,i,n,r){return t(e,i,n,r)};if("string"!=typeof t||-1===t.indexOf(".")&&-1===t.indexOf("[")&&-1===t.indexOf("("))return function(e,i){return e[t]};/* If there is a . in the source string then the data source is in a
			 * nested object so we loop over the data for each level to get the next
			 * level down. On each loop we test for undefined, and if found immediately
			 * return. This allows entire objects to be missing and sDefaultContent to
			 * be used if defined, rather than throwing an error
			 */var i=function(t,e,n){var r,a,o,s;if(""!==n)for(var l=aP(n),h=0,c=l.length;h<c;h++){if(// Check if we are dealing with special notation
r=l[h].match(aM),a=l[h].match(aA),r){// Traverse each entry in the array getting the properties requested
if(// Array notation
l[h]=l[h].replace(aM,""),""!==l[h]&&(t=t[l[h]]),o=[],// Get the remainder of the nested object to get
l.splice(0,h+1),s=l.join("."),Array.isArray(t))for(var u=0,d=t.length;u<d;u++)o.push(i(t[u],e,s));// If a string is given in between the array notation indicators, that
// is used to join the strings together, otherwise an array is returned
var f=r[0].substring(1,r[0].length-1);t=""===f?o:o.join(f);break}if(a){// Function call
l[h]=l[h].replace(aA,""),t=t[l[h]]();continue}if(null===t||null===t[l[h]])return null;if(void 0===t||void 0===t[l[h]])return;t=t[l[h]]}return t};return function(e,n){return i(e,n,t)}}};/**
 * Map one parameter onto another
 *  @param {object} o Object to map
 *  @param {*} knew The new parameter name
 *  @param {*} old The old parameter name
 */var ac=function(t,e,i){void 0!==t[e]&&(t[i]=t[e])};/**
 * Provide backwards compatibility for the main DT options. Note that the new
 * options are mapped onto the old parameters, so this is an external interface
 * change only.
 *  @param {object} init Object to map
 */function au(t){ac(t,"ordering","bSort"),ac(t,"orderMulti","bSortMulti"),ac(t,"orderClasses","bSortClasses"),ac(t,"orderCellsTop","bSortCellsTop"),ac(t,"order","aaSorting"),ac(t,"orderFixed","aaSortingFixed"),ac(t,"paging","bPaginate"),ac(t,"pagingType","sPaginationType"),ac(t,"pageLength","iDisplayLength"),ac(t,"searching","bFilter"),"boolean"==typeof t.sScrollX&&(t.sScrollX=t.sScrollX?"100%":""),"boolean"==typeof t.scrollX&&(t.scrollX=t.scrollX?"100%":"");// Column search objects are in an array, so it needs to be converted
// element by element
var e=t.aoSearchCols;if(e)for(var i=0,n=e.length;i<n;i++)e[i]&&al(rG.models.oSearch,e[i])}/**
 * Provide backwards compatibility for column options. Note that the new options
 * are mapped onto the old parameters, so this is an external interface change
 * only.
 *  @param {object} init Object to map
 */function ad(t){ac(t,"orderable","bSortable"),ac(t,"orderData","aDataSort"),ac(t,"orderSequence","asSorting"),ac(t,"orderDataType","sortDataType");// orderData can be given as an integer
var e=t.aDataSort;"number"!=typeof e||Array.isArray(e)||(t.aDataSort=[e])}/**
 * Browser feature detection for capabilities, quirks
 *  @param {object} settings dataTables settings object
 *  @memberof DataTable#oApi
 */function af(t){// We don't need to do this every time DataTables is constructed, the values
// calculated are specific to the browser and OS configuration which we
// don't expect to change between initialisations
if(!rG.__browser){var e={};rG.__browser=e;// Scrolling feature / quirks detection
var i=rJ("<div/>").css({position:"fixed",top:0,left:-1*rJ(window).scrollLeft(),height:1,width:1,overflow:"hidden"}).append(rJ("<div/>").css({position:"absolute",top:1,left:1,width:100,overflow:"scroll"}).append(rJ("<div/>").css({width:"100%",height:10}))).appendTo("body"),n=i.children(),r=n.children();// Numbers below, in order, are:
// inner.offsetWidth, inner.clientWidth, outer.offsetWidth, outer.clientWidth
//
// IE6 XP:                           100 100 100  83
// IE7 Vista:                        100 100 100  83
// IE 8+ Windows:                     83  83 100  83
// Evergreen Windows:                 83  83 100  83
// Evergreen Mac with scrollbars:     85  85 100  85
// Evergreen Mac without scrollbars: 100 100 100 100
// Get scrollbar width
e.barWidth=n[0].offsetWidth-n[0].clientWidth,// IE6/7 will oversize a width 100% element inside a scrolling element, to
// include the width of the scrollbar, while other browsers ensure the inner
// element is contained without forcing scrolling
e.bScrollOversize=100===r[0].offsetWidth&&100!==n[0].clientWidth,// In rtl text layout, some browsers (most, but not all) will place the
// scrollbar on the left, rather than the right.
e.bScrollbarLeft=1!==Math.round(r.offset().left),// IE8- don't provide height and width for getBoundingClientRect
e.bBounding=!!i[0].getBoundingClientRect().width,i.remove()}rJ.extend(t.oBrowser,rG.__browser),t.oScroll.iBarWidth=rG.__browser.barWidth}/**
 * Array.prototype reduce[Right] method, used for browsers which don't support
 * JS 1.6. Done this way to reduce code size, since we iterate either way
 *  @param {object} settings dataTables settings object
 *  @memberof DataTable#oApi
 */function ap(t,e,i,n,r,a){var o,s=n,l=!1;for(void 0!==i&&(o=i,l=!0);s!==r;)t.hasOwnProperty(s)&&(o=l?e(o,t[s],s,t):t[s],l=!0,s+=a);return o}/**
 * Add a column to the list used for the table with default values
 *  @param {object} oSettings dataTables settings object
 *  @param {node} nTh The th element for this column
 *  @memberof DataTable#oApi
 */function ag(t,e){// Add column to aoColumns array
var i=rG.defaults.column,n=t.aoColumns.length,r=rJ.extend({},rG.models.oColumn,i,{nTh:e||document.createElement("th"),sTitle:i.sTitle?i.sTitle:e?e.innerHTML:"",aDataSort:i.aDataSort?i.aDataSort:[n],mData:i.mData?i.mData:n,idx:n});t.aoColumns.push(r);// Add search object for column specific search. Note that the `searchCols[ iCol ]`
// passed into extend can be undefined. This allows the user to give a default
// with only some of the parameters defined, and also not give a default
var a=t.aoPreSearchCols;a[n]=rJ.extend({},rG.models.oSearch,a[n]),// Use the default column options function to initialise classes etc
am(t,n,rJ(e).data())}/**
 * Apply options for a column
 *  @param {object} oSettings dataTables settings object
 *  @param {int} iCol column index to consider
 *  @param {object} oOptions object with sType, bVisible and bSearchable etc
 *  @memberof DataTable#oApi
 */function am(t,e,i){var n=t.aoColumns[e],r=t.oClasses,a=rJ(n.nTh);// Try to get width information from the DOM. We can't get it from CSS
// as we'd need to parse the CSS stylesheet. `width` option can override
if(!n.sWidthOrig){// Width attribute
n.sWidthOrig=a.attr("width")||null;// Style attribute
var o=(a.attr("style")||"").match(/width:\s*(\d+[pxem%]+)/);o&&(n.sWidthOrig=o[1])}/* User specified column options */if(null!=i){// Backwards compatibility
ad(i),// Map camel case parameters to their Hungarian counterparts
al(rG.defaults.column,i,!0),void 0===i.mDataProp||i.mData||(i.mData=i.mDataProp),i.sType&&(n._sManualType=i.sType),i.className&&!i.sClass&&(i.sClass=i.className),i.sClass&&a.addClass(i.sClass);var s=n.sClass;rJ.extend(n,i),oI(n,i,"sWidth","sWidthOrig"),s!==n.sClass&&(n.sClass=s+" "+n.sClass),void 0!==i.iDataSort&&(n.aDataSort=[i.iDataSort]),oI(n,i,"aDataSort"),n.ariaTitle||(n.ariaTitle=a.attr("aria-label"))}/* Cache the data get and set functions for speed */var l=n.mData,h=aL(l),c=n.mRender?aL(n.mRender):null,u=function(t){return"string"==typeof t&&-1!==t.indexOf("@")};n._bAttrSrc=rJ.isPlainObject(l)&&(u(l.sort)||u(l.type)||u(l.filter)),n._setter=null,n.fnGetData=function(t,e,i){var n=h(t,e,void 0,i);return c&&e?c(n,e,t,i):n},n.fnSetData=function(t,e,i){return aE(l)(t,e,i)},"number"==typeof l||n._isArrayHost||(t._rowReadObject=!0),t.oFeatures.bSort||(n.bSortable=!1,a.addClass(r.sSortableNone));/* Check that the class assignment is correct for sorting */var d=-1!==rJ.inArray("asc",n.asSorting),f=-1!==rJ.inArray("desc",n.asSorting);n.bSortable&&(d||f)?d&&!f?(n.sSortingClass=r.sSortableAsc,n.sSortingClassJUI=r.sSortJUIAscAllowed):!d&&f?(n.sSortingClass=r.sSortableDesc,n.sSortingClassJUI=r.sSortJUIDescAllowed):(n.sSortingClass=r.sSortable,n.sSortingClassJUI=r.sSortJUI):(n.sSortingClass=r.sSortableNone,n.sSortingClassJUI="")}/**
 * Adjust the table column widths for new data. Note: you would probably want to
 * do a redraw after calling this function!
 *  @param {object} settings dataTables settings object
 *  @memberof DataTable#oApi
 */function ab(t){/* Not interested in doing column width calculation if auto-width is disabled */if(!1!==t.oFeatures.bAutoWidth){var e=t.aoColumns;og(t);for(var i=0,n=e.length;i<n;i++)e[i].nTh.style.width=e[i].sWidth}var r=t.oScroll;(""!==r.sY||""!==r.sX)&&od(t),oj(t,null,"column-sizing",[t])}/**
 * Convert the index of a visible column to the index in the data array (take account
 * of hidden columns)
 *  @param {object} oSettings dataTables settings object
 *  @param {int} iMatch Visible column index to lookup
 *  @returns {int} i the data index
 *  @memberof DataTable#oApi
 */function av(t,e){var i=a_(t,"bVisible");return"number"==typeof i[e]?i[e]:null}/**
 * Convert the index of an index in the data array and convert it to the visible
 *   column index (take account of hidden columns)
 *  @param {int} iMatch Column index to lookup
 *  @param {object} oSettings dataTables settings object
 *  @returns {int} i the data index
 *  @memberof DataTable#oApi
 */function ay(t,e){var i=a_(t,"bVisible"),n=rJ.inArray(e,i);return -1!==n?n:null}/**
 * Get the number of visible columns
 *  @param {object} oSettings dataTables settings object
 *  @returns {int} i the number of visible columns
 *  @memberof DataTable#oApi
 */function ax(t){var e=0;return(// No reduce in IE8, use a loop for now
rJ.each(t.aoColumns,function(t,i){i.bVisible&&"none"!==rJ(i.nTh).css("display")&&e++}),e)}/**
 * Get an array of column indexes that match a given property
 *  @param {object} oSettings dataTables settings object
 *  @param {string} sParam Parameter in aoColumns to look for - typically
 *    bVisible or bSearchable
 *  @returns {array} Array of indexes with matched properties
 *  @memberof DataTable#oApi
 */function a_(t,e){var i=[];return rJ.map(t.aoColumns,function(t,n){t[e]&&i.push(n)}),i}/**
 * Calculate the 'type' of a column
 *  @param {object} settings dataTables settings object
 *  @memberof DataTable#oApi
 */function aw(t){var e,i,n,r,a,o,s,l,h,c=t.aoColumns,u=t.aoData,d=rG.ext.type.detect;// For each column, spin over the 
for(e=0,i=c.length;e<i;e++)if(s=c[e],h=[],!s.sType&&s._sManualType)s.sType=s._sManualType;else if(!s.sType){for(n=0,r=d.length;n<r;n++){for(a=0,o=u.length;a<o&&(void 0===h[a]&&(h[a]=aT(t,a,e,"type")),((l=d[n](h[a],t))||n===d.length-1)&&("html"!==l||r5(h[a])));a++);// Type is valid for all data points in the column - use this
// type
if(l){s.sType=l;break}}// Fall back - if no type was detected, always use string
s.sType||(s.sType="string")}}/**
 * Take the column definitions and static columns arrays and calculate how
 * they relate to column indexes. The callback function will then apply the
 * definition found for a column to a suitable configuration object.
 *  @param {object} oSettings dataTables settings object
 *  @param {array} aoColDefs The aoColumnDefs array that is to be applied
 *  @param {array} aoCols The aoColumns array that defines columns individually
 *  @param {function} fn Callback function - takes two parameters, the calculated
 *    column index and the definition for that column.
 *  @memberof DataTable#oApi
 */function aS(t,e,i,n){var r,a,o,s,l,h,c,u=t.aoColumns;// Column definitions with aTargets
if(e)/* Loop over the definitions array - loop in reverse so first instance has priority */for(r=e.length-1;r>=0;r--){/* Each definition can target multiple columns, as it is an array */var d=void 0!==(c=e[r]).target?c.target:void 0!==c.targets?c.targets:c.aTargets;for(Array.isArray(d)||(d=[d]),o=0,s=d.length;o<s;o++)if("number"==typeof d[o]&&d[o]>=0){/* Add columns that we don't yet know about */for(;u.length<=d[o];)ag(t);/* Integer, basic index */n(d[o],c)}else if("number"==typeof d[o]&&d[o]<0)/* Negative integer, right to left column counting */n(u.length+d[o],c);else if("string"==typeof d[o])/* Class name matching on TH element */for(l=0,h=u.length;l<h;l++)("_all"==d[o]||rJ(u[l].nTh).hasClass(d[o]))&&n(l,c)}// Statically defined columns array
if(i)for(r=0,a=i.length;r<a;r++)n(r,i[r])}/**
 * Add a data array to the table, creating DOM node etc. This is the parallel to
 * _fnGatherData, but for adding rows from a Javascript source, rather than a
 * DOM source.
 *  @param {object} oSettings dataTables settings object
 *  @param {array} aData data array to be added
 *  @param {node} [nTr] TR element to add to the table - optional. If not given,
 *    DataTables will create a row automatically
 *  @param {array} [anTds] Array of TD|TH elements for the row - must be given
 *    if nTr is.
 *  @returns {int} >=0 if successful (index of new aoData entry), -1 if failed
 *  @memberof DataTable#oApi
 */function aD(t,e,i,n){/* Create the object for storing information about this new row */var r=t.aoData.length,a=rJ.extend(!0,{},rG.models.oRow,{src:i?"dom":"data",idx:r});a._aData=e,t.aoData.push(a);// Invalidate the column types as the new data needs to be revalidated
for(var o=t.aoColumns,s=0,l=o.length;s<l;s++)o[s].sType=null;/* Add to the display array */t.aiDisplayMaster.push(r);var h=t.rowIdFn(e);return void 0!==h&&(t.aIds[h]=a),(i||!t.oFeatures.bDeferRender)&&aN(t,r,i,n),r}/**
 * Add one or more TR elements to the table. Generally we'd expect to
 * use this for reading data from a DOM sourced table, but it could be
 * used for an TR element. Note that if a TR is given, it is used (i.e.
 * it is not cloned).
 *  @param {object} settings dataTables settings object
 *  @param {array|node|jQuery} trs The TR element(s) to add to the table
 *  @returns {array} Array of indexes for the added rows
 *  @memberof DataTable#oApi
 */function aC(t,e){var i;return e instanceof rJ||(e=rJ(e)),e.map(function(e,n){return i=aj(t,n),aD(t,i.data,n,i.cells)})}/**
 * Get the data for a given cell from the internal cache, taking into account data mapping
 *  @param {object} settings dataTables settings object
 *  @param {int} rowIdx aoData row id
 *  @param {int} colIdx Column index
 *  @param {string} type data get type ('display', 'type' 'filter|search' 'sort|order')
 *  @returns {*} Cell data
 *  @memberof DataTable#oApi
 */function aT(t,e,i,n){"search"===n?n="filter":"order"===n&&(n="sort");var r=t.iDraw,a=t.aoColumns[i],o=t.aoData[e]._aData,s=a.sDefaultContent,l=a.fnGetData(o,n,{settings:t,row:e,col:i});if(void 0===l)return t.iDrawError!=r&&null===s&&(oE(t,0,"Requested unknown parameter "+("function"==typeof a.mData?"{function}":"'"+a.mData+"'")+" for row "+e+", column "+i,4),t.iDrawError=r),s;// When the data source is null and a specific data type is requested (i.e.
// not the original data), we can use default column data
if((l===o||null===l)&&null!==s&&void 0!==n)l=s;else if("function"==typeof l)// executing in the scope of the data object (for instances)
return l.call(o);if(null===l&&"display"===n)return"";if("filter"===n){var h=rG.ext.type.search;h[a.sType]&&(l=h[a.sType](l))}return l}/**
 * Set the value for a specific cell, into the internal data cache
 *  @param {object} settings dataTables settings object
 *  @param {int} rowIdx aoData row id
 *  @param {int} colIdx Column index
 *  @param {*} val Value to set
 *  @memberof DataTable#oApi
 */function ak(t,e,i,n){var r=t.aoColumns[i],a=t.aoData[e]._aData;r.fnSetData(a,n,{settings:t,row:e,col:i})}// Private variable that is used to match action syntax in the data property object
var aM=/\[.*?\]$/,aA=/\(\)$/;/**
 * Split string on periods, taking into account escaped periods
 * @param  {string} str String to split
 * @return {array} Split string
 */function aP(t){return rJ.map(t.match(/(\\.|[^\.])+/g)||[""],function(t){return t.replace(/\\\./g,".")})}/**
 * Return a function that can be used to get data from a source object, taking
 * into account the ability to use nested objects as a source
 *  @param {string|int|function} mSource The data source for the object
 *  @returns {function} Data get function
 *  @memberof DataTable#oApi
 */var aL=rG.util.get,aE=rG.util.set;/**
 * Return an array with the full table data
 *  @param {object} oSettings dataTables settings object
 *  @returns array {array} aData Master data array
 *  @memberof DataTable#oApi
 */function aI(t){return r9(t.aoData,"_aData")}/**
 * Nuke the table
 *  @param {object} oSettings dataTables settings object
 *  @memberof DataTable#oApi
 */function aO(t){t.aoData.length=0,t.aiDisplayMaster.length=0,t.aiDisplay.length=0,t.aIds={}}/**
 * Take an array of integers (index array) and remove a target integer (value - not
 * the key!)
 *  @param {array} a Index array to target
 *  @param {int} iTarget value to find
 *  @memberof DataTable#oApi
 */function aR(t,e,i){for(var n=-1,r=0,a=t.length;r<a;r++)t[r]==e?n=r:t[r]>e&&t[r]--;-1!=n&&void 0===i&&t.splice(n,1)}/**
 * Mark cached data as invalid such that a re-read of the data will occur when
 * the cached data is next requested. Also update from the data source object.
 *
 * @param {object} settings DataTables settings object
 * @param {int}    rowIdx   Row index to invalidate
 * @param {string} [src]    Source to invalidate from: undefined, 'auto', 'dom'
 *     or 'data'
 * @param {int}    [colIdx] Column index to invalidate. If undefined the whole
 *     row will be invalidated
 * @memberof DataTable#oApi
 *
 * @todo For the modularisation of v1.11 this will need to become a callback, so
 *   the sort and filter methods can subscribe to it. That will required
 *   initialisation options for sorting, which is why it is not already baked in
 */function aF(t,e,i,n){var r,a,o=t.aoData[e],s=function(i,n){// This is very frustrating, but in IE if you just write directly
// to innerHTML, and elements that are overwritten are GC'ed,
// even if there is a reference to them elsewhere
for(;i.childNodes.length;)i.removeChild(i.firstChild);i.innerHTML=aT(t,e,n,"display")};// Are we reading last data from DOM or the data object?
if("dom"!==i&&(i&&"auto"!==i||"dom"!==o.src)){// Reading from data object, update the DOM
var l=o.anCells;if(l){if(void 0!==n)s(l[n],n);else for(r=0,a=l.length;r<a;r++)s(l[r],r)}}else o._aData=aj(t,o,n,void 0===n?void 0:o._aData).data;// For both row and cell invalidation, the cached data for sorting and
// filtering is nulled out
o._aSortData=null,o._aFilterData=null;// Invalidate the type for a specific column (if given) or all columns since
// the data might have changed
var h=t.aoColumns;if(void 0!==n)h[n].sType=null;else{for(r=0,a=h.length;r<a;r++)h[r].sType=null;// Update DataTables special `DT_*` attributes for the row
aH(t,o)}}/**
 * Build a data source object from an HTML row, reading the contents of the
 * cells that are in the row.
 *
 * @param {object} settings DataTables settings object
 * @param {node|object} TR element from which to read data or existing row
 *   object from which to re-read the data from the cells
 * @param {int} [colIdx] Optional column index
 * @param {array|object} [d] Data source object. If `colIdx` is given then this
 *   parameter should also be given and will be used to write the data into.
 *   Only the column in question will be written
 * @returns {object} Object with two parameters: `data` the data read, in
 *   document order, and `cells` and array of nodes (they can be useful to the
 *   caller, so rather than needing a second traversal to get them, just return
 *   them from here).
 * @memberof DataTable#oApi
 */function aj(t,e,i,n){var r,a,o,s=[],l=e.firstChild,h=0,c=t.aoColumns,u=t._rowReadObject;// Allow the data object to be passed in, or construct
n=void 0!==n?n:u?{}:[];var d=function(t,e){if("string"==typeof t){var i=t.indexOf("@");if(-1!==i){var r=t.substring(i+1);aE(t)(n,e.getAttribute(r))}}},f=function(t){(void 0===i||i===h)&&(a=c[h],o=t.innerHTML.trim(),a&&a._bAttrSrc?(aE(a.mData._)(n,o),d(a.mData.sort,t),d(a.mData.type,t),d(a.mData.filter,t)):u?(a._setter||(a._setter=aE(a.mData)),a._setter(n,o)):n[h]=o),h++};if(l)for(;l;)("TD"==(r=l.nodeName.toUpperCase())||"TH"==r)&&(f(l),s.push(l)),l=l.nextSibling;else{// Existing row object passed in
s=e.anCells;for(var p=0,g=s.length;p<g;p++)f(s[p])}// Read the ID from the DOM if present
var m=e.firstChild?e:e.nTr;if(m){var b=m.getAttribute("id");b&&aE(t.rowId)(n,b)}return{data:n,cells:s}}/**
 * Create a new TR element (and it's TD children) for a row
 *  @param {object} oSettings dataTables settings object
 *  @param {int} iRow Row to consider
 *  @param {node} [nTrIn] TR element to add to the table - optional. If not given,
 *    DataTables will create a row automatically
 *  @param {array} [anTds] Array of TD|TH elements for the row - must be given
 *    if nTr is.
 *  @memberof DataTable#oApi
 */function aN(t,e,i,n){var r,a,o,s,l,h,c=t.aoData[e],u=c._aData,d=[];if(null===c.nTr){/* Process each column */for(r=i||document.createElement("tr"),c.nTr=r,c.anCells=d,/* Use a private property on the node to allow reserve mapping from the node
		 * to the aoData array for fast look up
		 */r._DT_RowIndex=e,/* Special parameters can be given by the data source to be used on the row */aH(t,c),s=0,l=t.aoColumns.length;s<l;s++)o=t.aoColumns[s],(a=(h=!i)?document.createElement(o.sCellType):n[s])||oE(t,0,"Incorrect column count",18),a._DT_CellIndex={row:e,column:s},d.push(a),(h||(o.mRender||o.mData!==s)&&(!rJ.isPlainObject(o.mData)||o.mData._!==s+".display"))&&(a.innerHTML=aT(t,e,s,"display")),o.sClass&&(a.className+=" "+o.sClass),o.bVisible&&!i?r.appendChild(a):!o.bVisible&&i&&a.parentNode.removeChild(a),o.fnCreatedCell&&o.fnCreatedCell.call(t.oInstance,a,aT(t,e,s),u,e,s);oj(t,"aoRowCreatedCallback",null,[r,u,e,d])}}/**
 * Add attributes to a row based on the special `DT_*` parameters in a data
 * source object.
 *  @param {object} settings DataTables settings object
 *  @param {object} DataTables row object for the row to be modified
 *  @memberof DataTable#oApi
 */function aH(t,e){var i=e.nTr,n=e._aData;if(i){var r=t.rowIdFn(n);if(r&&(i.id=r),n.DT_RowClass){// Remove any classes added by DT_RowClass before
var a=n.DT_RowClass.split(" ");e.__rowc=e.__rowc?ar(e.__rowc.concat(a)):a,rJ(i).removeClass(e.__rowc.join(" ")).addClass(n.DT_RowClass)}n.DT_RowAttr&&rJ(i).attr(n.DT_RowAttr),n.DT_RowData&&rJ(i).data(n.DT_RowData)}}/**
 * Create the HTML header for the table
 *  @param {object} oSettings dataTables settings object
 *  @memberof DataTable#oApi
 */function aW(t){var e,i,n,r,a,o=t.nTHead,s=t.nTFoot,l=0===rJ("th, td",o).length,h=t.oClasses,c=t.aoColumns;for(l&&(r=rJ("<tr/>").appendTo(o)),e=0,i=c.length;e<i;e++)a=c[e],n=rJ(a.nTh).addClass(a.sClass),l&&n.appendTo(r),t.oFeatures.bSort&&(n.addClass(a.sSortingClass),!1!==a.bSortable&&(n.attr("tabindex",t.iTabIndex).attr("aria-controls",t.sTableId),oC(t,a.nTh,e))),a.sTitle!=n[0].innerHTML&&n.html(a.sTitle),oH(t,"header")(t,n,a,h);// Cache the footer cells. Note that we only take the cells from the first
// row in the footer. If there is more than one row the user wants to
// interact with, they need to use the table().foot() method. Note also this
// allows cells to be used for multiple columns using colspan
if(l&&aq(t.aoHeader,o),/* Deal with the footer - add classes if required */rJ(o).children("tr").children("th, td").addClass(h.sHeaderTH),rJ(s).children("tr").children("th, td").addClass(h.sFooterTH),null!==s){var u=t.aoFooter[0];for(e=0,i=u.length;e<i;e++)(a=c[e])?(a.nTf=u[e].cell,a.sClass&&rJ(a.nTf).addClass(a.sClass)):oE(t,0,"Incorrect column count",18)}}/**
 * Draw the header (or footer) element based on the column visibility states. The
 * methodology here is to use the layout array from _fnDetectHeader, modified for
 * the instantaneous column visibility, to construct the new layout. The grid is
 * traversed over cell at a time in a rows x columns grid fashion, although each
 * cell insert can cover multiple elements in the grid - which is tracks using the
 * aApplied array. Cell inserts in the grid will only occur where there isn't
 * already a cell in that position.
 *  @param {object} oSettings dataTables settings object
 *  @param array {objects} aoSource Layout array from _fnDetectHeader
 *  @param {boolean} [bIncludeHidden=false] If true then include the hidden columns in the calc,
 *  @memberof DataTable#oApi
 */function aB(t,e,i){var n,r,a,o,s,l,h,c,u,d=[],f=[],p=t.aoColumns.length;if(e){/* Make a copy of the master layout array, but without the visible columns in it */for(void 0===i&&(i=!1),n=0,r=e.length;n<r;n++){/* Remove any columns which are currently hidden */for(d[n]=e[n].slice(),d[n].nTr=e[n].nTr,a=p-1;a>=0;a--)t.aoColumns[a].bVisible||i||d[n].splice(a,1);/* Prep the applied array - it needs an element for each row */f.push([])}for(n=0,r=d.length;n<r;n++){/* All cells are going to be replaced, so empty out the row */if(h=d[n].nTr)for(;l=h.firstChild;)h.removeChild(l);for(a=0,o=d[n].length;a<o;a++)/* Check to see if there is already a cell (row/colspan) covering our target
			 * insert point. If there is, then there is nothing to do.
			 */if(c=1,u=1,void 0===f[n][a]){/* Expand the cell to cover as many rows as needed */for(h.appendChild(d[n][a].cell),f[n][a]=1;void 0!==d[n+c]&&d[n][a].cell==d[n+c][a].cell;)f[n+c][a]=1,c++;/* Expand the cell to cover as many columns as needed */for(;void 0!==d[n][a+u]&&d[n][a].cell==d[n][a+u].cell;){/* Must update the applied array over the rows for the columns */for(s=0;s<c;s++)f[n+s][a+u]=1;u++}/* Do the actual expansion in the DOM */rJ(d[n][a].cell).attr("rowspan",c).attr("colspan",u)}}}}/**
 * Insert the required TR nodes into the table for display
 *  @param {object} oSettings dataTables settings object
 *  @param ajaxComplete true after ajax call to complete rendering
 *  @memberof DataTable#oApi
 */function az(t,e){i="ssp"==oW(t),void 0!==(n=t.iInitDisplayStart)&&-1!==n&&(t._iDisplayStart=i?n:n>=t.fnRecordsDisplay()?0:n,t.iInitDisplayStart=-1);/* Provide a pre-callback function which can be used to cancel the draw is false is returned */var i,n,r=oj(t,"aoPreDrawCallback","preDraw",[t]);if(-1!==rJ.inArray(!1,r)){oc(t,!1);return}var a=[],o=0,s=t.asStripeClasses,l=s.length,h=t.oLanguage,c="ssp"==oW(t),u=t.aiDisplay,d=t._iDisplayStart,f=t.fnDisplayEnd();/* Server-side processing draw intercept */if(t.bDrawing=!0,t.bDeferLoading)t.bDeferLoading=!1,t.iDraw++,oc(t,!1);else if(c){if(!t.bDestroying&&!e){aY(t);return}}else t.iDraw++;if(0!==u.length)for(var p=c?0:d,g=c?t.aoData.length:f,m=p;m<g;m++){var b=u[m],v=t.aoData[b];null===v.nTr&&aN(t,b);var y=v.nTr;/* Remove the old striping classes and then add the new one */if(0!==l){var x=s[o%l];v._sRowStripe!=x&&(rJ(y).removeClass(v._sRowStripe).addClass(x),v._sRowStripe=x)}// Row callback functions - might want to manipulate the row
// iRowCount and j are not currently documented. Are they at all
// useful?
oj(t,"aoRowCallback",null,[y,v._aData,o,m,b]),a.push(y),o++}else{/* Table is empty - create a row with an empty message in it */var _=h.sZeroRecords;1==t.iDraw&&"ajax"==oW(t)?_=h.sLoadingRecords:h.sEmptyTable&&0===t.fnRecordsTotal()&&(_=h.sEmptyTable),a[0]=rJ("<tr/>",{class:l?s[0]:""}).append(rJ("<td />",{valign:"top",colSpan:ax(t),class:t.oClasses.sRowEmpty}).html(_))[0]}/* Header and footer callbacks */oj(t,"aoHeaderCallback","header",[rJ(t.nTHead).children("tr")[0],aI(t),d,f,u]),oj(t,"aoFooterCallback","footer",[rJ(t.nTFoot).children("tr")[0],aI(t),d,f,u]);var w=rJ(t.nTBody);w.children().detach(),w.append(rJ(a)),/* Call all required callback functions for the end of a draw */oj(t,"aoDrawCallback","draw",[t]),/* Draw is complete, sorting and filtering must be as well */t.bSorted=!1,t.bFiltered=!1,t.bDrawing=!1}/**
 * Redraw the table - taking account of the various features which are enabled
 *  @param {object} oSettings dataTables settings object
 *  @param {boolean} [holdPosition] Keep the current paging position. By default
 *    the paging is reset to the first page
 *  @memberof DataTable#oApi
 */function aV(t,e){var i=t.oFeatures,n=i.bSort,r=i.bFilter;n&&ow(t),r?aQ(t,t.oPreviousSearch):t.aiDisplay=t.aiDisplayMaster.slice(),!0!==e&&(t._iDisplayStart=0),// Let any modules know about the draw hold position state (used by
// scrolling internally)
t._drawHold=e,az(t),t._drawHold=!1}/**
 * Add the options to the page HTML for the table
 *  @param {object} oSettings dataTables settings object
 *  @memberof DataTable#oApi
 */function a$(t){var e,i,n,r,a,o,s=t.oClasses,l=rJ(t.nTable),h=rJ("<div/>").insertBefore(l),c=t.oFeatures,u=rJ("<div/>",{id:t.sTableId+"_wrapper",class:s.sWrapper+(t.nTFoot?"":" "+s.sNoFooter)});t.nHolding=h[0],t.nTableWrapper=u[0],t.nTableReinsertBefore=t.nTable.nextSibling;for(var d=t.sDom.split(""),f=0;f<d.length;f++){if(e=null,"<"==(i=d[f])){if(/* New container div */n=rJ("<div/>")[0],"'"==/* Check to see if we should append an id and/or a class name to the container */(r=d[f+1])||'"'==r){for(a="",o=2;d[f+o]!=r;)a+=d[f+o],o++;/* The attribute can be in the format of "#id.class", "#id" or "class" This logic
				 * breaks the string into parts and applies them as needed
				 */if("H"==a?a=s.sJUIHeader:"F"==a&&(a=s.sJUIFooter),-1!=a.indexOf(".")){var p=a.split(".");n.id=p[0].substr(1,p[0].length-1),n.className=p[1]}else"#"==a.charAt(0)?n.id=a.substr(1,a.length-1):n.className=a;f+=o}u.append(n),u=rJ(n)}else if(">"==i)/* End container div */u=u.parent();else if("l"==i&&c.bPaginate&&c.bLengthChange)/* Length */e=oo(t);else if("f"==i&&c.bFilter)/* Filter */e=aZ(t);else if("r"==i&&c.bProcessing)/* pRocessing */e=oh(t);else if("t"==i)/* Table */e=ou(t);else if("i"==i&&c.bInfo)/* Info */e=ot(t);else if("p"==i&&c.bPaginate)/* Pagination */e=os(t);else if(0!==rG.ext.feature.length){for(var g=rG.ext.feature,m=0,b=g.length;m<b;m++)if(i==g[m].cFeature){e=g[m].fnInit(t);break}}/* Add to the 2D features array */if(e){var v=t.aanFeatures;v[i]||(v[i]=[]),v[i].push(e),u.append(e)}}/* Built our DOM structure - replace the holding div with what we want */h.replaceWith(u),t.nHolding=null}/**
 * Use the DOM source to create up an array of header cells. The idea here is to
 * create a layout grid (array) of rows x columns, which contains a reference
 * to the cell that that point in the grid (regardless of col/rowspan), such that
 * any column / row could be removed and the new grid constructed
 *  @param array {object} aLayout Array to store the calculated layout in
 *  @param {node} nThead The header/footer element for the table
 *  @memberof DataTable#oApi
 */function aq(t,e){var i,n,r,a,o,s,l,h,c,u,d=rJ(e).children("tr");/* We know how many rows there are in the layout - so prep it */for(t.splice(0,t.length),r=0,s=d.length;r<s;r++)t.push([]);/* Calculate a layout array */for(r=0,s=d.length;r<s;r++)for(/* For every cell in the row... */n=(i=d[r]).firstChild;n;){if("TD"==n.nodeName.toUpperCase()||"TH"==n.nodeName.toUpperCase())/* If there is col / rowspan, copy the information into the layout grid */for(o=0,/* Get the col and rowspan attributes from the DOM and sanitise them */h=1*n.getAttribute("colspan"),c=1*n.getAttribute("rowspan"),h=h&&0!==h&&1!==h?h:1,c=c&&0!==c&&1!==c?c:1,/* There might be colspan cells already in this row, so shift our target
				 * accordingly
				 */l=function(t,e,i){for(var n=t[e];n[i];)i++;return i}(t,r,0),/* Cache calculation for unique columns */u=1===h;o<h;o++)for(a=0;a<c;a++)t[r+a][l+o]={cell:n,unique:u},t[r+a].nTr=i;n=n.nextSibling}}/**
 * Get an array of unique th elements, one for each column
 *  @param {object} oSettings dataTables settings object
 *  @param {node} nHeader automatically detect the layout from this node - optional
 *  @param {array} aLayout thead/tfoot layout from _fnDetectHeader - optional
 *  @returns array {node} aReturn list of unique th's
 *  @memberof DataTable#oApi
 */function aU(t,e,i){var n=[];!i&&(i=t.aoHeader,e&&aq(i=[],e));for(var r=0,a=i.length;r<a;r++)for(var o=0,s=i[r].length;o<s;o++)!i[r][o].unique||n[o]&&t.bSortCellsTop||(n[o]=i[r][o].cell);return n}/**
 * Create an Ajax call based on the table's settings, taking into account that
 * parameters can have multiple forms, and backwards compatibility.
 *
 * @param {object} oSettings dataTables settings object
 * @param {array} data Data to send to the server, required by
 *     DataTables - may be augmented by developer callbacks
 * @param {function} fn Callback function to run when data is obtained
 */function aX(t,e,i){// Convert to object based for 1.10+ if using the old array scheme which can
// come from server-side processing or serverParams
if(// Compatibility with 1.9-, allow fnServerData and event to manipulate
oj(t,"aoServerParams","serverParams",[e]),e&&Array.isArray(e)){var n,r={},a=/(.*?)\[\]$/;rJ.each(e,function(t,e){var i=e.name.match(a);if(i){// Support for arrays
var n=i[0];r[n]||(r[n]=[]),r[n].push(e.value)}else r[e.name]=e.value}),e=r}var o=t.ajax,s=t.oInstance,l=function(e){var n=t.jqXHR?t.jqXHR.status:null;(null===e||"number"==typeof n&&204==n)&&aK(t,e={},[]);var r=e.error||e.sError;r&&oE(t,0,r),t.json=e,oj(t,null,"xhr",[t,e,t.jqXHR]),i(e)};if(rJ.isPlainObject(o)&&o.data){var h="function"==typeof(n=o.data)?n(e,t):n;// an object object or array to merge
// If the function returned something, use that alone
e="function"==typeof n&&h?h:rJ.extend(!0,e,h),// Remove the data property as we've resolved it already and don't want
// jQuery to do it again (it is restored at the end of the function)
delete o.data}var c={data:e,success:l,dataType:"json",cache:!1,type:t.sServerMethod,error:function(e,i,n){var r=oj(t,null,"xhr",[t,null,t.jqXHR]);-1===rJ.inArray(!0,r)&&("parsererror"==i?oE(t,0,"Invalid JSON response",1):4===e.readyState&&oE(t,0,"Ajax error",7)),oc(t,!1)}};// Store the data submitted for the API
t.oAjaxData=e,// Allow plug-ins and external processes to modify the data
oj(t,null,"preXhr",[t,e]),t.fnServerData?t.fnServerData.call(s,t.sAjaxSource,rJ.map(e,function(t,e){return{name:e,value:t}}),l,t):t.sAjaxSource||"string"==typeof o?t.jqXHR=rJ.ajax(rJ.extend(c,{url:o||t.sAjaxSource})):"function"==typeof o?t.jqXHR=o.call(s,e,l,t):(// Object to extend the base settings
t.jqXHR=rJ.ajax(rJ.extend(c,o)),// Restore for next time around
o.data=n)}/**
 * Update the table using an Ajax call
 *  @param {object} settings dataTables settings object
 *  @returns {boolean} Block the table drawing or not
 *  @memberof DataTable#oApi
 */function aY(t){t.iDraw++,oc(t,!0);// Keep track of drawHold state to handle scrolling after the Ajax call
var e=t._drawHold;aX(t,aJ(t),function(i){t._drawHold=e,aG(t,i),t._drawHold=!1})}/**
 * Build up the parameters in an object needed for a server-side processing
 * request. Note that this is basically done twice, is different ways - a modern
 * method which is used by default in DataTables 1.10 which uses objects and
 * arrays, or the 1.9- method with is name / value pairs. 1.9 method is used if
 * the sAjaxSource option is used in the initialisation, or the legacyAjax
 * option is set.
 *  @param {object} oSettings dataTables settings object
 *  @returns {bool} block the table drawing or not
 *  @memberof DataTable#oApi
 */function aJ(t){var e,i,n,r,a=t.aoColumns,o=a.length,s=t.oFeatures,l=t.oPreviousSearch,h=t.aoPreSearchCols,c=[],u=o_(t),d=t._iDisplayStart,f=!1!==s.bPaginate?t._iDisplayLength:-1,p=function(t,e){c.push({name:t,value:e})};// DataTables 1.9- compatible method
p("sEcho",t.iDraw),p("iColumns",o),p("sColumns",r9(a,"sName").join(",")),p("iDisplayStart",d),p("iDisplayLength",f);// DataTables 1.10+ method
var g={draw:t.iDraw,columns:[],order:[],start:d,length:f,search:{value:l.sSearch,regex:l.bRegex}};for(e=0;e<o;e++)n=a[e],r=h[e],i="function"==typeof n.mData?"function":n.mData,g.columns.push({data:i,name:n.sName,searchable:n.bSearchable,orderable:n.bSortable,search:{value:r.sSearch,regex:r.bRegex}}),p("mDataProp_"+e,i),s.bFilter&&(p("sSearch_"+e,r.sSearch),p("bRegex_"+e,r.bRegex),p("bSearchable_"+e,n.bSearchable)),s.bSort&&p("bSortable_"+e,n.bSortable);s.bFilter&&(p("sSearch",l.sSearch),p("bRegex",l.bRegex)),s.bSort&&(rJ.each(u,function(t,e){g.order.push({column:e.col,dir:e.dir}),p("iSortCol_"+t,e.col),p("sSortDir_"+t,e.dir)}),p("iSortingCols",u.length));// If the legacy.ajax parameter is null, then we automatically decide which
// form to use, based on sAjaxSource
var m=rG.ext.legacy.ajax;return null===m?t.sAjaxSource?c:g:m?c:g}/**
 * Data the data from the server (nuking the old) and redraw the table
 *  @param {object} oSettings dataTables settings object
 *  @param {object} json json data return from the server.
 *  @param {string} json.sEcho Tracking flag for DataTables to match requests
 *  @param {int} json.iTotalRecords Number of records in the data set, not accounting for filtering
 *  @param {int} json.iTotalDisplayRecords Number of records in the data set, accounting for filtering
 *  @param {array} json.aaData The data to display on this page
 *  @param {string} [json.sColumns] Column ordering (sName, comma separated)
 *  @memberof DataTable#oApi
 */function aG(t,e){// v1.10 uses camelCase variables, while 1.9 uses Hungarian notation.
// Support both
var i=function(t,i){return void 0!==e[t]?e[t]:e[i]},n=aK(t,e),r=i("sEcho","draw"),a=i("iTotalRecords","recordsTotal"),o=i("iTotalDisplayRecords","recordsFiltered");if(void 0!==r){// Protect against out of sequence returns
if(1*r<t.iDraw)return;t.iDraw=1*r}n||(n=[]),aO(t),t._iRecordsTotal=parseInt(a,10),t._iRecordsDisplay=parseInt(o,10);for(var s=0,l=n.length;s<l;s++)aD(t,n[s]);t.aiDisplay=t.aiDisplayMaster.slice(),az(t,!0),t._bInitComplete||or(t,e),oc(t,!1)}/**
 * Get the data from the JSON data source to use for drawing a table. Using
 * `_fnGetObjectDataFn` allows the data to be sourced from a property of the
 * source object, or from a processing function.
 *  @param {object} oSettings dataTables settings object
 *  @param  {object} json Data source object / array from the server
 *  @return {array} Array of data to use
 */function aK(t,e,i){var n=rJ.isPlainObject(t.ajax)&&void 0!==t.ajax.dataSrc?t.ajax.dataSrc:t.sAjaxDataProp;// Compatibility with 1.9-.
if(!i)return"data"===n?e.aaData||e[n]:""!==n?aL(n)(e):e;// set
aE(n)(e,i)}/**
 * Generate the node required for filtering text
 *  @returns {node} Filter control element
 *  @param {object} oSettings dataTables settings object
 *  @memberof DataTable#oApi
 */function aZ(t){var e=t.oClasses,i=t.sTableId,n=t.oLanguage,r=t.oPreviousSearch,a=t.aanFeatures,o='<input type="search" class="'+e.sFilterInput+'"/>',s=n.sSearch;s=s.match(/_INPUT_/)?s.replace("_INPUT_",o):s+o;var l=rJ("<div/>",{id:a.f?null:i+"_filter",class:e.sFilter}).append(rJ("<label/>").append(s)),h=function(e){/* Update all other filter input elements for the new display */a.f;var i=this.value?this.value:"";// mental IE8 fix :-(
r.return&&"Enter"!==e.key||i==r.sSearch||(aQ(t,{sSearch:i,bRegex:r.bRegex,bSmart:r.bSmart,bCaseInsensitive:r.bCaseInsensitive,return:r.return}),// Need to redraw, without resorting
t._iDisplayStart=0,az(t))},c=null!==t.searchDelay?t.searchDelay:"ssp"===oW(t)?400:0,u=rJ("input",l).val(r.sSearch).attr("placeholder",n.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT",c?om(h,c):h).on("mouseup.DT",function(t){// Edge fix! Edge 17 does not trigger anything other than mouse events when clicking
// on the clear icon (Edge bug 17584515). This is safe in other browsers as `searchFn`
// checks the value to see if it has changed. In other browsers it won't have.
setTimeout(function(){h.call(u[0],t)},10)}).on("keypress.DT",function(t){/* Prevent form submission */if(13==t.keyCode)return!1}).attr("aria-controls",i);return(// Update the input elements whenever the table is filtered
rJ(t.nTable).on("search.dt.DT",function(e,i){if(t===i)// inside an iframe or frame...
try{u[0]!==document.activeElement&&u.val(r.sSearch)}catch(t){}}),l[0])}/**
 * Filter the table using both the global filter and column based filtering
 *  @param {object} oSettings dataTables settings object
 *  @param {object} oSearch search information
 *  @param {int} [iForce] force a research of the master array (1) or not (undefined or 0)
 *  @memberof DataTable#oApi
 */function aQ(t,e,i){var n=t.oPreviousSearch,r=t.aoPreSearchCols,a=function(t){/* Save the filtering values */n.sSearch=t.sSearch,n.bRegex=t.bRegex,n.bSmart=t.bSmart,n.bCaseInsensitive=t.bCaseInsensitive,n.return=t.return},o=function(t){// Backwards compatibility with the bEscapeRegex option
return void 0!==t.bEscapeRegex?!t.bEscapeRegex:t.bRegex};/* In server-side processing all filtering is done by the server, so no point hanging around here */if(// Resolve any column types that are unknown due to addition or invalidation
// @todo As per sort - can this be moved into an event handler?
aw(t),"ssp"!=oW(t)){/* Global filter */a2(t,e.sSearch,i,o(e),e.bSmart,e.bCaseInsensitive),a(e);/* Now do the individual column filter */for(var s=0;s<r.length;s++)a1(t,r[s].sSearch,s,o(r[s]),r[s].bSmart,r[s].bCaseInsensitive);/* Custom filtering */a0(t)}else a(e);/* Tell the draw function we have been filtering */t.bFiltered=!0,oj(t,null,"search",[t])}/**
 * Apply custom filtering functions
 *  @param {object} oSettings dataTables settings object
 *  @memberof DataTable#oApi
 */function a0(t){for(var e,i,n=rG.ext.search,r=t.aiDisplay,a=0,o=n.length;a<o;a++){// Loop over each row and see if it should be included
for(var s=[],l=0,h=r.length;l<h;l++)i=r[l],e=t.aoData[i],n[a](t,e._aFilterData,i,e._aData,l)&&s.push(i);// So the array reference doesn't break set the results into the
// existing array
r.length=0,rJ.merge(r,s)}}/**
 * Filter the table on a per-column basis
 *  @param {object} oSettings dataTables settings object
 *  @param {string} sInput string to filter on
 *  @param {int} iColumn column to filter
 *  @param {bool} bRegex treat search string as a regular expression or not
 *  @param {bool} bSmart use smart filtering or not
 *  @param {bool} bCaseInsensitive Do case insensitive matching or not
 *  @memberof DataTable#oApi
 */function a1(t,e,i,n,r,a){if(""!==e){for(var o,s=[],l=t.aiDisplay,h=a5(e,n,r,a),c=0;c<l.length;c++)o=t.aoData[l[c]]._aFilterData[i],h.test(o)&&s.push(l[c]);t.aiDisplay=s}}/**
 * Filter the data table based on user input and draw the table
 *  @param {object} settings dataTables settings object
 *  @param {string} input string to filter on
 *  @param {int} force optional - force a research of the master array (1) or not (undefined or 0)
 *  @param {bool} regex treat as a regular expression or not
 *  @param {bool} smart perform smart filtering or not
 *  @param {bool} caseInsensitive Do case insensitive matching or not
 *  @memberof DataTable#oApi
 */function a2(t,e,i,n,r,a){var o,s,l,h=a5(e,n,r,a),c=t.oPreviousSearch.sSearch,u=t.aiDisplayMaster,d=[];// If the input is blank - we just want the full data set
if(0!==rG.ext.search.length&&(i=!0),// Check if any of the rows were invalidated
s=a6(t),e.length<=0)t.aiDisplay=u.slice();else{for((s||i||n||c.length>e.length||0!==e.indexOf(c)||t.bSorted// On resort, the display master needs to be
)&&(t.aiDisplay=u.slice()),// Search the display array
o=t.aiDisplay,l=0;l<o.length;l++)h.test(t.aoData[o[l]]._sFilterRow)&&d.push(o[l]);t.aiDisplay=d}}/**
 * Build a regular expression object suitable for searching a table
 *  @param {string} sSearch string to search for
 *  @param {bool} bRegex treat as a regular expression or not
 *  @param {bool} bSmart perform smart filtering or not
 *  @param {bool} bCaseInsensitive Do case insensitive matching or not
 *  @returns {RegExp} constructed object
 *  @memberof DataTable#oApi
 */function a5(t,e,i,n){return t=e?t:a3(t),i&&(t="^(?=.*?"+rJ.map(t.match(/["\u201C][^"\u201D]+["\u201D]|[^ ]+/g)||[""],function(t){if('"'===t.charAt(0)){var e=t.match(/^"(.*)"$/);t=e?e[1]:t}else if("“"===t.charAt(0)){var e=t.match(/^\u201C(.*)\u201D$/);t=e?e[1]:t}return t.replace('"',"")}).join(")(?=.*?")+").*$"),new RegExp(t,n?"i":"")}/**
 * Escape a string such that it can be used in a regular expression
 *  @param {string} sVal string to escape
 *  @returns {string} escaped string
 *  @memberof DataTable#oApi
 */var a3=rG.util.escapeRegex,a4=rJ("<div>")[0],a8=void 0!==a4.textContent;// Update the filtering data for each row if needed (by invalidation or first run)
function a6(t){var e,i,n,r,a,o,s,l=t.aoColumns,h=!1;for(e=0,n=t.aoData.length;e<n;e++)if(!(s=t.aoData[e])._aFilterData){for(i=0,a=[],r=l.length;i<r;i++)l[i].bSearchable?(null===(o=aT(t,e,i,"filter"))&&(o=""),"string"!=typeof o&&o.toString&&(o=o.toString())):o="",o.indexOf&&-1!==o.indexOf("&")&&(a4.innerHTML=o,o=a8?a4.textContent:a4.innerText),o.replace&&(o=o.replace(/[\r\n\u2028]/g,"")),a.push(o);s._aFilterData=a,s._sFilterRow=a.join("  "),h=!0}return h}/**
 * Convert from the internal Hungarian notation to camelCase for external
 * interaction
 *  @param {object} obj Object to convert
 *  @returns {object} Inverted object
 *  @memberof DataTable#oApi
 */function a9(t){return{search:t.sSearch,smart:t.bSmart,regex:t.bRegex,caseInsensitive:t.bCaseInsensitive}}/**
 * Convert from camelCase notation to the internal Hungarian. We could use the
 * Hungarian convert function here, but this is cleaner
 *  @param {object} obj Object to convert
 *  @returns {object} Inverted object
 *  @memberof DataTable#oApi
 */function a7(t){return{sSearch:t.search,bSmart:t.smart,bRegex:t.regex,bCaseInsensitive:t.caseInsensitive}}/**
 * Generate the node required for the info display
 *  @param {object} oSettings dataTables settings object
 *  @returns {node} Information element
 *  @memberof DataTable#oApi
 */function ot(t){var e=t.sTableId,i=t.aanFeatures.i,n=rJ("<div/>",{class:t.oClasses.sInfo,id:i?null:e+"_info"});return i||(// Update display on each draw
t.aoDrawCallback.push({fn:oe,sName:"information"}),n.attr("role","status").attr("aria-live","polite"),// Table is described by our info div
rJ(t.nTable).attr("aria-describedby",e+"_info")),n[0]}/**
 * Update the information elements in the display
 *  @param {object} settings dataTables settings object
 *  @memberof DataTable#oApi
 */function oe(t){/* Show information about the table */var e=t.aanFeatures.i;if(0!==e.length){var i=t.oLanguage,n=t._iDisplayStart+1,r=t.fnDisplayEnd(),a=t.fnRecordsTotal(),o=t.fnRecordsDisplay(),s=o?i.sInfo:i.sInfoEmpty;o!==a&&/* Record set after filtering */(s+=" "+i.sInfoFiltered),// Convert the macros
s+=i.sInfoPostFix,s=oi(t,s);var l=i.fnInfoCallback;null!==l&&(s=l.call(t.oInstance,t,n,r,a,o,s)),rJ(e).html(s)}}function oi(t,e){// When infinite scrolling, we are always starting at 1. _iDisplayStart is used only
// internally
var i=t.fnFormatNumber,n=t._iDisplayStart+1,r=t._iDisplayLength,a=t.fnRecordsDisplay(),o=-1===r;return e.replace(/_START_/g,i.call(t,n)).replace(/_END_/g,i.call(t,t.fnDisplayEnd())).replace(/_MAX_/g,i.call(t,t.fnRecordsTotal())).replace(/_TOTAL_/g,i.call(t,a)).replace(/_PAGE_/g,i.call(t,o?1:Math.ceil(n/r))).replace(/_PAGES_/g,i.call(t,o?1:Math.ceil(a/r)))}/**
 * Draw the table for the first time, adding all required features
 *  @param {object} settings dataTables settings object
 *  @memberof DataTable#oApi
 */function on(t){var e,i,n,r=t.iInitDisplayStart,a=t.aoColumns,o=t.oFeatures,s=t.bDeferLoading;/* Ensure that the table data is fully initialised */if(!t.bInitialised){setTimeout(function(){on(t)},200);return}for(/* Show the display HTML options */a$(t),/* Build and draw the header / footer for the table */aW(t),aB(t,t.aoHeader),aB(t,t.aoFooter),/* Okay to show that something is going on now */oc(t,!0),o.bAutoWidth&&og(t),e=0,i=a.length;e<i;e++)(n=a[e]).sWidth&&(n.nTh.style.width=ox(n.sWidth));oj(t,null,"preInit",[t]),// If there is default sorting required - let's do it. The sort function
// will do the drawing for us. Otherwise we draw the table regardless of the
// Ajax source - this allows the table to look initialised for Ajax sourcing
// data (show 'loading' message possibly)
aV(t);// Server-side processing init complete is done by _fnAjaxUpdateDraw
var l=oW(t);("ssp"!=l||s)&&("ajax"==l?aX(t,[],function(i){var n=aK(t,i);// Got the data - add it to the table
for(e=0;e<n.length;e++)aD(t,n[e]);// Reset the init display for cookie saving. We've already done
// a filter, and therefore cleared it before. So we need to make
// it appear 'fresh'
t.iInitDisplayStart=r,aV(t),oc(t,!1),or(t,i)},t):(oc(t,!1),or(t)))}/**
 * Draw the table for the first time, adding all required features
 *  @param {object} oSettings dataTables settings object
 *  @param {object} [json] JSON from the server that completed the table, if using Ajax source
 *    with client-side processing (optional)
 *  @memberof DataTable#oApi
 */function or(t,e){t._bInitComplete=!0,(e||t.oInit.aaData)&&ab(t),oj(t,null,"plugin-init",[t,e]),oj(t,"aoInitComplete","init",[t,e])}function oa(t,e){var i=parseInt(e,10);t._iDisplayLength=i,oN(t),// Fire length change event
oj(t,null,"length",[t,i])}/**
 * Generate the node required for user display length changing
 *  @param {object} settings dataTables settings object
 *  @returns {node} Display length feature node
 *  @memberof DataTable#oApi
 */function oo(t){for(var e=t.oClasses,i=t.sTableId,n=t.aLengthMenu,r=Array.isArray(n[0]),a=r?n[0]:n,o=r?n[1]:n,s=rJ("<select/>",{name:i+"_length","aria-controls":i,class:e.sLengthSelect}),l=0,h=a.length;l<h;l++)s[0][l]=new Option("number"==typeof o[l]?t.fnFormatNumber(o[l]):o[l],a[l]);var c=rJ("<div><label/></div>").addClass(e.sLength);return t.aanFeatures.l||(c[0].id=i+"_length"),c.children().append(t.oLanguage.sLengthMenu.replace("_MENU_",s[0].outerHTML)),// Can't use `select` variable as user might provide their own and the
// reference is broken by the use of outerHTML
rJ("select",c).val(t._iDisplayLength).on("change.DT",function(e){oa(t,rJ(this).val()),az(t)}),// Update node value whenever anything changes the table's length
rJ(t.nTable).on("length.dt.DT",function(e,i,n){t===i&&rJ("select",c).val(n)}),c[0]}/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Note that most of the paging logic is done in
 * DataTable.ext.pager
 *//**
 * Generate the node required for default pagination
 *  @param {object} oSettings dataTables settings object
 *  @returns {node} Pagination feature node
 *  @memberof DataTable#oApi
 */function os(t){var e=t.sPaginationType,i=rG.ext.pager[e],n="function"==typeof i,r=function(t){az(t)},a=rJ("<div/>").addClass(t.oClasses.sPaging+e)[0],o=t.aanFeatures;return n||i.fnInit(t,a,r),o.p||(a.id=t.sTableId+"_paginate",t.aoDrawCallback.push({fn:function(t){if(n){var e,a,s=t._iDisplayStart,l=t._iDisplayLength,h=t.fnRecordsDisplay(),c=-1===l,u=c?0:Math.ceil(s/l),d=c?1:Math.ceil(h/l),f=i(u,d);for(e=0,a=o.p.length;e<a;e++)oH(t,"pageButton")(t,o.p[e],e,f,u,d)}else i.fnUpdate(t,r)},sName:"pagination"})),a}/**
 * Alter the display settings to change the page
 *  @param {object} settings DataTables settings object
 *  @param {string|int} action Paging action to take: "first", "previous",
 *    "next" or "last" or page number to jump to (integer)
 *  @param [bool] redraw Automatically draw the update or not
 *  @returns {bool} true page has changed, false - no change
 *  @memberof DataTable#oApi
 */function ol(t,e,i){var n=t._iDisplayStart,r=t._iDisplayLength,a=t.fnRecordsDisplay();0===a||-1===r?n=0:"number"==typeof e?(n=e*r)>a&&(n=0):"first"==e?n=0:"previous"==e?(n=r>=0?n-r:0)<0&&(n=0):"next"==e?n+r<a&&(n+=r):"last"==e?n=Math.floor((a-1)/r)*r:oE(t,0,"Unknown paging action: "+e,5);var o=t._iDisplayStart!==n;return t._iDisplayStart=n,o?(oj(t,null,"page",[t]),i&&az(t)):oj(t,null,"page-nc",[t]),o}/**
 * Generate the node required for the processing node
 *  @param {object} settings dataTables settings object
 *  @returns {node} Processing element
 *  @memberof DataTable#oApi
 */function oh(t){return rJ("<div/>",{id:t.aanFeatures.r?null:t.sTableId+"_processing",class:t.oClasses.sProcessing,role:"status"}).html(t.oLanguage.sProcessing).append("<div><div></div><div></div><div></div><div></div></div>").insertBefore(t.nTable)[0]}/**
 * Display or hide the processing indicator
 *  @param {object} settings dataTables settings object
 *  @param {bool} show Show the processing indicator (true) or not (false)
 *  @memberof DataTable#oApi
 */function oc(t,e){t.oFeatures.bProcessing&&rJ(t.aanFeatures.r).css("display",e?"block":"none"),oj(t,null,"processing",[t,e])}/**
 * Add any control elements for the table - specifically scrolling
 *  @param {object} settings dataTables settings object
 *  @returns {node} Node to add to the DOM
 *  @memberof DataTable#oApi
 */function ou(t){var e=rJ(t.nTable),i=t.oScroll;if(""===i.sX&&""===i.sY)return t.nTable;var n=i.sX,r=i.sY,a=t.oClasses,o=e.children("caption"),s=o.length?o[0]._captionSide:null,l=rJ(e[0].cloneNode(!1)),h=rJ(e[0].cloneNode(!1)),c=e.children("tfoot"),u="<div/>",d=function(t){return t?ox(t):null};c.length||(c=null);/*
	 * The HTML structure that we want to generate in this function is:
	 *  div - scroller
	 *    div - scroll head
	 *      div - scroll head inner
	 *        table - scroll head table
	 *          thead - thead
	 *    div - scroll body
	 *      table - table (master table)
	 *        thead - thead clone for sizing
	 *        tbody - tbody
	 *    div - scroll foot
	 *      div - scroll foot inner
	 *        table - scroll foot table
	 *          tfoot - tfoot
	 */var f=rJ(u,{class:a.sScrollWrapper}).append(rJ(u,{class:a.sScrollHead}).css({overflow:"hidden",position:"relative",border:0,width:n?d(n):"100%"}).append(rJ(u,{class:a.sScrollHeadInner}).css({"box-sizing":"content-box",width:i.sXInner||"100%"}).append(l.removeAttr("id").css("margin-left",0).append("top"===s?o:null).append(e.children("thead"))))).append(rJ(u,{class:a.sScrollBody}).css({position:"relative",overflow:"auto",width:d(n)}).append(e));c&&f.append(rJ(u,{class:a.sScrollFoot}).css({overflow:"hidden",border:0,width:n?d(n):"100%"}).append(rJ(u,{class:a.sScrollFootInner}).append(h.removeAttr("id").css("margin-left",0).append("bottom"===s?o:null).append(e.children("tfoot")))));var p=f.children(),g=p[0],m=p[1],b=c?p[2]:null;return n&&rJ(m).on("scroll.DT",function(t){var e=this.scrollLeft;g.scrollLeft=e,c&&(b.scrollLeft=e)}),rJ(m).css("max-height",r),i.bCollapse||rJ(m).css("height",r),t.nScrollHead=g,t.nScrollBody=m,t.nScrollFoot=b,// On redraw - align columns
t.aoDrawCallback.push({fn:od,sName:"scrolling"}),f[0]}/**
 * Update the header, footer and body tables for resizing - i.e. column
 * alignment.
 *
 * Welcome to the most horrible function DataTables. The process that this
 * function follows is basically:
 *   1. Re-create the table inside the scrolling div
 *   2. Take live measurements from the DOM
 *   3. Apply the measurements to align the columns
 *   4. Clean up
 *
 *  @param {object} settings dataTables settings object
 *  @memberof DataTable#oApi
 */function od(t){// Given that this is such a monster function, a lot of variables are use
// to try and keep the minimised size as small as possible
var e,i,n,r,a,o,s,l,h,c=t.oScroll,u=c.sX,d=c.sXInner,f=c.sY,p=c.iBarWidth,g=rJ(t.nScrollHead),m=g[0].style,b=g.children("div"),v=b[0].style,y=b.children("table"),x=t.nScrollBody,_=rJ(x),w=x.style,S=rJ(t.nScrollFoot).children("div"),D=S.children("table"),C=rJ(t.nTHead),T=rJ(t.nTable),k=T[0],M=k.style,A=t.nTFoot?rJ(t.nTFoot):null,P=t.oBrowser,L=P.bScrollOversize,E=(r9(t.aoColumns,"nTh"),[]),I=[],O=[],R=[],F=function(t){var e=t.style;e.paddingTop="0",e.paddingBottom="0",e.borderTopWidth="0",e.borderBottomWidth="0",e.height=0},j=x.scrollHeight>x.clientHeight;if(t.scrollBarVis!==j&&void 0!==t.scrollBarVis){t.scrollBarVis=j,ab(t);return;// adjust column sizing will call this function again
}t.scrollBarVis=j,/*
	 * 1. Re-create the table inside the scrolling div
	 */// Remove the old minimised thead and tfoot elements in the inner table
T.children("thead, tfoot").remove(),A&&(o=A.clone().prependTo(T),i=A.find("tr"),r=o.find("tr"),o.find("[id]").removeAttr("id")),// Clone the current header and footer elements and then place it into the inner table
a=C.clone().prependTo(T),e=C.find("tr"),n=a.find("tr"),a.find("th, td").removeAttr("tabindex"),a.find("[id]").removeAttr("id"),u||(w.width="100%",g[0].style.width="100%"),rJ.each(aU(t,a),function(e,i){s=av(t,e),i.style.width=t.aoColumns[s].sWidth}),A&&of(function(t){t.style.width=""},r),// Size the table as a whole
h=T.outerWidth(),""===u?(// No x scrolling
M.width="100%",L&&(T.find("tbody").height()>x.offsetHeight||"scroll"==_.css("overflow-y"))&&(M.width=ox(T.outerWidth()-p)),// Recalculate the sanity width
h=T.outerWidth()):""!==d&&(// legacy x scroll inner has been given - use it
M.width=ox(d),// Recalculate the sanity width
h=T.outerWidth()),// Hidden header should have zero height, so remove padding and borders. Then
// set the width based on the real headers
// Apply all styles in one pass
of(F,n),// Read all widths in next pass
of(function(t){var e=window.getComputedStyle?window.getComputedStyle(t).width:ox(rJ(t).width());O.push(t.innerHTML),E.push(e)},n),// Apply all widths in final pass
of(function(t,e){t.style.width=E[e]},e),rJ(n).css("height",0),A&&(of(F,r),of(function(t){R.push(t.innerHTML),I.push(ox(rJ(t).css("width")))},r),of(function(t,e){t.style.width=I[e]},i),rJ(r).height(0)),/*
	 * 3. Apply the measurements
	 */// "Hide" the header and footer that we used for the sizing. We need to keep
// the content of the cell so that the width applied to the header and body
// both match, but we want to hide it completely. We want to also fix their
// width to what they currently are
of(function(t,e){t.innerHTML='<div class="dataTables_sizing">'+O[e]+"</div>",t.childNodes[0].style.height="0",t.childNodes[0].style.overflow="hidden",t.style.width=E[e]},n),A&&of(function(t,e){t.innerHTML='<div class="dataTables_sizing">'+R[e]+"</div>",t.childNodes[0].style.height="0",t.childNodes[0].style.overflow="hidden",t.style.width=I[e]},r),Math.round(T.outerWidth())<Math.round(h)?(// The min width depends upon if we have a vertical scrollbar visible or not */
l=x.scrollHeight>x.offsetHeight||"scroll"==_.css("overflow-y")?h+p:h,L&&(x.scrollHeight>x.offsetHeight||"scroll"==_.css("overflow-y"))&&(M.width=ox(l-p)),(""===u||""!==d)&&oE(t,1,"Possible column misalignment",6)):l="100%",// Apply to the container elements
w.width=ox(l),m.width=ox(l),A&&(t.nScrollFoot.style.width=ox(l)),!f&&L&&(w.height=ox(k.offsetHeight+p));/* Finally set the width's of the header and footer tables */var N=T.outerWidth();y[0].style.width=ox(N),v.width=ox(N);// Figure out if there are scrollbar present - if so then we need a the header and footer to
// provide a bit more space to allow "overflow" scrolling (i.e. past the scrollbar)
var H=T.height()>x.clientHeight||"scroll"==_.css("overflow-y"),W="padding"+(P.bScrollbarLeft?"Left":"Right");v[W]=H?p+"px":"0px",A&&(D[0].style.width=ox(N),S[0].style.width=ox(N),S[0].style[W]=H?p+"px":"0px"),// Correct DOM ordering for colgroup - comes before the thead
T.children("colgroup").insertBefore(T.children("thead")),/* Adjust the position of the header in case we loose the y-scrollbar */_.trigger("scroll"),(t.bSorted||t.bFiltered)&&!t._drawHold&&(x.scrollTop=0)}/**
 * Apply a given function to the display child nodes of an element array (typically
 * TD children of TR rows
 *  @param {function} fn Method to apply to the objects
 *  @param array {nodes} an1 List of elements to look through for display children
 *  @param array {nodes} an2 Another list (identical structure to the first) - optional
 *  @memberof DataTable#oApi
 */function of(t,e,i){for(var n,r,a=0,o=0,s=e.length;o<s;){for(n=e[o].firstChild,r=i?i[o].firstChild:null;n;)1===n.nodeType&&(i?t(n,r,a):t(n,a),a++),n=n.nextSibling,r=i?r.nextSibling:null;o++}}var op=/<.*?>/g;/**
 * Calculate the width of columns for the table
 *  @param {object} oSettings dataTables settings object
 *  @memberof DataTable#oApi
 */function og(t){var e,i,n,r=t.nTable,a=t.aoColumns,o=t.oScroll,s=o.sY,l=o.sX,h=o.sXInner,c=a.length,u=a_(t,"bVisible"),d=rJ("th",t.nTHead),f=r.getAttribute("width"),p=r.parentNode,g=!1,m=t.oBrowser,b=m.bScrollOversize,v=r.style.width;v&&-1!==v.indexOf("%")&&(f=v);/* Convert any user input sizes into pixel sizes */var y=ob(r9(a,"sWidthOrig"),p);for(e=0;e<u.length;e++)null!==(i=a[u[e]]).sWidth&&(i.sWidth=y[e],g=!0);/* If the number of columns in the DOM equals the number that we have to
	 * process in DataTables, then we can use the offsets that are created by
	 * the web- browser. No custom sizes can be set in order for this to happen,
	 * nor scrolling used
	 */if(!b&&(g||l||s||c!=ax(t)||c!=d.length)){// Otherwise construct a single row, worst case, table with the widest
// node in the data, assign any user defined widths, then insert it into
// the DOM and allow the browser to do all the hard work of calculating
// table widths
var x=rJ(r).clone()// don't use cloneNode - IE8 will remove events on the main table
.css("visibility","hidden").removeAttr("id");// Clean up the table body
x.find("tbody tr").remove();var _=rJ("<tr/>").appendTo(x.find("tbody"));for(// Clone the table header and footer - we can't use the header / footer
// from the cloned table, since if scrolling is active, the table's
// real header and footer are contained in different table tags
x.find("thead, tfoot").remove(),x.append(rJ(t.nTHead).clone()).append(rJ(t.nTFoot).clone()),// Remove any assigned widths from the footer (from scrolling)
x.find("tfoot th, tfoot td").css("width",""),// Apply custom sizing to the cloned header
d=aU(t,x.find("thead")[0]),e=0;e<u.length;e++)i=a[u[e]],d[e].style.width=null!==i.sWidthOrig&&""!==i.sWidthOrig?ox(i.sWidthOrig):"",i.sWidthOrig&&l&&rJ(d[e]).append(rJ("<div/>").css({width:i.sWidthOrig,margin:0,padding:0,border:0,height:1}));// Find the widest cell for each column and put it into the table
if(t.aoData.length)for(e=0;e<u.length;e++)i=a[n=u[e]],rJ(ov(t,n)).clone(!1).append(i.sContentPadding).appendTo(_);// Tidy the temporary table - remove name attributes so there aren't
// duplicated in the dom (radio elements for example)
rJ("[name]",x).removeAttr("name");// Table has been built, attach to the document so we can work with it.
// A holding element is used, positioned at the top of the container
// with minimal height, so it has no effect on if the container scrolls
// or not. Otherwise it might trigger scrolling when it actually isn't
// needed
var w=rJ("<div/>").css(l||s?{position:"absolute",top:0,left:0,height:1,right:0,overflow:"hidden"}:{}).append(x).appendTo(p);l&&h?x.width(h):l?(x.css("width","auto"),x.removeAttr("width"),x.width()<p.clientWidth&&f&&x.width(p.clientWidth)):s?x.width(p.clientWidth):f&&x.width(f);// Get the width of each column in the constructed table - we need to
// know the inner width (so it can be assigned to the other table's
// cells) and the outer width so we can calculate the full width of the
// table. This is safe since DataTables requires a unique cell for each
// column, but if ever a header can span multiple columns, this will
// need to be modified.
var S=0;for(e=0;e<u.length;e++){var D=rJ(d[e]),C=D.outerWidth()-D.width(),T=m.bBounding?Math.ceil(d[e].getBoundingClientRect().width):D.outerWidth();// Total is tracked to remove any sub-pixel errors as the outerWidth
// of the table might not equal the total given here (IE!).
S+=T,// Width for each column to use
a[u[e]].sWidth=ox(T-C)}r.style.width=ox(S),// Finished with the table - ditch it
w.remove()}else for(e=0;e<c;e++){var k=av(t,e);null!==k&&(a[k].sWidth=ox(d.eq(e).width()))}if(f&&(r.style.width=ox(f)),(f||l)&&!t._reszEvt){var M=function(){rJ(window).on("resize.DT-"+t.sInstance,om(function(){ab(t)}))};b?setTimeout(M,1e3):M(),t._reszEvt=!0}}/**
 * Throttle the calls to a function. Arguments and context are maintained for
 * the throttled function
 *  @param {function} fn Function to be called
 *  @param {int} [freq=200] call frequency in mS
 *  @returns {function} wrapped function
 *  @memberof DataTable#oApi
 */var om=rG.util.throttle;/**
 * Convert a set of CSS units width to pixels (e.g. 2em)
 *  @param {string[]} widths widths to be converted
 *  @param {node} parent parent to get the with for (required for relative widths) - optional
 *  @returns {int[]} widths in pixels
 *  @memberof DataTable#oApi
 */function ob(t,e){// Add the elements in a single loop so we only need to reflow once
for(var i=[],n=[],r=0;r<t.length;r++)t[r]?i.push(rJ("<div/>").css("width",ox(t[r])).appendTo(e||document.body)):i.push(null);// Get the sizes (will reflow once)
for(var r=0;r<t.length;r++)n.push(i[r]?i[r][0].offsetWidth:null);return(// Tidy
rJ(i).remove(),n)}/**
 * Get the widest node
 *  @param {object} settings dataTables settings object
 *  @param {int} colIdx column of interest
 *  @returns {node} widest table node
 *  @memberof DataTable#oApi
 */function ov(t,e){var i=oy(t,e);if(i<0)return null;var n=t.aoData[i];return n.nTr?n.anCells[e]:rJ("<td/>").html(aT(t,i,e,"display"))[0]}/**
 * Get the maximum strlen for each data column
 *  @param {object} settings dataTables settings object
 *  @param {int} colIdx column of interest
 *  @returns {string} max string length for each column
 *  @memberof DataTable#oApi
 */function oy(t,e){for(var i,n=-1,r=-1,a=0,o=t.aoData.length;a<o;a++)(i=(i=(i=aT(t,a,e,"display")+"").replace(op,"")).replace(/&nbsp;/g," ")).length>n&&(n=i.length,r=a);return r}/**
 * Append a CSS unit (only if required) to a string
 *  @param {string} value to css-ify
 *  @returns {string} value with css unit
 *  @memberof DataTable#oApi
 */function ox(t){return null===t?"0px":"number"==typeof t?t<0?"0px":t+"px":t.match(/\d$/)?t+"px":t}function o_(t){var e,i,n,r,a,o,s,l=[],h=t.aoColumns,c=t.aaSortingFixed,u=rJ.isPlainObject(c),d=[],f=function(t){t.length&&!Array.isArray(t[0])?d.push(t):rJ.merge(d,t)};for(Array.isArray(c)&&f(c),u&&c.pre&&f(c.pre),f(t.aaSorting),u&&c.post&&f(c.post),e=0;e<d.length;e++)for(i=0,n=(r=h[s=d[e][0]].aDataSort).length;i<n;i++)o=h[a=r[i]].sType||"string",void 0===d[e]._idx&&(d[e]._idx=rJ.inArray(d[e][1],h[a].asSorting)),l.push({src:s,col:a,dir:d[e][1],index:d[e]._idx,type:o,formatter:rG.ext.type.order[o+"-pre"]});return l}/**
 * Change the order of the table
 *  @param {object} oSettings dataTables settings object
 *  @memberof DataTable#oApi
 *  @todo This really needs split up!
 */function ow(t){var e,i,n,r,a,o=[],s=rG.ext.type.order,l=t.aoData,h=(t.aoColumns,0),c=t.aiDisplayMaster;for(// Resolve any column types that are unknown due to addition or invalidation
// @todo Can this be moved into a 'data-ready' handler which is called when
//   data is going to be used in the table?
aw(t),e=0,i=(a=o_(t)).length;e<i;e++)(r=a[e]).formatter&&h++,// Load the data needed for the sort, for each cell
ok(t,r.col);/* No sorting required if server-side or no sorting array */if("ssp"!=oW(t)&&0!==a.length){// Create a value - key array of the current row positions such that we can use their
// current position during the sort, if values match, in order to perform stable sorting
for(e=0,n=c.length;e<n;e++)o[c[e]]=e;/* Do the sort - here we want multi-column sorting based on a given data source (column)
		 * and sorting function (from oSort) in a certain direction. It's reasonably complex to
		 * follow on it's own, but this is what we want (example two column sorting):
		 *  fnLocalSorting = function(a,b){
		 *    var iTest;
		 *    iTest = oSort['string-asc']('data11', 'data12');
		 *      if (iTest !== 0)
		 *        return iTest;
		 *    iTest = oSort['numeric-desc']('data21', 'data22');
		 *    if (iTest !== 0)
		 *      return iTest;
		 *    return oSort['numeric-asc']( aiOrig[a], aiOrig[b] );
		 *  }
		 * Basically we have a test for each sorting column, if the data in that column is equal,
		 * test the next column. If all columns match, then we use a numeric sort on the row
		 * positions in the original data array to provide a stable sort.
		 *
		 * Note - I know it seems excessive to have two sorting methods, but the first is around
		 * 15% faster, so the second is only maintained for backwards compatibility with sorting
		 * methods which do not have a pre-sort formatting function.
		 */h===a.length?c.sort(function(t,e){var i,n,r,s,h,c=a.length,u=l[t]._aSortData,d=l[e]._aSortData;for(r=0;r<c;r++)if(0!=(s=(i=u[(h=a[r]).col])<(n=d[h.col])?-1:i>n?1:0))return"asc"===h.dir?s:-s;return(i=o[t])<(n=o[e])?-1:i>n?1:0}):// Not all sort types have formatting methods, so we have to call their sorting
// methods.
c.sort(function(t,e){var i,n,r,h,c,u=a.length,d=l[t]._aSortData,f=l[e]._aSortData;for(r=0;r<u;r++)if(i=d[(c=a[r]).col],n=f[c.col],0!==(h=(s[c.type+"-"+c.dir]||s["string-"+c.dir])(i,n)))return h;return(i=o[t])<(n=o[e])?-1:i>n?1:0})}/* Tell the draw function that we have sorted the data */t.bSorted=!0}function oS(t){// ARIA attributes - need to loop all columns, to update all (removing old
// attributes as needed)
for(var e,i,n=t.aoColumns,r=o_(t),a=t.oLanguage.oAria,o=0,s=n.length;o<s;o++){var l=n[o],h=l.asSorting,c=l.ariaTitle||l.sTitle.replace(/<.*?>/g,""),u=l.nTh;// IE7 is throwing an error when setting these properties with jQuery's
// attr() and removeAttr() methods...
u.removeAttribute("aria-sort"),l.bSortable?(r.length>0&&r[0].col==o?(u.setAttribute("aria-sort","asc"==r[0].dir?"ascending":"descending"),i=h[r[0].index+1]||h[0]):i=h[0],e=c+("asc"===i?a.sSortAscending:a.sSortDescending)):e=c,u.setAttribute("aria-label",e)}}/**
 * Function to run on user sort request
 *  @param {object} settings dataTables settings object
 *  @param {node} attachTo node to attach the handler to
 *  @param {int} colIdx column sorting index
 *  @param {boolean} [append=false] Append the requested sort to the existing
 *    sort if true (i.e. multi-column sort)
 *  @param {function} [callback] callback function
 *  @memberof DataTable#oApi
 */function oD(t,e,i,n){var r,a=t.aoColumns[e],o=t.aaSorting,s=a.asSorting,l=function(t,e){var i=t._idx;return void 0===i&&(i=rJ.inArray(t[1],s)),i+1<s.length?i+1:e?null:0};// If appending the sort then we are multi-column sorting
if("number"==typeof o[0]&&(o=t.aaSorting=[o]),i&&t.oFeatures.bSortMulti){// Are we already doing some kind of sort on this column?
var h=rJ.inArray(e,r9(o,"0"));-1!==h?(null===// Yes, modify the sort
(r=l(o[h],!0))&&1===o.length&&(r=0),null===r?o.splice(h,1):(o[h][1]=s[r],o[h]._idx=r)):(// No sort on this column yet
o.push([e,s[0],0]),o[o.length-1]._idx=0)}else o.length&&o[0][0]==e?(// Single column - already sorting on this column, modify the sort
r=l(o[0]),o.length=1,o[0][1]=s[r],o[0]._idx=r):(// Single column - sort only on this column
o.length=0,o.push([e,s[0]]),o[0]._idx=0);// Run the sort by calling a full redraw
aV(t),"function"==typeof n&&n(t)}/**
 * Attach a sort handler (click) to a node
 *  @param {object} settings dataTables settings object
 *  @param {node} attachTo node to attach the handler to
 *  @param {int} colIdx column sorting index
 *  @param {function} [callback] callback function
 *  @memberof DataTable#oApi
 */function oC(t,e,i,n){var r=t.aoColumns[i];oR(e,{},function(e){/* If the column is not sortable - don't to anything */!1!==r.bSortable&&(t.oFeatures.bProcessing?(oc(t,!0),setTimeout(function(){oD(t,i,e.shiftKey,n),"ssp"!==oW(t)&&oc(t,!1)},0)):oD(t,i,e.shiftKey,n))})}/**
 * Set the sorting classes on table's body, Note: it is safe to call this function
 * when bSort and bSortClasses are false
 *  @param {object} oSettings dataTables settings object
 *  @memberof DataTable#oApi
 */function oT(t){var e,i,n,r=t.aLastSort,a=t.oClasses.sSortColumn,o=o_(t),s=t.oFeatures;if(s.bSort&&s.bSortClasses){// Remove old sorting classes
for(e=0,i=r.length;e<i;e++)n=r[e].src,// Remove column sorting
rJ(r9(t.aoData,"anCells",n)).removeClass(a+(e<2?e+1:3));// Add new column sorting
for(e=0,i=o.length;e<i;e++)n=o[e].src,rJ(r9(t.aoData,"anCells",n)).addClass(a+(e<2?e+1:3))}t.aLastSort=o}// Get the data to sort a column, be it from cache, fresh (populating the
// cache), or from a sort formatter
function ok(t,e){// Custom sorting function - provided by the sort data type
var i,n,r,a=t.aoColumns[e],o=rG.ext.order[a.sSortDataType];o&&(i=o.call(t.oInstance,t,e,ay(t,e)));for(var s=rG.ext.type.order[a.sType+"-pre"],l=0,h=t.aoData.length;l<h;l++)(n=t.aoData[l])._aSortData||(n._aSortData=[]),(!n._aSortData[e]||o)&&(r=o?i[l]:aT(t,l,e,"sort"),n._aSortData[e]=s?s(r):r)}/**
 * Save the state of a table
 *  @param {object} oSettings dataTables settings object
 *  @memberof DataTable#oApi
 */function oM(t){if(!t._bLoadingState){/* Store the interesting variables */var e={time:+new Date,start:t._iDisplayStart,length:t._iDisplayLength,order:rJ.extend(!0,[],t.aaSorting),search:a9(t.oPreviousSearch),columns:rJ.map(t.aoColumns,function(e,i){return{visible:e.bVisible,search:a9(t.aoPreSearchCols[i])}})};t.oSavedState=e,oj(t,"aoStateSaveParams","stateSaveParams",[t,e]),t.oFeatures.bStateSave&&!t.bDestroying&&t.fnStateSaveCallback.call(t.oInstance,t,e)}}/**
 * Attempt to load a saved table state
 *  @param {object} oSettings dataTables settings object
 *  @param {object} oInit DataTables init object so we can override settings
 *  @param {function} callback Callback to execute when the state has been loaded
 *  @memberof DataTable#oApi
 */function oA(t,e,i){if(!t.oFeatures.bStateSave){i();return}var n=t.fnStateLoadCallback.call(t.oInstance,t,function(e){oP(t,e,i)});// otherwise, wait for the loaded callback to be executed
return void 0!==n&&oP(t,n,i),!0}function oP(t,e,i){var n,r,a=t.aoColumns;t._bLoadingState=!0;// When StateRestore was introduced the state could now be implemented at any time
// Not just initialisation. To do this an api instance is required in some places
var o=t._bInitComplete?new rG.Api(t):null;if(!e||!e.time){t._bLoadingState=!1,i();return}// Allow custom and plug-in manipulation functions to alter the saved data set and
// cancelling of loading by returning false
var s=oj(t,"aoStateLoadParams","stateLoadParams",[t,e]);if(-1!==rJ.inArray(!1,s)){t._bLoadingState=!1,i();return}// Reject old data
var l=t.iStateDuration;if(l>0&&e.time<+new Date-1e3*l||e.columns&&a.length!==e.columns.length){t._bLoadingState=!1,i();return}// Columns
if(// Store the saved state so it might be accessed at any time
t.oLoadedState=rJ.extend(!0,{},e),void 0!==e.length&&(o?o.page.len(e.length):t._iDisplayLength=e.length),void 0!==e.start&&(null===o?(t._iDisplayStart=e.start,t.iInitDisplayStart=e.start):ol(t,e.start/t._iDisplayLength)),void 0!==e.order&&(t.aaSorting=[],rJ.each(e.order,function(e,i){t.aaSorting.push(i[0]>=a.length?[0,i[1]]:i)})),void 0!==e.search&&rJ.extend(t.oPreviousSearch,a7(e.search)),e.columns){for(n=0,r=e.columns.length;n<r;n++){var h=e.columns[n];void 0!==h.visible&&(o?o.column(n).visible(h.visible,!1):a[n].bVisible=h.visible),void 0!==h.search&&rJ.extend(t.aoPreSearchCols[n],a7(h.search))}// If the api is defined then we need to adjust the columns once the visibility has been changed
o&&o.columns.adjust()}t._bLoadingState=!1,oj(t,"aoStateLoaded","stateLoaded",[t,e]),i()}/**
 * Return the settings object for a particular table
 *  @param {node} table table we are using as a dataTable
 *  @returns {object} Settings object - or null if not found
 *  @memberof DataTable#oApi
 */function oL(t){var e=rG.settings,i=rJ.inArray(t,r9(e,"nTable"));return -1!==i?e[i]:null}/**
 * Log an error message
 *  @param {object} settings dataTables settings object
 *  @param {int} level log error messages, or display them to the user
 *  @param {string} msg error message
 *  @param {int} tn Technical note id to get more information about the error.
 *  @memberof DataTable#oApi
 */function oE(t,e,i,n){if(i="DataTables warning: "+(t?"table id="+t.sTableId+" - ":"")+i,n&&(i+=". For more information about this error, please see https://datatables.net/tn/"+n),e)window.console&&console.log&&console.log(i);else{// Backwards compatibility pre 1.10
var r=rG.ext,a=r.sErrMode||r.errMode;if(t&&oj(t,null,"error",[t,n,i]),"alert"==a)alert(i);else if("throw"==a)throw Error(i);else"function"==typeof a&&a(t,n,i)}}/**
 * See if a property is defined on one object, if so assign it to the other object
 *  @param {object} ret target object
 *  @param {object} src source object
 *  @param {string} name property
 *  @param {string} [mappedName] name to map too - optional, name used if not given
 *  @memberof DataTable#oApi
 */function oI(t,e,i,n){if(Array.isArray(i)){rJ.each(i,function(i,n){Array.isArray(n)?oI(t,e,n[0],n[1]):oI(t,e,n)});return}void 0===n&&(n=i),void 0!==e[i]&&(t[n]=e[i])}/**
 * Extend objects - very similar to jQuery.extend, but deep copy objects, and
 * shallow copy arrays. The reason we need to do this, is that we don't want to
 * deep copy array init values (such as aaSorting) since the dev wouldn't be
 * able to override them, but we do want to deep copy arrays.
 *  @param {object} out Object to extend
 *  @param {object} extender Object from which the properties will be applied to
 *      out
 *  @param {boolean} breakRefs If true, then arrays will be sliced to take an
 *      independent copy with the exception of the `data` or `aaData` parameters
 *      if they are present. This is so you can pass in a collection to
 *      DataTables and have that used as your data source without breaking the
 *      references
 *  @returns {object} out Reference, just for convenience - out === the return.
 *  @memberof DataTable#oApi
 *  @todo This doesn't take account of arrays inside the deep copied objects.
 */function oO(t,e,i){var n;for(var r in e)e.hasOwnProperty(r)&&(n=e[r],rJ.isPlainObject(n)?(rJ.isPlainObject(t[r])||(t[r]={}),rJ.extend(!0,t[r],n)):i&&"data"!==r&&"aaData"!==r&&Array.isArray(n)?t[r]=n.slice():t[r]=n);return t}/**
 * Bind an event handers to allow a click or return key to activate the callback.
 * This is good for accessibility since a return on the keyboard will have the
 * same effect as a click, if the element has focus.
 *  @param {element} n Element to bind the action to
 *  @param {object} oData Data object to pass to the triggered function
 *  @param {function} fn Callback function for when the event is triggered
 *  @memberof DataTable#oApi
 */function oR(t,e,i){rJ(t).on("click.DT",e,function(e){rJ(t).trigger("blur"),i(e)}).on("keypress.DT",e,function(t){13===t.which&&(t.preventDefault(),i(t))}).on("selectstart.DT",function(){/* Take the brutal approach to cancelling text selection */return!1})}/**
 * Register a callback function. Easily allows a callback function to be added to
 * an array store of callback functions that can then all be called together.
 *  @param {object} oSettings dataTables settings object
 *  @param {string} sStore Name of the array storage for the callbacks in oSettings
 *  @param {function} fn Function to be called back
 *  @param {string} sName Identifying name for the callback (i.e. a label)
 *  @memberof DataTable#oApi
 */function oF(t,e,i,n){i&&t[e].push({fn:i,sName:n})}/**
 * Fire callback functions and trigger events. Note that the loop over the
 * callback array store is done backwards! Further note that you do not want to
 * fire off triggers in time sensitive applications (for example cell creation)
 * as its slow.
 *  @param {object} settings dataTables settings object
 *  @param {string} callbackArr Name of the array storage for the callbacks in
 *      oSettings
 *  @param {string} eventName Name of the jQuery custom event to trigger. If
 *      null no trigger is fired
 *  @param {array} args Array of arguments to pass to the callback function /
 *      trigger
 *  @memberof DataTable#oApi
 */function oj(t,e,i,n){var r=[];if(e&&(r=rJ.map(t[e].slice().reverse(),function(e,i){return e.fn.apply(t.oInstance,n)})),null!==i){var a=rJ.Event(i+".dt"),o=rJ(t.nTable);o.trigger(a,n),0===o.parents("body").length&&rJ("body").trigger(a,n),r.push(a.result)}return r}function oN(t){var e=t._iDisplayStart,i=t.fnDisplayEnd(),n=t._iDisplayLength;e>=i&&(e=i-n),// Keep the start record on the current page
e-=e%n,(-1===n||e<0)&&(e=0),t._iDisplayStart=e}function oH(t,e){var i=t.renderer,n=rG.ext.renderer[e];return rJ.isPlainObject(i)&&i[e]?n[i[e]]||n._:"string"==typeof i&&n[i]||n._}/**
 * Detect the data source being used for the table. Used to simplify the code
 * a little (ajax) and to make it compress a little smaller.
 *
 *  @param {object} settings dataTables settings object
 *  @returns {string} Data source
 *  @memberof DataTable#oApi
 */function oW(t){return t.oFeatures.bServerSide?"ssp":t.ajax||t.sAjaxSource?"ajax":"dom"}/**
 * Computed structure of the DataTables API, defined by the options passed to
 * `DataTable.Api.register()` when building the API.
 *
 * The structure is built in order to speed creation and extension of the Api
 * objects since the extensions are effectively pre-parsed.
 *
 * The array is an array of objects with the following structure, where this
 * base array represents the Api prototype base:
 *
 *     [
 *       {
 *         name:      'data'                -- string   - Property name
 *         val:       function () {},       -- function - Api method (or undefined if just an object
 *         methodExt: [ ... ],              -- array    - Array of Api object definitions to extend the method result
 *         propExt:   [ ... ]               -- array    - Array of Api object definitions to extend the property
 *       },
 *       {
 *         name:     'row'
 *         val:       {},
 *         methodExt: [ ... ],
 *         propExt:   [
 *           {
 *             name:      'data'
 *             val:       function () {},
 *             methodExt: [ ... ],
 *             propExt:   [ ... ]
 *           },
 *           ...
 *         ]
 *       }
 *     ]
 *
 * @type {Array}
 * @ignore
 */var oB=[],oz=Array.prototype,oV=function(t){var e,i,n=rG.settings,r=rJ.map(n,function(t,e){return t.nTable});return t?t.nTable&&t.oApi?[t]:t.nodeName&&"table"===t.nodeName.toLowerCase()?-1!==// Table node
(e=rJ.inArray(t,r))?[n[e]]:null:t&&"function"==typeof t.settings?t.settings().toArray():("string"==typeof t?i=rJ(t):t instanceof rJ&&(i=t),i)?i.map(function(t){return -1!==(e=rJ.inArray(this,r))?n[e]:null}).toArray():void 0:[]};/**
 * DataTables API class - used to control and interface with  one or more
 * DataTables enhanced tables.
 *
 * The API class is heavily based on jQuery, presenting a chainable interface
 * that you can use to interact with tables. Each instance of the API class has
 * a "context" - i.e. the tables that it will operate on. This could be a single
 * table, all tables on a page or a sub-set thereof.
 *
 * Additionally the API is designed to allow you to easily work with the data in
 * the tables, retrieving and manipulating it as required. This is done by
 * presenting the API class as an array like interface. The contents of the
 * array depend upon the actions requested by each method (for example
 * `rows().nodes()` will return an array of nodes, while `rows().data()` will
 * return an array of objects or arrays depending upon your table's
 * configuration). The API object has a number of array like methods (`push`,
 * `pop`, `reverse` etc) as well as additional helper methods (`each`, `pluck`,
 * `unique` etc) to assist your working with the data held in a table.
 *
 * Most methods (those which return an Api instance) are chainable, which means
 * the return from a method call also has all of the methods available that the
 * top level object had. For example, these two calls are equivalent:
 *
 *     // Not chained
 *     api.row.add( {...} );
 *     api.draw();
 *
 *     // Chained
 *     api.row.add( {...} ).draw();
 *
 * @class DataTable.Api
 * @param {array|object|string|jQuery} context DataTable identifier. This is
 *   used to define which DataTables enhanced tables this API will operate on.
 *   Can be one of:
 *
 *   * `string` - jQuery selector. Any DataTables' matching the given selector
 *     with be found and used.
 *   * `node` - `TABLE` node which has already been formed into a DataTable.
 *   * `jQuery` - A jQuery object of `TABLE` nodes.
 *   * `object` - DataTables settings object
 * @param {array} [data] Data to initialise the Api instance with.
 *
 * @example
 *   // Direct initialisation during DataTables construction
 *   var api = $('#example').DataTable();
 *
 * @example
 *   // Initialisation using a DataTables jQuery object
 *   var api = $('#example').dataTable().api();
 *
 * @example
 *   // Initialisation as a constructor
 *   var api = new $.fn.DataTable.Api( 'table.dataTable' );
 */t5=function(t,e){if(!(this instanceof t5))return new t5(t,e);var i=[],n=function(t){var e=oV(t);e&&i.push.apply(i,e)};if(Array.isArray(t))for(var r=0,a=t.length;r<a;r++)n(t[r]);else n(t);// Remove duplicates
this.context=ar(i),e&&rJ.merge(this,e),// selector
this.selector={rows:null,cols:null,opts:null},t5.extend(this,this,oB)},rG.Api=t5,// Don't destroy the existing prototype, just extend it. Required for jQuery 2's
// isPlainObject.
rJ.extend(t5.prototype,{any:function(){return 0!==this.count()},concat:oz.concat,context:[],count:function(){return this.flatten().length},each:function(t){for(var e=0,i=this.length;e<i;e++)t.call(this,this[e],e,this);return this},eq:function(t){var e=this.context;return e.length>t?new t5(e[t],this[t]):null},filter:function(t){var e=[];if(oz.filter)e=oz.filter.call(this,t,this);else // Compatibility for browsers without EMCA-252-5 (JS 1.6)
for(var i=0,n=this.length;i<n;i++)t.call(this,this[i],i,this)&&e.push(this[i]);return new t5(this.context,e)},flatten:function(){var t=[];return new t5(this.context,t.concat.apply(t,this.toArray()))},join:oz.join,indexOf:oz.indexOf||function(t,e){for(var i=e||0,n=this.length;i<n;i++)if(this[i]===t)return i;return -1},iterator:function(t,e,i,n){var r,a,o,s,l,h,c,u,d=[],f=this.context,p=this.selector;for("string"==typeof t&&(n=i,i=e,e=t,t=!1),a=0,o=f.length;a<o;a++){var g=new t5(f[a]);if("table"===e)void 0!==(r=i.call(g,f[a],a))&&d.push(r);else if("columns"===e||"rows"===e)void 0!==// this has same length as context - one entry for each table
(r=i.call(g,f[a],this[a],a))&&d.push(r);else if("column"===e||"column-rows"===e||"row"===e||"cell"===e)for(// columns and rows share the same structure.
// 'this' is an array of column indexes for each context
c=this[a],"column-rows"===e&&(h=oJ(f[a],p.opts)),s=0,l=c.length;s<l;s++)u=c[s],void 0!==(r="cell"===e?i.call(g,f[a],u.row,u.column,a,s):i.call(g,f[a],u,a,s,h))&&d.push(r)}if(d.length||n){var m=new t5(f,t?d.concat.apply([],d):d),b=m.selector;return b.rows=p.rows,b.cols=p.cols,b.opts=p.opts,m}return this},lastIndexOf:oz.lastIndexOf||function(t,e){// Bit cheeky...
return this.indexOf.apply(this.toArray.reverse(),arguments)},length:0,map:function(t){var e=[];if(oz.map)e=oz.map.call(this,t,this);else for(var i=0,n=this.length;i<n;i++)e.push(t.call(this,this[i],i));return new t5(this.context,e)},pluck:function(t){var e=rG.util.get(t);return this.map(function(t){return e(t)})},pop:oz.pop,push:oz.push,// Does not return an API instance
reduce:oz.reduce||function(t,e){return ap(this,t,e,0,this.length,1)},reduceRight:oz.reduceRight||function(t,e){return ap(this,t,e,this.length-1,-1,-1)},reverse:oz.reverse,// Object with rows, columns and opts
selector:null,shift:oz.shift,slice:function(){return new t5(this.context,this)},sort:oz.sort,splice:oz.splice,toArray:function(){return oz.slice.call(this)},to$:function(){return rJ(this)},toJQuery:function(){return rJ(this)},unique:function(){return new t5(this.context,ar(this))},unshift:oz.unshift}),t5.extend=function(t,e,i){// Only extend API instances and static properties of the API
if(i.length&&e&&(e instanceof t5||e.__dt_wrapper)){var n,r,a,o=function(t,e,i){return function(){var n=e.apply(t,arguments);return(// Method extension
t5.extend(n,n,i.methodExt),n)}};for(n=0,r=i.length;n<r;n++)// Value
e[(a=i[n]).name]="function"===a.type?o(t,a.val,a):"object"===a.type?{}:a.val,e[a.name].__dt_wrapper=!0,// Property extension
t5.extend(t,e[a.name],a.propExt)}},// @todo - Is there need for an augment function?
// _Api.augment = function ( inst, name )
// {
// 	// Find src object in the structure from the name
// 	var parts = name.split('.');
// 	_Api.extend( inst, obj );
// };
//     [
//       {
//         name:      'data'                -- string   - Property name
//         val:       function () {},       -- function - Api method (or undefined if just an object
//         methodExt: [ ... ],              -- array    - Array of Api object definitions to extend the method result
//         propExt:   [ ... ]               -- array    - Array of Api object definitions to extend the property
//       },
//       {
//         name:     'row'
//         val:       {},
//         methodExt: [ ... ],
//         propExt:   [
//           {
//             name:      'data'
//             val:       function () {},
//             methodExt: [ ... ],
//             propExt:   [ ... ]
//           },
//           ...
//         ]
//       }
//     ]
t5.register=t3=function(t,e){if(Array.isArray(t)){for(var i=0,n=t.length;i<n;i++)t5.register(t[i],e);return}var r,a,o,s,l=t.split("."),h=oB;for(r=0,a=l.length;r<a;r++){var c=function(t,e){for(var i=0,n=t.length;i<n;i++)if(t[i].name===e)return t[i];return null}(h,o=(s=-1!==l[r].indexOf("()"))?l[r].replace("()",""):l[r]);c||(c={name:o,val:{},methodExt:[],propExt:[],type:"object"},h.push(c)),r===a-1?(c.val=e,c.type="function"==typeof e?"function":rJ.isPlainObject(e)?"object":"other"):h=s?c.methodExt:c.propExt}},t5.registerPlural=t4=function(t,e,i){t5.register(t,i),t5.register(e,function(){var t=i.apply(this,arguments);return t===this?this:t instanceof t5?t.length?Array.isArray(t[0])?new t5(t.context,t[0]):t[0]:void 0:t})};/**
 * Selector for HTML tables. Apply the given selector to the give array of
 * DataTables settings objects.
 *
 * @param {string|integer} [selector] jQuery selector string or integer
 * @param  {array} Array of DataTables settings objects to be filtered
 * @return {array}
 * @ignore
 */var o$=function(t,e){if(Array.isArray(t))return rJ.map(t,function(t){return o$(t,e)});// Integer is used to pick out a table by index
if("number"==typeof t)return[e[t]];// Perform a jQuery selector on the table nodes
var i=rJ.map(e,function(t,e){return t.nTable});return rJ(i).filter(t).map(function(t){return e[rJ.inArray(this,i)]}).toArray()};/**
 * Context selector for the API's context (i.e. the tables the API instance
 * refers to.
 *
 * @name    DataTable.Api#tables
 * @param {string|integer} [selector] Selector to pick which tables the iterator
 *   should operate on. If not given, all tables in the current context are
 *   used. This can be given as a jQuery selector (for example `':gt(0)'`) to
 *   select multiple tables or as an integer to select a single table.
 * @returns {DataTable.Api} Returns a new API instance if a selector is given.
 */t3("tables()",function(t){// A new instance is created if there was a selector specified
return null!=t?new t5(o$(t,this.context)):this}),t3("table()",function(t){var e=this.tables(t),i=e.context;// Truncate to the first matched table
return i.length?new t5(i[0]):e}),t4("tables().nodes()","table().node()",function(){return this.iterator("table",function(t){return t.nTable},1)}),t4("tables().body()","table().body()",function(){return this.iterator("table",function(t){return t.nTBody},1)}),t4("tables().header()","table().header()",function(){return this.iterator("table",function(t){return t.nTHead},1)}),t4("tables().footer()","table().footer()",function(){return this.iterator("table",function(t){return t.nTFoot},1)}),t4("tables().containers()","table().container()",function(){return this.iterator("table",function(t){return t.nTableWrapper},1)}),/**
 * Redraw the tables in the current context.
 */t3("draw()",function(t){return this.iterator("table",function(e){"page"===t?az(e):("string"==typeof t&&(t="full-hold"!==t),aV(e,!1===t))})}),/**
 * Get the current page index.
 *
 * @return {integer} Current page index (zero based)
 *//**
 * Set the current page.
 *
 * Note that if you attempt to show a page which does not exist, DataTables will
 * not throw an error, but rather reset the paging.
 *
 * @param {integer|string} action The paging action to take. This can be one of:
 *  * `integer` - The page index to jump to
 *  * `string` - An action to take:
 *    * `first` - Jump to first page.
 *    * `next` - Jump to the next page
 *    * `previous` - Jump to previous page
 *    * `last` - Jump to the last page.
 * @returns {DataTables.Api} this
 */t3("page()",function(t){return void 0===t?this.page.info().page:this.iterator("table",function(e){ol(e,t)})// not an expensive call
}),/**
 * Paging information for the first table in the current context.
 *
 * If you require paging information for another table, use the `table()` method
 * with a suitable selector.
 *
 * @return {object} Object with the following properties set:
 *  * `page` - Current page index (zero based - i.e. the first page is `0`)
 *  * `pages` - Total number of pages
 *  * `start` - Display index for the first record shown on the current page
 *  * `end` - Display index for the last record shown on the current page
 *  * `length` - Display length (number of records). Note that generally `start
 *    + length = end`, but this is not always true, for example if there are
 *    only 2 records to show on the final page, with a length of 10.
 *  * `recordsTotal` - Full data set length
 *  * `recordsDisplay` - Data set length once the current filtering criterion
 *    are applied.
 */t3("page.info()",function(t){if(0!==this.context.length){var e=this.context[0],i=e._iDisplayStart,n=e.oFeatures.bPaginate?e._iDisplayLength:-1,r=e.fnRecordsDisplay(),a=-1===n;return{page:a?0:Math.floor(i/n),pages:a?1:Math.ceil(r/n),start:i,end:e.fnDisplayEnd(),length:n,recordsTotal:e.fnRecordsTotal(),recordsDisplay:r,serverSide:"ssp"===oW(e)}}}),/**
 * Get the current page length.
 *
 * @return {integer} Current page length. Note `-1` indicates that all records
 *   are to be shown.
 *//**
 * Set the current page length.
 *
 * @param {integer} Page length to set. Use `-1` to show all records.
 * @returns {DataTables.Api} this
 */t3("page.len()",function(t){return(// Note that we can't call this function 'length()' because `length`
// is a Javascript property of functions which defines how many arguments
// the function expects.
void 0===t?0!==this.context.length?this.context[0]._iDisplayLength:void 0:this.iterator("table",function(e){oa(e,t)}))});var oq=function(t,e,i){// Use the draw event to trigger a callback
if(i){var n=new t5(t);n.one("draw",function(){i(n.ajax.json())})}if("ssp"==oW(t))aV(t,e);else{oc(t,!0);// Cancel an existing request
var r=t.jqXHR;r&&4!==r.readyState&&r.abort(),// Trigger xhr
aX(t,[],function(i){aO(t);for(var n=aK(t,i),r=0,a=n.length;r<a;r++)aD(t,n[r]);aV(t,e),oc(t,!1)})}};/**
 * Get the JSON response from the last Ajax request that DataTables made to the
 * server. Note that this returns the JSON from the first table in the current
 * context.
 *
 * @return {object} JSON received from the server.
 */t3("ajax.json()",function(){var t=this.context;if(t.length>0)return t[0].json;// else return undefined;
}),/**
 * Get the data submitted in the last Ajax request
 */t3("ajax.params()",function(){var t=this.context;if(t.length>0)return t[0].oAjaxData;// else return undefined;
}),/**
 * Reload tables from the Ajax data source. Note that this function will
 * automatically re-draw the table when the remote data has been loaded.
 *
 * @param {boolean} [reset=true] Reset (default) or hold the current paging
 *   position. A full re-sort and re-filter is performed when this method is
 *   called, which is why the pagination reset is the default action.
 * @returns {DataTables.Api} this
 */t3("ajax.reload()",function(t,e){return this.iterator("table",function(i){oq(i,!1===e,t)})}),/**
 * Get the current Ajax URL. Note that this returns the URL from the first
 * table in the current context.
 *
 * @return {string} Current Ajax source URL
 *//**
 * Set the Ajax URL. Note that this will set the URL for all tables in the
 * current context.
 *
 * @param {string} url URL to set.
 * @returns {DataTables.Api} this
 */t3("ajax.url()",function(t){var e=this.context;if(void 0===t){// get
if(0===e.length)return;return(e=e[0]).ajax?rJ.isPlainObject(e.ajax)?e.ajax.url:e.ajax:e.sAjaxSource}// set
return this.iterator("table",function(e){rJ.isPlainObject(e.ajax)?e.ajax.url=t:e.ajax=t;// No need to consider sAjaxSource here since DataTables gives priority
// to `ajax` over `sAjaxSource`. So setting `ajax` here, renders any
// value of `sAjaxSource` redundant.
})}),/**
 * Load data from the newly set Ajax URL. Note that this method is only
 * available when `ajax.url()` is used to set a URL. Additionally, this method
 * has the same effect as calling `ajax.reload()` but is provided for
 * convenience when setting a new URL. Like `ajax.reload()` it will
 * automatically redraw the table once the remote data has been loaded.
 *
 * @returns {DataTables.Api} this
 */t3("ajax.url().load()",function(t,e){// Same as a reload, but makes sense to present it for easy access after a
// url change
return this.iterator("table",function(i){oq(i,!1===e,t)})});var oU=function(t,e,i,n,r){var a,o,s,l,h,c,u=[],d=typeof e;for(e&&"string"!==d&&"function"!==d&&void 0!==e.length||(e=[e]),s=0,l=e.length;s<l;s++)for(h=0,c=// Only split on simple strings - complex expressions will be jQuery selectors
(o=e[s]&&e[s].split&&!e[s].match(/[\[\(:]/)?e[s].split(","):[e[s]]).length;h<c;h++)(a=i("string"==typeof o[h]?o[h].trim():o[h]))&&a.length&&(u=u.concat(a));// selector extensions
var f=t2.selector[t];if(f.length)for(s=0,l=f.length;s<l;s++)u=f[s](n,r,u);return ar(u)},oX=function(t){return t||(t={}),t.filter&&void 0===t.search&&(t.search=t.filter),rJ.extend({search:"none",order:"current",page:"all"},t)},oY=function(t){// Reduce the API instance to the first item found
for(var e=0,i=t.length;e<i;e++)if(t[e].length>0)return(// Assign the first element to the first item in the instance
// and truncate the instance and context
t[0]=t[e],t[0].length=1,t.length=1,t.context=[t.context[e]],t);return(// Not found - return an empty instance
t.length=0,t)},oJ=function(t,e){var i,n,r,a=[],o=t.aiDisplay,s=t.aiDisplayMaster,l=e.search,h=e.order,c=e.page;if("ssp"==oW(t))// rows not shown don't exist and the index order is the applied order
// Removed is a special case - for consistency just return an empty
// array
return"removed"===l?[]:at(0,s.length);if("current"==c)// fairly senseless otherwise, regardless of what order and search actually
// are
for(i=t._iDisplayStart,n=t.fnDisplayEnd();i<n;i++)a.push(o[i]);else if("current"==h||"applied"==h){if("none"==l)a=s.slice();else if("applied"==l)a=o.slice();else if("removed"==l){for(var u={},i=0,n=o.length;i<n;i++)u[o[i]]=null;a=rJ.map(s,function(t){return u.hasOwnProperty(t)?null:t})}}else if("index"==h||"original"==h)for(i=0,n=t.aoData.length;i<n;i++)"none"==l?a.push(i):(-1===(r=rJ.inArray(i,o))&&"removed"==l||r>=0&&"applied"==l)&&a.push(i);return a},oG=function(t,e,i){var n;return oU("row",e,function(e){var r=r3(e),a=t.aoData;// Short cut - selector is a number and no options provided (default is
// all records, so no need to check if the index is in there, since it
// must be - dev error if the index doesn't exist).
if(null!==r&&!i||(n||(n=oJ(t,i)),null!==r&&-1!==rJ.inArray(r,n)))return[r];if(null==e||""===e)return n;// Selector - function
if("function"==typeof e)return rJ.map(n,function(t){var i=a[t];return e(t,i._aData,i.nTr)?t:null});// Selector - node
if(e.nodeName){var o=e._DT_RowIndex,s=e._DT_CellIndex;// Property added by DT for fast lookup
if(void 0!==o)return a[o]&&a[o].nTr===e?[o]:[];if(s)return a[s.row]&&a[s.row].nTr===e.parentNode?[s.row]:[];var l=rJ(e).closest("*[data-dt-row]");return l.length?[l.data("dt-row")]:[]}// ID selector. Want to always be able to select rows by id, regardless
// of if the tr element has been created or not, so can't rely upon
// jQuery here - hence a custom implementation. This does not match
// Sizzle's fast selector or HTML4 - in HTML5 the ID can be anything,
// but to select it using a CSS selector engine (like Sizzle or
// querySelect) it would need to need to be escaped for some characters.
// DataTables simplifies this for row selectors since you can select
// only a row. A # indicates an id any anything that follows is the id -
// unescaped.
if("string"==typeof e&&"#"===e.charAt(0)){// get row index from id
var h=t.aIds[e.replace(/^#/,"")];if(void 0!==h)return[h.idx];// need to fall through to jQuery in case there is DOM id that
// matches
}// Get nodes in the order from the `rows` array with null values removed
var c=ae(r7(t.aoData,n,"nTr"));// Selector - jQuery selector string, array of nodes or jQuery object/
// As jQuery's .filter() allows jQuery objects to be passed in filter,
// it also allows arrays, so this will cope with all three options
return rJ(c).filter(e).map(function(){return this._DT_RowIndex}).toArray()},t,i)};t3("rows()",function(t,e){void 0===t?t="":rJ.isPlainObject(t)&&(e=t,t=""),e=oX(e);var i=this.iterator("table",function(i){return oG(i,t,e)},1);return(// Want argument shifting here and in __row_selector?
i.selector.rows=t,i.selector.opts=e,i)}),t3("rows().nodes()",function(){return this.iterator("row",function(t,e){return t.aoData[e].nTr||void 0},1)}),t3("rows().data()",function(){return this.iterator(!0,"rows",function(t,e){return r7(t.aoData,e,"_aData")},1)}),t4("rows().cache()","row().cache()",function(t){return this.iterator("row",function(e,i){var n=e.aoData[i];return"search"===t?n._aFilterData:n._aSortData},1)}),t4("rows().invalidate()","row().invalidate()",function(t){return this.iterator("row",function(e,i){aF(e,i,t)})}),t4("rows().indexes()","row().index()",function(){return this.iterator("row",function(t,e){return e},1)}),t4("rows().ids()","row().id()",function(t){// `iterator` will drop undefined values, but in this case we want them
for(var e=[],i=this.context,n=0,r=i.length;n<r;n++)for(var a=0,o=this[n].length;a<o;a++){var s=i[n].rowIdFn(i[n].aoData[this[n][a]]._aData);e.push((!0===t?"#":"")+s)}return new t5(i,e)}),t4("rows().remove()","row().remove()",function(){var t=this;return this.iterator("row",function(e,i,n){var r,a,o,s,l,h,c=e.aoData,u=c[i];// Update the cached indexes
for(c.splice(i,1),r=0,a=c.length;r<a;r++)// Cells
if(h=(l=c[r]).anCells,null!==l.nTr&&(l.nTr._DT_RowIndex=r),null!==h)for(o=0,s=h.length;o<s;o++)h[o]._DT_CellIndex.row=r;// Delete from the display arrays
aR(e.aiDisplayMaster,i),aR(e.aiDisplay,i),aR(t[n],i,!1),e._iRecordsDisplay>0&&e._iRecordsDisplay--,// Check for an 'overflow' they case for displaying the table
oN(e);// Remove the row's ID reference if there is one
var d=e.rowIdFn(u._aData);void 0!==d&&delete e.aIds[d]}),this.iterator("table",function(t){for(var e=0,i=t.aoData.length;e<i;e++)t.aoData[e].idx=e}),this}),t3("rows.add()",function(t){var e=this.iterator("table",function(e){var i,n,r,a=[];for(n=0,r=t.length;n<r;n++)(i=t[n]).nodeName&&"TR"===i.nodeName.toUpperCase()?a.push(aC(e,i)[0]):a.push(aD(e,i));return a},1),i=this.rows(-1);return i.pop(),rJ.merge(i,e),i}),/**
 *
 */t3("row()",function(t,e){return oY(this.rows(t,e))}),t3("row().data()",function(t){var e=this.context;if(void 0===t)return e.length&&this.length?e[0].aoData[this[0]]._aData:void 0;// Set
var i=e[0].aoData[this[0]];return i._aData=t,Array.isArray(t)&&i.nTr&&i.nTr.id&&aE(e[0].rowId)(t,i.nTr.id),// Automatically invalidate
aF(e[0],this[0],"data"),this}),t3("row().node()",function(){var t=this.context;return t.length&&this.length&&t[0].aoData[this[0]].nTr||null}),t3("row.add()",function(t){// Allow a jQuery object to be passed in - only a single row is added from
// it though - the first element in the set
t instanceof rJ&&t.length&&(t=t[0]);var e=this.iterator("table",function(e){return t.nodeName&&"TR"===t.nodeName.toUpperCase()?aC(e,t)[0]:aD(e,t)});// Return an Api.rows() extended instance, with the newly added row selected
return this.row(e[0])}),rJ(document).on("plugin-init.dt",function(t,e){var i=new t5(e),n="on-plugin-init",r="stateSaveParams."+n,a="destroy. "+n;i.on(r,function(t,e,i){for(var n=e.rowIdFn,r=e.aoData,a=[],o=0;o<r.length;o++)r[o]._detailsShow&&a.push("#"+n(r[o]._aData));i.childRows=a}),i.on(a,function(){i.off(r+" "+a)});var o=i.state.loaded();o&&o.childRows&&i.rows(rJ.map(o.childRows,function(t){return t.replace(/:/g,"\\:")})).every(function(){oj(e,null,"requestChild",[this])})});var oK=function(t,e,i,n){// Convert to array of TR elements
var r=[],a=function(e,i){// Recursion to allow for arrays of jQuery objects
if(Array.isArray(e)||e instanceof rJ){for(var n=0,o=e.length;n<o;n++)a(e[n],i);return}// If we get a TR element, then just add it directly - up to the dev
// to add the correct number of columns etc
if(e.nodeName&&"tr"===e.nodeName.toLowerCase())r.push(e);else{// Otherwise create a row with a wrapper
var s=rJ("<tr><td></td></tr>").addClass(i);rJ("td",s).addClass(i).html(e)[0].colSpan=ax(t),r.push(s[0])}};a(i,n),e._details&&e._details.detach(),e._details=rJ(r),e._detailsShow&&e._details.insertAfter(e.nTr)},oZ=rG.util.throttle(function(t){oM(t[0])},500),oQ=function(t,e){var i=t.context;if(i.length){var n=i[0].aoData[void 0!==e?e:t[0]];n&&n._details&&(n._details.remove(),n._detailsShow=void 0,n._details=void 0,rJ(n.nTr).removeClass("dt-hasChild"),oZ(i))}},o0=function(t,e){var i=t.context;if(i.length&&t.length){var n=i[0].aoData[t[0]];n._details&&(n._detailsShow=e,e?(n._details.insertAfter(n.nTr),rJ(n.nTr).addClass("dt-hasChild")):(n._details.detach(),rJ(n.nTr).removeClass("dt-hasChild")),oj(i[0],null,"childRow",[e,t.row(t[0])]),o1(i[0]),oZ(i))}},o1=function(t){var e=new t5(t),i=".dt.DT_details",n="draw"+i,r="column-sizing"+i,a="destroy"+i,o=t.aoData;e.off(n+" "+r+" "+a),r9(o,"_details").length>0&&(// On each draw, insert the required elements into the document
e.on(n,function(i,n){t===n&&e.rows({page:"current"}).eq(0).each(function(t){// Internal data grab
var e=o[t];e._detailsShow&&e._details.insertAfter(e.nTr)})}),// Column visibility change - update the colspan
e.on(r,function(e,i,n,r){if(t===i)for(var a,s=ax(i),l=0,h=o.length;l<h;l++)(a=o[l])._details&&a._details.children("td[colspan]").attr("colspan",s)}),// Table destroyed - nuke any child rows
e.on(a,function(i,n){if(t===n)for(var r=0,a=o.length;r<a;r++)o[r]._details&&oQ(e,r)}))},o2="row().child",o5=o2+"()";// data can be:
//  tr
//  string
//  jQuery or array of any of the above
t3(o5,function(t,e){var i=this.context;return void 0===t?i.length&&this.length?i[0].aoData[this[0]]._details:void 0:(!0===t?this.child.show():!1===t?oQ(this):i.length&&this.length&&oK(i[0],i[0].aoData[this[0]],t,e),this)}),t3([o2+".show()",o5+".show()"// only when `child()` was called with parameters (without
],function(t){return o0(this,!0),this}),t3([o2+".hide()",o5+".hide()"// only when `child()` was called with parameters (without
],function(){return o0(this,!1),this}),t3([o2+".remove()",o5+".remove()"// only when `child()` was called with parameters (without
],function(){return oQ(this),this}),t3(o2+".isShown()",function(){var t=this.context;return!!t.length&&!!this.length&&(t[0].aoData[this[0]]._detailsShow||!1)});/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Columns
 *
 * {integer}           - column index (>=0 count from left, <0 count from right)
 * "{integer}:visIdx"  - visible column index (i.e. translate to column index)  (>=0 count from left, <0 count from right)
 * "{integer}:visible" - alias for {integer}:visIdx  (>=0 count from left, <0 count from right)
 * "{string}:name"     - column name
 * "{string}"          - jQuery selector on column header nodes
 *
 */// can be an array of these items, comma separated list, or an array of comma
// separated lists
var o3=/^([^:]+):(name|visIdx|visible)$/,o4=function(t,e,i,n,r){for(var a=[],o=0,s=r.length;o<s;o++)a.push(aT(t,r[o],e));return a},o8=function(t,e,i){var n=t.aoColumns,r=r9(n,"sName"),a=r9(n,"nTh");return oU("column",e,function(e){var o=r3(e);// Selector - all
if(""===e)return at(n.length);// Selector - index
if(null!==o)return[o>=0?o:n.length+o// Count from right (+ because its a negative value)
];// Selector = function
if("function"==typeof e){var s=oJ(t,i);return rJ.map(n,function(i,n){return e(n,o4(t,n,0,0,s),a[n])?n:null})}// jQuery or string selector
var l="string"==typeof e?e.match(o3):"";if(l)switch(l[2]){case"visIdx":case"visible":var h=parseInt(l[1],10);// Visible index given, convert to column index
if(h<0){// Counting from the right
var c=rJ.map(n,function(t,e){return t.bVisible?e:null});return[c[c.length+h]]}// Counting from the left
return[av(t,h)];case"name":// match by name. `names` is column index complete and in order
return rJ.map(r,function(t,e){return t===l[1]?e:null});default:return[]}// Cell in the table body
if(e.nodeName&&e._DT_CellIndex)return[e._DT_CellIndex.column];// jQuery selector on the TH elements for the columns
var u=rJ(a).filter(e).map(function(){return rJ.inArray(this,a);// `nodes` is column index complete and in order
}).toArray();if(u.length||!e.nodeName)return u;// Otherwise a node which might have a `dt-column` data attribute, or be
// a child or such an element
var d=rJ(e).closest("*[data-dt-column]");return d.length?[d.data("dt-column")]:[]},t,i)},o6=function(t,e,i){var n,r,a,o,s=t.aoColumns,l=s[e],h=t.aoData;// Get
if(void 0===i)return l.bVisible;// Set
// No change
if(l.bVisible!==i){if(i){// Insert column
// Need to decide if we should use appendChild or insertBefore
var c=rJ.inArray(!0,r9(s,"bVisible"),e+1);for(r=0,a=h.length;r<a;r++)o=h[r].nTr,n=h[r].anCells,o&&o.insertBefore(n[e],n[c]||null)}else rJ(r9(t.aoData,"anCells",e)).detach();// Common actions
l.bVisible=i}};t3("columns()",function(t,e){void 0===t?t="":rJ.isPlainObject(t)&&(e=t,t=""),e=oX(e);var i=this.iterator("table",function(i){return o8(i,t,e)},1);return(// Want argument shifting here and in _row_selector?
i.selector.cols=t,i.selector.opts=e,i)}),t4("columns().header()","column().header()",function(t,e){return this.iterator("column",function(t,e){return t.aoColumns[e].nTh},1)}),t4("columns().footer()","column().footer()",function(t,e){return this.iterator("column",function(t,e){return t.aoColumns[e].nTf},1)}),t4("columns().data()","column().data()",function(){return this.iterator("column-rows",o4,1)}),t4("columns().dataSrc()","column().dataSrc()",function(){return this.iterator("column",function(t,e){return t.aoColumns[e].mData},1)}),t4("columns().cache()","column().cache()",function(t){return this.iterator("column-rows",function(e,i,n,r,a){return r7(e.aoData,a,"search"===t?"_aFilterData":"_aSortData",i)},1)}),t4("columns().nodes()","column().nodes()",function(){return this.iterator("column-rows",function(t,e,i,n,r){return r7(t.aoData,r,"anCells",e)},1)}),t4("columns().visible()","column().visible()",function(t,e){var i=this,n=this.iterator("column",function(e,i){if(void 0===t)return e.aoColumns[i].bVisible;// else
o6(e,i,t)});return void 0!==t&&this.iterator("table",function(n){// Redraw the header after changes
aB(n,n.aoHeader),aB(n,n.aoFooter),n.aiDisplay.length||rJ(n.nTBody).find("td[colspan]").attr("colspan",ax(n)),oM(n),// Second loop once the first is done for events
i.iterator("column",function(i,n){oj(i,null,"column-visibility",[i,n,t,e])}),(void 0===e||e)&&i.columns.adjust()}),n}),t4("columns().indexes()","column().index()",function(t){return this.iterator("column",function(e,i){return"visible"===t?ay(e,i):i},1)}),t3("columns.adjust()",function(){return this.iterator("table",function(t){ab(t)},1)}),t3("column.index()",function(t,e){if(0!==this.context.length){var i=this.context[0];if("fromVisible"===t||"toData"===t)return av(i,e);if("fromData"===t||"toVisible"===t)return ay(i,e)}}),t3("column()",function(t,e){return oY(this.columns(t,e))});var o9=function(t,e,i){var n,r,a,o,s,l,h,c=t.aoData,u=oJ(t,i),d=ae(r7(c,u,"anCells")),f=rJ(aa([],d)),p=t.aoColumns.length;return oU("cell",e,function(e){var i="function"==typeof e;if(null==e||i){for(a=0,// All cells and function selectors
r=[],o=u.length;a<o;a++)for(s=0,n=u[a];s<p;s++)l={row:n,column:s},i?(// Selector - function
h=c[n],e(l,aT(t,n,s),h.anCells?h.anCells[s]:null)&&r.push(l)):r.push(l);return r}// Selector - index
if(rJ.isPlainObject(e))return void 0!==e.column&&void 0!==e.row&&-1!==rJ.inArray(e.row,u)?[e]:[];// Selector - jQuery filtered cells
var d=f.filter(e).map(function(t,e){return{row:e._DT_CellIndex.row,column:e._DT_CellIndex.column}}).toArray();return d.length||!e.nodeName?d:// Otherwise the selector is a node, and there is one last option - the
// element might be a child of an element which has dt-row and dt-column
// data attributes
(h=rJ(e).closest("*[data-dt-row]")).length?[{row:h.data("dt-row"),column:h.data("dt-column")}]:[]},t,i)};t3("cells()",function(t,e,i){// Cell selector
if(rJ.isPlainObject(t)&&(void 0===t.row?(// Selector options in first parameter
i=t,t=null):(// Cell index objects in first parameter
i=e,e=null)),rJ.isPlainObject(e)&&(i=e,e=null),null==e)return this.iterator("table",function(e){return o9(e,t,oX(i))});// The default built in options need to apply to row and columns
var n,r,a,o,s=i?{page:i.page,order:i.order,search:i.search}:{},l=this.columns(e,s),h=this.rows(t,s),c=this.iterator("table",function(t,e){var i=[];for(n=0,r=h[e].length;n<r;n++)for(a=0,o=l[e].length;a<o;a++)i.push({row:h[e][n],column:l[e][a]});return i},1),u=i&&i.selected?this.cells(c,i):c;return rJ.extend(u.selector,{cols:e,rows:t,opts:i}),u}),t4("cells().nodes()","cell().node()",function(){return this.iterator("cell",function(t,e,i){var n=t.aoData[e];return n&&n.anCells?n.anCells[i]:void 0},1)}),t3("cells().data()",function(){return this.iterator("cell",function(t,e,i){return aT(t,e,i)},1)}),t4("cells().cache()","cell().cache()",function(t){return t="search"===t?"_aFilterData":"_aSortData",this.iterator("cell",function(e,i,n){return e.aoData[i][t][n]},1)}),t4("cells().render()","cell().render()",function(t){return this.iterator("cell",function(e,i,n){return aT(e,i,n,t)},1)}),t4("cells().indexes()","cell().index()",function(){return this.iterator("cell",function(t,e,i){return{row:e,column:i,columnVisible:ay(t,i)}},1)}),t4("cells().invalidate()","cell().invalidate()",function(t){return this.iterator("cell",function(e,i,n){aF(e,i,t,n)})}),t3("cell()",function(t,e,i){return oY(this.cells(t,e,i))}),t3("cell().data()",function(t){var e=this.context,i=this[0];return void 0===t?e.length&&i.length?aT(e[0],i[0].row,i[0].column):void 0:(// Set
ak(e[0],i[0].row,i[0].column,t),aF(e[0],i[0].row,"data",i[0].column),this)}),/**
 * Get current ordering (sorting) that has been applied to the table.
 *
 * @returns {array} 2D array containing the sorting information for the first
 *   table in the current context. Each element in the parent array represents
 *   a column being sorted upon (i.e. multi-sorting with two columns would have
 *   2 inner arrays). The inner arrays may have 2 or 3 elements. The first is
 *   the column index that the sorting condition applies to, the second is the
 *   direction of the sort (`desc` or `asc`) and, optionally, the third is the
 *   index of the sorting order from the `column.sorting` initialisation array.
 *//**
 * Set the ordering for the table.
 *
 * @param {integer} order Column index to sort upon.
 * @param {string} direction Direction of the sort to be applied (`asc` or `desc`)
 * @returns {DataTables.Api} this
 *//**
 * Set the ordering for the table.
 *
 * @param {array} order 1D array of sorting information to be applied.
 * @param {array} [...] Optional additional sorting conditions
 * @returns {DataTables.Api} this
 *//**
 * Set the ordering for the table.
 *
 * @param {array} order 2D array of sorting information to be applied.
 * @returns {DataTables.Api} this
 */t3("order()",function(t,e){var i=this.context;return void 0===t?0!==i.length?i[0].aaSorting:void 0:("number"==typeof t?t=[[t,e]]:t.length&&!Array.isArray(t[0])&&(t=Array.prototype.slice.call(arguments)),this.iterator("table",function(e){e.aaSorting=t.slice()}))}),/**
 * Attach a sort listener to an element for a given column
 *
 * @param {node|jQuery|string} node Identifier for the element(s) to attach the
 *   listener to. This can take the form of a single DOM node, a jQuery
 *   collection of nodes or a jQuery selector which will identify the node(s).
 * @param {integer} column the column that a click on this node will sort on
 * @param {function} [callback] callback function when sort is run
 * @returns {DataTables.Api} this
 */t3("order.listener()",function(t,e,i){return this.iterator("table",function(n){oC(n,t,e,i)})}),t3("order.fixed()",function(t){if(!t){var e=this.context,i=e.length?e[0].aaSortingFixed:void 0;return Array.isArray(i)?{pre:i}:i}return this.iterator("table",function(e){e.aaSortingFixed=rJ.extend(!0,{},t)})}),// Order by the selected column(s)
t3(["columns().order()","column().order()"],function(t){var e=this;return this.iterator("table",function(i,n){var r=[];rJ.each(e[n],function(e,i){r.push([i,t])}),i.aaSorting=r})}),t3("search()",function(t,e,i,n){var r=this.context;return void 0===t?0!==r.length?r[0].oPreviousSearch.sSearch:void 0:this.iterator("table",function(r){r.oFeatures.bFilter&&aQ(r,rJ.extend({},r.oPreviousSearch,{sSearch:t+"",bRegex:null!==e&&e,bSmart:null===i||i,bCaseInsensitive:null===n||n}),1)})}),t4("columns().search()","column().search()",function(t,e,i,n){return this.iterator("column",function(r,a){var o=r.aoPreSearchCols;if(void 0===t)return o[a].sSearch;// set
r.oFeatures.bFilter&&(rJ.extend(o[a],{sSearch:t+"",bRegex:null!==e&&e,bSmart:null===i||i,bCaseInsensitive:null===n||n}),aQ(r,r.oPreviousSearch,1))})}),/*
 * State API methods
 */t3("state()",function(){return this.context.length?this.context[0].oSavedState:null}),t3("state.clear()",function(){return this.iterator("table",function(t){// Save an empty object
t.fnStateSaveCallback.call(t.oInstance,t,{})})}),t3("state.loaded()",function(){return this.context.length?this.context[0].oLoadedState:null}),t3("state.save()",function(){return this.iterator("table",function(t){oM(t)})}),/**
 * Set the jQuery or window object to be used by DataTables
 *
 * @param {*} module Library / container object
 * @param {string} [type] Library or container type `lib`, `win` or `datetime`.
 *   If not provided, automatic detection is attempted.
 */rG.use=function(t,e){"lib"===e||t.fn?rJ=t:"win"==e||t.document?(window=t,document=t.document):("datetime"===e||"DateTime"===t.type)&&(rG.DateTime=t)},/**
 * CommonJS factory function pass through. This will check if the arguments
 * given are a window object or a jQuery object. If so they are set
 * accordingly.
 * @param {*} root Window
 * @param {*} jq jQUery
 * @returns {boolean} Indicator
 */rG.factory=function(t,e){var i=!1;return t&&t.document&&(window=t,document=t.document),e&&e.fn&&e.fn.jquery&&(rJ=e,i=!0),i},/**
 * Provide a common method for plug-ins to check the version of DataTables being
 * used, in order to ensure compatibility.
 *
 *  @param {string} version Version string to check for, in the format "X.Y.Z".
 *    Note that the formats "X" and "X.Y" are also acceptable.
 *  @returns {boolean} true if this version of DataTables is greater or equal to
 *    the required version, or false if this version of DataTales is not
 *    suitable
 *  @static
 *  @dtopt API-Static
 *
 *  @example
 *    alert( $.fn.dataTable.versionCheck( '1.9.0' ) );
 */rG.versionCheck=rG.fnVersionCheck=function(t){for(var e,i,n=rG.version.split("."),r=t.split("."),a=0,o=r.length;a<o;a++)// Parts are the same, keep comparing
if((e=parseInt(n[a],10)||0)!==(i=parseInt(r[a],10)||0))// Parts are different, return immediately
return e>i;return!0},/**
 * Check if a `<table>` node is a DataTable table already or not.
 *
 *  @param {node|jquery|string} table Table node, jQuery object or jQuery
 *      selector for the table to test. Note that if more than more than one
 *      table is passed on, only the first will be checked
 *  @returns {boolean} true the table given is a DataTable, or false otherwise
 *  @static
 *  @dtopt API-Static
 *
 *  @example
 *    if ( ! $.fn.DataTable.isDataTable( '#example' ) ) {
 *      $('#example').dataTable();
 *    }
 */rG.isDataTable=rG.fnIsDataTable=function(t){var e=rJ(t).get(0),i=!1;return t instanceof rG.Api||(rJ.each(rG.settings,function(t,n){var r=n.nScrollHead?rJ("table",n.nScrollHead)[0]:null,a=n.nScrollFoot?rJ("table",n.nScrollFoot)[0]:null;(n.nTable===e||r===e||a===e)&&(i=!0)}),i)},/**
 * Get all DataTable tables that have been initialised - optionally you can
 * select to get only currently visible tables.
 *
 *  @param {boolean} [visible=false] Flag to indicate if you want all (default)
 *    or visible tables only.
 *  @returns {array} Array of `table` nodes (not DataTable instances) which are
 *    DataTables
 *  @static
 *  @dtopt API-Static
 *
 *  @example
 *    $.each( $.fn.dataTable.tables(true), function () {
 *      $(table).DataTable().columns.adjust();
 *    } );
 */rG.tables=rG.fnTables=function(t){var e=!1;rJ.isPlainObject(t)&&(e=t.api,t=t.visible);var i=rJ.map(rG.settings,function(e){if(!t||t&&rJ(e.nTable).is(":visible"))return e.nTable});return e?new t5(i):i},/**
 * Convert from camel case parameters to Hungarian notation. This is made public
 * for the extensions to provide the same ability as DataTables core to accept
 * either the 1.9 style Hungarian notation, or the 1.10+ style camelCase
 * parameters.
 *
 *  @param {object} src The model object which holds all parameters that can be
 *    mapped.
 *  @param {object} user The object to convert from camel case to Hungarian.
 *  @param {boolean} force When set to `true`, properties which already have a
 *    Hungarian value in the `user` object will be overwritten. Otherwise they
 *    won't be.
 */rG.camelToHungarian=al,/**
 *
 */t3("$()",function(t,e){var i=this.rows(e).nodes(),n=rJ(i);return rJ([].concat(n.filter(t).toArray(),n.find(t).toArray()))}),// jQuery functions to operate on the tables
rJ.each(["on","one","off"],function(t,e){t3(e+"()",function(){var t=Array.prototype.slice.call(arguments);// Add the `dt` namespace automatically if it isn't already present
t[0]=rJ.map(t[0].split(/\s/),function(t){return t.match(/\.dt\b/)?t:t+".dt"}).join(" ");var i=rJ(this.tables().nodes());return i[e].apply(i,t),this})}),t3("clear()",function(){return this.iterator("table",function(t){aO(t)})}),t3("settings()",function(){return new t5(this.context,this.context)}),t3("init()",function(){var t=this.context;return t.length?t[0].oInit:null}),t3("data()",function(){return this.iterator("table",function(t){return r9(t.aoData,"_aData")}).flatten()}),t3("destroy()",function(t){return t=t||!1,this.iterator("table",function(e){var i,n=e.oClasses,r=e.nTable,a=e.nTBody,o=e.nTHead,s=e.nTFoot,l=rJ(r),h=rJ(a),c=rJ(e.nTableWrapper),u=rJ.map(e.aoData,function(t){return t.nTr});// Flag to note that the table is currently being destroyed - no action
// should be taken
e.bDestroying=!0,// Fire off the destroy callbacks for plug-ins etc
oj(e,"aoDestroyCallback","destroy",[e]),t||new t5(e).columns().visible(!0),// Blitz all `DT` namespaced events (these are internal events, the
// lowercase, `dt` events are user subscribed and they are responsible
// for removing them
c.off(".DT").find(":not(tbody *)").off(".DT"),rJ(window).off(".DT-"+e.sInstance),r!=o.parentNode&&(l.children("thead").detach(),l.append(o)),s&&r!=s.parentNode&&(l.children("tfoot").detach(),l.append(s)),e.aaSorting=[],e.aaSortingFixed=[],oT(e),rJ(u).removeClass(e.asStripeClasses.join(" ")),rJ("th, td",o).removeClass(n.sSortable+" "+n.sSortableAsc+" "+n.sSortableDesc+" "+n.sSortableNone),// Add the TR elements back into the table in their original order
h.children().detach(),h.append(u);var d=e.nTableWrapper.parentNode,f=t?"remove":"detach";l[f](),c[f](),!t&&d&&(// insertBefore acts like appendChild if !arg[1]
d.insertBefore(r,e.nTableReinsertBefore),// Restore the width of the original table - was read from the style property,
// so we can restore directly to that
l.css("width",e.sDestroyWidth).removeClass(n.sTable),// If the were originally stripe classes - then we add them back here.
// Note this is not fool proof (for example if not all rows had stripe
// classes - but it's a good effort without getting carried away
(i=e.asDestroyStripes.length)&&h.children().each(function(t){rJ(this).addClass(e.asDestroyStripes[t%i])}));/* Remove the settings object from the settings array */var p=rJ.inArray(e,rG.settings);-1!==p&&rG.settings.splice(p,1)})}),// Add the `every()` method for rows, columns and cells in a compact form
rJ.each(["column","row","cell"],function(t,e){t3(e+"s().every()",function(t){var i=this.selector.opts,n=this;return this.iterator(e,function(r,a,o,s,l){// Rows and columns:
//  arg1 - index
//  arg2 - table counter
//  arg3 - loop counter
//  arg4 - undefined
// Cells:
//  arg1 - row index
//  arg2 - column index
//  arg3 - table counter
//  arg4 - loop counter
t.call(n[e](a,"cell"===e?o:i,"cell"===e?i:void 0),a,o,s,l)})})}),// i18n method for extensions to be able to use the language object from the
// DataTable
t3("i18n()",function(t,e,i){var n=this.context[0],r=aL(t)(n.oLanguage);return void 0===r&&(r=e),void 0!==i&&rJ.isPlainObject(r)&&(r=void 0!==r[i]?r[i]:r._),"string"==typeof r?r.replace("%d",i)// nb: plural might be undefined,
:r}),/**
 * Version string for plug-ins to check compatibility. Allowed format is
 * `a.b.c-d` where: a:int, b:int, c:int, d:string(dev|beta|alpha). `d` is used
 * only for non-release builds. See https://semver.org/ for more information.
 *  @member
 *  @type string
 *  @default Version number
 */rG.version="1.13.7",/**
 * Private data store, containing all of the settings objects that are
 * created for the tables on a given page.
 *
 * Note that the `DataTable.settings` object is aliased to
 * `jQuery.fn.dataTableExt` through which it may be accessed and
 * manipulated, or `jQuery.fn.dataTable.settings`.
 *  @member
 *  @type array
 *  @default []
 *  @private
 */rG.settings=[],/**
 * Object models container, for the various models that DataTables has
 * available to it. These models define the objects that are used to hold
 * the active state and configuration of the table.
 *  @namespace
 */rG.models={},/**
 * Template object for the way in which DataTables holds information about
 * search information for the global filter and individual column filters.
 *  @namespace
 */rG.models.oSearch={/**
	 * Flag to indicate if the filtering should be case insensitive or not
	 *  @type boolean
	 *  @default true
	 */bCaseInsensitive:!0,/**
	 * Applied search term
	 *  @type string
	 *  @default <i>Empty string</i>
	 */sSearch:"",/**
	 * Flag to indicate if the search term should be interpreted as a
	 * regular expression (true) or not (false) and therefore and special
	 * regex characters escaped.
	 *  @type boolean
	 *  @default false
	 */bRegex:!1,/**
	 * Flag to indicate if DataTables is to use its smart filtering or not.
	 *  @type boolean
	 *  @default true
	 */bSmart:!0,/**
	 * Flag to indicate if DataTables should only trigger a search when
	 * the return key is pressed.
	 *  @type boolean
	 *  @default false
	 */return:!1},/**
 * Template object for the way in which DataTables holds information about
 * each individual row. This is the object format used for the settings
 * aoData array.
 *  @namespace
 */rG.models.oRow={/**
	 * TR element for the row
	 *  @type node
	 *  @default null
	 */nTr:null,/**
	 * Array of TD elements for each row. This is null until the row has been
	 * created.
	 *  @type array nodes
	 *  @default []
	 */anCells:null,/**
	 * Data object from the original data source for the row. This is either
	 * an array if using the traditional form of DataTables, or an object if
	 * using mData options. The exact type will depend on the passed in
	 * data from the data source, or will be an array if using DOM a data
	 * source.
	 *  @type array|object
	 *  @default []
	 */_aData:[],/**
	 * Sorting data cache - this array is ostensibly the same length as the
	 * number of columns (although each index is generated only as it is
	 * needed), and holds the data that is used for sorting each column in the
	 * row. We do this cache generation at the start of the sort in order that
	 * the formatting of the sort data need be done only once for each cell
	 * per sort. This array should not be read from or written to by anything
	 * other than the master sorting methods.
	 *  @type array
	 *  @default null
	 *  @private
	 */_aSortData:null,/**
	 * Per cell filtering data cache. As per the sort data cache, used to
	 * increase the performance of the filtering in DataTables
	 *  @type array
	 *  @default null
	 *  @private
	 */_aFilterData:null,/**
	 * Filtering data cache. This is the same as the cell filtering cache, but
	 * in this case a string rather than an array. This is easily computed with
	 * a join on `_aFilterData`, but is provided as a cache so the join isn't
	 * needed on every search (memory traded for performance)
	 *  @type array
	 *  @default null
	 *  @private
	 */_sFilterRow:null,/**
	 * Cache of the class name that DataTables has applied to the row, so we
	 * can quickly look at this variable rather than needing to do a DOM check
	 * on className for the nTr property.
	 *  @type string
	 *  @default <i>Empty string</i>
	 *  @private
	 */_sRowStripe:"",/**
	 * Denote if the original data source was from the DOM, or the data source
	 * object. This is used for invalidating data, so DataTables can
	 * automatically read data from the original source, unless uninstructed
	 * otherwise.
	 *  @type string
	 *  @default null
	 *  @private
	 */src:null,/**
	 * Index in the aoData array. This saves an indexOf lookup when we have the
	 * object, but want to know the index
	 *  @type integer
	 *  @default -1
	 *  @private
	 */idx:-1},/**
 * Template object for the column information object in DataTables. This object
 * is held in the settings aoColumns array and contains all the information that
 * DataTables needs about each individual column.
 *
 * Note that this object is related to {@link DataTable.defaults.column}
 * but this one is the internal data store for DataTables's cache of columns.
 * It should NOT be manipulated outside of DataTables. Any configuration should
 * be done through the initialisation options.
 *  @namespace
 */rG.models.oColumn={/**
	 * Column index. This could be worked out on-the-fly with $.inArray, but it
	 * is faster to just hold it as a variable
	 *  @type integer
	 *  @default null
	 */idx:null,/**
	 * A list of the columns that sorting should occur on when this column
	 * is sorted. That this property is an array allows multi-column sorting
	 * to be defined for a column (for example first name / last name columns
	 * would benefit from this). The values are integers pointing to the
	 * columns to be sorted on (typically it will be a single integer pointing
	 * at itself, but that doesn't need to be the case).
	 *  @type array
	 */aDataSort:null,/**
	 * Define the sorting directions that are applied to the column, in sequence
	 * as the column is repeatedly sorted upon - i.e. the first value is used
	 * as the sorting direction when the column if first sorted (clicked on).
	 * Sort it again (click again) and it will move on to the next index.
	 * Repeat until loop.
	 *  @type array
	 */asSorting:null,/**
	 * Flag to indicate if the column is searchable, and thus should be included
	 * in the filtering or not.
	 *  @type boolean
	 */bSearchable:null,/**
	 * Flag to indicate if the column is sortable or not.
	 *  @type boolean
	 */bSortable:null,/**
	 * Flag to indicate if the column is currently visible in the table or not
	 *  @type boolean
	 */bVisible:null,/**
	 * Store for manual type assignment using the `column.type` option. This
	 * is held in store so we can manipulate the column's `sType` property.
	 *  @type string
	 *  @default null
	 *  @private
	 */_sManualType:null,/**
	 * Flag to indicate if HTML5 data attributes should be used as the data
	 * source for filtering or sorting. True is either are.
	 *  @type boolean
	 *  @default false
	 *  @private
	 */_bAttrSrc:!1,/**
	 * Developer definable function that is called whenever a cell is created (Ajax source,
	 * etc) or processed for input (DOM source). This can be used as a compliment to mRender
	 * allowing you to modify the DOM element (add background colour for example) when the
	 * element is available.
	 *  @type function
	 *  @param {element} nTd The TD node that has been created
	 *  @param {*} sData The Data for the cell
	 *  @param {array|object} oData The data for the whole row
	 *  @param {int} iRow The row index for the aoData data store
	 *  @default null
	 */fnCreatedCell:null,/**
	 * Function to get data from a cell in a column. You should <b>never</b>
	 * access data directly through _aData internally in DataTables - always use
	 * the method attached to this property. It allows mData to function as
	 * required. This function is automatically assigned by the column
	 * initialisation method
	 *  @type function
	 *  @param {array|object} oData The data array/object for the array
	 *    (i.e. aoData[]._aData)
	 *  @param {string} sSpecific The specific data type you want to get -
	 *    'display', 'type' 'filter' 'sort'
	 *  @returns {*} The data for the cell from the given row's data
	 *  @default null
	 */fnGetData:null,/**
	 * Function to set data for a cell in the column. You should <b>never</b>
	 * set the data directly to _aData internally in DataTables - always use
	 * this method. It allows mData to function as required. This function
	 * is automatically assigned by the column initialisation method
	 *  @type function
	 *  @param {array|object} oData The data array/object for the array
	 *    (i.e. aoData[]._aData)
	 *  @param {*} sValue Value to set
	 *  @default null
	 */fnSetData:null,/**
	 * Property to read the value for the cells in the column from the data
	 * source array / object. If null, then the default content is used, if a
	 * function is given then the return from the function is used.
	 *  @type function|int|string|null
	 *  @default null
	 */mData:null,/**
	 * Partner property to mData which is used (only when defined) to get
	 * the data - i.e. it is basically the same as mData, but without the
	 * 'set' option, and also the data fed to it is the result from mData.
	 * This is the rendering method to match the data method of mData.
	 *  @type function|int|string|null
	 *  @default null
	 */mRender:null,/**
	 * Unique header TH/TD element for this column - this is what the sorting
	 * listener is attached to (if sorting is enabled.)
	 *  @type node
	 *  @default null
	 */nTh:null,/**
	 * Unique footer TH/TD element for this column (if there is one). Not used
	 * in DataTables as such, but can be used for plug-ins to reference the
	 * footer for each column.
	 *  @type node
	 *  @default null
	 */nTf:null,/**
	 * The class to apply to all TD elements in the table's TBODY for the column
	 *  @type string
	 *  @default null
	 */sClass:null,/**
	 * When DataTables calculates the column widths to assign to each column,
	 * it finds the longest string in each column and then constructs a
	 * temporary table and reads the widths from that. The problem with this
	 * is that "mmm" is much wider then "iiii", but the latter is a longer
	 * string - thus the calculation can go wrong (doing it properly and putting
	 * it into an DOM object and measuring that is horribly(!) slow). Thus as
	 * a "work around" we provide this option. It will append its value to the
	 * text that is found to be the longest string for the column - i.e. padding.
	 *  @type string
	 */sContentPadding:null,/**
	 * Allows a default value to be given for a column's data, and will be used
	 * whenever a null data source is encountered (this can be because mData
	 * is set to null, or because the data source itself is null).
	 *  @type string
	 *  @default null
	 */sDefaultContent:null,/**
	 * Name for the column, allowing reference to the column by name as well as
	 * by index (needs a lookup to work by name).
	 *  @type string
	 */sName:null,/**
	 * Custom sorting data type - defines which of the available plug-ins in
	 * afnSortData the custom sorting will use - if any is defined.
	 *  @type string
	 *  @default std
	 */sSortDataType:"std",/**
	 * Class to be applied to the header element when sorting on this column
	 *  @type string
	 *  @default null
	 */sSortingClass:null,/**
	 * Class to be applied to the header element when sorting on this column -
	 * when jQuery UI theming is used.
	 *  @type string
	 *  @default null
	 */sSortingClassJUI:null,/**
	 * Title of the column - what is seen in the TH element (nTh).
	 *  @type string
	 */sTitle:null,/**
	 * Column sorting and filtering type
	 *  @type string
	 *  @default null
	 */sType:null,/**
	 * Width of the column
	 *  @type string
	 *  @default null
	 */sWidth:null,/**
	 * Width of the column when it was first "encountered"
	 *  @type string
	 *  @default null
	 */sWidthOrig:null},/*
 * Developer note: The properties of the object below are given in Hungarian
 * notation, that was used as the interface for DataTables prior to v1.10, however
 * from v1.10 onwards the primary interface is camel case. In order to avoid
 * breaking backwards compatibility utterly with this change, the Hungarian
 * version is still, internally the primary interface, but is is not documented
 * - hence the @name tags in each doc comment. This allows a Javascript function
 * to create a map from Hungarian notation to camel case (going the other direction
 * would require each property to be listed, which would add around 3K to the size
 * of DataTables, while this method is about a 0.5K hit).
 *
 * Ultimately this does pave the way for Hungarian notation to be dropped
 * completely, but that is a massive amount of work and will break current
 * installs (therefore is on-hold until v2).
 *//**
 * Initialisation options that can be given to DataTables at initialisation
 * time.
 *  @namespace
 */rG.defaults={/**
	 * An array of data to use for the table, passed in at initialisation which
	 * will be used in preference to any data which is already in the DOM. This is
	 * particularly useful for constructing tables purely in Javascript, for
	 * example with a custom Ajax call.
	 *  @type array
	 *  @default null
	 *
	 *  @dtopt Option
	 *  @name DataTable.defaults.data
	 *
	 *  @example
	 *    // Using a 2D array data source
	 *    $(document).ready( function () {
	 *      $('#example').dataTable( {
	 *        "data": [
	 *          ['Trident', 'Internet Explorer 4.0', 'Win 95+', 4, 'X'],
	 *          ['Trident', 'Internet Explorer 5.0', 'Win 95+', 5, 'C'],
	 *        ],
	 *        "columns": [
	 *          { "title": "Engine" },
	 *          { "title": "Browser" },
	 *          { "title": "Platform" },
	 *          { "title": "Version" },
	 *          { "title": "Grade" }
	 *        ]
	 *      } );
	 *    } );
	 *
	 *  @example
	 *    // Using an array of objects as a data source (`data`)
	 *    $(document).ready( function () {
	 *      $('#example').dataTable( {
	 *        "data": [
	 *          {
	 *            "engine":   "Trident",
	 *            "browser":  "Internet Explorer 4.0",
	 *            "platform": "Win 95+",
	 *            "version":  4,
	 *            "grade":    "X"
	 *          },
	 *          {
	 *            "engine":   "Trident",
	 *            "browser":  "Internet Explorer 5.0",
	 *            "platform": "Win 95+",
	 *            "version":  5,
	 *            "grade":    "C"
	 *          }
	 *        ],
	 *        "columns": [
	 *          { "title": "Engine",   "data": "engine" },
	 *          { "title": "Browser",  "data": "browser" },
	 *          { "title": "Platform", "data": "platform" },
	 *          { "title": "Version",  "data": "version" },
	 *          { "title": "Grade",    "data": "grade" }
	 *        ]
	 *      } );
	 *    } );
	 */aaData:null,/**
	 * If ordering is enabled, then DataTables will perform a first pass sort on
	 * initialisation. You can define which column(s) the sort is performed
	 * upon, and the sorting direction, with this variable. The `sorting` array
	 * should contain an array for each column to be sorted initially containing
	 * the column's index and a direction string ('asc' or 'desc').
	 *  @type array
	 *  @default [[0,'asc']]
	 *
	 *  @dtopt Option
	 *  @name DataTable.defaults.order
	 *
	 *  @example
	 *    // Sort by 3rd column first, and then 4th column
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "order": [[2,'asc'], [3,'desc']]
	 *      } );
	 *    } );
	 *
	 *    // No initial sorting
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "order": []
	 *      } );
	 *    } );
	 */aaSorting:[[0,"asc"]],/**
	 * This parameter is basically identical to the `sorting` parameter, but
	 * cannot be overridden by user interaction with the table. What this means
	 * is that you could have a column (visible or hidden) which the sorting
	 * will always be forced on first - any sorting after that (from the user)
	 * will then be performed as required. This can be useful for grouping rows
	 * together.
	 *  @type array
	 *  @default null
	 *
	 *  @dtopt Option
	 *  @name DataTable.defaults.orderFixed
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "orderFixed": [[0,'asc']]
	 *      } );
	 *    } )
	 */aaSortingFixed:[],/**
	 * DataTables can be instructed to load data to display in the table from a
	 * Ajax source. This option defines how that Ajax call is made and where to.
	 *
	 * The `ajax` property has three different modes of operation, depending on
	 * how it is defined. These are:
	 *
	 * * `string` - Set the URL from where the data should be loaded from.
	 * * `object` - Define properties for `jQuery.ajax`.
	 * * `function` - Custom data get function
	 *
	 * `string`
	 * --------
	 *
	 * As a string, the `ajax` property simply defines the URL from which
	 * DataTables will load data.
	 *
	 * `object`
	 * --------
	 *
	 * As an object, the parameters in the object are passed to
	 * [jQuery.ajax](https://api.jquery.com/jQuery.ajax/) allowing fine control
	 * of the Ajax request. DataTables has a number of default parameters which
	 * you can override using this option. Please refer to the jQuery
	 * documentation for a full description of the options available, although
	 * the following parameters provide additional options in DataTables or
	 * require special consideration:
	 *
	 * * `data` - As with jQuery, `data` can be provided as an object, but it
	 *   can also be used as a function to manipulate the data DataTables sends
	 *   to the server. The function takes a single parameter, an object of
	 *   parameters with the values that DataTables has readied for sending. An
	 *   object may be returned which will be merged into the DataTables
	 *   defaults, or you can add the items to the object that was passed in and
	 *   not return anything from the function. This supersedes `fnServerParams`
	 *   from DataTables 1.9-.
	 *
	 * * `dataSrc` - By default DataTables will look for the property `data` (or
	 *   `aaData` for compatibility with DataTables 1.9-) when obtaining data
	 *   from an Ajax source or for server-side processing - this parameter
	 *   allows that property to be changed. You can use Javascript dotted
	 *   object notation to get a data source for multiple levels of nesting, or
	 *   it my be used as a function. As a function it takes a single parameter,
	 *   the JSON returned from the server, which can be manipulated as
	 *   required, with the returned value being that used by DataTables as the
	 *   data source for the table. This supersedes `sAjaxDataProp` from
	 *   DataTables 1.9-.
	 *
	 * * `success` - Should not be overridden it is used internally in
	 *   DataTables. To manipulate / transform the data returned by the server
	 *   use `ajax.dataSrc`, or use `ajax` as a function (see below).
	 *
	 * `function`
	 * ----------
	 *
	 * As a function, making the Ajax call is left up to yourself allowing
	 * complete control of the Ajax request. Indeed, if desired, a method other
	 * than Ajax could be used to obtain the required data, such as Web storage
	 * or an AIR database.
	 *
	 * The function is given four parameters and no return is required. The
	 * parameters are:
	 *
	 * 1. _object_ - Data to send to the server
	 * 2. _function_ - Callback function that must be executed when the required
	 *    data has been obtained. That data should be passed into the callback
	 *    as the only parameter
	 * 3. _object_ - DataTables settings object for the table
	 *
	 * Note that this supersedes `fnServerData` from DataTables 1.9-.
	 *
	 *  @type string|object|function
	 *  @default null
	 *
	 *  @dtopt Option
	 *  @name DataTable.defaults.ajax
	 *  @since 1.10.0
	 *
	 * @example
	 *   // Get JSON data from a file via Ajax.
	 *   // Note DataTables expects data in the form `{ data: [ ...data... ] }` by default).
	 *   $('#example').dataTable( {
	 *     "ajax": "data.json"
	 *   } );
	 *
	 * @example
	 *   // Get JSON data from a file via Ajax, using `dataSrc` to change
	 *   // `data` to `tableData` (i.e. `{ tableData: [ ...data... ] }`)
	 *   $('#example').dataTable( {
	 *     "ajax": {
	 *       "url": "data.json",
	 *       "dataSrc": "tableData"
	 *     }
	 *   } );
	 *
	 * @example
	 *   // Get JSON data from a file via Ajax, using `dataSrc` to read data
	 *   // from a plain array rather than an array in an object
	 *   $('#example').dataTable( {
	 *     "ajax": {
	 *       "url": "data.json",
	 *       "dataSrc": ""
	 *     }
	 *   } );
	 *
	 * @example
	 *   // Manipulate the data returned from the server - add a link to data
	 *   // (note this can, should, be done using `render` for the column - this
	 *   // is just a simple example of how the data can be manipulated).
	 *   $('#example').dataTable( {
	 *     "ajax": {
	 *       "url": "data.json",
	 *       "dataSrc": function ( json ) {
	 *         for ( var i=0, ien=json.length ; i<ien ; i++ ) {
	 *           json[i][0] = '<a href="/message/'+json[i][0]+'>View message</a>';
	 *         }
	 *         return json;
	 *       }
	 *     }
	 *   } );
	 *
	 * @example
	 *   // Add data to the request
	 *   $('#example').dataTable( {
	 *     "ajax": {
	 *       "url": "data.json",
	 *       "data": function ( d ) {
	 *         return {
	 *           "extra_search": $('#extra').val()
	 *         };
	 *       }
	 *     }
	 *   } );
	 *
	 * @example
	 *   // Send request as POST
	 *   $('#example').dataTable( {
	 *     "ajax": {
	 *       "url": "data.json",
	 *       "type": "POST"
	 *     }
	 *   } );
	 *
	 * @example
	 *   // Get the data from localStorage (could interface with a form for
	 *   // adding, editing and removing rows).
	 *   $('#example').dataTable( {
	 *     "ajax": function (data, callback, settings) {
	 *       callback(
	 *         JSON.parse( localStorage.getItem('dataTablesData') )
	 *       );
	 *     }
	 *   } );
	 */ajax:null,/**
	 * This parameter allows you to readily specify the entries in the length drop
	 * down menu that DataTables shows when pagination is enabled. It can be
	 * either a 1D array of options which will be used for both the displayed
	 * option and the value, or a 2D array which will use the array in the first
	 * position as the value, and the array in the second position as the
	 * displayed options (useful for language strings such as 'All').
	 *
	 * Note that the `pageLength` property will be automatically set to the
	 * first value given in this array, unless `pageLength` is also provided.
	 *  @type array
	 *  @default [ 10, 25, 50, 100 ]
	 *
	 *  @dtopt Option
	 *  @name DataTable.defaults.lengthMenu
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]]
	 *      } );
	 *    } );
	 */aLengthMenu:[10,25,50,100],/**
	 * The `columns` option in the initialisation parameter allows you to define
	 * details about the way individual columns behave. For a full list of
	 * column options that can be set, please see
	 * {@link DataTable.defaults.column}. Note that if you use `columns` to
	 * define your columns, you must have an entry in the array for every single
	 * column that you have in your table (these can be null if you don't which
	 * to specify any options).
	 *  @member
	 *
	 *  @name DataTable.defaults.column
	 */aoColumns:null,/**
	 * Very similar to `columns`, `columnDefs` allows you to target a specific
	 * column, multiple columns, or all columns, using the `targets` property of
	 * each object in the array. This allows great flexibility when creating
	 * tables, as the `columnDefs` arrays can be of any length, targeting the
	 * columns you specifically want. `columnDefs` may use any of the column
	 * options available: {@link DataTable.defaults.column}, but it _must_
	 * have `targets` defined in each object in the array. Values in the `targets`
	 * array may be:
	 *   <ul>
	 *     <li>a string - class name will be matched on the TH for the column</li>
	 *     <li>0 or a positive integer - column index counting from the left</li>
	 *     <li>a negative integer - column index counting from the right</li>
	 *     <li>the string "_all" - all columns (i.e. assign a default)</li>
	 *   </ul>
	 *  @member
	 *
	 *  @name DataTable.defaults.columnDefs
	 */aoColumnDefs:null,/**
	 * Basically the same as `search`, this parameter defines the individual column
	 * filtering state at initialisation time. The array must be of the same size
	 * as the number of columns, and each element be an object with the parameters
	 * `search` and `escapeRegex` (the latter is optional). 'null' is also
	 * accepted and the default will be used.
	 *  @type array
	 *  @default []
	 *
	 *  @dtopt Option
	 *  @name DataTable.defaults.searchCols
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "searchCols": [
	 *          null,
	 *          { "search": "My filter" },
	 *          null,
	 *          { "search": "^[0-9]", "escapeRegex": false }
	 *        ]
	 *      } );
	 *    } )
	 */aoSearchCols:[],/**
	 * An array of CSS classes that should be applied to displayed rows. This
	 * array may be of any length, and DataTables will apply each class
	 * sequentially, looping when required.
	 *  @type array
	 *  @default null <i>Will take the values determined by the `oClasses.stripe*`
	 *    options</i>
	 *
	 *  @dtopt Option
	 *  @name DataTable.defaults.stripeClasses
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "stripeClasses": [ 'strip1', 'strip2', 'strip3' ]
	 *      } );
	 *    } )
	 */asStripeClasses:null,/**
	 * Enable or disable automatic column width calculation. This can be disabled
	 * as an optimisation (it takes some time to calculate the widths) if the
	 * tables widths are passed in using `columns`.
	 *  @type boolean
	 *  @default true
	 *
	 *  @dtopt Features
	 *  @name DataTable.defaults.autoWidth
	 *
	 *  @example
	 *    $(document).ready( function () {
	 *      $('#example').dataTable( {
	 *        "autoWidth": false
	 *      } );
	 *    } );
	 */bAutoWidth:!0,/**
	 * Deferred rendering can provide DataTables with a huge speed boost when you
	 * are using an Ajax or JS data source for the table. This option, when set to
	 * true, will cause DataTables to defer the creation of the table elements for
	 * each row until they are needed for a draw - saving a significant amount of
	 * time.
	 *  @type boolean
	 *  @default false
	 *
	 *  @dtopt Features
	 *  @name DataTable.defaults.deferRender
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "ajax": "sources/arrays.txt",
	 *        "deferRender": true
	 *      } );
	 *    } );
	 */bDeferRender:!1,/**
	 * Replace a DataTable which matches the given selector and replace it with
	 * one which has the properties of the new initialisation object passed. If no
	 * table matches the selector, then the new DataTable will be constructed as
	 * per normal.
	 *  @type boolean
	 *  @default false
	 *
	 *  @dtopt Options
	 *  @name DataTable.defaults.destroy
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "srollY": "200px",
	 *        "paginate": false
	 *      } );
	 *
	 *      // Some time later....
	 *      $('#example').dataTable( {
	 *        "filter": false,
	 *        "destroy": true
	 *      } );
	 *    } );
	 */bDestroy:!1,/**
	 * Enable or disable filtering of data. Filtering in DataTables is "smart" in
	 * that it allows the end user to input multiple words (space separated) and
	 * will match a row containing those words, even if not in the order that was
	 * specified (this allow matching across multiple columns). Note that if you
	 * wish to use filtering in DataTables this must remain 'true' - to remove the
	 * default filtering input box and retain filtering abilities, please use
	 * {@link DataTable.defaults.dom}.
	 *  @type boolean
	 *  @default true
	 *
	 *  @dtopt Features
	 *  @name DataTable.defaults.searching
	 *
	 *  @example
	 *    $(document).ready( function () {
	 *      $('#example').dataTable( {
	 *        "searching": false
	 *      } );
	 *    } );
	 */bFilter:!0,/**
	 * Enable or disable the table information display. This shows information
	 * about the data that is currently visible on the page, including information
	 * about filtered data if that action is being performed.
	 *  @type boolean
	 *  @default true
	 *
	 *  @dtopt Features
	 *  @name DataTable.defaults.info
	 *
	 *  @example
	 *    $(document).ready( function () {
	 *      $('#example').dataTable( {
	 *        "info": false
	 *      } );
	 *    } );
	 */bInfo:!0,/**
	 * Allows the end user to select the size of a formatted page from a select
	 * menu (sizes are 10, 25, 50 and 100). Requires pagination (`paginate`).
	 *  @type boolean
	 *  @default true
	 *
	 *  @dtopt Features
	 *  @name DataTable.defaults.lengthChange
	 *
	 *  @example
	 *    $(document).ready( function () {
	 *      $('#example').dataTable( {
	 *        "lengthChange": false
	 *      } );
	 *    } );
	 */bLengthChange:!0,/**
	 * Enable or disable pagination.
	 *  @type boolean
	 *  @default true
	 *
	 *  @dtopt Features
	 *  @name DataTable.defaults.paging
	 *
	 *  @example
	 *    $(document).ready( function () {
	 *      $('#example').dataTable( {
	 *        "paging": false
	 *      } );
	 *    } );
	 */bPaginate:!0,/**
	 * Enable or disable the display of a 'processing' indicator when the table is
	 * being processed (e.g. a sort). This is particularly useful for tables with
	 * large amounts of data where it can take a noticeable amount of time to sort
	 * the entries.
	 *  @type boolean
	 *  @default false
	 *
	 *  @dtopt Features
	 *  @name DataTable.defaults.processing
	 *
	 *  @example
	 *    $(document).ready( function () {
	 *      $('#example').dataTable( {
	 *        "processing": true
	 *      } );
	 *    } );
	 */bProcessing:!1,/**
	 * Retrieve the DataTables object for the given selector. Note that if the
	 * table has already been initialised, this parameter will cause DataTables
	 * to simply return the object that has already been set up - it will not take
	 * account of any changes you might have made to the initialisation object
	 * passed to DataTables (setting this parameter to true is an acknowledgement
	 * that you understand this). `destroy` can be used to reinitialise a table if
	 * you need.
	 *  @type boolean
	 *  @default false
	 *
	 *  @dtopt Options
	 *  @name DataTable.defaults.retrieve
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      initTable();
	 *      tableActions();
	 *    } );
	 *
	 *    function initTable ()
	 *    {
	 *      return $('#example').dataTable( {
	 *        "scrollY": "200px",
	 *        "paginate": false,
	 *        "retrieve": true
	 *      } );
	 *    }
	 *
	 *    function tableActions ()
	 *    {
	 *      var table = initTable();
	 *      // perform API operations with oTable
	 *    }
	 */bRetrieve:!1,/**
	 * When vertical (y) scrolling is enabled, DataTables will force the height of
	 * the table's viewport to the given height at all times (useful for layout).
	 * However, this can look odd when filtering data down to a small data set,
	 * and the footer is left "floating" further down. This parameter (when
	 * enabled) will cause DataTables to collapse the table's viewport down when
	 * the result set will fit within the given Y height.
	 *  @type boolean
	 *  @default false
	 *
	 *  @dtopt Options
	 *  @name DataTable.defaults.scrollCollapse
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "scrollY": "200",
	 *        "scrollCollapse": true
	 *      } );
	 *    } );
	 */bScrollCollapse:!1,/**
	 * Configure DataTables to use server-side processing. Note that the
	 * `ajax` parameter must also be given in order to give DataTables a
	 * source to obtain the required data for each draw.
	 *  @type boolean
	 *  @default false
	 *
	 *  @dtopt Features
	 *  @dtopt Server-side
	 *  @name DataTable.defaults.serverSide
	 *
	 *  @example
	 *    $(document).ready( function () {
	 *      $('#example').dataTable( {
	 *        "serverSide": true,
	 *        "ajax": "xhr.php"
	 *      } );
	 *    } );
	 */bServerSide:!1,/**
	 * Enable or disable sorting of columns. Sorting of individual columns can be
	 * disabled by the `sortable` option for each column.
	 *  @type boolean
	 *  @default true
	 *
	 *  @dtopt Features
	 *  @name DataTable.defaults.ordering
	 *
	 *  @example
	 *    $(document).ready( function () {
	 *      $('#example').dataTable( {
	 *        "ordering": false
	 *      } );
	 *    } );
	 */bSort:!0,/**
	 * Enable or display DataTables' ability to sort multiple columns at the
	 * same time (activated by shift-click by the user).
	 *  @type boolean
	 *  @default true
	 *
	 *  @dtopt Options
	 *  @name DataTable.defaults.orderMulti
	 *
	 *  @example
	 *    // Disable multiple column sorting ability
	 *    $(document).ready( function () {
	 *      $('#example').dataTable( {
	 *        "orderMulti": false
	 *      } );
	 *    } );
	 */bSortMulti:!0,/**
	 * Allows control over whether DataTables should use the top (true) unique
	 * cell that is found for a single column, or the bottom (false - default).
	 * This is useful when using complex headers.
	 *  @type boolean
	 *  @default false
	 *
	 *  @dtopt Options
	 *  @name DataTable.defaults.orderCellsTop
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "orderCellsTop": true
	 *      } );
	 *    } );
	 */bSortCellsTop:!1,/**
	 * Enable or disable the addition of the classes `sorting\_1`, `sorting\_2` and
	 * `sorting\_3` to the columns which are currently being sorted on. This is
	 * presented as a feature switch as it can increase processing time (while
	 * classes are removed and added) so for large data sets you might want to
	 * turn this off.
	 *  @type boolean
	 *  @default true
	 *
	 *  @dtopt Features
	 *  @name DataTable.defaults.orderClasses
	 *
	 *  @example
	 *    $(document).ready( function () {
	 *      $('#example').dataTable( {
	 *        "orderClasses": false
	 *      } );
	 *    } );
	 */bSortClasses:!0,/**
	 * Enable or disable state saving. When enabled HTML5 `localStorage` will be
	 * used to save table display information such as pagination information,
	 * display length, filtering and sorting. As such when the end user reloads
	 * the page the display display will match what thy had previously set up.
	 *
	 * Due to the use of `localStorage` the default state saving is not supported
	 * in IE6 or 7. If state saving is required in those browsers, use
	 * `stateSaveCallback` to provide a storage solution such as cookies.
	 *  @type boolean
	 *  @default false
	 *
	 *  @dtopt Features
	 *  @name DataTable.defaults.stateSave
	 *
	 *  @example
	 *    $(document).ready( function () {
	 *      $('#example').dataTable( {
	 *        "stateSave": true
	 *      } );
	 *    } );
	 */bStateSave:!1,/**
	 * This function is called when a TR element is created (and all TD child
	 * elements have been inserted), or registered if using a DOM source, allowing
	 * manipulation of the TR element (adding classes etc).
	 *  @type function
	 *  @param {node} row "TR" element for the current row
	 *  @param {array} data Raw data array for this row
	 *  @param {int} dataIndex The index of this row in the internal aoData array
	 *
	 *  @dtopt Callbacks
	 *  @name DataTable.defaults.createdRow
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "createdRow": function( row, data, dataIndex ) {
	 *          // Bold the grade for all 'A' grade browsers
	 *          if ( data[4] == "A" )
	 *          {
	 *            $('td:eq(4)', row).html( '<b>A</b>' );
	 *          }
	 *        }
	 *      } );
	 *    } );
	 */fnCreatedRow:null,/**
	 * This function is called on every 'draw' event, and allows you to
	 * dynamically modify any aspect you want about the created DOM.
	 *  @type function
	 *  @param {object} settings DataTables settings object
	 *
	 *  @dtopt Callbacks
	 *  @name DataTable.defaults.drawCallback
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "drawCallback": function( settings ) {
	 *          alert( 'DataTables has redrawn the table' );
	 *        }
	 *      } );
	 *    } );
	 */fnDrawCallback:null,/**
	 * Identical to fnHeaderCallback() but for the table footer this function
	 * allows you to modify the table footer on every 'draw' event.
	 *  @type function
	 *  @param {node} foot "TR" element for the footer
	 *  @param {array} data Full table data (as derived from the original HTML)
	 *  @param {int} start Index for the current display starting point in the
	 *    display array
	 *  @param {int} end Index for the current display ending point in the
	 *    display array
	 *  @param {array int} display Index array to translate the visual position
	 *    to the full data array
	 *
	 *  @dtopt Callbacks
	 *  @name DataTable.defaults.footerCallback
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "footerCallback": function( tfoot, data, start, end, display ) {
	 *          tfoot.getElementsByTagName('th')[0].innerHTML = "Starting index is "+start;
	 *        }
	 *      } );
	 *    } )
	 */fnFooterCallback:null,/**
	 * When rendering large numbers in the information element for the table
	 * (i.e. "Showing 1 to 10 of 57 entries") DataTables will render large numbers
	 * to have a comma separator for the 'thousands' units (e.g. 1 million is
	 * rendered as "1,000,000") to help readability for the end user. This
	 * function will override the default method DataTables uses.
	 *  @type function
	 *  @member
	 *  @param {int} toFormat number to be formatted
	 *  @returns {string} formatted string for DataTables to show the number
	 *
	 *  @dtopt Callbacks
	 *  @name DataTable.defaults.formatNumber
	 *
	 *  @example
	 *    // Format a number using a single quote for the separator (note that
	 *    // this can also be done with the language.thousands option)
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "formatNumber": function ( toFormat ) {
	 *          return toFormat.toString().replace(
	 *            /\B(?=(\d{3})+(?!\d))/g, "'"
	 *          );
	 *        };
	 *      } );
	 *    } );
	 */fnFormatNumber:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,this.oLanguage.sThousands)},/**
	 * This function is called on every 'draw' event, and allows you to
	 * dynamically modify the header row. This can be used to calculate and
	 * display useful information about the table.
	 *  @type function
	 *  @param {node} head "TR" element for the header
	 *  @param {array} data Full table data (as derived from the original HTML)
	 *  @param {int} start Index for the current display starting point in the
	 *    display array
	 *  @param {int} end Index for the current display ending point in the
	 *    display array
	 *  @param {array int} display Index array to translate the visual position
	 *    to the full data array
	 *
	 *  @dtopt Callbacks
	 *  @name DataTable.defaults.headerCallback
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "fheaderCallback": function( head, data, start, end, display ) {
	 *          head.getElementsByTagName('th')[0].innerHTML = "Displaying "+(end-start)+" records";
	 *        }
	 *      } );
	 *    } )
	 */fnHeaderCallback:null,/**
	 * The information element can be used to convey information about the current
	 * state of the table. Although the internationalisation options presented by
	 * DataTables are quite capable of dealing with most customisations, there may
	 * be times where you wish to customise the string further. This callback
	 * allows you to do exactly that.
	 *  @type function
	 *  @param {object} oSettings DataTables settings object
	 *  @param {int} start Starting position in data for the draw
	 *  @param {int} end End position in data for the draw
	 *  @param {int} max Total number of rows in the table (regardless of
	 *    filtering)
	 *  @param {int} total Total number of rows in the data set, after filtering
	 *  @param {string} pre The string that DataTables has formatted using it's
	 *    own rules
	 *  @returns {string} The string to be displayed in the information element.
	 *
	 *  @dtopt Callbacks
	 *  @name DataTable.defaults.infoCallback
	 *
	 *  @example
	 *    $('#example').dataTable( {
	 *      "infoCallback": function( settings, start, end, max, total, pre ) {
	 *        return start +" to "+ end;
	 *      }
	 *    } );
	 */fnInfoCallback:null,/**
	 * Called when the table has been initialised. Normally DataTables will
	 * initialise sequentially and there will be no need for this function,
	 * however, this does not hold true when using external language information
	 * since that is obtained using an async XHR call.
	 *  @type function
	 *  @param {object} settings DataTables settings object
	 *  @param {object} json The JSON object request from the server - only
	 *    present if client-side Ajax sourced data is used
	 *
	 *  @dtopt Callbacks
	 *  @name DataTable.defaults.initComplete
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "initComplete": function(settings, json) {
	 *          alert( 'DataTables has finished its initialisation.' );
	 *        }
	 *      } );
	 *    } )
	 */fnInitComplete:null,/**
	 * Called at the very start of each table draw and can be used to cancel the
	 * draw by returning false, any other return (including undefined) results in
	 * the full draw occurring).
	 *  @type function
	 *  @param {object} settings DataTables settings object
	 *  @returns {boolean} False will cancel the draw, anything else (including no
	 *    return) will allow it to complete.
	 *
	 *  @dtopt Callbacks
	 *  @name DataTable.defaults.preDrawCallback
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "preDrawCallback": function( settings ) {
	 *          if ( $('#test').val() == 1 ) {
	 *            return false;
	 *          }
	 *        }
	 *      } );
	 *    } );
	 */fnPreDrawCallback:null,/**
	 * This function allows you to 'post process' each row after it have been
	 * generated for each table draw, but before it is rendered on screen. This
	 * function might be used for setting the row class name etc.
	 *  @type function
	 *  @param {node} row "TR" element for the current row
	 *  @param {array} data Raw data array for this row
	 *  @param {int} displayIndex The display index for the current table draw
	 *  @param {int} displayIndexFull The index of the data in the full list of
	 *    rows (after filtering)
	 *
	 *  @dtopt Callbacks
	 *  @name DataTable.defaults.rowCallback
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "rowCallback": function( row, data, displayIndex, displayIndexFull ) {
	 *          // Bold the grade for all 'A' grade browsers
	 *          if ( data[4] == "A" ) {
	 *            $('td:eq(4)', row).html( '<b>A</b>' );
	 *          }
	 *        }
	 *      } );
	 *    } );
	 */fnRowCallback:null,/**
	 * __Deprecated__ The functionality provided by this parameter has now been
	 * superseded by that provided through `ajax`, which should be used instead.
	 *
	 * This parameter allows you to override the default function which obtains
	 * the data from the server so something more suitable for your application.
	 * For example you could use POST data, or pull information from a Gears or
	 * AIR database.
	 *  @type function
	 *  @member
	 *  @param {string} source HTTP source to obtain the data from (`ajax`)
	 *  @param {array} data A key/value pair object containing the data to send
	 *    to the server
	 *  @param {function} callback to be called on completion of the data get
	 *    process that will draw the data on the page.
	 *  @param {object} settings DataTables settings object
	 *
	 *  @dtopt Callbacks
	 *  @dtopt Server-side
	 *  @name DataTable.defaults.serverData
	 *
	 *  @deprecated 1.10. Please use `ajax` for this functionality now.
	 */fnServerData:null,/**
	 * __Deprecated__ The functionality provided by this parameter has now been
	 * superseded by that provided through `ajax`, which should be used instead.
	 *
	 *  It is often useful to send extra data to the server when making an Ajax
	 * request - for example custom filtering information, and this callback
	 * function makes it trivial to send extra information to the server. The
	 * passed in parameter is the data set that has been constructed by
	 * DataTables, and you can add to this or modify it as you require.
	 *  @type function
	 *  @param {array} data Data array (array of objects which are name/value
	 *    pairs) that has been constructed by DataTables and will be sent to the
	 *    server. In the case of Ajax sourced data with server-side processing
	 *    this will be an empty array, for server-side processing there will be a
	 *    significant number of parameters!
	 *  @returns {undefined} Ensure that you modify the data array passed in,
	 *    as this is passed by reference.
	 *
	 *  @dtopt Callbacks
	 *  @dtopt Server-side
	 *  @name DataTable.defaults.serverParams
	 *
	 *  @deprecated 1.10. Please use `ajax` for this functionality now.
	 */fnServerParams:null,/**
	 * Load the table state. With this function you can define from where, and how, the
	 * state of a table is loaded. By default DataTables will load from `localStorage`
	 * but you might wish to use a server-side database or cookies.
	 *  @type function
	 *  @member
	 *  @param {object} settings DataTables settings object
	 *  @param {object} callback Callback that can be executed when done. It
	 *    should be passed the loaded state object.
	 *  @return {object} The DataTables state object to be loaded
	 *
	 *  @dtopt Callbacks
	 *  @name DataTable.defaults.stateLoadCallback
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "stateSave": true,
	 *        "stateLoadCallback": function (settings, callback) {
	 *          $.ajax( {
	 *            "url": "/state_load",
	 *            "dataType": "json",
	 *            "success": function (json) {
	 *              callback( json );
	 *            }
	 *          } );
	 *        }
	 *      } );
	 *    } );
	 */fnStateLoadCallback:function(t){try{return JSON.parse((-1===t.iStateDuration?sessionStorage:localStorage).getItem("DataTables_"+t.sInstance+"_"+location.pathname))}catch(t){return{}}},/**
	 * Callback which allows modification of the saved state prior to loading that state.
	 * This callback is called when the table is loading state from the stored data, but
	 * prior to the settings object being modified by the saved state. Note that for
	 * plug-in authors, you should use the `stateLoadParams` event to load parameters for
	 * a plug-in.
	 *  @type function
	 *  @param {object} settings DataTables settings object
	 *  @param {object} data The state object that is to be loaded
	 *
	 *  @dtopt Callbacks
	 *  @name DataTable.defaults.stateLoadParams
	 *
	 *  @example
	 *    // Remove a saved filter, so filtering is never loaded
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "stateSave": true,
	 *        "stateLoadParams": function (settings, data) {
	 *          data.oSearch.sSearch = "";
	 *        }
	 *      } );
	 *    } );
	 *
	 *  @example
	 *    // Disallow state loading by returning false
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "stateSave": true,
	 *        "stateLoadParams": function (settings, data) {
	 *          return false;
	 *        }
	 *      } );
	 *    } );
	 */fnStateLoadParams:null,/**
	 * Callback that is called when the state has been loaded from the state saving method
	 * and the DataTables settings object has been modified as a result of the loaded state.
	 *  @type function
	 *  @param {object} settings DataTables settings object
	 *  @param {object} data The state object that was loaded
	 *
	 *  @dtopt Callbacks
	 *  @name DataTable.defaults.stateLoaded
	 *
	 *  @example
	 *    // Show an alert with the filtering value that was saved
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "stateSave": true,
	 *        "stateLoaded": function (settings, data) {
	 *          alert( 'Saved filter was: '+data.oSearch.sSearch );
	 *        }
	 *      } );
	 *    } );
	 */fnStateLoaded:null,/**
	 * Save the table state. This function allows you to define where and how the state
	 * information for the table is stored By default DataTables will use `localStorage`
	 * but you might wish to use a server-side database or cookies.
	 *  @type function
	 *  @member
	 *  @param {object} settings DataTables settings object
	 *  @param {object} data The state object to be saved
	 *
	 *  @dtopt Callbacks
	 *  @name DataTable.defaults.stateSaveCallback
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "stateSave": true,
	 *        "stateSaveCallback": function (settings, data) {
	 *          // Send an Ajax request to the server with the state object
	 *          $.ajax( {
	 *            "url": "/state_save",
	 *            "data": data,
	 *            "dataType": "json",
	 *            "method": "POST"
	 *            "success": function () {}
	 *          } );
	 *        }
	 *      } );
	 *    } );
	 */fnStateSaveCallback:function(t,e){try{(-1===t.iStateDuration?sessionStorage:localStorage).setItem("DataTables_"+t.sInstance+"_"+location.pathname,JSON.stringify(e))}catch(t){}},/**
	 * Callback which allows modification of the state to be saved. Called when the table
	 * has changed state a new state save is required. This method allows modification of
	 * the state saving object prior to actually doing the save, including addition or
	 * other state properties or modification. Note that for plug-in authors, you should
	 * use the `stateSaveParams` event to save parameters for a plug-in.
	 *  @type function
	 *  @param {object} settings DataTables settings object
	 *  @param {object} data The state object to be saved
	 *
	 *  @dtopt Callbacks
	 *  @name DataTable.defaults.stateSaveParams
	 *
	 *  @example
	 *    // Remove a saved filter, so filtering is never saved
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "stateSave": true,
	 *        "stateSaveParams": function (settings, data) {
	 *          data.oSearch.sSearch = "";
	 *        }
	 *      } );
	 *    } );
	 */fnStateSaveParams:null,/**
	 * Duration for which the saved state information is considered valid. After this period
	 * has elapsed the state will be returned to the default.
	 * Value is given in seconds.
	 *  @type int
	 *  @default 7200 <i>(2 hours)</i>
	 *
	 *  @dtopt Options
	 *  @name DataTable.defaults.stateDuration
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "stateDuration": 60*60*24; // 1 day
	 *      } );
	 *    } )
	 */iStateDuration:7200,/**
	 * When enabled DataTables will not make a request to the server for the first
	 * page draw - rather it will use the data already on the page (no sorting etc
	 * will be applied to it), thus saving on an XHR at load time. `deferLoading`
	 * is used to indicate that deferred loading is required, but it is also used
	 * to tell DataTables how many records there are in the full table (allowing
	 * the information element and pagination to be displayed correctly). In the case
	 * where a filtering is applied to the table on initial load, this can be
	 * indicated by giving the parameter as an array, where the first element is
	 * the number of records available after filtering and the second element is the
	 * number of records without filtering (allowing the table information element
	 * to be shown correctly).
	 *  @type int | array
	 *  @default null
	 *
	 *  @dtopt Options
	 *  @name DataTable.defaults.deferLoading
	 *
	 *  @example
	 *    // 57 records available in the table, no filtering applied
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "serverSide": true,
	 *        "ajax": "scripts/server_processing.php",
	 *        "deferLoading": 57
	 *      } );
	 *    } );
	 *
	 *  @example
	 *    // 57 records after filtering, 100 without filtering (an initial filter applied)
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "serverSide": true,
	 *        "ajax": "scripts/server_processing.php",
	 *        "deferLoading": [ 57, 100 ],
	 *        "search": {
	 *          "search": "my_filter"
	 *        }
	 *      } );
	 *    } );
	 */iDeferLoading:null,/**
	 * Number of rows to display on a single page when using pagination. If
	 * feature enabled (`lengthChange`) then the end user will be able to override
	 * this to a custom setting using a pop-up menu.
	 *  @type int
	 *  @default 10
	 *
	 *  @dtopt Options
	 *  @name DataTable.defaults.pageLength
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "pageLength": 50
	 *      } );
	 *    } )
	 */iDisplayLength:10,/**
	 * Define the starting point for data display when using DataTables with
	 * pagination. Note that this parameter is the number of records, rather than
	 * the page number, so if you have 10 records per page and want to start on
	 * the third page, it should be "20".
	 *  @type int
	 *  @default 0
	 *
	 *  @dtopt Options
	 *  @name DataTable.defaults.displayStart
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "displayStart": 20
	 *      } );
	 *    } )
	 */iDisplayStart:0,/**
	 * By default DataTables allows keyboard navigation of the table (sorting, paging,
	 * and filtering) by adding a `tabindex` attribute to the required elements. This
	 * allows you to tab through the controls and press the enter key to activate them.
	 * The tabindex is default 0, meaning that the tab follows the flow of the document.
	 * You can overrule this using this parameter if you wish. Use a value of -1 to
	 * disable built-in keyboard navigation.
	 *  @type int
	 *  @default 0
	 *
	 *  @dtopt Options
	 *  @name DataTable.defaults.tabIndex
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "tabIndex": 1
	 *      } );
	 *    } );
	 */iTabIndex:0,/**
	 * Classes that DataTables assigns to the various components and features
	 * that it adds to the HTML table. This allows classes to be configured
	 * during initialisation in addition to through the static
	 * {@link DataTable.ext.oStdClasses} object).
	 *  @namespace
	 *  @name DataTable.defaults.classes
	 */oClasses:{},/**
	 * All strings that DataTables uses in the user interface that it creates
	 * are defined in this object, allowing you to modified them individually or
	 * completely replace them all as required.
	 *  @namespace
	 *  @name DataTable.defaults.language
	 */oLanguage:{/**
		 * Strings that are used for WAI-ARIA labels and controls only (these are not
		 * actually visible on the page, but will be read by screenreaders, and thus
		 * must be internationalised as well).
		 *  @namespace
		 *  @name DataTable.defaults.language.aria
		 */oAria:{/**
			 * ARIA label that is added to the table headers when the column may be
			 * sorted ascending by activing the column (click or return when focused).
			 * Note that the column header is prefixed to this string.
			 *  @type string
			 *  @default : activate to sort column ascending
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.aria.sortAscending
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "aria": {
			 *            "sortAscending": " - click/return to sort ascending"
			 *          }
			 *        }
			 *      } );
			 *    } );
			 */sSortAscending:": activate to sort column ascending",/**
			 * ARIA label that is added to the table headers when the column may be
			 * sorted descending by activing the column (click or return when focused).
			 * Note that the column header is prefixed to this string.
			 *  @type string
			 *  @default : activate to sort column ascending
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.aria.sortDescending
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "aria": {
			 *            "sortDescending": " - click/return to sort descending"
			 *          }
			 *        }
			 *      } );
			 *    } );
			 */sSortDescending:": activate to sort column descending"},/**
		 * Pagination string used by DataTables for the built-in pagination
		 * control types.
		 *  @namespace
		 *  @name DataTable.defaults.language.paginate
		 */oPaginate:{/**
			 * Text to use when using the 'full_numbers' type of pagination for the
			 * button to take the user to the first page.
			 *  @type string
			 *  @default First
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.paginate.first
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "paginate": {
			 *            "first": "First page"
			 *          }
			 *        }
			 *      } );
			 *    } );
			 */sFirst:"First",/**
			 * Text to use when using the 'full_numbers' type of pagination for the
			 * button to take the user to the last page.
			 *  @type string
			 *  @default Last
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.paginate.last
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "paginate": {
			 *            "last": "Last page"
			 *          }
			 *        }
			 *      } );
			 *    } );
			 */sLast:"Last",/**
			 * Text to use for the 'next' pagination button (to take the user to the
			 * next page).
			 *  @type string
			 *  @default Next
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.paginate.next
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "paginate": {
			 *            "next": "Next page"
			 *          }
			 *        }
			 *      } );
			 *    } );
			 */sNext:"Next",/**
			 * Text to use for the 'previous' pagination button (to take the user to
			 * the previous page).
			 *  @type string
			 *  @default Previous
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.paginate.previous
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "paginate": {
			 *            "previous": "Previous page"
			 *          }
			 *        }
			 *      } );
			 *    } );
			 */sPrevious:"Previous"},/**
		 * This string is shown in preference to `zeroRecords` when the table is
		 * empty of data (regardless of filtering). Note that this is an optional
		 * parameter - if it is not given, the value of `zeroRecords` will be used
		 * instead (either the default or given value).
		 *  @type string
		 *  @default No data available in table
		 *
		 *  @dtopt Language
		 *  @name DataTable.defaults.language.emptyTable
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "language": {
		 *          "emptyTable": "No data available in table"
		 *        }
		 *      } );
		 *    } );
		 */sEmptyTable:"No data available in table",/**
		 * This string gives information to the end user about the information
		 * that is current on display on the page. The following tokens can be
		 * used in the string and will be dynamically replaced as the table
		 * display updates. This tokens can be placed anywhere in the string, or
		 * removed as needed by the language requires:
		 *
		 * * `\_START\_` - Display index of the first record on the current page
		 * * `\_END\_` - Display index of the last record on the current page
		 * * `\_TOTAL\_` - Number of records in the table after filtering
		 * * `\_MAX\_` - Number of records in the table without filtering
		 * * `\_PAGE\_` - Current page number
		 * * `\_PAGES\_` - Total number of pages of data in the table
		 *
		 *  @type string
		 *  @default Showing _START_ to _END_ of _TOTAL_ entries
		 *
		 *  @dtopt Language
		 *  @name DataTable.defaults.language.info
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "language": {
		 *          "info": "Showing page _PAGE_ of _PAGES_"
		 *        }
		 *      } );
		 *    } );
		 */sInfo:"Showing _START_ to _END_ of _TOTAL_ entries",/**
		 * Display information string for when the table is empty. Typically the
		 * format of this string should match `info`.
		 *  @type string
		 *  @default Showing 0 to 0 of 0 entries
		 *
		 *  @dtopt Language
		 *  @name DataTable.defaults.language.infoEmpty
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "language": {
		 *          "infoEmpty": "No entries to show"
		 *        }
		 *      } );
		 *    } );
		 */sInfoEmpty:"Showing 0 to 0 of 0 entries",/**
		 * When a user filters the information in a table, this string is appended
		 * to the information (`info`) to give an idea of how strong the filtering
		 * is. The variable _MAX_ is dynamically updated.
		 *  @type string
		 *  @default (filtered from _MAX_ total entries)
		 *
		 *  @dtopt Language
		 *  @name DataTable.defaults.language.infoFiltered
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "language": {
		 *          "infoFiltered": " - filtering from _MAX_ records"
		 *        }
		 *      } );
		 *    } );
		 */sInfoFiltered:"(filtered from _MAX_ total entries)",/**
		 * If can be useful to append extra information to the info string at times,
		 * and this variable does exactly that. This information will be appended to
		 * the `info` (`infoEmpty` and `infoFiltered` in whatever combination they are
		 * being used) at all times.
		 *  @type string
		 *  @default <i>Empty string</i>
		 *
		 *  @dtopt Language
		 *  @name DataTable.defaults.language.infoPostFix
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "language": {
		 *          "infoPostFix": "All records shown are derived from real information."
		 *        }
		 *      } );
		 *    } );
		 */sInfoPostFix:"",/**
		 * This decimal place operator is a little different from the other
		 * language options since DataTables doesn't output floating point
		 * numbers, so it won't ever use this for display of a number. Rather,
		 * what this parameter does is modify the sort methods of the table so
		 * that numbers which are in a format which has a character other than
		 * a period (`.`) as a decimal place will be sorted numerically.
		 *
		 * Note that numbers with different decimal places cannot be shown in
		 * the same table and still be sortable, the table must be consistent.
		 * However, multiple different tables on the page can use different
		 * decimal place characters.
		 *  @type string
		 *  @default 
		 *
		 *  @dtopt Language
		 *  @name DataTable.defaults.language.decimal
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "language": {
		 *          "decimal": ","
		 *          "thousands": "."
		 *        }
		 *      } );
		 *    } );
		 */sDecimal:"",/**
		 * DataTables has a build in number formatter (`formatNumber`) which is
		 * used to format large numbers that are used in the table information.
		 * By default a comma is used, but this can be trivially changed to any
		 * character you wish with this parameter.
		 *  @type string
		 *  @default ,
		 *
		 *  @dtopt Language
		 *  @name DataTable.defaults.language.thousands
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "language": {
		 *          "thousands": "'"
		 *        }
		 *      } );
		 *    } );
		 */sThousands:",",/**
		 * Detail the action that will be taken when the drop down menu for the
		 * pagination length option is changed. The '_MENU_' variable is replaced
		 * with a default select list of 10, 25, 50 and 100, and can be replaced
		 * with a custom select box if required.
		 *  @type string
		 *  @default Show _MENU_ entries
		 *
		 *  @dtopt Language
		 *  @name DataTable.defaults.language.lengthMenu
		 *
		 *  @example
		 *    // Language change only
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "language": {
		 *          "lengthMenu": "Display _MENU_ records"
		 *        }
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Language and options change
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "language": {
		 *          "lengthMenu": 'Display <select>'+
		 *            '<option value="10">10</option>'+
		 *            '<option value="20">20</option>'+
		 *            '<option value="30">30</option>'+
		 *            '<option value="40">40</option>'+
		 *            '<option value="50">50</option>'+
		 *            '<option value="-1">All</option>'+
		 *            '</select> records'
		 *        }
		 *      } );
		 *    } );
		 */sLengthMenu:"Show _MENU_ entries",/**
		 * When using Ajax sourced data and during the first draw when DataTables is
		 * gathering the data, this message is shown in an empty row in the table to
		 * indicate to the end user the the data is being loaded. Note that this
		 * parameter is not used when loading data by server-side processing, just
		 * Ajax sourced data with client-side processing.
		 *  @type string
		 *  @default Loading...
		 *
		 *  @dtopt Language
		 *  @name DataTable.defaults.language.loadingRecords
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "language": {
		 *          "loadingRecords": "Please wait - loading..."
		 *        }
		 *      } );
		 *    } );
		 */sLoadingRecords:"Loading...",/**
		 * Text which is displayed when the table is processing a user action
		 * (usually a sort command or similar).
		 *  @type string
		 *
		 *  @dtopt Language
		 *  @name DataTable.defaults.language.processing
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "language": {
		 *          "processing": "DataTables is currently busy"
		 *        }
		 *      } );
		 *    } );
		 */sProcessing:"",/**
		 * Details the actions that will be taken when the user types into the
		 * filtering input text box. The variable "_INPUT_", if used in the string,
		 * is replaced with the HTML text box for the filtering input allowing
		 * control over where it appears in the string. If "_INPUT_" is not given
		 * then the input box is appended to the string automatically.
		 *  @type string
		 *  @default Search:
		 *
		 *  @dtopt Language
		 *  @name DataTable.defaults.language.search
		 *
		 *  @example
		 *    // Input text box will be appended at the end automatically
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "language": {
		 *          "search": "Filter records:"
		 *        }
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Specify where the filter should appear
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "language": {
		 *          "search": "Apply filter _INPUT_ to table"
		 *        }
		 *      } );
		 *    } );
		 */sSearch:"Search:",/**
		 * Assign a `placeholder` attribute to the search `input` element
		 *  @type string
		 *  @default 
		 *
		 *  @dtopt Language
		 *  @name DataTable.defaults.language.searchPlaceholder
		 */sSearchPlaceholder:"",/**
		 * All of the language information can be stored in a file on the
		 * server-side, which DataTables will look up if this parameter is passed.
		 * It must store the URL of the language file, which is in a JSON format,
		 * and the object has the same properties as the oLanguage object in the
		 * initialiser object (i.e. the above parameters). Please refer to one of
		 * the example language files to see how this works in action.
		 *  @type string
		 *  @default <i>Empty string - i.e. disabled</i>
		 *
		 *  @dtopt Language
		 *  @name DataTable.defaults.language.url
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "language": {
		 *          "url": "https://www.sprymedia.co.uk/dataTables/lang.txt"
		 *        }
		 *      } );
		 *    } );
		 */sUrl:"",/**
		 * Text shown inside the table records when the is no information to be
		 * displayed after filtering. `emptyTable` is shown when there is simply no
		 * information in the table at all (regardless of filtering).
		 *  @type string
		 *  @default No matching records found
		 *
		 *  @dtopt Language
		 *  @name DataTable.defaults.language.zeroRecords
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "language": {
		 *          "zeroRecords": "No records to display"
		 *        }
		 *      } );
		 *    } );
		 */sZeroRecords:"No matching records found"},/**
	 * This parameter allows you to have define the global filtering state at
	 * initialisation time. As an object the `search` parameter must be
	 * defined, but all other parameters are optional. When `regex` is true,
	 * the search string will be treated as a regular expression, when false
	 * (default) it will be treated as a straight string. When `smart`
	 * DataTables will use it's smart filtering methods (to word match at
	 * any point in the data), when false this will not be done.
	 *  @namespace
	 *  @extends DataTable.models.oSearch
	 *
	 *  @dtopt Options
	 *  @name DataTable.defaults.search
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "search": {"search": "Initial search"}
	 *      } );
	 *    } )
	 */oSearch:rJ.extend({},rG.models.oSearch),/**
	 * __Deprecated__ The functionality provided by this parameter has now been
	 * superseded by that provided through `ajax`, which should be used instead.
	 *
	 * By default DataTables will look for the property `data` (or `aaData` for
	 * compatibility with DataTables 1.9-) when obtaining data from an Ajax
	 * source or for server-side processing - this parameter allows that
	 * property to be changed. You can use Javascript dotted object notation to
	 * get a data source for multiple levels of nesting.
	 *  @type string
	 *  @default data
	 *
	 *  @dtopt Options
	 *  @dtopt Server-side
	 *  @name DataTable.defaults.ajaxDataProp
	 *
	 *  @deprecated 1.10. Please use `ajax` for this functionality now.
	 */sAjaxDataProp:"data",/**
	 * __Deprecated__ The functionality provided by this parameter has now been
	 * superseded by that provided through `ajax`, which should be used instead.
	 *
	 * You can instruct DataTables to load data from an external
	 * source using this parameter (use aData if you want to pass data in you
	 * already have). Simply provide a url a JSON object can be obtained from.
	 *  @type string
	 *  @default null
	 *
	 *  @dtopt Options
	 *  @dtopt Server-side
	 *  @name DataTable.defaults.ajaxSource
	 *
	 *  @deprecated 1.10. Please use `ajax` for this functionality now.
	 */sAjaxSource:null,/**
	 * This initialisation variable allows you to specify exactly where in the
	 * DOM you want DataTables to inject the various controls it adds to the page
	 * (for example you might want the pagination controls at the top of the
	 * table). DIV elements (with or without a custom class) can also be added to
	 * aid styling. The follow syntax is used:
	 *   <ul>
	 *     <li>The following options are allowed:
	 *       <ul>
	 *         <li>'l' - Length changing</li>
	 *         <li>'f' - Filtering input</li>
	 *         <li>'t' - The table!</li>
	 *         <li>'i' - Information</li>
	 *         <li>'p' - Pagination</li>
	 *         <li>'r' - pRocessing</li>
	 *       </ul>
	 *     </li>
	 *     <li>The following constants are allowed:
	 *       <ul>
	 *         <li>'H' - jQueryUI theme "header" classes ('fg-toolbar ui-widget-header ui-corner-tl ui-corner-tr ui-helper-clearfix')</li>
	 *         <li>'F' - jQueryUI theme "footer" classes ('fg-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix')</li>
	 *       </ul>
	 *     </li>
	 *     <li>The following syntax is expected:
	 *       <ul>
	 *         <li>'&lt;' and '&gt;' - div elements</li>
	 *         <li>'&lt;"class" and '&gt;' - div with a class</li>
	 *         <li>'&lt;"#id" and '&gt;' - div with an ID</li>
	 *       </ul>
	 *     </li>
	 *     <li>Examples:
	 *       <ul>
	 *         <li>'&lt;"wrapper"flipt&gt;'</li>
	 *         <li>'&lt;lf&lt;t&gt;ip&gt;'</li>
	 *       </ul>
	 *     </li>
	 *   </ul>
	 *  @type string
	 *  @default lfrtip <i>(when `jQueryUI` is false)</i> <b>or</b>
	 *    <"H"lfr>t<"F"ip> <i>(when `jQueryUI` is true)</i>
	 *
	 *  @dtopt Options
	 *  @name DataTable.defaults.dom
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "dom": '&lt;"top"i&gt;rt&lt;"bottom"flp&gt;&lt;"clear"&gt;'
	 *      } );
	 *    } );
	 */sDom:"lfrtip",/**
	 * Search delay option. This will throttle full table searches that use the
	 * DataTables provided search input element (it does not effect calls to
	 * `dt-api search()`, providing a delay before the search is made.
	 *  @type integer
	 *  @default 0
	 *
	 *  @dtopt Options
	 *  @name DataTable.defaults.searchDelay
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "searchDelay": 200
	 *      } );
	 *    } )
	 */searchDelay:null,/**
	 * DataTables features six different built-in options for the buttons to
	 * display for pagination control:
	 *
	 * * `numbers` - Page number buttons only
	 * * `simple` - 'Previous' and 'Next' buttons only
	 * * 'simple_numbers` - 'Previous' and 'Next' buttons, plus page numbers
	 * * `full` - 'First', 'Previous', 'Next' and 'Last' buttons
	 * * `full_numbers` - 'First', 'Previous', 'Next' and 'Last' buttons, plus page numbers
	 * * `first_last_numbers` - 'First' and 'Last' buttons, plus page numbers
	 *  
	 * Further methods can be added using {@link DataTable.ext.oPagination}.
	 *  @type string
	 *  @default simple_numbers
	 *
	 *  @dtopt Options
	 *  @name DataTable.defaults.pagingType
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "pagingType": "full_numbers"
	 *      } );
	 *    } )
	 */sPaginationType:"simple_numbers",/**
	 * Enable horizontal scrolling. When a table is too wide to fit into a
	 * certain layout, or you have a large number of columns in the table, you
	 * can enable x-scrolling to show the table in a viewport, which can be
	 * scrolled. This property can be `true` which will allow the table to
	 * scroll horizontally when needed, or any CSS unit, or a number (in which
	 * case it will be treated as a pixel measurement). Setting as simply `true`
	 * is recommended.
	 *  @type boolean|string
	 *  @default <i>blank string - i.e. disabled</i>
	 *
	 *  @dtopt Features
	 *  @name DataTable.defaults.scrollX
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "scrollX": true,
	 *        "scrollCollapse": true
	 *      } );
	 *    } );
	 */sScrollX:"",/**
	 * This property can be used to force a DataTable to use more width than it
	 * might otherwise do when x-scrolling is enabled. For example if you have a
	 * table which requires to be well spaced, this parameter is useful for
	 * "over-sizing" the table, and thus forcing scrolling. This property can by
	 * any CSS unit, or a number (in which case it will be treated as a pixel
	 * measurement).
	 *  @type string
	 *  @default <i>blank string - i.e. disabled</i>
	 *
	 *  @dtopt Options
	 *  @name DataTable.defaults.scrollXInner
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "scrollX": "100%",
	 *        "scrollXInner": "110%"
	 *      } );
	 *    } );
	 */sScrollXInner:"",/**
	 * Enable vertical scrolling. Vertical scrolling will constrain the DataTable
	 * to the given height, and enable scrolling for any data which overflows the
	 * current viewport. This can be used as an alternative to paging to display
	 * a lot of data in a small area (although paging and scrolling can both be
	 * enabled at the same time). This property can be any CSS unit, or a number
	 * (in which case it will be treated as a pixel measurement).
	 *  @type string
	 *  @default <i>blank string - i.e. disabled</i>
	 *
	 *  @dtopt Features
	 *  @name DataTable.defaults.scrollY
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "scrollY": "200px",
	 *        "paginate": false
	 *      } );
	 *    } );
	 */sScrollY:"",/**
	 * __Deprecated__ The functionality provided by this parameter has now been
	 * superseded by that provided through `ajax`, which should be used instead.
	 *
	 * Set the HTTP method that is used to make the Ajax call for server-side
	 * processing or Ajax sourced data.
	 *  @type string
	 *  @default GET
	 *
	 *  @dtopt Options
	 *  @dtopt Server-side
	 *  @name DataTable.defaults.serverMethod
	 *
	 *  @deprecated 1.10. Please use `ajax` for this functionality now.
	 */sServerMethod:"GET",/**
	 * DataTables makes use of renderers when displaying HTML elements for
	 * a table. These renderers can be added or modified by plug-ins to
	 * generate suitable mark-up for a site. For example the Bootstrap
	 * integration plug-in for DataTables uses a paging button renderer to
	 * display pagination buttons in the mark-up required by Bootstrap.
	 *
	 * For further information about the renderers available see
	 * DataTable.ext.renderer
	 *  @type string|object
	 *  @default null
	 *
	 *  @name DataTable.defaults.renderer
	 *
	 */renderer:null,/**
	 * Set the data property name that DataTables should use to get a row's id
	 * to set as the `id` property in the node.
	 *  @type string
	 *  @default DT_RowId
	 *
	 *  @name DataTable.defaults.rowId
	 */rowId:"DT_RowId"},as(rG.defaults),/*
 * Developer note - See note in model.defaults.js about the use of Hungarian
 * notation and camel case.
 *//**
 * Column options that can be given to DataTables at initialisation time.
 *  @namespace
 */rG.defaults.column={/**
	 * Define which column(s) an order will occur on for this column. This
	 * allows a column's ordering to take multiple columns into account when
	 * doing a sort or use the data from a different column. For example first
	 * name / last name columns make sense to do a multi-column sort over the
	 * two columns.
	 *  @type array|int
	 *  @default null <i>Takes the value of the column index automatically</i>
	 *
	 *  @name DataTable.defaults.column.orderData
	 *  @dtopt Columns
	 *
	 *  @example
	 *    // Using `columnDefs`
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columnDefs": [
	 *          { "orderData": [ 0, 1 ], "targets": [ 0 ] },
	 *          { "orderData": [ 1, 0 ], "targets": [ 1 ] },
	 *          { "orderData": 2, "targets": [ 2 ] }
	 *        ]
	 *      } );
	 *    } );
	 *
	 *  @example
	 *    // Using `columns`
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columns": [
	 *          { "orderData": [ 0, 1 ] },
	 *          { "orderData": [ 1, 0 ] },
	 *          { "orderData": 2 },
	 *          null,
	 *          null
	 *        ]
	 *      } );
	 *    } );
	 */aDataSort:null,iDataSort:-1,/**
	 * You can control the default ordering direction, and even alter the
	 * behaviour of the sort handler (i.e. only allow ascending ordering etc)
	 * using this parameter.
	 *  @type array
	 *  @default [ 'asc', 'desc' ]
	 *
	 *  @name DataTable.defaults.column.orderSequence
	 *  @dtopt Columns
	 *
	 *  @example
	 *    // Using `columnDefs`
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columnDefs": [
	 *          { "orderSequence": [ "asc" ], "targets": [ 1 ] },
	 *          { "orderSequence": [ "desc", "asc", "asc" ], "targets": [ 2 ] },
	 *          { "orderSequence": [ "desc" ], "targets": [ 3 ] }
	 *        ]
	 *      } );
	 *    } );
	 *
	 *  @example
	 *    // Using `columns`
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columns": [
	 *          null,
	 *          { "orderSequence": [ "asc" ] },
	 *          { "orderSequence": [ "desc", "asc", "asc" ] },
	 *          { "orderSequence": [ "desc" ] },
	 *          null
	 *        ]
	 *      } );
	 *    } );
	 */asSorting:["asc","desc"],/**
	 * Enable or disable filtering on the data in this column.
	 *  @type boolean
	 *  @default true
	 *
	 *  @name DataTable.defaults.column.searchable
	 *  @dtopt Columns
	 *
	 *  @example
	 *    // Using `columnDefs`
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columnDefs": [
	 *          { "searchable": false, "targets": [ 0 ] }
	 *        ] } );
	 *    } );
	 *
	 *  @example
	 *    // Using `columns`
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columns": [
	 *          { "searchable": false },
	 *          null,
	 *          null,
	 *          null,
	 *          null
	 *        ] } );
	 *    } );
	 */bSearchable:!0,/**
	 * Enable or disable ordering on this column.
	 *  @type boolean
	 *  @default true
	 *
	 *  @name DataTable.defaults.column.orderable
	 *  @dtopt Columns
	 *
	 *  @example
	 *    // Using `columnDefs`
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columnDefs": [
	 *          { "orderable": false, "targets": [ 0 ] }
	 *        ] } );
	 *    } );
	 *
	 *  @example
	 *    // Using `columns`
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columns": [
	 *          { "orderable": false },
	 *          null,
	 *          null,
	 *          null,
	 *          null
	 *        ] } );
	 *    } );
	 */bSortable:!0,/**
	 * Enable or disable the display of this column.
	 *  @type boolean
	 *  @default true
	 *
	 *  @name DataTable.defaults.column.visible
	 *  @dtopt Columns
	 *
	 *  @example
	 *    // Using `columnDefs`
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columnDefs": [
	 *          { "visible": false, "targets": [ 0 ] }
	 *        ] } );
	 *    } );
	 *
	 *  @example
	 *    // Using `columns`
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columns": [
	 *          { "visible": false },
	 *          null,
	 *          null,
	 *          null,
	 *          null
	 *        ] } );
	 *    } );
	 */bVisible:!0,/**
	 * Developer definable function that is called whenever a cell is created (Ajax source,
	 * etc) or processed for input (DOM source). This can be used as a compliment to mRender
	 * allowing you to modify the DOM element (add background colour for example) when the
	 * element is available.
	 *  @type function
	 *  @param {element} td The TD node that has been created
	 *  @param {*} cellData The Data for the cell
	 *  @param {array|object} rowData The data for the whole row
	 *  @param {int} row The row index for the aoData data store
	 *  @param {int} col The column index for aoColumns
	 *
	 *  @name DataTable.defaults.column.createdCell
	 *  @dtopt Columns
	 *
	 *  @example
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columnDefs": [ {
	 *          "targets": [3],
	 *          "createdCell": function (td, cellData, rowData, row, col) {
	 *            if ( cellData == "1.7" ) {
	 *              $(td).css('color', 'blue')
	 *            }
	 *          }
	 *        } ]
	 *      });
	 *    } );
	 */fnCreatedCell:null,/**
	 * This parameter has been replaced by `data` in DataTables to ensure naming
	 * consistency. `dataProp` can still be used, as there is backwards
	 * compatibility in DataTables for this option, but it is strongly
	 * recommended that you use `data` in preference to `dataProp`.
	 *  @name DataTable.defaults.column.dataProp
	 *//**
	 * This property can be used to read data from any data source property,
	 * including deeply nested objects / properties. `data` can be given in a
	 * number of different ways which effect its behaviour:
	 *
	 * * `integer` - treated as an array index for the data source. This is the
	 *   default that DataTables uses (incrementally increased for each column).
	 * * `string` - read an object property from the data source. There are
	 *   three 'special' options that can be used in the string to alter how
	 *   DataTables reads the data from the source object:
	 *    * `.` - Dotted Javascript notation. Just as you use a `.` in
	 *      Javascript to read from nested objects, so to can the options
	 *      specified in `data`. For example: `browser.version` or
	 *      `browser.name`. If your object parameter name contains a period, use
	 *      `\\` to escape it - i.e. `first\\.name`.
	 *    * `[]` - Array notation. DataTables can automatically combine data
	 *      from and array source, joining the data with the characters provided
	 *      between the two brackets. For example: `name[, ]` would provide a
	 *      comma-space separated list from the source array. If no characters
	 *      are provided between the brackets, the original array source is
	 *      returned.
	 *    * `()` - Function notation. Adding `()` to the end of a parameter will
	 *      execute a function of the name given. For example: `browser()` for a
	 *      simple function on the data source, `browser.version()` for a
	 *      function in a nested property or even `browser().version` to get an
	 *      object property if the function called returns an object. Note that
	 *      function notation is recommended for use in `render` rather than
	 *      `data` as it is much simpler to use as a renderer.
	 * * `null` - use the original data source for the row rather than plucking
	 *   data directly from it. This action has effects on two other
	 *   initialisation options:
	 *    * `defaultContent` - When null is given as the `data` option and
	 *      `defaultContent` is specified for the column, the value defined by
	 *      `defaultContent` will be used for the cell.
	 *    * `render` - When null is used for the `data` option and the `render`
	 *      option is specified for the column, the whole data source for the
	 *      row is used for the renderer.
	 * * `function` - the function given will be executed whenever DataTables
	 *   needs to set or get the data for a cell in the column. The function
	 *   takes three parameters:
	 *    * Parameters:
	 *      * `{array|object}` The data source for the row
	 *      * `{string}` The type call data requested - this will be 'set' when
	 *        setting data or 'filter', 'display', 'type', 'sort' or undefined
	 *        when gathering data. Note that when `undefined` is given for the
	 *        type DataTables expects to get the raw data for the object back<
	 *      * `{*}` Data to set when the second parameter is 'set'.
	 *    * Return:
	 *      * The return value from the function is not required when 'set' is
	 *        the type of call, but otherwise the return is what will be used
	 *        for the data requested.
	 *
	 * Note that `data` is a getter and setter option. If you just require
	 * formatting of data for output, you will likely want to use `render` which
	 * is simply a getter and thus simpler to use.
	 *
	 * Note that prior to DataTables 1.9.2 `data` was called `mDataProp`. The
	 * name change reflects the flexibility of this property and is consistent
	 * with the naming of mRender. If 'mDataProp' is given, then it will still
	 * be used by DataTables, as it automatically maps the old name to the new
	 * if required.
	 *
	 *  @type string|int|function|null
	 *  @default null <i>Use automatically calculated column index</i>
	 *
	 *  @name DataTable.defaults.column.data
	 *  @dtopt Columns
	 *
	 *  @example
	 *    // Read table data from objects
	 *    // JSON structure for each row:
	 *    //   {
	 *    //      "engine": {value},
	 *    //      "browser": {value},
	 *    //      "platform": {value},
	 *    //      "version": {value},
	 *    //      "grade": {value}
	 *    //   }
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "ajaxSource": "sources/objects.txt",
	 *        "columns": [
	 *          { "data": "engine" },
	 *          { "data": "browser" },
	 *          { "data": "platform" },
	 *          { "data": "version" },
	 *          { "data": "grade" }
	 *        ]
	 *      } );
	 *    } );
	 *
	 *  @example
	 *    // Read information from deeply nested objects
	 *    // JSON structure for each row:
	 *    //   {
	 *    //      "engine": {value},
	 *    //      "browser": {value},
	 *    //      "platform": {
	 *    //         "inner": {value}
	 *    //      },
	 *    //      "details": [
	 *    //         {value}, {value}
	 *    //      ]
	 *    //   }
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "ajaxSource": "sources/deep.txt",
	 *        "columns": [
	 *          { "data": "engine" },
	 *          { "data": "browser" },
	 *          { "data": "platform.inner" },
	 *          { "data": "details.0" },
	 *          { "data": "details.1" }
	 *        ]
	 *      } );
	 *    } );
	 *
	 *  @example
	 *    // Using `data` as a function to provide different information for
	 *    // sorting, filtering and display. In this case, currency (price)
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columnDefs": [ {
	 *          "targets": [ 0 ],
	 *          "data": function ( source, type, val ) {
	 *            if (type === 'set') {
	 *              source.price = val;
	 *              // Store the computed display and filter values for efficiency
	 *              source.price_display = val=="" ? "" : "$"+numberFormat(val);
	 *              source.price_filter  = val=="" ? "" : "$"+numberFormat(val)+" "+val;
	 *              return;
	 *            }
	 *            else if (type === 'display') {
	 *              return source.price_display;
	 *            }
	 *            else if (type === 'filter') {
	 *              return source.price_filter;
	 *            }
	 *            // 'sort', 'type' and undefined all just use the integer
	 *            return source.price;
	 *          }
	 *        } ]
	 *      } );
	 *    } );
	 *
	 *  @example
	 *    // Using default content
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columnDefs": [ {
	 *          "targets": [ 0 ],
	 *          "data": null,
	 *          "defaultContent": "Click to edit"
	 *        } ]
	 *      } );
	 *    } );
	 *
	 *  @example
	 *    // Using array notation - outputting a list from an array
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columnDefs": [ {
	 *          "targets": [ 0 ],
	 *          "data": "name[, ]"
	 *        } ]
	 *      } );
	 *    } );
	 *
	 */mData:null,/**
	 * This property is the rendering partner to `data` and it is suggested that
	 * when you want to manipulate data for display (including filtering,
	 * sorting etc) without altering the underlying data for the table, use this
	 * property. `render` can be considered to be the the read only companion to
	 * `data` which is read / write (then as such more complex). Like `data`
	 * this option can be given in a number of different ways to effect its
	 * behaviour:
	 *
	 * * `integer` - treated as an array index for the data source. This is the
	 *   default that DataTables uses (incrementally increased for each column).
	 * * `string` - read an object property from the data source. There are
	 *   three 'special' options that can be used in the string to alter how
	 *   DataTables reads the data from the source object:
	 *    * `.` - Dotted Javascript notation. Just as you use a `.` in
	 *      Javascript to read from nested objects, so to can the options
	 *      specified in `data`. For example: `browser.version` or
	 *      `browser.name`. If your object parameter name contains a period, use
	 *      `\\` to escape it - i.e. `first\\.name`.
	 *    * `[]` - Array notation. DataTables can automatically combine data
	 *      from and array source, joining the data with the characters provided
	 *      between the two brackets. For example: `name[, ]` would provide a
	 *      comma-space separated list from the source array. If no characters
	 *      are provided between the brackets, the original array source is
	 *      returned.
	 *    * `()` - Function notation. Adding `()` to the end of a parameter will
	 *      execute a function of the name given. For example: `browser()` for a
	 *      simple function on the data source, `browser.version()` for a
	 *      function in a nested property or even `browser().version` to get an
	 *      object property if the function called returns an object.
	 * * `object` - use different data for the different data types requested by
	 *   DataTables ('filter', 'display', 'type' or 'sort'). The property names
	 *   of the object is the data type the property refers to and the value can
	 *   defined using an integer, string or function using the same rules as
	 *   `render` normally does. Note that an `_` option _must_ be specified.
	 *   This is the default value to use if you haven't specified a value for
	 *   the data type requested by DataTables.
	 * * `function` - the function given will be executed whenever DataTables
	 *   needs to set or get the data for a cell in the column. The function
	 *   takes three parameters:
	 *    * Parameters:
	 *      * {array|object} The data source for the row (based on `data`)
	 *      * {string} The type call data requested - this will be 'filter',
	 *        'display', 'type' or 'sort'.
	 *      * {array|object} The full data source for the row (not based on
	 *        `data`)
	 *    * Return:
	 *      * The return value from the function is what will be used for the
	 *        data requested.
	 *
	 *  @type string|int|function|object|null
	 *  @default null Use the data source value.
	 *
	 *  @name DataTable.defaults.column.render
	 *  @dtopt Columns
	 *
	 *  @example
	 *    // Create a comma separated list from an array of objects
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "ajaxSource": "sources/deep.txt",
	 *        "columns": [
	 *          { "data": "engine" },
	 *          { "data": "browser" },
	 *          {
	 *            "data": "platform",
	 *            "render": "[, ].name"
	 *          }
	 *        ]
	 *      } );
	 *    } );
	 *
	 *  @example
	 *    // Execute a function to obtain data
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columnDefs": [ {
	 *          "targets": [ 0 ],
	 *          "data": null, // Use the full data source object for the renderer's source
	 *          "render": "browserName()"
	 *        } ]
	 *      } );
	 *    } );
	 *
	 *  @example
	 *    // As an object, extracting different data for the different types
	 *    // This would be used with a data source such as:
	 *    //   { "phone": 5552368, "phone_filter": "5552368 555-2368", "phone_display": "555-2368" }
	 *    // Here the `phone` integer is used for sorting and type detection, while `phone_filter`
	 *    // (which has both forms) is used for filtering for if a user inputs either format, while
	 *    // the formatted phone number is the one that is shown in the table.
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columnDefs": [ {
	 *          "targets": [ 0 ],
	 *          "data": null, // Use the full data source object for the renderer's source
	 *          "render": {
	 *            "_": "phone",
	 *            "filter": "phone_filter",
	 *            "display": "phone_display"
	 *          }
	 *        } ]
	 *      } );
	 *    } );
	 *
	 *  @example
	 *    // Use as a function to create a link from the data source
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columnDefs": [ {
	 *          "targets": [ 0 ],
	 *          "data": "download_link",
	 *          "render": function ( data, type, full ) {
	 *            return '<a href="'+data+'">Download</a>';
	 *          }
	 *        } ]
	 *      } );
	 *    } );
	 */mRender:null,/**
	 * Change the cell type created for the column - either TD cells or TH cells. This
	 * can be useful as TH cells have semantic meaning in the table body, allowing them
	 * to act as a header for a row (you may wish to add scope='row' to the TH elements).
	 *  @type string
	 *  @default td
	 *
	 *  @name DataTable.defaults.column.cellType
	 *  @dtopt Columns
	 *
	 *  @example
	 *    // Make the first column use TH cells
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columnDefs": [ {
	 *          "targets": [ 0 ],
	 *          "cellType": "th"
	 *        } ]
	 *      } );
	 *    } );
	 */sCellType:"td",/**
	 * Class to give to each cell in this column.
	 *  @type string
	 *  @default <i>Empty string</i>
	 *
	 *  @name DataTable.defaults.column.class
	 *  @dtopt Columns
	 *
	 *  @example
	 *    // Using `columnDefs`
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columnDefs": [
	 *          { "class": "my_class", "targets": [ 0 ] }
	 *        ]
	 *      } );
	 *    } );
	 *
	 *  @example
	 *    // Using `columns`
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columns": [
	 *          { "class": "my_class" },
	 *          null,
	 *          null,
	 *          null,
	 *          null
	 *        ]
	 *      } );
	 *    } );
	 */sClass:"",/**
	 * When DataTables calculates the column widths to assign to each column,
	 * it finds the longest string in each column and then constructs a
	 * temporary table and reads the widths from that. The problem with this
	 * is that "mmm" is much wider then "iiii", but the latter is a longer
	 * string - thus the calculation can go wrong (doing it properly and putting
	 * it into an DOM object and measuring that is horribly(!) slow). Thus as
	 * a "work around" we provide this option. It will append its value to the
	 * text that is found to be the longest string for the column - i.e. padding.
	 * Generally you shouldn't need this!
	 *  @type string
	 *  @default <i>Empty string<i>
	 *
	 *  @name DataTable.defaults.column.contentPadding
	 *  @dtopt Columns
	 *
	 *  @example
	 *    // Using `columns`
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columns": [
	 *          null,
	 *          null,
	 *          null,
	 *          {
	 *            "contentPadding": "mmm"
	 *          }
	 *        ]
	 *      } );
	 *    } );
	 */sContentPadding:"",/**
	 * Allows a default value to be given for a column's data, and will be used
	 * whenever a null data source is encountered (this can be because `data`
	 * is set to null, or because the data source itself is null).
	 *  @type string
	 *  @default null
	 *
	 *  @name DataTable.defaults.column.defaultContent
	 *  @dtopt Columns
	 *
	 *  @example
	 *    // Using `columnDefs`
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columnDefs": [
	 *          {
	 *            "data": null,
	 *            "defaultContent": "Edit",
	 *            "targets": [ -1 ]
	 *          }
	 *        ]
	 *      } );
	 *    } );
	 *
	 *  @example
	 *    // Using `columns`
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columns": [
	 *          null,
	 *          null,
	 *          null,
	 *          {
	 *            "data": null,
	 *            "defaultContent": "Edit"
	 *          }
	 *        ]
	 *      } );
	 *    } );
	 */sDefaultContent:null,/**
	 * This parameter is only used in DataTables' server-side processing. It can
	 * be exceptionally useful to know what columns are being displayed on the
	 * client side, and to map these to database fields. When defined, the names
	 * also allow DataTables to reorder information from the server if it comes
	 * back in an unexpected order (i.e. if you switch your columns around on the
	 * client-side, your server-side code does not also need updating).
	 *  @type string
	 *  @default <i>Empty string</i>
	 *
	 *  @name DataTable.defaults.column.name
	 *  @dtopt Columns
	 *
	 *  @example
	 *    // Using `columnDefs`
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columnDefs": [
	 *          { "name": "engine", "targets": [ 0 ] },
	 *          { "name": "browser", "targets": [ 1 ] },
	 *          { "name": "platform", "targets": [ 2 ] },
	 *          { "name": "version", "targets": [ 3 ] },
	 *          { "name": "grade", "targets": [ 4 ] }
	 *        ]
	 *      } );
	 *    } );
	 *
	 *  @example
	 *    // Using `columns`
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columns": [
	 *          { "name": "engine" },
	 *          { "name": "browser" },
	 *          { "name": "platform" },
	 *          { "name": "version" },
	 *          { "name": "grade" }
	 *        ]
	 *      } );
	 *    } );
	 */sName:"",/**
	 * Defines a data source type for the ordering which can be used to read
	 * real-time information from the table (updating the internally cached
	 * version) prior to ordering. This allows ordering to occur on user
	 * editable elements such as form inputs.
	 *  @type string
	 *  @default std
	 *
	 *  @name DataTable.defaults.column.orderDataType
	 *  @dtopt Columns
	 *
	 *  @example
	 *    // Using `columnDefs`
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columnDefs": [
	 *          { "orderDataType": "dom-text", "targets": [ 2, 3 ] },
	 *          { "type": "numeric", "targets": [ 3 ] },
	 *          { "orderDataType": "dom-select", "targets": [ 4 ] },
	 *          { "orderDataType": "dom-checkbox", "targets": [ 5 ] }
	 *        ]
	 *      } );
	 *    } );
	 *
	 *  @example
	 *    // Using `columns`
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columns": [
	 *          null,
	 *          null,
	 *          { "orderDataType": "dom-text" },
	 *          { "orderDataType": "dom-text", "type": "numeric" },
	 *          { "orderDataType": "dom-select" },
	 *          { "orderDataType": "dom-checkbox" }
	 *        ]
	 *      } );
	 *    } );
	 */sSortDataType:"std",/**
	 * The title of this column.
	 *  @type string
	 *  @default null <i>Derived from the 'TH' value for this column in the
	 *    original HTML table.</i>
	 *
	 *  @name DataTable.defaults.column.title
	 *  @dtopt Columns
	 *
	 *  @example
	 *    // Using `columnDefs`
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columnDefs": [
	 *          { "title": "My column title", "targets": [ 0 ] }
	 *        ]
	 *      } );
	 *    } );
	 *
	 *  @example
	 *    // Using `columns`
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columns": [
	 *          { "title": "My column title" },
	 *          null,
	 *          null,
	 *          null,
	 *          null
	 *        ]
	 *      } );
	 *    } );
	 */sTitle:null,/**
	 * The type allows you to specify how the data for this column will be
	 * ordered. Four types (string, numeric, date and html (which will strip
	 * HTML tags before ordering)) are currently available. Note that only date
	 * formats understood by Javascript's Date() object will be accepted as type
	 * date. For example: "Mar 26, 2008 5:03 PM". May take the values: 'string',
	 * 'numeric', 'date' or 'html' (by default). Further types can be adding
	 * through plug-ins.
	 *  @type string
	 *  @default null <i>Auto-detected from raw data</i>
	 *
	 *  @name DataTable.defaults.column.type
	 *  @dtopt Columns
	 *
	 *  @example
	 *    // Using `columnDefs`
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columnDefs": [
	 *          { "type": "html", "targets": [ 0 ] }
	 *        ]
	 *      } );
	 *    } );
	 *
	 *  @example
	 *    // Using `columns`
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columns": [
	 *          { "type": "html" },
	 *          null,
	 *          null,
	 *          null,
	 *          null
	 *        ]
	 *      } );
	 *    } );
	 */sType:null,/**
	 * Defining the width of the column, this parameter may take any CSS value
	 * (3em, 20px etc). DataTables applies 'smart' widths to columns which have not
	 * been given a specific width through this interface ensuring that the table
	 * remains readable.
	 *  @type string
	 *  @default null <i>Automatic</i>
	 *
	 *  @name DataTable.defaults.column.width
	 *  @dtopt Columns
	 *
	 *  @example
	 *    // Using `columnDefs`
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columnDefs": [
	 *          { "width": "20%", "targets": [ 0 ] }
	 *        ]
	 *      } );
	 *    } );
	 *
	 *  @example
	 *    // Using `columns`
	 *    $(document).ready( function() {
	 *      $('#example').dataTable( {
	 *        "columns": [
	 *          { "width": "20%" },
	 *          null,
	 *          null,
	 *          null,
	 *          null
	 *        ]
	 *      } );
	 *    } );
	 */sWidth:null},as(rG.defaults.column),/**
 * DataTables settings object - this holds all the information needed for a
 * given table, including configuration, data and current application of the
 * table options. DataTables does not have a single instance for each DataTable
 * with the settings attached to that instance, but rather instances of the
 * DataTable "class" are created on-the-fly as needed (typically by a
 * $().dataTable() call) and the settings object is then applied to that
 * instance.
 *
 * Note that this object is related to {@link DataTable.defaults} but this
 * one is the internal data store for DataTables's cache of columns. It should
 * NOT be manipulated outside of DataTables. Any configuration should be done
 * through the initialisation options.
 *  @namespace
 *  @todo Really should attach the settings object to individual instances so we
 *    don't need to create new instances on each $().dataTable() call (if the
 *    table already exists). It would also save passing oSettings around and
 *    into every single function. However, this is a very significant
 *    architecture change for DataTables and will almost certainly break
 *    backwards compatibility with older installations. This is something that
 *    will be done in 2.0.
 */rG.models.oSettings={/**
	 * Primary features of DataTables and their enablement state.
	 *  @namespace
	 */oFeatures:{/**
		 * Flag to say if DataTables should automatically try to calculate the
		 * optimum table and columns widths (true) or not (false).
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type boolean
		 */bAutoWidth:null,/**
		 * Delay the creation of TR and TD elements until they are actually
		 * needed by a driven page draw. This can give a significant speed
		 * increase for Ajax source and Javascript source data, but makes no
		 * difference at all for DOM and server-side processing tables.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type boolean
		 */bDeferRender:null,/**
		 * Enable filtering on the table or not. Note that if this is disabled
		 * then there is no filtering at all on the table, including fnFilter.
		 * To just remove the filtering input use sDom and remove the 'f' option.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type boolean
		 */bFilter:null,/**
		 * Table information element (the 'Showing x of y records' div) enable
		 * flag.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type boolean
		 */bInfo:null,/**
		 * Present a user control allowing the end user to change the page size
		 * when pagination is enabled.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type boolean
		 */bLengthChange:null,/**
		 * Pagination enabled or not. Note that if this is disabled then length
		 * changing must also be disabled.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type boolean
		 */bPaginate:null,/**
		 * Processing indicator enable flag whenever DataTables is enacting a
		 * user request - typically an Ajax request for server-side processing.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type boolean
		 */bProcessing:null,/**
		 * Server-side processing enabled flag - when enabled DataTables will
		 * get all data from the server for every draw - there is no filtering,
		 * sorting or paging done on the client-side.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type boolean
		 */bServerSide:null,/**
		 * Sorting enablement flag.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type boolean
		 */bSort:null,/**
		 * Multi-column sorting
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type boolean
		 */bSortMulti:null,/**
		 * Apply a class to the columns which are being sorted to provide a
		 * visual highlight or not. This can slow things down when enabled since
		 * there is a lot of DOM interaction.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type boolean
		 */bSortClasses:null,/**
		 * State saving enablement flag.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type boolean
		 */bStateSave:null},/**
	 * Scrolling settings for a table.
	 *  @namespace
	 */oScroll:{/**
		 * When the table is shorter in height than sScrollY, collapse the
		 * table container down to the height of the table (when true).
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type boolean
		 */bCollapse:null,/**
		 * Width of the scrollbar for the web-browser's platform. Calculated
		 * during table initialisation.
		 *  @type int
		 *  @default 0
		 */iBarWidth:0,/**
		 * Viewport width for horizontal scrolling. Horizontal scrolling is
		 * disabled if an empty string.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type string
		 */sX:null,/**
		 * Width to expand the table to when using x-scrolling. Typically you
		 * should not need to use this.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type string
		 *  @deprecated
		 */sXInner:null,/**
		 * Viewport height for vertical scrolling. Vertical scrolling is disabled
		 * if an empty string.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type string
		 */sY:null},/**
	 * Language information for the table.
	 *  @namespace
	 *  @extends DataTable.defaults.oLanguage
	 */oLanguage:{/**
		 * Information callback function. See
		 * {@link DataTable.defaults.fnInfoCallback}
		 *  @type function
		 *  @default null
		 */fnInfoCallback:null},/**
	 * Browser support parameters
	 *  @namespace
	 */oBrowser:{/**
		 * Indicate if the browser incorrectly calculates width:100% inside a
		 * scrolling element (IE6/7)
		 *  @type boolean
		 *  @default false
		 */bScrollOversize:!1,/**
		 * Determine if the vertical scrollbar is on the right or left of the
		 * scrolling container - needed for rtl language layout, although not
		 * all browsers move the scrollbar (Safari).
		 *  @type boolean
		 *  @default false
		 */bScrollbarLeft:!1,/**
		 * Flag for if `getBoundingClientRect` is fully supported or not
		 *  @type boolean
		 *  @default false
		 */bBounding:!1,/**
		 * Browser scrollbar width
		 *  @type integer
		 *  @default 0
		 */barWidth:0},ajax:null,/**
	 * Array referencing the nodes which are used for the features. The
	 * parameters of this object match what is allowed by sDom - i.e.
	 *   <ul>
	 *     <li>'l' - Length changing</li>
	 *     <li>'f' - Filtering input</li>
	 *     <li>'t' - The table!</li>
	 *     <li>'i' - Information</li>
	 *     <li>'p' - Pagination</li>
	 *     <li>'r' - pRocessing</li>
	 *   </ul>
	 *  @type array
	 *  @default []
	 */aanFeatures:[],/**
	 * Store data information - see {@link DataTable.models.oRow} for detailed
	 * information.
	 *  @type array
	 *  @default []
	 */aoData:[],/**
	 * Array of indexes which are in the current display (after filtering etc)
	 *  @type array
	 *  @default []
	 */aiDisplay:[],/**
	 * Array of indexes for display - no filtering
	 *  @type array
	 *  @default []
	 */aiDisplayMaster:[],/**
	 * Map of row ids to data indexes
	 *  @type object
	 *  @default {}
	 */aIds:{},/**
	 * Store information about each column that is in use
	 *  @type array
	 *  @default []
	 */aoColumns:[],/**
	 * Store information about the table's header
	 *  @type array
	 *  @default []
	 */aoHeader:[],/**
	 * Store information about the table's footer
	 *  @type array
	 *  @default []
	 */aoFooter:[],/**
	 * Store the applied global search information in case we want to force a
	 * research or compare the old search to a new one.
	 * Note that this parameter will be set by the initialisation routine. To
	 * set a default use {@link DataTable.defaults}.
	 *  @namespace
	 *  @extends DataTable.models.oSearch
	 */oPreviousSearch:{},/**
	 * Store the applied search for each column - see
	 * {@link DataTable.models.oSearch} for the format that is used for the
	 * filtering information for each column.
	 *  @type array
	 *  @default []
	 */aoPreSearchCols:[],/**
	 * Sorting that is applied to the table. Note that the inner arrays are
	 * used in the following manner:
	 * <ul>
	 *   <li>Index 0 - column number</li>
	 *   <li>Index 1 - current sorting direction</li>
	 * </ul>
	 * Note that this parameter will be set by the initialisation routine. To
	 * set a default use {@link DataTable.defaults}.
	 *  @type array
	 *  @todo These inner arrays should really be objects
	 */aaSorting:null,/**
	 * Sorting that is always applied to the table (i.e. prefixed in front of
	 * aaSorting).
	 * Note that this parameter will be set by the initialisation routine. To
	 * set a default use {@link DataTable.defaults}.
	 *  @type array
	 *  @default []
	 */aaSortingFixed:[],/**
	 * Classes to use for the striping of a table.
	 * Note that this parameter will be set by the initialisation routine. To
	 * set a default use {@link DataTable.defaults}.
	 *  @type array
	 *  @default []
	 */asStripeClasses:null,/**
	 * If restoring a table - we should restore its striping classes as well
	 *  @type array
	 *  @default []
	 */asDestroyStripes:[],/**
	 * If restoring a table - we should restore its width
	 *  @type int
	 *  @default 0
	 */sDestroyWidth:0,/**
	 * Callback functions array for every time a row is inserted (i.e. on a draw).
	 *  @type array
	 *  @default []
	 */aoRowCallback:[],/**
	 * Callback functions for the header on each draw.
	 *  @type array
	 *  @default []
	 */aoHeaderCallback:[],/**
	 * Callback function for the footer on each draw.
	 *  @type array
	 *  @default []
	 */aoFooterCallback:[],/**
	 * Array of callback functions for draw callback functions
	 *  @type array
	 *  @default []
	 */aoDrawCallback:[],/**
	 * Array of callback functions for row created function
	 *  @type array
	 *  @default []
	 */aoRowCreatedCallback:[],/**
	 * Callback functions for just before the table is redrawn. A return of
	 * false will be used to cancel the draw.
	 *  @type array
	 *  @default []
	 */aoPreDrawCallback:[],/**
	 * Callback functions for when the table has been initialised.
	 *  @type array
	 *  @default []
	 */aoInitComplete:[],/**
	 * Callbacks for modifying the settings to be stored for state saving, prior to
	 * saving state.
	 *  @type array
	 *  @default []
	 */aoStateSaveParams:[],/**
	 * Callbacks for modifying the settings that have been stored for state saving
	 * prior to using the stored values to restore the state.
	 *  @type array
	 *  @default []
	 */aoStateLoadParams:[],/**
	 * Callbacks for operating on the settings object once the saved state has been
	 * loaded
	 *  @type array
	 *  @default []
	 */aoStateLoaded:[],/**
	 * Cache the table ID for quick access
	 *  @type string
	 *  @default <i>Empty string</i>
	 */sTableId:"",/**
	 * The TABLE node for the main table
	 *  @type node
	 *  @default null
	 */nTable:null,/**
	 * Permanent ref to the thead element
	 *  @type node
	 *  @default null
	 */nTHead:null,/**
	 * Permanent ref to the tfoot element - if it exists
	 *  @type node
	 *  @default null
	 */nTFoot:null,/**
	 * Permanent ref to the tbody element
	 *  @type node
	 *  @default null
	 */nTBody:null,/**
	 * Cache the wrapper node (contains all DataTables controlled elements)
	 *  @type node
	 *  @default null
	 */nTableWrapper:null,/**
	 * Indicate if when using server-side processing the loading of data
	 * should be deferred until the second draw.
	 * Note that this parameter will be set by the initialisation routine. To
	 * set a default use {@link DataTable.defaults}.
	 *  @type boolean
	 *  @default false
	 */bDeferLoading:!1,/**
	 * Indicate if all required information has been read in
	 *  @type boolean
	 *  @default false
	 */bInitialised:!1,/**
	 * Information about open rows. Each object in the array has the parameters
	 * 'nTr' and 'nParent'
	 *  @type array
	 *  @default []
	 */aoOpenRows:[],/**
	 * Dictate the positioning of DataTables' control elements - see
	 * {@link DataTable.model.oInit.sDom}.
	 * Note that this parameter will be set by the initialisation routine. To
	 * set a default use {@link DataTable.defaults}.
	 *  @type string
	 *  @default null
	 */sDom:null,/**
	 * Search delay (in mS)
	 *  @type integer
	 *  @default null
	 */searchDelay:null,/**
	 * Which type of pagination should be used.
	 * Note that this parameter will be set by the initialisation routine. To
	 * set a default use {@link DataTable.defaults}.
	 *  @type string
	 *  @default two_button
	 */sPaginationType:"two_button",/**
	 * The state duration (for `stateSave`) in seconds.
	 * Note that this parameter will be set by the initialisation routine. To
	 * set a default use {@link DataTable.defaults}.
	 *  @type int
	 *  @default 0
	 */iStateDuration:0,/**
	 * Array of callback functions for state saving. Each array element is an
	 * object with the following parameters:
	 *   <ul>
	 *     <li>function:fn - function to call. Takes two parameters, oSettings
	 *       and the JSON string to save that has been thus far created. Returns
	 *       a JSON string to be inserted into a json object
	 *       (i.e. '"param": [ 0, 1, 2]')</li>
	 *     <li>string:sName - name of callback</li>
	 *   </ul>
	 *  @type array
	 *  @default []
	 */aoStateSave:[],/**
	 * Array of callback functions for state loading. Each array element is an
	 * object with the following parameters:
	 *   <ul>
	 *     <li>function:fn - function to call. Takes two parameters, oSettings
	 *       and the object stored. May return false to cancel state loading</li>
	 *     <li>string:sName - name of callback</li>
	 *   </ul>
	 *  @type array
	 *  @default []
	 */aoStateLoad:[],/**
	 * State that was saved. Useful for back reference
	 *  @type object
	 *  @default null
	 */oSavedState:null,/**
	 * State that was loaded. Useful for back reference
	 *  @type object
	 *  @default null
	 */oLoadedState:null,/**
	 * Source url for AJAX data for the table.
	 * Note that this parameter will be set by the initialisation routine. To
	 * set a default use {@link DataTable.defaults}.
	 *  @type string
	 *  @default null
	 */sAjaxSource:null,/**
	 * Property from a given object from which to read the table data from. This
	 * can be an empty string (when not server-side processing), in which case
	 * it is  assumed an an array is given directly.
	 * Note that this parameter will be set by the initialisation routine. To
	 * set a default use {@link DataTable.defaults}.
	 *  @type string
	 */sAjaxDataProp:null,/**
	 * The last jQuery XHR object that was used for server-side data gathering.
	 * This can be used for working with the XHR information in one of the
	 * callbacks
	 *  @type object
	 *  @default null
	 */jqXHR:null,/**
	 * JSON returned from the server in the last Ajax request
	 *  @type object
	 *  @default undefined
	 */json:void 0,/**
	 * Data submitted as part of the last Ajax request
	 *  @type object
	 *  @default undefined
	 */oAjaxData:void 0,/**
	 * Function to get the server-side data.
	 * Note that this parameter will be set by the initialisation routine. To
	 * set a default use {@link DataTable.defaults}.
	 *  @type function
	 */fnServerData:null,/**
	 * Functions which are called prior to sending an Ajax request so extra
	 * parameters can easily be sent to the server
	 *  @type array
	 *  @default []
	 */aoServerParams:[],/**
	 * Send the XHR HTTP method - GET or POST (could be PUT or DELETE if
	 * required).
	 * Note that this parameter will be set by the initialisation routine. To
	 * set a default use {@link DataTable.defaults}.
	 *  @type string
	 */sServerMethod:null,/**
	 * Format numbers for display.
	 * Note that this parameter will be set by the initialisation routine. To
	 * set a default use {@link DataTable.defaults}.
	 *  @type function
	 */fnFormatNumber:null,/**
	 * List of options that can be used for the user selectable length menu.
	 * Note that this parameter will be set by the initialisation routine. To
	 * set a default use {@link DataTable.defaults}.
	 *  @type array
	 *  @default []
	 */aLengthMenu:null,/**
	 * Counter for the draws that the table does. Also used as a tracker for
	 * server-side processing
	 *  @type int
	 *  @default 0
	 */iDraw:0,/**
	 * Indicate if a redraw is being done - useful for Ajax
	 *  @type boolean
	 *  @default false
	 */bDrawing:!1,/**
	 * Draw index (iDraw) of the last error when parsing the returned data
	 *  @type int
	 *  @default -1
	 */iDrawError:-1,/**
	 * Paging display length
	 *  @type int
	 *  @default 10
	 */_iDisplayLength:10,/**
	 * Paging start point - aiDisplay index
	 *  @type int
	 *  @default 0
	 */_iDisplayStart:0,/**
	 * Server-side processing - number of records in the result set
	 * (i.e. before filtering), Use fnRecordsTotal rather than
	 * this property to get the value of the number of records, regardless of
	 * the server-side processing setting.
	 *  @type int
	 *  @default 0
	 *  @private
	 */_iRecordsTotal:0,/**
	 * Server-side processing - number of records in the current display set
	 * (i.e. after filtering). Use fnRecordsDisplay rather than
	 * this property to get the value of the number of records, regardless of
	 * the server-side processing setting.
	 *  @type boolean
	 *  @default 0
	 *  @private
	 */_iRecordsDisplay:0,/**
	 * The classes to use for the table
	 *  @type object
	 *  @default {}
	 */oClasses:{},/**
	 * Flag attached to the settings object so you can check in the draw
	 * callback if filtering has been done in the draw. Deprecated in favour of
	 * events.
	 *  @type boolean
	 *  @default false
	 *  @deprecated
	 */bFiltered:!1,/**
	 * Flag attached to the settings object so you can check in the draw
	 * callback if sorting has been done in the draw. Deprecated in favour of
	 * events.
	 *  @type boolean
	 *  @default false
	 *  @deprecated
	 */bSorted:!1,/**
	 * Indicate that if multiple rows are in the header and there is more than
	 * one unique cell per column, if the top one (true) or bottom one (false)
	 * should be used for sorting / title by DataTables.
	 * Note that this parameter will be set by the initialisation routine. To
	 * set a default use {@link DataTable.defaults}.
	 *  @type boolean
	 */bSortCellsTop:null,/**
	 * Initialisation object that is used for the table
	 *  @type object
	 *  @default null
	 */oInit:null,/**
	 * Destroy callback functions - for plug-ins to attach themselves to the
	 * destroy so they can clean up markup and events.
	 *  @type array
	 *  @default []
	 */aoDestroyCallback:[],/**
	 * Get the number of records in the current record set, before filtering
	 *  @type function
	 */fnRecordsTotal:function(){return"ssp"==oW(this)?1*this._iRecordsTotal:this.aiDisplayMaster.length},/**
	 * Get the number of records in the current record set, after filtering
	 *  @type function
	 */fnRecordsDisplay:function(){return"ssp"==oW(this)?1*this._iRecordsDisplay:this.aiDisplay.length},/**
	 * Get the display end point - aiDisplay index
	 *  @type function
	 */fnDisplayEnd:function(){var t=this._iDisplayLength,e=this._iDisplayStart,i=e+t,n=this.aiDisplay.length,r=this.oFeatures,a=r.bPaginate;return r.bServerSide?!1===a||-1===t?e+n:Math.min(e+t,this._iRecordsDisplay):!a||i>n||-1===t?n:i},/**
	 * The DataTables object for this table
	 *  @type object
	 *  @default null
	 */oInstance:null,/**
	 * Unique identifier for each instance of the DataTables object. If there
	 * is an ID on the table node, then it takes that value, otherwise an
	 * incrementing internal counter is used.
	 *  @type string
	 *  @default null
	 */sInstance:null,/**
	 * tabindex attribute value that is added to DataTables control elements, allowing
	 * keyboard navigation of the table and its controls.
	 */iTabIndex:0,/**
	 * DIV container for the footer scrolling table if scrolling
	 */nScrollHead:null,/**
	 * DIV container for the footer scrolling table if scrolling
	 */nScrollFoot:null,/**
	 * Last applied sort
	 *  @type array
	 *  @default []
	 */aLastSort:[],/**
	 * Stored plug-in instances
	 *  @type object
	 *  @default {}
	 */oPlugins:{},/**
	 * Function used to get a row's id from the row's data
	 *  @type function
	 *  @default null
	 */rowIdFn:null,/**
	 * Data location where to store a row's id
	 *  @type string
	 *  @default null
	 */rowId:null},/**
 * Extension object for DataTables that is used to provide all extension
 * options.
 *
 * Note that the `DataTable.ext` object is available through
 * `jQuery.fn.dataTable.ext` where it may be accessed and manipulated. It is
 * also aliased to `jQuery.fn.dataTableExt` for historic reasons.
 *  @namespace
 *  @extends DataTable.models.ext
 *//**
 * DataTables extensions
 * 
 * This namespace acts as a collection area for plug-ins that can be used to
 * extend DataTables capabilities. Indeed many of the build in methods
 * use this method to provide their own capabilities (sorting methods for
 * example).
 *
 * Note that this namespace is aliased to `jQuery.fn.dataTableExt` for legacy
 * reasons
 *
 *  @namespace
 */rG.ext=t2={/**
	 * Buttons. For use with the Buttons extension for DataTables. This is
	 * defined here so other extensions can define buttons regardless of load
	 * order. It is _not_ used by DataTables core.
	 *
	 *  @type object
	 *  @default {}
	 */buttons:{},/**
	 * Element class names
	 *
	 *  @type object
	 *  @default {}
	 */classes:{},/**
	 * DataTables build type (expanded by the download builder)
	 *
	 *  @type string
	 */builder:"-source-",/**
	 * Error reporting.
	 * 
	 * How should DataTables report an error. Can take the value 'alert',
	 * 'throw', 'none' or a function.
	 *
	 *  @type string|function
	 *  @default alert
	 */errMode:"alert",/**
	 * Feature plug-ins.
	 * 
	 * This is an array of objects which describe the feature plug-ins that are
	 * available to DataTables. These feature plug-ins are then available for
	 * use through the `dom` initialisation option.
	 * 
	 * Each feature plug-in is described by an object which must have the
	 * following properties:
	 * 
	 * * `fnInit` - function that is used to initialise the plug-in,
	 * * `cFeature` - a character so the feature can be enabled by the `dom`
	 *   instillation option. This is case sensitive.
	 *
	 * The `fnInit` function has the following input parameters:
	 *
	 * 1. `{object}` DataTables settings object: see
	 *    {@link DataTable.models.oSettings}
	 *
	 * And the following return is expected:
	 * 
	 * * {node|null} The element which contains your feature. Note that the
	 *   return may also be void if your plug-in does not require to inject any
	 *   DOM elements into DataTables control (`dom`) - for example this might
	 *   be useful when developing a plug-in which allows table control via
	 *   keyboard entry
	 *
	 *  @type array
	 *
	 *  @example
	 *    $.fn.dataTable.ext.features.push( {
	 *      "fnInit": function( oSettings ) {
	 *        return new TableTools( { "oDTSettings": oSettings } );
	 *      },
	 *      "cFeature": "T"
	 *    } );
	 */feature:[],/**
	 * Row searching.
	 * 
	 * This method of searching is complimentary to the default type based
	 * searching, and a lot more comprehensive as it allows you complete control
	 * over the searching logic. Each element in this array is a function
	 * (parameters described below) that is called for every row in the table,
	 * and your logic decides if it should be included in the searching data set
	 * or not.
	 *
	 * Searching functions have the following input parameters:
	 *
	 * 1. `{object}` DataTables settings object: see
	 *    {@link DataTable.models.oSettings}
	 * 2. `{array|object}` Data for the row to be processed (same as the
	 *    original format that was passed in as the data source, or an array
	 *    from a DOM data source
	 * 3. `{int}` Row index ({@link DataTable.models.oSettings.aoData}), which
	 *    can be useful to retrieve the `TR` element if you need DOM interaction.
	 *
	 * And the following return is expected:
	 *
	 * * {boolean} Include the row in the searched result set (true) or not
	 *   (false)
	 *
	 * Note that as with the main search ability in DataTables, technically this
	 * is "filtering", since it is subtractive. However, for consistency in
	 * naming we call it searching here.
	 *
	 *  @type array
	 *  @default []
	 *
	 *  @example
	 *    // The following example shows custom search being applied to the
	 *    // fourth column (i.e. the data[3] index) based on two input values
	 *    // from the end-user, matching the data in a certain range.
	 *    $.fn.dataTable.ext.search.push(
	 *      function( settings, data, dataIndex ) {
	 *        var min = document.getElementById('min').value * 1;
	 *        var max = document.getElementById('max').value * 1;
	 *        var version = data[3] == "-" ? 0 : data[3]*1;
	 *
	 *        if ( min == "" && max == "" ) {
	 *          return true;
	 *        }
	 *        else if ( min == "" && version < max ) {
	 *          return true;
	 *        }
	 *        else if ( min < version && "" == max ) {
	 *          return true;
	 *        }
	 *        else if ( min < version && version < max ) {
	 *          return true;
	 *        }
	 *        return false;
	 *      }
	 *    );
	 */search:[],/**
	 * Selector extensions
	 *
	 * The `selector` option can be used to extend the options available for the
	 * selector modifier options (`selector-modifier` object data type) that
	 * each of the three built in selector types offer (row, column and cell +
	 * their plural counterparts). For example the Select extension uses this
	 * mechanism to provide an option to select only rows, columns and cells
	 * that have been marked as selected by the end user (`{selected: true}`),
	 * which can be used in conjunction with the existing built in selector
	 * options.
	 *
	 * Each property is an array to which functions can be pushed. The functions
	 * take three attributes:
	 *
	 * * Settings object for the host table
	 * * Options object (`selector-modifier` object type)
	 * * Array of selected item indexes
	 *
	 * The return is an array of the resulting item indexes after the custom
	 * selector has been applied.
	 *
	 *  @type object
	 */selector:{cell:[],column:[],row:[]},/**
	 * Internal functions, exposed for used in plug-ins.
	 * 
	 * Please note that you should not need to use the internal methods for
	 * anything other than a plug-in (and even then, try to avoid if possible).
	 * The internal function may change between releases.
	 *
	 *  @type object
	 *  @default {}
	 */internal:{},/**
	 * Legacy configuration options. Enable and disable legacy options that
	 * are available in DataTables.
	 *
	 *  @type object
	 */legacy:{/**
		 * Enable / disable DataTables 1.9 compatible server-side processing
		 * requests
		 *
		 *  @type boolean
		 *  @default null
		 */ajax:null},/**
	 * Pagination plug-in methods.
	 * 
	 * Each entry in this object is a function and defines which buttons should
	 * be shown by the pagination rendering method that is used for the table:
	 * {@link DataTable.ext.renderer.pageButton}. The renderer addresses how the
	 * buttons are displayed in the document, while the functions here tell it
	 * what buttons to display. This is done by returning an array of button
	 * descriptions (what each button will do).
	 *
	 * Pagination types (the four built in options and any additional plug-in
	 * options defined here) can be used through the `paginationType`
	 * initialisation parameter.
	 *
	 * The functions defined take two parameters:
	 *
	 * 1. `{int} page` The current page index
	 * 2. `{int} pages` The number of pages in the table
	 *
	 * Each function is expected to return an array where each element of the
	 * array can be one of:
	 *
	 * * `first` - Jump to first page when activated
	 * * `last` - Jump to last page when activated
	 * * `previous` - Show previous page when activated
	 * * `next` - Show next page when activated
	 * * `{int}` - Show page of the index given
	 * * `{array}` - A nested array containing the above elements to add a
	 *   containing 'DIV' element (might be useful for styling).
	 *
	 * Note that DataTables v1.9- used this object slightly differently whereby
	 * an object with two functions would be defined for each plug-in. That
	 * ability is still supported by DataTables 1.10+ to provide backwards
	 * compatibility, but this option of use is now decremented and no longer
	 * documented in DataTables 1.10+.
	 *
	 *  @type object
	 *  @default {}
	 *
	 *  @example
	 *    // Show previous, next and current page buttons only
	 *    $.fn.dataTableExt.oPagination.current = function ( page, pages ) {
	 *      return [ 'previous', page, 'next' ];
	 *    };
	 */pager:{},renderer:{pageButton:{},header:{}},/**
	 * Ordering plug-ins - custom data source
	 * 
	 * The extension options for ordering of data available here is complimentary
	 * to the default type based ordering that DataTables typically uses. It
	 * allows much greater control over the the data that is being used to
	 * order a column, but is necessarily therefore more complex.
	 * 
	 * This type of ordering is useful if you want to do ordering based on data
	 * live from the DOM (for example the contents of an 'input' element) rather
	 * than just the static string that DataTables knows of.
	 * 
	 * The way these plug-ins work is that you create an array of the values you
	 * wish to be ordering for the column in question and then return that
	 * array. The data in the array much be in the index order of the rows in
	 * the table (not the currently ordering order!). Which order data gathering
	 * function is run here depends on the `dt-init columns.orderDataType`
	 * parameter that is used for the column (if any).
	 *
	 * The functions defined take two parameters:
	 *
	 * 1. `{object}` DataTables settings object: see
	 *    {@link DataTable.models.oSettings}
	 * 2. `{int}` Target column index
	 *
	 * Each function is expected to return an array:
	 *
	 * * `{array}` Data for the column to be ordering upon
	 *
	 *  @type array
	 *
	 *  @example
	 *    // Ordering using `input` node values
	 *    $.fn.dataTable.ext.order['dom-text'] = function  ( settings, col )
	 *    {
	 *      return this.api().column( col, {order:'index'} ).nodes().map( function ( td, i ) {
	 *        return $('input', td).val();
	 *      } );
	 *    }
	 */order:{},/**
	 * Type based plug-ins.
	 *
	 * Each column in DataTables has a type assigned to it, either by automatic
	 * detection or by direct assignment using the `type` option for the column.
	 * The type of a column will effect how it is ordering and search (plug-ins
	 * can also make use of the column type if required).
	 *
	 * @namespace
	 */type:{/**
		 * Type detection functions.
		 *
		 * The functions defined in this object are used to automatically detect
		 * a column's type, making initialisation of DataTables super easy, even
		 * when complex data is in the table.
		 *
		 * The functions defined take two parameters:
		 *
	     *  1. `{*}` Data from the column cell to be analysed
	     *  2. `{settings}` DataTables settings object. This can be used to
	     *     perform context specific type detection - for example detection
	     *     based on language settings such as using a comma for a decimal
	     *     place. Generally speaking the options from the settings will not
	     *     be required
		 *
		 * Each function is expected to return:
		 *
		 * * `{string|null}` Data type detected, or null if unknown (and thus
		 *   pass it on to the other type detection functions.
		 *
		 *  @type array
		 *
		 *  @example
		 *    // Currency type detection plug-in:
		 *    $.fn.dataTable.ext.type.detect.push(
		 *      function ( data, settings ) {
		 *        // Check the numeric part
		 *        if ( ! data.substring(1).match(/[0-9]/) ) {
		 *          return null;
		 *        }
		 *
		 *        // Check prefixed by currency
		 *        if ( data.charAt(0) == '$' || data.charAt(0) == '&pound;' ) {
		 *          return 'currency';
		 *        }
		 *        return null;
		 *      }
		 *    );
		 */detect:[],/**
		 * Type based search formatting.
		 *
		 * The type based searching functions can be used to pre-format the
		 * data to be search on. For example, it can be used to strip HTML
		 * tags or to de-format telephone numbers for numeric only searching.
		 *
		 * Note that is a search is not defined for a column of a given type,
		 * no search formatting will be performed.
		 * 
		 * Pre-processing of searching data plug-ins - When you assign the sType
		 * for a column (or have it automatically detected for you by DataTables
		 * or a type detection plug-in), you will typically be using this for
		 * custom sorting, but it can also be used to provide custom searching
		 * by allowing you to pre-processing the data and returning the data in
		 * the format that should be searched upon. This is done by adding
		 * functions this object with a parameter name which matches the sType
		 * for that target column. This is the corollary of <i>afnSortData</i>
		 * for searching data.
		 *
		 * The functions defined take a single parameter:
		 *
	     *  1. `{*}` Data from the column cell to be prepared for searching
		 *
		 * Each function is expected to return:
		 *
		 * * `{string|null}` Formatted string that will be used for the searching.
		 *
		 *  @type object
		 *  @default {}
		 *
		 *  @example
		 *    $.fn.dataTable.ext.type.search['title-numeric'] = function ( d ) {
		 *      return d.replace(/\n/g," ").replace( /<.*?>/g, "" );
		 *    }
		 */search:{},/**
		 * Type based ordering.
		 *
		 * The column type tells DataTables what ordering to apply to the table
		 * when a column is sorted upon. The order for each type that is defined,
		 * is defined by the functions available in this object.
		 *
		 * Each ordering option can be described by three properties added to
		 * this object:
		 *
		 * * `{type}-pre` - Pre-formatting function
		 * * `{type}-asc` - Ascending order function
		 * * `{type}-desc` - Descending order function
		 *
		 * All three can be used together, only `{type}-pre` or only
		 * `{type}-asc` and `{type}-desc` together. It is generally recommended
		 * that only `{type}-pre` is used, as this provides the optimal
		 * implementation in terms of speed, although the others are provided
		 * for compatibility with existing Javascript sort functions.
		 *
		 * `{type}-pre`: Functions defined take a single parameter:
		 *
	     *  1. `{*}` Data from the column cell to be prepared for ordering
		 *
		 * And return:
		 *
		 * * `{*}` Data to be sorted upon
		 *
		 * `{type}-asc` and `{type}-desc`: Functions are typical Javascript sort
		 * functions, taking two parameters:
		 *
	     *  1. `{*}` Data to compare to the second parameter
	     *  2. `{*}` Data to compare to the first parameter
		 *
		 * And returning:
		 *
		 * * `{*}` Ordering match: <0 if first parameter should be sorted lower
		 *   than the second parameter, ===0 if the two parameters are equal and
		 *   >0 if the first parameter should be sorted height than the second
		 *   parameter.
		 * 
		 *  @type object
		 *  @default {}
		 *
		 *  @example
		 *    // Numeric ordering of formatted numbers with a pre-formatter
		 *    $.extend( $.fn.dataTable.ext.type.order, {
		 *      "string-pre": function(x) {
		 *        a = (a === "-" || a === "") ? 0 : a.replace( /[^\d\-\.]/g, "" );
		 *        return parseFloat( a );
		 *      }
		 *    } );
		 *
		 *  @example
		 *    // Case-sensitive string ordering, with no pre-formatting method
		 *    $.extend( $.fn.dataTable.ext.order, {
		 *      "string-case-asc": function(x,y) {
		 *        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
		 *      },
		 *      "string-case-desc": function(x,y) {
		 *        return ((x < y) ? 1 : ((x > y) ? -1 : 0));
		 *      }
		 *    } );
		 */order:{}},/**
	 * Unique DataTables instance counter
	 *
	 * @type int
	 * @private
	 */_unique:0,//
// Depreciated
// The following properties are retained for backwards compatibility only.
// The should not be used in new projects and will be removed in a future
// version
//
/**
	 * Version check function.
	 *  @type function
	 *  @depreciated Since 1.10
	 */fnVersionCheck:rG.fnVersionCheck,/**
	 * Index for what 'this' index API functions should use
	 *  @type int
	 *  @deprecated Since v1.10
	 */iApiIndex:0,/**
	 * jQuery UI class container
	 *  @type object
	 *  @deprecated Since v1.10
	 */oJUIClasses:{},/**
	 * Software version
	 *  @type string
	 *  @deprecated Since v1.10
	 */sVersion:rG.version},//
// Backwards compatibility. Alias to pre 1.10 Hungarian notation counter parts
//
rJ.extend(t2,{afnFiltering:t2.search,aTypes:t2.type.detect,ofnSearch:t2.type.search,oSort:t2.type.order,afnSortData:t2.order,aoFeatures:t2.feature,oApi:t2.internal,oStdClasses:t2.classes,oPagination:t2.pager}),rJ.extend(rG.ext.classes,{sTable:"dataTable",sNoFooter:"no-footer",/* Paging buttons */sPageButton:"paginate_button",sPageButtonActive:"current",sPageButtonDisabled:"disabled",/* Striping classes */sStripeOdd:"odd",sStripeEven:"even",/* Empty row */sRowEmpty:"dataTables_empty",/* Features */sWrapper:"dataTables_wrapper",sFilter:"dataTables_filter",sInfo:"dataTables_info",sPaging:"dataTables_paginate paging_",/* Note that the type is postfixed */sLength:"dataTables_length",sProcessing:"dataTables_processing",/* Sorting */sSortAsc:"sorting_asc",sSortDesc:"sorting_desc",sSortable:"sorting",/* Sortable in both directions */sSortableAsc:"sorting_desc_disabled",sSortableDesc:"sorting_asc_disabled",sSortableNone:"sorting_disabled",sSortColumn:"sorting_",/* Note that an int is postfixed for the sorting order *//* Filtering */sFilterInput:"",/* Page length */sLengthSelect:"",/* Scrolling */sScrollWrapper:"dataTables_scroll",sScrollHead:"dataTables_scrollHead",sScrollHeadInner:"dataTables_scrollHeadInner",sScrollBody:"dataTables_scrollBody",sScrollFoot:"dataTables_scrollFoot",sScrollFootInner:"dataTables_scrollFootInner",/* Misc */sHeaderTH:"",sFooterTH:"",// Deprecated
sSortJUIAsc:"",sSortJUIDesc:"",sSortJUI:"",sSortJUIAscAllowed:"",sSortJUIDescAllowed:"",sSortJUIWrapper:"",sSortIcon:"",sJUIHeader:"",sJUIFooter:""});var o7=rG.ext.pager;function st(t,e){var i=[],n=o7.numbers_length,r=Math.floor(n/2);return e<=n?i=at(0,e):t<=r?((i=at(0,n-2)).push("ellipsis"),i.push(e-1)):(t>=e-1-r?(i=at(e-(n-2),e)).splice(0,0,"ellipsis"):((i=at(t-r+2,t+r-1)).push("ellipsis"),i.push(e-1),i.splice(0,0,"ellipsis")),i.splice(0,0,0)),i.DT_el="span",i}rJ.extend(o7,{simple:function(t,e){return["previous","next"]},full:function(t,e){return["first","previous","next","last"]},numbers:function(t,e){return[st(t,e)]},simple_numbers:function(t,e){return["previous",st(t,e),"next"]},full_numbers:function(t,e){return["first","previous",st(t,e),"next","last"]},first_last_numbers:function(t,e){return["first",st(t,e),"last"]},// For testing and plug-ins to use
_numbers:st,// Number of number buttons (including ellipsis) to show. _Must be odd!_
numbers_length:7}),rJ.extend(!0,rG.ext.renderer,{pageButton:{_:function(t,e,i,n,r,a){var o,s,l,h=t.oClasses,c=t.oLanguage.oPaginate,u=t.oLanguage.oAria.paginate||{},d=function(e,n){var l,f,p,g=h.sPageButtonDisabled,m=function(e){ol(t,e.data.action,!0)};for(l=0,f=n.length;l<f;l++)if(Array.isArray(p=n[l]))d(rJ("<"+(p.DT_el||"div")+"/>").appendTo(e),p);else{var b=!1;switch(o=null,s=p,p){case"ellipsis":e.append('<span class="ellipsis">&#x2026;</span>');break;case"first":o=c.sFirst,0===r&&(b=!0);break;case"previous":o=c.sPrevious,0===r&&(b=!0);break;case"next":o=c.sNext,(0===a||r===a-1)&&(b=!0);break;case"last":o=c.sLast,(0===a||r===a-1)&&(b=!0);break;default:o=t.fnFormatNumber(p+1),s=r===p?h.sPageButtonActive:""}if(null!==o){var v=t.oInit.pagingTag||"a";b&&(s+=" "+g),oR(rJ("<"+v+">",{class:h.sPageButton+" "+s,"aria-controls":t.sTableId,"aria-disabled":b?"true":null,"aria-label":u[p],role:"link","aria-current":s===h.sPageButtonActive?"page":null,"data-dt-idx":p,tabindex:b?-1:t.iTabIndex,id:0===i&&"string"==typeof p?t.sTableId+"_"+p:null}).html(o).appendTo(e),{action:p},m)}}};try{// Because this approach is destroying and recreating the paging
// elements, focus is lost on the select button which is bad for
// accessibility. So we want to restore focus once the draw has
// completed
l=rJ(e).find(document.activeElement).data("dt-idx")}catch(t){}d(rJ(e).empty(),n),void 0!==l&&rJ(e).find("[data-dt-idx="+l+"]").trigger("focus")}}}),// Built in type detection. See model.ext.aTypes for information about
// what is required from this methods.
rJ.extend(rG.ext.type.detect,[// Plain numbers - first since V8 detects some plain numbers as dates
// e.g. Date.parse('55') (but not all, e.g. Date.parse('22')...).
function(t,e){var i=e.oLanguage.sDecimal;return r8(t,i)?"num"+i:null},// Dates (only those recognised by the browser's Date.parse)
function(t,e){// V8 tries _very_ hard to make a string passed into `Date.parse()`
// valid, so we need to use a regex to restrict date formats. Use a
// plug-in for anything other than ISO8601 style strings
if(t&&!(t instanceof Date)&&!r0.test(t))return null;var i=Date.parse(t);return null!==i&&!isNaN(i)||r5(t)?"date":null},// Formatted numbers
function(t,e){var i=e.oLanguage.sDecimal;return r8(t,i,!0)?"num-fmt"+i:null},// HTML numeric
function(t,e){var i=e.oLanguage.sDecimal;return r6(t,i)?"html-num"+i:null},// HTML numeric, formatted
function(t,e){var i=e.oLanguage.sDecimal;return r6(t,i,!0)?"html-num-fmt"+i:null},// HTML (this is strict checking - there must be html)
function(t,e){return r5(t)||"string"==typeof t&&-1!==t.indexOf("<")?"html":null}]),// Filter formatting functions. See model.ext.ofnSearch for information about
// what is required from these methods.
// 
// Note that additional search methods are added for the html numbers and
// html formatted numbers by `_addNumericSort()` when we know what the decimal
// place is
rJ.extend(rG.ext.type.search,{html:function(t){return r5(t)?t:"string"==typeof t?t.replace(rZ," ").replace(rQ,""):""},string:function(t){return r5(t)?t:"string"==typeof t?t.replace(rZ," "):t}});var se=function(t,e,i,n){if(0!==t&&(!t||"-"===t))return-1/0;var r=typeof t;return"number"===r||"bigint"===r?t:(e&&(t=r4(t,e)),t.replace&&(i&&(t=t.replace(i,"")),n&&(t=t.replace(n,""))),1*t)};// Add the numeric 'deformatting' functions for sorting and search. This is done
// in a function to provide an easy ability for the language options to add
// additional methods if a non-period decimal place is used.
function si(t){rJ.each({// Plain numbers
num:function(e){return se(e,t)},// Formatted numbers
"num-fmt":function(e){return se(e,t,r2)},// HTML numeric
"html-num":function(e){return se(e,t,rQ)},// HTML numeric, formatted
"html-num-fmt":function(e){return se(e,t,rQ,r2)}},function(e,i){// Add the ordering method
t2.type.order[e+t+"-pre"]=i,e.match(/^html\-/)&&(t2.type.search[e+t]=t2.type.search.html)})}// Default sort methods
rJ.extend(t2.type.order,{// Dates
"date-pre":function(t){var e=Date.parse(t);return isNaN(e)?-1/0:e},// html
"html-pre":function(t){return r5(t)?"":t.replace?t.replace(/<.*?>/g,"").toLowerCase():t+""},// string
"string-pre":function(t){// This is a little complex, but faster than always calling toString,
// https://jsperf.com/tostring-v-check
return r5(t)?"":"string"==typeof t?t.toLowerCase():t.toString?t.toString():""},// string-asc and -desc are retained only for compatibility with the old
// sort methods
"string-asc":function(t,e){return t<e?-1:t>e?1:0},"string-desc":function(t,e){return t<e?1:t>e?-1:0}}),// Numeric sorting types - order doesn't matter here
si(""),rJ.extend(!0,rG.ext.renderer,{header:{_:function(t,e,i,n){// No additional mark-up required
// Attach a sort listener to update on sort - note that using the
// `DT` namespace will allow the event to be removed automatically
// on destroy, while the `dt` namespaced event is the one we are
// listening for
rJ(t.nTable).on("order.dt.DT",function(r,a,o,s){if(t===a){var l=i.idx;e.removeClass(n.sSortAsc+" "+n.sSortDesc).addClass("asc"==s[l]?n.sSortAsc:"desc"==s[l]?n.sSortDesc:i.sSortingClass)}// table, not a nested one
})},jqueryui:function(t,e,i,n){rJ("<div/>").addClass(n.sSortJUIWrapper).append(e.contents()).append(rJ("<span/>").addClass(n.sSortIcon+" "+i.sSortingClassJUI)).appendTo(e),// Attach a sort listener to update on sort
rJ(t.nTable).on("order.dt.DT",function(r,a,o,s){if(t===a){var l=i.idx;e.removeClass(n.sSortAsc+" "+n.sSortDesc).addClass("asc"==s[l]?n.sSortAsc:"desc"==s[l]?n.sSortDesc:i.sSortingClass),e.find("span."+n.sSortIcon).removeClass(n.sSortJUIAsc+" "+n.sSortJUIDesc+" "+n.sSortJUI+" "+n.sSortJUIAscAllowed+" "+n.sSortJUIDescAllowed).addClass("asc"==s[l]?n.sSortJUIAsc:"desc"==s[l]?n.sSortJUIDesc:i.sSortingClassJUI)}})}}});/*
 * Public helper functions. These aren't used internally by DataTables, or
 * called by any of the options passed into DataTables, but they can be used
 * externally by developers working with DataTables. They are helper functions
 * to make working with DataTables a little bit easier.
 */var sn=function(t){return Array.isArray(t)&&(t=t.join(",")),"string"==typeof t?t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):t};// Common logic for moment, luxon or a date action
function sr(t,e,i,n,r){return window.moment?t[e](r):window.luxon?t[i](r):n?t[n](r):t}var sa=!1;function so(t,e,i){var n;if(window.moment){if(!(n=window.moment.utc(t,e,i,!0)).isValid())return null}else if(window.luxon){if(!(n=e&&"string"==typeof t?window.luxon.DateTime.fromFormat(t,e):window.luxon.DateTime.fromISO(t)).isValid)return null;n.setLocale(i)}else e?(sa||alert("DataTables warning: Formatted date without Moment.js or Luxon - https://datatables.net/tn/17"),sa=!0):n=new Date(t);return n}// Wrapper for date, datetime and time which all operate the same way with the exception of
// the output string for auto locale support
function ss(t){return function(e,i,n,r){0==arguments.length?(n="en",i=null,e=null):1==arguments.length?(n="en",i=e,e=null):2==arguments.length&&(n=i,i=e,e=null);var a="datetime-"+i;return rG.ext.type.order[a]||(// The renderer will give the value to type detect as the type!
rG.ext.type.detect.unshift(function(t){return t===a&&a}),// The renderer gives us Moment, Luxon or Date obects for the sorting, all of which have a
// `valueOf` which gives milliseconds epoch
rG.ext.type.order[a+"-asc"]=function(t,e){var i=t.valueOf(),n=e.valueOf();return i===n?0:i<n?-1:1},rG.ext.type.order[a+"-desc"]=function(t,e){var i=t.valueOf(),n=e.valueOf();return i===n?0:i>n?-1:1}),function(o,s){// Allow for a default value
if(null==o){if("--now"===r){// We treat everything as UTC further down, so no changes are
// made, as such need to get the local date / time as if it were
// UTC
var l=new Date;o=new Date(Date.UTC(l.getFullYear(),l.getMonth(),l.getDate(),l.getHours(),l.getMinutes(),l.getSeconds()))}else o=""}if("type"===s)return a;if(""===o)return"sort"!==s?"":so("0000-01-01 00:00:00",null,n);// Shortcut. If `from` and `to` are the same, we are using the renderer to
// format for ordering, not display - its already in the display format.
if(null!==i&&e===i&&"sort"!==s&&"type"!==s&&!(o instanceof Date))return o;var h=so(o,e,n);if(null===h)return o;if("sort"===s)return h;var c=null===i?sr(h,"toDate","toJSDate","")[t]():sr(h,"format","toFormat","toISOString",i);// XSS protection
return"display"===s?sn(c):c}}}// Based on locale, determine standard number formatting
// Fallback for legacy browsers is US English
var sl=",",sh=".";if(void 0!==window.Intl)try{for(var sc=new Intl.NumberFormat().formatToParts(100000.1),su=0;su<sc.length;su++)"group"===sc[su].type?sl=sc[su].value:"decimal"===sc[su].type&&(sh=sc[su].value)}catch(t){// noop
}/*
 * This is really a good bit rubbish this method of exposing the internal methods
 * publicly... - To be fixed in 2.0 using methods on the prototype
 *//**
 * Create a wrapper function for exporting an internal functions to an external API.
 *  @param {string} fn API function name
 *  @returns {function} wrapped function
 *  @memberof DataTable#internal
 */function sd(t){return function(){var e=[oL(this[rG.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));return rG.ext.internal[t].apply(this,e)}}// Formatted date time detection - use by declaring the formats you are going to use
rG.datetime=function(t,e){var i="datetime-detect-"+t;e||(e="en"),rG.ext.type.order[i]||(rG.ext.type.detect.unshift(function(n){var r=so(n,t,e);return(""===n||!!r)&&i}),rG.ext.type.order[i+"-pre"]=function(i){return so(i,t,e)||0})},/**
 * Helpers for `columns.render`.
 *
 * The options defined here can be used with the `columns.render` initialisation
 * option to provide a display renderer. The following functions are defined:
 *
 * * `number` - Will format numeric data (defined by `columns.data`) for
 *   display, retaining the original unformatted data for sorting and filtering.
 *   It takes 5 parameters:
 *   * `string` - Thousands grouping separator
 *   * `string` - Decimal point indicator
 *   * `integer` - Number of decimal points to show
 *   * `string` (optional) - Prefix.
 *   * `string` (optional) - Postfix (/suffix).
 * * `text` - Escape HTML to help prevent XSS attacks. It has no optional
 *   parameters.
 *
 * @example
 *   // Column definition using the number renderer
 *   {
 *     data: "salary",
 *     render: $.fn.dataTable.render.number( '\'', '.', 0, '$' )
 *   }
 *
 * @namespace
 */rG.render={date:ss("toLocaleDateString"),datetime:ss("toLocaleString"),time:ss("toLocaleTimeString"),number:function(t,e,i,n,r){return null==t&&(t=sl),null==e&&(e=sh),{display:function(a){if("number"!=typeof a&&"string"!=typeof a||""===a||null===a)return a;var o=a<0?"-":"",s=parseFloat(a);// If NaN then there isn't much formatting that we can do - just
// return immediately, escaping any HTML (this was supposed to
// be a number after all)
if(isNaN(s))return sn(a);var l=parseInt(a=Math.abs(s=s.toFixed(i)),10),h=i?e+(a-l).toFixed(i).substring(2):"";return 0===l&&0===parseFloat(h)&&(o=""),o+(n||"")+l.toString().replace(/\B(?=(\d{3})+(?!\d))/g,t)+h+(r||"")}}},text:function(){return{display:sn,filter:sn}}},/**
 * Reference to internal functions for use by plug-in developers. Note that
 * these methods are references to internal functions and are considered to be
 * private. If you use these methods, be aware that they are liable to change
 * between versions.
 *  @namespace
 */rJ.extend(rG.ext.internal,{_fnExternApiFunc:sd,_fnBuildAjax:aX,_fnAjaxUpdate:aY,_fnAjaxParameters:aJ,_fnAjaxUpdateDraw:aG,_fnAjaxDataSrc:aK,_fnAddColumn:ag,_fnColumnOptions:am,_fnAdjustColumnSizing:ab,_fnVisibleToColumnIndex:av,_fnColumnIndexToVisible:ay,_fnVisbleColumns:ax,_fnGetColumns:a_,_fnColumnTypes:aw,_fnApplyColumnDefs:aS,_fnHungarianMap:as,_fnCamelToHungarian:al,_fnLanguageCompat:ah,_fnBrowserDetect:af,_fnAddData:aD,_fnAddTr:aC,_fnNodeToDataIndex:/**
 * Take a TR element and convert it to an index in aoData
 *  @param {object} oSettings dataTables settings object
 *  @param {node} n the TR element to find
 *  @returns {int} index if the node is found, null if not
 *  @memberof DataTable#oApi
 */function(t,e){return void 0!==e._DT_RowIndex?e._DT_RowIndex:null},_fnNodeToColumnIndex:/**
 * Take a TD element and convert it into a column data index (not the visible index)
 *  @param {object} oSettings dataTables settings object
 *  @param {int} iRow The row number the TD/TH can be found in
 *  @param {node} n The TD/TH element to find
 *  @returns {int} index if the node is found, -1 if not
 *  @memberof DataTable#oApi
 */function(t,e,i){return rJ.inArray(i,t.aoData[e].anCells)},_fnGetCellData:aT,_fnSetCellData:ak,_fnSplitObjNotation:aP,_fnGetObjectDataFn:aL,_fnSetObjectDataFn:aE,_fnGetDataMaster:aI,_fnClearTable:aO,_fnDeleteIndex:aR,_fnInvalidate:aF,_fnGetRowElements:aj,_fnCreateTr:aN,_fnBuildHead:aW,_fnDrawHead:aB,_fnDraw:az,_fnReDraw:aV,_fnAddOptionsHtml:a$,_fnDetectHeader:aq,_fnGetUniqueThs:aU,_fnFeatureHtmlFilter:aZ,_fnFilterComplete:aQ,_fnFilterCustom:a0,_fnFilterColumn:a1,_fnFilter:a2,_fnFilterCreateSearch:a5,_fnEscapeRegex:a3,_fnFilterData:a6,_fnFeatureHtmlInfo:ot,_fnUpdateInfo:oe,_fnInfoMacros:oi,_fnInitialise:on,_fnInitComplete:or,_fnLengthChange:oa,_fnFeatureHtmlLength:oo,_fnFeatureHtmlPaginate:os,_fnPageChange:ol,_fnFeatureHtmlProcessing:oh,_fnProcessingDisplay:oc,_fnFeatureHtmlTable:ou,_fnScrollDraw:od,_fnApplyToChildren:of,_fnCalculateColumnWidths:og,_fnThrottle:om,_fnConvertToWidth:ob,_fnGetWidestNode:ov,_fnGetMaxLenString:oy,_fnStringToCss:ox,_fnSortFlatten:o_,_fnSort:ow,_fnSortAria:oS,_fnSortListener:oD,_fnSortAttachListener:oC,_fnSortingClasses:oT,_fnSortData:ok,_fnSaveState:oM,_fnLoadState:oA,_fnImplementState:oP,_fnSettingsFromNode:oL,_fnLog:oE,_fnMap:oI,_fnBindAction:oR,_fnCallbackReg:oF,_fnCallbackFire:oj,_fnLengthOverflow:oN,_fnRenderer:oH,_fnDataSource:oW,_fnRowAttributes:aH,_fnExtend:oO,_fnCalculateEnd:function(){}// Used by a lot of plug-ins, but redundant
}),// jQuery access
rJ.fn.dataTable=rG,// Provide access to the host jQuery object (circular reference)
rG.$=rJ,// Legacy aliases
rJ.fn.dataTableSettings=rG.settings,rJ.fn.dataTableExt=rG.ext,// With a capital `D` we return a DataTables API instance rather than a
// jQuery object
rJ.fn.DataTable=function(t){return rJ(this).dataTable(t).api()},// All properties that are available to $.fn.dataTable should also be
// available on $.fn.DataTable
rJ.each(rG,function(t,e){rJ.fn.DataTable[t]=e});// Allow reassignment of the $ variable
let sf=/*@__PURE__*/a(rY);function sp(t){return t.replaceAll(/(https?:\/\/)/g,"").replaceAll(/(-|\/|:|\.|#)/g,"-")}/**
 * DataTables integration for Bootstrap 3. This requires Bootstrap 3 and
 * DataTables 1.10 or newer.
 *
 * This file sets the defaults and adds options to DataTables to style its
 * controls using Bootstrap. See https://datatables.net/manual/styling/bootstrap
 * for further information.
 *//* Set the defaults for DataTables initialisation */sf.extend(!0,rG.defaults,{dom:"<'row'<'col-sm-6'l><'col-sm-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-5'i><'col-sm-7'p>>",renderer:"bootstrap"}),/* Default class modification */sf.extend(rG.ext.classes,{sWrapper:"dataTables_wrapper form-inline dt-bootstrap",sFilterInput:"form-control input-sm",sLengthSelect:"form-control input-sm",sProcessing:"dataTables_processing panel panel-default"}),rG.ext.renderer.pageButton.bootstrap=function(t,e,i,n,r,a){var o,s,l,h=new rG.Api(t),c=t.oClasses,u=t.oLanguage.oPaginate,d=t.oLanguage.oAria.paginate||{},f=function(e,n){var l,p,g,m,b=function(t){t.preventDefault(),sf(t.currentTarget).hasClass("disabled")||h.page()==t.data.action||h.page(t.data.action).draw("page")};for(l=0,p=n.length;l<p;l++)if(Array.isArray(m=n[l]))f(e,m);else{switch(o="",s="",m){case"ellipsis":o="&#x2026;",s="disabled";break;case"first":o=u.sFirst,s=m+(r>0?"":" disabled");break;case"previous":o=u.sPrevious,s=m+(r>0?"":" disabled");break;case"next":o=u.sNext,s=m+(r<a-1?"":" disabled");break;case"last":o=u.sLast,s=m+(r<a-1?"":" disabled");break;default:o=m+1,s=r===m?"active":""}if(o){var v=-1!==s.indexOf("disabled");g=sf("<li>",{class:c.sPageButton+" "+s,id:0===i&&"string"==typeof m?t.sTableId+"_"+m:null}).append(sf("<a>",{href:v?null:"#","aria-controls":t.sTableId,"aria-disabled":v?"true":null,"aria-label":d[m],role:"link","aria-current":"active"===s?"page":null,"data-dt-idx":m,tabindex:v?-1:t.iTabIndex}).html(o)).appendTo(e),t.oApi._fnBindAction(g,{action:m},b)}}};try{// Because this approach is destroying and recreating the paging
// elements, focus is lost on the select button which is bad for
// accessibility. So we want to restore focus once the draw has
// completed
l=sf(e).find(document.activeElement).data("dt-idx")}catch(t){}f(sf(e).empty().html('<ul class="pagination"/>').children("ul"),n),void 0!==l&&sf(e).find("[data-dt-idx="+l+"]").trigger("focus")};const sg="https://raw.githubusercontent.com/Dependency-Drift-Tracker/dependency-drift-status/main",sm={};function sb(t){return Number.isInteger(t)?t:t?.toFixed(2)}const sv=(t,e)=>{let i=document.createElement("a");return i.setAttribute("href",t),i.textContent=e,i};async function sy(){let t=await fetch(`${sg}/repositories.txt`);return t.text()}function sx({repository:t,path:e}){return`${t}#${e}`}function s_(t){return t.replaceAll("https://github.com/","").replaceAll(".git","")}async function sw({repository:t,path:e}){let i=sx({repository:t,path:e});sS({repository:t,path:e,line:i}),sC(i),sT(i)}async function sS({repository:t,path:e,line:i}){let n=await sm[i],r=n[n.length-1],a=document.getElementById("title");a.textContent="",a.appendChild(sv(t,s_(i)));let o=document.getElementById("driftSummary");o.textContent=`${sb(r.drift)} libyears`;let s=document.getElementById("pulseSummary");s.textContent=`${sb(r.pulse)} libyears`}function sD(t,e,i,n,r){let a=i.map((t,e)=>new Date(t.date).toLocaleDateString());return new nE(t,{data:{labels:a,datasets:[{type:"line",label:e,data:i.map(t=>sb(t[n])),backgroundColor:`rgba(${r.join()}, 0.2)`,borderColor:`rgba(${r.join()}, 1)`,borderWidth:1,unit:"libyears"}]},options:{plugins:{tooltip:{callbacks:{label:t=>{let e=t.dataset,i=t.dataIndex,n=e.data[i],r=e.label||"",a=e.unit||"";return`${r}: ${n} (${a})`}}}},scales:{y:{position:"left",beginAtZero:!0,suggestedMin:0}}}})}async function sC(t){let n=await sm[t],r=document.getElementById("driftChart"),a=document.getElementById("pulseChart");e&&e.destroy(),i&&i.destroy(),e=sD(r,"Dependency Drift",n,"drift",[0,63,92]),i=sD(a,"Dependency Pulse",n,"pulse",[155,209,132])}async function sT(t){n&&n.destroy();let e=await fetch(`${sg}/data/last-run-${sp(t)}.json`),i=await e.json();n=new rG("#rawResult",{paging:!1,searching:!1,info:!1,columns:[{data:"dependency",title:"Dependency",render:(t,e)=>"display"===e?`<a href="https://www.npmjs.com/package/${t}">${t}</a`:t},{data:"drift",title:"Drift",render:sk},{data:"pulse",title:"Pulse",render:sk}],data:i})}function sk(t,e){return"display"!==e?t:null===t?"":sb(t)}function sM({repository:t,path:e}){let i=document.querySelectorAll("[data-line]");i.forEach(t=>{t.classList.remove("active")});let n=sx({repository:t,path:e}),r=document.querySelector(`[data-line="${n}"]`);r.classList.add("active")}!async function(){let t=(await sy()).split("\n").map(t=>{if(!(""===t.trim()||t.trim().startsWith("#")))return function(t){let[e,i]=t.split("#");return{repository:e,path:i||""}}(t)}).filter(t=>!!t);t.forEach(({repository:t,path:e})=>{let i=sx({repository:t,path:e});sm[i]=fetch(`${sg}/data/history-${sp(i)}.json`).then(t=>t.json())}),function(t){let e=document.getElementById("nav");t.forEach(({repository:t,path:i})=>{let n=document.createElement("li");n.classList.add("nav-item");let r=document.createElement("a");r.classList.add("nav-link","d-flex");let a=sx({repository:t,path:i});r.setAttribute("href",`#${a}`),r.dataset.line=a,r.addEventListener("click",e=>{sw({repository:t,path:i}),sM({repository:t,path:i})});let o=document.createElement("span");o.classList.add("flex-grow-1"),o.textContent=s_(a),r.appendChild(o),sm[a].then(t=>{let e=document.createElement("span");e.classList.add("badge","bg-secondary","align-self-center"),e.textContent=sb(t[t.length-1].drift),r.appendChild(e)}),n.appendChild(r),e.appendChild(n)})}(t);let e=t[0];if(location.hash.length>0){let i=location.hash.slice(1);t.forEach(t=>{let n=sx(t);n===i&&(e=t)})}sw(e),sM(e)}();//# sourceMappingURL=index.b8be23b5.js.map

//# sourceMappingURL=index.b8be23b5.js.map
