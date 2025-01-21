function findDublicates(arr) {
    return arr.reduce((acc, item) => {
        if (acc.seen[item]) {
            if (!acc.dublicates.includes(item)) {
                acc.dublicates.push(item);
            } }
            else {
                acc.seen[item] = true;
            }
            return acc
   
}, { seen: {}, dublicates: [] }).dublicates; 

}

  const numbers = [1, 2, 3, 4, 5, 2, 4, 7, 1, 9, 5];
  const duplicates = findDublicates(numbers);
  
  console.log(duplicates); // [2, 4, 1, 5]







