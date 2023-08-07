odoo.define('waiter_performance_analysis.WaiterScreen', function (require) {
    "use strict";
    const PosComponent = require('point_of_sale.PosComponent');
    const ProductScreen = require('point_of_sale.ProductScreen');
    const { useListener } = require("@web/core/utils/hooks");
    const Registries = require('point_of_sale.Registries');
    var rpc = require('web.rpc');
    var core = require('web.core');
    var Qweb = core.qweb;
    const {onMounted, onWillUnmount, useState} = owl;

    class WaiterScreen extends PosComponent {
        setup() {
          super.setup();
        }
        back() {
            this.showScreen('ProductScreen');
        }
        
    };

    WaiterScreen.template = 'WaiterScreen';
    
    Registries.Component.add(WaiterScreen);
    return WaiterScreen;

});