# Graph
A Graph is a non-linear data structure consisting of nodes and edges. The nodes are sometimes also referred to as vertices and the edges are lines or arcs that connect any two nodes in the graph. More formally a Graph can be defined as,

> A Graph consists of a finite set of vertices(or nodes) and set of Edges which connect a pair of nodes.

Graphs are used to solve many real-life problems. Graphs are used to represent networks. The networks may include paths in a city or telephone network or circuit network. Graphs are also used in social networks like linkedIn, Facebook. For example, in Facebook, each person is represented with a vertex(or node). Each node is a structure and contains information like person id, name, gender, locale etc.

## Representations
Different data structures for the representation of graphs are used in practice:

**Adjacency list**
> Vertices are stored as records or objects, and every vertex stores a list of adjacent vertices. This data structure allows the storage of additional data on the vertices. Additional data can be stored if edges are also stored as objects, in which case each vertex stores its incident edges and each edge stores its incident vertices.

<img width="200" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Simple_cycle_graph.svg/300px-Simple_cycle_graph.svg.png" />

The graph pictured above has this adjacency list representation:

a adjacent to b, c<br />
b adjacent to a, c<br />
c adjacent to a, b

**Adjacency matrix**
> A two-dimensional matrix, in which the rows represent source vertices and columns represent destination vertices. Data on edges and vertices must be stored externally. Only the cost for one edge can be stored between each pair of vertices.

<img width="200" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/6n-graph2.svg/375px-6n-graph2.svg.png" />

The convention followed here (for undirected graphs) is that each edge adds 1 to the appropriate cell in the matrix, and each loop adds 2. This allows the degree of a vertex to be easily found by taking the sum of the values in either its respective row or column in the adjacency matrix.

Above graph will have the following adjacency matrix:
```js
[
  2, 1, 0, 0, 1, 0,
  1, 0, 1, 0, 1, 0,
  0, 1, 0, 1, 0, 0,
  0, 0, 1, 0, 1, 1,
  1, 1, 0, 1, 0, 0,
  0, 0, 0, 1, 0, 0,
]
```

**Incidence matrix**
> A two-dimensional Boolean matrix, in which the rows represent the vertices and columns represent the edges. The entries indicate whether the vertex at a row is incident to the edge at a column.

<img width="200" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Labeled_undirected_graph.svg/250px-Labeled_undirected_graph.svg.png" />

Above graph will have the following incidence matrix:
```js
[
  1, 1, 1, 0,
  1, 0, 0, 0,
  0, 1, 0, 1,
  0, 0, 1, 1,
]
```

**Edge lists**
> One simple way to represent a graph is just a list, or array, of |E| edges, which we call an **edge list.** To represent an edge, we just have an array of two vertex numbers, or an array of objects containing the vertex numbers of the vertices that the edges are incident on.

<img width="200" src="https://ka-perseus-images.s3.amazonaws.com/21cd2731928c7c13057eee000e3697de82ccc058.png" />

Above graph will have the following edge lists:
```js
[
  [0,1], [0,6], [0,8], [1,4], [1,6], [1,9], [2,4], [2,6], [3,4], [3,5], [3,8], [4,5], [4,9], [7,8], [7,9]
]
```


### Resources
* https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/
* https://en.wikipedia.org/wiki/Graph_(abstract_data_type)
* https://en.wikipedia.org/wiki/Adjacency_list
* https://en.wikipedia.org/wiki/Adjacency_matrix
* https://en.wikipedia.org/wiki/Incidence_matrix
* https://www.khanacademy.org/computing/computer-science/algorithms/graph-representation/a/representing-graphs

