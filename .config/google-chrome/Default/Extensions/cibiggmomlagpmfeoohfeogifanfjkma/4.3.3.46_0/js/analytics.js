//Analytics.js
(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-118121146-1', 'auto');
ga('require', 'displayfeatures');
ga('set', 'checkProtocolTask', function () {
});

//Const
var manifest_version = chrome.app.getDetails().version;

//Google Analytics Events
ga('send', 'pageview', location.href.replace(/chrome-extension:\/\/[^/]+/, ''));
ga('send', 'event', 'background', 'version', manifest_version);


chrome.runtime.onInstalled.addListener(function (details) {
    if (details.reason == "install") {
        install();
    }
    if (details.reason == "update") {
        update();
    }
    if (details.reason == "chrome_update") {
        ga_chrome_update();
    }
});


function install() {
    ga_install();
    ga_getUUID();
    ga_getInstallTime();
}

function update() {
    ga_update();
    ga_getUUID();

    chrome.storage.sync.get(function (Storage) {
        if (Storage.ga_installTime !== undefined) {
            localStorage['ga_InstallTime'] = Math.round(Storage.ga_installTime / 1000);
        }
    });
}

function ga_getUUID() {
    if (localStorage['ga_UUID'] === undefined) {
        localStorage['ga_UUID'] = generateUUID();
    }

    var ga_UUID = localStorage['ga_UUID'];
    return ga_UUID;
}

function ga_getInstallTime() {
    if (localStorage['ga_InstallTime'] === undefined) {
        localStorage['ga_InstallTime'] = Math.round(new Date() / 1000);
    }

    var ga_InstallTime = localStorage['ga_InstallTime'];
    return ga_InstallTime;
}


function generateUUID() {
    var x = 2147483648;
    var uuid = (Math.floor(Math.random() * x).toString(36) +
        Math.abs(Math.floor(Math.random() * x) ^ Date.now()).toString(36)) +
        (Math.floor(Math.random() * x).toString(36) +
            Math.abs(Math.floor(Math.random() * x) ^ Date.now()).toString(36));

    return uuid;
}

//Google Analytics Events
function ga_install() {
    ga_Event('background', 'install', manifest_version);
}

function ga_update() {
    ga_Event('background', 'update', manifest_version);
}

function ga_chrome_update() {
    ga_Event('background', 'chrome_update', manifest_version);
}

function ga_Event(category, action, opt_label, opt_value, opt_noninteraction) {
    ga('send', 'event', category, action, opt_label, opt_value, opt_noninteraction);
}

