"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[638],{1638:(D,i,a)=>{a.r(i),a.d(i,{DashboardModule:()=>A});var h=a(9808),c=a(5245),g=a(7232),l=a(2074),o=a(5e3);let v=(()=>{class e{constructor(t){this.activatedRoute=t,this.ftAnyKeyA=!1,this.ftAnyKeyC=!1,this.LoadFeatureToggleValues()}LoadFeatureToggleValues(){this.activatedRoute.data.subscribe(t=>{const s=null==t?void 0:t.featureToggleValues.ft_any_key_b.enabled;this.ftAnyKeyA=(null==t?void 0:t.featureToggleValues.ft_any_key_a.enabled)||!1,this.ftAnyKeyC=s||!1})}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(l.gz))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-dashboard"]],decls:7,vars:3,consts:[[1,"dashboard"],[1,"header-page"],["mat-list-icon","","aria-hidden","false","aria-label","\xedcone home"]],template:function(t,n){1&t&&(o.TgZ(0,"div",0)(1,"div",1)(2,"mat-icon",2),o._uU(3,"home"),o.qZA(),o.TgZ(4,"h1"),o._uU(5),o.ALo(6,"translate"),o.qZA()()()),2&t&&(o.xp6(5),o.Oqu(o.lcZ(6,1,"pages.dashboard.dashboard_title")))},directives:[c.Hw],pipes:[g.X$],styles:[".header-page[_ngcontent-%COMP%]{display:flex;align-content:center;flex-direction:row;justify-content:flex-start;align-items:center;border-bottom:2px solid;padding-bottom:5px}.header-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-bottom:0;margin-left:5px}"]}),e})();var d=a(262),f=a(9646),p=a(590),y=a(8505),m=a(1902),T=a(520);let F=(()=>{class e{constructor(t){this.httpClient=t,this.API=m.N.apiFt}getFeatureToggles(t){return this.httpClient.get(this.API).pipe((0,p.P)(),(0,y.b)(n=>this.formatFeatureToggle(t,n)),(0,d.K)(()=>(0,f.of)(null)))}formatFeatureToggle(t,n){const s={};return Object.keys(n).forEach(u=>{t.includes(u)&&(s[u]=n[u])}),s}}return e.\u0275fac=function(t){return new(t||e)(o.LFG(T.eN))},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const b=[{path:"",component:v,data:{featureToggleKeys:["ft_any_key_a","ft_any_key_c"]},resolve:{featureToggleValues:(()=>{class e{constructor(t){this.featureToggleService=t}resolve(t){return this.featureToggleService.getFeatureToggles(t.data.featureToggleKeys).pipe((0,d.K)(()=>(0,f.of)(null)))}}return e.\u0275fac=function(t){return new(t||e)(o.LFG(F))},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}];let C=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[l.Bz.forChild(b)],l.Bz]}),e})(),A=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[h.ez,C,c.Ps,g.aw.forChild()]]}),e})()}}]);