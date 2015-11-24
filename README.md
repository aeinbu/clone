# clone.js
A simple Javascript clone method
This method will do either shallow or deep clone to any depth. (Default is deep to infinity)

## Notes
- This clone method DOES NOT handle circular references. So trying to deep clone an object with circulars will just recursivly call itself. (Causing a stack overflow)
- Properties that are specifically made non enumerable, will NOT be copied

## How to use
### Without a module loader
```html
<script src="clone.js"></script>
<script>
  // ...
  var copy = clone(original, depth); // depth is optional, default is infinite
  // ...
</script>
```

### With AMD
```javascript
require(["clone"], function(clone){
  // ...
  var copy = clone(original, depth); // depth is optional, default is infinite
  // ...
});
```

### With CommonJS
```javascript
var clone = require("clone");
// ...
var copy = clone(original, depth); // depth is optional, default is infinite
// ...
```
