# Heap's Algorithm
Heap’s algorithm is used to generate all permutations of n objects. The idea is to generate each permutation from the previous permutation by choosing a pair of elements to interchange, without disturbing the other n-2 elements.

1. The algorithm generates (n-1)! permutations of the first n-1 elements, adjoining the last element to each of these. This will generate all of the permutations that end with the last element.
2. If n is odd, swap the first and last element and if n is even, then swap the i-th element (i is the counter starting from 0) and the last element and repeat the above algorithm till i is less than n.
3. In each iteration, the algorithm will produce all the permutations that end with the current last element.

**Input:**
- Array List of Items

**Output:**
- Array List of Permutations

### Resources
* https://www.geeksforgeeks.org/heaps-algorithm-for-generating-permutations/
* https://en.wikipedia.org/wiki/Heap%27s_algorithm
