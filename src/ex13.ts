
type Produto = {
    nome:string,
    emEstoque:boolean,
}

function filtrarProdutosDisponiveis(produtos: Produto[]){
    let disponiveis: Produto[] = [];

    for (let i = 0; i < produtos.length;i++){
        if (produtos[i].emEstoque){
            disponiveis.push(produtos[i]);
        }
    }
    return disponiveis;
}

let produtos: Produto[] = [
    {nome: "Produto 1", emEstoque: true},
    {nome: "Produto 2", emEstoque: false},
    {nome: "Produto 3", emEstoque: true},
];

console.log(filtrarProdutosDisponiveis(produtos));

