# -*- coding: utf-8 -*-
#############################################################################
#
#    Cybrosys Technologies Pvt. Ltd.
#
#    Copyright (C) 2019-TODAY Cybrosys Technologies(<https://www.cybrosys.com>).
#    Author: Sayooj A O(<https://www.cybrosys.com>)
#
#    You can modify it under the terms of the GNU AFFERO
#    GENERAL PUBLIC LICENSE (AGPL v3), Version 3.
#
#    This program is distributed in the hope that it will be useful,
#    but WITHOUT ANY WARRANTY; without even the implied warranty of
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#    GNU AFFERO GENERAL PUBLIC LICENSE (AGPL v3) for more details.
#
#    You should have received a copy of the GNU AFFERO GENERAL PUBLIC LICENSE
#    (AGPL v3) along with this program.
#    If not, see <http://www.gnu.org/licenses/>.
#
#############################################################################

from functools import partial

from odoo import models, api, fields


class OrderNotes(models.Model):
    """In this class pos.order is inherited for adding the waiter
    reference in the order and function for fetching the waiter
    from pos to backend order"""

    _inherit = 'pos.order'

    employee_waiter_id = fields.Many2one('hr.employee', string='Mesero')
    
    @api.model
    def _order_fields(self, ui_order):
        result = super(OrderNotes, self)._order_fields(ui_order)

        result['employee_waiter_id'] = ui_order[
            'employee_waiter_id']['id'] if "employee_waiter_id" in ui_order else False

        
        return result
