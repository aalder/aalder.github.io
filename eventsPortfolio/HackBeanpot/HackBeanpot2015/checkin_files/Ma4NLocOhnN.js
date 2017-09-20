if (self.CavalryLogger) { CavalryLogger.start_js(["6Edqk"]); }

__d('ConditionClassOnVisible',['IntersectionObserver'],(function a(b,c,d,e,f,g){'use strict';var h=function j(k,l,m){var n=arguments.length<=3||arguments[3]===undefined?true:arguments[3],o=k[0],p=n?o.intersectionRatio>0:!(o.intersectionRatio>0);o.target.classList.toggle(m,p)},i={track:function j(k,l,m){var n=new (c('IntersectionObserver'))(function(o,p){h(o,p,l,m)},{});n.observe(k)}};f.exports=i}),null);
__d('TickerController',['invariant','Arbiter','AsyncSignal','Bootloader','CSS','DOM','Parent','UIPagelet','Vector','$','emptyFunction','ge'],(function a(b,c,d,e,f,g,h){var i=1,j=2,k=3,l=4,m=15000,n=null,o={},p={},q={setActiveInstance:function r(s){n=s},getActiveInstance:function r(){return n},clearRHCplaceholder:function r(){o.pagelet_rhc_ticker=null},registerInstance:function r(s,t){s||h(0);p[s]=t;q.setActiveInstance(t)},getInstance:function r(s){if(!s)return null;var t=c('Parent').byClass(c('$')(s),'fbFeedTicker');return p[t.id]||null},isLoaded:function r(s){var t=o[s.id];return !t||t.status==k},show:function r(s,t){t=t||c('emptyFunction');for(var u in p){var v=c('ge')(u);if(!v||v.parentNode.id==s.id)continue;q.hide(v.parentNode)}q._doPositionChange(s);c('CSS').show(s);var w=o[s.id];if(w&&w.status==i){var x=(c('Vector').getElementDimensions(s).y||0)>0,y=s.id==='pagelet_rhc_ticker'&&!c('CSS').hasClass(s,'hidden_rhc_ticker');if(x||y){var z=c('DOM').scry(s,'.tickerPlaceholderSpinner')[0];z&&c('CSS').show(z);q._fetchTickerForPlaceholder(s,t)}else c('Arbiter').subscribe('Ticker/resized',function(){if(w.status==i)q._fetchTickerForPlaceholder(s,t);});}else{var aa=c('DOM').scry(s,'.fbFeedTicker')[0],ba=q.getInstance(aa);n=ba;ba&&ba._poll();o[s.id]={status:l,callback:t};t()}c('Arbiter').inform('ticker/show',{node:s,callback:t})},_doPositionChange:function r(s){if(c('CSS').shown(s))return;new (c('AsyncSignal'))('/common/ods_endpoint.php',{k:'ticker.render.switch.'+s.id}).send()},hide:function r(s){var t=c('DOM').scry(s,'.fbFeedTicker')[0],u=q.getInstance(t);u&&u.hideActiveStory();c('CSS').hide(s)},hideStoriesByClass:function r(s){for(var t in p)c('DOM').scry(c('$')(t),s).forEach(c('CSS').hide);},hideStory:function r(s){var t=q.getInstance(s);t&&t.hideStory(s)},replaceStory:function r(s,t){var u=c('DOM').scry(document.body,'div.fbFeedTickerStory'),v=q.getInstance(u[0]);if(!v)return;var w=v._findStoryById(s);v.handleRemoveStory();c('CSS').hide(w);c('DOM').insertAfter(w,t);t.setAttribute('data-story-id',w.getAttribute('id'));var x=setTimeout(function(){return q.removeMarkup(t,w)},m);t.setAttribute('data-timeout-token',x)},removeMarkup:function r(s,t){c('Bootloader').loadModules(["Animation"],function(u){c('CSS').addClass(s,'removedStoryMarkup');new u(s).to('height',0).duration(500).ondone(function(){c('DOM').remove(s)}).go()},'TickerController')},undoHideStory:function r(s){var t=q.getInstance(s);t&&t.undoHideStory(s)},insertStoriesAtBottom:function r(s){n.insertStoriesAtBottom(s)},_fetchTickerForPlaceholder:function r(s,t){var u={handler:function v(){o[s.id].status=k;t()}};c('UIPagelet').loadFromEndpoint('TickerEntStoryPagelet',s.id,o[s.id].pageletData,u);o[s.id].status=j},registerStoryDialog:function r(s,t){c('Arbiter').subscribe('ticker/init',function(){var u=c('ge')(s),v=q.getInstance(u);v&&v.registerStoryDialog(u,t)},c('Arbiter').SUBSCRIBE_ALL)},registerPlaceholder:function r(s,t){var u=o[s];o[s]={status:i,pageletData:t};if(u&&u.status==l){q.show(c('$')(s));u.callback()}}};f.exports=q}),null);
__d('TickerRightColumnController',['csx','cx','Arbiter','CSS','DOM','Event','NavigationMessage','Parent','Run','Style','SubscriptionsHandler','TickerController','Vector','ge','throttle'],(function a(b,c,d,e,f,g,h,i){var j;function k(){var p=c('ge')('pagelet_rhc_ticker');p&&c('TickerController').show(p,m)}function l(){var p=c('ge')('pagelet_rhc_ticker');p&&c('TickerController').hide(p)}function m(){var p=c('ge')('pagelet_rhc_ticker'),q=c('DOM').scry(p,'.ticker_container')[0],r=c('DOM').scry(p,'.ticker_stream')[0],s=c('ge')('rightCol');if(!p||!q||!r||!s)return;c('Style').set(q,'height','0');var t=75,u=c('Vector').getViewportDimensions().y,v=c('Vector').getElementDimensions(s).y,w=u-v-t,x=c('Vector').getElementDimensions(r).y,y=Math.max(Math.min(w,x,j.tickerMaxHeight||425),j.tickerMinHeight||225);c('Style').set(q,'height',y+'px')}function n(p){var q=c('ge')('pagelet_rhc_ticker'),r=q&&c('Parent').bySelector(q,"._5zcc");if(r)c('CSS').conditionClass(r,"_5zcb",p);q&&c('CSS').conditionClass(q,'hidden_rhc_ticker',!p);if(p){m();var s=c('ge')('fbTickerClosedEd');s&&c('CSS').hide(s)}}var o={init:function p(q){j=q;var r=new (c('SubscriptionsHandler'))();if(j.enableSidebar)r.addSubscriptions(c('Arbiter').subscribe('sidebar/visibility',function(t,u){if(u){l()}else k();}),c('Arbiter').subscribe('minisidebar/show',k),c('Arbiter').subscribe('LitestandClassicRHC/loaded',m),c('Event').listen(window,'scroll',c('throttle')(function(){var t=c('DOM').scry(c('ge')('pagelet_rhc_ticker'),'.fbFeedTicker')[0],u=c('TickerController').getInstance(t);u&&u.handleRemoveStory()})));if(!c('CSS').hasClass(document.documentElement,'sidebarMode')){k()}else if(j.enableSidebar)l();var s=function t(){r.release()};c('Arbiter').subscribeOnce(c('NavigationMessage').NAVIGATION_BEGIN,s);c('Run').onLeave(s)},initRHCTickerHider:function p(q){c('Event').listen(q,'click',this.hideRHCTicker)},showRHCTicker:function p(){n(true)},hideRHCTicker:function p(){n(false)}};f.exports=o}),null);
__d('legacy:async-signal',['AsyncSignal'],(function a(b,c,d,e,f,g){b.AsyncSignal=c('AsyncSignal')}),3);
__d('EgoUnitSlideInsert',['csx','cx','Animation','CSS','DataStore','DOM','Ease','Event','Parent','TidyArbiterMixin','tidyEvent'],(function a(b,c,d,e,f,g,h,i){var j='sliding',k="EgoSlider/End",l=babelHelpers['extends']({isSliding:function m(n){return c('DataStore').get(n,j)},runAfterSlide:function m(n,o){var p=c('tidyEvent')(l.subscribe(k,function(q,r){if(r===n){p&&p.unsubscribe();o()}}))},registerSlide:function m(n,o){c('Event').listen(n,'click',function(p){var q=c('Parent').bySelector(p.getTarget(),"._5cl_");if(!q)return;var r=c('Parent').byClass(n,'ego_unit'),s=0,t=c('Parent').byClass(r,'ego_unit_container'),u=c('DOM').scry(t,'.ego_unit')[0];if(u===r)if(r.nextSibling){r.nextSibling.style.paddingTop='0px';r.nextSibling.style.borderTop='0px'}c('CSS').addClass(r,"_5cl-");c('DataStore').set(r,j,true);new (c('Animation'))(r).to('height',0).to('padding-top',s).to('padding-bottom',0).to('margin',0).from('opacity',1).to('opacity',0).ease(c('Ease').circOut).duration(300).checkpoint(1,function(){c('DOM').appendContent(t,r);c('DOM').prependContent(r,o);c('DataStore').remove(r,j)}).to('height',12).to('opacity',1).to('margin-bottom',10).duration(0).checkpoint(2,function(){l.inform(k,r)}).go()})}},c('TidyArbiterMixin'));f.exports=l}),null);
__d('NetEgo',['csx','Animation','Arbiter','CSS','DOM','EgoUnitSlideInsert','PageLikeConstants','Parent','URI','ge'],(function a(b,c,d,e,f,g,h){var i={setup:function j(k){c('Arbiter').subscribe([c('PageLikeConstants').LIKED,'FriendRequest/sending'],function(l,m){if(k==m.profile_id&&m.origin=='hovercard'||k==m.uid){var n=c('ge')(document.body,'.ego_unit_container');if(n){var o=c('DOM').scry(n,'.ego_unit'),p=o.length;for(var q=0;q<p;q++){var r=o[q].getAttribute('data-ego-fbid');if(r==k){var s=c('DOM').scry(o[q],'.ego_action a')[0];if(s)s.click();break}}}}})},updateXids:function j(k,l){if(k.length==0&&l.length==0)return;var m=function v(w){return function(x){var y=x.getAttribute(w);if(!y)return false;var z=new (c('URI'))(y).getQueryData();return !!z.xids}},n=c('DOM').scry(document.body,'.ego_section a');n=n.filter(m('ajaxify'));if(n.length==0)return;var o=new (c('URI'))(n[0].getAttribute('ajaxify')),p=o.getQueryData();if(!p.xids)return;var q=null;try{q=JSON.parse(p.xids)}catch(v){return}for(var r=0;r<l.length;++r)q[l[r]]=1;var s=JSON.stringify(q),t=function v(w,x){o=new (c('URI'))(w.getAttribute(x));p=o.getQueryData();p.xids=s;o.setQueryData(p);w.setAttribute(x,o.toString())};for(r=0;r<n.length;++r)t(n[r],'ajaxify');var u=c('DOM').scry(document.body,'.ego_unit form');u=u.filter(m('action'));for(r=0;r<u.length;++r)t(u[r],'action');},replaceUnit:function j(k,l,m,n){i.replaceUnitCheckParent(k,l,m,n,'')},replaceUnitCheckParent:function j(k,l,m,n,o){var p=c('Parent').byClass(k,'ego_unit_container');if(p&&c('EgoUnitSlideInsert').isSliding(k)){var q=c('DOM').appendContent(p,l);q.forEach(c('CSS').hide);c('EgoUnitSlideInsert').runAfterSlide(k,i._replaceUnitElement.bind(null,k,q,o))}else i._replaceUnit(k,l,m,n,o);},_replaceUnit:function j(k,l,m,n,o){var p=c('DOM').insertAfter(k,l);p.forEach(c('CSS').hide);if(n!==undefined&&n!==null){setTimeout(function(){i._replaceUnitFadeout(k,p,m,o)},n)}else i._replaceUnitFadeout(k,p,m,o);},_replaceUnitFadeout:function j(k,l,m,n){if(m){new (c('Animation'))(k).from('opacity',1).to('opacity',0).duration(m).checkpoint(1,function(){i._replaceUnitElement(k,l,n)}).go()}else i._replaceUnitElement(k,l,n);},_replaceUnitElement:function j(k,l,m){var n=c('CSS').hasClass(k,'ego_unit')?k.parentNode:null;if(n&&n.tagName==='LI')n=c('DOM').scry(k.parentNode,'^ul')[0];c('DOM').remove(k);if(l.length)l.forEach(c('CSS').show);c('Arbiter').inform('netego_replacedUnit',{serializedData:m,numUnitsRemained:n.childNodes.length});i.clearHeader()},clearHeader:function j(){var k=c('DOM').scry(document.body,'.ego_column'),l=[];for(var m=0;m<k.length;++m)l=l.concat(c('DOM').scry(k[m],'.uiHeader'));for(m=0;m<l.length;++m){var n=l[m].nextSibling,o=c('DOM').find(n,"._2xq");if(!o)o=n;if(!o||o.childNodes.length===0){c('DOM').remove(l[m])}else if(o.childNodes.length===1){var p=o.childNodes[0];if(c('CSS').hasClass(p,'ego_appended_units')&&p.childNodes.length===0)c('DOM').remove(l[m]);}}}};f.exports=i}),null);