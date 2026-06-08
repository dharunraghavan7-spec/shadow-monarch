import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useGameStore } from './store/gameStore';
import { SystemAwakening } from './components/SystemAwakening/SystemAwakening';
import { Dashboard } from './pages/Dashboard';
import { WorkoutSession } from './pages/WorkoutSession';
import { HunterStatus } from './pages/HunterStatus';
import { DailyQuests } from './pages/DailyQuests';
import { Achievements } from './pages/Achievements';
import { BossBattle } from './pages/BossBattle';

export default function App() {
  const hasSeenIntro = useGameStore(state => state.hasSeenIntro);
  const isInitialized = useGameStore(state => state.isInitialized);

  if (!hasSeenIntro || !isInitialized) {
    return <SystemAwakening onComplete={() => {}} />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/status" element={<HunterStatus />} />
        <Route path="/workout/:workoutId" element={<WorkoutSession />} />
        <Route path="/quests" element={<DailyQuests />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/boss-battle" element={<BossBattle />} />
      </Routes>
    </Router>
  );
}
