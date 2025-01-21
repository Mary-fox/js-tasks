// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };
  
// function multiplyNumeric(obj) {
//     for (let key in obj) {
// if (+obj[key]){
//     obj[key]*=2
// }
//     } 
// }

// multiplyNumeric(menu); // Вызов функции, которая изменяет объект menu
// console.log(menu);




const reduceString = (str) => {
    let count = 1;
    let result = "";
    let prevChar = '';
  if(!str) return '';

    for (let char of str) {
        if (!prevChar) {
            prevChar = char;
            result += prevChar;

            continue;
        }
        if (char === prevChar) {
            count ++
            continue;
        } 
        result += count;
        count = 1
        prevChar = char;
        result += prevChar;

    }
    result += count;
    return result;
}

console.log(reduceString("AAABBEW"))  //А3B2E1W1
console.log(reduceString("AGGGABLLLBEW"))
console.log(reduceString(""))




//Дан массив целых чисел в порядко возрастания:
//[-4, -1, 0, 3, 10]
//Нужно возвести каждое в квадрат и сохранить оригинальную сортировку:
//[0, 1, 9, 16, 100]
//проделав все это за один проход.


function something(arr) {
    let left = 0;
    let right = arr.length - 1;
    let result = [];

    while ( left <= right) {

        let leftNum = arr[left] ** 2;
        let rightNum = arr[right] ** 2;

    if(leftNum > rightNum) {    
        result.unshift(leftNum);
        left ++;
    } else {
        result.unshift(rightNum)
        right--;
    }
}
return result;
}

console.log(something([-4, -1, 0, 3, 10]))















