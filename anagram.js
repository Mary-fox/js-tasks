
// # Анаграмма

// Так называют слово, которое содержит
// все буквы другого слова в том же количестве,
// но ином порядке.

// # Постановка

// Нужно написать функцию, которая проверяет,
// являются ли две строки анаграммами,
// причем регистр букв не имеет значения.
// Учитываются лишь символы; пробелы или знаки
// препинания в расчет не берутся.

function anagram(str1, str2) {
  let x = str1.replace(/[^\w]/g, '').toLowerCase()
  let y = str2.replace(/[^\w]/g, '').toLowerCase()

  if (x.length !== y.length) {
    return false;
  }

  if (x.split('').sort().join('') === y.split('').sort().join('')) {
    return true
  } else { return false }
}
console.log(anagram('finder', 'Friend')) // true
console.log(anagram('hello', 'bye')) // false
   let fib=(n) => {
    let a = 1
    let b = 1
    
    let c = a + b
    return fib 
   }




   const getPosts = async() => {
    try {
const response = await fetch("ававыа")
return response.json()
    } catch(error) {
      console.log(error)
    }
   }