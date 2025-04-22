let nome : string = "rangel";

function saudacao(nome:string){
    var mensagem = "Olá, ".concat(nome);
    return mensagem;   
}

console.log(saudacao(nome));