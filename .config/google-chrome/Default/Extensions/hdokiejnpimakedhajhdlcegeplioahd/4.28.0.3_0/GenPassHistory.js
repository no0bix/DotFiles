var GenPassHistory=function(){"use strict";var t=[],e=20;function n(n){t.unshift({password:n,date:new Date(Date.now())}),t.length>e&&t.splice(e,t.length-20)}function a(){t=[]}function r(e){e&&e(t.map(function(t){return t.password}))}function u(e){e&&e(t)}function o(e){e&&e(t.map(function(t){return{password:t.password,date:i(t.date)}}))}function i(t){var e,n;return"number"==typeof t&&(t=new Date(t)),t.toLocaleDateString("en-us",{month:"short",day:"numeric",year:"numeric"})+" at "+t.toLocaleTimeString("en-us",{hour12:!0,hour:"numeric",minute:"numeric"})}return{add:n,clear:a,getWithDate:u,getWithReadableDate:o,getWithoutDate:r}}();
//# sourceMappingURL=sourcemaps/GenPassHistory.js.map
