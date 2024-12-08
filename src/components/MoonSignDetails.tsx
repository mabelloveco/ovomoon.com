import React from 'react';
import { Sparkles } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import { ShareResult } from './ShareResult';

interface MoonSignDetailsProps {
  sign: string;
  onSaveClick: () => void;
}

const moonSignData: Record<string, {
  element: string;
  quality: string;
  traits: string[];
  strengths: string[];
  challenges: string[];
  description: string;
}> = {
  Aries: {
    element: "Fire",
    quality: "Cardinal",
    traits: ["Passionate", "Impulsive", "Energetic", "Independent"],
    strengths: ["Quick emotional processing", "Natural leadership", "Enthusiasm"],
    challenges: ["Patience", "Emotional restraint", "Considering others' feelings"],
    description: "With the Moon in Aries, you process emotions quickly and intensely. You're naturally brave and independent, with a strong need for emotional freedom and spontaneity. Your emotional responses are direct and passionate."
  },
  Taurus: {
    element: "Earth",
    quality: "Fixed",
    traits: ["Patient", "Reliable", "Sensual", "Stubborn"],
    strengths: ["Emotional stability", "Loyalty", "Practicality"],
    challenges: ["Adaptability", "Letting go", "Emotional flexibility"],
    description: "Moon in Taurus brings a strong need for emotional security and comfort. You find peace through tangible experiences and have a deep appreciation for life's sensual pleasures. Your emotions are steady and reliable."
  },
  Gemini: {
    element: "Air",
    quality: "Mutable",
    traits: ["Curious", "Adaptable", "Communicative", "Versatile"],
    strengths: ["Mental agility", "Communication skills", "Adaptability"],
    challenges: ["Emotional depth", "Focus", "Consistency"],
    description: "Your Moon in Gemini indicates an intellectual approach to emotions. You process feelings through communication and analysis, with a need for mental stimulation and variety in emotional experiences."
  },
  Cancer: {
    element: "Water",
    quality: "Cardinal",
    traits: ["Nurturing", "Intuitive", "Protective", "Empathetic"],
    strengths: ["Deep emotional understanding", "Nurturing abilities", "Intuition"],
    challenges: ["Oversensitivity", "Mood swings", "Letting go"],
    description: "With Moon in Cancer, you're in your lunar home. You have profound emotional depth and intuition, with a strong need to nurture and be nurtured. Your emotional memory is powerful and influential."
  },
  Leo: {
    element: "Fire",
    quality: "Fixed",
    traits: ["Generous", "Dramatic", "Warm-hearted", "Proud"],
    strengths: ["Emotional expression", "Creativity", "Leadership"],
    challenges: ["Need for attention", "Pride", "Emotional drama"],
    description: "Moon in Leo gives you a naturally dramatic and expressive emotional nature. You need recognition and appreciation, with a flair for turning emotional experiences into creative expressions."
  },
  Virgo: {
    element: "Earth",
    quality: "Mutable",
    traits: ["Analytical", "Practical", "Health-conscious", "Detail-oriented"],
    strengths: ["Problem-solving", "Service-oriented", "Attention to detail"],
    challenges: ["Self-criticism", "Overthinking", "Perfectionism"],
    description: "Your Moon in Virgo suggests you process emotions through analysis and practical action. You find emotional security through order, routine, and being of service to others."
  },
  Libra: {
    element: "Air",
    quality: "Cardinal",
    traits: ["Diplomatic", "Harmonious", "Partnership-oriented", "Fair"],
    strengths: ["Social grace", "Diplomacy", "Balance"],
    challenges: ["Indecision", "Dependency", "Conflict avoidance"],
    description: "With Moon in Libra, you seek emotional harmony and balance. Relationships are crucial to your emotional well-being, and you have a natural ability to see all sides of emotional situations."
  },
  Scorpio: {
    element: "Water",
    quality: "Fixed",
    traits: ["Intense", "Passionate", "Mysterious", "Transformative"],
    strengths: ["Emotional depth", "Psychological insight", "Resilience"],
    challenges: ["Trust issues", "Emotional intensity", "Control"],
    description: "Moon in Scorpio brings profound emotional depth and intensity. You feel things deeply and have powerful intuition, with a need for emotional truth and transformation."
  },
  Sagittarius: {
    element: "Fire",
    quality: "Mutable",
    traits: ["Optimistic", "Adventurous", "Freedom-loving", "Philosophical"],
    strengths: ["Optimism", "Adaptability", "Vision"],
    challenges: ["Commitment", "Focus", "Emotional restraint"],
    description: "Your Moon in Sagittarius indicates an emotional need for freedom and expansion. You process feelings through philosophy and adventure, maintaining an optimistic outlook on life."
  },
  Capricorn: {
    element: "Earth",
    quality: "Cardinal",
    traits: ["Ambitious", "Responsible", "Disciplined", "Reserved"],
    strengths: ["Emotional control", "Responsibility", "Achievement"],
    challenges: ["Emotional expression", "Vulnerability", "Work-life balance"],
    description: "With Moon in Capricorn, you have a structured approach to emotions. You find security through achievement and responsibility, with a strong need for emotional self-sufficiency."
  },
  Aquarius: {
    element: "Air",
    quality: "Fixed",
    traits: ["Innovative", "Humanitarian", "Independent", "Original"],
    strengths: ["Objectivity", "Innovation", "Social consciousness"],
    challenges: ["Emotional detachment", "Unpredictability", "Convention"],
    description: "Moon in Aquarius gives you a unique and innovative emotional nature. You process feelings through intellectual understanding and have a strong need for emotional freedom and originality."
  },
  Pisces: {
    element: "Water",
    quality: "Mutable",
    traits: ["Compassionate", "Artistic", "Intuitive", "Dreamy"],
    strengths: ["Empathy", "Creativity", "Spiritual connection"],
    challenges: ["Boundaries", "Reality check", "Emotional clarity"],
    description: "Your Moon in Pisces brings heightened emotional sensitivity and intuition. You're deeply compassionate and artistic, with a strong connection to the collective unconscious."
  }
};

export const MoonSignDetails: React.FC<MoonSignDetailsProps> = ({ sign, onSaveClick }) => {
  const { user } = useAuthStore();
  const signData = moonSignData[sign];

  if (!signData) {
    return null;
  }

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 mt-6">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-5 h-5 text-yellow-200" />
        <h3 className="text-xl font-bold text-yellow-200">Your Moon Sign: {sign}</h3>
      </div>
      
      <div className="space-y-4">
        <div className="flex gap-4 text-sm">
          <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-200">
            Element: {signData.element}
          </span>
          <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-200">
            Quality: {signData.quality}
          </span>
        </div>

        <p className="text-gray-200">{signData.description}</p>

        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="space-y-2">
            <h4 className="font-medium text-purple-200">Key Traits</h4>
            <ul className="list-disc list-inside text-gray-200">
              {signData.traits.map((trait, index) => (
                <li key={index}>{trait}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium text-purple-200">Strengths</h4>
            <ul className="list-disc list-inside text-gray-200">
              {signData.strengths.map((strength, index) => (
                <li key={index}>{strength}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-4">
          <h4 className="font-medium text-purple-200 mb-2">Growth Opportunities</h4>
          <ul className="list-disc list-inside text-gray-200">
            {signData.challenges.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <ShareResult moonSign={sign} />
          {!user && (
            <button
              onClick={onSaveClick}
              className="px-8 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition duration-200 min-w-[120px]"
            >
              Save
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoonSignDetails;