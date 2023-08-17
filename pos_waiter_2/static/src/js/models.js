odoo.define('waiter_performance_analysis.models', function (require) {
    "use strict";
const PosDB =require('point_of_sale.DB');
const exports = require ("point_of_sale.models");
const core = require("web.core");
const _t = core._t;

const OrderSuper = exports.Order;
const models = exports.PosModel.prototype.models;


exports.load_fields("hr.employee'", 
                ["id",
                "name",
                "work_phone",
                "work_email",
]);

exports.load_fields('pos.order', [
        'employee_waiter_id',
    ]);

exports.Order = exports.Order.extend({
    initialize: function(attributes, options){
        OrderSuper.prototype.initialize.call(this, attributes, options);
    },    

    init_from_JSON: function (json){
        OrderSuper.prototype.init_from_JSON.call(this, json);
    },

    export_as_JSON: function(){
        const json = OrderSuper.prototype.export_as_JSON.call(this);

        if (this.employee_waiter_id) {
            json.employee_waiter_id = this.employee_waiter_id;
        }
        return json;
    },

    export_for_printing: function() {
            var receipt = OrderSuper.prototype.export_for_printing.call(this);
            if (this.employee_waiter_id){
                receipt.employee_waiter_id = this.employee_waiter_id;
            }
            return receipt;
    },

    set_Waiter: function (waiter) {
        this.employee_waiter_id = waiter
    },


    });
    return models;

});
