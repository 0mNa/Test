//1) написать, цикл, который выведет числа от 1 до 50 в консоль

//let i = 1;
//while (i <= 50) {
 // console.log(i)
 // i++
//};

//2) написать, цикл, который выведет числа от 1 до 50 в консоль, но начиная с числа 10

//let i = 10;
//while (i <= 50) {
 // console.log(i)
 // i++
//};

//3) написать, цикл, который выведет все четные числа от 1 до 50 в консоль

//for (let i = 2; i <= 50; i++) {
 // if (i % 2 == 0) {
 //   console.log(i);
 // }
//};

//4)  написать, цикл, который выведет числа от 1 до 50 в обратном порядке в консоль

//let i = 50;
//while (i) {
 // console.log(i);
 // i--;
//};

//5) написать цикл, который выведет сумму всех чисел от 1 до 20 в консоль

//let sum = 1;
//for (let i = 1; i <= 50; i++) {
 // sum = sum + i;
//}
//console.log(sum);

//6) создать пустой массив и цикл, который заполнит массив числами от 1 до 10

//let arr = [];
//for(let i = 1; i <= 10; i++) {
 // arr.push(i);
//}
//console.log(arr);

//7) создать пустой массив и цикл, который заполнит массив рандомными числами от 1 до 50

//let array = []
//for (let i = 0; i < 50; i++) {
 //  array.push(1 + Math.random() * ((50 - (1)) + 1))
//};
//console.log(array)

//8) отсортировать массив из прошлой таски по возрастанию

//let arr = [];
//for(let i = 0; i < 50; i++) {
 // arr.push(Math.floor(Math.random() * 50));
//}
//function sortEggsInNest(a, b) {
  //return a > b ? 1 : b > a ? -1 : 0;
//}

//console.log(arr.sort(sortEggsInNest))


//9) отсортировать массив из прошлой таски по убыванию

//let arr = [];
//for (let i = 0; i < 50; i++) {
 // arr.push(Math.floor(Math.random() * 50));
//}

//function sortEggsInNest(a, b) {
 // if (a > b) {
 //   return -1;
 // } else if (b > a) {
 //   return 1;
 // } else {
 //   return 0;
 // }
//}
//console.log(arr.sort(sortEggsInNest))

//10) написать, цикл, который выведет индексы всех элементов массива с нечетными значениями

//let arr = [17, 23, 37, 45, 52, 61, 72, 83, 91, 120];

//for (let i = 0; i < arr.length; i++) {
  //if (arr[i] % 2 === 1) {
  //  console.log(i)
  //}
//}

//1.

//function doubleChar(str) {
 // return [...str].map(s => s.repeat(2)).join('')
//}
//console.log(doubleChar("String"))
//console.log(doubleChar("Hello World"))
//console.log(doubleChar("1234!_ "))

//2.

//let Name = [
 // 'Sam',
  //'Harris'
//];
//console.info(Name[0][0]+'.'+Name[1][0]);

//let Name = [
  //'Patrick',
  //'Feeney'
//];
//console.info(Name[0][0]+'.'+Name[1][0]);

//3.
//let arr = ["yoda", "best", "has"]
//let newArray = ""
//for (let i = 0; i < arr.length; i++) {
 // newArray += arr[i][i] || "*"
//}
//console.log(newArray);

//4.

//let array = [-2, 14, -10, 8];
//let result = 0;
//for (let i = 0; i < array.length; i++) {
   //if (array[i] > 0) {
   // result += array[i];
  // }
//}
//console.log(result);

//5.
//let arr = [1, 2, 3, 4, 5];
//arr = arr.map((el, i) => el + i +1);
//console.log(arr);


//6.
//let numbs = [0, 1, 5, 6, 2, 7, 9, 10, 8, 4];
//numbs.sort((a, b) => (a - b));
//let missingNumber = numbs.find((el, i) => el != i) -1;
//console.log(missingNumber);

//7.

//const arr = [34, 15, 88, 2]
//const min = Math.min(...arr)
//console.log(min)

//const arr = [34, -345, -1, 100]
//const min = Math.min(...arr)
//console.log(min)

//8.
//let arr = [1, -2, 3, -5];
//let newArr = arr.map((el) => el * -1)
//console.log(newArr);

//10.

let vowels = ["a", "e", "i", "o", "u", "y"];
let word = "disInterestedness";
let count = 0;
word = word.toLowerCase()

for (let i = 0; i < word.length; i++) {
  vowels.find((el) => el === word[i]) ? count++ : count

}
console.log(count);