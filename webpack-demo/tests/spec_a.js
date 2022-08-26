// import generateColor from "../src/color";

describe("word", function () {
  it("should add text to the body", function () {
    expect(createelement()).toEqualto("Webpack Examples!!");
  });
});

describe("color", function () {
  it("should return a color", () => {
    expect(generateColor()).toEqualto(color);
  });
});
