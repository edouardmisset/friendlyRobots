(this.webpackJsonpfriendlyrobots=this.webpackJsonpfriendlyrobots||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),s=n(7),a=n.n(s),o=(n(13),n(2)),i=n(3),h=n(5),l=n(4),u=function(e){var t=e.name,n=e.email,c=e.id;return Object(r.jsxs)("div",{className:"tc bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(r.jsx)("img",{alt:"robot",src:"https://robohash.org/".concat(c,"?200x200")}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:t}),Object(r.jsx)("p",{children:n})]})]})},b=function(e){var t=e.robots;return Object(r.jsx)("div",{children:t.map((function(e,n){return Object(r.jsx)(u,{id:t[n].id,name:t[n].name,email:t[n].email},t[n].id)}))})},d=function(e){e.searchField;var t=e.searchChange;return Object(r.jsx)("div",{className:"pa2",children:Object(r.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search robots",onChange:t})})},j=(n(14),function(e){return Object(r.jsx)("div",{style:{overflow:"scroll",height:"600px"},children:e.children})}),f=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(i.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(r.jsx)("h1",{children:"Oops, something wrong happened"}):this.props.children}}]),n}(c.Component),O=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({SearchField:t.target.value})},e.state={robots:[],SearchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.SearchField,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)("h1",{className:"f1",children:"Friendly Robots"}),Object(r.jsx)(d,{searchChange:this.onSearchChange}),Object(r.jsx)(j,{children:Object(r.jsx)(f,{children:Object(r.jsx)(b,{robots:c})})})]}):Object(r.jsx)("h1",{className:"tc",children:"Loading..."})}}]),n}(c.Component),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};n(15);a.a.render(Object(r.jsx)(O,{}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.049509db.chunk.js.map