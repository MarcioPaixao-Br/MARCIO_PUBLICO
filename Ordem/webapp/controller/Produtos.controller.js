sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
	"use strict";
	return Controller.extend("br.com.ordem.Ordem.controller.Produtos", {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf br.com.ordem.Ordem.view.Produtos
		 */
		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("Produtos").attachMatched(this._onRoute, this);
		},
		//F I M
		_onRoute: function (evt) {
			var oArgs = evt.getParameter("arguments");
			var oView = this.getView();
			var oTable = oView.byId("table0");
			var oFilters = null;
			var filters = [];
			oFilters = [new sap.ui.model.Filter("OrderID", "EQ", oArgs.idOrder)];
			filters.push(oFilters);
			var binding = oTable.getBinding("items");
			binding.filter(oFilters);
		},
		//F I M
		OnProdInfo: function (event) {
			var item = event.getParameters("selectedItem");
			//var key = (item) ? item.getKey() : null;
		}
	});
});