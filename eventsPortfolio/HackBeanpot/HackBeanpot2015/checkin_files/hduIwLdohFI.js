if (self.CavalryLogger) { CavalryLogger.start_js(["csuvF"]); }

__d("arrayStableSort",[],(function a(b,c,d,e,f,g){function h(i,j){return i.map(function(k,l){return {data:k,index:l}}).sort(function(k,l){return j(k.data,l.data)||k.index-l.index}).map(function(k){return k.data})}f.exports=h}),null);
__d('RangedCallbackManager',['CallbackManagerController','arrayStableSort','createObjectFrom'],(function a(b,c,d,e,f,g){function h(i,j,k){'use strict';this.$RangedCallbackManager1=[];this.$RangedCallbackManager2=false;this.$RangedCallbackManager3=false;this.$RangedCallbackManager4={};this.$RangedCallbackManager5=new (c('CallbackManagerController'))(this.$RangedCallbackManager6.bind(this));this.$RangedCallbackManager7=i;this.$RangedCallbackManager8=j;this.$RangedCallbackManager9=k}h.prototype.executeOrEnqueue=function(i,j,k,l,m){'use strict';return this.$RangedCallbackManager5.executeOrEnqueue({start:i,limit:j},k,{strict:!!l,skipOnStrictHandler:m})};h.prototype.unsubscribe=function(i){'use strict';this.$RangedCallbackManager5.unsubscribe(i)};h.prototype.getUnavailableResources=function(i){'use strict';var j=this.$RangedCallbackManager5.getRequest(i),k=[];if(j&&!this.$RangedCallbackManager2){var l=j.request,m=this.$RangedCallbackManager10(j.options),n=l.start+l.limit;for(var o=m.length;o<n;o++)k.push(o);}return k};h.prototype.addResources=function(i){'use strict';i.forEach(function(j){if(!this.$RangedCallbackManager4[j]){this.$RangedCallbackManager4[j]=true;this.$RangedCallbackManager1.push(j);this.$RangedCallbackManager3=null}}.bind(this));this.resortResources();this.$RangedCallbackManager5.runPossibleCallbacks()};h.prototype.addResourcesWithoutSorting=function(i,j){'use strict';var k=this.$RangedCallbackManager1.slice(0,j);k=k.concat(i);k=k.concat(this.$RangedCallbackManager1.slice(j));this.$RangedCallbackManager1=k;Object.assign(this.$RangedCallbackManager4,c('createObjectFrom')(i,true));this.$RangedCallbackManager3=null;this.$RangedCallbackManager5.runPossibleCallbacks()};h.prototype.removeResources=function(i){'use strict';i.forEach(function(j){if(this.$RangedCallbackManager4[j]){this.$RangedCallbackManager4[j]=false;var k=this.$RangedCallbackManager1.indexOf(j);if(k!=-1)this.$RangedCallbackManager1.splice(k,1);}}.bind(this))};h.prototype.removeAllResources=function(){'use strict';this.$RangedCallbackManager1=[];this.$RangedCallbackManager4={}};h.prototype.resortResources=function(){'use strict';this.$RangedCallbackManager1=c('arrayStableSort')(this.$RangedCallbackManager1,function(i,j){return this.$RangedCallbackManager8(this.$RangedCallbackManager7(i),this.$RangedCallbackManager7(j))}.bind(this))};h.prototype.setReachedEndOfArray=function(){'use strict';if(!this.$RangedCallbackManager2){this.$RangedCallbackManager2=true;this.$RangedCallbackManager3=null;this.$RangedCallbackManager5.runPossibleCallbacks()}};h.prototype.hasReachedEndOfArray=function(){'use strict';return this.$RangedCallbackManager2};h.prototype.forceRunCallbacks=function(){'use strict';this.$RangedCallbackManager5.runPossibleCallbacks({force:true})};h.prototype.setError=function(i){'use strict';if(this.$RangedCallbackManager3!==i){this.$RangedCallbackManager3=i;this.$RangedCallbackManager5.runPossibleCallbacks()}};h.prototype.getError=function(i,j,k){'use strict';var l=this.$RangedCallbackManager10({strict:k});return i+j>l.length?this.$RangedCallbackManager3:null};h.prototype.hasResource=function(i){'use strict';return this.$RangedCallbackManager4[i]};h.prototype.getResourceAtIndex=function(i){'use strict';return this.$RangedCallbackManager1[i]};h.prototype.getAllResources=function(){'use strict';return this.$RangedCallbackManager1.concat()};h.prototype.getCurrentArraySize=function(i){'use strict';return this.$RangedCallbackManager10(i).length};h.prototype.$RangedCallbackManager10=function(i){'use strict';var j=this.$RangedCallbackManager1;if(i&&i.strict){var k=i.skipOnStrictHandler||this.$RangedCallbackManager9;if(k)j=j.filter(k);}return j};h.prototype.$RangedCallbackManager6=function(i,j){'use strict';var k=this.$RangedCallbackManager10(j),l=i.start,m=i.start+i.limit,n=!!(j&&j.force);if(!n&&!this.$RangedCallbackManager2&&!this.$RangedCallbackManager3&&m>k.length){return false}else{var o=k.slice(l,m),p=m>k.length?this.$RangedCallbackManager3:null;return [o,p]}};h.prototype.getElementsUntil=function(i){'use strict';var j=[];for(var k=0;k<this.$RangedCallbackManager1.length;k++){var l=this.$RangedCallbackManager7(this.$RangedCallbackManager1[k]);if(this.$RangedCallbackManager8(l,i)>0)break;j.push(this.$RangedCallbackManager1[k])}return j};f.exports=h}),null);
__d('createObjectBy',[],(function a(b,c,d,e,f,g){'use strict';function h(i,j){var k={};for(var l=0;l<i.length;l++){var m=i[l],n=j(m,l,i);k[n]=m}return k}f.exports=h}),null);
__d('flatMapArray',[],(function a(b,c,d,e,f,g){var h=Array.prototype.push;function i(j,k){var l=[];for(var m=0;m<j.length;m++){var n=k.call(j,j[m],m);if(Array.isArray(n)){h.apply(l,n)}else if(n!=null)throw new TypeError('flatMapArray: Callback must return an array or null, '+'received "'+n.toString()+'" instead');}return l}f.exports=i}),null);
__d("objectValues",[],(function a(b,c,d,e,f,g){function h(i){return Object.values(i)}f.exports=h}),null);
__d("MessagingSourceEnum",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({CHAT_ORCA:"source:chat:orca",CHAT_IPHONE:"source:chat:iphone",CHAT_JABBER:"source:chat:jabber",CHAT_MEEBO:"source:chat:meebo",CHAT_WEB:"source:chat:web",CHAT_TEST:"source:chat:test",CHAT_FORWARD_DIALOG:"source:chat:forward",CHAT:"source:chat",CONTACT_ADD_MUTATION:"source:contact_add:graphql_mutation",CONTACT_ADD_CYMK:"source:contact_add:cymk_suggestion",EMAIL:"source:email",EVENT_MESSAGE_BLAST:"source:event_message_blast",EVENT_REMINDERS:"source:event_reminders",FUNDRAISER_MESSAGE_BLAST:"source:fundraiser_message_blast",GENERIC_ADMIN_TEXT:"source:generic_admin_text",GIGABOXX_API:"source:gigaboxx:api",GIGABOXX_BLAST:"source:gigaboxx:blast",GIGABOXX_EMAIL_REPLY:"source:gigaboxx:emailreply",GIGABOXX_MOBILE:"source:gigaboxx:mobile",GIGABOXX_WAP:"source:gigaboxx:wap",GIGABOXX_WEB:"source:gigaboxx:web",INVITE:"source:invite",LEIA:"source:leia",MESSENGER_WEB:"source:messenger:web",MESSENGER_WEB_SEARCH:"source:messenger:web_search",SAM_UFI:"source:sam:ufi",SHARE_DIALOG:"source:share:dialog",SEND_PLUGIN:"source:sendplugin",SMS:"source:sms",TEST:"source:test",TITAN_WAP:"source:titan:wap",TITAN_M_BASIC:"source:titan:m_basic",TITAN_M_FREE:"source:titan:m_free_basic",TITAN_M_JAPAN:"source:titan:m_japan",TITAN_M_MINI:"source:titan:m_mini",TITAN_M_TOUCH:"source:titan:m_touch",TITAN_M_APP:"source:titan:m_app",TITAN_M_TABLET:"source:titan:m_tablet",TITAN_M_ZERO:"source:titan:m_zero",TITAN_M_TALK:"source:titan:m_talk",TITAN_WEB:"source:titan:web",TITAN_FACEWEB_ANDROID:"source:titan:faceweb_android",TITAN_FACEWEB_BUFFY:"source:titan:faceweb_buffy",TITAN_FACEWEB_IPAD:"source:titan:faceweb_ipad",TITAN_FACEWEB_IPHONE:"source:titan:faceweb_iphone",TITAN_FACEWEB_UNKNOWN:"source:titan:faceweb_unknown",TITAN_API:"source:titan:api",TITAN_API_MOBILE:"source:titan:api_mobile",TITAN_ORCA:"source:titan:orca",TITAN_EMAIL_REPLY:"source:titan:emailreply",MOBILE:"source:mobile",PAGE_PLATFORM_API:"source:page_platform_api",UNKNOWN:"source:unknown",WEB:"source:web",HELPCENTER:"source:helpcenter",NEW_SHARE_DIALOG:"source:share:dialog:new",PAID_PROMOTION:"source:paid_promotion",BUFFY_SMS:"source:buffy:sms",WEBRTC_MOBILE:"source:webrtc:mobile",MESSENGER_COMMERCE:"source:messenger:commerce",MESSENGER_BOT:"source:bot",MESSENGER_EMPLOYEE_ONLY_BOT:"source:bot:employee_only",MESSENGER_OMNIM:"source:messenger:omnim",PAGES_PRIVATE_REPLY:"source:pages:private_reply",MESSENGER_FORWARD_DIALOG:"source:messenger:forward",MESSENGER_AD:"source:messenger:ad",MARKETPLACE:"source:marketplace",MESSENGER_LEAD_GEN:"source:messenger:lead_gen",PAGES_MESSAGE_SHORTLINK:"source:pages:message_shortlink",STICKER_SUBSCRIBE:"source:messenger:sticker_subscribe",PHOTO_TAG:"source:messenger:photo_tag",INTERNAL_TEST_PENDING:"source:internal:test_pending",JOB_SEARCH_APPLICATION:"source:job_search:application",MESSENGER_JOINABLE_LINK:"source:messenger:joinable_link",MESSENGER_SMS_BRIDGE_CONVERT:"source:messenger:sms_bridge_conversion",TINCAN_ORCA:"source:tincan:orca",TINCAN_IOS:"source:tincan:ios",TINCAN_UNKNOWN:"source:tincan:unknown",FACEBOOK_GROUPS_CHANNELS:"source:groups:channels",GROUP_COMMERCE:"source:group_commerce",INTERNAL_TOOL:"source:internal:tool",PAGES_PLATFORM:"source:pages:platform",PAGES_RECOMMENDATION:"source:pages:recommendation",PAGE_AUTO_RESPONSE:"source:pages:auto_response",PAGES_INVITE:"source:pages:invite",PAGES_CHAT_EXTENSION:"source:pages:chat_extension",SAVED_CHAT_EXTENSION:"source:saved:chat_extension",CREATOR_PAGE_INITIATE_TO_CREATOR_PAGE:"source:pages:creator_page_initiate_to_creator_page",LIVE_VIDEO_CHAT:"source:live_video_chat",LIVE_CHAT_PLUGIN:"source:discovery:live_chat_plugin",FRIENDING_ADMIN_BUMP:"source:messenger_growth:friending_admin_bump",NEW_MESSENGER_USER_ADMIN_BUMP:"source:messenger_growth:new_messenger_user_admin_bump",EVENT_UPCOMING_BUMP:"source:messenger_growth:event_upcoming_bump",PHOTO_TAG_BUMP:"source:messenger_growth:photo_tag_bump",WALL_POST_BUMP:"source:messenger_growth:wall_post_bump",CUSTOMIZATION_UPSELL_BUMP:"source:messenger_growth:customization_upsell_bump",PAGE_COMMENT_MSG:"source:pages:question_triggered_convo",COMMENT_PIVOT:"source:messenger_growth:comment_pivot"})}),null);
__d("MessengerRoomPrivacyMode",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({WHITELISTED_MODE:0,PUBLIC_MODE:1})}),null);
__d('stableStringify',[],(function a(b,c,d,e,f,g){'use strict';function h(j){return j!==null&&Object.prototype.toString.call(j)==='[object Object]'}function i(j){var k=Array.isArray(j),l=h(j);if(k||l){var m=Object.keys(j);if(m.length){var n=[];m.sort();for(var o=0;o<m.length;o++){var p=m[o],q=j[p];if(h(q)||Array.isArray(q)){q=i(q)}else q=JSON.stringify(q);n.push(p+':'+q)}if(k){return '['+n.join(',')+']'}else return '{'+n.join(',')+'}';}}return JSON.stringify(j)}f.exports=i}),null);
__d('ServiceWorkerRegistration',['Promise','ClientServiceWorkerMessage'],(function a(b,c,d,e,f,g){var h='serviceWorker' in navigator;function i(){var k=navigator.serviceWorker;if(!h||!k)throw new Error('serviceWorker is not supported in this browser');return k}var j={isSupported:function k(){return h},registerWorkerIfUnregistered:function k(l){var m=i();return new (c('Promise'))(function(n,o){this.getWorkerRegistration(l).done(function(p){if(!p){c('Promise').resolve(m.register(l,{updateViaCache:'all'})).done(function(){c('Promise').resolve(m.ready).done(n)})}else n(p);})}.bind(this))},unregisterControllingWorker:function k(){return new (c('Promise'))(function(l,m){var n=new (c('ClientServiceWorkerMessage'))('unregister',{},function(){l(true)});n.sendViaController()})},getWorkerRegistration:function k(l){var m=i();return c('Promise').resolve(m.getRegistration(l))},isAWorkerActivated:function k(){if(!navigator.serviceWorker||!navigator.serviceWorker.getRegistration)return c('Promise').resolve(false);return navigator.serviceWorker.getRegistration().then(function(l){return !!(l&&l.active)})}};f.exports=j}),null);