import{a as m}from"./chunk-DK5YP3JK.js";import{b as u,i as h}from"./chunk-YFDP4B6D.js";import{Y as o,aa as c,d as e,e as p,fa as n}from"./chunk-LPLFSVI5.js";var w=(()=>{var r;let t=class t{constructor(s,i){p(this,r,h.API+"/api/v1/");this.http=s,this.toastr=i}transactMoney(s){return this.http.put(`${e(this,r)}transaction/transact`,s).pipe(o(()=>this.toastr.success("Transact was sent")))}updatePaymentStatus(s,i,f,d){return this.http.put(`${e(this,r)}transaction/statusUpdate`,{status:s,wallet:i,amount:f,transact_id:d}).pipe(o(()=>this.toastr.success("Status was updated")))}};r=new WeakMap,t.\u0275fac=function(i){return new(i||t)(n(u),n(m))},t.\u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"});let a=t;return a})();export{w as a};
