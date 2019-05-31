var Provisioning;!function(o){"use strict";var e=function(){function o(o,e){this.platform=o,this.global=e}return o.prototype.checkUserState=function(o){!this.global.lploggedin&&this.global.shouldOpenLogin()?(o({error:"User is not logged in."}),this.platform.openLoginPopover()):o({result:"OK."})},o.prototype.sendApiCalls=function(o,e,r){var t=this;this.platform.openTab({url:this.urlToCall(o),inactive:!0,loadHandler:function(o){var a={global:!1,type:e.action_type||"GET",cache:!1,url:e.url,data:e.params,success:function(e){t.handleResponseFromThridParty(o,r,e)},error:function(e,a,n){t.handleResponseFromThridParty(o,r,{error:a})}};if(e.header){a.headers={};for(var n=0;n<e.header.length;n++)a.headers[e.header[n].key]=e.header[n].value}if("json"!==e.dataType){var i=[];for(var s in e.data)i.push(s+"="+encodeURIComponent(e.data[s]));a.data=i.join("&")}else a.data=JSON.stringify(e.data);o.getTop().jQuery.ajax(a),t.cstimeout=setTimeout(function(){t.handleResponseFromThridParty(o,r,{error:"timeout"})},1e4)}})},o.prototype.handleResponseFromThridParty=function(o,e,r){clearTimeout(this.cstimeout),e(r),o.close()},o.prototype.getLocalKey=function(o){o({key:g_local_key,hash:g_local_key_hash,hex:g_local_key_hex})},o.prototype.urlToCall=function(o){var e=lpParseUri(o);return e.protocol?e.protocol+"://"+e.host:e.host},o}();o.ProvisioningService=e,o.provisioning=new e(LPPlatform,window)}(Provisioning||(Provisioning={}));
//# sourceMappingURL=sourcemaps/provisioning.js.map
