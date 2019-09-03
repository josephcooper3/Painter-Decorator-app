const PaintCan = function (level) {
  this.level = level
}

PaintCan.prototype.checkIfEmpty = function () {
  if (this.level === 0) {
    return true
  } else {
    return false
  }
};

PaintCan.prototype.empty = function () {
  if (this.level > 0) {
    this.level = 0
  } else {
    return "This can is already empty"
  }
};

module.exports = PaintCan
