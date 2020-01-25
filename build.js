//build.js: Configuration file for optimizing the application. 
/*
*/ 
({
    paths: {
        "jquery": "empty:",
        "backbone": "lib/backbone.min",
        "Snip": "lib/snip.min",
        "log": "lib/log.min",
        "fs": "empty:",
        "file": "lib/file.min",
        "underscore": "lib/underscore.min",
        "rsvp": "lib/rsvp.min",
        "promise": "lib/promise.min",
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
    exclude: [ "fs", "jquery" ],
    name: "code",
    out: "code.min.js"
})
