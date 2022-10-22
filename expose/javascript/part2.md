<h1>Part 2. A Little More of a Challenge...
---

1. What will happen at line 12 and why? If the code causes an error, explain why. 

`3` - because it's the last value of i

2. What will happen at line 12 and why? If the code causes an error, explain why. 

`150` - because it's the last value of discountedPrice

3. What will happen at line 12 and why? If the code causes an error, explain why. 

`150` - becasue it's the last value of finalPrice

4. What will this function return? Give a brief explanation why. If the code causes an error, explain why. 

`[ 50, 100, 150 ]` 

Explanation: the function was supposed to compute a discount of 50% on the list [100, 200, 300], what is right

5. What will happen at line 12 and why?  If the code causes an error, explain why.

```js
console.log(i)
            ^

ReferenceError: i is not defined
```

Explanation: the variable let i is only define inside the loop and deleted then, this is why i is not defined in the console.log() space

6. What will happen at line 13 and why? If the code causes an error, explain why.

```js
console.log(discountedPrice)
                ^

ReferenceError: discountedPrice is not defined
```

Explanation: the variable let discountedPrice is only define inside the loop and deleted then, this is why discountedPrice is not defined in the console.log() space

7. What will happen at line 14 and why? If the code causes an error, explain why.

`150` - finalPrice is define outside the loop so even id it's a let variable, the last value of finalPrice is saved inside function

8. What will this function return? Give a brief explanation. If the code causes an error, explain why.

`[ 50, 100, 150 ]`

Explanation: the function was supposed to compute a discount of 50% on the list [100, 200, 300], what is right, even if we used let varibale the list we want to return is define inside the function (not the loop) and at each iteration we saved the discountedPrice value in the list before the value was deleted be the next iteration

9. What will happen at line 11 and why? If the code causes an error, explain why.

```js
console.log(i)
            ^

ReferenceError: i is not defined
```

Explanation: the variable let i is only define inside the loop and deleted then, this is why i is not defined in the console.log() space

10.  What will happen at line 12 and why? If the code causes an error, explain why. 

`3` - the length of prices, saved as a constant as the beginning of the function

11. What will this function return? Give a brief explanation. If the code causes an error, explain why.

`[ 50, 100, 150 ]`

Explanation: the function was supposed to compute a discount of 50% on the list [100, 200, 300], what is right, even if we used constant varibale inside the loop, we saved the value in the list and create a new constant value inplace of the previous one at the next iteration

**Data Types**

12.  Given the above Object, write the notation for: 
    1. Accessing the value of the name property in the student object
    `student.name`

    2. Accessing the value of the Grad Year property in the student object
    `student["Grad Year"]`

    3. Calling the function for the greeting property in the student object
    `student.greeting()`

    4. Accessing the name property of the object in the Favorite Teacher property in student
    `student["Favorite Teacher"].name`

    5. Access index zero in the array of the courseLoad property of the student object
    `student.courseLoad[0]`

**Basic Operators & Type Conversion**

13.  Arithmetic
    1. ‘3’ + 2
    `'32'`              + operator with a string return a string even if the string was a nuber

    1. ‘3’ - 2           
    `1`                 - operator with string number will return a number

    1. 3 + null         
    `3`                 null is considered as 0 with + operator and numbers

    1. ‘3’ + null      
    `'3null`            null is considered as a string with + operator and string

    1. true + 3
    `4`                 true is considered as 1 with + operator 

    1. false + null
    `0`                 false and null are considered as 0 with + operator

    1. '3' + undefined
    `3undefined`        + operator and a string make every other value as string

    1. '3' - undefined
    `NaN`               - operator works only for number even string number

14. Comparision
    1. ‘2’ > 1
    `true`                      considering numerics 1 is inferior to 2

    1. ‘2’ < ‘12’
    `false`                     false you can't make the diff of two strings
    
    1. 2 == ‘2’
    `true`                      both value are 2 so there are equal

    1. 2 === ‘2’
    `false`                     the data type is different so there aren't exactly equal

    1. true == 2
    `false`                     true could be equal to 1 but not to 2

    1. true === Boolean(2)      every value return by boolean is true
    `true`

15. Explain the difference between the == and === operators.

The operator == check if values are 'equal'. The operator === check if value are 'exactly equal' which means if both value and data type are equal.

**Loops**

16. Given the above Object, write a for...in loop that will iterate through it and print out the value of the property if the property starts with the letter r, or if the value of that property is an odd number.  

`JS file part2-question16.js`

**Functions**

17. If the function above is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result. (This should be in your part2.md). Here we are passing in a function as a parameter, however we can also return a function from another function just as easily, you're encouraged to play around with callbacks as they are used heavily in frontend JS development. 

`[ 2, 4, 6 ]`

Explanation: the main function call a array and a function which multiply a number by 2, the main function iterate on the array and use the callback function to multply every number by two and stored them in a new array.

**setInterval(), setTimeout(), clearTimeout()**

18. The above program only prints out the time once when executed. Modify this code such that the program prints out the time every second. 

`JS file part2-question18.js`

19.  What is the output of the above code?

```js
1
4
2
3
```

