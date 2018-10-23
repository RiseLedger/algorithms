# Queue
In computer science, a queue is a particular kind of abstract data type (ADT) or collection in which the entities in the collection are kept in order and the principal (or only) operations on the collection are the addition of entities to the rear terminal position, known as enqueue, and removal of entities from the front terminal position, known as dequeue.

This makes the queue a First-In-First-Out (FIFO) data structure.

## Queue implementation
There are several efficient implementations of FIFO queues. An efficient implementation is one that can perform the operations—enqueuing and dequeuing—in O(1) time.

* Linked list
  * A doubly linked list has O(1) insertion and deletion at both ends, so is a natural choice for queues.
  * A regular singly linked list only has efficient insertion and deletion at one end. However, a small modification—keeping a pointer to the last node in addition to the first one—will enable it to implement an efficient queue.
* A deque implemented using a modified dynamic array

### Resources
* https://en.wikipedia.org/wiki/Queue_(abstract_data_type)
