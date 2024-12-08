import React, { useState } from 'react';
import { X, Star, History, Lock } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, signUp } = useAuthStore();

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await signIn(email, password);
      } else {
        await signUp(email, password);
      }
      onClose();
    } catch (error) {
      console.error('Auth error:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>
        
        <h2 className="text-2xl font-bold mb-2 text-white">
          {isLogin ? 'Welcome Back!' : 'Join Us'}
        </h2>
        
        <div className="mb-6 text-gray-300 text-sm">
          <p className="mb-4">Create an account to:</p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <History className="w-4 h-4 text-purple-300" />
              <span>Track your moon sign history</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-purple-300" />
              <span>Save your results</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-purple-300" />
              <span>Secure your data</span>
            </div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-purple-300/30 focus:border-purple-400 focus:ring focus:ring-purple-400/20 transition text-white"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-purple-300/30 focus:border-purple-400 focus:ring focus:ring-purple-400/20 transition text-white"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition duration-200"
          >
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>
        
        <p className="mt-4 text-center text-sm text-gray-300">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-purple-300 hover:text-purple-200 font-medium"
          >
            {isLogin ? 'Sign Up' : 'Sign In'}
          </button>
        </p>
      </div>
    </div>
  );
};