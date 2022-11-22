import { render } from "@testing-library/react"

interface TransformationObjectKeys {
  [key: string]: string | undefined
}
interface TransformationProps extends TransformationObjectKeys {
  fromLetter?: string
}

const canReconfigure = (from: string, to: string) => {
  if (typeof from !== "string") throw new Error("from is not a string")
  if (typeof to !== "string") throw new Error("to is not a string")

  const isSameLength = from.length === to.length
  if (!isSameLength) return false

  const hasSameUniqueLetters = new Set(from).size === new Set(to).size
  if (!hasSameUniqueLetters) return false

  const transformation: TransformationProps = {}
  for (let i = 0; i < from.length; i++) {
    const fromLetter = from[i]
    const toLetter = to[i]
    const storedLetter = transformation[fromLetter]
    if (storedLetter && storedLetter !== toLetter) return false

    transformation[fromLetter] = toLetter
  }

  return true
}

describe("canReconfigure", (): void => {
  it("should throw error if first parameter is missing", () => {
    // @ts-ignore: Unreachable code error
    expect((): void => canReconfigure()).toThrow()
  })
  it("should throw error if first parameter is not a string", () => {
    // @ts-ignore: Unreachable code error
    expect((): void => canReconfigure(2)).toThrow()
  })

  it("should throw error if second parameter is not a string", () => {
    // @ts-ignore: Unreachable code error
    expect((): void => canReconfigure("a")).toThrow()
  })

  it("should return a boolean", (): void => {
    expect(typeof canReconfigure("a", "b")).toBe("boolean")
  })

  it("should return false if strings provided have different length", (): void => {
    expect(canReconfigure("abc", "de")).toBe(false)
  })
  it("should return false if strings provided have different length and same unique letters", (): void => {
    expect(canReconfigure("aab", "ab")).toBe(false)
  })

  it("should return false if strings provide have different number of unique letters", (): void => {
    expect(canReconfigure("abc", "ddd")).toBe(false)
  })
  it("should return false if strings has different order of transformation", (): void => {
    expect(canReconfigure("XBOX", "XXBO")).toBe(false)
  })
})
