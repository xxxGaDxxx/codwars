///////////////////////////////////////////////////////////////////////////////// 1 //////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Очень просто, по заданному целому числу или числу с плавающей запятой найти его противоположность.
//    Примеры:
// 1: -1
// 14: -14
// -34: 34

/*function opposite(number) {
    return -number
}

console.log(opposite(2))
console.log(opposite(-3))*/

///////////////////////////////////////////////////////////////////////////////// 2 //////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Волки были вновь завезены в Великобританию. Вы овцевод, и теперь вас преследуют волки, которые притворяются овцами. К счастью, вы умеете их замечать.
//
//     Предупредите овцу перед волком, что ее вот-вот съедят. Помните, что вы стоите в начале очереди, которая находится в конце массива:
//
//     [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//        7      6      5      4      3            2      1
// Если волк — самое близкое вам животное, вернитесь "Pls go away and stop eating my sheep". В противном случае верните, "Oi! Sheep number N! You are about to be eaten by a wolf!"где Nнаходится овца в очереди.
//
//     Примечание: в массиве всегда будет ровно один волк.
//
//     Примеры
// Вход: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Выход:"Oi! Sheep number 1! You are about to be eaten by a wolf!"
//
// Вход: ["sheep", "sheep", "wolf"]
// Выход:"Pls go away and stop eating my sheep"


/*function warnTheSheep(queue) {
    let wolf = (queue.indexOf("wolf")) + 1
    if (wolf === queue.length) {
        return 'Pls go away and stop eating my sheep'
    } else {
        let N = queue.length - wolf
        return `Oi! Sheep number ${N}! You are about to be eaten by a wolf!`
    }
}*/
/*function warnTheSheep(queue) {
    const position = queue.reverse().indexOf('wolf'); // перевернули массив и узнали его позицию и тернарником ....
    return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
}

console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep", "wolf"]))
console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "wolf", "sheep"]))
console.log(warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]))
console.log(warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]))*/

///////////////////////////////////////////////////////////////////////////////// 3 //////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Программное обеспечение для распознавания символов широко используется для оцифровки печатных текстов. Таким образом, тексты можно редактировать, искать и сохранять на компьютере.
//
//     Когда документы (особенно довольно старые, написанные на пишущей машинке) оцифровываются, программы распознавания символов часто допускают ошибки.
//
//     Ваша задача - исправить ошибки в оцифрованном тексте. Вам нужно только исправить следующие ошибки:
//
//     S неверно истолковывается как 5
//     O неверно истолковывается как 0
//     I неверно истолковывается как 1
// Тестовые случаи содержат числа только по ошибке.


/*function correct(str) {
    return  str.split('').map(t=>t === '0'? 'O':t).map(t=>t === '1' ? 'I':t).map(t=>t === '5'? 'S':t).join('');


}
function correct(string) {
    return string.replace(/0/g, "O")
        .replace(/5/g, "S")
        .replace(/1/g, "I");
}

console.log(correct("51NGAP0RE"))*/

///////////////////////////////////////////////////////////////////////////////// 4 //////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Failed Filter - Bug Fixing #3
// Oh no, Timmy's filter doesn't seem to be working? Your task is to fix the FilterNumber function to remove all the numbers from the string.
//"aa1bb2cc3dd" >>> 'aabbccdd',


/*var FilterNumbers = function(str) {
    return str.split('').filter(c => !parseInt(c)).join('');
}*/

///////////////////////////////////////////////////////////////////////////////// 5 //////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// The code provided is supposed replace all the dots . in the specified String str with dashes -
//
// But it's not working properly.

/*var replaceDots = function(str) {
    return str.replace(/[\.\/]/g, '-');
}*/

///////////////////////////////////////////////////////////////////////////////// 6 //////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Это ката об умножении заданного числа на восемь, если оно четное, и на девять в противном случае.

/*function simpleMultiplication(number) {
    return number % 2 === 0 ? number * 8 : number * 9
}*/

///////////////////////////////////////////////////////////////////////////////// 7 //////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// отрефакторить код
/*function howManyDalmatians(numer){

    var dogs =["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];

     var respond = numer <= 10 ? dogs[0]: numer <= 50 ? dogs[1] : numer === 101 ? dogs[3] : dogs[2]
    return respond
}*/


///////////////////////////////////////////////////////////////////////////////// 8 //////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Напишите алгоритм, который берет массив и перемещает все нули в конец, сохраняя порядок остальных элементов.
//
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

/*function moveZeros(arr) {
    let nam =[]
    let num =[]
        arr.filter(arr => arr === 0 ? num.push(arr): nam.push(arr))
    return nam.concat(num)

    console.log(num)
    console.log(nam)
}
console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))
let moveZeros = function (arr) {
    return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}*/


///////////////////////////////////////////////////////////////////////////////// 9 //////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// В этом ката вы создадите функцию, которая принимает список и возвращает список в обратном порядке.
//
// Примеры (ввод -> вывод)
// * [1, 2, 3, 4]  -> [4, 3, 2, 1]
// * [9, 2, 0, 7]  -> [7, 0, 2, 9]


/*
function reverseList(list) {
 return list.reverse()
}
console.log(reverseList([7,8,9,4,5,0,]))
*/

///////////////////////////////////////////////////////////////////////////////// 10 //////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

    The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

setAlarm(true, true) -> false
setAlarm(false, true) -> false
setAlarm(false, false) -> false
setAlarm(true, false) -> true
*/


/*function setAlarm(employed, vacation){
    if(employed & vacation === false){
        return true
    }
    return false
}

return employed && !vacation ? true : false;

console.log(setAlarm(true, true))
console.log(setAlarm(false, true))
console.log(setAlarm(false, false))
console.log(setAlarm(true, false) )*/

///////////////////////////////////////////////////////////////////////////////// 11 //////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.


/*String.prototype.digit = function() {
    if (this.length!=1) return false;
    if (this[0]>='0'&&this[0]<='9')
        return true;
    else
        return false;
};*/

///////////////////////////////////////////////////////////////////////////////// 12 //////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Также arr1 и arr2 могут иметь одинаковые целые числа. Удалить дубликаты в возвращаемом результате.
//
// Примеры (ввод -> вывод)
// * [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//
// * [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//
// * [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]


/*function mergeArrays(arr1, arr2) {

    let arr3 = arr1.concat(arr2)
     arr3.sort((a, b)=> {
        return a - b;
    });
    return [...new Set(arr3)]

    // return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b)))); сокращённая
}

console.log(mergeArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]))
console.log(mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]))
console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]))*/


///////////////////////////////////////////////////////////////////////////////// 12 //////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Создайте метод , sayHello// принимающий в качестве входных данных имя, город и штат, чтобы приветствовать человека. Обратите внимание, что это будет массив, состоящий из одного или нескольких значений, которые должны быть соединены вместе с одним пробелом между каждым, и длина массива в тестовых примерах будет варьироваться.say_helloSayHellonamename
//
// Пример:
//
//     sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
// Этот пример вернет строку Hello, John Smith! Welcome to Phoenix, Arizona!


// function sayHello( name, city, state ) {
//     return `Hello, ${name.reduce((acc, item) => acc + (' '+item))}! Welcome to ${city}, ${state}!`
//
//     //return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
// }
//
// console.log(sayHello(['John'], 'Phoenix', 'Arizona'))
// console.log(sayHello(['Franklin','Delano','Roosevelt'], 'Chicago', 'Illinois'))
// console.log(sayHello(['Wallace','Russel','Osbourne'],'Albany','New York'))


///////////////////////////////////////////////////////////////////////////////// 13 //////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// пузырьковый метод

// function bubbleSortConcept1(arr) {
//     for (let i = arr.length - 1; i > 0; i--) {
//         for (let j = 0; j < i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr
// }
//
//
// let mas = [10, 9, 8, 100, 5, 87, 101, 152, 1, 0, 15, 789, 2, 3]
//
// console.log(bubbleSortConcept1(mas))


///////////////////////////////////////////////////////////////////////////////// 14 //////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Рассмотрим массив/список овец, где некоторые овцы могут отсутствовать на своем месте. Нам нужна функция, которая подсчитывает количество овец, присутствующих в массиве (true означает наличие).
//
// Например,
//
//     [true,  true,  true,  false,
//         true,  true,  true,  true ,
//         true,  false, true,  false,
//         true,  false, false, true ,
//         true,  true,  true,  true ,
//         false, false, true,  true]
// Правильный ответ будет 17.
//
// Подсказка: не забудьте проверить наличие неправильных значений, таких как null/undefined


// function countSheeps(arrayOfSheep) {
//   let arr= arrayOfSheep.filter(t=> t )
//     return arr.length
// }
//
// let a =[true,  true,  true,  false,
//         true,  true,  true,  true ,
//         true,  false, true,  false,
//         true,  false, false, true ,
//         true,  true,  true,  true ,
//         false, false, true,  true]
//
// console.log(countSheeps(a))


///////////////////////////////////////////////////////////////////////////////// 15 //////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Напишите функцию, которая принимает массив чисел и возвращает сумму чисел. Числа могут быть отрицательными или нецелыми. Если массив не содержит чисел, вы должны вернуть 0.
//
// Примеры
// Вход: [1, 5.2, 4, 0, -1]
// Выход:9.2
//
// Вход: []
// Выход:0
//
// Вход: [-2.398]
// Выход:-2.398

// function sum (numbers) {
//     return numbers.length === 0 ? 0 : numbers.reduce((acc,num)=>acc +num)
//     /*if (numbers.length === 0) return 0
//     let num = 0
//     for (let i = 0; i < numbers.length; i++) {
//         num = num + numbers[i]
//     }
//     return num*/
// };
// console.log(sum([]))
// console.log(sum([1, 5.2, 4, 0, -1]))


///////////////////////////////////////////////////////////////////////////////// 16 //////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Ваш коллега должен был написать простую вспомогательную функцию, чтобы написать строку (содержащую одно слово) с заглавной буквы перед тем, как уйти в отпуск.
//
//     К сожалению, они ушли, и код, который они вам дали, не работает. Исправить вспомогательную функцию, которую они написали, чтобы она работала как задумано (т.е. сделать первый символ в строке "слово" в верхнем регистре).
//
// Не беспокойтесь о числах, специальных символах или нестроковых типах, которые передаются функции. Длина строки будет от 1 до 10 символов, но она никогда не будет пустой.


// function capitalizeWord(word) {
//     return word[0].toUpperCase() + word.slice(1)
//
// }
//
// console.log(capitalizeWord('word'))
// console.log(capitalizeWord('sese'))


///////////////////////////////////////////////////////////////////////////////// 17 //////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//
// простую программу, сообщающую ему, сможет ли он разместить всех пассажиров.
//
//     Обзор задачи:
//     Вам нужно написать функцию, которая принимает три параметра:
//
//     capэто количество человек, которое может вместить автобус, не считая водителя.
//     onэто количество людей в автобусе без учета водителя.
//     waitэто количество людей, ожидающих посадки в автобус, не считая водителя.
//     Если места достаточно, вернуть 0, а если нет, вернуть количество пассажиров, которых он не может взять.
//
//     Примеры использования:
//     cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
// cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting


// function enough(cap, on, wait) {
//     let mest = cap - on
//     if (mest >= wait) return 0
//     if (wait > cap) return wait -mest
//     else return wait -mest
//
//
//     // return cap - wait - on < 0 ? on + wait - cap : 0;
// }
//
// console.log(enough(10, 5, 5))
// console.log(enough(100, 60, 50))
// console.log(enough(20, 5, 5))
// console.log(enough(64, 39, 72))//47
// console.log(enough(80, 67, 80))//67
// console.log(enough(72, 13, 79))//20


///////////////////////////////////////////////////////////////////////////////// 18 //////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Завершите функцию, которая принимает неотрицательное целое число nв качестве входных данных и возвращает список всех степеней 2с показателем степени от 0до n( включительно ).
//
//     Примеры
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

// function powersOfTwo(n){
//    let result = []
//     for (let i = 0; i <= n; i++) {
//         result.push(2**i)
//     }
//     return result
//
// }
//
//
// console.log(powersOfTwo(0))
// console.log(powersOfTwo(1))
// console.log(powersOfTwo(4))


///////////////////////////////////////////////////////////////////////////////// 19 //////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Давайте играть! Вы должны вернуть, какой игрок выиграл! В случае ничьей возврат Draw!.
//
// Примеры (Ввод1, Ввод2 --> Выход):
//
// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!


// const rps = (p1, p2) => {
//
//     return p1 === 'rock' && p2 === 'scissors' || p1 === 'scissors' && p2 === 'paper' || p1 === 'paper' && p2 === 'rock'
//         ? `Player 1 won!`
//         : p1 === p2
//             ? "Draw!"
//             : `Player 2 won!`
// }
//
// console.log(rps('rock', 'scissors'))//1
// console.log(rps('scissors', 'paper'))//1
// console.log(rps('paper', 'rock'))//1
//
// console.log(rps('scissors', 'rock'))//2
// console.log(rps('paper', 'scissors'))//2
// console.log(rps('rock', 'paper'))//2
//
// console.log(rps('rock', 'rock'))//=
// console.log(rps('paper', 'paper'))//=
// console.log(rps('scissors', 'scissors'))//=


///////////////////////////////////////////////////////////////////////////////// 20 //////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1. Коля любит кататься на велосипеде. В течении одного часа Коля выпивает 0.5л воды.
//     Напишите функцию, которая в качестве параметра принимает количество часов, которое
// Коля проехал на велосипеде, и возвращает количество воды, которое Коля выпил. (с
// округлением до меньшего(!) значения).
// Т.е. функция принимает 3 (часа) – должна вернуть 1 (литр)
// 6.7 (часа) – 3 (литра)
// 11.8 (часа) – 5 (литров)

// function votor(n){
//     return Math.floor(Math.floor(n) / 2)
// }
//
// console.log(votor(3))
// console.log(votor(6.7))
// console.log(votor(11.8))
// console.log(votor(11.95))
// console.log(votor(11.99))


///////////////////////////////////////////////////////////////////////////////// 21 //////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Создайте функцию, которая принимает один параметр – исходная строка, и которая
// возвращает новую строку, в которой должны быть удалены 1й и последний символ из
// исходной строки. Если пришла строка из 2х символов – возвращаете исходную строку.


// function str(s){
//     if(s.length <=2){
//         return s
//     }
//     return s.slice(1, -1)
// }
//
// console.log(str('a'))
// console.log(str('aa'))
// console.log(str('aba'))
// console.log(str('abba'))
// console.log(str('abbba'))


///////////////////////////////////////////////////////////////////////////////// 22 //////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Опять же на строки задачка. Напишите функцию, которая принимает первым параметром
// число n, а вторым исходную строку. Функция должна возвратить новую строку, которая
// будет содержать в себе исходную строку n раз.

// function strin (num,str){
//     let s=''
//     for (let i = 0; i < num; i++) {
//         s += `${str}`
// }
//     return s
// }
//
// console.log(strin(6,'hi'))


///////////////////////////////////////////////////////////////////////////////// 23 //////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Напишите функцию, которая принимает параметром число. Функция должна возвращать
// сумму всех чисел от 1 до этого числа.
//     Пример:
// summation(2) -&gt; 3
// return 1 + 2
// summation(8) -&gt; 36
// return 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8


// function sum(n){
//     if(n === 1)return 1
//     return n +sum(n-1)
// }
//
// console.log(sum(2))
// console.log(sum(8))


///////////////////////////////////////////////////////////////////////////////// 24 //////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Создайте функцию, которая выполняет основные математические операции. Функция
// принимает три аргумента: операция (тип - строка), первое значение (число), второе
//
// значение (число). Функция должна возвращать результат чисел, после применения данной
// операции.
//     Пример:
// basicOp('+', 4, 7) // Output: 11
// basicOp('-', 15, 18) // Output: -3
// basicOp('*', 5, 5) // Output: 25
// basicOp('/', 49, 7) // Output: 7

// function basicOp(str,num1,num2){
//     if (str === '+'){
//         return num1 + num2
//     }
//     if (str === '-'){
//         return num1 - num2
//     }
//     if (str === '*'){
//         return num1 * num2
//     }
//     if (str === '/'){
//         return num1 / num2
//     }
// }
//
// console.log(basicOp('+', 4, 7))
// console.log(basicOp('-', 15, 18))
// console.log(basicOp('*', 5, 5))
// console.log(basicOp('/', 49, 7))


///////////////////////////////////////////////////////////////////////////////// 25 //////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Создайте функцию strCount (принимает объект в качестве аргумента), которая будет подсчитывать все строковые значения внутри объекта. Например:
//
// strCount({
//     first: "1",
//     second: "2",
//     third: false,
//     fourth: ["anytime",2,3,4],
//     fifth:  null
// })
// //returns 3


// let listtt = {
//     first: "1",
//     second: "2",
//     third: false,
//     fourth: ["anytime", 2, 3, 4],
//     fifth: null
// }
//
// function strCount(obj) {
//     let sum = 0
//     for (let str in obj) {
//         console.log('str', str, 'obj', obj)
//         if (typeof obj[str] === "object") {
//             console.log('obj[str]obj ', obj[str])
//             sum += strCount(obj[str])
//         }
//         if (typeof obj[str] === "string") {
//             console.log('obj[str]string ', obj[str])
//             sum += 1
//         }
//     }
//     return sum
// }
//
//
// console.log(strCount(listtt))


///////////////////////////////////////////////////////////////////////////////// 26 //////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
//
//     Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
//
// Example:
//     n= 5, m=5: 25
// n=-5, m=5:  0
// Waiting for translations and Feedback! Thanks!

//
// function paperwork(n, m) {
// return n < 0 || m <0 ? 0 : n * m
// }
//
// console.log(paperwork(5,5))
// console.log(paperwork(-5,5))
// console.log(paperwork(5,-5))
// console.log(paperwork(5,0))


///////////////////////////////////////////////////////////////////////////////// 27 //////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//
// Дан массив целых чисел.
//
//     Возвращает массив, где первый элемент — это количество положительных чисел, а второй элемент — сумма отрицательных чисел. 0 не является ни положительным, ни отрицательным.
//
//     Если вход представляет собой пустой массив или имеет значение null, верните пустой массив.
//
//     Пример
// Для ввода [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]вы должны вернуть [10, -65].
//

//
// function countPositivesSumNegatives(input) {
//     if(input === null || input.length === 0) return []
//
//     let c = input.filter(e=>e !== 0 )
//   let a = c.filter(e=>e > 0)
//     let b = c.filter(e=>e < 0)
//     return [a.length,b.reduce((acc,el)=>acc + el,0)]
//
//     // return input.reduce((arr, n) => {
//     //     if (n > 0) arr[0]++;
//     //     if (n < 0) arr[1] += n;
//     //     return arr;
//     // }, [0, 0]);
// }
//
// console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))


///////////////////////////////////////////////////////////////////////////////// 28 //////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Мы определили функцию filteredArray, которая принимает arrвложенный массив и elemв качестве аргументов и возвращает новый массив. elemпредставляет элемент, который может присутствовать или отсутствовать в одном или нескольких массивах, вложенных в arr. Измените функцию, используя forцикл, чтобы она возвращала отфильтрованную версию переданного массива таким образом, чтобы любой массив, вложенный в arrсодержащий elem, был удален.
// filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18)должен вернуться[[10, 8, 3], [14, 6, 23]]
// Ожидание :filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2)должен вернуться[["flutes", 4]]
// Ожидание :filteredArray([["amy", "beth", "sam"], ["dave", "sean", "peter"]], "peter")должен вернуться[["amy", "beth", "sam"]]
// Ожидание :filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)должен вернуться[]

// function filteredArray(arr, elem) {
//     let newArr = [];
//
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].indexOf(elem) === -1) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }
//
// console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
// console.log(filteredArray([["amy", "beth", "sam"], ["dave", "sean", "peter"]], "peter"));
// console.log(filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2));


///////////////////////////////////////////////////////////////////////////////// 29 //////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Возвращает длину самого длинного слова в предоставленном предложении.
//
//     Ваш ответ должен быть числом.
//
// function findLongestWordLength(str) {
//     let a = str.split(' ')
//     console.log('aaa',a)
//
//     let b = 0
//     console.log('bbb',b)
//     for (let i = 0 ;i < a.length;i++){
//         console.log('a.length',a.length)
//         if(a[i].length>b){
//             console.log('a[i].length',a[i].length,'b',b)
//             b = a[i].length
//         }
//     }
//
//     return b
// }
// function findLongestWordLength(s) {
//     return s.split(' ')
//         .reduce(function(longest, word) {
//             return Math.max(longest, word.length)
//         }, 0);
// }
//
// function findLongestWordLength(str) {
//     return Math.max(...str.split(" ").map(word => word.length));
// }
// findLongestWordLength("The quick brown fox jumped over the lazy dogd");


///////////////////////////////////////////////////////////////////////////////// 30 //////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Возвращает массив, состоящий из наибольшего числа из каждого предоставленного подмассива. Для простоты предоставленный массив будет содержать ровно 4 подмассива.
//
//     Помните, что вы можете перебирать массив с помощью простого цикла for и обращаться к каждому члену с помощью синтаксиса массива arr[i].

// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])должен вернуть массив.
//     Ожидание :largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])должен вернуться [27, 5, 39, 1001].

//
// function largestOfFour(arr) {
//     let max = []
//     for (let i = 0; i < arr.length; i++) {
//         max= [...max,Math.max(...arr[i])]
//         console.log(Math.max(...arr[i]))
//     }
//     console.log(max)
//     return max
// }
//
// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);





///////////////////////////////////////////////////////////////////////////////// 30 //////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Вам даны два массива и индекс.
//
//     Скопируйте каждый элемент первого массива во второй массив по порядку.
//
//     Начните вставлять элементы с индекса nвторого массива.
//
//     Вернуть полученный массив. Входные массивы должны оставаться неизменными после запуска функции.

// frankenSplice([1, 2, 3], [4, 5], 1)должен вернуться [4, 1, 2, 3, 5].
//     Ожидание :frankenSplice([1, 2], ["a", "b"], 1)должен вернуться ["a", 1, 2, "b"].
//     Ожидание :frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)должен вернуться ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
//     Ожидание :Все элементы из первого массива должны быть добавлены во второй массив в их первоначальном порядке. frankenSplice([1, 2, 3, 4], [], 0)должен вернуться [1, 2, 3, 4].

//
// function frankenSplice(arr1, arr2, n) {
//     return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
// }
//
// frankenSplice([1, 2, 3], [4, 5, 6], 1);



