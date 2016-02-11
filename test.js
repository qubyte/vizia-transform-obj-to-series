var test = require('tape')
var objToSeries = require('./')

test('it exports a function', (t) => {
  t.equals(typeof objToSeries, 'function')
  t.end()
})

test('it returns a function', (t) => {
  t.equals(typeof objToSeries(), 'function')
  t.end()
})

test('the return function transforms key value pairs to x and y value arrays', (t) => {
  var transform = objToSeries()
  var input = {
    donny: 1368748,
    donson: 38298929
  }
  var expected = {
    x: ['donny', 'donson'],
    y: [1368748, 38298929]
  }
  var actual = transform(input)
  t.deepEquals(actual, expected)
  t.end()
})

test('the return function adds any metadata to its output', (t) => {
  var metadata = {
    hello: 'world'
  }
  var transform = objToSeries(metadata)
  var input = {
    donny: 1368748,
    donson: 38298929
  }
  var expected = {
    x: ['donny', 'donson'],
    y: [1368748, 38298929],
    hello: 'world'
  }
  var actual = transform(input)
  t.deepEquals(actual, expected)
  t.end()
})
