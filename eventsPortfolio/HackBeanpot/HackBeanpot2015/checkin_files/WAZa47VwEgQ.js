if (self.CavalryLogger) { CavalryLogger.start_js(["F2Sc5"]); }

__d('PageVoiceDropdownSelector.react',['cx','BootloadedComponent.react','Image.react','JSResource','React','XUIPopoverButton.react','XUISpinner.react'],(function a(b,c,d,e,f,g,h){'use strict';var i,j,k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.state={dialogShown:false,bootloadFinished:false},this.$PageVoiceDropdownSelector1=function(r){this.props.onChange(r);this.setState({dialogShown:false})}.bind(this),this.$PageVoiceDropdownSelector2=function(){return this.refs['open-menu-button']}.bind(this),this.$PageVoiceDropdownSelector3=function(){this.setState({bootloadFinished:true})}.bind(this),this.$PageVoiceDropdownSelector7=function(event){this.setState({dialogShown:!this.state.dialogShown,shownBusinessID:this.state.defaultBusinessID},function(){return this.props.onClick(event)}.bind(this))}.bind(this),this.$PageVoiceDropdownSelector4=function(r){this.setState({dialogShown:r})}.bind(this),this.$PageVoiceDropdownSelector5=function(){var r=this.props.selectedActorID;if(!r)return '';if(r===this.props.user.id)return this.props.user.thumbSrc||'';return this.props.pages[r].thumbSrc||''}.bind(this),this.$PageVoiceDropdownSelector6=function(){var r=this.props.selectedActorID;if(!r)return '';if(r===this.props.user.id)return this.props.user.name||'';return this.props.pages[r].name||''}.bind(this),n}l.prototype.render=function(){var m=null;if(this.state.dialogShown)m=c('React').createElement(c('BootloadedComponent.react'),babelHelpers['extends']({bootloadLoader:c('JSResource')('PageVoiceDropdownSelectorMenu.react').__setRef('PageVoiceDropdownSelector.react'),bootloadPlaceholder:c('React').createElement('div',null),onComponentLoad:this.$PageVoiceDropdownSelector3},this.props,{contextRef:this.$PageVoiceDropdownSelector2,shown:true,shownBusinessID:this.state.shownBusinessID,onChange:this.$PageVoiceDropdownSelector1,onToggle:this.$PageVoiceDropdownSelector4}));var n=this.state.dialogShown&&!this.state.bootloadFinished,o=this.props.loading||n,p=null,q=null;if(o){q=c('React').createElement('span',{className:"_2wk7"},c('React').createElement(c('XUISpinner.react'),null))}else p=c('React').createElement(c('Image.react'),{className:"_6vg",height:16,src:this.$PageVoiceDropdownSelector5(),width:16});return c('React').createElement('span',null,c('React').createElement(c('XUIPopoverButton.react'),{disabled:this.props.disabled,image:c('React').createElement('span',null,p,q),label:this.$PageVoiceDropdownSelector6(),labelIsHidden:!this.props.showPageName,maxwidth:this.props.maxwidth,ref:'open-menu-button',suppressed:this.props.suppressed,type:'button',onClick:this.$PageVoiceDropdownSelector7}),m)};l.propTypes={disabled:k.bool,loading:k.bool,maxWidth:k.number,pages:k.object.isRequired,selectedActorID:k.string,showPageName:k.bool,suppressed:k.bool.isRequired,user:k.object.isRequired,onChange:k.func.isRequired,onClick:k.func.isRequired};l.defaultProps={disabled:false,showPageName:false};f.exports=l}),null);
__d('ActorSelector.react',['cx','Arbiter','BizSiteIdentifier.brands','BootloadedComponent.react','Bootloader','Event','JSResource','PagesCalloutActions','PagesCalloutDispatcher','PageVoiceDropdownSelector.react','React','ReactDOM','ShortProfiles','TooltipData','emptyFunction','getObjectValues','goURI','joinClasses','tidyEvent'],(function a(b,c,d,e,f,g,h){var i,j,k=c('React').PropTypes,l=500;i=babelHelpers.inherits(m,c('React').Component);j=i&&i.prototype;function m(){var n,o;'use strict';for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=j.constructor).call.apply(n,[this].concat(q)),this.state={actorData:{},nuxShown:false,selectedActorID:this.props.selectedActorID},this.$ActorSelector4=function(){return this.refs.selector}.bind(this),this.$ActorSelector3=function(){c('ShortProfiles').getMulti(this.props.actorIDs,function(s){if(this.$ActorSelector2)this.setState({actorData:s});}.bind(this))}.bind(this),this.$ActorSelector8=function(){if(this.state.nuxShown)this.$ActorSelector5();}.bind(this),this.$ActorSelector7=function(s){if(this.props.syncEnabled){c('Arbiter').inform('ActorSelector/ActorChange',s);return}this.props.onChange(s)}.bind(this),this.$ActorSelector6=function(){this.$ActorSelector5();c('goURI')(this.props.settingsURI)}.bind(this),this.$ActorSelector5=function(){this.setState({nuxShown:false});if(this.props.onCompleteNux)this.props.onCompleteNux();}.bind(this),this.$ActorSelector10=function(){if(!this.props.nuxEnabled)return;if(this.props.nuxHoverContext&&!this.$ActorSelector13)this.$ActorSelector13=c('tidyEvent')(c('Event').listen(this.props.nuxHoverContext,'mouseenter',function(){c('Bootloader').loadModules(["ActorSelectorNUXLayer.react"],c('emptyFunction'),'ActorSelector.react');var s=setTimeout(function(){this.$ActorSelector13.remove();this.$ActorSelector14()}.bind(this),l),t=c('tidyEvent')(c('Event').listen(this.props.nuxHoverContext,'mouseleave',function(){clearTimeout(s);t.remove()}))}.bind(this)));}.bind(this),this.$ActorSelector9=function(){if(!this.props.nuxEnabled||!this.props.pageTimelineNuxTipID)return;c('PagesCalloutDispatcher').dispatch({type:c('PagesCalloutActions').REGISTER_CALLOUT,data:{tip_id:this.props.pageTimelineNuxTipID,showCallback:function(){return this.$ActorSelector14()}.bind(this)}})}.bind(this),this.$ActorSelector14=function(){if(this.props.nuxEnabled)this.setState({nuxShown:true});}.bind(this),o}m.prototype.componentWillMount=function(){'use strict';this.$ActorSelector2=true;this.$ActorSelector3()};m.prototype.render=function(){'use strict';if(!this.state.selectedActorID||!this.state.actorData[this.state.selectedActorID])return c('React').createElement('div',null);if(this.props.actorIDs.length===0)return c('React').createElement('div',null);var n=null;if(this.state.nuxShown)n=c('React').createElement(c('BootloadedComponent.react'),{bootloadLoader:c('JSResource')('ActorSelectorNUXLayer.react').__setRef('ActorSelector.react'),bootloadPlaceholder:c('React').createElement('span',null),onCompleteNux:this.$ActorSelector5,onClickSettings:this.$ActorSelector6,settingsURI:this.props.settingsURI,shown:true,contextRef:this.$ActorSelector4,nuxBody:this.props.nuxBody});return c('React').createElement('span',{className:c('joinClasses')("_6vh",this.props.className),'data-testid':'actor-selector'},c('React').createElement('span',{ref:'selector'},c('React').createElement(c('PageVoiceDropdownSelector.react'),{disabled:this.props.disabled,loading:this.props.loading,pages:this.state.actorData,onChange:this.$ActorSelector7,onClick:this.$ActorSelector8,selectedActorID:this.state.selectedActorID,searchBarVisible:true,showBusinessPages:false,showPageName:this.props.showName,showNameMaxWidth:this.props.showNameMaxWidth,showPersonalPagesInRoot:!c('BizSiteIdentifier.brands').isBizSite(),suppressed:this.props.suppressed,user:c('getObjectValues')(this.state.actorData)[0]})),n)};m.prototype.componentDidMount=function(){'use strict';this.$ActorSelector9();this.$ActorSelector10();this.$ActorSelector11();if(this.props.syncEnabled)this.$ActorSelector12();};m.prototype.componentDidUpdate=function(n,o){'use strict';if(this.props.actorIDs.toString()!==n.actorIDs.toString())this.$ActorSelector3();this.$ActorSelector10();this.$ActorSelector11();if(this.state.nuxShown&&!o.nuxShown&&this.props.onShowNux)this.props.onShowNux();if(this.props.selectedActorID!==n.selectedActorID){this.setState({selectedActorID:this.props.selectedActorID});c('Arbiter').inform('ActorSelector/ActorSelected',{selectedActorID:this.props.selectedActorID})}};m.prototype.componentWillUnmount=function(){'use strict';this.$ActorSelector2=false;this.$ActorSelector1&&c('Arbiter').unsubscribe(this.$ActorSelector1)};m.prototype.$ActorSelector12=function(){'use strict';this.$ActorSelector1=c('Arbiter').subscribe('ActorSelector/ActorChange',function(n,o){if(this.props.actorIDs.indexOf(o.value)===-1)return;this.setState({selectedActorID:o.value},function(){return this.props.onChange(o)}.bind(this))}.bind(this))};m.prototype.$ActorSelector11=function(){'use strict';if(!this.refs.selector)return;var n=this.state.actorData[this.state.selectedActorID];if(!n)return;if(!this.props.tooltipConstructor)return;c('TooltipData').set(c('ReactDOM').findDOMNode(this.refs.selector),this.props.tooltipConstructor(n.name),'above','right')};m.propTypes={actorIDs:k.array.isRequired,disabled:k.bool,loading:k.bool,nuxBody:k.node,nuxEnabled:k.bool,nuxHoverContext:k.object,onChange:k.func.isRequired,onCompleteNux:k.func,onShowNux:k.func,pageTimelineNuxTipID:k.string,selectedActorID:k.string,settingsURI:k.string,showName:k.bool,showNameMaxWidth:k.number,suppressed:k.bool,syncEnabled:k.bool,tooltipConstructor:k.func};m.defaultProps={disabled:false,suppressed:true};f.exports=m}),null);
__d('LeftNavFitToHeight',['csx','cx','Bootloader','CSS','DOMQuery','DOMDimensions','Parent','Run','throttle'],(function a(b,c,d,e,f,g,h,i){var j=null,k=null,l=false,m={fitIfOnlyOne:false},n='fixed_elem',o={MIN_CHILDREN:1,MAX_CHILDREN:10,TOP_MARGIN:43,BOTTOM_MARGIN:78,init:function aa(ba,ca){j=ba;Object.assign(m,ca);k=c('Parent').bySelector(j,"._1qks > #pagelet_navigation");if(k){c('CSS').addClass(k,n);c('CSS').addClass(k,"_1qks");p();window.addEventListener('resize',p);c('Run').onLeave(o.destroy)}},destroy:function aa(){if(k){c('CSS').removeClass(k,n);c('CSS').removeClass(k,"_1qks")}j=null;k=null;l=false;window.removeEventListener('resize',p)}},p=c('throttle')(function(){if(j&&!s(j))q(j);});function q(aa){if(!l){l=true;c('Bootloader').loadModules(["LeftNavScrollable"],function(ba){ba.init(aa)},'LeftNavFitToHeight')}}function r(aa){var ba=c('DOMQuery').scry(aa,'#pinnedNav ul')[0],ca=c('DOMQuery').scry(aa,'#appsNav ul')[0];return {shortcutsContainer:ba,exploreContainer:ca}}function s(aa){var ba=r(aa),ca=ba.shortcutsContainer,da=ba.exploreContainer,ea=!!ca+!!da;if(!v(aa,ca,da))return false;var fa=y(ca,da);if(!fa)return false;var ga=u(aa,ca,da),ha=Math.floor(ga/fa),ia=ca?c('DOMQuery').scry(ca,'li.sideNavItem'):[],ja=da?c('DOMQuery').scry(da,'li.sideNavItem'):[],ka=t(ha,ia.length,ja.length),la=ka.shortcutsCount,ma=ka.exploreCount,na="_3odl";ia.forEach(function(oa,pa){c('CSS').conditionClass(oa,na,pa>=la)});ja.forEach(function(oa,pa){c('CSS').conditionClass(oa,na,pa>=ma)});if(ha<o.MIN_CHILDREN*ea)return false;return true}function t(aa,ba,ca){var da=Math.max(Math.floor(aa/2),o.MIN_CHILDREN);da=Math.min(da,ba,o.MAX_CHILDREN);var ea=Math.max(aa-da,o.MIN_CHILDREN);ea=Math.min(ea,ca,o.MAX_CHILDREN);return {exploreCount:ea,shortcutsCount:da}}function u(aa){for(var ba=arguments.length,ca=Array(ba>1?ba-1:0),da=1;da<ba;da++)ca[da-1]=arguments[da];var ea=ca.reduce(function(ga,ha){if(ha!=null)return ga+c('DOMDimensions').getElementDimensions(ha).height;return ga},0),fa=c('DOMDimensions').getElementDimensions(aa).height;return window.innerHeight-(fa-ea)-(o.TOP_MARGIN+o.BOTTOM_MARGIN)}function v(aa){for(var ba=arguments.length,ca=Array(ba>1?ba-1:0),da=1;da<ba;da++)ca[da-1]=arguments[da];return aa&&c('DOMQuery').contains(window.document.body,aa)&&w(ca)}function w(aa){if(m.fitIfOnlyOne)return aa.find(function(ba){return x(ba)})!=null;return aa.every(function(ba){return x(ba)})}function x(aa){return aa!=null&&c('CSS').matchesSelector(aa,"._5pyq")}function y(){for(var aa=arguments.length,ba=Array(aa),ca=0;ca<aa;ca++)ba[ca]=arguments[ca];var da=z(ba);if(da!=null)return c('DOMDimensions').getElementDimensions(da).height;return 0}function z(aa){var ba='li.sideNavItem';for(var ca=aa,da=Array.isArray(ca),ea=0,ca=da?ca:ca[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var fa;if(da){if(ea>=ca.length)break;fa=ca[ea++]}else{ea=ca.next();if(ea.done)break;fa=ea.value}var ga=fa;if(ga!=null){var ha=c('DOMQuery').scry(ga,ba)[0];if(ha!=null)return ha;}}return null}f.exports=o}),18);
__d("ActorSelectorNuxTypes",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({COMPOSER:"composer_seen_count",COMPOSER_COVERED:"composer_covered_seen_count",M_COMPOSER:"m_composer_seen_count",M_UFI:"m_ufi_seen_count",UFI:"ufi_seen_count",UFI_TIMELINE:"ufi_timeline_seen_count",UFI_TIMELINE_COVERED:"ufi_timeline_covered_seen_count"})}),null);
__d("XActorSelectorNuxSeenWriteController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/actor_selector\/nux\/mark_seen\/",{nux_type:{type:"Enum",required:true,enumType:1}})}),null);
__d('UFIActorSelector.react',['csx','fbt','ActorSelector.react','ActorSelectorNuxTypes','Arbiter','AsyncRequest','Parent','React','ReactDOM','SubscriptionsHandler','UFICentralUpdates','UFIFeedbackTargets','UFIUserActions','XActorSelectorNuxSeenWriteController'],(function a(b,c,d,e,f,g,h,i){'use strict';var j,k,l=c('React').PropTypes,m='ufi_actor_selector_nux_disabled_event';j=babelHelpers.inherits(n,c('React').Component);k=j&&j.prototype;function n(){var o,p;for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return p=(o=k.constructor).call.apply(o,[this].concat(r)),this.state={loading:false,nuxEnabled:!!this.props.nuxEnabled,nuxHoverContext:null,selectedActorID:null},this.$UFIActorSelector3=function(t){this.setState({loading:true});c('UFIUserActions').changeActor(this.props.ftEntIdentifier,t.value)}.bind(this),this.$UFIActorSelector5=function(){var t=this.props.isTimeline?c('ActorSelectorNuxTypes').UFI_TIMELINE:c('ActorSelectorNuxTypes').UFI,u=c('XActorSelectorNuxSeenWriteController').getURIBuilder().setEnum('nux_type',t).getURI();new (c('AsyncRequest'))().setURI(u).send()}.bind(this),p}n.prototype.render=function(){return c('React').createElement(c('ActorSelector.react'),{actorIDs:this.props.actorIDs,loading:this.props.loading||this.state.loading,nuxBody:this.$UFIActorSelector2(),nuxEnabled:this.state.nuxEnabled,nuxHoverContext:this.state.nuxHoverContext,onChange:this.$UFIActorSelector3,onShowNux:this.$UFIActorSelector4,onCompleteNux:this.$UFIActorSelector5,selectedActorID:this.state.selectedActorID,settingsURI:this.props.settingsURI,tooltipConstructor:this.$UFIActorSelector6,syncEnabled:this.props.syncEnabled})};n.prototype.componentDidMount=function(){this.$UFIActorSelector7();this.$UFIActorSelector1=new (c('SubscriptionsHandler'))();this.$UFIActorSelector1.addSubscriptions(c('UFICentralUpdates').subscribe('feedback-updated',function(q,r){if(this.props.ftEntIdentifier in r.updates)this.$UFIActorSelector7();}.bind(this)),c('Arbiter').subscribe(m,function(){this.setState({nuxEnabled:false})}.bind(this)));var o=c('ReactDOM').findDOMNode(this);if(o){var p=c('Parent').bySelector(o,"._5pcr");if(p instanceof HTMLElement)this.setState({nuxHoverContext:p});}};n.prototype.componentWillUnmount=function(){this.$UFIActorSelector1.release()};n.prototype.$UFIActorSelector7=function(){c('UFIFeedbackTargets').getFeedbackTarget(this.props.ftEntIdentifier,function(o){this.setState({loading:false,selectedActorID:o.actorforpost})}.bind(this))};n.prototype.$UFIActorSelector2=function(){return i._("Like, comment or share as yourself or as one of the Pages you manage.")};n.prototype.$UFIActorSelector6=function(o){return i._("Liking and commenting as {actorName}",[i.param('actorName',o)])};n.prototype.$UFIActorSelector4=function(){c('Arbiter').inform(m)};n.propTypes={actorIDs:l.array.isRequired,ftEntIdentifier:l.string.isRequired,isTimeline:l.bool,loading:l.bool,nuxEnabled:l.bool,settingsURI:l.string,syncEnabled:l.bool};f.exports=n}),null);
__d('FeedImageErrorEventLogger',['Arbiter','BanzaiLogger','Bootloader','DataStore','DOMQuery','Parent','Run','URI','ge','getCrossOriginTransport'],(function a(b,c,d,e,f,g){'use strict';var h=2;function i(s,t){return {containerId:t,errorsImageSrcs:{},numErrorUrlsLogged:0,surface:s}}var j=false,k=0,l=false,m=[i('feed','stream_pagelet'),i('profile','pagelet_timeline_main_column')];function n(s){return !!s&&(Object.prototype.hasOwnProperty.call(s.getQueryData(),'theater')||s.toString().indexOf('/videos/')>=0)}function o(s){c('BanzaiLogger').log('WebFeedImageErrorEventLoggerConfig',s)}function p(){m.forEach(function(s){var t,u=c('ge')(s.containerId);if(u)(function(){var v=c('DOMQuery').scry(u,'img'),w=v.length,x=0,y=0;v.forEach(function(z){if(z&&z.src){var aa='other';if(s.errorsImageSrcs[z.src]){y++;aa='error'}else if(z.complete){x++;aa='success'}if(k>0&&Math.random()<1/k)c('BanzaiLogger').log('WWWImageLoadSrcEventLoggerConfig',{surface:s.surface,src:z.src,result:aa});}});if(l&&w>0)c('BanzaiLogger').log('WWWImageLoadSummaryEventLoggerConfig',{surface:s.surface,num_total:w,num_success:x,num_errors:y,num_other:w-x-y});s.numErrorUrlsLogged=0})();})}function q(s){if(!s||!s.target||s.target.nodeName!=='IMG')return;var t=s.target,u=t.src,v=m.find(function(x){return c('Parent').bySelector(t,'#'+x.containerId)});if(!v)return;var w=v.surface;if(!c('DataStore').get(t,'retry')){c('DataStore').set(t,'retry',true);t.src=u}else{v.errorsImageSrcs[u]=true;if(v.numErrorUrlsLogged>=h)return;v.numErrorUrlsLogged++;c('Bootloader').loadModules(["XHRRequest"],function(x){if(x)new x(u).setTransportBuilder(c('getCrossOriginTransport')).setMethod('GET').setResponseHandler(function(){o({error_type:'SUCCESS',src:u,surface:w})}).setErrorHandler(function(y){if(y){var z=y.errorMsg;if(z.indexOf('id="facebook"')>0)z='FB ERROR PAGE';o({error_code:y.errorCode,error_type:y.errorType,error_message:z,src:u,surface:w})}}).setTimeoutHandler(function(y){o({error_type:'TIMEOUT',src:y,surface:w})}).send();},'FeedImageErrorEventLogger')}}var r={init:function s(t){if(j)return;j=true;k=t&&t.loadSampleRate||0;l=t&&t.alwaysLogCounts;window.addEventListener('error',q,true);c('Run').onUnload(function(){return p()});c('Arbiter').subscribe(['pre_page_transition'],function(u,v){if(n(c('URI').getMostRecentURI())||n(c('URI').getNextURI()))return;p()})}};f.exports=r}),18);
__d('AbstractErrorSignal',['invariant','BanzaiODS','ScriptPath','SessionName','SiteData'],(function a(b,c,d,e,f,g,h){'use strict';var i=true;function j(){this.constructor!==j||h(0)}j.prototype.logJSError=function(k,l){l=l||{};l.svn_rev=c('SiteData').client_revision;l.push_phase=c('SiteData').push_phase;l.script_path=c('ScriptPath').getScriptPath();l.extra=l.extra||{};l.extra.hrm=c('SiteData').be_mode;var m=l.extra.type||'error';if(i&&k==='onerror'&&m==='error'){l.extra.extra=l.extra.extra||[];l.extra.extra.push('first_error');i=false}var n=(c('SessionName').getName()||'-')+'/-';this.sendErrorSignal('javascript_error',JSON.stringify({c:k,a:n,m:l}))};j.prototype.sendBeaconErrorSignal=function(){var k='beacon_error',l=(c('SessionName').getName()||'-')+'/-',m={};m.error=k;m.svn_rev=c('SiteData').client_revision;m.push_phase=c('SiteData').push_phase;m.script_path=c('ScriptPath').getScriptPath();m.extra={message:k,type:'info'};this.sendErrorSignal(k,JSON.stringify({c:k,a:l,m:m}))};j.prototype.sendErrorSignal=function(k,l){this.performCounterLogging(k);switch(k){case 'async_error':var m=JSON.parse(l),n=m.err_code,o=m.path;if(n in {'1004':1,'12029':1,'12031':1,'12152':1}&&o.indexOf('scribe_endpoint.php')==-1)this.performSignalLogging(k,l);break;default:this.performSignalLogging(k,l);}};j.prototype.performCounterLogging=function(k){c('BanzaiODS').bumpEntityKey('js_error_reporting','error_signal.category.'+k);switch(k){case 'beacon_error':c('BanzaiODS').bumpEntityKey('js_error_reporting','beacon_error_signal.sent');break;case 'javascript_error':c('BanzaiODS').bumpEntityKey('js_error_reporting','error_signal.sent');break;}};j.prototype.performSignalLogging=function(k,l){h(0)};f.exports=j}),null);
__d("XJavaScriptLogviewSiteCategory",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({MBASIC:"m_basic",MTOUCH:"m_touch",WWW:"www"})}),null);
__d('ErrorSignal',['AbstractErrorSignal','AsyncRequest','AsyncSignal','BanzaiODS','ErrorSignalConfig','XJavaScriptLogviewSiteCategory','emptyFunction'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('AbstractErrorSignal'));i=h&&h.prototype;j.prototype.performCounterLogging=function(l){'use strict';i.performCounterLogging.call(this,l);switch(l){case 'javascript_error':c('BanzaiODS').bumpEntityKey('js_error_reporting','error_signal.'+c('XJavaScriptLogviewSiteCategory').WWW+'.sent');break;}};j.prototype.performSignalLogging=function(l,m){'use strict';switch(l){case 'async_error':new (c('AsyncRequest'))().setURI(c('ErrorSignalConfig').uri).setData({c:'async_error',m:m}).setMethod('GET').setReadOnly(true).setOption('suppressEvaluation',true).setOption('suppressErrorAlerts',true).setHandler(c('emptyFunction')).setErrorHandler(c('emptyFunction')).send(true);break;default:new (c('AsyncSignal'))(c('ErrorSignalConfig').uri,{c:l,m:m}).send();break;}};function j(){'use strict';h.apply(this,arguments)}var k=new j();f.exports=k;b.ErrorSignal=k}),null);
__d('FeedLoadEventWWWLogger',['Arbiter','BanzaiLogger','ErrorSignal','ErrorUtils','LitestandMessages','PageletEventConstsJS','URI'],(function a(b,c,d,e,f,g){var h=['substream_','more_pager_pagelet_','pagelet_composer','pagelet_navigation','pagelet_rhc_footer'],i=[c('PageletEventConstsJS').ARRIVE_END,c('PageletEventConstsJS').DISPLAY_END,c('PageletEventConstsJS').ONLOAD_END],j=['pre_page_transition','page_transition'],k=[c('LitestandMessages').NEWSFEED_LOAD,c('LitestandMessages').STORIES_REQUESTED,c('LitestandMessages').STORIES_INSERTED,c('LitestandMessages').NEWER_STORIES_REQUESTED,c('LitestandMessages').NEWER_STORIES_INSERTED,c('LitestandMessages').STREAM_LOAD_ERROR,c('LitestandMessages').STREAM_LOAD_RETRY,c('LitestandMessages').DUPLICATE_CURSOR_ERROR],l=false;function m(q){return q&&(q.getPath()==='/'||q.getPath()==='/home.php')}function n(q){c('BanzaiLogger').log('WebFeedLoadLoggerConfig',q)}function o(q){if(!q)return null;if(q.indexOf('more_pager_pagelet_')===0)return 'more_pager_pagelet_n';if(q.indexOf('substream_')===0&&q!=='substream_0'&&q!=='substream_1')return 'substream_n';return q}var p={init:function q(){if(l)return;c('Arbiter').subscribe('BigPipe/init',function(r,s){if(!s||!s.arbiter)return;s.arbiter.subscribe('pagelet_event',function(t,u){if(u&&i.indexOf(u.event)>=0&&h.some(function(v){return u.id.indexOf(v)===0})&&m(c('URI').getNextURI()))n({event:'pagelet',pagelet_id:o(u.id),pagelet_event_type:u.event,pagelet_phase:u.phase.toString()});})});c('Arbiter').subscribe(j,function(r,s){if(s){var t=s.to||s.uri;if(m(t))n({event:'page_transition',transition_event_type:r});}});c('Arbiter').subscribe(k,function(r,s){var t=null,u=null;if(r===c('LitestandMessages').STREAM_LOAD_ERROR){t=s}else if(r===c('LitestandMessages').DUPLICATE_CURSOR_ERROR)u=s;n({event:'stream_load',stream_event_type:r,stream_cursor:u,stream_substream_id:o(s&&s.substream_id),error_name:t&&t.name,error_message:t&&t.message,error_stack:t&&t.stack})});c('ErrorUtils').addListener(function(r){if(r&&m(c('URI').getNextURI())){c('ErrorSignal').logJSError('feedloaderror',{error:r.name||r.message,extra:r});n({event:'js_error',error_name:r.name,error_message:r.message,error_stack:r.stack})}});l=true}};f.exports=p}),null);
__d('ReactComposerFocusScrollLockUtils',['csx','cx','CSS','DOMQuery','Style','getDocumentScrollElement','getElementRect','getUnboundedScrollPosition','getViewportDimensions'],(function a(b,c,d,e,f,g,h,i){'use strict';var j=300,k=400,l={_interval:0,_pageRoot:null,enable:function m(n){var o=c('getUnboundedScrollPosition')(c('getDocumentScrollElement')());c('CSS').addClass(this._getPageRoot(),"_ihc");var p=c('getElementRect')(n),q=p.top,r=function(){var s=q+n.offsetHeight+k,t=Math.max(c('getViewportDimensions')().height,s)+'px';if(c('Style').get(this._getPageRoot(),'height')!==t)c('Style').set(this._getPageRoot(),'height',t);}.bind(this);this._interval=setInterval(r,j);r();requestAnimationFrame(function(){window.scrollTo(o.x,0)})},disable:function m(){c('CSS').removeClass(this._getPageRoot(),"_ihc");c('Style').set(this._getPageRoot(),'height',null);clearInterval(this._interval)},_getPageRoot:function m(){if(!this._pageRoot)this._pageRoot=c('DOMQuery').scry(document.body,"._li")[0];return this._pageRoot}};f.exports=l}),null);
__d('ReactComposerFocusModalWithP2PNewAdminsDialog.react',['fbt','BootloadOnRender.react','ReactComposerFocusScrollLockUtils','ReactComposerFocusWrapperCore.react','ReactComposerLoggingActions','Arbiter','Bootloader','JSResource','LazyComponent.react','React','ReactDOM'],(function a(b,c,d,e,f,g,h){var i,j,k=c('React').PropTypes,l=null,m=null,n=null;i=babelHelpers.inherits(o,c('React').PureComponent);j=i&&i.prototype;function o(){var p,q;'use strict';for(var r=arguments.length,s=Array(r),t=0;t<r;t++)s[t]=arguments[t];return q=(p=j.constructor).call.apply(p,[this].concat(s)),this.state={focused:false,showDiscardDialog:false,showP2PAdminsDialog:false},this.$ReactComposerFocusModalWithP2PNewAdminsDialog2=function(){var u=this.props.ReactComposerFocusExtraConfigData;if(u&&u.showDialogForP2PAdminsMetadata&&u.showDialogForP2PAdminsMetadata.showDialogForP2PAdmins===true)this.$ReactComposerFocusModalWithP2PNewAdminsDialog7();c('Bootloader').loadModules(["ReactComposerHandleUnsavedChanges","ReactComposerFocusDiscardDialog.react","ReactComposerInit"],function(v,w,x){n=v;m=w;l=x},'ReactComposerFocusModalWithP2PNewAdminsDialog.react')}.bind(this),this.$ReactComposerFocusModalWithP2PNewAdminsDialog4=function(u){if(u)return this.$ReactComposerFocusModalWithP2PNewAdminsDialog1();if(m&&n&&n.hasUnsavedChanges(this.$ReactComposerFocusModalWithP2PNewAdminsDialog8())){this.$ReactComposerFocusModalWithP2PNewAdminsDialog9()}else this.$ReactComposerFocusModalWithP2PNewAdminsDialog10();}.bind(this),this.$ReactComposerFocusModalWithP2PNewAdminsDialog10=function(){c('ReactComposerLoggingActions').composerCancel(this.$ReactComposerFocusModalWithP2PNewAdminsDialog8());this.$ReactComposerFocusModalWithP2PNewAdminsDialog11();try{if(l)l.resetComposer(this.$ReactComposerFocusModalWithP2PNewAdminsDialog8());}catch(u){}c('Arbiter').inform('ReactComposerFocus/reset/'+this.$ReactComposerFocusModalWithP2PNewAdminsDialog8());this.$ReactComposerFocusModalWithP2PNewAdminsDialog1()}.bind(this),this.$ReactComposerFocusModalWithP2PNewAdminsDialog3=function(){var u=c('ReactDOM').findDOMNode(this.refs.focus.getComposer());c('ReactComposerFocusScrollLockUtils').enable(u);this.setState({focused:true})}.bind(this),this.$ReactComposerFocusModalWithP2PNewAdminsDialog11=function(){this.setState({showDiscardDialog:false})}.bind(this),this.$ReactComposerFocusModalWithP2PNewAdminsDialog8=function(){return this.refs.focus.getComposerID()}.bind(this),this.$ReactComposerFocusModalWithP2PNewAdminsDialog12=function(){this.setState({showP2PAdminsDialog:false})}.bind(this),q}o.prototype.componentWillUnmount=function(){'use strict';this.$ReactComposerFocusModalWithP2PNewAdminsDialog1()};o.prototype.render=function(){'use strict';return c('React').createElement('div',null,c('React').createElement(c('ReactComposerFocusWrapperCore.react'),{composerID:this.props.composerID,ariaLabel:h._("Create a Post"),focused:this.state.focused,fixHeight:true,onFirstFocus:this.$ReactComposerFocusModalWithP2PNewAdminsDialog2,onFocus:this.$ReactComposerFocusModalWithP2PNewAdminsDialog3,onDismiss:this.$ReactComposerFocusModalWithP2PNewAdminsDialog4,gks:this.props.gks,ref:'focus'},this.props.children),this.$ReactComposerFocusModalWithP2PNewAdminsDialog5(),this.$ReactComposerFocusModalWithP2PNewAdminsDialog6())};o.prototype.$ReactComposerFocusModalWithP2PNewAdminsDialog1=function(){'use strict';c('ReactComposerFocusScrollLockUtils').disable();this.setState({focused:false})};o.prototype.$ReactComposerFocusModalWithP2PNewAdminsDialog9=function(){'use strict';this.setState({showDiscardDialog:true})};o.prototype.$ReactComposerFocusModalWithP2PNewAdminsDialog7=function(){'use strict';this.setState({showP2PAdminsDialog:true})};o.prototype.$ReactComposerFocusModalWithP2PNewAdminsDialog6=function(){'use strict';var p=null;if(this.state.showP2PAdminsDialog){var q=this.props.ReactComposerFocusExtraConfigData,r=q.showDialogForP2PAdminsMetadata.pageID,s=q.showDialogForP2PAdminsMetadata.pageName;p=c('React').createElement(c('BootloadOnRender.react'),{loader:c('JSResource')('ReactComposerP2PNewAdminsPostToPageDialog.react').__setRef('ReactComposerFocusModalWithP2PNewAdminsDialog.react'),placeholder:c('React').createElement('div',null),component:c('React').createElement(c('LazyComponent.react'),{id:'redirectdialog',onCancel:this.$ReactComposerFocusModalWithP2PNewAdminsDialog12,pageName:s,pageID:r})})}return p};o.prototype.$ReactComposerFocusModalWithP2PNewAdminsDialog5=function(){'use strict';var p=null;if(this.state.showDiscardDialog&&m)p=c('React').createElement(m,{onConfirm:this.$ReactComposerFocusModalWithP2PNewAdminsDialog10,onCancel:this.$ReactComposerFocusModalWithP2PNewAdminsDialog11});return p};o.propTypes={composerID:k.string.isRequired,actorID:k.string.isRequired,gks:k.object.isRequired,ReactComposerFocusExtraConfigData:k.object};f.exports=o}),null);