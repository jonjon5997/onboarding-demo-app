// components/OnboardingLayout.tsx
import React, { type ReactNode } from 'react';

interface OnboardingLayoutProps {
  children: ReactNode;
  title?: string;
  step?: number; // optional, if you want to show progress
  totalSteps?: number;
}

const OnboardingLayout: React.FC<OnboardingLayoutProps> = ({ children, title, step, totalSteps }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      {title && <h1 className="text-2xl font-bold mb-4">{title}</h1>}

      {step && totalSteps && (
        <p className="text-sm text-gray-500 mb-6">
          Step {step} of {totalSteps}
        </p>
      )}

      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        {children}
      </div>
    </div>
  );
};

export default OnboardingLayout;
