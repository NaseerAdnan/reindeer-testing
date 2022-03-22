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
test("test train models", () => {
  const trainmodals = [
    { model: "IC140" },
    { model: "IC142" },
    { model: "IC53" },
    { model: "Commuter train" },
  ];
  const all = trainmodals.map((train) => train.model);
  expect(["IC140", "IC142", "IC53", "Commuter train"]).toEqual(
    expect.arrayContaining(all)
  );
  expect(all[0]).toBe("IC140");
  expect(all[1]).toBe("IC142");
  expect(all[2]).toBe("IC53");
  expect(all[3]).toBe("ommuter train");
});
