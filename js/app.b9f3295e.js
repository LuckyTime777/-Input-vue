(function(){"use strict";var n={1423:function(n,e,t){var l=t(9242),a=t(3396),u=t(7139),i=t.p+"img/03.7430348c.png";const o=(0,a._)("img",{alt:"",src:i},null,-1),r={action:""},c=(0,a._)("label",{for:""},"กรอกข้อมูลชื่อเล่น : ",-1),s=(0,a._)("br",null,null,-1),m=(0,a._)("label",{for:""},"กรอกข้อมูลชื่อจริง : ",-1),k=(0,a._)("br",null,null,-1),p=(0,a._)("label",{for:""},"กรอกข้อมูลนามสกุล : ",-1),f=(0,a._)("br",null,null,-1),_=(0,a._)("label",{for:""},"กรอกข้อมูลอายุ : ",-1),h=(0,a._)("br",null,null,-1),g=(0,a._)("label",{for:""},"กรอกข้อมูลสาขา : ",-1),v=(0,a._)("br",null,null,-1),b=(0,a._)("label",{for:""},"กรอกข้อมูลห้อง : ",-1),w=(0,a._)("br",null,null,-1),y=(0,a._)("label",{for:""},"กรอกข้อมูลคติประจำใจ : ",-1),d=(0,a._)("br",null,null,-1),x=(0,a._)("label",{for:""},"กรอกข้อมูลที่เรียนต่อ : ",-1),z=(0,a._)("br",null,null,-1),O=(0,a._)("label",{for:""},"กรอกข้อมูลวิชาที่ชอบ : ",-1),I=(0,a._)("br",null,null,-1);function C(n,e,t,i,C,j){return(0,a.wg)(),(0,a.iD)(a.HY,null,[o,(0,a._)("h1",null,(0,u.zw)(C.fistname)+" "+(0,u.zw)(C.lastname),1),(0,a._)("button",{onClick:e[0]||(e[0]=(...n)=>j.showalert&&j.showalert(...n))},"เเสดงชื่อ"),(0,a._)("button",{"on:click":e[1]||(e[1]=(...n)=>j.showalert1&&j.showalert1(...n))},"เเสดงนามสกุล",32),(0,a._)("h1",null,(0,u.zw)(C.age),1),(0,a._)("button",{onClick:e[2]||(e[2]=(...n)=>j.plus&&j.plus(...n))},"เพิ่มตัวเลข"),(0,a._)("button",{onClick:e[3]||(e[3]=(...n)=>j.minus&&j.minus(...n))},"ลบตัวเลข"),(0,a._)("button",{onClick:e[4]||(e[4]=(0,l.iM)((n=>j.plus1(5)),["ctrl"]))},"เพิ่มตัวเลขเพิ่ม5"),(0,a._)("button",{onContextmenu:e[5]||(e[5]=(0,l.iM)((n=>j.minus2(5)),["right"]))},"ลบตัวเลขลบ5",32),(0,a._)("form",r,[c,(0,a._)("input",{type:"text",onInput:e[6]||(e[6]=(...n)=>j.setnickname&&j.setnickname(...n))},null,32),s,m,(0,a._)("input",{type:"text",onInput:e[7]||(e[7]=(...n)=>j.setnickname1&&j.setnickname1(...n))},null,32),k,p,(0,a._)("input",{type:"text",onInput:e[8]||(e[8]=(...n)=>j.setnickname2&&j.setnickname2(...n))},null,32),f,_,(0,a._)("input",{type:"text",onInput:e[9]||(e[9]=(...n)=>j.setnickname3&&j.setnickname3(...n))},null,32),h,g,(0,a._)("input",{type:"text",onInput:e[10]||(e[10]=(...n)=>j.setnickname4&&j.setnickname4(...n))},null,32),v,b,(0,a._)("input",{type:"text",onInput:e[11]||(e[11]=(...n)=>j.setnickname5&&j.setnickname5(...n))},null,32),w,y,(0,a._)("input",{type:"text",onInput:e[12]||(e[12]=(...n)=>j.setnickname6&&j.setnickname6(...n))},null,32),d,x,(0,a._)("input",{type:"text",onInput:e[13]||(e[13]=(...n)=>j.setnickname7&&j.setnickname7(...n))},null,32),z,O,(0,a._)("input",{type:"text",onInput:e[14]||(e[14]=(...n)=>j.setnickname8&&j.setnickname8(...n))},null,32),I]),(0,a._)("h3",null,"เเสดงชื่อเล่น:"+(0,u.zw)(C.nickname),1),(0,a._)("h3",null,"เเสดงชื่อจริง:"+(0,u.zw)(C.nickname1),1),(0,a._)("h3",null,"เเสดงนามสกุล:"+(0,u.zw)(C.nickname2),1),(0,a._)("h3",null,"เเสดงอายุ:"+(0,u.zw)(C.nickname3),1),(0,a._)("h3",null,"แสดงสาขา:"+(0,u.zw)(C.nickname4),1),(0,a._)("h3",null,"แสดงห้อง:"+(0,u.zw)(C.nickname5),1),(0,a._)("h3",null,"แสดงคติประจำใจ:"+(0,u.zw)(C.nickname6),1),(0,a._)("h3",null,"แสดงที่เรียนต่อ:"+(0,u.zw)(C.nickname7),1),(0,a._)("h3",null,"แสดงวิชาที่ชอบ:"+(0,u.zw)(C.nickname8),1)],64)}var j={name:"App",data(){return{fistname:"Supalerk",lastname:"Aryuyuen",age:"20",nickname:"",nickname1:"",nickname2:"",nickname3:"",nickname4:"",nickname5:"",nickname6:"",nickname7:"",nickname8:""}},methods:{showalert(){alert(this.fistname)},showalert1(){alert(this.lastname)},plus(){this.age++},minus(){this.age--},plus1(n){this.age+=n},minus2(n){this.age-=n},setnickname(n){console.log(n.target.value),this.nickname=n.target.value},setnickname1(n){console.log(n.target.value),this.nickname1=n.target.value},setnickname2(n){console.log(n.target.value),this.nickname2=n.target.value},setnickname3(n){console.log(n.target.value),this.nickname3=n.target.value},setnickname4(n){console.log(n.target.value),this.nickname4=n.target.value},setnickname5(n){console.log(n.target.value),this.nickname5=n.target.value},setnickname6(n){console.log(n.target.value),this.nickname6=n.target.value},setnickname7(n){console.log(n.target.value),this.nickname7=n.target.value},setnickname8(n){console.log(n.target.value),this.nickname8=n.target.value}}},M=t(89);const A=(0,M.Z)(j,[["render",C]]);var P=A;(0,l.ri)(P).mount("#app")}},e={};function t(l){var a=e[l];if(void 0!==a)return a.exports;var u=e[l]={exports:{}};return n[l](u,u.exports,t),u.exports}t.m=n,function(){var n=[];t.O=function(e,l,a,u){if(!l){var i=1/0;for(s=0;s<n.length;s++){l=n[s][0],a=n[s][1],u=n[s][2];for(var o=!0,r=0;r<l.length;r++)(!1&u||i>=u)&&Object.keys(t.O).every((function(n){return t.O[n](l[r])}))?l.splice(r--,1):(o=!1,u<i&&(i=u));if(o){n.splice(s--,1);var c=a();void 0!==c&&(e=c)}}return e}u=u||0;for(var s=n.length;s>0&&n[s-1][2]>u;s--)n[s]=n[s-1];n[s]=[l,a,u]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var l in e)t.o(e,l)&&!t.o(n,l)&&Object.defineProperty(n,l,{enumerable:!0,get:e[l]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){t.p="/"}(),function(){var n={143:0};t.O.j=function(e){return 0===n[e]};var e=function(e,l){var a,u,i=l[0],o=l[1],r=l[2],c=0;if(i.some((function(e){return 0!==n[e]}))){for(a in o)t.o(o,a)&&(t.m[a]=o[a]);if(r)var s=r(t)}for(e&&e(l);c<i.length;c++)u=i[c],t.o(n,u)&&n[u]&&n[u][0](),n[u]=0;return t.O(s)},l=self["webpackChunkmy_app"]=self["webpackChunkmy_app"]||[];l.forEach(e.bind(null,0)),l.push=e.bind(null,l.push.bind(l))}();var l=t.O(void 0,[998],(function(){return t(1423)}));l=t.O(l)})();
//# sourceMappingURL=app.b9f3295e.js.map