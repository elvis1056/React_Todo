(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(18)},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(9),s=n.n(c),l=(n(17),n(10)),i=n(7),r=n(1),u=n(2),d=n(5),m=n(3),b=n(6),f=n(4),h=function(e){function t(){return Object(r.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"title display-2"},"TodoList")}}]),t}(o.Component),p=function(e){function t(){return Object(r.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{class:"footer fixed-bottom text-center m-3"},"This page is created by - me",a.a.createElement("a",{href:"https://github.com/elvis1056/"},"View on GitHub"))}}]),t}(o.Component),v=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(d.a)(this,Object(m.a)(t).call(this))).state={newTodo:"",todos:[{title:"Learn React",done:!1},{title:"Learn JSX",done:!1}]},e.formSubmitted=e.formSubmitted.bind(Object(b.a)(e)),e}return Object(f.a)(t,e),Object(u.a)(t,[{key:"formSubmitted",value:function(e){e.preventDefault(),""!==this.state.newTodo&&this.setState({newTodo:"",todos:[].concat(Object(i.a)(this.state.todos),[{title:this.state.newTodo,done:!1}])})}},{key:"newTodoChanged",value:function(e){this.setState({newTodo:e.target.value})}},{key:"toggleTodoDone",value:function(e,t){console.log(e.target.checked);var n=Object(i.a)(this.state.todos);n[t]=Object(l.a)({},n[t]),n[t].done=e.target.checked,this.setState({todos:n}),console.log(n)}},{key:"removeTodo",value:function(e){var t=Object(i.a)(this.state.todos);t.splice(e,1),this.setState({todos:t})}},{key:"allDone",value:function(){var e=this.state.todos.map(function(e){return{title:e.title,done:!0}});this.setState({todos:e})}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"container"},a.a.createElement(h,null),a.a.createElement("form",{className:"input-group",onSubmit:this.formSubmitted},a.a.createElement("input",{className:"form-control col-sm-10",onChange:function(t){return e.newTodoChanged(t)},id:"newTodo",value:this.state.newTodo,placeholder:"enter task"}),a.a.createElement("button",{className:"btn btn-outline-success col-sm-2",type:"submit"},"submit")),a.a.createElement("br",null),a.a.createElement("button",{className:"btn btn-outline-success col-sm-12",onClick:function(){return e.allDone()}},"All Done"),a.a.createElement("ul",{className:"each_todo"},this.state.todos.map(function(t,n){return a.a.createElement("li",{className:"d-flex justify-content-between align-self-center",key:t.title},a.a.createElement("input",{className:"align-self-center",onChange:function(t){return e.toggleTodoDone(t,n)},type:"checkbox",checked:t.done}),a.a.createElement("span",{className:t.done?"done align-self-center":"align-self-center"},t.title),a.a.createElement("button",{className:"btn btn-outline-dark btn_delete",onClick:function(){e.removeTodo(n)}},"Remove"))})),a.a.createElement(p,null))}}]),t}(o.Component),j=document.querySelector("#root");s.a.render(a.a.createElement(v,null),j)}},[[11,1,2]]]);
//# sourceMappingURL=main.d6dcfdd2.chunk.js.map