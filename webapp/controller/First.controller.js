sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/Dialog",
    "sap/m/List",
    "sap/m/StandardListItem",
    "sap/m/Text"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,
	JSONModel,
	Dialog,
	List,
	StandardListItem,
	Text) {
        "use strict";

        return Controller.extend("in.sijas.magicwithjsonmodel.controller.First", {
            onInit: function () {
                var oData = [],
                oModel = new JSONModel(oData);

                this.getView().setModel(oModel);
            },
            addMoreRecord : function(){
                var oModel = this.getView().getModel(),
                    oData = oModel.getData();

                var tempData = {
                    title : "New Record",
                    text : ''
                };

                oData.push(tempData);
                oModel.setData(oData);
            },
            summarizeData : function(){
                if(!this.oDialog){
                    this.oDialog = new Dialog({
                        content: {path:'/',template:
                            new List({
                                items : [
                                    new StandardListItem({title:'{text}'})
                                ]
                            })
                        }
                    });
                }
                this.getView().addDependent(this.oDialog);
                this.oDialog.open();
            }
        });
    });
