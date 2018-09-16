# Bell Triangle
In mathematics, the **Bell triangle** is a triangle of numbers analogous to Pascal's triangle, whose values count partitions of a set in which a given element is the largest singleton.

## Construction of Bell triangle
<img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/BellNumberAnimated.gif" />

The Bell triangle may be constructed by placing the number 1 in its first position. After that placement, the leftmost value in each row of the triangle is filled by copying the rightmost value in the previous row. The remaining positions in each row are filled by a rule very similar to that for Pascal's triangle: they are the sum of the two values to the left and upper left of the position.

Thus, after the initial placement of the number 1 in the top row, it is the last position in its row and is copied to the leftmost position in the next row. The third value in the triangle, 2, is the sum of the two previous values above-left and left of it. As the last value in its row, the 2 is copied into the third row, and the process continues in the same way.

## Counting partitions
Bell triangle can be used to cound the total number of partitions of an n-element set.

## Run from terminal
```sh
node bellTriangle n
```
where `n` can be any positive number

### Resources
* https://en.wikipedia.org/wiki/Bell_triangle
* https://en.wikipedia.org/wiki/Partition_of_a_set
