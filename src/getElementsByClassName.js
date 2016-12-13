// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var nodes = [];
  function classes(node) {
    if (_.contains(node.classList, className)) {
      nodes.push(node);
    }
    _.each(node.childNodes, function(child){
      classes(child);
    });
  }
  classes(document.body);
  return nodes;
};
