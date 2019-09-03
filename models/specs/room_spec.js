const assert = require('assert')
const Room = require('../room')

describe('Room', function () {
  it('should have an area', function () {
    const room1 = new Room(50)
    const actual = room1.area
    assert.strictEqual(actual, 50)
  })
  it('should start not painted', function () {
    const room1 = new Room(50)
    const actual = room1.painted
    assert.strictEqual(actual, false)
  })
  it('should be able to be painted', function () {
    const room1 = new Room(50)
    room1.painted = true
    const actual = room1.painted
    assert.strictEqual(actual, true)
  })
})
