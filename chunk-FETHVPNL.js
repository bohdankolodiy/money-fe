import{$ as ce,Ia as fe,Na as De,Ob as m,Pb as h,_ as ae,ba as E,ca as de,db as L,ea as B,fb as ge,ga as b,ha as M,na as le,nb as K,oa as W,pa as Z,qc as pe,wa as he}from"./chunk-2EXNXU4G.js";var Ae=null;function q(){return Ae}function Qt(t){Ae??=t}var me=class{};var ie=new B(""),re=(()=>{let e=class e{historyGo(n){throw new Error("")}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=E({token:e,factory:()=>M(Te),providedIn:"platform"});let t=e;return t})(),Jt=new B(""),Te=(()=>{let e=class e extends re{constructor(){super(),this._doc=M(ie),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return q().getBaseHref(this._doc)}onPopState(n){let i=q().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",n,!1),()=>i.removeEventListener("popstate",n)}onHashChange(n){let i=q().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",n,!1),()=>i.removeEventListener("hashchange",n)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(n){this._location.pathname=n}pushState(n,i,s){this._history.pushState(n,i,s)}replaceState(n,i,s){this._history.replaceState(n,i,s)}forward(){this._history.forward()}back(){this._history.back()}historyGo(n=0){this._history.go(n)}getState(){return this._history.state}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=E({token:e,factory:()=>new e,providedIn:"platform"});let t=e;return t})();function se(t,e){if(t.length==0)return e;if(e.length==0)return t;let r=0;return t.endsWith("/")&&r++,e.startsWith("/")&&r++,r==2?t+e.substring(1):r==1?t+e:t+"/"+e}function Fe(t){let e=t.match(/#|\?|$/),r=e&&e.index||t.length,n=r-(t[r-1]==="/"?1:0);return t.slice(0,n)+t.slice(r)}function A(t){return t&&t[0]!=="?"?"?"+t:t}var G=(()=>{let e=class e{historyGo(n){throw new Error("")}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=E({token:e,factory:()=>M(Pe),providedIn:"root"});let t=e;return t})(),Se=new B(""),Pe=(()=>{let e=class e extends G{constructor(n,i){super(),this._platformLocation=n,this._removeListenerFns=[],this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??M(ie).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}prepareExternalUrl(n){return se(this._baseHref,n)}path(n=!1){let i=this._platformLocation.pathname+A(this._platformLocation.search),s=this._platformLocation.hash;return s&&n?`${i}${s}`:i}pushState(n,i,s,o){let u=this.prepareExternalUrl(s+A(o));this._platformLocation.pushState(n,i,u)}replaceState(n,i,s,o){let u=this.prepareExternalUrl(s+A(o));this._platformLocation.replaceState(n,i,u)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){this._platformLocation.historyGo?.(n)}};e.\u0275fac=function(i){return new(i||e)(b(re),b(Se,8))},e.\u0275prov=E({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),en=(()=>{let e=class e extends G{constructor(n,i){super(),this._platformLocation=n,this._baseHref="",this._removeListenerFns=[],i!=null&&(this._baseHref=i)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}path(n=!1){let i=this._platformLocation.hash??"#";return i.length>0?i.substring(1):i}prepareExternalUrl(n){let i=se(this._baseHref,n);return i.length>0?"#"+i:i}pushState(n,i,s,o){let u=this.prepareExternalUrl(s+A(o));u.length==0&&(u=this._platformLocation.pathname),this._platformLocation.pushState(n,i,u)}replaceState(n,i,s,o){let u=this.prepareExternalUrl(s+A(o));u.length==0&&(u=this._platformLocation.pathname),this._platformLocation.replaceState(n,i,u)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){this._platformLocation.historyGo?.(n)}};e.\u0275fac=function(i){return new(i||e)(b(re),b(Se,8))},e.\u0275prov=E({token:e,factory:e.\u0275fac});let t=e;return t})(),ke=(()=>{let e=class e{constructor(n){this._subject=new fe,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=n;let i=this._locationStrategy.getBaseHref();this._basePath=xe(Fe(ye(i))),this._locationStrategy.onPopState(s=>{this._subject.emit({url:this.path(!0),pop:!0,state:s.state,type:s.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(n=!1){return this.normalize(this._locationStrategy.path(n))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(n,i=""){return this.path()==this.normalize(n+A(i))}normalize(n){return e.stripTrailingSlash($e(this._basePath,ye(n)))}prepareExternalUrl(n){return n&&n[0]!=="/"&&(n="/"+n),this._locationStrategy.prepareExternalUrl(n)}go(n,i="",s=null){this._locationStrategy.pushState(s,"",n,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+A(i)),s)}replaceState(n,i="",s=null){this._locationStrategy.replaceState(s,"",n,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+A(i)),s)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(n=0){this._locationStrategy.historyGo?.(n)}onUrlChange(n){return this._urlChangeListeners.push(n),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(n);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(n="",i){this._urlChangeListeners.forEach(s=>s(n,i))}subscribe(n,i,s){return this._subject.subscribe({next:n,error:i,complete:s})}};e.normalizeQueryParams=A,e.joinWithSlash=se,e.stripTrailingSlash=Fe,e.\u0275fac=function(i){return new(i||e)(b(G))},e.\u0275prov=E({token:e,factory:()=>Ne(),providedIn:"root"});let t=e;return t})();function Ne(){return new ke(b(G))}function $e(t,e){if(!t||!e.startsWith(t))return e;let r=e.substring(t.length);return r===""||["/",";","?","#"].includes(r[0])?r:e}function ye(t){return t.replace(/\/index.html$/,"")}function xe(t){if(new RegExp("^(https?:)?//").test(t)){let[,r]=t.split(/\/\/[^\/]+/);return r}return t}var D=function(t){return t[t.Format=0]="Format",t[t.Standalone=1]="Standalone",t}(D||{}),d=function(t){return t[t.Narrow=0]="Narrow",t[t.Abbreviated=1]="Abbreviated",t[t.Wide=2]="Wide",t[t.Short=3]="Short",t}(d||{}),p=function(t){return t[t.Short=0]="Short",t[t.Medium=1]="Medium",t[t.Long=2]="Long",t[t.Full=3]="Full",t}(p||{}),v={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function Ue(t){return m(t)[h.LocaleId]}function ze(t,e,r){let n=m(t),i=[n[h.DayPeriodsFormat],n[h.DayPeriodsStandalone]],s=F(i,e);return F(s,r)}function je(t,e,r){let n=m(t),i=[n[h.DaysFormat],n[h.DaysStandalone]],s=F(i,e);return F(s,r)}function Ve(t,e,r){let n=m(t),i=[n[h.MonthsFormat],n[h.MonthsStandalone]],s=F(i,e);return F(s,r)}function Ge(t,e){let n=m(t)[h.Eras];return F(n,e)}function P(t,e){let r=m(t);return F(r[h.DateFormat],e)}function k(t,e){let r=m(t);return F(r[h.TimeFormat],e)}function N(t,e){let n=m(t)[h.DateTimeFormat];return F(n,e)}function H(t,e){let r=m(t),n=r[h.NumberSymbols][e];if(typeof n>"u"){if(e===v.CurrencyDecimal)return r[h.NumberSymbols][v.Decimal];if(e===v.CurrencyGroup)return r[h.NumberSymbols][v.Group]}return n}function _e(t){if(!t[h.ExtraData])throw new Error(`Missing extra locale data for the locale "${t[h.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`)}function He(t){let e=m(t);return _e(e),(e[h.ExtraData][2]||[]).map(n=>typeof n=="string"?X(n):[X(n[0]),X(n[1])])}function Ye(t,e,r){let n=m(t);_e(n);let i=[n[h.ExtraData][0],n[h.ExtraData][1]],s=F(i,e)||[];return F(s,r)||[]}function F(t,e){for(let r=e;r>-1;r--)if(typeof t[r]<"u")return t[r];throw new Error("Locale data API: locale data undefined")}function X(t){let[e,r]=t.split(":");return{hours:+e,minutes:+r}}var We=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,$={},Ze=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,S=function(t){return t[t.Short=0]="Short",t[t.ShortGMT=1]="ShortGMT",t[t.Long=2]="Long",t[t.Extended=3]="Extended",t}(S||{}),c=function(t){return t[t.FullYear=0]="FullYear",t[t.Month=1]="Month",t[t.Date=2]="Date",t[t.Hours=3]="Hours",t[t.Minutes=4]="Minutes",t[t.Seconds=5]="Seconds",t[t.FractionalSeconds=6]="FractionalSeconds",t[t.Day=7]="Day",t}(c||{}),a=function(t){return t[t.DayPeriods=0]="DayPeriods",t[t.Days=1]="Days",t[t.Months=2]="Months",t[t.Eras=3]="Eras",t}(a||{});function Ke(t,e,r,n){let i=rt(t);e=w(r,e)||e;let o=[],u;for(;e;)if(u=Ze.exec(e),u){o=o.concat(u.slice(1));let C=o.pop();if(!C)break;e=C}else{o.push(e);break}let g=i.getTimezoneOffset();n&&(g=ve(n,g),i=it(i,n,!0));let _="";return o.forEach(C=>{let I=tt(C);_+=I?I(i,r,g):C==="''"?"'":C.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),_}function V(t,e,r){let n=new Date(0);return n.setFullYear(t,e,r),n.setHours(0,0,0),n}function w(t,e){let r=Ue(t);if($[r]??={},$[r][e])return $[r][e];let n="";switch(e){case"shortDate":n=P(t,p.Short);break;case"mediumDate":n=P(t,p.Medium);break;case"longDate":n=P(t,p.Long);break;case"fullDate":n=P(t,p.Full);break;case"shortTime":n=k(t,p.Short);break;case"mediumTime":n=k(t,p.Medium);break;case"longTime":n=k(t,p.Long);break;case"fullTime":n=k(t,p.Full);break;case"short":let i=w(t,"shortTime"),s=w(t,"shortDate");n=x(N(t,p.Short),[i,s]);break;case"medium":let o=w(t,"mediumTime"),u=w(t,"mediumDate");n=x(N(t,p.Medium),[o,u]);break;case"long":let g=w(t,"longTime"),_=w(t,"longDate");n=x(N(t,p.Long),[g,_]);break;case"full":let C=w(t,"fullTime"),I=w(t,"fullDate");n=x(N(t,p.Full),[C,I]);break}return n&&($[r][e]=n),n}function x(t,e){return e&&(t=t.replace(/\{([^}]+)}/g,function(r,n){return e!=null&&n in e?e[n]:r})),t}function y(t,e,r="-",n,i){let s="";(t<0||i&&t<=0)&&(i?t=-t+1:(t=-t,s=r));let o=String(t);for(;o.length<e;)o="0"+o;return n&&(o=o.slice(o.length-e)),s+o}function qe(t,e){return y(t,3).substring(0,e)}function f(t,e,r=0,n=!1,i=!1){return function(s,o){let u=Xe(t,s);if((r>0||u>-r)&&(u+=r),t===c.Hours)u===0&&r===-12&&(u=12);else if(t===c.FractionalSeconds)return qe(u,e);let g=H(o,v.MinusSign);return y(u,e,g,n,i)}}function Xe(t,e){switch(t){case c.FullYear:return e.getFullYear();case c.Month:return e.getMonth();case c.Date:return e.getDate();case c.Hours:return e.getHours();case c.Minutes:return e.getMinutes();case c.Seconds:return e.getSeconds();case c.FractionalSeconds:return e.getMilliseconds();case c.Day:return e.getDay();default:throw new Error(`Unknown DateType value "${t}".`)}}function l(t,e,r=D.Format,n=!1){return function(i,s){return Qe(i,s,t,e,r,n)}}function Qe(t,e,r,n,i,s){switch(r){case a.Months:return Ve(e,i,n)[t.getMonth()];case a.Days:return je(e,i,n)[t.getDay()];case a.DayPeriods:let o=t.getHours(),u=t.getMinutes();if(s){let _=He(e),C=Ye(e,i,n),I=_.findIndex(O=>{if(Array.isArray(O)){let[Y,T]=O,oe=o>=Y.hours&&u>=Y.minutes,ue=o<T.hours||o===T.hours&&u<T.minutes;if(Y.hours<T.hours){if(oe&&ue)return!0}else if(oe||ue)return!0}else if(O.hours===o&&O.minutes===u)return!0;return!1});if(I!==-1)return C[I]}return ze(e,i,n)[o<12?0:1];case a.Eras:return Ge(e,n)[t.getFullYear()<=0?0:1];default:let g=r;throw new Error(`unexpected translation type ${g}`)}}function U(t){return function(e,r,n){let i=-1*n,s=H(r,v.MinusSign),o=i>0?Math.floor(i/60):Math.ceil(i/60);switch(t){case S.Short:return(i>=0?"+":"")+y(o,2,s)+y(Math.abs(i%60),2,s);case S.ShortGMT:return"GMT"+(i>=0?"+":"")+y(o,1,s);case S.Long:return"GMT"+(i>=0?"+":"")+y(o,2,s)+":"+y(Math.abs(i%60),2,s);case S.Extended:return n===0?"Z":(i>=0?"+":"")+y(o,2,s)+":"+y(Math.abs(i%60),2,s);default:throw new Error(`Unknown zone width "${t}"`)}}}var Je=0,j=4;function et(t){let e=V(t,Je,1).getDay();return V(t,0,1+(e<=j?j:j+7)-e)}function be(t){let e=t.getDay(),r=e===0?-3:j-e;return V(t.getFullYear(),t.getMonth(),t.getDate()+r)}function Q(t,e=!1){return function(r,n){let i;if(e){let s=new Date(r.getFullYear(),r.getMonth(),1).getDay()-1,o=r.getDate();i=1+Math.floor((o+s)/7)}else{let s=be(r),o=et(s.getFullYear()),u=s.getTime()-o.getTime();i=1+Math.round(u/6048e5)}return y(i,t,H(n,v.MinusSign))}}function z(t,e=!1){return function(r,n){let s=be(r).getFullYear();return y(s,t,H(n,v.MinusSign),e)}}var J={};function tt(t){if(J[t])return J[t];let e;switch(t){case"G":case"GG":case"GGG":e=l(a.Eras,d.Abbreviated);break;case"GGGG":e=l(a.Eras,d.Wide);break;case"GGGGG":e=l(a.Eras,d.Narrow);break;case"y":e=f(c.FullYear,1,0,!1,!0);break;case"yy":e=f(c.FullYear,2,0,!0,!0);break;case"yyy":e=f(c.FullYear,3,0,!1,!0);break;case"yyyy":e=f(c.FullYear,4,0,!1,!0);break;case"Y":e=z(1);break;case"YY":e=z(2,!0);break;case"YYY":e=z(3);break;case"YYYY":e=z(4);break;case"M":case"L":e=f(c.Month,1,1);break;case"MM":case"LL":e=f(c.Month,2,1);break;case"MMM":e=l(a.Months,d.Abbreviated);break;case"MMMM":e=l(a.Months,d.Wide);break;case"MMMMM":e=l(a.Months,d.Narrow);break;case"LLL":e=l(a.Months,d.Abbreviated,D.Standalone);break;case"LLLL":e=l(a.Months,d.Wide,D.Standalone);break;case"LLLLL":e=l(a.Months,d.Narrow,D.Standalone);break;case"w":e=Q(1);break;case"ww":e=Q(2);break;case"W":e=Q(1,!0);break;case"d":e=f(c.Date,1);break;case"dd":e=f(c.Date,2);break;case"c":case"cc":e=f(c.Day,1);break;case"ccc":e=l(a.Days,d.Abbreviated,D.Standalone);break;case"cccc":e=l(a.Days,d.Wide,D.Standalone);break;case"ccccc":e=l(a.Days,d.Narrow,D.Standalone);break;case"cccccc":e=l(a.Days,d.Short,D.Standalone);break;case"E":case"EE":case"EEE":e=l(a.Days,d.Abbreviated);break;case"EEEE":e=l(a.Days,d.Wide);break;case"EEEEE":e=l(a.Days,d.Narrow);break;case"EEEEEE":e=l(a.Days,d.Short);break;case"a":case"aa":case"aaa":e=l(a.DayPeriods,d.Abbreviated);break;case"aaaa":e=l(a.DayPeriods,d.Wide);break;case"aaaaa":e=l(a.DayPeriods,d.Narrow);break;case"b":case"bb":case"bbb":e=l(a.DayPeriods,d.Abbreviated,D.Standalone,!0);break;case"bbbb":e=l(a.DayPeriods,d.Wide,D.Standalone,!0);break;case"bbbbb":e=l(a.DayPeriods,d.Narrow,D.Standalone,!0);break;case"B":case"BB":case"BBB":e=l(a.DayPeriods,d.Abbreviated,D.Format,!0);break;case"BBBB":e=l(a.DayPeriods,d.Wide,D.Format,!0);break;case"BBBBB":e=l(a.DayPeriods,d.Narrow,D.Format,!0);break;case"h":e=f(c.Hours,1,-12);break;case"hh":e=f(c.Hours,2,-12);break;case"H":e=f(c.Hours,1);break;case"HH":e=f(c.Hours,2);break;case"m":e=f(c.Minutes,1);break;case"mm":e=f(c.Minutes,2);break;case"s":e=f(c.Seconds,1);break;case"ss":e=f(c.Seconds,2);break;case"S":e=f(c.FractionalSeconds,1);break;case"SS":e=f(c.FractionalSeconds,2);break;case"SSS":e=f(c.FractionalSeconds,3);break;case"Z":case"ZZ":case"ZZZ":e=U(S.Short);break;case"ZZZZZ":e=U(S.Extended);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":e=U(S.ShortGMT);break;case"OOOO":case"ZZZZ":case"zzzz":e=U(S.Long);break;default:return null}return J[t]=e,e}function ve(t,e){t=t.replace(/:/g,"");let r=Date.parse("Jan 01, 1970 00:00:00 "+t)/6e4;return isNaN(r)?e:r}function nt(t,e){return t=new Date(t.getTime()),t.setMinutes(t.getMinutes()+e),t}function it(t,e,r){let n=r?-1:1,i=t.getTimezoneOffset(),s=ve(e,i);return nt(t,n*(s-i))}function rt(t){if(Ce(t))return t;if(typeof t=="number"&&!isNaN(t))return new Date(t);if(typeof t=="string"){if(t=t.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(t)){let[i,s=1,o=1]=t.split("-").map(u=>+u);return V(i,s-1,o)}let r=parseFloat(t);if(!isNaN(t-r))return new Date(r);let n;if(n=t.match(We))return st(n)}let e=new Date(t);if(!Ce(e))throw new Error(`Unable to convert "${t}" into a date`);return e}function st(t){let e=new Date(0),r=0,n=0,i=t[8]?e.setUTCFullYear:e.setFullYear,s=t[8]?e.setUTCHours:e.setHours;t[9]&&(r=Number(t[9]+t[10]),n=Number(t[9]+t[11])),i.call(e,Number(t[1]),Number(t[2])-1,Number(t[3]));let o=Number(t[4]||0)-r,u=Number(t[5]||0)-n,g=Number(t[6]||0),_=Math.floor(parseFloat("0."+(t[7]||0))*1e3);return s.call(e,o,u,g,_),e}function Ce(t){return t instanceof Date&&!isNaN(t.valueOf())}function tn(t,e){e=encodeURIComponent(e);for(let r of t.split(";")){let n=r.indexOf("="),[i,s]=n==-1?[r,""]:[r.slice(0,n),r.slice(n+1)];if(i.trim()===e)return decodeURIComponent(s)}return null}var nn=(()=>{let e=class e{constructor(n,i){this._viewContainer=n,this._context=new ee,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=i}set ngIf(n){this._context.$implicit=this._context.ngIf=n,this._updateView()}set ngIfThen(n){Ee("ngIfThen",n),this._thenTemplateRef=n,this._thenViewRef=null,this._updateView()}set ngIfElse(n){Ee("ngIfElse",n),this._elseTemplateRef=n,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(n,i){return!0}};e.\u0275fac=function(i){return new(i||e)(L(K),L(ge))},e.\u0275dir=W({type:e,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0});let t=e;return t})(),ee=class{constructor(){this.$implicit=null,this.ngIf=null}};function Ee(t,e){if(!!!(!e||e.createEmbeddedView))throw new Error(`${t} must be a TemplateRef, but received '${ce(e)}'.`)}var rn=(()=>{let e=class e{constructor(n){this._viewContainerRef=n,this._viewRef=null,this.ngTemplateOutletContext=null,this.ngTemplateOutlet=null,this.ngTemplateOutletInjector=null}ngOnChanges(n){if(this._shouldRecreateView(n)){let i=this._viewContainerRef;if(this._viewRef&&i.remove(i.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let s=this._createContextForwardProxy();this._viewRef=i.createEmbeddedView(this.ngTemplateOutlet,s,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(n){return!!n.ngTemplateOutlet||!!n.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(n,i,s)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,i,s):!1,get:(n,i,s)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,i,s)}})}};e.\u0275fac=function(i){return new(i||e)(L(K))},e.\u0275dir=W({type:e,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},standalone:!0,features:[he]});let t=e;return t})();function Ie(t,e){return new ae(2100,!1)}var sn=(()=>{let e=class e{transform(n){if(n==null)return null;if(typeof n!="string")throw Ie(e,n);return n.toUpperCase()}};e.\u0275fac=function(i){return new(i||e)},e.\u0275pipe=Z({name:"uppercase",type:e,pure:!0,standalone:!0});let t=e;return t})(),ot="mediumDate",ut=new B(""),at=new B(""),on=(()=>{let e=class e{constructor(n,i,s){this.locale=n,this.defaultTimezone=i,this.defaultOptions=s}transform(n,i,s,o){if(n==null||n===""||n!==n)return null;try{let u=i??this.defaultOptions?.dateFormat??ot,g=s??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return Ke(n,u,o||this.locale,g)}catch(u){throw Ie(e,u.message)}}};e.\u0275fac=function(i){return new(i||e)(L(pe,16),L(ut,24),L(at,24))},e.\u0275pipe=Z({name:"date",type:e,pure:!0,standalone:!0});let t=e;return t})();var un=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=le({type:e}),e.\u0275inj=de({});let t=e;return t})(),ct="browser",dt="server";function lt(t){return t===ct}function an(t){return t===dt}var cn=(()=>{let e=class e{};e.\u0275prov=E({token:e,providedIn:"root",factory:()=>lt(M(De))?new te(M(ie),window):new ne});let t=e;return t})(),te=class{constructor(e,r){this.document=e,this.window=r,this.offset=()=>[0,0]}setOffset(e){Array.isArray(e)?this.offset=()=>e:this.offset=e}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(e){this.window.scrollTo(e[0],e[1])}scrollToAnchor(e){let r=ht(this.document,e);r&&(this.scrollToElement(r),r.focus())}setHistoryScrollRestoration(e){this.window.history.scrollRestoration=e}scrollToElement(e){let r=e.getBoundingClientRect(),n=r.left+this.window.pageXOffset,i=r.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(n-s[0],i-s[1])}};function ht(t,e){let r=t.getElementById(e)||t.getElementsByName(e)[0];if(r)return r;if(typeof t.createTreeWalker=="function"&&t.body&&typeof t.body.attachShadow=="function"){let n=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),i=n.currentNode;for(;i;){let s=i.shadowRoot;if(s){let o=s.getElementById(e)||s.querySelector(`[name="${e}"]`);if(o)return o}i=n.nextNode()}}return null}var ne=class{setOffset(e){}getScrollPosition(){return[0,0]}scrollToPosition(e){}scrollToAnchor(e){}setHistoryScrollRestoration(e){}},we=class{};var R=function(t){return t[t.State=0]="State",t[t.Transition=1]="Transition",t[t.Sequence=2]="Sequence",t[t.Group=3]="Group",t[t.Animate=4]="Animate",t[t.Keyframes=5]="Keyframes",t[t.Style=6]="Style",t[t.Trigger=7]="Trigger",t[t.Reference=8]="Reference",t[t.AnimateChild=9]="AnimateChild",t[t.AnimateRef=10]="AnimateRef",t[t.Query=11]="Query",t[t.Stagger=12]="Stagger",t}(R||{}),hn="*";function fn(t,e){return{type:R.Trigger,name:t,definitions:e,options:{}}}function Dn(t,e=null){return{type:R.Animate,styles:e,timings:t}}function gn(t,e=null){return{type:R.Sequence,steps:t,options:e}}function pn(t){return{type:R.Style,styles:t,offset:null}}function mn(t,e,r){return{type:R.State,name:t,styles:e,options:r}}function Fn(t,e,r=null){return{type:R.Transition,expr:t,animation:e,options:r}}var Me=class{constructor(e=0,r=0){this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._originalOnDoneFns=[],this._originalOnStartFns=[],this._started=!1,this._destroyed=!1,this._finished=!1,this._position=0,this.parentPlayer=null,this.totalTime=e+r}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}onStart(e){this._originalOnStartFns.push(e),this._onStartFns.push(e)}onDone(e){this._originalOnDoneFns.push(e),this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(e=>e()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(e){this._position=this.totalTime?e*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(e){let r=e=="start"?this._onStartFns:this._onDoneFns;r.forEach(n=>n()),r.length=0}},Le=class{constructor(e){this._onDoneFns=[],this._onStartFns=[],this._finished=!1,this._started=!1,this._destroyed=!1,this._onDestroyFns=[],this.parentPlayer=null,this.totalTime=0,this.players=e;let r=0,n=0,i=0,s=this.players.length;s==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(o=>{o.onDone(()=>{++r==s&&this._onFinish()}),o.onDestroy(()=>{++n==s&&this._onDestroy()}),o.onStart(()=>{++i==s&&this._onStart()})}),this.totalTime=this.players.reduce((o,u)=>Math.max(o,u.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}init(){this.players.forEach(e=>e.init())}onStart(e){this._onStartFns.push(e)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(e=>e()),this._onStartFns=[])}onDone(e){this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(e=>e.play())}pause(){this.players.forEach(e=>e.pause())}restart(){this.players.forEach(e=>e.restart())}finish(){this._onFinish(),this.players.forEach(e=>e.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(e=>e.destroy()),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}reset(){this.players.forEach(e=>e.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(e){let r=e*this.totalTime;this.players.forEach(n=>{let i=n.totalTime?Math.min(1,r/n.totalTime):1;n.setPosition(i)})}getPosition(){let e=this.players.reduce((r,n)=>r===null||n.totalTime>r.totalTime?n:r,null);return e!=null?e.getPosition():0}beforeDestroy(){this.players.forEach(e=>{e.beforeDestroy&&e.beforeDestroy()})}triggerCallback(e){let r=e=="start"?this._onStartFns:this._onDoneFns;r.forEach(n=>n()),r.length=0}},yn="!";export{q as a,Qt as b,me as c,ie as d,Jt as e,G as f,Pe as g,en as h,ke as i,tn as j,nn as k,rn as l,sn as m,on as n,un as o,ct as p,lt as q,an as r,cn as s,we as t,R as u,hn as v,fn as w,Dn as x,gn as y,pn as z,mn as A,Fn as B,Me as C,Le as D,yn as E};
