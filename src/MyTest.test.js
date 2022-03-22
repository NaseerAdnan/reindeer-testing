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
  expect(all[3]).toBe("Commuter train");
});
test("where from city", () => {
  const whereCities = [
    { city: "Helsinki", country: "Finland", iso2: "FI" },
    { city: "Tampere", country: "Finland", iso2: "FI" },
    { city: "Turku", country: "Finland", iso2: "FI" },
    { city: "Seinäjoki", country: "Finland", iso2: "FI" },
    { city: "Rovaniemi", country: "Finland", iso2: "FI" },
  ];
  const all = whereCities.map((cities) => cities.city);
  expect(["Helsinki", "Tampere", "Turku", "Seinäjoki", "Rovaniemi"]).toEqual(
    expect.arrayContaining(all)
  );
  expect(all[0]).toBe("Helsinki");
  expect(all[1]).toBe("Tampere");
  expect(all[2]).toBe("Turku");
  expect(all[3]).toBe("Seinäjoki");
  expect(all[4]).toBe("Rovaniemi");
});
test("distination city", () => {
  const destination = [
    { city: "Rovaniemi", country: "Finland", iso2: "FI" },
    { city: "Seinäjoki", country: "Finland", iso2: "FI" },
    { city: "Turku", country: "Finland", iso2: "FI" },
    { city: "Tampere", country: "Finland", iso2: "FI" },
    { city: "Helsinki", country: "Finland", iso2: "FI" },
  ];
  const all = destination.map((cities) => cities.city);
  expect(["Rovaniemi", "Seinäjoki", "Turku", "Tampere", "Helsinki"]).toEqual(
    expect.arrayContaining(all)
  );
  expect(all[0]).toBe("Rovaniemi");
  expect(all[1]).toBe("Seinäjoki");
  expect(all[2]).toBe("Turku");
  expect(all[3]).toBe("Tampere");
  expect(all[4]).toBe("Helsinki");
});
