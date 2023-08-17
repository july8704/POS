odoo.define('custom_pos.user_interface', function (require) {
	"User strict";
	console.log("Custom JavaScript In POS by MSc. Julio Cesar Correa")
	const models = require('point_of_sale.models');
	models.load_fields("product.product", ['qty_available']);
	
});