# Derangement
In combinatorial mathematics, a derangement is a permutation of the elements of a set, such that no element appears in its original position.

## Example
Suppose that a professor gave a test to 4 students – A, B, C, and D – and wants to let them grade each other's tests. Of course, no student should grade his or her own test. To count all possible solution you need to count the derangements. For 4 students, the number of derangement will be `9`.

The following formula can be used:

**!n = (n - 1)(!(n - 1) + !(n - 2))**

## Run from terminal
```sh
node derangement n
```
where `n` can be any positive number

### Resource
* https://en.wikipedia.org/wiki/Derangement
* https://www.geeksforgeeks.org/count-derangements-permutation-such-that-no-element-appears-in-its-original-position/
