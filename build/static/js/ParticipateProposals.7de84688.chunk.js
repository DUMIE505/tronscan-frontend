(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{2424:function(e,a,t){e.exports=t.p+"static/media/tron-empty.a9a72332.svg"},3429:function(e,a,t){"use strict";t.r(a);var l,n=t(1453),o=t.n(n),r=t(267),s=t.n(r),p=t(2),c=t.n(p),i=t(30),m=t(6),u=t(15),d=t(14),g=t(22),E=t(20),f=t(21),_=t(0),v=t.n(_),y=t(29),b=t(3),M=t(16),h=t(12),w=t(92),O=t(268),T=t(4),j=t(63),K=t(51),A=t.n(K),C=t(68),S=t(141);function V(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,l)}return t}function k(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?V(t,!0).forEach(function(a){Object(i.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):V(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var N=Object(S.a)(l=function(e){function a(){var e;return Object(u.a)(this,a),(e=Object(g.a)(this,Object(E.a)(a).call(this))).load=Object(m.a)(c.a.mark(function a(){var t,l,n,o,r,s,p,i,m,u,d,g,E,f,_,v=arguments;return c.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=0<v.length&&void 0!==v[0]?v[0]:1,l=1<v.length&&void 0!==v[1]?v[1]:20,n=2<v.length?v[2]:void 0,o=e.props,r=o.account,o.currentWallet,e.setState({loading:!n}),a.next=7,M.e.getMyProposalList({limit:l,start:(t-1)*l,address:r.address,type:2});case 7:if(s=a.sent,p=s.data,i=s.total,m=["getMaintenanceTimeInterval","getAccountUpgradeCost","getCreateAccountFee","getTransactionFee","getAssetIssueFee","getWitnessPayPerBlock","getWitnessStandbyAllowance","getCreateNewAccountFeeInSystemContract","getCreateNewAccountBandwidthRate","getAllowCreationOfContracts","getRemoveThePowerOfTheGr","getEnergyFee","getExchangeCreateFee","getMaxCpuTimeOfOneTx","getAllowUpdateAccountName","getAllowSameTokenName","getAllowDelegateResource","getTotalEnergyLimit","getAllowTvmTransferTrc10","getTotalEnergyLimitNew","getAllowMultiSign","getAllowAdaptiveEnergy","getUpdateAccountPermissionFee","getMultiSignFee","getAllowProtoFilterNum","","getAllowTvmConstantinople","getAllowShieldedTransaction","getShieldedTransactionFee","getAdaptiveResourceLimitMultiplier","getChangeDelegation","getWitness127PayPerBlock","getAllowTvmSolidity059","getAdaptiveResourceLimitTargetRatio","getShieldedTransactionCreateAccountFee","getForbidTransferToContract"],u=[{id:"1000000",key:"getChargingSwitch"},{id:"1000001",key:"getSideChainGateWayList"},{id:"1000003",key:"getProposalExpireTime"},{id:"1000004",key:"getVoteWitnessSwitch"},{id:"1000007",key:"getFundInjectAddress"},{id:"1000008",key:"getFundDistributeEnableSwitch"},{id:"1000009",key:"getDayToSustainByFund"},{id:"1000010",key:"getPercentToPayWitness"}],T.B)for(d in p)for(g in p[d].paramters)p[d].paramters[g].proposalKey=m[p[d].paramters[g].key],p[d].paramters[g].proposalVal=p[d].paramters[g].value;else for(E in p)for(f in p[E].paramters)for(_ in u)u[_].id==p[E].paramters[f].key&&(p[E].paramters[f].proposalKey=u[_].key,p[E].paramters[f].proposalVal=p[E].paramters[f].value);e.setState({loading:!1,dataSource:p,total:i,page:t,pagination:k({},e.state.pagination,{total:i})});case 14:case"end":return a.stop()}},a)})),e.handleTableChange=function(a,t,l){var n=k({},e.state.pagination);n.current=a.current,n.pageSize=a.pageSize,e.setState({pagination:n},function(){e.load(n.current,n.pageSize),clearInterval(e.state.timer);var a=setInterval(function(){e.load(n.current,n.pageSize,1)},1e4);e.setState({timer:a})})},e.hideModal=function(){e.setState({modal:null,isAction:!1})},e.state={dataSource:[],total:0,loading:!1,pagination:{showQuickJumper:!0,position:"bottom",showSizeChanger:!0,defaultPageSize:20,total:0},modal:null,isAction:!1,timer:null},e}var l,n;return Object(f.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this,a=this.props;a.account,a.currentWallet,this.load();var t=setInterval(function(){e.load(1,20,1)},1e4);this.setState({timer:t})}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.timer)}},{key:"getColumns",value:function(){var e=this,a=this.props,t=a.account,l=a.intl;return this.state.dataSource,[{title:s()(l.formatMessage({id:"proposal_content_info"})),dataIndex:"proposalVal",key:"proposalVal",width:"40%",render:function(e,a){return v.a.createElement("div",{style:{fontFamily:"HelveticaNeue-Medium"}},a.paramters.map(function(e,a){return v.a.createElement("div",{key:a},T.B?v.a.createElement("div",null,"getMaintenanceTimeInterval"==e.proposalKey&&v.a.createElement("div",null,v.a.createElement("span",null,l.formatMessage({id:"propose_1"})),v.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),v.a.createElement("span",null,e.proposalVal/36e5)," \xa0",v.a.createElement("span",null,l.formatMessage({id:"propose_hour"}))),"getAccountUpgradeCost"==e.proposalKey&&v.a.createElement("div",null,v.a.createElement("span",null,l.formatMessage({id:"propose_2"})),v.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),v.a.createElement("span",null,e.proposalVal/T.K)," \xa0",v.a.createElement("span",null,"TRX")),"getCreateAccountFee"==e.proposalKey&&v.a.createElement("div",null,v.a.createElement("span",null,l.formatMessage({id:"propose_3"})),v.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),v.a.createElement("span",null,e.proposalVal/T.K)," \xa0",v.a.createElement("span",null,"TRX")),"getTransactionFee"==e.proposalKey&&v.a.createElement("div",null,v.a.createElement("span",null,l.formatMessage({id:"propose_4"})),v.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),v.a.createElement("span",null,e.proposalVal)," \xa0",v.a.createElement("span",null,"Sun/byte")),"getAssetIssueFee"==e.proposalKey&&v.a.createElement("div",null,v.a.createElement("span",null,l.formatMessage({id:"propose_5"})),v.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),v.a.createElement("span",null,e.proposalVal/T.K)," \xa0",v.a.createElement("span",null,"TRX")),"getWitnessPayPerBlock"==e.proposalKey&&v.a.createElement("div",null,v.a.createElement("div",null,v.a.createElement("span",null,l.formatMessage({id:"propose_6"})),v.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),v.a.createElement("span",null,e.proposalVal/T.K)," \xa0",v.a.createElement("span",null,"TRX"))),"getWitnessStandbyAllowance"==e.proposalKey&&v.a.createElement("div",null,v.a.createElement("span",null,l.formatMessage({id:"propose_7"})),v.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),v.a.createElement("span",null,e.proposalVal/T.K)," \xa0",v.a.createElement("span",null,"TRX")),"getCreateNewAccountFeeInSystemContract"==e.proposalKey&&v.a.createElement("div",null,v.a.createElement("span",null,l.formatMessage({id:"propose_8"})),v.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),v.a.createElement("span",null,e.proposalVal/T.K)," \xa0",v.a.createElement("span",null,"TRX")),"getCreateNewAccountBandwidthRate"==e.proposalKey&&v.a.createElement("div",null,v.a.createElement("span",null,l.formatMessage({id:"propose_9"})),v.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),v.a.createElement("span",null,e.proposalVal)," \xa0",v.a.createElement("span",null,"bandwith/byte")),"getAllowCreationOfContracts"==e.proposalKey&&v.a.createElement("div",null,v.a.createElement("span",null,l.formatMessage({id:"propose_10"})),v.a.createElement("span",null,Object(b.c)("propose_activate"))),"getRemoveThePowerOfTheGr"==e.proposalKey&&v.a.createElement("div",null,v.a.createElement("span",null,l.formatMessage({id:"propose_11"}))),"getEnergyFee"==e.proposalKey&&v.a.createElement("div",null,v.a.createElement("span",null,l.formatMessage({id:"propose_12"})),v.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),v.a.createElement("span",null,e.proposalVal/T.K," TRX")),"getExchangeCreateFee"==e.proposalKey&&v.a.createElement("div",null,v.a.createElement("span",null,l.formatMessage({id:"propose_13"})),v.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),v.a.createElement("span",null,e.proposalVal/T.K," TRX")),"getMaxCpuTimeOfOneTx"==e.proposalKey&&v.a.createElement("div",null,v.a.createElement("span",null,l.formatMessage({id:"propose_14"})),v.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),v.a.createElement("span",null,e.proposalVal," ms")),"getAllowUpdateAccountName"==e.proposalKey&&v.a.createElement("div",null,v.a.createElement("span",null,l.formatMessage({id:"propose_15"})),v.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?v.a.createElement("span",null,Object(b.c)("propose_allowed")):v.a.createElement("span",null,Object(b.c)("propose_not_allowed"))),"getAllowSameTokenName"==e.proposalKey&&v.a.createElement("div",null,v.a.createElement("span",null,l.formatMessage({id:"propose_16"})),v.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?v.a.createElement("span",null,Object(b.c)("propose_allowed")):v.a.createElement("span",null,Object(b.c)("propose_not_allowed"))),"getAllowDelegateResource"==e.proposalKey&&v.a.createElement("div",null,v.a.createElement("span",null,l.formatMessage({id:"propose_17"})),v.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?v.a.createElement("span",null,Object(b.c)("propose_allowed")):v.a.createElement("span",null,Object(b.c)("propose_not_allowed"))),"getTotalEnergyLimit"==e.proposalKey&&v.a.createElement("div",null,v.a.createElement("span",null,l.formatMessage({id:"propose_18"})),v.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),v.a.createElement("span",null,e.proposalVal)),"getAllowTvmTransferTrc10"==e.proposalKey&&v.a.createElement("div",null,v.a.createElement("span",null,l.formatMessage({id:"propose_19"})),v.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?v.a.createElement("span",null,Object(b.c)("propose_allowed")):v.a.createElement("span",null,Object(b.c)("propose_not_allowed"))),"getTotalEnergyLimitNew"==e.proposalKey&&v.a.createElement("div",null,v.a.createElement("span",null,l.formatMessage({id:"propose_18_1"})),v.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),v.a.createElement("span",null,e.proposalVal)),"getTotalEnergyCurrentLimit"==e.proposalKey&&v.a.createElement("div",null,v.a.createElement("span",null,l.formatMessage({id:"propose_20"})),v.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),v.a.createElement("span",null,e.proposalVal," ENERGY")),"getAllowMultiSign"==e.proposalKey&&v.a.createElement("div",null,v.a.createElement("span",null,l.formatMessage({id:"propose_21"})),v.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?v.a.createElement("span",null,Object(b.c)("propose_allowed")):v.a.createElement("span",null,Object(b.c)("propose_not_allowed"))),"getAllowAdaptiveEnergy"==e.proposalKey&&v.a.createElement("div",null,v.a.createElement("span",null,l.formatMessage({id:"propose_22"})),v.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?v.a.createElement("span",null,Object(b.c)("propose_allowed")):v.a.createElement("span",null,Object(b.c)("propose_not_allowed"))),"getTotalEnergyTargetLimit"==e.proposalKey&&v.a.createElement("div",null,v.a.createElement("span",null,l.formatMessage({id:"propose_23"})),v.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),v.a.createElement("span",null,e.proposalVal),"/",v.a.createElement("span",null,Object(b.c)("propose_minute"))),"getTotalEnergyAverageUsage"==e.proposalKey&&v.a.createElement("div",null,v.a.createElement("span",null,l.formatMessage({id:"propose_24"})),v.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?v.a.createElement("span",null,v.a.createElement("span",null,e.proposalVal),"/",v.a.createElement("span",null,Object(b.c)("propose_minute"))):v.a.createElement("span",null,Object(b.c)("propose_unactivate"))),"getUpdateAccountPermissionFee"==e.proposalKey&&v.a.createElement("div",null,v.a.createElement("span",null,l.formatMessage({id:"propose_25"})),v.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),v.a.createElement("span",null,e.proposalVal/T.K)," \xa0",v.a.createElement("span",null,"TRX")),"getMultiSignFee"==e.proposalKey&&v.a.createElement("div",null,v.a.createElement("span",null,l.formatMessage({id:"propose_26"})),v.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),v.a.createElement("span",null,e.proposalVal/T.K)," \xa0",v.a.createElement("span",null,"TRX")),"getAllowProtoFilterNum"==e.proposalKey&&v.a.createElement("div",null,v.a.createElement("span",null,l.formatMessage({id:"propose_27"})),v.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?v.a.createElement("span",null,Object(b.c)("propose_activate")):v.a.createElement("span",null,Object(b.c)("propose_unactivate"))),"getAllowTvmConstantinople"==e.proposalKey&&v.a.createElement("div",null,v.a.createElement("span",null,l.formatMessage({id:"propose_28"})),v.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?v.a.createElement("span",null,Object(b.c)("propose_allowed")):v.a.createElement("span",null,Object(b.c)("propose_not_allowed"))),"getAllowShieldedTransaction"==e.proposalKey&&v.a.createElement("div",null,v.a.createElement("span",null,l.formatMessage({id:"propose_29"})),v.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?v.a.createElement("span",null,Object(b.c)("propose_allowed")):v.a.createElement("span",null,Object(b.c)("propose_not_allowed"))),"getShieldedTransactionFee"==e.proposalKey&&v.a.createElement("div",null,v.a.createElement("span",null,l.formatMessage({id:"propose_28_1"})),v.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),v.a.createElement("span",null,e.proposalVal/T.K)," \xa0",v.a.createElement("span",null,"TRX")),"getAdaptiveResourceLimitMultiplier"==e.proposalKey&&v.a.createElement("div",null,v.a.createElement("span",null,l.formatMessage({id:"propose_29_1"})),v.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),v.a.createElement("span",null,e.proposalVal)),"getChangeDelegation"==e.proposalKey&&v.a.createElement("div",null,v.a.createElement("span",null,l.formatMessage({id:"propose_30"})),v.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?v.a.createElement("span",null,Object(b.c)("propose_activate")):v.a.createElement("span",null,Object(b.c)("propose_unactivate"))),"getWitness127PayPerBlock"==e.proposalKey&&v.a.createElement("div",{className:"mt-1"},v.a.createElement("span",null,l.formatMessage({id:"propose_31"})),v.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),v.a.createElement("span",null,e.proposalVal/T.K)," \xa0",v.a.createElement("span",null,"TRX")),"getAllowTvmSolidity059"==e.proposalKey&&v.a.createElement("div",null,v.a.createElement("span",null,l.formatMessage({id:"propose_32"})),v.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?v.a.createElement("span",null,Object(b.c)("propose_allowed")):v.a.createElement("span",null,Object(b.c)("propose_not_allowed"))),"getAdaptiveResourceLimitTargetRatio"==e.proposalKey&&v.a.createElement("div",null,v.a.createElement("span",null,l.formatMessage({id:"propose_33"})),v.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),v.a.createElement("span",null,e.proposalVal)),"getShieldedTransactionCreateAccountFee"==e.proposalKey&&v.a.createElement("div",{className:"mt-1"},v.a.createElement("span",null,l.formatMessage({id:"propose_34"})),v.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),v.a.createElement("span",null,e.proposalVal/T.K)," \xa0",v.a.createElement("span",null,"TRX")),"getForbidTransferToContract"==e.proposalKey&&v.a.createElement("div",null,v.a.createElement("span",null,l.formatMessage({id:"propose_35"})),v.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?v.a.createElement("span",null,Object(b.c)("propose_prohibit")):v.a.createElement("span",null,Object(b.c)("propose_not_prohibit")))):v.a.createElement("div",null,"getChargingSwitch"==e.proposalKey&&v.a.createElement("div",null,v.a.createElement("span",null,l.formatMessage({id:"sun_propose_1"})),v.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),"0"!=e.proposalVal?v.a.createElement("span",null,Object(b.c)("propose_activate")):v.a.createElement("span",null,Object(b.c)("propose_unactivate"))),"getSideChainGateWayList"==e.proposalKey&&v.a.createElement("div",null,v.a.createElement("span",null,l.formatMessage({id:"sun_propose_2"})),v.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),v.a.createElement("span",null,e.proposalVal)),"getProposalExpireTime"==e.proposalKey&&v.a.createElement("div",null,v.a.createElement("span",null,l.formatMessage({id:"sun_propose_3"})),v.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),v.a.createElement("span",null,e.proposalVal)),"getVoteWitnessSwitch"==e.proposalKey&&v.a.createElement("div",null,v.a.createElement("span",null,l.formatMessage({id:"sun_propose_4"})),v.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),"0"!=e.proposalVal?v.a.createElement("span",null,Object(b.c)("propose_activate")):v.a.createElement("span",null,Object(b.c)("propose_unactivate"))),"getFundInjectAddress"==e.proposalKey&&v.a.createElement("div",null,v.a.createElement("span",null,l.formatMessage({id:"sun_propose_5"})),v.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),v.a.createElement("span",null,e.proposalVal)),"getFundDistributeEnableSwitch"==e.proposalKey&&v.a.createElement("div",null,v.a.createElement("span",null,l.formatMessage({id:"sun_propose_6"})),v.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),"0"!=e.proposalVal?v.a.createElement("span",null,Object(b.c)("propose_activate")):v.a.createElement("span",null,Object(b.c)("propose_unactivate"))),"getDayToSustainByFund"==e.proposalKey&&v.a.createElement("div",null,v.a.createElement("span",null,l.formatMessage({id:"sun_propose_7"})),v.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),v.a.createElement("span",null,e.proposalVal," ",Object(b.c)("day"))),"getPercentToPayWitness"==e.proposalKey&&v.a.createElement("div",null,v.a.createElement("span",null,l.formatMessage({id:"sun_propose_8"})),v.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),v.a.createElement("span",null,e.proposalVal," %"))))}))}},{title:s()(l.formatMessage({id:"proposal_time_of_creation"}))+"/ "+s()(l.formatMessage({id:"proposal_endtime"})),dataIndex:"createTime",key:"createTime",width:"15%",align:"center",render:function(e,a){return v.a.createElement("div",null,v.a.createElement("div",{style:{color:"#333"}},v.a.createElement(h.a,{value:Number(e)}),"\xa0",v.a.createElement(h.e,{value:Number(e),hour:"numeric",minute:"numeric",second:"numeric",hour12:!1})),v.a.createElement("div",{style:{color:"#C23631"}},v.a.createElement(h.a,{value:Number(a.expirationTime)}),"\xa0",v.a.createElement(h.e,{value:Number(a.expirationTime),hour:"numeric",minute:"numeric",second:"numeric",hour12:!1})))}},{title:s()(l.formatMessage({id:"proposal_status"})),dataIndex:"state",key:"state",align:"center",width:"12%",render:function(e){return v.a.createElement("div",null,"PENDING"==e&&v.a.createElement("div",null,v.a.createElement("span",{className:"badge badge-warning text-uppercase badge-success-radius"},Object(b.c)("proposal_voting"))),"DISAPPROVED"==e&&v.a.createElement("div",null,v.a.createElement("span",{className:"badge badge-danger text-uppercase badge-success-radius"},Object(b.c)("proposal_ineffective"))),"APPROVED"==e&&v.a.createElement("div",null,v.a.createElement("span",{className:"badge badge-success text-uppercase badge-success-radius"},Object(b.c)("proposal_effective"))),"CANCELED"==e&&v.a.createElement("div",null,v.a.createElement("span",{className:"badge badge-secondary text-uppercase badge-success-radius"},Object(b.c)("proposal_cancelled"))))}},{title:function(){var e=s()(l.formatMessage({id:"proposal_valid_votes"}))+" / "+s()(l.formatMessage({id:"proposal_total_votes"})),a=s()(l.formatMessage({id:"proposal_votes_tip"}));return v.a.createElement("div",null,e," ",v.a.createElement("span",{className:"mr-2"},v.a.createElement(O.a,{placement:"top",text:a})))},dataIndex:"votes",key:"votes",width:"12%",align:"center",render:function(e,a){return"".concat(a.validVotes,"/").concat(a.totalVotes)}},{title:s()(l.formatMessage({id:"proposal_action"})),dataIndex:"details",key:"details",width:"12%",align:"center",render:function(a,l){return v.a.createElement("div",{className:"detail-action"},v.a.createElement("div",null,v.a.createElement(j.a,{to:"/proposal/".concat(l.proposalId),className:"proposal-more"},Object(b.c)("proposal_more"))),t.address&&"PENDING"===l.state?v.a.createElement("div",null,v.a.createElement("div",null,v.a.createElement("a",{href:"javascript:;",className:"proposal-cancel",onClick:function(){return e.cancelModal(l.proposalId)}},Object(b.c)("proposal_cancel_approve")))):"")}}]}},{key:"cancelModal",value:function(e){var a=this,t=this.props.intl;this.setState({modal:v.a.createElement(A.a,{showCancel:!0,title:"",confirmBtnText:t.formatMessage({id:"confirm"}),cancelBtnText:t.formatMessage({id:"cancel"}),confirmBtnBsStyle:"link",confirmBtnCssClass:"modal-confirm",cancelBtnCssClass:"modal-cancel",onCancel:function(){return a.hideModal()},onConfirm:function(){return a.cancelFun(e)}},v.a.createElement("div",{style:{color:"#333",padding:"30px 0"}},Object(b.c)("proposal_cancel_tip")))})}},{key:"cancelFun",value:(n=Object(m.a)(c.a.mark(function e(a){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.isAction)return e.abrupt("return");e.next=2;break;case 2:return this.setState({isAction:!0}),e.next=5,this.getResult(a,!1);case 5:e.sent?this.setState({modal:v.a.createElement(A.a,{success:!0,timeout:"3000",onConfirm:this.hideModal},Object(b.c)("proposal_success"))}):this.setState({modal:v.a.createElement(A.a,{warning:!0,timeout:"3000",onConfirm:this.hideModal},Object(b.c)("proposal_fail"))}),this.setState({isAction:!1});case 8:case"end":return e.stop()}},e,this)})),function(e){return n.apply(this,arguments)})},{key:"getResult",value:(l=Object(m.a)(c.a.mark(function e(a,t){var l,n,o,r,s,p,i,m,u;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.isTronLink,n=this.props.account,T.B)return"ACCOUNT_LEDGER"===this.props.walletType.type?o=this.props.tronWeb():"ACCOUNT_TRONLINK"!==this.props.walletType.type&&"ACCOUNT_PRIVATE_KEY"!==this.props.walletType.type||(o=n.tronWeb),e.next=6,o.transactionBuilder.voteProposal(a,t,n.address,1).catch(function(e){return console.log(e)});e.next=14;break;case 6:return r=e.sent,e.next=9,Object(C.c)(r,o);case 9:s=e.sent,p=s.result,l=p,e.next=22;break;case 14:return e.next=16,n.sunWeb.sidechain.transactionBuilder.voteProposal(a,t,n.address,1).catch(function(e){return console.log(e)});case 16:return i=e.sent,e.next=19,Object(C.e)(i,n.sunWeb);case 19:m=e.sent,u=m.result,l=u;case 22:return e.abrupt("return",l);case 23:case"end":return e.stop()}},e,this)})),function(e,a){return l.apply(this,arguments)})},{key:"render",value:function(){var e=this.state,a=e.modal,l=(e.page,e.total),n=(e.pageSize,e.loading),r=e.dataSource,s=(e.emptyState,e.pagination),p=this.getColumns();return this.props.intl,v.a.createElement("div",{className:""},a,n&&v.a.createElement("div",{className:"loading-style"},v.a.createElement(w.b,null)),!n&&(0<l?v.a.createElement(o.a,{bordered:!0,columns:p,rowKey:function(e,a){return a},dataSource:r,scroll:scroll,pagination:s,loading:n,onChange:this.handleTableChange}):v.a.createElement("div",{className:"my-proposals-empty"},v.a.createElement("img",{src:t(2424),alt:""}),v.a.createElement("div",null,Object(b.b)("trc20_no_data"),",",Object(b.b)("proposal_go"),v.a.createElement(j.a,{to:"/proposalscreate"},Object(b.b)("proposal_create")),Object(b.b)("proposal_or"),v.a.createElement(j.a,{to:"/proposals"},Object(b.b)("proposal_vote_link"))))))}}]),a}(v.a.Component))||l;a.default=Object(y.connect)(function(e){return{account:e.app.account,currentWallet:e.wallet.current,walletType:e.app.wallet,locale:e.app.activeLanguage}},null)(Object(h.h)(N))}}]);