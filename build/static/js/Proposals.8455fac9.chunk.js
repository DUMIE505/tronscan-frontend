(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{2066:function(e,a,t){(function(e){!function(e){"use strict";e.exports.is_uri=t,e.exports.is_http_uri=l,e.exports.is_https_uri=n,e.exports.is_web_uri=r,e.exports.isUri=t,e.exports.isHttpUri=l,e.exports.isHttpsUri=n,e.exports.isWebUri=r;var a=function(e){return e.match(/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/)};function t(e){if(e&&!/[^a-z0-9\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=\.\-\_\~\%]/i.test(e)&&!/%[^0-9a-f]/i.test(e)&&!/%[0-9a-f](:?[^0-9a-f]|$)/i.test(e)){var t,l,n,r,o,s="",p="";if(s=(t=a(e))[1],l=t[2],n=t[3],r=t[4],o=t[5],s&&s.length&&n.length>=0){if(l&&l.length){if(0!==n.length&&!/^\//.test(n))return}else if(/^\/\//.test(n))return;if(/^[a-z][a-z0-9\+\-\.]*$/.test(s.toLowerCase()))return p+=s+":",l&&l.length&&(p+="//"+l),p+=n,r&&r.length&&(p+="?"+r),o&&o.length&&(p+="#"+o),p}}}function l(e,l){if(t(e)){var n,r,o,s,p="",c="",i="",u="";if(p=(n=a(e))[1],c=n[2],r=n[3],o=n[4],s=n[5],p){if(l){if("https"!=p.toLowerCase())return}else if("http"!=p.toLowerCase())return;if(c)return/:(\d+)$/.test(c)&&(i=c.match(/:(\d+)$/)[0],c=c.replace(/:\d+$/,"")),u+=p+":",u+="//"+c,i&&(u+=i),u+=r,o&&o.length&&(u+="?"+o),s&&s.length&&(u+="#"+s),u}}}function n(e){return l(e,!0)}function r(e){return l(e)||n(e)}}(e)}).call(this,t(126)(e))},2475:function(e,a,t){"use strict";var l=t(2),n=t.n(l),r=t(6),o=t(18),s=t(16),p=t(24),c=t(23),i=t(25),u=t(0),m=t.n(u),d=t(35),g=t(4),E=t(19),f=t(11),_=t(55),v=t.n(_),h=t(5),y=t(12),b=t(68),M=t(2066).isWebUri,O=function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(p.a)(this,Object(c.a)(a).call(this))).isValid=function(){return e.state.check&&e.isValidUrl()},e.isValidUrl=function(){var a=e.state.url;return a.length>0&&M(a)},e.doApply=Object(r.a)(n.a.mark(function a(){var t,l,r,o,s,p,c,i,u,d,f,_,y,M,O,w,j;return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(l=e.props,r=l.account,o=l.isTronLink,s=e.state.url,e.setState({loading:!0}),!h.v){a.next=23;break}if(1!==o){a.next=16;break}return"ACCOUNT_LEDGER"===e.props.walletType.type?p=e.props.tronWeb():"ACCOUNT_TRONLINK"===e.props.walletType.type&&(p=r.tronWeb),a.next=8,p.transactionBuilder.applyForSR(p.defaultAddress.hex,s);case 8:return c=a.sent,a.next=11,Object(b.c)(c,p);case 11:i=a.sent,u=i.result,t=u,a.next=21;break;case 16:return a.next=18,E.a.applyForDelegate(r.address,s)(r.key);case 18:d=a.sent,f=d.success,t=f;case 21:a.next=42;break;case 23:if(1!==o){a.next=34;break}return a.next=26,r.sunWeb.sidechain.transactionBuilder.applyForSR(r.sunWeb.sidechain.defaultAddress.hex,s).catch(function(e){return console.log(e)});case 26:return _=a.sent,a.next=29,Object(b.e)(_,r.sunWeb);case 29:y=a.sent,M=y.result,t=M,a.next=42;break;case 34:return a.next=36,r.sunWeb.sidechain.transactionBuilder.applyForSR(r.sunWeb.sidechain.defaultAddress.hex,s).catch(function(e){return console.log(e)});case 36:return O=a.sent,a.next=39,Object(b.e)(O,r.sunWeb);case 39:w=a.sent,j=w.result,t=j;case 42:e.setState({loading:!1}),t?e.confirm():e.setState({modal:m.a.createElement(v.a,{warning:!0,title:Object(g.c)("error"),onConfirm:e.hideModal},Object(g.c)("apply_representative_error_message_0")," ",m.a.createElement("br",null),Object(g.c)("apply_representative_error_message_1"))});case 44:case"end":return a.stop()}},a)})),e.hideModal=function(){e.setState({modal:null})},e.confirm=function(){var a=e.props.onConfirm;a&&a()},e.cancel=function(){var a=e.props.onCancel;a&&a()},e.state={url:"",check:!1,applyResponse:null,loading:!1,modal:null},e}return Object(i.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.check,l=a.loading,n=a.modal,r=a.url,o=this.props.intl;return n||m.a.createElement(f.c,{isOpen:!0,toggle:this.cancel,fade:!1,size:"lg",className:"modal-dialog-centered apply-super-modal"},m.a.createElement(f.f,{className:"text-center _applyHeader",toggle:this.cancel},Object(g.c)("Super Representatives")),m.a.createElement(f.d,null,m.a.createElement("p",{className:"body-text text-left"},Object(g.b)("proposal_apply_super_desc")),m.a.createElement("hr",null),m.a.createElement("p",{className:"text-left"},m.a.createElement("label",{className:"_applyTitle"},Object(g.c)("proposal_apply_super_input_website")),m.a.createElement("input",{className:"form-control text-left "+(t&&!this.isValidUrl()?" is-invalid":""),type:"text",placeholder:o.formatMessage({id:"proposal_apply_super_input_website_ph"}),style:{borderRadius:"0px",background:"#F3F3F3",border:"1px solid #EEEEEE "},value:r,onChange:function(a){return e.setState({url:a.target.value})}}),m.a.createElement("div",{className:"invalid-feedback text-left text-danger"},Object(g.c)("invalid_url"))),m.a.createElement("div",{className:"text-center"},m.a.createElement("div",{className:"form-check"},m.a.createElement("label",{className:"form-check-label _apply"},m.a.createElement("input",{type:"checkbox",style:{verticalAlign:"1px",marginRight:"9px"},checked:t,onChange:function(a){return e.setState({check:a.target.checked})}}),Object(g.c)("understand_tron_sr_message_0"),m.a.createElement(y.c,{value:h.V}),"TRX",Object(g.b)("understand_tron_sr_message_1")))),m.a.createElement("div",{className:"pt-3"},m.a.createElement("p",{className:"text-center"},m.a.createElement("button",{disabled:!this.isValid()||l,className:"btn btn-success",style:{width:"220px",background:"#69C265",fontSize:"14px"},onClick:this.doApply},Object(g.c)("submit"))))))}}]),a}(u.Component);a.a=Object(d.connect)(function(e){return{account:e.app.account,walletType:e.app.wallet}},{})(Object(y.h)(O))},3529:function(e,a,t){"use strict";t.r(a);var l=t(723),n=t.n(l),r=t(295),o=t.n(r),s=t(2),p=t.n(s),c=t(6),i=t(37),u=t(18),m=t(16),d=t(24),g=t(23),E=t(25),f=t(0),_=t.n(f),v=t(35),h=t(4),y=t(19),b=t(75),M=t(1610),O=t(12),w=t(103),j=t(26),x=t(296),T=t(5),S=t(55),k=t.n(S),C=t(11),A=t(2475),N=t(9),V=t.n(N),K=t(68);function P(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,l)}return t}function R(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?P(t,!0).forEach(function(a){Object(i.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var F=function(e){function a(){var e;return Object(u.a)(this,a),(e=Object(d.a)(this,Object(g.a)(a).call(this))).onChange=function(a,t){e.load(a,t)},e.handleTableChange=function(a,t,l){var n=R({},e.state.pagination);n.current=a.current,n.pageSize=a.pageSize,e.setState({pagination:n,page:n.current,pageSize:n.pageSize},function(){e.load(n.current,n.pageSize),clearInterval(e.state.timer);var a=setInterval(function(){e.load(n.current,n.pageSize,1)},1e4);e.setState({timer:a})})},e.load=Object(c.a)(p.a.mark(function a(){var t,l,n,r,o,s,c,i,u,m,d,g,E,f,_=arguments;return p.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=_.length>0&&void 0!==_[0]?_[0]:1,l=_.length>1&&void 0!==_[1]?_[1]:20,n=_.length>2?_[2]:void 0,e.setState({loading:!n}),r=e.props.account,a.next=7,y.a.getProposalList({sort:"-number",limit:l,start:(t-1)*l,address:r.address||""});case 7:if(o=a.sent,s=o.proposal,c=o.total,i=["getMaintenanceTimeInterval","getAccountUpgradeCost","getCreateAccountFee","getTransactionFee","getAssetIssueFee","getWitnessPayPerBlock","getWitnessStandbyAllowance","getCreateNewAccountFeeInSystemContract","getCreateNewAccountBandwidthRate","getAllowCreationOfContracts","getRemoveThePowerOfTheGr","getEnergyFee","getExchangeCreateFee","getMaxCpuTimeOfOneTx","getAllowUpdateAccountName","getAllowSameTokenName","getAllowDelegateResource","getTotalEnergyLimit","getAllowTvmTransferTrc10","getTotalEnergyLimitNew","getAllowMultiSign","getAllowAdaptiveEnergy","getUpdateAccountPermissionFee","getMultiSignFee","getAllowProtoFilterNum","","getAllowTvmConstantinople","getAllowShieldedTransaction","getShieldedTransactionFee","getAdaptiveResourceLimitMultiplier","getChangeDelegation","getWitness127PayPerBlock","getAllowTvmSolidity059","getAdaptiveResourceLimitTargetRatio","getShieldedTransactionCreateAccountFee","getForbidTransferToContract"],u=[{id:"1000000",key:"getChargingSwitch"},{id:"1000001",key:"getSideChainGateWayList"},{id:"1000003",key:"getProposalExpireTime"},{id:"1000004",key:"getVoteWitnessSwitch"},{id:"1000007",key:"getFundInjectAddress"},{id:"1000008",key:"getFundDistributeEnableSwitch"},{id:"1000009",key:"getDayToSustainByFund"},{id:"1000010",key:"getPercentToPayWitness"},{id:"1000012",key:"getUpdateGateway_v1_0_2"}],T.v)for(m in s)for(d in s[m].paramters)s[m].paramters[d].proposalKey=i[s[m].paramters[d].key],s[m].paramters[d].proposalVal=s[m].paramters[d].value;else for(g in s)for(E in s[g].paramters)for(f in u)u[f].id==s[g].paramters[E].key&&(s[g].paramters[E].proposalKey=u[f].key,s[g].paramters[E].proposalVal=s[g].paramters[E].value);e.setState({loading:!1,dataSource:s,total:c,page:t,pagination:R({},e.state.pagination,{total:c})});case 14:case"end":return a.stop()}},a)})),e.isLoggedIn=function(a){var t=e.props,l=t.account,n=t.intl;return l.isLoggedIn||1!=a&&e.setState({modal:_.a.createElement(k.a,{warning:!0,title:Object(h.c)("proposal_not_sign_in"),confirmBtnText:n.formatMessage({id:"confirm"}),confirmBtnBsStyle:"danger",onConfirm:function(){return e.setState({modal:null})},style:{marginLeft:"-240px",marginTop:"-195px"}})}),l.isLoggedIn},e.hideModal=function(){e.setState({modal:null,balanceTip:!1,isAction:!1})},e.applySuperModal=function(){e.props.intl;var a=e.state.balanceTip;e.setState({modal:_.a.createElement(C.c,{isOpen:!0,toggle:e.hideModal,className:"committee-modal modal-dialog-centered",style:{width:"460px"}},_.a.createElement(C.f,{toggle:e.hideModal,className:""}),_.a.createElement(C.d,null,_.a.createElement("div",{style:{color:"#333",padding:"10px 0 50px",fontSize:"16px",textAlign:"center"}},Object(h.c)("proposal_apply_super")),_.a.createElement("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}},_.a.createElement("div",{className:a?"balance-tip show":"balance-tip"},Object(h.c)("proposal_balance_not_enough")),_.a.createElement("div",{style:{width:"220px",height:"38px",lineHeight:"38px",textAlign:"center",background:"#69C265",color:"#fff",cursor:"pointer"},onClick:function(){e.showApplyForDelegate()}},Object(h.c)("proposal_apply_super_btn"))))),balanceTip:!1})},e.applyForDelegate=function(){var a=e.state.privateKey;e.setState({modal:_.a.createElement(A.a,{isTronLink:e.state.isTronLink,privateKey:a,onCancel:e.hideModal,onConfirm:function(){e.setState({modal:_.a.createElement(k.a,{success:!0,timeout:"3000",onConfirm:e.hideModal},Object(h.c)("proposal_apply_super_success"))})}})})},e.state={dataSource:[],total:0,loading:!1,pagination:{showQuickJumper:!0,position:"bottom",showSizeChanger:!0,defaultPageSize:20,total:0},modal:null,isTronLink:0,balanceTip:!1,isAction:!1,timer:null,page:1,pageSize:20},e}return Object(E.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this,a=this.props,t=a.account;a.currentWallet;if(t.isLoggedIn){var l=setInterval(function(){e.load(1,20,1)},1e4);this.setState({isTronLink:V.a.get("islogin"),timer:l})}this.load()}},{key:"componentDidUpdate",value:function(e){var a=this,t=this.props.account,l=this.state,n=l.page,r=l.pageSize;if(e.account.address!=t.address){clearInterval(this.state.timer),this.load(n,r,1);var o=setInterval(function(){a.load(n,r,1)},1e4);this.setState({isTronLink:V.a.get("islogin"),timer:o})}}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.timer)}},{key:"getColumns",value:function(){var e=this,a=this.props,t=a.account,l=a.intl;this.state.dataSource;return[{title:o()(l.formatMessage({id:"proposal_serial"})),dataIndex:"index",key:"index",className:"position-relative",render:function(e,a,t){return _.a.createElement("div",{style:{fontFamily:"HelveticaNeue-Medium"}},a.createSelf?_.a.createElement("div",{className:"mine-flag"},Object(h.c)("proposal_my")):"","#"+a.proposalId)}},{title:o()(l.formatMessage({id:"proposal_content_info"})),dataIndex:"proposalVal",key:"proposalVal",width:"40%",render:function(e,a,t){return _.a.createElement("div",{style:{fontFamily:"HelveticaNeue-Medium"}},a.paramters.map(function(e,a){return _.a.createElement("div",{key:a},T.v?_.a.createElement("div",null,"getMaintenanceTimeInterval"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_1"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal/36e5)," \xa0",_.a.createElement("span",null,l.formatMessage({id:"propose_hour"}))),"getAccountUpgradeCost"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_2"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal/T.E)," \xa0",_.a.createElement("span",null,"TRX")),"getCreateAccountFee"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_3"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal/T.E)," \xa0",_.a.createElement("span",null,"TRX")),"getTransactionFee"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_4"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal)," \xa0",_.a.createElement("span",null,"Sun/byte")),"getAssetIssueFee"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_5"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal/T.E)," \xa0",_.a.createElement("span",null,"TRX")),"getWitnessPayPerBlock"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_6"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal/T.E)," \xa0",_.a.createElement("span",null,"TRX"))),"getWitnessStandbyAllowance"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_7"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal/T.E)," \xa0",_.a.createElement("span",null,"TRX")),"getCreateNewAccountFeeInSystemContract"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_8"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal/T.E)," \xa0",_.a.createElement("span",null,"TRX")),"getCreateNewAccountBandwidthRate"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_9"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal)," \xa0",_.a.createElement("span",null,"bandwith/byte")),"getAllowCreationOfContracts"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_10"})),_.a.createElement("span",null,Object(h.c)("propose_activate"))),"getRemoveThePowerOfTheGr"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_11"}))),"getEnergyFee"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_12"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal/T.E," TRX")),"getExchangeCreateFee"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_13"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal/T.E," TRX")),"getMaxCpuTimeOfOneTx"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_14"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal," ms")),"getAllowUpdateAccountName"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_15"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?_.a.createElement("span",null,Object(h.c)("propose_allowed")):_.a.createElement("span",null,Object(h.c)("propose_not_allowed"))),"getAllowSameTokenName"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_16"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?_.a.createElement("span",null,Object(h.c)("propose_allowed")):_.a.createElement("span",null,Object(h.c)("propose_not_allowed"))),"getAllowDelegateResource"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_17"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?_.a.createElement("span",null,Object(h.c)("propose_allowed")):_.a.createElement("span",null,Object(h.c)("propose_not_allowed"))),"getTotalEnergyLimit"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_18"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal)),"getAllowTvmTransferTrc10"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_19"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?_.a.createElement("span",null,Object(h.c)("propose_allowed")):_.a.createElement("span",null,Object(h.c)("propose_not_allowed"))),"getTotalEnergyLimitNew"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_18_1"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal," ENERGY")),"getTotalEnergyCurrentLimit"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_20"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal," ENERGY")),"getAllowMultiSign"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_21"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?_.a.createElement("span",null,Object(h.c)("propose_allowed")):_.a.createElement("span",null,Object(h.c)("propose_not_allowed"))),"getAllowAdaptiveEnergy"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_22"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?_.a.createElement("span",null,Object(h.c)("propose_allowed")):_.a.createElement("span",null,Object(h.c)("propose_not_allowed"))),"getTotalEnergyTargetLimit"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_23"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal),"/",_.a.createElement("span",null,Object(h.c)("propose_minute"))),"getTotalEnergyAverageUsage"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_24"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?_.a.createElement("span",null,_.a.createElement("span",null,e.proposalVal),"/",_.a.createElement("span",null,Object(h.c)("propose_minute"))):_.a.createElement("span",null,Object(h.c)("propose_unactivate"))),"getUpdateAccountPermissionFee"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_25"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal/T.E)," \xa0",_.a.createElement("span",null,"TRX")),"getMultiSignFee"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_26"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal/T.E)," \xa0",_.a.createElement("span",null,"TRX")),"getAllowProtoFilterNum"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_27"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?_.a.createElement("span",null,Object(h.c)("propose_activate")):_.a.createElement("span",null,Object(h.c)("propose_unactivate"))),"getAllowTvmConstantinople"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_28"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?_.a.createElement("span",null,Object(h.c)("propose_allowed")):_.a.createElement("span",null,Object(h.c)("propose_not_allowed"))),"getAllowShieldedTransaction"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_29"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?_.a.createElement("span",null,Object(h.c)("propose_allowed")):_.a.createElement("span",null,Object(h.c)("propose_not_allowed"))),"getShieldedTransactionFee"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_28_1"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal/T.E)," \xa0",_.a.createElement("span",null,"TRX")),"getAdaptiveResourceLimitMultiplier"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_29_1"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal)),"getChangeDelegation"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_30"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?_.a.createElement("span",null,Object(h.c)("propose_activate")):_.a.createElement("span",null,Object(h.c)("propose_unactivate"))),"getWitness127PayPerBlock"==e.proposalKey&&_.a.createElement("div",{className:"mt-1"},_.a.createElement("span",null,l.formatMessage({id:"propose_31"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal/T.E)," \xa0",_.a.createElement("span",null,"TRX")),"getAllowTvmSolidity059"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_32"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?_.a.createElement("span",null,Object(h.c)("propose_allowed")):_.a.createElement("span",null,Object(h.c)("propose_not_allowed"))),"getAdaptiveResourceLimitTargetRatio"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_33"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal)),"getShieldedTransactionCreateAccountFee"==e.proposalKey&&_.a.createElement("div",{className:"mt-1"},_.a.createElement("span",null,l.formatMessage({id:"propose_34"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal/T.E)," \xa0",_.a.createElement("span",null,"TRX")),"getForbidTransferToContract"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"propose_35"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?_.a.createElement("span",null,Object(h.c)("propose_prohibit")):_.a.createElement("span",null,Object(h.c)("propose_not_prohibit")))):_.a.createElement("div",null,"getChargingSwitch"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"sun_propose_1"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),"0"!=e.proposalVal?_.a.createElement("span",null,Object(h.c)("propose_activate")):_.a.createElement("span",null,Object(h.c)("propose_unactivate"))),"getSideChainGateWayList"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"sun_propose_2"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal)),"getProposalExpireTime"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"sun_propose_3"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal)),"getVoteWitnessSwitch"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"sun_propose_4"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),"0"!=e.proposalVal?_.a.createElement("span",null,Object(h.c)("propose_activate")):_.a.createElement("span",null,Object(h.c)("propose_unactivate"))),"getFundInjectAddress"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"sun_propose_5"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal)),"getFundDistributeEnableSwitch"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"sun_propose_6"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),"0"!=e.proposalVal?_.a.createElement("span",null,Object(h.c)("propose_activate")):_.a.createElement("span",null,Object(h.c)("propose_unactivate"))),"getDayToSustainByFund"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"sun_propose_7"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal," ",Object(h.c)("day"))),"getPercentToPayWitness"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"sun_propose_8"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),_.a.createElement("span",null,e.proposalVal," %")),"getUpdateGateway_v1_0_2"==e.proposalKey&&_.a.createElement("div",null,_.a.createElement("span",null,l.formatMessage({id:"sun_propose_12"})),_.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?_.a.createElement("span",null,Object(h.c)("propose_allowed")):_.a.createElement("span",null,Object(h.c)("propose_not_allowed")))))}))}},{title:o()(l.formatMessage({id:"proposer"})),dataIndex:"name",key:"name",width:"20%",render:function(e,a,t){return a.proposer.name?_.a.createElement(j.a,{address:a.proposer.address},a.proposer.name):_.a.createElement(j.a,{address:a.proposer.address},a.proposer.address)}},{title:o()(l.formatMessage({id:"proposal_time_of_creation"}))+"/ "+o()(l.formatMessage({id:"proposal_endtime"})),dataIndex:"createTime",key:"createTime",width:"15%",align:"center",render:function(e,a,t){return _.a.createElement("div",null,_.a.createElement("div",{style:{color:"#333"}},_.a.createElement(O.a,{value:Number(e)}),"\xa0",_.a.createElement(O.e,{value:Number(e),hour:"numeric",minute:"numeric",second:"numeric",hour12:!1})),_.a.createElement("div",{style:{color:"#C23631"}},_.a.createElement(O.a,{value:Number(a.expirationTime)}),"\xa0",_.a.createElement(O.e,{value:Number(a.expirationTime),hour:"numeric",minute:"numeric",second:"numeric",hour12:!1})))}},{title:o()(l.formatMessage({id:"proposal_status"})),dataIndex:"state",key:"state",align:"center",render:function(e,a,t){return _.a.createElement("div",null,"PENDING"==e&&_.a.createElement("div",null,_.a.createElement("span",{className:"badge badge-warning text-uppercase badge-success-radius"},Object(h.c)("proposal_voting"))),"DISAPPROVED"==e&&_.a.createElement("div",null,_.a.createElement("span",{className:"badge badge-danger text-uppercase badge-success-radius"},Object(h.c)("proposal_ineffective"))),"APPROVED"==e&&_.a.createElement("div",null,_.a.createElement("span",{className:"badge badge-success text-uppercase badge-success-radius"},Object(h.c)("proposal_effective"))),"CANCELED"==e&&_.a.createElement("div",null,_.a.createElement("span",{className:"badge badge-secondary text-uppercase badge-success-radius"},Object(h.c)("proposal_cancelled"))))}},{title:function(){var e=o()(l.formatMessage({id:"proposal_valid_votes"}))+" / "+o()(l.formatMessage({id:"proposal_total_votes"})),a=o()(l.formatMessage({id:"proposal_votes_tip"}));return _.a.createElement("div",null,e," "," ",_.a.createElement("span",{className:"mr-2"},_.a.createElement(x.a,{placement:"top",text:a})))},dataIndex:"votes",key:"votes",width:"12%",align:"center",className:!T.v&&"hidden",render:function(e,a,t){return a.validVotes+" / "+a.totalVotes}},{title:o()(l.formatMessage({id:"proposal_action"})),dataIndex:"details",key:"details",width:"12%",align:"center",render:function(a,l,n){return _.a.createElement("div",{className:"detail-action"},_.a.createElement("div",null,_.a.createElement(b.a,{to:"/proposal/".concat(l.proposalId),className:"proposal-more"},Object(h.c)("proposal_more"))),t.address?_.a.createElement("div",null,"PENDING"===l.state&&!l.approveSelf&&_.a.createElement("div",null,_.a.createElement("a",{href:"javascript:;",className:"proposal-approve",onClick:function(){return e.qualificationsVerify(l.proposalId,!0)}},Object(h.c)("proposal_approve"))),"PENDING"===l.state&&l.approveSelf&&_.a.createElement("div",null,_.a.createElement("a",{href:"javascript:;",className:"proposal-cancel",onClick:function(){return e.qualificationsVerify(l.proposalId)}},Object(h.c)("proposal_cancel_approve")))):_.a.createElement("div",null,"PENDING"===l.state&&_.a.createElement("div",null,_.a.createElement("a",{href:"javascript:;",className:"proposal-approve",onClick:function(){return e.qualificationsVerify(l.proposalId,!0)}},Object(h.c)("proposal_approve")))))}}]}},{key:"qualificationsVerify",value:function(e,a){if(this.isLoggedIn()&&!this.state.isAction){this.setState({isAction:!0});var t=this.props;t.account,t.account.tronWeb;t.currentWallet.representative.enabled?a?this.voteProposal(e,a):this.cancelModal(e):this.applySuperModal()}}},{key:"voteProposal",value:function(){var e=Object(c.a)(p.a.mark(function e(a,t){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResult(a,t);case 2:e.sent?this.setState({modal:_.a.createElement(k.a,{success:!0,timeout:"3000",onConfirm:this.hideModal},Object(h.c)("proposal_success"))}):this.setState({modal:_.a.createElement(k.a,{warning:!0,timeout:"3000",onConfirm:this.hideModal},Object(h.c)("proposal_fail"))}),this.setState({isAction:!1});case 5:case"end":return e.stop()}},e,this)}));return function(a,t){return e.apply(this,arguments)}}()},{key:"getResult",value:function(){var e=Object(c.a)(p.a.mark(function e(a,t){var l,n,r,o,s,c,i,u,m;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.isTronLink,n=this.props.account,!T.v){e.next=14;break}return"ACCOUNT_LEDGER"===this.props.walletType.type?r=this.props.tronWeb():"ACCOUNT_TRONLINK"!==this.props.walletType.type&&"ACCOUNT_PRIVATE_KEY"!==this.props.walletType.type||(r=n.tronWeb),e.next=6,r.transactionBuilder.voteProposal(a,t,n.address,1).catch(function(e){return console.log(e)});case 6:return o=e.sent,e.next=9,Object(K.c)(o,r);case 9:s=e.sent,c=s.result,l=c,e.next=22;break;case 14:return e.next=16,n.sunWeb.sidechain.transactionBuilder.voteProposal(a,t,n.address,1).catch(function(e){return console.log(e)});case 16:return i=e.sent,e.next=19,Object(K.e)(i,n.sunWeb);case 19:u=e.sent,m=u.result,l=m;case 22:return e.abrupt("return",l);case 23:case"end":return e.stop()}},e,this)}));return function(a,t){return e.apply(this,arguments)}}()},{key:"cancelModal",value:function(e){var a=this,t=this.props.intl;this.setState({modal:_.a.createElement(k.a,{showCancel:!0,title:"",confirmBtnText:t.formatMessage({id:"confirm"}),cancelBtnText:t.formatMessage({id:"cancel"}),confirmBtnBsStyle:"link",confirmBtnCssClass:"modal-confirm",cancelBtnCssClass:"modal-cancel",onCancel:function(){return a.setState({modal:null})},onConfirm:function(){return a.voteProposal(e,!1)}},_.a.createElement("div",{style:{color:"#333",padding:"30px 0"}},Object(h.c)("proposal_cancel_tip"))),isAction:!1})}},{key:"showApplyForDelegate",value:function(){this.props.currentWallet.balance>=9999e6?this.applyForDelegate():this.setState({modal:_.a.createElement(C.c,{isOpen:!0,toggle:this.hideModal,className:"committee-modal modal-dialog-centered",style:{width:"460px"}},_.a.createElement(C.f,{toggle:this.hideModal,className:""}),_.a.createElement(C.d,null,_.a.createElement("div",{style:{color:"#333",padding:"10px 0 50px",fontSize:"16px",textAlign:"center"}},Object(h.c)("proposal_apply_super")),_.a.createElement("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}},_.a.createElement("div",{className:"balance-tip show"},Object(h.c)("proposal_balance_not_enough")),_.a.createElement("div",{style:{width:"220px",height:"38px",lineHeight:"38px",textAlign:"center",background:"#69C265",color:"#fff",cursor:"pointer"}},Object(h.c)("proposal_apply_super_btn")))))})}},{key:"pageHandle",value:function(e){if(this.isLoggedIn()){var a=this.props;a.account;a.currentWallet.representative.enabled?this.props.history.push(e?"proposalscreate":"myproposals"):this.applySuperModal()}}},{key:"render",value:function(){var e=this,a=this.state,t=a.modal,l=(a.page,a.total),r=(a.pageSize,a.loading),o=a.dataSource,s=(a.emptyState,a.pagination),p=this.getColumns(),c=this.props.intl;c.formatMessage({id:"view_total"}),c.formatMessage({id:"token_unit"}),c.formatMessage({id:"no_commission_proposed_found"});return _.a.createElement("main",{className:"container header-overlap committee"},t,_.a.createElement("div",{className:"token_black table_pos proposal-table"},T.v&&_.a.createElement("div",{className:"proposal-header"},_.a.createElement("a",{href:"javascript:;",onClick:function(){return e.pageHandle(1)}},Object(h.c)("proposal_create")),_.a.createElement("a",{href:"javascript:;",onClick:function(){return e.pageHandle()}},Object(h.c)("proposal_mine"))),r&&_.a.createElement("div",{className:"loading-style"},_.a.createElement(w.b,null)),!r&&_.a.createElement(n.a,{bordered:!0,columns:p,rowKey:function(e,a){return a},dataSource:o,scroll:scroll,pagination:s,loading:r,onChange:this.handleTableChange})))}}]),a}(_.a.Component);a.default=Object(v.connect)(function(e){return{account:e.app.account,currentWallet:e.wallet.current,walletType:e.app.wallet}},null)(Object(M.a)(Object(O.h)(F)))}}]);