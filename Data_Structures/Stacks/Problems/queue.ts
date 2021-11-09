/*

https://leetcode.com/problems/implement-queue-using-stacks/

Implement a first in first out (FIFO) queue using only two stacks.
The implemented queue should support all the functions of a normal queue
(push, peek, pop, and empty).

Implement the MyQueue class:

void push(int x) Pushes element x to the back of the queue.
int pop() Removes the element from the front of the queue and returns it.
int peek() Returns the element at the front of the queue.
boolean empty() Returns true if the queue is empty, false otherwise.

*/

import { Stack, StackElement } from "../stack";

class MyQueue {
  public top: StackElement;
  public bottom: StackElement;
  private stackOne: Stack;
  private stackTwo: Stack;

  constructor() {
    this.top = null;
    this.bottom = null;
    this.stackOne = new Stack();
    this.stackTwo = new Stack();
  }

  push(val: any) {
    if (this.top === null) {
      this.stackTwo.push(val);
      this.top = this.stackTwo.top;
      this.bottom = this.stackTwo.bottom;
      return;
    }

    const newElement = new StackElement(val);

    // Migrate stackTwo to stackOne
    while (!this.stackTwo.isEmpty()) {
      this.stackOne.push(this.stackTwo.pop());
    }

    this.stackTwo.push(val);
    this.bottom = this.stackTwo.bottom;

    while (!this.stackOne.isEmpty()) {
      this.stackTwo.push(this.stackOne.pop());
    }

    this.top = this.stackTwo.top;
  }

  pop() {
    if (!this.top) return null;
    if (this.top === this.bottom) {
      this.top = null;
      this.bottom = null;
      return this.stackTwo.pop();
    }
    this.top = this.top.next;
    return this.stackTwo.pop();
  }

  peek() {
    return this.top?.val;
  }

  isEmpty(): boolean {
    return this.top ? false : true;
  }

  print() {
    let vals = [];
    let currentNode = this.top;
    while (currentNode) {
      vals.push(currentNode.val);
      currentNode = currentNode.next;
    }
    console.log(vals);
  }
}

const queue = new MyQueue();

queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);
queue.push(6);

queue.print();

console.log(queue.peek());
console.log(queue.isEmpty());

console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());

console.log(queue.isEmpty());
