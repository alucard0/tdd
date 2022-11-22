export const fizzbuzz = (number: number): number | string => {
  if (typeof number !== "number") throw new Error("parameter provided must be a number")
  if (Number.isNaN(number)) throw new Error("parameter provided must be a number")

  const multiples = { 3: "fizz", 5: "buzz" }
  let output = ""

  Object.entries(multiples).forEach(([multiplier, word]): void => {
    if (number % +multiplier === 0) output += word
  })

  return output === "" ? number : output
}
