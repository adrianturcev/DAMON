(function () {
    window.DamonUtils = class UtilsDummy {
        constructor() {
            // Using damon-lite
            // Use full version for utils
        }
        get escape() {
            this.error();
        }

        get mapToHtmlList() {
            this.error();
        }

        get mapToHtmlTable() {
            this.error();
        }

        get mapTreeLeavesToHtmlTable() {
            this.error();
        }

        get htmlToJSON() {
            this.error();
        }

        get mapsDiff() {
            this.error();
        }

        error() {
            throw new Error("Using damon-lite, Utils available in full build");
        }
    }
    window.Damon = require('./Damon.js');
    tests = require('./tests.js');
})();