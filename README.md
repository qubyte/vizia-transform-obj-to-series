# obj-to-series

Transform key value objects into x and y series data (with optional metadata) for use with graphing libraries such as plotly

### usage

```javascript
var objToSeries = require('@vizia/obj-to-series')
var transform = objToSeries({
  some: 'metadata'
})

var data = transform({
  'x1': 'y1',
  'x2': 'y2'
})
```

### api

#### `transform = objToSeries(metadata)`

Creates a new transform function that can be passed objects or mapped over streams and arrays

#### `transform(someObj)`

Converts the keys to x values and the values to y values, appending any metadata passed in
