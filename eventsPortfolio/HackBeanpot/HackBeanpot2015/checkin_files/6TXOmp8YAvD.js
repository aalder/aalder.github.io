if (self.CavalryLogger) { CavalryLogger.start_js(["oRh8x"]); }

__d('UFIAddCommentController',['Parent','React','ReactDOM','UFIAddComment.react','UFIAddCommentActionType','UFIAsyncWrapper','UFICallbackStore','UFICommentEditIDStore','UFIDispatcher','UFIDispatcherContext.react','UFIFeedbackContext.react','UFINewCommentNotifier'],(function a(b,c,d,e,f,g){'use strict';h.factory=function(j,k){k.rootid=j.id;return new h(j,Object.freeze(k))};function h(j,k){i.call(this);this.$UFIAddCommentController1=j;this.$UFIAddCommentController2=k;this.$UFIAddCommentController3=new (c('UFIDispatcher'))();this.$UFIAddCommentController4={UFICallbackStore:new (c('UFICallbackStore'))(this.$UFIAddCommentController3)};this.$UFIAddCommentController4.UFICallbackStore.on(c('UFIAddCommentActionType').SUBMIT_NEW,function(l){return c('UFINewCommentNotifier').onNewComment(c('Parent').byTag(j,'form'),this.$UFIAddCommentController2,l.comment,l.target,l.replyCommentID,l.timestamp)}.bind(this));this.$UFIAddCommentController5=c('UFICommentEditIDStore').getForInstance(this.$UFIAddCommentController2.instanceid);c('UFICommentEditIDStore').addListener(function(){var l=c('UFICommentEditIDStore').getForInstance(this.$UFIAddCommentController2.instanceid);if(l!=this.$UFIAddCommentController5){this.$UFIAddCommentController5=l;this.render()}}.bind(this));this.render()}h.prototype.render=function(){var j=c('React').createElement(c('UFIDispatcherContext.react'),{dispatcher:this.$UFIAddCommentController3,stores:this.$UFIAddCommentController4},c('React').createElement(c('UFIFeedbackContext.react'),{contextArgs:this.$UFIAddCommentController2,render:this.renderAddComment}));c('ReactDOM').render(c('React').createElement(c('UFIAsyncWrapper'),null,j),this.$UFIAddCommentController1)};h.prototype.disable=function(){this.$UFIAddCommentController4.UFICallbackStore.remove()};var i=function j(){this.renderAddComment=function(k,l){if(this.$UFIAddCommentController5!==null||!l||!l.cancomment||!l.actorforpost)return null;return c('React').createElement(c('UFIAddComment.react'),{viewerActorID:l.actorforpost,targetID:l.ownerid,initialData:null,ref:null,withoutSeparator:false,editingComment:{},isEditing:false,mentionsDataSource:l.mentionsdatasource,showSendOnEnterTip:l.showsendonentertip,multiCompanyGroupsCount:l.multicompanygroupscount,allowPhotoAttachments:l.allowphotoattachments&&!k.islivestreaming,allowVideoAttachments:l.allowvideoattachments&&!k.islivestreaming,allowStickerAttachments:l.allowstickerattachments&&!k.islivestreaming,allowGifAttachments:l.allowgifattachments&&!k.islivestreaming,allowTipJar:Boolean(l.istipjarenabled&&k.islivestreaming),contextArgs:k,subtitle:l.subtitle,isQAndA:l.isqanda,keepFocus:k.islivestreaming})}.bind(this)};f.exports=h}),null);
__d('FriendListPrivacyOptions',['Arbiter','AsyncDialog','AsyncRequest','DOMQuery','PageTransitions','Parent','SelectorDeprecated','$','ge','nullthrows'],(function a(b,c,d,e,f,g){var h=false,i=false,j=null,k={},l=function n(o){if(!Object.keys(k).length)c('PageTransitions').registerHandler(function(){k={};h=false;i=false});var p=o.getAttribute('data-name');k[p]=o;c('SelectorDeprecated').listen(o,'select',function(q){var r=q.option,s=c('DOMQuery').find(r,'a.itemAnchor'),t=s.getAttribute('data-flid');if(!t)return;var u=s.getAttribute('data-dynamic');if(u&&h){m.showSmartListNux(r,t)}else if(!u&&i)m.showDumbListNux([t]);})},m={listen:function n(o,p,q){var r=c('ge')(o);if(!r)return;var s=c('Parent').byClass(r,'audienceSelector');if(s){l(s);h=p;i=q}},showSmartListNux:function n(o,p){var q=c('$')(o);new (c('AsyncRequest'))('/ajax/friends/lists/smart_list_publish_nux.php').setData({option_id:q.id,flid:p}).send();h=false},setContextualDialog:function n(o,p){var q,r=c('$')(p),s=c('Parent').byClass(r,'audienceSelector');if(s)(function(){o.setContext(s);o.show();var t=c('Arbiter').subscribe('composer/publish',function(){o.hide()});o.subscribe('hide',function(){t.unsubscribe()})})();},showDumbListNux:function n(o){c('AsyncDialog').send(new (c('AsyncRequest'))('/ajax/friends/lists/dumb_list_publish_nux.php').setData({flids:o}));i=false},showBothListsNux:function n(o,p){j=c('$')(o);m.showDumbListNux(p)},setDialogX:function n(o){if(!j)return;o.subscribe('hide',function(){m.showSmartListNux(c('nullthrows')(j));j=null})}};f.exports=m}),null);
__d('TypeaheadHintText',['emptyFunction'],(function a(b,c,d,e,f,g){function h(i){'use strict';this._typeahead=i}h.prototype.enable=function(){'use strict';this._typeahead.getCore().resetOnKeyup=false};Object.assign(h.prototype,{disable:c('emptyFunction')});f.exports=h}),null);
__d('legacy:HintTextTypeaheadBehavior',['TypeaheadHintText'],(function a(b,c,d,e,f,g){if(!b.TypeaheadBehaviors)b.TypeaheadBehaviors={};b.TypeaheadBehaviors.hintText=function(h){h.enableBehavior(c('TypeaheadHintText'))}}),3);
__d('differenceSets',['filterSet'],(function a(b,c,d,e,f,g){'use strict';function h(i){for(var j=arguments.length,k=Array(j>1?j-1:0),l=1;l<j;l++)k[l-1]=arguments[l];return c('filterSet')(i,function(m){return !k.some(function(n){return n.has(m)})})}f.exports=h}),null);