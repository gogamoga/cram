/** MIT License (c) copyright B Cavalier & J Hann */

/**
 * lightweight has() implementation for cram
 */
var java, readFile, JSON; // stop the syntax checker / linter from complaining
var environment; // TODO: move to a java-specific file
define(function () {
	"use strict";

	var features;

	features = {};

	// preload some feature tests
	features.require = typeof require == 'function';
	features.readFile = typeof readFile == 'function';
	features.json = typeof JSON != 'undefined';
	features.java = typeof java != 'undefined';
	// features.java = ({}).toString.call(global.java) == '[object JavaPackage]';
	features.fs = hasModule('fs');
	features.path = hasModule('path');

	function has (feature) {
		return features[feature];
	}

	// Note: this is not exactly the same as has.js's add() method
	has.add = function (name, value) {
		features[name] = value;
	};

	return has;

	/* helpers */

	function hasModule (id) {
		// relies on sync require()
		return typeof require == 'function' && require(id);
	}

});