{
  function sumArray(numbers: number[]): number {
    let total: number = 0;
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    return total;
  }
  console.log(sumArray([1, 2, 3, 4, 5]));
}
