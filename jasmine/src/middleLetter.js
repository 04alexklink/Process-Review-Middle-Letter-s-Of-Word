function middleLetter(word) {
  _isString(word);
  if (word.length > 2) {
    if (word.length % 2 === 1) {
      var midLetterIndexPosition = Math.floor(word.length / 2)
      return word[midLetterIndexPosition];
    }
    else {
      var midLettersIndexPosition = (word.length / 2)
      return word.substring(midLettersIndexPosition - 1, midLettersIndexPosition + 1);
    }
  }
  return word;
}

function _isString(word) {
  if (typeof(word) !== "string") throw new Error("Please input a string.");
}