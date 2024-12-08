import React from 'react';
import { HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <HelpCircle className="w-6 h-6 text-purple-300" />
        <h2 className="text-2xl font-bold">Guide & FAQ</h2>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-purple-200 mb-2">How to Use the Calculator</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-200">
            <li>Enter your birth date using the date picker</li>
            <li>Input your birth time as accurately as possible (use 24-hour format)</li>
            <li>Click "Calculate Moon Sign" to see your result</li>
          </ol>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-purple-200">Frequently Asked Questions</h3>
          
          <div>
            <h4 className="font-medium text-yellow-200">What is a Moon Sign?</h4>
            <p className="text-gray-200">Your Moon Sign represents your emotional nature, instincts, and subconscious patterns. It reveals how you process feelings and react to situations emotionally.</p>
          </div>

          <div>
            <h4 className="font-medium text-yellow-200">Why is birth time important?</h4>
            <p className="text-gray-200">The Moon changes signs approximately every 2.5 days. Knowing your exact birth time helps determine the precise position of the Moon at your birth.</p>
          </div>

          <div>
            <h4 className="font-medium text-yellow-200">How does the Moon Sign differ from Sun Sign?</h4>
            <p className="text-gray-200">While your Sun Sign (zodiac sign) represents your core identity and ego, your Moon Sign reflects your emotional self and inner world.</p>
          </div>

          <div>
            <h4 className="font-medium text-yellow-200">What if I don't know my exact birth time?</h4>
            <p className="text-gray-200">Use 12:00 PM as an approximation, but be aware that your Moon Sign might be different if you were born early in the morning or late at night.</p>
          </div>
        </div>

        <div className="mt-6 p-4 bg-purple-900/30 rounded-lg">
          <p className="text-sm text-purple-200">
            <strong>Note:</strong> This calculator provides a simplified calculation. For the most accurate results, 
            consider consulting an professional astrologer who can take into account additional astronomical factors.
          </p>
        </div>
      </div>
    </div>
  );
};