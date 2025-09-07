import React from 'react';
import OnboardingLayout from '../components/OnboardingLayout';

function App() {
  return (
    <OnboardingLayout title="Welcome to the App!" step={1} totalSteps={3}>
      <p>Let's get started with setting up your profile.</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Next
      </button>
    </OnboardingLayout>
  );
}

export default App;