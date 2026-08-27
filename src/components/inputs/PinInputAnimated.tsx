import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export interface PinInputAnimatedProps {
  length?: number;
  onComplete?: (pin: string) => void;
}

export const PinInputAnimated: React.FC<PinInputAnimatedProps> = ({
  length = 4,
  onComplete,
}) => {
  const [pin, setPin] = useState<string[]>(Array(length).fill(''));
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (val: string, index: number) => {
    if (!/^\d*$/.test(val)) return;
    const newPin = [...pin];
    newPin[index] = val.slice(-1);
    setPin(newPin);

    if (val && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }

    if (newPin.every((digit) => digit !== '') && onComplete) {
      onComplete(newPin.join(''));
    }
  };

  return (
    <div className="flex gap-3 justify-center">
      {pin.map((digit, idx) => (
        <motion.div
          key={idx}
          whileFocus={{ scale: 1.1 }}
          animate={{ scale: digit ? 1.05 : 1, borderColor: digit ? '#38bdf8' : '#334155' }}
          className="w-12 h-14 rounded-xl bg-slate-900 border-2 flex items-center justify-center shadow-md overflow-hidden"
        >
          <input
            ref={(el) => {
              inputsRef.current[idx] = el;
            }}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e.target.value, idx)}
            className="w-full h-full text-center text-xl font-bold bg-transparent text-white focus:outline-none"
          />
        </motion.div>
      ))}
    </div>
  );
};
