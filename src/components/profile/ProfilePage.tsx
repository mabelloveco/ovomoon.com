import React, { useState, useEffect } from 'react';
import { User, History, Bell, Settings } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import { getUserResults } from '../../utils/resultUtils';
import { ResultsHistory } from './ResultsHistory';
import { SubscriptionSettings } from './SubscriptionSettings';

export const ProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('history');
  const { user } = useAuthStore();
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

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 shadow-xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-full bg-purple-600/30 flex items-center justify-center">
            <User className="w-8 h-8 text-purple-300" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">{user?.email}</h2>
            <p className="text-purple-300">Member since {new Date().toLocaleDateString()}</p>
          </div>
        </div>

        <div className="flex gap-4 mb-6 border-b border-white/10">
          <button
            onClick={() => setActiveTab('history')}
            className={`px-4 py-2 transition ${
              activeTab === 'history'
                ? 'border-b-2 border-purple-500 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2">
              <History className="w-4 h-4" />
              <span>History</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('notifications')}
            className={`px-4 py-2 transition ${
              activeTab === 'notifications'
                ? 'border-b-2 border-purple-500 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2">
              <Bell className="w-4 h-4" />
              <span>Notifications</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`px-4 py-2 transition ${
              activeTab === 'settings'
                ? 'border-b-2 border-purple-500 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              <span>Settings</span>
            </div>
          </button>
        </div>

        {activeTab === 'history' && <ResultsHistory results={results} />}
        {activeTab === 'notifications' && <SubscriptionSettings />}
        {activeTab === 'settings' && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Account Settings</h3>
            <p className="text-gray-300">Account management features coming soon...</p>
          </div>
        )}
      </div>
    </div>
  );
};