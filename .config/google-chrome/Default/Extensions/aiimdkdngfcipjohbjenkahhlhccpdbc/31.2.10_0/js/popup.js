function displayDonate() {
  var downloadBox = document.getElementById('download_block');
  var donateBox = document.getElementById('donate_block');

  if (donateBox.style.display != 'none') {
    return;
  }

  downloadBox.setAttribute(
    'style',
    '-webkit-transition: opacity 200ms; opacity: 0'
  );

  setTimeout(function() {
    donateBox.setAttribute('style', 'opacity:0');
    setTimeout(function() {
      donateBox.setAttribute(
        'style',
        '-webkit-transition: opacity 200ms; opacity: 1'
      );
    }, 0);
    downloadBox.setAttribute('style', 'display:none');
  }, 200);
}

function displayDownloads() {
  var downloadBox = document.getElementById('download_block');
  var donateBox = document.getElementById('donate_block');

  donateBox.setAttribute(
    'style',
    '-webkit-transition: opacity 200ms; opacity: 0'
  );

  setTimeout(function() {
    downloadBox.setAttribute('style', 'opacity:0');
    setTimeout(function() {
      downloadBox.setAttribute(
        'style',
        '-webkit-transition: opacity 200ms; opacity: 1'
      );
    }, 0);
    donateBox.setAttribute('style', 'display:none');
  }, 200);
}

var searchBox = null;

window.addEventListener(
  'load',
  function() {
    try {
      fvdSingleDownloader.Popup.init();
    } catch (ex) {}
    document.getElementById('moreToggle').addEventListener('click', function() {
      toggleClass(document.getElementById('moreApps'), 'visible');
    });

    fvdSingleDownloader.Locale.localizeCurrentPage();

    chrome.extension.sendMessage(
      { action: 'sendGoogleAnalytics', event: 'click_popup' },
      function(response) {}
    );
  },
  false
);

function toggleClass(el, className) {
  if (el.classList) {
    el.classList.toggle(className);
  } else {
    var classes = el.className.split(' ');
    var existingIndex = classes.indexOf(className);

    if (existingIndex >= 0) classes.splice(existingIndex, 1);
    else classes.push(className);

    el.className = classes.join(' ');
  }
}
