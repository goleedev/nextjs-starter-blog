---

title: Abstract Data Structures - Vectors & Queues & Stacks 🗄️
description: Dive deep into abstract data stuctures!
category: TIL
date: 2020-11-26

---


## 🤦 TL; DR

- Abstract Data Structures?

- Vectors
  
- Queues
  - Vectors VS Queues
    
- Stacks
  - Stacks VS Queues

---

## Abstract Data Structures?

An abstract, mathematical model of a collection of data elements including the allowed operations on this collection

---

### Vectors

- A vector is a **1) finite** **2) fixed size** **3) sequential** data collection. 

- Construct new vector of length n = new Vector w(n)

- Operations & Pseudocodes as follows:

  ![vector](vector.png)

---

### Queues

- The fundamental concept underlying a queue is that there is a resource, 

  but it **cannot be immediately accessed**, so there needs to be a wait.

- First In First Out (FIFO)

- Construct new queue = new Queue q

- Operations & Pseudocodes as follows:

  ![queue](queue.png)


##### Vectors VS Queues

![vec-queue](vec-queue.png)

... and all elements are accessible in a vector, but a queue has only two (at most).

---

### Stacks

- A nice analogy to a stack is to think of **a pile or stack of plates**. Because the resource, the plates, can be smashed easily if we're not careful, we **add or remove plates from the pile from the top**.

- Last In First Out (LIFO)

- Construct new stack = new Stack s

- Operations & Pseudocodes as follows:

  ![stack](stack.png)

#### # Stacks VS Queues

![queue-stack](queue-stack.png)

... and

1) a queue is FIFO when a stack is LIFO 

2) two elements, the head and the tail, are accessible in the queue when only one element is accessible called the top of the stack.