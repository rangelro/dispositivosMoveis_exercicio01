
let pessoa = {
    nome: 'rangel',
    idade: 25,
    profissao: 'suporte',
}


function descreverPessoa(pessoa: {nome:string,idade:number,profissao:string}){
    console.log(`Oi, me chamo ${pessoa.nome}, tenho ${pessoa.idade} anos e sou ${pessoa.profissao}.`);

}

console.log(descreverPessoa(pessoa));