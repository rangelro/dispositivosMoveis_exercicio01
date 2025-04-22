
function stringOrNumber (parametro: string | number){
    
    if (typeof parametro === 'string') {
        console.log(`String: ${parametro}`);
    }else if (typeof parametro === 'number') {
        console.log(`Number: ${parametro}`);
    }else {
        console.log(`Tipo desconhecido: ${parametro}`);
    }
}

console.log(stringOrNumber('Rangel'));
console.log(stringOrNumber(1234));
console.log(stringOrNumber(true));