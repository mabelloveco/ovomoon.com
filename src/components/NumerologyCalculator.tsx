import React, { useState } from 'react';
import { Hash, Sparkles } from 'lucide-react';
import { ShareResult } from './ShareResult';
import { useAuthStore } from '../store/authStore';
import { AuthModal } from './AuthModal';
import { getNumberMeaning } from '../utils/numerologyData';
import { NumerologyFAQ } from './NumerologyFAQ';

interface NumerologyResult {
  number: number;
  meaning: {
    title: string;
    traits: string[];
    description: string;
  };
}

export const NumerologyCalculator: React.FC = () => {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [result, setResult] = useState<NumerologyResult | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { user } = useAuthStore();

  const calculateNumerologyNumber = (name: string, birthDate: string): number => {
    // Simple calculation for demonstration
    const nameNumber = name.toLowerCase().split('').reduce((sum, char) => {
      return sum + (char.charCodeAt(0) - 96);
    }, 0);

    const dateNumber = birthDate.split('-').join('').split('').reduce((sum, digit) => {
      return sum + parseInt(digit);
    }, 0);

    return ((nameNumber + dateNumber) % 9) || 9; // If result is 0, return 9
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const number = calculateNumerologyNumber(name, birthDate);
    const meaning = getNumberMeaning(number);
    setResult({ number, meaning });
  };

  const handleSaveClick = () => {
    setIsAuthModalOpen(true);
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <Hash className="w-16 h-16 mx-auto mb-4 text-yellow-200" />
        <h1 className="text-3xl font-bold mb-2">Numerology Calculator</h1>
        <p className="text-purple-200">Discover Your Life Path Number</p>
      </div>

      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-xl">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-purple-300/30 focus:border-purple-400 focus:ring focus:ring-purple-400/20 transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Birth Date</label>
            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-purple-300/30 focus:border-purple-400 focus:ring focus:ring-purple-400/20 transition"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition duration-200 transform hover:scale-[1.02]"
          >
            Calculate Your Number
          </button>
        </form>

        {result && (
          <div className="mt-6 p-6 bg-white/5 backdrop-blur-lg rounded-xl">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-yellow-200" />
              <h3 className="text-xl font-bold text-yellow-200">
                Your Life Path Number: {result.number} - {result.meaning.title}
              </h3>
            </div>

            <p className="text-gray-200 mb-4">{result.meaning.description}</p>

            <div className="mb-4">
              <h4 className="font-medium text-purple-200 mb-2">Key Traits:</h4>
              <ul className="list-disc list-inside text-gray-200">
                {result.meaning.traits.map((trait, index) => (
                  <li key={index}>{trait}</li>
                ))}
              </ul>
            </div>

            <div className="flex justify-center gap-4">
              <ShareResult moonSign={`Life Path Number ${result.number}`} />
              {!user && (
                <button
                  onClick={handleSaveClick}
                  className="px-8 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition duration-200 min-w-[120px]"
                >
                  Save
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      <NumerologyFAQ />

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </div>
  );
};