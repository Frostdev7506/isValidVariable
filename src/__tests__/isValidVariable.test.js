const isValidVariable = require("../index");

test("should return false for undefined", () => {
  expect(isValidVariable(undefined)).toBe(false);
});

test("should return false for null", () => {
  expect(isValidVariable(null)).toBe(false);
});

test("should return false for empty string", () => {
  expect(isValidVariable("")).toBe(false);
});

test("should return true for non-empty string", () => {
  expect(isValidVariable("hello")).toBe(true);
});

test("should return false for NaN", () => {
  expect(isValidVariable(NaN)).toBe(false);
});

test("should return true for finite number", () => {
  expect(isValidVariable(42)).toBe(true);
});

test("should return false for empty object", () => {
  expect(isValidVariable({})).toBe(false);
});

test("should return true for non-empty object", () => {
  expect(isValidVariable({ key: "value" })).toBe(true);
});

test("should return false for empty array", () => {
  expect(isValidVariable([])).toBe(false);
});

test("should return true for non-empty array", () => {
  expect(isValidVariable([1, 2, 3])).toBe(true);
});

test("should return true for function", () => {
  expect(isValidVariable(() => {})).toBe(true);
});

test("should return true for symbol", () => {
  expect(isValidVariable(Symbol("symbol"))).toBe(true);
});

test("should return true for bigint", () => {
  expect(isValidVariable(BigInt(123))).toBe(true);
});

test("should return true for boolean true", () => {
  expect(isValidVariable(true)).toBe(true);
});

test("should return true for boolean false", () => {
  expect(isValidVariable(false)).toBe(true);
});
