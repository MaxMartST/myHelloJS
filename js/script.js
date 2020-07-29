'use strict';

//интерполяция - возможность внутри строки 
//вставлять занчения переменной
//const category = 'toys';

//если придётся добавить 20 таких category, то
//строка станет громадной
//console.log('https://someurl.com/' + category);

//чтобы использовать интерполяцию, установим знак: `${}`
//console.log(`https://someurl.com/${category}/5`);

// const user = "Ivan";
// alert(`Привет, ${user}`);

const answers = [];
answers[0] = prompt("Как ваше имя?", "");
answers[1] = prompt("Как ваша фамилия?", "");
answers[2] = +prompt("Ваш возрост?", "");

alert(`Привет, ${answers[0]}! Твоя фамилия: ${answers[1]}. Тебе ${answers[2]} лет!`);