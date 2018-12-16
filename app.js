

$("#convertir_peso").on('click', function() {
	var valor_peso = $("#ing_pesos").val();	
	//console.log(valor_peso);

	if( valor_peso == "") {
		$("#conv_dolar").text("");
		$("#conv_euro").text("");
		return false;
	}

	var valor_dolar = removeFormat($("#dolar").text());	
	var valor_euro = removeFormat($("#euro").text());	
	//console.log(valor_dolar, valor_euro);

	var conver_dolar = valor_peso / valor_dolar;
	var conver_euro = valor_peso / valor_euro;	

	//console.log(conver_dolar.toFixed(2), conver_euro.toFixed(2));

	$("#conv_dolar").text(format(conver_dolar.toFixed(2)));
	$("#conv_euro").text(format(conver_euro.toFixed(2)));


});

$("#convertir_dolar").on('click', function() {
	var valor_dolar = $("#ing_dolar").val();	
	//console.log(valor_dolar);

	if( valor_dolar == "") {
		$("#conv_peso").text("");
		return false;
	}

	var valor_peso = removeFormat($("#dolar").text());	
	//console.log(valor_peso);

	var conver_peso = valor_peso * valor_dolar;

	//console.log(conver_peso.toFixed(2));

	$("#conv_peso").text(format(conver_peso.toFixed(2)));


});

function format(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return parts.join(",");
}
function removeFormat(x){
	var parts = x.toString().split(",");
	parts[0] = parts[0].replace(".", "");
	return parts.join(".");
}

$.ajax({
	url: 'http://www.mindicador.cl/api',
	DataType:"jsonp",
	method: 'GET'

}).done(function(data){
	$("#dolar").text(format(data.dolar.valor));
	$("#euro").text(format(data.euro.valor));
	$("#uf").text(format(data.uf.valor));
	$("#utm").text(format(data.utm.valor));
	//console.log(data);
});

