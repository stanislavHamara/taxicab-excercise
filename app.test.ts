import { parseDirections } from "./app"
import { data } from "./data"

describe("shortest path", () => {
    it.each([
        [["R2", "L3"], 5],
        [["R2", "R2", "R2"], 2],
        [["R5", "L5", "R5", "R3"], 12],
        [data, 254]
    ])('parses input data and calculates the shortest path', (inputData, result) => {
        expect(parseDirections(inputData)).toEqual(result)
    })

    it('errors out if invalid direction is provided', () => {
        expect(() => parseDirections(['M1'])).toThrow('Input data is invalid. "M" is not a valid turn direction')
    })

    it('errors out if invalid distance is provided', () => {
        expect(() => parseDirections(['RF'])).toThrow('Input data is invalid. "RF" does not contain numeric distance value')
    })
})