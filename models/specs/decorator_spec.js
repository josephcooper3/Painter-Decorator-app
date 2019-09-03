 const assert = require('assert')
 const Decorator = require('../decorator')
 const PaintCan = require('../paint_can')
 const Room = require('../room')

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

  it('should be able to check if it has enough paint for a room', function functionName() {
    const decorator1 = new Decorator()
    const can1 = new PaintCan(5)
    const can2 = new PaintCan(10)
    decorator1.addPaintToStock(can1)
    decorator1.addPaintToStock(can2)
    const room1 = new Room(15)
    actual = decorator1.checkEnoughPaint(room1)
    assert.strictEqual(actual, true)
  })

  it('should be able to check if it does not have enough paint for a room', function functionName() {
    const decorator1 = new Decorator()
    const can1 = new PaintCan(5)
    const can2 = new PaintCan(10)
    decorator1.addPaintToStock(can1)
    decorator1.addPaintToStock(can2)
    const room2 = new Room(20)
    actual = decorator1.checkEnoughPaint(room2)
    assert.strictEqual(actual, false)
  })

})
