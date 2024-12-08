export const numerologyData = {
  1: {
    title: "The Leader",
    traits: ["Independent", "Creative", "Original", "Ambitious"],
    description: "Number 1 represents leadership, innovation, and new beginnings. You're a natural pioneer with strong creative and inventive abilities. Your independence and determination help you forge new paths."
  },
  2: {
    title: "The Mediator",
    traits: ["Diplomatic", "Cooperative", "Sensitive", "Peaceful"],
    description: "Number 2 signifies harmony, partnership, and diplomacy. You excel at bringing people together and finding balance in situations. Your intuitive and empathetic nature makes you an excellent mediator."
  },
  3: {
    title: "The Creator",
    traits: ["Expressive", "Social", "Artistic", "Optimistic"],
    description: "Number 3 embodies creativity, communication, and joy. You have a natural ability to express yourself through various forms of art and communication. Your optimistic nature brings light to others."
  },
  4: {
    title: "The Builder",
    traits: ["Practical", "Organized", "Reliable", "Hard-working"],
    description: "Number 4 represents stability, order, and determination. You're the foundation builder, creating solid structures in life through dedication and methodical work. Your practical nature helps manifest ideas into reality."
  },
  5: {
    title: "The Freedom Seeker",
    traits: ["Adventurous", "Versatile", "Progressive", "Energetic"],
    description: "Number 5 symbolizes freedom, change, and adventure. You thrive on variety and new experiences, bringing adaptability and progressive thinking to any situation. Your dynamic energy inspires others to embrace change."
  },
  6: {
    title: "The Nurturer",
    traits: ["Responsible", "Caring", "Harmonious", "Protective"],
    description: "Number 6 represents responsibility, love, and nurturing. You have a natural ability to care for others and create harmony in your environment. Your protective nature makes you an excellent guardian and advisor."
  },
  7: {
    title: "The Seeker",
    traits: ["Analytical", "Spiritual", "Intellectual", "Mysterious"],
    description: "Number 7 signifies wisdom, spirituality, and analysis. You're naturally drawn to seeking deeper understanding and truth. Your analytical mind combined with spiritual awareness brings unique insights."
  },
  8: {
    title: "The Achiever",
    traits: ["Powerful", "Ambitious", "Successful", "Material"],
    description: "Number 8 represents power, abundance, and material success. You have natural leadership abilities in business and finance. Your drive for success is balanced with a sense of material and spiritual abundance."
  },
  9: {
    title: "The Humanitarian",
    traits: ["Compassionate", "Generous", "Wise", "Universal"],
    description: "Number 9 symbolizes completion, wisdom, and universal love. You have a natural inclination toward helping others and seeing the bigger picture. Your compassionate nature makes you an excellent humanitarian."
  }
};

export const getNumberMeaning = (num: number) => {
  // Reduce multi-digit numbers to a single digit
  while (num > 9) {
    num = String(num).split('').reduce((acc, digit) => acc + parseInt(digit), 0);
  }
  return numerologyData[num as keyof typeof numerologyData];
};