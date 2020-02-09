# vuejs 공부하기 !

https://news.ycombinator.com/ \
이 사이트를 클론 코딩 하는 연습을 할 것입니다.
https://github.com/tastejs/hacker-news-pwas/blob/master/docs/api.md
API는 이사이트를 참조 !

사이트 설계의 의미 기획자의 문서를 보고 컴포넌트 기반의 설계를 할줄 알아야함.

여러 페이지에 경우라우터를 설계해야함 .

CLI 2.x vs CLI 3.x

- 명령어

  -2.x : vue init '프로젝트 템플릿 이름 ' '파일 위치'

  -3.x : vue create '프로젝트 이름'

- 웹팩 설정 파일

  -2.x : 노출 O ( webpack.config.js 가 존재)

  -3.x : 노출 x (복잡하기 때문에 라이브러리로 관리해줌)

- 프로젝트 구성

  -2.x : 깃헙의 템플릿 다운로드 (github에 있는 내용을 그대로 다운받아서 사용 )

  -3.x : 플러그인 기반으로 기능 추가

  (npm install 로 설치 , 원하는 feature들을 추가가능, 유연하게 설치)

- ES 6 이해도

  -2.x : 필요 X

  -3.x : 필요 O


- this 자바스크립트에서는 기본적으로 전역 (window)를 가르킨다. 
  ```java script
    function(var a, var b){
      console.log(this);
      return a+b;
    }
    // 전역을 가르킴
    console.log(this); 
    // 전역을 가르킴
  ```
   ```java script
    function Vue(el){
      console.log(this);
      this.el =el;
    }
    // 인스턴스를 정의한 객체 자체를 가르키게 됨
  ```
  비동기 처리에서 this
   ```java script
    console.log(this); //호출 전 =>vue 인스턴스가 호출
    func()
    .then(fuction(response){
      console.log(this) // 호출 후 undefine => 현재 위치에서의 this를 벗어난 this 호출
    })
  ```
  ```java script
    console.log(this); //호출 전 =>vue 인스턴스가 호출
    func()
    .then(response=>
      console.log(this) // 호출 후 undefine => 현재 위치에서의 this를 호출(vue 인스턴스)
    )
    
  ```

- 
