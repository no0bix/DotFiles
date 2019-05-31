$(document).ready(function() {

  WebFont.load({
    google: {
      families: ['EB Garamond', 'Open Sans', 'Open Sans:Light', 'Ubuntu:Light', 'Lato:Bold', 'Lato:Light']
    }
  });

  var dirtyFlag = function(root, isInitiallyDirty) {
    var result = function() {},
      _initialState = ko.observable(ko.toJSON(root)),
      _isInitiallyDirty = ko.observable(isInitiallyDirty);

    result.isDirty = ko.computed(function() {
      return _isInitiallyDirty() || _initialState() !== ko.toJSON(root);
    });

    result.reset = function() {
      _initialState(ko.toJSON(root));
      _isInitiallyDirty(false);
    };

    result.revert = function(callback) {
      callback(JSON.parse(_initialState()));
    };

    return result;
  }

  var SettingsModel = function() {
    var self = this;

    self.showReadButtonOnTop 		= ko.observable();
    self.readrNightModeEnabled 	= ko.observable();
    self.readrSerifModeEnabled  = ko.observable();
    self.guideForceShowAgain    = ko.observable();
    self.readButtonPresses	 		= ko.observable();

		self.readTimeTotal 					= ko.observable();

    var initSettings = function(settingsJSON) {
    	if (settingsJSON.showReadButtonOnTop != null) {
	    	self.showReadButtonOnTop(settingsJSON.showReadButtonOnTop);
    	};
    	if (settingsJSON.readButtonPresses != null) {
	    	self.readButtonPresses(settingsJSON.readButtonPresses);
    	};
    	if (settingsJSON.readTimeTotal != null) {
				self.readTimeTotal(settingsJSON.readTimeTotal);
    	};
      if (settingsJSON.readrNightModeEnabled != null) {
        self.readrNightModeEnabled(settingsJSON.readrNightModeEnabled);
      };
      if (settingsJSON.readrSerifModeEnabled != null) {
        self.readrSerifModeEnabled(settingsJSON.readrSerifModeEnabled);
      };
      if (settingsJSON.guideForceShowAgain) {
        self.guideForceShowAgain(settingsJSON.guideForceShowAgain);
      };

    	self.dirtyFlag.reset();
    };

    self.dirtyFlag = new dirtyFlag(self);

    self.load = function() {

			chrome.storage.local.get(null, function(result) {
				initSettings(result);
			})

    };

    self.save = function() {

	    chrome.storage.local.set( JSON.parse(ko.toJSON(self)) , function() {
	    	self.load()
	    });

    };

  }

  var ViewModel = function() {

    var self = this;

    self.settings = new SettingsModel();

    self.autoSettingsSaver = ko.computed(function() {
    	var dirtyFlagWatcher = self.settings.dirtyFlag.isDirty();

    	self.settings.save();
    })

    self.settings.load();

    return self

  };

  var viewModel = new ViewModel();
  ko.applyBindings(viewModel);

})