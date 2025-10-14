const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1]


const arrCopy1 = [...arr]
let arrCopy2 = arr.slice()


arrCopy1.reverse()
arrCopy2 = arrCopy2.toReversed()


console.log("Копия 1:", arrCopy1);
console.log("Копия 2:", arrCopy2);