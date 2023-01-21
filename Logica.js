var a = "fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!";
const caracteresA_descifrar = ["a","e","i","o","u"];
//const caracteresA_cifrar = [/a/g,/e/g,/i/g,/o/g,/u/g]
const llaveA_cifrar = ["ai","enter","imes","ober","ufat"]
const llaveA_descifrar = [/ai/g,/enter/g,/imes/g,/ober/g,/ufat/g];
const areatextoIngreso = document.getElementById('texto');
const areatextoSalida = document.getElementById('textofinal');
//areatextoSalida.value= "Ningún mensaje fue encontrado";

function cifrar(){
	var mensaje = areatextoIngreso.value;
	var mensajeCifrado = "";
	for(carater of mensaje){
		switch (carater){
			case caracteresA_descifrar[0]:
			mensajeCifrado += llaveA_cifrar[0];
			break;
			case caracteresA_descifrar[1]:
			mensajeCifrado += llaveA_cifrar[1];
			break;
			case caracteresA_descifrar[2]:
			mensajeCifrado += llaveA_cifrar[2];
			break;
			case caracteresA_descifrar[3]:
			mensajeCifrado += llaveA_cifrar[3];
			break;
			case caracteresA_descifrar[4]:
			mensajeCifrado += llaveA_cifrar[4];
			break;
			default:
			mensajeCifrado += carater;
		}
	}
	console.log(areatextoSalida.style);
	console.log(areatextoSalida.style.setProperty("background-image",null));
	//console.log(areatextoSalida.style["background-image"]);
	areatextoSalida.value = mensajeCifrado;
	document.getElementById('botoncopiar').style.visibility = 'visible';
}

function descifrar(letras){
	var resultado;
	var mensajeDescifrado= areatextoIngreso.value;
	for (var i = 0; i < caracteresA_descifrar.length; i++) {
		resultado = mensajeDescifrado.replaceAll(llaveA_cifrar[i],caracteresA_descifrar[i]);
		mensajeDescifrado=resultado;
	}
	areatextoSalida.value = mensajeDescifrado;
}

areatextoIngreso.addEventListener("input",function(){
	var valor = "";
	for (var i = 0; i < this.value.length; i++) {
		const c = this.value[i];
		if(c !== c.toLowerCase() || c === "á" || c === "é" || c === "í" || c === "ó" || c === "ú"){
			alert("No se permiten tíldes o mayúsculas.")
		}else{
			valor+=c;
		}
	}
	this.value = valor;
});

function copiar(){
	var copialabel = document.getElementById("textofinal");
	copialabel.focus();
	copialabel.select();
	try{
		var successful = document.execCommand('copy');
    	var msg = successful ? 'successful' : 'unsuccessful';
    	console.log('Copying text command was ' + msg);
	}catch(err){
		console.log("Algo salió mal")
	}
	console.log("Estoy copiando");
}

/*
function validarTextoIngresado(){
	var ta = document.getElementById('texto');
	//console.log(ta.value);
	ta.addEventListener(
	    'keypress',
	    function (e) {
	        // Test for the key codes you want to filter out.
	        if (e.keyCode == 60) {
	            console.log('No "<"!');
	            // Prevent the default event action (adding the
	            // character to the textarea).
	            e.preventDefault();
	        }
	    }
	);
}
console.log("Mensaje:");
console.log(a);
console.log("Mensaje cifrado:");
var descifrado = cifrar(a,caracteresA_descifrar,llaveA_cifrar);
console.log(descifrado);
console.log("Mensaje descifrado:");
var descifrado2 = descifrar(descifrado,llaveA_descifrar,caracteresA_descifrar);
console.log(descifrar(descifrado2,llaveA_descifrar,caracteresA_descifrar))
*/