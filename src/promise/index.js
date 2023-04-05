
const promise = new Promise(function(resolve, reject){
    resolve('Hey !');
});

const cows = 15;

const countCows = new Promise(function(resolve, reject){
    if(cows > 10){
        resolve(`We Have ${cows} cows on the farm`);   
    } else {
        reject("There is no cows on the farm");
    }
});

countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log('Finally'));

// Ejemplo Platzi                                   // Envía mensaje despues de sierto tiempo enviado como argumento time.

export function delay(time, message) {
    return new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve(message);
        }, time);
    });
}

