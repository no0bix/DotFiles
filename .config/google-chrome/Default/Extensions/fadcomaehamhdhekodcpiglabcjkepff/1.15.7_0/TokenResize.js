!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=157)}({10:function(e,t,n){"use strict";t.__esModule=!0;var o=n(2),i=n(6),r=function(){function e(e,t,n){var i=this;this.success=!1,this.getRoot=function(){return i._root},this.getId=function(){return i._id},this.isSuccessful=function(){return i.success},this.setData=function(e){return i.returnData=e},window.r20esDialogId="r20esDialogId"in window?window.r20esDialogId:0,this.centerWorkaround=null!==n&&void 0!==n&&n,this._id="r20es-dialog-"+window.r20esDialogId++,this._root=o.DOM.createElement("dialog",{className:e,style:t,id:this.getId()}),document.body.insertBefore(this.getRoot(),document.body.firstElementChild),window.dialogPolyfill&&window.dialogPolyfill.registerDialog(this.getRoot()),this.close=this.close.bind(this),this.dispose=this.dispose.bind(this)}return e.prototype.internalRender=function(){var e=this;this.getRoot().appendChild(this.render()),window.dialogPolyfill&&window.dialogPolyfill.reposition(this.getRoot()),this.centerWorkaround&&setTimeout(function(){e.recenter()},100)},e.prototype.recenter=function(){var e=this.getRoot(),t=document.body.scrollTop||document.documentElement.scrollTop,n=t+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(t,n)+"px"},e.prototype.rerender=function(){i.removeAllChildren(this.getRoot()),this.internalRender()},e.prototype.internalShow=function(){i.removeAllChildren(this.getRoot()),this.success=!1,this.internalRender(),this.getRoot().showModal()},e.prototype.getData=function(){var e=this.returnData;return this.returnData=null,e},e.prototype.close=function(e){void 0===e&&(e=!1),this.success="boolean"==typeof e&&e,this.getRoot().open&&this.getRoot().close()},e.prototype.dispose=function(){this.close(),i.findByIdAndRemove(this.getId())},e}();t.DialogBase=r},11:function(e,t,n){"use strict";var o=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();t.__esModule=!0;var i=n(2),r=n(6),a=function(e){function t(t,n,o){var r=e.call(this,n,o)||this;return r.show=r.internalShow,r.render=function(){return i.DOM.createElement(l,null,i.DOM.createElement(s,null,i.DOM.createElement("h3",null,r.action,", please wait...")))},r.action=t,r}return o(t,e),t}(n(10).DialogBase);function s(e){return i.DOM.createElement("div",{className:"dialog-body"})}function l(e){return i.DOM.createElement("div",{className:"r20es-dialog"})}t.LoadingDialog=a,t.DialogHeader=function(e){return i.DOM.createElement("div",{className:"dialog-header"})},t.DialogBody=s,t.DialogFooter=function(e){return i.DOM.createElement("div",{className:"dialog-footer"},i.DOM.createElement("hr",null))},t.DialogFooterContent=function(e){return i.DOM.createElement("div",{className:"dialog-footer-content"})},t.Dialog=l,t.CheckboxWithText=function(e){var t=r.copy(e,{style:{verticalAlign:"middle",marginRight:"4px"},type:"checkbox"}),n=i.DOM.createElement("input",t),o=t&&t.component||"div";return i.DOM.createElement(o,null,n,i.DOM.createElement("span",{style:{verticalAlign:"middle"}},t.checkboxText))}},15:function(e,t,n){"use strict";t.__esModule=!0;var o=n(6),i=function(){function e(){}return e.getInternalData=function(){if(!("tokenContextMenu"in window.r20es)){window.r20es.tokenContextMenu={widgets:{},idTop:0}}return window.r20es.tokenContextMenu},e.addButton=function(t,n,o,i){void 0===i&&(i=void 0);var r=e.getInternalData(),a={id:"r20es-token-ctx-menu-button-"+r.idTop++,text:t,callback:n,options:i};r.widgets[o]=a},e.removeButton=function(t,n){var i=e.getInternalData().widgets;for(var r in i){var a=i[r];if(a.text===t&&a.callback===n)return o.findByIdAndRemove(a.id),delete i[r],!0}return!1},e}();t.TokenContextMenu=i},157:function(e,t,n){"use strict";(function(e){var o=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();t.__esModule=!0;var i=n(4),r=n(5),a=n(15),s=n(158),l=n(75),u=n(20),c=function(t){function n(){var n=t.call(this,e)||this;return n.tryPlaceTopLeft=function(e){n.getHook().config.placeTopLeft&&r.R20.setCanvasObjectLocation(e,e.width/2,e.height/2)},n.clickResizeFit=function(e){var t=r.R20.getSelectedTokens(),o=r.R20.getCurrentPage();r.R20.unselectTokens();for(var i=0,a=t;i<a.length;i++){var s=a[i],u=l.scaleToFit(s._element.width,s._element.height,70*o.attributes.width,70*o.attributes.height);r.R20.setCanvasObjectDimensions(s,u.x,u.y),n.tryPlaceTopLeft(s)}r.R20.renderAll()},n.clickResizeCustom=function(e){n.resizeDialog.show(n.getHook(),function(e){var t=n.getHook().config;if(0!=t.lastSquareWidth&&0!=t.lastSquareHeight&&0!=t.lastNumSquaresX&&0!=t.lastNumSquaresY){var o=r.R20.getSelectedTokens();r.R20.unselectTokens();for(var i=0,a=o;i<a.length;i++){var s=a[i],l=t.lastSquareWidth*t.lastNumSquaresX,u=t.lastSquareHeight*t.lastNumSquaresY;if(t.useUnits){var c=r.R20.getCurrentPage();l/=c.attributes.scale_number,u/=c.attributes.scale_number}r.R20.setCanvasObjectDimensions(s,l,u),e&&n.tryPlaceTopLeft(s)}r.R20.renderAll()}else alert("Invalid input: one of the values was zero.")})},n}return o(n,t),n.prototype.setup=function(){this.resizeDialog=new s.default,a.TokenContextMenu.addButton("Resize Fit",this.clickResizeFit,u.TOKEN_CONTEXT_MENU_ORDER_RESIZE_FIT,{mustHaveSelection:!0}),a.TokenContextMenu.addButton("Resize Custom",this.clickResizeCustom,u.TOKEN_CONTEXT_MENU_ORDER_RESIZE_CUSTOM,{mustHaveSelection:!0})},n.prototype.dispose=function(){this.resizeDialog&&this.resizeDialog.dispose(),a.TokenContextMenu.removeButton("Resize Fit",this.clickResizeFit),a.TokenContextMenu.removeButton("Resize Custom",this.clickResizeCustom)},n}(i.R20Module.SimpleBase);i.R20Module.canInstall()&&(new c).install()}).call(this,"src/modules/TokenResize")},158:function(e,t,n){"use strict";var o=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();t.__esModule=!0;var i=n(2),r=n(10),a=n(11),s=n(81),l=n(159),u=n(5),c=function(e){function t(){var n=e.call(this,null,{height:"auto"})||this;return n.getCheckbox=function(){return document.getElementById(t.checkboxId)},n.onSubmit=function(e){n.close(!0);var t=n.getCheckbox().checked;n.cont(t)},n.onClickCheckboxDiv=function(e){if(e.target.id!==t.checkboxId){var o=n.getCheckbox();o.checked=!o.checked}},n}return o(t,e),t.prototype.show=function(t,n){this.moduleConfig=t,this.cont=n,e.prototype.internalShow.call(this)},t.prototype.render=function(){var e=u.R20.getCurrentPage(),n=this.moduleConfig.config.useUnits?e.attributes.scale_units:"squares";return i.DOM.createElement(a.Dialog,null,i.DOM.createElement(a.DialogHeader,null,i.DOM.createElement("h2",null,"Resize Token")),i.DOM.createElement(a.DialogBody,null,i.DOM.createElement("div",null,i.DOM.createElement(l.default,{Component:s.default,cfgId:"lastSquareWidth",display:"Width of a square in the token (px)",hook:this.moduleConfig}),i.DOM.createElement(l.default,{Component:s.default,cfgId:"lastSquareHeight",display:"Height of a square in the token (px)",hook:this.moduleConfig}),i.DOM.createElement(l.default,{Component:s.default,cfgId:"lastNumSquaresX",display:"Num. "+n+" horizontally",hook:this.moduleConfig}),i.DOM.createElement(l.default,{Component:s.default,cfgId:"lastNumSquaresY",display:"Num. "+n+" vertically",hook:this.moduleConfig}),i.DOM.createElement("div",{style:{cursor:"pointer",display:"flex",alignItems:"center"},onClick:this.onClickCheckboxDiv},i.DOM.createElement("input",{type:"checkbox",id:t.checkboxId,checked:this.moduleConfig.config.placeTopLeft}),i.DOM.createElement("span",{style:{marginLeft:"4px"}},"Position tokens in the top-left corner.")))),i.DOM.createElement(a.DialogFooter,null,i.DOM.createElement(a.DialogFooterContent,null,i.DOM.createElement("input",{style:{marginRight:"8px"},className:"r20btn btn",type:"button",onClick:this.close,value:"Close"}),i.DOM.createElement("input",{className:"r20btn btn",type:"button",onClick:this.onSubmit,value:"OK"}))))},t.checkboxId="r20es-token-resize-move-tokens-checkbox",t}(r.DialogBase);t.default=c},159:function(e,t,n){"use strict";t.__esModule=!0;var o=n(2);t.default=function(e){var t=e.Component,n=e.cfgId,i=e.display,r=e.hook;return o.DOM.createElement("li",{style:{display:"flex",justifyContent:"flex-end"}},o.DOM.createElement("span",{style:{"margin-right":"8px","border-right":"1px lightgray solid","padding-right":"8px"},title:n,className:"text"},i),o.DOM.createElement(t,{style:{width:"300px"},configName:n,hook:r}))}},17:function(e,t,n){"use strict";var o=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();t.__esModule=!0;var i=n(2),r=n(4),a=function(e){function t(t){var n=e.call(this)||this;return n.getValue=function(){return n.hook.config[n.configName]},n.getConfigView=function(){return n.configView},n.hook=t.hook,n.configName=t.configName,n.configView=n.hook.configView&&n.hook.configView[n.configName],n}return o(t,e),t.prototype.setValue=function(e){r.R20Module.getModule(this.hook.filename).setConfigValue(this.configName,e)},t}(i.DOM.ElementBase);t.ConfigEditBase=a},2:function(e,t,n){"use strict";var o,i=this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e};t.__esModule=!0,function(e){e.rerender=function(e,t){var n=e.nextSibling,o=e.parentNode;e.remove();var i=t();return n?o.insertBefore(i,n):o.appendChild(i),i},e.createElement=function(t,n){for(var o,a=[],s=2;s<arguments.length;s++)a[s-2]=arguments[s];var l=null,u="function"==typeof t;u&&t.name&&t.prototype instanceof e.ElementBase?l=new t(n).render():l=u?t(n):document.createElement(t);if(!(l instanceof HTMLElement))return console.error($(r||(r=i(["JSX Render must return a valid element: elem is not an instance of HTMLElement"],["JSX Render must return a valid element: elem is not an instance of HTMLElement"])))),console.table(((o={})['"type" argument']=t,o.Type=typeof l,o.Value=l,o)),console.trace(),null;if(a){var c=document.createDocumentFragment(),d=function(e){for(var t=0,n=e;t<n.length;t++){var o=n[t];if(o instanceof HTMLElement)c.appendChild(o);else if(Array.isArray(o))d(o);else if("number"==typeof o)c.appendChild(document.createTextNode(o.toString()));else if("string"==typeof o)c.appendChild(document.createTextNode(o));else if(null===o||void 0===o||"boolean"==typeof o)console.log("JSX got an unrenderable child value, assuming it's control flow related: type: "+typeof o+" value: "+o+".");else{var i=[];for(var r in o)i.push(o[r]);d(i)}}};d(a),l.appendChild(c)}var f=function(e){return e.startsWith("on")},g=function(e){return e.substring(2).toLowerCase()};for(var h in n){var p=n[h];if(f(h))l.addEventListener(g(h),p);else if("className"===h)if(p&&Array.isArray(p))for(var m=0,v=p;m<v.length;m++){var w=v[m];!w||w.length<=0||l.classList.add(w)}else"string"==typeof p&&p.length>0&&(l.className=l.className&&l.classList.length>0?l.className+" "+p:p);else if("style"===h)if("string"==typeof p)l.style.cssText=p;else if("object"==typeof p)for(var _ in p)p&&(l.style[_]=p[_]);else void 0!==p&&console.error("Unknown style attribute type: "+typeof p+", "+p);else h.startsWith("data")?l.setAttribute(h,p):l[h]=p}return l};var t=function(){return function(){var t=this;this.elementRoot=null,this.render=function(){var e=t.internalRender();return t.setRoot(e),e},this.rerender=function(){return e.rerender(t.getRoot(),function(){return t.render()})},this.setRoot=function(e){return t.elementRoot=e},this.getRoot=function(){return t.elementRoot},this.dispose=function(){t.getRoot().remove()}}}();e.ElementBase=t}(o||(o={})),t.DOM=o;t.SidebarSeparator=function(e){var t=e&&e.big;return o.createElement("div",null,t&&o.createElement("div",{className:"clear",style:{height:t}}),o.createElement("hr",null),t&&o.createElement("div",{className:"clear",style:{height:t}}))};var r;t.SidebarCategoryTitle=function(e){return o.createElement("h3",{style:{marginBottom:"5px",marginLeft:"5px"}})}},20:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TOKEN_CONTEXT_MENU_ORDER_RESIZE_FIT=t.TOKEN_CONTEXT_MENU_ORDER_RESIZE_CUSTOM=t.TOKEN_CONTEXT_MENU_ORDER_GET_TOKEN_IMAGE_URL=t.TOKEN_CONTEXT_MENU_ORDER_CREATE_TOKEN_BY_URL=t.TOKEN_CONTEXT_MENU_ORDER_HIT_DICE=t.TOKEN_CONTEXT_MENU_ORDER_ROLL_BULK_MACRO=void 0;t.TOKEN_CONTEXT_MENU_ORDER_ROLL_BULK_MACRO=0;t.TOKEN_CONTEXT_MENU_ORDER_HIT_DICE=1;t.TOKEN_CONTEXT_MENU_ORDER_CREATE_TOKEN_BY_URL=2;t.TOKEN_CONTEXT_MENU_ORDER_GET_TOKEN_IMAGE_URL=3;t.TOKEN_CONTEXT_MENU_ORDER_RESIZE_CUSTOM=4;t.TOKEN_CONTEXT_MENU_ORDER_RESIZE_FIT=5},3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=(e=>{const t=e.replace(/\\/g,"/").split("/");if(t.length<=0)throw new Error("Invalid dirname given.");return t[t.length-1]+".js"})},4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.R20Module=void 0;var o=function(e){return e&&e.__esModule?e:{default:e}}(n(3));function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function r(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}let a={};t.R20Module=a,a.Base=function(){function e(e){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(this,"getAllHooks",e=>window.r20es.hooks),this.filename=(0,o.default)(e),this.isDisposed=!0}var t=e.prototype;return t.installFirstTime=function(){},t.installUpdate=function(){},t.dispose=function(){},t.internalCanInstall=function(){return!!this.getHook().config.enabled&&(!!this.isDisposed||(console.error("Attempted to install module when it's not disposed."),console.table({"Module filename":this.filename}),console.trace(),!1))},t.internalInstallFirstTime=function(){if(this.internalCanInstall()){try{this.installFirstTime()}catch(e){console.error(e)}this.isDisposed=!1}},t.internalInstallUpdate=function(){if(this.internalCanInstall()){try{this.installUpdate()}catch(e){console.error(e)}this.isDisposed=!1}},t.internalDispose=function(){if(console.log(this),this.isDisposed)return console.error("internalDispose called on module that is already disposed!"),console.table({"Module filename":this.filename}),void console.trace();try{this.dispose()}catch(e){console.error(e)}this.isDisposed=!0},t.setConfigValue=function(e,t){const n=this.getHook(),o=this.getHook().config;if(!(e in o))return void console.error(`Tried to set config of key ${e} to value ${t} but key was not found in the config of module id ${n.id}"`);const i=o[e];o[e]=t,n.saveConfig(),o.enabled&&"onSettingChange"in this&&"function"==typeof this.onSettingChange&&this.onSettingChange(e,i,t)},t.getHook=function(){if(!1 in window.r20es)return null;for(const e in window.r20es.hooks){const t=window.r20es.hooks[e];if(t.filename&&t.filename===this.filename)return t}return null},t.toggleEnabledState=function(e){const t=this.getHook(),n=void 0===e||null===e?!t.config.enabled:e;if(t.config.enabled&&n)return;const o=t.config.enabled;t.config.enabled=n,t.saveConfig(),o&&!n?(console.log("disabling"),this.internalDispose()):!o&&n&&(console.log("enabling"),this.internalInstallUpdate())},t.install=function(){if(!("r20esInstalledModuleTable"in window))return;if(!("r20esDisposeTable"in window))return;console.log(`Installing module filename: ${this.filename}`),!(this.filename in window.r20esInstalledModuleTable)?(console.log("First run"),this.internalInstallFirstTime()):(this.filename in window.r20esDisposeTable&&console.error(`DUPLICATE MODULE FOUND: ${this.filename}`),console.log("Calling install update"),this.internalInstallUpdate()),window.r20esDisposeTable[this.filename]=(()=>{this.dispose()}),window.r20esInstalledModuleTable[this.filename]=this,console.log(`DONE! module ID: ${this.filename}`)},e}(),a.SimpleBase=function(e){function t(){return e.apply(this,arguments)||this}r(t,e);var n=t.prototype;return n.installFirstTime=function(){this.setup()},n.installUpdate=function(){this.setup()},n.setup=function(){},t}(a.Base),a.OnAppLoadBase=function(e){function t(t){var n;return(n=e.call(this,t)||this).setup=n.setup.bind(i(i(n))),n}r(t,e);var n=t.prototype;return n.installFirstTime=function(){window.r20es.isLoading?(this.earlySetup(),window.r20es.onAppLoad.addEventListener(this.setup)):(this.earlySetup(),this.setup())},n.earlySetup=function(){},n.setup=function(){},n.installUpdate=function(){this.installFirstTime()},n.dispose=function(){window.r20es.onAppLoad.removeEventListener(this.setup)},t}(a.Base),a.canInstall=(e=>window.r20es&&"canInstallModules"in window.r20es&&window.r20es.canInstallModules),a.getModule=function(e){return"r20esInstalledModuleTable"in window?window.r20esInstalledModuleTable[e]:null},a.getModuleById=function(e){return"r20esInstalledModuleTable"in window?a.getModule(window.r20es.hooks[e].filename):null}},5:function(e,t,n){"use strict";t.__esModule=!0;var o,i=n(7);!function(e){var t;function n(){return window.d20.engine.unselect()}function o(e){window.d20.engine.select(e)}function r(){return window.currentPlayer}function a(){return window.currentEditingLayer}function s(){try{var e=window.d20.Campaign.attributes.jukeboxfolder;return JSON.parse(e||"[]")}catch(e){console.error("[getJukeboxFileStructure] failed to get fs due to exception",e)}return[]}function l(e){return window.Jukebox.playlist.get(e)}function u(){return window.d20.Campaign.activePage()}function c(){return window.d20.engine.canvas.getObjects()}function d(t){for(var n=0,o=c();n<o.length;n++){var i=o[n],r=e.try_get_canvas_object_model(i);if(r&&r.get("id")===t)return i}return null}function f(e,t,n){n?($(document).on("mancerroll:"+t,function(e,o){$(document).off("mancerroll:"+t),n(e,o)}),window.d20.textchat.doChatInput(e,t)):window.d20.textchat.doChatInput(e)}function g(e){window.d20.textchat.incoming(!1,{who:"system",type:"system",content:e})}function h(){window.d20.engine.redrawScreenNextTick(!1)}!function(e){e[e.NumericAscending=0]="NumericAscending",e[e.NumericDescending=1]="NumericDescending",e[e.Alphabetical=2]="Alphabetical",e[e.AlphabeticalDescending=3]="AlphabeticalDescending",e[e.Card=4]="Card"}(t=e.InitiativeOrdering||(e.InitiativeOrdering={})),function(e){e.Map="map",e.PlayerTokens="objects",e.GMTokens="gmlayer",e.Lighting="walls",e.B20Foreground="foreground",e.B20Weather="weather"}(e.CanvasLayer||(e.CanvasLayer={})),e.setBackgroundStyle=function(e){window.d20.engine.backgroundColor=e},e.setupImageDropTarget=function(e,t,n){var o={model:{save:t},updateModel:n};window.d20.utils.setupAvatar(e,o)},e.getCanvasMousePos=function(){return window.d20.engine.mousePos.slice()},e.onInitiativeChange=function(t){return new i.EventSubscriber("change:turnorder",t,function(){return e.getInitiativeWindow().model})},e.setCanvasObjectLocation=function(t,n,o){var i=e.try_get_canvas_object_model(t);i&&i.save({top:o,left:n})},e.getBlob=function(e,t,n){return void 0===n&&(n=5e3),new Promise(function(o,i){e._getLatestBlob(t,o),setTimeout(i,n)})},e.getCampaign=function(){return window.Campaign},e.canEditCharacter=function(t){var n=t.attributes.controlledby;return!!e.isGM()||(!!n.includes("all")||!!n.includes(e.getCurrentPlayer().id))},e.getHandout=function(e){return window.Campaign.handouts.get(e)},e.createCharacter=function(e){return window.Campaign.characters.create(e)},e.setCanvasObjectDimensions=function(t,n,o){var i=e.try_get_canvas_object_model(t);i&&i.save({width:n,height:o})},e.getCharacter=function(e){return window.Campaign.characters.get(e)},e.getAllCharacters=function(){return window.Campaign.characters.models},e.getAllPages=function(){return window.Campaign.pages.models},e.createRollableTable=function(e){return window.d20.Campaign.rollabletables.create(e)},e.getRollableTable=function(e){return window.d20.Campaign.rollabletables.get(e)},e.getSelectedTokens=function(){return window.d20.engine.selected()},e.unselectTokens=n,e.addTokenToSelection=o,e.selectToken=function(e){n(),o(e)},e.hideTokenRadialMenu=function(){window.d20.token_editor.removeRadialMenu()},e.hideTokenContextMenu=function(){window.d20.token_editor.closeContextMenu()},e.getCurrentPlayer=r,e.getCanvasZoom=function(){return window.d20.engine.canvasZoom},e.getCanvasWidth=function(){return window.d20.engine.canvas.width},e.getCanvasHeight=function(){return window.d20.engine.canvas.height},e.getCanvasOffsetX=function(){return window.d20.engine.currentCanvasOffset[0]},e.getCanvasOffsetY=function(){return window.d20.engine.currentCanvasOffset[1]},e.getPageById=function(e){return window.Campaign.pages.get(e)},e.isGM=function(){return window.is_gm},e.getCurrentLayer=a,e.generateUUID=function(){return window.generateUUID()},e.getCurrentToolName=function(){return window.d20.engine.mode},e.advanceInitiative=function(){window.d20.Campaign.initiativewindow.nextTurn()},e.addTokenToInitiative=function(e){window.d20.Campaign.initiativewindow.addTokenToList(e)},e.addCustomItemToInitiative=function(e,t){window.d20.Campaign.initiativewindow.addTokenToList("-1",e,t)},e.rerenderMacroBar=function(){window.d20.player_settings.refreshMacroBar()},e.rerenderJournalMacros=function(){window.d20.player_settings.refreshRollsList()},e.orderInitiativeBy=function(e){var n,o=((n={})[t.NumericAscending]=".sortlist_numeric",n[t.NumericDescending]=".sortlist_numericdesc",n[t.Alphabetical]=".sortlist_alpha",n[t.AlphabeticalDescending]=".sortlist_alphadesc",n[t.Card]=".sortlist_card",n);if(e in o){var i=o[e];$("#initiativewindow_settings").dialog({modal:!1,title:"Turn Order Settings",beforeClose:function(){}}),$(i).click()}else console.error("Invalid initiative ordering: "+e)},e.getInitiativeWindow=function(){return window.d20.Campaign.initiativewindow},e.getJukeboxFileStructure=s,e.setJukeboxFileStructure=function(t){e.getCampaign().save({jukeboxfolder:JSON.stringify(t)})},e.createPlaylist=function(e){return window.d20.jukebox.addFolderToFolderStructure(e)},e.addTrackToPlaylist=function(e,t){return window.d20.jukebox.addItemToFolderStructure(e,t)},e.getSongById=l,e.getJukeboxPlaylists=function(){for(var e=[],t=0,n=s();t<n.length;t++){var o=n[t];if("string"!=typeof o){for(var i=o,r={id:i.id,name:i.n,mode:i.s,songs:[]},a=0,u=i.i;a<u.length;a++){var c=u[a],d=l(c);d?r.songs.push(d):console.warn("Tried to get song id "+c+" but the query returned a falsy value. Skipping")}e.push(r)}}return e},e.playAudio=function(e,t){window.Jukebox.soundObjs[e]=window.soundManager.createSound({id:e,url:t})},e.createSong=function(e){return window.Jukebox.playlist.create(e)},e.makePlaylistStructure=function(e,t,n){return{id:window.generateUUID(),n:e,s:t,i:n||[]}},e.getInitiativeData=function(){return window.d20.Campaign.initiativewindow.cleanList()},e.setInitiativeData=function(e){window.d20.Campaign.initiativewindow.model.save({turnorder:JSON.stringify(e)})},e.getCurrentPage=u,e.getCurrentPageTokens=c,e.doesTokenContainMouse=function(e,t){return window.d20.engine.canvas.containsPoint(e,t)},e.getCurrentPageTokenByUUID=d,e.try_get_canvas_object_model=function(e){return e._model?e._model:e.model?e.model:null},e.isUsing5EOGLSheet=function(){try{return window.d20.journal.customSheets.workerScripts[0].includes("5th Edition OGL by Roll20")}catch(e){return!1}},e.moveCameraToTokenByUUID=function(e){if(e){var t=d(e);if(t){var n=$("#editor-wrapper")[0];n.scrollTop=Math.floor(t.top*window.d20.engine.canvasZoom)-Math.floor(window.d20.engine.canvasHeight/2)+125*window.d20.engine.canvasZoom,n.scrollLeft=Math.floor(t.left*window.d20.engine.canvasZoom)-Math.floor(window.d20.engine.canvasWidth/2)+125*window.d20.engine.canvasZoom}}},e.primitiveSay=function(e,t){window.d20.textchat.doChatInput(e,t)},e.say=f,e.sayToSelf=function(t,n){var o='/w "'+r().get("displayname")+'" '+t;n?f(o,e.generateUUID(),n):f(o)},e.saySystemRaw=g,e.saySystem=function(e){g('<span style="background: rgba(6,26,45,255);\n    color: whitesmoke;\n    border: none;\n    display: inline-block;\n    padding: 8px;\n    margin: -15px -5px -7px -45px;    \n    "\n>\n'+e+"\n</span>\n        ")},e.ping=function(e,t,n,o,i){n=n||r().id,window.d20.engine.pings[n]={left:e,top:t,radius:-5,player:n,pageid:o||u().id,currentLayer:i||a()},window.d20.engine.pinging={downx:e,downy:t},h()},e.getFabric=function(){return window.exports.fabric},e.renderAll=h,e.setGMLayerOpacity=function(e){window.d20.engine.gm_layer_opacity=e},e.hasBetteR20=function(){return void 0!==window.d20plus},e.wipeObjectStorage=function(e){for(var t=e.length,n=0;n<t;n++){var o=e.length-1;if(0>o)break;var i=e.models[o];if(!i||void 0===i)break;i.destroy()}e.length<0&&console.error("FAILED TO WIPE OBJECT STORAGE!")},e.doBulkRoll=function(t,n,o,i,r){e.unselectTokens();var a=function(t){if(e.selectToken(t),r){var o=r(t);o&&e.say(n,o.id,o.callback)}else e.say(n)},s=function(){if(e.hideTokenRadialMenu(),e.hideTokenContextMenu(),i)for(var n=0,o=t;n<o.length;n++){var r=o[n];e.addTokenToSelection(r)}};if(0===o){for(var l=0,u=t;l<u.length;l++){var c=u[l];a(c)}s()}else for(var d=o,f=function(e){setTimeout(function(){a(t[e]),e+1===t.length&&s()},d),d+=o},g=0;g<t.length;g++)f(g)}}(o||(o={})),t.R20=o},6:function(e,t,n){"use strict";t.__esModule=!0;var o=n(8);t.copy=function(e,t){var n=Object.assign({},e);return t&&(n=Object.assign(n,t)),n};var i=function(e){if("currentTransform"in e)return e.currentTransform;if("getTransform"in e)return e.getTransform();if(e.mozCurrentTransform){var t=e.mozCurrentTransform;return{a:t[0],b:t[1],c:t[2],d:t[3],e:t[4],f:t[5]}}};t.getTransform=i;t.getRotation=function(e){var t=i(e),n=Math.atan2(t.b,t.a);return n<0&&(n+=2*Math.PI),n};t.findByIdAndRemove=function(e){var t=document.getElementById(e);t&&t.remove()};t.mapObj=function(e,t){return Object.keys(e).reduce(function(n,o){var i=t(e[o],o);return void 0!==i&&null!==i&&n.push(i),n},[])};t.safeCall=function(e){try{e()}catch(e){console.error(e)}};t.removeAllChildren=function(e){for(;e.firstChild;)e.removeChild(e.firstChild)};t.replaceAll=function(e,t,n){return e.replace(new RegExp(function(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(t),"g"),n)};t.safeParseJson=function(e){try{return JSON.parse(e)}catch(e){alert("File is not a valid JSON file.")}return null};t.readFile=function(e){return new Promise(function(t,n){if(e){var o=new FileReader;o.readAsText(e),o.onload=function(e){t(e.target.result)}}else n("No file given.")})};var r=function(){return chrome||browser};t.getBrowser=r;t.injectScript=function(e){console.log("Injecting "+e);var t=document.createElement("script");t.async=!1,t.src=r().extension.getURL(e),t.onload=function(){t.remove()},document.head.appendChild(t)};t.strIsNullOrEmpty=function(e){return null===e||void 0===e||e.length<=0||e.trim().length<=0};t.createCSSElement=function(e,t){var n=document.createElement("style");return n.innerHTML=e,n.id=t,n};t.getExtUrlFromPage=function(e,t){var n=void 0===t||null===t?1e3:t;return new Promise(function(t,i){try{var r=!1,a=function(){window.removeEventListener("message",l)},s=window.generateUUID(),l=function(e){e.origin===o.Config.appUrl&&e.data.r20esGivesResourceUrl&&e.data.r20esGivesResourceUrl.id===s&&(r=!0,a(),t(e.data.r20esGivesResourceUrl.url))};window.addEventListener("message",l);var u={resource:e,id:s};window.postMessage({r20esWantsResourceUrl:u},o.Config.appUrl),setTimeout(function(){try{r||(a(),i("Timed out after "+n+"ms"))}catch(e){i(e)}},n)}catch(e){i(e)}})}},7:function(e,t,n){"use strict";t.__esModule=!0;var o=function(){function e(e,t,n){this._isSubscribed=!1,this._name=e,this._callback=t,this._targetGetter=n}return e.subscribe=function(t,n,o){var i=new e(t,n,o);return i.subscribe(),i},e.prototype.subscribe=function(){if(!this._isSubscribed){var e=this._targetGetter();"on"in e?e.on(this._name,this._callback):e.addEventListener(this._name,this._callback),this._isSubscribed=!0}},e.prototype.unsubscribe=function(){if(this._isSubscribed){var e=this._targetGetter();"off"in e?e.off(this._name,this._callback):e.removeEventListener(this._name,this._callback),this._isSubscribed=!1}},e}();t.EventSubscriber=o},75:function(e,t,n){"use strict";t.__esModule=!0,t.scaleToFit=function(e,t,n,o){var i=e/t,r=i*o;return r>n?{x:n,y:n/i}:{x:r,y:o}}},8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Config=void 0;let o={};t.Config=o,o.appUrl="https://app.roll20.net",o.websiteFeatureUrlTemplate="https://ssstormy.github.io/roll20-enhancement-suite/features#",o.website="https://ssstormy.github.io/roll20-enhancement-suite/",o.discordInvite="https://discord.gg/pKxxvuM",o.contributeUrl="https://ssstormy.github.io/roll20-enhancement-suite/contribute.html"},81:function(e,t,n){"use strict";var o=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();t.__esModule=!0;var i=n(17),r=n(2),a=function(e){function t(t){var n=e.call(this,t)||this;return n.onChange=function(e){e.stopPropagation(),n.setValue(parseFloat(e.target.value))},n.internalRender=function(){var e=r.DOM.createElement("input",{style:{width:"90%"},onChange:n.onChange,className:"compact",type:"number",value:n.getValue()}),t=n.getConfigView();if(t){var o=t.numberMin,i=t.numberMax;void 0!==o&&(e.min=o),void 0!==i&&(e.max=i)}return e},n}return o(t,e),t}(i.ConfigEditBase);t.default=a}});