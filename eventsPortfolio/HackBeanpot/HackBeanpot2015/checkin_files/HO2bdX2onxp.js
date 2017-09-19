if (self.CavalryLogger) { CavalryLogger.start_js(["mO71T"]); }

__d("P2PLinkConstants",[],(function a(b,c,d,e,f,g){f.exports={receiverIneligibleHelpURI:"http:\/\/www.facebook.com\/help\/1495718484027862",addDebitCardHelpURI:"http:\/\/www.facebook.com\/help\/200298266807261",helpCenterURI:"http:\/\/www.facebook.com\/help\/863171203733904",contactSupportURI:"http:\/\/www.facebook.com\/help\/contact\/1491759007768605",disabledPaymentsSupportURI:"http:\/\/www.facebook.com\/help\/contact\/223254857690713",complianceLearnMoreURI:"http:\/\/www.facebook.com\/help\/1555715811351399",complianceLearnMoreMsiteURI:"http:\/\/www.facebook.com\/help\/messenger-app\/369959656515129",securePayInfoLearnMoreURI:"http:\/\/www.facebook.com\/help\/146373702454423",contactFraudTeamURI:"http:\/\/www.facebook.com\/help\/contact\/370238886476028",payerProtectionURI:"http:\/\/www.facebook.com\/payer_protection\/",helpTransferSystemFailureURI:"http:\/\/www.facebook.com\/help\/contact\/614010102040957",helpTransferManualReviewURI:"http:\/\/www.facebook.com\/help\/messenger-app\/1463256903894928",helpTransferRecipientCanceledURI:"http:\/\/www.facebook.com\/help\/messenger-app\/1564459413784472",helpTransferCompletedURI:"http:\/\/www.facebook.com\/help\/messenger-app\/750020781733477",helpTransferCanceledSameCardURI:"http:\/\/www.facebook.com\/help\/messenger-app\/818512131561533",helpTransferPushFailURI:"http:\/\/www.facebook.com\/help\/1386991644944095",settingsWWWURI:"http:\/\/www.facebook.com\/settings?tab=payments",settingsMsiteURI:"http:\/\/m.facebook.com\/settings\/p2p\/",mTermsURI:"http:\/\/www.facebook.com\/legal\/m",mHelpURI:"http:\/\/www.facebook.com\/help\/messenger-app\/870471599656315",disputeURI:"http:\/\/www.facebook.com\/help\/contact\/828169843971429",paymentMethodsURI:"https:\/\/www.facebook.com\/settings?tab=payments&section=settings",paymentHistoryURI:"https:\/\/www.facebook.com\/settings?tab=payments&section=history",paymentsTermsURI:"\/payments_terms\/"}}),null);
__d('FBPaymentsErrorNotice_DEPRECATED.react',['cx','React','XUINotice.react'],(function a(b,c,d,e,f,g,h){var i,j,k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;'use strict';for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.renderErrorContent=function(){var r=this.props.error;if(r.message.__html){return c('React').createElement('span',{dangerouslySetInnerHTML:r.message})}else return c('React').createElement('span',null,r.message);}.bind(this),n}l.prototype.render=function(){'use strict';return c('React').createElement(c('XUINotice.react'),{className:"_3-8n",use:'warn'},this.renderErrorContent())};l.propTypes={error:k.object};l.defaultProps={error:null};f.exports=l}),null);
__d("messengerProfileImageWrapperReact",["cx","cssVar","React","utilsRe","bs_js_boolean","CurrentUser","reasonReact","TooltipData","joinClasses","bs_js_primitive","MessagingThreadType","getViewportDimensions"],(function a(b,c,d,e,f,g,h,i){'use strict';var j=c("reasonReact").statelessComponent("MessengerProfileImageWrapperReact");function k(m,n,o,p,q,r,s,t,u,v,w){var x=u?u[0]:"",y=function aa(){if(n){return c("React").createElement("div",{className:"_4ld_ _2pom"},c("React").createElement("div",{className:"_2pon _4p4t"},n[0]))}else{var ba=0;if(o){ba=1}else if(p){ba=1}else return null;if(ba===1)if(v!==0){if(p){if(c("CurrentUser").isWorkUser()){return null}else{var ca=p[0];return c("React").createElement("div",{className:"_4ld_ _2pom"},c("React").createElement("div",{className:"_2pon"+(c("bs_js_boolean").to_js_boolean(ca)?" "+"_1zvi":"")+(c("bs_js_boolean").to_js_boolean(1-ca)?" "+"_2poo":"")}))}}else if(c("CurrentUser").isWorkUser()){return null}else{var da=o[0];return c("React").createElement("div",{className:"_4ld_ _2pom"},c("React").createElement("div",{className:"_2pon"+(c("bs_js_boolean").to_js_boolean(da)?" "+"_2poo":"")+(c("bs_js_boolean").to_js_boolean(1-da)?" "+"_2pop":"")}))}}else return null;}},z=j.slice();z[9]=function(){var aa=t?""+(String(t[0])+"px"):"auto",ba=r?+(r[0]===c("MessagingThreadType").ROOM):0,ca=m?{"aria-hidden":c("bs_js_boolean").to_js_boolean(m[0])}:{},da;if(s){var ea=s[0];if(ea===""){da=ca}else{var fa=c("getViewportDimensions")().width,ga=parseInt("700px".replace("px",""),10),ha=+(fa<=ga),ia=ha!==0?"above":"left";da=Object.assign(ca,c("TooltipData").propsFor(ea,ia))}}else da=ca;var ja=ba!==0?{background:q?q[0]:"#0084ff",height:aa,width:aa}:{height:aa,width:aa};return c("React").cloneElement(c("React").createElement("div",{className:c("joinClasses")("_4ldz",x),style:{height:aa,width:aa}},c("reasonReact").createDomElement("div",{className:"_4ld-"+(c("bs_js_boolean").to_js_boolean(ba)?" "+"_180i":""),style:ja},w),y(0)),da)};return z}var l=c("reasonReact").wrapReasonForJs(j,function(m){var n=m.className;return k(c("utilsRe").nullUndefinedBooleanToOptionBool(m.ariaHidden),c("bs_js_primitive").null_undefined_to_opt(m.customBadge),c("utilsRe").nullUndefinedBooleanToOptionBool(m.isMessengerUser),0,c("bs_js_primitive").null_undefined_to_opt(m.threadColor),c("bs_js_primitive").null_undefined_to_opt(m.threadType),c("bs_js_primitive").null_undefined_to_opt(m.tooltipContent),c("bs_js_primitive").null_undefined_to_opt(m.size),[n==null?"":n],+m.showBadge,[].concat(m.children))});g.component=j;g.make=k;g.jsComponent=l}),null);
__d('MessengerContactImage.react',['Image.react','messengerProfileImageWrapperReact','React'],(function a(b,c,d,e,f,g){var h,i,j=c('messengerProfileImageWrapperReact').jsComponent,k=c('React').PropTypes;h=babelHelpers.inherits(l,c('React').PureComponent);i=h&&h.prototype;l.prototype.render=function(){'use strict';return c('React').createElement('div',{className:this.props.className},c('React').createElement(j,{isMessengerUser:this.props.isMessengerUser,isPartiesUser:this.props.isPartiesUser,size:this.props.size,customBadge:this.props.customBadge,showBadge:false},c('React').createElement(c('Image.react'),{alt:'',height:this.props.size,src:this.props.src,width:this.props.size})))};function l(){'use strict';h.apply(this,arguments)}l.propTypes={customBadge:k.string,isMessengerUser:k.bool,size:k.number.isRequired,src:c('Image.react').validateImageSrcPropType};f.exports=l}),null);
__d('MessengerDialogTitle.react',['cx','React','joinClasses'],(function a(b,c,d,e,f,g,h){'use strict';var i,j;i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){return c('React').createElement('div',{className:c('joinClasses')("_19jt",this.props.className)},this.props.children)};function k(){i.apply(this,arguments)}f.exports=k}),null);
__d("QuicksilverSources",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({FB_CANVAS:"fb_canvas",FB_FEED:"fb_feed",FB_FEED_EGO:"fb_ego_igyml",FB_FEED_SCREENSHOT:"fb_feed_screenshot",FB_SCORE_PASSED_NOTIF:"fb_score_passed_notif",FB_SEARCH:"big_blue_search",FB_FEED_IGYML_QP:"fb_qp_igyml",FB_FEED_NEW_RELEASES_QP:"fb_qp_new_releases",FB_FEED_PLAYING_WITH_FRIENDS_QP:"fb_qp_playing_with_friends",FB_FEED_PLAYED_RECENTLY_QP:"fb_qp_played_recently",FB_FEED_LIVE_VIDEO:"fb_feed_live_video",FB_GROUP_COMPOSER:"fb_group_composer",FB_GROUP_GAMES_TAB:"fb_group_games_tab",FB_GROUP_MALL:"fb_group_mall",FB_GROUP_MALL_EGO:"fb_group_mall_ego",FB_GROUP_MALL_SCREENSHOT:"fb_group_mall_screenshot",FB_GROUP_NEWS_FEED:"fb_group_news_feed",FB_GROUP_NEWSFEED_SCREENSHOT:"fb_group_newsfeed_screenshot",FB_GROUP_RHC_LEADERBOARD:"fb_group_rhc_leaderboard",FB_GROUP_SCORE_PASSED_NOTIF:"fb_group_score_passed_notif",GAMEROOM_FEED_POST:"gameroom_feed_post",M_ME_LINK:"m_me_link",MESSENGER_ADMIN_MESSAGE:"admin_message",MESSENGER_CALL_TO_ACTION:"call_to_action",MESSENGER_COMPOSER:"composer",MESSENGER_GAME_EMOJI:"game_emoji",MESSENGER_GAME_SHARE:"game_share",MESSENGER_GAME_SCORE_SHARE:"game_score_share",MESSENGER_GAME_SEARCH:"search",MARKETPLACE:"marketplace",MOBILE_BOOKMARK:"mobile_bookmark",MSITE_BOOKMARK:"msite_bookmark",MSITE:"msite",EMBEDDED_PLAYER:"embedded_player",WWW_BOOKMARK:"www_bookmark",WWW_APP_CENTER_BROWSE:"www_app_center_browse",WWW_APP_CENTER_CHALLENGE:"www_app_center_challenge",WWW_APP_CENTER_MAIN:"www_app_center_main",WWW_LINK_SHARE:"www_link_share",UNKNOWN:"unknown"})}),null);
__d("XGamesDesktopAppDownloadController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/games\/desktopapp\/download\/",{app_id:{type:"Int"},fbsource:{type:"Int"},ref:{type:"String"},canvas_url:{type:"String"}})}),null);