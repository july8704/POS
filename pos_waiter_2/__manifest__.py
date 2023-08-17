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
{
    'name': 'Analisis del desempeño de los meseros del POS',
    'summary': """Permite seleccionar meseros en el POS y 
                    generar reporte sobre su desempeño""",
    'version': '15.0.1.0.0',
    'description': """Este modulo fue creado como parte de mi preparación como
                    desarrollador Odoo. Me basé en el módulo de Cybrosys Waiter Perfomance para 
                    Odoo 12.0.0.1. Lo que hice fue actualizar este para que sea funcional en la 
                    versión 15.0 de Odoo. 
                    Fue una experiencia enriquecedora porque logré comprender la interación entre el
                    Backend y el Frontend, entre otras cosas.""",
    'author': 'MSc. Julio Cesar Correa Archibold',
    'company': 'Data0808',
    'website': 'https://data0808.com/',
    'category': 'Point of Sale',
    'depends': ['base', 'point_of_sale', 'hr'],
    'license': 'AGPL-3',
    'data': [
        #'views/pos_employee_template.xml',
        'security/ir.model.access.csv',
        'views/hr_employee_view_inherited.xml',
        'views/pos_order_waiter_inherited.xml',
        'views/pos_config_inherited_view.xml',
        'report/waiters_report.xml',
        'wizard/waiter_performance_wizard_view.xml',
        'report/waiter_performance_report.xml',
        'report/waiter_performance_report_template.xml',
    ],
    'qweb': [],
    'images': ['static/description/banner.png'],
    'installable': True,
    'auto_install': False,
    'application': True,
    'assets': {
        'web.assets_backend': ['pos_waiter_2/static/src/js/**/*'],
        'web.assets_qweb': ['pos_waiter_2/static/src/xml/pos_waiter_selection.xml',
                            'pos_waiter_2/static/src/xml/WaiterScreen.xml',
                            'pos_waiter_2/static/src/xml/pos_screen.xml',
                            'pos_waiter_2/static/src/xml/pos_order_receipt.xml',
                            ],
    },

}
