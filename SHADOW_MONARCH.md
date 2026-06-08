# 🎮 SHADOW MONARCH - Production Ready PWA

**A Complete Gamified Fitness System Built with React, Framer Motion & Tailwind CSS**

---

## 📊 Project Overview

**Shadow Monarch** is an Android-first Progressive Web App that transforms fitness training into an epic RPG experience. Players become "chosen hunters" trained by an ancient intimidating master through progressive challenges, quests, and boss battles.

### Key Statistics
- **Total Components**: 15+ React components
- **Store Systems**: 3 Zustand stores (Game, Quests, Workouts)
- **Pages**: 6 main pages + System Awakening intro
- **Animations**: 50+ Framer Motion animations
- **Exercises**: 9+ programmed exercises
- **Bosses**: 3 progressive boss encounters
- **Quests**: 4 daily trials with tracking
- **Achievements**: 3+ unlockable achievements
- **Rank Tiers**: 9 progression ranks (E → Shadow Monarch)
- **Level Progression**: 1-100 with scaling XP requirements

---

## 🎬 Features Implemented

### ✅ System Awakening (Animated Intro - 4 Scenes)
```
Scene 1: Black screen → Heartbeat → System search messages → Cracks appear
Scene 2: Runes circle → Lightning → Master emerges with effects
Scene 3: "Do you seek power?" → Accept/Decline choices
Scene 4: Hunter creation → Name input → Status window reveal
```

### ✅ Main Dashboard
- Quick stats (Level, Rank, Daily Progress, Streak)
- Today's Trials (4 daily quests)
- Available Trials (workout suggestions)
- Mobile nav with 5 buttons

### ✅ Hunter Status Window
- Full profile with stats
- 4 attributes with progress bars
- XP tracking with percentage
- Level and Rank display

### ✅ Workout System
- Exercise demonstrations with Master guidance
- 9+ exercises across 3 difficulty tiers
- Exercise completion tracking
- XP rewards per exercise
- Form guidance and descriptions

### ✅ Daily Quest System
- 4 daily trials with varying difficulties
- Quest completion tracking
- XP reward calculation
- Completion bonus system
- Progress visualization

### ✅ Achievement System
- 3+ unlockable achievements
- Achievement icons and descriptions
- Lock/unlock state management
- Progress tracking

### ✅ Boss Battle System
- 3 progressive bosses (Lvl 5, 15, 30+)
- Combat mechanics with damage calculation
- Real-time battle log
- Victory/defeat outcomes
- Large XP rewards on victory

### ✅ Rank Progression (9 Tiers)
```
E Rank (1-10) → D (11-20) → C (21-30) → B (31-40) → A (41-50) 
→ S (51-60) → National Level (61-80) → Monarch Candidate (81-99) 
→ Shadow Monarch (100+)
```

### ✅ PWA Features
- Service Worker (offline support)
- Web App Manifest
- Installation shortcuts
- Fullscreen mode
- Cache strategy
- Status bar theming

---

## 🏗️ Architecture

### State Management (Zustand)
- **gameStore**: Hunter stats, levels, XP, attributes
- **questStore**: Daily quests, achievements, workout stats
- **workoutStore**: Exercise data, workout programs

### Data Persistence
- localStorage for all hunter data
- Auto-save on state changes
- Survives browser refresh

### Component Structure
```
App.tsx
├── SystemAwakening (4 scenes)
├── Dashboard (home page)
├── WorkoutSession (exercise tracking)
├── HunterStatus (profile page)
├── DailyQuests (quest list)
├── Achievements (achievement display)
└── BossBattle (combat system)
```

---

## 🎨 Design System

### Typography
| Font | Usage |
|------|-------|
| Cinzel Decorative | Ancient titles, rune text |
| MedievalSharp | Section headers |
| Orbitron | System text, stats |
| Inter | Body text, general UI |

### Color Palette
| Color | Hex | Usage |
|-------|-----|-------|
| Shadow 500 | #9333ea | Primary purple |
| Shadow 900 | #3f0f5c | Dark backgrounds |
| Void | #0a0a0a | Black background |
| Dungeon | #1a1a2e | Secondary background |
| Red 600 | #dc2626 | Boss/danger |
| Green 500 | #10b981 | Success/completion |

### Visual Effects
- Purple lightning and cracks
- Floating shadow particles
- Glowing auras (pulsing)
- Screen shake animations
- Particle explosions
- Smooth transitions

---

## 📱 Mobile Optimization

✅ Touch-friendly interface
✅ No pinch zoom / overscroll
✅ Bottom navigation for thumb access
✅ Responsive grid layouts
✅ Safe area insets for notches
✅ Fullscreen capable
✅ Landscape/portrait support
✅ Fast touch feedback

---

## 🛠 Tech Stack

```json
{
  "framework": "React 18",
  "language": "TypeScript",
  "styling": "Tailwind CSS",
  "animation": "Framer Motion",
  "state": "Zustand",
  "routing": "React Router v6",
  "build": "Vite",
  "pwa": "Service Worker + Web App Manifest"
}
```

---

## 📂 Repository Structure

```
shadow-monarch/
├── src/
│   ├── components/SystemAwakening/
│   │   ├── Scene1.tsx (Search sequence)
│   │   ├── Scene2.tsx (Master emergence)
│   │   ├── Scene3.tsx (Choice dialog)
│   │   ├── Scene4.tsx (Hunter creation)
│   │   ├── Master.tsx (Character visual)
│   │   └── SystemAwakening.tsx (Scene manager)
│   ├── pages/
│   │   ├── Dashboard.tsx
│   │   ├── HunterStatus.tsx
│   │   ├── WorkoutSession.tsx
│   │   ├── DailyQuests.tsx
│   │   ├── Achievements.tsx
│   │   └── BossBattle.tsx
│   ├── store/
│   │   ├── gameStore.ts
│   │   ├── questStore.ts
│   │   └── workoutStore.ts
│   ├── hooks/
│   │   └── useServiceWorker.ts
│   ├── utils/
│   │   └── pwa.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
│   ├── manifest.json
│   └── service-worker.js
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
├── README.md
├── IMPLEMENTATION.md
├── .gitignore
└── .vscode/extensions.json
```

---

## 🚀 Getting Started

### Prerequisites
```bash
Node.js 16+
npm or yarn
```

### Installation & Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type check
npm run type-check

# Lint
npm run lint
```

---

## 💾 Data Models

### Hunter
```typescript
{
  name: string
  level: number (1-100)
  rank: string (E-Shadow Monarch)
  xp: number
  strength: number (5+)
  agility: number (5+)
  endurance: number (5+)
  discipline: number (5+)
}
```

### Quest
```typescript
{
  id: string
  title: string
  description: string
  xpReward: number
  difficulty: 'E' | 'D' | 'C' | 'B' | 'A' | 'S'
  completed: boolean
  type: 'workout' | 'discipline' | 'endurance'
}
```

### Exercise
```typescript
{
  id: string
  name: string
  targetMuscles: string[]
  sets: number
  reps: number
  difficulty: string
  xpReward: number
  masterAdvice: string
  description: string
}
```

---

## 📊 Game Mechanics

### XP System
- **XP Requirement**: Level × 100
- **Exercise XP**: 25-50 per exercise
- **Completion Bonus**: +Workout total XP
- **Quest Bonus**: +50 XP all quests completed
- **Boss Reward**: Boss Level × 100 XP

### Attribute Growth
- **Level Up Bonus**: +2 to all attributes
- **Max Attribute**: Scales with level
- **Impact**: Affects boss damage calculation

### Progression Timeline
- **E Rank (Lvl 1-10)**: Beginner basics
- **D Rank (Lvl 11-20)**: Foundation building
- **C Rank (Lvl 21-30)**: Skill development
- **B Rank (Lvl 31-40)**: Advanced training
- **A Rank (Lvl 41-50)**: Expert level
- **S Rank (Lvl 51-60)**: Master class
- **National (Lvl 61-80)**: Legendary tier
- **Candidate (Lvl 81-99)**: Elite preparation
- **Shadow Monarch (Lvl 100)**: Final form

---

## 🎯 User Journey

```
1. AWAKENING
   ↓
   Black screen → Heartbeat → System messages → Cracks → Master emerges
   
2. CHOICE
   ↓
   "Do you seek power?" → Accept/Decline
   
3. CREATION
   ↓
   Enter name → Status reveal → Dashboard
   
4. PROGRESSION
   ↓
   Daily Quests → Workouts → Boss Battles → Level Up
   
5. ASCENSION
   ↓
   E Rank → ... → Shadow Monarch (Lvl 100)
```

---

## ✨ Production Readiness

✅ **Performance**: Optimized animations, lazy loading
✅ **Accessibility**: Touch-friendly, readable contrast
✅ **Security**: No external dependencies for core features
✅ **Scalability**: Modular component architecture
✅ **PWA**: Offline-capable with service worker
✅ **Mobile**: Android/iOS fullscreen support
✅ **Data**: Persistent localStorage system
✅ **Testing**: Ready for integration testing
✅ **Documentation**: Complete README + IMPLEMENTATION
✅ **Deployment**: Vite optimized build

---

## 🌍 Deployment Options

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Traditional Server
```bash
npm run build
# Deploy dist/ folder
```

---

## 🎮 Game Philosophy

**Shadow Monarch** is built on the philosophy that:
- The player is **chosen** for a purpose
- The System **watches** constantly
- The Master is **intimidating** yet supportive
- Growth is **inevitable** through discipline
- Progression is **visible** and rewarding
- Every action has **consequences** (XP, attributes)
- The atmosphere is **immersive** and atmospheric

---

## 📝 License

All code and assets are part of the Shadow Monarch project.

---

## 🤝 Support

For issues or questions about the Shadow Monarch PWA implementation, refer to:
- `README.md` - Feature overview
- `IMPLEMENTATION.md` - Technical details
- Code comments throughout components

---

**Status**: ✅ **PRODUCTION READY**
**Branch**: `feat/shadow-monarch-pwa`
**Last Updated**: 2026-06-08
**Commits**: 8+ feature commits

---

```
"You were chosen for a purpose.
The System watches.
Your trials await."
```
