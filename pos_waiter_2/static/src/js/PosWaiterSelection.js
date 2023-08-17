odoo.define('waiter_performance_analysis.PosWaiterSelection', function (require) {
    "use strict";
    const {Gui} = require('point_of_sale.Gui')
    const PosComponent = require('point_of_sale.PosComponent');
    const { posbus } = require('point_of_sale.utils');
    const ProductScreen = require('point_of_sale.ProductScreen');
    const { useListener } = require("@web/core/utils/hooks");
    const Registries = require('point_of_sale.Registries');
    const {_t} = require('web.core');

    var rpc = require('web.rpc');

    class PosWaiterSelection extends PosComponent {
        constructor() {
          super(...arguments);
          useListener('click',this.onClick)
        }
/*
        mounted() {
            this.env.pos.get('orders').on('add remove change', () => this.render(), this);
            this.env.pos.on('change:selectedOrder', () => this.render(), this);
        }
        willUnmount() {
            this.env.pos.get('orders').off('add remove change', null, this);
            this.env.pos.off('change:selectedOrder', null, this);
        }
*/
        get currentOrder() {
            return this.env.pos.get_order();
        }

        get currentWaiterName() {
            const order = this.currentOrder;
            return order && order.employee_waiter_id
                ? order.employee_waiter_id.display_name
                : this.env._t('Mesero');
        }
        

        async onClick(){

            var self = this;
            var model = 'hr.employee';
            var domain = [['is_a_waiter','=',true]];
            var fields = [];

            var employee_list = await this.rpc({
                model: model,
                method: 'search_read',
                args: [domain,fields],                
            })

            const selectionList = employee_list.map(waiters => ({
                id: waiters.id,
                label: waiters.name,
                isSelected: waiters.id === this.currentOrder.employee_waiter_id,
                item: waiters,
            }));

            const { confirmed, payload: selectedWaiter } = await this.showPopup('SelectionPopup', { title: this.env._t('Selecciona el Mesero'),
                                                                                                    list: selectionList,
                                                                                                }
                                                                                        );
            if (confirmed) {

                this.currentOrder.set_Waiter(selectedWaiter);
            }
        }

        is_available(){
            const order = this.env.pos.get_order();
            return order
        }
    }

    PosWaiterSelection.template = 'PosWaiterSelection';
    ProductScreen.addControlButton({
        component: PosWaiterSelection,
        condition: function () {
            return this.env.pos.config.waiter_configuration;
        },
    });
    Registries.Component.add(PosWaiterSelection);
    return PosWaiterSelection;

});