import React, { useState, useEffect } from 'react';
import { LogOut, User, History, Star } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import { getUserResults } from '../utils/resultUtils';

interface UserProfileProps {
  onLoginClick: () => void;
}

export const UserProfile: React.FC<UserProfileProps> = ({ onLoginClick }) => {
  const { user, signOut } = useAuthStore();
  const [showHistory, setShowHistory] = useState(false);
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    if (user) {
      loadResults();
    }
  }, [user]);

  const loadResults = async () => {
    if (user) {
      try {
        const userResults = await getUserResults(user.id);
        setResults(userResults);
      } catch (error) {
        console.error('Error loading results:', error);
      }
    }
  };

  if (!user) {
    return (
      <button
        onClick={onLoginClick}
        className="absolute top-4 right-4 inline-flex items-center gap-2 px-4 py-2 bg-purple-600/30 hover:bg-purple-600/50 rounded-lg transition duration-200 group"
      >
        <User className="w-4 h-4 group-hover:scale-110 transition" />
        <span>Sign In</span>
        <div className="absolute -bottom-12 right-0 w-48 text-xs text-purple-200 bg-white/10 backdrop-blur-lg rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Star className="w-3 h-3 inline mr-1" />
          Save your results and track your history
        </div>
      </button>
    );
  }

  return (
    <div className="absolute top-4 right-4 flex items-center gap-4">
      <button
        onClick={() => setShowHistory(!showHistory)}
        className="inline-flex items-center gap-2 px-3 py-1 bg-purple-600/30 hover:bg-purple-600/50 rounded-lg transition duration-200"
      >
        <History className="w-4 h-4" />
        <span>History</span>
      </button>

      <div className="flex items-center gap-2">
        <User className="w-5 h-5 text-purple-300" />
        <span className="text-purple-200">{user.email}</span>
      </div>

      <button
        onClick={signOut}
        className="inline-flex items-center gap-2 px-3 py-1 bg-purple-600/30 hover:bg-purple-600/50 rounded-lg transition duration-200"
      >
        <LogOut className="w-4 h-4" />
        <span>Sign Out</span>
      </button>

      {showHistory && (
        <div className="absolute top-12 right-0 mt-2 w-64 bg-white/10 backdrop-blur-lg rounded-xl p-4 shadow-xl">
          <h3 className="text-lg font-semibold mb-3">Your Moon Sign History</h3>
          {results.length > 0 ? (
            <ul className="space-y-2">
              {results.map((result, index) => (
                <li key={index} className="text-sm">
                  <span className="text-purple-200">{new Date(result.calculated_at).toLocaleDateString()}</span>
                  <span className="text-yellow-200 ml-2">{result.moon_sign}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-300">No calculations yet</p>
          )}
        </div>
      )}
    </div>
  );
};