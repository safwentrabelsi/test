(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/LogoMedgoApp.9bbe89cf.png"},25:function(e,t,a){e.exports=a(54)},30:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(21),o=a.n(s),c=(a(30),a(6)),r=a(7),i=a(9),m=a(8),u=a(10),d=a(22),h=a.n(d),p=a(11),g=a.n(p),E=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={name:"",email:"",content:""},a.handleChange=function(e){a.setState({name:a.refs.name.value,email:a.refs.email.value,content:a.refs.content.value})},a.handeSubmit=function(e){e.preventDefault(),g.a.defaults.headers={"Content-Type":"application/json"},g.a.post("/addmessage",a.state).then(function(e){console.log(e)}),a.setState({name:"",email:"",content:""}),document.getElementById("slider").classList.add("closed"),document.getElementById("oppositeSlider").classList.add("opened"),document.getElementById("showForm").classList.add("opened")},a.showForm=function(){document.getElementById("slider").classList.remove("closed"),document.getElementById("oppositeSlider").classList.remove("opened"),document.getElementById("showForm").classList.add("hide")},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("img",{src:h.a,className:"logo center",alt:"logo"}),l.a.createElement("div",{className:"slider",id:"slider"},l.a.createElement("form",{onSubmit:this.handeSubmit},l.a.createElement("input",{type:"text",onChange:this.handleChange,ref:"name",value:this.state.name,placeholder:"Your Name",required:!0}),l.a.createElement("input",{type:"text",onChange:this.handleChange,ref:"email",value:this.state.email,placeholder:"Your E-mail",pattern:"^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",required:!0}),l.a.createElement("textarea",{rows:"1",className:"materialize-textarea",type:"text",onChange:this.handleChange,ref:"content",value:this.state.content,placeholder:"Message...",required:!0}),l.a.createElement("button",{type:"submit",className:"btn waves-effect light-blue"},"submit"))),l.a.createElement("div",{className:"oppositeSlider",id:"oppositeSlider"},l.a.createElement("h1",null,"Thank you for sending"),l.a.createElement("button",{onClick:this.showForm,id:"showForm",className:"btn waves-effect light-blue"},"New message ?")))}}]),t}(n.Component),f=a(55),v=function(e){return l.a.createElement("nav",null,l.a.createElement("div",{className:"nav-wrapper"},l.a.createElement(f.a,{to:"/",className:"brand-logo center"},"Contact form"),l.a.createElement("ul",{className:"right"},l.a.createElement("li",null,l.a.createElement(f.a,{to:"/showmessages"},"Messages")))))},b=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={messages:[]},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("/getmessage").then(function(t){e.setState({messages:t.data})})}},{key:"render",value:function(){var e=this.state.messages,t=e.length?e.map(function(e){return l.a.createElement("div",{className:"post card",key:e._id},l.a.createElement("div",{className:"card-content"},l.a.createElement("span",{className:"card-title "},e.name),l.a.createElement("p",null,e.email),l.a.createElement("p",null,e.content)))}):l.a.createElement("div",{className:"center"}," ",l.a.createElement("h4",null," no messages yet"));return l.a.createElement("div",{className:"container"},t)}}]),t}(n.Component),w=a(56),y=a(58),N=a(57),j=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App "},l.a.createElement(w.a,null,l.a.createElement("div",null,l.a.createElement(v,null),l.a.createElement(y.a,null,l.a.createElement(N.a,{path:"/showmessages",component:b}),l.a.createElement(N.a,{exact:!0,path:"/",component:E})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,2,1]]]);
//# sourceMappingURL=main.8b1668e7.chunk.js.map