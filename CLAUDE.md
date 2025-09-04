# CLAUDE.md

이 파일은 Claude Code (claude.ai/code)가 이 저장소에서 작업할 때 참고할 수 있는 가이드를 제공합니다.

## 프로젝트 개요

Product Sale Front-End - 백엔드 API 연동을 포함한 React TypeScript 전자상거래 애플리케이션입니다. Create React App과 TypeScript, Tailwind CSS를 사용하며 상품 브라우징, 사용자 인증, 쇼핑 기능을 포함합니다.

**프로덕션 URL**: http://product-sale.xyz

## 개발 명령어

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (localhost:3000에서 실행)
npm run start

# 프로덕션 빌드
npm run build

# 테스트 실행
npm run test

# 테스트 감시 모드 실행 (기본 동작)
npm run test

# Create React App에서 추출 (되돌릴 수 없음)
npm run eject
```

## 아키텍처 & 구조

### 핵심 기술 스택
- **React 18.2** with TypeScript (~3.2.1)
- **Tailwind CSS** with custom design system colors
- **CSS Modules** for component-specific styling
- **React Router v6** for routing
- **Axios** for API calls
- **Styled Components v6** for additional styling
- **Swiper v11** for carousel functionality

### 프로젝트 구조
```
src/
├── components/          # 재사용 가능한 UI 컴포넌트
│   ├── auth/           # 인증 컴포넌트
│   ├── common/         # 공통 컴포넌트 (Button, Modal, Input, etc.)
│   ├── home/           # 홈페이지 컴포넌트
│   ├── layout/         # 레이아웃 컴포넌트 (Header, Footer)
│   ├── myPage/         # 사용자 프로필 컴포넌트
│   └── table/          # 테이블 컴포넌트
├── pages/              # 페이지 컴포넌트
│   ├── auth/           # 로그인/회원가입 페이지
│   └── mypage/         # 사용자 프로필 페이지
├── types/              # TypeScript 타입 정의
├── utils/              # 유틸리티 함수
├── css/                # 전역 스타일
└── assets/             # 정적 자산 (이미지, 아이콘)
```

### API 연동
- **프록시 설정**: `/api`, `/login`, `/test` 경로의 모든 API 호출은 `https://api.product-sale.xyz`로 프록시됨
- **설정**: `src/setupProxy.js`에서 `http-proxy-middleware`를 사용하여 설정
- **HTTP 클라이언트**: API 통신에 Axios 사용

### TypeScript 설정
- **Base URL**: `./src`가 절대 경로로 설정됨
- **Target**: ES6 컴파일
- **Strict Mode**: TypeScript 엄격 검사 활성화
- **Module Resolution**: Node.js 스타일 모듈 해석

### 디자인 시스템
- **Tailwind Config**: Figma 디자인 시스템에서 추출한 커스텀 색상 팔레트로 확장됨
- **색상**: Neutral, blue (primary), success, warning, error, red, purple, green, yellow, magenta 팔레트
- **폰트**: Poppins (주요), Inter (보조) 커스텀 폰트 크기 및 가중치 포함
- **컴포넌트 네이밍**: 컴포넌트는 대문자로 시작해야 하고 파일명과 일치해야 함

### 스타일링 접근법
- **주요**: 커스텀 디자인 토큰이 포함된 Tailwind CSS 클래스
- **보조**: 컴포넌트별 스타일을 위한 CSS Modules (`.module.css` 파일)
- **레거시**: 일부 컴포넌트는 Styled Components v6 사용
- **전역**: 리셋 및 전역 스타일을 위한 `src/css/` 파일

### 상태 관리
- **쿠키**: 클라이언트 사이드 상태 지속성을 위해 `react-cookie` 사용
- **인증**: 쿠키 기반 세션 관리
- **로컬 상태**: React hooks를 사용한 컴포넌트 레벨 상태

### 주요 기능
- 사용자 인증 (로그인/회원가입)
- 상품 브라우징 및 검색
- 사용자 프로필 및 리뷰
- 주소 관리
- 장바구니 기능
- 모바일 지원 반응형 디자인

## 개발 가이드라인

### 컴포넌트 개발
- 모든 새 컴포넌트에 TypeScript 사용
- 기존 CSS Modules 패턴을 따라 스타일링
- 재사용 가능한 컴포넌트는 `src/components/common/`에 배치
- **REM 단위 사용**: 모든 크기, 여백, 패딩은 rem 단위로 설정
- **Tailwind 색상**: tailwind.config.js에 정의된 커스텀 색상 팔레트만 사용
- Import 경로: `src/` 기본 디렉토리에서 절대 import 사용

### API 연동
- 모든 백엔드 호출은 `setupProxy.js`를 통해 프록시됨
- HTTP 요청에 Axios 사용
- react-cookie 라이브러리를 통한 쿠키 인증 처리

### 스타일링 규칙
- **단위**: px 대신 rem 단위 사용 (접근성 및 확장성을 위해)
- **색상**: tailwind.config.js의 커스텀 색상 팔레트만 사용 (neutral, blue, success, warning, error, red, purple, green, yellow, magenta)
- **폰트**: font-poppins, font-inter와 커스텀 폰트 크기 (title-20, title-16, body-base, caption) 사용
- **간격**: Tailwind의 spacing 시스템 활용 (p-4, m-2, gap-4 등)

### 테스팅
- Jest 및 React Testing Library 설정됨
- 테스트는 기본적으로 감시 모드에서 실행
- 코드베이스의 기존 테스트 패턴을 따름