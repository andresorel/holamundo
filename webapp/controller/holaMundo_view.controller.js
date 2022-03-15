sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox) {
        "use strict";

        return Controller.extend("holamundo.controller.holaMundo_view", {
            onInit: function () {
                MessageBox.confirm("Ejemplo testing");
            }
        });
    });
