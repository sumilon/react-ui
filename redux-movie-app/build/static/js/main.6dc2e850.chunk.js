(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{38:function(e,t,n){e.exports=n(57)},43:function(e,t,n){},45:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(17),i=n.n(r),c=(n(43),n(8)),u=n(9),s=n(11),l=n(10),d=n(12),m=(n(45),n(59)),v=n(61),p=n(60),b=n(13),f=n(6),g=n(3),h=n(58),E=n(14);function O(){var e=Object(b.a)(["\n&:hover{\n    transform: scale(1.2);\n};\n"]);return O=function(){return e},e}function j(){var e=Object(b.a)(["\n    box-shadow:  0 0 35px black;\n    border: 2px solid black\n"]);return j=function(){return e},e}var y=function(e){var t=e.movie;return o.a.createElement("div",null,o.a.createElement(M,null,o.a.createElement(h.a,{to:"/".concat(t.id)},o.a.createElement(w,{src:"".concat("http://image.tmdb.org/t/p/w154").concat(t.poster_path),alt:t.title}))),o.a.createElement("h3",null,t.title))},w=E.a.img(j()),M=E.a.div(O()),k=n(16),_=n.n(k),L=n(25);function A(){return function(){var e=Object(L.a)(_.a.mark(function e(t){var n,a;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/discover/movie?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1");case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",t({type:"GET_MOVIES",data:a.results}));case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}function x(e){return function(){var t=Object(L.a)(_.a.mark(function t(n){var a,o;return _.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=65e043c24785898be00b4abc12fcdaae"));case 2:return a=t.sent,t.next=5,a.json();case 5:return o=t.sent,t.abrupt("return",n({type:"GET_MOVIE",data:o}));case 7:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}function G(){return{type:"RESET_MOVIE"}}function S(){var e=Object(b.a)(["\n    display: grid;\n    padding: 1rem;\n    grid-template-columns: repeat(6, 1fr);\n    grid-row-gap: 1rem;\n"]);return S=function(){return e},e}var T=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.getMovies,n=e.isLoaded,a=e.moviesLoadedAt;(!n||new Date-new Date(a)>36e5)&&t()}},{key:"render",value:function(){var e=this.props,t=e.movies;return e.isLoaded?o.a.createElement(C,null,t.map(function(e){return o.a.createElement(y,{key:e.id,movie:e,desc:e.overview})})):o.a.createElement("h1",null,"Loading...")}}]),t}(a.PureComponent),V=Object(f.b)(function(e){return{movies:e.moviedata.movies,isLoaded:e.moviedata.moviesLoaded,moviesLoadedAt:e.moviedata.moviesLoadedAt}},function(e){return Object(g.bindActionCreators)({getMovies:A},e)})(T),C=E.a.div(S());function I(){var e=Object(b.a)(["\n    background: white;\n    text-align: left;\n    padding: 2rem 10%;\n    display: flex;\n    >div {\n        margin-left: 20px;\n    }\n    img {\n        position: relative;\n        top: -5rem;\n    }\n"]);return I=function(){return e},e}function R(){var e=Object(b.a)(["\n    position: relative;\n    padding-top: 50vh;\n    background: url(",") no-repeat;\n    background-size: cover;\n"]);return R=function(){return e},e}var D=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.getMovie)(e.match.params.id)}},{key:"componentWillUnmount",value:function(){this.props.resetMovie()}},{key:"render",value:function(){var e=this.props.movie;return e.id?o.a.createElement(N,{backdrop:"".concat("http://image.tmdb.org/t/p/w1280").concat(e.backdrop_path)},o.a.createElement(W,null,o.a.createElement(w,{src:"".concat("http://image.tmdb.org/t/p/w154").concat(e.poster_path)}),o.a.createElement("div",null,o.a.createElement("h1",null,e.title),o.a.createElement("h3",null,e.release_date),o.a.createElement("p",null,e.overview)))):null}}]),t}(a.Component),H=Object(f.b)(function(e){return{movie:e.moviedata.movie,isLoaded:e.moviedata.movieLoaded}},function(e){return Object(g.bindActionCreators)({getMovie:x,resetMovie:G},e)})(D),N=E.a.div(R(),function(e){return e.backdrop}),W=E.a.div(I()),B=n(32),J=n(33),U=n.n(J),z=n(34),P=n(26),Y=n(7);function $(){return{type:"TOGGLE_MESSAGE"}}var q={messageVisibility:!1},F={movies:[],moviesLoaded:!1,moviesLoadedAt:null,movie:{},movieLoaded:!1},K=Object(g.combineReducers)({toggle:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q;switch((arguments.length>1?arguments[1]:void 0).type){case"TOGGLE_MESSAGE":return Object(Y.a)({},e,{messageVisibility:!e.messageVisibility});default:return e}},moviedata:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.data;switch(n){case"GET_MOVIES":return Object(Y.a)({},e,{movies:a,moviesLoaded:!0,moviesLoadedAt:new Date});case"GET_MOVIE":return Object(Y.a)({},e,{movie:a,movieLoaded:!0});case"RESET_MOVIE":return Object(Y.a)({},e,{movie:{},movieLoaded:!1});default:return e}}}),Q=Object(f.b)(function(e){return{messageVisibility:e.toggle.messageVisibility}},function(e){return Object(g.bindActionCreators)({toggleMessage:$},e)})(function(e){var t=e.messageVisibility,n=e.toggleMessage;return o.a.createElement("div",null,t&&o.a.createElement("p",null," You will be seeing this if redux action is toggled"),o.a.createElement("button",{onClick:n},"Toggle Me"))}),X=Object(f.b)(function(e){return{movies:e.moviedata.movies}},function(e){return Object(g.bindActionCreators)({getMovies:A},e)})(function(e){var t=e.getMovies;return o.a.createElement("div",null,o.a.createElement("button",{onClick:t},"Load Movies"))}),Z=[U.a,z.a],ee=Object(g.createStore)(K,Object(P.load)(),Object(B.composeWithDevTools)(g.applyMiddleware.apply(void 0,Z.concat([Object(P.save)()])))),te=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement(f.a,{store:ee},o.a.createElement(m.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(Q,null),o.a.createElement(X,null),o.a.createElement(v.a,null,o.a.createElement(p.a,{exact:!0,path:"/",component:V}),o.a.createElement(p.a,{exact:!0,path:"/:id",component:H})))))}}]),t}(a.Component),ne={welcome:"Hi defaulte state",otherstate:"some stuff",otherstates:"some other stuff"},ae=Object(g.createStore)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GREET_ME":return Object(Y.a)({},e,{welcome:"hello"});case"GREET_NAME":return Object(Y.a)({},e,{welcome:"Hello ".concat(t.name)});case"HI_ALL":return Object(Y.a)({},e,{welcome:"HEllo All"});default:return e}});console.log(ae.getState());ae.dispatch({type:"GREET_NAME",name:"this is the data coming fromapi",name2:"this is another data coming fromapi"}),console.log(ae.getState()),ae.dispatch({type:"GREET_NAME",name:"somename"}),console.log(ae.getState()),ae.dispatch({type:"GREET_ME",welcome:"Good Morning"}),console.log("***** : ",ae.getState());a.Component,Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[38,2,1]]]);
//# sourceMappingURL=main.6dc2e850.chunk.js.map