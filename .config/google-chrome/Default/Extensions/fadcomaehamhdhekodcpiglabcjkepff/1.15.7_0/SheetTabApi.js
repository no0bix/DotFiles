!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=149)}({149:function(e,t,n){"use strict";(function(e){var t=n(4),i=n(2),r=n(22),o=n(5);function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}let s=function(t){function n(){var n;return(n=t.call(this,e)||this).observerCallback=n.observerCallback.bind(a(a(n))),n.tryInjectingSingleWidget=n.tryInjectingSingleWidget.bind(a(a(n))),n.tryInjectingWidget=n.tryInjectingWidget.bind(a(a(n))),n.navOnClick=n.navOnClick.bind(a(a(n))),n.onClickNormalNavs=n.onClickNormalNavs.bind(a(a(n))),n.rescan=n.rescan.bind(a(a(n))),n.tabStyle="r20es-character-sheet-tab",n.attribNavHasListener="data-r20es-character-sheet-nav-event",n.attribCustomNav="data-r20es-nav",n.infectedNavs=[],n}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(n,t);var s=n.prototype;return s.getWidgetTabRoots=function(e){return $(e.parentNode.parentNode.parentNode).find("."+this.tabStyle)},s.unselectSyntheticNavs=function(e){const t=e.target.parentNode.parentNode;$(t).find("a[data-r20es-nav]").each((e,t)=>{t.parentNode.classList.remove("active")})},s.onClickNormalNavs=function(e){this.unselectSyntheticNavs(e),this.getWidgetTabRoots(e.target).each((e,t)=>{t.style.display="none"})},s.navOnClick=function(e){const t=e.target.getAttribute("data-tab"),n=r.SheetTab._getInternalData().tabsById[t],i=$(e.target).closest("[data-characterid]")[0];console.log(i);let o=null;i&&i.hasAttribute("data-characterid")&&(o=n.getInstanceData(i.getAttribute("data-characterid"))),n&&n.onShow&&n.onShow(o),this.unselectSyntheticNavs(e),e.target.parentNode.classList.add("active"),this.getWidgetTabRoots(e.target).each((e,n)=>{n.style.display=n.classList.contains(t)?"block":"none"})},s.tryInjectingWidget=function(e){const t=r.SheetTab._getInternalData();for(const n of t.tabs)this.tryInjectingSingleWidget(e,n)},s.tryInjectingSingleWidget=function(e,t){if(!e)return!1;if(!e.className)return!1;if(!e.hasAttribute("data-characterid"))return!1;if(e.getElementsByClassName(t.id).length>0)return;if($(e).find(".charactereditor").length>0)return;const n=e.getAttribute("data-characterid");if(t.predicate){const e=o.R20.getCharacter(n);if(!t.predicate(e))return}const r=i.DOM.createElement("li",null,i.DOM.createElement("a",{onClick:this.navOnClick,"data-tab":t.id,href:"javascript:void(0);"},t.name));r.firstElementChild.setAttribute(this.attribCustomNav,!0),t._addElem(r),e.firstElementChild.firstElementChild.appendChild(r);const a=e.firstElementChild.firstElementChild;$(a).find("a[data-tab]").each((e,t)=>{t.hasAttribute(this.attribCustomNav)||t.hasAttribute(this.attribNavHasListener)||(t.setAttribute(this.attribNavHasListener,!0),t.addEventListener("click",this.onClickNormalNavs),this.infectedNavs.push(t))});const s=t.getInstanceData(n),l=$(e.firstElementChild).find(".tab-content")[0],c=t.renderFx(s);s.contentRoot=l,s.root=c;const d=i.DOM.createElement("div",{className:[this.tabStyle,t.id,"tab-pane"],style:{display:"none"}},c);return t._addElem(d),l.appendChild(d),!0},s.observerCallback=function(e){for(var t of e){for(const e of t.addedNodes)if(this.tryInjectingWidget(e))return;if(this.tryInjectingWidget(t.target))return}},s.rescan=function(){const e=document.querySelectorAll("div[data-characterid].dialog.characterdialog");for(const t of e)console.log(t),this.tryInjectingWidget(t)},s.setup=function(){this.rescan(),r.SheetTab._getInternalData().rescanFunc=this.rescan,this.observer=new MutationObserver(this.observerCallback),this.observer.observe(document.body,{childList:!0,subtree:!0})},s.dispose=function(){r.SheetTab._getInternalData().rescanFunc=null;const e=r.SheetTab._getInternalData();for(const t of e.tabs)t.dispose();e.tabs=[],this.infectedNavs.each(e=>{e.removeEventListener("click",this.onClickNormalNavs),e.removeAttribute(this.attribNavHasListener)}),this.infectedNavs.length=0,this.observer&&this.observer.disconnect()},n}(t.R20Module.OnAppLoadBase);t.R20Module.canInstall()&&(new s).install()}).call(this,"src/modules/SheetTabApi")},2:function(e,t,n){"use strict";var i,r=this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e};t.__esModule=!0,function(e){e.rerender=function(e,t){var n=e.nextSibling,i=e.parentNode;e.remove();var r=t();return n?i.insertBefore(r,n):i.appendChild(r),r},e.createElement=function(t,n){for(var i,a=[],s=2;s<arguments.length;s++)a[s-2]=arguments[s];var l=null,c="function"==typeof t;c&&t.name&&t.prototype instanceof e.ElementBase?l=new t(n).render():l=c?t(n):document.createElement(t);if(!(l instanceof HTMLElement))return console.error($(o||(o=r(["JSX Render must return a valid element: elem is not an instance of HTMLElement"],["JSX Render must return a valid element: elem is not an instance of HTMLElement"])))),console.table(((i={})['"type" argument']=t,i.Type=typeof l,i.Value=l,i)),console.trace(),null;if(a){var d=document.createDocumentFragment(),u=function(e){for(var t=0,n=e;t<n.length;t++){var i=n[t];if(i instanceof HTMLElement)d.appendChild(i);else if(Array.isArray(i))u(i);else if("number"==typeof i)d.appendChild(document.createTextNode(i.toString()));else if("string"==typeof i)d.appendChild(document.createTextNode(i));else if(null===i||void 0===i||"boolean"==typeof i)console.log("JSX got an unrenderable child value, assuming it's control flow related: type: "+typeof i+" value: "+i+".");else{var r=[];for(var o in i)r.push(i[o]);u(r)}}};u(a),l.appendChild(d)}var f=function(e){return e.startsWith("on")},h=function(e){return e.substring(2).toLowerCase()};for(var g in n){var p=n[g];if(f(g))l.addEventListener(h(g),p);else if("className"===g)if(p&&Array.isArray(p))for(var v=0,w=p;v<w.length;v++){var b=w[v];!b||b.length<=0||l.classList.add(b)}else"string"==typeof p&&p.length>0&&(l.className=l.className&&l.classList.length>0?l.className+" "+p:p);else if("style"===g)if("string"==typeof p)l.style.cssText=p;else if("object"==typeof p)for(var m in p)p&&(l.style[m]=p[m]);else void 0!==p&&console.error("Unknown style attribute type: "+typeof p+", "+p);else g.startsWith("data")?l.setAttribute(g,p):l[g]=p}return l};var t=function(){return function(){var t=this;this.elementRoot=null,this.render=function(){var e=t.internalRender();return t.setRoot(e),e},this.rerender=function(){return e.rerender(t.getRoot(),function(){return t.render()})},this.setRoot=function(e){return t.elementRoot=e},this.getRoot=function(){return t.elementRoot},this.dispose=function(){t.getRoot().remove()}}}();e.ElementBase=t}(i||(i={})),t.DOM=i;t.SidebarSeparator=function(e){var t=e&&e.big;return i.createElement("div",null,t&&i.createElement("div",{className:"clear",style:{height:t}}),i.createElement("hr",null),t&&i.createElement("div",{className:"clear",style:{height:t}}))};var o;t.SidebarCategoryTitle=function(e){return i.createElement("h3",{style:{marginBottom:"5px",marginLeft:"5px"}})}},22:function(e,t,n){"use strict";t.__esModule=!0;var i=n(5),r=n(2),o=function(){function e(){this.tabs=[],this.tabsById={},this.idTop=0,this.rescanFunc=void 0}return e.prototype.addTab=function(e){this.tabs.push(e),this.tabsById[e.id]=e},e.prototype.removeTab=function(e){delete this.tabsById[e.id];for(var t=this.tabs.length;t-- >0;){this.tabs[t].id===e.id&&this.tabs.splice(t,1)}},e}();t.InternalSheetTabData=o;var a=function(){function e(e,t){this.parent=e,this.characterId=t}return e.prototype.rerender=function(){var e=this;this.root=r.DOM.rerender(this.root,function(){return e.parent.renderFx(e)})},e.prototype.tryGetPc=function(){if(!this.contentRoot)return null;console.log(this.contentRoot);var e=null;if(this.contentRoot.hasAttribute("data-characterid"))e=this.contentRoot;else{var t=$(this.contentRoot).closest("div[data-characterid]");if(!t)return null;e=t[0]}if(!e)return null;var n=e.getAttribute("data-characterid");if(!n)return null;var r=i.R20.getCharacter(n);return r||null},e}();t.SheetTabSheetInstanceData=a;var s=function(){function e(e,t,n,i){this.byIdSheetData={},this._elements=[],this.name=e,this.renderFx=t,this.id=n,this._contentRoot=null,this.onShow=i}return e.prototype.getInstanceData=function(e){return e in this.byIdSheetData||(this.byIdSheetData[e]=new a(this,e)),this.byIdSheetData[e]},e.prototype._addElem=function(e){this._elements.push(e)},e._getInternalData=function(){return"sheetTabData"in window.r20es||(window.r20es.sheetTabData=new o),window.r20es.sheetTabData},e.add=function(t,n,i,r){var o=e._getInternalData(),a=new e(t,n,"r20es-character-sheet-tab-"+o.idTop++,i);return a.predicate=r,o.addTab(a),"function"==typeof o.rescanFunc&&o.rescanFunc(),a},e.prototype.dispose=function(){this._elements.forEach(function(e){return e.remove()}),this._elements=[],e._getInternalData().removeTab(this)},e}();t.SheetTab=s},3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=(e=>{const t=e.replace(/\\/g,"/").split("/");if(t.length<=0)throw new Error("Invalid dirname given.");return t[t.length-1]+".js"})},4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.R20Module=void 0;var i=function(e){return e&&e.__esModule?e:{default:e}}(n(3));function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function o(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}let a={};t.R20Module=a,a.Base=function(){function e(e){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(this,"getAllHooks",e=>window.r20es.hooks),this.filename=(0,i.default)(e),this.isDisposed=!0}var t=e.prototype;return t.installFirstTime=function(){},t.installUpdate=function(){},t.dispose=function(){},t.internalCanInstall=function(){return!!this.getHook().config.enabled&&(!!this.isDisposed||(console.error("Attempted to install module when it's not disposed."),console.table({"Module filename":this.filename}),console.trace(),!1))},t.internalInstallFirstTime=function(){if(this.internalCanInstall()){try{this.installFirstTime()}catch(e){console.error(e)}this.isDisposed=!1}},t.internalInstallUpdate=function(){if(this.internalCanInstall()){try{this.installUpdate()}catch(e){console.error(e)}this.isDisposed=!1}},t.internalDispose=function(){if(console.log(this),this.isDisposed)return console.error("internalDispose called on module that is already disposed!"),console.table({"Module filename":this.filename}),void console.trace();try{this.dispose()}catch(e){console.error(e)}this.isDisposed=!0},t.setConfigValue=function(e,t){const n=this.getHook(),i=this.getHook().config;if(!(e in i))return void console.error(`Tried to set config of key ${e} to value ${t} but key was not found in the config of module id ${n.id}"`);const r=i[e];i[e]=t,n.saveConfig(),i.enabled&&"onSettingChange"in this&&"function"==typeof this.onSettingChange&&this.onSettingChange(e,r,t)},t.getHook=function(){if(!1 in window.r20es)return null;for(const e in window.r20es.hooks){const t=window.r20es.hooks[e];if(t.filename&&t.filename===this.filename)return t}return null},t.toggleEnabledState=function(e){const t=this.getHook(),n=void 0===e||null===e?!t.config.enabled:e;if(t.config.enabled&&n)return;const i=t.config.enabled;t.config.enabled=n,t.saveConfig(),i&&!n?(console.log("disabling"),this.internalDispose()):!i&&n&&(console.log("enabling"),this.internalInstallUpdate())},t.install=function(){if(!("r20esInstalledModuleTable"in window))return;if(!("r20esDisposeTable"in window))return;console.log(`Installing module filename: ${this.filename}`),!(this.filename in window.r20esInstalledModuleTable)?(console.log("First run"),this.internalInstallFirstTime()):(this.filename in window.r20esDisposeTable&&console.error(`DUPLICATE MODULE FOUND: ${this.filename}`),console.log("Calling install update"),this.internalInstallUpdate()),window.r20esDisposeTable[this.filename]=(()=>{this.dispose()}),window.r20esInstalledModuleTable[this.filename]=this,console.log(`DONE! module ID: ${this.filename}`)},e}(),a.SimpleBase=function(e){function t(){return e.apply(this,arguments)||this}o(t,e);var n=t.prototype;return n.installFirstTime=function(){this.setup()},n.installUpdate=function(){this.setup()},n.setup=function(){},t}(a.Base),a.OnAppLoadBase=function(e){function t(t){var n;return(n=e.call(this,t)||this).setup=n.setup.bind(r(r(n))),n}o(t,e);var n=t.prototype;return n.installFirstTime=function(){window.r20es.isLoading?(this.earlySetup(),window.r20es.onAppLoad.addEventListener(this.setup)):(this.earlySetup(),this.setup())},n.earlySetup=function(){},n.setup=function(){},n.installUpdate=function(){this.installFirstTime()},n.dispose=function(){window.r20es.onAppLoad.removeEventListener(this.setup)},t}(a.Base),a.canInstall=(e=>window.r20es&&"canInstallModules"in window.r20es&&window.r20es.canInstallModules),a.getModule=function(e){return"r20esInstalledModuleTable"in window?window.r20esInstalledModuleTable[e]:null},a.getModuleById=function(e){return"r20esInstalledModuleTable"in window?a.getModule(window.r20es.hooks[e].filename):null}},5:function(e,t,n){"use strict";t.__esModule=!0;var i,r=n(7);!function(e){var t;function n(){return window.d20.engine.unselect()}function i(e){window.d20.engine.select(e)}function o(){return window.currentPlayer}function a(){return window.currentEditingLayer}function s(){try{var e=window.d20.Campaign.attributes.jukeboxfolder;return JSON.parse(e||"[]")}catch(e){console.error("[getJukeboxFileStructure] failed to get fs due to exception",e)}return[]}function l(e){return window.Jukebox.playlist.get(e)}function c(){return window.d20.Campaign.activePage()}function d(){return window.d20.engine.canvas.getObjects()}function u(t){for(var n=0,i=d();n<i.length;n++){var r=i[n],o=e.try_get_canvas_object_model(r);if(o&&o.get("id")===t)return r}return null}function f(e,t,n){n?($(document).on("mancerroll:"+t,function(e,i){$(document).off("mancerroll:"+t),n(e,i)}),window.d20.textchat.doChatInput(e,t)):window.d20.textchat.doChatInput(e)}function h(e){window.d20.textchat.incoming(!1,{who:"system",type:"system",content:e})}function g(){window.d20.engine.redrawScreenNextTick(!1)}!function(e){e[e.NumericAscending=0]="NumericAscending",e[e.NumericDescending=1]="NumericDescending",e[e.Alphabetical=2]="Alphabetical",e[e.AlphabeticalDescending=3]="AlphabeticalDescending",e[e.Card=4]="Card"}(t=e.InitiativeOrdering||(e.InitiativeOrdering={})),function(e){e.Map="map",e.PlayerTokens="objects",e.GMTokens="gmlayer",e.Lighting="walls",e.B20Foreground="foreground",e.B20Weather="weather"}(e.CanvasLayer||(e.CanvasLayer={})),e.setBackgroundStyle=function(e){window.d20.engine.backgroundColor=e},e.setupImageDropTarget=function(e,t,n){var i={model:{save:t},updateModel:n};window.d20.utils.setupAvatar(e,i)},e.getCanvasMousePos=function(){return window.d20.engine.mousePos.slice()},e.onInitiativeChange=function(t){return new r.EventSubscriber("change:turnorder",t,function(){return e.getInitiativeWindow().model})},e.setCanvasObjectLocation=function(t,n,i){var r=e.try_get_canvas_object_model(t);r&&r.save({top:i,left:n})},e.getBlob=function(e,t,n){return void 0===n&&(n=5e3),new Promise(function(i,r){e._getLatestBlob(t,i),setTimeout(r,n)})},e.getCampaign=function(){return window.Campaign},e.canEditCharacter=function(t){var n=t.attributes.controlledby;return!!e.isGM()||(!!n.includes("all")||!!n.includes(e.getCurrentPlayer().id))},e.getHandout=function(e){return window.Campaign.handouts.get(e)},e.createCharacter=function(e){return window.Campaign.characters.create(e)},e.setCanvasObjectDimensions=function(t,n,i){var r=e.try_get_canvas_object_model(t);r&&r.save({width:n,height:i})},e.getCharacter=function(e){return window.Campaign.characters.get(e)},e.getAllCharacters=function(){return window.Campaign.characters.models},e.getAllPages=function(){return window.Campaign.pages.models},e.createRollableTable=function(e){return window.d20.Campaign.rollabletables.create(e)},e.getRollableTable=function(e){return window.d20.Campaign.rollabletables.get(e)},e.getSelectedTokens=function(){return window.d20.engine.selected()},e.unselectTokens=n,e.addTokenToSelection=i,e.selectToken=function(e){n(),i(e)},e.hideTokenRadialMenu=function(){window.d20.token_editor.removeRadialMenu()},e.hideTokenContextMenu=function(){window.d20.token_editor.closeContextMenu()},e.getCurrentPlayer=o,e.getCanvasZoom=function(){return window.d20.engine.canvasZoom},e.getCanvasWidth=function(){return window.d20.engine.canvas.width},e.getCanvasHeight=function(){return window.d20.engine.canvas.height},e.getCanvasOffsetX=function(){return window.d20.engine.currentCanvasOffset[0]},e.getCanvasOffsetY=function(){return window.d20.engine.currentCanvasOffset[1]},e.getPageById=function(e){return window.Campaign.pages.get(e)},e.isGM=function(){return window.is_gm},e.getCurrentLayer=a,e.generateUUID=function(){return window.generateUUID()},e.getCurrentToolName=function(){return window.d20.engine.mode},e.advanceInitiative=function(){window.d20.Campaign.initiativewindow.nextTurn()},e.addTokenToInitiative=function(e){window.d20.Campaign.initiativewindow.addTokenToList(e)},e.addCustomItemToInitiative=function(e,t){window.d20.Campaign.initiativewindow.addTokenToList("-1",e,t)},e.rerenderMacroBar=function(){window.d20.player_settings.refreshMacroBar()},e.rerenderJournalMacros=function(){window.d20.player_settings.refreshRollsList()},e.orderInitiativeBy=function(e){var n,i=((n={})[t.NumericAscending]=".sortlist_numeric",n[t.NumericDescending]=".sortlist_numericdesc",n[t.Alphabetical]=".sortlist_alpha",n[t.AlphabeticalDescending]=".sortlist_alphadesc",n[t.Card]=".sortlist_card",n);if(e in i){var r=i[e];$("#initiativewindow_settings").dialog({modal:!1,title:"Turn Order Settings",beforeClose:function(){}}),$(r).click()}else console.error("Invalid initiative ordering: "+e)},e.getInitiativeWindow=function(){return window.d20.Campaign.initiativewindow},e.getJukeboxFileStructure=s,e.setJukeboxFileStructure=function(t){e.getCampaign().save({jukeboxfolder:JSON.stringify(t)})},e.createPlaylist=function(e){return window.d20.jukebox.addFolderToFolderStructure(e)},e.addTrackToPlaylist=function(e,t){return window.d20.jukebox.addItemToFolderStructure(e,t)},e.getSongById=l,e.getJukeboxPlaylists=function(){for(var e=[],t=0,n=s();t<n.length;t++){var i=n[t];if("string"!=typeof i){for(var r=i,o={id:r.id,name:r.n,mode:r.s,songs:[]},a=0,c=r.i;a<c.length;a++){var d=c[a],u=l(d);u?o.songs.push(u):console.warn("Tried to get song id "+d+" but the query returned a falsy value. Skipping")}e.push(o)}}return e},e.playAudio=function(e,t){window.Jukebox.soundObjs[e]=window.soundManager.createSound({id:e,url:t})},e.createSong=function(e){return window.Jukebox.playlist.create(e)},e.makePlaylistStructure=function(e,t,n){return{id:window.generateUUID(),n:e,s:t,i:n||[]}},e.getInitiativeData=function(){return window.d20.Campaign.initiativewindow.cleanList()},e.setInitiativeData=function(e){window.d20.Campaign.initiativewindow.model.save({turnorder:JSON.stringify(e)})},e.getCurrentPage=c,e.getCurrentPageTokens=d,e.doesTokenContainMouse=function(e,t){return window.d20.engine.canvas.containsPoint(e,t)},e.getCurrentPageTokenByUUID=u,e.try_get_canvas_object_model=function(e){return e._model?e._model:e.model?e.model:null},e.isUsing5EOGLSheet=function(){try{return window.d20.journal.customSheets.workerScripts[0].includes("5th Edition OGL by Roll20")}catch(e){return!1}},e.moveCameraToTokenByUUID=function(e){if(e){var t=u(e);if(t){var n=$("#editor-wrapper")[0];n.scrollTop=Math.floor(t.top*window.d20.engine.canvasZoom)-Math.floor(window.d20.engine.canvasHeight/2)+125*window.d20.engine.canvasZoom,n.scrollLeft=Math.floor(t.left*window.d20.engine.canvasZoom)-Math.floor(window.d20.engine.canvasWidth/2)+125*window.d20.engine.canvasZoom}}},e.primitiveSay=function(e,t){window.d20.textchat.doChatInput(e,t)},e.say=f,e.sayToSelf=function(t,n){var i='/w "'+o().get("displayname")+'" '+t;n?f(i,e.generateUUID(),n):f(i)},e.saySystemRaw=h,e.saySystem=function(e){h('<span style="background: rgba(6,26,45,255);\n    color: whitesmoke;\n    border: none;\n    display: inline-block;\n    padding: 8px;\n    margin: -15px -5px -7px -45px;    \n    "\n>\n'+e+"\n</span>\n        ")},e.ping=function(e,t,n,i,r){n=n||o().id,window.d20.engine.pings[n]={left:e,top:t,radius:-5,player:n,pageid:i||c().id,currentLayer:r||a()},window.d20.engine.pinging={downx:e,downy:t},g()},e.getFabric=function(){return window.exports.fabric},e.renderAll=g,e.setGMLayerOpacity=function(e){window.d20.engine.gm_layer_opacity=e},e.hasBetteR20=function(){return void 0!==window.d20plus},e.wipeObjectStorage=function(e){for(var t=e.length,n=0;n<t;n++){var i=e.length-1;if(0>i)break;var r=e.models[i];if(!r||void 0===r)break;r.destroy()}e.length<0&&console.error("FAILED TO WIPE OBJECT STORAGE!")},e.doBulkRoll=function(t,n,i,r,o){e.unselectTokens();var a=function(t){if(e.selectToken(t),o){var i=o(t);i&&e.say(n,i.id,i.callback)}else e.say(n)},s=function(){if(e.hideTokenRadialMenu(),e.hideTokenContextMenu(),r)for(var n=0,i=t;n<i.length;n++){var o=i[n];e.addTokenToSelection(o)}};if(0===i){for(var l=0,c=t;l<c.length;l++){var d=c[l];a(d)}s()}else for(var u=i,f=function(e){setTimeout(function(){a(t[e]),e+1===t.length&&s()},u),u+=i},h=0;h<t.length;h++)f(h)}}(i||(i={})),t.R20=i},7:function(e,t,n){"use strict";t.__esModule=!0;var i=function(){function e(e,t,n){this._isSubscribed=!1,this._name=e,this._callback=t,this._targetGetter=n}return e.subscribe=function(t,n,i){var r=new e(t,n,i);return r.subscribe(),r},e.prototype.subscribe=function(){if(!this._isSubscribed){var e=this._targetGetter();"on"in e?e.on(this._name,this._callback):e.addEventListener(this._name,this._callback),this._isSubscribed=!0}},e.prototype.unsubscribe=function(){if(this._isSubscribed){var e=this._targetGetter();"off"in e?e.off(this._name,this._callback):e.removeEventListener(this._name,this._callback),this._isSubscribed=!1}},e}();t.EventSubscriber=i}});