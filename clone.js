// This method will do either shallow or deep clone to any depth. (Default is deep to infinity)
// It DOESN'T handle circular references, so trying to deep clone an object with circulars will just recursivly call itself. (Causing a stack overflow)
// It will NOT copy properties that are specifically made non-enumerable

;(function(){
  
  function clone(orig, depth){
    "use strict";
  
    // Value types are already copies here, so they don't need to be cloned.
    if(orig !== null
       && typeof orig !== "object"
       && typeof(orig) !== "function"
      ) return orig;
  
    // Make the clone share the same prototype as the original
    var copy = new orig.constructor();
    
    // Copy every enumerable property not from the prototype
    for(var key in orig){
      if(orig.hasOwnProperty(key)){
        if(depth === undefined || depth > 0){
          copy[key] = clone(orig[key], depth === undefined? undefined : depth-1);
        }
        else
        {
          copy[key] = orig[key];
        }
      }
    }
  
    return copy;
  }  

  // Publish the library as an AMD module, CommonJS Module, or to the global window object
  if (typeof define === 'function' && define.amd) {
    define('clone', function() {
      return clone;
    });
  } else if(typeof require === 'function' && typeof exports === 'object' && typeof module === 'object') {
    module.exports = clone;
  } else {
    window.clone = clone;
  }
})();