(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{31:function(e,t,n){e.exports=n(44)},36:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(12),i=n.n(c),u=(n(36),n(60)),l=n(4),o=function(){var e=Object(l.e)((function(e){return e.currentNumber}));return a.a.createElement(u.a,{style:{border:"1px black solid",padding:"0.5em",margin:"2vh 0",borderRadius:"5% / 20%",background:"#333"}},a.a.createElement(u.a,{style:{border:"1px black solid",padding:"0.2em",background:"#eee"}},e))},m=n(62),s=n(59),d=n(25),p=n.n(d),b=function(){return a.a.createElement(s.a,{item:!0,container:!0,spacing:1},a.a.createElement(s.a,{item:!0},a.a.createElement(E,null)),a.a.createElement(s.a,{item:!0},a.a.createElement(f,null)))};function f(){var e=Object(l.d)((function(e){return e.addOperation})),t=Object(l.d)((function(e){return e.clear}));return a.a.createElement(s.a,{spacing:1},["+","-","*","/"].map((function(t){return a.a.createElement(s.a,{item:!0,container:!0,spacing:1},a.a.createElement(s.a,{item:!0},a.a.createElement(m.a,{variant:"contained",color:"primary",onClick:function(){return e(t)}},t)))})),a.a.createElement(s.a,{item:!0,container:!0,spacing:1},a.a.createElement(s.a,{item:!0},a.a.createElement(m.a,{variant:"contained",color:"secondary",onClick:function(){return t()}},"C"))))}function E(){var e=Object(l.d)((function(e){return e.addDigit})),t=Object(l.d)((function(e){return e.calculate})),n=Array(10).fill(0).map((function(t,n){return{displayName:n,onClick:function(){return e(n)}}})),r=n.shift();return a.a.createElement(s.a,{spacing:1,justify:"center"},p.a.chunk(n.map((function(e){return a.a.createElement(g,e)})),3).map((function(e){return a.a.createElement(s.a,{item:!0,container:!0,spacing:1},e.map((function(e){return a.a.createElement(s.a,{item:!0},e)})))})),a.a.createElement(s.a,{container:!0,item:!0,spacing:1,justify:"flex-end"},a.a.createElement(s.a,{item:!0},a.a.createElement(g,{onClick:function(){return t()},color:"secondary",displayName:"=",style:{fontWeight:"bold"}})),a.a.createElement(s.a,{item:!0},a.a.createElement(g,r)),a.a.createElement(s.a,{item:!0},a.a.createElement(g,{displayName:".",style:{fontWeight:"bold"}}))))}var g=function(e){var t=e.displayName,n=e.style,r=e.onClick,c=e.color;return a.a.createElement(m.a,{variant:"contained",style:n,onClick:r,color:c},t)};var h=function(){return a.a.createElement("main",null,a.a.createElement(u.a,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},a.a.createElement(u.a,{style:{background:"#aaa",padding:"0.7em",borderRadius:"5%"}},a.a.createElement(o,null),a.a.createElement(b,null))),a.a.createElement("footer",null,"\xa9 2020 Idan Izicovich ",a.a.createElement("span",{role:"img"},"\ud83d\ude0e")))},y={result:0,items:[],operations:[],currentNumber:0,shouldClearCurrentNumber:!1,clear:Object(l.b)((function(e,t){e.items=[],e.operations=[],e.currentNumber=0,e.result=0})),addDigit:Object(l.b)((function(e,t){e.shouldClearCurrentNumber&&(e.currentNumber=0,e.shouldClearCurrentNumber=!1);var n=String(e.currentNumber);n+=String(t),e.currentNumber=Number(n)})),addOperation:Object(l.b)((function(e,t){e.items.push(e.currentNumber),e.shouldClearCurrentNumber=!0,e.operations.push(t)})),calculate:Object(l.b)((function(e,t){e.items.push(e.currentNumber);for(var n=e.items,r=e.operations;n.length>=2||r.length>=1;){var a=void 0;switch(r.pop()){case"+":a=function(e,t){return e+t};break;case"-":a=function(e,t){return t-e};break;case"*":a=function(e,t){return e*t};break;case"/":a=function(e,t){return t/e};break;default:e.result="unknown operation",e.items=[],e.operations=[]}a&&n.push(a(n.pop(),n.pop()))}e.result=n.pop(),e.currentNumber=e.result}))},k=Object(l.c)(y);i.a.render(a.a.createElement(l.a,{store:k},a.a.createElement(h,null)),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.e1fa9d2a.chunk.js.map