if (self.CavalryLogger) { CavalryLogger.start_js(["nqcnC"]); }

/**
 * @providesModule SlideshowMaker
 * @preserve-header
 * @nopackage
 * @generated
 */
__d("SlideshowMaker",[],(function a(b,c,d,e,f,g){!function(h,i){"object"==typeof g&&"undefined"!=typeof f?(f.exports=i()):"function"==typeof define&&define.amd?define(i):(h.SlideshowMaker=i())}(this,function(){"use strict";function h(z){Object.getOwnPropertyNames(m).forEach(function(aa){z.setRequestHeader(aa,m[aa])})}function i(z,aa,ba,ca){var da=new XMLHttpRequest();da.onload=function(){var ea="response" in da?da.response:da.responseText;ba(JSON.parse(ea))},da.onerror=ca,da.ontimeout=ca,da.open("get",z,true),m["X-Animoto-Authorization"]="Bearer "+aa,h(da),da.send(null)}function j(z){var aa=document.createElement("a");return aa.href=z,aa.origin||(aa.origin=aa.protocol+"//"+aa.hostname),aa.origin}function k(z,aa){return z.origin===aa&&("object"===o(z.data)&&("action" in z.data&&z.data.contentType===u))}function l(z,aa,ba){aa.contentType=u,z.postMessage(aa,ba)}var m={"X-Animoto-Accept":"application/vnd.animoto-v4+json","Content-Type":"application/json"},n=function(){},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(z){return typeof z}:function(z){return z&&"function"==typeof Symbol&&z.constructor===Symbol?"symbol":typeof z},p=function(z,aa){if(!(z instanceof aa))throw new TypeError("Cannot call a class as a function");},q=function(){function z(aa,ba){for(var ca=0;ca<ba.length;ca++){var da=ba[ca];da.enumerable=da.enumerable||false,da.configurable=true,"value" in da&&(da.writable=true),Object.defineProperty(aa,da.key,da)}}return function(aa,ba,ca){return ba&&z(aa.prototype,ba),ca&&z(aa,ca),aa}}(),r=Object.assign||function(z){for(var aa=1;aa<arguments.length;aa++){var ba=arguments[aa];for(var ca in ba)Object.prototype.hasOwnProperty.call(ba,ca)&&(z[ca]=ba[ca]);}return z},s=3,t=function(){function z(aa){p(this,z),this.url=aa.url,this.clientToken=aa.clientToken,this.success=aa.success||n,this.error=aa.error||n,this.retries=0,this.makeRequest()}return q(z,[{key:"makeRequest",value:function(){var aa=this,ba=function(da){aa.checkStatus(da)},ca=function(){aa.retry()};i(this.url,this.clientToken,ba,ca)}},{key:"checkStatus",value:function(aa){var ba=aa.response.payload.rendering_job,ca=ba.state;return "completed"===ca?void this.success(ba.links.video):"failed"===ba.state?void this.retry():void this.poll()}},{key:"poll",value:function aa(){var ba=this,ca=function(){ba.makeRequest()};setTimeout(ca,20000)}},{key:"retry",value:function(){return this.retries===s?void this.error():(this.retries+=1,void this.poll())}}]),z}(),u="application/x-maker-v1+json",v="https://video440.com",w=v+"/mm/fb/create",x=["src","srcdoc","align"],y=function(){function z(aa){p(this,z);var ba={name:"slideshow-maker",id:"slideshow-maker",title:"Slideshow Maker",style:"width:100%;height:100%;border:0",frameborder:"0",allowtransparency:"true",allowfullscreen:"true",scrolling:"no"},ca={iframeAttrs:ba,onIframeClose:n,onRenderComplete:n,onRenderError:n,onFinalize:n};if(this.options=r(ca,aa||{}),this.iframeAttrs=this.options.iframeAttrs,!this.options.id)throw new Error("Slideshow Maker was initialized without an ID");this.id=this.options.id,this.contentWindow=window,this.iframeOrigin=j(w),this.addListener(),this.createIframe()}return q(z,[{key:"addListener",value:function(){var aa=this,ba=function ca(da){aa.messageHandler(da,ca)};this.contentWindow.addEventListener("message",ba,false)}},{key:"removeListener",value:function(aa){this.contentWindow.removeEventListener("message",aa,false)}},{key:"createIframe",value:function(){var aa=this,ba=document.getElementById(this.id);this.iframe=document.createElement("iframe"),Object.keys(this.iframeAttrs).forEach(function(ca){x.indexOf(ca)===-1&&aa.iframe.setAttribute(ca,aa.iframeAttrs[ca])}),this.iframe.src=w,ba&&(ba.appendChild(this.iframe),this.childWindow=this.iframe.contentWindow,this.iframe.onload=function(){l(aa.childWindow,{action:"handshake"},aa.iframeOrigin)})}},{key:"renderComplete",value:function(aa){this.options.onRenderComplete(aa)}},{key:"renderError",value:function(){throw this.options.onRenderError(),new Error("Rendering job failed to completed")}},{key:"pollForRender",value:function(aa){var ba=this;this.renderJob=new t({url:aa,clientToken:this.clientToken,success:function(ca){ba.renderComplete(ca)},error:function(){ba.renderError()}})}},{key:"messageHandler",value:function(aa,ba){if(k(aa,this.iframeOrigin)){var ca=aa.data,da=ca.action;if("handshake"===da)this.clientToken=ca.clientToken;else if("render"===da){var ea=ca.renderJob;this.pollForRender(ea),this.removeListener(ba),this.options.onFinalize()}else "close"===da&&(this.removeListener(ba),this.options.onIframeClose());}}}]),z}();f.exports=y;return y})}),null);