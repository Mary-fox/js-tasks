//Расстояние Хэмминга
// Расстояние Хэмминга между двумя строками одинаковой длины — это число позиций, в которых соответствующие символы различны.
//  Другими словами, оно измеряет минимальное количество замен, необходимых для преобразования одной строки в другую, или минимальное
//  количество ошибок, которые могли бы преобразовать одну строку в другую. В более общем контексте расстояние Хэмминга — это одна из
//  нескольких метрик строк для измерения расстояния
//  редактирования между двумя последовательностями.


export function hammingDistance(a, b) {
    if( a.length !== b.length) {
        return
    }
    let distanse = 0;

    for (let i = 0; i < a.length; i += 1) {
      if(a[i] !== b[i]) {
        distanse +=1
      }
    }
    return distanse
}



// Проверка палиндрома
// Палиндром — это строка, которая читается одинаково слева направо и справа налево. Это означает, что вторая половина строки — это обратная 
// сторона первой половины.


function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while(left < right) {
    if (str[left] !== str[right]) {
      return false
    }
    left += 1;
    right -= 1;
  }
  return true

}



// Задача: Найти длину самой длинной подстроки с уникальными символами
// Условие:
// Напишите функцию lengthOfLongestSubstring(str), которая принимает строку str 
// и возвращает длину самой длинной подстроки, не содержащей повторяющихся
//  символов.

// Примеры:

// console.log(lengthOfLongestSubstring("abcabcbb")); // 3 ("abc")
// console.log(lengthOfLongestSubstring("bbbbb"));    // 1 ("b")
// console.log(lengthOfLongestSubstring("pwwkew"));   // 3 ("wke")
// console.log(lengthOfLongestSubstring(""));         // 0


function lengthOfLongestSubstring(str) {
  let set = new Set();
  let start = 0;
  let maxLength = 0;

  for (let end = 0; end < str.length; end++) {
    while(set.has(str[end])) {
          set.delete(str[start])
          start++;
    }
    set.add(str[end]);
      maxLength = Math.max(maxLength, end - start + 1)
    
  }
return maxLength;
}