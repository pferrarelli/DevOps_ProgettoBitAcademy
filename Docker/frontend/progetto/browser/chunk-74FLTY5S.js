import{a as V,b as O,c as P,d as $,e as j,f as A,g as H,h as N,i as U,j as q,k as z}from"./chunk-F2DBR3M3.js";import{a as v}from"./chunk-SEY23RSP.js";import{H as B,I as G,a as D}from"./chunk-I25GFFKI.js";import"./chunk-AOGXNLA7.js";import{$a as F,Ca as y,Da as c,Ga as E,Ia as a,K as f,Ka as l,La as T,Ma as h,O as _,P as x,bb as C,ca as p,da as M,ga as w,lb as R,ma as u,ra as b,ta as S,ua as k,va as I,wa as r,xa as o,ya as g,za as L}from"./chunk-KLZVGRBR.js";function Q(n,e){if(n&1&&(r(0,"div")(1,"ul")(2,"li"),a(3),o(),r(4,"li"),a(5),o()()()),n&2){let d=c();p(3),l("nome: ",d.dipendente.nome,""),p(2),l("cognome: ",d.dipendente.cognome,"")}}var J=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=f({type:e,selectors:[["app-card-dipendente"]],inputs:{dipendente:"dipendente"},standalone:!0,features:[h],decls:1,vars:1,consts:[[4,"ngIf"]],template:function(i,m){i&1&&b(0,Q,6,2,"div",0),i&2&&u("ngIf",m.dipendente)},dependencies:[C,F],styles:["li[_ngcontent-%COMP%]{list-style-type:none}"]});let n=e;return n})();function W(n,e){if(n&1){let d=L();r(0,"mat-grid-tile")(1,"mat-card",5)(2,"mat-card-header")(3,"mat-card-title"),a(4),o()(),g(5,"mat-divider"),r(6,"mat-card-content",6),g(7,"app-card-dipendente",7),o(),g(8,"mat-divider"),r(9,"mat-card-actions")(10,"button",8),y("click",function(){let m=_(d).$implicit,s=c();return x(s.aggiornaDipendenteCorrente(m))}),a(11,"Modifica"),o(),r(12,"button",9),y("click",function(){let m=_(d).$implicit,s=c();return s.aggiornaDipendenteCorrente(m),x(s.elimina(m.id_dipendente))}),a(13,"Elimina"),o()()()()}if(n&2){let d=e.$implicit;p(4),l("Dipendente ",d.id_dipendente,""),p(3),u("dipendente",d),p(3),E("routerLink","/dipendenti/modifica/",d.id_dipendente,"")}}var ue=(()=>{let e=class e{constructor(t,i){this.dipendenteService=t,this.destroyRef=i,this.dipendenti=new Array}ngOnInit(){this.dipendenteService.getDipendenti().pipe(D(this.destroyRef)).subscribe({next:t=>this.dipendenti=t,error:t=>console.log(t)})}aggiornaDipendenteCorrente(t){this.dipendenteCorrente=t}elimina(t){this.dipendenteService.deleteDipendente(t).pipe(D(this.destroyRef)).subscribe({next:()=>{this.dipendenteCorrente=void 0,this.dipendenti=this.dipendenti.filter(i=>i.id_dipendente!==t)}})}};e.\u0275fac=function(i){return new(i||e)(M(v),M(w))},e.\u0275cmp=f({type:e,selectors:[["app-lista-dipendenti"]],standalone:!0,features:[T([v]),h],decls:11,vars:0,consts:[[1,"container"],["cols","4","rowHeight","3:3"],[2,"width","80%","height","68%","align-content","center"],[2,"width","100%","height","100%","align-content","center"],["mat-raised-button","","color","primary","routerLink","/dipendenti/new",2,"align-content","center","margin-top","25%","margin-left","29%"],[2,"width","80%","height","fit-content"],[2,"width","auto","height","auto"],[3,"dipendente"],["mat-button","",2,"color","white","background-color","grey","margin-right","6%","margin-left","8%",3,"routerLink","click"],["mat-button","",2,"color","white","background-color","red",3,"click"]],template:function(i,m){i&1&&(r(0,"div",0)(1,"h1"),a(2,"Lista Clienti"),o(),r(3,"mat-grid-list",1),k(4,W,14,3,"mat-grid-tile",null,S),r(6,"mat-grid-tile")(7,"mat-card",2)(8,"mat-card-content",3)(9,"button",4),a(10,"+"),o()()()()()()),i&2&&(p(4),I(m.dipendenti))},dependencies:[C,J,R,P,O,V,G,B,j,$,z,A,U,N,q,H],styles:["mat-grid-tile[_ngcontent-%COMP%]{background:rgb(240,240,240);width:fit-content;height:fit-content}.container[_ngcontent-%COMP%]{margin-left:2%;margin-right:10%;margin-top:3%}"]});let n=e;return n})();export{ue as ListaDipendentiComponent};
