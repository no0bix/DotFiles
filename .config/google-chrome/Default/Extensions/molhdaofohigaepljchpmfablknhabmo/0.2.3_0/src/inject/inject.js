var readrSettings;

var pageUrl = document.URL;

var _gaq = _gaq || [];

_gaq.push(['_setAccount', 'UA-24335323-3'])

/* Settings initial Load */

chrome.storage.local.get(null, function(result) {

  var currentTime = new Date();

  if (result["firstLaunch"] == undefined) {

    chrome.storage.local.set({
      "firstLaunch"           : false,
      "readrNightModeEnabled" : false,
      "guideShowAfterWeek"    : true,
      "guideForceShowAgain"   : true,
      "guideTimestamp"        : currentTime.toJSON(),
      "firstInstallDate"      : currentTime.toJSON(),
      "readButtonPresses"     : 0,
      "readTimeTotal"         : 0,
      "showReadButtonOnTop"   : true,
      "readrSerifModeEnabled" : false
    }, function() {
    });

    if ($('.comments-page').length > 0) {
      injectGuiderCode();
    }

    result["readButtonPresses"]   = 0;
    result["readTimeTotal"]       = 0;
    result["showReadButtonOnTop"] = true;
    readrSettings = result;

  } else {
    if (result["readButtonPresses"] == undefined && result["readTimeTotal"] == undefined) {
      chrome.storage.local.set({
        "readButtonPresses" : 0,
        "readTimeTotal"     : 0
      }, function() {
      });
      result["readButtonPresses"] = 0;
      result["readTimeTotal"]     = 0;
    }
    if (result["showReadButtonOnTop"] == undefined) {
      result["showReadButtonOnTop"] = true
    };
    readrSettings = result;

  }

});

/* Readr Guide code */
var hideAndRemoveReadrGuide = function() {
  $('.readrTooltip').addClass('readrTooltip-hidden');

  setTimeout(function() {
    $('.readrTooltip').remove();
  }, 1000)
};

var injectGuiderCode = function() {

  var dontShowReadrGuideAgain = function() {

    var currentTime = new Date();

    chrome.storage.local.set({
      "guideShowAfterWeek": false,
      "guideForceShowAgain": false,
      "guideTimestamp": currentTime.toJSON()
    }, function() {
    });

    hideAndRemoveReadrGuide();

  }

  var showReadrGuideAgain = function() {

    var currentTime = new Date();

    chrome.storage.local.set({
      "guideShowAfterWeek": true,
      "guideForceShowAgain": false,
      "guideTimestamp": currentTime.toJSON()
    }, function() {
    });

    hideAndRemoveReadrGuide();

  };

  var initReaderGuide = function(data) {

    $(data).appendTo('body');

    setTimeout(function() {
      $('.readrTooltip').removeClass('readrTooltip-hidden')
    }, 2000)

    $('#readrTooltip-dontShowAgain').on('click', function(event) {
      dontShowReadrGuideAgain();
    })

    $('#readrTooltip-showAgain').on('click', function(event) {
      showReadrGuideAgain();
    })
  };

  setTimeout(function() {
    $.get(chrome.extension.getURL('src/inject/inject-tooltip.html'), function(data) {
      initReaderGuide(data);
    });
  }, 3000);

};

/* Whats New code */
var injectReaderWhatsNewCode = function(currVersion, prevVersion) {

  /* install/Update handling */
  var onInstall = function() {
    chrome.storage.local.set({'version' : currVersion});
    _gaq.push(['_trackEvent', 'Extension', 'Installed Readr']);
  };

  var onUpdate = function() {
    chrome.storage.local.set({'version' : currVersion});
    _gaq.push(['_trackEvent', 'Extension', 'Updated Readr']);
  };

  // Check if we just installed this extension.
  if (typeof prevVersion == 'undefined') {
    onInstall(currVersion);
    console.log('New Install');
  } else {
    onUpdate(currVersion);
    console.log('Update Install');
  }
};

/* Readr Code Begins */
var injectSaranshRedditReaderCode = function() {

  WebFont.load({
    google: {
      families: ['EB Garamond', 'Open Sans', 'Open Sans:Light', 'Ubuntu:Light', 'Lato:Bold', 'Lato:Light']
    }
  });

  /* Var used to track time spent on readr */
  var readrOpeningTime;

  /* Inserting Read buttons under the comments */
  if (readrSettings && !readrSettings['showReadButtonOnTop']) {
    $('.usertext').siblings('.flat-list').addClass('saranshReadrBtnAdded')
    $('.usertext').siblings('.flat-list').find('li:last-child').each(function(index,item) {
      if ( $(item).text() == 'reply') {
        $("<li class='saranshReadBtn'><a>read</a></li>").insertBefore( $(item) );
      } else {
        $("<li class='saranshReadBtn'><a>read</a></li>").insertAfter( $(item) );
      }
    })
  };

  /* Adding read button to self posts */
  $('.usertext').parent().siblings('.flat-list').addClass('saranshReadrBtnAdded')
  $('.usertext').parent().siblings('.flat-list').append("<li class='saranshReadBtn'><a>read</a></li>");

  /* Dont know what this does */
  $('.usertext').siblings('.flat-list').each(function(index) {
    if ($($('.usertext').siblings('.flat-list')[index]).children().length == 1 && $($('.usertext').siblings('.flat-list')[index]).find('.saranshReadBtn').length == 1) {
      $($('.usertext').siblings('.flat-list')[index]).html('');
    }
  })

  /* Adding read buttons to the top */
  if (readrSettings && readrSettings['showReadButtonOnTop']) {
    /* Inserting Read button above the comments */
    $('.usertext').siblings('.tagline').addClass('saranshReadrBtnAdded');
    $('.usertext').siblings('.tagline').append("<span class='score saranshTopReadBtn'>read</span>");
  }

  /* Comment processing Utility functions */
  var readingtime = function(argument) {
    var r = $.trim(argument).split(/\s+/).length
    return Math.round(r / 210);
  }

  var incrementReadCounter = function() {
    readrSettings["readButtonPresses"] += 1;
    chrome.storage.local.set({
      "readButtonPresses" : readrSettings["readButtonPresses"]
    }, function() {
    });
  };

  var incrementReadTime = function(readTime) {
    readrSettings["readTimeTotal"] += readTime;
    chrome.storage.local.set({
      "readTimeTotal" : readrSettings["readTimeTotal"]
    }, function() {
    });
  };

  /* Adding reddit reader container to the body */
  $('body').append('<div id="redditReaderContainer"></div>');

  $('#redditReaderContainer').hide();

  var redditContainer = $('#redditReaderContainer');

  /* Fetching the inject readr html code and appending to redditReaderContainer */
  $.get(chrome.extension.getURL('src/inject/inject-readr.html'), function(data) {

    $(data).appendTo(redditContainer);

    /* Setting Author name, score, actual comment text */
    var gildedIndicator = $('#redditReaderGilded'),
        votesText       = $('#redditReaderVotes'),
        commentText     = $('#redditReaderCommentText'),
        readingTimeText = $('#redditReaderETA span'),
        author          = $('#redditReaderAuthor'),
        toggleButton    = $('#cb1'),
        allEntries      = $('.entry'),
        entryPosition   = 0;

    /* Settings link href */
    $('#settingsBtn a').attr('href', chrome.extension.getURL("src/options/options.html"))

    toggleButton.on('click', function() {

      redditContainer.toggleClass('redditReaderNightMode');

      chrome.storage.local.set({
        "readrNightModeEnabled": redditContainer.hasClass('redditReaderNightMode')
      }, function() {
      });
    });

    if (readrSettings) {
      /* Check if night mode setting was enabled, if yes enable it again */
      if (readrSettings["readrNightModeEnabled"]) {
        toggleButton.click();
      };

      // console.log(readrSettings);
      /* Check if night mode setting was enabled, if yes enable it again */
      if (readrSettings["readrSerifModeEnabled"]) {
        commentText.addClass('readrSerifModeEnabled');
      };

      if ($('.comments-page').length > 0) {
        function getVersion() {
          var details = chrome.runtime.getManifest();
          return details.version;
        }

        // Check if the version has changed.
        var currVersion = getVersion(),
            prevVersion = readrSettings['version'];

        if (currVersion != prevVersion) {
          injectReaderWhatsNewCode(currVersion, prevVersion);
        }

        /* Check if a week has passed since remind me in a week was pressed, or if either of the buttons has not been clicked yet */
        var currentTime  = new Date()
            previousTime = new Date(readrSettings['guideTimestamp']);

        /* 604800000ms = 1 week */
        if ((((currentTime - previousTime) > 604800000) && readrSettings['guideShowAfterWeek']) || readrSettings['guideForceShowAgain']) {
          injectGuiderCode();
        };
      };
    };

    var initUninitializedComments = function() {

      var nonInitedTopReadrBtns = [],
          nonInitedReadrBtns    = [];

      if (readrSettings['showReadButtonOnTop']) {
        nonInitedTopReadrBtns = $('.usertext').siblings('.tagline').parent().find('.tagline:not(.saranshReadrBtnAdded)');
        nonInitedReadrBtns    = $('.usertext').parent().siblings('.flat-list').parent().find('.flat-list:not(.saranshReadrBtnAdded)');
      } else {
        nonInitedReadrBtns    = $('.usertext').siblings('.flat-list').parent().find('.flat-list:not(.saranshReadrBtnAdded)').add($('.usertext').parent().siblings('.flat-list').parent().find('.flat-list:not(.saranshReadrBtnAdded)'));
      }

      if (nonInitedReadrBtns.length > 0) {
        // nonInitedReadrBtns.append("<li class='saranshReadBtn'><a>read</a></li>");
        $("<li class='saranshReadBtn'><a>read</a></li>").insertBefore( nonInitedReadrBtns.find('li:last-child') );

        nonInitedReadrBtns.find('.saranshReadBtn a').on('click', function(event) {

          redditContainer.fadeIn(100).addClass('visible').animate({ scrollTop: 0 }, 0);

          gildedIndicator.removeClass('redditReaderGildedTrue');

          var selectedEntry = $(event.target).closest('.entry'),
              redditAuthor  = selectedEntry.children().find('.author'),
              entryPosition = $.inArray(selectedEntry[0], allEntries);

          viewCommentInViewer(selectedEntry, redditAuthor);

          incrementReadCounter();
        })

        nonInitedReadrBtns.addClass('saranshReadrBtnAdded');
      }

      if (nonInitedTopReadrBtns.length > 0) {
        nonInitedTopReadrBtns.append("<span class='score saranshTopReadBtn'>read</span>");

        nonInitedTopReadrBtns.find('.saranshTopReadBtn').on('click', function(event) {

          redditContainer.fadeIn(100).addClass('visible').animate({ scrollTop: 0 }, 0);

          gildedIndicator.removeClass('redditReaderGildedTrue');

          var selectedEntry = $(event.target).closest('.entry'),
              redditAuthor  = selectedEntry.children().find('.author'),
              entryPosition = $.inArray(selectedEntry[0], allEntries);

          viewCommentInViewer(selectedEntry, redditAuthor);

          incrementReadCounter();
        })

        nonInitedTopReadrBtns.addClass('saranshReadrBtnAdded');
      };
    };

    /* Adding listener for uninitialized comments */
    setInterval(function() {
      initUninitializedComments();
    }, 1500)

    /* Opens readr view given reference to the entry and the author */
    var viewCommentInViewer = function(redditEntry, redditAuthor) {

      readrOpeningTime = new Date();

      if (redditEntry.children().find('.gilded-icon').length > 0) {
        gildedIndicator.addClass('redditReaderGildedTrue');
      };

      author.html(redditAuthor.html());
      author.removeClass('opIsFag');

      if (redditAuthor.hasClass('submitter')) {
        author.addClass('opIsFag');
      };

      votesText.html(redditEntry.children().find('.score.unvoted').html());

      commentText.html(redditEntry.children().find('.md').html());

      var readingTimeMin = readingtime(commentText.text());

      incrementReadTime(readingTimeMin);

      readingTimeText.html(readingTimeMin + ' min');
      
      _gaq.push(['_trackEvent', 'Viewer', 'Opened Readr', 'Projected Read Time', readingTimeMin]);

      if (pageUrl.split("/").indexOf('r') > -1) {
      
        _gaq.push(['_trackEvent', 'Viewer', 'On Subreddit', pageUrl.split("/")[ pageUrl.split("/").indexOf('r') + 1 ] ]);

      };

      $('body').addClass('redditReaderNoscroll');

    };

    /* Hides readr view */
    var hideReaderFromView = function() {

      var currentTime = new Date();

      _gaq.push(['_trackEvent', 'Viewer', 'Closed Readr', 'Time Spent', Math.abs(currentTime - readrOpeningTime)]);

      redditContainer.removeClass('visible');

      setTimeout(function() {
        $('body').removeClass('redditReaderNoscroll');
        redditContainer.hide();
        commentText.html("")
      }, 210)
    };

    /* Read button click handling */
    $('.saranshReadBtn a, .saranshTopReadBtn').on('click', function(event) {

      redditContainer.fadeIn(100).addClass('visible').animate({
        scrollTop: 0
      }, 0);

      gildedIndicator.removeClass('redditReaderGildedTrue');

      var selectedEntry = $(event.target).closest('.entry'),
          redditAuthor  = selectedEntry.children().find('.author'),
          entryPosition = $.inArray(selectedEntry[0], allEntries);

      viewCommentInViewer(selectedEntry, redditAuthor);

      incrementReadCounter();

    })

    /* Close button click handling */
    $('#saranshRedditReaderDone, #saranshRedditReaderClose').on('click', function(event) {
      hideReaderFromView();
    });

    /* 'ESC' button click handling */
    $(document).keyup(function(e) {
      if (e.keyCode == 27) {
        hideReaderFromView();
      }
    });

  });

};

$(document).ready(function() {
  if ($('.listing-page').length > 0 || $('.comments-page').length > 0) {
    injectSaranshRedditReaderCode();
  };
})