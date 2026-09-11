# 羽見 Parrot Atlas — Design System

## 1. 設計概念
網站以「自然觀察筆記 × 現代展覽圖鑑」為核心。不是做成可愛寵物風，而是讓鸚鵡的羽色、棲地感與資訊層次成為整體介面語言。

關鍵字：熱帶、羽色、自然、編輯設計、圖鑑、展覽感、留白、可擴充。

## 2. 色彩系統
- `--ink: #10231E`：主文字、深色背景、主要按鈕。
- `--ink-2: #18362E`：深綠輔助色。
- `--leaf: #73E6A6`：葉綠，適合互動與亮點。
- `--lime: #C7F36A`：高亮點綴。
- `--sun: #FFB64D`：熱帶暖黃。
- `--coral: #FF6B4A`：鸚鵡紅橙。
- `--sky: #70C8E8`：羽色藍。
- `--paper: #F3F2EA`：網站主背景。
- `--muted: #9AA49C`：次要資訊。

色彩原則：大面積只使用 `paper / ink`，高彩度色只用在局部視覺、狀態與物種識別，避免整頁過度鮮豔。

## 3. 字體與排版
字體堆疊：`Inter`, `Noto Sans TC`, `PingFang TC`, `Microsoft JhengHei`, sans-serif。

- Hero H1：`clamp(52px, 7vw, 92px)`，緊密行高 0.98，字距 -0.055em。
- Section H2：`clamp(36px, 5vw, 64px)`。
- Card H3：34px。
- Body：16–18px，line-height 1.65。
- Eyebrow：12px、800 weight、0.18em letter-spacing、全大寫英文。

標題要短、大片、具編輯感；正文保持可讀，不使用超長段落。

## 4. 間距
- 內容最大寬度：1180px。
- Desktop 區塊垂直間距：74px。
- 卡片 gap：18px。
- 小型元件內距：12–24px。
- Hero 視覺區塊圓角：42px。
- 一般卡片圓角：28px。

## 5. 元件規則
### Header
膠囊形、半透明霧面背景、sticky。桌機顯示完整 nav；900px 以下收進 menu button。

### Buttons
主要按鈕：深綠底、白字。次要按鈕：透明底、深綠框。圓角 999px。

### Species Card
結構固定為：`media → metadata → title → summary → tags → action`。
未來新增條目時沿用相同結構，媒體可替換成 image / video poster / iframe preview。

### Modal Detail
用 `<dialog>` 顯示條目詳細內容，避免跳頁並保持靜態網站簡潔。每個條目展示 5 種內容插槽：文字、圖片、影片、HTML 作品、簡報。

## 6. Responsive
### Desktop ≥ 901px
- Hero 2 欄。
- Species 3 欄。
- Media capability 5 欄。

### Tablet 621–900px
- Hero 1 欄。
- Species 2 欄。
- Media 2 欄。
- Header nav 改為展開式選單。

### Mobile ≤ 620px
- Hero / Species / Media 全為單欄。
- Header 縮窄。
- Hero 標題約 50px。
- Modal 內容改單欄。

## 7. 可擴充資料模型
每個條目建議使用以下欄位：

```js
{
  id: 'species-id',
  title: '物種名稱',
  latinName: '學名',
  size: 'large | medium | small',
  summary: '摘要',
  body: '完整文字',
  tags: ['標籤'],
  media: {
    images: [{src, alt, caption}],
    videos: [{src, provider, title}],
    htmlWorks: [{src, title, ratio}],
    slides: [{src, type, title}]
  }
}
```

內容量增加後，可把目前 `script.js` 內的物種資料移至 `data/parrots.json`，再用 `fetch()` 動態產生卡片。

## 8. 媒體嵌入原則
- 圖片：使用 `<img loading="lazy">`，一定要填 `alt`。
- 影片：使用 `<video controls>` 或 YouTube/Vimeo `<iframe>`。
- HTML 作品：使用 sandboxed `<iframe>`，並限制來源。
- 簡報：優先使用 PDF viewer 或公開可嵌入 iframe。
- 每個媒體都要預留標題、說明、來源與版權欄位。

## 9. Accessibility
- 所有互動按鈕要有可讀文字或 `aria-label`。
- 文字與背景保持高對比。
- 不以顏色作為唯一資訊辨識方式。
- Modal 使用原生 `<dialog>`。
- 手機觸控目標至少約 44px 高。
