# GukakPercussion

# 국립국악원 타악기 웹 애플리케이션 데모 프로젝트

## 프로젝트 개요
이 프로젝트는 **국립국악원**의 의뢰를 받아 **호시미**와 **클라우디오(QLAUDIO)**가 합작하여 전통 국악기를 전자 타악기 형태로 구현하고자 진행한 웹 애플리케이션의 데모 프로젝트입니다.  
전통 국악기의 아름다움과 다양성을 전자화된 인터페이스로 표현하며, 누구나 쉽게 국악기를 체험할 수 있도록 제작되었습니다.

---

## 주요 기능

- **드럼 패드 인터페이스**:  
  웹 상에서 사용자가 패드 형태의 UI를 통해 국악기를 연주할 수 있습니다.
  - 클릭을 통해 패드에서 소리를 출력
  - MIDI 컨트롤러 연결 지원
  - 키보드 자판(Z, X, C 등)을 활용한 연주 가능

- **사용자 인터페이스**:  
  직관적이고 사용자 친화적인 UI로 국악기의 특징을 살렸습니다.
  - 카드 형식으로 악기 정보를 제공
  - "사용법" 섹션에서 상세한 설명과 키보드 매핑 안내

- **반응형 디자인**:  
  다양한 화면 크기(데스크톱, 태블릿, 모바일)에 맞게 UI가 조정됩니다.

---

## 기술 스택

- **Frontend**:
  - HTML5
  - CSS3
  - JavaScript (Vanilla JS)
  - Responsive Design 적용

- **사운드**:
  - 각 국악기 소리 샘플을 `Audio` 객체를 사용해 출력
  - MIDI 장치와의 연동(Web MIDI API)

---

## 주요 국악기

- **북**: 깊고 묵직한 리듬을 제공
- **징**: 강렬하고 장엄한 사운드
- **꽹과리**: 신명나는 소리를 통한 역동성

---

## 설치 및 실행 방법

1. 이 저장소를 클론합니다:
   ```bash
   git clone https://github.com/username/project-name.git
   cd project-name
