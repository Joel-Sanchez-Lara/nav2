/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"com/nav2/nav2/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/nav2/nav2/test/integration/pages/View1",
	"com/nav2/nav2/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.nav2.nav2.view.",
		autoWait: true
	});
});