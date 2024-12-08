import React, { useState } from 'react';
import MoonSignCalculator from './components/MoonSignCalculator';
import { NumerologyCalculator } from './components/NumerologyCalculator';
import { Navigation } from './components/Navigation';
import { FAQ } from './components/FAQ';
import { AffiliateSection } from './components/AffiliateSection';

function App() {
  const [activeTab, setActiveTab] = useState('moon');

  const renderContent = () => {
    switch (activeTab) {
      case 'moon':
        return (
          <>
            <MoonSignCalculator />
            <AffiliateSection />
          </>
        );
      case 'numerology':
        return (
          <>
            <NumerologyCalculator />
            <AffiliateSection />
          </>
        );
      case 'about':
        return <FAQ />;
      default:
        return <MoonSignCalculator />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-black text-white p-6 pb-24">
      <div className="max-w-3xl mx-auto">
        {renderContent()}
      </div>
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

export default App;