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
var moveZeros = function (arr) {
    return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}*/
