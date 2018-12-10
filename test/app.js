
var url:'http://www.mindicador.cl/api' + valor
var indicador: valor

$(#submit).on('change', function() {
	$.ajax ({
		url
	})
})





$.ajax({
	url: 'http://www.mindicador.cl/api' + valor,
	DataType:"jsonp",
	method: 'GET'

}).done(function(data){
console.log(data);
});

