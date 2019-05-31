define(["exports", "./components/head.js", "./tools/sendMessage.js"], function (_exports, _head, _sendMessage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.$urlModifyParametersDefault = _exports.$generateBrowsecLinkDefault = _exports.$urlModifyParameters = _exports.$generateBrowsecLink = void 0;
  var _
  /*: Lodash*/
  = window._;
  /** @function */

  var urlModifyParameters = function urlModifyParameters(url
  /*: string*/
  , action
  /*: Function*/
  )
  /*: string*/
  {
    var urlObject = new URL(url);
    var search
    /*: Object*/
    = urlObject.search ? _.transform(urlObject.search.replace(/^\?/, '').split('&'), function (carry, part) {
      var _part$split = part.split('='),
          _part$split2 = babelHelpers.slicedToArray(_part$split, 2),
          left = _part$split2[0],
          right = _part$split2[1];

      carry[left] = right ? decodeURIComponent(right) : true;
    }, {}) : {};
    search = action(search);

    urlObject.search = function () {
      /** @type {array<string>} */
      var parts = _.transform(search, function (carry, value, property) {
        carry.push(encodeURIComponent(property) + '=' + encodeURIComponent(value));
      }, []);

      return parts.length ? '?' + parts.join('&') : '';
    }();

    return urlObject.toString();
  };

  _exports.$urlModifyParametersDefault = urlModifyParameters;
  var urlModifyParameters$1 = {
    default: urlModifyParameters
  };
  _exports.$urlModifyParameters = urlModifyParameters$1;

  var generateBrowsecLink = function generateBrowsecLink(storeState
  /*: StoreState*/
  ) {
    return function (url
    /*: string*/
    )
    /*: string*/
    {
      var action
      /*: Function*/
      = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (search) {
        return search;
      };

      /** @function */
      var daysAction = function daysAction(search
      /*: Object*/
      ) {
        return (
          /*: Object*/
          Object.assign(action(search), {
            'instd': storeState.daysAfterInstall
          })
        );
      };

      return urlModifyParameters(url, daysAction);
    };
  };

  _exports.$generateBrowsecLinkDefault = generateBrowsecLink;
  var generateBrowsecLink$1 = {
    default: generateBrowsecLink
  };
  _exports.$generateBrowsecLink = generateBrowsecLink$1;
  babelHelpers.asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var pageLoadTimer, _ref2, _ref3, config, domainZoneList, pageLinks, showSpeedPromo, storeState;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            pageLoadTimer = new _head.$DelayRecordDefault('Popup: page load');

            window.onerror = function (message, fileName, lineNumber) {
              (0, _sendMessage.$sendMessageDefault)({
                'type': 'popup error',
                'data': {
                  message: message,
                  fileName: fileName,
                  lineNumber: lineNumber
                }
              });
              return false;
            }; // Show speed banner


            _context2.next = 4;
            return Promise.all([// eslint-disable-line standard/array-bracket-even-spacing
            (0, _sendMessage.$sendMessageDefault)({
              'type': 'config'
            }), (0, _sendMessage.$sendMessageDefault)({
              'type': 'domain zone list'
            }), (0, _sendMessage.$sendMessageDefault)({
              'type': 'page links'
            }), (0, _sendMessage.$sendMessageDefault)({
              'type': 'show speed promo'
            }), (0, _sendMessage.$sendMessageDefault)({
              'type': 'store.getState'
            })]);

          case 4:
            _ref2 = _context2.sent;
            _ref3 = babelHelpers.slicedToArray(_ref2, 5);
            config = _ref3[0];
            domainZoneList = _ref3[1];
            pageLinks = _ref3[2];
            showSpeedPromo
            /*: boolean*/
            = _ref3[3];
            storeState
            /*: StoreState*/
            = _ref3[4];
            Object.assign(window, {
              config: config,
              domainZoneList: domainZoneList,
              pageLinks: pageLinks,
              showSpeedPromo: showSpeedPromo
            });
            /*::( window.showSpeedPromo: boolean );*/

            _head.$storeDefault.activate(storeState);

            window.browsecLink = generateBrowsecLink(storeState);

            if (!(_head.$storeDefault.getState().page !== 'index:home')) {
              _context2.next = 17;
              break;
            }

            _context2.next = 17;
            return _head.$storeDefault.dispatch({
              'type': 'Page change',
              'page': 'index:home'
            });

          case 17:
            babelHelpers.asyncToGenerator(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee() {
              var controlState, parent, appendElementsTimer, elements;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return (0, _sendMessage.$sendMessageDefault)({
                        'type': 'popup open'
                      });

                    case 2:
                      controlState
                      /*: boolean*/
                      = _context.sent;
                      parent
                      /*: HTMLElement | null*/
                      = document.querySelector('div.MainContainer');

                      if (parent) {
                        _context.next = 6;
                        break;
                      }

                      return _context.abrupt("return");

                    case 6:
                      appendElementsTimer = new _head.$DelayRecordDefault('Popup: append elements');
                      elements
                      /*: Array<string>*/
                      = ['main-head', 'page-switch'];
                      if (!controlState) elements.push('popup-proxy-blocked');
                      elements.forEach(function (element) {
                        parent.appendChild(document.createElement(element));
                      });
                      appendElementsTimer.end();
                      pageLoadTimer.end();

                    case 12:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }))(); // PolymerRedux problems resolve

            window.addEventListener('unload', function () {
              if (!document.body) return; // Flow crap

              Array.from(document.body.children).forEach(function (element) {
                if (element.tagName.toLowerCase() === 'script') return;
                if (document.body) document.body.removeChild(element); // Flow crap
              });
            });

          case 19:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }))();
});