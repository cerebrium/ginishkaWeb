(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"Cuy+":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return s}));var n=a("q1tI"),r=a.n(n),l=(a("7qko"),a("Wbzz"));var s=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).submitForm=function(e){e.preventDefault();var t=e.target,n=new FormData(t),r=new XMLHttpRequest;r.open(t.method,t.action),r.setRequestHeader("Accept","application/json"),r.onreadystatechange=function(){r.readyState===XMLHttpRequest.DONE&&(200===r.status?(t.reset(),a.setState({status:"SUCCESS"})):a.setState({status:"ERROR"}))},r.send(n)},a.submitForm=a.submitForm.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a.state={status:""},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.state.status;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"navContainer"},r.a.createElement("div",null,r.a.createElement(l.Link,{to:"/about/",className:"nav"},"Home"))," | ",r.a.createElement("div",null,r.a.createElement(l.Link,{to:"/recruitment/",className:"nav"},"Recruitment"))," | ",r.a.createElement("div",null,r.a.createElement(l.Link,{to:"/testimonials/",className:"nav"},"Testimonials"))," | ",r.a.createElement("div",null,r.a.createElement(l.Link,{to:"/policies/",className:"nav"},"Policies"))," | ",r.a.createElement("div",null,r.a.createElement(l.Link,{to:"/contact/",className:"nav"},"Contact"))),r.a.createElement("div",{className:"contactPageMain"},r.a.createElement("h1",null,"Contact Us!"),r.a.createElement("form",{onSubmit:this.submitForm,action:"https://formspree.io/meqelkae",method:"POST",className:"myForm"},r.a.createElement("label",null,"Name:"),"  ",r.a.createElement("input",{type:"text",name:"name"}),r.a.createElement("br",null),r.a.createElement("label",null,"Email:"),"  ",r.a.createElement("input",{type:"email",name:"email"}),r.a.createElement("br",null),r.a.createElement("textarea",{type:"textarea",rows:"15",cols:"16",name:"message",className:"myTextArea"}),r.a.createElement("br",null),"SUCCESS"===e?r.a.createElement("p",null,"Thanks!"):r.a.createElement("button",null,"Submit"),"ERROR"===e&&r.a.createElement("p",null,"Ooops! There was an error."))))},n}(r.a.Component)}}]);
//# sourceMappingURL=component---src-pages-contact-js-b300789623352b178377.js.map