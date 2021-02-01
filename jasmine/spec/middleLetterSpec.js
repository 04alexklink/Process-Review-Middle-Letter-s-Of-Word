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
})