//бинарный поиск

function binary_search(list, item) {
    let low = 0;
    let hight = list.length - 1
        while(low <= hight) {
            let mid = Math.floor((low + hight)/2)
            const guess = list[mid]
            if (guess === item ) {
                return mid;
            } else if (guess < item) {
                low = mid + 1
            } else hight = mid - 1
            }
        return null
}

const my_list = [1, 3, 5, 7, 9];

console.log(binary_search(my_list, 3));  


//сортировка выбором

function findSmallIndex(arr)  {
    let smallElement = arr[0]
    let smallIndex = 0

    for (let i=1; i<arr.length; i++) {
        if (arr[i] < smallElement) {
            smallElement = arr[i]
            smallIndex = i
        }
    }
    return smallIndex;
}

function selectionSort(array) {
    let sortedArr = [];
    let copyArr = array.slice();

    for (let i = 0; i < array.length; i++) {
        let smallestIndex = findSmallIndex(copyArr)
        sortedArr.push(copyArr.splice(smallestIndex, 1)[0])

    }

    return sortedArr
}


const sourceArray = [5, 3, 6, 2, 10];
const sortedArray = selectionSort(sourceArray);

console.log("Source array - ", sortedArray); 


//рекурсия function sumRecursive(arr) {

      function sumRecursive(arr) {
        if (arr.length === 0) return 0;
        return arr[0] + sumRecursive(arr.slice(1))
      }


//Найдите наибольшее число в списке

      function max(arr) {
        if (arr.length === 2) return arr[0] > arr[1] ? arr[0] : arr[1]

        let submax = max(arr.slice(1))
        return arr[0] > submax? arr[0] : submax
      }
          
      console.log(max([1, 5, 10, 25, 16, 1])); // 25

//быстрая сортировка
      function quicksort(array) {
        // base case, arrays with 0 or 1 element are already "sorted"
        if (array.length < 2) return array;
        // recursive case
        let pivot = array[0];
        // sub-array of all the elements less than the pivot
        let less = array.slice(1).filter(function (el) {
            return el <= pivot;
        });
        // sub-array of all the elements greater than the pivot
        let greater = array.slice(1).filter(function (el) {
            return el > pivot;
        });
        return quicksort(less).concat(pivot, quicksort(greater));
    }

  
    function quicksort(arr) {
        if (arr.length < 2) return arr;
        let pivot = arr[0]
        let less = arr.slice(1).filter(function(x) {
            return x <= pivot
        })

        let greater = arr.slice(1).filter(function(x) {
            return x > pivot
        })

        return quicksort(less).concat(pivot,quicksort (greater))
    }

    console.log(quicksort([10, 5, 2, 3]));
