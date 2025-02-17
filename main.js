//Misol 1
// let a = +prompt("A son kiriting;")
// let b = +prompt("B son kiriting;")
// function numbers(a, b){
//     let raqamlar = a + b
//     document.write("Yi'gindi:" + raqamlar)
// }
// numbers(a , b)

//Misol 2
// function sumArray(numbers) {
//     let sum = numbers.reduce((acc, num) => acc + num, 0);
//     return sum;
// }
// let myNumbers = [1, 2, 3, 4, 5];
// let result = sumArray(myNumbers);

// document.write("Massivdagi sonlar yig'indisi:", result);

//Misol 3
// function sonlar(arr){
//     return arr.filter(number => number > 0)
// }
// let arr = [-3, 4, -5, 9, -1]
// let natijaArray = sonlar(arr)
// document.write("Musbat sonlar" , natijaArray)

//Misol 4
// function convertArray(arr) {
//     return arr.map(item => {
//         if (typeof item === "string" && !isNaN(item)) {
//             return Number(item);
//         }
//         if (typeof item === "string") {
//             return 0;
//         }
//         return item;
//     });
// }
// let arr = ["5", 2, "true", "salom"];
// let result = convertArray(arr);
// document.write(result);

//Misol 5
// const personArr = [
//     {
//         name: "Abdulloh",
//         age: 19,
//         status: false
//     },
//     {
//         name: "Ibrohim",
//         age: 20,
//         status: true
//     },
//     {
//         name: "Shodyor",
//         age: 18,
//         status: false
//     }
// ]
// const falseStatusPeople = personArr.filter(person => person.status === false);
// falseStatusPeople.forEach(person => console.log(person));

//Misol 6
// function findAverage(a, b, c) {
//     let sum = 0;
//     for (let num of [a, b, c]) {
//         sum += num;
//     }
//     document.write("O'rta arifmetik:", sum / 3);
// }
// findAverage(2, 4, 6); 

//Misol 7
// var arr = [5, 4, 2, 6, 7, 9, 3, 5, 9, 4];
// function fn(list) {
//     if (list[0] % 2 !== 0) {
//         list[0] += 1; 
//     }
//     const lastIndex = list.length - 1;
//     if (list[lastIndex] % 2 === 0) {
//         list[lastIndex] += 1;
//     }
//     document.write(list);
// }
// fn(arr);

//Misol8
// function findCommonStrings(arr1, arr2) {
//     const commonStrings = new Set();
//     for (let str of arr1) {
//         if (arr2.includes(str)) {
//             commonStrings.add(str);
//         }
//     }
//     if (commonStrings.size > 0) {
//         document.write("Bir xil qiymatlar:", [...commonStrings]);
//     } else {
//         document.write("Bir xil qiymatlar topilmadi.");
//     }
// }
// const array1 = ["apple", "banana", "cherry", "grape"];
// const array2 = ["banana", "pear", "apple", "melon"];
// findCommonStrings(array1, array2);
