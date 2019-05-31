var PreferencesDialog=function(e){Dialog.call(this,e,{additionalHeaderClasses:"icon",title:Strings.translateString("Preferences"),closeButtonEnabled:!0,maximizeButtonEnabled:!0,buttonAlign:this.RIGHT_ALIGN}),this.hotkeyFields={}};PreferencesDialog.prototype=Object.create(Dialog.prototype),PreferencesDialog.prototype.constructor=PreferencesDialog,function(){var e="hotkeyField",t="checkboxField",r={usepopupfill:!0,enablenamedpipes:!0,language:!0},a=function(e){var t=[];if(e.ctrlKey&&t.push("control"),e.metaKey&&t.push("meta"),e.altKey&&t.push("alt"),e.shiftKey&&t.push("shift"),t.length>e.shiftKey)switch(e.which){case 16:case 17:case 18:case 91:case 92:break;default:this.setValue(e.which,t.join(" "))}switch(e.which){case 8:case 46:this.clear();break;case 9:break;default:e.preventDefault(),e.stopPropagation()}},o=function(e,t){var r;DialogInput.Input.apply(this,arguments),this.keyCode=0,this.mods="",(r=this).input.bind("keydown",function(e){a.call(r,e)})},n,i,l,s;(o.prototype=Object.create(DialogInput.Input.prototype)).constructor=o,o.prototype.setValue=(n=null,i=null,l=function(){return null===i&&(i={control:Strings.translateString("Ctrl"),meta:Strings.translateString("Meta"),alt:Strings.translateString("Alt"),shift:Strings.translateString("Shift")}),i},s=function(){return null===n&&(n={33:Strings.translateString("Page Up"),34:Strings.translateString("Page Down"),35:Strings.translateString("End"),36:Strings.translateString("Home"),37:Strings.translateString("Left"),38:Strings.translateString("Up"),39:Strings.translateString("Right"),40:Strings.translateString("Down"),189:"-",219:"[",220:"\\",221:"]",186:";",222:"'",188:",",187:"+",190:".",191:"/",106:"*",192:"~",124:Strings.translateString("Print Screen")}),n},function(e,t){var r="";if(t&&e){for(var a=t.split(" "),o=l(),n=0,i=a.length;n<i;++n)a[n]=o[a[n]];var u=s();void 0!==u[e]?a.push(u[e]):a.push(String.fromCharCode(e).toUpperCase()),r=a.join("+"),this.keyCode=e,this.mods=t}else this.keyCode=0,this.mods="";DialogInput.Input.prototype.setValue.call(this,r)});var u=function(e,r){var a,o;DialogInput.Input.apply(this,arguments),this.checkboxField=$("#"+this.input.attr(t)),o=null,void 0===(a=this).checkboxField.attr(Dialog.prototype.DIALOG_FIELD)&&(a.checkboxField.bind("change",function(){if(a.checkboxField.prop("checked"))if(null!==o)a.setValue(o),o=null;else switch(a.checkboxField.selector){case"#autoautoEnabled":a.setValue(25);break;case"#pollServerEnabled":a.setValue(15);break;case"#recentUsed":a.setValue(10)}else o=a.getValue(),a.setValue("")}),a.onChange(function(e){a.checkboxField.prop("checked",e>0)}))};(u.prototype=Object.create(DialogInput.Input.prototype)).constructor=u,u.prototype.enable=function(){DialogInput.Input.prototype.enable.apply(this,arguments),this.checkboxField.prop("disabled",!1)},u.prototype.disable=function(){DialogInput.Input.prototype.disable.apply(this,arguments),this.checkboxField.prop("disabled",!0)},u.prototype.buildError=function(){return this.buildErrorElement({element:this.input.parent().children()})},u.prototype.setValue=function(e){("number"!=typeof e||e>0)&&DialogInput.Input.prototype.setValue.apply(this,arguments)},u.prototype.validate=function(e,t,r){if(r){var a=parseInt(r);if(isNaN(a)||a<0)return e.addError(t,Strings.translateString("Value must be greater than or equal to %1.",0)),!1}return!0};var p=function(){for(var e=LPProxy.getFormFillModels(),t=[{value:0,label:""}],r=0,a=e.length;r<a;++r){var o=e[r];t.push({value:o.getID(),label:o.getName()})}return t},g=function(){var e=[],t=bg.get("g_langs");for(var r in t)e.push({value:r,label:t[r]});return e};PreferencesDialog.prototype.setupButtons=function(e){Dialog.prototype.setupButtons.apply(this,arguments),this.resetDefaultsButton=$(LPTools.createElement("button","nbtn btn_midi wbtn dynamicWidth leftButton")),this.resetDefaultsButton.bind("click",this.createHandler(this.resetDefaults)),this.buttonContainer.prepend(this.resetDefaultsButton)},PreferencesDialog.prototype.resetDefaults=function(){for(var e=this.currentViewElement.find("["+this.DIALOG_FIELD+"]"),t={},r=0,a=e.length;r<a;++r)t[e[r].getAttribute(this.DIALOG_FIELD)]=!0;this.populateFields(bg.Preferences.getDefault(t))},PreferencesDialog.prototype.leftMenuChange=function(e){this.resetDefaultsButton.text(Strings.translateString("Restore '%1' Defaults",e.text()))},PreferencesDialog.prototype.getHotKeyPreferenceNames=function(){var e={};for(var t in this.hotkeyFields)e[t+"KeyCode"]=!0,e[t+"Mods"]=!0;return e},PreferencesDialog.prototype.getData=function(){var e=Dialog.prototype.getData.apply(this,arguments);for(var t in this.hotkeyFields){var r=this.hotkeyFields[t];e[t+"KeyCode"]=r.keyCode,e[t+"Mods"]=r.mods}return e},PreferencesDialog.prototype.defaultFields=function(e){e.defaultData=$.extend(e.defaultData,bg.Preferences.get(DialogInput.getProperties(this.inputFields))),LPTools.setSelectOptions(this.inputFields.defaultffid.getNativeElement(),p()),LPTools.setSelectOptions(this.inputFields.language.getNativeElement(),g()),Dialog.prototype.defaultFields.apply(this,arguments);var t=bg.Preferences.get(this.getHotKeyPreferenceNames());for(var r in this.hotkeyFields){var a;this.hotkeyFields[r].setValue(t[r+"KeyCode"],t[r+"Mods"])}var o=bg.get("g_prefoverrides"),n=this;bg.getLogoffWhenCloseBrowser(function(e){if(e){var t=document.getElementById("logoffWhenCloseBrowserLabel"),r=document.getElementById("logoffWhenCloseBrowserVal");t&&(t.innerText="Automatically Log out when all browsers are closed."),r&&(r.style.display="none")}o.logoffclosebrowser>-1&&o.logoffclosebrowser>0&&(n.inputFields.logoffWhenCloseBrowser.setValue(o.logoffclosebrowser),n.inputFields.logoffWhenCloseBrowserVal.setValue(o.logoffclosebrowser),n.inputFields.logoffWhenCloseBrowser.disable())}),o.logoffidle>-1?(this.inputFields.idleLogoffVal.setValue(o.logoffidle),this.inputFields.idleLogoffVal.disable()):this.inputFields.idleLogoffVal.enable(),bg.get("g_flags").pollIntervalSetByPolicy?this.inputFields.pollServerVal.disable():this.inputFields.pollServerVal.enable()},PreferencesDialog.prototype.clearFields=function(){for(var e in Dialog.prototype.clearFields.apply(this,arguments),this.hotkeyFields)this.hotkeyFields[e].clear()};var c=function(e){return function(t){var r=e.getValue();r&&(e.clear(),LPTools.requireBinary(function(){e.setValue(r)}))}},d;PreferencesDialog.prototype.initialize=function(r){this.initializeInputFields(r.find("input["+t+"]"),function(e){return new u(e,this)}),Dialog.prototype.initialize.apply(this,arguments);for(var a=r.find("input["+e+"]"),n=0,i=a.length;n<i;++n){var l=a[n],s=l.getAttribute(e);this.hotkeyFields[s]=new o(l,this)}var p=LPPlatform.getUnavailablePreferences();for(var g in p)p[g]&&(r.find("input["+this.DIALOG_FIELD+"="+g+"]").closest("tr").detach(),r.find("select["+this.DIALOG_FIELD+"="+g+"]").closest("tr").detach(),r.find("input["+e+"="+g+"]").closest("tr").detach());var d=LPPlatform.getPreferencesRequiringBinary();for(var g in d)if(d[g]){var f=this.inputFields[g];f&&f.input.bind("change",c(f))}bg.get("LPContentScriptFeatures").is_infield_enabled||document.getElementById("infieldPopupEnabled").parentElement.parentElement.remove(),bg.get("g_hidelogoffprefs")&&$("#securityPrefs").remove(),bg.get("g_hideappearancebox")&&$("#appearancePrefs").remove(),bg.get("g_hidehelptranslate")&&$("#helpTranslateButton").remove(),(bg.get("g_issafari")||bg.get("g_issafari_appext"))&&$("#iconMenuItem").LP_hide(),bg.get("g_disableautofill")&&(document.getElementById("automaticallyFill").parentElement.appendChild(document.createTextNode("-- This feature has been disabled by an Enterprise Policy.")),document.getElementById("automaticallyFill").remove()),bg.get("LPContentScriptFeatures").ziggy?document.getElementById("toplevelmatchingsites").parentNode.parentNode.style.display="none":$("#helpTranslateButton").bind("click",function(){bg.openURL(bg.get("base_url")+"translate.php")}),$("#automaticallyFill").bind("click",function(){$("#automaticallyFill")[0].checked&&dialogs.alert.open({title:Strings.translateString("Are you sure?"),text:Strings.translateString("Are you sure you want to enable autofill? Enabling autofill increases the risk of exposing a site's password if that site is compromised.")})})},PreferencesDialog.prototype.validate=function(e){var t=Dialog.prototype.validate.apply(this,arguments);return e.autoautoVal&&""!=e.autoautoVal?e.autoautoVal&&e.autoautoVal<10&&(this.addError("autoautoVal",Strings.translateString("Value must be greater than or equal to %1.",10)),t=!1):e.autoautoVal=-1,e.pollServerVal&&""!=e.pollServerVal?e.pollServerVal&&e.pollServerVal<5&&(this.addError("pollServerVal",Strings.translateString("Value must be greater than or equal to %1.",5)),t=!1):e.pollServerVal=-1,e.recentUsedCount&&""!=e.recentUsedCount||(e.recentUsedCount=-1),t},PreferencesDialog.prototype.checkForRestartOrLogoff=function(e,t){for(var a in r)if(e[a]!==this.originalData[a])return void dialogs.alert.open({title:Strings.translateString("Restart Required"),text:Strings.translateString("You must restart your browser before all of the changes will take effect."),handler:t,closeHandler:t});t()},PreferencesDialog.prototype.handleSubmit=(d=function(e){var t=this.getChanges(e);this.checkForRestartOrLogoff(e,this.createHandler(function(){bg.Preferences.set(t),LPPlatform.handlePreferenceChanges(t),this.close(!0)}))},function(e){(e.logoffWhenCloseBrowser||e.idleLogoffEnabled)&&(bg.Preferences.get("rememberpassword")||bg.get("g_master_password_saved"))?dialogs.confirmation.open({title:Strings.translateString("Remember Password"),text:Strings.translateString("You currently have LastPass set to remember your password.  Doing so essentially makes the automatically log out options you've chosen useless.  Would you like LastPass to stop remembering your password?"),handler:this.createHandler(function(){bg.Preferences.set("rememberpassword",!1),bg.deletesavedpw(bg.get("g_username")),d.call(this,e)}),closeHandler:this.createHandler(d,e)}):d.call(this,e)})}();
//# sourceMappingURL=sourcemaps/preferencesDialog.js.map
