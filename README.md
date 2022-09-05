# JSDOC 
---
## 문서 이력
09052022 작성

---
## 사칙연산 문서

### [addition](global.html#addition)

### [subtraction](global.html#subtraction)

### [difference](global.html#difference)

---
## 참조
### JSDoc을 사용해 JavaScript 파일 문서화하기  
https://velog.io/@yijaee/JSDoc%EC%9D%84-%EC%82%AC%EC%9A%A9%ED%95%B4-JavaScript-%ED%8C%8C%EC%9D%BC-%EB%AC%B8%EC%84%9C%ED%99%94%ED%95%98%EA%B8%B0

---
## 이하 작업 노트
JSDoc 전역 설치 기준으로 작성

1) JSDoc 설치
```bash
npm install -g jsdoc
```

2) 설정 파일을 수정해 JSDoc 편리하게 사용하기
루트 위치에 [jsdoc.config.json] 파일 생성
특정 확장자를 가지는 모든 파일을 모두 문서로 만들어 주도록 객체 생성

* 기본 설정
기본 공식 문서에 나와있는 기본 설정값은 다음과 같다.

``` json
{
    "plugins": [],
    "recurseDepth": 10,
    "source": {
        "includePattern": ".+\\.js(doc|x)?$",
        "excludePattern": "(^|\\/|\\\\)_"
    },
    "sourceType": "module",
    "tags": {
        "allowUnknownTags": true,
        "dictionaries": ["jsdoc","closure"]
    },
    "templates": {
        "cleverLinks": false,
        "monospaceLinks": false
    }
}
```

1. plugins: 플러그인 사용시 추가하는 부분. 기본값은 빈 상태이다.
2. recurseDepth: -r 명령 행 플래그로 재귀를 사용하면 JSDoc은 10 레벨 깊이의 파일을 검색한다.
3. source.includePattern: js, jsx, jsdoc으로 끝나는 파일만 처리한다.
4. source.excludePattern: 밑줄로 시작하거나 밑줄로 시작하는 디렉토리의 모든 파일은 무시한다.
5. sourceType: ES2015 모듈을 사용하는 코드를 지원한다.
6. tags.allowUnknownTags: JSDoc에서 인식할 수 없는 태그를 사용할 수 있다.
7. tags.dictionaries: 표준 JSDoc 태그와 Closure Compiler 태그가 모두 활성화 된다.
8. templates.cleverLinks, templates.monospaceLinks: 인라인 {@link} 태그는 일반 텍스트로 렌더링 된다.  


3) 폴더 내부 파일 문서화 지원 설정
source 객체 내부에 "include": ["폴더명"], 를 추가한다. 
루트 위치와 특정 폴더 위치를 모두 삽입한다.

``` json
"source": {
    "include": [".", "src", "..."], <--- 추가 구문 예시
    "includePattern": ".+\\.js(doc|x)?$",
    "excludePattern": "(^|\\/|\\\\)_"
},
```


4) README.md 추가하기
문서화는 완료됐는데 문서로 진입하기 전 메인 화면이 텅 비어있으니
README.md를 추가하여 메인화면 구성

* README.md 생성 후 작성

```
# 사칙연산 문서

## [addition](global.html#addition)
...
```


이제 JSDoc이 md 파일을 인식할 수 있도록 작업

* plugins와 opts 수정

```json
"plugins": [
  "plugins/markdown" <--- markdown 인식
],

"opts": {
  "encoding": "utf8", <--- 한글 사용 오류를 막기 위한 인코딩 지정
  "readme": "README.md" <--- 추가한 readme 파일
}
```


5) 최종 JSDoc 출력
``` bash
jsdoc -c jsdoc.config.json .
```

index.html을 열어서 확인