(this["webpackJsonpmovie-app-2020"]=this["webpackJsonpmovie-app-2020"]||[]).push([[0],{20:function(e,a,t){e.exports=t(47)},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),s=t(14),i=t.n(s),c=t(3),o=t.n(c),m=t(4),u=t(15),l=t(16),v=t(19),p=t(18),d=t(17),g=t.n(d),y=t(2),f=t.n(y);t(45);function h(e){e.id;var a=e.year,t=e.title,r=e.summary,s=e.poster,i=e.genres;return n.a.createElement("div",{className:"movie"},n.a.createElement("img",{src:s,alt:t,title:t}),n.a.createElement("div",{className:"movie_data"},n.a.createElement("h3",{className:"movie__title"},t),n.a.createElement("h5",{className:"movie_yaer"},a),n.a.createElement("ul",{className:"genres"},i.map((function(e,a){return n.a.createElement("li",{key:a,className:"genres__genre"},e)}))),n.a.createElement("p",{className:"movie__summary"},r.slice(0,180)," ...")))}h.prototype={id:f.a.number.isRequired,year:f.a.number.isRequired,title:f.a.string.isRequired,summary:f.a.string.isRequired,poster:f.a.string.isRequired,genres:f.a.arrayOf(f.a.string).isRequired};var E=h,_=(t(46),function(e){Object(v.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(u.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=a.call.apply(a,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMoives=Object(m.a)(o.a.mark((function a(){var t,r;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,g.a.get("https://yts-proxy.now.sh/list_movies.json/?sort_by=rating");case 2:t=a.sent,r=t.data.data.movies,e.setState({movies:r,isLoading:!1});case 5:case"end":return a.stop()}}),a)}))),e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(m.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getMoives();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,a=e.isLoading,t=e.movies;return n.a.createElement("section",{className:"container"},a?n.a.createElement("div",{className:"loader"},n.a.createElement("span",{className:"loader__text"},"Loading..")):n.a.createElement("div",{className:"movies"},t.map((function(e){return n.a.createElement(E,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),t}(n.a.Component));i.a.render(n.a.createElement(_,null),document.getElementById("movie"))}},[[20,1,2]]]);
//# sourceMappingURL=main.0cda2ada.chunk.js.map