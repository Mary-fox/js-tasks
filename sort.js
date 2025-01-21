let bla = [1,10,2,45,6,23]
  //пузырьковая сортировка 

//   const bubleSort = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         for (let x = 0; x < arr.length - i; x++) {
//             console.log(arr[x])
//             console.log(arr[x + 1])
//             if (arr[x] > arr[x + 1]) {
//         [arr[x], arr[x + 1]] =[ arr[x+1], arr[x]]
//         console.log([arr[x], arr[x + 1]])
//             }
//         };
//     }
//     return arr
//   }


//   console.log(bubleSort(bla))

  heights =[1,1,4,2,1,3]

  var heightChecker = function(heights) {
    let bla = Array.from(heights).sort((a,b) => a - b)
    console.log(bla)
let count = 0;
for (let i = 0; i < heights.length; i ++) {
    if (heights[i] !== bla[i]) {
        count ++
    }
}
    return count;
};


// console.log( heightChecker( heights))



//быстрая сортировка 
// function partrition(nums, start, end) {
//   const pivot = nums[end];
//   let i = start - 1;
//   for(let j = start; j < end; j++) {
//       if(nums[j] < pivot) {
//           i++;
//            [nums[i], nums[j]] = [nums[j], nums[i]];
//       }
//   }
//    [nums[i + 1], nums[end]] = [nums[end], nums[i + 1]];
//    return i + 1
// } 
// function quickSort(nums, start, end){
//   if(start < end) {
//        const pi =partrition(nums, start, end);
//          quickSort(nums, start, pi - 1);
//           quickSort(nums, pi + 1, end);
//   }
// }


// function sortArray(nums) {
//   quickSort(nums, 0, nums.length - 1);
//   return nums;
// }

let arr = [1,10,2,45,-6,23,-10]
//еще одна реализация быстрой сортировки 
function quickSort(arr) {
  return quickSortHelper(arr, 0 ,arr.length-1)
}

function quickSortHelper(arr, left, right) {
    if(arr.length < 2) {
      return arr;
  }

  const index = partrition(arr, left, right)

  if (left < index - 1) {
    quickSortHelper(arr, left, index -1)
  }

  if (index < right) {
    quickSortHelper(arr, index, right)
  }
  return arr;
}

function partrition(arr, left,right) {
  const pivot = arr[Math.floor((left+right)/2)];

  while(left <= right){
    while(arr[left] < pivot) {
      left++
    }
    while(arr[right] > pivot) {
      right--;
    }

    if(left<=right) {
      swap(arr, left, right)
      left++; 
      right--;
    }
  }
  return left;
}

function swap(arr, i, j) {
  let temp = arr[i]; 
  arr[i] = arr[j];
  arr[j] = temp
}



//быстрая сортировка без мутации массива

// function quickSort(arr) {
//   if(arr.length < 2) {
//     return arr;
//   }
//  const pivotIndex = Math.floor(arr.length/2)
//  const pivot = arr[pivotIndex];
//  const less = [];
//  const greater = [];

//  for (let i = 0; i < arr.length; i++) {
//     if (i === pivotIndex) {
//     continue;
//   }
//     if(arr[i] <= pivot) {
//       less.push(arr[i])
//     } else {
//       greater.push(arr[i])
//     }
//  }
//  return [...quickSort(less), pivot, ...quickSort(greater)]
// }

console.log(quickSort(arr))