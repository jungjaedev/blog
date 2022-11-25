---
title: About Big-O notation
date: 2022.11.25
author: Jung jaewon
slogan: 성장하는 개발자
tags: "#Big-O"
category: tech
content: What is Big-O Notation?
thumbnail: https://user-images.githubusercontent.com/69428509/203919309-bf54f68f-774d-43e9-981c-1676ea865de7.jpg
---

# Big-O

## Intro

1부터 n까지 수의 합을 구하는 방법은 여러가지가 있다.

```javascript
function addUpTo1(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
```

```javascript
function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}
```

위 두 함수는 같은 역할을 한다. 여기서 더 좋은 코드는 어느 것인가? <br />
여기서 '좋은 것'의 의미는? 세가지 정도로 생각해 볼 수 있다. <br />

- 더 빠른지?
- 메모리를 덜 사용하는지?
- 읽기 쉬운지?

일단 먼저 더 빠른지(속도)에 대해 알아보겠다. <br />
속도가 빠른지 알기위해 시간을 측정해 볼 수 있다. <br />
실행하는데 걸리는 시간을 어떻게 평가하는 방법은? -> 간단히 확인할 수 있는 방법은 `performance.now()` 이용하는 것이다. <br />

```javascript
let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed : ${(t2 - t1) / 1000} seconds.`);
```

위 코드를 실행시켜 console에서 메시지를 확인해 보자.

```shell
//Output1
Time Elapsed : 0.9035 seconds.
Time Elapsed : 0.8940999999642372 seconds.
```

첫 번째 for문을 이용한 함수를 두 번 연속해서 테스트 해보았다. <br />
서로 다른 결과값을 받음 <br />
이유는?

- 기기에 무엇이 실행되고 있는지에 따라서 다르고(같은 기기에서 다른 결과값을 받음)
- 기기 사양에 따라 다를 수 있음

만약 코드실행 시간이 한시간이 넘게 걸린다면 이를 기다려야할 수도 있음

-> 그러므로 위와같이 실행 시간을 비교하는 것은 좋은 방법이 아님

그럼 시간을 측정하지 않고 어느 코드가 더 좋은지 평가할 수 있는가?
직접 실행하지 않고 특정한 값을 통해 표기하기위해 나오게 된 것이 -> `Big-O`

---

### Big-O 표기법

- 입력된 내용이 늘어날수록 알고리즘에 실행시간이 어떻게 변하는지 설명하는 공식적인 방식
- **입력의 크기와 실행시간의 관계**

#### Examples

```javascript
function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}
```

'addUpTo2'함수는 n의 값에 상관없이 O(1)의 시간복잡도를 갖는다.

```javascript
function addUpTo1(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
```

'addUpTo1'함수는 O(n)의 시간복잡도를 갖는다.

```javascript
function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
```

'printAllPairs'함수는 O(n²)의 시간복잡도를 갖는다.

---

### Big-O 단순화

> Constants Don't Matter

```
O(2n)   -> O(n)
O(500)  -> O(1)
O(13n²) -> O(n²)
```

> Smaller Terms Don't Matter

```
O(n + 10)      -> O(n)
O(1000n + 50)  -> O(n)
O(n² + 5n + 8) -> O(n²)
```

---

### Space Complexity(공간복잡도)

- 입력이 커질수록 알고리즘이 얼마나 많은 공간을 차지하는가.
- 알고리즘 자체가 필요로하는 공간

- Space Complexity in JS
  - 원시타입 대부분은 constant space를 갖는다 -> booleans, numbers, undefined, null
  - Strings은 O(n)의 공간을 차지한다(n은 string의 길이)
  - 참조타입도 대부분(배열, 객체) O(n)이라고 생각함 (배열의 길이나 객체 키의 갯수)

```javascript
// 예시 2
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

// total - number
// i - number
// 입력의 크기와 상관없이 O(1)의 공간은 가지고 있음
```

```javascript
// 예시 2
function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}

// O(n) space
```

---
