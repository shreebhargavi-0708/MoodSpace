export const MOODS = [
  {
    id: 'happy',
    label: 'Happy',
    emoji: '☀️',
    iconName: 'Sun',
    tagline: 'Sunlit and joyful',
    color: '#F4B266',
    bgColor: '#FFF5E6',
    accentColor: '#F9D199',
    borderColor: '#EFCBAA',
    textColor: '#573312',
    themeName: 'peach-yellow',
    gradient: 'linear-gradient(135deg, #FFF6EB 0%, #FEE8D1 100%)'
  },
  {
    id: 'calm',
    label: 'Calm',
    emoji: '🍃',
    iconName: 'Wind',
    tagline: 'Gentle, balanced & grounded',
    color: '#8BAE88',
    bgColor: '#F1F7F0',
    accentColor: '#D7E5D5',
    borderColor: '#BDD2BA',
    textColor: '#2E472A',
    themeName: 'sage-cream',
    gradient: 'linear-gradient(135deg, #F5F9F4 0%, #E2EDE0 100%)'
  },
  {
    id: 'sad',
    label: 'Sad',
    emoji: '🌧️',
    iconName: 'CloudRain',
    tagline: 'A little rainy inside',
    color: '#8DA0BD',
    bgColor: '#F0F3F9',
    accentColor: '#D5DFF0',
    borderColor: '#B8C8E2',
    textColor: '#2C3A50',
    themeName: 'muted-blue',
    gradient: 'linear-gradient(135deg, #F3F6FB 0%, #DCE6F5 100%)'
  },
  {
    id: 'excited',
    label: 'Excited',
    emoji: '✨',
    iconName: 'Sparkles',
    tagline: 'Buzzing with spark & energy',
    color: '#E58A9F',
    bgColor: '#FDF0F4',
    accentColor: '#F8CAD5',
    borderColor: '#EEA9BA',
    textColor: '#5E1B2C',
    themeName: 'pink-coral',
    gradient: 'linear-gradient(135deg, #FFF0F4 0%, #FAD4DE 100%)'
  },
  {
    id: 'focused',
    label: 'Focused',
    emoji: '🎯',
    iconName: 'Target',
    tagline: 'Clear-minded and centered',
    color: '#9C88C2',
    bgColor: '#F4F0FB',
    accentColor: '#DCD0F4',
    borderColor: '#C3B3E5',
    textColor: '#3A2959',
    themeName: 'lilac-beige',
    gradient: 'linear-gradient(135deg, #F8F5FD 0%, #E6DCF9 100%)'
  },
  {
    id: 'overwhelmed',
    label: 'Overwhelmed',
    emoji: '☁️',
    iconName: 'Cloud',
    tagline: 'A full mind needing soft rest',
    color: '#9EABB3',
    bgColor: '#F3F6F8',
    accentColor: '#D5DEE3',
    borderColor: '#BCC9CF',
    textColor: '#334047',
    themeName: 'soft-grey-blue',
    gradient: 'linear-gradient(135deg, #F5F7F8 0%, #DCE3E7 100%)'
  }
];

export const INTENSITY_LABELS = {
  1: 'Very Mild',
  2: 'Mild',
  3: 'Moderate',
  4: 'Noticeable',
  5: 'Deeply Felt'
};

export const PAPER_STYLES = [
  { id: 'lined', name: 'Notebook Lines', className: 'paper-lined', icon: '📝', desc: 'Classic ruled cream sheet' },
  { id: 'kraft', name: 'Warm Kraft', className: 'paper-kraft', icon: '📦', desc: 'Textured warm paper' },
  { id: 'grid', name: 'Lavender Grid', className: 'paper-grid', icon: '📐', desc: 'Clean creative graph' },
  { id: 'floral', name: 'Sage Garden', className: 'paper-floral', icon: '🌿', desc: 'Gentle botanical border' },
  { id: 'polaroid', name: 'Polaroid Card', className: 'paper-polaroid', icon: '📷', desc: 'Editorial photo keepsake' },
  { id: 'minimal', name: 'Pure Linen', className: 'paper-minimal', icon: '📄', desc: 'Clean cozy simplicity' }
];

export const WASHI_TAPES = [
  { id: 'peach', color: 'rgba(239, 203, 170, 0.85)', pattern: 'stripes' },
  { id: 'lavender', color: 'rgba(220, 208, 244, 0.85)', pattern: 'dots' },
  { id: 'sage', color: 'rgba(215, 229, 213, 0.85)', pattern: 'clean' },
  { id: 'blush', color: 'rgba(243, 200, 214, 0.85)', pattern: 'cross' },
  { id: 'cream', color: 'rgba(245, 237, 224, 0.9)', pattern: 'vintage' }
];

export const CARD_TYPES = [
  { id: 'image', label: 'Photo Polaroid', icon: 'Image' },
  { id: 'quote', label: 'Thought & Quote', icon: 'Quote' },
  { id: 'color', label: 'Color Swatch', icon: 'Palette' },
  { id: 'note', label: 'Washi Note', icon: 'StickyNote' }
];
