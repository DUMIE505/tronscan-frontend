(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{1689:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAolBMVEUAAAD9/f3///////////////////////////////////////////////////////////////////////////////////////////////////////////////+1tbW9vb35+fn29vbz8/Pu7u7U1NTw8PDj4+PQ0NDCwsK/v7/IyMjX19fn5+fd3d3Gxsa6urrh4eHZ2dnKysrExMTp6enMzMwjnaLvAAAAHXRSTlMA/QjdudlbT0oQzu7mtYxy4JchHBflm4tx8bTLntSLMkcAAAH3SURBVEjHxZbZeoIwEEYbC2LdcN/aMSAgICri8v6v1khiGCSCeuN/443nOzMTsnx9Kj9GV9NbhLR0rWv8VP+/Vu8QQCFavVYOmGMoZGyWQI1vUOa78UjRh4fpK0WjXyhJc1QkBllR6uIG98SwBxXpDe/6aEJlmvl+JvBEJrnpwlNpoLLuWveiwHVUI8hKmwGKtd4sr9kfrAIzk5IxErh0eQvFKg9Y2jdNHQtksMranQK4pi4QjQOOFODEruP49LTjVWpifxCOxMsHob4skPD9Y4BAAiWwX+MxGCkyBR668iJRWnECXsJ/uymykMj9ADZCYK331Ic0nRTRJSLWMeSCyJNzD3Y28OgpMs8QHsJUUnBgArQ8rRQBhIhY1OZz95mAs2KspAxhgpMUrNwTRuZFxKa26EAUSo9nXJiusgSZIAqDhLG4/YUCiZNMcOECPOSuqjCLj1cKyBkvpaFEmGDPBLI40b6R+yypjZAt6n7Lut8S+Vmijz/2vayXWAqSMIykX8tvMedCb5vXoo4QHKUgt8Vq7Vs9u4C6Dl+XtAMsEBu5eFw4/lVFqCU7wDGLh5LY5/QS+2GY2MpDCR99WBUet6qj7+UD9u+NY/z1y+LdKwln1Cy/+N69Xt+/xLHIbBeBtlmreJBoigdJ9bNn2uHPns6UPXs+lH/GLsFEEcCdEQAAAABJRU5ErkJggg=="},3520:function(e,t,a){"use strict";a.r(t);var n=a(44),r=a.n(n),c=a(220),s=a(2),i=a.n(s),o=a(6),l=a(37),u=a(18),d=a(16),m=a(24),p=a(23),b=a(25),v=a(0),g=a.n(v),h=a(103),f=a(26),E=a(35),y=a(19),A=a(4),O=a(3398),j=a.n(O),N=a(15),w=a.n(N),x=a(3476),k=a.n(x),P=a(1932),S=a(75),C=a(11),M=a(3480),D=a.n(M),L=a(144),U=a.n(L);function B(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function R(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?B(a,!0).forEach(function(t){Object(l.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):B(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var G=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(m.a)(this,Object(p.a)(t).call(this))).scrollTo=function(e){e.preventDefault(),e.stopPropagation(),U()("html, body").animate({scrollTop:U()(U()(e.target).closest("a").attr("href")).offset().top-15},500)},e.renderSidebar=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.state,r=n.address,c=n.files,s=n.sections,i=a(1689);return g.a.createElement("div",{style:R({},t)},g.a.createElement("div",{className:"card font-weight-bold mb-2"},g.a.createElement("img",{className:"card-img-top",src:c.logo,onError:function(e){e.target.onerror=null,e.target.src=i}}),g.a.createElement(k.a,{items:s.map(function(e){return e.id}),className:"list-group list-group-flush",currentClassName:"is-current"},s.map(function(t){return g.a.createElement("a",{key:t.id,className:"list-group-item",href:"#"+t.id,onClick:e.scrollTo},t.name)}),g.a.createElement(f.d,{className:" list-group-item",url:r.representative.url},"Website"))),g.a.createElement(S.a,{className:"btn btn-secondary btn-block mb-2",to:"/sr/votes"},g.a.createElement("i",{className:"fa fa-arrow-left mr-2"}),Object(A.c)("go_to_votelist")))},e.state={loading:!0,body:null,address:null,files:null,sections:[]},e}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match;this.loadAddress(e.params.id)}},{key:"componentDidUpdate",value:function(e){var t=this.props.match;t.params.id!==e.match.params.id&&this.loadAddress(t.params.id),e.activeLanguage!==this.props.activeLanguage&&this.reloadPages()}},{key:"getAddress",value:function(){return this.props.match.params.id}},{key:"loadPage",value:function(){var e=Object(o.a)(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get(t);case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",{});case 9:case"end":return e.stop()}},e,null,[[0,6]])}));return function(t){return e.apply(this,arguments)}}()},{key:"loadPages",value:function(){var e=Object(o.a)(i.a.mark(function e(t){var a,n,r,s,o,l,u,d,m,p=arguments;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=p.length>1&&void 0!==p[1]?p[1]:"en",n="https://raw.githubusercontent.com/".concat(t,"/master"),"en"!==a&&(n+="/pages/".concat(a)),e.next=5,Promise.all([this.loadPage("".concat(n,"/INTRO.md")),this.loadPage("".concat(n,"/COMMUNITY_PLAN.md")),this.loadPage("".concat(n,"/TEAM.md")),this.loadPage("".concat(n,"/BUDGET_EXPENSES.md")),this.loadPage("".concat(n,"/SERVER_CONFIGURATION.md"))]);case 5:return r=e.sent,s=Object(c.a)(r,5),o=s[0].data,l=s[1].data,u=s[2].data,d=s[3].data,m=s[4].data,e.abrupt("return",{intro:o,communityPlan:l,team:u,budgetExpenses:d,serverConfiguration:m});case 13:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"loadGithubData",value:function(){var e=Object(o.a)(i.a.mark(function e(t){var a,n,s,o,l,u,d,m,p,b,v,h,f,E,y;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.activeLanguage,n="https://raw.githubusercontent.com/".concat(t,"/master"),e.next=4,this.loadPages(t);case 4:if(s=e.sent,"en"===a){e.next=10;break}return e.next=8,this.loadPages(t,a);case 8:for(o=e.sent,l=0,u=Object.entries(o);l<u.length;l++)d=u[l],m=Object(c.a)(d,2),p=m[0],b=m[1],""!==r()(b)&&(s[p]=b);case 10:v=s.intro,h=s.communityPlan,f=s.team,E=s.budgetExpenses,y=s.serverConfiguration,this.setState({url:n,files:{logo:n+"/logo.png",banner:n+"/banner.png"},sections:[{name:Object(A.c)("intro"),id:"intro",content:g.a.createElement(j.a,{source:v})},{name:Object(A.c)("team"),id:"team",content:g.a.createElement(j.a,{source:f})},{name:Object(A.c)("community_plan"),id:"community-plan",content:g.a.createElement(j.a,{source:h})},{name:Object(A.c)("server_configuration"),id:"server-configuration",content:g.a.createElement(j.a,{source:y})},{name:Object(A.c)("budget_expenses"),id:"budget-expenses",content:g.a.createElement(j.a,{source:E})}]});case 12:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"reloadPages",value:function(){var e=Object(o.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.getSuperRepresentative(this.getAddress());case 2:return t=e.sent,e.next=5,this.loadGithubData(t.data.githubLink);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"loadAddress",value:function(){var e=Object(o.a)(i.a.mark(function e(t){var a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0,body:null,address:null,files:null}),e.prev=1,e.next=4,y.a.getAddress(t);case 4:return a=e.sent,e.next=7,this.reloadPages();case 7:this.setState({loading:!1,address:a}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),this.setState({body:g.a.createElement("main",{className:"container header-overlap"},g.a.createElement("div",{className:"card text-center"},g.a.createElement("div",{className:"card-body"},g.a.createElement(C.a,{color:"warning"},Object(A.c)("unable_load_representatives_page_message"))),g.a.createElement("p",null,g.a.createElement(S.a,{to:"/sr/votes",className:"btn btn-primary"},"Go Back"))))});case 13:case"end":return e.stop()}},e,this,[[1,10]])}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.address,n=t.loading,r=t.files,c=t.sections,s=t.body;return s||(a?a.representative.enabled?g.a.createElement("main",{className:"container header-overlap representative-landing-page"},g.a.createElement(P.StickyContainer,{className:"row"},g.a.createElement("div",{className:"col-md-3"},g.a.createElement(D.a,{minWidth:768},g.a.createElement(P.Sticky,null,function(t){var a=t.style,n=t.isSticky;return e.renderSidebar(R({},a,{},n?{top:15}:{}))})),g.a.createElement(D.a,{maxWidth:768},this.renderSidebar())),g.a.createElement("div",{className:"col-md-9 representative-content"},n?g.a.createElement("div",{className:"card"},g.a.createElement(h.b,null,Object(A.c)("loading_representative")," ",a.address)):g.a.createElement(v.Fragment,null,g.a.createElement("div",{className:"card"},a.representative.enabled&&g.a.createElement("div",{className:"card-header text-center bg-info font-weight-bold text-white"},a.name||"Representative"),g.a.createElement("div",{className:"card-body text-center"},g.a.createElement("img",{src:r.banner,style:I.image}))),c.map(function(e){return g.a.createElement("div",{className:"card mt-3"},g.a.createElement("a",{id:e.id}),g.a.createElement("div",{className:"card-header bg-info text-center text-white font-weight-bold"},e.name),g.a.createElement("div",{className:"card-body"},e.content))}))))):g.a.createElement("main",{className:"container header-overlap"},g.a.createElement("div",{className:"card text-center"},g.a.createElement("div",{className:"card-body"},g.a.createElement(C.a,{color:"warning"},Object(A.c)("address_not_super_representative"))),g.a.createElement("p",null,g.a.createElement(S.a,{to:"/sr/votes",className:"btn btn-primary"},"Go Back")))):g.a.createElement("main",{className:"container header-overlap"},g.a.createElement("div",{className:"card text-center"},g.a.createElement(h.b,null,Object(A.c)("loading_representatives")))))}}]),t}(g.a.Component),I={image:{maxWidth:"100%",maxHeight:400}};t.default=Object(E.connect)(function(e){return{activeLanguage:e.app.activeLanguage}},{})(G)}}]);