# Breadth-First Search
Breadth-first search (BFS) is an algorithm for traversing or searching tree or graph data structures. It starts at the tree root (or some arbitrary node of a graph, sometimes referred to as a 'search key'), and explores all of the neighbor nodes at the present depth prior to moving on to the nodes at the next depth level.

## Key points
* BFS tells you if there's a path from A to B.
* If there's a path, BFS will find the shortest path.
* Queue are used for implementing BFS.

## Implementation
<img width="200" src="graph.png" />

Above graph will be used as an example to show how BFS works.

**Input:**
- Adjacency list
- Start Vertex
- End Vertex

**Output:**
- `Shortest path` from start vertext to end vertex
- `false` in case if there is no such path

### Resources
* https://en.wikipedia.org/wiki/Breadth-first_search
* https://graphonline.ru/en/
