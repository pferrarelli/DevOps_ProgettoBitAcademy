import{a as N,b as u,d as I,e as w,f as E,h as f,i as G,j as R,k,l as _,m as j,p as x,q as A,r as B,s as P}from"./chunk-2ASXKKEH.js";import{a as l}from"./chunk-SEY23RSP.js";import{H as D,I as F,a as C}from"./chunk-I25GFFKI.js";import"./chunk-AOGXNLA7.js";import{Ca as b,Ia as n,K as c,La as h,Ma as M,bb as S,ca as g,da as m,ga as v,kb as y,ma as s,wa as o,xa as e,ya as a}from"./chunk-KLZVGRBR.js";var $=(()=>{let t=class t{constructor(p,i,r){this.dipendenteService=p,this.router=i,this.destroyRef=r,this.form=new E({nome:new f("",{nonNullable:!0,validators:[u.required]}),cognome:new f("",{nonNullable:!0,validators:[u.required]})})}back(){this.router.navigateByUrl("dipendenti")}aggiungiDipendente(){this.dipendenteService.insertDipendenteParams(this.form.controls.nome.value,this.form.controls.cognome.value).pipe(C(this.destroyRef)).subscribe({complete:()=>this.back()})}};t.\u0275fac=function(i){return new(i||t)(m(l),m(y),m(v))},t.\u0275cmp=c({type:t,selectors:[["app-new-dipendente"]],standalone:!0,features:[h([l]),M],decls:14,vars:2,consts:[[2,"margin-top","5%",3,"formGroup","ngSubmit"],["matInput","","formControlName","nome"],["matInput","","formControlName","cognome"],["mat-stroked-button","","type","submit","color","primary",3,"disabled"]],template:function(i,r){i&1&&(o(0,"form",0),b("ngSubmit",function(){return r.aggiungiDipendente()}),o(1,"h1"),n(2,"Aggiungi dipendente"),e(),o(3,"mat-form-field")(4,"mat-label"),n(5,"Nome"),e(),a(6,"input",1),e(),o(7,"mat-form-field")(8,"mat-label"),n(9,"Cognome"),e(),a(10,"input",2),e(),a(11,"hr"),o(12,"button",3),n(13,"Aggiungi"),e()()),i&2&&(s("formGroup",r.form),g(12),s("disabled",!r.form.valid))},dependencies:[S,_,G,N,I,w,R,k,P,B,x,j,A,F,D],styles:["mat-form-field[_ngcontent-%COMP%]{margin-right:3%}"]});let d=t;return d})();export{$ as NewDipendenteComponent};
