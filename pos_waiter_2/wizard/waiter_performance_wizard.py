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

from odoo import fields, api, models
from datetime import date
from datetime import timedelta


class ReportWizard(models.TransientModel):

    """In this class we are defining a new model for
    printing the wizard"""

    _name = 'waiter.performance.wizard'

    report_start_date = fields.Date(string='Fecha de Inicial', required=True, default = date.today() - timedelta(days=7))
    report_end_date = fields.Date(string='Fecha Final', required=True, default = fields.Date.today())

    @api.onchange('report_start_date')
    def _onchange_report_start_date(self):
        if self.report_start_date and self.report_end_date and self.report_end_date < self.report_start_date:
            self.report_end_date = self.report_start_date

    @api.onchange('report_end_date')
    def _onchange_report_end_date(self):
        if self.report_end_date and self.report_end_date < self.report_start_date:
            self.report_start_date = self.report_end_date

    def print_performance_report(self):

        """In this function we are passing the wizard values
        to the report file"""

        data = {'start_date': self.report_start_date, 'end_date': self.report_end_date}
        res = self.env.ref('pos_waiter_2.waiter_performance_report').report_action([], data=data)
        return res
