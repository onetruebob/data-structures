(function(){
  var makeStack = function(){
    var someInstance = {};

    // Use an object with numeric keys to store values
    var storage = {};
    var size = 0;
    // Implement the methods below
    someInstance.push = function(value){
      storage[size] = value;
      size++;
    };

    someInstance.pop = function(){
      if(size > 0) {
        size--;
        var val = storage[size];
        delete storage[size];
        return val;
      }
      return undefined;
    };

    someInstance.size = function(){
      return size;
    };

    return someInstance;
  };


  var start = Date.now();


  var stack;
  for (var i = 0; i<time; i++) {
    stack = makeStack();
    stack.push(i);
    stack.pop();
  }

  console.log('functional: ' + (Date.now() - start));
})();
