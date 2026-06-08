import { useNavigate } from 'react-router-dom';
import { useQuestStore } from '../store/questStore';
import { useGameStore } from '../store/gameStore';
import { motion } from 'framer-motion';

export const Achievements = () => {
  const navigate = useNavigate();
  const achievements = useQuestStore(state => state.achievements);
  const unlockAchievement = useQuestStore(state => state.unlockAchievement);
  const unlocked = achievements.filter(a => a.unlocked).length;

  const handleTestUnlock = (id: string) => {
    unlockAchievement(id);
  };

  return (
    <div className="min-h-screen bg-void text-shadow-400 pb-24">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <motion.button onClick={() => navigate('/')} className="mb-6 text-shadow-600 hover:text-shadow-400 transition-colors" whileHover={{ x: -5 }}>
          ← Back
        </motion.button>

        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="rune-text text-4xl font-bold mb-2">Achievements</h1>
          <p className="text-shadow-600 text-sm mb-8">{unlocked} / {achievements.length} Unlocked</p>
        </motion.div>

        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }}>
          {achievements.map((achievement, idx) => (
            <motion.div key={achievement.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 + idx * 0.1 }} whileHover={{ scale: 1.05 }} className={`p-6 rounded-lg border-2 text-center cursor-pointer transition-all ${achievement.unlocked ? 'bg-green-900/20 border-green-600 hover:shadow-lg hover:shadow-green-600/50' : 'bg-shadow-900/30 border-shadow-600/50 hover:shadow-lg hover:shadow-shadow-600/20'}`}>
              <p className="text-5xl mb-4">{achievement.icon}</p>
              <h3 className="font-bold mb-2">{achievement.title}</h3>
              <p className="text-xs text-shadow-600 mb-4">{achievement.description}</p>
              <div className={`inline-block px-3 py-1 rounded-lg text-xs font-orbitron ${achievement.unlocked ? 'bg-green-600 text-void' : 'bg-shadow-600/20 text-shadow-600'}`}>
                {achievement.unlocked ? '✓ UNLOCKED' : 'LOCKED'}
              </div>
              {!achievement.unlocked && (
                <motion.button onClick={() => handleTestUnlock(achievement.id)} className="block mx-auto mt-4 text-xs text-shadow-500 hover:text-shadow-400 transition-colors underline" whileHover={{ scale: 1.1 }}>
                  Test Unlock
                </motion.button>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.nav className="fixed bottom-0 left-0 right-0 bg-shadow-900/95 border-t border-shadow-600/50 flex justify-around" initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 0.3 }}>
        {[{ icon: '🏠', label: 'HOME', path: '/' }, { icon: '📜', label: 'QUEST', path: '/quests' }, { icon: '⚔️', label: 'BATTLES', path: '/boss-battle' }, { icon: '🏆', label: 'ACH', path: '/achievements' }, { icon: '👤', label: 'PROFILE', path: '/status' }].map((item) => (
          <motion.button key={item.path} onClick={() => navigate(item.path)} className="flex-1 py-4 flex flex-col items-center gap-1 hover:text-shadow-300 transition-colors" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <span className="text-xl">{item.icon}</span>
            <span className="text-xs font-orbitron">{item.label}</span>
          </motion.button>
        ))}
      </motion.nav>
    </div>
  );
};
