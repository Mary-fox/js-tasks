
// Связанный список — это структура данных, в которой элементы хранятся в узлах, 
// каждый из которых содержит ссылку на следующий узел в списке. Связанные списки 
// могут быть однонаправленными, двусвязными и кольцевыми.

// Задача
// Создайте простой однонаправленный связанный список на JavaScript и реализуйте следующие операции:

// Добавление элемента в конец списка (append)
// Удаление элемента по значению (remove)
// Поиск элемента по значению (find)
// Вывод всех элементов списка (printList)

// узел
class ListNode {
    constructor(value) {
        this.value = value; // Значение узла
        this.next = next; // Ссылка на следующий узел
    }
}

// класс самого спика
class LinkedList  {
    constructor() {
        this.head = null;
        this.tail = null;
    }
   // Добавление элемента в конец списка

   append(value) {
    const newNode = new ListNode(value);
    if  (this.head === null) {
         // Если список пуст, новый узел становится и головой, и хвостом
        this.head = newNode;
        this.tall = newNode;
    } else {
        this.tail.next = newNode;
        this.tail = newNode
    }
   }

// Удаление элемента по значению

   remove(value) {
    if (this.head === null) return;
    // Если удаляем голову списка
    if( this.head.value === value) {
        this.head = this.head.next
            if(this.head === null) {
                this.tail = null; // Если после удаления список пуст, обновляем хвост
            }
            return;
        }

    // Поиск узла, который нужно удалить
    let current = this.head;
    while(current.next !== null && current.next !== value) {
        current = current.next
    }

   // Если нашли узел для удаления
   if(current.next !== null) {
    current.next = current.next.next;
        if (current.next === null) {
            this.tail = current
        }
    }
   }

    // Поиск элемента по значению
   find(value) {
    let current = this.head;
    while (current !==null) {
        if(current.value === value) {
            return current
        }
        current = current.next;
    }
    return null;
   }
    
   // Вывод всех элементов списка

   printList() {
    let current = this.head;
    let result = [];

    while(current !== null) {
        result.push(current.value);
        current = current.next
    }
    consol.log(result.join("->"));
   }
}

//   // Пример использования
//   const list = new LinkedList();
//   list.append(1);
//   list.append(2);
//   list.append(3);
//   list.append(4);
//   list.printList(); // Вывод: 1 -> 2 -> 3 -> 4
  
//   list.remove(3);
//   list.printList(); // Вывод: 1 -> 2 -> 4
  
//   const foundNode = list.find(2);
//   console.log(foundNode ? `Found: ${foundNode.value}` : 'Not found'); // Вывод: Found: 2
  
//   const notFoundNode = list.find(5);
//   console.log(notFoundNode ? `Found: ${notFoundNode.value}` : 'Not found');








// Двусвязный список (двунаправленный список) — это структура данных, в которой каждый элемент (узел) содержит ссылки как на предыдущий, 
// так и на следующий узел в списке. В отличие от односвязного списка, где у узла есть только ссылка на следующий элемент, в двусвязном 
// списке узел знает и о своем предыдущем соседе.

// Добавление элемента в начало (prepend).
// Добавление элемента в конец (append).
// Удаление элемента.
// Поиск элемента по значению.
// Отображение всех элементов списка.



class DoublyLinkedListNode{
    constructor(value, prev = null, next = null) {
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}



class DoubliLinkedList{
     constructor() {
        this.head = null;
        this.tail = null;
     }
        // Добавление элемента в начало списка
        prepend(value) {
            const newNode = new DoublyLinkedListNode(value, null,this.head)
            if(this.head) {
                this.head.prev = newNode
            } else {
                this.tail = newNode
            }

            this.head = newNode
        }
        
        // Добавление элемента в конец списка
        append(value) {
            const newNode = new DoublyLinkedListNode(value,this.tail. null)

            if (this.tail) {
                this.tail.next = newNode
            } else {
                this.head =newNode
            }
            this.tail = newNode
        }

    // Поиск узла по значению
        find(value) {
            if(!this.head) return null;

            let currentNode = this.head;

            while(currentNode){
                if(currentNode.value === value) {
                    return currentNode
                }
                currentNode = currentNode.next
            }
            return null;
        }

    // Вывод всех элементов списка

    printList() {
        let currentNode = this.head;
        const values = [];

        while(currentNode) {
            values.push(currentNode.value)
            currentNode = currentNode.next
        }
        console.log(values.join("<->"))
    }
}
  


//     // Удаление узла по значению
//     delete(value) {
//       if (!this.head) return null; // Если список пуст, ничего не удаляем
  
//       let currentNode = this.head;
  
//       while (currentNode) {
//         if (currentNode.value === value) {
//           // Если это голова списка
//           if (currentNode === this.head) {
//             this.head = currentNode.next;
//             if (this.head) {
//               this.head.prev = null; // Новая голова не должна иметь предыдущий узел
//             } else {
//               this.tail = null; // Если список становится пустым
//             }
//           }
  
//           // Если это хвост списка
//           if (currentNode === this.tail) {
//             this.tail = currentNode.prev;
//             if (this.tail) {
//               this.tail.next = null; // Новый хвост не должен иметь следующий узел
//             } else {
//               this.head = null; // Если список становится пустым
//             }
//           }
  
//           // Если это узел в середине
//           if (currentNode.prev) {
//             currentNode.prev.next = currentNode.next;
//           }
  
//           if (currentNode.next) {
//             currentNode.next.prev = currentNode.prev;
//           }
  
//           return currentNode; // Возвращаем удаленный узел
//         }
  
//         currentNode = currentNode.next;
//       }
  
//       return null; // Узел с таким значением не найден
//     }
  

//   }
  
//   // Пример использования двусвязного списка
//   const list = new DoublyLinkedList();
  
//   // Добавим элементы в начало и конец
//   list.append(10);
//   list.prepend(5);
//   list.append(15);
//   list.prepend(1);
  
//   // Выведем элементы списка
//   list.printList(); // 1 <-> 5 <-> 10 <-> 15
  
//   // Поиск узла
//   const foundNode = list.find(10);
//   console.log(foundNode ? `Found: ${foundNode.value}` : 'Not found'); // Found: 10
  
//   // Удаление узла
//   list.delete(5);
//   list.printList(); // 1 <-> 10 <-> 15
  
//   // Попробуем удалить элемент, которого нет
//   list.delete(100); // Узел с таким значением не найден
//   list.printList(); // 1 <-> 10 <-> 15