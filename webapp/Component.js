sap.ui.define([
'sap/ui/core/UIComponent'
], function(UIComponent){

    return UIComponent.extend("mah.srm.ers.Component", {

metadata:  {
manifest:"json"
},
init: function(){
    UIComponent.prototype.init.apply(this);

},
createContent: function(){

    var oView = new sap.ui.view("idRootview",{
        viewName:"mah.srm.ers.view.App",
        type:"XML",
    });
    
    var oView1 = new sap.ui.view("idView1",{
        viewName:"mah.srm.ers.view.View1",
        type:"XML",
    });
    
    var oView2 = new sap.ui.view("idView2",{
        viewName:"mah.srm.ers.view.View2",
        type:"XML",
    });

   var oAppCon =  oView.byId("idAppCon");
   
   oAppCon.addMasterPage(oView1).addDetailPage(oView2);

   return oView;
},
destroy: function(){

},

    });
});