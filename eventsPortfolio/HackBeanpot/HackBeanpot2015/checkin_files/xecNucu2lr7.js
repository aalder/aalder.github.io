if (self.CavalryLogger) { CavalryLogger.start_js(["yLnDr"]); }

__d('MoveToWorkUtils',['CurrentUser'],(function a(b,c,d,e,f,g){'use strict';function h(){return c('CurrentUser').isEmployee()&&c('CurrentUser').hasWorkUser()}f.exports={isViewerEligible:h}}),null);
__d('getURLRanges',['URI','URLScraper','UnicodeUtils'],(function a(b,c,d,e,f,g){'use strict';function h(i){var j=arguments.length<=1||arguments[1]===undefined?0:arguments[1],k=i.substr(j),l=c('URLScraper').match(k);if(!l)return [];var m=l;if(!/^[a-z][a-z0-9\-+.]+:\/\//i.test(l))m='http://'+l;if(!c('URI').isValidURI(m))return [];var n=k.indexOf(l),o=c('UnicodeUtils').strlen(k.substr(0,n));j+=o;var p=l.length,q=[{offset:j,length:l.length,entity:{url:m}}];return q.concat(h(i,j+p))}f.exports=h}),null);
__d('PhotoStoreCore',[],(function a(b,c,d,e,f,g){var h={actions:{UPDATE:'update'},_photoCache:{},_postCreateCallbacks:{},getPhotoCache:function i(j){if(!this._photoCache[j])throw new Error('Photo cache requested for unknown set ID');return this._photoCache[j]},hasBeenCreated:function i(j){return !!this._photoCache[j]},clearSetCache:function i(j){delete this._photoCache[j];delete this._postCreateCallbacks[j]},getByIndex:function i(j,k,l){this.getPhotoCache(j).getItemAtIndex(k,l)},getByIndexImmediate:function i(j,k){if(this._photoCache[j])return this._photoCache[j].getItemAtIndexImmediate(k);return undefined},getItemsInAvailableRange:function i(j){var k=this.getAvailableRange(j),l=[];for(var m=k.offset;m<k.length;m++)l.push(this.getByIndexImmediate(j,m));return l},getItemsAfterIndex:function i(j,k,l,m){var n=this.getCursorByIndexImmediate(j,k);this.fetchForward(j,n,l,m)},getAllByIDImmediate:function i(j){var k=Object.keys(this._photoCache);return k.map(function(l){return this.getByIndexImmediate(l,this.getIndexForID(l,j))}.bind(this)).filter(function(l){return !!l})},getIndexForID:function i(j,k){if(this._photoCache[j])return this._photoCache[j].getIndexForID(k);return undefined},getEndIndex:function i(j){var k=this.getAvailableRange(j);return k.offset+k.length-1},getCursorByIndexImmediate:function i(j,k){var l=this.getByIndexImmediate(j,k);if(l)return this._photoCache[j].getCursorForID(l.id);return undefined},hasNextPage:function i(j){var k=this.getCursorByIndexImmediate(j,this.getEndIndex(j));return this.getPhotoCache(j).hasNextPage(k)},getAvailableRange:function i(j){return this.getPhotoCache(j).getAvailableRange()},hasLooped:function i(j){return this.getPhotoCache(j).hasLooped()},fetchForward:function i(j,k,l,m){this.getPhotoCache(j).getItemsAfterCursor(k,l,m)},fetchBackward:function i(j,k,l,m){this.getPhotoCache(j).getItemsBeforeCursor(k,l,m)},executePostCreate:function i(j,k){if(this._photoCache[j]){k&&k()}else this._postCreateCallbacks[j]=k;},runPostCreateCallback:function i(j){var k=this._postCreateCallbacks[j];if(k){k();delete this._postCreateCallbacks[j]}},setPreFetchCallback:function i(j,k){this.getPhotoCache(j).setPreFetchCallback(k)},updateData:function i(j){var k=j.set_id;if(!this._photoCache[k]){this._photoCache[k]=new j.cache_class(j);this.runPostCreateCallback(k)}else if(j.query_metadata.action==h.actions.UPDATE){this._photoCache[k].updateData(j)}else this._photoCache[k].addData(j);},updateFeedbackData:function i(j){var k=Object.keys(j);k.forEach(function(l){return h.getAllByIDImmediate(l).forEach(function(m){m.feedback=j[l].feedback})})},reset:function i(){Object.keys(this._photoCache).forEach(function(j){return this.clearSetCache(j)}.bind(this))}};f.exports=h}),null);
__d('PhotoStore',['Arbiter','PhotoStoreCore'],(function a(b,c,d,e,f,g){c('Arbiter').subscribe('update-photos',function(h,i){c('PhotoStoreCore').updateData(i)});f.exports=c('PhotoStoreCore')}),null);
__d('StaticSearchSource',['AbstractSearchSource','SearchSourceCallbackManager','TokenizeUtil'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('AbstractSearchSource'));i=h&&h.prototype;function j(k,l){'use strict';i.constructor.call(this);this.$StaticSearchSource1=k;this.$StaticSearchSource2=new (c('SearchSourceCallbackManager'))({parseFn:c('TokenizeUtil').parse,matchFn:c('TokenizeUtil').isQueryMatch,indexFn:l});this.$StaticSearchSource2.addLocalEntries(this.$StaticSearchSource1)}j.prototype.searchImpl=function(k,l,m){'use strict';if(!k){l(this.$StaticSearchSource1,k)}else this.$StaticSearchSource2.search(k,l,m);};f.exports=j}),null);
__d('isSoftNewlineEvent',['Keys'],(function a(b,c,d,e,f,g){'use strict';function h(i){return i.which===c('Keys').RETURN&&(i.getModifierState('Shift')||i.getModifierState('Alt')||i.getModifierState('Control'))}f.exports=h}),null);
__d('isWebGLEnabled',[],(function a(b,c,d,e,f,g){'use strict';var h=null;function i(){try{var k=document.createElement('canvas');return Boolean(window.WebGLRenderingContext)&&Boolean(k.getContext('webgl')||k.getContext('experimental-webgl'))}catch(l){return false}}function j(){if(h===null)h=i();return h}f.exports=j}),null);