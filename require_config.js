//require_config.js: Requirejs configuration.

module.exports = {
        nodeRequire: require,
        baseUrl: "code",
        paths: {
		"rsvp": "../lib/rsvp.min",
		"backbone": "../lib/backbone.min",
		"underscore": "../lib/underscore.min",
		"addDependency": "Functions/addDependency/addDependency",
		"create": "Functions/create/create",
		"bCheckFile": "Functions/create/lib/bCheckFile",
		"Module": "Functions/addDependency/Models/Module/Module",
		"parse": "Functions/addDependency/Models/Module/Functions/parse/parse",
		"validate": "Functions/addDependency/Models/Module/lib/validate.min",
		"parseValidation": "Functions/addDependency/Models/Module/Functions/parse/parseValidation",
		"compose": "Functions/addDependency/Models/Module/Functions/compose/compose",
		"composeValidation": "Functions/addDependency/Models/Module/Functions/compose/composeValidation",
		"mergeExports": "Functions/addDependency/Functions/mergeExports",
		"addDependencyValidation": "Functions/addDependency/addDependencyValidation",
		"bDependencyExists": "Functions/addDependency/Functions/bDependencyExists",
		"bExportExists": "Functions/addDependency/Functions/bExportExists",
		"mergeDependencies": "Functions/addDependency/Functions/mergeDependencies"
	},
        bundles: {
		"../lib/log.min": [ "log" ],
		"../lib/snip.min": [ "Snip" ],
		"../lib/file.min": [ "file" ],
                "../lib/promise.min": [ "promise" ],
		"../lib/testsuite.min": [ "TestSuite" ]
	},
	suppress: {
		nodeShim: true
	},
	shim: {
		"underscore": {
			deps: [
				"jquery"
			],
			exports: "_"
		},
		"backbone": {
			deps: [
				"underscore"
			],
			exports: "Backbone"
		},
		"file": {
			deps: [
				"fs",
				"rsvp"
			],
			exports: "file"
		},
		"Snip": {
			deps: [
				"file",
				"backbone"
			],
			exports: "Snip"
		},
		"promise": {
                        deps: [
                                "rsvp"
                        ],
                        exports: "promise"
                },
		"TestSuite": {
			deps: [
				"backbone",
				"rsvp"
			],
			exports: "TestSuite"
		}
	}
};
