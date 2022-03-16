test("adds 1 + 2 to equal 3", () => {
  const sum = (a, b) => {
    return a + b;
  };
  expect(sum(1, 2)).toBe(3);
});
test("adds 1 + 2 to equal 3", () => {
  const minus = (a, b) => {
    return a - b;
  };
  expect(minus(10, 2)).toBe(8);
});
