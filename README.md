# [농산물 정산 가격/실시간 가격 정보](https://agricultural-products-auction.vercel.app/)


[바로가기](https://agricultural-products-auction.vercel.app/)

### 정산 가격
![Kapture 2022-10-03 at 14 56 10](https://user-images.githubusercontent.com/32607413/193510185-c9dead3f-41ae-4efe-9683-f57291e669fb.gif)

### 실시간 경락가격
![Kapture 2022-10-03 at 14 59 51](https://user-images.githubusercontent.com/32607413/193510480-688130cc-6e03-4f03-a877-d92b5c6c44ca.gif)

<br/>

## 프로젝트 소개
<hr>
전국 도매시장 정산 가격 정보와 도매시장 실시간 경락 가격 정보를 제공합니다.

농산물의 대분류, 중분류, 소분류를 모르더라도 단어 검색을 통해

원하는 농산물의 가격정보를 확인할 수 있습니다.

<br/>

## OpenAPI
<hr>
[도매시장 통합 홈페이지](https://at.agromarket.kr/)에서 제공하는 OpenAPI를 사용했습니다.
<br/>

## 기술 스택
<hr>

#### 사용언어
-  TypeScript

#### 라이브러리
- React
- TypeScript 
- MUI 
- Styled-Components

#### 프레임워크
- Next.js

#### 배포
- Vercel

## 실행
<hr>
프로젝트 실행을 위하여 .env 파일을 생성하고 환경변수를 추가해야합니다.

```ts
yarn dev

yarn build
yarn start
```


```ts
NEXT_PUBLIC_API_SETTLEMENT_PRICE = "https://at.agromarket.kr/openApi/price/sale.do"
NEXT_PUBLIC_API_REALTIME_PRICE = "https://at.agromarket.kr/openApi/price/real.do"
NEXT_PUBLIC_API_KEY = {serviceKey}
```

