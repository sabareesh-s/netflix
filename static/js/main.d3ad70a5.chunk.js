(this.webpackJsonpnetflix=this.webpackJsonpnetflix||[]).push([[0],{26:function(t,e,a){},28:function(t,e,a){},46:function(t,e,a){},60:function(t,e,a){},61:function(t,e,a){"use strict";a.r(e);var c=a(1),s=a.n(c),n=a(17),i=a.n(n),o="d325a440f71e774a57691d65614c03e5",l="https://image.tmdb.org/t/p/original",r="discover/tv?api_key=".concat(o,"&with_networks=213"),d="discover/movie?api_key=".concat(o,"&with_genres=28"),j=(a(26),a(0));var b=function(){return Object(j.jsxs)("div",{className:"navbar",children:[Object(j.jsx)("img",{className:"logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png",alt:"Netflix"}),Object(j.jsx)("img",{className:"avatar",src:"https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png",alt:""})]})},u=(a(28),a(4)),h=a(18),m=a.n(h).a.create({baseURL:"https://api.themoviedb.org/3"});a(46);var p=function(){var t=Object(c.useState)(),e=Object(u.a)(t,2),a=e[0],s=e[1];return Object(c.useEffect)((function(){m.get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(o,"&language=en-US")).then((function(t){s(t.data.results[2])}))}),[]),Object(j.jsxs)("div",{style:{backgroundImage:"url(".concat(a?l+a.backdrop_path:"",")")},className:"Banner",children:[Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("h1",{className:"title",style:{width:"600 px"},children:a?a.title:""}),Object(j.jsxs)("div",{className:"banner_buttons",children:[Object(j.jsx)("button",{className:"button",children:"Play"}),Object(j.jsx)("button",{className:"button",children:"My list"})]}),Object(j.jsxs)("h1",{className:"description",children:[" ",a?a.overview:""]})]}),Object(j.jsx)("div",{className:"fade_bottom"})]})},g=a(19);a(60);var v=function(t){var e=Object(c.useState)([]),a=Object(u.a)(e,2),s=a[0],n=a[1],i=Object(c.useState)(""),r=Object(u.a)(i,2),d=r[0],b=r[1];return Object(c.useEffect)((function(){m.get(t.url).then((function(t){console.log(t.data),n(t.data.results)}))}),[]),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("h2",{children:t.title}),Object(j.jsx)("div",{className:"posters",children:s.map((function(e){return Object(j.jsx)("img",{onClick:function(){return t=e.id,void m.get("/movie/".concat(t,"/videos?api_key=").concat(o,"&language=en-US")).then((function(t){0!==t.data.results.length?b(t.data.results[0]):console.log("Trailer not available")}));var t},className:t.isSmall?"smallPoster":"poster",src:"".concat(l+e.backdrop_path)})}))}),d&&Object(j.jsx)(g.a,{opts:{height:"390",width:"100%",playerVars:{autoplay:1}},videoId:d.key})]})};var O=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(b,{}),Object(j.jsx)(p,{}),Object(j.jsx)(v,{title:"Netflix Originals",url:r}),Object(j.jsx)(v,{title:"Action",isSmall:!0,url:d})]})};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.d3ad70a5.chunk.js.map