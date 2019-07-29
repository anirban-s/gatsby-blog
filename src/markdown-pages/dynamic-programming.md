---
title: "Ctrl + F, Ctrl + C, Ctrl + V"
date: "2019-07-27"
---

### Dynamic Programming.

In my opinion, dynamic programming is a very good example of DRY(Do not repeat yourself) principle. It states not to calculate again if the same operation is already performed. Instead, create a lookup and populate the lookup with already calculated values. If the value is required in any future operation, first find it in lookup for its existence. If the value is not present, then perform the operation to calculate the value.

We will discuss with an example of nth fibonacci number by recursive way and then by using dynamic programming to demonstrate the efficiency of the dynamic programing. 