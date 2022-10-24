---
title: About Linux File Permissions
date: 2021.08.23
author: Jung jaewon
slogan: 성장하는 개발자
tags: '#Linux #chmod'
category: tech
content: 리눅스 파일과 폴더의 권한(Permission)
thumbnail: https://user-images.githubusercontent.com/69428509/197549039-ac4c67d0-3514-40f8-bd0b-b60f4cd7ad04.jpg
---

## Permissions

![](https://images.velog.io/images/jungjaedev/post/d4d47630-cec1-4dfe-882f-f1c51cd1bc42/Screen%20Shot%202021-08-23%20at%203.44.55%20PM.png)

> `Shell`에서 `ls -l`을 통해 디렉토리 정보를 확인할 수 있다.
> 가장 처음에 확인할 수 있는 권한에 대해 알아보자.

![](https://images.velog.io/images/jungjaedev/post/b3f41ed2-7bf9-4c8f-b25c-0e7a3d4d45a8/rwxrwx.png)

### 📒File Type

** `–` : regular file **

- `touch`명령어로 만들어진 파일, 가장 흔하게 볼 수 있는 파일 타입

** `d` : directory **

- 디렉토리

** `c` : character device file **

- Character and block device files allow users and programs to communicate with hardware peripheral devices

** `b` : block device file **

- Block devices are similar to character devices. They mostly govern hardware as hard drives, memory, etc.

** `s` : local socket file **

- Local domain sockets are used for communication between processes. Generally, they are used by services such as X windows, syslog and etc.

**`p` : named pipe **

- Similarly as Local sockets, named pipes allow communication between two local processes.

** `l` : symbolic link **

- With symbolic links an administrator can assign a file or directory multiple identities. Symbolic link can be though of as a pointer to an original file.

> **❗️permission 수정에 대해 알아보기전에 `권한 그룹`에 대해 알아보자.**

- _owner_ : 파일의 owner에 대한 권한
- _group_ : 그룹에 대한 권한
- _all users_ : 모든 사용자에 대한 권한

### 📒read(읽기), write(생성, 삭제, 수정), execute(실행) 권한 수정

#### 🔍Symbolic method

- 레퍼런스 : `chmod [옵션] [레퍼런스][연산자][권한] [파일또는폴더]`

```shell
chmod a+rw myfile
```

위와같이 입력한다면 `myfile`의 권한은 `rw-rw-rw`로 바뀜

---

#### 🔍Absolute form

- 레퍼런스 : `chmod [옵션] [소유자권한][그룹권한][그외사용자권한] [파일또는폴더]`
  ![](https://images.velog.io/images/jungjaedev/post/ad9269f7-5a7b-4132-bd9d-f4c8b327b4ad/numerical.png)

```shell
chmod 751 myfile
```

위와같이 입력한다면

- user : read, write, execute
- group : read, execute
- others : execute

> 출처

- https://linuxconfig.org/identifying-file-types-in-linux
- https://www.linux.com/training-tutorials/understanding-linux-file-permissions/
- https://kb.iu.edu/d/abdb

---
