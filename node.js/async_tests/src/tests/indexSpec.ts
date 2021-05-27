import countries from "../index";

describe("Function getCountry", () => {
  it("should get basic data of the country Canada", async () => {
    const data = await countries.getCountry("canada");
    expect(data.capital).toEqual("Ottawa");
    expect(data.region).toEqual("Americas");
    expect(data.numericCode).toEqual("124");
  });
});

describe("Function getRegionCapitals", () => {
  it("should get list of capitals of ASIA countries", async () => {
    const data = await countries.getRegionCapitals("asia");
    expect(data.length).toBeGreaterThan(10);
    expect(data).toContain("Beijing");
  });
});

describe("Function getRegionalBlocCountries", () => {
  it("should get list of ASEAN countries", async () => {
    const data = await countries.getRegionalBlocCountries("asean");
    expect(data.length).toEqual(10);
    expect(data).toContain("Viet Nam");
    expect(data).toContain("Singapore");
    expect(data).toContain("Malaysia");
    expect(data).toContain("Thailand");
  });
});
