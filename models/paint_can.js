const PaintCan = function (level) {
  this.level = level
}

PaintCan.prototype.checkIfEmpty = function () {
  if (this.level === 0) {
    return true
  }
  else {
    return false
  }
};

module.exports = PaintCan
