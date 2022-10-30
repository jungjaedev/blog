---
title: Time-Complexity
date: 2022.10.30
author: Jung jaewon
slogan: 성장하는 개발자
tags: '#Time-Complexity'
category: tech
content: What is Time Complexity?
thumbnail: https://user-images.githubusercontent.com/69428509/198883883-1c4c0fcd-b4a6-429d-9d2a-f55e2e2a7359.jpg
---

> 알고리즘은 문제 해결을 위한 일련의 과정

### 좋은 알고리즘이란?

- 원하는 출력을 생성되는가
- 효율적으로 실행이 되는가..? -> 메모리를 적게 사용하고, 실행시간 짧은 것
- 재사용하기 좋고, 다른사람이 이해하기쉬운 코드인가

### 시간복잡도 & 공간복잡도

#### 시간복잡도(Time Complexity)

- 문제를 푸는데 걸리는 시간(실행 시간)과 연관되어있음
- 실행 시간(running time) -> 함수나 알고리즘 수행 시 필요한 스텝 수

#### 공간복잡도 (Space Complexity)

- 문제를 푸는데 사용되는 메모리 사용량과 연관
- _메모리 기술의 발전으로 중요도가 낮아짐_

#### 표기법

##### 실행 시간과 메모리 사용량에 따라

- Big-O
  - 상한(upper bound), 최악의 경우, 얼마나 오래걸리고 얼마나 많은 메모리를 사용하는지
- Big-Omega
  - 하한(lower bound), 최선의 경우, 어느정도 실행시간과 메모리사용
- Big-Theta
  - 상한과 하한의 교집합, 평균을 표현할 때

#### Big-O를 가장 많이 사용

- 평균값 구하는 연산이 복잡하고, 최악의 경우 어느정도까지 나빠질지 표현해주는 것이 신뢰도가 높기 때문임.
- **최악의 경우도 고려하여 대비한다**는 표현이 맞는 것 같음.

#### 시간복잡도 계산

- 연산의 실행 횟수 계산

```javascript
function solution(n) {
  //...
  for (let i = 0; i < 10000; i++) {
    // ...
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 2 * n; j++) {
      //...
    }
  }
  return answer;
}
```

위 경우
`= 2n² + 10000n`이 되는데 여기서 계수를 지우고 가장 차수가 높은 항을 남기면 `O(n²)`으로 표현할 수 있다.

- 𝑂(1) : constant complexity
  - 입력값이 증가하더라도 시간이 늘어나지 않는다.
- 𝑂(log n) : logarithmic complexity
  - ex) Binary Search Tree
- 𝑂(n) : linear complexity
  - 입력값이 증가함에 따라 시간도 같은 비율로 증가
- 𝑂(n²) : quadratic complexity
  - ex) 1일때 1초, 2일때 4초, 5일때 25초가 걸리는 알고리즘의 복잡도
- 𝑂(n^3)
- 𝑂(2^n)
- 𝑂(n!)

### 생각해 볼 내용.

- 최악의 상황이란?
- 평균과 차이가 크게나는 최악의 상황이 있다면 이를 고려하는것은 비효율적인 것이 아닌가...?

---
