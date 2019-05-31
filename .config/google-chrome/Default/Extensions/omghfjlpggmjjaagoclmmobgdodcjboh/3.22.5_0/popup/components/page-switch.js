define(["exports", "./head.js", "../tools/sendMessage.js"], function (_exports, _head, _sendMessage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.$keydownListenerDefault = keydownListener;
  _exports.$weightedRandomDefault = _exports.$webrtcDefault = _exports.$timezoneChangeDefault = _exports.$storageDefault = _exports.$logDefault = _exports.$createElementDefault = _exports.$ShowedOffersDefault = _exports.$DeferredDefault = _exports.$mainIndexTemplateDefault = _exports.$loginTemplateDefault = _exports.$settingsTemplateDefault = _exports.$menuTemplateDefault = _exports.$locationsTemplateDefault = _exports.$elementTemplateDefault = _exports.$computeCountriesDefault = _exports.$homeTemplateDefault = _exports.$promoTemplateDefault = _exports.$filtersTemplateDefault = _exports.DomRepeat = _exports.$weightedRandom = _exports.$webrtc = _exports.$timezoneChange = _exports.$storage = _exports.$log = _exports.$createElement = _exports.$ShowedOffers = _exports.$Deferred = _exports.$mainIndexTemplate = _exports.$loginTemplate = _exports.$settingsTemplate = _exports.$menuTemplate = _exports.$locationsTemplate = _exports.$keydownListener = _exports.$elementTemplate = _exports.$computeCountries = _exports.$homeTemplate = _exports.$promoTemplate = _exports.$filtersTemplate = _exports.$domRepeat = void 0;

  function _templateObject14_b935ea005b8f11e9b4dd99419b6c54c8() {
    var data = babelHelpers.taggedTemplateLiteral(["\n    <style include=\"global-style\">\n    :host{\n      display: block;\n      overflow: hidden;\n      position: absolute;\n      top:56px;\n      width: 100%;\n      bottom:0px;\n      left:0px;\n      text-align: left;\n    }\n    :host > .In{\n      width: 100%;\n      height: 100%;\n      white-space: nowrap;\n    }\n    :host > .In > *{\n      width: 100%;\n      height: 100%;\n      position: relative;\n      display:inline-block;\n      vertical-align:top;\n      white-space:normal;\n      overflow: hidden;\n    }\n    </style>\n\n    <div class=\"In\"></div>\n    "]);

    _templateObject14_b935ea005b8f11e9b4dd99419b6c54c8 = function _templateObject14_b935ea005b8f11e9b4dd99419b6c54c8() {
      return data;
    };

    return data;
  }

  function _templateObject13_b935ea005b8f11e9b4dd99419b6c54c8() {
    var data = babelHelpers.taggedTemplateLiteral(["\n    <style include=\"global-style\">\n    :host{\n      display: block;\n      width: 61px;\n      height: 26px;\n      cursor: pointer;\n      position: relative;\n    }\n    :host *{\n      cursor: pointer;\n    }\n    .BackgroundText{\n      display: block;\n      background: #994136;\n      border-radius: 13px;\n      width: 61px;\n      height: 26px;\n      line-height: 26px;\n      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12) inset, 0 0 2px rgba(0, 0, 0, 0.15) inset;\n      font-size: 13px;\n      height: inherit;\n      position: relative;\n      text-transform: uppercase;\n      transition: all 0.15s ease-out 0s;\n    }\n    .BackgroundText_Off,\n    .BackgroundText_On{\n      position: absolute;\n      top: 0;\n      transition: inherit;\n    }\n    .BackgroundText_Off{\n      color: #fff;\n      right: 8px;\n    }\n    .BackgroundText_On{\n      color: white;\n      left: 11px;\n      opacity: 0;\n      text-shadow: 0 1px rgba(0, 0, 0, 0.2);\n    }\n    :host(.on) .BackgroundText{\n      background: #3b9946;\n      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15) inset, 0 0 3px rgba(0, 0, 0, 0.2) inset;\n    }\n    :host(.on) .BackgroundText_Off{\n      opacity: 0;\n    }\n    :host(.on) .BackgroundText_On{\n      opacity: 1;\n    }\n\n    .Circle{\n      background: #fff;\n      border-radius: 11px;\n      height: 22px;\n      width: 22px;\n      left: 2px;\n      position: absolute;\n      top: 2px;\n      transition: left 0.15s ease-out 0s;\n    }\n    .Circle:before{\n      content: \"\";\n      background: #f9f9f9 linear-gradient(to bottom, #eeeeee, white) repeat scroll 0 0;\n      border-radius: 6px;\n      box-shadow: 0 1px rgba(0, 0, 0, 0.02) inset;\n      height: 12px;\n      left: 50%;\n      margin: -6px 0 0 -6px;\n      position: absolute;\n      top: 50%;\n      width: 12px;\n    }\n    :host(.on) .Circle{\n      box-shadow: -1px 1px 5px rgba(0, 0, 0, 0.2);\n      left: 37px; /* left: auto; right: 2px; */\n    }\n    </style>\n\n    <div class=\"BackgroundText\">\n      <div class=\"BackgroundText_Off\">[[translations.off]]</div>\n      <div class=\"BackgroundText_On\">[[translations.on]]</div>\n    </div>\n    <div class=\"Circle\"></div>\n    "]);

    _templateObject13_b935ea005b8f11e9b4dd99419b6c54c8 = function _templateObject13_b935ea005b8f11e9b4dd99419b6c54c8() {
      return data;
    };

    return data;
  }

  function _templateObject12_b935ea005b8f11e9b4dd99419b6c54c8() {
    var data = babelHelpers.taggedTemplateLiteral(["\n<style include=\"global-style\">\n.Foot{\n  height: 38px;\n  padding: 0 10px;\n  border-top: 1px solid #bcbcbc;\n  background: #f5f5f5;\n  position: absolute;\n  right:0px;bottom:0px;left:0px;\n}\n.Foot:after{\n  content:' ';\n  display:block;\n  clear:both;\n  width:0;height:0;\n  overflow:hidden;\n  font-size:0;\n}\n.Foot c-switch{\n  margin: 7px 0 0;\n  float: right;\n}\n\n.Switch{\n  position: absolute;\n  top:0px;bottom:38px;left:0px;\n  width: 100%;\n  white-space: nowrap;\n}\n.Switch > *{\n  display:inline-block;\n  vertical-align:top;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  overflow: hidden;\n  white-space: normal;\n}\n\n.Help{\n  float: right;\n  position: relative;\n  margin-top: 12px;\n  padding-left: 19px;\n  cursor: pointer;\n  font-size: 12px;\n  line-height: 18px;\n  color: #3b9946;\n}\n.Help:after{\n  content: '';\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 50%;\n  margin-top: -7px;\n  background: url('/images/menu_icons.png') 0 -100px no-repeat;\n  width: 14px;\n  overflow:hidden;font-size:0;text-indent:-9999px;height:0;\n  padding-top:14px;\n}\n.Help:hover:after{\n  background-position: 0 -150px;\n}\n</style>\n\n<div class=\"Switch\">\n  <index-home></index-home>\n</div>\n\n<div class=\"Foot\">\n  <template is=\"dom-if\" if=\"[[switchVisible]]\">\n    <c-switch on-click=\"switchClick\" on=\"[[switchOn]]\"></c-switch>\n  </template>\n  <template is=\"dom-if\" if=\"[[helpVisible]]\">\n    <div class=\"Help\" on-click=\"openHelp\">[[translations.help]]</div>\n  </template>\n  <index-menu></index-menu>\n</div>\n"]);

    _templateObject12_b935ea005b8f11e9b4dd99419b6c54c8 = function _templateObject12_b935ea005b8f11e9b4dd99419b6c54c8() {
      return data;
    };

    return data;
  }

  function _templateObject11_b935ea005b8f11e9b4dd99419b6c54c8() {
    var data = babelHelpers.taggedTemplateLiteral(["\n<style include=\"global-style\">\na:hover{\n  text-decoration: none;\n}\n\n:host{\n  display: block;\n}\n\n.Login{\n  padding: 38px 12px 2px;\n  font-size: 14px;\n  min-height: 140px;\n  height: 318px;\n  font-size: 11px;\n}\n\n.Title{\n  font-size: 20px;\n  font-weight: 500;\n  text-align: center;\n}\n.Title:after{\n  display: block;\n  content: '';\n  width: 100px;\n  margin: 0 auto;\n  overflow:hidden;font-size:0;text-indent:-9999px;height:0;padding-top:20px;\n  border-bottom: 4px solid #3d973f;\n}\n\n.Notice {\n  position: absolute;\n  font-size: 13px;\n  color: #090;\n  top: -24px;\n  width: 100%;\n  left: -2px;\n}\n.Error {\n  position: absolute;\n  bottom: calc(100% + 6px);\n  left: 20px;\n  right: 20px;\n  font-size: 13px;\n  color: #900;\n  text-align: center;\n}\n\n.Login input[type=\"text\"],\n.Login input[type=\"password\"] {\n  font:100% arial,sans-serif;\n  vertical-align:middle;\n  outline:none;\n  width: 315px;\n  margin: 1px 0px;\n  height: 36px;\n  border-radius: 5px;\n  padding: 1px 10px;\n  font-size: 15px;\n  outline: none;\n  background: #f5f5f5;\n  border: 1px #7b7c80 solid;\n  color: #1c304e;\n}\n.Login input[type=\"text\"]::placeholder,\n.Login input[type=\"password\"]::placeholder {\n  color: #9b9c9e;\n}\n.Login input[type=\"text\"].invalid,\n.Login input[type=\"password\"].invalid{\n  border: 1px solid #900;\n}\n.Login input[type=\"text\"].invalid:focus,\n.Login input[type=\"password\"].invalid:focus{\n  outline: none;\n}\n\n.Login_Form{\n  margin:0;\n  padding:0;\n  border-style:none;\n  margin-top: 46px;\n  text-align: center;\n  padding: 0 20px;\n  position:relative;\n}\n\n\n.Login_Row{\n  width:100%;\n  padding: 0 0 14px;\n}\n.Login_Row:after{\n  display:block;\n  clear:both;\n  content:'';\n}\n.Login_Row label{\n  box-sizing: border-box;\n  display: inline-block;\n  min-width: 100px;\n  padding: 6px 5px 0 0;\n}\n\n.Login_ForgotPassword {\n  color: #1c304e;\n  font-size: 12px;\n  line-height: 1;\n  margin-top: 3px;\n  float: right;\n}\n\n.Login_Button{\n  margin-top: 18px;\n}\n\n.Login_Button > .In{\n  display: inline-block;\n  vertical-align: top;\n  position: relative;\n}\n.Login_Button.loading > .In::after{\n  content: '';\n  display: block;\n  position: absolute;\n  left: 12px;\n  top: calc(50% - 12px);\n  width: 24px;\n  padding-top: 24px;\n  overflow: hidden;\n  height: 0;\n  background: url('/images/loader.gif') 0 0 no-repeat;\n}\n.Login_Button button{\n  box-sizing: border-box;\n  display: inline-block;\n  border: 0;\n  border-radius: 5px;\n  position:relative;\n  background-color: #1c304e;\n  color:#fff;\n  text-align:center;\n  font-family: inherit;\n  font-weight: 400;\n  padding: 2px 12px;\n  font-size: 18px;\n  line-height: 30px;\n\n  height: 45px;\n  cursor:pointer;\n  min-width: 190px;\n}\n\n.Login_Register {\n  margin-top: 7px;\n  font-size: 12px;\n}\n.Login_Register a {\n  color: #1c304e;\n}\n</style>\n\n<div class=\"Login\">\n  <div class=\"Title\">[[translations.signIn]]</div>\n  <form class=\"Login_Form\" action=\"#\" on-submit=\"formSubmit\">\n    <template id=\"ifNotice\" is=\"dom-if\" if=\"[[notice]]\">\n      <div class=\"Notice\">[[notice]]</div>\n    </template>\n    <template id=\"ifError\" is=\"dom-if\" if=\"[[error]]\">\n      <div class=\"Error\"></div>\n    </template>\n\n    <div class=\"Login_Row\">\n      <input class$=\"[[conditionInputClass(error)]]\" type=\"text\" size=\"30\" name=\"email\" autofocus placeholder=\"[[translations.email]]\">\n    </div>\n    <div class=\"Login_Row\">\n      <input class$=\"[[conditionInputClass(error)]]\" type=\"password\" size=\"30\" name=\"password\" placeholder=\"[[translations.password]]\">\n      <a href=\"[[links.resetPassword]]\" class=\"Login_ForgotPassword\" target=\"_blank\">\n        [[translations.forgotYourPassword]]\n      </a>\n    </div>\n    <div class=\"Login_Row\">\n      <div class$=\"[[buttonClass(loading)]]\"><div class=\"In\">\n        <button>[[translations.logIn]]</button>\n      </div></div>\n\n      <div class=\"Login_Register\">\n        [[translations.dontHaveAnAccount]]\n        <a href=\"[[links.signUp]]\" target=\"_blank\">\n          [[translations.signUp]]\n        </a>\n      </div>\n    </div>\n  </form>\n</div>\n"]);

    _templateObject11_b935ea005b8f11e9b4dd99419b6c54c8 = function _templateObject11_b935ea005b8f11e9b4dd99419b6c54c8() {
      return data;
    };

    return data;
  }

  function _templateObject10_b935ea005b8f11e9b4dd99419b6c54c8() {
    var data = babelHelpers.taggedTemplateLiteral(["\n<style include=\"global-style\">\n.Checkboxes{\n  padding: 17px 0 25px;\n  font-size: 16px;\n}\n.Checkboxes > .E{\n  position: relative;\n  padding: 8px 20px;\n}\n.Checkboxes > .E.disabled{\n  opacity: 0.5;\n}\n.Checkboxes > .E.highlighted{\n  background: #f0f5f0;\n}\n.Checkboxes > .E > .In{\n  display:inline-block;vertical-align:top;\n  padding-right: 25px;\n}\n.Checkboxes > .E > .In:after{\n  content:' ';clear:both;display:block;width:0;height:0;overflow:hidden;font-size:0;\n}\n.Checkboxes > .E > .In > checkbox-switch{\n  float: left;\n}\n.Checkboxes > .E > .In > .R{\n  display: block;\n  margin-left: 55px;\n}\n\n.Information{\n  display:inline-block;\n  vertical-align:top;\n  background: url('/images/information_icon.png') 0 0 no-repeat;\n  width: 16px;\n  padding-top: 16px;\n  overflow:hidden;font-size:0;text-indent:-9999px;height:0;\n  cursor: pointer;\n  margin: 4px 0 0 10px;\n}\n.Information:hover{\n  background-position-y: -50px;\n}\n\n.Crown{\n  background: url('/images/crown.png') 0 0 no-repeat;\n  width: 18px;\n  overflow:hidden;font-size:0;text-indent:-9999px;height:0;\n  padding-top:18px;\n  position: absolute;\n  right: 20px;\n  top: 10px;\n}\n\n.Error{\n  clear: both;\n  padding: 2px 0 0 55px;\n  color: #c00;\n  font-size: 12px;\n}\n</style>\n\n<div class=\"Checkboxes\">\n  <template is=\"dom-if\" if=\"[[webrtcAvailable]]\">\n    <div class$=\"E [[webrtcNotEnoughPermissionsClass]]\"><div class=\"In\">\n      <checkbox-switch\n        checked=[[webrtcBlocked]]\n        on-click=\"changeWebrtc\">\n      </checkbox-switch>\n      <div class=\"R\">\n        <label on-click=\"changeWebrtc\">[[translations.useBrowsecForWebrtcConnections]]</label><!--\n     --><div class=\"Information\" on-click=\"showWebrtcHelp\"></div>\n      </div>\n      <template is=\"dom-if\" if=\"[[webrtcBlockedByOtherExtension]]\">\n        <div class=\"Error\">\n          [[translations.webrtcSettingsControlledByAnotherExtension]]\n        </div>\n      </template>\n    </div></div>\n  </template>\n\n  <div class$=\"E [[changeDateDisabledClass]] [[changeDateFirstTimeClass]]\"><div class=\"In\">\n    <checkbox-switch\n      checked=[[hideDate]]\n      data-changedate=\"true\"\n      on-mouseover=\"changeDateMouseover\"\n      on-click=\"changeDate\">\n    </checkbox-switch>\n    <div class=\"R\">\n      <label\n        data-changedate=\"true\"\n        on-mouseover=\"changeDateMouseover\"\n        on-click=\"changeDate\"><!--\n     -->[[translations.changeTimezoneByVirtualLocation]]<!--\n   --></label><!--\n   --><div class=\"Information\" on-click=\"showDateHelp\"></div>\n    </div>\n    <div class=\"Crown\"></div>\n  </div></div>\n</div>\n"]);

    _templateObject10_b935ea005b8f11e9b4dd99419b6c54c8 = function _templateObject10_b935ea005b8f11e9b4dd99419b6c54c8() {
      return data;
    };

    return data;
  }

  function _templateObject9_b935ea005b8f11e9b4dd99419b6c54c8() {
    var data = babelHelpers.taggedTemplateLiteral(["\n<style include=\"global-style\">\na:link,\na:visited{\n  text-decoration: none;\n  cursor: pointer;\n  color: #7a7c7f;\n}\na:hover{\n  text-decoration: none;\n  color: #3b9946;\n}\n\n:host{\n  display: block;\n  padding-top: 6px;\n  margin-right: 70px;\n}\n:host > .E{\n  display:inline-block;\n  vertical-align:top;\n  position: relative;\n  color: #7a7c7f;\n  cursor: pointer;\n  font-size: 12px;\n  line-height: 30px;\n  margin: 0 0 0 17px;\n  padding: 0 0 0 16px;\n}\n:host > .E:hover{\n  color: #3b9946;\n}\n:host > .E:first-of-type{\n  margin-left: 0;\n}\n\n:host > .E::before{\n  font-size: 14px;\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  line-height: 30px;\n}\n:host > .E.home::before{\n  font-family: 'Browsec_extention_Font';\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n:host > .E.home::before{\n  content: \"\\e901\";\n}\n\n:host > .E.selected{\n  color: #3b9946;\n  cursor: default;\n}\n\n:host > .E.smartSettings{\n  padding-left: 0;\n  position: relative;\n  padding-right: 21px;\n}\n:host > .E.smartSettings::before{\n  content: '';\n  display:inline-block;vertical-align:middle;\n  background: url('/images/menu_icons.png') 0 0 no-repeat;\n  width: 14px;\n  overflow:hidden;font-size:0;text-indent:-9999px;height:0;\n  padding-top:11px;\n  position: static;\n  margin-top: -3px;\n  padding-right: 3px;\n}\n:host > .E.smartSettings:after{\n  content: '';\n  display: block;\n  background: url('/images/beta.png') 0 0 no-repeat;\n  position: absolute;\n  right: 0;\n  top: 50%;\n  margin-top: -16px;\n  width: 18px;\n  overflow:hidden;font-size:0;text-indent:-9999px;height:0;padding-top:18px;\n}\n:host > .E.smartSettings.selected::before,\n:host > .E.smartSettings:hover::before{\n  background-position: 0 -50px;\n}\n\n:host > .E.icon{\n  width: 32px;\n  min-height: 30px;\n  padding-left: 0;\n}\n:host > .E.icon a{\n  display: block;\n  width: 32px;\n  height: 0;\n  padding-top: 32px;\n  overflow: hidden;\n  position: absolute;\n  left: 0;\n  top: calc(50% - 16px);\n  margin-top: -1px;\n  border-radius: 50%;\n}\n:host > .E.icon a::before{\n  content: '';\n  display: block;\n  position: absolute;\n}\n:host > .E.icon a:focus{\n  background-color: #e6e6e6;\n}\n\n:host > .E.support{\n  margin-left: 7px;\n}\n:host > .E.support a:before{\n  background: url('/images/menu_icons.png') 0 -200px no-repeat;\n  width: 12px;\n  overflow: hidden;\n  padding-top: 9px;\n  height: 0;\n  top: calc(50% - 4px);\n  left: calc(50% - 6px);\n  margin-top: 1px;\n}\n:host > .E.support a:hover:before{\n  background-position-y: -250px;\n}\n\n:host > .E.facebook{\n  margin-left: 0;\n}\n:host > .E.facebook a::before{\n  background: url('/images/menu_icons.png') 0 -300px no-repeat;\n  width: 8px;\n  overflow: hidden;\n  padding-top: 14px;\n  height: 0;\n  position: absolute;\n  top: calc(50% - 7px);\n  left: calc(50% - 4px);\n  margin-top: 1px;\n}\n:host > .E.facebook a:hover::before{\n  background-position-y: -350px;\n}\n</style>\n\n<div class$=\"E home [[iconConditionClass(homePage)]]\" on-click=\"goHome\">\n  [[translations.home]]\n</div>\n<div\n  class$=\"E smartSettings [[iconConditionClass(filtersPage)]]\"\n  on-click=\"openSettings\"\n  on-contextmenu=\"openSettings\">\n  [[translations.smartSettings]]\n</div>\n<div class=\"E icon support\">\n  <a href$=\"[[contactUsUrl]]\" target=\"_blank\">\n    [[translations.contactUs]]\n  </a>\n</div>\n<div class=\"E icon facebook\">\n  <a href$=\"[[facebookUrl]]\" target=\"_blank\">Facebook</a>\n</div>\n"], ["\n<style include=\"global-style\">\na:link,\na:visited{\n  text-decoration: none;\n  cursor: pointer;\n  color: #7a7c7f;\n}\na:hover{\n  text-decoration: none;\n  color: #3b9946;\n}\n\n:host{\n  display: block;\n  padding-top: 6px;\n  margin-right: 70px;\n}\n:host > .E{\n  display:inline-block;\n  vertical-align:top;\n  position: relative;\n  color: #7a7c7f;\n  cursor: pointer;\n  font-size: 12px;\n  line-height: 30px;\n  margin: 0 0 0 17px;\n  padding: 0 0 0 16px;\n}\n:host > .E:hover{\n  color: #3b9946;\n}\n:host > .E:first-of-type{\n  margin-left: 0;\n}\n\n:host > .E::before{\n  font-size: 14px;\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  line-height: 30px;\n}\n:host > .E.home::before{\n  font-family: 'Browsec_extention_Font';\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n:host > .E.home::before{\n  content: \"\\\\e901\";\n}\n\n:host > .E.selected{\n  color: #3b9946;\n  cursor: default;\n}\n\n:host > .E.smartSettings{\n  padding-left: 0;\n  position: relative;\n  padding-right: 21px;\n}\n:host > .E.smartSettings::before{\n  content: '';\n  display:inline-block;vertical-align:middle;\n  background: url('/images/menu_icons.png') 0 0 no-repeat;\n  width: 14px;\n  overflow:hidden;font-size:0;text-indent:-9999px;height:0;\n  padding-top:11px;\n  position: static;\n  margin-top: -3px;\n  padding-right: 3px;\n}\n:host > .E.smartSettings:after{\n  content: '';\n  display: block;\n  background: url('/images/beta.png') 0 0 no-repeat;\n  position: absolute;\n  right: 0;\n  top: 50%;\n  margin-top: -16px;\n  width: 18px;\n  overflow:hidden;font-size:0;text-indent:-9999px;height:0;padding-top:18px;\n}\n:host > .E.smartSettings.selected::before,\n:host > .E.smartSettings:hover::before{\n  background-position: 0 -50px;\n}\n\n:host > .E.icon{\n  width: 32px;\n  min-height: 30px;\n  padding-left: 0;\n}\n:host > .E.icon a{\n  display: block;\n  width: 32px;\n  height: 0;\n  padding-top: 32px;\n  overflow: hidden;\n  position: absolute;\n  left: 0;\n  top: calc(50% - 16px);\n  margin-top: -1px;\n  border-radius: 50%;\n}\n:host > .E.icon a::before{\n  content: '';\n  display: block;\n  position: absolute;\n}\n:host > .E.icon a:focus{\n  background-color: #e6e6e6;\n}\n\n:host > .E.support{\n  margin-left: 7px;\n}\n:host > .E.support a:before{\n  background: url('/images/menu_icons.png') 0 -200px no-repeat;\n  width: 12px;\n  overflow: hidden;\n  padding-top: 9px;\n  height: 0;\n  top: calc(50% - 4px);\n  left: calc(50% - 6px);\n  margin-top: 1px;\n}\n:host > .E.support a:hover:before{\n  background-position-y: -250px;\n}\n\n:host > .E.facebook{\n  margin-left: 0;\n}\n:host > .E.facebook a::before{\n  background: url('/images/menu_icons.png') 0 -300px no-repeat;\n  width: 8px;\n  overflow: hidden;\n  padding-top: 14px;\n  height: 0;\n  position: absolute;\n  top: calc(50% - 7px);\n  left: calc(50% - 4px);\n  margin-top: 1px;\n}\n:host > .E.facebook a:hover::before{\n  background-position-y: -350px;\n}\n</style>\n\n<div class$=\"E home [[iconConditionClass(homePage)]]\" on-click=\"goHome\">\n  [[translations.home]]\n</div>\n<div\n  class$=\"E smartSettings [[iconConditionClass(filtersPage)]]\"\n  on-click=\"openSettings\"\n  on-contextmenu=\"openSettings\">\n  [[translations.smartSettings]]\n</div>\n<div class=\"E icon support\">\n  <a href$=\"[[contactUsUrl]]\" target=\"_blank\">\n    [[translations.contactUs]]\n  </a>\n</div>\n<div class=\"E icon facebook\">\n  <a href$=\"[[facebookUrl]]\" target=\"_blank\">Facebook</a>\n</div>\n"]);

    _templateObject9_b935ea005b8f11e9b4dd99419b6c54c8 = function _templateObject9_b935ea005b8f11e9b4dd99419b6c54c8() {
      return data;
    };

    return data;
  }

  function _templateObject8_b935ea005b8f11e9b4dd99419b6c54c8() {
    var data = babelHelpers.taggedTemplateLiteral(["\n<style include=\"global-style\">\n:host{\n  display: block;\n  padding: 0 7px 0 10px;\n  cursor: pointer;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n:host(.current){\n  cursor: default;\n  background: #f0f5f0;\n}\n:host(.highlight){\n  background: #f7f8fc;\n}\n:host(.current.highlight){\n  background: #f0f5f0;\n}\n:host > .In{\n  display: table;\n  width: 100%;\n  height: 40px;\n}\n:host > .In > .E{\n  display: table-cell;\n  vertical-align: middle;\n}\n:host > .In > .E:first-child{\n  width: 1px;\n  padding-right: 10px;\n}\n:host > .In > .E.mark{\n  width: 1px;\n  padding-left: 10px;\n}\n:host > .In > .E.favorite{\n  width: 1px;\n  padding-left: 15px;\n}\n\n.Flag{\n  display: block;\n}\n.Country{\n  font-size: 13px;\n  line-height: 1.2;\n  color: #333;\n}\n\n.Favorite{\n  background: url('/images/stars.png') 0 -100px no-repeat;\n  width: 13px;\n  overflow:hidden;font-size:0;text-indent:-9999px;height:0;\n  padding-top: 12px;\n  cursor: pointer;\n  border: 3px solid transparent;\n}\n.Favorite:hover{\n  background-position-y: -50px;\n}\n.Favorite[data-favorited=\"favorited\"],\n.Favorite[data-favorited=\"favorited\"]:hover{\n  background-position-y: 0px;\n}\n\n.Mark{\n  display:inline-block;\n  vertical-align: middle;\n  width: 23px;\n  overflow:hidden;font-size:0;text-indent:-9999px;height:0;\n  padding-top: 12px;\n  background: url('/images/ratings.png') 0 0 no-repeat;\n}\n.Mark[data-mark=\"2\"]{\n  background-position-y: -50px;\n}\n.Mark[data-mark=\"3\"]{\n  background-position-y: -100px;\n}\n.Mark[data-mark=\"4\"]{\n  background-position-y: -150px;\n}\n.Mark[data-mark=\"5\"]{\n  background-position-y: -200px;\n}\n</style>\n\n<div class=\"In\" on-click=\"fullElementClick\">\n  <div class=\"E\">\n    <img class=\"Flag\" src$=\"[[flagUrl(data.code)]]\" width=\"30\" height=\"20\"/>\n  </div>\n  <div class=\"E\">\n    <div class=\"Country\">[[data.name]]</div>\n  </div>\n  <template is=\"dom-if\" if=\"[[data.delay]]\" id=\"mark\">\n    <div class=\"E mark\"><!--\n   --><div class=\"Mark\" data-mark$=\"[[data.mark]]\">[[data.mark]]</div><!--\n --></div>\n  </template>\n  <template is=\"dom-if\" if=\"[[showFavorites(data)]]\">\n    <div class=\"E favorite\">\n      <div\n        class=\"Favorite\"\n        data-favorited$=\"[[favoritesCssClass(data.favorited)]]\"\n        on-click=\"favoritesClick\"></div>\n    </div>\n  </template>\n</div>\n"]);

    _templateObject8_b935ea005b8f11e9b4dd99419b6c54c8 = function _templateObject8_b935ea005b8f11e9b4dd99419b6c54c8() {
      return data;
    };

    return data;
  }

  function _templateObject7_b935ea005b8f11e9b4dd99419b6c54c8() {
    var data = babelHelpers.taggedTemplateLiteral(["\n<style include=\"global-style\">\n:host > .In{\n  overflow: auto;\n  height: 100%;\n}\n.Head{\n  padding: 11px 12px;\n  text-align: center;\n  position: relative;\n}\n.Head > .In{\n  display:inline-block;\n  vertical-align:top;\n  position: relative;\n}\n.Head_Title{\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 1.2;\n}\n.Back{\n  position: absolute;\n  left: 12px;\n  top: calc(50% - 7px);\n  font-size: 14px;\n  line-height: 1.2;\n  padding: 0 0 0 18px;\n  cursor: pointer;\n}\n.Back:before{\n  content: '';\n  display: block;\n  background: url('/images/arrow_left.png') 0 0 no-repeat;\n  width: 9px;\n  overflow:hidden;font-size:0;text-indent:-9999px;height:0;\n  padding-top: 16px;\n  position: absolute;\n  left: 0;\n  top: calc(50% - 8px);\n}\n\n.Helper{\n  position: absolute;\n  left: calc(100% + 5px);\n  top: calc(50% - 8px);\n  background: url('/images/information_icon.png') 0 0 no-repeat;\n  width: 16px;\n  overflow:hidden;font-size:0;text-indent:-9999px;height:0;\n  padding-top: 16px;\n  cursor: pointer;\n  text-align: left;\n}\n.Helper:hover{\n  background-position-y: -50px;\n}\n\n.Sections{\n  padding: 0px 12px 12px;\n}\n</style>\n\n<div class=\"In\">\n  <div class=\"Head\"><!--\n--><div class=\"Back\" on-click=\"back\">Back</div><!--\n--><div class=\"In\">\n      <div class=\"Head_Title\">[[translations.virtualLocations]]</div>\n      <div class=\"Helper\" on-click=\"openHelp\">?</div>\n    </div><!--\n--></div>\n  <div class=\"Sections\">\n    <template is=\"dom-repeat\" items=\"[[countries]]\">\n      <index-locations-element\n        on-countryclick=\"countryClick\"\n        on-favorite=\"favorite\"\n        on-mousemove=\"elementHighlight\"\n        data=\"[[item]]\"\n        highlighted=\"[[computeHighlighted(item,highlightedCountry)]]\"\n        mode=[[computeMode(item,premiumUser,country)]]>\n      </index-locations-element>\n    </template>\n  </div>\n</div>\n"]);

    _templateObject7_b935ea005b8f11e9b4dd99419b6c54c8 = function _templateObject7_b935ea005b8f11e9b4dd99419b6c54c8() {
      return data;
    };

    return data;
  }

  function _templateObject6_b935ea005b8f11e9b4dd99419b6c54c8() {
    var data = babelHelpers.taggedTemplateLiteral(["\n    <style include=\"global-style\">\n    :host{\n      display: block;\n    }\n    .Row:after{\n      content:' ';clear:both;display:block;width:0;height:0;overflow:hidden;font-size:0;\n    }\n    .Row + .Row{\n      padding-top: 8px;\n    }\n\n    .Switch,\n    .Flag_Out{\n      float: right;\n      width: 61px;\n      padding-left: 11px;\n      min-height: 1px;\n    }\n\n    .Name{\n      white-space: nowrap;\n      overflow: hidden;\n      line-height: 26px;\n      text-overflow: ellipsis;\n    }\n\n    .Flag{\n      border: 1px solid #bcbcbc;\n      border-radius: 3px;\n      padding: 2px 27px 2px 2px;\n      cursor: pointer;\n      position: relative;\n    }\n    .Flag:hover{\n      border-color: #888;\n    }\n    .Flag:after{\n      content: '';\n      display: block;\n      background: url('/images/flag_arrow_right.png') 0 0 no-repeat;\n      width: 5px;\n      overflow:hidden;font-size:0;text-indent:-9999px;height:0;padding-top:9px;\n      position: absolute;\n      right: 10px;\n      top: 50%;\n      margin-top: -4px;\n    }\n    .Flag img{\n      display: block;\n    }\n    </style>\n\n    <div class=\"Row\">\n      <div class=\"Switch\">\n        <c-switch on=\"[[view.on]]\" on-click=\"domainProxySwitch\"></c-switch>\n      </div>\n      <div class=\"Flag_Out\">\n        <template is=\"dom-if\" if=\"[[view.country]]\">\n          <div class=\"Flag\" on-click=\"domainCountryChange\">\n            <img src$=\"[[flagUrl(view.country)]]\" width=\"30\" height=\"20\" alt$=\"[[view.country]]\"/>\n          </div>\n        </template>\n      </div>\n      <div class=\"Name\">[[view.view]]</div>\n    </div>\n\n    <div class=\"Row\">\n      <div class=\"Switch\">\n        <c-switch on=\"[[proxyEnabled]]\" on-click=\"proxySwitch\"></c-switch>\n      </div>\n      <div class=\"Flag_Out\">\n        <template is=\"dom-if\" if=\"[[proxyEnabled]]\">\n          <div class=\"Flag\" on-click=\"countryChange\">\n            <img src$=\"[[flagUrl(proxyCountry)]]\" width=\"30\" height=\"20\" alt$=\"[[proxyCountry]]\"/>\n          </div>\n        </template>\n      </div>\n      <div class=\"Name\">[[translations.otherWebsites]]</div>\n    </div>\n    "]);

    _templateObject6_b935ea005b8f11e9b4dd99419b6c54c8 = function _templateObject6_b935ea005b8f11e9b4dd99419b6c54c8() {
      return data;
    };

    return data;
  }

  function _templateObject5_b935ea005b8f11e9b4dd99419b6c54c8() {
    var data = babelHelpers.taggedTemplateLiteral(["\n<style include=\"global-style\">\n:host{\n  height:82px;\n  display: none;\n}\n:host(.visible){\n  display: block;\n}\n\n.Downloadable{\n  height: 82px;\n  overflow: hidden;\n  margin: 4px 4px 0;\n  position: relative;\n}\n.Downloadable a{\n  display: block;\n  position: absolute;\n  top:0px;right:0px;bottom:0px;left:0px;\n  overflow: hidden;\n  text-indent: -9999px;\n  z-index: 3;\n}\n\n.Element{\n  position: relative;\n}\n.Element_Link{\n  display: block;\n  position: absolute;\n  top:0px;right:0px;bottom:0px;left:0px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-indent: -9999px;\n  font-size: 0;\n}\n\n.PremiumUpgrade{\n  position: relative;\n  background: #e5ebef;\n  padding: 0 10px 0 80px;\n  height: 82px;\n  margin: 6px 5px 0 5px;\n  border-radius: 4px;\n  color: white;\n}\n.PremiumUpgrade:before{\n  content: \"\";\n  display: block;\n  width: 67px;\n  overflow:hidden;font-size:0;text-indent:-9999px;height:0;padding-top:67px;\n  position: absolute;\n  top: 50%;\n  margin-top: -33px;\n  left: 3px;\n}\n.PremiumUpgrade>.in{\n  display: table;\n  width: 100%;\n  height: 100%;\n}\n.PremiumUpgrade>.in>.in{\n  display: table-cell;\n  vertical-align: middle;\n}\n.PremiumUpgrade.stServers:before{\n  background: url('/images/promos/advantages.png') 0 -134px no-repeat;\n}\n.PremiumUpgrade.stSpeed:before{\n  background: url('/images/promos/advantages.png') 0 -67px no-repeat;\n}\n.PremiumUpgrade.stLocations:before{\n  background: url('/images/promos/advantages.png') 0 0 no-repeat;\n}\n.PremiumUpgrade_Title{\n  font-size: 16px;\n  color: #3d9740;\n  font-weight: 600;\n}\n.PremiumUpgrade_Text{\n  color:#28344f;\n  font-size:15px;\n  margin-top: 2px;\n  font-weight: 500;\n}\n\n.FreeTrial{\n  height: 82px;\n  margin: 6px 5px 0 5px;\n  border-radius: 4px;\n  background: #e5ebef;\n  position: relative;\n  padding-left: 83px;\n}\n.FreeTrial:before{\n  content: \"\";\n  display: block;\n  overflow:hidden;font-size:0;text-indent:-9999px;height:0;\n  padding-top:48px;\n  width: 50px;\n  background: url('/images/promos/free_rocket.png') 0 0 no-repeat;\n  position: absolute;\n  top: 50%;\n  margin-top: -24px;\n  left: 33px;\n}\n.FreeTrial > .in{\n  display: table;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n}\n.FreeTrial > .in > .in{\n  display: table-cell;\n  vertical-align: middle;\n}\n.FreeTrial_Title{\n  font-size: 16px;\n  color: #3d9740;\n  font-weight: 600;\n}\n.FreeTrial_Button{\n  display:inline-block;\n  vertical-align:top;\n  color: #fff;\n  height: 30px;\n  line-height: 30px;\n  border-radius: 4px;\n  background: #3d973f;\n  margin: 9px 0 0;\n  font-size: 14px;\n  padding: 0 45px;\n  font-weight: bold;\n}\n.FreeTrial_Button:link,\n.FreeTrial_Button:visited{\n  text-decoration: none;\n}\n\n.Expire{\n  margin: 1px 0 0;\n  background: #fcd0cb;\n  border-bottom: 1px #994136 solid;\n  padding: 10px 10px 10px;\n}\n.Expire_Close{\n  position: absolute;\n  font-size: 32px;\n  top: -5px;\n  right: -1px;\n  color: #994136;\n  cursor: pointer;\n\n  font-family: 'Browsec_extention_Font';\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.Expire_Close:before{\n  content: \"\\e904\";\n}\n.Expire_Close:hover{\n  color: #fff;\n}\n.Expire_Title{\n  color: #994136;\n  font-size: 14px;\n  text-align: center;\n}\n.Expire_Description{\n  color: #1c304e;\n  font-size: 12px;\n  text-align: center;\n}\n\n.Expire_Link_Out{\n  text-align: center;\n  font-size: 12px;\n  padding-top: 5px;\n}\n.Expire_Link{\n  display:inline-block;vertical-align:top;\n  cursor:pointer;\n}\n.Expire_Link:link,\n.Expire_Link:visited{\n  text-decoration: none;\n  border-bottom:1px #1c304e solid;\n  color: #1c304e;\n}\n.Expire_Link:hover{\n  color: #fff;\n  border-bottom:1px solid #fff;\n}\n\n.Speed{\n  background: #c0392b;\n  margin: 6px 6px 0 6px;\n  border-radius: 4px;\n  height: 82px;\n  color: #fff;\n  text-align: center;\n  line-height: 1;\n}\n.Speed > .in{\n  display: table;\n  height: 100%;\n  width: 100%;\n}\n.Speed > .in > .in{\n  display: table-cell;\n  vertical-align: middle;\n  padding: 0 7px;\n}\n.Speed_Title{\n  text-transform: uppercase;\n  font-size: 23px;\n  font-weight: bold;\n}\n.Speed_Price{\n  color: #f1c40f;\n  font-size: 18px;\n  font-weight: bold;\n  padding: 3px 0 7px;\n}\n.Speed_Days{\n  color: #e1afab;\n  font-size: 12px;\n}\n</style>\n\n<div class=\"Downloadable\" data-name=\"downloadable promo\" hidden$=\"[[!conditionShowPromo(activePromo, 0)]]\"></div>\n\n<div class=\"Expire\" data-premium=\"true\" data-name=\"premium expiration soon\" hidden$=\"[[!conditionShowPromo(activePromo, 1)]]\">\n  <div class=\"Expire_Close\" on-click=\"expirationClose\"></div>\n  <div class=\"Expire_Title\">[[translations.premiumIsAboutToExpire]]</div>\n  <div class=\"Expire_Description\">[[translations.goAheadAndRenewIt]]</div>\n  <div class=\"Expire_Link_Out\"><!--\n --><a class=\"Expire_Link\" href=\"[[expirationPremiumLink]]\" target=\"_blank\">\n      [[translations.continueUsing]]\n    </a><!--\n--></div>\n</div>\n\n<div class=\"Element\" data-premium=\"false\" data-weight=\"1\" data-ga=\"banner_speed_new\" hidden$=\"[[!conditionShowPromo(activePromo, 2)]]\">\n  <div class=\"Speed\">\n    <div class=\"in\"><div class=\"in\">\n      <div class=\"Speed_Title\">[[translations.upgradeConnectionSpeed]]</div>\n      <div class=\"Speed_Price\">[[translations.fromOnlyPricePerMonth]]</div>\n      <div class=\"Speed_Days\">[[translations.moneyBackGuarantee]]</div>\n    </div></div>\n    <a class=\"Element_Link\" href=\"[[premiumLink]]\" target=\"_blank\">\n      [[translations.getTurboSpeed]]\n    </a>\n  </div>\n</div>\n"], ["\n<style include=\"global-style\">\n:host{\n  height:82px;\n  display: none;\n}\n:host(.visible){\n  display: block;\n}\n\n.Downloadable{\n  height: 82px;\n  overflow: hidden;\n  margin: 4px 4px 0;\n  position: relative;\n}\n.Downloadable a{\n  display: block;\n  position: absolute;\n  top:0px;right:0px;bottom:0px;left:0px;\n  overflow: hidden;\n  text-indent: -9999px;\n  z-index: 3;\n}\n\n.Element{\n  position: relative;\n}\n.Element_Link{\n  display: block;\n  position: absolute;\n  top:0px;right:0px;bottom:0px;left:0px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-indent: -9999px;\n  font-size: 0;\n}\n\n.PremiumUpgrade{\n  position: relative;\n  background: #e5ebef;\n  padding: 0 10px 0 80px;\n  height: 82px;\n  margin: 6px 5px 0 5px;\n  border-radius: 4px;\n  color: white;\n}\n.PremiumUpgrade:before{\n  content: \"\";\n  display: block;\n  width: 67px;\n  overflow:hidden;font-size:0;text-indent:-9999px;height:0;padding-top:67px;\n  position: absolute;\n  top: 50%;\n  margin-top: -33px;\n  left: 3px;\n}\n.PremiumUpgrade>.in{\n  display: table;\n  width: 100%;\n  height: 100%;\n}\n.PremiumUpgrade>.in>.in{\n  display: table-cell;\n  vertical-align: middle;\n}\n.PremiumUpgrade.stServers:before{\n  background: url('/images/promos/advantages.png') 0 -134px no-repeat;\n}\n.PremiumUpgrade.stSpeed:before{\n  background: url('/images/promos/advantages.png') 0 -67px no-repeat;\n}\n.PremiumUpgrade.stLocations:before{\n  background: url('/images/promos/advantages.png') 0 0 no-repeat;\n}\n.PremiumUpgrade_Title{\n  font-size: 16px;\n  color: #3d9740;\n  font-weight: 600;\n}\n.PremiumUpgrade_Text{\n  color:#28344f;\n  font-size:15px;\n  margin-top: 2px;\n  font-weight: 500;\n}\n\n.FreeTrial{\n  height: 82px;\n  margin: 6px 5px 0 5px;\n  border-radius: 4px;\n  background: #e5ebef;\n  position: relative;\n  padding-left: 83px;\n}\n.FreeTrial:before{\n  content: \"\";\n  display: block;\n  overflow:hidden;font-size:0;text-indent:-9999px;height:0;\n  padding-top:48px;\n  width: 50px;\n  background: url('/images/promos/free_rocket.png') 0 0 no-repeat;\n  position: absolute;\n  top: 50%;\n  margin-top: -24px;\n  left: 33px;\n}\n.FreeTrial > .in{\n  display: table;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n}\n.FreeTrial > .in > .in{\n  display: table-cell;\n  vertical-align: middle;\n}\n.FreeTrial_Title{\n  font-size: 16px;\n  color: #3d9740;\n  font-weight: 600;\n}\n.FreeTrial_Button{\n  display:inline-block;\n  vertical-align:top;\n  color: #fff;\n  height: 30px;\n  line-height: 30px;\n  border-radius: 4px;\n  background: #3d973f;\n  margin: 9px 0 0;\n  font-size: 14px;\n  padding: 0 45px;\n  font-weight: bold;\n}\n.FreeTrial_Button:link,\n.FreeTrial_Button:visited{\n  text-decoration: none;\n}\n\n.Expire{\n  margin: 1px 0 0;\n  background: #fcd0cb;\n  border-bottom: 1px #994136 solid;\n  padding: 10px 10px 10px;\n}\n.Expire_Close{\n  position: absolute;\n  font-size: 32px;\n  top: -5px;\n  right: -1px;\n  color: #994136;\n  cursor: pointer;\n\n  font-family: 'Browsec_extention_Font';\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.Expire_Close:before{\n  content: \"\\\\e904\";\n}\n.Expire_Close:hover{\n  color: #fff;\n}\n.Expire_Title{\n  color: #994136;\n  font-size: 14px;\n  text-align: center;\n}\n.Expire_Description{\n  color: #1c304e;\n  font-size: 12px;\n  text-align: center;\n}\n\n.Expire_Link_Out{\n  text-align: center;\n  font-size: 12px;\n  padding-top: 5px;\n}\n.Expire_Link{\n  display:inline-block;vertical-align:top;\n  cursor:pointer;\n}\n.Expire_Link:link,\n.Expire_Link:visited{\n  text-decoration: none;\n  border-bottom:1px #1c304e solid;\n  color: #1c304e;\n}\n.Expire_Link:hover{\n  color: #fff;\n  border-bottom:1px solid #fff;\n}\n\n.Speed{\n  background: #c0392b;\n  margin: 6px 6px 0 6px;\n  border-radius: 4px;\n  height: 82px;\n  color: #fff;\n  text-align: center;\n  line-height: 1;\n}\n.Speed > .in{\n  display: table;\n  height: 100%;\n  width: 100%;\n}\n.Speed > .in > .in{\n  display: table-cell;\n  vertical-align: middle;\n  padding: 0 7px;\n}\n.Speed_Title{\n  text-transform: uppercase;\n  font-size: 23px;\n  font-weight: bold;\n}\n.Speed_Price{\n  color: #f1c40f;\n  font-size: 18px;\n  font-weight: bold;\n  padding: 3px 0 7px;\n}\n.Speed_Days{\n  color: #e1afab;\n  font-size: 12px;\n}\n</style>\n\n<div class=\"Downloadable\" data-name=\"downloadable promo\" hidden$=\"[[!conditionShowPromo(activePromo, 0)]]\"></div>\n\n<div class=\"Expire\" data-premium=\"true\" data-name=\"premium expiration soon\" hidden$=\"[[!conditionShowPromo(activePromo, 1)]]\">\n  <div class=\"Expire_Close\" on-click=\"expirationClose\"></div>\n  <div class=\"Expire_Title\">[[translations.premiumIsAboutToExpire]]</div>\n  <div class=\"Expire_Description\">[[translations.goAheadAndRenewIt]]</div>\n  <div class=\"Expire_Link_Out\"><!--\n --><a class=\"Expire_Link\" href=\"[[expirationPremiumLink]]\" target=\"_blank\">\n      [[translations.continueUsing]]\n    </a><!--\n--></div>\n</div>\n\n<div class=\"Element\" data-premium=\"false\" data-weight=\"1\" data-ga=\"banner_speed_new\" hidden$=\"[[!conditionShowPromo(activePromo, 2)]]\">\n  <div class=\"Speed\">\n    <div class=\"in\"><div class=\"in\">\n      <div class=\"Speed_Title\">[[translations.upgradeConnectionSpeed]]</div>\n      <div class=\"Speed_Price\">[[translations.fromOnlyPricePerMonth]]</div>\n      <div class=\"Speed_Days\">[[translations.moneyBackGuarantee]]</div>\n    </div></div>\n    <a class=\"Element_Link\" href=\"[[premiumLink]]\" target=\"_blank\">\n      [[translations.getTurboSpeed]]\n    </a>\n  </div>\n</div>\n"]);

    _templateObject5_b935ea005b8f11e9b4dd99419b6c54c8 = function _templateObject5_b935ea005b8f11e9b4dd99419b6c54c8() {
      return data;
    };

    return data;
  }

  function _templateObject4_b935ea005b8f11e9b4dd99419b6c54c8() {
    var data = babelHelpers.taggedTemplateLiteral(["\n<style include=\"global-style\">\n.ChangeButton{\n  display:inline-block;\n  vertical-align:top;\n  font-size: 12px;\n  border-radius: 4px;\n  line-height: 18px;\n  text-align: center;\n  background: #fff;\n  border: 1px solid #268328;\n  color: #268328;\n  padding: 0 8px;\n}\n\n:host > .In{\n  width: 100%;\n  height: 100%;\n  white-space: nowrap;\n  position: relative;\n}\n:host > .In.transition{\n  transition: margin-left 0.25s;\n}\n:host > .In > .In{\n  display: flex;\n  width: 200%;\n  height: 100%;\n  align-items: center;\n}\n:host(.proxyEnabled) > .In{\n  margin-left: -100%;\n}\n:host(.withPromo) > .In{\n  height: auto;\n}\n\n:host(.withPromo) index-home-promo{\n  border-bottom: 4px solid transparent;\n}\n\n.SettingsIcon{\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  width: 40px;\n}\n:host(.withPromo) .SettingsIcon{\n  top: calc(88px + 12px);\n}\n.SettingsIcon > .In{\n  position: relative;\n  border: 1px solid #bcbcbc;\n  width: 38px;\n  overflow:hidden;font-size:0;text-indent:-9999px;height:0;\n  padding-top:38px;\n  border-radius: 4px;\n}\n.SettingsIcon > .In:after{\n  content: '';\n  display: block;\n  background: url('/images/settings.png') 0 0 no-repeat;\n  position: absolute;\n  width: 17px;\n  overflow:hidden;text-indent:-9999px;height:0;\n  padding-top:17px;\n  top: calc(50% - 17px / 2);\n  left: calc(50% - 17px / 2);\n}\n.SettingsIcon_GreenCircle{\n  width: 16px;\n  overflow:hidden;font-size:0;text-indent:-9999px;height:0;\n  padding-top:16px;\n  background: #3b9946;\n  border: 4px solid #fff;\n  border-radius: 50%;\n  position: absolute;\n  left: -11px;\n  bottom: -11px;\n}\n\n.SettingsIcon_ClickArea{\n  position: absolute;\n  top:0px;right:0px;bottom:0px;left:0px;\n  cursor: pointer;\n}\n\n.Inactive,\n.Active{\n  flex: 1;\n}\n\n:host(.withPromo) .Inactive,\n:host(.withPromo) .Active{\n  align-items: stretch;\n}\n\n.Inactive{\n  text-align: center;\n  white-space: normal;\n}\n:host(.withPromo) .Inactive{\n  vertical-align: top;\n}\n\n.Inactive:before{\n  content: '';\n  display:block;\n  background: url(\"/images/main-img-large-off.png\") 50% 0 no-repeat;\n  width: 100%;\n  overflow:hidden;font-size:0;text-indent:-9999px;height:0;\n  padding-top:114px;\n}\n:host(.withPromo) .Inactive:before{\n  background: url(\"/images/main-img-small-off.png\") 50% 0 no-repeat;\n  padding-top: 76px;\n}\n.Inactive_Text{\n  font-size: 14px;\n  padding: 4px 28px 0;\n  line-height: 17px;\n}\n.Inactive_Title{\n  font-size: 18px;\n  font-weight: 600;\n  padding-top: 10px;\n  color: #994136;\n}\n:host(.withPromo) .Inactive_Title{\n  padding-top: 0;\n}\n\n.Inactive_ButtonOut{\n  padding-top: 24px;\n}\n:host(.withPromo) .Inactive_ButtonOut{\n  padding-top: 10px;\n}\n.Inactive_Button{\n  display:inline-block;\n  vertical-align:top;\n  cursor: pointer;\n  text-decoration: none;\n  color: #fff;\n  min-width: 208px;\n  height: 45px;\n  line-height: 42px;\n  border-radius: 4px;\n  background: #3d973f;\n  font-size: 17px;\n  text-align: center;\n  padding: 0 10px;\n}\n\n/** Active proxy */\n:host(.withPromo) .Active{\n  padding-top: 9px;\n}\n\n.Active:before{\n  content:' ';\n  display:block;\n  background: url(\"/images/main-img-large-on.png\") 50% 0 no-repeat;\n  overflow:hidden;font-size:0;text-indent:-9999px;height:0;\n  padding-top:112px;\n}\n:host(.withPromo) .Active:before{\n  padding-top: 91px;\n  background: url(\"/images/main-img-small-on.png\") 50% 0 no-repeat;\n}\n\n.Active_Text{\n  font-size:18px;\n  line-height: 1;\n  padding: 27px 28px 0;\n  color:#3b9946;\n  text-align: center;\n}\n:host(.withPromo) .Active_Text{\n  padding-top: 7px;\n}\n\n.Active_Country_Out{\n  padding: 28px 20px 0;\n}\n:host(.withPromo) .Active_Country_Out{\n  padding-top: 20px;\n}\n\n.Active_Country{\n  cursor: pointer;\n  border: 1px solid #bcbcbc;\n  border-radius: 4px;\n  text-align: justify;\n  height: 58px;\n  padding: 0 20px;\n  cursor:pointer;\n}\n.Active_Country:hover{\n  background: #efefef;\n}\n.Active_Country > .In{\n  display: table;\n  height: 100%;\n  width: 100%;\n}\n.Active_Country > .In > .E{\n  display: table-cell;\n  vertical-align: middle;\n}\n.Active_Country > .In > .E:first-child{\n  width: 1px;\n  padding-right: 12px;\n}\n.Active_Country > .In > .E:last-child{\n  width: 1px;\n}\n.Active_Country img{\n  display: block;\n}\n.Active_Country_Name{\n  font-size: 18px;\n}\n\n:host index-home-switches{\n  padding: 12px 22px 0;\n  text-align: left;\n}\n\n.Rating{\n  background: url('/images/ratings.png') 0 0 no-repeat;\n  width: 23px;\n  overflow:hidden;font-size:0;text-indent:-9999px;height:0;\n  padding-top:12px;\n  margin-left: auto;\n  border-right: 15px solid transparent;\n}\n.Rating.r2{\n  background-position-y: -50px;\n}\n.Rating.r3{\n  background-position-y: -100px;\n}\n.Rating.r4{\n  background-position-y: -150px;\n}\n.Rating.r5{\n  background-position-y: -200px;\n}\n</style>\n\n<index-home-promo></index-home-promo>\n<div class$=\"In [[computeTransition(complexView.enabled)]]\">\n  <div class=\"In\"><!--\n --><div class=\"Inactive\">\n      <div class=\"Inactive_Title\">[[translations.protectionDisabled]]</div>\n      <div class=\"Inactive_Text\">[[translations.connectionsNotEncrypted]]</div>\n      <template is=\"dom-if\" if=\"[[complexView.enabled]]\">\n        <index-home-switches\n          proxy-enabled=\"[[proxyEnabled]]\"\n          proxy-country=\"[[country]]\"\n          view=\"[[complexView]]\"\n          on-proxyswitch=\"proxySwitch\"\n          on-domainproxyswitch=\"domainProxySwitch\"\n          on-countrychange=\"countryChange\"\n          on-domaincountrychange=\"domainCountryChange\">\n        </index-home-switches>\n      </template>\n      <template is=\"dom-if\" if=\"[[!complexView.enabled]]\">\n        <div class=\"Inactive_ButtonOut\"><!--\n       --><div class=\"Inactive_Button\" on-click=\"enableProxy\">\n            [[translations.protectMe]]\n          </div><!--\n     --></div>\n      </template>\n    </div><!--\n --><div class=\"Active\">\n      <div class=\"Active_Text\">[[translations.privacyProtected]]</div>\n      <template is=\"dom-if\" if=\"[[complexView.enabled]]\">\n        <index-home-switches\n          proxy-enabled=\"[[proxyEnabled]]\"\n          proxy-country=\"[[country]]\"\n          view=\"[[complexView]]\"\n          on-proxyswitch=\"proxySwitch\"\n          on-domainproxyswitch=\"domainProxySwitch\"\n          on-countrychange=\"countryChange\"\n          on-domaincountrychange=\"domainCountryChange\">\n        </index-home-switches>\n      </template>\n      <template is=\"dom-if\" if=\"[[!complexView.enabled]]\">\n        <div class=\"Active_Country_Out\">\n          <div class=\"Active_Country\" on-click=\"openLocations\"><div class=\"In\">\n            <template is=\"dom-if\" if=\"[[country]]\">\n              <div class=\"E\"><!--\n             --><img src$=\"[[flagUrl(country)]]\" width=\"30\" height=\"20\" /><!--\n           --></div>\n            </template>\n            <div class=\"E\">\n              <div class=\"Active_Country_Name\">[[countryName]]</div>\n            </div>\n            <template is=\"dom-if\" if=\"[[complexView.rating]]\">\n              <div class=\"E\">\n                <div class$=\"Rating r[[complexView.rating]]\"></div>\n              </div>\n            </template>\n            <div class=\"E\"><div class=\"ChangeButton\">[[translations.change]]</div></div>\n          </div></div>\n        </div>\n      </template>\n    </div><!--\n--></div>\n</div>\n\n<div class=\"SettingsIcon\">\n  <div class=\"In\"></div>\n  <template is=\"dom-if\" if=\"[[settingsIconNewFeature]]\">\n    <div class=\"SettingsIcon_GreenCircle\"></div>\n  </template>\n  <div class=\"SettingsIcon_ClickArea\" on-click=\"openSettings\"></div>\n</div>\n"]);

    _templateObject4_b935ea005b8f11e9b4dd99419b6c54c8 = function _templateObject4_b935ea005b8f11e9b4dd99419b6c54c8() {
      return data;
    };

    return data;
  }

  function _templateObject3_b935ea005b8f11e9b4dd99419b6c54c8() {
    var data = babelHelpers.taggedTemplateLiteral(["\n    <style include=\"global-style\">\n    :host{\n      display: block;\n    }\n\n    input[type=\"text\"]{\n      display: block;\n      width: 100%;\n      border: 1px solid #bcbcbc;\n      line-height: 24px;\n      height: 24px;\n      box-sizing: border-box;\n      padding: 0 8px;\n      border-radius: 4px;\n      outline: none;\n    }\n    input[type=\"text\"]:focus{\n      border-color: #28344f;\n    }\n    </style>\n    <input type=\"text\" placeholder=\"[[translations.pleaseEnterDomain]]\" />\n    "]);

    _templateObject3_b935ea005b8f11e9b4dd99419b6c54c8 = function _templateObject3_b935ea005b8f11e9b4dd99419b6c54c8() {
      return data;
    };

    return data;
  }

  function _templateObject2_b935ea005b8f11e9b4dd99419b6c54c8() {
    var data = babelHelpers.taggedTemplateLiteral(["\n<style include=\"global-style\">\n.Off{\n  width: 30px;\n  line-height: 20px;\n  color: #994136;\n  font-size: 14px;\n  text-align: center;\n}\n\n.ChangeRule{\n  padding: 19px 14px;\n  border-bottom: 1px solid #bcbcbc;\n}\n.ChangeRule>table{\n  width: 100%;\n}\n.ChangeRule>table>tbody>tr>td~td{\n  padding-left: 10px;\n}\n.ChangeRule>table>tbody>tr>td:nth-child(2){\n  width: 5000px;\n}\n\n.ChangeRule_Country{\n  position: relative;\n  width: 56px;\n  border: 1px solid #bcbcbc;\n  height: 20px;\n  border-radius: 4px;\n  padding: 2px 2px;\n}\n.ChangeRule_Country:after{\n  content: '';\n  display: block;\n  background: url('/images/filters/country.png') 0 -100px no-repeat;\n  width: 9px;\n  overflow:hidden;font-size:0;text-indent:-9999px;height:0;padding-top:5px;\n  position: absolute;\n  top: 50%;\n  right: 8px;\n  margin-top: -2px;\n}\n.ChangeRule_Country.open{\n  border-color: #3b9946;\n}\n.ChangeRule_Country.open:after{\n  background-position: 0 0;\n  margin-top: -3px;\n}\n\n.ChangeRule_Button{\n  width: 46px;\n  overflow:hidden;font-size:0;text-indent:-9999px;height:0;padding-top:24px;\n  background: #3b9946;\n  border-radius: 4px;\n  cursor: pointer;\n  position: relative;\n}\n.ChangeRule_Button::after{\n  content: '';\n  display: block;\n  width: 14px;\n  overflow: hidden;\n  font-size:0;\n  text-indent: -9999px;\n  height: 0;\n  padding-top:14px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -7px 0 0 -7px;\n  background: url('/images/filters/button_icons.png') 0 0 no-repeat;\n}\n.ChangeRule_Button[data-state=\"save\"]::after{\n  width: 16px;\n  padding-top: 11px;\n  background-position: 0 -100px;\n  margin: -5px 0 0 -8px;\n}\n\n.List{\n  position: absolute;\n  top:65px;right:0px;bottom:0px;left:0px;\n  overflow: auto;\n}\n.List > .E{\n  position: relative;\n  line-height: 34px;\n  transition: opacity 0.2s;\n}\n.List > .E:hover{\n  background: #fafafa;\n}\n.List > .E.active,\n.List > .E.active:hover{\n  background: #f5f5f5;\n}\n.List > .E.inactive,\n.List > .E.inactive:hover{\n  background: transparent;\n  opacity: 0.33;\n}\n.List > .E.inactive.disabled,\n.List > .E.inactive.disabled:hover{\n  background: transparent;\n  opacity: 1;\n}\n.List > .E>.In{\n  padding: 0 7px 0 14px;\n  cursor: pointer;\n  height: 34px;\n}\n.List > .E>.In:after{\n  content:' ';clear:both;display:block;width:0;height:0;overflow:hidden;font-size:0;\n}\n\n.List_Remove{\n  float: right;\n  background: url('/images/filters/trash.png') 0 0 no-repeat;\n  width: 11px;\n  overflow:hidden;font-size:0;text-indent:-9999px;height:0;padding-top:14px;\n  margin: 3px 0 0 6px;\n  cursor: pointer;\n  border: 7px solid transparent;\n}\n.List_Remove:hover{\n  background-position: 0 -100px;\n}\n.List_Flag{\n  float: right;\n  width: 30px;\n  padding: 7px 0 0 13px;\n}\n.List_Flag img{\n  display: block;\n}\n\n.List_Select{\n  float: right;\n  padding: 4px 0 0 5px;\n}\n.List_Select_Button{\n  line-height: 24px;\n  white-space: nowrap;\n  cursor: pointer;\n  border: 1px solid #3b9946;\n  color: #3b9946;\n  padding: 0 8px;\n  border-radius: 4px;\n  font-size: 12px;\n}\n.List_Select_Button:hover{\n  background: #3b9946;\n  color: #fff;\n}\n\n.List_Favicon{\n  width: 16px;\n  float: left;\n  padding: 9px 7px 0 0;\n  transition: opacity 0.2s;\n}\n.List > .E.disabled .List_Favicon{\n  opacity: 0.3;\n}\n.List_Favicon img{\n  display: block;\n}\n.List_Name{\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  transition: opacity 0.2s;\n}\n.List > .E.disabled .List_Name{\n  opacity: 0.3;\n}\n.List_Deleted{\n  display: none;\n  background: #fff;\n  position: absolute;\n  top:0px;right:0px;bottom:0px;left:0px;\n  padding: 0 14px 0 22px;\n  border-left: 14px solid transparent;\n  color: #3b9946;\n}\n.List_Deleted:after{\n  content: '';\n  width: 12px;\n  overflow:hidden;font-size:0;text-indent:-9999px;height:0;padding-top:12px;\n  background: url('/images/filters/check.png') 0 0 no-repeat;\n  position: absolute;\n  left: 0;\n  top: 50%;\n  margin-top: -6px;\n}\n.List > .E.deleted .List_Deleted{\n  display: block;\n}\n.List_Delete_Link{\n  cursor: pointer;\n  color: #28344f;\n  border-bottom: 1px dashed #28344f;\n}\n.List_Delete_Link:hover{\n  border-bottom-color: transparent;\n}\n\n.List_InactiveOverlay{\n  display: none;\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  overflow: hidden;\n  text-indent: -9999px;\n}\n.List > .E.inactive .List_InactiveOverlay{\n  display: block;\n}\n</style>\n\n<div class=\"ChangeRule\"><table><tbody><tr>\n  <td>[[translations.on]]</td>\n  <td>\n    <filters-domain value=\"{{domain}}\" on-save=\"save\"></filters-domain>\n  </td>\n  <td>[[translations.use]]</td>\n  <td><div class=\"ChangeRule_Country\" on-click=\"openCountryList\">\n    <template is=\"dom-if\" if=\"[[country]]\" restamp=\"true\">\n      <img\n        src$=\"[[computeVisibleCountry(country, countries)]]\"\n        width=\"30\"\n        height=\"20\"\n        alt=\"\"/>\n    </template>\n    <template is=\"dom-if\" if=\"[[!country]]\" restamp=\"true\">\n      <div class=\"Off\">[[translations.off]]</div>\n    </template>\n  </div></td>\n  <td>\n    <div class=\"ChangeRule_Button\" data-state$=\"[[classButton(selectedDomain)]]\" on-click=\"save\"></div>\n  </td>\n</tr></tbody></table></div>\n\n<div class=\"List\" on-click=\"listClick\">\n  <template is=\"dom-repeat\" items=\"[[filters]]\">\n    <div class$=\"E [[classElement(item, selectedDomain)]]\">\n      <div class=\"In\" on-click=\"listElementClick\">\n        <div class=\"List_Remove\" title=\"[[translations.removeSmartSetting]]\"></div>\n        <template is=\"dom-if\" if=\"[[!item.disabled]]\">\n          <div class=\"List_Flag\">\n            <template is=\"dom-if\" if=\"[[item.country]]\">\n              <img\n                src$=\"[[computeVisibleCountry(item.country, countries)]]\"\n                width=\"30\"\n                height=\"20\"\n                alt=\"\"/>\n            </template>\n            <template is=\"dom-if\" if=\"[[!item.country]]\">\n              <div class=\"Off\">[[translations.off]]</div>\n            </template>\n          </div>\n        </template>\n        <template is=\"dom-if\" if=\"[[item.disabled]]\">\n          <div class=\"List_Select\">\n            <div class=\"List_Select_Button\">[[translations.select]]</div>\n          </div>\n        </template>\n        <div class=\"List_Favicon\">\n          <img src$=\"[[domainIcon(item.domain)]]\" width=\"16\" height=\"16\" alt=\"\"/>\n        </div>\n        <div class=\"List_Name\">[[item.view]]</div>\n      </div>\n      <div class=\"List_Deleted\">\n        [[translations.settingWasDeleted]]\n        <span class=\"List_Delete_Link\" on-click=\"cancelRemove\">\n          [[translations.undo]]\n        </span>\n      </div>\n      <div class=\"List_InactiveOverlay\" on-click=\"resetSelection\">&nbsp;</div>\n    </div>\n  </template>\n</div>\n"]);

    _templateObject2_b935ea005b8f11e9b4dd99419b6c54c8 = function _templateObject2_b935ea005b8f11e9b4dd99419b6c54c8() {
      return data;
    };

    return data;
  }

  function _templateObject_b935ea005b8f11e9b4dd99419b6c54c8() {
    var data = babelHelpers.taggedTemplateLiteral(["\n    <style include=\"global-style\">\n    :host{\n      display: block;\n      width: 41px;\n      height: 24px;\n      cursor: pointer;\n      position: relative;\n    }\n    :host:before{\n      content: '';\n      display: block;\n      background: #e6e6e6;\n      position: absolute;\n      top: 3px;\n      left: 0;\n      right: 3px;\n      overflow:hidden;font-size:0;text-indent:-9999px;height:0;\n      padding-top:16px;\n      border-radius: 8px;\n      transition: background-color 0.15s ease-out 0s;\n      box-shadow: inset 0 1px 2px rgba( 0, 0, 0, 0.2 );\n    }\n    :host(.checked):before{\n      background: #3b9946;\n    }\n\n    :host:after{\n      content: '';\n      display: block;\n      width: 24px;\n      overflow:hidden;font-size:0;text-indent:-9999px;height:0;\n      padding-top:24px;\n      background: url('/images/switch.png') 0 -100px no-repeat;\n      position: absolute;\n      top: 0;\n      left: 0;\n      transition: left 0.15s ease-out 0s;\n    }\n    :host(.checked):after{\n      left: 17px;\n    }\n    </style>\n    "]);

    _templateObject_b935ea005b8f11e9b4dd99419b6c54c8 = function _templateObject_b935ea005b8f11e9b4dd99419b6c54c8() {
      return data;
    };

    return data;
  }

  var domRepeatBase = (0, _head.OptionalMutableData)(_head.PolymerElement);
  /**
   * The `<dom-repeat>` element will automatically stamp and binds one instance
   * of template content to each object in a user-provided array.
   * `dom-repeat` accepts an `items` property, and one instance of the template
   * is stamped for each item into the DOM at the location of the `dom-repeat`
   * element.  The `item` property will be set on each instance's binding
   * scope, thus templates should bind to sub-properties of `item`.
   *
   * Example:
   *
   * ```html
   * <dom-module id="employee-list">
   *
   *   <template>
   *
   *     <div> Employee list: </div>
   *     <dom-repeat items="{{employees}}">
   *       <template>
   *         <div>First name: <span>{{item.first}}</span></div>
   *         <div>Last name: <span>{{item.last}}</span></div>
   *       </template>
   *     </dom-repeat>
   *
   *   </template>
   *
   * </dom-module>
   * ```
   *
   * With the following custom element definition:
   *
   * ```js
   * class EmployeeList extends PolymerElement {
   *   static get is() { return 'employee-list'; }
   *   static get properties() {
   *     return {
   *       employees: {
   *         value() {
   *           return [
   *             {first: 'Bob', last: 'Smith'},
   *             {first: 'Sally', last: 'Johnson'},
   *             ...
   *           ];
   *         }
   *       }
   *     };
   *   }
   * }
   * ```
   *
   * Notifications for changes to items sub-properties will be forwarded to template
   * instances, which will update via the normal structured data notification system.
   *
   * Mutations to the `items` array itself should be made using the Array
   * mutation API's on the PropertyEffects mixin (`push`, `pop`, `splice`,
   * `shift`, `unshift`), and template instances will be kept in sync with the
   * data in the array.
   *
   * Events caught by event handlers within the `dom-repeat` template will be
   * decorated with a `model` property, which represents the binding scope for
   * each template instance.  The model should be used to manipulate data on the
   * instance, for example `event.model.set('item.checked', true);`.
   *
   * Alternatively, the model for a template instance for an element stamped by
   * a `dom-repeat` can be obtained using the `modelForElement` API on the
   * `dom-repeat` that stamped it, for example
   * `this.$.domRepeat.modelForElement(event.target).set('item.checked', true);`.
   * This may be useful for manipulating instance data of event targets obtained
   * by event handlers on parents of the `dom-repeat` (event delegation).
   *
   * A view-specific filter/sort may be applied to each `dom-repeat` by supplying a
   * `filter` and/or `sort` property.  This may be a string that names a function on
   * the host, or a function may be assigned to the property directly.  The functions
   * should implemented following the standard `Array` filter/sort API.
   *
   * In order to re-run the filter or sort functions based on changes to sub-fields
   * of `items`, the `observe` property may be set as a space-separated list of
   * `item` sub-fields that should cause a re-filter/sort when modified.  If
   * the filter or sort function depends on properties not contained in `items`,
   * the user should observe changes to those properties and call `render` to update
   * the view based on the dependency change.
   *
   * For example, for an `dom-repeat` with a filter of the following:
   *
   * ```js
   * isEngineer(item) {
   *   return item.type == 'engineer' || item.manager.type == 'engineer';
   * }
   * ```
   *
   * Then the `observe` property should be configured as follows:
   *
   * ```html
   * <dom-repeat items="{{employees}}" filter="isEngineer" observe="type manager.type">
   * ```
   *
   * @customElement
   * @polymer
   * @extends {domRepeatBase}
   * @appliesMixin OptionalMutableData
   * @summary Custom element for stamping instance of a template bound to
   *   items in an array.
   */

  var DomRepeat =
  /*#__PURE__*/
  function (_domRepeatBase) {
    babelHelpers.inherits(DomRepeat, _domRepeatBase);
    babelHelpers.createClass(DomRepeat, null, [{
      key: "is",
      // Not needed to find template; can be removed once the analyzer
      // can find the tag name from customElements.define call
      get: function get() {
        return 'dom-repeat';
      }
    }, {
      key: "template",
      get: function get() {
        return null;
      }
    }, {
      key: "properties",
      get: function get() {
        /**
         * Fired whenever DOM is added or removed by this template (by
         * default, rendering occurs lazily).  To force immediate rendering, call
         * `render`.
         *
         * @event dom-change
         */
        return {
          /**
           * An array containing items determining how many instances of the template
           * to stamp and that that each template instance should bind to.
           */
          items: {
            type: Array
          },

          /**
           * The name of the variable to add to the binding scope for the array
           * element associated with a given template instance.
           */
          as: {
            type: String,
            value: 'item'
          },

          /**
           * The name of the variable to add to the binding scope with the index
           * of the instance in the sorted and filtered list of rendered items.
           * Note, for the index in the `this.items` array, use the value of the
           * `itemsIndexAs` property.
           */
          indexAs: {
            type: String,
            value: 'index'
          },

          /**
           * The name of the variable to add to the binding scope with the index
           * of the instance in the `this.items` array. Note, for the index of
           * this instance in the sorted and filtered list of rendered items,
           * use the value of the `indexAs` property.
           */
          itemsIndexAs: {
            type: String,
            value: 'itemsIndex'
          },

          /**
           * A function that should determine the sort order of the items.  This
           * property should either be provided as a string, indicating a method
           * name on the element's host, or else be an actual function.  The
           * function should match the sort function passed to `Array.sort`.
           * Using a sort function has no effect on the underlying `items` array.
           */
          sort: {
            type: Function,
            observer: '__sortChanged'
          },

          /**
           * A function that can be used to filter items out of the view.  This
           * property should either be provided as a string, indicating a method
           * name on the element's host, or else be an actual function.  The
           * function should match the sort function passed to `Array.filter`.
           * Using a filter function has no effect on the underlying `items` array.
           */
          filter: {
            type: Function,
            observer: '__filterChanged'
          },

          /**
           * When using a `filter` or `sort` function, the `observe` property
           * should be set to a space-separated list of the names of item
           * sub-fields that should trigger a re-sort or re-filter when changed.
           * These should generally be fields of `item` that the sort or filter
           * function depends on.
           */
          observe: {
            type: String,
            observer: '__observeChanged'
          },

          /**
           * When using a `filter` or `sort` function, the `delay` property
           * determines a debounce time in ms after a change to observed item
           * properties that must pass before the filter or sort is re-run.
           * This is useful in rate-limiting shuffling of the view when
           * item changes may be frequent.
           */
          delay: Number,

          /**
           * Count of currently rendered items after `filter` (if any) has been applied.
           * If "chunking mode" is enabled, `renderedItemCount` is updated each time a
           * set of template instances is rendered.
           *
           */
          renderedItemCount: {
            type: Number,
            notify: true,
            readOnly: true
          },

          /**
           * Defines an initial count of template instances to render after setting
           * the `items` array, before the next paint, and puts the `dom-repeat`
           * into "chunking mode".  The remaining items will be created and rendered
           * incrementally at each animation frame therof until all instances have
           * been rendered.
           */
          initialCount: {
            type: Number,
            observer: '__initializeChunking'
          },

          /**
           * When `initialCount` is used, this property defines a frame rate (in
           * fps) to target by throttling the number of instances rendered each
           * frame to not exceed the budget for the target frame rate.  The
           * framerate is effectively the number of `requestAnimationFrame`s that
           * it tries to allow to actually fire in a given second. It does this
           * by measuring the time between `rAF`s and continuously adjusting the
           * number of items created each `rAF` to maintain the target framerate.
           * Setting this to a higher number allows lower latency and higher
           * throughput for event handlers and other tasks, but results in a
           * longer time for the remaining items to complete rendering.
           */
          targetFramerate: {
            type: Number,
            value: 20
          },
          _targetFrameTime: {
            type: Number,
            computed: '__computeFrameTime(targetFramerate)'
          }
        };
      }
    }, {
      key: "observers",
      get: function get() {
        return ['__itemsChanged(items.*)'];
      }
    }]);

    function DomRepeat() {
      var _this;

      babelHelpers.classCallCheck(this, DomRepeat);
      _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(DomRepeat).call(this));
      _this.__instances = [];
      _this.__limit = Infinity;
      _this.__pool = [];
      _this.__renderDebouncer = null;
      _this.__itemsIdxToInstIdx = {};
      _this.__chunkCount = null;
      _this.__lastChunkTime = null;
      _this.__sortFn = null;
      _this.__filterFn = null;
      _this.__observePaths = null;
      /** @type {?function(new:Polymer.TemplateInstanceBase, *)} */

      _this.__ctor = null;
      _this.__isDetached = true;
      _this.template = null;
      return _this;
    }
    /**
     * @override
     * @return {void}
     */


    babelHelpers.createClass(DomRepeat, [{
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        babelHelpers.get(babelHelpers.getPrototypeOf(DomRepeat.prototype), "disconnectedCallback", this).call(this);
        this.__isDetached = true;

        for (var i = 0; i < this.__instances.length; i++) {
          this.__detachInstance(i);
        }
      }
      /**
       * @override
       * @return {void}
       */

    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        babelHelpers.get(babelHelpers.getPrototypeOf(DomRepeat.prototype), "connectedCallback", this).call(this);
        this.style.display = 'none'; // only perform attachment if the element was previously detached.

        if (this.__isDetached) {
          this.__isDetached = false;
          var parent = this.parentNode;

          for (var i = 0; i < this.__instances.length; i++) {
            this.__attachInstance(i, parent);
          }
        }
      }
    }, {
      key: "__ensureTemplatized",
      value: function __ensureTemplatized() {
        var _this2 = this;

        // Templatizing (generating the instance constructor) needs to wait
        // until ready, since won't have its template content handed back to
        // it until then
        if (!this.__ctor) {
          var _template = this.template =
          /** @type {HTMLTemplateElement} */
          this.querySelector('template');

          if (!_template) {
            // // Wait until childList changes and template should be there by then
            var observer = new MutationObserver(function () {
              if (_this2.querySelector('template')) {
                observer.disconnect();

                _this2.__render();
              } else {
                throw new Error('dom-repeat requires a <template> child');
              }
            });
            observer.observe(this, {
              childList: true
            });
            return false;
          } // Template instance props that should be excluded from forwarding


          var instanceProps = {};
          instanceProps[this.as] = true;
          instanceProps[this.indexAs] = true;
          instanceProps[this.itemsIndexAs] = true;
          this.__ctor = (0, _head.templatize)(_template, this, {
            mutableData: this.mutableData,
            parentModel: true,
            instanceProps: instanceProps,

            /**
             * @this {DomRepeat}
             * @param {string} prop Property to set
             * @param {*} value Value to set property to
             */
            forwardHostProp: function forwardHostProp(prop, value) {
              var i$ = this.__instances;

              for (var i = 0, inst; i < i$.length && (inst = i$[i]); i++) {
                inst.forwardHostProp(prop, value);
              }
            },

            /**
             * @this {DomRepeat}
             * @param {Object} inst Instance to notify
             * @param {string} prop Property to notify
             * @param {*} value Value to notify
             */
            notifyInstanceProp: function notifyInstanceProp(inst, prop, value) {
              if ((0, _head.matches)(this.as, prop)) {
                var idx = inst[this.itemsIndexAs];

                if (prop == this.as) {
                  this.items[idx] = value;
                }

                var path = (0, _head.translate)(this.as, 'items.' + idx, prop);
                this.notifyPath(path, value);
              }
            }
          });
        }

        return true;
      }
    }, {
      key: "__getMethodHost",
      value: function __getMethodHost() {
        // Technically this should be the owner of the outermost template.
        // In shadow dom, this is always getRootNode().host, but we can
        // approximate this via cooperation with our dataHost always setting
        // `_methodHost` as long as there were bindings (or id's) on this
        // instance causing it to get a dataHost.
        return this.__dataHost._methodHost || this.__dataHost;
      }
    }, {
      key: "__functionFromPropertyValue",
      value: function __functionFromPropertyValue(functionOrMethodName) {
        if (typeof functionOrMethodName === 'string') {
          var methodName = functionOrMethodName;

          var obj = this.__getMethodHost();

          return function () {
            return obj[methodName].apply(obj, arguments);
          };
        }

        return functionOrMethodName;
      }
    }, {
      key: "__sortChanged",
      value: function __sortChanged(sort) {
        this.__sortFn = this.__functionFromPropertyValue(sort);

        if (this.items) {
          this.__debounceRender(this.__render);
        }
      }
    }, {
      key: "__filterChanged",
      value: function __filterChanged(filter) {
        this.__filterFn = this.__functionFromPropertyValue(filter);

        if (this.items) {
          this.__debounceRender(this.__render);
        }
      }
    }, {
      key: "__computeFrameTime",
      value: function __computeFrameTime(rate) {
        return Math.ceil(1000 / rate);
      }
    }, {
      key: "__initializeChunking",
      value: function __initializeChunking() {
        if (this.initialCount) {
          this.__limit = this.initialCount;
          this.__chunkCount = this.initialCount;
          this.__lastChunkTime = performance.now();
        }
      }
    }, {
      key: "__tryRenderChunk",
      value: function __tryRenderChunk() {
        // Debounced so that multiple calls through `_render` between animation
        // frames only queue one new rAF (e.g. array mutation & chunked render)
        if (this.items && this.__limit < this.items.length) {
          this.__debounceRender(this.__requestRenderChunk);
        }
      }
    }, {
      key: "__requestRenderChunk",
      value: function __requestRenderChunk() {
        var _this3 = this;

        requestAnimationFrame(function () {
          return _this3.__renderChunk();
        });
      }
    }, {
      key: "__renderChunk",
      value: function __renderChunk() {
        // Simple auto chunkSize throttling algorithm based on feedback loop:
        // measure actual time between frames and scale chunk count by ratio
        // of target/actual frame time
        var currChunkTime = performance.now();
        var ratio = this._targetFrameTime / (currChunkTime - this.__lastChunkTime);
        this.__chunkCount = Math.round(this.__chunkCount * ratio) || 1;
        this.__limit += this.__chunkCount;
        this.__lastChunkTime = currChunkTime;

        this.__debounceRender(this.__render);
      }
    }, {
      key: "__observeChanged",
      value: function __observeChanged() {
        this.__observePaths = this.observe && this.observe.replace('.*', '.').split(' ');
      }
    }, {
      key: "__itemsChanged",
      value: function __itemsChanged(change) {
        if (this.items && !Array.isArray(this.items)) {
          console.warn('dom-repeat expected array for `items`, found', this.items);
        } // If path was to an item (e.g. 'items.3' or 'items.3.foo'), forward the
        // path to that instance synchronously (returns false for non-item paths)


        if (!this.__handleItemPath(change.path, change.value)) {
          // Otherwise, the array was reset ('items') or spliced ('items.splices'),
          // so queue a full refresh
          this.__initializeChunking();

          this.__debounceRender(this.__render);
        }
      }
    }, {
      key: "__handleObservedPaths",
      value: function __handleObservedPaths(path) {
        // Handle cases where path changes should cause a re-sort/filter
        if (this.__sortFn || this.__filterFn) {
          if (!path) {
            // Always re-render if the item itself changed
            this.__debounceRender(this.__render, this.delay);
          } else if (this.__observePaths) {
            // Otherwise, re-render if the path changed matches an observed path
            var paths = this.__observePaths;

            for (var i = 0; i < paths.length; i++) {
              if (path.indexOf(paths[i]) === 0) {
                this.__debounceRender(this.__render, this.delay);
              }
            }
          }
        }
      }
      /**
       * @param {function(this:DomRepeat)} fn Function to debounce.
       * @param {number=} delay Delay in ms to debounce by.
       */

    }, {
      key: "__debounceRender",
      value: function __debounceRender(fn) {
        var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        this.__renderDebouncer = _head.Debouncer.debounce(this.__renderDebouncer, delay > 0 ? _head.timeOut.after(delay) : _head.microTask, fn.bind(this));
        (0, _head.enqueueDebouncer)(this.__renderDebouncer);
      }
      /**
       * Forces the element to render its content. Normally rendering is
       * asynchronous to a provoking change. This is done for efficiency so
       * that multiple changes trigger only a single render. The render method
       * should be called if, for example, template rendering is required to
       * validate application state.
       * @return {void}
       */

    }, {
      key: "render",
      value: function render() {
        // Queue this repeater, then flush all in order
        this.__debounceRender(this.__render);

        (0, _head.flush)();
      }
    }, {
      key: "__render",
      value: function __render() {
        if (!this.__ensureTemplatized()) {
          // No template found yet
          return;
        }

        this.__applyFullRefresh(); // Reset the pool
        // TODO(kschaaf): Reuse pool across turns and nested templates
        // Now that objects/arrays are re-evaluated when set, we can safely
        // reuse pooled instances across turns, however we still need to decide
        // semantics regarding how long to hold, how many to hold, etc.


        this.__pool.length = 0; // Set rendered item count

        this._setRenderedItemCount(this.__instances.length); // Notify users


        this.dispatchEvent(new CustomEvent('dom-change', {
          bubbles: true,
          composed: true
        })); // Check to see if we need to render more items

        this.__tryRenderChunk();
      }
    }, {
      key: "__applyFullRefresh",
      value: function __applyFullRefresh() {
        var _this4 = this;

        var items = this.items || [];
        var isntIdxToItemsIdx = new Array(items.length);

        for (var i = 0; i < items.length; i++) {
          isntIdxToItemsIdx[i] = i;
        } // Apply user filter


        if (this.__filterFn) {
          isntIdxToItemsIdx = isntIdxToItemsIdx.filter(function (i, idx, array) {
            return _this4.__filterFn(items[i], idx, array);
          });
        } // Apply user sort


        if (this.__sortFn) {
          isntIdxToItemsIdx.sort(function (a, b) {
            return _this4.__sortFn(items[a], items[b]);
          });
        } // items->inst map kept for item path forwarding


        var itemsIdxToInstIdx = this.__itemsIdxToInstIdx = {};
        var instIdx = 0; // Generate instances and assign items

        var limit = Math.min(isntIdxToItemsIdx.length, this.__limit);

        for (; instIdx < limit; instIdx++) {
          var inst = this.__instances[instIdx];
          var itemIdx = isntIdxToItemsIdx[instIdx];
          var item = items[itemIdx];
          itemsIdxToInstIdx[itemIdx] = instIdx;

          if (inst) {
            inst._setPendingProperty(this.as, item);

            inst._setPendingProperty(this.indexAs, instIdx);

            inst._setPendingProperty(this.itemsIndexAs, itemIdx);

            inst._flushProperties();
          } else {
            this.__insertInstance(item, instIdx, itemIdx);
          }
        } // Remove any extra instances from previous state


        for (var _i = this.__instances.length - 1; _i >= instIdx; _i--) {
          this.__detachAndRemoveInstance(_i);
        }
      }
    }, {
      key: "__detachInstance",
      value: function __detachInstance(idx) {
        var inst = this.__instances[idx];

        for (var i = 0; i < inst.children.length; i++) {
          var el = inst.children[i];
          inst.root.appendChild(el);
        }

        return inst;
      }
    }, {
      key: "__attachInstance",
      value: function __attachInstance(idx, parent) {
        var inst = this.__instances[idx];
        parent.insertBefore(inst.root, this);
      }
    }, {
      key: "__detachAndRemoveInstance",
      value: function __detachAndRemoveInstance(idx) {
        var inst = this.__detachInstance(idx);

        if (inst) {
          this.__pool.push(inst);
        }

        this.__instances.splice(idx, 1);
      }
    }, {
      key: "__stampInstance",
      value: function __stampInstance(item, instIdx, itemIdx) {
        var model = {};
        model[this.as] = item;
        model[this.indexAs] = instIdx;
        model[this.itemsIndexAs] = itemIdx;
        return new this.__ctor(model);
      }
    }, {
      key: "__insertInstance",
      value: function __insertInstance(item, instIdx, itemIdx) {
        var inst = this.__pool.pop();

        if (inst) {
          // TODO(kschaaf): If the pool is shared across turns, hostProps
          // need to be re-set to reused instances in addition to item
          inst._setPendingProperty(this.as, item);

          inst._setPendingProperty(this.indexAs, instIdx);

          inst._setPendingProperty(this.itemsIndexAs, itemIdx);

          inst._flushProperties();
        } else {
          inst = this.__stampInstance(item, instIdx, itemIdx);
        }

        var beforeRow = this.__instances[instIdx + 1];
        var beforeNode = beforeRow ? beforeRow.children[0] : this;
        this.parentNode.insertBefore(inst.root, beforeNode);
        this.__instances[instIdx] = inst;
        return inst;
      } // Implements extension point from Templatize mixin

      /**
       * Shows or hides the template instance top level child elements. For
       * text nodes, `textContent` is removed while "hidden" and replaced when
       * "shown."
       * @param {boolean} hidden Set to true to hide the children;
       * set to false to show them.
       * @return {void}
       * @protected
       */

    }, {
      key: "_showHideChildren",
      value: function _showHideChildren(hidden) {
        for (var i = 0; i < this.__instances.length; i++) {
          this.__instances[i]._showHideChildren(hidden);
        }
      } // Called as a side effect of a host items.<key>.<path> path change,
      // responsible for notifying item.<path> changes to inst for key

    }, {
      key: "__handleItemPath",
      value: function __handleItemPath(path, value) {
        var itemsPath = path.slice(6); // 'items.'.length == 6

        var dot = itemsPath.indexOf('.');
        var itemsIdx = dot < 0 ? itemsPath : itemsPath.substring(0, dot); // If path was index into array...

        if (itemsIdx == parseInt(itemsIdx, 10)) {
          var itemSubPath = dot < 0 ? '' : itemsPath.substring(dot + 1); // If the path is observed, it will trigger a full refresh

          this.__handleObservedPaths(itemSubPath); // Note, even if a rull refresh is triggered, always do the path
          // notification because unless mutableData is used for dom-repeat
          // and all elements in the instance subtree, a full refresh may
          // not trigger the proper update.


          var instIdx = this.__itemsIdxToInstIdx[itemsIdx];
          var inst = this.__instances[instIdx];

          if (inst) {
            var itemPath = this.as + (itemSubPath ? '.' + itemSubPath : ''); // This is effectively `notifyPath`, but avoids some of the overhead
            // of the public API

            inst._setPendingPropertyOrPath(itemPath, value, false, true);

            inst._flushProperties();
          }

          return true;
        }
      }
      /**
       * Returns the item associated with a given element stamped by
       * this `dom-repeat`.
       *
       * Note, to modify sub-properties of the item,
       * `modelForElement(el).set('item.<sub-prop>', value)`
       * should be used.
       *
       * @param {!HTMLElement} el Element for which to return the item.
       * @return {*} Item associated with the element.
       */

    }, {
      key: "itemForElement",
      value: function itemForElement(el) {
        var instance = this.modelForElement(el);
        return instance && instance[this.as];
      }
      /**
       * Returns the inst index for a given element stamped by this `dom-repeat`.
       * If `sort` is provided, the index will reflect the sorted order (rather
       * than the original array order).
       *
       * @param {!HTMLElement} el Element for which to return the index.
       * @return {?number} Row index associated with the element (note this may
       *   not correspond to the array index if a user `sort` is applied).
       */

    }, {
      key: "indexForElement",
      value: function indexForElement(el) {
        var instance = this.modelForElement(el);
        return instance && instance[this.indexAs];
      }
      /**
       * Returns the template "model" associated with a given element, which
       * serves as the binding scope for the template instance the element is
       * contained in. A template model
       * should be used to manipulate data associated with this template instance.
       *
       * Example:
       *
       *   let model = modelForElement(el);
       *   if (model.index < 10) {
       *     model.set('item.checked', true);
       *   }
       *
       * @param {!HTMLElement} el Element for which to return a template model.
       * @return {TemplateInstanceBase} Model representing the binding scope for
       *   the element.
       */

    }, {
      key: "modelForElement",
      value: function modelForElement(el) {
        return (0, _head.modelForElement)(this.template, el);
      }
    }]);
    return DomRepeat;
  }(domRepeatBase);

  _exports.DomRepeat = DomRepeat;
  customElements.define(DomRepeat.is, DomRepeat);
  var domRepeat = {
    DomRepeat: DomRepeat
  };
  _exports.$domRepeat = domRepeat;

  var CheckboxSwitch =
  /*#__PURE__*/
  function (_PolymerElement) {
    babelHelpers.inherits(CheckboxSwitch, _PolymerElement);

    function CheckboxSwitch() {
      babelHelpers.classCallCheck(this, CheckboxSwitch);
      return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(CheckboxSwitch).apply(this, arguments));
    }

    babelHelpers.createClass(CheckboxSwitch, [{
      key: "observeOn",
      // Property observers
      value: function observeOn(newValue, oldValue) {
        this.classList.toggle('checked', newValue);
      }
    }], [{
      key: "template",
      get: function get() {
        return (0, _head.html)(_templateObject_b935ea005b8f11e9b4dd99419b6c54c8());
      }
    }, {
      key: "properties",
      get: function get() {
        return {
          'checked': {
            'type': Boolean,
            'notify': true,
            'observer': 'observeOn'
          }
        };
      }
    }]);
    return CheckboxSwitch;
  }(_head.PolymerElement);

  customElements.define('checkbox-switch', CheckboxSwitch);
  var template = (0, _head.html)(_templateObject2_b935ea005b8f11e9b4dd99419b6c54c8());
  _exports.$filtersTemplateDefault = template;
  var filtersTemplate = {
    default: template
  };
  /** Deferred based on Promise
  @return {Promise} */

  _exports.$filtersTemplate = filtersTemplate;

  var Deferred = function Deferred() {
    var res, rej;
    var deferred = new Promise(function (resolve, reject) {
      res = resolve;
      rej = reject;
    });
    deferred.resolve = res;
    deferred.reject = rej;
    return deferred;
  };

  _exports.$DeferredDefault = Deferred;
  var Deferred$1 = {
    default: Deferred
  };
  _exports.$Deferred = Deferred$1;
  var translations
  /*: { [ string ]: string }*/
  = (0, _head.$createTranslationObjectDefault)({
    'pleaseEnterDomain': 'please_enter_domain'
  });

  var FiltersDomain =
  /*#__PURE__*/
  function (_PolymerElement2) {
    babelHelpers.inherits(FiltersDomain, _PolymerElement2);
    babelHelpers.createClass(FiltersDomain, null, [{
      key: "template",
      get: function get() {
        return (0, _head.html)(_templateObject3_b935ea005b8f11e9b4dd99419b6c54c8());
      }
    }, {
      key: "properties",
      get: function get() {
        return {
          'translations': {
            'type': Object,
            'value': translations,
            'readOnly': true
          },
          'value': {
            'type': String,
            'value': '',
            'notify': true,
            'observer': 'observeValue'
          }
        };
      } // Lifecycle

    }]);

    function FiltersDomain() {
      var _this5;

      babelHelpers.classCallCheck(this, FiltersDomain);
      _this5 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(FiltersDomain).call(this)); // flow ignore next line

      _this5.domLoad = Deferred();
      return _this5;
    }

    babelHelpers.createClass(FiltersDomain, [{
      key: "ready",
      value: function ready() {
        var _this6 = this;

        babelHelpers.get(babelHelpers.getPrototypeOf(FiltersDomain.prototype), "ready", this).call(this);
        this.input = this.shadowRoot.querySelector('input[type="text"]');
        this.inputValue = '';
        this.input.addEventListener('input', function (_ref) {
          var value = _ref['target'].value;
          value = value.replace(/\s+/g, '').toLowerCase(); // Save caret position

          var end
          /*: integer*/
          = _this6.input.selectionEnd;
          _this6.input.value = value;
          var newEnd
          /*: integer*/
          = end > value.length ? value.length : end;

          _this6.input.setSelectionRange(newEnd, newEnd); // Restore caret position


          _this6.inputValue = value;
          _this6.value = value;
        });
        this.input.addEventListener('paste', function (event
        /*: ClipboardEvent*/
        ) {
          event.stopPropagation(); // Stop data actually being pasted into div

          event.preventDefault(); // Get pasted url via clipboard API

          var url
          /*: string*/
          = (event.clipboardData || window.clipboardData).getData('text/plain').trim();
          if (!url) return;

          try {
            _this6.value = new URL(url).hostname;
          } catch (e) {
            _this6.value = url.toLowerCase();
          } // TODO if not URL -> standard paste algorithm

        });
        this.input.addEventListener('keypress', function (event
        /*: KeyboardEvent*/
        ) {
          var code = event.code,
              which = event.which;
          if (code !== 'Enter' && which !== 13) return;
          event.preventDefault();

          _this6.dispatchEvent(new CustomEvent('save'));

          _this6.input.blur();
        });
        this.domLoad.resolve();
      } // Observers

    }, {
      key: "observeValue",
      value: function () {
        var _observeValue = babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee(newValue
        /*: string*/
        , oldValue
        /*: string*/
        ) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(newValue === oldValue)) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return");

                case 2:
                  if (!(newValue === this.inputValue)) {
                    _context.next = 4;
                    break;
                  }

                  return _context.abrupt("return");

                case 4:
                  if (this.input) {
                    _context.next = 7;
                    break;
                  }

                  _context.next = 7;
                  return this.domLoad;

                case 7:
                  this.inputValue = newValue;
                  this.input.value = newValue;

                case 9:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function observeValue(_x, _x2) {
          return _observeValue.apply(this, arguments);
        }

        return observeValue;
      }()
    }]);
    return FiltersDomain;
  }(_head.PolymerElement);

  customElements.define('filters-domain', FiltersDomain);
  var _
  /*: Lodash*/
  = window._;

  var _browser = typeof browser !== 'undefined' ? browser : chrome;
  /*::
  type AdditionFilter = {|
    'country'?: string,
    'domain': string,
    'type': 'proxy' | 'direct'
  |};
  type VisibleFilter = {|
    'country': String | null,
    'deleted': boolean,
    'disabled'?: true | void,
    'domain': string,
    'view': string
  |}; */


  var translations$1
  /*: { [ string ]: string }*/
  = (0, _head.$createTranslationObjectDefault)({
    'cancelEditing': 'cancel_editing',
    'off': 'off',
    'on': 'on',
    'pleaseEnterDomain': 'please_enter_domain',
    'pleaseEnterValidDomain': 'please_enter_valid_domain',
    'removeSmartSetting': 'remove_smart_setting',
    'select': 'select',
    'settingWasDeleted': 'setting_was_deleted',
    'thisDomainAlreadyInList': 'this_domain_already_in_list',
    'undo': 'undo',
    'use': 'use'
  });
  /** For sorting filters by alphabet
  @function */

  var alphabetFiltersSorting = function alphabetFiltersSorting(_ref2, _ref3) {
    var a = _ref2['view'];
    var b = _ref3['view'];
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  };

  var IndexFilters =
  /*#__PURE__*/
  function (_connect) {
    babelHelpers.inherits(IndexFilters, _connect);

    function IndexFilters() {
      babelHelpers.classCallCheck(this, IndexFilters);
      return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(IndexFilters).apply(this, arguments));
    }

    babelHelpers.createClass(IndexFilters, [{
      key: "stateChanged",
      value: function stateChanged(_ref4)
      /*: void*/
      {
        var servers = _ref4.servers,
            user = _ref4.user;
        this.countries = _.transform(servers, function (carry, value, country
        /*: string*/
        ) {
          var servers = value[user.premium ? 'premium_servers' : 'servers'];
          if (servers) carry.push(country);
        }, []);
        /*::( this.countries: Array<string> )*/

        this.premium = user.premium;
      } // Lifecycle

    }, {
      key: "ready",
      value: function () {
        var _ready = babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee4() {
          var _this7 = this;

          var filters;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  babelHelpers.get(babelHelpers.getPrototypeOf(IndexFilters.prototype), "ready", this).call(this);
                  this.defaultCountry = window.config.proxy.defaultCountry || 'nl';
                  this.nodes = {
                    'list': this.shadowRoot.querySelector('div.List')
                  }; // Loading list of filters

                  _context4.next = 5;
                  return Promise.all(_head.$storeDefault.getState().pac.filters.map(
                  /*#__PURE__*/
                  function () {
                    var _ref5 = babelHelpers.asyncToGenerator(
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee2(item) {
                      var view;
                      return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                          switch (_context2.prev = _context2.next) {
                            case 0:
                              item = _.cloneDeep(item);
                              item.country = item.proxyMode ? item.country : null;
                              delete item.proxyMode;
                              _context2.next = 5;
                              return _head.$punycodeDefault.toUnicode(item.domain);

                            case 5:
                              view = _context2.sent;
                              return _context2.abrupt("return", Object.assign(item, {
                                view: view,
                                'deleted': false
                              }));

                            case 7:
                            case "end":
                              return _context2.stop();
                          }
                        }
                      }, _callee2, this);
                    }));

                    return function (_x3) {
                      return _ref5.apply(this, arguments);
                    };
                  }()));

                case 5:
                  filters = _context4.sent;
                  this.filters = filters.sort(alphabetFiltersSorting); // Alphabet sorting

                  this.filters
                  /*: Array<VisibleFilter>*/
                  ; // eslint-disable-line no-unused-expressions

                  // Nodes
                  this.domainInput = this.shadowRoot.querySelector('div.ChangeRule filters-domain');
                  this.countryNode = this.shadowRoot.querySelector('div.ChangeRule_Country'); // Listener to changes of filters.length

                  this.removeStoreListener = _head.$storeDefault.compare(function (_ref6) {
                    var filters = _ref6['pac'].filters;
                    return (
                      /*: Array<SiteFilter>*/
                      filters
                    );
                  },
                  /*#__PURE__*/
                  function () {
                    var _ref7 = babelHelpers.asyncToGenerator(
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee3(listNew
                    /*: Array<SiteFilter>*/
                    , listOld
                    /*: Array<SiteFilter>*/
                    ) {
                      var action, filter, hasFilter, _filters, view, userLogined, condition, _filter, _hasFilter, _filters2;

                      return regeneratorRuntime.wrap(function _callee3$(_context3) {
                        while (1) {
                          switch (_context3.prev = _context3.next) {
                            case 0:
                              if (!(listNew.length === listOld.length)) {
                                _context3.next = 2;
                                break;
                              }

                              return _context3.abrupt("return");

                            case 2:
                              action
                              /*: string*/
                              = listNew.length > listOld.length ? 'addition' : 'deletion';

                              if (!(action === 'addition')) {
                                _context3.next = 17;
                                break;
                              }

                              filter = _.differenceBy(listNew, listOld, _.isEqual)[0];

                              if (filter) {
                                _context3.next = 7;
                                break;
                              }

                              return _context3.abrupt("return");

                            case 7:
                              hasFilter = _this7.filters.some(function (_ref8) {
                                var domain = _ref8.domain;
                                return domain === filter.domain;
                              });

                              if (!hasFilter) {
                                _context3.next = 10;
                                break;
                              }

                              return _context3.abrupt("return");

                            case 10:
                              _filters = _.cloneDeep(_this7.filters);
                              _context3.next = 13;
                              return _head.$punycodeDefault.toUnicode(filter.domain);

                            case 13:
                              view = _context3.sent;

                              _filters.push({
                                'country': filter.country,
                                'deleted': false,
                                'domain': filter.domain,
                                view: view
                              });

                              _this7.filters = _filters.sort(alphabetFiltersSorting); // Render here

                              return _context3.abrupt("return");

                            case 17:
                              if (!(action === 'deletion')) {
                                _context3.next = 32;
                                break;
                              }

                              userLogined = Boolean(_head.$storeDefault.getState().user.email); // Logout

                              condition = !userLogined && !listNew.length && listOld.length - listNew.length >= 2;

                              if (!condition) {
                                _context3.next = 23;
                                break;
                              }

                              _this7.filters = [];
                              return _context3.abrupt("return");

                            case 23:
                              _filter = _.differenceBy(listOld, listNew, _.isEqual)[0];

                              if (_filter) {
                                _context3.next = 26;
                                break;
                              }

                              return _context3.abrupt("return");

                            case 26:
                              _hasFilter
                              /*: boolean*/
                              = _this7.filters.some(function (_ref9) {
                                var deleted = _ref9.deleted,
                                    domain = _ref9.domain;
                                return domain === _filter.domain && !deleted;
                              });

                              if (_hasFilter) {
                                _context3.next = 29;
                                break;
                              }

                              return _context3.abrupt("return");

                            case 29:
                              _filters2 = _.cloneDeep(_this7.filters);

                              _.remove(_filters2, function (_ref10) {
                                var domain = _ref10.domain;
                                return domain === _filter.domain;
                              });

                              _this7.filters = _filters2; // Render here

                            case 32:
                            case "end":
                              return _context3.stop();
                          }
                        }
                      }, _callee3, this);
                    }));

                    return function (_x4, _x5) {
                      return _ref7.apply(this, arguments);
                    };
                  }());

                case 11:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        function ready() {
          return _ready.apply(this, arguments);
        }

        return ready;
      }()
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        babelHelpers.get(babelHelpers.getPrototypeOf(IndexFilters.prototype), "disconnectedCallback", this).call(this);
        this.removeStoreListener();
        delete this.removeStoreListener;
        if (!this.documentClick) return;
        document.removeEventListener('mousedown', this.documentClick);
      } // Computed properties

      /** @method */

    }, {
      key: "classButton",
      value: function classButton(site)
      /*: string*/
      {
        return site ? 'save' : '';
      }
      /** @method */

    }, {
      key: "classElement",
      value: function classElement(_ref11, selectedDomain)
      /*: string*/
      {
        var deleted = _ref11.deleted,
            disabled = _ref11.disabled,
            domain = _ref11.domain;
        var classes = [];
        if (deleted) classes.push('deleted');
        if (disabled) classes.push('disabled');

        if (selectedDomain) {
          classes.push(domain === selectedDomain ? 'active' : 'inactive');
        }

        return classes.join(' ');
      }
      /** @method */

    }, {
      key: "computeVisibleCountry",
      value: function computeVisibleCountry(country, countries
      /*: Array<string>*/
      )
      /*: string*/
      {
        var code
        /*: string*/
        = countries.includes(country) ? country : this.defaultCountry;
        return "/images/flags/".concat(code, ".png");
      }
      /** @method */

    }, {
      key: "domainIcon",
      value: function domainIcon(domain
      /*?: string*/
      )
      /*: string*/
      {
        return domain ? 'https://www.google.com/s2/favicons?domain=' + domain : '/images/empty.png';
      } // Methods

      /** @method */

    }, {
      key: "cancelRemove",
      value: function cancelRemove(_ref12)
      /*: void*/
      {
        var model = _ref12.model;
        var condition = this.filters.filter(function (_ref13) {
          var deleted = _ref13.deleted,
              disabled = _ref13.disabled;
          return !deleted && !disabled;
        }).length && !_head.$storeDefault.getState().user.premium;

        if (condition) {
          // Premium popup show condition
          this.showPremiumPopup();
          return;
        }

        var _model$get = model.get('item'),
            country = _model$get.country,
            domain = _model$get.domain;

        var filters = _.cloneDeep(this.filters);

        filters.find(function (item) {
          return item.domain === domain;
        }).deleted = false;
        this.filters = filters; // Render here

        var data
        /*: AdditionFilter*/
        = {
          domain: domain,
          'type': country ? 'proxy' : 'direct'
        };
        if (country) data.country = country;

        _head.$proxyDefault.siteFilters.add(data);
      }
      /** @method */

    }, {
      key: "listClick",
      value: function listClick(_ref14) {
        var target = _ref14.target;
        if (target !== this.nodes.list) return;
        this.resetSelection();
      }
      /** @method */

    }, {
      key: "listElementClick",
      value: function listElementClick(_ref15)
      /*: void*/
      {
        var model = _ref15.model,
            target = _ref15.target;
        if (!babelHelpers.instanceof(target, HTMLElement)) return;

        var _model$get2 = model.get('item'),
            country = _model$get2.country,
            disabled = _model$get2.disabled,
            domain = _model$get2.domain,
            view = _model$get2.view; // Remove click


        if (target.classList.contains('List_Remove')) {
          var filters
          /*: Array<VisibleFilter>*/
          = _.cloneDeep(this.filters);

          var filter
          /*: VisibleFilter | void*/
          = filters.find(function (item) {
            return item.domain === domain;
          });
          if (filter) filter.deleted = true; // Flow crap

          this.filters = filters; // Render here

          _head.$proxyDefault.siteFilters.remove(domain);

          this.resetSelection();
          return;
        } // Select disabled click


        if (target.classList.contains('List_Select_Button')) {
          {
            // Popup part
            var _filters3
            /*: Array<VisibleFilter>*/
            = _.cloneDeep(this.filters);

            var _filter2
            /*: VisibleFilter | void*/
            = _filters3.find(function (_ref16) {
              var disabled = _ref16.disabled;
              return !disabled;
            });

            if (_filter2) _filter2.disabled = true;
            {
              var _filter3
              /*: VisibleFilter | void*/
              = _filters3.find(function (_ref17) {
                var ownDomain = _ref17['domain'];
                return domain === ownDomain;
              });

              if (_filter3) delete _filter3.disabled; // Flow crap
            }
            this.filters = _filters3; // Render here
          } // Internal extension part

          (0, _sendMessage.$sendMessageDefault)({
            'type': 'select disabled site filter',
            domain: domain
          });
          return;
        } // Disabled element


        if (disabled) {
          this.resetSelection();
          return;
        } // Activate click


        this.country = country;
        this.domain = view;
        this.selectedDomain = domain;
      }
    }, {
      key: "openCountryList",
      value: function openCountryList()
      /*: void*/
      {
        var _this8 = this;

        /*::
        type FiltersCountryList = HTMLElement & {
          'countries'?: {
            'code': string,
            'name': string
          },
          'country'?: string
        }; */
        var element
        /*: FiltersCountryList*/
        = document.createElement('filters-country-list');
        element.countries = this.countries.map(function (country) {
          return {
            'code': country,
            'name': _browser.i18n.getMessage('country_name_' + country.toUpperCase())
          };
        }).sort(function (_ref18, _ref19) {
          var a = _ref18['name'];
          var b = _ref19['name'];
          if (a < b) return -1;
          if (a > b) return 1;
          return 0;
        });
        element.country = this.country;
        element.addEventListener('select', function (_ref20) {
          var country = _ref20['detail'];

          /*::( country: string );*/
          _this8.country = country;
        });
        element.addEventListener('disable', function () {
          _this8.country = null;
        });

        var _this$countryNode$get = this.countryNode.getBoundingClientRect(),
            offsetLeft = _this$countryNode$get['left'],
            offsetTop = _this$countryNode$get['top'];

        var offsetHeight
        /*: integer*/
        = this.countryNode.offsetHeight;
        var top
        /*: integer*/
        = offsetTop + offsetHeight;
        var right
        /*: integer*/
        = window.innerWidth - offsetLeft - this.countryNode.offsetWidth;
        var height
        /*: integer*/
        = window.innerHeight - offsetTop - offsetHeight;
        element.style.cssText = "top:".concat(top, "px;right:").concat(right, "px;max-height:").concat(height, "px;");
        if (document.body) document.body.append(element); // Flow crap

        this.documentClick = function (_ref21) {
          var target = _ref21.target;

          // Click on element
          if (babelHelpers.instanceof(target, HTMLElement) && (element.contains(target) || target === element)) {
            if (target.classList.contains('E')) {
              document.removeEventListener('mousedown', _this8.documentClick);
              delete _this8.documentClick;
              return;
            }

            var parent;

            while (true) {
              parent = (parent || target).parentElement;
              if (!parent) break;

              if (parent.classList.contains('E')) {
                document.removeEventListener('mousedown', _this8.documentClick);
                delete _this8.documentClick;
                return;
              }
            } // Do nothing


            return;
          }

          element.remove();
          document.removeEventListener('mousedown', _this8.documentClick);
          delete _this8.documentClick;
        };

        document.addEventListener('mousedown', this.documentClick
        /*: MouseEventListener*/
        );
      }
      /** @method */

    }, {
      key: "resetSelection",
      value: function resetSelection()
      /*: void*/
      {
        this.country = null;
        this.domain = '';
        this.selectedDomain = null;
      }
      /** Add or modify filter
      @method */

    }, {
      key: "save",
      value: function () {
        var _save = babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee5() {
          var _this9 = this;

          var domainView, domain, createError, parts, isIp, hasErrors, zone, domains, condition, filter, filters, _filters4;

          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  // visible form for domain (for user)
                  domainView
                  /*: string*/
                  = this.domain; // punycode converted form for domain

                  _context5.next = 3;
                  return _head.$punycodeDefault.toASCII(domainView);

                case 3:
                  domain
                  /*: string | void*/
                  = _context5.sent;

                  if (!(typeof domain === 'undefined')) {
                    _context5.next = 6;
                    break;
                  }

                  return _context5.abrupt("return");

                case 6:
                  // Crap from punycode case

                  /** @function */
                  createError = function createError(text
                  /*: string*/
                  )
                  /*: void*/
                  {
                    var element
                    /*: HTMLElement & { 'text'?: string }*/
                    = document.createElement('tooltip-error');
                    element.text = text;

                    var _this9$domainInput$ge = _this9.domainInput.getBoundingClientRect(),
                        left = _this9$domainInput$ge.left,
                        top = _this9$domainInput$ge.top;

                    top += _this9.domainInput.offsetHeight - 1;
                    element.style.cssText = "top:".concat(top, "px;left:").concat(left, "px;");
                    if (document.body) document.body.append(element); // Flow crap

                    var listener = function () {
                      var first = true;
                      return function () {
                        if (first) {
                          first = false;
                          return;
                        }

                        element.remove();
                        document.removeEventListener('click', listener);
                      };
                    }();

                    document.addEventListener('click', listener);
                  }; // Check for value existence


                  if (domainView) {
                    _context5.next = 10;
                    break;
                  }

                  createError(translations$1.pleaseEnterDomain);
                  return _context5.abrupt("return");

                case 10:
                  if (!(domain.split('.').length === 1)) {
                    _context5.next = 13;
                    break;
                  }

                  createError(translations$1.pleaseEnterValidDomain);
                  return _context5.abrupt("return");

                case 13:
                  // Check for correct domain
                  parts
                  /*: Array<string>*/
                  = domain.split('.');
                  isIp
                  /*: boolean*/
                  = parts.length === 4 && parts.every(function (part) {
                    return /^[0-9]+$/.test(part) && Number(part) >= 0 && Number(part) <= 255;
                  });
                  hasErrors
                  /*: boolean*/
                  = !isIp && parts.some(function (part) {
                    return !/^[a-zA-Z0-9-_]+$/.test(part);
                  });

                  if (!hasErrors) {
                    _context5.next = 19;
                    break;
                  }

                  createError(translations$1.pleaseEnterValidDomain);
                  return _context5.abrupt("return");

                case 19:
                  if (isIp) {
                    _context5.next = 24;
                    break;
                  }

                  // Check for correct domain zone
                  zone
                  /*: string*/
                  = domain.split('.').pop();

                  if (window.domainZoneList.includes(zone)) {
                    _context5.next = 24;
                    break;
                  }

                  createError(translations$1.pleaseEnterValidDomain);
                  return _context5.abrupt("return");

                case 24:
                  if (this.selectedDomain) {
                    _context5.next = 29;
                    break;
                  }

                  domains
                  /*: Array<string>*/
                  = this.filters.map(function (_ref22) {
                    var domain = _ref22.domain;
                    return domain;
                  });

                  if (!domains.includes(domain)) {
                    _context5.next = 29;
                    break;
                  }

                  createError(translations$1.thisDomainAlreadyInList);
                  return _context5.abrupt("return");

                case 29:
                  if (this.selectedDomain) {
                    _context5.next = 42;
                    break;
                  }

                  condition = this.filters.filter(function (_ref23) {
                    var deleted = _ref23.deleted,
                        disabled = _ref23.disabled;
                    return !deleted && !disabled;
                  }).length && !_head.$storeDefault.getState().user.premium;

                  if (!condition) {
                    _context5.next = 34;
                    break;
                  }

                  // Premium popup show condition
                  this.showPremiumPopup();
                  return _context5.abrupt("return");

                case 34:
                  (0, _sendMessage.$sendMessageDefault)({
                    'type': 'сounters.increase',
                    'property': 'popup: smart settings: add rule'
                  });
                  filter
                  /*: AdditionFilter*/
                  = this.country ? {
                    'country': this.country,
                    domain: domain,
                    'type': 'proxy'
                  } : {
                    domain: domain,
                    'type': 'direct'
                  }; // Popup part

                  filters = this.filters.slice();
                  filters.unshift({
                    'country': this.country,
                    'deleted': false,
                    domain: domain,
                    'view': domainView
                  });
                  this.filters = filters; // Internal extension part

                  _head.$proxyDefault.siteFilters.add(filter);

                  _context5.next = 48;
                  break;

                case 42:
                  // Popup part
                  _filters4 = this.filters.slice();

                  _.remove(_filters4, function (_ref24) {
                    var domain = _ref24.domain;
                    return domain === _this9.selectedDomain;
                  });

                  _filters4.push({
                    'country': this.country,
                    'deleted': false,
                    domain: domain,
                    'view': domainView
                  });

                  _filters4.sort(alphabetFiltersSorting);

                  this.filters = _filters4;
                  // Internal extension part
                  (0, _sendMessage.$sendMessageDefault)({
                    'type': 'change site filter',
                    'country': this.country,
                    domain: domain,
                    'selectedDomain': this.selectedDomain
                  });

                case 48:
                  // After successfull addition/modification
                  this.resetSelection();

                case 49:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, this);
        }));

        function save() {
          return _save.apply(this, arguments);
        }

        return save;
      }()
      /** @method */

    }, {
      key: "showPremiumPopup",
      value: function () {
        var _showPremiumPopup = babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee6() {
          var popupPremium;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  if (!this.popupPremiumFreeze) {
                    _context6.next = 2;
                    break;
                  }

                  return _context6.abrupt("return");

                case 2:
                  this.popupPremiumFreeze = true;
                  popupPremium = document.createElement('popup-premium-onerule');
                  popupPremium.style.cssText = 'top:-100%;';
                  if (document.body) document.body.append(popupPremium); // Flow crap

                  (0, _head.$gaDefault)('premium', 'show');
                  _context6.next = 9;
                  return window.anime({
                    'targets': popupPremium,
                    'top': 0,
                    'duration': 800,
                    'easing': 'linear'
                  }).finished;

                case 9:
                  popupPremium.style.cssText = '';
                  this.popupPremiumFreeze = false;

                case 11:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6, this);
        }));

        function showPremiumPopup() {
          return _showPremiumPopup.apply(this, arguments);
        }

        return showPremiumPopup;
      }()
    }], [{
      key: "template",
      get: function get() {
        return template;
      }
    }, {
      key: "properties",
      get: function get() {
        return {
          'country': {
            // Country in flag select
            'type': String,
            'value': null
          },
          'countries': {
            'type': Array,
            'value': []
          },
          'domain': {
            // Input:text with domain
            'type': String,
            'value': ''
          },
          'filters': {
            'type': Array,
            'value': []
          },
          'premium': {
            'type': Boolean,
            'value': null
          },
          'selectedDomain': {
            // Used to split 'add' mode and 'modify' mode
            'type': String,
            'value': null
          },
          'translations': {
            'type': Object,
            'value': translations$1,
            'readOnly': true
          }
        };
      }
    }]);
    return IndexFilters;
  }((0, _head.connect)(_head.$storeDefault)(_head.PolymerElement));

  customElements.define('index-filters', IndexFilters);
  var storage = {
    /** @method */
    'get': function get(key
    /*: string*/
    ) {
      return (0, _sendMessage.$sendMessageDefault)({
        'type': 'storage.get',
        key: key
      });
    },

    /** @method */
    'set': function set(key
    /*: string*/
    , value
    /*: any*/
    ) {
      return (0, _sendMessage.$sendMessageDefault)({
        'type': 'storage.set',
        key: key,
        value: value
      });
    }
  };
  _exports.$storageDefault = storage;
  var storage$1 = {
    default: storage
  };
  _exports.$storage = storage$1;
  var template$1 = (0, _head.html)(_templateObject4_b935ea005b8f11e9b4dd99419b6c54c8());
  _exports.$homeTemplateDefault = template$1;
  var homeTemplate = {
    default: template$1
  };
  /*::
  type TreeTextNode = {|
    'text': string
  |};
  
  type TreeElement = {|
    'attributes': ?Object,
    'children': Array<TreeElement>,
    'class': ?string,
    'node': ?Function,
    'style': ?string,
    'tag': string,
    'text': ?string
  |}; */

  _exports.$homeTemplate = homeTemplate;
  var possibleAttributes
  /*: Array<string>*/
  = Object.freeze(['autocomplete', 'colspan', 'href', 'name', 'rowspan', 'target', 'type']);
  /** Self-looped function to create elements tree
  @Function */

  var createElement = function createElement(object
  /*: TreeTextNode | TreeElement*/
  )
  /*: Node*/
  {
    if (typeof object.tag !== 'string') {
      if (typeof object.text !== 'string') {
        throw new Error('createElement called without text property');
      }

      return document.createTextNode(object.text);
    }

    var element = document.createElement(object.tag);
    if (object.class) element.setAttribute('class', object.class);
    if (object.style) element.setAttribute('style', object.style);

    if (object.attributes) {
      Object.keys(object.attributes).forEach(function (attribute) {
        if (possibleAttributes.indexOf(attribute) === -1) return; // flow ignore next line

        var value = object.attributes[attribute];
        element.setAttribute(attribute, value);
      });
    }

    if (object.node) object.node(element);
    if (object.text) element.textContent = object.text;

    if (object.children) {
      var children
      /*: Array<Node>*/
      = [];
      object.children.forEach(function (child) {
        children.push(createElement(child));
      });
      children.forEach(function (child) {
        element.appendChild(child);
      });
    }

    return element;
  };

  _exports.$createElementDefault = createElement;
  var createElement$1 = {
    default: createElement
  };
  _exports.$createElement = createElement$1;
  var template$2 = (0, _head.html)(_templateObject5_b935ea005b8f11e9b4dd99419b6c54c8());
  _exports.$promoTemplateDefault = template$2;
  var promoTemplate = {
    default: template$2
  };
  /** Returns random int value between 0 (inclusive) and the specified value (exclusive)
  @function */

  _exports.$promoTemplate = promoTemplate;

  var randomInt = function randomInt(max
  /*: integer*/
  ) {
    return (
      /*: number*/
      Math.floor(Math.random() * max)
    );
  };
  /**
  Returns random array element using weights. Element weight should be stored in 'weight' property of array element.
  If 'weight' property is absent then weight for this element is 1.
  @function
  @return - one of array elements */
  // flow ignore next line


  var weightedRandom = function weightedRandom(array
  /*: Array<Object>*/
  )
  /*: Object*/
  {
    var totalWeight = 0;
    var map = array.map(function (_ref25) {
      var weight = _ref25.weight;
      weight = weight || 1;
      var start = totalWeight;
      totalWeight += weight;
      return {
        start: start,
        'end': totalWeight
      };
    });
    var random = randomInt(totalWeight);

    for (var i = 0; i < map.length; i++) {
      if (random >= map[i].start && random < map[i].end) {
        return array[i];
      }
    }
  };

  _exports.$weightedRandomDefault = weightedRandom;
  var weightedRandom$1 = {
    default: weightedRandom
  };
  _exports.$weightedRandom = weightedRandom$1;
  var _$1
  /*: Lodash*/
  = window._;
  /*::
  type PromoItem = {|
  'node': HTMLElement | null,
  'weight': number,
  'premium': boolean,
  'name': string,
  'gaId': string
  |};
  */

  var price
  /*: string*/
  = '3.33';
  var translations$2
  /*: { [ string ]: string }*/
  = (0, _head.$createTranslationObjectDefault)({
    'continueUsing': 'continue_using_premium',
    'getFreePremium': 'get_free_premium',
    'getTurboSpeed': 'get_turbo_speed',
    'goAheadAndRenewIt': 'go_ahead_and_renew_it',
    'moneyBackGuarantee': '7_days_money_back_guarantee',
    'premiumIsAboutToExpire': 'your_premium_is_about_to_expire',
    'turboSpeedInFree': 'turbo_speed_in_free_premium',
    'upgradeConnectionSpeed': 'upgrade_connection_speed'
  });
  translations$2.fromOnlyPricePerMonth = (0, _head.$internationalizeDefault)('from_only_X_per_month').replace(/XXX/g, price);

  var IndexHomePromo =
  /*#__PURE__*/
  function (_connect2) {
    babelHelpers.inherits(IndexHomePromo, _connect2);

    function IndexHomePromo() {
      babelHelpers.classCallCheck(this, IndexHomePromo);
      return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(IndexHomePromo).apply(this, arguments));
    }

    babelHelpers.createClass(IndexHomePromo, [{
      key: "stateChanged",
      value: function stateChanged(_ref26)
      /*: void*/
      {
        var days = _ref26['daysAfterInstall'],
            user = _ref26.user;
        var _window = window,
            browsecLink = _window.browsecLink;
        this.expirationPremiumLink = browsecLink(window.pageLinks.base + '/en/orders/new?plan_id=annual', function (search) {
          return Object.assign(search, {
            'utm_source': 'Chromium extension'
          });
        });
        this.premiumLink = browsecLink(window.pageLinks.premium, function (search) {
          return Object.assign(search, {
            'utm_source': 'Chromium extension',
            'utm_medium': 'banner',
            'utm_campaign': 'banner-' + 'banner_speed_new'
          });
        });

        this.user = function () {
          var localUser = _$1.cloneDeep(user);

          delete localUser.validUntil;
          delete localUser.version;
          return localUser;
        }();
      } // Lifecycle

    }, {
      key: "ready",
      value: function ready() {
        var _this10 = this;

        babelHelpers.get(babelHelpers.getPrototypeOf(IndexHomePromo.prototype), "ready", this).call(this); // Force redux state to be ready

        this.stateChanged(_head.$storeDefault.getState()); // Deleting all empty text nodes

        Array.from(this.shadowRoot.childNodes).filter(function (node) {
          return node.nodeType !== Node.ELEMENT_NODE;
        }).forEach(function (node) {
          _this10.shadowRoot.removeChild(node);
        }); // Getting all data from other nodes

        this.elements = Array.from(this.shadowRoot.children).filter(function (element) {
          return element.tagName.toLowerCase() !== 'style';
        }).map(function (element) {
          return {
            'node': element.querySelector('a'),
            'weight': Number(element.dataset.weight) || 1,
            'premium': element.dataset.premium === 'true',
            'name': element.dataset.name || '',
            'gaId': element.dataset.ga
          };
        });
        this.elements
        /*: Array<PromoItem>*/
        ; // eslint-disable-line no-unused-expressions
        // Initial render

        this.setActivePromo(this.user); // Click on links

        this.elements.filter(function (_ref27) {
          var node = _ref27.node;
          return node;
        }).forEach(function (_ref28) {
          var node = _ref28.node,
              gaId = _ref28.gaId;
          node.addEventListener('click',
          /*#__PURE__*/
          babelHelpers.asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    if (gaId) {
                      (0, _head.$gaDefault)({
                        'category': 'banner',
                        'action': 'click',
                        'label': gaId
                      });
                    }

                    _context7.next = 3;
                    return new Promise(function (resolve) {
                      setTimeout(resolve, 50);
                    });

                  case 3:
                    if (window && window.close) window.close();

                  case 4:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          })));
        });
      } // Observers

      /** @method */

    }, {
      key: "observeVisible",
      value: function observeVisible(visible)
      /*: void*/
      {
        this.classList.toggle('visible', visible);
        this.dispatchEvent(new CustomEvent('visible', {
          'detail': {
            visible: visible
          }
        }));
      } // Condition rendering

      /** @method */

    }, {
      key: "conditionShowPromo",
      value: function conditionShowPromo(promo
      /*: integer | null*/
      , number
      /*: integer*/
      )
      /*: boolean*/
      {
        return promo === number;
      } // Methods

    }, {
      key: "expirationClose",
      value: function () {
        var _expirationClose = babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee8() {
          var untilDate;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  untilDate = new Date(this.user.subscription.paidUntil);
                  _context8.next = 3;
                  return storage.set('userClosedWarnToPremiumEndDate', String(untilDate));

                case 3:
                  this.setActivePromo(this.user);

                case 4:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8, this);
        }));

        function expirationClose() {
          return _expirationClose.apply(this, arguments);
        }

        return expirationClose;
      }()
    }, {
      key: "setActivePromo",
      value: function () {
        var _setActivePromo = babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee10(user) {
          var _this11 = this;

          var promos, activePromo, visible;
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  if (this.elements) {
                    _context10.next = 2;
                    break;
                  }

                  return _context10.abrupt("return");

                case 2:
                  _context10.next = 4;
                  return babelHelpers.asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee9() {
                    var promos, untilDate, userClosedWarnToPremiumEndDate, condition, promotion, parent, link;
                    return regeneratorRuntime.wrap(function _callee9$(_context9) {
                      while (1) {
                        switch (_context9.prev = _context9.next) {
                          case 0:
                            promos = _this11.elements.slice(1);
                            promos = promos.filter(function (_ref31) {
                              var premium = _ref31.premium;
                              return premium === user.premium;
                            }); // Premium user

                            if (!user.premium) {
                              _context9.next = 9;
                              break;
                            }

                            untilDate = new Date(user.subscription.paidUntil);
                            _context9.next = 6;
                            return storage.get('userClosedWarnToPremiumEndDate');

                          case 6:
                            userClosedWarnToPremiumEndDate = _context9.sent;
                            condition = _$1.get(user, 'subscription.auto_renewal') || // Only payment without subscription
                            userClosedWarnToPremiumEndDate === String(untilDate) || Date.now() < untilDate.getTime() - 1000 * 3600 * 24 * 2; // Minus two days before expiration

                            return _context9.abrupt("return", promos.filter(function (_ref32) {
                              var name = _ref32.name;
                              return !condition && name === 'premium expiration soon' || condition && name !== 'premium expiration soon';
                            }));

                          case 9:
                            _context9.next = 11;
                            return (0, _sendMessage.$sendMessageDefault)({
                              'type': 'get promotions'
                            });

                          case 11:
                            promotion
                            /*: Object | void*/
                            = _context9.sent;

                            if (!promotion) {
                              _context9.next = 20;
                              break;
                            }

                            parent = _this11.shadowRoot.querySelector('div.Downloadable');
                            link = document.createElement('a');
                            link.setAttribute('href', window.config.baseUrl + '/en/orders/new?plan_id=annual');
                            link.setAttribute('target', '_blank'); // Appending nodes

                            parent.appendChild(createElement(promotion));
                            parent.appendChild(link);
                            return _context9.abrupt("return", [_this11.elements[0]]);

                          case 20:
                            // Free user
                            promos = promos.filter(function (_ref33) {
                              var gaId = _ref33.gaId;
                              return window.showSpeedPromo && gaId === 'banner_speed_new' || !window.showSpeedPromo && gaId !== 'banner_speed_new';
                            });
                            return _context9.abrupt("return", promos);

                          case 22:
                          case "end":
                            return _context9.stop();
                        }
                      }
                    }, _callee9, this);
                  }))();

                case 4:
                  promos
                  /*: Array<PromoItem>*/
                  = _context10.sent;
                  if (promos.length > 1) promos = [weightedRandom(promos)];
                  activePromo
                  /*: PromoItem | null*/
                  = promos.length === 1 ? promos.pop() : null;

                  if (activePromo && activePromo.gaId) {
                    (0, _head.$gaDefault)({
                      'category': 'banner',
                      'action': 'show',
                      'label': activePromo.gaId
                    });
                  }

                  this.activePromo = activePromo ? this.elements.indexOf(activePromo) : null;
                  visible
                  /*: boolean*/
                  = this.activePromo !== null;
                  if (visible !== this.visible) this.visible = visible;

                case 11:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10, this);
        }));

        function setActivePromo(_x6) {
          return _setActivePromo.apply(this, arguments);
        }

        return setActivePromo;
      }()
    }], [{
      key: "template",
      get: function get() {
        return template$2;
      }
    }, {
      key: "properties",
      get: function get() {
        return {
          'expirationPremiumLink': {
            'type': String
          },
          'premiumLink': {
            'type': String
          },
          'translations': {
            'type': Object,
            'value': translations$2,
            'readOnly': true
          },
          'user': {
            'type': Object,
            'observer': 'setActivePromo'
          },
          'activePromo': {
            'type': Number,
            'value': null,
            'notify': true
          },
          'visible': {
            'type': Boolean,
            'value': null,
            'notify': true,
            'observer': 'observeVisible'
          }
        };
      }
    }]);
    return IndexHomePromo;
  }((0, _head.connect)(_head.$storeDefault)(_head.PolymerElement));

  customElements.define('index-home-promo', IndexHomePromo);
  var translations$3
  /*: { [ string ]: string }*/
  = (0, _head.$createTranslationObjectDefault)({
    'otherWebsites': 'other_websites'
  });

  var IndexHomeSwitches =
  /*#__PURE__*/
  function (_PolymerElement3) {
    babelHelpers.inherits(IndexHomeSwitches, _PolymerElement3);

    function IndexHomeSwitches() {
      babelHelpers.classCallCheck(this, IndexHomeSwitches);
      return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(IndexHomeSwitches).apply(this, arguments));
    }

    babelHelpers.createClass(IndexHomeSwitches, [{
      key: "flagUrl",
      // Computed properties
      value: function flagUrl(flag
      /*: string | void*/
      )
      /*: string*/
      {
        return flag ? "/images/flags/".concat(flag, ".png") : '/images/empty.png';
      } // Methods

    }, {
      key: "proxySwitch",
      value: function proxySwitch()
      /*: void*/
      {
        this.dispatchEvent(new CustomEvent('proxyswitch'));
      }
    }, {
      key: "domainProxySwitch",
      value: function domainProxySwitch()
      /*: void*/
      {
        this.dispatchEvent(new CustomEvent('domainproxyswitch'));
      }
    }, {
      key: "countryChange",
      value: function countryChange()
      /*: void*/
      {
        this.dispatchEvent(new CustomEvent('countrychange'));
      }
    }, {
      key: "domainCountryChange",
      value: function domainCountryChange()
      /*: void*/
      {
        this.dispatchEvent(new CustomEvent('domaincountrychange'));
      }
    }], [{
      key: "template",
      get: function get() {
        return (0, _head.html)(_templateObject6_b935ea005b8f11e9b4dd99419b6c54c8());
      }
    }, {
      key: "properties",
      get: function get() {
        return {
          'proxyEnabled': {
            'type': Boolean,
            'notify': true
          },
          'proxyCountry': {
            'type': String,
            'notify': true
          },
          'translations': {
            'type': Object,
            'value': translations$3,
            'readOnly': true
          },
          'view': {
            'type': Object,
            'notify': true
          }
        };
      }
    }]);
    return IndexHomeSwitches;
  }(_head.PolymerElement);

  customElements.define('index-home-switches', IndexHomeSwitches);
  var _$2
  /*: Lodash*/
  = window._;
  var translations$4
  /*: { [ string ]: string }*/
  = (0, _head.$createTranslationObjectDefault)({
    'change': 'change',
    'connectionsNotEncrypted': 'your_browsers_connections_are_not_encrypted',
    'privacyProtected': 'your_privacy_is_protected',
    'protectionDisabled': 'privacy_protection_disabled',
    'protectMe': 'protect_me'
  });
  /** @function */

  var getSettingsIconNewFeature =
  /*#__PURE__*/
  function () {
    var _ref34 = babelHelpers.asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee11() {
      var storageValue, featureNotShown;
      return regeneratorRuntime.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              _context11.next = 2;
              return storage.get('newSettingsFeatureTimezoneChange1');

            case 2:
              storageValue = _context11.sent;
              featureNotShown
              /*: boolean*/
              = typeof storageValue === 'boolean' ? storageValue : true;

              if (!featureNotShown) {
                _context11.next = 6;
                break;
              }

              return _context11.abrupt("return", true);

            case 6:
              return _context11.abrupt("return", Boolean(_head.$storeDefault.getState().webrtcBlock && !_head.$permissionsDefault.includes('privacy') // Can be true only in Chrome
              ));

            case 7:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11, this);
    }));

    return function getSettingsIconNewFeature() {
      return _ref34.apply(this, arguments);
    };
  }();

  var IndexHome =
  /*#__PURE__*/
  function (_connect3) {
    babelHelpers.inherits(IndexHome, _connect3);

    function IndexHome() {
      babelHelpers.classCallCheck(this, IndexHome);
      return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(IndexHome).apply(this, arguments));
    }

    babelHelpers.createClass(IndexHome, [{
      key: "stateChanged",
      value: function stateChanged(_ref35)
      /*: void*/
      {
        var _this12 = this;

        var domain = _ref35.domain,
            servers = _ref35.servers,
            pac = _ref35.pac,
            ping = _ref35.ping,
            user = _ref35.user;
        this.countries = _$2.transform(servers, function (carry, value, country) {
          var servers = value[user.premium ? 'premium_servers' : 'servers'];
          if (servers) carry.push(country);
        }, []);
        this.country = pac.country;
        this.proxyEnabled = pac.mode === 'proxy';
        /*::
        type ComplexView = {|
          'country'?: string,
          'domain'?: string,
          'enabled': boolean,
          'on'?: boolean,
          'rating'?: integer,
          'view'?: string
        |};
        */

        babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee12() {
          var pacCountry, filters, premiumUser, rating, filter, country, proxyMode, view, countries;
          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) {
              switch (_context12.prev = _context12.next) {
                case 0:
                  pacCountry = pac['country'], filters = pac.filters;
                  premiumUser = user['premium'];

                  rating
                  /*: integer | void*/
                  = function () {
                    if (!ping.length || !pacCountry) return;
                    var delayData
                    /*: PingRating | void*/
                    = ping.find(function (_ref37) {
                      var country = _ref37.country,
                          premium = _ref37.premium;
                      return country === pacCountry && premium === premiumUser;
                    });
                    if (!delayData) return;
                    return delayData.mark;
                  }();

                  if (domain) {
                    _context12.next = 6;
                    break;
                  }

                  _this12.complexView = {
                    'enabled': false,
                    rating: rating
                  };
                  return _context12.abrupt("return");

                case 6:
                  filter
                  /*: SiteFilter | void*/
                  = filters.find(function (_ref38) {
                    var disabled = _ref38.disabled,
                        ownDomain = _ref38['domain'];
                    return !disabled && domain && domain.endsWith(ownDomain);
                  } // Flow crap
                  );

                  if (filter) {
                    _context12.next = 10;
                    break;
                  }

                  _this12.complexView = {
                    'enabled': false,
                    rating: rating
                  };
                  return _context12.abrupt("return");

                case 10:
                  country = filter.country, proxyMode = filter.proxyMode;
                  domain = filter.domain;
                  _context12.next = 14;
                  return _head.$punycodeDefault.toUnicode(domain);

                case 14:
                  view
                  /*: string*/
                  = _context12.sent;

                  if (proxyMode) {
                    _context12.next = 18;
                    break;
                  }

                  _this12.complexView = {
                    domain: domain,
                    'enabled': true,
                    'on': false,
                    view: view
                  };
                  return _context12.abrupt("return");

                case 18:
                  // Proxy filter
                  countries
                  /*: Array<string>*/
                  = _$2.transform(servers, function (carry, value, country
                  /*: string*/
                  ) {
                    var servers = value[premiumUser ? 'premium_servers' : 'servers'];
                    if (servers) carry.push(country);
                  }, []);
                  _this12.complexView = {
                    'country': countries.includes(country) ? country : _this12.defaultCountry,
                    domain: domain,
                    'enabled': true,
                    'on': true,
                    view: view
                  };

                case 20:
                case "end":
                  return _context12.stop();
              }
            }
          }, _callee12, this);
        }))();
      } // Lifecycle

    }, {
      key: "ready",
      value: function ready() {
        var _this13 = this;

        babelHelpers.get(babelHelpers.getPrototypeOf(IndexHome.prototype), "ready", this).call(this);
        this.defaultCountry = window.config.proxy.defaultCountry || 'nl';
        babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee13() {
          return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) {
              switch (_context13.prev = _context13.next) {
                case 0:
                  _context13.next = 2;
                  return getSettingsIconNewFeature();

                case 2:
                  _this13.settingsIconNewFeature = _context13.sent;

                case 3:
                case "end":
                  return _context13.stop();
              }
            }
          }, _callee13, this);
        }))();
        var promo = this.shadowRoot.querySelector('index-home-promo');
        this.withPromo = promo.visible;
        promo.addEventListener('visible', function (_ref40) {
          var visible = _ref40['detail'].visible;
          _this13.withPromo = visible;
        });

        (function () {
          // Removing useless text nodes
          var parent = _this13.shadowRoot.querySelector('div.Active_Country');

          if (!parent) return;
          Array.from(parent.childNodes).forEach(function (node) {
            if (node.nodeType !== Node.ELEMENT_NODE) parent.removeChild(node);
          });
        })();
      }
    }, {
      key: "connectedCallback",
      value: function () {
        var _connectedCallback = babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee14() {
          return regeneratorRuntime.wrap(function _callee14$(_context14) {
            while (1) {
              switch (_context14.prev = _context14.next) {
                case 0:
                  babelHelpers.get(babelHelpers.getPrototypeOf(IndexHome.prototype), "connectedCallback", this).call(this);
                  _context14.next = 3;
                  return getSettingsIconNewFeature();

                case 3:
                  this.settingsIconNewFeature = _context14.sent;

                case 4:
                case "end":
                  return _context14.stop();
              }
            }
          }, _callee14, this);
        }));

        function connectedCallback() {
          return _connectedCallback.apply(this, arguments);
        }

        return connectedCallback;
      }() // Computed properties

      /** @method */

    }, {
      key: "computeCountryName",
      value: function computeCountryName(country
      /*: string | null*/
      )
      /*: string*/
      {
        return country ? (0, _head.$internationalizeDefault)('country_name_' + country.toUpperCase()) : '';
      }
      /** @method */

    }, {
      key: "computeSettingsIconNewFeatureClass",
      value: function computeSettingsIconNewFeatureClass(newFeature
      /*: boolean*/
      )
      /*: string*/
      {
        return newFeature ? 'newFeature' : '';
      }
      /** @method */

    }, {
      key: "flagUrl",
      value: function flagUrl(flag
      /*: string | void*/
      )
      /*: string*/
      {
        return flag ? "/images/flags/".concat(flag, ".png") : '/images/empty.png';
      }
      /** @method */

    }, {
      key: "computeTransition",
      value: function computeTransition(complexView
      /*: boolean*/
      )
      /*: string*/
      {
        return complexView ? '' : 'transition';
      } // Obersvers

      /** @method */

    }, {
      key: "observeWithPromo",
      value: function observeWithPromo(withPromo)
      /*: void*/
      {
        this.classList.toggle('withPromo', withPromo);
      }
      /** @method */

    }, {
      key: "observeProxyEnabled",
      value: function observeProxyEnabled(enabled)
      /*: void*/
      {
        this.classList.toggle('proxyEnabled', enabled);
      } // Methods

      /** @method */

    }, {
      key: "proxySwitch",
      value: function proxySwitch()
      /*: void*/
      {
        if (!this.proxyEnabled) _head.$proxyDefault.enable();else _head.$proxyDefault.disable();
      }
      /** @method */

    }, {
      key: "domainProxySwitch",
      value: function domainProxySwitch()
      /*: void*/
      {
        var domain = this.complexView.domain;

        _head.$proxyDefault.siteFilters.toggle(domain);
      }
      /** @method */

    }, {
      key: "countryChange",
      value: function countryChange()
      /*: void*/
      {
        _head.$storeDefault.dispatch({
          'type': 'Page change',
          'page': 'index:locations'
        });
      }
      /** @method */

    }, {
      key: "domainCountryChange",
      value: function domainCountryChange()
      /*: void*/
      {
        var domain = this.complexView.domain;

        _head.$storeDefault.dispatch({
          'type': 'Page change',
          'page': 'index:locations:' + domain
        });
      }
      /** @method */

    }, {
      key: "enableProxy",
      value: function enableProxy()
      /*: void*/
      {
        _head.$proxyDefault.enable();
      }
      /** @method */

    }, {
      key: "openLocations",
      value: function openLocations()
      /*: void*/
      {
        _head.$storeDefault.dispatch({
          'type': 'Page change',
          'page': 'index:locations'
        });
      }
      /** @method */

    }, {
      key: "openSettings",
      value: function () {
        var _openSettings = babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee15() {
          return regeneratorRuntime.wrap(function _callee15$(_context15) {
            while (1) {
              switch (_context15.prev = _context15.next) {
                case 0:
                  _context15.next = 2;
                  return storage.set('newSettingsFeatureTimezoneChange1', false);

                case 2:
                  _head.$storeDefault.dispatch({
                    'type': 'Page change',
                    'page': 'index:settings'
                  });

                case 3:
                case "end":
                  return _context15.stop();
              }
            }
          }, _callee15, this);
        }));

        function openSettings() {
          return _openSettings.apply(this, arguments);
        }

        return openSettings;
      }()
    }], [{
      key: "template",
      get: function get() {
        return template$1;
      }
    }, {
      key: "properties",
      get: function get() {
        return {
          'countries': {
            'type': Array,
            'value': []
          },
          'country': {
            'type': String
          },
          'countryName': {
            'type': String,
            'computed': 'computeCountryName(country)'
          },
          'proxyEnabled': {
            'type': Boolean,
            'observer': 'observeProxyEnabled'
          },
          'settingsIconNewFeature': {
            'type': Boolean,
            'value': false
          },
          'translations': {
            'type': Object,
            'value': translations$4,
            'readOnly': true
          },
          'withPromo': {
            'type': Boolean,
            'value': false,
            'notify': true,
            'observer': 'observeWithPromo'
          },
          // Show double controls for ON/OFF
          'complexView': {
            'type': Object
          }
        };
      }
    }]);
    return IndexHome;
  }((0, _head.connect)(_head.$storeDefault)(_head.PolymerElement));

  customElements.define('index-home', IndexHome);

  var computeCountries = function computeCountries(state
  /*: StoreState*/
  , countryNameByCode
  /*: ( code: string ) => string*/
  )
  /*: Array<LocationsRenderServerData>*/
  {
    var favorites = state.favorites,
        ping = state.ping,
        servers = state.servers,
        user = state.user;
    var premiumUser
    /*: boolean*/
    = user.premium; // List of servers

    var list
    /*: Array<LocationsRenderServerData>*/
    = Object.keys(servers).reduce(
    /** @function */
    function (carry, countryCode
    /*: string*/
    ) {
      var countryData
      /*: ProxyServerCountryData*/
      = servers[countryCode];
      if (countryData.hidden) return carry;
      var name
      /*: string*/
      = countryNameByCode(countryCode); // Free servers

      if (!premiumUser) {
        /** @type {Array} */
        var _servers = countryData.servers;

        if (Array.isArray(_servers) && _servers.length) {
          var data
          /*: LocationsRenderServerData*/
          = {
            'id': countryCode,
            'code': countryCode,
            name: name,
            'premium': false
          };
          var delayData
          /*: PingRating | void*/
          = ping.find(function (_ref41) {
            var country = _ref41.country,
                premium = _ref41.premium;
            return country === countryCode && !premium;
          });

          if (delayData) {
            var delay = delayData.delay,
                mark = delayData.mark;
            Object.assign(data, {
              delay: delay,
              mark: mark
            });
          }

          carry.push(data);
        }
      }

      {
        // Premium servers

        /** @type {Array} */
        var _servers2 = countryData.premium_servers;

        if (Array.isArray(_servers2) && _servers2.length) {
          var _data
          /*: LocationsRenderServerData*/
          = {
            'id': countryCode + '_premium',
            'code': countryCode,
            'favorited': false,
            'name': name + ' (Premium)',
            'premium': true
          };

          var _delayData
          /*: PingRating | void*/
          = ping.find(function (_ref42) {
            var country = _ref42.country,
                premium = _ref42.premium;
            return country === countryCode && premium;
          });

          if (_delayData) {
            var _delay = _delayData.delay,
                _mark = _delayData.mark;
            Object.assign(_data, {
              delay: _delay,
              mark: _mark
            });
          }

          carry.push(_data);
        }
      }
      return carry;
    }, []).sort(function (a, b) {
      // Premium state
      if (a.premium !== b.premium) return a.premium ? 1 : -1; // Name

      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });

    if (premiumUser) {
      favorites.forEach(function (country) {
        list.filter(function (item) {
          return item.code === country;
        }).forEach(function (renderServerData) {
          renderServerData.favorited = true;
        });
      });
    } else {
      list.forEach(function (renderServerData) {
        delete renderServerData.favorited;
      });
    }

    list.sort(function (a, b) {
      // Premium state
      if (a.premium !== b.premium) return a.premium ? 1 : -1; // Favorites

      if (a.favorited !== b.favorited) return a.favorited ? -1 : 1; // Name

      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
    return list;
  };

  _exports.$computeCountriesDefault = computeCountries;
  var computeCountries$1 = {
    default: computeCountries
  };
  _exports.$computeCountries = computeCountries$1;

  function keydownListener(event
  /*: KeyboardEvent*/
  ) {
    var _this14 = this;

    var key = event.key;

    if (key === 'ArrowDown' || key === 'ArrowUp') {
      event.preventDefault();

      var newHighlightedCountryIndex
      /*: integer*/
      = function () {
        var length
        /*: integer*/
        = _this14.namesList.length;

        if (!_this14.highlightedCountry) {
          return key === 'ArrowUp' ? length - 1 : 0;
        }

        var index
        /*: integer*/
        = _this14.namesList.findIndex(function (_ref43) {
          var code = _ref43.code,
              premium = _ref43.premium;
          return _this14.highlightedCountry.code === code && _this14.highlightedCountry.premium === premium;
        });

        index = index + (key === 'ArrowDown' ? 1 : -1);
        return (index + length) % length;
      }();

      var data
      /*: LocationsNameListItem*/
      = this.namesList[newHighlightedCountryIndex];
      this.highlightedCountry = {
        'code': data.code,
        'premium': data.premium
      }; // Scroll whole list if new item is partially or not visible

      var topEdge
      /*: number*/
      = this.scrollElement.scrollTop;
      var screenHeight
      /*: number*/
      = this.scrollElement.offsetHeight;
      var bottomEdge
      /*: number*/
      = topEdge + screenHeight;
      var newElementHeight
      /*: number*/
      = data.element.offsetHeight;
      var newElementTopEdge
      /*: number*/
      = data.element.offsetTop;
      var newElementBottomEdge
      /*: number*/
      = newElementTopEdge + newElementHeight;
      var visible
      /*: boolean*/
      = newElementTopEdge >= topEdge && newElementBottomEdge <= bottomEdge;
      if (visible) return;

      var scrollTop
      /*: number*/
      = function () {
        // Hidden item at bottom
        if (newElementTopEdge >= topEdge) {
          return newElementBottomEdge - screenHeight + 4;
        } // Hidden item at top


        return newElementTopEdge - 2;
      }();

      this.scrollElement.scrollTop = scrollTop;
      return;
    }

    if (key === 'Enter') {
      if (!this.highlightedCountry) return;
      var code = this.highlightedCountry.code;
      var mode
      /*: string*/
      = this.computeMode(this.highlightedCountry, this.premiumUser, this.country);
      if (mode === 'current') return;
      this.countryClick({
        'detail': {
          mode: mode,
          'country': code
        }
      });
      return;
    }

    this.charsBuffer.keydownListener(event);
  }

  var keydownListener$1 = {
    default: keydownListener
  };
  _exports.$keydownListener = keydownListener$1;

  var log = function log()
  /*: Array<any>*/
  {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    (0, _sendMessage.$sendMessageDefault)({
      'type': 'log',
      'data': args
    });
    console.log.apply(console, args);
  };

  _exports.$logDefault = log;

  log.warn = function ()
  /*: Array<any>*/
  {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    (0, _sendMessage.$sendMessageDefault)({
      'type': 'log.warn',
      'data': args
    });
    console.warn.apply(console, args);
  };

  log.error = function ()
  /*: Array<any>*/
  {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    (0, _sendMessage.$sendMessageDefault)({
      'type': 'log.error',
      'data': args
    });
    console.error.apply(console, args);
  };

  var log$1 = {
    default: log
  };
  _exports.$log = log$1;
  var template$3 = (0, _head.html)(_templateObject7_b935ea005b8f11e9b4dd99419b6c54c8());
  _exports.$locationsTemplateDefault = template$3;
  var locationsTemplate = {
    default: template$3
  }; // data-mark and data-favorited to fix bug in old Chrome/FF rendering

  _exports.$locationsTemplate = locationsTemplate;
  var template$4 = (0, _head.html)(_templateObject8_b935ea005b8f11e9b4dd99419b6c54c8());
  _exports.$elementTemplateDefault = template$4;
  var elementTemplate = {
    default: template$4
  };
  _exports.$elementTemplate = elementTemplate;

  var IndexLocationsElement =
  /*#__PURE__*/
  function (_PolymerElement4) {
    babelHelpers.inherits(IndexLocationsElement, _PolymerElement4);

    function IndexLocationsElement() {
      babelHelpers.classCallCheck(this, IndexLocationsElement);
      return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(IndexLocationsElement).apply(this, arguments));
    }

    babelHelpers.createClass(IndexLocationsElement, [{
      key: "favoritesCssClass",
      // Computed properties

      /** @method */
      value: function favoritesCssClass(favorited
      /*: boolean*/
      )
      /*: string*/
      {
        return favorited ? 'favorited' : '';
      }
      /** @method */

    }, {
      key: "flagUrl",
      value: function flagUrl(flag
      /*?: string*/
      )
      /*: string*/
      {
        return flag ? "/images/flags/".concat(flag, ".png") : '/images/empty.png';
      }
      /** @method */

    }, {
      key: "showFavorites",
      value: function showFavorites(data
      /*: Object*/
      )
      /*: boolean*/
      {
        var favorited = data.favorited;
        return typeof favorited === 'boolean';
      } // Observers

      /** @method */

    }, {
      key: "observeHighlighted",
      value: function observeHighlighted(newState, oldState)
      /*: void*/
      {
        if (newState !== oldState) this.classList.toggle('highlight', newState);
      }
      /** @method */

    }, {
      key: "observeMode",
      value: function observeMode(mode
      /*: string*/
      )
      /*: void*/
      {
        this.classList.toggle('current', mode === 'current');
        this.classList.toggle('premium', mode === 'premium');
      } // Methods

      /** @method */

    }, {
      key: "favoritesClick",
      value: function favoritesClick()
      /*: void*/
      {
        this.dispatchEvent(new CustomEvent('favorite', {
          'detail': {
            'country': this.data.code,
            'favorited': !this.data.favorited
          }
        }));
      }
      /** @method */

    }, {
      key: "fullElementClick",
      value: function fullElementClick(event
      /*: MouseEvent*/
      )
      /*: void*/
      {
        var favoritesClick
        /*: boolean*/
        = babelHelpers.instanceof(event.target, HTMLElement) && event.target.classList.contains('Favorite');
        if (this.mode === 'current' || favoritesClick) return;
        this.dispatchEvent(new CustomEvent('countryclick', {
          'detail': {
            'mode': this.mode,
            'country': this.data.code
          }
        }));
      }
    }], [{
      key: "template",
      get: function get() {
        return template$4;
      }
    }, {
      key: "properties",
      get: function get() {
        return {
          'data': {
            'type': Object,
            'value': {},
            'notify': true
          },
          'highlighted': {
            'type': Boolean,
            'value': false,
            'observer': 'observeHighlighted'
          },
          'mode': {
            // Key property
            'type': String,
            'value': '',
            'notify': true,
            'observer': 'observeMode'
          }
        };
      }
    }]);
    return IndexLocationsElement;
  }(_head.PolymerElement);

  customElements.define('index-locations-element', IndexLocationsElement);
  var _$3
  /*: Lodash*/
  = window._;

  var _browser$1 = typeof browser !== 'undefined' ? browser : chrome;
  /*::
  type HighlightedCountry = {|
  'code': string,
  'premium': boolean
  |};
  */


  var translations$5
  /*: { [ string ]: string }*/
  = (0, _head.$createTranslationObjectDefault)({
    'virtualLocations': 'virtual_locations'
  });
  /** Get full country name by 2 letter code
  @function
  @param code - 2 letter code */

  var countryNameByCode = function countryNameByCode(code
  /*: string*/
  )
  /*: string*/
  {
    var countryName
    /*: string*/
    = (0, _head.$internationalizeDefault)('country_name_' + code.toUpperCase());
    if (countryName) return countryName;

    var locale
    /*: string*/
    = _browser$1.i18n.getUILanguage();

    var version
    /*: string*/
    = _$3.get(_browser$1.runtime.getManifest(), 'version', 'n/a');

    var message
    /*: string*/
    = 'failed to look up country name for: ' + code + ' with locale: ' + locale + ' at popup.js';
    log.warn(message);
    (0, _head.$gaDefault)('error', version, message, 0, false);
    return code.toUpperCase() || 'N/A';
  };

  var IndexLocations =
  /*#__PURE__*/
  function (_connect4) {
    babelHelpers.inherits(IndexLocations, _connect4);
    babelHelpers.createClass(IndexLocations, [{
      key: "stateChanged",
      value: function stateChanged(state
      /*: StoreState*/
      )
      /*: void*/
      {
        var pac = state.pac,
            user = state.user;
        this.countries = computeCountries(state, countryNameByCode);
        this.premiumUser = user.premium;
        this.proxyCountry = pac.mode === 'proxy' ? pac.country : '';
        this.proxyList = pac.filters.filter(function (_ref44) {
          var disabled = _ref44.disabled,
              proxyMode = _ref44.proxyMode;
          return !disabled && proxyMode;
        });
      } // Lifecycle

    }], [{
      key: "template",
      get: function get() {
        return template$3;
      }
    }, {
      key: "observers",
      get: function get() {
        return ['observeForCountry(domain, proxyCountry, proxyList)'];
      }
    }, {
      key: "properties",
      get: function get() {
        return {
          'countries': {
            'type': Array,

            /** @type {Array<LocationsRenderServerData>} */
            'observer': 'observeCountries'
          },

          /** In case of global locations -> pac.country,
          otherwise selected country in case of proxy filter */
          'country': {
            'type': String,
            'value': null
          },

          /** Used for setup of country for filter */
          'domain': {
            'type': String,
            'value': ''
          },
          'highlightedCountry': {
            'type': Object,

            /** @type {(HighlightedCountry|null)} */
            'value': null
          },
          'premiumUser': {
            'type': Boolean
          },
          'proxyCountry': {
            'type': String,
            'value': ''
          },
          'proxyList': {
            'type': Array,

            /** @type {Array<SiteFilter>} */
            'value': []
          },
          'translations': {
            'type': Object,
            'value': translations$5,
            'readOnly': true
          }
        };
      }
    }]);

    function IndexLocations() {
      var _this15;

      babelHelpers.classCallCheck(this, IndexLocations);
      _this15 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(IndexLocations).call(this));
      _this15
      /*: any*/
      .elementHighlight = _this15.elementHighlight.bind(babelHelpers.assertThisInitialized(babelHelpers.assertThisInitialized(_this15)));
      _this15.keydownListener = keydownListener.bind(babelHelpers.assertThisInitialized(babelHelpers.assertThisInitialized(_this15)));
      return _this15;
    }

    babelHelpers.createClass(IndexLocations, [{
      key: "ready",
      value: function ready() {
        babelHelpers.get(babelHelpers.getPrototypeOf(IndexLocations.prototype), "ready", this).call(this);
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this16 = this;

        babelHelpers.get(babelHelpers.getPrototypeOf(IndexLocations.prototype), "connectedCallback", this).call(this);
        this.charsBuffer = new _head.$CharsBufferDefault();
        document.addEventListener('keydown', this.keydownListener);
        this.forceRenderAndGenerateNamesList();
        /** @type {Element} */

        this.scrollElement = Array.from(this.shadowRoot.children).pop();
        this.charsBuffer.addListener(function (word
        /*: string*/
        ) {
          var match
          /*: LocationsNameListItem | void*/
          = _this16.namesList.find(function (_ref45) {
            var name = _ref45.name;
            return name.startsWith(word);
          });

          if (!match) return;
          var code = match.code,
              element = match.element,
              premium = match.premium;
          _this16.highlightedCountry = {
            code: code,
            premium: premium
          }; // Scroll to this element

          _this16.scrollElement.scrollTop = element.offsetTop - 2;
        });
        var height
        /*: number*/
        = this.shadowRoot.querySelector('div.Head').offsetHeight;
        this.shadowRoot.querySelector('div.Sections').style.cssText = "top:".concat(height, "px;");

        if (!this.domain) {
          (0, _sendMessage.$sendMessageDefault)({
            'type': 'сounters.increase',
            'property': 'popup: location page shows'
          });
        }
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        babelHelpers.get(babelHelpers.getPrototypeOf(IndexLocations.prototype), "disconnectedCallback", this).call(this);
        document.removeEventListener('keydown', this.keydownListener);
      } // Computed properties

      /** @method */

    }, {
      key: "computeHighlighted",
      value: function computeHighlighted(item
      /*: LocationsNameListItem*/
      , highlightedCountry
      /*: HighlightedCountry | null*/
      )
      /*: boolean*/
      {
        return Boolean(highlightedCountry && highlightedCountry.code === item.code && highlightedCountry.premium === item.premium);
      }
      /** @method */

    }, {
      key: "computeMode",
      value: function computeMode(item
      /*: LocationsNameListItem*/
      , premiumUser
      /*: boolean*/
      , country
      /*: string*/
      )
      /*: 'change' | 'current' | 'premium'*/
      {
        if (item.premium && !premiumUser) return 'premium';
        if (item.code === country) return 'current';
        return 'change';
      } // Observers

      /** @method */

    }, {
      key: "observeCountries",
      value: function observeCountries()
      /*: void*/
      {
        this.forceRenderAndGenerateNamesList();
      }
      /** @method */

    }, {
      key: "observeForCountry",
      value: function observeForCountry(domain, proxyCountry, proxyList)
      /*: void*/
      {
        // Global settings
        if (!domain) {
          this.country = proxyCountry;
          return;
        } // Domain only


        this.country = _$3.get(proxyList.find(function (item) {
          return item.domain === domain;
        }), 'country') || '';
      } // Methods

      /** @method */

    }, {
      key: "back",
      value: function back()
      /*: void*/
      {
        _head.$storeDefault.dispatch({
          'type': 'Page change',
          'page': 'index:home'
        });
      }
      /** @method */

    }, {
      key: "countryClick",
      value: function () {
        var _countryClick = babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee16(_ref46) {
          var _ref46$detail, mode, country, popupPremium;

          return regeneratorRuntime.wrap(function _callee16$(_context16) {
            while (1) {
              switch (_context16.prev = _context16.next) {
                case 0:
                  _ref46$detail = _ref46['detail'], mode = _ref46$detail.mode, country = _ref46$detail.country;

                  if (!(mode === 'change')) {
                    _context16.next = 15;
                    break;
                  }

                  if (!this.domain) {
                    _context16.next = 7;
                    break;
                  }

                  _context16.next = 5;
                  return _head.$proxyDefault.siteFilters.changeCountry({
                    'domain': this.domain,
                    country: country
                  });

                case 5:
                  _context16.next = 10;
                  break;

                case 7:
                  _context16.next = 9;
                  return _head.$proxyDefault.setCountry(country);

                case 9:
                  (0, _head.$gaDefault)('extension', 'change_country', country);

                case 10:
                  _context16.next = 12;
                  return new Promise(function (resolve) {
                    setTimeout(resolve, 500);
                  });

                case 12:
                  _head.$storeDefault.dispatch({
                    'type': 'Page change',
                    'page': 'index:home'
                  });

                  _context16.next = 24;
                  break;

                case 15:
                  if (!(mode === 'premium')) {
                    _context16.next = 24;
                    break;
                  }

                  popupPremium
                  /*: HTMLElement & { 'country'?: string }*/
                  = document.createElement('popup-premium');
                  popupPremium.country = country;
                  popupPremium.style.cssText = 'top:-100%;';
                  if (document.body) document.body.append(popupPremium); // Flow crap

                  (0, _head.$gaDefault)('premium', 'show');
                  _context16.next = 23;
                  return window.anime({
                    'targets': popupPremium,
                    'top': 0,
                    'duration': 800,
                    'easing': 'linear'
                  }).finished;

                case 23:
                  popupPremium.style.cssText = '';

                case 24:
                case "end":
                  return _context16.stop();
              }
            }
          }, _callee16, this);
        }));

        function countryClick(_x7) {
          return _countryClick.apply(this, arguments);
        }

        return countryClick;
      }()
      /** @method */

    }, {
      key: "elementHighlight",
      value: function elementHighlight(event)
      /*: void*/
      {
        var model = event.model;
        var mouseReallyMoved = Boolean('movementX' in event ? event.movementX || event.movementY : event.webkitMovementX || event.webkitMovementY);
        if (!mouseReallyMoved) return;

        var _model$get3 = model.get('item'),
            premium = _model$get3.premium,
            code = _model$get3.code;

        /*: LocationsNameListItem*/
        var data
        /*: Object*/
        = {
          premium: premium,
          code: code
        };
        if (_$3.isEqual(this.highlightedCountry, data)) return;
        this.highlightedCountry = data;
      }
      /** @method */

    }, {
      key: "favorite",
      value: function favorite(_ref47)
      /*: void*/
      {
        var _ref47$detail = _ref47['detail'],
            favorited = _ref47$detail.favorited,
            country = _ref47$detail.country;
        if (favorited) _head.$actionsDefault.favorites.add(country);else _head.$actionsDefault.favorites.remove(country);
      }
      /** @method */

    }, {
      key: "forceRenderAndGenerateNamesList",
      value: function forceRenderAndGenerateNamesList()
      /*: void*/
      {
        var _this17 = this;

        /** @type {Element} */
        var domRepeat = this.shadowRoot.querySelector('dom-repeat'); // Force <dom-repeat> render

        domRepeat.render(); // Merge countries & DOM nodes

        this.namesList = function () {
          /** @type {Array<Object>} */
          var listData = domRepeat.items.map(function (_ref48) {
            var code = _ref48.code,
                name = _ref48.name,
                premium = _ref48.premium;
            return {
              code: code,
              'name': name.toLowerCase(),
              premium: premium
            };
          });
          var elements
          /*: Array<HTMLElement>*/
          = Array.from(_this17.shadowRoot.querySelector('div.Sections').children).filter(function (element) {
            return element.tagName.toLowerCase() === 'index-locations-element';
          });
          listData.forEach(function (item, index) {
            item.element = elements[index];
          });
          return listData;
        }();
        /*::( this.namesList: Array<LocationsNameListItem> );*/
        // eslint-disable-line no-unused-expressions

      }
      /** @method */

    }, {
      key: "openHelp",
      value: function openHelp()
      /*: void*/
      {
        var parent
        /*: HTMLElement | null*/
        = document.querySelector('div.MainContainer');
        if (!parent) return; // Flow crap

        var element
        /*: HTMLElement*/
        = document.createElement('popup-locations-information');
        element.style.cssText = 'opacity:0';
        parent.appendChild(element);
        window.anime({
          'targets': element,
          'opacity': 1,
          'duration': 400,
          'easing': 'linear'
        });
      }
    }]);
    return IndexLocations;
  }((0, _head.connect)(_head.$storeDefault)(_head.PolymerElement));

  customElements.define('index-locations', IndexLocations);
  var ShowedOffers = {
    /** @method */
    'includes': function includes(offer
    /*: string*/
    ) {
      return (0, _sendMessage.$sendMessageDefault)({
        'type': 'ShowedOffers.includes',
        offer: offer
      });
    },

    /** @method */
    'push': function push(offer
    /*: string*/
    ) {
      return (0, _sendMessage.$sendMessageDefault)({
        'type': 'ShowedOffers.push',
        offer: offer
      });
    }
  };
  _exports.$ShowedOffersDefault = ShowedOffers;
  var ShowedOffers$1 = {
    default: ShowedOffers
  };
  _exports.$ShowedOffers = ShowedOffers$1;
  var template$5 = (0, _head.html)(_templateObject9_b935ea005b8f11e9b4dd99419b6c54c8());
  _exports.$menuTemplateDefault = template$5;
  var menuTemplate = {
    default: template$5
  };
  _exports.$menuTemplate = menuTemplate;

  var chromeBelow52
  /*: boolean*/
  = function () {
    if (typeof browser !== 'undefined') return false; // Ignore Firefox

    var matches$$1
    /*: Array<string> | null | void*/
    = navigator.appVersion.match(/chrome\/([0-9]+)/i);
    if (!matches$$1) return false; // Chrome version

    var version = Number(matches$$1[1]);
    return version < 52;
  }();
  /** @function */


  var permissionRequest =
  /*#__PURE__*/
  function () {
    var _ref49 = babelHelpers.asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee17() {
      var allowed;
      return regeneratorRuntime.wrap(function _callee17$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              if (chromeBelow52) {
                _context17.next = 2;
                break;
              }

              return _context17.abrupt("return");

            case 2:
              _context17.next = 4;
              return new Promise(function (resolve) {
                chrome.permissions.request({
                  'permissions': ['tabs']
                }, resolve);
              });

            case 4:
              allowed
              /*: boolean*/
              = _context17.sent;

              if (!allowed) {
                _context17.next = 7;
                break;
              }

              return _context17.abrupt("return");

            case 7:
              throw new Error('Tabs permission is not granted');

            case 8:
            case "end":
              return _context17.stop();
          }
        }
      }, _callee17, this);
    }));

    return function permissionRequest() {
      return _ref49.apply(this, arguments);
    };
  }();

  // Rejection
  var translations$6
  /*: { [ string ]: string }*/
  = (0, _head.$createTranslationObjectDefault)({
    'changeLocation': 'change_location',
    'contactUs': 'contact_us',
    'home': 'home',
    'smartSettings': 'smart_settings'
  });

  var IndexMenu =
  /*#__PURE__*/
  function (_connect5) {
    babelHelpers.inherits(IndexMenu, _connect5);

    function IndexMenu() {
      babelHelpers.classCallCheck(this, IndexMenu);
      return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(IndexMenu).apply(this, arguments));
    }

    babelHelpers.createClass(IndexMenu, [{
      key: "stateChanged",
      value: function stateChanged(_ref50)
      /*: void*/
      {
        var domain = _ref50.domain,
            pac = _ref50.pac,
            page = _ref50.page;
        var _window2 = window,
            browsecLink = _window2.browsecLink,
            pageLinks = _window2.pageLinks; // In fact must be pure getter

        this.contactUsUrl = browsecLink(pageLinks.contactUs);

        this.containsFilter = function () {
          if (!domain) return false;
          var domains
          /*: Array<string>*/
          = pac.filters.reduce(function (carry, _ref51) {
            var disabled = _ref51.disabled,
                domain = _ref51.domain;
            if (!disabled) carry.push(domain);
            return carry;
          }, []); // Is domain in list of domains

          return domains.some(function (filterDomain) {
            return filterDomain === domain || domain.endsWith('.' + filterDomain);
          });
        }();

        this.domain = function ()
        /*: string | null*/
        {
          if (!domain) return null; // No domain case
          // Ignore disabled filters

          var filters = pac.filters.filter(function (_ref52) {
            var disabled = _ref52.disabled;
            return !disabled;
          }); // Searching for filters with same domain

          var condition = filters.some(function (_ref53) {
            var filterDomain = _ref53['domain'];
            return filterDomain === domain;
          });
          if (condition) return domain; // Searching for filters where original domain is subdomain

          var filter
          /*: SiteFilter | void*/
          = filters.find(function (_ref54) {
            var filterDomain = _ref54['domain'];
            return domain.endsWith('.' + filterDomain);
          });
          if (filter) return filter.domain; // Otherwise, return cutted original domain (+1 to domain zone)

          var domainZone
          /*: string | void*/
          = window.domainZoneList.find(function (zone) {
            return domain.endsWith('.' + zone);
          });
          if (!domainZone) return domain;
          var endPart
          /*: string*/
          = domain.slice(0, -(domainZone.length + 1)).split('.').pop();
          return endPart + '.' + domainZone;
        }();

        this.filtersPage = function () {
          var parts
          /*: Array<string>*/
          = page.split(':');
          return parts[0] === 'index' && parts[1] === 'filters';
        }();

        this.homePage = function () {
          var parts
          /*: Array<string>*/
          = page.split(':');
          return parts[0] === 'index' && parts[1] === 'home';
        }();
      } // Lifecycle

    }, {
      key: "ready",
      value: function ready() {
        babelHelpers.get(babelHelpers.getPrototypeOf(IndexMenu.prototype), "ready", this).call(this); // Remove empty nodes

        Array.from(this.shadowRoot.childNodes).forEach(function (node) {
          if (node.nodeType !== Node.ELEMENT_NODE) node.remove();
        }); // for FF and early Chrome -> links click

        var links
        /*: Array<HTMLElement>*/
        = Array.from(this.shadowRoot.querySelectorAll('a'));
        links.forEach(function (element) {
          element.addEventListener('click',
          /*#__PURE__*/
          babelHelpers.asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee18() {
            return regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    _context18.next = 2;
                    return new Promise(function (resolve) {
                      setTimeout(resolve, 50);
                    });

                  case 2:
                    if (window && window.close) window.close();

                  case 3:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18, this);
          })));
        });
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        babelHelpers.get(babelHelpers.getPrototypeOf(IndexMenu.prototype), "disconnectedCallback", this).call(this);
        if (!this.documentClick) return;
        document.removeEventListener('mousedown', this.documentClick);
        delete this.documentClick;
      } // Calculated properties

      /** @method */

    }, {
      key: "iconConditionClass",
      value: function iconConditionClass(desiredPage
      /*: boolean*/
      )
      /*: string*/
      {
        return desiredPage ? 'selected' : '';
      } // Methods

      /** @method */

    }, {
      key: "goHome",
      value: function goHome()
      /*: void*/
      {
        if (this.homePage) return;

        _head.$storeDefault.dispatch({
          'type': 'Page change',
          'page': 'index:home'
        });
      }
      /** @method */

    }, {
      key: "openSettings",
      value: function () {
        var _openSettings2 = babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee20(event) {
          var _this18 = this;

          var _event$target$getBoun, left, maxWidth, element;

          return regeneratorRuntime.wrap(function _callee20$(_context20) {
            while (1) {
              switch (_context20.prev = _context20.next) {
                case 0:
                  event.preventDefault();

                  if (!this.documentClick) {
                    _context20.next = 3;
                    break;
                  }

                  return _context20.abrupt("return");

                case 3:
                  _context20.next = 5;
                  return permissionRequest();

                case 5:
                  if (!chromeBelow52) {
                    _context20.next = 8;
                    break;
                  }

                  _context20.next = 8;
                  return new Promise(function (resolve) {
                    setTimeout(resolve, 300);
                  });

                case 8:
                  (0, _sendMessage.$sendMessageDefault)({
                    'type': 'сounters.increase',
                    'property': 'popup: menu: smart settings click'
                  });
                  babelHelpers.asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee19() {
                    var hasOffer;
                    return regeneratorRuntime.wrap(function _callee19$(_context19) {
                      while (1) {
                        switch (_context19.prev = _context19.next) {
                          case 0:
                            _context19.next = 2;
                            return ShowedOffers.includes('smart settings');

                          case 2:
                            hasOffer
                            /*: boolean*/
                            = _context19.sent;

                            if (!hasOffer) {
                              _context19.next = 5;
                              break;
                            }

                            return _context19.abrupt("return");

                          case 5:
                            ShowedOffers.push('smart settings');

                            if (!_head.$storeDefault.getState().pac.filters.length && document.body) {
                              // Flow crap
                              document.body.append(document.createElement('popup-help'));
                            }

                          case 7:
                          case "end":
                            return _context19.stop();
                        }
                      }
                    }, _callee19, this);
                  }))(); // Create content menu element

                  _event$target$getBoun = event.target.getBoundingClientRect(), left = _event$target$getBoun.left;
                  maxWidth
                  /*: number*/
                  = document.body ? document.body.clientWidth - left : 0; // Flow crap

                  /*::
                  type ContextMenuElement = HTMLElement & {
                    'containsFilter'?: boolean,
                    'domain'?: string | null,
                    'unicodeDomain'?: string
                  }
                  */

                  element
                  /*: ContextMenuElement*/
                  = document.createElement('context-menu');
                  element.style.cssText = "left:".concat(left, "px;max-width:").concat(maxWidth, "px;"); // Setup of properties

                  element.containsFilter = this.containsFilter;
                  _context20.next = 17;
                  return _head.$punycodeDefault.toUnicode(this.domain || '');

                case 17:
                  element.unicodeDomain = _context20.sent;
                  element.domain = this.domain; // Append node to body

                  if (document.body) document.body.append(element); // Flow crap

                  this.documentClick = function (_ref57) {
                    var target = _ref57.target;
                    if (!babelHelpers.instanceof(target, HTMLElement)) return;
                    var deleteNode
                    /*: boolean*/
                    = !target.matches('div.Element');
                    var doNothing
                    /*: boolean*/
                    = deleteNode && (target === element || element.contains(target)) || target.matches('popup-help, popup-help *');
                    if (doNothing) return;
                    if (deleteNode) element.remove();
                    document.removeEventListener('mousedown', _this18.documentClick);
                    delete _this18.documentClick;
                  };

                  document.addEventListener('mousedown', this.documentClick
                  /*: MouseEventListener*/
                  );

                case 22:
                case "end":
                  return _context20.stop();
              }
            }
          }, _callee20, this);
        }));

        function openSettings(_x8) {
          return _openSettings2.apply(this, arguments);
        }

        return openSettings;
      }()
    }], [{
      key: "template",
      get: function get() {
        return template$5;
      }
    }, {
      key: "properties",
      get: function get() {
        return {
          'contactUsUrl': {
            'type': String
          },
          'containsFilter': {
            'type': Boolean
          },
          'domain': {
            'type': String,
            'value': null
          },
          'facebookUrl': {
            'type': String,
            'value': 'https://www.facebook.com/BrowsecVPN',
            'readOnly': true
          },
          'filtersPage': {
            'type': Boolean,
            'value': false
          },
          'homePage': {
            'type': Boolean,
            'value': false
          },
          'translations': {
            'type': Object,
            'value': translations$6,
            'readOnly': true
          }
        };
      }
    }]);
    return IndexMenu;
  }((0, _head.connect)(_head.$storeDefault)(_head.PolymerElement));

  customElements.define('index-menu', IndexMenu);
  var template$6 = (0, _head.html)(_templateObject10_b935ea005b8f11e9b4dd99419b6c54c8());
  _exports.$settingsTemplateDefault = template$6;
  var settingsTemplate = {
    default: template$6
  };
  _exports.$settingsTemplate = settingsTemplate;
  var timezoneChange = {
    /** @method */
    'set': function set(value
    /*: boolean*/
    ) {
      return (
        /*: Promise<void>*/
        (0, _sendMessage.$sendMessageDefault)({
          'type': 'timezoneChange.set',
          value: value
        })
      );
    }
  };
  _exports.$timezoneChangeDefault = timezoneChange;
  var timezoneChange$1 = {
    default: timezoneChange
  };
  _exports.$timezoneChange = timezoneChange$1;
  var webrtc = new function () {
    var _this19 = this;

    babelHelpers.asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee21() {
      return regeneratorRuntime.wrap(function _callee21$(_context21) {
        while (1) {
          switch (_context21.prev = _context21.next) {
            case 0:
              _context21.next = 2;
              return (0, _sendMessage.$sendMessageDefault)({
                'type': 'webrtc.available'
              });

            case 2:
              _this19.available = _context21.sent;

            case 3:
            case "end":
              return _context21.stop();
          }
        }
      }, _callee21, this);
    }))();
    /** @method */

    this.getControlState = function () {
      return (
        /*: Promise<'not available' | 'permission not granted' | 'not controlled' | 'controlled'>*/
        (0, _sendMessage.$sendMessageDefault)({
          'type': 'webrtc.getControlState'
        })
      );
    };
    /** @method */


    this.disable =
    /*#__PURE__*/
    function () {
      var _ref59 = babelHelpers.asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee22(externalPermissionRequest
      /*::?: () => Promise<void>*/
      ) {
        return regeneratorRuntime.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                if (!externalPermissionRequest) {
                  _context22.next = 3;
                  break;
                }

                _context22.next = 3;
                return externalPermissionRequest();

              case 3:
                return _context22.abrupt("return", (0, _sendMessage.$sendMessageDefault)({
                  'type': 'webrtc.disable'
                }));

              case 4:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));

      return function (_x9) {
        return _ref59.apply(this, arguments);
      };
    }();
    /** @method */


    this.enable =
    /*#__PURE__*/
    function () {
      var _ref60 = babelHelpers.asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee23(externalPermissionRequest
      /*::?: () => Promise<void>*/
      ) {
        return regeneratorRuntime.wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                if (!externalPermissionRequest) {
                  _context23.next = 3;
                  break;
                }

                _context23.next = 3;
                return externalPermissionRequest();

              case 3:
                return _context23.abrupt("return", (0, _sendMessage.$sendMessageDefault)({
                  'type': 'webrtc.enable'
                }));

              case 4:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));

      return function (_x10) {
        return _ref60.apply(this, arguments);
      };
    }();
  }();
  _exports.$webrtcDefault = webrtc;
  var webrtc$1 = {
    default: webrtc
  };
  _exports.$webrtc = webrtc$1;

  var privacyPermissionRequest =
  /*#__PURE__*/
  function () {
    var _ref61 = babelHelpers.asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee24() {
      var allowed;
      return regeneratorRuntime.wrap(function _callee24$(_context24) {
        while (1) {
          switch (_context24.prev = _context24.next) {
            case 0:
              if (!(typeof browser !== 'undefined')) {
                _context24.next = 2;
                break;
              }

              return _context24.abrupt("return");

            case 2:
              _context24.next = 4;
              return new Promise(function (resolve, reject) {
                chrome.permissions.request({
                  'permissions': ['privacy']
                }, function (allowed
                /*: boolean*/
                ) {
                  if (chrome.runtime.lastError) reject(chrome.runtime.lastError);else resolve(allowed);
                });
              });

            case 4:
              allowed
              /*: boolean*/
              = _context24.sent;

              if (allowed) {
                _context24.next = 7;
                break;
              }

              throw new Error('Management permission is not granted');

            case 7:
            case "end":
              return _context24.stop();
          }
        }
      }, _callee24, this);
    }));

    return function privacyPermissionRequest() {
      return _ref61.apply(this, arguments);
    };
  }();

  var translations$7
  /*: { [ string ]: string }*/
  = (0, _head.$createTranslationObjectDefault)({
    'changeTimezoneByVirtualLocation': 'change_timezone_according_to_virtual_location',
    'useBrowsecForWebrtcConnections': 'use_browsec_for_webrtc_connections',
    'webrtcSettingsControlledByAnotherExtension': 'webrtc_settings_controlled_by_another_extension'
  });

  var IndexSettings =
  /*#__PURE__*/
  function (_connect6) {
    babelHelpers.inherits(IndexSettings, _connect6);
    babelHelpers.createClass(IndexSettings, [{
      key: "stateChanged",
      value: function stateChanged(_ref62)
      /*: void*/
      {
        var timezoneChange$$1 = _ref62.timezoneChange,
            user = _ref62.user,
            webrtcBlock = _ref62.webrtcBlock;

        this.changeDateDisabledClass = function () {
          var disabled
          /*: boolean*/
          = timezoneChange$$1 && !user.premium;
          return disabled ? 'disabled' : '';
        }();

        this.hideDate = timezoneChange$$1;
        this.storeWebrtcBlocked = webrtcBlock;
        this.premiumUser = user.premium;
      } // Lifecycle

    }], [{
      key: "template",
      get: function get() {
        return template$6;
      }
    }, {
      key: "properties",
      get: function get() {
        return {
          'changeDateDisabledClass': {
            'type': String
          },
          'changeDateFirstTimeClass': {
            'type': String,
            'value': ''
          },
          'hideDate': {
            'type': Boolean
          },
          'storeWebrtcBlocked': {
            'type': Boolean,
            'value': null
          },
          'premiumUser': {
            'type': Boolean,
            'value': null
          },
          'translations': {
            'type': Object,
            'value': translations$7,
            'readOnly': true
          },
          'webrtcAvailable': {
            // Does browser support webrtc
            'type': Boolean,
            'value': true
          },
          'webrtcBlocked': {
            'type': Boolean,
            'value': false,
            'observer': 'observeStoreWebrtcBlocked'
          },
          'webrtcBlockedByOtherExtension': {
            'type': Boolean,
            'value': false
          },
          'webrtcNotEnoughPermissions': {
            'type': Boolean,
            'value': false
          },
          'webrtcNotEnoughPermissionsClass': {
            'type': String,
            'computed': 'computeWebrtcNotEnoughPermissionsClass( webrtcNotEnoughPermissions )'
          }
        };
      }
    }]);

    function IndexSettings() {
      var _this20;

      babelHelpers.classCallCheck(this, IndexSettings);
      _this20 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(IndexSettings).call(this)); // flow ignore next line

      _this20.computeWebrtcNotEnoughPermissions = _this20.computeWebrtcNotEnoughPermissions.bind(babelHelpers.assertThisInitialized(babelHelpers.assertThisInitialized(_this20)));
      babelHelpers.asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee25() {
        var settingValue;
        return regeneratorRuntime.wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                _context25.next = 2;
                return storage.get('newSettingsFeatureTimezoneChange2');

              case 2:
                settingValue = _context25.sent;
                _this20.changeDateFirstTimeClass = settingValue ? '' : 'highlighted';

              case 4:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this);
      }))();
      _this20.webrtcAvailable = webrtc.available;
      return _this20;
    }

    babelHelpers.createClass(IndexSettings, [{
      key: "ready",
      value: function ready() {
        var _this21 = this;

        babelHelpers.get(babelHelpers.getPrototypeOf(IndexSettings.prototype), "ready", this).call(this);
        this.changeDateElements = Array.from(this.shadowRoot.querySelectorAll('[data-changedate="true"]'));
        /*::( this.changeDateElements: Array<HTMLElement> );*/
        // eslint-disable-line no-unused-expressions

        babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee26() {
          var controlState;
          return regeneratorRuntime.wrap(function _callee26$(_context26) {
            while (1) {
              switch (_context26.prev = _context26.next) {
                case 0:
                  _context26.next = 2;
                  return webrtc.getControlState();

                case 2:
                  controlState
                  /*: 'not available' | 'permission not granted' | 'not controlled' | 'controlled'*/
                  = _context26.sent;

                  if (controlState === 'not controlled') {
                    _this21.webrtcBlockedByOtherExtension = true;
                  }

                case 4:
                case "end":
                  return _context26.stop();
              }
            }
          }, _callee26, this);
        }))();

        this.webrtcBlocked = function () {
          if (!_head.$storeDefault.getState().webrtcBlock) return false;
          return _head.$permissionsDefault.includes('privacy');
        }();

        this.computeWebrtcNotEnoughPermissions(_head.$permissionsDefault.get());

        _head.$permissionsDefault.addListener(this.computeWebrtcNotEnoughPermissions); // NOTE binding needed here!

      }
    }, {
      key: "connectedCallback",
      value: function () {
        var _connectedCallback2 = babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee27() {
          return regeneratorRuntime.wrap(function _callee27$(_context27) {
            while (1) {
              switch (_context27.prev = _context27.next) {
                case 0:
                  babelHelpers.get(babelHelpers.getPrototypeOf(IndexSettings.prototype), "connectedCallback", this).call(this);
                  _context27.next = 3;
                  return storage.set('newSettingsFeatureTimezoneChange2', true);

                case 3:
                case "end":
                  return _context27.stop();
              }
            }
          }, _callee27, this);
        }));

        function connectedCallback() {
          return _connectedCallback2.apply(this, arguments);
        }

        return connectedCallback;
      }()
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        babelHelpers.get(babelHelpers.getPrototypeOf(IndexSettings.prototype), "disconnectedCallback", this).call(this);

        if (this.tooltipElement) {
          this.tooltipElement.remove();
          delete this.tooltipElement;
        }

        if (this.documentMouseMove) {
          document.removeEventListener('mousemove', this.documentMouseMove);
          delete this.documentMouseMove;
        }
      } // Computed properties and observers

      /** @method */

    }, {
      key: "computeWebrtcNotEnoughPermissions",
      value: function computeWebrtcNotEnoughPermissions(permissions$$1
      /*: Array<string>*/
      )
      /*: void*/
      {
        var _this22 = this;

        this.webrtcNotEnoughPermissions = function () {
          if (_this22.storeWebrtcBlocked === null) return false;
          return _this22.storeWebrtcBlocked && !permissions$$1.includes('privacy');
        }();
      }
      /** @method */

    }, {
      key: "computeWebrtcNotEnoughPermissionsClass",
      value: function computeWebrtcNotEnoughPermissionsClass(notEnough
      /*: boolean*/
      )
      /*: 'highlighted' | ''*/
      {
        return notEnough ? 'highlighted' : '';
      }
      /** @method */

    }, {
      key: "observeStoreWebrtcBlocked",
      value: function observeStoreWebrtcBlocked(webrtcBlocked
      /*: boolean*/
      )
      /*: void*/
      {
        this.computeWebrtcNotEnoughPermissions(_head.$permissionsDefault.get());
      } // Methods

      /** @method */

    }, {
      key: "changeDate",
      value: function () {
        var _changeDate = babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee28() {
          var popupPremium, newValue;
          return regeneratorRuntime.wrap(function _callee28$(_context28) {
            while (1) {
              switch (_context28.prev = _context28.next) {
                case 0:
                  if (!(!this.premiumUser && this.hideDate)) {
                    _context28.next = 2;
                    break;
                  }

                  return _context28.abrupt("return");

                case 2:
                  if (this.premiumUser) {
                    _context28.next = 11;
                    break;
                  }

                  popupPremium
                  /*: HTMLElement*/
                  = document.createElement('popup-premium');
                  popupPremium.style.cssText = 'top:-100%;';
                  if (document.body) document.body.append(popupPremium);
                  (0, _head.$gaDefault)('premium', 'show');
                  _context28.next = 9;
                  return window.anime({
                    'targets': popupPremium,
                    'top': 0,
                    'duration': 800,
                    'easing': 'linear'
                  }).finished;

                case 9:
                  popupPremium.style.cssText = '';
                  return _context28.abrupt("return");

                case 11:
                  newValue
                  /*: boolean*/
                  = !this.hideDate;
                  _context28.next = 14;
                  return timezoneChange.set(newValue);

                case 14:
                  this.hideDate = newValue;

                case 15:
                case "end":
                  return _context28.stop();
              }
            }
          }, _callee28, this);
        }));

        function changeDate() {
          return _changeDate.apply(this, arguments);
        }

        return changeDate;
      }()
      /** @method */

    }, {
      key: "changeDateMouseover",
      value: function changeDateMouseover(_ref65)
      /*: void*/
      {
        var _this23 = this;

        var target = _ref65.target;
        if (this.premiumUser || !this.hideDate) return; // Only for not premium user with enabled timezone change

        if (this.changeDateTooltipShown) return; // Tooltip already visible

        if (!babelHelpers.instanceof(target, HTMLElement)) return; // Flow crap

        this.changeDateTooltipShown = true;

        var _target$getBoundingCl = target.getBoundingClientRect(),
            top = _target$getBoundingCl.top,
            left = _target$getBoundingCl.left,
            height = _target$getBoundingCl.height;

        top += height + 7;
        left -= 14;
        if (left < 10) left = 10;
        var tooltipElement
        /*: HTMLElement & { 'text'?: string }*/
        = document.createElement('general-tooltip');
        tooltipElement.text = (0, _head.$internationalizeDefault)('this_option_is_available_only_for_premium');
        tooltipElement.style.cssText = "top:".concat(top, "px;left:").concat(left, "px;");
        this.tooltipElement = tooltipElement;
        if (document.body) document.body.append(tooltipElement);
        var possibleElements
        /*: Array<HTMLElement>*/
        = this.changeDateElements.concat([tooltipElement]);
        /** @method */

        this.documentMouseMove = function (event
        /*: any*/
        ) {
          // In fact MouseEvent
          var path
          /*: Array<EventTarget>*/
          = function () {
            if (event.composedPath) return event.composedPath();
            if (event.deepPath) return event.deepPath();
            return event.path || [event.target];
          }();

          var possibleElementsMove
          /*: boolean*/
          = possibleElements.some(function (element) {
            return path.includes(element);
          });
          if (possibleElementsMove) return;
          tooltipElement.remove();
          document.removeEventListener('mousemove', _this23.documentMouseMove);
          delete _this23.documentMouseMove;
          delete _this23.tooltipElement;
          _this23.changeDateTooltipShown = false;
        };

        document.addEventListener('mousemove', this.documentMouseMove);
      }
      /** @method */

    }, {
      key: "changeWebrtc",
      value: function () {
        var _changeWebrtc = babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee29() {
          var blocked;
          return regeneratorRuntime.wrap(function _callee29$(_context29) {
            while (1) {
              switch (_context29.prev = _context29.next) {
                case 0:
                  if (!this.webrtcBlockedByOtherExtension) {
                    _context29.next = 2;
                    break;
                  }

                  return _context29.abrupt("return");

                case 2:
                  blocked
                  /*: boolean*/
                  = !this.webrtcBlocked;
                  _context29.prev = 3;

                  if (!blocked) {
                    _context29.next = 9;
                    break;
                  }

                  _context29.next = 7;
                  return webrtc.enable(privacyPermissionRequest);

                case 7:
                  _context29.next = 11;
                  break;

                case 9:
                  _context29.next = 11;
                  return webrtc.disable(privacyPermissionRequest);

                case 11:
                  this.webrtcBlocked = blocked;
                  _context29.next = 17;
                  break;

                case 14:
                  _context29.prev = 14;
                  _context29.t0 = _context29["catch"](3);
                  log.warn('WebRTC setup in popup failed');

                case 17:
                case "end":
                  return _context29.stop();
              }
            }
          }, _callee29, this, [[3, 14]]);
        }));

        function changeWebrtc() {
          return _changeWebrtc.apply(this, arguments);
        }

        return changeWebrtc;
      }()
      /** @method */

    }, {
      key: "showDateHelp",
      value: function showDateHelp()
      /*: void*/
      {
        this.showInformationPopup('date');
      }
      /** @method */

    }, {
      key: "showWebrtcHelp",
      value: function showWebrtcHelp()
      /*: void*/
      {
        this.showInformationPopup('webrtc');
      }
      /** @method */

    }, {
      key: "showInformationPopup",
      value: function showInformationPopup(theme
      /*: string*/
      )
      /*: void*/
      {
        var parent
        /*: HTMLElement | null*/
        = document.querySelector('div.MainContainer');
        if (!parent) return;
        var element
        /*: HTMLElement & { 'theme'?: string }*/
        = document.createElement('popup-description');
        element.theme = theme;
        element.style.cssText = 'opacity:0';
        parent.appendChild(element);
        window.anime({
          'targets': element,
          'opacity': 1,
          'duration': 400,
          'easing': 'linear'
        });
      }
    }]);
    return IndexSettings;
  }((0, _head.connect)(_head.$storeDefault)(_head.PolymerElement));

  customElements.define('index-settings', IndexSettings);
  var template$7 = (0, _head.html)(_templateObject11_b935ea005b8f11e9b4dd99419b6c54c8());
  _exports.$loginTemplateDefault = template$7;
  var loginTemplate = {
    default: template$7
  };
  _exports.$loginTemplate = loginTemplate;
  var translations$8
  /*: MainLoginTranslations*/
  = (0, _head.$createTranslationObjectDefault)({
    'dontHaveAnAccount': 'dont_have_an_account',
    'email': 'email',
    'forgotYourPassword': 'forgot_your_password',
    'logIn': 'log_in',
    'password': 'password',
    'signIn': 'sign_in',
    'signUp': 'sign_up',
    'welcomeBack': 'welcome_back',
    'errors': {
      'incorrectEmailOrPassword': 'incorrect_email_or_password',
      'noConnection': 'authentication_error_no_connection',
      'thisAccountIsLocked': 'this_account_is_locked_please_contact_us'
    }
  });

  var MainLogin =
  /*#__PURE__*/
  function (_connect7) {
    babelHelpers.inherits(MainLogin, _connect7);

    function MainLogin() {
      babelHelpers.classCallCheck(this, MainLogin);
      return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(MainLogin).apply(this, arguments));
    }

    babelHelpers.createClass(MainLogin, [{
      key: "stateChanged",
      value: function stateChanged()
      /*: void*/
      {
        var _window3 = window,
            browsecLink = _window3.browsecLink,
            pageLinks = _window3.pageLinks;
        this.links = {
          // In fact must be just pure getter
          'resetPassword': browsecLink(pageLinks.resetPassword),
          'signUp': browsecLink(pageLinks.newUser)
        };
      } // Lifecycle

    }, {
      key: "ready",
      value: function ready() {
        var _this24 = this;

        babelHelpers.get(babelHelpers.getPrototypeOf(MainLogin.prototype), "ready", this).call(this);
        /** @function */

        var $ = function $(selector
        /*: string*/
        ) {
          return (
            /*: HTMLElement | null*/
            _this24.shadowRoot.querySelector(selector)
          );
        };

        this.nodes = {
          // Nodes
          'mail': $('input[type="text"][name="email"]'),
          'password': $('input[type="password"][name="password"]'),
          'if': {
            'error': $('#ifError'),
            'notice': $('#ifNotice')
          }
        }; // Popup close after link click for FF and early Chrome

        Array.from(this.shadowRoot.querySelectorAll('a')).forEach(function (node) {
          node.addEventListener('click',
          /*#__PURE__*/
          babelHelpers.asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee30() {
            return regeneratorRuntime.wrap(function _callee30$(_context30) {
              while (1) {
                switch (_context30.prev = _context30.next) {
                  case 0:
                    _context30.next = 2;
                    return new Promise(function (resolve) {
                      setTimeout(resolve, 50);
                    });

                  case 2:
                    if (window && window.close) window.close();

                  case 3:
                  case "end":
                    return _context30.stop();
                }
              }
            }, _callee30, this);
          })));
        });
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        babelHelpers.get(babelHelpers.getPrototypeOf(MainLogin.prototype), "connectedCallback", this).call(this);
        this.nodes.mail.focus();
      } // Conditional rendering

      /** @method */

    }, {
      key: "buttonClass",
      value: function buttonClass(loading
      /*: boolean*/
      )
      /*: string*/
      {
        return 'Login_Button' + (loading ? ' loading' : '');
      }
      /** @method */

    }, {
      key: "conditionInputClass",
      value: function conditionInputClass(error
      /*: string | void*/
      )
      /*: 'invalid' | ''*/
      {
        return error ? 'invalid' : '';
      } // Methods

      /** @method */

    }, {
      key: "formSubmit",
      value: function () {
        var _formSubmit = babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee32(event) {
          var _this25 = this;

          var nodes, email, password, status, responseText, responseData, property, errorText, _nodes;

          return regeneratorRuntime.wrap(function _callee32$(_context32) {
            while (1) {
              switch (_context32.prev = _context32.next) {
                case 0:
                  event.preventDefault();

                  if (!this.loading) {
                    _context32.next = 3;
                    break;
                  }

                  return _context32.abrupt("return");

                case 3:
                  this.loading = true;

                  if (this.errorView) {
                    nodes
                    /*: Array<Node>*/
                    = Array.from(this.errorView.childNodes);
                    nodes.forEach(function (node) {
                      _this25.errorView.removeChild(node);
                    });
                  }

                  this.error = false;
                  this.notice = null;
                  email
                  /*: string*/
                  = this.nodes.mail.value;
                  password
                  /*: string*/
                  = this.nodes.password.value;
                  _context32.prev = 9;
                  _context32.next = 12;
                  return _head.$actionsDefault.login({
                    email: email,
                    password: password
                  });

                case 12:
                  this.notice = translations$8.welcomeBack;
                  babelHelpers.asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee31() {
                    var noticeView;
                    return regeneratorRuntime.wrap(function _callee31$(_context31) {
                      while (1) {
                        switch (_context31.prev = _context31.next) {
                          case 0:
                            _this25.nodes.if.notice.render();

                            noticeView
                            /*: HTMLElement*/
                            = _this25.shadowRoot.querySelector('div.Notice');
                            noticeView.style.cssText = 'opacity: 0';
                            _context31.next = 5;
                            return window.anime({
                              'targets': noticeView,
                              'opacity': 1,
                              'duration': 200,
                              'easing': 'linear'
                            }).finished;

                          case 5:
                            noticeView.style.cssText = '';

                          case 6:
                          case "end":
                            return _context31.stop();
                        }
                      }
                    }, _callee31, this);
                  }))();
                  _context32.next = 16;
                  return new Promise(function (resolve) {
                    setTimeout(resolve, 1000);
                  });

                case 16:
                  _head.$storeDefault.dispatch({
                    'type': 'Page change',
                    'page': 'index:home'
                  });

                  _context32.next = 36;
                  break;

                case 19:
                  _context32.prev = 19;
                  _context32.t0 = _context32["catch"](9);
                  status = _context32.t0.status, responseText = _context32.t0.responseText;
                  responseData = {};

                  try {
                    if (responseText) responseData = JSON.parse(responseText);
                  } catch (error) {}

                  property
                  /*: string*/
                  = function () {
                    if (status !== 401) return 'noConnection';
                    if (responseData.error_code === 8) return 'thisAccountIsLocked';
                    return 'incorrectEmailOrPassword';
                  }();

                  errorText = translations$8.errors[property];
                  this.error = true;
                  if (status === 401) this.nodes.password.value = '';
                  this.nodes.if.error.render();
                  this.errorView = this.shadowRoot.querySelector('div.Error');
                  /*::( this.errorView: HTMLElement );*/
                  // eslint-disable-line no-unused-expressions

                  _nodes
                  /*: Array<Node>*/
                  = errorText.split(/\n/g).reduce(function (carry, text
                  /*: string*/
                  , index, array) {
                    if (text.trim()) carry.push(document.createTextNode(text));

                    if (index !== array.length - 1) {
                      carry.push(document.createElement('br'));
                    }

                    return carry;
                  }, []);

                  _nodes.forEach(function (node) {
                    _this25.errorView.appendChild(node);
                  });

                  this.errorView.style.cssText = 'opacity: 0';
                  _context32.next = 35;
                  return window.anime({
                    'targets': this.errorView,
                    'opacity': 1,
                    'duration': 200
                  }).finished;

                case 35:
                  this.errorView.style.cssText = '';

                case 36:
                  this.loading = false;

                case 37:
                case "end":
                  return _context32.stop();
              }
            }
          }, _callee32, this, [[9, 19]]);
        }));

        function formSubmit(_x11) {
          return _formSubmit.apply(this, arguments);
        }

        return formSubmit;
      }()
      /** @method */

    }, {
      key: "onAnimationComplete",
      value: function onAnimationComplete()
      /*: void*/
      {
        this.nodes.mail.focus();
      }
    }], [{
      key: "template",
      get: function get() {
        return template$7;
      }
    }, {
      key: "properties",
      get: function get() {
        return {
          'links': {
            'type': Object,
            'value': {}
          },
          'loading': {
            'type': Boolean,
            'value': false
          },
          'pageLinks': {
            'type': Object,
            'value': window.pageLinks,
            'readOnly': true
          },
          'translations': {
            'type': Object,
            'value': translations$8,
            'readOnly': true
          },
          // Notifications
          'error': {
            'type': Boolean,
            'value': false
          },
          'notice': {
            'type': String
          }
        };
      }
    }]);
    return MainLogin;
  }((0, _head.connect)(_head.$storeDefault)(_head.PolymerElement));

  customElements.define('main-login', MainLogin);
  var template$8 = (0, _head.html)(_templateObject12_b935ea005b8f11e9b4dd99419b6c54c8());
  _exports.$mainIndexTemplateDefault = template$8;
  var mainIndexTemplate = {
    default: template$8
  };
  _exports.$mainIndexTemplate = mainIndexTemplate;
  var translations$9
  /*: { [ string ]: string }*/
  = (0, _head.$createTranslationObjectDefault)({
    'on': 'on',
    'off': 'off'
  });

  var Switch =
  /*#__PURE__*/
  function (_PolymerElement5) {
    babelHelpers.inherits(Switch, _PolymerElement5);

    function Switch() {
      babelHelpers.classCallCheck(this, Switch);
      return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(Switch).apply(this, arguments));
    }

    babelHelpers.createClass(Switch, [{
      key: "observeOn",
      // Property observers
      value: function observeOn(newValue, oldValue)
      /*: void*/
      {
        this.classList.toggle('on', newValue);
      }
    }], [{
      key: "template",
      get: function get() {
        return (0, _head.html)(_templateObject13_b935ea005b8f11e9b4dd99419b6c54c8());
      }
    }, {
      key: "properties",
      get: function get() {
        return {
          'on': {
            'type': Boolean,
            //'notify': true,
            'observer': 'observeOn'
          },
          'translations': {
            'type': Object,
            'value': translations$9,
            'readOnly': true
          }
        };
      }
    }]);
    return Switch;
  }(_head.PolymerElement);

  customElements.define('c-switch', Switch);
  var translations$a
  /*: { [ string ]: string }*/
  = (0, _head.$createTranslationObjectDefault)({
    'help': 'help'
  });

  var MainIndex =
  /*#__PURE__*/
  function (_connect8) {
    babelHelpers.inherits(MainIndex, _connect8);

    function MainIndex() {
      babelHelpers.classCallCheck(this, MainIndex);
      return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(MainIndex).apply(this, arguments));
    }

    babelHelpers.createClass(MainIndex, [{
      key: "stateChanged",
      value: function stateChanged(_ref68)
      /*: void*/
      {
        var domain = _ref68.domain,
            pac = _ref68.pac,
            page = _ref68.page;

        this.helpVisible = function () {
          var parts
          /*: Array<string>*/
          = page.split(':');
          return parts[0] === 'index' && parts[1] === 'filters';
        }();

        this.page = page;
        this.switchOn = pac.mode === 'proxy';

        this.switchVisible = function () {
          var parts
          /*: Array<string>*/
          = page.split(':');

          if (parts[0] === 'index' && parts[1] === 'filters') {
            return false;
          }

          if (!domain) return true;
          var domains
          /*: Array<string>*/
          = pac.filters.reduce(function (carry, _ref69) {
            var disabled = _ref69.disabled,
                domain = _ref69.domain;
            if (!disabled) carry.push(domain);
            return carry;
          }, []);
          return !domains.includes(domain);
        }();
      } // Lifecycle

    }, {
      key: "ready",
      value: function ready() {
        var _this26 = this;

        babelHelpers.get(babelHelpers.getPrototypeOf(MainIndex.prototype), "ready", this).call(this);
        this.defaultCountry = window.config.proxy.defaultCountry || 'nl';
        /** @type {Element} */

        this.switchElement = this.shadowRoot.querySelector('div.Switch');
        /** @type {PolymerElement} */

        this.switch = this.switchElement; // Removing empty nodes

        var nodes = Array.from(this.switch.childNodes);
        nodes.forEach(function (node) {
          if (node.nodeType === Node.ELEMENT_NODE) return;

          _this26.switch.removeChild(node);
        });
      } // Observers

      /** @method */

    }, {
      key: "observePage",
      value: function () {
        var _observePage = babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee33() {
          var _len4,
              args,
              _key4,
              _args$map,
              _args$map2,
              newPage,
              oldPage,
              mode,
              direction,
              sameElement,
              oldElement,
              domain,
              name,
              newElement,
              _args33 = arguments;

          return regeneratorRuntime.wrap(function _callee33$(_context33) {
            while (1) {
              switch (_context33.prev = _context33.next) {
                case 0:
                  for (_len4 = _args33.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                    args[_key4] = _args33[_key4];
                  }

                  if (args[1]) {
                    _context33.next = 3;
                    break;
                  }

                  return _context33.abrupt("return");

                case 3:
                  // Initial redux call
                  _args$map = args.map(function (item) {
                    return item.split(':');
                  }), _args$map2 = babelHelpers.slicedToArray(_args$map, 2), newPage = _args$map2[0], oldPage = _args$map2[1];

                  if (!(newPage[0] !== 'index')) {
                    _context33.next = 6;
                    break;
                  }

                  return _context33.abrupt("return");

                case 6:
                  // This will remove this element
                  mode
                  /*: string*/
                  = _head.$storeDefault.getState().pac.mode; // Removing first elements (they 'index' anyway)

                  newPage.shift();
                  oldPage.shift();
                  direction
                  /*: string*/
                  = newPage[0] === 'home' ? 'left' : 'right';
                  sameElement
                  /*: boolean*/
                  = newPage[0] === oldPage[0];
                  /** @type {Element} */

                  oldElement = this.switch.firstChild;

                  if (!sameElement) {
                    _context33.next = 16;
                    break;
                  }

                  if (newPage[0] === 'filters' && newPage[1]) {
                    domain
                    /*: string*/
                    = newPage[1];
                    oldElement.domain = domain;
                    oldElement.country = mode === 'proxy' ? null : this.defaultCountry;
                    oldElement.selectedDomain = null;
                  }

                  _context33.next = 27;
                  break;

                case 16:
                  name
                  /*: string | void*/
                  = function () {
                    switch (newPage[0]) {
                      case 'filters':
                        return 'index-filters';

                      case 'home':
                        return 'index-home';

                      case 'locations':
                        return 'index-locations';

                      case 'settings':
                        return 'index-settings';
                    }
                  }();

                  if (name) {
                    _context33.next = 19;
                    break;
                  }

                  return _context33.abrupt("return");

                case 19:
                  newElement
                  /*: HTMLElement & { 'country'?: string | null, 'domain'?: string }*/
                  = document.createElement(name);

                  if (newPage[0] === 'locations' && newPage[1]) {
                    newElement.domain = newPage[1];
                  }

                  if (newPage[0] === 'filters' && newPage[1]) {
                    newElement.domain = newPage[1];
                    newElement.country = mode === 'proxy' ? null : this.defaultCountry;
                  }

                  if (direction === 'left') {
                    this.switch.insertBefore(newElement, oldElement);
                    this.switchElement.style.cssText = 'margin-left:-100%;';
                  } else {
                    this.switch.appendChild(newElement);
                  }

                  _context33.next = 25;
                  return window.anime({
                    'targets': this.switchElement,
                    'margin-left': direction === 'left' ? ['-100%', '0%'] : ['0%', '-100%'],
                    'duration': 250,
                    'easing': 'linear'
                  }).finished;

                case 25:
                  this.switch.removeChild(oldElement);
                  this.switchElement.style.cssText = '';

                case 27:
                case "end":
                  return _context33.stop();
              }
            }
          }, _callee33, this);
        }));

        function observePage() {
          return _observePage.apply(this, arguments);
        }

        return observePage;
      }() // Methods

      /** @method */

    }, {
      key: "openHelp",
      value: function openHelp()
      /*: void*/
      {
        (0, _sendMessage.$sendMessageDefault)({
          'type': 'сounters.increase',
          'property': 'popup: smart settings: open help'
        });
        (0, _sendMessage.$sendMessageDefault)({
          'type': 'create tab',
          'options': '/pages/help/help.html'
        });
      }
      /** @method */

    }, {
      key: "switchClick",
      value: function switchClick()
      /*: void*/
      {
        var _this27 = this;

        var delay = new _head.$DelayRecordDefault('Big switch from ' + (this.switchOn ? 'on' : 'off'));
        babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee34() {
          return regeneratorRuntime.wrap(function _callee34$(_context34) {
            while (1) {
              switch (_context34.prev = _context34.next) {
                case 0:
                  if (_this27.switchOn) {
                    _context34.next = 5;
                    break;
                  }

                  _context34.next = 3;
                  return _head.$proxyDefault.enable();

                case 3:
                  _context34.next = 7;
                  break;

                case 5:
                  _context34.next = 7;
                  return _head.$proxyDefault.disable();

                case 7:
                  delay.end();

                case 8:
                case "end":
                  return _context34.stop();
              }
            }
          }, _callee34, this);
        }))();
      }
    }], [{
      key: "template",
      get: function get() {
        return template$8;
      }
    }, {
      key: "properties",
      get: function get() {
        return {
          'helpVisible': {
            'type': Boolean,
            'value': false
          },
          'page': {
            'type': String,
            'value': 'index:home',
            'observer': 'observePage'
          },
          'switchOn': {
            'type': Boolean,
            'value': false
          },
          'switchVisible': {
            'type': Boolean,
            'value': false
          },
          'translations': {
            'type': Object,
            'value': translations$a,
            'readOnly': true
          }
        };
      }
    }]);
    return MainIndex;
  }((0, _head.connect)(_head.$storeDefault)(_head.PolymerElement));

  customElements.define('main-index', MainIndex);

  var PageSwitch =
  /*#__PURE__*/
  function (_connect9) {
    babelHelpers.inherits(PageSwitch, _connect9);

    function PageSwitch() {
      babelHelpers.classCallCheck(this, PageSwitch);
      return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(PageSwitch).apply(this, arguments));
    }

    babelHelpers.createClass(PageSwitch, [{
      key: "stateChanged",
      value: function stateChanged(_ref71)
      /*: void*/
      {
        var page = _ref71.page;
        this.indexPage = page.split(':')[0] === 'index';
      } // Lifecycle

    }, {
      key: "ready",
      value: function ready() {
        babelHelpers.get(babelHelpers.getPrototypeOf(PageSwitch.prototype), "ready", this).call(this);
        this.ribbonNode = Array.from(this.shadowRoot.children).pop();
        this.ribbon = this.ribbonNode; // Initial

        this.ribbon.appendChild(document.createElement('main-index'));
      } // Observers and computed properties

      /** @method */

    }, {
      key: "observeIndexPage",
      value: function () {
        var _observeIndexPage = babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee35(newIsIndex
        /*: boolean*/
        , oldValue
        /*: boolean | void*/
        ) {
          var _this28 = this;

          var elements;
          return regeneratorRuntime.wrap(function _callee35$(_context35) {
            while (1) {
              switch (_context35.prev = _context35.next) {
                case 0:
                  if (!(oldValue === undefined)) {
                    _context35.next = 2;
                    break;
                  }

                  return _context35.abrupt("return");

                case 2:
                  // First case when element just created
                  if (this.animation) {
                    // Over-clicking
                    this.animationObject.pause(); // Stop current animation
                  } else {
                    this.animation = true;
                  } // Remove old element from old animation


                  Array.from(this.ribbonNode.childNodes).filter(function (element) {
                    return element.dataset.old === 'true';
                  }).forEach(function (element) {
                    _this28.ribbonNode.removeChild(element);
                  }); // Remove all other old elements

                  Array.from(this.ribbonNode.childNodes).slice(0, -1).forEach(function (element) {
                    _this28.ribbonNode.removeChild(element);
                  });
                  /*::
                  type PageSwitchElements = {|
                    'old': HTMLElement,
                    'new': HTMLElement & { 'onAnimationComplete'?: Function }
                  |};
                  */

                  elements
                  /*:PageSwitchElements */
                  = {
                    'old': this.ribbon.lastChild,
                    'new': function () {
                      var tag
                      /*: string*/
                      = newIsIndex ? 'main-index' : 'main-login';
                      var element = document.createElement(tag);
                      element.style.cssText = 'visibility:hidden;';
                      return element;
                    }()
                  }; // Mark old element for future conflicts

                  elements.old.dataset.old = 'true'; // Adding new elements

                  if (newIsIndex) {
                    this.ribbon.insertBefore(elements.new, elements.old);
                  } else {
                    this.ribbon.appendChild(elements.new);
                  }

                  if (newIsIndex) {
                    this.ribbon.style.cssText = 'margin-left:-100%;';
                  }

                  _context35.next = 11;
                  return new Promise(function (resolve) {
                    setTimeout(resolve, 0);
                  });

                case 11:
                  // NOTE setTimeout due to chrome bug
                  elements.new.style.cssText = '';
                  this.animationObject = window.anime({
                    'targets': this.ribbonNode,
                    'margin-left': newIsIndex ? '0px' : '-100%',
                    'duration': 250,
                    'easing': 'linear'
                  });
                  _context35.next = 15;
                  return this.animationObject.finished;

                case 15:
                  if (this.ribbonNode.contains(elements.old)) {
                    this.ribbon.removeChild(elements.old);
                  }

                  this.ribbon.style.cssText = '';
                  if (elements.new.onAnimationComplete) elements.new.onAnimationComplete();
                  this.animation = false;

                case 19:
                case "end":
                  return _context35.stop();
              }
            }
          }, _callee35, this);
        }));

        function observeIndexPage(_x12, _x13) {
          return _observeIndexPage.apply(this, arguments);
        }

        return observeIndexPage;
      }()
    }], [{
      key: "template",
      get: function get() {
        return (0, _head.html)(_templateObject14_b935ea005b8f11e9b4dd99419b6c54c8());
      }
    }, {
      key: "properties",
      get: function get() {
        return {
          'animation': {
            'type': Boolean,
            'value': false
          },
          'indexPage': {
            'type': Boolean,
            'value': true,
            'observer': 'observeIndexPage'
          }
        };
      }
    }]);
    return PageSwitch;
  }((0, _head.connect)(_head.$storeDefault)(_head.PolymerElement));

  customElements.define('page-switch', PageSwitch);
});