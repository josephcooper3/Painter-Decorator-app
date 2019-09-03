 const assert = require('assert')
 const Decorator = require('../decorator')
 const PaintCan = require('../paint_can')

describe ('Decorator', function () {

  it('should start with an empty paint stock', function () {
    const decorator1 = new Decorator()
    const actual = decorator1.paintStock
    assert.deepStrictEqual(actual, [])
  })

  it('should be able to add a can of paint to stock', function () {
    const decorator1 = new Decorator()
    const can1 = new PaintCan(5)
    decorator1.addPaintToStock(can1)
    const actual = decorator1.paintStock.length
    assert.strictEqual(actual, 1)
  })

  it('should be able to check total levels of paint in stock', function () {
    const decorator1 = new Decorator()
    const can1 = new PaintCan(5)
    const can2 = new PaintCan(10)
    decorator1.addPaintToStock(can1)
    decorator1.addPaintToStock(can2)
    const actual = decorator1.totalLevelsInStock()
    assert.strictEqual(actual, 15)
  })

})
