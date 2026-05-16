# AI 自動化 Landing Page — Astro 專案

## 技術規格（對應參考網站）

| 技術 | 用途 |
|------|------|
| **Astro 4.x** | 主框架（靜態網站生成） |
| **Tailwind CSS** | 樣式工具 |
| **Google Fonts** | Noto Sans TC + Inter |
| **Google Tag Manager** | 追蹤管理（Layout.astro 內有預留位置） |
| **Google Cloud** | 建議部署平台 |

## 快速啟動

```bash
# 1. 安裝依賴
npm install

# 2. 開發模式（本機預覽）
npm run dev
# 開啟 http://localhost:4321

# 3. 正式建置
npm run build

# 4. 預覽建置結果
npm run preview
```

## 專案結構

```
src/
├── layouts/
│   └── Layout.astro        # 全域 HTML 結構、SEO meta、字型
├── components/
│   ├── Nav.astro           # 固定頂部導覽列（含手機選單）
│   ├── Hero.astro          # 首屏：標語、CTA、Dashboard mock
│   ├── Stats.astro         # 數據成效區塊
│   ├── Features.astro      # 服務項目 6 宮格
│   ├── HowItWorks.astro    # 運作步驟 4 步
│   ├── Testimonials.astro  # 客戶見證
│   ├── CTA.astro           # Email 收集表單
│   └── Footer.astro        # 頁尾
└── pages/
    └── index.astro         # 首頁（組合所有元件）
```

## 客製化重點

1. **品牌名稱**：搜尋 `AutoAI` 全部替換為您的品牌名
2. **Google Tag Manager**：在 `Layout.astro` 取消 GTM 程式碼的註解，替換 `GTM-XXXXXXX`
3. **Google Analytics**：可在 GTM 內設定，或直接加入 GA4 script
4. **聯絡表單**：`CTA.astro` 的 `<form>` 接上 Formspree / HubSpot 等服務
5. **客戶 Logo**：在 `Hero.astro` 底部的信任 logo 區替換真實品牌
6. **部署至 Google Cloud**：`astro build` 後將 `dist/` 上傳至 Cloud Storage 靜態網站

## 部署建議（對應原網站技術）

```bash
# Google Cloud Run（搭配 Docker）
gcloud run deploy ai-landing --source .

# 或 Cloud Storage 靜態部署
npm run build
gsutil -m cp -r dist/* gs://your-bucket-name/
```
