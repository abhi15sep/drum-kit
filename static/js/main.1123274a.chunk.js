(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,a,t){e.exports=t.p+"static/media/q.f10ba3d1.wav"},function(e,a,t){e.exports=t.p+"static/media/w.7a90c58f.wav"},function(e,a,t){e.exports=t.p+"static/media/e.b29e2057.wav"},function(e,a,t){e.exports=t.p+"static/media/a.3f9fdf5d.wav"},function(e,a,t){e.exports=t.p+"static/media/s.a55ed0c5.wav"},function(e,a,t){e.exports=t.p+"static/media/d.5482e8be.wav"},function(e,a,t){e.exports=t.p+"static/media/z.9eb8d6f7.wav"},function(e,a,t){e.exports=t.p+"static/media/x.4d5e5a8a.mp3"},function(e,a,t){e.exports=t.p+"static/media/c.3c8ca947.mp3"},,,function(e,a,t){e.exports=t(34)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/boom.550be808.wav"},function(e,a,t){e.exports=t.p+"static/media/clap.a6e86dd7.wav"},function(e,a,t){e.exports=t.p+"static/media/hihat.4ba39e07.wav"},function(e,a,t){e.exports=t.p+"static/media/kick.4dd58595.wav"},function(e,a,t){e.exports=t.p+"static/media/openhat.a62db465.wav"},function(e,a,t){e.exports=t.p+"static/media/ride.b0d70ec5.wav"},function(e,a,t){e.exports=t.p+"static/media/snare.80c4129b.wav"},function(e,a,t){e.exports=t.p+"static/media/tink.2a6bb6f5.wav"},function(e,a,t){e.exports=t.p+"static/media/tom.572ed39d.wav"},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(16),i=t.n(r),s=(t(23),t(1)),d=t(2),o=t(4),l=t(3),m=t(5),u=(t(24),t(25),t(26),t(27),t(28),t(29),t(30),t(31),t(32),t(33),t(6)),p=t.n(u),E=t(7),v=t.n(E),k=t(8),f=t.n(k),y=t(9),h=t.n(y),b=t(10),w=t.n(b),g=t(11),x=t.n(g),N=t(12),j=t.n(N),O=t(13),S=t.n(O),I=t(14),C=t.n(I),L=(p.a,v.a,f.a,h.a,w.a,x.a,j.a,S.a,C.a,function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{id:"drum-machine",style:{margin:"auto"}},c.a.createElement("div",{"data-key":"81",className:"drum-pad"},c.a.createElement("kbd",null,"Q"),c.a.createElement("audio",{"data-key":"81",src:p.a}),c.a.createElement("span",{className:"sound"},"openhat")),c.a.createElement("div",{"data-key":"87",className:"drum-pad"},c.a.createElement("kbd",null,"W"),c.a.createElement("audio",{"data-key":"87",src:v.a}),c.a.createElement("span",{className:"sound"},"boom")),c.a.createElement("div",{"data-key":"69",className:"drum-pad"},c.a.createElement("kbd",null,"E"),c.a.createElement("audio",{"data-key":"69",src:f.a}),c.a.createElement("span",{className:"sound"},"ride")),c.a.createElement("div",{"data-key":"65",className:"drum-pad"},c.a.createElement("kbd",null,"A"),c.a.createElement("audio",{"data-key":"65",src:h.a}),c.a.createElement("span",{className:"sound"},"clap")),c.a.createElement("div",{"data-key":"83",className:"drum-pad"},c.a.createElement("kbd",null,"S"),c.a.createElement("audio",{"data-key":"83",src:w.a}),c.a.createElement("span",{className:"sound"},"hihat")),c.a.createElement("div",{"data-key":"68",className:"drum-pad"},c.a.createElement("kbd",null,"D"),c.a.createElement("audio",{"data-key":"68",src:x.a}),c.a.createElement("span",{className:"sound"},"kick")),c.a.createElement("div",{"data-key":"90",className:"drum-pad"},c.a.createElement("kbd",null,"Z"),c.a.createElement("audio",{"data-key":"90",src:j.a}),c.a.createElement("span",{className:"sound"},"snare")),c.a.createElement("div",{"data-key":"88",className:"drum-pad"},c.a.createElement("kbd",null,"X"),c.a.createElement("audio",{"data-key":"88",src:S.a}),c.a.createElement("span",{className:"sound"},"tom")),c.a.createElement("div",{"data-key":"67",className:"drum-pad"},c.a.createElement("kbd",null,"C"),c.a.createElement("audio",{"data-key":"67",src:C.a}),c.a.createElement("span",{className:"sound"},"tink")))}}]),a}(n.Component)),q=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(c)))).logSwitchState=function(){},t}return Object(m.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{id:"switch-instrument",style:{display:"block",margin:"auto"}},c.a.createElement("h2",null,"Switch Instrument"),c.a.createElement("label",{className:"switch-light switch-candy",onClick:this.logSwitchState},c.a.createElement("input",{type:"checkbox"}),c.a.createElement("strong",null,"Switch Instrument"),c.a.createElement("span",null,c.a.createElement("span",null,"Piano"),c.a.createElement("span",null,"Drumkit"),c.a.createElement("a",{href:"#",style:{color:"transparent"}},"\xa0"))))}}]),a}(n.Component);console.log("./sounds/drum/clap.wav");var A=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(o.a)(this,Object(l.a)(a).call(this))).changeActiveInstrument=function(){document.getElementById("ckbx-size-1").checked?e.setState({activeInstrument:"drumkit"}):e.setState({activeInstrument:"piano"}),e.stateChangeFunc()},e.stateChangeFunc=function(){console.log(e.state.activeInstrument)},e.state={activeInstrument:void 0},e}return Object(m.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(e){var a=document.querySelectorAll(".drum-pad");document.getElementById("drum-machine");function t(e){"transform"===e.propertyName&&this.classList.remove("playing")}a.forEach(function(e){return e.addEventListener("transitionend",t)}),window.addEventListener("keydown",function(e){var a=document.querySelector('audio[data-key="'.concat(e.keyCode,'"]')),t=document.querySelector('.drum-pad[data-key="'.concat(e.keyCode,'"]'));a&&(a.currentTime=0,a.play(),t.classList.add("playing"))}),window.addEventListener("click",function(e){var a=e.target.querySelector("audio");e.target.classList.contains("drum-pad")&&(e.target.classList.add("playing"),a.currentTime=0,a.play())})}},{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"React Drum Kit"),c.a.createElement("div",{className:"container"},c.a.createElement(L,null),c.a.createElement(q,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[17,1,2]]]);
//# sourceMappingURL=main.1123274a.chunk.js.map