function LP_humanizeClick(e,_,t){if(!e&&_&&(e=_.ownerDocument),e||(e=LP_derive_doc()),!e)return!1;t||(t={}),_||(_=e.body);var i=0;g_isie&&init_LPfn()&&LPfn&&(i=LPfn.getDocumentMode(e));var o=void 0!==t.dofocus&&t.dofocus,n,r,l=0;if(l=void 0!==t.button?t.button:g_isie&&i<=8?1:0,void 0!==t.posx&&void 0!==t.posy)n=t.posx,r=t.posy;else{var s=LP_getAbsolutePos(e,_);if(!s)return!1;r=(s.top+s.height)/2,n=(s.left+s.width)/2}if(isNaN(n)||isNaN(r))return!1;var a={evt_class:"MouseEvent",button:l,posx:n,posy:r};return void 0!==t.dofocus&&t.dofocus&&_.focus(),LP_fireEvent(_,"mousedown","MouseEvent",a),LP_fireEvent(_,"mouseup","MouseEvent",a),LP_fireEvent(_,"click","MouseEvent",a),!0}function LP_humanizeMoveTo(e,_,t){}var g_draggable=!0,g_is_dragging=!1,g_drag_lastX=null,g_drag_lastY=null,g_pos_delx=0,g_pos_dely=0,LP_DRAG_NODRAG=0,LP_DRAG_MOVE=1,LP_DRAG_RESIZE=2,g_drag_type=LP_DRAG_NODRAG;function LP_dropHandler(e){}function LP_dragoverHandler(e){}function LP_dragHandler(e){}function LP_mousemoveHandler(e){if(e||(e=window.event),g_draggable&&g_is_dragging&&g_in_lpframe)var _}function LP_mousedownHandler(e){if(e||(e=window.event),g_draggable&&g_in_lpframe){var _=LP_getEventTarget(e),t=LP_getMousePos(e);if(_&&t)switch(_.id){case"superbox":case"superbox_savesite_txt":case"superbox_emptymsg_txt_span":case"superbox_savesite_txt_span":case"SB_iconbox":case"SB_titlebox":g_is_dragging=!0,g_drag_type=LP_DRAG_MOVE,t&&(g_drag_lastX=t.x,g_drag_lastY=t.y);break;case"resize_button":g_is_dragging=!0,g_drag_type=LP_DRAG_RESIZE,t&&(g_drag_lastX=t.x,g_drag_lastY=t.y)}}}function LP_mouseupHandler(e){e||(e=window.event);var _=0,t=0;if(g_draggable&&g_is_dragging&&g_in_lpframe){var i=LP_getMousePos(e);switch(i&&null!==g_drag_lastX&&null!==g_drag_lastY&&(_=i.x-g_drag_lastX,t=i.y-g_drag_lastY,g_drag_lastX=i.x,g_drag_lastY=i.y),g_drag_type){case LP_DRAG_MOVE:g_isie?ie_moveIframe({delx:_,dely:t}):g_isfirefox||cr_moveIframe({delx:_,dely:t});break;case LP_DRAG_RESIZE:g_isie?ie_resizeIframe({delx:_,dely:t}):g_isfirefox||0!=_&&0!=t&&cr_resizeIframe({delx:_,dely:t});break;default:verbose&&alert("UNEXPECTED DRAG"+g_drag_type)}g_is_dragging=!1,g_drag_type=LP_DRAG_NODRAG}}function LP_mouseleaveHandler(e){var _;if(g_in_lpframe&&LP_getEventTarget(e)==doc.body){var t=LP_getMousePos(e);t&&null!==g_drag_lastX&&null!==g_drag_lastY&&(delx=t.x-g_drag_lastX,dely=t.y-g_drag_lastY,g_drag_lastX=t.x,g_drag_lastY=t.y),g_isie?ie_moveIframe({delx:delx,dely:dely}):g_isfirefox||cr_moveIframe({delx:delx,dely:dely}),g_is_dragging=!1}}function LP_addEventHandler(e,_,t){try{if(null==e||null==_||null==t||_.length<=0)return null;if("click"==_||"mousedown"==_||"mouseup"==_||"focus"==_){var i=t;t=function(e){try{if(void 0!==e.isTrusted&&!e.isTrusted)return!0}catch(e){}return i(e)}}return void 0!==e.addEventListener?(e.addEventListener(_,t,!1),t):void 0!==e.attachEvent?e.attachEvent("on"+_,t):null}catch(e){return verbose_log("LP_addEventHandler failed, "+e.message),null}}function LP_stopEventPropagation(e){try{void 0!==e.preventDefault?e.preventDefault():(window.event,window.event.returnValue=!1),void 0!==e.stopPropagation?e.stopPropagation():(window.event,window.event.cancelBubble=!0)}catch(e){verbose_log("LP_stopEventPropagation failed, "+e.message)}}function LP_getEventTarget(e){var _=3,t,i;return void 0===(i=e||window.event)?null:((t=void 0!==i.target?i.target:i.srcElement)&&void 0!==t.nodeType&&3==t.nodeType&&(t=t.parentNode),t)}function LP_getMousePos(e){var _,t,i=LP_getEventTarget(e=e||window.event).ownerDocument;if(!i||null==i.location||i.location.href.indexOf(".xul")>0)return{x:0,y:0};var o=i.documentElement,n=(o.scrollLeft,o.scrollLeft),r=(o.scrollTop,o.scrollTop),l=0,s=0;if(g_bodystyle_relative&&!g_in_lpframe){var a=LP_get_cached_body_rect(i),d=LP_get_cached_body_style(i);a&&d&&"relative"==d.position&&(s=a.left,l=a.top)}if(g_isie)if(g_in_lpframe)verbose&&alert("TODO");else{var a,f=p(i,a=LP_get_cached_body_rect(i));n=f.scrollLeft,r=f.scrollTop}return _=e.pageX||e.clientX+n,t=e.pageY||e.clientY+r,_=parseInt(_),t=parseInt(t),g_bodystyle_relative&&(_-=s,t-=l),{x:_,y:t};function u(e,_){var t=1;if("undefined"!=typeof g_isie&&g_isie&&void 0!==e.querySelector&&void 0===e.addEventListener)return 1;if(_){var i=_,o=i.right-i.left,n=e.body.offsetWidth;t=Math.round(o/n*100)/100}return t}function p(e,_){var t="undefined"!=typeof window&&window?window:e.defaultView;if("pageXOffset"in t)var i=t.pageXOffset,o=t.pageYOffset;else var n=u(e,_),i=Math.round(e.documentElement.scrollLeft/n),o=Math.round(e.documentElement.scrollTop/n);return{scrollLeft:i,scrollTop:o}}}if(void 0===KeyEvent)var KeyEvent={DOM_VK_CANCEL:3,DOM_VK_HELP:6,DOM_VK_BACK_SPACE:8,DOM_VK_TAB:9,DOM_VK_CLEAR:12,DOM_VK_RETURN:13,DOM_VK_ENTER:14,DOM_VK_SHIFT:16,DOM_VK_CONTROL:17,DOM_VK_ALT:18,DOM_VK_PAUSE:19,DOM_VK_CAPS_LOCK:20,DOM_VK_ESCAPE:27,DOM_VK_SPACE:32,DOM_VK_PAGE_UP:33,DOM_VK_PAGE_DOWN:34,DOM_VK_END:35,DOM_VK_HOME:36,DOM_VK_LEFT:37,DOM_VK_UP:38,DOM_VK_RIGHT:39,DOM_VK_DOWN:40,DOM_VK_PRINTSCREEN:44,DOM_VK_INSERT:45,DOM_VK_DELETE:46,DOM_VK_0:48,DOM_VK_1:49,DOM_VK_2:50,DOM_VK_3:51,DOM_VK_4:52,DOM_VK_5:53,DOM_VK_6:54,DOM_VK_7:55,DOM_VK_8:56,DOM_VK_9:57,DOM_VK_SEMICOLON:59,DOM_VK_EQUALS:61,DOM_VK_A:65,DOM_VK_B:66,DOM_VK_C:67,DOM_VK_D:68,DOM_VK_E:69,DOM_VK_F:70,DOM_VK_G:71,DOM_VK_H:72,DOM_VK_I:73,DOM_VK_J:74,DOM_VK_K:75,DOM_VK_L:76,DOM_VK_M:77,DOM_VK_N:78,DOM_VK_O:79,DOM_VK_P:80,DOM_VK_Q:81,DOM_VK_R:82,DOM_VK_S:83,DOM_VK_T:84,DOM_VK_U:85,DOM_VK_V:86,DOM_VK_W:87,DOM_VK_X:88,DOM_VK_Y:89,DOM_VK_Z:90,DOM_VK_WIN:91,DOM_VK_CONTEXT_MENU:93,DOM_VK_NUMPAD0:96,DOM_VK_NUMPAD1:97,DOM_VK_NUMPAD2:98,DOM_VK_NUMPAD3:99,DOM_VK_NUMPAD4:100,DOM_VK_NUMPAD5:101,DOM_VK_NUMPAD6:102,DOM_VK_NUMPAD7:103,DOM_VK_NUMPAD8:104,DOM_VK_NUMPAD9:105,DOM_VK_MULTIPLY:106,DOM_VK_ADD:107,DOM_VK_SEPARATOR:108,DOM_VK_SUBTRACT:109,DOM_VK_DECIMAL:110,DOM_VK_DIVIDE:111,DOM_VK_F1:112,DOM_VK_F2:113,DOM_VK_F3:114,DOM_VK_F4:115,DOM_VK_F5:116,DOM_VK_F6:117,DOM_VK_F7:118,DOM_VK_F8:119,DOM_VK_F9:120,DOM_VK_F10:121,DOM_VK_F11:122,DOM_VK_F12:123,DOM_VK_F13:124,DOM_VK_F14:125,DOM_VK_F15:126,DOM_VK_F16:127,DOM_VK_F17:128,DOM_VK_F18:129,DOM_VK_F19:130,DOM_VK_F20:131,DOM_VK_F21:132,DOM_VK_F22:133,DOM_VK_F23:134,DOM_VK_F24:135,DOM_VK_NUM_LOCK:144,DOM_VK_SCROLL_LOCK:145,DOM_VK_COMMA:188,DOM_VK_PERIOD:190,DOM_VK_SLASH:191,DOM_VK_BACK_QUOTE:192,DOM_VK_OPEN_BRACKET:219,DOM_VK_BACK_SLASH:220,DOM_VK_CLOSE_BRACKET:221,DOM_VK_QUOTE:222,DOM_VK_META:224};function is_modifier_key(e){if(void 0!==KeyEvent){if(e==KeyEvent.DOM_VK_ALT||e==KeyEvent.DOM_VK_SHIFT||e==KeyEvent.DOM_VK_CONTROL||e==KeyEvent.DOM_VK_WIN||e==KeyEvent.DOM_VK_META)return!0}else if(16==e||17==e||18==e||91==e||92==e||224==e)return!0;return!1}var KEY_ESCAPE=27;function LP_keypress_handler(e){e||(e=window.event);var _="undefined"!=typeof document?document:e&&e.target?e.target.ownerDocument:null;if(!_||!_.location||!e)return!1;var t=e.keyCode;return verbose_log("received key "+t),t==KEY_ESCAPE&&is_your_popup_showing(_)&&closepopupfills(_,"close"),!1}var KEY_TAB=9,KEY_UP=38,KEY_DOWN=40,KEY_ENTER=13,KEY_SHIFT=16,KEY_RIGHT=39,KEY_LEFT=37,KEY_PAGEDOWN=34,KEY_PAGEUP=33,KEY_END=35,KEY_HOME=36;function LP_field_keypress_handler(e,_,t,i){var o;if(e||(e=window.event),LP_getloggedin()&&(i||(i="undefined"!=typeof document?document:e&&e.target?e.target.ownerDocument:null),i&&null!=i.location||(i=_.ownerDocument,!g_isfirefox||void 0==typeof LP||i&&null!=i.location||(i=void 0!==LP.lpGetCurrentWindow().getBrowser?LP.lpGetCurrentWindow().getBrowser().contentDocument:LP.getBrowser().contentDocument)),i)){if(null==i.location){verbose_log("LP_field_keypress_handler given a firefox zombie document?");var n=void 0!==LP.lpGetCurrentWindow().getBrowser?LP.lpGetCurrentWindow().getBrowser().contentDocument:LP.getBrowser().contentDocument;return closepopupfills(n),!1}reset_lpsaveforminfo_vars(i);var r=e.keyCode;if(r==KEY_ESCAPE)is_your_popup_showing(i)&&closepopupfills(i,"close");else if(r==KEY_TAB)e.shiftKey||is_your_popup_showing(i)&&closepopupfills(i,"away");else if(r==KEY_DOWN){if(!is_your_popup_showing(i)){set_active_username_password(i,_.form),"undefined"!=typeof g_isie&&g_isie&&"undefined"!=typeof init_LPfn&&init_LPfn()&&LPfn&&LPfn.ie_set_kbdnav(!0);var l=LP_pickFieldName(i,_),s=getIconState(i,l);if(s){var a=!1,d=!1,f=!1;"generate"==s.fillhint&&(a=!0),"formfills"==s.fillhint&&(d=!0),popuptoggle(i,null,s.idorname,a,FORCE_SHOW_NOHITS,!1,d,s.fillhint,s.fillhintnumber)}else{var u=LPMAGIC+LP_pickFieldName(i,_);popuptoggle(i,null,LP_pickFieldName(i,_),NO_FORCE_GENERATE,FORCE_SHOW_NOHITS)}}}else if(r==KEY_UP);else if(r==KEY_SHIFT||0==r);else if(r==KEY_RIGHT&&e.altKey)0;else if(is_modifier_key(r));else if(r==KEY_ENTER);else{if(g_ischrome&&g_setup_hotkey_handler){if(is_hotkey_event(e))return}else if(g_isie){var p="";if(p+=e.ctrlKey?"control ":"",p+=e.metaKey?"meta ":"",p+=e.altKey?"alt ":"",p+=e.shiftKey?"shift ":"",verbose_log("keycode == "+r+" "+p),void 0!==e.metaKey&&e.metaKey||void 0!==e.altKey&&e.altKey||void 0!==e.ctrlKey&&e.ctrlKey)return}else if(g_isfirefox){var p="";if(p+=e.ctrlKey?"control ":"",p+=e.metaKey?"meta ":"",p+=e.altKey?"alt ":"",p+=e.shiftKey?"shift ":"",verbose_log("keycode == "+r+" "+p),is_hotkey_event(i,e))return}if("password"==_.type&&formHasUsernameField(_)){if(!g_clickable_input_on_password)return;is_your_popup_showing(i)||chk_form_ask_generate(i,_.form)||conditional_create_popup(i,_,FORCE_SHOW_NOHITS_NOLOGIN)}var g;if(!chk_form_has_password(i,_.form))return;if(!is_your_popup_showing(i)){if(g_do_icon_number_hint,g_clickable_input_on_password){var c=getIconState(i,LP_pickFieldName(i,_));c&&c.fillhint&&"sites"==c.fillhint&&conditional_create_popup(i,_,FORCE_SHOW_NOHITS_NOLOGIN)}else{var u=LPMAGIC+LP_pickFieldName(i,_);popuptoggle(i,null,LP_pickFieldName(i,_),NO_FORCE_GENERATE,FORCE_SHOW_NOHITS)}g_keyboardNav=!0}}if(is_your_popup_showing(i)){var v;if(r==KEY_UP&&(g_isfirefox?ff_do_popupfocusdecrement(1):g_isie||sendBG({cmd:"popupfillinputfocusdecrement",count:1}),g_keyboardNav=!0,g_ischrome&&g_setup_hotkey_handler&&handle_hotkey(e),LP_stopEventPropagation(e)),r==KEY_DOWN&&(g_extended_kbd_nav&&e.altKey?is_your_popup_showing(i)&&(g_isfirefox||g_isie||sendBG({cmd:"popupfillinputshownavbar"})):(g_isfirefox?ff_do_popupfocusincrement(1):g_isie||sendBG({cmd:"popupfillinputfocusincrement",count:1}),g_keyboardNav=!0),g_ischrome&&g_setup_hotkey_handler&&handle_hotkey(e),LP_stopEventPropagation(e)),r==KEY_ENTER)verbose_log("Enter Received, checking field"),(v=g_isfirefox?i.g_popupfill_parent:g_popupfill_parent)==_&&g_keyboardNav&&(g_isfirefox?(verbose_log("Enter Received, Choose Action"),ff_do_popupfocuschoose(!0)):g_isie||sendBG({cmd:"popupfillinputfocuschoose"}),g_ischrome&&g_setup_hotkey_handler&&handle_hotkey(e),g_isfirefox&&is_hotkey_event(i,e),LP_stopEventPropagation(e));r==KEY_PAGEUP&&(g_isfirefox?ff_do_popupfocusdecrement(12):g_isie||sendBG({cmd:"popupfillinputfocusdecrement",count:12}),g_keyboardNav=!0,g_ischrome&&g_setup_hotkey_handler&&handle_hotkey(e),g_isfirefox&&is_hotkey_event(i,e),LP_stopEventPropagation(e)),r==KEY_PAGEDOWN&&(g_isfirefox?ff_do_popupfocusincrement(12):g_isie||sendBG({cmd:"popupfillinputfocusincrement",count:12}),g_keyboardNav=!0,g_ischrome&&g_setup_hotkey_handler&&handle_hotkey(e),g_isfirefox&&is_hotkey_event(i,e),LP_stopEventPropagation(e)),r==KEY_END&&(g_isfirefox?ff_do_popupfocusincrement(1073741824):g_isie||sendBG({cmd:"popupfillinputfocusincrement",count:1073741824}),g_keyboardNav=!0),r==KEY_HOME&&(g_isfirefox?ff_do_popupfocusdecrement(1073741824):g_isie||sendBG({cmd:"popupfillinputfocusdecrement",count:1073741824}),g_keyboardNav=!0)}return!1}}function LP_didFieldClickEvent(e,_){return!(!e||!_)&&1==(1&LP_getBits(e,_));var t}function LP_didFieldMouseEvent(e,_){return!(!e||!_)&&2==(2&LP_getBits(e,_));var t}function LP_didFieldKeyEvent(e,_){return!(!e||!_)&&4==(4&LP_getBits(e,_));var t}function LP_didDocumentEscapeEvent(e){if(!e)return!1;var _=e.body,t;return null==_&&(_=e.documentElement),8==(8&LP_getBits(e,_))}function LP_setFieldClickEvent(e,_){if(!e||!_)return!1;var t=LP_getBits(e,_);return LP_setBits(e,_,t|=1),!0}function LP_setFieldMouseEvent(e,_){if(!e||!_)return!1;var t=LP_getBits(e,_);return LP_setBits(e,_,t|=2),!0}function LP_setFieldKeyEvent(e,_){if(!e||!_)return!1;var t=LP_getBits(e,_);return LP_setBits(e,_,t|=4),!0}function LP_setBits(e,_,t){if(!e||!_)return!1;if(void 0!==t&&null!==t||(t=0),g_isie){if(init_LPfn()&&LPfn)return LPfn.ie_set_lpstates(_,t)}else{var i=LP_pickFieldName(e,_);verbose_log("lpsetbits "+i+" = "+t),e.lpstates[i]=t}return!0}function LP_getBits(e,_){if(!e||!_)return 0;var t=0;if(g_isie)init_LPfn()&&LPfn&&(t=LPfn.ie_get_lpstates(_));else{e.lpstates||(e.lpstates={});var i=e.lpstates,o=LP_pickFieldName(e,_);verbose_log("lpstates for "+o+" == "+i[o]),t=void 0!==i[o]?i[o]:0}return t}function LP_setDocumentEscapeEvent(e){if(!e)return!1;var _=e.body;null==_&&(_=e.documentElement);var t=LP_setBits(e,_);return LP_setBits(e,_,t|=8)}function LP_resetAllBits(e){return!!e&&(g_isie?!(!init_LPfn()||!LPfn)&&LPfn.ie_reset_lpstates():(e.lpstates={},!0))}function lp_docinfoFromEvent(e){var _=null;_="undefined"!=typeof LP&&"function"==typeof LP.lpGetCurrentWindow?void 0!==LP.lpGetCurrentWindow().getBrowser?LP.lpGetCurrentWindow().getBrowser().contentDocument:LP.getBrowser().contentDocument:g_isfirefox?top.document:document;var t=null,i=LP_getEventTarget(e).ownerDocument;if(i!=_){t=i;try{verbose&&t&&t.location&&verbose_log("click inside iframe "+t.location.href)}catch(e){pass}}var o=LP_getEventTarget(e),n;return{topdoc:_,framedoc:t,eventdoc:i,target:o,targetname:LP_pickFieldName(i,o)}}function icon_click_handler(e){var _=lp_docinfoFromEvent(e),t=_.topdoc,i=_.framedoc,o=_.eventdoc,n=_.target,r=_.targetname,l=!1,s=LP_getMousePos(e),a,d,f,u,p,p;if(s.x<=0&&s.y<=0)return!!(o&&o.location&&o.location.href&&o.location.href.indexOf(".xul")>0)||void 0;try{var g;if(t&&t.body)if(t.body.getAttribute("data-fouc-class-names")&&t.body.getAttribute("data-fouc-class-names").indexOf("swift-loading")>=0)getAllIconStates().length>0?refresh_input_all_icon_bg(t):window&&window.setTimeout(function(){g_input_cnt=-1,doc_create_clickable_icons(t,"",SHOULD_DO_ALWAYS,g_is_specialsite)},50)}catch(e){}var a=getAllIconStates(),c,v,m,O;for(c=0;c<a.length;c++){var f="";if(O=null,m=a[c],g_isfirefox&&m.inframe)i?((O=a[c].IHTMLElement)||(O=LP_getElementByIdOrName(i,m.idorname)),O&&(f=m.idorname)):(O=a[c].IHTMLElement)&&(i=O.ownerDocument);else if(""!=r&&r==m.idorname){if(n!=a[c].IHTMLElement){var D=!1;for(v=c;v<a.length;v++)if(n==a[v].IHTMLElement){D=!0;break}if(D)continue;if(n&&a[c].IHTMLElement&&(n.tagName!=a[c].IHTMLElement.tagName||n.type!=a[c].IHTMLElement.type)){verbose_log("page click name/id collision");continue}}O=n}else(O=a[c].IHTMLElement)?a[c].dofloater?r==LPMAGIC+m.idorname||r==LPMAGIC+m.idorname+"_icon"||r==LPMAGIC+m.idorname+"_numspan"?((O=a[c].IHTMLElement)||(O=LP_getElementByIdOrName(t,m.idorname)),O&&(f=m.idorname)):pass:O!==n&&(O=null):(O=LP_getElementByIdOrName(t,m.idorname))&&!popupfill_shoulddofield(t,O,SHOULD_DO_ALWAYS)&&(O=null),O&&(f=m.idorname);if(i){if(O&&checkIsDisplayed(i,O,0)){var K;if(!(K=LP_getAbsolutePos(i,O))||K.width<=0&&K.height<=0){verbose_log("skipping field "+m.idorname+" : no valid position");continue}var E=!1;if(m.text_direction==E)var P=K.left,M=K.left+20;else{var P=K.left+K.width-20,M=K.left+K.width;P<K.left&&(P=K.left)}if(P<s.x&&M>s.x&&K.top<s.y&&K.top+K.height>s.y){var L=!1,y=!0,h=!1,V=!1;verbose_log("icon_click_handler calling popuptoggle() [iframe]"),"generate"==m.fillhint?L=!0:m.no_check_generate||(L=shouldOfferGenerate(i,O)),"formfills"==m.fillhint&&(V=!0),t.g_popupfill_parent=O,popuptoggle(t,i,m.idorname,L,y,h,V,m.fillhint,m.fillhintnumber),l=!0,LP_stopEventPropagation(e);break}}}else if(O&&checkIsDisplayed(t,O,0)){if("INPUT"==O.nodeName&&("checkbox"==O.type||"radio"==O.type)){verbose_log("skipping field "+m.idorname+" : is not text-like");continue}var K;if(!(K=LP_getAbsolutePos(t,O))||K.width<=0&&K.height<=0){verbose_log("skipping field "+m.idorname+" : no valid position");continue}var E=!1;if(m.text_direction==E)var P=K.left,M=K.left+20;else{var P=K.left+K.width-20,M=K.left+K.width;P<K.left&&(P=K.left)}var k=0,w;if(document.location.href.indexOf("https://mint.intuit.com/login.event?task=S")>-1&&(k=30),P-k<s.x&&M>s.x&&K.top<s.y&&K.top+K.height>s.y){var L=!1,y=!0,h=!1,V=!1;"generate"==m.fillhint?(L=!0,m.fillhintnumber||(m.fillhintnumber=1)):m.no_check_generate||(L=shouldOfferGenerate(t,O)),"formfills"==m.fillhint&&(V=!0),t.g_popupfill_parent=O,popuptoggle(t,i,m.idorname,L,y,h,V,m.fillhint,m.fillhintnumber,O),l=!0,LP_stopEventPropagation(e);break}}else verbose_log("skipping field "+m.idorname+" : not found/visible")}return l}function onresize_handler(e){var _="undefined"!=typeof document?document:e.target.document,t=_.getElementsByTagName("body")[0];_.g_posbodyrect_cache=t.getBoundingClientRect();var i="undefined"!=typeof window&&window?window:_.defaultView;return i&&void 0!==i.getComputedStyle?_.g_posbodystyle_cache=i.getComputedStyle(t,null):_.g_posbodystyle_cache=t.currentStyle,popupfill_resize(_),!1}function handle_form_text_change(e,_,t,i){if(do_experimental_popupfill){if(!e&&!(e=LP_derive_doc()))return null;if(e&&_&&popupfill_shoulddofield(e,_,SHOULD_DO_ALWAYS)&&should_track_field_onkeyup(_)&&update_preobfuscate_field_value(_),!(null==t||null==_||null==i||null==i.keyCode||0==i.keyCode|16==i.keyCode)&&(!t||popupfill_shoulddoform(e,t))&&popupfill_shoulddofield(e,_,SHOULD_DO_ALWAYS)){var o=_.value,n=LP_pickFieldName(e,_);if(g_clickable_input_on_password){var r=g_popup_active_username,l=g_popup_active_password;null==r&&(r=void 0===_.form||null==_.form?doc_get_orphan_username(e):form_get_username(e,_.form)),null==l&&(l=void 0===_.form||null==_.form?doc_get_orphan_password(e):form_get_password(e,_.form));var s=checkDocumentForLoginOrphans(e)||checkDocumentForLoginOrphansFirstStage(e),a=checkDocumentForCPWOrphans(e),d=s||chk_form_has_password(e,t),f=a||chk_form_is_nonlogin_form(e,t),u=chk_form_ask_generate(e,t);if(!r||!l||!d&&!u||f)return void(g_isie||(verbose_log('KEYPASS6 formfill? username=""'),g_isfirefox?ff_do_popupinputupdate(""):sendBG({cmd:"popupfillinputsave",inputstr:"",inputid:n})));if(_!=r)return _==l?(g_isie||(o=r.value,g_isfirefox||sendBG({cmd:"popupfillinputsave",inputstr:o,inputid:n,inputtype:"password"})),void verbose_log("KEYPASS4 username="+o)):(g_isie||(g_isfirefox?i&&i.keyCode&&i.keyCode!=KEY_TAB&&i.keyCode!=KEY_UP&&i.keyCode!=KEY_DOWN&&i.keyCode!=KEY_SHIFT&&i.keyCode!=KEY_LEFT&&i.keyCode!=KEY_RIGHT&&ff_do_popupinputupdate(""):sendBG({cmd:"popupfillinputsave",inputstr:"",inputid:n})),void verbose_log('KEYPASS5 username=""'))}if(null==o||0==o.length)return g_isie||(g_isfirefox?ff_do_popupinputupdate(""):sendBG({cmd:"popupfillinputsave",inputstr:"",inputid:n})),void verbose_log("KEYPASS7 empty username");if(!(E(g_autofillsites)<=0)||g_change_icon_on_input){var p=0,g=null;for(var c in g_autofillsites)void 0!==g_autofillsites[c].useusername&&0==g_autofillsites[c].useusername.indexOf(o)&&(p++,g=g_autofillsites[c]);if(1!=p){g_isie||(g_isfirefox?ff_do_popupinputupdate(o):sendBG({cmd:"popupfillinputsave",inputstr:o,inputid:n,inputtype:_.type,issaveall:issaveall(t)})),verbose_log("KEYPASS9 match>1 username="+o);var d=chk_form_has_password(e,t),v=!1;if(g_change_icon_on_input){var m=t.elements;if("undefined"==typeof Math)return;var O=Math.floor(1e4*Math.random());if(null!=m)for(var D=0;D<m.length;D++){var K=m[D];if(checkIsDisplayed(e,K,0,null,O)&&isInputFieldPassword(e,K)&&null!=K.value&&K.value.length>0){v=!0;break}}}}else do_autofill_if_matched?g_isie||(g_isfirefox?ff_autofill(e,g.aid):sendBG({cmd:"autofillaid",aid:g.aid})):(g_isie||(g_isfirefox?ff_do_popupinputupdate(o):sendBG({cmd:"popupfillinputsave",inputstr:o,inputid:n,inputtype:_.type,issaveall:issaveall(t)})),verbose_log("KEYPASS8 match>0 username="+o))}}}function E(e){var _=0;for(var t in e)_++;return _}}
//# sourceMappingURL=sourcemaps/events_cs.js.map
