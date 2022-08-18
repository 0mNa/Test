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
//for(i = 1; i <= 10; i++) {
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
let arr = [17, 23, 37, 45, 52, 61, 72, 83, 91, 120];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 1) {
    console.log(i)
  }
}