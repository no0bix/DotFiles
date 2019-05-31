!function(){var t=!1,e=function(t,e){var o=this,n=LPTools.getOption(e,"enabled",!0),i=LPTools.createElement("div","moreItem moreActions moreItem-override backgroundCircle fa-stack"),s=LPTools.createElement("div",{class:"fa fa-circle fa-stack-2x circle",vaultaction:n?e.vaultaction:Constants.ACTION_DO_NOTHING,title:e.title});i.appendChild(s);var a=$(s),r=a,l;e.type?(l=LPTools.createElement("div","fa fa-"+e.type+" fa-stack-1x fontAwesomeIcon"),s.appendChild(l)):(l=LPTools.createElement("span","fa "+e.iconClass+" fa-stack-1x"),i.appendChild(l),r=$(l)),n||$(s).addClass("empty");var p=function(){n?(a.addClass("circleHover"),t.setSecondaryActionText(e.title),t.currentAction=t.actions.indexOf(o)):t.setSecondaryActionText("")},u=function(){t.keyboardNavActive&&(a.removeClass("circleHover"),t.hideSecondaryActionText(),t.currentAction=-1)},c=null;r.bind("mouseenter",function(){clearTimeout(c),c=setTimeout(p,50)}),r.bind("mouseleave",function(){clearTimeout(c),c=setTimeout(u,50)}),this.getButton=function(){return a},this.getElement=function(){return i},this.enter=function(){s.click()},this.focus=function(){"function"==typeof e.onFocus&&e.onFocus(),p()},this.blur=function(t){"function"==typeof e.onBlur&&e.onBlur(),t?(clearTimeout(c),c=setTimeout(u,50)):u()},this.enabled=function(){return n}},o,n,i,s,a;VaultItemBase.prototype.reprompt=(o=VaultItemBase.prototype.reprompt,n=function(t){return function(){t.apply(this,arguments),LPPlatform.closePopup()}},function(e,i){t=o.call(this,n(e),i)}),VaultItemBaseDisplay=(i=VaultItemBaseDisplay.prototype.constructor,((s=function(){i.apply(this,arguments),this.resetActions()}).prototype=i.prototype).constructor=s,s),VaultItemBaseDisplay.prototype.resetActions=function(){this.actions=[],this.currentAction=-1,this.copyDropdown=null,this.copyDropdownButton=null,this.copyDrowndownShown=!1,this.keyboardNavActive=!0},VaultItemBaseDisplay.prototype.build=function(t){this.resetActions(),t=t||{};var e=["extensionMenuItem"];e=e.concat(this.getMenuItemClass()),t&&t.isZiggySet&&(e=e.concat("ziggyOverride"));var o=LPTools.createElement("li",e);t&&t.isOmarSet&&(t.useSquareIcon=!0),t&&t.additionalItemClasses&&LPTools.addClass(o,t.additionalItemClasses);var n=this.buildItemIconElement(t);null!==n&&o.appendChild(n);var i=this.buildItemInfoTextElements(t);i.length>0&&o.appendChild(i[0]);var s=this.buildMoreOptionsButtons(t,o);if(s)if(s instanceof Array)for(var a=0,r=s.length;a<r;++a)s[a]&&o.appendChild(s[a]);else o.appendChild(s);return o},VaultItemBaseDisplay.prototype.getMenuItemClass=function(){return"item"},VaultItemBaseDisplay.prototype.destruct=(a=VaultItemBaseDisplay.prototype.destruct,function(){this.copyDropdown&&this.copyDropdown.remove(),this.copyDropdownOverlay&&this.copyDropdownOverlay.parentElement&&this.copyDropdownOverlay.parentElement.removeChild(this.copyDropdownOverlay),a.apply(this,arguments)}),VaultItemBaseDisplay.prototype.buildZiggyCopyDropdown=function(){var t=this;this.copyDropdown=this.generateInContextDropdown(),this.copyDropdownButton=this.buildZiggyVaultActionButton({type:"clone",enabled:!!this.copyDropdown,vaultaction:Constants.ACTION_OPEN_IN_CONTEXT_OPTIONS,title:this.copyDropdown?Strings.Vault.COPY:Strings.translateString("Nothing to copy"),onFocus:function(){t.showInContextOptions()},onBlur:function(){t.hideInContextOptions()}});var e=this.copyDropdownButton.getButton(),o=LPTools.createElement("div","fa fa-circle fa-stack-2x circle dropDownCircle");return o.appendChild(LPTools.createElement("div","fa fa-caret-down fa-stack-1x fontAwesomeIcon dropDownIcon")),e.append(o),this.copyDropdown&&(e.append(this.copyDropdown),this.copyDropdown.bind("click",this._eventHandler)),this.copyDropdownButton},VaultItemBaseDisplay.prototype.buildZiggyVaultActionButton=function(t){var o=new e(this,t);return this.actions.push(o),o},VaultItemBaseDisplay.prototype.pushKeyboardNavigation=function(t,e){LPTools.pushKeyBoardNavigation(t,e),this.keyboardNavActive=!1},VaultItemBaseDisplay.prototype.popKeyboardNavigation=function(){LPTools.popKeyBoardNavigation(),this.keyboardNavActive=!0},VaultItemBaseDisplay.prototype.generateDropDownElement=function(t,e){var o="contextOptionsDropdownElement",n;return LPTools.createElement("li",{class:o,title:Strings.translateString(e),vaultaction:t},Strings.translateString(e))},VaultItemBaseDisplay.prototype.generateInContextButtons=function(t){var e=[],o,n={Account:[{action:Constants.ACTION_COPY_USERNAME,title:Strings.Vault.COPY_USERNAME},{action:Constants.ACTION_COPY_PASSWORD,title:Strings.Vault.COPY_PASSWORD}],Address:[{action:Constants.ACTION_COPY_ADDRESS_1,title:Strings.Vault.COPY_ADDRESS_1},{action:Constants.ACTION_COPY_ADDRESS_2,title:Strings.Vault.COPY_ADDRESS_2},{action:Constants.ACTION_COPY_CITY_SLASH_TOWN,title:Strings.Vault.COPY_CITY_SLASH_TOWN},{action:Constants.ACTION_COPY_ZIP_SLASH_POSTAL_CODE,title:Strings.Vault.COPY_ZIP_SLASH_POSTAL_CODE},{action:Constants.ACTION_COPY_PHONE_NUMBER,title:Strings.Vault.COPY_PHONE_NUMBER},{action:Constants.ACTION_COPY_EMAIL_ADDRESS,title:Strings.Vault.COPY_EMAIL_ADDRESS}],"Bank Account":[{action:Constants.ACTION_COPY_ACCOUNT_NUMBER,title:Strings.Vault.COPY_ACCOUNT_NUMBER},{action:Constants.ACTION_COPY_ROUTING_NUMBER,title:Strings.Vault.COPY_ROUTING_NUMBER}],"Credit Card":[{action:Constants.ACTION_COPY_NUMBER,title:Strings.Vault.COPY_NUMBER},{action:Constants.ACTION_COPY_SECURITY_CODE,title:Strings.Vault.COPY_SECURITY_CODE}],Database:[{action:Constants.ACTION_COPY_HOSTNAME,title:Strings.Vault.COPY_HOSTNAME},{action:Constants.ACTION_COPY_USERNAME,title:Strings.Vault.COPY_USERNAME},{action:Constants.ACTION_COPY_NOTE_PASSWORD,title:Strings.Vault.COPY_PASSWORD}],"Driver's License":[{action:Constants.ACTION_COPY_NUMBER,title:Strings.Vault.COPY_NUMBER}],"Health Insurance":[{action:Constants.ACTION_COPY_POLICY_NUMBER,title:Strings.Vault.COPY_POLICY_NUMBER},{action:Constants.ACTION_COPY_GROUP_ID,title:Strings.Vault.COPY_GROUP_ID},{action:Constants.ACTION_COPY_MEMBER_ID,title:Strings.Vault.COPY_MEMBER_ID}],Insurance:[{action:Constants.ACTION_COPY_POLICY_NUMBER,title:Strings.Vault.COPY_POLICY_NUMBER}],Membership:[{action:Constants.ACTION_COPY_MEMBERSHIP_NUMBER,title:Strings.Vault.COPY_MEMBERSHIP_NUMBER}],Passport:[{action:Constants.ACTION_COPY_NUMBER,title:Strings.Vault.COPY_NUMBER}],"Social Security":[{action:Constants.ACTION_COPY_NUMBER,title:Strings.Vault.COPY_NUMBER}],"Software License":[{action:Constants.ACTION_COPY_LICENSE_KEY,title:Strings.Vault.COPY_LICENSE_KEY},{action:Constants.ACTION_COPY_ORDER_NUMBER,title:Strings.Vault.COPY_ORDER_NUMBER}],"SSH Key":[{action:Constants.ACTION_COPY_SSH_PASSPHRASE,title:Strings.Vault.COPY_SSH_PASSPHRASE},{action:Constants.ACTION_COPY_SSH_PUBLIC_KEY,title:Strings.Vault.COPY_SSH_PUBLIC_KEY},{action:Constants.ACTION_COPY_HOSTNAME,title:Strings.Vault.COPY_HOSTNAME}],"Wi-Fi Password":[{action:Constants.ACTION_COPY_NOTE_PASSWORD,title:Strings.Vault.COPY_PASSWORD}],Server:[{action:Constants.ACTION_COPY_HOSTNAME,title:Strings.Vault.COPY_HOSTNAME},{action:Constants.ACTION_COPY_NOTE_USERNAME,title:Strings.Vault.COPY_USERNAME},{action:Constants.ACTION_COPY_NOTE_PASSWORD,title:Strings.Vault.COPY_PASSWORD}],"Instant Messenger":[{action:Constants.ACTION_COPY_USERNAME,title:Strings.Vault.COPY_USERNAME},{action:Constants.ACTION_COPY_NOTE_PASSWORD,title:Strings.Vault.COPY_PASSWORD}],"Email Account":[{action:Constants.ACTION_COPY_USERNAME,title:Strings.Vault.COPY_USERNAME},{action:Constants.ACTION_COPY_NOTE_PASSWORD,title:Strings.Vault.COPY_PASSWORD}],Generic:[{action:Constants.ACTION_COPY_NOTE,title:Strings.Vault.COPY_NOTE}]}[t];if(n)for(index in n)this.isExcludedAction(n[index].action)||e.push(this.generateDropDownElement(n[index].action,n[index].title));return e},VaultItemBaseDisplay.prototype.generateInContextDropdown=function(){var t=this.generateInContextButtons(this.getRecordType());if(t.length>0){for(var e=LPTools.createElement("ul",{class:"contextOptionsDropdown displaynone"}),o=0,n=t.length;o<n;o++)e.appendChild(t[o]);return $(e)}return null},VaultItemBaseDisplay.prototype.buildMoreOptionsButtons=function(t,e){var o=[];if(t&&t.isZiggySet){var n="",i="",s=this._model.getRecordType();ExtensionDropdown.isMatchingSite(this._model.getID())?(n=Constants.ACTION_FILL,i=Strings.Vault.FILL):"Account"===s?(n=Constants.ACTION_LAUNCH,i=Strings.Vault.LAUNCH):"Address"!==s&&"Bank Account"!==s&&"Credit Card"!==s||(n=Constants.ACTION_DO_NOTHING,i=Strings.translateString("UNABLE TO FILL")),n&&o.push(this.buildZiggyVaultActionButton({iconClass:"lp-fill",vaultaction:n,title:i}).getElement());var a=this.buildZiggyCopyDropdown();a&&o.push(a.getElement()),o.push(this.buildZiggyVaultActionButton({type:"pencil",vaultaction:Constants.ACTION_EDIT,title:Strings.Vault.EDIT}).getElement())}else o.push(LPTools.createElement("div",{class:"moreItem moreActions background",vaultaction:Constants.ACTION_OPEN_MORE_OPTIONS,title:Strings.Vault.MORE_OPTIONS}));return o},VaultItemBaseDisplay.prototype.buildItemIconElement=function(t){var e=LPTools.createElement("div","itemIcon");return e.appendChild(this.getIconElement(t)),e.appendChild(LPTools.createElement("div","itemIconOverlay")),e},VaultItemBaseDisplay.prototype.buildItemMenuOption=function(t){var e=LPTools.createElement("li",{class:"extensionMenuItem",vaultaction:t});return e.textContent=Strings.Vault[Constants.CONTEXT_MENU_ITEMS[t]],LPPlatform.addEventListener(e,"click",this._eventHandler),e},VaultItemBaseDisplay.prototype.buildMoreOptions=function(t){var e=this.getContainer()._buildOptions;void 0===t&&(t=LPTools.getOption(e,"moreOptionsElement",this._element?this._element.parentElement:null)),LPTools.removeDOMChildren(t);var o=this.build(e);this.postBuild(o,e),t.appendChild(o),this._$_element.unbind("contextmenu");for(var n=this.getMoreOptions(),i=[],s=0,a=n.length;s<a;++s){var r=n[s];if(!this.isExcludedAction(r)){var l=this.buildItemMenuOption(r);i.push(l),t.appendChild(l)}}LPTools.addKeyBoardNavigation(i,{useRightArrow:!1,selectFirst:!0}),ExtensionDropdown.setGroupLabel(LPProxy.getGroupByName(this._model.getGroupName()))},VaultItemBaseDisplay.prototype.openMoreOptions=function(){this.pushState(LPTools.getOption(this.getContainer()._buildOptions,"moreOptionsState",void 0)),this.buildMoreOptions();var t=LPTools.getOption(this.getContainer()._buildOptions,"moreOptionsCallback",void 0);t&&t()},VaultItemBaseDisplay.prototype.hideInContextOptions=function(){this.copyDropdownShown=!1,this.copyDropdown&&(this.copyDropdown.LP_hide(),this.popKeyboardNavigation(),this.copyDropdown.css({top:"",left:"",right:""}),this.copyDropdownParent&&this.copyDropdownParent.appendChild(this.copyDropdown.get(0)),this.copyDropdownOverlay&&this.copyDropdownOverlay.parentElement&&this.copyDropdownOverlay.parentElement.removeChild(this.copyDropdownOverlay))},VaultItemBaseDisplay.prototype.showInContextOptions=function(){var t=this;this.copyDropdownShown=!0,this.copyDropdown.LP_show(),this.pushKeyboardNavigation(this.copyDropdown.children()),this.copyDropdownOverlay||(this.copyDropdownOverlay=LPTools.createElement("div","subMenuOverlay"),this.copyDropdownOverlay.addEventListener("click",function(e){t.copyDropdownButton.blur(!0);var o=document.elementFromPoint(e.clientX,e.clientY);o&&$(o).mouseenter()})),document.body.appendChild(this.copyDropdownOverlay);var e=this.copyDropdown.get(0),o=e.getBoundingClientRect(),n=o.top;o.bottom>window.innerHeight&&(n=o.top-e.clientHeight-2*e.offsetTop),this.copyDropdown.css({top:n,left:o.left,right:"auto"}),this.copyDropdownParent=e.parentElement,document.body.appendChild(e)},VaultItemBaseDisplay.prototype.openInContextOptions=function(){this.copyDropdownShown?this.hideInContextOptions():this.showInContextOptions()},VaultItemBaseDisplay.prototype.pushState=function(t){t=t||ExtensionDropdown.State.GroupState,Topics.get(Topics.PUSH_STATE).publish(new t(this._parent))},VaultItemBaseDisplay.prototype.handleEvent=function(e,o){var n={source:"icon",approach:this.isMatching()?"match":"nav",isTrusted:e.isTrusted||e.originalEvent&&e.originalEvent.isTrusted};switch(e.type){case"click":var i=this.getVaultAction(e.target);switch(this.getRecordType()&&this.getBuildOptions().trackAction&&"openInContextOptions"!==i&&bg.sendLpImprove("itemaction",$.extend({},n,{action:i,type:this.getRecordType()})),this.handleClickEvent(i,n),i){case Constants.ACTION_DO_NOTHING:case Constants.ACTION_OPEN_MORE_OPTIONS:case Constants.ACTION_OPEN_IN_CONTEXT_OPTIONS:case Constants.ACTION_TOGGLE_OPEN:t=!0}t&&(e.stopPropagation(),e.preventDefault(),t=!1);break;case"contextmenu":this.getBuildOptions().isOmarSet||(this.handleClickEvent(Constants.ACTION_OPEN_MORE_OPTIONS,n),e.stopPropagation(),e.preventDefault())}},VaultItemBaseDisplay.prototype.isMatching=function(){return!1},VaultItemDisplay.prototype.nextAction=function(t,e){var o=this.currentAction,n=this.actions.length+1;do{o=(o+n+t+1)%n-1}while(o!==this.currentAction&&o>-1&&!this.actions[o].enabled());this.currentAction>-1&&this.actions[this.currentAction].blur(),!e&&o>-1&&this.actions[o].focus(),this.currentAction=o},VaultItemDisplay.prototype.arrowRightOverride=function(){return this.nextAction(1),0===this.actions.length},VaultItemDisplay.prototype.arrowLeftOverride=function(){var t=-1===this.currentAction;return this.nextAction(-1,t),t},VaultItemDisplay.prototype.keyboardEnterOverride=function(){var t=this.currentAction;return this.currentAction>-1&&this.actions[this.currentAction].enter(),-1===t},VaultItemDisplay.prototype.navigateFrom=function(){this.currentAction>-1&&this.actions[this.currentAction].blur()},VaultItemDisplay.prototype.postBuild=function(t){VaultItemBaseDisplay.prototype.postBuild.apply(this,arguments),this.updateTextElements()},GroupDisplay.prototype.getDisplayName=function(){return this._model.getGroupName()},GroupDisplay.prototype.build=function(t){var e=VaultItemBaseDisplay.prototype.build.apply(this,arguments);return e.setAttribute("vaultaction",Constants.ACTION_TOGGLE_OPEN),e},GroupDisplay.prototype.buildItemIconElement=function(){return null},GroupDisplay.prototype.getMenuItemClass=function(){return"group"},GroupDisplay.prototype.buildMoreOptionsButtons=function(){return LPTools.createElement("div","more")},GroupDisplay.prototype.setupListeners=function(t,e){$(t).bind("click",this._eventHandler)},GroupDisplay.prototype.toggleOpen=function(t){this.pushState(),this.rebuildItems(this._element.parentElement,!t.isTrusted),ExtensionDropdown.setGroupLabel(this._model)},GroupDisplay.prototype.rebuildItems=function(t,e){var o=this.getContainer();if(t=t||o._element,0===this.getSubGroups().length&&1===this.getItems().length&&LPTools.getOption(o._buildOptions,"autoExpandSingleItem",!0)&&!LPTools.getOption(o._buildOptions,"isOmarSet",!1))this.getItems()[0].buildMoreOptions(t);else{LPTools.removeDOMChildren(t);var n=this.favoritesGroup&&!this.favoritesGroup.isEmpty();n&&this.buildItems([this.favoritesGroup],t,o._buildOptions);var i=0,s=[],a=null;if(bg.get("g_nofolder_feature_enabled"))for(var r=0,l=this.getSubGroups().length;r<l;r++)this.getSubGroups()[r]instanceof DefaultGroupDisplay?i=(a=this.getSubGroups()[r]).getItems()?a.getItems().length:0:s.push(this.getSubGroups()[r]);var p=a?s:this.getSubGroups();this.buildItems(p,t,o._buildOptions),this.buildItems(this.getItems(),t,o._buildOptions),a&&i>0&&this.buildItems(a.getItems(),t,o._buildOptions),p.length>0&&(this.getItems().length>0||i>0)&&p[p.length-1]._$_element.removeClass("last");var u=[];n&&u.push(this.favoritesGroup),u=u.concat(p,this.getItems()),a&&i>0&&(u=u.concat(a.getItems()));var c=u.map(function(t){return t._element}),C;bg.get("LPContentScriptFeatures").ziggy?LPTools.addKeyBoardNavigation(c,{selectFirst:e,displayItems:u,useRightArrow:!0}):LPTools.addKeyBoardNavigation(c,{rightArrowSelector:".moreItem",selectFirst:e}),LPTools.getOption(o._buildOptions,"addLastClass",!0)||$(c[c.length-1]).removeClass("last")}},GroupDisplay.prototype.getItemContainer=function(){return this.getContainer()._element},GroupDisplay.prototype.getSubFolderContainer=GroupDisplay.prototype.getItemContainer,AccountDisplay.prototype.build=function(t){var e=VaultItemBaseDisplay.prototype.build.apply(this,arguments);return ExtensionDropdown.isMatchingSite(this._model.getID())?(e.setAttribute("vaultaction",Constants.ACTION_FILL_SITE),e.setAttribute("title",Strings.Vault.FILL+" "+this.getDisplayName())):(e.setAttribute("vaultaction",Constants.ACTION_LAUNCH),e.setAttribute("title",Strings.Vault.LAUNCH+" "+this.getDisplayName())),e},AccountDisplay.prototype.setupListeners=function(t,e){VaultItemBaseDisplay.prototype.setupListeners.apply(this,arguments)},AccountDisplay.prototype.getMoreOptions=function(){var t=[Constants.ACTION_COPY_USERNAME,Constants.ACTION_COPY_PASSWORD,Constants.ACTION_COPY_URL,Constants.ACTION_GO_TO_URL,Constants.ACTION_EDIT,Constants.ACTION_DELETE];return ExtensionDropdown.isMatchingSite(this._model.getID())&&t.unshift(Constants.ACTION_FILL_SITE),t},NoteDisplay.prototype.build=function(t){var e=VaultItemBaseDisplay.prototype.build.apply(this,arguments);return LPTools.addClass(e,"note"),ExtensionDropdown.isMatchingSite(this._model.getID())?(e.setAttribute("vaultaction",Constants.ACTION_FILL),e.setAttribute("title",Strings.Vault.FILL+" "+this.getDisplayName())):(e.setAttribute("vaultaction",Constants.ACTION_EDIT),e.setAttribute("title",Strings.Vault.EDIT+" "+this.getDisplayName())),e},NoteDisplay.prototype.getMoreOptions=function(){var t=[];return this._model.hasUsername()&&t.push(Constants.ACTION_COPY_USERNAME),this._model.hasPassword()&&t.push(Constants.ACTION_COPY_PASSWORD),t.push(Constants.ACTION_COPY_NOTE),this._model.hasPrivateKey()&&t.push(Constants.ACTION_COPY_KEY),t.push(Constants.ACTION_EDIT),t.push(Constants.ACTION_DELETE),t},NoteDisplay.prototype.setupListeners=function(t,e){VaultItemBaseDisplay.prototype.setupListeners.apply(this,arguments)},FormFillDisplay.prototype.getMoreOptions=function(){return[Constants.ACTION_EDIT,Constants.ACTION_FILL]},FormFillDisplay.prototype.setupListeners=function(t,e){VaultItemBaseDisplay.prototype.setupListeners.apply(this,arguments)},FormFillDisplay.prototype.build=function(t){var e=VaultItemBaseDisplay.prototype.build.apply(this,arguments);return LPTools.addClass(e,"formFill"),e.setAttribute("vaultaction",Constants.ACTION_FILL),e.setAttribute("title",Strings.Vault.FILL+" "+this.getDisplayName()),e},FormFillDisplay.prototype.includeCreditInfo=function(){return!1},IdentityDisplay.prototype.build=function(t){var e=VaultItemBaseDisplay.prototype.build.apply(this,arguments);return e.setAttribute("vaultaction",Constants.ACTION_ENABLE),e.setAttribute("title",Strings.Vault.ENABLE+" "+this.getDisplayName()),e},AllIdentityDisplay.prototype.build=IdentityDisplay.prototype.build,IdentityDisplay.prototype.buildMoreOptionsButtons=function(){return null},IdentityDisplay.prototype.openMoreOptions=function(){},MatchingAccountDisplay=function(t){AccountDisplay.call(this,t)},MatchingAccountDisplay.prototype=Object.create(AccountDisplay.prototype),MatchingAccountDisplay.prototype.constructor=MatchingAccountDisplay,MatchingAccountDisplay.prototype.build=function(t){var e=AccountDisplay.prototype.build.apply(this,arguments);return LPTools.addClass(e,"matchingSite"),e},MatchingAccountDisplay.prototype.buildMoreOptionsButtons=function(t,e){var o=[];return t&&t.isZiggySet?(o.push(this.buildZiggyVaultActionButton({iconClass:"lp-fill",vaultaction:Constants.ACTION_FILL,title:Strings.Vault.FILL}).getElement()),o.push(this.buildZiggyCopyDropdown().getElement()),o.push(this.buildZiggyVaultActionButton({type:"pencil",vaultaction:Constants.ACTION_EDIT,title:Strings.Vault.EDIT}).getElement())):(this.isExcludedAction(Constants.ACTION_COPY_USERNAME)||o.push(LPTools.createElement("div",{class:"moreItem copyUsername",title:Strings.Vault.COPY_USERNAME,vaultaction:Constants.ACTION_COPY_USERNAME})),this.isExcludedAction(Constants.ACTION_COPY_PASSWORD)||o.push(LPTools.createElement("div",{class:"moreItem copyPassword",title:Strings.Vault.COPY_PASSWORD,vaultaction:Constants.ACTION_COPY_PASSWORD})),o.push(LPTools.createElement("div",{class:"moreItem background",title:Strings.Vault.MORE_OPTIONS,vaultaction:Constants.ACTION_OPEN_MORE_OPTIONS}))),o},MatchingAccountDisplay.prototype.isMatching=function(){return bg.get("LPContentScriptFeatures").ziggy},MatchingNoteDisplay=function(t,e){this._language=e,NoteDisplay.call(this,t)},MatchingNoteDisplay.prototype=Object.create(NoteDisplay.prototype),MatchingNoteDisplay.prototype.constructor=MatchingNoteDisplay,MatchingNoteDisplay.prototype.build=function(t){var e=VaultItemBaseDisplay.prototype.build.apply(this,arguments);return LPTools.addClass(e,"matchingSite matchingNote"),e.setAttribute("vaultaction",Constants.ACTION_FILL),e.setAttribute("title",Strings.Vault.FILL+" "+this.getDisplayName()),e},MatchingNoteDisplay.prototype.getDisplayName=function(){return this._model.getName()+(this._language?" ("+this._language+")":"")},MatchingNoteDisplay.prototype.isMatching=function(){return bg.get("LPContentScriptFeatures").ziggy},ApplicationDisplay.prototype.getMoreOptions=function(){return[Constants.ACTION_EDIT,Constants.ACTION_COPY_USERNAME,Constants.ACTION_COPY_PASSWORD,Constants.ACTION_DELETE]},ApplicationDisplay.prototype.build=function(t){var e=VaultItemBaseDisplay.prototype.build.apply(this,arguments);return LPFeatures.allowLaunchApplication()?(e.setAttribute("vaultaction",Constants.ACTION_LAUNCH),e.setAttribute("title",Strings.Vault.LAUNCH+" "+this.getDisplayName())):(e.setAttribute("vaultaction",Constants.ACTION_EDIT),e.setAttribute("title",Strings.Vault.EDIT+" "+this.getDisplayName())),e},AddCustomItem=function(t){VaultItem.call(this,$.extend({},{name:t.title},t))},AddCustomItem.prototype=Object.create(VaultItem.prototype),AddCustomItem.prototype.constructor=AddCustomItem,AddCustomItem.prototype.toString=function(){return"Add "+this._data.name};var r=null;AddCustomItemDisplay=function(t){VaultItemDisplay.call(this,new AddCustomItem(t)),r||(r=LPProxy.getRecordConfig().icons.custom,r+=" menuIcon")},AddCustomItemDisplay.prototype=Object.create(VaultItemDisplay.prototype),AddCustomItemDisplay.prototype.constructor=AddCustomItemDisplay,AddCustomItemDisplay.prototype.build=function(t){var e=LPTools.createElement("li",{class:"extensionMenuItem omariaMenuItem addOmariaItem"});return e.appendChild(LPTools.createElement("i",r)),e.appendChild(LPTools.createElement("span","name",this._model.getName())),e},AddCustomItemDisplay.prototype.handleClickEvent=function(t,e){bg.LPPlatform.openTabDialog("note",{defaultData:{notetype:"Custom_"+this._model._data.id}})}}();
//# sourceMappingURL=sourcemaps/extensionModel.js.map
