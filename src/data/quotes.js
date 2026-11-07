export const DAILY_QUOTES = [
  {
    id: 1,
    quote: "Be gentle with your hours today. Even small steps create quiet magic.",
    author: "Gentle Reminder",
    moodTag: "calm"
  },
  {
    id: 2,
    quote: "Every feeling you hold is just weather passing through your open sky.",
    author: "Sky Notes",
    moodTag: "sad"
  },
  {
    id: 3,
    quote: "You don't have to bloom all at once; roots grow best in the quiet dark.",
    author: "Botanical Wisdom",
    moodTag: "focused"
  },
  {
    id: 4,
    quote: "Let your curiosity lead the way today. A spark is all you ever need.",
    author: "Creative Soul",
    moodTag: "excited"
  },
  {
    id: 5,
    quote: "Pour a warm cup, take a slow breath, and honor the ground beneath you.",
    author: "Cozy Space",
    moodTag: "calm"
  },
  {
    id: 6,
    quote: "A joyful heart isn't free from storms; it just knows how to dance between rain drops.",
    author: "Little Sunshine",
    moodTag: "happy"
  },
  {
    id: 7,
    quote: "When things feel like too much, put down three thoughts and pick up one warm cup.",
    author: "Soft Harbor",
    moodTag: "overwhelmed"
  },
  {
    id: 8,
    quote: "Your space, your tempo, your pace. There is nothing to prove here.",
    author: "MOODSPACE",
    moodTag: "calm"
  },
  {
    id: 9,
    quote: "Sunlight always remembers the window sill, even after the longest night.",
    author: "Morning Light",
    moodTag: "happy"
  },
  {
    id: 10,
    quote: "Focus is not rigidity; it is love directed gently at one thing at a time.",
    author: "Quiet Desk",
    moodTag: "focused"
  },
  {
    id: 11,
    quote: "Give yourself permission to pause. Rest is an essential chapter in every story.",
    author: "Scrapbook Note",
    moodTag: "overwhelmed"
  },
  {
    id: 12,
    quote: "Celebrate the small wins: the made bed, the kind thought, the deep breath.",
    author: "Pocket Joy",
    moodTag: "happy"
  },
  {
    id: 13,
    quote: "Softness is your greatest strength. The river bends around stone and arrives at the ocean.",
    author: "River Musings",
    moodTag: "calm"
  },
  {
    id: 14,
    quote: "Your mind is a sketchbook. Let some pages be messy, playful, and alive.",
    author: "Artful Living",
    moodTag: "excited"
  },
  {
    id: 15,
    quote: "Hold space for your melancholy without making a permanent home in it.",
    author: "Tender Reflections",
    moodTag: "sad"
  },
  {
    id: 16,
    quote: "A simple moment noticed with gratitude becomes a golden thread in your day.",
    author: "Mindful Days",
    moodTag: "calm"
  },
  {
    id: 17,
    quote: "Notice what energizes your spirit today, and lean into that light.",
    author: "Daily Spark",
    moodTag: "excited"
  },
  {
    id: 18,
    quote: "Quiet progress is still progress. Trust the seeds you planted yesterday.",
    author: "Garden Musings",
    moodTag: "focused"
  },
  {
    id: 19,
    quote: "Unclench your jaw, soften your shoulders, and let the moment be enough.",
    author: "Breath & Body",
    moodTag: "overwhelmed"
  },
  {
    id: 20,
    quote: "You are the curator of your own little world. Paint it in colors of kindness.",
    author: "Scrapbook Curator",
    moodTag: "happy"
  },
  {
    id: 21,
    quote: "Collect gentle moments like pressed flowers between the pages of your life.",
    author: "Little Keepsakes",
    moodTag: "calm"
  },
  {
    id: 22,
    quote: "One mindful sentence can anchor a noisy day. Write it down and let it hold you.",
    author: "Journal Note",
    moodTag: "focused"
  },
  {
    id: 23,
    quote: "Wonder is everywhere when you look through eyes that aren't in a hurry.",
    author: "Slow Wanderer",
    moodTag: "excited"
  },
  {
    id: 24,
    quote: "Tears are the rain that helps the soil of the heart prepare for spring.",
    author: "Rainy Day Corner",
    moodTag: "sad"
  },
  {
    id: 25,
    quote: "Every mood deserves a little space, a little patience, and a lot of warmth.",
    author: "MOODSPACE",
    moodTag: "happy"
  }
];

export function getTodayQuote() {
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
  const index = Math.abs(dayOfYear) % DAILY_QUOTES.length;
  return DAILY_QUOTES[index];
}
