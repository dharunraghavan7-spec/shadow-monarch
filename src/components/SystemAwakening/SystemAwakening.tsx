import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scene1 } from './Scene1';
import { Scene2 } from './Scene2';
import { Scene3 } from './Scene3';
import { Scene4 } from './Scene4';
import { useGameStore } from '../../store/gameStore';

interface SystemAwakeningProps {
  onComplete: () => void;
}

export const SystemAwakening = ({ onComplete }: SystemAwakeningProps) => {
  const [scene, setScene] = useState<1 | 2 | 3 | 4 | 5>(1);
  const setHasSeenIntro = useGameStore(state => state.setHasSeenIntro);

  const handleSceneComplete = () => {
    if (scene === 4) {
      // Scene 4 leads to end scene or dashboard
      setScene(5);
    } else {
      setScene((prev) => (prev + 1) as 1 | 2 | 3 | 4 | 5);
    }
  };

  const handleAccept = () => {
    setScene(4);
  };

  const handleIntroComplete = () => {
    setHasSeenIntro(true);
    onComplete();
  };

  return (
    <div className="w-full h-full bg-void">
      <AnimatePresence mode="wait">
        {scene === 1 && (
          <motion.div
            key="scene-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Scene1 onComplete={handleSceneComplete} />
          </motion.div>
        )}

        {scene === 2 && (
          <motion.div
            key="scene-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Scene2 onComplete={handleSceneComplete} />
          </motion.div>
        )}

        {scene === 3 && (
          <motion.div
            key="scene-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Scene3 onAccept={handleAccept} onDecline={handleSceneComplete} />
          </motion.div>
        )}

        {scene === 4 && (
          <motion.div
            key="scene-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Scene4 onComplete={handleIntroComplete} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
