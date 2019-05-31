chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('www/index.html', {
    'bounds': {
      'width': 400,
      'height': 600
    }
  });
});