(this.webpackJsonpmy_workout_report=this.webpackJsonpmy_workout_report||[]).push([[0],{21:function(e,t,n){e.exports=n(42)},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(10),u=n.n(o),c=(n(26),n(27),n(28),n(1)),i=n(2),l=n(6),s=n(4),m=n(5),d=n(7),b=n(3),f="routines/ADD_SET",p="routines/ADD_REPS",g=Date.now().toString(),v=new Date,E=v.toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"}),x=(v.toLocaleDateString("ko-KR",{weekday:"long"}),{routine:{id:g,title:"title",createdAt:E,desc:"Description",workoutItems:{squat:{name:"squat",sets:{1:{set:1,reps:0,weight:0},2:{set:2,reps:0,weight:0}}},benchpress:{name:"benchpress",sets:{1:{set:1,reps:0,weight:0}}}}}});function h(){var e=Object(c.a)(["\n  width: 10%;\n  padding: 0;\n  display: flex;\n  border: none;\n  box-sizing: border-box;\n  border-radius: 50%;\n  cursor: pointer;\n  color: white;\n\n  transition: 0.125s all ease-in;\n  background: #38d9a9;\n  &:hover {\n    transform: scale(1.1);\n    background: #63e6be;\n  }\n  &:active {\n    background: #20c997;\n  }\n"]);return h=function(){return e},e}function w(){var e=Object(c.a)(["\n  width: 90%;\n  height: 35px;\n  font-size: 28px;\n  color: #343a40;\n  font-weight: bold;\n  border: none;\n  box-sizing: border-box;\n"]);return w=function(){return e},e}function O(){var e=Object(c.a)(["\n  display: flex;\n  padding: 5px 12px;\n  border-radius: 4px;\n  border: 1px solid #dee2e6;\n  width: 100%;\n  box-sizing: border-box;\n"]);return O=function(){return e},e}var k=i.b.form(O()),j=i.b.input(w()),y=i.b.button(h()),I=function(e){var t=e.id,n=Object(r.useState)(""),o=Object(l.a)(n,2),u=o[0],c=o[1],i=Object(s.c)();return a.a.createElement(k,{onSubmit:function(e){e.preventDefault(),function(e){i(function(e){return{type:"routines/ADD_WORKOUT",text:e}}(e))}(u),c("")}},a.a.createElement(j,{id:t,value:u,placeholder:"Input your Item",onChange:function(e){return c(e.target.value)},required:!0}),a.a.createElement(y,{type:"submit"},a.a.createElement(m.a,{size:"100%"})))};function S(){var e=Object(c.a)(["\n      border-bottom: 1px solid #343a40;\n      &:hover {\n        border-bottom: 1px solid #343a40;\n      }\n      &:active {\n        border-bottom: 1px solid rgba(255, 255, 255, 0);\n        opacity: 0.8;\n      }\n    "]);return S=function(){return e},e}function D(){var e=Object(c.a)(["\n  cursor: pointer;\n  border-bottom: 1px solid rgba(255, 255, 255, 0);\n  &:hover {\n    border-bottom: 1px solid #343a40;\n  }\n  svg {\n    width: 18px;\n    height: 100%;\n    fill: #343a40;\n  }\n  ","\n"]);return D=function(){return e},e}function N(){var e=Object(c.a)(["\n  padding-top: 48px;\n  padding-left: 32px;\n  padding-right: 32px;\n  padding-bottom: 24px;\n  border-bottom: 1px solid #e9ecef;\n  h2 {\n    margin: 0;\n    font-size: 36px;\n    color: #343a40;\n  }\n  .day {\n    margin-top: 4px;\n    color: #868e96;\n    font-size: 21px;\n  }\n  .tasks-left {\n    color: #20c997;\n    font-size: 18px;\n    margin-top: 40px;\n    font-weight: bold;\n  }\n"]);return N=function(){return e},e}var R=i.b.div(N()),C=(i.b.span(D(),(function(e){return e.open&&Object(i.a)(S())})),function(e){var t=e.routine,n=new Date,r=n.toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"}),o=n.toLocaleDateString("ko-KR",{weekday:"long"});return a.a.createElement(R,null,a.a.createElement("h2",null,t.title),a.a.createElement("h2",null,t.desc),a.a.createElement("h2",null,r,a.a.createElement("span",{className:"day"},o)),a.a.createElement(I,{onCreate:t}))});var _=function(e){var t=e.number,n=e.diff,r=e.unit,o=e.onIncrease,u=e.onDecrease,c=e.onSetNumber,i=e.onSetDiff,l=function(e){e.target.select()};return a.a.createElement("div",{className:"Setter"},a.a.createElement("div",null,"\uc124\uc815 \uac12",a.a.createElement("input",{type:"number",placeholder:"Set your the smallest weight",value:n,min:"1.25",onChange:function(e){e.target.value?i(parseFloat(e.target.value,10)):e.target.value=n},onClick:l}),a.a.createElement("span",{className:"unit"},r)),a.a.createElement("div",{className:"Button-Count-Up",onClick:o},a.a.createElement(m.d,null)),a.a.createElement("div",null,a.a.createElement("input",{type:"number",placeholder:"Input your Weight",value:t,min:"1",onChange:function(e){e.target.value?c(parseFloat(e.target.value,10)):e.target.value=0},onClick:l}),a.a.createElement("span",{className:"unit"},r)),a.a.createElement("div",{className:"Button-Count-Down",onClick:u},a.a.createElement(m.c,null)))},z="counter/SET_DIFF",W="counter/INCREASE",B="counter/DECREASE",T={number:0,diff:1.25,unit:"kg"};n(39);var A=function(){var e=Object(s.d)((function(e){return{number:e.counter.number,diff:e.counter.diff,unit:e.counter.unit}}),s.b),t=e.number,n=e.diff,r=e.unit,o=Object(s.c)();return a.a.createElement("div",{className:"SetterNav"},a.a.createElement(_,{number:t,diff:n,unit:r,onIncrease:function(){return o({type:W})},onDecrease:function(){return o({type:B})},onSetDiff:function(e){return o(function(e){return{type:z,diff:e}}(e))},onSetNumber:function(e){return o(function(e){return{type:"counter/SET_NUMBER",number:e}}(e))}}))},K=n(19);n(40),n(41);var F=function(e){var t=e.workoutItemName,n=e.set,o=e.index;console.log(t,n,o);var u=o+1,c=Object(s.d)((function(e){return e.counter.number})),i=n.reps;console.log(i);var m=Object(r.useState)(0),d=Object(l.a)(m,2),b=d[0],f=d[1],g=Object(s.c)(),v=function(e,t,n,r){g(function(e,t,n,r){return{type:p,text:e,setIndex:t,reps:n,weight:r}}(e,t,n,r))};return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"Button",onClick:function(){f(b+1),console.log("reps",i),console.log("repsCount",b),console.log("weight",c),v(t,u,b,c),console.log("reps",i),console.log("repsCount",b)}},i))};var U=function(e){var t=e.workoutItem,n=t.sets,r=t.name;return a.a.createElement(a.a.Fragment,null,Object.values(n).map((function(e,t){return a.a.createElement(F,{key:t,index:t,set:e,workoutItemName:r})})))};var M=function(e){var t=e.sets,n=e.workoutItem;return a.a.createElement(U,{sets:t,workoutItem:n})};function L(e){var t=e.set;return a.a.createElement("li",null,a.a.createElement("span",null,t.set),"set",a.a.createElement("span",null,t.weight),"kg",a.a.createElement("span",null,t.reps),"reps")}var q=a.a.memo((function(e){var t=e.workoutItem,n=Object(r.useState)(2),o=Object(l.a)(n,2),u=o[0],c=o[1],i=t.name,d=t.sets,b=Object(s.c)(),p=function(e,t){return b(function(e,t){return{type:f,text:e,nextSet:t}}(e,t))};return a.a.createElement(a.a.Fragment,null,a.a.createElement("li",{className:"WorkoutItem"},a.a.createElement("div",{className:"WorkoutItemHead"},a.a.createElement("span",{className:"name"},a.a.createElement("b",null,i)),a.a.createElement("span",{role:"img","aria-label":"Delete WorkoutItem",className:"Button-del",onClick:function(){var e;e=i.toString().replace(/(\s*)/g,""),b({type:"routines/REMOVE_WORKOUT",text:e})}},a.a.createElement(m.f,null)),a.a.createElement("ul",{className:"sets"},Object.values(d).map((function(e,t){return a.a.createElement(L,{key:t,set:e})})))),a.a.createElement("div",{className:"WorkoutItemButtonsBlock"},a.a.createElement("div",{className:"Buttons"},a.a.createElement(M,{sets:d,workoutItem:t})),a.a.createElement("div",{className:"addButton",onClick:function(){c(u+1),p(i.toString().replace(/(\s*)/g,""),u)}},a.a.createElement(m.a,null)))))}));function V(){var e=Object(c.a)(["\n  padding: 0;\n"]);return V=function(){return e},e}var J=i.b.ul(V()),P=function(e){var t=e.workoutItems;return a.a.createElement(J,null,Object.values(t).map((function(e,t){return a.a.createElement(q,{key:t,workoutItem:e})})))};var H=function(e){Object(K.a)(e);var t=Object(s.d)((function(e){return e.routines.routine.workoutItems}));return a.a.createElement(P,{workoutItems:t})};function X(){var e=Object(c.a)(["\n      background: #ff6b6b;\n      &:hover {\n        background: #ff8787;\n      }\n      &:active {\n        background: #fa5252;\n      }\n      transform: translate(-50%, 50%) rotate(45deg);\n    "]);return X=function(){return e},e}function $(){var e=Object(c.a)(["\n  display: flex;\n  background: #38d9a9;\n  &:hover {\n    background: #63e6be;\n  }\n  &:active {\n    background: #20c997;\n  }\n\n  z-index: 9;\n  cursor: pointer;\n  width: 80px;\n  height: 80px;\n  align-items: center;\n  justify-content: center;\n  font-size: 60px;\n  position: absolute;\n  left: 50%;\n  bottom: 0px;\n  transform: translate(-50%, 50%);\n  color: white;\n  border-radius: 50%;\n  border: none;\n  outline: none;\n\n  transition: 0.125s all ease-in;\n  ","\n"]);return $=function(){return e},e}function G(){var e=Object(c.a)(["\n  flex: 1;\n  padding-bottom: 48px;\n  overflow-y: auto;\n  padding-left: 32px;\n  padding-right: 32px;\n"]);return G=function(){return e},e}function Q(){var e=Object(c.a)(["\n  height: 100%;\n  overflow-y: auto;\n  /* \u25cf\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf\uc2a4\ud06c\ub864\ubc14 \uc228\uae30\uae30 */\n  ::-webkit-scrollbar {\n    display: none;\n  }\n"]);return Q=function(){return e},e}function Y(){var e=Object(c.a)(["\n  padding-bottom: 10px;\n  margin-bottom: 10px;\n  border-bottom: 1px solid #ccc;\n"]);return Y=function(){return e},e}function Z(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n\n  width: 80%;\n  max-width: 512px;\n  height: 600px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  padding-left: 20px;\n  padding-right: 20px;\n\n  border-radius: 10px;\n  background: #fff;\n  box-shadow: 0px 10px 20px 3px rgba(0, 0, 0, 0.2);\n\n  position: absolute;\n  right: 0;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: auto;\n  margin-bottom: auto;\n  margin-bottom: auto;\n\n  font-size: 24px;\n  color: #343a40;\n"]);return Z=function(){return e},e}function ee(){var e=Object(c.a)(["\n  .name {\n    font-size: 20px;\n    font-weight: bold;\n  }\n  .set {\n    font-size: 18px;\n  }\n"]);return ee=function(){return e},e}function te(){var e=Object(c.a)(["\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 98;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(0, 0, 0, 0.8);\n"]);return te=function(){return e},e}function ne(){var e=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  position: absolute;\n  right: 0;\n  top: 0;\n\n  width: 50px;\n  height: 50px;\n  transform: translate(25px, -25px);\n  border-radius: 50%;\n\n  background-color: #fa5252;\n  color: #fff;\n\n  cursor: pointer;\n"]);return ne=function(){return e},e}function re(e){var t=e.workoutItem;return a.a.createElement("ul",null,a.a.createElement(ue,null,a.a.createElement("div",{className:"name"},t.name),Object.values(t.sets).map((function(e){return a.a.createElement("div",{className:"set"},a.a.createElement("span",null,e.set,"set"),a.a.createElement("span",null,e.weight,"kg"),a.a.createElement("span",null,e.reps,"reps"))}))))}var ae=i.b.div(ne()),oe=i.b.div(te()),ue=i.b.li(ee()),ce=i.b.div(Z()),ie=i.b.div(Y()),le=i.b.div(Q()),se=i.b.div(G()),me=i.b.button($(),(function(e){return e.open&&Object(i.a)(X())})),de=function(e){var t=e.routine,n=Object(r.useState)(!1),o=Object(l.a)(n,2),u=o[0],c=o[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(se,null,a.a.createElement(H,{routine:t}),a.a.createElement(A,null)),u&&a.a.createElement(oe,null,a.a.createElement(ce,null,a.a.createElement(ae,{onClick:function(){c(!1)}},"X"),a.a.createElement(ie,null,a.a.createElement("div",null,"Today's Routine")),a.a.createElement(le,null,a.a.createElement("div",null,t.title),a.a.createElement("div",null,t.desc),Object.values(t.workoutItems).map((function(e,t){return a.a.createElement(re,{key:t,workoutItem:e})}))))),a.a.createElement(me,{onClick:function(){c(!u)}},u?a.a.createElement(m.b,null):a.a.createElement(m.e,null)))};var be=function(){var e=Object(s.d)((function(e){return e.routines.routine}));return a.a.createElement("div",null,a.a.createElement(C,{routine:e}),a.a.createElement(de,{routine:e}))};var fe=function(){return a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"MWR-wrapper"},a.a.createElement(be,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var pe=n(8),ge=Object(pe.b)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"counter/SET_NUMBER":return Object(b.a)({},e,{number:t.number});case z:return Object(b.a)({},e,{diff:t.diff});case W:return Object(b.a)({},e,{number:e.number+e.diff});case B:return Object(b.a)({},e,{number:e.number-e.diff});default:return e}},routines:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"routines/ADD_WORKOUT":return{routine:Object(b.a)({},e.routine,{workoutItems:Object(b.a)({},e.routine.workoutItems,Object(d.a)({},t.text,{name:[t.text],sets:{1:{set:1,reps:0,weight:0}}}))})};case"routines/REMOVE_WORKOUT":var n=Object.keys(e.routine.workoutItems).filter((function(e){return e!==t.text})).reduce((function(t,n){return t[n]=e.routine.workoutItems[n],t}),{});return console.log("REMOVE_WORKOUT"),console.log("\trest items:",n),{routine:Object(b.a)({},e.routine,{workoutItems:Object(b.a)({},n)})};case f:return console.log("ADD_SET",t.text,t.nextSet),{routine:Object(b.a)({},e.routine,{workoutItems:Object(b.a)({},e.routine.workoutItems,Object(d.a)({},t.text,Object(b.a)({},e.routine.workoutItems[t.text],{sets:Object(b.a)({},e.routine.workoutItems[t.text].sets,Object(d.a)({},t.nextSet,{set:t.nextSet,reps:0,weight:0}))})))})};case p:return console.log("ADD_REPS",t.text,t.setIndex,t.reps,t.weight),{routine:Object(b.a)({},e.routine,{workoutItems:Object(b.a)({},e.routine.workoutItems,Object(d.a)({},t.text,Object(b.a)({},e.routine.workoutItems[t.text],{sets:Object(b.a)({},e.routine.workoutItems[t.text].sets,Object(d.a)({},t.setIndex,{set:t.setIndex,reps:t.reps,weight:t.weight}))})))})};default:return e}}}),ve=Object(pe.c)(ge);console.log(ve.getState()),u.a.render(a.a.createElement(s.a,{store:ve},a.a.createElement(fe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.cae80709.chunk.js.map