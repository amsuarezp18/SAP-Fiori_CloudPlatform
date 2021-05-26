/*global QUnit*/

sap.ui.define([
	"namespace1/global_gymnastics/controller/Page3.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Page3 Controller");

	QUnit.test("I should test the Page3 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
