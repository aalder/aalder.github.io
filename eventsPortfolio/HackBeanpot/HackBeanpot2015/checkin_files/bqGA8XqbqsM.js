if (self.CavalryLogger) { CavalryLogger.start_js(["g77PW"]); }

__d('DeviceLoginUserCloseButtonNUX',['cx','Arbiter','CSS','Event'],(function a(b,c,d,e,f,g,h){'use strict';var i={init:function j(k,l,m){m.subscribe('hide',function(){c('CSS').removeClass(k,"_4f1s")});c('Event').listen(l,'click',function(){m.hide()});c('Arbiter').subscribe('account_switcher/user_clicked',function(){m.hide()})}};f.exports=i}),null);
__d("XProfileRefresherDialogImpressionController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/profile\/refresher\/dialog_impression\/",{})}),null);
__d('ProfileActionsUpdateInfoButton',['AsyncRequest','CSS','Event','XProfileRefresherDialogImpressionController','destroyOnUnload'],(function a(b,c,d,e,f,g){function h(i,j,k){'use strict';var l=void 0;this.$ProfileActionsUpdateInfoButton1=c('Event').listen(i,'click',function(){j.hide();c('CSS').hide(k);this.$ProfileActionsUpdateInfoButton2()}.bind(this));j.subscribe('cancel',function(){return this.$ProfileActionsUpdateInfoButton2()}.bind(this));c('destroyOnUnload')(function(){return this.$ProfileActionsUpdateInfoButton3()}.bind(this))}h.prototype.$ProfileActionsUpdateInfoButton3=function(){'use strict';this.$ProfileActionsUpdateInfoButton1&&this.$ProfileActionsUpdateInfoButton1.remove()};h.prototype.$ProfileActionsUpdateInfoButton2=function(){'use strict';new (c('AsyncRequest'))().setURI(c('XProfileRefresherDialogImpressionController').getURIBuilder().getURI()).send()};f.exports=h}),null);
__d('ContextualLayerInlineTabOrder',['AccessibilityConfig','DOM','DOMTraverser','Event','Focus','Keys','Map','SubscriptionsHandler','TabbableElements','getOrCreateDOMID'],(function a(b,c,d,e,f,g){function h(i){'use strict';if(!c('AccessibilityConfig').a11yNUXDialog)return;this._layer=i;this._isSetup=false;this._ignoreFocus=false;this._layerFocused=true;this._layerRoot=this._layer.getContentRoot();this._layerID=c('getOrCreateDOMID')(this._layerRoot);this._mutedTabbables=new (c('Map'))([]);this._subscriptions=new (c('SubscriptionsHandler'))();this._tabbableLayerElements=[]}h.prototype.enable=function(){'use strict';if(!c('AccessibilityConfig').a11yNUXDialog)return;this._subscriptions.addSubscriptions(this._layer.subscribe('aftershow',this._onAfterShow.bind(this)),this._layer.subscribe('hide',this._onAfterHide.bind(this)));if(this._layer.isShown())this._onAfterShow();};h.prototype.disable=function(){'use strict';if(!c('AccessibilityConfig').a11yNUXDialog)return;this._subscriptions.release();this._isSetup=false};h.prototype._getContext=function(){'use strict';return this._layer.getCausalElement()};h.prototype._getContextOwns=function(){'use strict';var i=this._getContext();if(!i)return [];var j=(i.getAttribute('aria-owns')||'').trim();j=j?j.match(/[^ ]+/g):[];return j};h.prototype._identifyTabbableElements=function(){'use strict';this._tabbableLayerElements=c('TabbableElements').find(this._layerRoot);if(!this._tabbableLayerElements.length&&!this._mutedTabbables.size)this._layerRoot.setAttribute('tabindex','0');if(this._layerRoot.tabIndex>=0)this._tabbableLayerElements.unshift(this._layerRoot);};h.prototype._onAfterShow=function(){'use strict';this._setupTabBehavior();var i=this._getContext(),j=this._getContextOwns();if(i&&!j.includes(this._layerID)){j.push(this._layerID);i.setAttribute('aria-owns',j.join(' '))}};h.prototype._onAfterHide=function(){'use strict';var i=this._getContext();if(i){var j=this._getContextOwns(),k=j.indexOf(this._layerID);if(k>-1){j.splice(k,1);i.setAttribute('aria-owns',j.join(' '))}}};h.prototype._setupTabBehavior=function(){'use strict';if(!this._isSetup){var i=this._getContext();if(!this._layerRoot||!i)return;this._setupTabTriggers();this._setupTabToggle();this._isSetup=true}};h.prototype._setupTabTriggers=function(){'use strict';var i=this._getContext();if(!c('TabbableElements').isTabbable(i))i.setAttribute('tabindex','0');this._subscriptions.addSubscriptions(c('Event').listen(i,'keyup',this._checkNUXFocus.bind(this)),c('Event').listen(i,'keydown',this._checkNUXFocus.bind(this)),c('Event').listen(this._layerRoot,'keydown',this._checkContextFocus.bind(this)),c('Event').listen(this._layerRoot,'layerFocus',this._setNUXFocusStart.bind(this)),c('Event').listen(this._layerRoot,'layerFocusEnd',this._setNUXFocusEnd.bind(this)),c('Event').listen(this._layerRoot,'tempFocusIgnore',this._tempIgnoreFocus.bind(this)))};h.prototype._setupTabToggle=function(){'use strict';this._handleLayerBlur();this._subscriptions.addSubscriptions(c('Event').listen(document.documentElement,'click',this._checkForFocus.bind(this)),c('Event').listen(document.documentElement,'keydown',this._checkForFocus.bind(this)))};h.prototype._handleLayerBlur=function(){'use strict';if(!this._layerFocused)return;this._identifyTabbableElements();this._tabbableLayerElements.forEach(function(i){if(!this._mutedTabbables.has(i)){var j=i.getAttribute('tabindex');i.setAttribute('tabindex','-1');this._mutedTabbables.set(i,j)}},this);this._layerFocused=false};h.prototype._handleLayerFocus=function(){'use strict';if(this._layerFocused)return;for(var i=this._mutedTabbables,j=Array.isArray(i),k=0,i=j?i:i[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var l;if(j){if(k>=i.length)break;l=i[k++]}else{k=i.next();if(k.done)break;l=k.value}var m=l,n=m[0],o=m[1];if(o===null){n.removeAttribute('tabindex')}else n.setAttribute('tabindex',o);}this._mutedTabbables.clear();this._layerFocused=true};h.prototype._checkNUXFocus=function(event){'use strict';if(this._ignoreFocus){event.preventDefault();this._ignoreFocus=false;return}if(event.getTarget()!==this._getContext()||!this._layer.isShown())return;var i=c('Event').getKeyCode(event),j=this._getContextOwns();if(!j.length||i!==c('Keys').TAB)return;var k=event.getModifiers(),l=k.shift,m=j[0]===this._layerID,n=j[j.length-1]===this._layerID;if(event.type==='keydown'&&l&&n||event.type==='keyup'&&!l&&m){event.preventDefault();c('Event').fire(this._layerRoot,l?'layerFocusEnd':'layerFocus')}};h.prototype._setNUXFocusStart=function(){'use strict';this._handleLayerFocus();this._identifyTabbableElements();c('Focus').set(this._tabbableLayerElements[0])};h.prototype._setNUXFocusEnd=function(){'use strict';this._handleLayerFocus();this._identifyTabbableElements();c('Focus').set(this._tabbableLayerElements[this._tabbableLayerElements.length-1])};h.prototype._tempIgnoreFocus=function(){'use strict';this._ignoreFocus=true};h.prototype._checkContextFocus=function(event){'use strict';var i=c('Event').getKeyCode(event),j=event.getModifiers(),k=j.shift;this._handleLayerFocus();this._identifyTabbableElements();if(!this._tabbableLayerElements.length||i!==c('Keys').TAB||!this._getContext())return;var l=this._tabbableLayerElements[0],m=this._tabbableLayerElements[this._tabbableLayerElements.length-1];if(event.getTarget()===m&&!k){if(this._setFocusAfterLayer())event.preventDefault();}else if(event.getTarget()===l&&k)if(this._setFocusBeforeLayer())event.preventDefault();};h.prototype._isTabbableNode=function(i){'use strict';return c('TabbableElements').isTabbable(i)&&!c('DOM').contains(this._layerRoot,i)};h.prototype._setFocusBeforeLayer=function(){'use strict';var i=this._getContextOwns();if(!i||!i.length)return false;if(i[0]===this._layerID){var j=c('DOMTraverser').previousFilteredNode(document.body,this._getContext(),this._isTabbableNode.bind(this));c('Focus').set(j);return true}if(i.includes(this._layerID)){var k=i[i.indexOf(this._layerID)-1];return this._focusOnElement(k,true)}return false};h.prototype._setFocusAfterLayer=function(){'use strict';var i=this._getContextOwns();if(!i||!i.length)return false;if(i[i.length-1]===this._layerID){this._refocusOnContext();return true}if(i.includes(this._layerID)){var j=i[i.indexOf(this._layerID)+1];return this._focusOnElement(j,false)}return false};h.prototype._focusOnElement=function(i,j){'use strict';var k=document.getElementById(i);if(!k)return false;c('Event').fire(k,j?'layerFocusEnd':'layerFocus');this._handleLayerBlur();return true};h.prototype._refocusOnContext=function(event){'use strict';var i=this._getContext(),j=this._getContextOwns();c('Event').fire(document.getElementById(j[0]),'tempFocusIgnore');this._handleLayerBlur();if(i)if(i.tabIndex===-1){i.tabIndex=0;c('Focus').setWithoutOutline(i)}else c('Focus').set(i);};h.prototype._checkForFocus=function(event){'use strict';var i=event.getTarget(),j=this._layer.getContentRoot(),k=c('DOM').contains(j,i);if(!this._ignoreFocus&&!this._layerFocused&&k)this._handleLayerFocus();if(this._layerFocused&&!k)this._handleLayerBlur();};f.exports=h}),null);