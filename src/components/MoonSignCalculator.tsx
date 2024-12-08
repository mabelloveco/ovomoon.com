import React, { useState } from 'react';
import { Moon } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import { AuthModal } from './AuthModal';
import { UserProfile } from './UserProfile';
import { CalculatorForm } from './CalculatorForm';
import { MoonSignDetails } from './MoonSignDetails';
import { FAQ } from './FAQ';
import { Navigation } from './Navigation';
import { saveResult } from '../utils/resultUtils';

const MoonSignCalculator: React.FC = () => {
  const [moonSign, setMoonSign] = useState<string | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { user } = useAuthStore();

  const handleCalculateResult = async (sign: string) => {
    setMoonSign(sign);
    if (user) {
      await saveResult(user.id, sign);
    }
  };

  const handleSaveClick = () => {
    setIsAuthModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-black text-white p-6 pb-24">
      <div className="max-w-3xl mx-auto">
        <UserProfile onLoginClick={() => setIsAuthModalOpen(true)} />
        
        <div className="text-center mb-8">
          <Moon className="w-16 h-16 mx-auto mb-4 text-yellow-200" />
          <h1 className="text-3xl font-bold mb-2">Moon Sign Calculator</h1>
          <p className="text-purple-200">Discover your lunar influence</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-xl mb-8">
          <CalculatorForm onCalculate={handleCalculateResult} />
          {moonSign && (
            <MoonSignDetails 
              sign={moonSign} 
              onSaveClick={handleSaveClick}
            />
          )}
        </div>

        <FAQ />
      </div>

      <Navigation />

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </div>
  );
};

export default MoonSignCalculator;