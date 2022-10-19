---
title: Difference between defer and async
date: 2021.05.16
author: Jung jaewon
slogan: 성장하는 개발자
tags: '#defer #async'
category: tech
content: defer, async 두 옵션의 차이
thumbnail: https://user-images.githubusercontent.com/69428509/196634942-09effd72-7c28-4150-a159-bec77c42df11.png
---

# 💡Async vs Defer

현대의 웹사이트에서는 대부분의 `script`들이 `HTML`보다 "무겁다".
프로젝트가 커질수록 다운로드할 크기가 커져서 페이지가 로드되는 속도가 느려진다. 그만큼 `User`에게 늦게 보여질 것이다.
이를 고치기위해 보통 데이터베이스나 백엔드에서 최적화 처리를 하게 된다. 하지만 이보다 더 쉽게 프론트엔드에서 페이지가 로드되는 속도를 빠르게 처리할 수 있다.
자바스크립트를 어떻게 로딩하느냐에 따라 프로세싱 속도가 달라질 수 있다.

#### How Is HTML Parsed

브라우져가 `HMTL`을 로드하는중에 `<script>...</script>` 태그를 만나면
이 스크립트가 실행이 된 후에 완료가 되면 이어서 `HTML`이 로드가 된다.

```html
<!DOCTYPE html>
<html>
  <head>
    <script>
      // `HTML parser`가 이줄에 오면 `script`가 실행이 됨
      // 실행이 끝나면 다시 남은 `html`을 `parsing`함
    </script>
  </head>
  <body></body>
</html>
```

## `script`태그의 위치에 따른 장단점

### 💽 head에 script가 위치

- 브라우져가 한줄씩 분석 ⇒ head에서 script태그를 만나면 html parsing하는것을 멈추고 불러온다.
  (서버에서 다운 ⇒ 실행) 실행 후에 다음 parsing으로 진행 / 만약에 스크립트 안의 파일이 매우 크고 인터넷이 느리다면 사용자가 보기힘들 것이다.

### 💽 body에 script 위치

- 사용자가 html 정보를 빨리 본다는 장점은 있지만 웹사이트가 자바스크립트에 의존적이라면 사용자가 fetching과 실행시간을 기다려야 페이지를 정상적으로 볼 수 있다.

### 💽 head에 async

> `<script asyn src="main.js"></script>`

- asyn는 불리언타입의 속상값이라 선언하는것만으로도 true로 설정되어서 바로 사용가능하다.
- 병렬로 html parsing과 fetching(다운로드)가 같이 진행이 되다가 다운로드가 완료되면 parsing을 멈추고 js를 실행한다.
  ![](https://images.velog.io/images/jungjaedev/post/08919934-7dfe-43f2-9cf0-78dd6ff5e859/Screen%20Shot%202021-05-15%20at%207.20.44%20PM.png)
- 장점 : 바디 끝보다 fetching이 같이 진행돼어서 다운로드받는 시간만큼 절약된다.

- 단점 : 사용자가 페이지를 보는데 여전히 시간이 걸린다. html이 전부 parsing되기 전에 js가 실행이 되어서 조작하려는 시점에 해당 html 부분이 아직 정의되어있지 않을 수 있다. \* 먼저 다운로드가 된 것부터 실행이됨. 정의된 순서랑 상관없이.
  ![](https://images.velog.io/images/jungjaedev/post/071bb111-ffb2-4d8f-a101-37db4f71c45a/Screen%20Shot%202021-05-15%20at%207.21.04%20PM.png)

### 💽 head에 defer

> `<script defer src="main.js"></script>`

- parsing이 되는동안 js를 다운을 받아놓고,
- parsing이 끝난 후 js가 실행이 된다.
  ![](https://images.velog.io/images/jungjaedev/post/5ce43a1f-9136-4731-850e-a9848f0e0626/Screen%20Shot%202021-05-15%20at%207.21.42%20PM.png)
  ![](https://images.velog.io/images/jungjaedev/post/528cd139-9694-4ace-9638-58e405cbf8dd/Screen%20Shot%202021-05-15%20at%207.21.49%20PM.png)

** 🔔 defer옵션을 쓰는 이유 **:

- _html파일이 parsing되는동안 자바스크립트 파일을 동시에 받기 때문._
- _html이 parsing이 된 다음에 자바스크립트 파일을 실행하기 때문.(같이 로드되지만 실행은 html이 parsing된 이후에)_

> 출처
>
> - [Web Dev Simplified]https://www.youtube.com/watch?v=BMuFBYw91UQ
> - [Scripts: async, defer]https://javascript.info/script-async-defer
> - [드림코딩]https://www.youtube.com/watch?v=tJieVCgGzhs

---
