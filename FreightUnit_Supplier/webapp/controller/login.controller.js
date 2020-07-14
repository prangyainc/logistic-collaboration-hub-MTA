sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent"
], function (Controller, UIComponent) {
	"use strict";

	return Controller.extend("inc.FUS.FreightUnit_Supplier.controller.login", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf inc.FUS.FreightUnit_Supplier.view.login
		 */
		onInit: function () {
    //          	var oRouter = this.getRouter();
				// oRouter.getRoute("View1").attachMatched(this._onRouteMatched, this);
		},
		onPressLogIn: function(){
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("View1");
        },
			getRouter: function () {
				return UIComponent.getRouterFor(this);
			}
			

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf inc.FUS.FreightUnit_Supplier.view.login
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf inc.FUS.FreightUnit_Supplier.view.login
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf inc.FUS.FreightUnit_Supplier.view.login
		 */
		//	onExit: function() {
		//
		//	}

	});

});