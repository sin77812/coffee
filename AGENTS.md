# AGENTS.md — NEEDCOFY (Black & White / Magazine-like Minimal Website)

## Project Goal
- 브랜드: **NEEDCOFY** (초기엔 폰트 로고만 사용)
- 톤앤매너: **도시적**, 담백한 문장, 실제 카페 웹사이트의 문체. 이모지 사용 금지.  
- 컬러: **블랙·화이트 단색**(필수) — 회색은 보조선·설명 텍스트에만 제한적으로 사용.  
- 인상: “홈페이지” 느낌 최소화, **잡지(매거진) 한 페이지 같은 구성**(에디토리얼 그리드, 대담한 여백/타이포/이미지 배치).
- 구조: 메인 원페이지에서 핵심 스토리/정보를 **거의 완결**. 하위 페이지만 `/menu`, `/about` 유지.
- 지도: **Google Maps 임베드**.
- 예약/대관: **가능**(업계 평균 가이드 문구, 수치·요금은 변수로 처리).
- 자산: **사진 미보유** → 임시 **스톡 이미지/영상** 사용.
- SNS: 인스타그램 연동(버튼은 “Instagram” 텍스트 대신 **인스타 로고 아이콘**만).

---

## Deliverables (files)
- `index.html`                 : 메인(원페이지, 에디토리얼 레이아웃)
- `menu.html`                  : 전체 메뉴(카테고리/원산지·알레르기 표기)
- `about.html`                 : 브랜드 스토리/철학/팀/로스팅 소개
- `assets/css/tokens.css`      : 컬러·타입·스페이싱·그리드 토큰
- `assets/css/base.css`        : 리셋, 베이스 타이포, 접근성 규칙
- `assets/css/components.css`  : 버튼/카드/미디어그리드/라이트박스/배지/테이블
- `assets/js/main.js`          : 헤더 스크롤 전환, 인터섹션 리빌, 라이트박스, 폼 검증, GMap init
- `assets/images/*`            : 임시 스톡(히어로/인테리어/제품), WebP+JPG(3 breakpoints)
- `assets/video/hero.mp4`      : **짧은 무음 루프 영상**(6–10초)
- `seo/metadata.json`          : title/description/OG(1200×630)
- `seo/robots.txt`, `seo/sitemap.xml`
- `legal/privacy.md`           : 문의 폼용 개인정보 고지(간결)
- `copy/home.md`               : 메인 섹션 카피(ko)
- `README.md`                  : 빌드/배포(무빌드 정적), 이미지 규격

---

## Editorial Layout (Magazine-like)
- **Grid**: 12-column, container 1200px, **gutter 32px**, 양옆 margin 넓게(≥ 96px).  
- **Whitespace**: 섹션 상/하 패딩 128px(모바일 72px).  
- **Typo Scale**: 14/16/18/24/36/48/72. H1는 72 또는 뷰포트 기반(clamp).  
- **Typefaces**:  
  - Display(선택1): **Playfair Display**(세리프) / 대체: “Cormorant Garamond”  
  - Display(선택2): Grotesk류 **Bebas Neue**(초간결 룩)  
  - Body: **Inter** 또는 **Pretendard**
  - 프로젝트 시작 시 둘 중 하나로 **일관 선택**(세리프 채택 시 본문은 산세리프 유지)
- **Imagery**: 풀블리드 컷, 캡션은 1줄. 디바이더(가늘고 긴 선)로 지면 느낌 강화.  
- **Motion**: 페이드/상하 16–24px 슬라이드, 180–220ms. 과한 패럴랙스 금지.

---

## Design Tokens (`tokens.css`)
```css
:root {
  --bg: #FFFFFF;
  --ink: #0A0A0A;         /* 본문/헤드라인 */
  --ink-weak: #6D6D6D;    /* 보조설명 */
  --line: #EAEAEA;        /* 구분선 */
  --focus: #111111;       /* 포커스 링(블랙 계열) */

  --container: 1200px;
  --gutter: 32px;
  --radius: 12px;

  --fs-14: 0.875rem;
  --fs-16: 1rem;
  --fs-18: 1.125rem;
  --fs-24: 1.5rem;
  --fs-36: 2.25rem;
  --fs-48: 3rem;
  --fs-72: 4.5rem;
}
Page Structure (index.html)
Hero

짧은 무음 루프 영상(6–10초, 1920×1080, ≤3MB) → assets/video/hero.mp4

헤드라인 1줄 + 서브 1줄 + CTA 1개(“오시는 길” 또는 “예약 문의”)

영상 위 타이포 가독성 확보(흰 배경 전제라면 영상 톤은 다크/하이콘트라스트 권장)

Signature

카드 2–3개.

Hand Drip: 싱글 오리진 / 오늘의 추천

NEED House Blend: 경매 프리미엄 원두 직접 블렌딩, 원두 판매(200g 단위)

(선택) Espresso Bar: 클래식 레시피, 온도/샷 타임 표준화

“전체 메뉴 보기” → /menu

Roasting / Ingredients

경매 참여·소싱·블렌딩 철학.

티/디저트도 프리미엄 기준(산지·제조 파트너·보관 규칙)로 2–3문단.

Interior / Space

화이트 큐브 컨셉의 인테리어 스톡 컷 6–9장, 라이트박스.

좌석/콘센트/와이파이/흡연 불가 배지(커스텀 아이콘).

Location & Hours

Google Map 임베드(Place ID/좌표 변수).

영업시간·휴무, 주차/대중교통 안내.

Reservation / Private Event

업계 평균 가이드 문구(구체 요금·최소 인원·시간은 변수로 남김).

문의 폼(이름/연락처/희망일시/인원/메모 + 동의 체크).

Footer

상호/사업자/주소/연락처, Instagram 아이콘 링크, 저작권.

Copy Seeds (copy/home.md 초안·ko)
Hero
H1: 블랙과 화이트, 취향은 선명해집니다.

Sub: 경매로 들여온 프리미엄 원두를 자체 블렌딩해, 균형 잡힌 한 잔을 만듭니다.

CTA: 오시는 길 또는 예약 문의

Signature
Hand Drip: 오늘의 싱글 오리진. 로스팅 포인트와 추출 레시피는 바에 표기합니다.

NEED House Blend: 경매 원두를 선별해 매장에서 직접 블렌딩합니다. 원두는 200g 단위로 판매합니다.

Espresso Bar: 클래식 비율을 유지합니다. 우유의 단맛과 샷의 질감을 정교하게 맞춥니다.

Roasting / Ingredients
원두: 산지와 로터리의 특성이 드러나도록, 로스팅 후 안정화 기간을 지켜 제공합니다.

티: 산지 표기가 명확한 리프 티를 사용합니다. 블렌딩 티는 원료 성분과 비율을 투명하게 안내합니다.

디저트: 보관과 온도를 관리해 질감을 유지합니다. 당도는 음료와의 페어링을 기준으로 설계합니다.

Interior / Space
밝은 백색, 간결한 선, 군더더기 없는 동선. 잡지 한 장처럼 여백이 많은 공간을 지향합니다.

Reservation / Private Event
대관 및 사전 예약이 가능합니다. 최소 이용 시간과 인원, 이용료는 일정에 따라 조정됩니다. 간단한 목적과 규모를 알려주시면 맞춤으로 안내드립니다.

Menu / About (하위 페이지 카피 가이드)
/menu.html: 카테고리(커피/티/디저트), 원산지·알레르기 표기, 추천 배지(“바리스타 추천” 등 커스텀 아이콘).

/about.html: NEEDCOFY의 소싱 기준, 블렌딩 방식, 품질 관리(보관/온도/수율), 팀 소개(간단 프로필).

Components (components.css)
Button(Outline/Fill, 흑백만), Card, MediaGrid, Lightbox, Badge, Table(Hours), Form

상태: hover/active/disabled + 명확한 포커스 링

아이콘: 모든 아이콘은 커스텀 단색 라인아이콘(이모지 금지). 인스타는 공식 로고 단색 버전.

Interactions (main.js)
헤더: 상단 투명 → 스크롤 시 솔리드(화이트 배경, 얇은 선)

인터섹션 진입 시 섹션 타이틀 페이드업(200ms), 이미지 지연 로딩

갤러리 라이트박스, 폼 유효성(빈값/형식) 체크

Google Maps iframe or JS API(Place ID는 .env 또는 data-* 속성으로 주입)

SEO & A11y
H1=Hero 1회, 섹션 H2 체계화.

OG 이미지(1200×630): 흑백 배경에 타이포만.

명도 대비: 본문 7:1 이상, 버튼 4.5:1 이상.

키보드 포커스, 라벨/aria, 대체텍스트 충실.

Performance Budget
LCP ≤ 2.5s(모바일 4G), CLS ≤ 0.1

초기 뷰 이미지 합 ≤ 400KB, 전체 이미지 합 ≤ 1MB 목표

hero.mp4 ≤ 3MB, muted/loop/autoplay(모바일 자동재생 조건 충족)

Placeholders / Variables
GOOGLE_MAP_PLACE_ID 또는 LAT/LNG

영업시간/휴무일/주차/대중교통

예약·대관: 최소시간, 최소인원, 이용료, 운영시간대

Instagram 링크(아이콘만)

Stock Assets Prompts (임시 가이드)
Hero Video:
“White cube gallery-like coffee bar, minimal black & white interior, high-contrast lighting, slow pan across bar surface and drip setup, shallow depth of field, 8–10s loop, no people, no sound.”

Interior Stills:
“Minimal white cube cafe interior, clean lines, glossy black accents, marble or concrete textures, overhead natural light, editorial composition.”

Product Stills:
“Hand drip setup close-up, premium beans, monochrome background, high contrast, soft shadow.”

Approval Policy (Codex)
/approvals 권장: auto_edit

파일 생성/수정: 자동 승인

외부 호출/스크립트 실행/패키지 설치: 사용자 승인 필요

Agent Tasks (step-by-step)
tokens.css, base.css, components.css를 생성하고 에디토리얼 그리드·타이포를 세팅한다.

index.html을 생성하고 위 Page Structure에 맞춰 마크업한다.

menu.html, about.html 템플릿을 만든다(메뉴 표/원산지·알레르기 배지 포함).

Google Map을 임베드하고 main.js에 초기화 코드를 넣는다.

라이트박스·폼 검증을 구현한다.

임시 스톡 이미지/영상을 배치하고 지연 로딩을 설정한다.

copy/home.md의 카피를 반영하고 SEO 메타를 채운다.

Lighthouse(모바일) 90점 이상이 나오도록 최적화한다.