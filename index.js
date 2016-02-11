var values = require('object-values')

module.exports = createObjToSeries

function createObjToSeries (metadata) {
  return function objToSeries (obj) {
    var x = Object.keys(obj)
    var y = values(obj)
    return Object.assign({x, y}, metadata)
  }
}
