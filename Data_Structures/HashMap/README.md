# Hash Map

## What makes a good Hash Function?

- Fast (i.e. constant time)
- Distributes things uniformly, doesn't cluster
- Deterministic, same input yields same output

If not distributed properly O(1) may approach O(n)

## Dealing with Collisions

- Separate Chaining: at each index (bucket) in our list, we store values using a more sophisticated data structure like an array or linkedList; this method can technically support more pairs than the keyMap length

- Linear Probing: when we find a collision, we search through the list to find the next empty slot; unlike with separate chaining, this allows us to store a single key-value at each index; cannot exceed keyMap length

## Big O

- Insert: O(1)
- Deletion: O(1)
- Access: O(1)
