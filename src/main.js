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

