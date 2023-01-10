var a = "fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!";
const caracteresA_descifrar = ["a","e","i","o","u"];
//const caracteresA_cifrar = [/a/g,/e/g,/i/g,/o/g,/u/g]
const llaveA_cifrar = ["ai","enter","imes","ober","ufat"]
const llaveA_descifrar = [/ai/g,/enter/g,/imes/g,/ober/g,/ufat/g];

function cifrar(mensaje,letras,letrasEncriptadas){
	var mensajeCifrado = "";
	for(carater of mensaje){
		switch (carater){
			case letras[0]:
			mensajeCifrado += letrasEncriptadas[0];
			break;
			case letras[1]:
			mensajeCifrado += letrasEncriptadas[1];
			break;
			case letras[2]:
			mensajeCifrado += letrasEncriptadas[2];
			break;
			case letras[3]:
			mensajeCifrado += letrasEncriptadas[3];
			break;
			case letras[4]:
			mensajeCifrado += letrasEncriptadas[4];
			break;
			default:
			mensajeCifrado += carater;
		}
	}
	return mensajeCifrado;
}

function descifrar(mensaje,letrasEncriptadas,letras){
	var resultado;
	var mensajeDescifrado= mensaje;
	for (var i = 0; i < letras.length; i++) {
		resultado = mensajeDescifrado.replace(letrasEncriptadas[i],letras[i]);
		mensajeDescifrado=resultado;
	}
	return mensajeDescifrado;
}

console.log("Mensaje:");
console.log(a);
console.log("Mensaje cifrado:");
var descifrado = cifrar(a,caracteresA_descifrar,llaveA_cifrar);
console.log(descifrado);
console.log("Mensaje descifrado:");
console.log(descifrar(descifrado,llaveA_descifrar,caracteresA_descifrar));
