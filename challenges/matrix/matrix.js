// Ayman Asawalqeh

function fibonacciSequence (index) {
    let sum = 0;
    var goldenRatioResult = 1;
    var subGoldenRatioResult = 1;
    for (let i = 0; i < index; i++) {
        goldenRatioResult *= 1.61803399;
        subGoldenRatioResult *= 1 - 1.61803399;
    }
    sum = Math.floor((goldenRatioResult - subGoldenRatioResult) / 2.23606797400862)
    return sum
}

// Mohammed Alhawamdeh

function fibonacciSequence2 (number) {
    let sum = 0;
    let n2 = 1;
    let n1 = 0;
    let counter = 1;
    while (counter < number) {
        sum = n1 + n2;
        counter++;
        n1 = n2;
        n2 = sum;
    }
    return sum
}
fibonacciSequence2(number)

// Creidts by Ahmad Alkhamaysey