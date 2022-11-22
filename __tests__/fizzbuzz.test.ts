import { render } from "@testing-library/react"

/*
Es un programa que al pasarle un número:
 - Muestra "fizz" si es múltiplo de 3.
 - Muestra "buzz" si es múltiplo de 5.
 - Muestra "fizzbuzz" sis es múltiplo de 3 y 5.
 ' Muestra el número si no es multiplo de ninguno de los anteriores.
*/

const fizzbuzz = (number: number): number => {
  if (typeof number !== "number") throw new Error("parameter provided must be a number")
  if (Number.isNaN(number)) throw new Error("parameter provided must be a number")

  return number
}

describe("fizzbuzz", (): void => {
  it("should be a function", (): void => {
    expect(typeof fizzbuzz).toBe("function")
  })
  it("should throw if not number is provides as parameter", (): void => {
    // @ts-ignore: Unreachable code error
    expect((): void => fizzbuzz("5")).toThrow()
  })
  it("should throw a specific error message if not number is provided as parameter", (): void => {
    // @ts-ignore: Unreachable code error
    expect((): void => fizzbuzz("5")).toThrow("parameter provided must be a number")
  })
  it("should throw a specific error message if not number is provided", (): void => {
    // @ts-ignore: Unreachable code error
    expect((): void => fizzbuzz(NaN)).toThrow("parameter provided must be a number")
  })

  it("should return 1 if number provided is 1", () => {
    expect(fizzbuzz(1)).toBe(1)
  })

  it("should return 2 if number provided is 2", () => {
    expect(fizzbuzz(2)).toBe(2)
  })
})