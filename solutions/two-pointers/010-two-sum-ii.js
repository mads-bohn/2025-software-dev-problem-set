var twoSum = function(numbers, target) {
    let n = numbers.length;
    let j = n-1;
    for (let i=0; i<=j; i++) {
        while (numbers[i] + numbers[j] > target) {
            j--;
        }
        if (numbers[i] + numbers[j] == target) {
            return [i+1, j+1];
        }
    }
};