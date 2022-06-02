let numbers = [2, 7, 11, 15], target = 17;
function search(numbers, target) {
    let len = numbers.length;
    let i = 0;
    let j = len - 1;
    while (i < j) {
        if (numbers[i] + numbers[j] < target)
            i++;
        else if (numbers[i] + numbers[j] > target)
            j--;
        else
            return [i, j];
    }
    return []
}
console.log(search(numbers, target))