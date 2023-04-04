// Ejemplo 1

function suma (num1, num2){
    return num1 + num2;
}

function calc (num1, num2, callback){
    return callback(num1, num2);
}

console.log(calc(2, 2, suma));

// Ejemplo 2

setTimeout(function() {
    console.log('Hola Jonny');
},4000)


// Ejemplo 3

function gretting(name){
    console.log(`Hola ${name}`)
}

setTimeout(gretting, 3000, 'Jonny');

// ejemplo 4

function execCallback(callback) {
    window.setTimeout(() => {
        callback();
        }, 2000);
}

