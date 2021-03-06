const Decorator = function () {
  this.paintStock = []
}

Decorator.prototype.addPaintToStock = function (canToAdd) {
  this.paintStock.push(canToAdd)
};

Decorator.prototype.totalLevelsInStock = function () {
  let total = 0
  for (can of this.paintStock) {
    total += can.level
  }
  return total
};

Decorator.prototype.checkEnoughPaint = function (room) {
  if (this.totalLevelsInStock() >= room.area) {
    return true
  } else {
    return false
  }
};

Decorator.prototype.paintRoom = function (room) {
  if (this.checkEnoughPaint(room) === true) {
    room.painted = true
  }
};

module.exports = Decorator
