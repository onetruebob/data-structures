var Graph = function(){
  // Node format _nodes =
  // {'puppies': {edges: {kittens: true}}, 'kittens': {edges: {puppies: true}}}
  this._nodes = {};
  this._nodeCount = 0;

};

var Node = function(){
  this.edges = {};
};

Graph.prototype.addNode = function(newNodeId, toNodeId){
  if (this._nodeCount === 1) {
    toNodeId = Object.keys(this._nodes)[0];
  }
  this._nodes[newNodeId] = new Node();
  if (this._nodeCount > 0) {
    this.addEdge(newNodeId, toNodeId);
  }
  this._nodeCount++;
};

Graph.prototype.contains = function(nodeId){
  return this._nodes.hasOwnProperty(nodeId);
};

Graph.prototype.removeNode = function(nodeId){
  for(var key in this._nodes[nodeId].edges){
    delete this._nodes[key].edges[nodeId];
  }

  delete this._nodes[nodeId];
  this._nodeCount--;


};

Graph.prototype.getEdge = function(fromNodeId, toNodeId){
  return this._nodes[fromNodeId].edges.hasOwnProperty(toNodeId);
};

Graph.prototype.addEdge = function(fromNodeId, toNodeId){
  var fromNode = this._nodes[fromNodeId];
  var toNode = this._nodes[toNodeId];

  fromNode.edges[toNodeId] = true;
  toNode.edges[fromNodeId] = true;
};

Graph.prototype.removeEdge = function(fromNodeId, toNodeId){
  var fromNode = this._nodes[fromNodeId];
  var toNode = this._nodes[toNodeId];

  delete fromNode.edges[toNodeId];
  delete toNode.edges[fromNodeId];

  if(Object.keys(fromNode.edges).length === 0) {
    this.removeNode(fromNodeId);
  }
  if(Object.keys(toNode.edges).length === 0) {
    this.removeNode(toNodeId);
  }
};

Graph.prototype.forEachNode = function(func) {
  for(var key in this._nodes) {
    if(this._nodes.hasOwnProperty(key)) {
      func(key);
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
