!function(e){var n={};function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(i,o,function(n){return e[n]}.bind(null,o));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=118)}({118:function(e,n,t){"use strict";(function(e){var i=this&&this.__extends||function(){var e=function(n,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(n,t)};return function(n,t){function i(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}}();n.__esModule=!0;var o=t(4),r=t(5),a=function(n){function t(){var t=n.call(this,e)||this;return t.resolveAnimatedThumbnail=function(e,n){return console.log("resolveAnimatedThumbnail",e,n),"https://i.imgur.com/qarmF0Z.jpg"},t.modifiedFromURL=function(e,n,t){console.log("modifiedFromURL",e,n,t);var i="Could not load image from "+e,o=t&&t.video?"video":"img",a=window._.clone(e),s=r.R20.getFabric().document.createElement(o);console.log(s,o);var d=function(){if(s.removeEventListener("loadeddata",d),s.removeEventListener("error",void 0),t.video&&(s.width=s.videoWidth,s.height=s.videoHeight,s.muted=!0),t.element_only)n(s);else{var e=new(r.R20.getFabric().Image)(s,t);if(t.video_sample){e._animated=!0,e._placeholder=s,this.modifiedFromURL(s.src.replace("sample.png","med.webm"),function(t){e.setElement(t),n(e)},{usecors:!0,video:!0,element_only:!0})}else n(e)}},l=null;l=t.usecors?function(){t.video?s.removeEventListener("loadeddata",d):(s.removeEventListener("load",d),s.removeEventListener("error",l),l=function(){t.video?s.removeEventListener("loadeddata",d):(s.removeEventListener("load",d),s.removeEventListener("error",l),console.error(i))},console.warn("Error loading graphic, probably due to CORS. Trying once without CORS for "+a),t.usecors=!1,s=r.R20.getFabric().document.createElement(o),t.video?(s.addEventListener("loadeddata",d),s.preload="auto"):(s.addEventListener("load",d),s.addEventListener("error",l),s.src=a))}:function(){return console.error(i)},t.video?(window.d20.engine.debug_video_elements||(window.d20.engine.debug_video_elements=[]),d20.engine.debug_video_elements.push(s),s.addEventListener("loadeddata",d),s.preload="auto"):(s.addEventListener("load",d),s.addEventListener("error",l),s.src=e)},t.bypassHostAndQueryMangling=function(e,n,t){return console.log("bypassHostAndQueryMangling ",e,n,t),e},t.setup=function(){window.r20es.modifiedFromURL=t.modifiedFromURL,window.r20es.resolveAnimatedThumbnail=t.resolveAnimatedThumbnail,window.r20es.bypassHostAndQueryMangling=t.bypassHostAndQueryMangling},t.dispose=function(){window.r20es.modifiedFromURL=void 0,window.r20es.bypassHostAndQueryMangling=void 0,window.r20es.resolveAnimatedThumbnail=void 0},t}return i(t,n),t}(o.R20Module.SimpleBase);o.R20Module.canInstall()&&(new a).install()}).call(this,"src/modules/LibreAnimatedTokens")},3:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default=(e=>{const n=e.replace(/\\/g,"/").split("/");if(n.length<=0)throw new Error("Invalid dirname given.");return n[n.length-1]+".js"})},4:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.R20Module=void 0;var i=function(e){return e&&e.__esModule?e:{default:e}}(t(3));function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function r(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n}let a={};n.R20Module=a,a.Base=function(){function e(e){!function(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t}(this,"getAllHooks",e=>window.r20es.hooks),this.filename=(0,i.default)(e),this.isDisposed=!0}var n=e.prototype;return n.installFirstTime=function(){},n.installUpdate=function(){},n.dispose=function(){},n.internalCanInstall=function(){return!!this.getHook().config.enabled&&(!!this.isDisposed||(console.error("Attempted to install module when it's not disposed."),console.table({"Module filename":this.filename}),console.trace(),!1))},n.internalInstallFirstTime=function(){if(this.internalCanInstall()){try{this.installFirstTime()}catch(e){console.error(e)}this.isDisposed=!1}},n.internalInstallUpdate=function(){if(this.internalCanInstall()){try{this.installUpdate()}catch(e){console.error(e)}this.isDisposed=!1}},n.internalDispose=function(){if(console.log(this),this.isDisposed)return console.error("internalDispose called on module that is already disposed!"),console.table({"Module filename":this.filename}),void console.trace();try{this.dispose()}catch(e){console.error(e)}this.isDisposed=!0},n.setConfigValue=function(e,n){const t=this.getHook(),i=this.getHook().config;if(!(e in i))return void console.error(`Tried to set config of key ${e} to value ${n} but key was not found in the config of module id ${t.id}"`);const o=i[e];i[e]=n,t.saveConfig(),i.enabled&&"onSettingChange"in this&&"function"==typeof this.onSettingChange&&this.onSettingChange(e,o,n)},n.getHook=function(){if(!1 in window.r20es)return null;for(const e in window.r20es.hooks){const n=window.r20es.hooks[e];if(n.filename&&n.filename===this.filename)return n}return null},n.toggleEnabledState=function(e){const n=this.getHook(),t=void 0===e||null===e?!n.config.enabled:e;if(n.config.enabled&&t)return;const i=n.config.enabled;n.config.enabled=t,n.saveConfig(),i&&!t?(console.log("disabling"),this.internalDispose()):!i&&t&&(console.log("enabling"),this.internalInstallUpdate())},n.install=function(){if(!("r20esInstalledModuleTable"in window))return;if(!("r20esDisposeTable"in window))return;console.log(`Installing module filename: ${this.filename}`),!(this.filename in window.r20esInstalledModuleTable)?(console.log("First run"),this.internalInstallFirstTime()):(this.filename in window.r20esDisposeTable&&console.error(`DUPLICATE MODULE FOUND: ${this.filename}`),console.log("Calling install update"),this.internalInstallUpdate()),window.r20esDisposeTable[this.filename]=(()=>{this.dispose()}),window.r20esInstalledModuleTable[this.filename]=this,console.log(`DONE! module ID: ${this.filename}`)},e}(),a.SimpleBase=function(e){function n(){return e.apply(this,arguments)||this}r(n,e);var t=n.prototype;return t.installFirstTime=function(){this.setup()},t.installUpdate=function(){this.setup()},t.setup=function(){},n}(a.Base),a.OnAppLoadBase=function(e){function n(n){var t;return(t=e.call(this,n)||this).setup=t.setup.bind(o(o(t))),t}r(n,e);var t=n.prototype;return t.installFirstTime=function(){window.r20es.isLoading?(this.earlySetup(),window.r20es.onAppLoad.addEventListener(this.setup)):(this.earlySetup(),this.setup())},t.earlySetup=function(){},t.setup=function(){},t.installUpdate=function(){this.installFirstTime()},t.dispose=function(){window.r20es.onAppLoad.removeEventListener(this.setup)},n}(a.Base),a.canInstall=(e=>window.r20es&&"canInstallModules"in window.r20es&&window.r20es.canInstallModules),a.getModule=function(e){return"r20esInstalledModuleTable"in window?window.r20esInstalledModuleTable[e]:null},a.getModuleById=function(e){return"r20esInstalledModuleTable"in window?a.getModule(window.r20es.hooks[e].filename):null}},5:function(e,n,t){"use strict";n.__esModule=!0;var i,o=t(7);!function(e){var n;function t(){return window.d20.engine.unselect()}function i(e){window.d20.engine.select(e)}function r(){return window.currentPlayer}function a(){return window.currentEditingLayer}function s(){try{var e=window.d20.Campaign.attributes.jukeboxfolder;return JSON.parse(e||"[]")}catch(e){console.error("[getJukeboxFileStructure] failed to get fs due to exception",e)}return[]}function d(e){return window.Jukebox.playlist.get(e)}function l(){return window.d20.Campaign.activePage()}function u(){return window.d20.engine.canvas.getObjects()}function c(n){for(var t=0,i=u();t<i.length;t++){var o=i[t],r=e.try_get_canvas_object_model(o);if(r&&r.get("id")===n)return o}return null}function f(e,n,t){t?($(document).on("mancerroll:"+n,function(e,i){$(document).off("mancerroll:"+n),t(e,i)}),window.d20.textchat.doChatInput(e,n)):window.d20.textchat.doChatInput(e)}function g(e){window.d20.textchat.incoming(!1,{who:"system",type:"system",content:e})}function w(){window.d20.engine.redrawScreenNextTick(!1)}!function(e){e[e.NumericAscending=0]="NumericAscending",e[e.NumericDescending=1]="NumericDescending",e[e.Alphabetical=2]="Alphabetical",e[e.AlphabeticalDescending=3]="AlphabeticalDescending",e[e.Card=4]="Card"}(n=e.InitiativeOrdering||(e.InitiativeOrdering={})),function(e){e.Map="map",e.PlayerTokens="objects",e.GMTokens="gmlayer",e.Lighting="walls",e.B20Foreground="foreground",e.B20Weather="weather"}(e.CanvasLayer||(e.CanvasLayer={})),e.setBackgroundStyle=function(e){window.d20.engine.backgroundColor=e},e.setupImageDropTarget=function(e,n,t){var i={model:{save:n},updateModel:t};window.d20.utils.setupAvatar(e,i)},e.getCanvasMousePos=function(){return window.d20.engine.mousePos.slice()},e.onInitiativeChange=function(n){return new o.EventSubscriber("change:turnorder",n,function(){return e.getInitiativeWindow().model})},e.setCanvasObjectLocation=function(n,t,i){var o=e.try_get_canvas_object_model(n);o&&o.save({top:i,left:t})},e.getBlob=function(e,n,t){return void 0===t&&(t=5e3),new Promise(function(i,o){e._getLatestBlob(n,i),setTimeout(o,t)})},e.getCampaign=function(){return window.Campaign},e.canEditCharacter=function(n){var t=n.attributes.controlledby;return!!e.isGM()||(!!t.includes("all")||!!t.includes(e.getCurrentPlayer().id))},e.getHandout=function(e){return window.Campaign.handouts.get(e)},e.createCharacter=function(e){return window.Campaign.characters.create(e)},e.setCanvasObjectDimensions=function(n,t,i){var o=e.try_get_canvas_object_model(n);o&&o.save({width:t,height:i})},e.getCharacter=function(e){return window.Campaign.characters.get(e)},e.getAllCharacters=function(){return window.Campaign.characters.models},e.getAllPages=function(){return window.Campaign.pages.models},e.createRollableTable=function(e){return window.d20.Campaign.rollabletables.create(e)},e.getRollableTable=function(e){return window.d20.Campaign.rollabletables.get(e)},e.getSelectedTokens=function(){return window.d20.engine.selected()},e.unselectTokens=t,e.addTokenToSelection=i,e.selectToken=function(e){t(),i(e)},e.hideTokenRadialMenu=function(){window.d20.token_editor.removeRadialMenu()},e.hideTokenContextMenu=function(){window.d20.token_editor.closeContextMenu()},e.getCurrentPlayer=r,e.getCanvasZoom=function(){return window.d20.engine.canvasZoom},e.getCanvasWidth=function(){return window.d20.engine.canvas.width},e.getCanvasHeight=function(){return window.d20.engine.canvas.height},e.getCanvasOffsetX=function(){return window.d20.engine.currentCanvasOffset[0]},e.getCanvasOffsetY=function(){return window.d20.engine.currentCanvasOffset[1]},e.getPageById=function(e){return window.Campaign.pages.get(e)},e.isGM=function(){return window.is_gm},e.getCurrentLayer=a,e.generateUUID=function(){return window.generateUUID()},e.getCurrentToolName=function(){return window.d20.engine.mode},e.advanceInitiative=function(){window.d20.Campaign.initiativewindow.nextTurn()},e.addTokenToInitiative=function(e){window.d20.Campaign.initiativewindow.addTokenToList(e)},e.addCustomItemToInitiative=function(e,n){window.d20.Campaign.initiativewindow.addTokenToList("-1",e,n)},e.rerenderMacroBar=function(){window.d20.player_settings.refreshMacroBar()},e.rerenderJournalMacros=function(){window.d20.player_settings.refreshRollsList()},e.orderInitiativeBy=function(e){var t,i=((t={})[n.NumericAscending]=".sortlist_numeric",t[n.NumericDescending]=".sortlist_numericdesc",t[n.Alphabetical]=".sortlist_alpha",t[n.AlphabeticalDescending]=".sortlist_alphadesc",t[n.Card]=".sortlist_card",t);if(e in i){var o=i[e];$("#initiativewindow_settings").dialog({modal:!1,title:"Turn Order Settings",beforeClose:function(){}}),$(o).click()}else console.error("Invalid initiative ordering: "+e)},e.getInitiativeWindow=function(){return window.d20.Campaign.initiativewindow},e.getJukeboxFileStructure=s,e.setJukeboxFileStructure=function(n){e.getCampaign().save({jukeboxfolder:JSON.stringify(n)})},e.createPlaylist=function(e){return window.d20.jukebox.addFolderToFolderStructure(e)},e.addTrackToPlaylist=function(e,n){return window.d20.jukebox.addItemToFolderStructure(e,n)},e.getSongById=d,e.getJukeboxPlaylists=function(){for(var e=[],n=0,t=s();n<t.length;n++){var i=t[n];if("string"!=typeof i){for(var o=i,r={id:o.id,name:o.n,mode:o.s,songs:[]},a=0,l=o.i;a<l.length;a++){var u=l[a],c=d(u);c?r.songs.push(c):console.warn("Tried to get song id "+u+" but the query returned a falsy value. Skipping")}e.push(r)}}return e},e.playAudio=function(e,n){window.Jukebox.soundObjs[e]=window.soundManager.createSound({id:e,url:n})},e.createSong=function(e){return window.Jukebox.playlist.create(e)},e.makePlaylistStructure=function(e,n,t){return{id:window.generateUUID(),n:e,s:n,i:t||[]}},e.getInitiativeData=function(){return window.d20.Campaign.initiativewindow.cleanList()},e.setInitiativeData=function(e){window.d20.Campaign.initiativewindow.model.save({turnorder:JSON.stringify(e)})},e.getCurrentPage=l,e.getCurrentPageTokens=u,e.doesTokenContainMouse=function(e,n){return window.d20.engine.canvas.containsPoint(e,n)},e.getCurrentPageTokenByUUID=c,e.try_get_canvas_object_model=function(e){return e._model?e._model:e.model?e.model:null},e.isUsing5EOGLSheet=function(){try{return window.d20.journal.customSheets.workerScripts[0].includes("5th Edition OGL by Roll20")}catch(e){return!1}},e.moveCameraToTokenByUUID=function(e){if(e){var n=c(e);if(n){var t=$("#editor-wrapper")[0];t.scrollTop=Math.floor(n.top*window.d20.engine.canvasZoom)-Math.floor(window.d20.engine.canvasHeight/2)+125*window.d20.engine.canvasZoom,t.scrollLeft=Math.floor(n.left*window.d20.engine.canvasZoom)-Math.floor(window.d20.engine.canvasWidth/2)+125*window.d20.engine.canvasZoom}}},e.primitiveSay=function(e,n){window.d20.textchat.doChatInput(e,n)},e.say=f,e.sayToSelf=function(n,t){var i='/w "'+r().get("displayname")+'" '+n;t?f(i,e.generateUUID(),t):f(i)},e.saySystemRaw=g,e.saySystem=function(e){g('<span style="background: rgba(6,26,45,255);\n    color: whitesmoke;\n    border: none;\n    display: inline-block;\n    padding: 8px;\n    margin: -15px -5px -7px -45px;    \n    "\n>\n'+e+"\n</span>\n        ")},e.ping=function(e,n,t,i,o){t=t||r().id,window.d20.engine.pings[t]={left:e,top:n,radius:-5,player:t,pageid:i||l().id,currentLayer:o||a()},window.d20.engine.pinging={downx:e,downy:n},w()},e.getFabric=function(){return window.exports.fabric},e.renderAll=w,e.setGMLayerOpacity=function(e){window.d20.engine.gm_layer_opacity=e},e.hasBetteR20=function(){return void 0!==window.d20plus},e.wipeObjectStorage=function(e){for(var n=e.length,t=0;t<n;t++){var i=e.length-1;if(0>i)break;var o=e.models[i];if(!o||void 0===o)break;o.destroy()}e.length<0&&console.error("FAILED TO WIPE OBJECT STORAGE!")},e.doBulkRoll=function(n,t,i,o,r){e.unselectTokens();var a=function(n){if(e.selectToken(n),r){var i=r(n);i&&e.say(t,i.id,i.callback)}else e.say(t)},s=function(){if(e.hideTokenRadialMenu(),e.hideTokenContextMenu(),o)for(var t=0,i=n;t<i.length;t++){var r=i[t];e.addTokenToSelection(r)}};if(0===i){for(var d=0,l=n;d<l.length;d++){var u=l[d];a(u)}s()}else for(var c=i,f=function(e){setTimeout(function(){a(n[e]),e+1===n.length&&s()},c),c+=i},g=0;g<n.length;g++)f(g)}}(i||(i={})),n.R20=i},7:function(e,n,t){"use strict";n.__esModule=!0;var i=function(){function e(e,n,t){this._isSubscribed=!1,this._name=e,this._callback=n,this._targetGetter=t}return e.subscribe=function(n,t,i){var o=new e(n,t,i);return o.subscribe(),o},e.prototype.subscribe=function(){if(!this._isSubscribed){var e=this._targetGetter();"on"in e?e.on(this._name,this._callback):e.addEventListener(this._name,this._callback),this._isSubscribed=!0}},e.prototype.unsubscribe=function(){if(this._isSubscribed){var e=this._targetGetter();"off"in e?e.off(this._name,this._callback):e.removeEventListener(this._name,this._callback),this._isSubscribed=!1}},e}();n.EventSubscriber=i}});