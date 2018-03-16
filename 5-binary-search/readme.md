# Binary Search
In computer science, binary search, also known as half-interval search,[1] logarithmic search,[2] or binary chop,[3] is a search algorithm that finds the position of a target value within a sorted array.[4][5] Binary search compares the target value to the middle element of the array; if they are unequal, the half in which the target cannot lie is eliminated and the search continues on the remaining half until it is successful. If the search ends with the remaining half being empty, the target is not in the array.

## Procedure
Given an array A of n elements with values or records A0, A1, ..., An−1, sorted such that A0 ≤ A1 ≤ ... ≤ An−1, and target value T, the following subroutine uses binary search to find the index of T in A.

1. Set L to 0 and R to n − 1.
2. If L > R, the search terminates as unsuccessful.
3. Set m (the position of the middle element) to the floor (the largest previous integer) of (L + R) / 2.
4. If Am < T, set L to m + 1 and go to step 2.
5. If Am > T, set R to m − 1 and go to step 2.
6. Now Am = T, the search is done; return m.

## Run from terminal
```sh
node binarySearch '[list]' n
```
where `[list]` is array of sorted number and `n` is the number you want to search.
* If n matches with an element, return the index.
* If n doesn’t match with any of elements, return -1.

### Resources:
* https://en.wikipedia.org/wiki/Binary_search_algorithm
