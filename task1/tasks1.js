// 1.1
function areCoprimeNaive(a, b) {
    const min = Math.min(a, b);
    for (let i = 2; i <= min; i++) {
        if (a % i === 0 && b % i === 0) return false;
    }
    return true;
}

// 1.2
function isPrimeNumber(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// 1.3
function reshetoEratosthenes(n) {
    const arr = new Array(n + 1).fill(true);
    arr[0] = arr[1] = false;
    for (let i = 2; i * i <= n; i++) {
        if (arr[i]) {
            for (let j = i * i; j <= n; j += i) {
                arr[j] = false;
            }
        }
    }
    const primes = [];
    for (let i = 2; i <= n; i++) {
        if (arr[i]) primes.push(i);
    }
    return primes;
}

// 1.4
function getNPrimes(n) {
    const primes = [];
    let num = 2; 
    while(primes.length < n){
        if(isPrimeNumber(num)){
            primes.push(num);
        }
        num += 1;
    }
    return primes;
}

// 1.5
function getDividers(n) {
    const dividers = [];
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            dividers.push(i);
            if (i !== n / i) dividers.push(n / i);
        }
    }
    return dividers.sort((a, b) => a - b);
}

console.log("Задача 1.1 пример для чисел 15, 28:");
console.log(areCoprimeNaive(15, 28), '\n');

console.log("Задача 1.2 пример для числа 13:");
console.log(isPrimeNumber(13), '\n');

console.log("Задача 1.3 пример для числа 30:");
console.log(reshetoEratosthenes(30), '\n');

console.log("Задача 1.4 пример для числа 10:");
console.log(getNPrimes(10), '\n');

console.log("Задача 1.5 пример для числа 28:");
console.log(getDividers(28), '\n');





