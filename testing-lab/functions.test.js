const { returnTwo, greeting, add, multiply, divide, subtract } = require('./functions') //this automatically appeared after typing the first function


test('returns 2', () => {
    expect(returnTwo()).toBe(2)
})

test('greeting to be Jill', () => {
    expect(greeting(`Jill`)).toBe(`Hello, Jill.`) //practice multiple expects?
})

describe('Math functions', () => {

    test(`adds 1 and 2 to equal 3`, () => {
        expect(add(1, 2)).toBe(3)
    })

    test(`multiply 1 and 2 to equal 2`, () => {
        expect(multiply(1, 2)).toBe(2)
    })

    test(`divide 1 and 2 to equal 0.5`, () => {
        expect(divide(1, 2)).toBe(0.5)
    })

    test(`subtract 1 and 2 to equal -1`, () => {
        expect(subtract(1, 2)).toBe(-1)
    })

})

//reference this file for syntax. syntax got easily tetious.

