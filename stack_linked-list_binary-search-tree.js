//класс стек - основные операции push, pop, isEmpty и top

class Stack { 
    constructor(){
    this.stack = []
}
push(item) {
    this.stack.push(item)
}

pop() {
    return this.stack.pop()
}

isEmpty(){
    return this.items.length === 0;
}

top() {
    return this.stack[this.stack.length - 1]
}
}

//класс очередь  - основные операции Enqueue, Dequeue, isEmpty, Top


class Queue {
    constructor(){
        this.queue = []
    }

    enqueue(item){
        this.queue.push(item); // добавление в конец 
    }
    dequeue(){
        return this.queue.shift(); //удаление из начала
    }
    isEmpty() {
        return this.queue.length === 0;
    }
    top(){
        return this.queue[0];
    }
}

//класс связанного списка


class ListNode{
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null;  // Головной узел (начало списка)
        this.size = 0;
    }
  // Добавление элемента в конец списка
  append(data) {
    const newNode = new ListNode(data);
    if(this.head === null){
        this.head = newNode; // Если список пуст, новый узел становится головным
    }else {
        let current = this.head;
        while(current.next !== null) {
            current = current.next; // Находим последний узел
        }
        current.next = newNode; // Добавляем новый узел в конец
      }
      this.size++
  } 

     // Добавление элемента в начало списка
     prepend(data) {
        const newNode = new ListNode(data);
        newNode.next = this.head; // Новый узел указывает на текущую голову
        this.head = newNode;  // Новый узел становится головой
        this.size++
     }
    // Удаление элемента по значению
    remove(data) {
        if (this.head === null) {
            return false; // Если список пуст, ничего не делаем
        }

        if (this.head.data === data) {
            this.head = this.head.next; // Удаляем голову, перемещаем указатель
            this.size--;
            return true;
        }

        let current = this.head;
        let previous = null;

        while (current !== null && current.data !== data) {
            previous = current;
            current = current.next; // Идем по списку
        }

        if (current === null) {
            return false; // Элемент не найден
        }

        previous.next = current.next; // Убираем текущий узел из списка
        this.size--;
        return true;
    }

    // Проверка, пуст ли список
    isEmpty() {
        return this.size === 0;
    }

    // Получение размера списка
    getSize() {
        return this.size;
    }

    // Печать элементов списка
    print() {
        let current = this.head;
        const elements = [];
        while (current !== null) {
            elements.push(current.data);
            current = current.next;
        }
        console.log(elements.join(" -> "));
    }
}




//функция, которая принимает корень бинарного дерева и проверяет,
//является ли дерево симметричным

const tree = {
    val: 1,
    left: {
        val: 2,
        left: { val: 3, left: null, right: null },
        right: { val: 4, left: null, right: null },
    },
    right: {
        val: 2,
        left: { val: 4, left: null, right: null },
        right: { val: 3, left: null, right: null },
    },
};

function isSymmetric(root) {
    function isMirror (tree1, tree2) {
        if (!tree1 && !tree2) {
            return true; // Если оба узла пусты, они симметричны
        }
        if (!tree1 || !tree2) {
            return false; // Если один из узлов пуст, они не симметричны
        }

        return (
            tree1.val === tree2.val && isMirror(tree1.left, tree2.right) &&
            isMirror(tree1.right, tree2.left)

        )
    }
     // Проверяем симметрию относительно самого корня
    return isMirror(root, root)
}




//функция, которая принимает корень бинарного дерева поиска и
//возвращает кортеж из двух значений: минимальное и максимальное
//значения в дереве

function findMinMax(root) {
    if(!root) { 
        return 0;
    }

    function findMin(node) {
        while (node.left) {
            node = node.left; 
        }
        return node.val;
    }
    function findMax(node) {
        while (node.right) {
            node = node.right
        }
        return node.val
    }

    const min = findMin(root);
    const max = findMax(root);
    return [min, max]
}

//функция, которая принимает корень бинарного дерева и
//два значения и возвращает значение общего предка (lowest common ancestir)
//для этих двух узлов . Если один из узлов не существует в дереве, функция должна вернуть None 

// const tree = {
//     val: 3,
//     left: {
//         val: 5,
//         left: { val: 6, left: null, right: null },
//         right: {
//             val: 2,
//             left: { val: 7, left: null, right: null },
//             right: { val: 4, left: null, right: null },
//         },
//     },
//     right: {
//         val: 1,
//         left: { val: 0, left: null, right: null },
//         right: { val: 8, left: null, right: null },
//     },
// };

// console.log(findLowestCommonAncestor(tree, 5, 1)); // 3
// console.log(findLowestCommonAncestor(tree, 5, 4)); // 5
// console.log(findLowestCommonAncestor(tree, 5, 10)); // null

function findLowestCommonAncestor(root, val1, val2){
    // Функция для проверки существования значения в дереве
    function exists(node, value) {
        if(!node) return false;
        if(node.val === value) return true;
        return exists(node.left, value) || exists(node.right, value)
    }

    function findLCA(node, v1, v2) {
        if (!node) return null;
        // Если текущий узел равен одному из значений, он может быть предком
        if(node.val === v1 || node.val === v2) return node;

            // Рекурсивный поиск в левом и правом поддеревьях
            const left = findLCA(node.left, v1, v2);
            const right = findLCA(node.right, v1, v2);
             // Если оба значения найдены в разных поддеревьях, текущий узел — их предок
             if(left && right) return node;
             // Если значения оба находятся в одном поддереве, возвращаем найденный узел
             return left || right;
    }
      // Проверяем, существуют ли оба значения в дереве
      const val1Ex = exists(root, val1)
      const val2Ex = exists(root, val2)
      if(!val1Ex || !val2Ex) return null;

      // Если оба значения существуют, ищем LCA
      const claNode = findLCA(root, val1, val2)
      return claNode? claNode.val : null
}