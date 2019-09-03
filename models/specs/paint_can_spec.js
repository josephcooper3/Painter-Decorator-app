const assert = require('assert')
const PaintCan = require('../paint_can')

describe('PaintCan', function () {

  it('should contain paint', function () {
    const can1 = new PaintCan(5)
    const actual = can1.level
    assert.strictEqual(actual, 5)
  })

  it('should be able to check if it is empty', function () {
    const can2 = new PaintCan(0)
    const actual = can2.checkIfEmpty()
    assert.strictEqual(actual, true)
  })

  it('should be able to check if it is not empty', function () {
    const can1 = new PaintCan(5)
    const actual = can1.checkIfEmpty()
    assert.strictEqual(actual, false)
  })

})
