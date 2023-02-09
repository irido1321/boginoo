beforeAll(async () => {
     console.log("im logging out before all of those functions execute");
});
afterAll(async () => {
     console.log("im logging out after all of those functions executed");
});

const helloName = (name) => {
     return `hello ${name}`;
};

describe("Our very first test", () => {
     it("first taste case", async () => {
          const a = 2;
          const b = "4";
          const c = 7;
          console.log("im the logging of first case");
          const result = a + b + c;
          expect(result).toBe("247");
     });
});

it("second taste case", async () => {
     const result = helloName("javkhaa");
     expect(result).toBe("hello javkhaa");
});
it("third tast case", async () => {
     const result = helloName("javkhaa");
     expect(result).toBe("hello javkhaa");
});
