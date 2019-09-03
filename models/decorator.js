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

module.exports = Decorator
