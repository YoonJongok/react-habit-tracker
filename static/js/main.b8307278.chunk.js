(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{13:function(e,t,n){e.exports=n(24)},18:function(e,t,n){},19:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(6),u=n.n(r),o=(n(18),n(10)),l=n(3),i=n(11),s=(n(19),Object(a.memo)((function(e){var t=e.habit,n=e.onIncrement,a=e.onDecrement,r=e.onDelete,u=t.name,o=t.count;return c.a.createElement("li",{className:"habit"},c.a.createElement("span",{className:"habit-name"},u),c.a.createElement("span",{className:"habit-count"},o),c.a.createElement("button",{className:"habit-button habit-increase",onClick:function(){n(t)}},c.a.createElement("i",{className:"fas fa-plus-square"})),c.a.createElement("button",{className:"habit-button habit-decrease",onClick:function(){a(t)}},c.a.createElement("i",{className:"fas fa-minus-square"})),c.a.createElement("button",{className:"habit-button habit-delete",onClick:function(){r(t)}},c.a.createElement("i",{className:"fas fa-trash"})))}))),m=Object(a.memo)((function(e){var t=c.a.createRef(),n=c.a.createRef();return c.a.createElement("form",{ref:t,className:"add-form",onSubmit:function(a){a.preventDefault();var c=n.current.value;c&&e.onAdd(c),t.current.reset()}},c.a.createElement("input",{ref:n,type:"text",className:"add-input",placeholder:"Habit"}),c.a.createElement("button",{className:"add-button"},"Add"))})),b=function(e){var t=e.habits,n=e.onIncrement,a=e.onDecrement,r=e.onDelete,u=e.onAdd,o=e.onReset;return c.a.createElement("div",{className:"habits"},c.a.createElement(m,{onAdd:u}),c.a.createElement("ul",null,t.map((function(e){return c.a.createElement(s,{key:e.id,habit:e,onIncrement:n,onDecrement:a,onDelete:r})}))),c.a.createElement("button",{className:"habits-reset",onClick:o},"Reset All"))},f=n(7),d=n(8),p=n(9),E=n(12),h=function(e){Object(E.a)(n,e);var t=Object(p.a)(n);function n(){return Object(f.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"navbar"},c.a.createElement("i",{className:"navbar-logo fas fa-leaf"}),c.a.createElement("span",null,"Habit Tracker"),c.a.createElement("span",{className:"navbar-count"},this.props.totalCount))}}]),n}(a.PureComponent),j=function(){var e=Object(a.useState)([{id:1,name:"Reading",count:0},{id:2,name:"Running",count:0},{id:3,name:"Coding",count:0}]),t=Object(i.a)(e,2),n=t[0],r=t[1],u=Object(a.useCallback)((function(e){r((function(t){return t.map((function(t){return t.id===e.id?Object(l.a)({},e,{count:e.count+1}):t}))}))}),[]),s=Object(a.useCallback)((function(e){r((function(t){return t.map((function(t){if(t.id===e.id){var n=e.count-1;return Object(l.a)({},e,{count:n<0?0:n})}return t}))}))}),[]),m=Object(a.useCallback)((function(e){r((function(t){return t.filter((function(t){return t.id!==e.id}))}))}),[]),f=Object(a.useCallback)((function(e){r((function(t){return[].concat(Object(o.a)(t),[{id:Date.now(),name:e,count:0}])}))}),[]),d=Object(a.useCallback)((function(){r((function(e){return e.map((function(e){return 0!==e.count?Object(l.a)({},e,{count:0}):e}))}))}),[]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(h,{totalCount:n.filter((function(e){return e.count>0})).length}),c.a.createElement(b,{habits:n,onIncrement:u,onDecrement:s,onDelete:m,onAdd:f,onReset:d}))};n(20);u.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(j,null)),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.b8307278.chunk.js.map