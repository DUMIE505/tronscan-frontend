(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{3514:function(e,a,t){"use strict";t.r(a);var l,n=t(2),r=t.n(n),o=t(6),s=t(15),p=t(14),c=t(22),i=t(20),m=t(21),u=t(0),d=t.n(u),E=t(3),g=t(29),f=t(16),_=t(12),v=t(92),y=t(1372),b=t(1374),h=t(396),M=t(63),O=t(1371),w=t(1453),j=t.n(w),T=t(267),K=t.n(T),A=t(30),S=t(268),k=t(4),V=t(10),C=t(51),N=t.n(C),x=t(68),P=t(141);function F(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,l)}return t}function R(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?F(t,!0).forEach(function(a){Object(A.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):F(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var I=Object(P.a)(l=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(c.a)(this,Object(i.a)(a).call(this))).load=Object(o.a)(r.a.mark(function a(){var t,l,n,o,s,p,c,i,m,u,d,E,g,_,v,y=arguments;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=0<y.length&&void 0!==y[0]?y[0]:1,l=1<y.length&&void 0!==y[1]?y[1]:20,n=2<y.length?y[2]:void 0,o=e.props,s=o.account,o.currentWallet,e.setState({loading:!n}),a.next=7,f.e.getMyProposalList({limit:l,start:(t-1)*l,address:s.address,type:1});case 7:if(p=a.sent,c=p.data,i=p.total,m=["getMaintenanceTimeInterval","getAccountUpgradeCost","getCreateAccountFee","getTransactionFee","getAssetIssueFee","getWitnessPayPerBlock","getWitnessStandbyAllowance","getCreateNewAccountFeeInSystemContract","getCreateNewAccountBandwidthRate","getAllowCreationOfContracts","getRemoveThePowerOfTheGr","getEnergyFee","getExchangeCreateFee","getMaxCpuTimeOfOneTx","getAllowUpdateAccountName","getAllowSameTokenName","getAllowDelegateResource","getTotalEnergyLimit","getAllowTvmTransferTrc10","getTotalEnergyLimitNew","getAllowMultiSign","getAllowAdaptiveEnergy","getUpdateAccountPermissionFee","getMultiSignFee","getAllowProtoFilterNum","","getAllowTvmConstantinople","getAllowShieldedTransaction","getShieldedTransactionFee","getAdaptiveResourceLimitMultiplier","getChangeDelegation","getWitness127PayPerBlock","getAllowTvmSolidity059","getAdaptiveResourceLimitTargetRatio","getShieldedTransactionCreateAccountFee","getForbidTransferToContract"],u=[{id:"1000000",key:"getChargingSwitch"},{id:"1000001",key:"getSideChainGateWayList"},{id:"1000003",key:"getProposalExpireTime"},{id:"1000004",key:"getVoteWitnessSwitch"},{id:"1000007",key:"getFundInjectAddress"},{id:"1000008",key:"getFundDistributeEnableSwitch"},{id:"1000009",key:"getDayToSustainByFund"},{id:"1000010",key:"getPercentToPayWitness"}],k.B)for(d in c)for(E in c[d].paramters)c[d].paramters[E].proposalKey=m[c[d].paramters[E].key],c[d].paramters[E].proposalVal=c[d].paramters[E].value;else for(g in c)for(_ in c[g].paramters)for(v in u)u[v].id==c[g].paramters[_].key&&(c[g].paramters[_].proposalKey=u[v].key,c[g].paramters[_].proposalVal=c[g].paramters[_].value);e.setState({loading:!1,dataSource:c,total:i,page:t,pagination:R({},e.state.pagination,{total:i})});case 14:case"end":return a.stop()}},a)})),e.handleTableChange=function(a,t,l){var n=R({},e.state.pagination);n.current=a.current,n.pageSize=a.pageSize,e.setState({pagination:n},function(){e.load(n.current,n.pageSize),clearInterval(e.state.timer);var a=setInterval(function(){e.load(n.current,n.pageSize,1)},1e4);e.setState({timer:a})})},e.hideModal=function(){e.setState({modal:null,isAction:!1})},e.state={dataSource:[],total:0,loading:!1,pagination:{showQuickJumper:!0,position:"bottom",showSizeChanger:!0,defaultPageSize:20,total:0},modal:null,isAction:!1,timer:null},e}var l,n;return Object(m.a)(a,e),Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this,a=this.props;a.account,a.currentWallet,this.load();var t=setInterval(function(){e.load(1,20,1)},1e4);this.setState({timer:t})}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.timer)}},{key:"getColumns",value:function(){var e=this,a=this.props,t=a.account,l=a.intl;return this.state.dataSource,[{title:K()(l.formatMessage({id:"proposal_content_info"})),dataIndex:"proposalVal",key:"proposalVal",width:"40%",render:function(e,a){return d.a.createElement("div",{style:{fontFamily:"HelveticaNeue-Medium"}},a.paramters.map(function(e,a){return d.a.createElement("div",{key:a},k.B?d.a.createElement("div",null,"getMaintenanceTimeInterval"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,l.formatMessage({id:"propose_1"})),d.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),d.a.createElement("span",null,e.proposalVal/36e5)," \xa0",d.a.createElement("span",null,l.formatMessage({id:"propose_hour"}))),"getAccountUpgradeCost"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,l.formatMessage({id:"propose_2"})),d.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),d.a.createElement("span",null,e.proposalVal/k.K)," \xa0",d.a.createElement("span",null,"TRX")),"getCreateAccountFee"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,l.formatMessage({id:"propose_3"})),d.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),d.a.createElement("span",null,e.proposalVal/k.K)," \xa0",d.a.createElement("span",null,"TRX")),"getTransactionFee"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,l.formatMessage({id:"propose_4"})),d.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),d.a.createElement("span",null,e.proposalVal)," \xa0",d.a.createElement("span",null,"Sun/byte")),"getAssetIssueFee"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,l.formatMessage({id:"propose_5"})),d.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),d.a.createElement("span",null,e.proposalVal/k.K)," \xa0",d.a.createElement("span",null,"TRX")),"getWitnessPayPerBlock"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("div",null,d.a.createElement("span",null,l.formatMessage({id:"propose_6"})),d.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),d.a.createElement("span",null,e.proposalVal/k.K)," \xa0",d.a.createElement("span",null,"TRX"))),"getWitnessStandbyAllowance"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,l.formatMessage({id:"propose_7"})),d.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),d.a.createElement("span",null,e.proposalVal/k.K)," \xa0",d.a.createElement("span",null,"TRX")),"getCreateNewAccountFeeInSystemContract"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,l.formatMessage({id:"propose_8"})),d.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),d.a.createElement("span",null,e.proposalVal/k.K)," \xa0",d.a.createElement("span",null,"TRX")),"getCreateNewAccountBandwidthRate"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,l.formatMessage({id:"propose_9"})),d.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),d.a.createElement("span",null,e.proposalVal)," \xa0",d.a.createElement("span",null,"bandwith/byte")),"getAllowCreationOfContracts"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,l.formatMessage({id:"propose_10"})),d.a.createElement("span",null,Object(E.c)("propose_activate"))),"getRemoveThePowerOfTheGr"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,l.formatMessage({id:"propose_11"}))),"getEnergyFee"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,l.formatMessage({id:"propose_12"})),d.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),d.a.createElement("span",null,e.proposalVal/k.K," TRX")),"getExchangeCreateFee"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,l.formatMessage({id:"propose_13"})),d.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),d.a.createElement("span",null,e.proposalVal/k.K," TRX")),"getMaxCpuTimeOfOneTx"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,l.formatMessage({id:"propose_14"})),d.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),d.a.createElement("span",null,e.proposalVal," ms")),"getAllowUpdateAccountName"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,l.formatMessage({id:"propose_15"})),d.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?d.a.createElement("span",null,Object(E.c)("propose_allowed")):d.a.createElement("span",null,Object(E.c)("propose_not_allowed"))),"getAllowSameTokenName"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,l.formatMessage({id:"propose_16"})),d.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?d.a.createElement("span",null,Object(E.c)("propose_allowed")):d.a.createElement("span",null,Object(E.c)("propose_not_allowed"))),"getAllowDelegateResource"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,l.formatMessage({id:"propose_17"})),d.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?d.a.createElement("span",null,Object(E.c)("propose_allowed")):d.a.createElement("span",null,Object(E.c)("propose_not_allowed"))),"getTotalEnergyLimit"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,l.formatMessage({id:"propose_18"})),d.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),d.a.createElement("span",null,e.proposalVal)),"getAllowTvmTransferTrc10"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,l.formatMessage({id:"propose_19"})),d.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?d.a.createElement("span",null,Object(E.c)("propose_allowed")):d.a.createElement("span",null,Object(E.c)("propose_not_allowed"))),"getTotalEnergyLimitNew"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,l.formatMessage({id:"propose_18_1"})),d.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),d.a.createElement("span",null,e.proposalVal)),"getTotalEnergyCurrentLimit"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,l.formatMessage({id:"propose_20"})),d.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),d.a.createElement("span",null,e.proposalVal," ENERGY")),"getAllowMultiSign"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,l.formatMessage({id:"propose_21"})),d.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?d.a.createElement("span",null,Object(E.c)("propose_allowed")):d.a.createElement("span",null,Object(E.c)("propose_not_allowed"))),"getAllowAdaptiveEnergy"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,l.formatMessage({id:"propose_22"})),d.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?d.a.createElement("span",null,Object(E.c)("propose_allowed")):d.a.createElement("span",null,Object(E.c)("propose_not_allowed"))),"getTotalEnergyTargetLimit"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,l.formatMessage({id:"propose_23"})),d.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),d.a.createElement("span",null,e.proposalVal),"/",d.a.createElement("span",null,Object(E.c)("propose_minute"))),"getTotalEnergyAverageUsage"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,l.formatMessage({id:"propose_24"})),d.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?d.a.createElement("span",null,d.a.createElement("span",null,e.proposalVal),"/",d.a.createElement("span",null,Object(E.c)("propose_minute"))):d.a.createElement("span",null,Object(E.c)("propose_unactivate"))),"getUpdateAccountPermissionFee"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,l.formatMessage({id:"propose_25"})),d.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),d.a.createElement("span",null,e.proposalVal/k.K)," \xa0",d.a.createElement("span",null,"TRX")),"getMultiSignFee"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,l.formatMessage({id:"propose_26"})),d.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),d.a.createElement("span",null,e.proposalVal/k.K)," \xa0",d.a.createElement("span",null,"TRX")),"getAllowProtoFilterNum"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,l.formatMessage({id:"propose_27"})),d.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?d.a.createElement("span",null,Object(E.c)("propose_activate")):d.a.createElement("span",null,Object(E.c)("propose_unactivate"))),"getAllowTvmConstantinople"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,l.formatMessage({id:"propose_28"})),d.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?d.a.createElement("span",null,Object(E.c)("propose_allowed")):d.a.createElement("span",null,Object(E.c)("propose_not_allowed"))),"getAllowShieldedTransaction"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,l.formatMessage({id:"propose_29"})),d.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?d.a.createElement("span",null,Object(E.c)("propose_allowed")):d.a.createElement("span",null,Object(E.c)("propose_not_allowed"))),"getShieldedTransactionFee"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,l.formatMessage({id:"propose_28_1"})),d.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),d.a.createElement("span",null,e.proposalVal/k.K)," \xa0",d.a.createElement("span",null,"TRX")),"getAdaptiveResourceLimitMultiplier"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,l.formatMessage({id:"propose_29_1"})),d.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),d.a.createElement("span",null,e.proposalVal)),"getChangeDelegation"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,l.formatMessage({id:"propose_30"})),d.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?d.a.createElement("span",null,Object(E.c)("propose_activate")):d.a.createElement("span",null,Object(E.c)("propose_unactivate"))),"getWitness127PayPerBlock"==e.proposalKey&&d.a.createElement("div",{className:"mt-1"},d.a.createElement("span",null,l.formatMessage({id:"propose_31"})),d.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),d.a.createElement("span",null,e.proposalVal/k.K)," \xa0",d.a.createElement("span",null,"TRX")),"getAllowTvmSolidity059"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,l.formatMessage({id:"propose_32"})),d.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?d.a.createElement("span",null,Object(E.c)("propose_allowed")):d.a.createElement("span",null,Object(E.c)("propose_not_allowed"))),"getAdaptiveResourceLimitTargetRatio"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,l.formatMessage({id:"propose_33"})),d.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),d.a.createElement("span",null,e.proposalVal)),"getShieldedTransactionCreateAccountFee"==e.proposalKey&&d.a.createElement("div",{className:"mt-1"},d.a.createElement("span",null,l.formatMessage({id:"propose_34"})),d.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),d.a.createElement("span",null,e.proposalVal/k.K)," \xa0",d.a.createElement("span",null,"TRX")),"getForbidTransferToContract"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,l.formatMessage({id:"propose_35"})),d.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),e.proposalVal?d.a.createElement("span",null,Object(E.c)("propose_prohibit")):d.a.createElement("span",null,Object(E.c)("propose_not_prohibit")))):d.a.createElement("div",null,"getChargingSwitch"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,l.formatMessage({id:"sun_propose_1"})),d.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),"0"!=e.proposalVal?d.a.createElement("span",null,Object(E.c)("propose_activate")):d.a.createElement("span",null,Object(E.c)("propose_unactivate"))),"getSideChainGateWayList"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,l.formatMessage({id:"sun_propose_2"})),d.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),d.a.createElement("span",null,e.proposalVal)),"getProposalExpireTime"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,l.formatMessage({id:"sun_propose_3"})),d.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),d.a.createElement("span",null,e.proposalVal)),"getVoteWitnessSwitch"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,l.formatMessage({id:"sun_propose_4"})),d.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),"0"!=e.proposalVal?d.a.createElement("span",null,Object(E.c)("propose_activate")):d.a.createElement("span",null,Object(E.c)("propose_unactivate"))),"getFundInjectAddress"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,l.formatMessage({id:"sun_propose_5"})),d.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),d.a.createElement("span",null,e.proposalVal)),"getFundDistributeEnableSwitch"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,l.formatMessage({id:"sun_propose_6"})),d.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),"0"!=e.proposalVal?d.a.createElement("span",null,Object(E.c)("propose_activate")):d.a.createElement("span",null,Object(E.c)("propose_unactivate"))),"getDayToSustainByFund"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,l.formatMessage({id:"sun_propose_7"})),d.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),d.a.createElement("span",null,e.proposalVal," ",Object(E.c)("day"))),"getPercentToPayWitness"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,l.formatMessage({id:"sun_propose_8"})),d.a.createElement("span",null,l.formatMessage({id:"proposal_to"})),d.a.createElement("span",null,e.proposalVal," %"))))}))}},{title:K()(l.formatMessage({id:"proposal_time_of_creation"}))+"/ "+K()(l.formatMessage({id:"proposal_endtime"})),dataIndex:"createTime",key:"createTime",width:"15%",align:"center",render:function(e,a){return d.a.createElement("div",null,d.a.createElement("div",{style:{color:"#333"}},d.a.createElement(_.a,{value:Number(e)}),"\xa0",d.a.createElement(_.e,{value:Number(e),hour:"numeric",minute:"numeric",second:"numeric",hour12:!1})),d.a.createElement("div",{style:{color:"#C23631"}},d.a.createElement(_.a,{value:Number(a.expirationTime)}),"\xa0",d.a.createElement(_.e,{value:Number(a.expirationTime),hour:"numeric",minute:"numeric",second:"numeric",hour12:!1})))}},{title:K()(l.formatMessage({id:"proposal_status"})),dataIndex:"state",key:"state",align:"center",width:"12%",render:function(e){return d.a.createElement("div",null,"PENDING"==e&&d.a.createElement("div",null,d.a.createElement("span",{className:"badge badge-warning text-uppercase badge-success-radius"},Object(E.c)("proposal_voting"))),"DISAPPROVED"==e&&d.a.createElement("div",null,d.a.createElement("span",{className:"badge badge-danger text-uppercase badge-success-radius"},Object(E.c)("proposal_ineffective"))),"APPROVED"==e&&d.a.createElement("div",null,d.a.createElement("span",{className:"badge badge-success text-uppercase badge-success-radius"},Object(E.c)("proposal_effective"))),"CANCELED"==e&&d.a.createElement("div",null,d.a.createElement("span",{className:"badge badge-secondary text-uppercase badge-success-radius"},Object(E.c)("proposal_cancelled"))))}},{title:function(){var e=K()(l.formatMessage({id:"proposal_valid_votes"}))+" / "+K()(l.formatMessage({id:"proposal_total_votes"})),a=K()(l.formatMessage({id:"proposal_votes_tip"}));return d.a.createElement("div",null,e," ",d.a.createElement("span",{className:"mr-2"},d.a.createElement(S.a,{placement:"top",text:a})))},dataIndex:"votes",key:"votes",width:"12%",align:"center",render:function(e,a){return"".concat(a.validVotes,"/").concat(a.totalVotes)}},{title:K()(l.formatMessage({id:"proposal_action"})),dataIndex:"details",key:"details",width:"12%",align:"center",render:function(a,l){return d.a.createElement("div",{className:"detail-action"},d.a.createElement("div",null,d.a.createElement(M.a,{to:"/proposal/".concat(l.proposalId),className:"proposal-more"},Object(E.c)("proposal_more"))),t.address&&"PENDING"===l.state?d.a.createElement("div",null,d.a.createElement("div",null,d.a.createElement("a",{href:"javascript:;",className:"proposal-cancel",onClick:function(){return e.cancelModal(l.proposalId)}},Object(E.c)("proposal_cancel")))):"")}}]}},{key:"cancelModal",value:function(e){var a=this;this.props.intl,this.setState({modal:d.a.createElement(V.c,{isOpen:!0,toggle:this.hideModal,className:"committee-modal modal-dialog-centered",style:{width:"460px"}},d.a.createElement(V.f,{toggle:this.hideModal,className:""}),d.a.createElement(V.d,{style:{padding:"0 0 1.5rem"}},d.a.createElement("div",{style:{color:"#333",padding:"0 0 30px",fontSize:"16px",textAlign:"center"}},Object(E.c)("proposal_cancel_tip1")),d.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},d.a.createElement("div",{style:{width:"90px",height:"38px",lineHeight:"38px",textAlign:"center",background:"#C23631",color:"#fff",cursor:"pointer"},onClick:function(){a.cancelFun(e)}},Object(E.c)("confirm")))))})}},{key:"cancelFun",value:(n=Object(o.a)(r.a.mark(function e(a){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.isAction)return e.abrupt("return");e.next=2;break;case 2:return this.setState({isAction:!0}),e.next=5,this.getResult(a);case 5:e.sent?this.setState({modal:d.a.createElement(N.a,{success:!0,timeout:"3000",onConfirm:this.hideModal},Object(E.c)("proposal_success"))}):this.setState({modal:d.a.createElement(N.a,{warning:!0,timeout:"3000",onConfirm:this.hideModal},Object(E.c)("proposal_fail"))}),this.setState({isAction:!1});case 8:case"end":return e.stop()}},e,this)})),function(e){return n.apply(this,arguments)})},{key:"getResult",value:(l=Object(o.a)(r.a.mark(function e(a,t){var l,n,o,s,p,c,i,m,u;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.isTronLink,n=this.props.account,k.B)return"ACCOUNT_LEDGER"===this.props.walletType.type?o=this.props.tronWeb():"ACCOUNT_TRONLINK"!==this.props.walletType.type&&"ACCOUNT_PRIVATE_KEY"!==this.props.walletType.type||(o=n.tronWeb),e.next=6,o.transactionBuilder.deleteProposal(a,n.address,1).catch(function(e){return console.log(e)});e.next=14;break;case 6:return s=e.sent,e.next=9,Object(x.c)(s,o);case 9:p=e.sent,c=p.result,l=c,e.next=22;break;case 14:return e.next=16,n.sunWeb.sidechain.transactionBuilder.deleteProposal(a,n.address,1).catch(function(e){return console.log(e)});case 16:return i=e.sent,e.next=19,Object(x.e)(i,n.sunWeb);case 19:m=e.sent,u=m.result,l=u;case 22:return e.abrupt("return",l);case 23:case"end":return e.stop()}},e,this)})),function(e,a){return l.apply(this,arguments)})},{key:"render",value:function(){var e=this.state,a=e.modal,l=(e.page,e.total),n=(e.pageSize,e.loading),r=e.dataSource,o=(e.emptyState,e.pagination),s=this.getColumns();return this.props.intl,d.a.createElement("div",{className:""},a,n&&d.a.createElement("div",{className:"loading-style"},d.a.createElement(v.b,null)),!n&&(0<l?d.a.createElement(j.a,{bordered:!0,columns:s,rowKey:function(e,a){return a},dataSource:r,scroll:scroll,pagination:o,loading:n,onChange:this.handleTableChange}):d.a.createElement("div",{className:"my-proposals-empty"},d.a.createElement("img",{src:t(2424),alt:""}),d.a.createElement("div",null,Object(E.b)("trc20_no_data"),",",Object(E.b)("proposal_go"),d.a.createElement(M.a,{to:"/proposalscreate"},Object(E.b)("proposal_create")),Object(E.b)("proposal_or"),d.a.createElement(M.a,{to:"/proposals"},Object(E.b)("proposal_vote_link"))))))}}]),a}(d.a.Component))||l,W=Object(g.connect)(function(e){return{account:e.app.account,currentWallet:e.wallet.current,walletType:e.app.wallet,locale:e.app.activeLanguage}},null)(Object(_.h)(I)),D=t(3429),L=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(c.a)(this,Object(i.a)(a).call(this))).load=Object(o.a)(r.a.mark(function a(){var t,l,n,o,s,p,c=arguments;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=0<c.length&&void 0!==c[0]?c[0]:1,l=1<c.length&&void 0!==c[1]?c[1]:20,n=e.props,o=n.account,n.currentWallet,e.setState({loading:!0}),a.next=6,f.e.getMyProposalList({limit:l,start:(t-1)*l,address:o.address});case 6:(s=a.sent).data,p=s.total,e.setState({loading:!1,total:p});case 10:case"end":return a.stop()}},a)})),e.state={loading:!1,tabs:{myInitiated:{id:"myInitiated",icon:"fa fa-exchange-alt",path:"",label:d.a.createElement("span",null,Object(E.c)("proposal_my_initiate")),cmp:function(){return d.a.createElement(W,null)}},myParticipated:{id:"myParticipated",icon:"fa fa-handshake",path:"/myparticipated",label:d.a.createElement("span",null,Object(E.c)("proposal_my_participate")),cmp:function(){return d.a.createElement(D.default,null)}}},total:0},e}return Object(m.a)(a,e),Object(p.a)(a,[{key:"componentWillMount",value:function(){var e=this.props,a=e.account,t=e.currentWallet;a&&t&&t.representative&&t.representative.enabled||this.props.history.push("/proposals")}},{key:"componentDidMount",value:function(){this.load()}},{key:"componentDidUpdate",value:function(e){var a=this.props.account;e.account.address!=a.address&&this.props.history.push("/proposals")}},{key:"render",value:function(){var e=this.state,a=e.tabs,l=e.loading,n=e.total,r=this.props,o=(r.activeLanguage,r.match);return d.a.createElement("main",{className:"container header-overlap committee"},l?d.a.createElement("div",{className:"card"},d.a.createElement(v.b,null)):d.a.createElement("div",null,0<n?d.a.createElement("div",{className:"row proposal-table my-proposals-table"},d.a.createElement("div",{className:"col-md-12 "},d.a.createElement("div",{className:""},d.a.createElement("div",{className:"card-header list-style-body__header"},d.a.createElement("ul",{className:"nav nav-tabs card-header-tabs"},Object.values(a).map(function(e){return d.a.createElement("li",{key:e.id,className:"nav-item"},d.a.createElement(y.a,{exact:!0,to:o.url+e.path,className:"nav-link text-dark"},e.label))}))),d.a.createElement("div",{className:"card-body p-0 token_black"},d.a.createElement(b.a,null,Object.values(a).map(function(e){return d.a.createElement(h.a,{key:e.id,exact:!0,path:o.url+e.path,render:function(){return d.a.createElement(e.cmp,null)}})})))))):d.a.createElement("div",{className:"my-proposals-empty"},d.a.createElement("img",{src:t(2424),alt:""}),d.a.createElement("div",null,Object(E.b)("trc20_no_data"),",",Object(E.b)("proposal_go"),d.a.createElement(M.a,{to:"/proposalscreate"},Object(E.b)("proposal_create")),Object(E.b)("proposal_or"),d.a.createElement(M.a,{to:"/proposals"},Object(E.b)("proposal_vote_link"))))))}}]),a}(d.a.Component);a.default=Object(g.connect)(function(e){return{account:e.app.account,currentWallet:e.wallet.current}},null)(Object(O.a)(Object(_.h)(L)))}}]);