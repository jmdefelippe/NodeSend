(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"45lV":function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/enlaces/[enlace]",function(){return t("V1oB")}])},V1oB:function(e,a,t){"use strict";t.r(a),t.d(a,"__N_SSP",(function(){return f})),t.d(a,"getServerSidePaths",(function(){return w}));var n=t("o0o1"),r=t.n(n),s=t("HaE+"),o=t("5Yp1"),c=t("DJ7r"),l=t("q1tI"),u=t.n(l),p=t("9Iqy"),i=t("xHM2"),d=u.a.createElement,f=!0;function w(){return m.apply(this,arguments)}function m(){return(m=Object(s.a)(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.get("/api/enlaces");case 2:return a=e.sent,e.abrupt("return",{paths:a.data.enlaces.map((function(e){return{params:{enlace:e.url}}})),fallback:!1});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a.default=function(e){var a=e.enlace,t=Object(l.useContext)(p.a),n=t.mostrarAlerta,f=t.mensaje_archivo,w=Object(l.useState)(a.password),m=w[0],h=w[1],b=Object(l.useState)(""),v=b[0],x=b[1];console.log(m);var g=function(){var e=Object(s.a)(r.a.mark((function e(t){var s,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),s={password:v},e.prev=2,e.next=5,c.a.post("/api/enlaces/".concat(a.enlace),s);case 5:o=e.sent,h(o.data.password),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),n(e.t0.response.data.msg);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(a){return e.apply(this,arguments)}}();return d(o.a,null,m?d(u.a.Fragment,null,d("p",{className:"text-center"},"Este enlace esta protegido por un password, colocalo a continuaci\xf3n"),f&&d(i.a,null),d("div",{className:"flex justify-center mt-5"},d("div",{className:"w-full max-w-lg"},d("form",{className:"bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4",onSubmit:function(e){return g(e)}},d("div",{className:"mb-4"},d("label",{className:"block text-black text-sm font-bold mb-2",htmlFor:"password"},"Password"),d("input",{type:"password",className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"password",placeholder:"Password del enlace",value:v,onChange:function(e){return x(e.target.value)}})),d("input",{type:"submit",className:"bg-red-500 hover:bg-gray-900 w-full p-2 text-white uppercase font-bold",value:"Validar Password..."}))))):d(u.a.Fragment,null,d("h1",{className:"text-4xl text-center text-gray-700"},"Descarga tu archivo:"),d("div",{className:"flex items-center justify-center mt-10"},d("a",{href:"".concat("http://localhost:4000","/api/archivos/").concat(a.archivo),className:"bg-red-500 text-center px-10 py-3 rounded uppercase font-bold text-white cursor-pointer",download:!0},"Aqu\xed"))))}}},[["45lV",0,2,1,3,4]]]);