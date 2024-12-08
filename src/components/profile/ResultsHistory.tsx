import React from 'react';
import { Calendar } from 'lucide-react';

interface Result {
  moon_sign: string;
  calculated_at: string;
}

interface ResultsHistoryProps {
  results: Result[];
}

export const ResultsHistory: React.FC<ResultsHistoryProps> = ({ results }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold mb-4">Your Calculations History</h3>
      
      {results.length === 0 ? (
        <p className="text-gray-300">No calculations yet. Try calculating your moon sign!</p>
      ) : (
        <div className="space-y-3">
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-lg p-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-purple-300" />
                <div>
                  <p className="font-medium">{result.moon_sign}</p>
                  <p className="text-sm text-gray-400">
                    {new Date(result.calculated_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};