let table = [1, 8, 56, 84, 62, 41, 12, 65, 99, 14, 33]
console.log(table);

function insertionSort(table) {
    let temp = 0;
    let j = 0;
    for (let i of table) {
        console.log([i], i);
        temp = table[i]
        j = i -1
        while (j > 0 && (table[j] > temp)) {
            console.log('hello');
            table[j] = table[j + 1]
            j = j - 1
        }
        table[j +1] = temp
    }
}

insertionSort(table);
console.log(table);



