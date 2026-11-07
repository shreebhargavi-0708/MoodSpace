import React from 'react';
import ScrapbookSticker from '../common/ScrapbookSticker';

export default function WelcomeBanner() {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  };

  const today = new Date();
  const dateStr = today.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
        marginBottom: '2rem',
        position: 'relative'
      }}
    >
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
          <span
            style={{
              fontSize: '0.82rem',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              fontWeight: 700,
              color: 'var(--peach-deep)'
            }}
          >
            {dateStr}
          </span>
          <span style={{ color: 'var(--text-faint)' }}>•</span>
          <span className="font-hand" style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
            Digital Scrapbook & Journal
          </span>
        </div>

        <h1 style={{ fontSize: '2.4rem', color: 'var(--text-brown)', marginBottom: '0.4rem' }}>
          {getGreeting()}, <span className="font-hand" style={{ color: 'var(--peach-deep)', fontWeight: 600 }}>friend</span>.
        </h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', margin: 0 }}>
          How is your little world feeling today?
        </p>
      </div>

      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
        <ScrapbookSticker emoji="🌸" label="Bloom" bgColor="#FDF0F4" borderColor="#F8CAD5" rotation={-4} />
        <ScrapbookSticker emoji="✨" label="Magic" bgColor="#FFF5E6" borderColor="#F9D199" rotation={6} />
        <ScrapbookSticker emoji="🍃" label="Peace" bgColor="#F1F7F0" borderColor="#D7E5D5" rotation={-2} />
      </div>
    </div>
  );
}
