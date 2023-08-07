odoo.define('waiter_performance_analysis.models', function (require) {
    "use strict";

const models = require ("point_of_sale.models");
const core = require("web.core");
const _t = core._t;

const OrderSuper = models.Order.prototype;

//models.load_fields("hr_employee", ["id","name"]);

models.Order = models.Order.extend({


    set_Waiter: function (waiter) {
        this.employee_waiter_id = waiter
    },
/*
    init_from_JSON: function (json){
        OrderSuper.init_from_JSON.apply(this, arguments);
    },

    export_as_JSON: function(){
        const res = OrderSuper.export_as_JSON.apply(this. arguments);
        res.employee_waiter_id = this.employee_waiter_id;
        return res;
    },
*/
    });
    return models;

});
