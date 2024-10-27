//Задание 7.7.5
function getUniqueSortElem(arr) {
    arr = [...new Set(arr)];
    arr.sort();
    return arr;
}

arr = [1, 5, 2, 3, 4, 3, 5]

console.log(
    getUniqueSortElem(arr)
);