{
  function countWordOccurences(sentence: string, word: string): number {
    const lowerCaseSentence = sentence.toLowerCase();
    const lowerCaseWord = word.toLowerCase();
    const wordArray = lowerCaseSentence.split(" ");
    return wordArray.filter((w) => w === lowerCaseWord).length;
  }

  console.log(countWordOccurences(" I love typescript", "typescript"));
}
