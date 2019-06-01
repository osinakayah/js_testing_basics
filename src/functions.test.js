const {calculator, reverseString, capitalize, encryption, decryption, anaylze} = require('./function')

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

test("Test calculator object divide method", () => {
  expect(calculator.divide(1,2)).toBe(0.5)
})

test("Test calculator object multiply method", () => {
  expect(calculator.multiply(1,2)).toBe(2)
})

test("Test Caser encryption algorithm", () => {
  expect(encryption("attack at dawn", 1)).toBe("buubdl bu ebxo")
})

test("Test Caser decryption algorithm", () => {
  expect(decryption("buubdl bu ebxo", 1)).toBe("attack at dawn")
});

test("Test Caser keeps the same case for encryption", () => {
  expect(encryption("Aa", 1)).toBe("Bb");
})
test("Test Caser keeps the same case for decryption", () => {
  expect(decryption("bB", 1)).toBe("aA")
})

test("Test Caser puntuation for encryption", () => {
  expect(encryption("Aa,", 1)).toBe("Bb,");
})
test("Test Caser puntuation for decryption", () => {
  expect(decryption("buubdl bu ebxo,", 1)).toBe("attack at dawn,")
})

test("Test Analyze array", () => {
  expect(anaylze([1,8,3,4,2,6])).toEqual({average: 4, min: 1, max: 8, length: 6})
})

describe("caesarCipher", ()=>{
  it("Encodes the received string using a key between 0 and 25", ()=>{
    expect(encryption("attack at dayn",5)).toBe("fyyfhp fy ifds")
  });
  it("Keeps the original case", ()=>{
    expect(encryption("ATTACK AT DAWN",5)).toBe("FYYFHP FY IFBS")
  });
  it("Works with strings that use . as separator",()=>{
    expect(encryption("ATTACK.AT.DAWN",5)).toBe("FYYFHP.FY.IFBS")
  })

  it("DEcodes the received string using a key between 0 and 25", ()=>{
    expect(decryption("fyyfhp fy ifds",5)).toBe("attack at dayn")
  });
  it("Keeps the original case", ()=>{
    expect(decryption("FYYFHP FY IFBS",5)).toBe("ATTACK AT DAWN")
  });
  it("Works with strings that use . as separator",()=>{
    expect(decryption("FYYFHP.FY.IFBS",5)).toBe("ATTACK.AT.DAWN")
  })
});

describe("caesarCipher", ()=>{
  it("Encodes the received string using a key between 0 and 25", ()=>{
    expect(encryption("attack at dawn",5)).toMatch("fyyfhp fy ifbs")
  });
  it("Keeps the original case", ()=>{
    expect(encryption("ATTACK AT DAWN",5)).toMatch("FYYFHP FY IFBS")
  });
  it("Works with strings that use . as separator",()=>{
    expect(encryption("ATTACK.AT.DAWN",5)).toMatch("FYYFHP.FY.IFBS")
  })
});
