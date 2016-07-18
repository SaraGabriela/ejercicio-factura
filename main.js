function datosCliente(){
	$('#vistaCliente').hide();
	$('#vistaAdministra').show();
}
function regresaClient(){
	$('#vistaCliente').show();
	$('#vistaAdministra').hide();	
}
function datosProductos(){
	$('#vistaAdministra').hide();
	$('#factura').show();		
}