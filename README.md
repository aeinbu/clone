# clone.js
A simple Javascript clone method

## How to use
### Without a module loader
```html
<script src="clone.js"></script>
<script>
  // ...
  var copy = clone(original);
  // ...
</script>
```

### With AMD
```javascript
require(["clone"], function(clone){
  // ...
  var copy = clone(original);
  // ...
});
```

### With CommonJS
```javascript
var clone = require("clone");
// ...
var copy = clone(original);
// ...
```
