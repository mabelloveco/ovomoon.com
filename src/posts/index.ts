// src/posts/index.ts
import understandingMoonPhases from "./understanding-moon-phases.md?raw";
import astrologyDecisions from "./how-astrology-shapes-decisions.md?raw";
import newMoonRituals from "./building-rituals-new-moon.md?raw";

export const posts = [
  {
    slug: "understanding-moon-phases",
    title: "Understanding Moon Phases and Your Energy",
    content: understandingMoonPhases,
  },
  {
    slug: "how-astrology-shapes-decisions",
    title: "How Astrology Shapes Daily Decision Making",
    content: astrologyDecisions,
  },
  {
    slug: "building-rituals-new-moon",
    title: "Building Rituals Around the New Moon",
    content: newMoonRituals,
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
