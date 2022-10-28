---
title: About CI/CD
date: 2022.02.06
author: Jung jaewon
slogan: 성장하는 개발자
tags: '#CI/CD'
category: tech
content: CI(Continuous Integration) / CD(Continuous Delivery)
thumbnail: https://user-images.githubusercontent.com/69428509/198532289-5637dd8e-abde-4a20-9847-5dae806fefb0.jpg
---

### CI / CD 란?

- 어플리케이션 개발 단계부터 배포때까지 모든 단계들을 자동화를 통해서 조금 더 효율적이고 빠르게 사용자에게 빈번히 배포할 수 있도록 만드는 것

### CI(Continuous Integration) - 지속적인 통합

- 코드 변경사항을 주기적으로 빈번하게 머지해야 한다
  - 작은 단위로 개발해나가고 통합
- 통합을 위한 단계(빌드, 테스트, 머지)의 자동
  - 개발 생산성 향상
  - 문제를 빠르게 발견 (버그 수정 용이)
  - 코드의 퀄리티 향상 → 유닛 테스트

### CD(Continuous Delivery) - 지속적인 제공 or Continuous Depolyment- 지속적인 배포

- CI를 통해 주기적으로 머지된 코드의 변경사항들이 자동으로 빌드, 테스트가 되었다면 배포단계에서 Release를 준비 후
  - 검증 후 최종 (**수동**적으로)배포 - Continuous Delivery
  - 자동으로 사용자에게 배포할 수 있도록 **자동화** - Continuous Depolyment

### CI / CD 파이프라인

CODE → BUILD → TEST → RELEASE → DEPLOY

개발자가 작은단위로 기능을 나누어서 주기적으로 메인 레퍼지토리에 빌드를 하면 → 자동으로 빌드 → 테스트 → 배포준비 →(수동 or 자동) 최종배포

### CI / CD를 위한 Tools

- Jenkins, Buildkite, GitHub Action 등

---
