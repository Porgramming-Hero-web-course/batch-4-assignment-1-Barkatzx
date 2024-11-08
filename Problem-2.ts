{
  function removeDuplicates(numbers: number[]): number[] {
    const uniqueNumbers: number[] = [];
    const seenNumbers: Set<number> = new Set();

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
