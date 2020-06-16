import Main from './main'

describe('test suite name', () => {
  test('Should perform the following criteria', () => {
   /* Test */

    expect(true).toBe(true)
  })

  test('can accept a target search word', () => {
    const main = new Main()

    expect(main).not.toBeNull()
  })
})
