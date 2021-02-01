function middleLetter(word) {
  _isString(word);
  if (word.length > 2) {
    if (_isOddLengthWord(word)) {
      return word[middleLetterIndex(word)];
    }
    else {
      return middle2LettersOfEvenLengthWord(word)
    }
  }
  return word;
}

function _isString(word) {
  if (typeof(word) !== "string") throw new Error("Please input a string.");
}

function _isOddLengthWord(word) {
  return (word.length % 2 === 1)
}

function middleLetterIndex(word) {
  return Math.floor(word.length / 2)
}

function middle2LettersOfEvenLengthWord(word) {
  var midLettersIndexPosition = (word.length / 2)
  return word.substring(midLettersIndexPosition - 1, midLettersIndexPosition + 1);
}