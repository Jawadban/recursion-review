// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof(obj) === 'number'){
    return obj.toString();
  }
  if (obj === null){
    return "null";
  }
  if (typeof(obj)=== 'boolean'){
    return "" +obj;
  }
  if (typeof(obj) === 'string'){
    return '"'+obj+'"';
  }
  if (Array.isArray(obj) === true){
    return '['+ obj.map(function(item){
      return stringifyJSON(item) ;
    })+']';
  }

    var newObj = [];
    for(var key in obj){
      if (obj[key]=== undefined || typeof(obj)=== 'function'){
        return '{}';
      }else{
        newObj.push ( stringifyJSON(key) + ':' +stringifyJSON(obj[key])); 
      }
    }
    return '{' + newObj + '}';
  
};
