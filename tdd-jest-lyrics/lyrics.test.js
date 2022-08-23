/**
 * Main test file
 */
const Lyrics = require("./lyrics");

describe("Tests for single lines.", () => {
  test("First line", () => {
    const lineText = `I saw her today at the reception.`;
    expect(new Lyrics().line(0)).toBe(lineText);
  });

  test.skip("Second line", () => {
    const lineText = `A glass of wine in her hand.`;
    expect(new Lyrics().line(1)).toBe(lineText);
  });

  test.skip("Third line", () => {
    const lineText = `I knew she would meet her connection.`;
    expect(new Lyrics().line(2)).toBe(lineText);
  });
});

describe("Tests for a range of lines.", () => {
  test.skip("The first three lines", () => {
    const lineText = `I saw her today at the reception. A glass of wine in her hand. I knew she would meet her connection.`;
    expect(new Lyrics().lines(0, 2)).toBe(lineText);
  });
});
