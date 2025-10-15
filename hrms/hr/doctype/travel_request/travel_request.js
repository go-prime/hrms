// Copyright (c) 2018, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on("Travel Request", {
	refresh: function (frm) {
		if (!frm.is_new()) {
			frm.add_custom_button(__('Payment entry'), function() {
				frappe.route_options = { party_type: "Employee", party: frm.doc.employee};
				frappe.new_doc('Payment Entry');
			}, __("Create"));
	
			frm.add_custom_button(__('Expense Claim'), function() {
				frappe.route_options = { employee: frm.doc.employee};
				frappe.new_doc('Expense Claim');
			}, __("Create"));
		}
	},
});
