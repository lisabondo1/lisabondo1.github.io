function averageThreeNumbers(a, b, c) {
    let sum = a+b+c;
    let average = sum/3;
    return average;
}

function createSentence(num, noun) {
    let sentence = "On average, a Berkeley student has " + num + " " + noun;
    return sentence;
}

function getRandomNum(max){
    let randomNum = Math.random()* max;
    let randomNumRound = Math.round(randomNum);
    return randomNumRound;
}

let x = getRandomNum(20);
let y = getRandomNum(10);
let z = getRandomNum(100);

let avg = averageThreeNumbers(x, y, z);

let sentence = createSentence(avg, "cats");

console.log(sentence);
