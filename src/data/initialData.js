// Helper to get formatted date string for relative days
const getRelativeDate = (offsetDays = 0) => {
  const d = new Date();
  d.setDate(d.getDate() - offsetDays);
  return d.toISOString().split('T')[0];
};

export const INITIAL_MOODS = [
  {
    id: 'mood-today',
    date: getRelativeDate(0),
    mood: 'calm',
    intensity: 4,
    note: 'Quiet morning with a warm cup of matcha. Felt peaceful and centered as the soft rain tapped the window.',
    createdAt: new Date().toISOString()
  },
  {
    id: 'mood-yesterday',
    date: getRelativeDate(1),
    mood: 'excited',
    intensity: 5,
    note: 'Finished my design critique presentation! Everyone loved the tactile scrapbook palette and typography.',
    createdAt: new Date(Date.now() - 86400000).toISOString()
  },
  {
    id: 'mood-2',
    date: getRelativeDate(2),
    mood: 'focused',
    intensity: 4,
    note: 'Spent three uninterrupted hours at the wooden library table sketching layout wireframes.',
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString()
  },
  {
    id: 'mood-3',
    date: getRelativeDate(3),
    mood: 'happy',
    intensity: 5,
    note: 'Walked through the botanical greenhouse. Picked up a mini potted fern for my desk.',
    createdAt: new Date(Date.now() - 86400000 * 3).toISOString()
  },
  {
    id: 'mood-4',
    date: getRelativeDate(4),
    mood: 'overwhelmed',
    intensity: 3,
    note: 'So many deadlines piling up at once. Decided to take a 20-minute walk and breathe.',
    createdAt: new Date(Date.now() - 86400000 * 4).toISOString()
  },
  {
    id: 'mood-5',
    date: getRelativeDate(5),
    mood: 'calm',
    intensity: 4,
    note: 'Spent Sunday afternoon organizing colored gel pens and dried flowers into glass jars.',
    createdAt: new Date(Date.now() - 86400000 * 5).toISOString()
  },
  {
    id: 'mood-6',
    date: getRelativeDate(6),
    mood: 'sad',
    intensity: 2,
    note: 'A little nostalgic evening listening to old acoustic cassettes. Letting myself feel it softly.',
    createdAt: new Date(Date.now() - 86400000 * 6).toISOString()
  },
  {
    id: 'mood-7',
    date: getRelativeDate(7),
    mood: 'happy',
    intensity: 4,
    note: 'Shared warm blueberry scones with Maya on the porch steps.',
    createdAt: new Date(Date.now() - 86400000 * 7).toISOString()
  },
  {
    id: 'mood-8',
    date: getRelativeDate(9),
    mood: 'focused',
    intensity: 4,
    note: 'Deep research into editorial design archives and vintage paper ephemera.',
    createdAt: new Date(Date.now() - 86400000 * 9).toISOString()
  },
  {
    id: 'mood-9',
    date: getRelativeDate(12),
    mood: 'excited',
    intensity: 4,
    note: 'Found an antique wooden box at the flea market to store pressed leaves and photos.',
    createdAt: new Date(Date.now() - 86400000 * 12).toISOString()
  },
  {
    id: 'mood-10',
    date: getRelativeDate(15),
    mood: 'calm',
    intensity: 5,
    note: 'Slow golden hour watching the shadows stretch across the wooden floorboards.',
    createdAt: new Date(Date.now() - 86400000 * 15).toISOString()
  }
];

export const INITIAL_JOURNAL_ENTRIES = [
  {
    id: 'journal-1',
    title: 'Raindrops & Warm Ceramic Mugs',
    content: "The morning arrived wrapped in silver fog. I lit my lavender-honey beeswax candle and watched the water droplets race down the window glass.\n\nThere is something profoundly comforting about slow starts. No alarms, no urgent pings—just the gentle hum of the kettle and the texture of heavy paper under my favorite fountain pen. Today, I'm choosing to let my thoughts unfurl slowly, like fern fronds in early spring.",
    mood: 'calm',
    date: getRelativeDate(0),
    paperStyle: 'lined',
    washiTape: 'sage',
    sticker: '🌿',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'journal-2',
    title: 'The Design Critique Breakthrough!',
    content: "We presented our digital scrapbook aesthetic concept to Professor Vance and the entire studio cohort today!\n\nI was nervous at first—wondering if digital interfaces can truly capture the physical nostalgia of washi tape, torn linen paper, and handwritten margin notes. But the reception was pure warmth! Everyone said it felt like a breath of fresh air compared to typical cold, grey SaaS dashboards. Feeling so grateful and creatively energized right now!",
    mood: 'excited',
    date: getRelativeDate(1),
    paperStyle: 'grid',
    washiTape: 'peach',
    sticker: '✨',
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    updatedAt: new Date(Date.now() - 86400000).toISOString()
  },
  {
    id: 'journal-3',
    title: 'Botanical Sanctuary & Pressed Ferns',
    content: "Escaped to the university greenhouse between lectures. The humid, earthy scent of moss and damp terra-cotta instantly reset my nervous system.\n\nI sat on the weathered wooden bench beneath the giant monstera leaves and sketched the delicate venation of a maidenhair fern. Sometimes the best therapy is simply letting your eyes rest on living green things.",
    mood: 'happy',
    date: getRelativeDate(3),
    paperStyle: 'floral',
    washiTape: 'lavender',
    sticker: '🌸',
    createdAt: new Date(Date.now() - 86400000 * 3).toISOString(),
    updatedAt: new Date(Date.now() - 86400000 * 3).toISOString()
  },
  {
    id: 'journal-4',
    title: 'When the Noise Gets Too Loud',
    content: "Midterm season is reaching its peak and my mind felt completely oversaturated by 4 PM. Four different project deadlines, endless Slack pings, and that lingering feeling that you're always falling three steps behind.\n\nInstead of forcing another hour of groggy typing, I closed my laptop lid, put on my knitted coat, and walked down the river trail. Remembering: resting is not giving up; it is sharpening the pencil so the next line is clear.",
    mood: 'overwhelmed',
    date: getRelativeDate(4),
    paperStyle: 'kraft',
    washiTape: 'blush',
    sticker: '☁️',
    createdAt: new Date(Date.now() - 86400000 * 4).toISOString(),
    updatedAt: new Date(Date.now() - 86400000 * 4).toISOString()
  },
  {
    id: 'journal-5',
    title: 'Polaroid Memories from Golden Hour',
    content: "Found three unprinted polaroids in the bottom pocket of my tote bag from our autumn picnic at the orchard. The colors have that soft, nostalgic warmth that filters can never quite recreate.\n\nGlued one into my physical journal with peach washi tape. Moments are fleeting, but the warmth of an afternoon with people who accept you wholly remains etched in the heart forever.",
    mood: 'happy',
    date: getRelativeDate(7),
    paperStyle: 'polaroid',
    washiTape: 'peach',
    sticker: '📷',
    createdAt: new Date(Date.now() - 86400000 * 7).toISOString(),
    updatedAt: new Date(Date.now() - 86400000 * 7).toISOString()
  }
];

export const INITIAL_MOODBOARDS = [
  {
    id: 'board-cozy-autumn',
    title: 'Warm Sunday Morning & Wool Sweaters',
    description: 'Cozy textures, steamed chai, gentle morning rays, and dried botanicals.',
    createdAt: new Date(Date.now() - 86400000 * 8).toISOString(),
    cards: [
      {
        id: 'card-1',
        type: 'image',
        title: 'Morning Sunlit Ceramic Mug',
        content: 'Steamed oat milk chai with cinnamon dusting.',
        imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=80',
        color: null
      },
      {
        id: 'card-2',
        type: 'quote',
        title: 'Slow Living Mantra',
        content: '“There is beauty in doing things slowly, deliberately, and with wholehearted presence.”',
        imageUrl: null,
        color: null
      },
      {
        id: 'card-3',
        type: 'color',
        title: 'Blush Cream Washi',
        content: '#F3C8D6',
        imageUrl: null,
        color: '#F3C8D6'
      },
      {
        id: 'card-4',
        type: 'note',
        title: 'Daily Micro-Rituals',
        content: '1. Light the cardamom candle\n2. Open the blinds to let dust motes dance\n3. Write 3 lines before checking phone',
        imageUrl: null,
        color: '#FFF8E8'
      },
      {
        id: 'card-5',
        type: 'image',
        title: 'Pressed Botanicals on Kraft Paper',
        content: 'Collected wild ferns dried between heavy vintage books.',
        imageUrl: 'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?auto=format&fit=crop&w=700&q=80',
        color: null
      },
      {
        id: 'card-6',
        type: 'color',
        title: 'Sage Garden Herb',
        content: '#D7E5D5',
        imageUrl: null,
        color: '#D7E5D5'
      },
      {
        id: 'card-7',
        type: 'color',
        title: 'Roasted Chestnut Brown',
        content: '#543D32',
        imageUrl: null,
        color: '#543D32'
      }
    ]
  },
  {
    id: 'board-creative-studio',
    title: 'Tactile Studio & Creative Sparks',
    description: 'Sketchbooks, fountain pen ink, linen bindings, and design inspirations.',
    createdAt: new Date(Date.now() - 86400000 * 3).toISOString(),
    cards: [
      {
        id: 'card-studio-1',
        type: 'image',
        title: 'Linen Notebooks & Fountain Pens',
        content: 'Heavy cotton rag paper and sepia ink.',
        imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=700&q=80',
        color: null
      },
      {
        id: 'card-studio-2',
        type: 'quote',
        title: 'Artisan Philosophy',
        content: '“Do not fear mistakes. There are none—only unexpected textures in your work.”',
        imageUrl: null,
        color: null
      },
      {
        id: 'card-studio-3',
        type: 'note',
        title: 'Moodboard Rule',
        content: 'Collect what gives you goosebumps, not what trends dictate.',
        imageUrl: null,
        color: '#F4F0FB'
      },
      {
        id: 'card-studio-4',
        type: 'color',
        title: 'Soft Lavender Tint',
        content: '#DCD0F4',
        imageUrl: null,
        color: '#DCD0F4'
      },
      {
        id: 'card-studio-5',
        type: 'image',
        title: 'Wild Florals in Ceramic Vase',
        content: 'Delicate ranunculus and eucalyptus stems.',
        imageUrl: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=700&q=80',
        color: null
      }
    ]
  }
];
