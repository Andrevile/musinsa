# 무신사 FE 과제

<a href="http://musinsa-andrevile.s3-website.ap-northeast-2.amazonaws.com/">배포 링크</a>

## 실행 방법

### 1. 패키지 설치

```
yarn install
```

### 2. 빌드

```
yarn build
```

### 3. 실행

```
yarn build:test
```

http://localhost:8080/

## 스토리북 실행

```
yarn storybook
```

http://localhost:6006/

## 과제 구성

언어는 타입스크립트를 사용했습니다. 타입스크립트를 통하여, 개발단계에서 조기에 에러들을 발견할 수 있기에, 개발 초기에는 순수 자바스크립트보다는 생산성이 낮을 수도 있겠지만, 개발 진행이 되고 나서의 생산성과, 프로덕트의 안정성을 위한것을 비교해보았을 때, 후자가 월등히 좋기에 선택하였습니다.
React를 사용하여 과제를 진행하였고, 번들링은 Webpack을 사용했습니다.
Webpack은 가장 일반적인 번들링 도구 중 하나이고, 여러가지 플러그인과 설정, 크로스 브라우징을 위한 바벨 설정까지 지원하기 때문에 안정적이라고 생각하여 Webpack을 사용하였습니다.
스타일링은 emotion 라이브러리를 사용하였고, props로 css를 넘길 수 있는 방식과 styled-component 방식 모두 택할 수 있기 때문에, 보다 자유로우며, JSX에서 스타일링을 바로 확인 할 수 있으므로, css파일의 클래스명과 비교하거나, styled-component로 작성된 컴포넌트를 찾지 않아도 되서 작은 단위의 컴포넌트에서는
css props를 이용한 방식이 개발 생산성에 도움이 된다고 생각했습니다.
또한, 과제를 진행하면서, 컴포넌트 단위를 먼저 개발하고 화면을 구성하기 위해, 스토리북을 도입해서 공통 컴포넌트에 대한 UI 테스트를 진행하였습니다.

## 프로젝트 구조

```
src
 ┣ components
 ┃ ┣ common
 ┃ ┃ ┣ icons
 ┃ ┃ ┃ ┣ CloseIcon.tsx
 ┃ ┃ ┃ ┣ EmptyIcon.tsx
 ┃ ┃ ┃ ┣ LoadingIcon.tsx
 ┃ ┃ ┃ ┣ RefreshIcon.tsx
 ┃ ┃ ┃ ┗ SearchIcon.tsx
 ┃ ┃ ┣ ChipButton.stories.ts
 ┃ ┃ ┣ ChipButton.tsx
 ┃ ┃ ┣ Container.tsx
 ┃ ┃ ┣ Empty.tsx
 ┃ ┃ ┣ Image.tsx
 ┃ ┃ ┣ LoadingSpinner.tsx
 ┃ ┃ ┣ PageLayout.tsx
 ┃ ┃ ┣ Tag.stories.ts
 ┃ ┃ ┣ Tag.tsx
 ┃ ┃ ┗ Typography.tsx
 ┃ ┣ context
 ┃ ┃ ┗ FilterWithSearchProvider.tsx
 ┃ ┣ header
 ┃ ┃ ┣ AppBar.tsx
 ┃ ┃ ┣ AutoComplete.tsx
 ┃ ┃ ┣ Filter.tsx
 ┃ ┃ ┣ Search.tsx
 ┃ ┃ ┗ index.tsx
 ┃ ┗ product
 ┃ ┃ ┣ Product.tsx
 ┃ ┃ ┣ ProductCard.stories.ts
 ┃ ┃ ┣ ProductCard.tsx
 ┃ ┃ ┣ ProductGrid.tsx
 ┃ ┃ ┣ ProductInfo.tsx
 ┃ ┃ ┗ ProductThumbnail.tsx
 ┣ constants
 ┃ ┣ filter.ts
 ┃ ┗ product.ts
 ┣ hooks
 ┃ ┣ common
 ┃ ┃ ┣ useFetching.ts
 ┃ ┃ ┣ useFilter.ts
 ┃ ┃ ┣ useIntersect.ts
 ┃ ┃ ┗ useSearch.ts
 ┃ ┗ product-list
 ┃ ┃ ┗ useProductListService.ts
 ┣ pages
 ┃ ┗ ProductListPage.tsx
 ┣ static
 ┃ ┗ assets
 ┃ ┃ ┗ Spinner.jpg
 ┣ stories
 ┃ ┣ Button.stories.ts
 ┃ ┣ Button.tsx
 ┃ ┣ Header.stories.ts
 ┃ ┣ Header.tsx
 ┃ ┣ Page.stories.ts
 ┃ ┣ Page.tsx
 ┃ ┣ button.css
 ┃ ┣ header.css
 ┃ ┗ page.css
 ┣ types
 ┃ ┣ assets.d.ts
 ┃ ┣ emotions.d.ts
 ┃ ┣ filter.ts
 ┃ ┗ product.ts
 ┣ utils
 ┃ ┣ apis.ts
 ┃ ┣ debounce.ts
 ┃ ┣ formatingPrice.ts
 ┃ ┗ getKeywordRegex.ts
 ┣ App.tsx
 ┣ GlobalStyle.tsx
 ┣ index.html
 ┗ index.tsx
```
