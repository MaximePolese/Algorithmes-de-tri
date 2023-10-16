let table = [1, 8, 56, 84, 62, 41, 12, 65, 99, 14, 33]
console.log(table);

function insertionSort(table) {
    for (let i = 1; i < table.length; i++) {
        let temp = table[i];
        let j = i - 1;
        while (j >= 0 && (table[j] > temp)) {
            table[j + 1] = table[j];
            j = j - 1;
        }
        table[j + 1] = temp;
    }
    return table;
}

const newTable = insertionSort(table);
console.log(newTable);



