(this.webpackJsonpdirectory=this.webpackJsonpdirectory||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(16),s=a.n(r),c=(a(22),a(3)),i=a(4),o=a(6),l=a(5),d=(a(23),a(0));var h=function(e){var t=e.users;function a(e){var t=e.split("-"),a=t[0];return[t[1],t[2].split("T")[0],a].join("-")}return Object(d.jsx)("tbody",{children:void 0!==t[0]&&void 0!==t[0].name?t.map((function(e){var t=e.login,n=e.name,r=e.picture,s=e.phone,c=e.email,i=e.dob;return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{"data-th":"Image",className:"align-middle",children:Object(d.jsx)("img",{src:r.medium,alt:"profile image for "+n.first+" "+n.last,className:"img-responsive"})}),Object(d.jsxs)("td",{"data-th":"Name",className:"name-cell align-middle",children:[n.first," ",n.last]}),Object(d.jsx)("td",{"data-th":"Phone",className:"align-middle",children:s}),Object(d.jsx)("td",{"data-th":"Email",className:"align-middle",children:Object(d.jsx)("a",{href:"mailto:"+c,target:"__blank",children:c})}),Object(d.jsx)("td",{"data-th":"DOB",className:"align-middle",children:a(i.date)})]},t.uuid)})):Object(d.jsx)(d.Fragment,{})})};a(25);var u=function(e){var t=e.headings,a=e.users,n=e.handleSort;return Object(d.jsx)("div",{className:"datatable mt-5",children:Object(d.jsxs)("table",{id:"table",className:"table table-striped table-hover table-condensed",children:[Object(d.jsx)("thead",{children:Object(d.jsx)("tr",{children:t.map((function(e){var t=e.name,a=e.width;return Object(d.jsxs)("th",{className:"col",style:{width:a},onClick:function(){n(t.toLowerCase())},children:[t,Object(d.jsx)("span",{className:"pointer"})]},t)}))})}),Object(d.jsx)(h,{users:a})]})})};a(26);var j=function(e){var t=e.handleSearchChange;return Object(d.jsx)("div",{className:"searchbox",children:Object(d.jsx)("form",{className:"form-inline",children:Object(d.jsx)("input",{className:"form-control",type:"search",placeholder:"Search","aria-label":"Search",onChange:function(e){return t(e)}})})})};a(27);var b=function(e){var t=e.handleSearchChange;return Object(d.jsx)("nav",{className:"navbar navbar-expand navbar-light bg-light",children:Object(d.jsx)("div",{className:"navbar-collapse row",id:"navbarNav",children:Object(d.jsx)(j,{handleSearchChange:t})})})},m=a(17),f=a.n(m),v=function(){return f.a.get("https://randomuser.me/api/?results=200&nat=us")},O=(a(46),function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={users:[{}],order:"descend",filteredUsers:[{}]},e.headings=[{name:"Image",width:"10%"},{name:"Name",width:"10%"},{name:"Phone",width:"20%"},{name:"Email",width:"20%"},{name:"DOB",width:"10%"}],e.handleSort=function(t){"descend"===e.state.order?e.setState({order:"ascend"}):e.setState({order:"descend"});var a=e.state.filteredUsers.sort((function(a,n){return"ascend"===e.state.order?void 0===a[t]?1:void 0===n[t]?-1:"name"===t?a[t].first.localeCompare(n[t].first):a[t]-n[t]:void 0===a[t]?1:void 0===n[t]?-1:"name"===t?n[t].first.localeCompare(a[t].first):n[t]-a[t]}));e.setState({filteredUsers:a})},e.handleSearchChange=function(t){console.log(t.target.value);var a=t.target.value,n=e.state.users.filter((function(e){return-1!==Object.values(e).join("").toLowerCase().indexOf(a.toLowerCase())}));e.setState({filteredUsers:n})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;v().then((function(t){e.setState({users:t.data.results,filteredUsers:t.data.results})}))}},{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(b,{handleSearchChange:this.handleSearchChange}),Object(d.jsx)("div",{className:"data-area",children:Object(d.jsx)(u,{headings:this.headings,users:this.state.filteredUsers,handleSort:this.handleSort})})]})}}]),a}(n.Component)),x=(a(47),function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(O,{})})}}]),a}(n.Component));a(48);var p=function(e){var t=e.children;return Object(d.jsx)("div",{className:"wrapper",children:t})},g=(a(49),function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)("h1",{children:"Employee Directory"}),Object(d.jsx)("p",{children:"Click on carrots to filter by heading or use the search box to narrow your results."})]})}}]),a}(n.Component));a(50);var w=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(p,{children:[Object(d.jsx)(g,{}),Object(d.jsx)(x,{})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(51);s.a.render(Object(d.jsx)(w,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[52,1,2]]]);
//# sourceMappingURL=main.d5e69391.chunk.js.map