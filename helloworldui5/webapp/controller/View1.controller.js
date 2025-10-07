sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/Dialog",
    "sap/m/Image",
    "sap/m/Button"
], function (Controller, Dialog, Image, Button) {
    "use strict";

    return Controller.extend("sap.btp.helloworldui5.controller.View1", {
        onInit: function () {
        },
        onPress: function () {
            var oDialog = new Dialog({
                title: "Bear",
                content: new Image({
                    src: "img/IMG_20251007_145129_103.jpg",
                    width: "200px"
                }),
                beginButton: new Button({
                    text: "OK",
                    press: function () {
                        oDialog.close();
                    }
                }),
                afterClose: function () {
                    oDialog.destroy();
                }
            });

            oDialog.open();
        }
    });
});
