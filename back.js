function Enviar() {
	var a = document.getElementById("nome");

	if(a.value != ""){
		alert('Sr(a) '+ a.value + " seu cadastro foi realizado com sucesso!")
	}else{
		alert("Não foi possível enviar, preencha os dados solicitados!")
	}
}
