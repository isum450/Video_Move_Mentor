# Video_Move_Mentor


# 운동 자세 분석 프로그램

## 소개

본 프로젝트는 사용자의 운동 자세를 실시간으로 분석하여 정확한 자세를 유도하고, 운동 효과를 극대화하는 것을 목표로 합니다. OpenCV를 활용하여 영상을 처리하고, TensorFlow를 활용하여 딥러닝 모델을 기반으로 자세를 분석한다.

## 1월 목표
### 서버와 클라이언트 구조 파악을 위한 간단한 채팅 프로그램 구현 (실시간 메시지 전송 기능)
- python 가상 환경 설정
- Node.js 설치 및 npm 설치
- 서버 및 클라이언트 구현
- 데이터베이스

## 채팅 프로그램에 필요한 기술 스택

### 백엔드 기술 스택
- Flask: Python 기반의 간단하고 유연한 웹 프레임워크, 작은 규모의 웹 애플리케이션을 빠르게 개발하는 데 적합, 웹 서버 역할을 함

  ![image](https://github.com/user-attachments/assets/4f55b5a8-1273-4d25-9bac-bc2ffc48e749)

- SQLite: 가볍고 간단한 데이터베이스, 작은 규모의 프로젝트에서 데이터를 저장에 적합, 채팅 메시지와 같은 간단한 데이터를 저장하는 데 사용

  ![image](https://github.com/user-attachments/assets/0da4be49-57f9-457b-ac66-7564ec1da0d2)

- WebSocket: 실시간 양방향 통신 프로토콜입니다. 서버와 클라이언트 간 실시간 데이터 통신

 ![image](https://github.com/user-attachments/assets/06138f70-b237-463e-85ae-a066f1296934)


### 프론트엔드 기술 스택
- React: JavaScript 라이브러리로, 사용자 인터페이스를 효율적으로 개발 가능, 가상 DOM을 이용하여 빠르고 효율적인 렌더링을 제공 ,재사용 가능한 컴포넌트를 만들어 복잡한 UI를 관리 용이함
- Socket.IO: 웹소켓을 쉽게 사용할 수 있도록 도와주는 라이브러리, 서버와 클라이언트 간의 실시간 통신을 위한 이벤트 기반 API 제공, React 애플리케이션에서 WebSocket을 사용하여 서버와 통신
