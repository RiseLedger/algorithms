# Greedy Algorithm
A greedy algorithm is an algorithmic paradigm that follows the problem solving heuristic of making the locally optimal choice at each stage with the hope of finding a global optimum. In many problems, a greedy strategy does not in general produce an optimal solution, but nonetheless a greedy heuristic may yield locally optimal solutions that approximate a global optimal solution in a reasonable time.

## Minimum Numbers of Coins
Greedy algorithms determine minimum number of coins to give while making change. These are the steps a human would take to emulate a greedy algorithm to represent 36 cents using only coins with values {1, 5, 10, 20}. The coin of the highest value, less than the remaining change owed, is the local optimum. (In general the change-making problem requires dynamic programming to find an optimal solution; however, most currency systems, including the Euro and US Dollar, are special cases where the greedy strategy does find an optimal solution.)

## Problem Statement
We have infinite supply of each of the denominations of [1, 5, 10, 25, 50] valued coins.
What is the minimum number of coins and/or notes needed to make the change?

## Run from terminal
```sh
node greedy n
```
where `n` can be any positive number (ex: 42)
* Output will be the minimum number of coins needed to make the change

### Resources:
* https://en.wikipedia.org/wiki/Greedy_algorithm
* https://www.geeksforgeeks.org/greedy-algorithm-to-find-minimum-number-of-coins/
