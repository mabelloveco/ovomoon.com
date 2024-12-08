export const calculateMoonSign = (date: Date, time: string): string => {
  const month = date.getMonth();
  const signs = [
    "Aries", "Taurus", "Gemini", "Cancer", 
    "Leo", "Virgo", "Libra", "Scorpio",
    "Sagittarius", "Capricorn", "Aquarius", "Pisces"
  ];
  
  const [hours, minutes] = time.split(':').map(Number);
  const hourInfluence = Math.floor(hours / 2);
  const signIndex = (month + hourInfluence) % 12;
  
  return signs[signIndex];
};