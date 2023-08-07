odoo.define('waiter_performance_analysis.EmployeePos', function (require) {
    "use strict";
    const {Gui} = require('point_of_sale.Gui')
    const PosComponent = require('point_of_sale.PosComponent');
    const { posbus } = require('point_of_sale.utils');
    const ProductScreen = require('point_of_sale.ProductScreen');
    const { useListener } = require("@web/core/utils/hooks");
    const Registries = require('point_of_sale.Registries');
    const {_t} = require('web.core');

    class EmployeePos extends PosComponent {
        constructor() {
          super(...arguments);
          useListener('click',this.onClick)
        }
        async onClick(){
            var self = this;
            await this.rpc({
                model: 'hr.employee',
                method: 'search_read',
                args: [[],['name','work_phone','work_email']],                
            }).then(function (result) {
                self.showScreen('PaymentScreen',{
                    waiters: result,
                });
            });

            
        }

        is_available(){
            const order = this.env.pos.get_order();
            return order
        }
    }

    EmployeePos.template = 'EmployeePos';
    ProductScreen.addControlButton({
        component: EmployeePos,
        condition: function () {
            return this.env.pos.config.waiter_configuration;
        },
    });
    Registries.Component.add(EmployeePos);
    return EmployeePos;

});