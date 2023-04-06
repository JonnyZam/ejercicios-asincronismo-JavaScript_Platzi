function* gen(){
    yield 1;
    yield 2;
    yield 3;
} 

const g = gen();
    console.log(g.next().value);
    console.log(g.next().value);
    console.log(g.next().value);

// Otro ejemplo de Función generator pero con array


function* iterate(array){
    for (let value of array){
        yield value;
    }
}

const it = iterate(['Jonny','Carlos','Daniel','Lloana']);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);














