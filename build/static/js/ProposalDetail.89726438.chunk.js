(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{3475:function(e,a,t){"use strict";t.r(a);var l=t(2),s=t.n(l),r=t(6),n=t(15),o=t(14),p=t(22),c=t(20),m=t(21),i=t(0),d=t.n(i),u=t(3),E=t(16),g=t(12),_=t(92),v=t(23),b=t(268),f=t(4),N=t(63),y=t(25),M=function(e){function a(){var e;return Object(n.a)(this,a),(e=Object(p.a)(this,Object(c.a)(a).call(this))).state={loading:!1},e}var t;return Object(m.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match;this.load(e.params.id)}},{key:"load",value:(t=Object(r.a)(s.a.mark(function e(a){var t,l,r,n,o,p,c,m;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,E.b.getProposalById(a);case 3:if(t=e.sent,l=t.data,r=l,n=["getMaintenanceTimeInterval","getAccountUpgradeCost","getCreateAccountFee","getTransactionFee","getAssetIssueFee","getWitnessPayPerBlock","getWitnessStandbyAllowance","getCreateNewAccountFeeInSystemContract","getCreateNewAccountBandwidthRate","getAllowCreationOfContracts","getRemoveThePowerOfTheGr","getEnergyFee","getExchangeCreateFee","getMaxCpuTimeOfOneTx","getAllowUpdateAccountName","getAllowSameTokenName","getAllowDelegateResource","getTotalEnergyLimit","getAllowTvmTransferTrc10","getTotalEnergyLimitNew","getAllowMultiSign","getAllowAdaptiveEnergy","getUpdateAccountPermissionFee","getMultiSignFee","getAllowProtoFilterNum","","getAllowTvmConstantinople","getAllowShieldedTransaction","getShieldedTransactionFee","getAdaptiveResourceLimitMultiplier","getChangeDelegation","getWitness127PayPerBlock","getAllowTvmSolidity059","getAdaptiveResourceLimitTargetRatio","getShieldedTransactionCreateAccountFee","getForbidTransferToContract"],o=[{id:"1000000",key:"getChargingSwitch"},{id:"1000001",key:"getSideChainGateWayList"},{id:"1000003",key:"getProposalExpireTime"},{id:"1000004",key:"getVoteWitnessSwitch"},{id:"1000007",key:"getFundInjectAddress"},{id:"1000008",key:"getFundDistributeEnableSwitch"},{id:"1000009",key:"getDayToSustainByFund"},{id:"1000010",key:"getPercentToPayWitness"},{id:"1000012",key:"getUpdateGateway_v1_0_2"}],f.B)for(p in r.paramters)r.paramters[p].proposalKey=n[r.paramters[p].key],r.paramters[p].proposalVal=r.paramters[p].value;else for(c in r.paramters)for(m in o)o[m].id==r.paramters[c].key&&(r.paramters[c].proposalKey=o[m].key,r.paramters[c].proposalVal=r.paramters[c].value);this.setState({proposal:r,loading:!1});case 10:case"end":return e.stop()}},e,this)})),function(e){return t.apply(this,arguments)})},{key:"render",value:function(){var e=this.props,a=e.match,t=e.intl,l=this.state,s=l.proposal,r=l.loading;return d.a.createElement("main",{className:"container header-overlap proposal-detail"},d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-md-12 "},r?d.a.createElement("div",{className:"card"},d.a.createElement(_.b,null,Object(u.c)("loading_address")," #",a.params.id)):d.a.createElement(i.Fragment,null,d.a.createElement("div",{className:"card list-style-header"},a.params.id&&d.a.createElement("div",{className:"card-body"},d.a.createElement("h5",{className:"card-title m-0"},"# ",a.params.id,"\xa0",Object(u.b)("proposal"))),d.a.createElement("div",{className:"proposal-header"},s&&d.a.createElement("div",{className:""},d.a.createElement("div",{className:"header-item"},d.a.createElement("div",{className:"d-flex"},d.a.createElement("div",{className:"item-title"},Object(u.b)("proposer")," :"),d.a.createElement("div",{className:"item-info"},s.proposer.name?d.a.createElement(v.a,{address:s.proposer.address},s.proposer.name):d.a.createElement(v.a,{address:s.proposer.address},s.proposer.address))),d.a.createElement("div",{className:"d-flex"},d.a.createElement("div",{className:"item-title"},Object(u.b)("proposal_time_of_creation"),":"),d.a.createElement("div",{className:"item-info"},d.a.createElement(g.a,{value:Number(s.createTime)}),"\xa0",d.a.createElement(g.e,{value:Number(s.createTime),hour:"numeric",minute:"numeric",second:"numeric",hour12:!1}),"\xa0"))),d.a.createElement("div",{className:"header-item"},d.a.createElement("div",{className:"d-flex"},d.a.createElement("div",{className:"item-title"},Object(u.b)("proposal_content_info")," :"),d.a.createElement("div",{className:"item-info"},s&&s.paramters.map(function(e,a){return d.a.createElement("div",{key:a},f.B?d.a.createElement("div",null,"getMaintenanceTimeInterval"==e.proposalKey&&d.a.createElement("div",{className:"proposal-message"},d.a.createElement("span",null,t.formatMessage({id:"propose_1"})),d.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),d.a.createElement("span",{className:"col-green"},e.proposalVal/36e5)," \xa0",d.a.createElement("span",null,t.formatMessage({id:"propose_hour"}))),"getAccountUpgradeCost"==e.proposalKey&&d.a.createElement("div",{className:"proposal-message"},d.a.createElement("span",null,t.formatMessage({id:"propose_2"})),d.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),d.a.createElement("span",{className:"col-green"},e.proposalVal/f.K)," \xa0",d.a.createElement("span",null,"TRX")),"getCreateAccountFee"==e.proposalKey&&d.a.createElement("div",{className:"proposal-message"},d.a.createElement("span",null,t.formatMessage({id:"propose_3"})),d.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),d.a.createElement("span",{className:"col-green"},e.proposalVal/f.K)," \xa0",d.a.createElement("span",null,"TRX")),"getTransactionFee"==e.proposalKey&&d.a.createElement("div",{className:"proposal-message"},d.a.createElement("span",null,t.formatMessage({id:"propose_4"})),d.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),d.a.createElement("span",{className:"col-green"},e.proposalVal)," \xa0",d.a.createElement("span",null,"Sun/byte")),"getAssetIssueFee"==e.proposalKey&&d.a.createElement("div",{className:"proposal-message"},d.a.createElement("span",null,t.formatMessage({id:"propose_5"})),d.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),d.a.createElement("span",{className:"col-green"},e.proposalVal/f.K)," \xa0",d.a.createElement("span",null,"TRX")),"getWitnessPayPerBlock"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("div",{className:"proposal-message"},d.a.createElement("span",null,t.formatMessage({id:"propose_6"})),d.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),d.a.createElement("span",{className:"col-green"},e.proposalVal/f.K)," \xa0",d.a.createElement("span",null,"TRX"))),"getWitnessStandbyAllowance"==e.proposalKey&&d.a.createElement("div",{className:"proposal-message"},d.a.createElement("span",null,t.formatMessage({id:"propose_7"})),d.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),d.a.createElement("span",{className:"col-green"},e.proposalVal/f.K)," \xa0",d.a.createElement("span",null,"TRX")),"getCreateNewAccountFeeInSystemContract"==e.proposalKey&&d.a.createElement("div",{className:"proposal-message"},d.a.createElement("span",null,t.formatMessage({id:"propose_8"})),d.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),d.a.createElement("span",{className:"col-green"},e.proposalVal/f.K)," \xa0",d.a.createElement("span",null,"TRX")),"getCreateNewAccountBandwidthRate"==e.proposalKey&&d.a.createElement("div",{className:"proposal-message"},d.a.createElement("span",null,t.formatMessage({id:"propose_9"})),d.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),d.a.createElement("span",{className:"col-green"},e.proposalVal)," \xa0",d.a.createElement("span",null,"bandwith/byte")),"getAllowCreationOfContracts"==e.proposalKey&&d.a.createElement("div",{className:"proposal-message"},d.a.createElement("span",null,t.formatMessage({id:"propose_10"})),d.a.createElement("span",{className:"col-green"},Object(u.c)("propose_activate"))),"getRemoveThePowerOfTheGr"==e.proposalKey&&d.a.createElement("div",{className:"proposal-message"},d.a.createElement("span",null,t.formatMessage({id:"propose_11"}))),"getEnergyFee"==e.proposalKey&&d.a.createElement("div",{className:"proposal-message"},d.a.createElement("span",null,t.formatMessage({id:"propose_12"})),d.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),d.a.createElement("span",{className:"col-green"},e.proposalVal/f.K," TRX")),"getExchangeCreateFee"==e.proposalKey&&d.a.createElement("div",{className:"proposal-message"},d.a.createElement("span",null,t.formatMessage({id:"propose_13"})),d.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),d.a.createElement("span",{className:"col-green"},e.proposalVal/f.K," TRX")),"getMaxCpuTimeOfOneTx"==e.proposalKey&&d.a.createElement("div",{className:"proposal-message"},d.a.createElement("span",null,t.formatMessage({id:"propose_14"})),d.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),d.a.createElement("span",{className:"col-green"},e.proposalVal," ms")),"getAllowUpdateAccountName"==e.proposalKey&&d.a.createElement("div",{className:"proposal-message"},d.a.createElement("span",null,t.formatMessage({id:"propose_15"})),d.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),e.proposalVal?d.a.createElement("span",{className:"col-green"},Object(u.c)("propose_allowed")):d.a.createElement("span",{className:"col-green"},Object(u.c)("propose_not_allowed"))),"getAllowSameTokenName"==e.proposalKey&&d.a.createElement("div",{className:"proposal-message"},d.a.createElement("span",null,t.formatMessage({id:"propose_16"})),d.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),e.proposalVal?d.a.createElement("span",{className:"col-green"},Object(u.c)("propose_allowed")):d.a.createElement("span",{className:"col-green"},Object(u.c)("propose_not_allowed"))),"getAllowDelegateResource"==e.proposalKey&&d.a.createElement("div",{className:"proposal-message"},d.a.createElement("span",null,t.formatMessage({id:"propose_17"})),d.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),e.proposalVal?d.a.createElement("span",{className:"col-green"},Object(u.c)("propose_allowed")):d.a.createElement("span",{className:"col-green"},Object(u.c)("propose_not_allowed"))),"getTotalEnergyLimit"==e.proposalKey&&d.a.createElement("div",{className:"proposal-message"},d.a.createElement("span",null,t.formatMessage({id:"propose_18"})),d.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),d.a.createElement("span",{className:"col-green"},e.proposalVal)),"getAllowTvmTransferTrc10"==e.proposalKey&&d.a.createElement("div",{className:"proposal-message"},d.a.createElement("span",null,t.formatMessage({id:"propose_19"})),d.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),e.proposalVal?d.a.createElement("span",{className:"col-green"},Object(u.c)("propose_allowed")):d.a.createElement("span",{className:"col-green"},Object(u.c)("propose_not_allowed"))),"getTotalEnergyLimitNew"==e.proposalKey&&d.a.createElement("div",{className:"proposal-message"},d.a.createElement("span",null,t.formatMessage({id:"propose_18_1"})),d.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),d.a.createElement("span",{className:"col-green"},e.proposalVal)),"getTotalEnergyCurrentLimit"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,t.formatMessage({id:"propose_20"})),d.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),d.a.createElement("span",null,e.proposalVal," ENERGY")),"getAllowMultiSign"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,t.formatMessage({id:"propose_21"})),d.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),e.proposalVal?d.a.createElement("span",null,Object(u.c)("propose_allowed")):d.a.createElement("span",null,Object(u.c)("propose_not_allowed"))),"getAllowAdaptiveEnergy"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,t.formatMessage({id:"propose_22"})),d.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),e.proposalVal?d.a.createElement("span",null,Object(u.c)("propose_allowed")):d.a.createElement("span",null,Object(u.c)("propose_not_allowed"))),"getTotalEnergyTargetLimit"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,t.formatMessage({id:"propose_23"})),d.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),d.a.createElement("span",null,e.proposalVal),"/",d.a.createElement("span",null,Object(u.c)("propose_minute"))),"getTotalEnergyAverageUsage"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,t.formatMessage({id:"propose_24"})),d.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),e.proposalVal?d.a.createElement("span",null,d.a.createElement("span",null,e.proposalVal),"/",d.a.createElement("span",null,Object(u.c)("propose_minute"))):d.a.createElement("span",null,Object(u.c)("propose_unactivate"))),"getUpdateAccountPermissionFee"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,t.formatMessage({id:"propose_25"})),d.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),d.a.createElement("span",null,e.proposalVal/f.K)," \xa0",d.a.createElement("span",null,"TRX")),"getMultiSignFee"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,t.formatMessage({id:"propose_26"})),d.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),d.a.createElement("span",null,e.proposalVal/f.K)," \xa0",d.a.createElement("span",null,"TRX")),"getAllowProtoFilterNum"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,t.formatMessage({id:"propose_27"})),d.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),e.proposalVal?d.a.createElement("span",null,Object(u.c)("propose_activate")):d.a.createElement("span",null,Object(u.c)("propose_unactivate"))),"getAllowTvmConstantinople"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,t.formatMessage({id:"propose_28"})),d.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),e.proposalVal?d.a.createElement("span",null,Object(u.c)("propose_allowed")):d.a.createElement("span",null,Object(u.c)("propose_not_allowed"))),"getAllowShieldedTransaction"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,t.formatMessage({id:"propose_29"})),d.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),e.proposalVal?d.a.createElement("span",null,Object(u.c)("propose_allowed")):d.a.createElement("span",null,Object(u.c)("propose_not_allowed"))),"getShieldedTransactionFee"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,t.formatMessage({id:"propose_28_1"})),d.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),d.a.createElement("span",null,e.proposalVal/f.K)," \xa0",d.a.createElement("span",null,"TRX")),"getAdaptiveResourceLimitMultiplier"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,t.formatMessage({id:"propose_29_1"})),d.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),d.a.createElement("span",null,e.proposalVal)),"getChangeDelegation"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,t.formatMessage({id:"propose_30"})),d.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),e.proposalVal?d.a.createElement("span",null,Object(u.c)("propose_activate")):d.a.createElement("span",null,Object(u.c)("propose_unactivate"))),"getWitness127PayPerBlock"==e.proposalKey&&d.a.createElement("div",{className:""},d.a.createElement("span",null,t.formatMessage({id:"propose_31"})),d.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),d.a.createElement("span",null,e.proposalVal/f.K)," \xa0",d.a.createElement("span",null,"TRX")),"getAllowTvmSolidity059"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,t.formatMessage({id:"propose_32"})),d.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),e.proposalVal?d.a.createElement("span",null,Object(u.c)("propose_allowed")):d.a.createElement("span",null,Object(u.c)("propose_not_allowed")),d.a.createElement("br",null),d.a.createElement("br",null),d.a.createElement("div",null,Object(u.c)("getAllowTvmSolidity059_tips"),d.a.createElement("a",{className:"ml-2",href:"https://github.com/tronprotocol/tips/blob/master/proposal/proposal-32.md",target:"_blank"},Object(u.c)("learn_more"),">")),d.a.createElement("div",null,"tronprotocol/tips:",d.a.createElement("a",{className:"ml-2",href:"https://github.com/tronprotocol/tips/blob/master/tip-43.md",target:"_blank"},Object(u.c)("#tip43")),d.a.createElement("a",{className:"ml-2",href:"https://github.com/tronprotocol/tips/blob/master/tip-44.md",target:"_blank"},Object(u.c)("#tip44")),d.a.createElement("a",{className:"ml-2",href:"https://github.com/tronprotocol/tips/blob/master/tip-54.md",target:"_blank"},Object(u.c)("#tip54")),d.a.createElement("a",{className:"ml-2",href:"https://github.com/tronprotocol/tips/blob/master/tip-60.md",target:"_blank"},Object(u.c)("#tip60")))),"getAdaptiveResourceLimitTargetRatio"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,t.formatMessage({id:"propose_33"})),d.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),d.a.createElement("span",null,e.proposalVal)),"getShieldedTransactionCreateAccountFee"==e.proposalKey&&d.a.createElement("div",{className:"mt-1"},d.a.createElement("span",null,t.formatMessage({id:"propose_34"})),d.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),d.a.createElement("span",null,e.proposalVal/f.K)," \xa0",d.a.createElement("span",null,"TRX")),"getForbidTransferToContract"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,t.formatMessage({id:"propose_35"})),d.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),e.proposalVal?d.a.createElement("span",null,Object(u.c)("propose_prohibit")):d.a.createElement("span",null,Object(u.c)("propose_not_prohibit")))):d.a.createElement("div",null,"getChargingSwitch"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,t.formatMessage({id:"sun_propose_1"})),d.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),"0"!=e.proposalVal?d.a.createElement("span",null,Object(u.c)("propose_activate")):d.a.createElement("span",null,Object(u.c)("propose_unactivate"))),"getSideChainGateWayList"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,t.formatMessage({id:"sun_propose_2"})),d.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),d.a.createElement("span",null,e.proposalVal)),"getProposalExpireTime"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,t.formatMessage({id:"sun_propose_3"})),d.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),d.a.createElement("span",null,e.proposalVal)),"getVoteWitnessSwitch"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,t.formatMessage({id:"sun_propose_4"})),d.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),"0"!=e.proposalVal?d.a.createElement("span",null,Object(u.c)("propose_activate")):d.a.createElement("span",null,Object(u.c)("propose_unactivate"))),"getFundInjectAddress"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,t.formatMessage({id:"sun_propose_5"})),d.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),d.a.createElement("span",null,e.proposalVal)),"getFundDistributeEnableSwitch"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,t.formatMessage({id:"sun_propose_6"})),d.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),"0"!=e.proposalVal?d.a.createElement("span",null,Object(u.c)("propose_activate")):d.a.createElement("span",null,Object(u.c)("propose_unactivate"))),"getDayToSustainByFund"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,t.formatMessage({id:"sun_propose_7"})),d.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),d.a.createElement("span",null,e.proposalVal," ",Object(u.c)("day"))),"getPercentToPayWitness"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,t.formatMessage({id:"sun_propose_8"})),d.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),d.a.createElement("span",null,e.proposalVal," %")),"getUpdateGateway_v1_0_2"==e.proposalKey&&d.a.createElement("div",null,d.a.createElement("span",null,t.formatMessage({id:"sun_propose_12"})),d.a.createElement("span",null,t.formatMessage({id:"proposal_to"})),e.proposalVal?d.a.createElement("span",null,Object(u.c)("propose_allowed")):d.a.createElement("span",null,Object(u.c)("propose_not_allowed")))))}))),d.a.createElement("div",{className:"d-flex"},d.a.createElement("div",{className:"item-title"},Object(u.b)("proposal_time_of_expire"),":"),d.a.createElement("div",{className:"item-info"},d.a.createElement(g.a,{value:Number(s.expirationTime)}),"\xa0",d.a.createElement(g.e,{value:Number(s.expirationTime),hour:"numeric",minute:"numeric",second:"numeric",hour12:!1}),"\xa0"))),d.a.createElement("div",{className:"header-item"},d.a.createElement("div",{className:"d-flex"},d.a.createElement("div",{className:"item-title"},Object(u.b)("proposal_status")," :"),d.a.createElement("div",{className:"item-info"},"PENDING"==s.state&&d.a.createElement("div",null,d.a.createElement("span",{className:"badge badge-warning text-uppercase badge-success-radius"},Object(u.c)("proposal_voting"))),"DISAPPROVED"==s.state&&d.a.createElement("div",null,d.a.createElement("span",{className:"badge badge-danger text-uppercase badge-success-radius"},Object(u.c)("proposal_ineffective"))),"APPROVED"==s.state&&d.a.createElement("div",null,d.a.createElement("span",{className:"badge badge-success text-uppercase badge-success-radius"},Object(u.c)("proposal_effective"))),"CANCELED"==s.state&&d.a.createElement("div",null,d.a.createElement("span",{className:"badge badge-secondary text-uppercase badge-success-radius"},Object(u.c)("proposal_cancelled"))))))))),f.B&&s&&d.a.createElement("div",{className:"proposal-detail-wrap"},d.a.createElement("div",{className:"detail-header"},d.a.createElement("h2",null,Object(u.b)("proposal_details")),d.a.createElement("div",{className:"votes"},d.a.createElement("span",null,Object(u.b)("proposal_valid_votes"),": ",s.validVotes,";",Object(u.b)("proposal_total_votes"),": ",s.totalVotes),d.a.createElement("span",{className:"ml-2"},d.a.createElement(b.a,{placement:"top",text:"proposal_votes_tip"})))),d.a.createElement("div",{className:"detail-content"},s.typeApprovals&&0<s.typeApprovals.sr.length&&d.a.createElement("div",{className:"detail-item blue"},d.a.createElement("div",{className:"detail-item-title "},d.a.createElement("i",null),Object(u.c)("proposal_super_votes")," : ",s.typeApprovals.sr.length),d.a.createElement("div",{className:"detail-item-content"},s.typeApprovals.sr.map(function(e,a){return d.a.createElement(N.a,{to:"/address/".concat(e.address),key:a},e.name||h(e.address))}))),s.typeApprovals&&0<s.typeApprovals.partner.length&&d.a.createElement("div",{className:"detail-item orange"},d.a.createElement("div",{className:"detail-item-title "},d.a.createElement("i",null),Object(u.c)("proposal_super_partner_votes")," : ",s.typeApprovals.partner.length),d.a.createElement("div",{className:"detail-item-content"},s.typeApprovals.partner.map(function(e,a){return d.a.createElement(N.a,{to:"/address/".concat(e.address),key:a},e.name||h(e.address))}))),s.typeApprovals&&0<s.typeApprovals.candidate.length&&d.a.createElement("div",{className:"detail-item green"},d.a.createElement("div",{className:"detail-item-title "},d.a.createElement("i",null),Object(u.c)("proposal_super_candidate_votes")," : ",s.typeApprovals.candidate.length),d.a.createElement("div",{className:"detail-item-content"},s.typeApprovals.candidate.map(function(e,a){return d.a.createElement(N.a,{to:"/address/".concat(e.address),key:a},e.name||h(e.address))}))))),!f.B&&s&&d.a.createElement("div",{className:"proposal-detail-wrap"},d.a.createElement("div",{className:"detail-header"},d.a.createElement("h2",null,Object(u.b)("proposal_details")),d.a.createElement("div",{className:"votes"},d.a.createElement("span",null,Object(u.b)("proposal_total_votes"),": ",s.approvals.length))),d.a.createElement("div",{className:"detail-content"},s.approvals&&0<s.approvals.length&&d.a.createElement("div",{className:"detail-item blue"},d.a.createElement("div",{className:"detail-item-title "},d.a.createElement("i",null),Object(u.c)("proposal_super_votes")," : ",s.approvals.length),d.a.createElement("div",{className:"detail-item-content"},s.approvals.map(function(e,a){return d.a.createElement(N.a,{to:"/address/".concat(e.address),key:a},e.name||h(e.address))})))))))))}}]),a}(d.a.Component);function h(e){var a=e&&Object(y.isAddressValid)(e)?e.substring(0,29):"",t=e&&Object(y.isAddressValid)(e)?e.substring(29,34):"";return d.a.createElement("div",{className:"ellipsis_box"},d.a.createElement("div",{className:"ellipsis_box_start"},a),d.a.createElement("div",{className:"ellipsis_box_end"},t))}a.default=Object(g.h)(M)}}]);