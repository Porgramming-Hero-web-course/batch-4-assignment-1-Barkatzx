"use strict";
{
    function removeDuplicates(numbers) {
        const uniqueNumbers = [];
        const seenNumbers = new Set();
        for (const num of numbers) {
            if (!seenNumbers.has(num)) {
                uniqueNumbers.push(num);
                seenNumbers.add(num);
            }
        }
        return uniqueNumbers;
    }
    console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
}
