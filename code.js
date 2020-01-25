//code.js: Functional Logic.

define([
  "addDependency",
  "create",
  "Snip"
], function(
  addDependency,
  create,
  Snip
) {
  
  return function( Input ) {
    return {
      "addDependency": addDependency,
      "create": create,
      "Snip": new Snip({
        "Dir": Input + "/Snippets/",
        "Snippets": {
          "testsuite":"testsuite.txt",
          "function":"function.txt",
          "test":"test.txt"
        }
      })
    };
  };
});
