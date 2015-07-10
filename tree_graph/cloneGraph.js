/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

function UndirectedGraphNode(label) {
    this.label = label;
    this.neighbors = [];   // Array of UndirectedGraphNode
}

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph = function(graph) {
    if(graph === null) return null
    
    var nodes = []
    var map = {}
    
    nodes.push(graph)
    map[graph] = new UndirectedGraphNode(graph.label)
    con
    
    var start = 0
    while(start < nodes.length){
        var head = nodes[start]
        start++
        for(var i = 0; i < head.neighbors.length; i++){
            var neighbor = head.neighbors[i]
            if(!map.hasOwnProperty(neighbor)){
                map[neighbor] = new UndirectedGraphNode(neighbor.label)
                nodes.push(neighbor)
            }
        }
    }
    
    for(var i = 0; i < nodes.length; i++){
        var newNode = map[nodes[i]]
        for(var j = 0; j < nodes[i].neighbors.length; j++){
            newNode.neighbors.push(map[nodes[i].neighbors[j]])
        }
    }
    
    return map[graph]
    
};