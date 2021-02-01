describe("middleLetter", () => {
  var word;
  it("returns a single letter that is inputted", () => {
    word = "a";
    expect(middleLetter(word)).toEqual("a");
  })
  it("returns a single capitalised letter that is inputted", () => {
    word = "A";
    expect(middleLetter(word)).toEqual("A");
  })
  it("returns a 2 letter word that is inputted", () => {
    word = "He";
    expect(middleLetter(word)).toEqual("He");
  })
  it("returns middle letter of an inputted word that has an odd no of chars", () => {
    word = "her";
    expect(middleLetter(word)).toEqual("e");
  })
})