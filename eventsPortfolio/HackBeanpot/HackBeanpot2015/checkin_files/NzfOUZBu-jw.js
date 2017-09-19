if (self.CavalryLogger) { CavalryLogger.start_js(["bR\/r6"]); }

__d("InstanceProxy",[],(function a(b,c,d,e,f,g){function h(i){"use strict";this.$InstanceProxy1=i}h.prototype.getInstance=function(){"use strict";return this.$InstanceProxy1};h.prototype.setInstance=function(i){"use strict";this.$InstanceProxy1=i};f.exports=h}),null);
__d('ChatOpenTab',['csx','Bootloader','ContextualThing','Event','MercuryIDs','MercuryParticipantTypes','Parent','requireWeak'],(function a(b,c,d,e,f,g,h){'use strict';var i=null;c('requireWeak')('FantaTabsReactApp',function(n){return i=n});c('requireWeak')('FantaTabsSlimApp',function(n){return i=n});function j(n,o,p,q){c('Event').listen(n,'click',function(r){if(m.canOpenTab()){q(o,p);return r.kill()}})}function k(n,o,p,q){c('Event').listen(n,'click',function(r){if(m.canOpenTab())q(o,p);})}function l(n){var o=c('ContextualThing').getContext(n);return o&&c('Parent').bySelector(o,"._3qw")!==null}var m={canOpenTab:function n(){return i&&!i.isHidden()},listenOpenEmptyTabDEPRECATED:function n(o,p){j(o,null,p,this._loadAndOpenEmptyFantaTab)},listenOpenThreadDEPRECATED:function n(o,p,q){j(o,p,q,function(r,s){return this._loadAndOpenFantaTab(r,s,q)}.bind(this))},listenOpenUserTabDEPRECATED:function n(o,p,q){if(!l(o))j(o,p,q,function(r){return this._loadAndOpenFantaTab(r,c('MercuryParticipantTypes').USER,q)}.bind(this));},listenOpenUserTabPersistentEventDEPRECATED:function n(o,p,q){if(!l(o))k(o,p,q,function(r){return this._loadAndOpenFantaTab(r,c('MercuryParticipantTypes').USER,q)}.bind(this));},listenOpenPageTabDEPRECATED:function n(o,p,q,r){if(!l(o))j(o,p,r,function(s){return this._loadAndOpenFantaTab(s,c('MercuryParticipantTypes').PAGE,r)}.bind(this));},listenOpenPageTabPersistentEventDEPRECATED:function n(o,p,q,r){if(!l(o))k(o,p,r,function(s){return this._loadAndOpenFantaTab(s,c('MercuryParticipantTypes').PAGE,r)}.bind(this));},_loadAndOpenFantaTab:function n(o,p,q){c('Bootloader').loadModules(["ChatOpenTabEventLogger","FantaTabActions"],function(r,s){if(p===c('MercuryParticipantTypes').USER||p===c('MercuryParticipantTypes').PAGE){var t=c('MercuryIDs').getThreadIDFromUserID(o);s.openTab(t,[q]);r.logUserClickOpen(q,o)}else{s.openTab(o,[q]);r.logClickOpen(q,o)}},'ChatOpenTab')},_loadAndOpenEmptyFantaTab:function n(){c('Bootloader').loadModules(["ChatOpenTabEventLogger","FantaTabActions","MercuryThreads"],function(o,p,q){var r=q.get().createNewLocalThreadGenerateID();p.openTab(r,'jewel_new_message');o.logClickOpen('EmptyTab')},'ChatOpenTab')}};f.exports=m}),null);
__d('PopoverAsyncMenu',['Bootloader','Event','KeyStatus','PopoverMenu','VirtualCursorStatus','setImmediate'],(function a(b,c,d,e,f,g){var h,i,j={},k=0;h=babelHelpers.inherits(l,c('PopoverMenu'));i=h&&h.prototype;function l(m,n,o,p,q,r){'use strict';i.constructor.call(this,m,n,null,q);this._endpoint=p;this._endpointData=r||{};this._loadingMenu=o;this._instanceId=k++;j[this._instanceId]=this;this._mouseoverListener=c('Event').listen(n,'mouseover',this.fetchMenu.bind(this))}l.prototype._onLayerInit=function(){'use strict';if(!this._menu&&this._loadingMenu)this.setMenu(this._loadingMenu);this._popover.getLayer().subscribe('key',this._handleKeyEvent.bind(this));this._triggerInfo={isKeyDown:c('KeyStatus').isKeyDown(),isVirtualCursorTriggered:c('VirtualCursorStatus').isVirtualCursorTriggered()};c('setImmediate')(function(){return this.fetchMenu()}.bind(this))};l.prototype._onPopoverHide=function(){'use strict';i._onPopoverHide.call(this);this._triggerInfo=null};l.prototype._refetchMenu=function(){'use strict';if(this._menu){this._menu.destroy();this._fetched=false;this._mouseoverListener=c('Event').listen(this.getTriggerElem(),'mouseover',this.fetchMenu.bind(this))}};l.prototype.fetchMenu=function(){'use strict';if(this._fetched)return;c('Bootloader').loadModules(["AsyncRequest"],function(m){new m().setURI(this._endpoint).setData(Object.assign({pmid:this._instanceId},this._endpointData)).send()}.bind(this),'PopoverAsyncMenu');this._fetched=true;if(this._mouseoverListener){this._mouseoverListener.remove();this._mouseoverListener=null}};l.prototype._setFocus=function(m){'use strict';var n=this._triggerInfo||{},o=n.isKeyDown,p=n.isVirtualCursorTriggered;this.setInitialFocus(m,o||p);this._triggerInfo=null};l.setMenu=function(m,n){'use strict';var o=j[m];o.setMenu(n);o._setFocus(n)};l.getInstance=function(m){'use strict';return j[m]};l.getInstanceByTriggerElem=function(m){'use strict';var n=null;Object.keys(j).forEach(function(o){if(j[o]._triggerElem==m)n=j[o];});return n};f.exports=l}),null);
__d('reportData',['Banzai','SessionName','ifRequired'],(function a(b,c,d,e,f,g){var h={retry:true};function i(j){var k=arguments.length<=1||arguments[1]===undefined?{}:arguments[1],l={ft:k.ft||{},gt:k.gt||{}},m='-',n='r',o=c('ifRequired')('URI',function(q){return q.getRequestURI(true,true).getUnqualifiedURI().toString()},function(){return location.pathname+location.search+location.hash}),p=[c('SessionName').getName(),Date.now(),'act',Date.now(),0,m,j,m,m,n,o,l,0,0,0,0];c('Banzai').post('eagle_eye_event',p,h)}f.exports=i}),null);
__d('PopoverLoadingMenu',['cx','BehaviorsMixin','DOM','PopoverMenuInterface','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits(k,c('PopoverMenuInterface'));j=i&&i.prototype;function k(l){'use strict';j.constructor.call(this);this._config=l||{};this._theme=l.theme||{}}k.prototype.getRoot=function(){'use strict';if(!this._root){this._root=c('DOM').create('div',{className:c('joinClasses')("_54nq",this._config.className,this._theme.className)},c('DOM').create('div',{className:"_54ng"},c('DOM').create('div',{className:"_54nf _54af"},c('DOM').create('span',{className:"_54ag"}))));if(this._config.behaviors)this.enableBehaviors(this._config.behaviors);}return this._root};Object.assign(k.prototype,c('BehaviorsMixin'),{_root:null});f.exports=k}),null);
__d('XUIBadge',['cx','invariant','CSS','DOM','formatNumber'],(function a(b,c,d,e,f,g,h,i){function j(l){return parseInt(l,10)===l}function k(l){'use strict';this.target=l.target;this.count=l.count;this.maxcount=l.maxcount}k.prototype.getCount=function(){'use strict';return this.count};k.prototype.setCount=function(l){'use strict';j(l)||i(0);l>=0||i(0);this.count=l;c('CSS').conditionClass(this.target,'hidden_elem',this.count===0);c('DOM').setContent(this.target,c('formatNumber').withMaxLimit(l,this.maxcount));if(l>this.maxcount){c('CSS').addClass(this.target,"_5ugi")}else c('CSS').removeClass(this.target,"_5ugi");};k.prototype.setLegacyContent=function(l){'use strict';if(typeof l==='string'){c('CSS').conditionClass(this.target,'hidden_elem',l==0);c('DOM').setContent(this.target,l);c('CSS').removeClass(this.target,"_5ugi")}else this.setCount(l);};k.prototype.increment=function(){'use strict';this.setCount(this.getCount()+1)};f.exports=k}),null);