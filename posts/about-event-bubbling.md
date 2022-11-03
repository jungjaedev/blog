---
title: About Event Bubbling
date: 2022.11.02
author: Jung jaewon
slogan: 성장하는 개발자
tags: "#Event_Bubbling"
category: tech
content: What is Event bubbling?
thumbnail: https://user-images.githubusercontent.com/69428509/199515923-2074e7c8-e3ca-4edc-8f0c-43b84fc979a3.jpg
---

## 이벤트 버블링

#### 자식에서 발생한 이벤트가 해당 태그의 부모로, 또 그 부모로 연속해서 전달되는 특성

- 자식에서 부모 방향으로 타깃이벤트부터 document 객체를 만날때까지, 각 요소에 할당된 핸들러가 동작한다.

```html
<style>
  body * {
    margin: 10px;
    border: 1px solid red;
  }
</style>

<form onclick="alert('form')">
  FORM
  <div onclick="alert('div')">
    DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>
```

![스크린샷 2022-11-02 오후 11 35 29](https://user-images.githubusercontent.com/69428509/199517789-160e1b0d-e9a2-4e87-8f9c-b4b854aa0aa7.png)

위와 같이 되어있을 때 `P`를 클릭하면

1. `<p>`에 할당된 `onclick`핸들러가 동작함
2. 부모 태그인 `<div>`에 할당된 `onclick`핸들러가 동작함
3. 또 그 부모인 `<form>`에 할당된 `onclick`핸들러가 동작함
4. `document` 객체를 만날 때까지, 각 요소에 할당된 핸들러가 동작

위와 같이 동작하기 때문에 `P를 클릭했을 때` : `p` -> `div` -> `form` 순서로 3개의 alert창이 뜬다.

이러한 흐름을 `이벤트 버블링`이라고 함.

> 하지만 모든 이벤트가 버블링이 되는 것은 아니다.
> focus 이벤트처럼 버블링이 되지 않는 이벤트가 있음.

#### 버블링 중단하기

- 버블링의 중단이 필요한 경우 `event.stopPropagation()`을 할당해주는 방법이 있다.

---

내용 추가 예정

---
