import React from 'react';
import { motion } from 'framer-motion';

export interface Step {
  title: string;
  description?: string;
}

export interface StepperProps {
  steps: Step[];
  currentStep: number; // 0-indexed
}

export const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
  return (
    <div className="flex items-center justify-between w-full max-w-xl mx-auto">
      {steps.map((step, idx) => {
        const isCompleted = idx < currentStep;
        const isCurrent = idx === currentStep;

        return (
          <React.Fragment key={idx}>
            <div className="flex flex-col items-center">
              <motion.div
                animate={{
                  scale: isCurrent ? 1.15 : 1,
                  backgroundColor: isCompleted || isCurrent ? '#0284c7' : '#1e293b',
                  borderColor: isCurrent ? '#38bdf8' : '#334155',
                }}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-colors ${
                  isCompleted || isCurrent ? 'text-white shadow-lg shadow-sky-500/30' : 'text-slate-400'
                }`}
              >
                {isCompleted ? '✓' : idx + 1}
              </motion.div>
              <span className={`text-xs mt-2 font-medium ${isCurrent ? 'text-sky-400' : 'text-slate-400'}`}>
                {step.title}
              </span>
            </div>
            {idx < steps.length - 1 && (
              <div className="flex-1 h-0.5 mx-3 bg-slate-800 relative overflow-hidden">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: idx < currentStep ? '100%' : '0%' }}
                  transition={{ duration: 0.4 }}
                  className="h-full bg-sky-500"
                />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
