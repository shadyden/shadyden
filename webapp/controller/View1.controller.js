sap.ui.define([
    'mah/srm/ers/controller/BaseController',
    'sap/ui/model/Filter',  
    'sap/ui/model/FilterOperator'
    ], function(BaseController , Filter , FilterOperator) {
        'use strict';
        return BaseController.extend("mah.srm.ers.controller.View1",
        {
    
    onInit:function() {},

    onNext:function() {

        var oCurrentView = this.getView();
        var oAppCon = oCurrentView.getParent();

        oAppCon.to("idView2")
    },
    onDelete:function() {
    var oList = this.getView().byId("list");
var aSelected = oList.getSelectedItems();
aSelected.forEach(element => {
    oList.removeItem(element);
});

    },
    onItemSelect:function(oEvent){
// Step 1: get the path of the selected item in listcontrol
        var sPath = oEvent.getParameter("listItem").getBindingContextPath();
// Step 2: 

// var oAppCon = this.getView().getParent();
//         var oV2 = oAppCon.getPages()[1];

var oV2 = this.getView().getParent().getParent().getDetailPage("idView2");


oV2.bindElement(sPath);
this.onNext();
},

onSearch: function(oEvent) {
var sVal = oEvent.getParameter("query");
if(!sVal)
{
    sVal=oEvent.getParameter("newValue");
}
//Step 2: get the path of the selected item in listcontrol
var oFilter1 = new Filter("name", FilterOperator.Contains, sVal);
var oFilter2 = new Filter("type", FilterOperator.Contains, sVal);

var aFilter = [oFilter1 ,oFilter2];
var oFilter = new Filter({
    filters : aFilter,
    and: false
});
this.getView().byId("list").getBinding("items").filter(oFilter);
},
        }); 
    });