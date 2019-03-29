test("Capitalize the first string", () => {
  expect(capitalize("osi")).toBe("Osi")
  expect(capitalize("osi joseph")).toBe("Osi joseph")
});

test("Reverse a string", () => {
  expect(reverseString("osin")).toBe("niso")
})

test("Test calculator object sum method", () => {
  expect(calculator.add(1,2)).toBe(3)
})

test("Test calculator object subtract method", () => {
  expect(calculator.subtract(1,2)).toBe(-1)
})
