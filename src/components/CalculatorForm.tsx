import React, { useState } from 'react';
import { format } from 'date-fns';
import { Clock3 } from 'lucide-react';
import { calculateMoonSign } from '../utils/moonSignUtils';

interface CalculatorFormProps {
  onCalculate: (sign: string) => void;
}

export const CalculatorForm: React.FC<CalculatorFormProps> = ({ onCalculate }) => {
  const [date, setDate] = useState<string>(format(new Date(), 'yyyy-MM-dd'));
  const [time, setTime] = useState<string>('12:00');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const sign = calculateMoonSign(new Date(date), time);
    onCalculate(sign);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">Birth Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-white/5 border border-purple-300/30 focus:border-purple-400 focus:ring focus:ring-purple-400/20 transition"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Birth Time</label>
        <div className="relative">
          <Clock3 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-300" />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full pl-12 pr-4 py-2 rounded-lg bg-white/5 border border-purple-300/30 focus:border-purple-400 focus:ring focus:ring-purple-400/20 transition"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition duration-200 transform hover:scale-[1.02]"
      >
        Calculate Moon Sign
      </button>
    </form>
  );
};