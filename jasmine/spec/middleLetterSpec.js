describe("middleLetter", () => {
  var word;
  it("returns a single letter that is inputted", () => {
    word = "a";
    expect(middleLetter(word)).toEqual("a");
  })
  it("returns a 2 letter word that is inputted", () => {
    word = "He";
    expect(middleLetter(word)).toEqual("He");
  })
  it("returns middle letter of an inputted word that has an odd no of chars", () => {
    word = "her";
    expect(middleLetter(word)).toEqual("e");
  })
  it("returns 2 middle letters if inputted word length > 2 and chars no is even", () => {
    word = "smiley";
    expect(middleLetter(word)).toEqual("il");
  })
  describe("Edge cases", () => {
    it("should throw an error if a string is not inputted", () => {
      array = [];
      expect(function() {middleLetter(array)}).toThrowError("Please input a string.")
    })
  })
})