import React from 'react';
import { HelpCircle } from 'lucide-react';

export const NumerologyFAQ: React.FC = () => {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 shadow-xl mt-8">
      <div className="flex items-center gap-3 mb-6">
        <HelpCircle className="w-6 h-6 text-purple-300" />
        <h2 className="text-2xl font-bold">Numerology Guide & FAQ</h2>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-purple-200 mb-2">Understanding Your Numbers</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-yellow-200">What is a Destiny Number?</h4>
              <p className="text-gray-200">Your Destiny Number, derived from your full name, reveals your life's purpose and the opportunities that will help you fulfill it. It indicates the path you're meant to follow.</p>
            </div>

            <div>
              <h4 className="font-medium text-yellow-200">What is a Soul Number?</h4>
              <p className="text-gray-200">The Soul Number, calculated from your first name's vowels, represents your inner desires and what truly motivates you. It reveals your deepest dreams and spiritual aspirations.</p>
            </div>

            <div>
              <h4 className="font-medium text-yellow-200">What is a Personality Number?</h4>
              <p className="text-gray-200">Your Personality Number, based on the consonants in your name, shows how others perceive you and your external personality traits. It's like your social mask or the first impression you make.</p>
            </div>

            <div>
              <h4 className="font-medium text-yellow-200">What is a Birth Number?</h4>
              <p className="text-gray-200">The Birth Number, derived from your birth date, represents innate talents and challenges you brought into this life. It reveals your natural abilities and potential obstacles.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-purple-200 mb-2">Common Questions</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-yellow-200">How accurate is numerology?</h4>
              <p className="text-gray-200">Numerology is considered a tool for self-discovery and personal growth. While many find its insights meaningful, it's best used as one of many tools for understanding yourself and your life path.</p>
            </div>

            <div>
              <h4 className="font-medium text-yellow-200">Should I use my birth name or current name?</h4>
              <p className="text-gray-200">Traditionally, your birth name is used as it represents your original blueprint. However, if you've legally changed your name, you might want to calculate both to see how they influence your life.</p>
            </div>

            <div>
              <h4 className="font-medium text-yellow-200">What if I get a master number (11, 22, or 33)?</h4>
              <p className="text-gray-200">Master numbers are considered especially powerful and shouldn't be reduced further. They often indicate a higher spiritual purpose or enhanced abilities in certain areas.</p>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-purple-900/30 rounded-lg">
          <p className="text-sm text-purple-200">
            <strong>Note:</strong> Numerology is a spiritual tool for self-reflection and personal growth. While many find its insights valuable, it should be used alongside other forms of personal development and decision-making methods.
          </p>
        </div>
      </div>
    </div>
  );
};