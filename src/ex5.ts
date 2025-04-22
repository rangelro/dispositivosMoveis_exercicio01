var notas: number[] = [10,20,30,40];

function Media(notas:number[]){
	var soma:number = 0;
	for (var nota of notas){
		var soma=soma+nota;
	}
	var media:number = soma/notas.length;
	return `media: ${media}`;
}

console.log(Media(notas));