(this["webpackJsonpdestiny-power-bars"]=this["webpackJsonpdestiny-power-bars"]||[]).push([[0],{11:function(e,t,a){e.exports={powerBars:"PowerBars_powerBars__33tbb",powerRange:"PowerBars_powerRange__te0OD",rangeLine:"PowerBars_rangeLine__3sXeP",powerLabel:"PowerBars_powerLabel__z9Lm2",indicator:"PowerBars_indicator__1UcsC"}},12:function(e,t,a){e.exports={details:"PowerDetails_details__1vqno",detailsRow:"PowerDetails_detailsRow__20lfp",detailsLabel:"PowerDetails_detailsLabel__2dvVG",detailsInlineIcon:"PowerDetails_detailsInlineIcon__1Pqe3",detailsValue:"PowerDetails_detailsValue__3daTt"}},13:function(e,t,a){e.exports={characterDisplay:"CharacterDisplay_characterDisplay__20O9A",header:"CharacterDisplay_header__2fx5d",emblemBackground:"CharacterDisplay_emblemBackground__2pAjE",name:"CharacterDisplay_name__2j8PA",power:"CharacterDisplay_power__1p583",content:"CharacterDisplay_content__263Ab"}},16:function(e,t,a){e.exports={anchor:"LoadingSpinner_anchor__78Pnm",spinner:"LoadingSpinner_spinner__32tWn",spin:"LoadingSpinner_spin__3FVoi",loadingSpinnerContainer:"LoadingSpinner_loadingSpinnerContainer__2QV5S",spinnerLarge:"LoadingSpinner_spinnerLarge__KooL0",spinnerSmall:"LoadingSpinner_spinnerSmall__27lWl",status:"LoadingSpinner_status__3sgCR"}},180:function(e,t,a){},181:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(70),c=a.n(o),i=a(1),s=a.n(i),l=a(3),u=a(4),p=a(21);p.a.initialize("UA-149614480-1",{debug:!1}),p.a.set({anonymizeIp:!0}),p.a.pageview(window.location.pathname+window.location.search);var m,f,d,h=p.a,v=a(71),b=a(45),w=a(31),g=function(){var e=Object(l.a)(s.a.mark((function e(t){var a,r,n,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=I(),r={"x-api-key":D},a&&(r.Authorization="Bearer ".concat(a)),n="".concat(t.url).concat(t.params?"?"+Object.entries(t.params).map((function(e){var t=Object(u.a)(e,2),a=t[0],r=t[1];return"".concat(encodeURIComponent(a),"=").concat(encodeURIComponent(r))})):""),e.next=7,fetch(n,{headers:r});case 7:return o=e.sent,e.next=10,o.json();case 10:return e.abrupt("return",e.sent);case 13:return e.prev=13,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",{});case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}(),_=["DestinyInventoryItemDefinition","DestinyVendorDefinition"],y=function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Loading manifest data from IDB"),e.next=3,Object(b.a)("MANIFEST_DATA");case 3:return t=e.sent,console.log("Finished loading manifest data from IDB"),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(l.a)(s.a.mark((function e(t){var a,r,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}throw Error("No manifest!");case 2:return a=t.version,console.log("Fetching fresh manifest data"),e.next=6,fetch("https://www.bungie.net".concat(t.jsonWorldContentPaths.en));case 6:return r=e.sent,e.next=9,r.json();case 9:return n=e.sent,console.log("Pruning manifest data"),Object.keys(n).forEach((function(e){_.includes(e)||delete n[e]})),console.log("Storing manifest data in IDB"),e.next=15,Object(b.b)("MANIFEST_DATA",n);case 15:return localStorage.setItem("MANIFEST_VERSION",a),e.abrupt("return",n);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f||(f=Object(l.a)(s.a.mark((function e(){var t,a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h.event({category:"Data",action:"Attempt load manifest",nonInteraction:!0}),e.next=3,Object(w.getDestinyManifest)(g);case 3:if(t=e.sent,a=localStorage.getItem("MANIFEST_VERSION"),!t||!t.Response||t.Response.version!==a||window.location.search.includes("updateManifest")){e.next=12;break}if(m){e.next=10;break}return e.next=9,y();case 9:m=e.sent;case 10:if(!m||!_.every((function(e){return m&&!!m[e]}))){e.next=12;break}return e.abrupt("return",m);case 12:if(!t||!t.ErrorStatus||"Success"===t.ErrorStatus){e.next=15;break}throw h.event({category:"Errors",action:'Error status "'.concat(t.ErrorStatus,'" returned from manifest request'),nonInteraction:!0}),Error('Error status "'.concat(t.ErrorStatus,'" returned from manifest request'));case 15:if(t&&t.Response){e.next=17;break}throw Error("No manifest received!");case 17:return m=void 0,h.event({category:"Data",action:"Fetch remote manifest",nonInteraction:!0}),e.next=21,E(t.Response);case 21:return r=e.sent,m=r,e.abrupt("return",r);case 24:case"end":return e.stop()}}),e)})))()),e.abrupt("return",f);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(e,t){return h.event({category:"Character Data",action:"Fetch minimal profile",nonInteraction:!0}),Object(w.getProfile)(g,{components:[200,205],destinyMembershipId:t,membershipType:e})},j=function(e,t){return h.event({category:"Character Data",action:"Fetch full profile",nonInteraction:!0}),Object(w.getProfile)(g,{components:[200,201,205,102,300],destinyMembershipId:t,membershipType:e})},D="d94be1e34632448fafdaf77c7afbb501",x=function(){localStorage.removeItem("bungieAccessToken"),localStorage.removeItem("bungieAccessTokenExpiryTime"),localStorage.removeItem("bungieMembershipId"),localStorage.removeItem("destinyMemberships"),localStorage.removeItem("destinyMembership")},P=function(){var e=Object(l.a)(s.a.mark((function e(t){var a,r,n,o,c,i,l,u=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u.length>1&&void 0!==u[1]&&u[1],console.log("handleTokenResponse"),x(),200!==t.status){e.next=26;break}return e.next=6,t.json();case 6:return a=e.sent,r=a.access_token,n=a.expires_in,o=Date.now()+1e3*n,c=a.membership_id,localStorage.setItem("bungieAccessToken",r),localStorage.setItem("bungieAccessTokenExpiryTime",o.toString()),localStorage.setItem("bungieMembershipId",c),e.next=16,Object(v.getMembershipDataById)(g,{membershipId:c,membershipType:254});case 16:if((i=e.sent)&&i.Response&&(!i.ErrorStatus||"Success"===i.ErrorStatus)){e.next=20;break}return h.event({category:"Errors",action:"Destiny membership fetch error, status: ".concat(i.ErrorStatus),nonInteraction:!0}),e.abrupt("return",{authSuccess:!1,error:"Status code ".concat(i.ErrorStatus," from memberships endpoint")});case 20:return l=i.Response.destinyMemberships,localStorage.setItem("destinyMemberships",JSON.stringify(l)),1===l.length&&R(l[0]),e.abrupt("return",{accessToken:r,authSuccess:!0});case 26:if(200===t.status){e.next=29;break}return h.event({category:"Auth",action:"Status code ".concat(t.status," from authentication request"),nonInteraction:!0}),e.abrupt("return",{authSuccess:!1,error:"Status code ".concat(t.status," from authentication request")});case 29:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(l.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("fetchAuthToken",t),x(),h.event({category:"Auth",action:"Oauth token request",nonInteraction:!0}),e.next=5,fetch("https://www.bungie.net/platform/app/oauth/token/",{body:"grant_type=authorization_code&code=".concat(t,"&client_id=").concat("27213"),cache:"no-cache",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST",redirect:"follow",referrer:"no-referrer"});case 5:return a=e.sent,e.next=8,P(a);case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){return localStorage.getItem("bungieAccessToken")},k=function(){var e=I(),t=parseInt(localStorage.getItem("bungieAccessTokenExpiryTime")||"-1",10),a=localStorage.getItem("bungieMembershipId");return!(!e||Date.now()>=t||!a)},T=function(){var e=localStorage.getItem("destinyMemberships");try{if(e)return JSON.parse(e)}catch(t){h.event({category:"Data",action:"Error loading destiny memberships from local storage",nonInteraction:!0}),console.error("Error loading destiny memberships",t.message)}},M=function(){var e=localStorage.getItem("destinyMembership");try{if(e)return JSON.parse(e)}catch(t){h.event({category:"Data",action:"Error loading destiny membership from local storage",nonInteraction:!0}),console.error("Error loading destiny membership",t.message)}},R=function(e){localStorage.setItem("destinyMembership",JSON.stringify(e))},A=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=new URLSearchParams(window.location.search),!(a=t.get("code"))||k()){e.next=10;break}return console.log("Fetching access token with auth code"),e.next=6,N(a);case 6:if(!(r=e.sent)||!1!==r.authSuccess){e.next=10;break}return console.error(r.error),e.abrupt("return",!1);case 10:if(a&&window.location.replace("".concat(window.location.origin).concat(window.location.pathname)),!k()||!T()){e.next=13;break}return e.abrupt("return",!0);case 13:h.event({category:"System",action:"Redirect for fresh authentication",nonInteraction:!0}),console.log("Redirecting to fresh authentication for missing or expired access token, or missing destiny memberships"),x(),console.log("Redirect to auth"),x(),h.event({category:"Auth",action:"Redirect to oauth",nonInteraction:!0}),window.location.replace("".concat("https://www.bungie.net/en/OAuth/Authorize","?response_type=code&client_id=").concat("27213"));case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=a(5),B=a.n(C),L=a(13),V=a.n(L),H=a(44),z=a(2);function F(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var q=(d={},Object(z.a)(d,"kinetic",1498876634),Object(z.a)(d,"energy",2465295065),Object(z.a)(d,"power",953998645),Object(z.a)(d,"head",3448274439),Object(z.a)(d,"gloves",3551918588),Object(z.a)(d,"chest",14239492),Object(z.a)(d,"legs",20886954),Object(z.a)(d,"classItem",1585787867),d),W=Object.entries(q).reduce((function(e,t){var a=Object(u.a)(t,2),r=a[0],n=a[1];return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?F(a,!0).forEach((function(t){Object(z.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):F(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,Object(z.a)({},n,r))}),{}),K=[].concat(["kinetic","energy","power"],["head","gloves","chest","legs","classItem"]),U=2,G=3,J=["titan","hunter","warlock"],Y=a(8),Z=a.n(Y),Q=function(e){var t,a=e.min,r=e.max,o=e.value,c=e.avgValue,i=e.label,s=e.icon,l=r-a,u=Math.floor((o-a)/l*1e3)/10,p=Math.floor((c-a)/l*1e3)/10,m="".concat(o," ").concat(i),f=n.a.createElement("span",{className:Z.a.label},n.a.createElement("span",{className:B()(Z.a.power,(t={},Object(z.a)(t,Z.a.max,o>=r),Object(z.a)(t,Z.a.belowAverage,o<c),t))},o),n.a.createElement("span",{className:Z.a.slotName},i));return n.a.createElement("div",{className:Z.a.barWrapper},n.a.createElement("div",{className:Z.a.iconWrapper},s&&n.a.createElement("img",{className:Z.a.icon,src:"https://www.bungie.net".concat(s),alt:m})),n.a.createElement("div",{className:Z.a.barContainer},n.a.createElement("div",{className:Z.a.filledBar,style:{width:"".concat(u,"%")}},f),n.a.createElement("div",{className:Z.a.barLine,style:{left:"".concat(p,"%")}})))},X=a(11),$=a.n(X);function ee(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var te,ae,re,ne={hunter:"Hunter Cloak",titan:"Titan Mark",warlock:"Warlock Bond"},oe=function(e){var t=K.reduce((function(t,a){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ee(a,!0).forEach((function(t){Object(z.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ee(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},t,Object(z.a)({},a,e.topItemBySlot?e.topItemBySlot[a].instanceData.primaryStat.value:e.overallPower))}),{}),a=Math.floor(e.overallPower),r=Math.min.apply(Math,Object(H.a)(Object.values(t))),o=Math.max(50*Math.floor(r/50)-50,0),c=Math.max.apply(Math,Object(H.a)(Object.values(t))),i=c<=950?50:10,s=Math.ceil(c/i)*i,l=s-o,p=Math.floor((a-o)/l*1e3)/10;return n.a.createElement("div",{className:$.a.powerBars},n.a.createElement("div",{className:$.a.powerRange},n.a.createElement("div",{className:$.a.minPower},o),n.a.createElement("div",{className:$.a.rangeLine}),n.a.createElement("div",{className:$.a.maxPower},s)),n.a.createElement("div",{className:$.a.bars},Object.entries(t).map((function(t){var r,c=Object(u.a)(t,2),i=c[0],l=c[1],p=e.topItemBySlot&&e.topItemBySlot[i];return n.a.createElement(Q,{key:"".concat(e.id,"_").concat(i),min:o,max:s,value:l,avgValue:a,label:(r=e.className,{chest:"Chest Armor",classItem:ne[r],energy:"Energy Weapon",gloves:"Gauntlets",head:"Helmet",kinetic:"Kinetic Weapon",legs:"Leg Armor",power:"Power Weapon"})[i]||i,icon:p&&p.itemDefinition&&p.itemDefinition.displayProperties.icon})}))),n.a.createElement("div",{className:$.a.powerLabel},n.a.createElement("div",{className:$.a.indicator,style:{left:"".concat(p,"%")}},a)))},ce=a(12),ie=a.n(ce),se=a(72),le=a.n(se),ue=function(e){var t=e.children;return n.a.createElement("span",{className:le.a.inlinePowerNumber},t)},pe=function(e){var t,a=Math.floor(e.overallPower);return e.artifactData&&0!==e.artifactData.bonusPower?n.a.createElement("div",{className:ie.a.details},n.a.createElement("div",{className:ie.a.detailsRow},n.a.createElement("div",{className:ie.a.detailsLabel},"Maximum equippable gear power:"),n.a.createElement("div",{className:ie.a.defailsValue},n.a.createElement(ue,null,a))),e.artifactData?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:ie.a.detailsRow},n.a.createElement("div",{className:ie.a.detailsLabel},n.a.createElement("img",{className:ie.a.detailsInlineIcon,src:"https://www.bungie.net".concat(e.artifactData.iconPath),alt:""}),e.artifactData.name," bonus power:"),n.a.createElement("div",{className:ie.a.detailsValue},n.a.createElement(ue,null,(t=e.artifactData.bonusPower)>=0?"+".concat(t):"".concat(t))))):null):null},me=a(7),fe=a.n(me),de=function(e){return n.a.createElement("div",{className:fe.a.hints},e.potentialOverallPower&&e.potentialOverallPower>e.overallPower?n.a.createElement("div",{className:B()(fe.a.hint,fe.a.worldDropHint)},n.a.createElement("span",null,"World drops can increase your overall gear power to"," ",n.a.createElement(ue,null,e.potentialOverallPower)),n.a.createElement("div",{className:fe.a.hintExtra},n.a.createElement("div",{className:fe.a.hintExtraInner},n.a.createElement("div",null,"World drops (from strikes, public events, vendors, non-powerful legendary rewards) can drop with a power level from"," ",n.a.createElement(ue,null,e.overallPower-3)," to"," ",n.a.createElement(ue,null,e.overallPower)," for this character."),n.a.createElement("div",null,"Replacing items below your current overall power can increase your power to a higher average."),e.powerRequiredToReachPotential?n.a.createElement("div",null,"You need an extra"," ",n.a.createElement(ue,null,e.powerRequiredToReachPotential)," total power on your items to reach an overall power of"," ",n.a.createElement(ue,null,e.potentialOverallPower),"."):null))):null,e.potentialOverallPower===e.overallPower&&e.overallPower>=900&&e.overallPower<950?n.a.createElement("div",{className:B()(fe.a.hint,fe.a.powerfulHint)},n.a.createElement("span",null,"Powerful rewards can increase your overall gear power up to the powerful cap of ",n.a.createElement(ue,null,950)),n.a.createElement("div",{className:fe.a.hintExtra},n.a.createElement("div",{className:fe.a.hintExtraInner},n.a.createElement("div",null,"Powerful and pinnacle reward sources (Weekly challenges, Year 3 raids) will give you items above your overall gear power, with powerful rewards capped at ",n.a.createElement(ue,null,950),"."),n.a.createElement("div",null,"Powerful rewards (Tier 1) will give items up to 3 levels above your overall gear power"),n.a.createElement("div",null,"Powerful rewards (Tier 2) will give items up to 5 levels above your overall gear power"),n.a.createElement("div",null,"Pinnacle rewards will give items up to 7 levels above your overall gear power"),n.a.createElement("div",null,"After getting a powerful reward, check back here to see if it's beneficial to catch up the rest of your slots with world drops before getting another!")))):null,e.potentialOverallPower===e.overallPower&&e.overallPower>=950&&e.overallPower<960?n.a.createElement("div",{className:B()(fe.a.hint,fe.a.pinnacleHint)},n.a.createElement("span",null,"Pinnacle rewards can increase your overall gear power up to the pinnacle cap of ",n.a.createElement(ue,null,960)),n.a.createElement("div",{className:fe.a.hintExtra},n.a.createElement("div",{className:fe.a.hintExtraInner},n.a.createElement("div",null,"Pinnacle reward sources (Some weekly challenges, Year 3 raids) will give you items above your overall gear power, capped at"," ",n.a.createElement(ue,null,960),".")))):null)},he=function(e){var t,a=e.data,r=Math.floor(a.overallPower),o=a.artifactData?a.artifactData.bonusPower:0;return n.a.createElement("div",{className:B()(V.a.characterDisplay,V.a["class_".concat(a.className)]),style:{backgroundColor:function(e){var t=e.red,a=e.green,r=e.blue;return"rgb(".concat(t,",").concat(a,",").concat(r,")")}(a.character.emblemColor)}},n.a.createElement("div",{className:V.a.header},n.a.createElement("img",{className:V.a.emblemBackground,src:"https://www.bungie.net".concat(a.character.emblemBackgroundPath),alt:""}),n.a.createElement("div",{className:V.a.name},(t=a.className).substr(0,1).toUpperCase()+t.substr(1)),n.a.createElement("div",{className:V.a.power},r+o)),n.a.createElement("div",{className:V.a.content},n.a.createElement(pe,a),n.a.createElement(oe,a),n.a.createElement(de,a)))},ve=a(19),be=a.n(ve),we=function(){return n.a.createElement("div",{className:be.a.fetchSpinnerContainer},n.a.createElement("div",{className:be.a.anchor},n.a.createElement("div",{className:be.a.spinner}),n.a.createElement("div",{className:be.a.spinnerSmall})))},ge=a(40),_e=a.n(ge),ye=function(){var e=Object(r.useState)(!1),t=Object(u.a)(e,2),a=t[0],o=t[1];return Object(r.useEffect)((function(){var e=setTimeout((function(){return o(!0)}),1e4);return function(){return clearTimeout(e)}}),[]),n.a.createElement("div",{className:B()(_e.a.kofiContainer,Object(z.a)({},_e.a.hidden,!a))},n.a.createElement("a",{href:"https://ko-fi.com/tomcorke",target:"_blank",rel:"noopener"},n.a.createElement("img",{height:"36",style:{border:"0px",height:"36px"},src:"https://az743702.vo.msecnd.net/cdn/kofi3.png?v=2",alt:"Buy Me a Coffee at ko-fi.com"})))},Ee=a(16),Oe=a.n(Ee),Se=function(e){var t=e.children;return n.a.createElement("div",{className:Oe.a.loadingSpinnerContainer},n.a.createElement("div",{className:Oe.a.anchor},n.a.createElement("div",{className:Oe.a.spinnerLarge}),n.a.createElement("div",{className:Oe.a.spinnerSmall}),n.a.createElement("div",{className:Oe.a.status},t)))},je=a(32),De=a.n(je),xe=function(e){var t=e.onMembershipSelect,a=T();if(!a)return null;if(0===a.length)return n.a.createElement("div",null,"No destiny memberships!");var r={1:"xbox",2:"psn",3:"steam",4:"blizzard"};return n.a.createElement("div",{className:De.a.membershipSelect},a.map((function(e){return n.a.createElement("div",{key:e.membershipId,className:B()(De.a.membership,De.a["platform_".concat(r[e.membershipType])]),onClick:function(){return t(e)}},e.displayName)})))},Pe=a(41),Ne=a(73),Ie=a.n(Ne),ke={devrim:"Devrim Kay (EDZ)",sloane:"Sloane (Titan)",failsafe:"Failsafe (Nessus)",asher:"Asher Mir (Io)",zavala:"Zavala (Vanguard, Tower)",shaxx:"Shaxx (Crucible, Tower)",banshee:"Banshee-44 (Gunsmith, Tower)",fanboy:"Brother Vance (Mercury)",bray:"Ana Bray (Mars)",werner:"Werner 99-40 (Tower, Nessus Barge)"},Te=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a,r,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.vendorengrams.xyz/getVendorDrops");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,r=Date.now(),te=n={data:a,updateTimestamp:r},e.abrupt("return",n);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Me=function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!te){e.next=2;break}return e.abrupt("return",te);case 2:return re||(re=Te()),ae||(ae=setInterval((function(){Te().catch((function(e){return console.warn("Error refreshing vendorengrams.xyz data",e)}))}),3e5)),e.abrupt("return",re);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Re=a(6),Ae=a.n(Re),Ce=function(e){var t,a,r,o=e.vendor,c=e.manifestData.DestinyVendorDefinition[o.vendorID];return c?a=n.a.createElement(n.a.Fragment,null,n.a.createElement("img",{className:Ae.a.icon,src:"https://www.bungie.net".concat(c.displayProperties.icon),alt:""}),c.displayProperties.name):(r=o.shorthand,a=ke[r]||r),n.a.createElement("div",{className:B()(Ae.a.vendor,(t={},Object(z.a)(t,Ae.a.high,"2"===o.drop),Object(z.a)(t,Ae.a.low,"1"===o.drop),Object(z.a)(t,Ae.a.noData,"0"===o.drop),t))},a)},Be=function(e,t){return n.a.createElement("ul",{className:Ae.a.vendorList},e.map((function(e){return n.a.createElement("li",{className:Ae.a.vendorListItem,key:e.shorthand},n.a.createElement(Ce,{manifestData:t,vendor:e}))})))},Le=function(e){var t=e.manifestData,a=Object(r.useState)(void 0),o=Object(u.a)(a,2),c=o[0],i=o[1],s=function(){Me().then((function(e){return i(e)})).catch((function(e){return console.warn("Error fetching vendor engrams data:",e)}))};Object(Pe.a)(s,1e4),Object(r.useEffect)(s,[]);var l=Object(r.useState)(null),p=Object(u.a)(l,2),m=p[0],f=p[1];if(Object(Pe.a)((function(){if(c){var e=Ie()(c.updateTimestamp-Date.now(),{round:!0,largest:1});f(e)}else f(null)}),1e3),!t)return null;var d=c&&c.data.filter((function(e){return"2"===e.drop&&"1"===e.display}))||[],h=c&&c.data.filter((function(e){return"0"===e.drop&&"1"===e.display}))||[];return c?n.a.createElement("div",{className:Ae.a.vendorDisplay},d.length>0&&n.a.createElement("div",{className:B()(Ae.a.section,Ae.a.withSeparator)},n.a.createElement("div",{className:Ae.a.description},"These vendors are currently giving at-level engrams which can help you raise the power of slots below your average, or to provide items for infusion:"),Be(d,t)),h.length>0&&n.a.createElement("div",{className:Ae.a.section},n.a.createElement("div",{className:Ae.a.description},"Some vendors are missing data, visit"," ",n.a.createElement("a",{href:"https://www.vendorengrams.xyz",target:"_blank",rel:"noopener"},"vendorengrams.xyz")," ","if you can help provide data for these vendors:"),Be(h,t)),n.a.createElement("div",{className:Ae.a.section},n.a.createElement("div",null,"Data provided by"," ",n.a.createElement("a",{href:"https://www.vendorengrams.xyz",target:"_blank",rel:"noopener"},"vendorengrams.xyz"),m&&n.a.createElement(n.a.Fragment,null,", last updated ",m," ago.")))):null},Ve=a(74),He=a.n(Ve),ze=a(42),Fe=a.n(ze),qe=a(43),We=a.n(qe),Ke=a(33),Ue=a.n(Ke),Ge=a(75),Je=a.n(Ge);function Ye(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function Ze(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ye(a,!0).forEach((function(t){Object(z.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ye(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Qe,Xe=function(e){return Object.values(e).reduce((function(e,t){return e+t}),0)/Object.keys(q).length},$e=function(e){return Math.floor(Xe(e))},et=function(e){return Object.values(e).reduce((function(e,t){return e.concat(t.items)}),[])},tt=function(){var e=Object(l.a)(s.a.mark((function e(t){var a,r,n,o,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t;case 2:if((a=e.sent)&&a.Response&&a.Response.characters){e.next=5;break}return e.abrupt("return");case 5:if(!(r=a.Response.characters.data)){e.next=11;break}return n=function(e){var t=r[e];return{character:t,className:J[t.classType],id:e,overallPower:t.light}},o=Object.keys(r),c=o.map((function(e){return n(e)})),e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),at=function(e,t,a,r){return e.map((function(e){return Ze({},e,{instanceData:e.itemInstanceId?a[e.itemInstanceId]:void 0,itemDefinition:t.DestinyInventoryItemDefinition[e.itemHash]})})).filter((function(e){return e.instanceData&&e.itemDefinition&&[U,G].includes(e.itemDefinition.itemType)})).map((function(e){return Ze({},e,{instanceData:e.instanceData,itemDefinition:e.itemDefinition})})).map((function(e){return Ze({},e,{slotName:W[e.itemDefinition.inventory.bucketTypeHash]})})).filter((function(e){return function(e,t){return!!e.instanceData.canEquip||(16===e.instanceData.cannotEquipReason||!(e.instanceData.equipRequiredLevel>t.baseCharacterLevel)&&(3===e.itemDefinition.classType||e.itemDefinition.classType===t.classType))}(e,r)}))},rt=function(e){if(!e||!e.instanceData||!e.instanceData.primaryStat)return 0;var t=e.instanceData.primaryStat.value;return e.instanceData.isEquipped&&(t+=.1),1===e.location&&(t+=.05),t},nt=function(e){return e.itemDefinition.equippingBlock.uniqueLabel},ot=function(e,t,a,r,n,o,c,i){var s=t[e],l=J[s.classType],u=at(n[e].items.concat(o[e].items).concat(c),r,a,s),p=at(i.items,r,a,s).filter((function(e){return 3===e.itemDefinition.classType||e.itemDefinition.classType===s.classType})),m=u.concat(p),f=Fe()(m,(function(e){return e.slotName})),d=We()(f,(function(e){return Ue()(e,rt)})),h=Fe()(Object.values(d).filter(nt),nt);He()(h,(function(e){if(!(e.length<=1)){var t=[];if(e.forEach((function(a){var r=e.filter((function(e){return e!==a})),n=!0,o=Ze({},d);r.forEach((function(e){var t=f[e.slotName].filter((function(e){return!nt(e)}));t.length>0?o[e.slotName]=Ue()(t,rt):n=!1})),n&&t.push(o)})),t.length>0){var a=Ue()(t,(function(e){return Je()(Object.values(e),rt)}));d=a}}}));var v,b=function(e){return We()(e,(function(e){return e.instanceData.primaryStat.value}))}(d),w=$e(b),g=Object.values(o).flatMap((function(e){return e.items})).find((function(e){return 1387688628===e.itemHash}));if(g&&g.itemInstanceId){var _=r.DestinyInventoryItemDefinition[g.itemHash];v={bonusPower:a[g.itemInstanceId].primaryStat.value,iconPath:_.displayProperties.icon,name:_.displayProperties.name}}for(var y=Ze({},b),E=function(){var e=$e(y);Object.keys(y).forEach((function(t){return y[t]=Math.max(900,Math.max(e,y[t]))}))};Object.values(y).some((function(e){return e<$e(y)||e<900}));)E();var O=$e(y),S=Xe(b);return{artifactData:v,character:s,className:l,id:e,overallPower:w,potentialOverallPower:O,potentialPowerBySlot:y,topItemBySlot:d,powerRequiredToReachPotential:8*(O-S)}},ct=function(){var e=Object(l.a)(s.a.mark((function e(t,a){var r,n,o,c,i,u,p,m,f,d,h,v,b,w,g,_,y,E=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=E.length>2&&void 0!==E[2]&&E[2],e.prev=1,e.next=4,A();case 4:if(e.sent){e.next=7;break}return e.abrupt("return");case 7:if(n=O(),a(!0),o=M()){e.next=12;break}return e.abrupt("return");case 12:return i=!0,r&&((c=S(o.membershipType,o.membershipId)).catch((function(){})),u=tt(c).catch((function(e){})),Object(l.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u;case 2:(a=e.sent)&&i&&t(a);case 4:case"end":return e.stop()}}),e)})))()),e.next=16,j(o.membershipType,o.membershipId);case 16:if(p=e.sent,a(!1),p&&p.Response&&p.Response.characters&&p.Response.characters.data&&p.Response.characterEquipment&&p.Response.characterEquipment.data&&p.Response.characterInventories&&p.Response.characterInventories.data&&p.Response.profileInventory&&p.Response.profileInventory.data&&p.Response.itemComponents&&p.Response.itemComponents.instances&&p.Response.itemComponents.instances.data){e.next=20;break}return e.abrupt("return");case 20:return m=p.Response.characters.data,f=p.Response.characterEquipment.data,d=p.Response.characterInventories.data,h=p.Response.profileInventory.data,v=p.Response.itemComponents.instances.data,e.next=27,n;case 27:if(b=e.sent){e.next=30;break}return e.abrupt("return");case 30:w=et(d).concat(et(f)).concat(h.items),g=w.filter((function(e){var t=e.itemHash&&b.DestinyInventoryItemDefinition[e.itemHash];return t&&t.itemType===G})),_=Object.keys(m),y=_.map((function(e){return ot(e,m,v,b,d,f,g,h)})),i=!1,t(y),e.next=43;break;case 38:return e.prev=38,e.t0=e.catch(1),console.error("Error fetching manifest and character data",e.t0),a(!1),e.abrupt("return");case 43:case"end":return e.stop()}}),e,null,[[1,38]])})));return function(t,a){return e.apply(this,arguments)}}(),it=(a(179),a(20)),st=a.n(it),lt=function(){window.location.search=""},ut=function(){var e=Object(r.useState)(k()),t=Object(u.a)(e,2),a=t[0],o=t[1],c=Object(r.useState)(!1),i=Object(u.a)(c,2),p=i[0],m=i[1],f=Object(r.useState)(!!M()),d=Object(u.a)(f,2),v=d[0],b=d[1],w=Object(r.useState)(void 0),g=Object(u.a)(w,2),_=g[0],y=g[1],E=Object(r.useState)(!1),S=Object(u.a)(E,2),j=S[0],D=S[1],x=Object(r.useState)(!1),P=Object(u.a)(x,2),N=P[0],I=P[1],T=Object(r.useState)(void 0),C=Object(u.a)(T,2),B=C[0],L=C[1],V=!!_;Object(r.useEffect)((function(){a||function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:e.sent?o(!0):(m(!0),setTimeout(lt,5e3));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a]),Object(r.useEffect)((function(){Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O();case 3:t=e.sent,y(t),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message),D(!0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[]),Object(r.useEffect)((function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];N||ct(L,I,e)};a&&v&&!N&&(Qe||(Qe=setInterval(e,15e3),e(!0),window.refreshCharacterData=function(){return e()}))}),[a,v,V,N]);var H=function(e){h.event({category:"Platform",action:"Select platform",label:"Membership type: ".concat(e.membershipType)}),R(e),b(!0)},z="";return p?z=n.a.createElement("span",null,"Authentication error, ",n.a.createElement("a",{href:"/"},"refresh page")," to try again!"):j?z=n.a.createElement("span",null,"Error fetching manifest, ",n.a.createElement("a",{href:"/"},"refresh page")," to try again!"):a?v?V?B&&0!==B.length||(z=N?"Fetching character data...":"No character data"):z="Fetching Destiny item manifest...":z="Waiting for Destiny platform selection...":z="Authenticating...",window.characterData=B,B&&B.length>0?n.a.createElement("div",{className:st.a.App},n.a.createElement(xe,{onMembershipSelect:H}),n.a.createElement("div",{className:st.a.charactersContainer},n.a.createElement("div",{className:st.a.characters},B.map((function(e){return n.a.createElement(he,{key:e.id,data:e})})))),n.a.createElement(Le,{manifestData:_}),z&&n.a.createElement(Se,null,z),N&&n.a.createElement(we,null),n.a.createElement(ye,null)):n.a.createElement("div",{className:st.a.App},n.a.createElement(xe,{onMembershipSelect:H}),n.a.createElement(Se,null,z),n.a.createElement(ye,null))};a(180),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(ut,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},19:function(e,t,a){e.exports={anchor:"FetchSpinner_anchor__2bpEe",spinner:"FetchSpinner_spinner__3uf-_",spin:"FetchSpinner_spin__3wMft",fetchSpinnerContainer:"FetchSpinner_fetchSpinnerContainer__2f9d4",spinnerSmall:"FetchSpinner_spinnerSmall__2pJsX",spinnerTiny:"FetchSpinner_spinnerTiny__1LS_-"}},20:function(e,t,a){e.exports={App:"App_App__15LM-",loadingContainer:"App_loadingContainer__1Pa9s",charactersContainer:"App_charactersContainer__1RSU_",characters:"App_characters__1GhrS",loadingStatus:"App_loadingStatus__3QEhd"}},32:function(e,t,a){e.exports={membershipSelect:"MembershipSelect_membershipSelect__3GbZz",membership:"MembershipSelect_membership__3vKKK",platform_xbox:"MembershipSelect_platform_xbox__1EgLN",platform_psn:"MembershipSelect_platform_psn__2ASN8",platform_steam:"MembershipSelect_platform_steam__3zG5m",platform_blizzard:"MembershipSelect_platform_blizzard__1zLDb"}},40:function(e,t,a){e.exports={kofiContainer:"KoFi_kofiContainer__1-NvR",hidden:"KoFi_hidden__1s851"}},6:function(e,t,a){e.exports={vendorDisplay:"VendorDisplay_vendorDisplay__3ggMy",section:"VendorDisplay_section__2vxeV",description:"VendorDisplay_description__1_SQm",withSeparator:"VendorDisplay_withSeparator__3hVVd",vendorList:"VendorDisplay_vendorList__3mO3g",vendor:"VendorDisplay_vendor__oSDhY",high:"VendorDisplay_high__1YiAA",icon:"VendorDisplay_icon__3jZn7"}},7:function(e,t,a){e.exports={hints:"PowerHints_hints__9HbgH",hint:"PowerHints_hint__2zx_C",worldDropHint:"PowerHints_worldDropHint__3M_Nv",powerfulHint:"PowerHints_powerfulHint__26w25",pinnacleHint:"PowerHints_pinnacleHint__c2cdM",separator:"PowerHints_separator__1_of2",hintExtra:"PowerHints_hintExtra__2TIGc",hintExtraInner:"PowerHints_hintExtraInner__2tEbw"}},72:function(e,t,a){e.exports={inlinePowerNumber:"Power_inlinePowerNumber__28Oqz"}},76:function(e,t,a){e.exports=a(181)},8:function(e,t,a){e.exports={barWrapper:"PowerBar_barWrapper__2Er15",iconWrapper:"PowerBar_iconWrapper__1k9U_",icon:"PowerBar_icon__3zN_u",barContainer:"PowerBar_barContainer__KfIri",barLine:"PowerBar_barLine__Fc3BR",filledBar:"PowerBar_filledBar__3a32S",label:"PowerBar_label__32eba",power:"PowerBar_power__2ZVuC",max:"PowerBar_max__L5cvP",belowAverage:"PowerBar_belowAverage__2r-Dj"}}},[[76,1,2]]]);
//# sourceMappingURL=main.fb51ed06.chunk.js.map