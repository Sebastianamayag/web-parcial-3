(this.webpackJsonpparcial=this.webpackJsonpparcial||[]).push([[0],{44:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),o=n(23),r=n.n(o),c=n(19),s=n.n(c),d=n(24),l=n(29),p=n(57),j="https://webappinode.herokuapp.com/",g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n="".concat(j);return"GET"===t?fetch("".concat(n)):fetch("".concat(n),{method:t,headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})},f=n(2),h=Object(p.a)({media:{height:"20%",width:"100%",marginTop:0,backgroundColor:"#5EA4A6"}}),m=function(){var e=h();return Object(f.jsx)("img",{className:e.media,src:"https://webappinode.herokuapp.com/images/bg-header-desktop.svg",alt:"Logo"})},b=n(61),x=n(58),u=n(59),O=Object(p.a)({root:{minWidth:275,border:20,marginLeft:100,marginRight:80,marginTop:25,marginBottom:25,flexGrow:1},media:{height:"20%",width:"100%",marginTop:0,backgroundColor:"#5EA4A6"},logo:{height:"70%",width:"70%",marginLeft:"20%",marginTop:"10%"},company:{color:"#5EA4A6",fontFamily:["Spartan"," sans-serif"].join(","),fontSize:"15px",fontWeight:"bolder",marginLeft:"5px",marginRight:"10x"},position:{fontFamily:["Spartan","sans-serif"].join(","),fontSize:"20px",fontWeight:"bolder"},postedAt:{fontFamily:["Spartan","sans-serif"].join(","),fontSize:"15px",color:"#646464",margin:8},containerLanguage:{alignItems:"end"},language:{backgroundColor:"#D6EBED",fontFamily:["Spartan","sans-serif"].join(","),color:"#5EA4A6",fontWeight:"bolder",fontSize:"10px",margin:5,paddingLeft:15,paddingRight:15},new:{backgroundColor:"#5EA4A6",fontFamily:["Spartan","sans-serif"].join(","),color:"#FFFFFF",fontWeight:"bolder",fontSize:"10px",borderRadius:10,marginTop:15,marginLeft:10,padding:5,paddingLeft:15,paddingRight:15},feature:{backgroundColor:"#000000",fontFamily:["Spartan","sans-serif"].join(","),color:"#FFFFFF",fontWeight:"bolder",fontSize:"10px",borderRadius:10,marginTop:15,marginLeft:10,padding:5,paddingLeft:15,paddingRight:15}}),F=function(e){var t=e.data,n=O();return Object(f.jsx)(b.a,{className:n.root,variant:"elevation",children:Object(f.jsxs)(x.a,{container:!0,children:[Object(f.jsx)(x.a,{xs:2,children:Object(f.jsx)("img",{className:n.logo,alt:"img",src:t.logo})}),Object(f.jsx)(x.a,{xs:10,children:Object(f.jsxs)(u.a,{display:"flex",flexDirection:"row",children:[Object(f.jsxs)("div",{children:[Object(f.jsxs)(u.a,{display:"flex",flexDirection:"row",children:[Object(f.jsx)("p",{className:n.company,children:t.company}),!0===t.new&&Object(f.jsx)("div",{children:Object(f.jsx)("p",{className:n.new,children:"NEW!"})}),!0===t.featured&&Object(f.jsx)("div",{children:Object(f.jsx)("p",{className:n.feature,children:"FEATURE"})})]}),Object(f.jsx)("p",{className:n.position,children:t.position}),Object(f.jsxs)(u.a,{display:"flex",flexDirection:"row",children:[Object(f.jsx)("p",{className:n.postedAt,children:t.postedAt}),Object(f.jsx)("p",{className:n.postedAt,children:"\u2022"}),Object(f.jsx)("p",{className:n.postedAt,children:t.contract}),Object(f.jsx)("p",{className:n.postedAt,children:"\u2022"}),Object(f.jsx)("p",{className:n.postedAt,children:t.location})]})]}),Object(f.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",flex:1,marginRight:20},children:Object(f.jsx)(u.a,{display:"flex",flexDirection:"row",children:t.languages.map((function(e,t){return Object(f.jsx)("div",{className:n.language,children:Object(f.jsx)("p",{children:e})},t)}))})})]})})]})})},y=Object(p.a)({container:{backgroundColor:"#F0FAFB"}}),v=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],i=t[1],o=y();Object(a.useEffect)((function(){r().then((function(e){console.log(n)}))}),[]);var r=function(){var e=Object(d.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,i(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:o.container,children:[Object(f.jsx)(m,{}),Object(f.jsx)("div",{children:n.map((function(e,t){return console.log(e),Object(f.jsx)(F,{data:e},t)}))})]})};r.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(v,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.27a082bc.chunk.js.map