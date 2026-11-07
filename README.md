# 📓 MOODSPACE
> *“Every mood deserves a little space.”*

MOODSPACE is a cozy, personal mood journal and digital scrapbook web application. Designed with a warm, tactile Pinterest-inspired scrapbook aesthetic, it blends mood tracking, journaling, visual moodboards, a calendar overview, and personal insights into a gentle, welcoming experience.

Built as an academic college project with **React + Vite**, plain **CSS**, **React Router**, **Lucide Icons**, and **Recharts**. Data persists in the browser via `localStorage` with zero external backend or API dependencies.

---

## 🎨 Aesthetic & Design System

The application embodies a physical, tactile scrapbook experience:
- **Palette**: Warm Cream (`#F8F3EA`), Soft Lavender (`#DCD0F4`), Blush Pink (`#F3C8D6`), Sage Green (`#D7E5D5`), Peach (`#EFCBAA`), and Rich Warm Brown (`#3D2F28`) for typography.
- **Typography**:
  - **Playfair Display**: Expressive editorial headings.
  - **DM Sans**: Clean, accessible body text.
  - **Caveat**: Handwritten notes, quotes, and margin doodles.
- **Physical Details**:
  - CSS-rendered washi tapes with torn edges, diagonal stripes, and dots.
  - Six distinct paper textures: *Notebook Lines*, *Warm Kraft*, *Lavender Grid*, *Sage Garden*, *Polaroid Card*, and *Pure Linen*.
  - Polaroid photo frames with handwritten captions.
  - Subtle rotations (`-1.5deg` to `1.5deg`) that give cards an organic, hand-crafted feel.
  - Playful scrapbook stickers and stamp badges.

---

## ✨ Features Across the 6 Pages

### 1. Home Dashboard (`/`)
- **Warm Welcome**: Dynamic greeting based on time of day with formatted current date.
- **Today's Mood Check-in Card**:
  - If not yet recorded: 1-click quick-log buttons for all 6 moods, plus a button to open full check-in.
  - If recorded: Polaroid-style display of today's mood, intensity meter (1–5), note excerpt, and direct update button.
- **Past 7 Days Strip**: Visual 7-day overview showing which days have been recorded with emojis and weekly mood pulse summary.
- **Recent Journal Pages**: Quick snippet preview of latest journal entries with paper styles.
- **Moodboard Studio Preview**: Visual collage snippet from pinned moodboard items.
- **Daily Scrapbook Thought**: Rotating collection of 25 original uplifting, calming, and reflective quotes with a **"Next Quote"** shuffle button.

### 2. Mood Check-in (`/check-in`)
- **6 Non-Judgmental Moods**:
  1. **Happy** ☀️ (*Sunlit and joyful* — Peach & Yellow theme)
  2. **Calm** 🍃 (*Gentle, balanced & grounded* — Sage & Cream theme)
  3. **Sad** 🌧️ (*A little rainy inside* — Muted Blue & Lavender theme)
  4. **Excited** ✨ (*Buzzing with spark & energy* — Pink & Coral theme)
  5. **Focused** 🎯 (*Clear-minded and centered* — Lilac & Beige theme)
  6. **Overwhelmed** ☁️ (*A full mind needing soft rest* — Soft Grey-Blue theme)
- **Dynamic Accent Theme**: Selecting a mood changes the entire page's gradient and border accents in real time.
- **Intensity Slider**: 1 to 5 scale (*Very Mild*, *Mild*, *Moderate*, *Noticeable*, *Deeply Felt*).
- **Reflection Note**: Optional handwritten note input.
- **Duplicate Prevention**: Updating an existing day's entry cleanly replaces the daily record without cluttering history.
- **Celebratory Confetti**: Gentle celebratory confetti burst on check-in submission.

### 3. My Journal (`/journal`)
- **Tactile Scrapbook Cards**: Varied paper styles, washi tape angles, and stickers.
- **Full Reading Modal**: Clean scrapbook reader view for long entries.
- **Entry Composer Modal**:
  - Title & Date picker.
  - Mood attachment.
  - Multi-line reflection content.
  - Paper Style selector (Notebook lines, Kraft, Lavender grid, Sage floral, Polaroid, Minimal).
  - Washi tape color picker (Peach, Lavender, Sage, Blush, Cream).
  - Scrapbook sticker picker (`✨`, `🌿`, `☕`, `🌸`, `⭐`, `💡`, `📷`, `🌧️`, `🍃`, `🕊️`).
- **Live Search**: Instant keyword search through titles and body text.
- **Mood Filters**: Filter journal pages by mood tag (All, Happy, Calm, Sad, Excited, Focused, Overwhelmed).
- **Edit & Delete**: Full CRUD with scrapbook confirmation modals.

### 4. Moodboard Studio (`/moodboards`)
- **Pinterest-Inspired Masonry Grid**: Varied card heights and layouts.
- **Multiple Moodboards**: Switch between boards or create new ones with custom titles & descriptions.
- **4 Scrapbook Card Types**:
  1. **Polaroid Photos**: Image URL input + built-in curated aesthetic presets (steamed chai, pressed botanicals, studio notebooks, wild florals). Graceful fallback card if an image URL fails.
  2. **Quotes & Thoughts**: Serif typography with author attribution.
  3. **Color Swatches**: Paint chip card with color preview, hex code, and palette name.
  4. **Washi Sticky Notes**: Handwritten notes on tinted paper.
- **Rearrange Cards**: Reorder cards up or down instantly.
- **Delete Cards & Boards**: Clean management with toast notifications.

### 5. Mood Calendar (`/calendar`)
- **Monthly Grid**: Accurate weekday alignments, month length calculations, leap year handling, and year switching.
- **Visual Mood Indicators**: Days with recorded moods display their emoji, pastel theme background, and intensity dots.
- **"Today" Indicator**: Highlighted with custom styling.
- **Day Detail Popup**: Click any day to view recorded mood, intensity, and note. If unrecorded, easily log a mood for that day.
- **Monthly Summary**: Shows total days recorded for the selected month (e.g. *11 of 30 days recorded in November 2026*).
- **Mood Legend**: Soft color key for all 6 moods.

### 6. My Insights (`/insights`)
- **Real Personal Analytics** (derived purely from stored browser entries):
  - Total mood check-ins.
  - Most frequent mood (% and count).
  - Total journal pages written.
  - Average felt intensity.
- **Recharts Visualizations**:
  - **Mood Distribution**: Pastel donut chart with hover tooltips and percentage bars.
  - **Check-in Frequency**: Bar chart showing activity across days of the week.
  - **Monthly Mood Summary**: Visual tile grid of all 6 moods.
- **Gentle Philosophy Note**: Friendly reminders that all emotions are natural and valid.

---

## 🛠️ Academic Presentation & Demo Mode

The application includes built-in controls for class presentations:
- **Load Sample Data**: Found in the desktop sidebar under *"Academic Demo"*. Instantly populates realistic past entries, moodboards, and journal pages across recent weeks so all charts, the calendar, and the journal look full and lively during evaluation.
- **Reset Data**: Safely clears stored entries with confirmation to demonstrate fresh start and empty states.

---

## 🚀 How to Run the Project

### Quick Start (Windows)
Double-click `start.bat` in the root folder, or run:
```powershell
cmd /c "set PATH=%CD%\.tools\node;%PATH% && npm run dev"
```
Then open your browser at **http://localhost:5173/**.

### Build Production Bundle
Double-click `build.bat`, or run:
```powershell
cmd /c "set PATH=%CD%\.tools\node;%PATH% && npm run build"
```
The optimized bundle will be generated in `/dist`.

---

## 📁 Project Structure

```
MOODSPACE/
├── .tools/node/                  # Embedded portable Node.js runtime
├── dist/                         # Optimized production build
├── public/
│   └── favicon.svg               # Cozy scrapbook icon
├── src/
│   ├── main.jsx                  # Application entry point
│   ├── App.jsx                   # Layout & HashRouter routes
│   ├── index.css                 # Master CSS importer
│   ├── styles/
│   │   ├── variables.css         # Color tokens, fonts, shadows
│   │   ├── global.css            # Base resets, paper grain, layout
│   │   ├── components.css        # Washi tape, polaroid, paper, buttons, modal
│   │   └── animations.css        # Subtle rotations, floating, pop animations
│   ├── context/
│   │   └── MoodContext.jsx       # State management & localStorage sync
│   ├── data/
│   │   ├── initialData.js        # Rich demo dataset
│   │   ├── quotes.js             # 25 original uplifting quotes
│   │   └── moodConstants.js      # 6 moods, paper styles, washi tapes
│   ├── components/
│   │   ├── common/               # WashiTape, ScrapbookSticker, EmptyState, ConfirmModal
│   │   ├── layout/               # Sidebar, Header, BottomNav, Toast
│   │   ├── home/                 # WelcomeBanner, TodayMoodCard, WeeklyMoodOverview, etc.
│   │   ├── journal/              # JournalCard, JournalModal, JournalDetailModal
│   │   ├── moodboard/            # MoodboardCard, AddCardModal, NewBoardModal
│   │   ├── calendar/             # DayDetailModal, MoodLegend
│   │   └── insights/             # StatMetricCard, MoodDistributionChart, WeeklyActivityChart
│   └── pages/
│       ├── HomePage.jsx
│       ├── CheckInPage.jsx
│       ├── JournalPage.jsx
│       ├── MoodboardPage.jsx
│       ├── CalendarPage.jsx
│       └── InsightsPage.jsx
├── index.html                    # HTML shell with Google Fonts
├── package.json
├── vite.config.js
├── start.bat                     # 1-click dev server runner
├── build.bat                     # 1-click build runner
└── README.md
```
