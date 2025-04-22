interface Aluno {
    nome:string;
    matricula:number;
    ativo:boolean;
}

const aluno: Aluno ={
    nome:'Rangel',
    matricula:20231094040034,
    ativo:true
};

console.log(`Nome: ${aluno.nome},\n Matrícula: ${aluno.matricula},\n Ativo: ${aluno.ativo}`)