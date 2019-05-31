!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;(t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).Raven=e()}}(function(){var e,t,r;return function e(t,r,n){function o(i,s){if(!r[i]){if(!t[i]){var l="function"==typeof require&&require;if(!s&&l)return l(i,!0);if(a)return a(i,!0);var u=new Error("Cannot find module '"+i+"'");throw u.code="MODULE_NOT_FOUND",u}var c=r[i]={exports:{}};t[i][0].call(c.exports,function(e){var r=t[i][1][e];return o(r||e)},c,c.exports,e,t,r,n)}return r[i].exports}for(var a="function"==typeof require&&require,i=0;i<n.length;i++)o(n[i]);return o}({1:[function(e,t,r){function n(e){this.name="RavenConfigError",this.message=e}n.prototype=new Error,n.prototype.constructor=n,t.exports=n},{}],2:[function(e,t,r){var n=function(e,t,r){var n=e[t],o=e;if(t in e){var a="warn"===t?"warning":t;e[t]=function(){var e=[].slice.call(arguments),i=""+e.join(" "),s={level:a,logger:"console",extra:{arguments:e}};"assert"===t?!1===e[0]&&(i="Assertion failed: "+(e.slice(1).join(" ")||"console.assert"),s.extra.arguments=e.slice(1),r&&r(i,s)):r&&r(i,s),n&&Function.prototype.apply.call(n,o,e)}}};t.exports={wrapMethod:n}},{}],3:[function(e,t,r){(function(r){var n=e(6),o=e(7),a=e(1),i=e(5),s=i.isError,l=i.isObject,u=i.isErrorEvent,c=i.isUndefined,f=i.isFunction,p=i.isString,d=i.isArray,g=i.isEmptyObject,h=i.each,_=i.objectMerge,m=i.truncate,v=i.objectFrozen,b=i.hasKey,y=i.joinRegExp,w=i.urlencode,x=i.uuid4,P=i.htmlTreeAsString,E=i.isSameException,S=i.isSameStacktrace,k=i.parseUrl,T=i.fill,L=e(2).wrapMethod,O="source protocol user pass host port path".split(" "),C=/^(?:(\w+):)?\/\/(?:(\w+)(:\w+)?@)?([\w\.-]+)(?::(\d+))?(\/.*)/;function R(){return+new Date}var F="undefined"!=typeof window?window:void 0!==r?r:"undefined"!=typeof self?self:{},I=F.document,D=F.navigator;function A(e,t){return f(t)?function(r){return t(r,e)}:t}function j(){for(var e in this._hasJSON=!("object"!=typeof JSON||!JSON.stringify),this._hasDocument=!c(I),this._hasNavigator=!c(D),this._lastCapturedException=null,this._lastData=null,this._lastEventId=null,this._globalServer=null,this._globalKey=null,this._globalProject=null,this._globalContext={},this._globalOptions={logger:"javascript",ignoreErrors:[],ignoreUrls:[],whitelistUrls:[],includePaths:[],collectWindowErrors:!0,maxMessageLength:0,maxUrlLength:250,stackTraceLimit:50,autoBreadcrumbs:!0,instrument:!0,sampleRate:1},this._ignoreOnError=0,this._isRavenInstalled=!1,this._originalErrorStackTraceLimit=Error.stackTraceLimit,this._originalConsole=F.console||{},this._originalConsoleMethods={},this._plugins=[],this._startTime=R(),this._wrappedBuiltIns=[],this._breadcrumbs=[],this._lastCapturedEvent=null,this._keypressTimeout,this._location=F.location,this._lastHref=this._location&&this._location.href,this._resetBackoff(),this._originalConsole)this._originalConsoleMethods[e]=this._originalConsole[e]}j.prototype={VERSION:"3.20.1",debug:!1,TraceKit:n,config:function(e,t){var r=this;if(r._globalServer)return this._logDebug("error","Error: Raven has already been configured"),r;if(!e)return r;var o=r._globalOptions;t&&h(t,function(e,t){"tags"===e||"extra"===e||"user"===e?r._globalContext[e]=t:o[e]=t}),r.setDSN(e),o.ignoreErrors.push(/^Script error\.?$/),o.ignoreErrors.push(/^Javascript error: Script error\.? on line 0$/),o.ignoreErrors=y(o.ignoreErrors),o.ignoreUrls=!!o.ignoreUrls.length&&y(o.ignoreUrls),o.whitelistUrls=!!o.whitelistUrls.length&&y(o.whitelistUrls),o.includePaths=y(o.includePaths),o.maxBreadcrumbs=Math.max(0,Math.min(o.maxBreadcrumbs||100,100));var a={xhr:!0,console:!0,dom:!0,location:!0,sentry:!0},i=o.autoBreadcrumbs;"[object Object]"==={}.toString.call(i)?i=_(a,i):!1!==i&&(i=a),o.autoBreadcrumbs=i;var s={tryCatch:!0},l=o.instrument;return"[object Object]"==={}.toString.call(l)?l=_(s,l):!1!==l&&(l=s),o.instrument=l,n.collectWindowErrors=!!o.collectWindowErrors,r},install:function(){var e=this;return e.isSetup()&&!e._isRavenInstalled&&(n.report.subscribe(function(){e._handleOnErrorStackInfo.apply(e,arguments)}),e._patchFunctionToString(),e._globalOptions.instrument&&e._globalOptions.instrument.tryCatch&&e._instrumentTryCatch(),e._globalOptions.autoBreadcrumbs&&e._instrumentBreadcrumbs(),e._drainPlugins(),e._isRavenInstalled=!0),Error.stackTraceLimit=e._globalOptions.stackTraceLimit,this},setDSN:function(e){var t=this,r=t._parseDSN(e),n=r.path.lastIndexOf("/"),o=r.path.substr(1,n);t._dsn=e,t._globalKey=r.user,t._globalSecret=r.pass&&r.pass.substr(1),t._globalProject=r.path.substr(n+1),t._globalServer=t._getGlobalServer(r),t._globalEndpoint=t._globalServer+"/"+o+"api/"+t._globalProject+"/store/",this._resetBackoff()},context:function(e,t,r){return f(e)&&(r=t||[],t=e,e=void 0),this.wrap(e,t).apply(this,r)},wrap:function(e,t,r){var n=this;if(c(t)&&!f(e))return e;if(f(e)&&(t=e,e=void 0),!f(t))return t;try{if(t.__raven__)return t;if(t.__raven_wrapper__)return t.__raven_wrapper__}catch(e){return t}function o(){var o=[],a=arguments.length,i=!e||e&&!1!==e.deep;for(r&&f(r)&&r.apply(this,arguments);a--;)o[a]=i?n.wrap(e,arguments[a]):arguments[a];try{return t.apply(this,o)}catch(t){throw n._ignoreNextOnError(),n.captureException(t,e),t}}for(var a in t)b(t,a)&&(o[a]=t[a]);return o.prototype=t.prototype,t.__raven_wrapper__=o,o.__raven__=!0,o.__orig__=t,o},uninstall:function(){return n.report.uninstall(),this._unpatchFunctionToString(),this._restoreBuiltIns(),Error.stackTraceLimit=this._originalErrorStackTraceLimit,this._isRavenInstalled=!1,this},captureException:function(e,t){var r=!s(e),o=!u(e),a=u(e)&&!e.error;if(r&&o||a)return this.captureMessage(e,_({trimHeadFrames:1,stacktrace:!0},t));u(e)&&(e=e.error),this._lastCapturedException=e;try{var i=n.computeStackTrace(e);this._handleStackInfo(i,t)}catch(t){if(e!==t)throw t}return this},captureMessage:function(e,t){if(!this._globalOptions.ignoreErrors.test||!this._globalOptions.ignoreErrors.test(e)){var r=_({message:e+""},t=t||{}),o;try{throw new Error(e)}catch(e){o=e}o.name=null;var a=n.computeStackTrace(o),i=d(a.stack)&&a.stack[1],s=i&&i.url||"";if((!this._globalOptions.ignoreUrls.test||!this._globalOptions.ignoreUrls.test(s))&&(!this._globalOptions.whitelistUrls.test||this._globalOptions.whitelistUrls.test(s))){if(this._globalOptions.stacktrace||t&&t.stacktrace){t=_({fingerprint:e,trimHeadFrames:(t.trimHeadFrames||0)+1},t);var l=this._prepareFrames(a,t);r.stacktrace={frames:l.reverse()}}return this._send(r),this}}},captureBreadcrumb:function(e){var t=_({timestamp:R()/1e3},e);if(f(this._globalOptions.breadcrumbCallback)){var r=this._globalOptions.breadcrumbCallback(t);if(l(r)&&!g(r))t=r;else if(!1===r)return this}return this._breadcrumbs.push(t),this._breadcrumbs.length>this._globalOptions.maxBreadcrumbs&&this._breadcrumbs.shift(),this},addPlugin:function(e){var t=[].slice.call(arguments,1);return this._plugins.push([e,t]),this._isRavenInstalled&&this._drainPlugins(),this},setUserContext:function(e){return this._globalContext.user=e,this},setExtraContext:function(e){return this._mergeContext("extra",e),this},setTagsContext:function(e){return this._mergeContext("tags",e),this},clearContext:function(){return this._globalContext={},this},getContext:function(){return JSON.parse(o(this._globalContext))},setEnvironment:function(e){return this._globalOptions.environment=e,this},setRelease:function(e){return this._globalOptions.release=e,this},setDataCallback:function(e){var t=this._globalOptions.dataCallback;return this._globalOptions.dataCallback=A(t,e),this},setBreadcrumbCallback:function(e){var t=this._globalOptions.breadcrumbCallback;return this._globalOptions.breadcrumbCallback=A(t,e),this},setShouldSendCallback:function(e){var t=this._globalOptions.shouldSendCallback;return this._globalOptions.shouldSendCallback=A(t,e),this},setTransport:function(e){return this._globalOptions.transport=e,this},lastException:function(){return this._lastCapturedException},lastEventId:function(){return this._lastEventId},isSetup:function(){return!!this._hasJSON&&(!!this._globalServer||(this.ravenNotConfiguredError||(this.ravenNotConfiguredError=!0,this._logDebug("error","Error: Raven has not been configured.")),!1))},afterLoad:function(){var e=F.RavenConfig;e&&this.config(e.dsn,e.config).install()},showReportDialog:function(e){if(I){var t=(e=e||{}).eventId||this.lastEventId();if(!t)throw new a("Missing eventId");var r=e.dsn||this._dsn;if(!r)throw new a("Missing DSN");var n=encodeURIComponent,o="";o+="?eventId="+n(t),o+="&dsn="+n(r);var i=e.user||this._globalContext.user;i&&(i.name&&(o+="&name="+n(i.name)),i.email&&(o+="&email="+n(i.email)));var s=this._getGlobalServer(this._parseDSN(r)),l=I.createElement("script");l.async=!0,l.src=s+"/api/embed/error-page/"+o,(I.head||I.body).appendChild(l)}},_ignoreNextOnError:function(){var e=this;this._ignoreOnError+=1,setTimeout(function(){e._ignoreOnError-=1})},_triggerEvent:function(e,t){var r,n;if(this._hasDocument){for(n in t=t||{},e="raven"+e.substr(0,1).toUpperCase()+e.substr(1),I.createEvent?(r=I.createEvent("HTMLEvents")).initEvent(e,!0,!0):(r=I.createEventObject()).eventType=e,t)b(t,n)&&(r[n]=t[n]);if(I.createEvent)I.dispatchEvent(r);else try{I.fireEvent("on"+r.eventType.toLowerCase(),r)}catch(e){}}},_breadcrumbEventHandler:function(e){var t=this;return function(r){if(t._keypressTimeout=null,t._lastCapturedEvent!==r){var n;t._lastCapturedEvent=r;try{n=P(r.target)}catch(e){n="<unknown>"}t.captureBreadcrumb({category:"ui."+e,message:n})}}},_keypressEventHandler:function(){var e=this,t=1e3;return function(r){var n;try{n=r.target}catch(e){return}var o=n&&n.tagName;if(o&&("INPUT"===o||"TEXTAREA"===o||n.isContentEditable)){var a=e._keypressTimeout;a||e._breadcrumbEventHandler("input")(r),clearTimeout(a),e._keypressTimeout=setTimeout(function(){e._keypressTimeout=null},t)}}},_captureUrlChange:function(e,t){var r=k(this._location.href),n=k(t),o=k(e);this._lastHref=t,r.protocol===n.protocol&&r.host===n.host&&(t=n.relative),r.protocol===o.protocol&&r.host===o.host&&(e=o.relative),this.captureBreadcrumb({category:"navigation",data:{to:t,from:e}})},_patchFunctionToString:function(){var e=this;e._originalFunctionToString=Function.prototype.toString,Function.prototype.toString=function(){return"function"==typeof this&&this.__raven__?e._originalFunctionToString.apply(this.__orig__,arguments):e._originalFunctionToString.apply(this,arguments)}},_unpatchFunctionToString:function(){this._originalFunctionToString&&(Function.prototype.toString=this._originalFunctionToString)},_instrumentTryCatch:function(){var e=this,t=e._wrappedBuiltIns;function r(t){return function(r,n){for(var o=new Array(arguments.length),a=0;a<o.length;++a)o[a]=arguments[a];var i=o[0];return f(i)&&(o[0]=e.wrap(i)),t.apply?t.apply(this,o):t(o[0],o[1])}}var n=this._globalOptions.autoBreadcrumbs;function o(r){var o=F[r]&&F[r].prototype;o&&o.hasOwnProperty&&o.hasOwnProperty("addEventListener")&&(T(o,"addEventListener",function(t){return function(o,a,i,s){try{a&&a.handleEvent&&(a.handleEvent=e.wrap(a.handleEvent))}catch(e){}var l,u,c;return n&&n.dom&&("EventTarget"===r||"Node"===r)&&(u=e._breadcrumbEventHandler("click"),c=e._keypressEventHandler(),l=function(e){if(e){var t;try{t=e.type}catch(e){return}return"click"===t?u(e):"keypress"===t?c(e):void 0}}),t.call(this,o,e.wrap(a,void 0,l),i,s)}},t),T(o,"removeEventListener",function(e){return function(t,r,n,o){try{r=r&&(r.__raven_wrapper__?r.__raven_wrapper__:r)}catch(e){}return e.call(this,t,r,n,o)}},t))}T(F,"setTimeout",r,t),T(F,"setInterval",r,t),F.requestAnimationFrame&&T(F,"requestAnimationFrame",function(t){return function(r){return t(e.wrap(r))}},t);for(var a=["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"],i=0;i<a.length;i++)o(a[i])},_instrumentBreadcrumbs:function(){var e=this,t=this._globalOptions.autoBreadcrumbs,r=e._wrappedBuiltIns;function n(t,r){t in r&&f(r[t])&&T(r,t,function(t){return e.wrap(t)})}if(t.xhr&&"XMLHttpRequest"in F){var o=XMLHttpRequest.prototype;T(o,"open",function(t){return function(r,n){return p(n)&&-1===n.indexOf(e._globalKey)&&(this.__raven_xhr={method:r,url:n,status_code:null}),t.apply(this,arguments)}},r),T(o,"send",function(t){return function(r){var o=this;function a(){if(o.__raven_xhr&&4===o.readyState){try{o.__raven_xhr.status_code=o.status}catch(e){}e.captureBreadcrumb({type:"http",category:"xhr",data:o.__raven_xhr})}}for(var i=["onload","onerror","onprogress"],s=0;s<i.length;s++)n(i[s],o);return"onreadystatechange"in o&&f(o.onreadystatechange)?T(o,"onreadystatechange",function(t){return e.wrap(t,void 0,a)}):o.onreadystatechange=a,t.apply(this,arguments)}},r)}t.xhr&&"fetch"in F&&T(F,"fetch",function(t){return function(r,n){for(var o=new Array(arguments.length),a=0;a<o.length;++a)o[a]=arguments[a];var i=o[0],s="GET",l;"string"==typeof i?l=i:"Request"in F&&i instanceof F.Request?(l=i.url,i.method&&(s=i.method)):l=""+i,o[1]&&o[1].method&&(s=o[1].method);var u={method:s,url:l,status_code:null};return e.captureBreadcrumb({type:"http",category:"fetch",data:u}),t.apply(this,o).then(function(e){return u.status_code=e.status,e})}},r),t.dom&&this._hasDocument&&(I.addEventListener?(I.addEventListener("click",e._breadcrumbEventHandler("click"),!1),I.addEventListener("keypress",e._keypressEventHandler(),!1)):(I.attachEvent("onclick",e._breadcrumbEventHandler("click")),I.attachEvent("onkeypress",e._keypressEventHandler())));var a=F.chrome,i,s=!(a&&a.app&&a.app.runtime)&&F.history&&history.pushState&&history.replaceState;if(t.location&&s){var l=F.onpopstate;F.onpopstate=function(){var t=e._location.href;if(e._captureUrlChange(e._lastHref,t),l)return l.apply(this,arguments)};var u=function(t){return function(){var r=arguments.length>2?arguments[2]:void 0;return r&&e._captureUrlChange(e._lastHref,r+""),t.apply(this,arguments)}};T(history,"pushState",u,r),T(history,"replaceState",u,r)}if(t.console&&"console"in F&&console.log){var c=function(t,r){e.captureBreadcrumb({message:t,level:r.level,category:"console"})};h(["debug","info","warn","error","log"],function(e,t){L(console,t,c)})}},_restoreBuiltIns:function(){for(var e;this._wrappedBuiltIns.length;){var t=(e=this._wrappedBuiltIns.shift())[0],r=e[1],n=e[2];t[r]=n}},_drainPlugins:function(){var e=this;h(this._plugins,function(t,r){var n=r[0],o=r[1];n.apply(e,[e].concat(o))})},_parseDSN:function(e){var t=C.exec(e),r={},n=7;try{for(;n--;)r[O[n]]=t[n]||""}catch(t){throw new a("Invalid DSN: "+e)}if(r.pass&&!this._globalOptions.allowSecretKey)throw new a("Do not specify your secret key in the DSN. See: http://bit.ly/raven-secret-key");return r},_getGlobalServer:function(e){var t="//"+e.host+(e.port?":"+e.port:"");return e.protocol&&(t=e.protocol+":"+t),t},_handleOnErrorStackInfo:function(){this._ignoreOnError||this._handleStackInfo.apply(this,arguments)},_handleStackInfo:function(e,t){var r=this._prepareFrames(e,t);this._triggerEvent("handle",{stackInfo:e,options:t}),this._processException(e.name,e.message,e.url,e.lineno,r,t)},_prepareFrames:function(e,t){var r=this,n=[];if(e.stack&&e.stack.length&&(h(e.stack,function(t,o){var a=r._normalizeFrame(o,e.url);a&&n.push(a)}),t&&t.trimHeadFrames))for(var o=0;o<t.trimHeadFrames&&o<n.length;o++)n[o].in_app=!1;return n=n.slice(0,this._globalOptions.stackTraceLimit)},_normalizeFrame:function(e,t){var r={filename:e.url,lineno:e.line,colno:e.column,function:e.func||"?"};return e.url||(r.filename=t),r.in_app=!(this._globalOptions.includePaths.test&&!this._globalOptions.includePaths.test(r.filename)||/(Raven|TraceKit)\./.test(r.function)||/raven\.(min\.)?js$/.test(r.filename)),r},_processException:function(e,t,r,n,o,a){var i=(e?e+": ":"")+(t||""),s;if((!this._globalOptions.ignoreErrors.test||!this._globalOptions.ignoreErrors.test(t)&&!this._globalOptions.ignoreErrors.test(i))&&(o&&o.length?(r=o[0].filename||r,o.reverse(),s={frames:o}):r&&(s={frames:[{filename:r,lineno:n,in_app:!0}]}),(!this._globalOptions.ignoreUrls.test||!this._globalOptions.ignoreUrls.test(r))&&(!this._globalOptions.whitelistUrls.test||this._globalOptions.whitelistUrls.test(r)))){var l=_({exception:{values:[{type:e,value:t,stacktrace:s}]},culprit:r},a);this._send(l)}},_trimPacket:function(e){var t=this._globalOptions.maxMessageLength;if(e.message&&(e.message=m(e.message,t)),e.exception){var r=e.exception.values[0];r.value=m(r.value,t)}var n=e.request;return n&&(n.url&&(n.url=m(n.url,this._globalOptions.maxUrlLength)),n.Referer&&(n.Referer=m(n.Referer,this._globalOptions.maxUrlLength))),e.breadcrumbs&&e.breadcrumbs.values&&this._trimBreadcrumbs(e.breadcrumbs),e},_trimBreadcrumbs:function(e){for(var t=["to","from","url"],r,n,o,a=0;a<e.values.length;++a)if((n=e.values[a]).hasOwnProperty("data")&&l(n.data)&&!v(n.data)){o=_({},n.data);for(var i=0;i<t.length;++i)r=t[i],o.hasOwnProperty(r)&&o[r]&&(o[r]=m(o[r],this._globalOptions.maxUrlLength));e.values[a].data=o}},_getHttpData:function(){if(this._hasNavigator||this._hasDocument){var e={};return this._hasNavigator&&D.userAgent&&(e.headers={"User-Agent":navigator.userAgent}),this._hasDocument&&(I.location&&I.location.href&&(e.url=I.location.href),I.referrer&&(e.headers||(e.headers={}),e.headers.Referer=I.referrer)),e}},_resetBackoff:function(){this._backoffDuration=0,this._backoffStart=null},_shouldBackoff:function(){return this._backoffDuration&&R()-this._backoffStart<this._backoffDuration},_isRepeatData:function(e){var t=this._lastData;return!(!t||e.message!==t.message||e.culprit!==t.culprit)&&(e.stacktrace||t.stacktrace?S(e.stacktrace,t.stacktrace):!e.exception&&!t.exception||E(e.exception,t.exception))},_setBackoffState:function(e){if(!this._shouldBackoff()){var t=e.status;if(400===t||401===t||429===t){var r;try{r=e.getResponseHeader("Retry-After"),r=1e3*parseInt(r,10)}catch(e){}this._backoffDuration=r||(2*this._backoffDuration||1e3),this._backoffStart=R()}}},_send:function(e){var t=this._globalOptions,r={project:this._globalProject,logger:t.logger,platform:"javascript"},n=this._getHttpData();n&&(r.request=n),e.trimHeadFrames&&delete e.trimHeadFrames,(e=_(r,e)).tags=_(_({},this._globalContext.tags),e.tags),e.extra=_(_({},this._globalContext.extra),e.extra),e.extra["session:duration"]=R()-this._startTime,this._breadcrumbs&&this._breadcrumbs.length>0&&(e.breadcrumbs={values:[].slice.call(this._breadcrumbs,0)}),g(e.tags)&&delete e.tags,this._globalContext.user&&(e.user=this._globalContext.user),t.environment&&(e.environment=t.environment),t.release&&(e.release=t.release),t.serverName&&(e.server_name=t.serverName),f(t.dataCallback)&&(e=t.dataCallback(e)||e),e&&!g(e)&&(f(t.shouldSendCallback)&&!t.shouldSendCallback(e)||(this._shouldBackoff()?this._logDebug("warn","Raven dropped error due to backoff: ",e):"number"==typeof t.sampleRate?Math.random()<t.sampleRate&&this._sendProcessedPayload(e):this._sendProcessedPayload(e)))},_getUuid:function(){return x()},_sendProcessedPayload:function(e,t){var r=this,n=this._globalOptions;if(this.isSetup())if(e=this._trimPacket(e),this._globalOptions.allowDuplicates||!this._isRepeatData(e)){this._lastEventId=e.event_id||(e.event_id=this._getUuid()),this._lastData=e,this._logDebug("debug","Raven about to send:",e);var o={sentry_version:"7",sentry_client:"raven-js/"+this.VERSION,sentry_key:this._globalKey};this._globalSecret&&(o.sentry_secret=this._globalSecret);var a=e.exception&&e.exception.values[0];this._globalOptions.autoBreadcrumbs&&this._globalOptions.autoBreadcrumbs.sentry&&this.captureBreadcrumb({category:"sentry",message:a?(a.type?a.type+": ":"")+a.value:e.message,event_id:e.event_id,level:e.level||"error"});var i=this._globalEndpoint;(n.transport||this._makeRequest).call(this,{url:i,auth:o,data:e,options:n,onSuccess:function n(){r._resetBackoff(),r._triggerEvent("success",{data:e,src:i}),t&&t()},onError:function n(o){r._logDebug("error","Raven transport failed to send: ",o),o.request&&r._setBackoffState(o.request),r._triggerEvent("failure",{data:e,src:i}),o=o||new Error("Raven send failed (no additional details provided)"),t&&t(o)}})}else this._logDebug("warn","Raven dropped repeat event: ",e)},_makeRequest:function(e){var t=F.XMLHttpRequest&&new F.XMLHttpRequest,r;if(t&&("withCredentials"in t||"undefined"!=typeof XDomainRequest)){var n=e.url;"withCredentials"in t?t.onreadystatechange=function(){if(4===t.readyState)if(200===t.status)e.onSuccess&&e.onSuccess();else if(e.onError){var r=new Error("Sentry error code: "+t.status);r.request=t,e.onError(r)}}:(t=new XDomainRequest,n=n.replace(/^https?:/,""),e.onSuccess&&(t.onload=e.onSuccess),e.onError&&(t.onerror=function(){var r=new Error("Sentry error code: XDomainRequest");r.request=t,e.onError(r)})),t.open("POST",n+"?"+w(e.auth)),t.send(o(e.data))}},_logDebug:function(e){this._originalConsoleMethods[e]&&this.debug&&Function.prototype.apply.call(this._originalConsoleMethods[e],this._originalConsole,[].slice.call(arguments,1))},_mergeContext:function(e,t){c(t)?delete this._globalContext[e]:this._globalContext[e]=_(this._globalContext[e]||{},t)}},j.prototype.setUser=j.prototype.setUserContext,j.prototype.setReleaseContext=j.prototype.setRelease,t.exports=j}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{1:1,2:2,5:5,6:6,7:7}],4:[function(e,t,r){(function(r){var n=e(3),o="undefined"!=typeof window?window:void 0!==r?r:"undefined"!=typeof self?self:{},a=o.Raven,i=new n;i.noConflict=function(){return o.Raven=a,i},i.afterLoad(),t.exports=i}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{3:3}],5:[function(e,t,r){(function(e){var r="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};function n(e){return"object"==typeof e&&null!==e}function o(e){switch({}.toString.call(e)){case"[object Error]":case"[object Exception]":case"[object DOMException]":return!0;default:return e instanceof Error}}function a(e){return f()&&"[object ErrorEvent]"==={}.toString.call(e)}function i(e){return void 0===e}function s(e){return"function"==typeof e}function l(e){return"[object String]"===Object.prototype.toString.call(e)}function u(e){return"[object Array]"===Object.prototype.toString.call(e)}function c(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}function f(){try{return new ErrorEvent(""),!0}catch(e){return!1}}function p(e){function t(t,r){var n=e(t)||t;return r&&r(n)||n}return t}function d(e,t){var r,n;if(i(e.length))for(r in e)m(e,r)&&t.call(null,r,e[r]);else if(n=e.length)for(r=0;r<n;r++)t.call(null,r,e[r])}function g(e,t){return t?(d(t,function(t,r){e[t]=r}),e):e}function h(e){return!!Object.isFrozen&&Object.isFrozen(e)}function _(e,t){return!t||e.length<=t?e:e.substr(0,t)+"…"}function m(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function v(e){for(var t=[],r=0,n=e.length,o;r<n;r++)l(o=e[r])?t.push(o.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")):o&&o.source&&t.push(o.source);return new RegExp(t.join("|"),"i")}function b(e){var t=[];return d(e,function(e,r){t.push(encodeURIComponent(e)+"="+encodeURIComponent(r))}),t.join("&")}function y(e){var t=e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);if(!t)return{};var r=t[6]||"",n=t[8]||"";return{protocol:t[2],host:t[4],path:t[5],relative:t[5]+r+n}}function w(){var e=r.crypto||r.msCrypto;if(!i(e)&&e.getRandomValues){var t=new Uint16Array(8);e.getRandomValues(t),t[3]=4095&t[3]|16384,t[4]=16383&t[4]|32768;var n=function(e){for(var t=e.toString(16);t.length<4;)t="0"+t;return t};return n(t[0])+n(t[1])+n(t[2])+n(t[3])+n(t[4])+n(t[5])+n(t[6])+n(t[7])}return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0,r;return("x"===e?t:3&t|8).toString(16)})}function x(e){for(var t=5,r=80,n=[],o=0,a=0,i=" > ",s=i.length,l;e&&o++<5&&!("html"===(l=P(e))||o>1&&a+n.length*s+l.length>=80);)n.push(l),a+=l.length,e=e.parentNode;return n.reverse().join(i)}function P(e){var t=[],r,n,o,a,i;if(!e||!e.tagName)return"";if(t.push(e.tagName.toLowerCase()),e.id&&t.push("#"+e.id),(r=e.className)&&l(r))for(n=r.split(/\s+/),i=0;i<n.length;i++)t.push("."+n[i]);var s=["type","name","title","alt"];for(i=0;i<s.length;i++)o=s[i],(a=e.getAttribute(o))&&t.push("["+o+'="'+a+'"]');return t.join("")}function E(e,t){return!!(!!e^!!t)}function S(e,t){return!E(e,t)&&(e=e.values[0],t=t.values[0],e.type===t.type&&e.value===t.value&&k(e.stacktrace,t.stacktrace))}function k(e,t){if(E(e,t))return!1;var r=e.frames,n=t.frames,o,a;if(r.length!==n.length)return!1;for(var i=0;i<r.length;i++)if(o=r[i],a=n[i],o.filename!==a.filename||o.lineno!==a.lineno||o.colno!==a.colno||o.function!==a.function)return!1;return!0}function T(e,t,r,n){var o=e[t];e[t]=r(o),e[t].__raven__=!0,e[t].__orig__=o,n&&n.push([e,t,o])}t.exports={isObject:n,isError:o,isErrorEvent:a,isUndefined:i,isFunction:s,isString:l,isArray:u,isEmptyObject:c,supportsErrorEvent:f,wrappedCallback:p,each:d,objectMerge:g,truncate:_,objectFrozen:h,hasKey:m,joinRegExp:v,urlencode:b,uuid4:w,htmlTreeAsString:x,htmlElementAsString:P,isSameException:S,isSameStacktrace:k,parseUrl:y,fill:T}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],6:[function(e,t,r){(function(r){var n=e(5),o={collectWindowErrors:!0,debug:!1},a="undefined"!=typeof window?window:void 0!==r?r:"undefined"!=typeof self?self:{},i=[].slice,s="?",l=/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;function u(){return"undefined"==typeof document||null==document.location?"":document.location.href}o.report=function e(){var t=[],r=null,c=null,f=null,p,d;function g(e){b(),t.push(e)}function h(e){for(var r=t.length-1;r>=0;--r)t[r]===e&&t.splice(r,1)}function _(){y(),t=[]}function m(e,r){var n=null;if(!r||o.collectWindowErrors){for(var a in t)if(t.hasOwnProperty(a))try{t[a].apply(null,[e].concat(i.call(arguments,2)))}catch(e){n=e}if(n)throw n}}function v(e,t,r,a,i){var c=null;if(f)o.computeStackTrace.augmentStackTraceWithInitialElement(f,t,r,e),w();else if(i&&n.isError(i))m(c=o.computeStackTrace(i),!0);else{var d={url:t,line:r,column:a},g=void 0,h=e,_,_;if("[object String]"==={}.toString.call(e))(_=e.match(l))&&(g=_[1],h=_[2]);d.func=s,m(c={name:g,message:h,url:u(),stack:[d]},!0)}return!!p&&p.apply(this,arguments)}function b(){d||(p=a.onerror,a.onerror=v,d=!0)}function y(){d&&(a.onerror=p,d=!1,p=void 0)}function w(){var e=f,t=r;r=null,f=null,c=null,m.apply(null,[e,!1].concat(t))}function x(e,t){var n=i.call(arguments,1);if(f){if(c===e)return;w()}var a=o.computeStackTrace(e);if(f=a,c=e,r=n,setTimeout(function(){c===e&&w()},a.incomplete?2e3:0),!1!==t)throw e}return x.subscribe=g,x.unsubscribe=h,x.uninstall=_,x}(),o.computeStackTrace=function e(){function t(e){if(void 0!==e.stack&&e.stack){for(var t=/^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|[a-z]:|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,r=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,n=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,o=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,a=/\((\S*)(?::(\d+))(?::(\d+))\)/,i=e.stack.split("\n"),l=[],c,f,p,d=/^(.*) is undefined$/.exec(e.message),g=0,h=i.length;g<h;++g){if(f=t.exec(i[g])){var _=f[2]&&0===f[2].indexOf("native"),m;(m=f[2]&&0===f[2].indexOf("eval"))&&(c=a.exec(f[2]))&&(f[2]=c[1],f[3]=c[2],f[4]=c[3]),p={url:_?null:f[2],func:f[1]||s,args:_?[f[2]]:[],line:f[3]?+f[3]:null,column:f[4]?+f[4]:null}}else if(f=n.exec(i[g]))p={url:f[2],func:f[1]||s,args:[],line:+f[3],column:f[4]?+f[4]:null};else{if(!(f=r.exec(i[g])))continue;var m;(m=f[3]&&f[3].indexOf(" > eval")>-1)&&(c=o.exec(f[3]))?(f[3]=c[1],f[4]=c[2],f[5]=null):0!==g||f[5]||void 0===e.columnNumber||(l[0].column=e.columnNumber+1),p={url:f[3],func:f[1]||s,args:f[2]?f[2].split(","):[],line:f[4]?+f[4]:null,column:f[5]?+f[5]:null}}!p.func&&p.line&&(p.func=s),l.push(p)}return l.length?{name:e.name,message:e.message,url:u(),stack:l}:null}}function r(e,t,r,n){var o={url:t,line:r};if(o.url&&o.line){if(e.incomplete=!1,o.func||(o.func=s),e.stack.length>0&&e.stack[0].url===o.url){if(e.stack[0].line===o.line)return!1;if(!e.stack[0].line&&e.stack[0].func===o.func)return e.stack[0].line=o.line,!1}return e.stack.unshift(o),e.partial=!0,!0}return e.incomplete=!0,!1}function n(e,t){for(var i=/function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,l=[],c={},f=!1,p,d,g,h=n.caller;h&&!f;h=h.caller)if(h!==a&&h!==o.report){if(d={url:null,func:s,line:null,column:null},h.name?d.func=h.name:(p=i.exec(h.toString()))&&(d.func=p[1]),void 0===d.func)try{d.func=p.input.substring(0,p.input.indexOf("{"))}catch(e){}c[""+h]?f=!0:c[""+h]=!0,l.push(d)}t&&l.splice(0,t);var _={name:e.name,message:e.message,url:u(),stack:l};return r(_,e.sourceURL||e.fileName,e.line||e.lineNumber,e.message||e.description),_}function a(e,r){var a=null;r=null==r?0:+r;try{if(a=t(e))return a}catch(e){if(o.debug)throw e}try{if(a=n(e,r+1))return a}catch(e){if(o.debug)throw e}return{name:e.name,message:e.message,url:u()}}return a.augmentStackTraceWithInitialElement=r,a.computeStackTraceFromStackProp=t,a}(),t.exports=o}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{5:5}],7:[function(e,t,r){function n(e,t){for(var r=0;r<e.length;++r)if(e[r]===t)return r;return-1}function o(e,t,r,n){return JSON.stringify(e,i(t,n),r)}function a(e){var t={stack:e.stack,message:e.message,name:e.name};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}function i(e,t){var r=[],o=[];return null==t&&(t=function(e,t){return r[0]===t?"[Circular ~]":"[Circular ~."+o.slice(0,n(r,t)).join(".")+"]"}),function(i,s){if(r.length>0){var l=n(r,this);~l?r.splice(l+1):r.push(this),~l?o.splice(l,1/0,i):o.push(i),~n(r,s)&&(s=t.call(this,i,s))}else r.push(s);return null==e?s instanceof Error?a(s):s:e.call(this,i,s)}}(r=t.exports=o).getSerialize=i},{}]},{},[4])(4)}),LPRavenSanitize=function(){var e=/([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})/,t=/(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3})|(?:((?:[0-9a-fA-F]{1,4}:){7}(?:[0-9a-fA-F]{1,4}|:)|(?:[0-9a-fA-F]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|:[0-9a-fA-F]{1,4}|:)|(?:[0-9a-fA-F]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(:[0-9a-fA-F]{1,4}){1,2}|:)|(?:[0-9a-fA-F]{1,4}:){4}(?:(:[0-9a-fA-F]{1,4}){0,1}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(:[0-9a-fA-F]{1,4}){1,3}|:)|(?:[0-9a-fA-F]{1,4}:){3}(?:(:[0-9a-fA-F]{1,4}){0,2}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(:[0-9a-fA-F]{1,4}){1,4}|:)|(?:[0-9a-fA-F]{1,4}:){2}(?:(:[0-9a-fA-F]{1,4}){0,3}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(:[0-9a-fA-F]{1,4}){1,5}|:)|(?:[0-9a-fA-F]{1,4}:){1}(?:(:[0-9a-fA-F]{1,4}){0,4}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(:[0-9a-fA-F]{1,4}){1,6}|:)|(?::((?::[0-9a-fA-F]{1,4}){0,5}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[0-9a-fA-F]{1,4}){1,7}|:)))(%[0-9a-zA-Z]{1,})?)/,r=/^(?:(https?|ftp):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})(?:[\/\w \.-]*)/i,n=function(t){if(!s.replaceEmail)return t;var r=e.exec(t);return!r||r.length?t:"[[*@*."+r.pop()+"]]"},o=function(e){return s.replaceIp&&t.test(e)?e.indexOf(".")>-1?"[[ipv4 address]]":"[[ipv6 address]]":e},a=function(e){if(!s.replaceUrl)return e;var t=r.exec(e);if(!t||!t.length)return e;var n=t[1],o=t[2],a=t[3];return o.indexOf("lastpass")>-1?e:"[["+(n||"")+o+"."+a+"]]"},i={culprit:!0,stacktrace:!0},s={replaceUrl:!0,replaceEmail:!0,replaceIp:!0},l=function(e){var t={};return Object.keys(e).forEach(function(r){if(t[r]=void 0,e[r])if(i[r])t[r]=e[r];else if(Array.isArray(e[r]))t[r]=e[r].map(function(e){return l(e)});else if("object"==typeof e[r])t[r]=l(e[r]);else if("string"==typeof e[r]){var s=e[r];s=n(s),s=o(s),s=a(s),t[r]=s}}),t};return{config:s,sanitize:l}}(),LPPlatform={},LPPlatform.openAcctsIframe=function(e,t){var r=-1!==document.location.href.indexOf("vault.php");e.webvault=r?"1":"0";var n=LPTools.createElement("iframe","acctsiframe");n.src=r?"iframe.php":"iframe.html",LPPlatform.addEventListener(n,"load",function(){n.contentWindow.goTo(LPProxy.getBaseURL()+"acctsiframe.php?"+$.param(e),t),LPTools.addClass(n,"loaded")}),document.body.appendChild(n),bg.onSettingsIframeClose(function(){try{document.body.removeChild(n)}catch(e){LPPlatform.logException(e)}})},LPPlatform.shouldShowVaultLoginButton=function(){return!0},LPPlatform.lpIsExtension=function(){return!0},LPPlatform.openURL=function(e){bg.openURL(e)},LPPlatform.getBaseURL=function(){return bg.get("base_url")},LPPlatform.doAjax=function(e){$.ajax(e)},LPPlatform.ajax=function(e){bg.isOffline()?e.error&&e.error(null,null,"offline"):LPPlatform.doAjax(e)},LPPlatform.getOpenGroups=function(){var e=bg.localStorage_getItem(bg.db_prepend(bg.get("g_username_hash")+".savedtree"));if(null!==e){for(var t={},r=0,n=(e=LPProxy.decrypt(e).split(",")).length;r<n;++r){var o=e[r];0===o.indexOf("_")&&(o=o.substring(1)),t[o]=!0}return t}return null},LPPlatform.setOpenGroups=function(e){for(var t=0,r=e.length;t<r;++t)e[t]="_"+e[t];var n=LPProxy.encrypt(e.join(","));bg.localStorage_setItem(bg.db_prepend(bg.get("g_username_hash")+".savedtree"),n)},LPPlatform.initialized=function(){return!0},LPPlatform.getHTML=function(e,t){$.ajax({url:e,success:t,dataType:"text"})},LPPlatform.purchasePremium=function(){window.open(LPProxy.getBaseURL()+"features_joinpremium4.php?a=1","_blank")},LPPlatform.loadedPreferences=function(){return LPTools.hasProperties(bg.get("g_userprefs"))},LPPlatform.openAttachment=function(e){bg.openAttach(e._parentNote.getID(),e.getID())},LPPlatform.saveAttachment=function(e){bg.exportAttachment(e._parentNote.getID(),e.getID())},LPPlatform.logException=function(e){var t="string"==typeof e?e:e.message;e.stack&&(t+="\n"+e.stack),self.Raven&&self.Raven.captureException(e),LPPlatform.logError(t)},LPPlatform.logError=function(e){e="Page: "+window.location.href+" Error: "+e;try{console.error(e),bg.lpReportError("VAULT_4_0: "+e)}catch(e){}},LPPlatform.addEventListener=function(e){if(e){for(var t=[],r=1;r<arguments.length;++r)t.push(arguments[r]);e.addEventListener.apply(e,t)}},LPPlatform.removeEventListener=function(e){for(var t=[],r=1;r<arguments.length;++r)t.push(arguments[r]);e.removeEventListener.apply(e,t)},LPPlatform.canBackgroundOpenPopover=function(){return!0},LPPlatform.generateSharingKeys=function(e){bg.generateSharingKeys(e)},LPPlatform.getResourcePath=function(e){return e},LPPlatform.canPreventBlur=function(){return!0},LPPlatform.getBackgroundData=function(e){return e},LPPlatform.showIntroTutorial=function(){LPPlatform.openTour()},LPPlatform.setIntroTutorialDisable=function(e){return!1},LPPlatform.supportsBinary=function(){return!0},LPPlatform.openKeyboard=function(){bg.LPPlatform.openTabDialog("login",{virtualKeyboard:!0})},LPPlatform.getImportHandler=function(){return"importerHandler"},LPPlatform.showDownloader=function(){return!1},LPPlatform.openTour=function(e){LPRequire.requireJS(["lpPing","lpTag","Tour/lpPingManager","Tour/lpTagManager","Tour/introTourShade","Tour/introTourPreferences","Tour/FamilyOnboarding/familyOnboardingTour","Tour/OmarMigrationTour/omarMigrationTour","Tour/OmarVaultTour/omarVaultTour","Tour/Vault41Tour/vault41Tour","Tour/introTourData","Tour/introTourFlow","Tour/introTourQueue","Tour/introTour"],function(){if(window.sessionStorage){var t=sessionStorage.getItem("hideTierExpiredDialog");IntroTour&&"1"!==t&&IntroTour.start(e)}else IntroTour.start(e)})},LPPlatform.showSecondaryOnboarding=function(){LPRequire.requireJS(["SecondaryOnboarding/SecondaryOnboarding"],function(){var e;SecondaryOnboardingManager&&(new SecondaryOnboardingManager).init()})},LPPlatform.allowClipboardCopy=function(){return LPFeatures.allowClipboardCopy()},LPPlatform.getVersion=function(){return bg.get("lpversion")},LPPlatform.installBinary=function(e,t){bg.install_binary(e,t)},LPPlatform.requestNativeMessaging=function(e){bg.request_native_messaging(e)},function(e){e.getExtensionDropdownDelay=function(){return-1},e.closePopup=function(t){(t||0===Dialog.prototype.getDialogCount()&&0===LPDialog.getPendingCount())&&e.doClosePopup()},e.doClosePopup=function(){window.close()},e.closeTab=function(){window.close()},e.move=function(){},e.checkBrowserPasswordManager=function(e){},e.setupDropdownImportMenu=function(e){e.addClass("singleImportOption"),$("#importMenuItemMain").unbind("click").bind("click",function(e){bg.lpevent("m_i"),bg.openimport()}),$("#omarImportMenuItemMain").unbind("click").bind("click",function(e){bg.lpevent("m_i"),bg.openimport()})},e.getUnavailablePreferences=function(){return{clearClipboardSecsVal:!bg.can_clear_clipboard(),openpopoverHk:!e.canBackgroundOpenPopover(),pollServerVal:bg.get("g_nopoll"),storeLostOTP:"0"===bg.get("g_prefoverrides").account_recovery,showvault:bg.get("g_hidevault")||bg.get("g_hideshowvault"),homeHk:bg.get("g_hidevault")||bg.get("g_hideshowvault"),saveallHk:bg.get("g_hidesaedhotkey"),searchHk:bg.get("g_hidesearch"),usepopupfill:!bg.get("g_offer_popupfill"),recentUsedCount:bg.get("g_hiderecentlyusedlistsize"),searchNotes:bg.get("g_hidenotes"),idleLogoffVal:!(bg.get("g_is_win")||bg.get("g_is_mac")||bg.get("g_is_linux")),enablenamedpipes:bg.get("lppassusernamehash")||!(bg.get("g_is_win")||bg.get("g_is_mac")||bg.get("g_is_linux"))||bg.is_chrome_portable(),enablenewlogin:!0,notificationsBottom:bg.get("LPContentScriptFeatures").new_save_site,showSaveSiteNotifications:bg.get("LPContentScriptFeatures").new_save_site}},e.getPreferencesRequiringBinary=function(){return{enablenamedpipes:!0}},e.handlePreferenceChanges=function(e){!1===e.storeLostOTP&&bg.DeleteOTP()},e.resizeTo=function(e,t){window.resizeTo(e,t)},e.openCreateAccount=function(){bg.LPPlatform.openTabDialog("createAccount")},e.showIntroTutorial=function(){var t=bg.get("LPContentScriptFeatures");if(LPProxy.isFamilyUser()||t&&"vault"!==t.intro_tutorial_version||"US"!==bg.get("countryfromip"))e.openTour();else{var r=LPProxy.getModelCount();if(0===r){if(!LPProxy.getPreference("showIntroTutorial",!0))return void e.openTour();dialogs.introTutorialWelcome.open()}else 1===r&&bg.IntroTutorial.getState(function(t){t.enabled?(Topics.get(Topics.EXPAND_ALL).publish(),dialogs.introTutorialComplete.open({tutorialState:t})):e.openTour()})}},e.onLoad=function(e,t){"loading"===e.document.readyState?e.addEventListener("DOMContentLoaded",t):t()},e.installBinary=function(e,t){bg.install_binary(e,t)},e.requestNativeMessaging=function(e){bg.request_native_messaging(e)}}(LPPlatform);
//# sourceMappingURL=sourcemaps/platform.js.map
