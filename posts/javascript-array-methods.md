---
title: "[Javascript] Array Methods"
date: 2021.06.06
author: Jung jaewon
slogan: 성장하는 개발자
tags: "#Array_Methods"
category: tech
content: about javascript array methods
thumbnail: https://user-images.githubusercontent.com/69428509/199263252-e688a744-b4e5-4f95-9397-96e30ce65a1c.jpg
---

## 📒 Essential Array Methods

### 💾 join(separator?: string): string;

- #### Adds all the elements of an array separated by the specified separator string.

```javascript
//  Q. make a string out of an array
const fruits = ["mango", "melon", "peach"];
const result = fruits.join();
const result2 = fruits.join(" ");

console.log(result); // mango,melon,peach
console.log(result2); // mango melon peach
console.log(typeof result); // "string"
```

---

### 💾 split()

- #### Split a string into substrings using the specified separator and return them as an array.

```javascript
// Q. make an array out of a string
const fruits = "cherry,melon,peach";
const result = fruits.split(",");

console.log(result); // ["cherry", "melon", "peach"]
```

---

### 💾 reverse()

- #### Reverses the elements in an array in place.

```javascript
// Q. result should be: [5, 4, 3, 2, 1]
const arr = [1, 2, 3, 4, 5];
const result = arr.reverse();

console.log(result); // [5, 4, 3, 2, 1]
console.log(arr); // [5, 4, 3, 2, 1]
```

---

### 💾 slice()

- #### Returns a copy of a section of an array.
- #### @param end The end index of the specified portion of the array. This is exclusive of the element at the index 'end'.

```javascript
// Q. Returns a section of an array.
const array = [1, 2, 3, 4, 5];
const result = array.slice(0, 2);

console.log(result); // [1, 2]
console.log(array); // [1, 2, 3, 4, 5]
```

---

> ```javascript
> class Student {
> ```

    constructor(name, age, enrolled, score) {
    	this.name = name;
      	this.age = age;
      	this.enrolled = enrolled;
      	this.score = score;
    }

}
const students = [
new Student('A', 29, true, 45),
new Student('B', 28, false, 80),
new Student('C', 30, true, 90),
new Student('D', 40, false, 66),
new Student('E', 18, true, 88),
]

````
---

### 💾 find()
- #### Returns the value of the first element in the array where predicate is true, and undefined otherwise.

```javascript
// Find a student with the score 90
const result = students.find((student) =>
	 student.score === 90);

console.log(result); // Student {name: "C", age: 30, enrolled: true, score: 90}
````

---

### 💾 filter()

- #### Returns the elements of an array that meet the condition specified in a callback function.

```javascript
const result = students.filter((student) => student.enrolled);

console.log(result); // [Student, Student, Student]
```

---

### 💾 map()

- #### Calls a defined callback function on each element of an array, and returns an array that contains the results.

```javascirpt
// make an array containing only the students' score
const result = students.map((student) => student.score);

console.log(result); // [45, 80, 90, 66, 88]
```

---

### 💾 some()

- #### Determines whether the specified callback function returns true for any element of an array.

```javascript
// check if there is a student with the score lower than 50
const result = students.some((student) => student.score < 50);

console.log(result); // true

// use every()
const result2 = !students.every((student) => student.score >= 50);

console.log(result2); // true
```

---

### 💾 reduce()

- #### Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

```javascirpt
// compute students' average score
const result =  students.reduce((prev, curr) => prev + curr.score, 0)

console.log(result / students.length); // 73,8
```

---

### 📀 combine javascript methods together

```javascript
//make a string containing all the scores bigger than 50
// result should be: '80, 90, 66, 88'
const result = students
  .map((student) => student.score)
  .filter((score) => score >= 50)
  .join();

console.log(result); // 80,90,66,88
```

### 📀 sort()

- #### Sorts an array in place.
- #### This method mutates the array and returns a reference to the same array.

```javascript
// sorted in ascending order
// result should be: '45, 66, 80, 88 90'
const result = students
  .map((student) => student.score)
  .sort((a, b) => a - b)
  .join();

console.log(result); // 45,66,80,88,90
```

> 출처 : MDN
> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
> 드림코딩 by 엘리
> https://www.youtube.com/watch?v=3CUjtKJ7PJg&list=LL&index=1&t=12s
> w3schools
> https://www.w3schools.com/js/js_array_methods.asp

---
