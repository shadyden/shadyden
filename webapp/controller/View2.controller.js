sap.ui.define([
    'mah/srm/ers/controller/BaseController'    
    ], function(BaseController) {
        'use strict';
        return BaseController.extend("mah.srm.ers.controller.View2",
        {
    
    onInit:function() {},
onBack:function() {
    this.getView().getParent().to("idView1");
},
            
        }); 
    });