(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{1589:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(e instanceof HTMLElement)return e;return r.default.findDOMNode(e)};var a,r=(a=n(14))&&a.__esModule?a:{default:a}},1689:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAolBMVEUAAAD9/f3///////////////////////////////////////////////////////////////////////////////////////////////////////////////+1tbW9vb35+fn29vbz8/Pu7u7U1NTw8PDj4+PQ0NDCwsK/v7/IyMjX19fn5+fd3d3Gxsa6urrh4eHZ2dnKysrExMTp6enMzMwjnaLvAAAAHXRSTlMA/QjdudlbT0oQzu7mtYxy4JchHBflm4tx8bTLntSLMkcAAAH3SURBVEjHxZbZeoIwEEYbC2LdcN/aMSAgICri8v6v1khiGCSCeuN/443nOzMTsnx9Kj9GV9NbhLR0rWv8VP+/Vu8QQCFavVYOmGMoZGyWQI1vUOa78UjRh4fpK0WjXyhJc1QkBllR6uIG98SwBxXpDe/6aEJlmvl+JvBEJrnpwlNpoLLuWveiwHVUI8hKmwGKtd4sr9kfrAIzk5IxErh0eQvFKg9Y2jdNHQtksMranQK4pi4QjQOOFODEruP49LTjVWpifxCOxMsHob4skPD9Y4BAAiWwX+MxGCkyBR668iJRWnECXsJ/uymykMj9ADZCYK331Ic0nRTRJSLWMeSCyJNzD3Y28OgpMs8QHsJUUnBgArQ8rRQBhIhY1OZz95mAs2KspAxhgpMUrNwTRuZFxKa26EAUSo9nXJiusgSZIAqDhLG4/YUCiZNMcOECPOSuqjCLj1cKyBkvpaFEmGDPBLI40b6R+yypjZAt6n7Lut8S+Vmijz/2vayXWAqSMIykX8tvMedCb5vXoo4QHKUgt8Vq7Vs9u4C6Dl+XtAMsEBu5eFw4/lVFqCU7wDGLh5LY5/QS+2GY2MpDCR99WBUet6qj7+UD9u+NY/z1y+LdKwln1Cy/+N69Xt+/xLHIbBeBtlmreJBoigdJ9bNn2uHPns6UPXs+lH/GLsFEEcCdEQAAAABJRU5ErkJggg=="},1691:function(e,t,n){"use strict";n.d(t,"a",function(){return C});var a=n(723),r=n.n(a),o=n(17),i=n.n(o),l=n(95),s=n.n(l),c=n(219),u=n.n(c),p=n(2),m=n.n(p),d=n(37),f=n(6),h=n(18),b=n(16),g=n(24),y=n(23),v=n(25),w=n(0),E=n.n(w),x=n(4),k=n(19);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(n,!0).forEach(function(t){Object(d.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var C=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(g.a)(this,Object(y.a)(t).call(this,e))).loadDatas=Object(f.a)(m.a.mark(function e(){var t,a,r,o,i=arguments;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:1,a=i.length>1&&void 0!==i[1]?i[1]:40,r=n.state.filter,e.next=5,k.a.getTokens(_({sort:"rank",limit:a,start:(t-1)*a},r));case 5:return o=e.sent,e.abrupt("return",o);case 7:case"end":return e.stop()}},e)})),n.handleTableChange=function(e,t,a){var r=_({},n.state.pagination);r.current=e.current,n.setState({pagination:r}),n.fetch(_({pageSize:e.pageSize,page:e.current,sortField:a.field,sortOrder:a.order},t))},n.fetch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n.setState({loading:!0}),n.props.onPageChange?(n.props.onPageChange(e.page,e.pageSize),n.setState({loading:!1})):n.setState({loading:!1})},n.onInputChange=function(e){n.setState({searchText:e.target.value})},n.onReset=function(){n.setState({searchText:""},function(){n.onSearch()})},n.onSearch=function(){var e=n.props.tableData,t=n.state.searchText,a=new RegExp(t,"gi");n.setState({filterDropdownVisible:!1,filtered:!!t,data:e.map(function(e){return e.name.match(a)?_({},e,{name:E.a.createElement("span",null," ",e.name.split(new RegExp("(?<=".concat(t,")|(?=").concat(t,")"),"i")).map(function(e,n){return e.toLowerCase()===t.toLowerCase()?E.a.createElement("span",{key:n,className:"highlight"}," ",e," "):e})," ")}):null}).filter(function(e){return!!e})})},n.setColumn=function(e){function t(e){return function(t,n){return t[e]>n[e]?1:t[e]<n[e]?-1:0}}var a={filterDropdown:E.a.createElement("div",{className:"custom-filter-dropdown"},E.a.createElement(u.a,{ref:function(e){return n.searchInput=e},placeholder:"Search name",value:n.state.searchText,onChange:n.onInputChange,onPressEnter:n.onSearch})," ",E.a.createElement(s.a,{type:"primary",onClick:n.onSearch}," ",Object(x.c)("search")," ")," ",E.a.createElement(s.a,{className:"btn-secondary ml-1",onClick:n.onReset}," ",Object(x.c)("reset")," ")," "),filterIcon:E.a.createElement(i.a,{type:"filter",style:{color:n.state.filtered?"#108ee9":"#aaa"}}),filterDropdownVisible:n.state.filterDropdownVisible,onFilterDropdownVisibleChange:function(e){n.setState({filterDropdownVisible:e},function(){n.searchInput&&n.searchInput.focus()})}},r=[],o=!0,l=!1,c=void 0;try{for(var p,m=e[Symbol.iterator]();!(o=(p=m.next()).done);o=!0){var d=p.value;if(d.sorter&&!d.filterDropdown){var f={sorter:t(d.key)};r.push(_({},d,{},f))}else if(!d.sorter&&d.filterDropdown){var h=_({},a);r.push(_({},d,{},h))}else if(d.sorter&&d.filterDropdown){var b=_({sorter:t(d.key)},a);r.push(_({},d,{},b))}else r.push(d)}}catch(g){l=!0,c=g}finally{try{o||null==m.return||m.return()}finally{if(l)throw c}}return r},n.state={filterDropdownVisible:!1,data:[],searchText:"",filtered:!1,pagination:{showQuickJumper:!0,position:e.position||"both",showSizeChanger:!0,defaultPageSize:20,current:e.current||1},loading:!1},n}return Object(v.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e){var t=this.props.current,n=this.state.pagination;e.current!=t&&this.setState({pagination:_({},n,{current:t})})}},{key:"render",value:function(){var e=this.props,t=e.total,n=e.loading,a=e.data,o=e.column,i=e.bordered,l=e.pagination,s=void 0===l||l,c=e.scroll,u=e.Footer,p=e.locale,m=e.addr,d=e.transfers,f=(e.contractAddress,e.isPaddingTop,this.setColumn(o)),h=s?_({total:t},this.state.pagination):s;return E.a.createElement("div",null," ",m?E.a.createElement("div",{className:"card table_pos table_pos_addr "+(0==a.length?"table_pos_addr_data":"")+("address"==d?" transfer-mt-100":" transfer-pt-100")},E.a.createElement(r.a,{bordered:i,columns:f,rowKey:function(e,t){return t},dataSource:a,locale:p,scroll:c,footer:u,pagination:h,loading:n,onChange:this.handleTableChange})," "):E.a.createElement("div",{className:"card table_pos"},E.a.createElement(r.a,{bordered:i,columns:f,footer:u,rowKey:function(e,t){return t},dataSource:a,locale:p,scroll:c,pagination:h,loading:n,onChange:this.handleTableChange})," ")," ")}}]),t}(w.Component)},1724:function(e,t,n){"use strict";function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){"function"===typeof e?e(t):"object"===a(e)&&e&&"current"in e&&(e.current=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.fillRef=r,t.composeRef=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){t.forEach(function(t){r(t,e)})}},t.supportRef=function(e){if(e.type&&e.type.prototype&&!e.type.prototype.render)return!1;if("function"===typeof e&&!e.prototype.render)return!1;return!0}},1725:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.supportRef=function(e){return!(e.type&&e.type.prototype&&!e.type.prototype.render)}},297:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=[];return r.default.Children.forEach(e,function(e){t.push(e)}),t};var a,r=(a=n(0))&&a.__esModule?a:{default:a}},3510:function(e,t,n){"use strict";n.r(t);var a,r=n(295),o=n.n(r),i=n(44),l=n.n(i),s=n(2),c=n.n(s),u=n(6),p=n(18),m=n(16),d=n(24),f=n(23),h=n(25),b=n(0),g=n.n(b),y=n(35),v=n(432),w=n(12),E=n(55),x=n.n(E),k=n(4),O=n(19),_=n(434),C=n(26),j=n(97),S=n(1691),N=n(5),A=n(21),T=n(57),M=n(103),D=n(68),R=n(15),P=n.n(R),U=n(9),I=n.n(U),L=n(150),B=Object(L.a)(a=function(e){function t(e){var a;Object(p.a)(this,t),(a=Object(d.a)(this,Object(f.a)(t).call(this,e))).loadPage=Object(u.a)(c.a.mark(function e(){var t,n,r,o,i,l,s,u=arguments;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=u.length>0&&void 0!==u[0]?u[0]:1,n=u.length>1&&void 0!==u[1]?u[1]:20,r=a.state.filter,o=a.props.intl,a.setState({loading:!0}),!r.name){e.next=11;break}return e.next=8,P.a.get(N.e+"/api/token?sort=rank&limit="+n+"&start="+(t-1)*n+"&status=ico&name="+r.name);case 8:i=e.sent,e.next=14;break;case 11:return e.next=13,P.a.get(N.e+"/api/token?sort=rank&limit="+n+"&start="+(t-1)*n+"&status=ico&showAll=2");case 13:i=e.sent;case 14:return l=i.data.total,0===(s=i.data.data).length&&j.toastr.warning(o.formatMessage({id:"warning"}),o.formatMessage({id:"record_not_found"})),a.setState({loading:!1,tokens:s,total:l}),e.abrupt("return",l);case 19:case"end":return e.stop()}},e)})),a.setSearch=function(){var e=l()(Object(_.a)(a.props.location,"search"));e.length>0?a.setState({filter:{name:"".concat(e)}}):a.setState({filter:{}})},a.onChange=function(e,t){a.loadPage(e,t)},a.searchName=function(e){e.length>0?a.setState({filter:{name:"%25".concat(e,"%25")}}):"#/tokens/view"!==window.location.hash?window.location.hash="#/tokens/view":a.setState({filter:{}})},a.onBuyInputChange=function(e,t,n){var r=a.props.intl;e>n&&(e=n),e=e.replace(/^0|[^\d*]/g,""),a.setState({buyAmount:e}),a.buyAmount.value=e;var o=e*t;a.priceTRX.innerHTML=r.formatNumber(o,{maximumFractionDigits:6})+" TRX"},a.preBuyTokens=function(e){var t=a.state,n=(t.buyAmount,t.amount,a.props);n.currentWallet;n.wallet.isOpen?a.setState({alert:g.a.createElement(x.a,{showConfirm:!1,style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}},g.a.createElement("div",{className:"mt-5 token-sweet-alert",style:{textAlign:"left"}},g.a.createElement("a",{style:{float:"right",marginTop:"-45px"},onClick:function(){a.setState({alert:null})}},g.a.createElement("i",{className:"fa fa-times",ariaHidden:"true"})),g.a.createElement("h5",{style:{color:"black"}},Object(k.c)("buy_token_info")),0===e.remaining&&g.a.createElement("span",null," ",Object(k.c)("no_token_to_buy")),g.a.createElement("div",{className:"input-group mt-5"},g.a.createElement("input",{type:"number",ref:function(e){return a.buyAmount=e},className:"form-control",max:e.remaining,min:1,onKeyUp:function(e){e.target.value=e.target.value.replace(/^0|[^\d*]/g,"")},onChange:function(t){a.onBuyInputChange(t.target.value,e.trxNum/e.num*Math.pow(10,e.precision)/N.E,e.remaining)}})),g.a.createElement("div",{className:"text-center mt-3 text-muted"},g.a.createElement("b",null,"= ",g.a.createElement("span",{ref:function(e){return a.priceTRX=e}},"0 TRX"))),g.a.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){a.buyTokens(e)}},Object(k.c)("participate"))))}):a.setState({alert:g.a.createElement(x.a,{info:!0,showConfirm:!1,style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}},g.a.createElement("div",{className:"token-sweet-alert"},g.a.createElement("a",{className:"close",onClick:function(){a.setState({alert:null})}},g.a.createElement("i",{className:"fa fa-times",ariaHidden:"true"})),g.a.createElement("span",null,Object(k.c)("login_first")),g.a.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){a.setState({alert:null})}},Object(k.c)("OK"))))})},a.buyTokens=function(e){var t=e.trxNum/e.num*Math.pow(10,e.precision),n=a.state.buyAmount;if(!(n<=0)){var r=a.props,o=r.currentWallet,i=(r.wallet,n*(t/N.E));o.balance/N.E<i?a.setState({alert:g.a.createElement(x.a,{warning:!0,showConfirm:!1,style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}},g.a.createElement("div",{className:"mt-5 token-sweet-alert"},g.a.createElement("a",{style:{float:"right",marginTop:"-155px"},onClick:function(){a.setState({alert:null})}},g.a.createElement("i",{className:"fa fa-times",ariaHidden:"true"})),g.a.createElement("span",null,Object(k.c)("not_enough_trx_message")),g.a.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){a.setState({alert:null})}},Object(k.c)("confirm"))))}):a.setState({alert:g.a.createElement(x.a,{warning:!0,showConfirm:!1,style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}},g.a.createElement("div",{className:"mt-5 token-sweet-alert"},g.a.createElement("a",{style:{float:"right",marginTop:"-155px"},onClick:function(){a.setState({alert:null})}},g.a.createElement("i",{className:"fa fa-times",ariaHidden:"true"})),g.a.createElement("p",{className:"ml-auto buy_confirm_message"},Object(k.c)("buy_confirm_message_1")),g.a.createElement("span",null,n," ",e.name," ",Object(k.b)("for")," ",parseFloat((n*(t/N.E)).toFixed(6))," TRX?"),g.a.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){a.confirmTransaction(e)}},Object(k.c)("confirm"))))})}},a.submit=function(){var e=Object(u.a)(c.a.mark(function e(t){var n,r,o,i,l,s,u,p,m,d,f,h,b,g,y;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.trxNum/t.num*Math.pow(10,t.precision),r=a.props,o=r.account,i=r.currentWallet,l=a.state.buyAmount,!I.a.get("islogin")&&"ACCOUNT_LEDGER"!==a.props.walletType.type&&"ACCOUNT_TRONLINK"!==a.props.walletType.type){e.next=32;break}if(u=a.props.tronWeb(),p=a.props.account.tronWeb,e.prev=6,"ACCOUNT_LEDGER"!==a.props.walletType.type){e.next=16;break}return e.next=10,u.transactionBuilder.purchaseToken(t.ownerAddress,t.id+"",parseInt((l*n).toFixed(0)),a.props.walletType.address);case 10:return m=e.sent,e.next=13,Object(D.c)(m,u);case 13:d=e.sent,f=d.result,s=f;case 16:if("ACCOUNT_TRONLINK"!==a.props.walletType.type){e.next=25;break}return e.next=19,p.transactionBuilder.purchaseToken(t.ownerAddress,t.id+"",parseInt((l*n).toFixed(0)),p.defaultAddress.hex).catch(function(e){return!1});case 19:return h=e.sent,e.next=22,Object(D.c)(h,p);case 22:b=e.sent,g=b.result,s=g;case 25:e.next=30;break;case 27:e.prev=27,e.t0=e.catch(6),console.log(e.t0);case 30:e.next=36;break;case 32:return e.next=34,O.a.participateAsset(i.address,t.ownerAddress,t.id+"",parseInt((l*n).toFixed(0)))(o.key);case 34:y=e.sent,s=y.success;case 36:if(!s){e.next=42;break}return a.setState({activeToken:null,confirmedParticipate:!0,participateSuccess:s,buyAmount:0}),a.props.reloadWallet(),e.abrupt("return",!0);case 42:return e.abrupt("return",!1);case 43:case"end":return e.stop()}},e,null,[[6,27]])}));return function(t){return e.apply(this,arguments)}}(),a.confirmTransaction=function(){var e=Object(u.a)(c.a.mark(function e(t){var n,r,o;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.props,r=n.account,o=n.intl,a.state.buyAmount,a.setState({alert:g.a.createElement(x.a,{showConfirm:!1,showCancel:!1,cancelBtnBsStyle:"default",title:o.formatMessage({id:"transferring"}),style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}})}),window.gtag("event","participate",{event_category:"Token10",event_label:t.name,referrer:window.location.origin,value:r.address}),e.next=6,a.submit(t);case 6:if(!e.sent){e.next=10;break}a.setState({alert:g.a.createElement(x.a,{success:!0,showConfirm:!1,style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}},g.a.createElement("div",{className:"mt-5 token-sweet-alert"},g.a.createElement("a",{style:{float:"right",marginTop:"-155px"},onClick:function(){a.setState({alert:null})}},g.a.createElement("i",{className:"fa fa-times",ariaHidden:"true"})),g.a.createElement("h5",{style:{color:"black"}},Object(k.c)("transaction")," ",Object(k.c)("confirm")),g.a.createElement("span",null,Object(k.c)("success_receive")," ",t.name," ",Object(k.c)("tokens")),g.a.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){a.setState({alert:null})}},Object(k.c)("OK"))))}),e.next=11;break;case 10:a.setState({alert:g.a.createElement(x.a,{danger:!0,title:"Error",onConfirm:function(){return a.setState({alert:null})}},Object(k.c)("fail_transaction"))});case 11:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.customizedColumn=function(){var e=a.props.intl,t=n(1689);return[{title:"#",dataIndex:"index",key:"index",align:"center",className:"ant_table _text_nowrap"},{title:o()(e.formatMessage({id:"token"})),dataIndex:"name",key:"name",width:"40%",render:function(e,n,a){return g.a.createElement("div",{className:"table-imgtext"},n.imgUrl?g.a.createElement("div",{style:{width:"42px",height:"42px",marginRight:"18px"}},1002e3==n.id?g.a.createElement("div",{className:"token-img-top"},g.a.createElement("img",{style:{width:"42px",height:"42px"},src:n.imgUrl,onError:function(e){e.target.onerror=null,e.target.src=t}}),g.a.createElement("i",null)):g.a.createElement("img",{style:{width:"42px",height:"42px"},src:n.imgUrl,onError:function(e){e.target.onerror=null,e.target.src=t}})):g.a.createElement("div",{style:{width:"42px",height:"42px",marginRight:"18px"}},g.a.createElement("img",{style:{width:"42px",height:"42px"},src:t})),g.a.createElement("div",null,g.a.createElement("h5",null,g.a.createElement(C.f,{name:n.name,id:n.id,namePlus:n.name+" ("+n.abbr+")",address:n.ownerAddress})),g.a.createElement("p",{style:{wordBreak:"break-all"}},n.description)))}},{title:"ID",render:function(e,t,n){return g.a.createElement("div",null,t.id)},align:"center",className:"ant_table d-none d-md-table-cell _text_nowrap"},{title:e.formatMessage({id:"fund_raised"}),render:function(e,t,n){return g.a.createElement("div",null,g.a.createElement(w.c,{value:t.participated/N.E,maximumFractionDigits:1})," ","TRX")},align:"center",className:"ant_table d-none d-md-table-cell _text_nowrap"},{title:e.formatMessage({id:"issue_progress"}),dataIndex:"issuedPercentage",key:"issuedPercentage",render:function(e,t,n){return null===e&&(e=0),g.a.createElement("div",null,g.a.createElement(w.c,{value:e,maximumFractionDigits:1}),"%")},align:"center",className:"ant_table d-none d-sm-table-cell _text_nowrap"},{title:e.formatMessage({id:"end_time"}),dataIndex:"endTime",key:"endTime",align:"center",className:"ant_table _text_nowrap",render:function(e,t,n){return g.a.createElement("div",null,g.a.createElement(w.d,{value:t.endTime,units:"day"}))}},{title:e.formatMessage({id:"issuing_price"}),render:function(e,t,n){return g.a.createElement("div",null,g.a.createElement(w.c,{value:t.trxNum/t.num*Math.pow(10,t.precision)/N.E,maximumFractionDigits:6})," ","TRX")},align:"center",className:"ant_table"},{title:e.formatMessage({id:"participate"}),align:"center",render:function(e,t,n){return t.isBlack?g.a.createElement("button",{className:"btn btn-secondary btn-block btn-sm",disabled:!0},Object(k.c)("participate")):t.endTime<new Date||100===t.issuedPercentage?g.a.createElement("span",{style:{fontWeight:"normal"}},Object(k.c)("finish")):t.startTime>new Date?g.a.createElement("span",{style:{fontWeight:"normal"}},Object(k.c)("not_started")):g.a.createElement("button",{className:"btn btn-default btn-block btn-sm",onClick:function(){return a.preBuyTokens(t)}},Object(k.c)("participate"))},className:"ant_table"}]},a.state={tokens:[],buyAmount:0,loading:!1,total:0,amount:"",filter:{}};var r=l()(Object(_.a)(e.location,"search"));return r.length>0&&(a.state.filter.name="".concat(r)),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.loadPage()}},{key:"componentDidUpdate",value:function(e,t){this.props.location!==e.location&&this.setSearch(),this.state.filter!==t.filter&&(console.log("SEARCH CHANGED!"),this.loadPage())}},{key:"render",value:function(){var e=this,t=this.state,n=t.tokens,a=t.alert,r=t.loading,o=t.total,i=this.props,l=(i.match,i.intl),s=this.customizedColumn(),c=l.formatMessage({id:"view_total"})+" "+(o-1)+" "+l.formatMessage({id:"view_pass"});return g.a.createElement("main",{className:"container header-overlap token_black"},a,r&&g.a.createElement("div",{className:"loading-style"},g.a.createElement(M.b,null)),g.a.createElement("div",{className:"row"},g.a.createElement("div",{className:"col-md-12 table_pos"},o?g.a.createElement("div",{className:"table_pos_info d-none d-md-block",style:{left:"auto"}},c):"",g.a.createElement(S.a,{bordered:!0,loading:r,column:s,data:n,total:o,rowClassName:"table-row",onPageChange:function(t,n){e.loadPage(t,n)}}))))}}]),t}(b.Component))||a;var z={loadTokens:v.b,login:A.v,reloadWallet:T.c};t.default=Object(y.connect)(function(e){return{account:e.app.account,walletType:e.app.wallet,tokens:e.tokens.tokens,wallet:e.wallet,currentWallet:e.wallet.current}},z)(Object(w.h)(B))},431:function(e,t,n){"use strict";function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function o(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=s(n(0)),p=c(n(1589)),m=c(n(297)),d=c(n(727)),f=n(1724),h=c(n(428)),b=n(1725),g=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=o(this,i(t).apply(this,arguments))).resizeObserver=null,e.childNode=null,e.currentElement=null,e.state={width:0,height:0},e.onResize=function(t){var n=e.props.onResize,a=t[0].target.getBoundingClientRect(),r=a.width,o=a.height,i=Math.floor(r),l=Math.floor(o);if(e.state.width!==i||e.state.height!==l){var s={width:i,height:l};e.setState(s),n&&n(s)}},e.setChildNode=function(t){e.childNode=t},e}var n,a,s;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,u.Component),n=t,(a=[{key:"componentDidMount",value:function(){this.onComponentUpdated()}},{key:"componentDidUpdate",value:function(){this.onComponentUpdated()}},{key:"componentWillUnmount",value:function(){this.destroyObserver()}},{key:"onComponentUpdated",value:function(){if(this.props.disabled)this.destroyObserver();else{var e=p.default(this.childNode||this);e!==this.currentElement&&(this.destroyObserver(),this.currentElement=e),!this.resizeObserver&&e&&(this.resizeObserver=new h.default(this.onResize),this.resizeObserver.observe(e))}}},{key:"destroyObserver",value:function(){this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null)}},{key:"render",value:function(){var e=this.props.children,t=m.default(e);if(t.length>1)d.default(!1,"Find more than one child node with `children` in ResizeObserver. Will only observe first one.");else if(0===t.length)return d.default(!1,"`children` of ResizeObserver is empty. Nothing is in observe."),null;var n=t[0];if(u.isValidElement(n)&&b.supportRef(n)){var a=n.ref;t[0]=u.cloneElement(n,{ref:f.composeRef(a,this.setChildNode)})}return 1===t.length?t[0]:t.map(function(e,t){return!u.isValidElement(e)||"key"in e&&null!==e.key?e:u.cloneElement(e,{key:"".concat("rc-observer-key","-").concat(t)})})}}])&&r(n.prototype,a),s&&r(n,s),t}();g.displayName="ResizeObserver",t.default=g}}]);