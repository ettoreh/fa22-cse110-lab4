<h1> Part 1. A Quick Introduction...
---

**var declaration**

1. What is printed by line 9? If the code returns an error, explain why. 

`values added:  20`

2. What is printed by line 13? If the code returns an error, explain why. 

`final result:  20`

**let declaration**

3. What is printed by line 9? If the code returns an error, explain why. 

`values added:  20`

4. What is printed by line 13? If the code returns an error, explain why. 

```js
console.log('final result: ', result)
                                  ^

ReferenceError: result is not defined
```
Explanation: when you use let to create a variable, this variable only exist inside the loop where it is created (and deleted then), so in this case result doesn't in the same space as the command console.log()

**const declaration**

5. What is printed by line 9? If the code returns an error, explain why. 

```js
result = num1 + num2;
               ^

TypeError: Assignment to constant variable.
```

Explanation: when you use const to create a variable, this variable can't be modify atfer, so you can't assign a new value to a constant variable.

6. What is printed by line 13? If the code returns an error, explain why.

```js
console.log('final result: ', result)
                                  ^

ReferenceError: result is not defined
```

Explanation: as for question 4, the constant varibale only exist in the loop and not in the space as console.log()
