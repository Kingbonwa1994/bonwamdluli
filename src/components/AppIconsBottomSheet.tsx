import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SiReact, SiAndroid, SiApple, SiFlutter, SiKotlin, SiSwift } from 'react-icons/si';

interface AppIconsBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  appType: 'webapps' | 'nativeapps';
}

const appIcons = {
  webapps: [
    { Icon: SiReact, name: 'React' },
    { Icon: SiReact, name: 'Next.js' },
    { Icon: SiReact, name: 'Gatsby' },
    { Icon: SiReact, name: 'React Native Web' },
  ],
  nativeapps: [
    { Icon: SiAndroid, name: 'Android' },
    { Icon: SiApple, name: 'iOS' },
    { Icon: SiFlutter, name: 'Flutter' },
    { Icon: SiReact, name: 'React Native' },
    { Icon: SiKotlin, name: 'Kotlin' },
    { Icon: SiSwift, name: 'Swift' },
  ],
};

export function AppIconsBottomSheet({ isOpen, onClose, appType }: AppIconsBottomSheetProps) {
  const [ripples, setRipples] = useState<{ x: number; y: number; size: number }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRipples((currentRipples) => [
        ...currentRipples.slice(-5),
        {
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 50 + 50,
        },
      ]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          className="fixed inset-x-0 bottom-0 h-64 bg-blue-500 bg-opacity-50 backdrop-blur-md rounded-t-3xl overflow-hidden"
        >
          <div className="absolute inset-0 overflow-hidden">
            {ripples.map((ripple, index) => (
              <motion.div
                key={index}
                className="absolute rounded-full bg-white bg-opacity-30"
                style={{
                  left: `${ripple.x}%`,
                  top: `${ripple.y}%`,
                }}
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: 1, opacity: 0 }}
                transition={{ duration: 2 }}
              />
            ))}
          </div>
          <div className="relative h-full">
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-white hover:text-gray-200"
            >
              Close
            </button>
            <h3 className="text-xl font-bold text-white text-center mt-4">
              {appType === 'webapps' ? 'Web Apps' : 'Native Apps'}
            </h3>
            <div className="flex overflow-x-auto p-4 space-x-4">
              {appIcons[appType].map((app) => (
                <div key={app.name} className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <app.Icon className="text-3xl text-blue-500" />
                  </div>
                  <span className="mt-2 text-sm text-white">{app.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

