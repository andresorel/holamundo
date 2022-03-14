/*global QUnit*/

sap.ui.define([
	"holamundo/controller/holaMundo_view.controller"
], function (Controller) {
	"use strict";

	QUnit.module("holaMundo_view Controller");

	QUnit.test("I should test the holaMundo_view controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
