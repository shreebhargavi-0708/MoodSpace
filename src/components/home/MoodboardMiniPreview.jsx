import React from 'react';
import { NavLink } from 'react-router-dom';
import { useMood } from '../../context/MoodContext';
import WashiTape from '../common/WashiTape';
import { LayoutGrid, ArrowRight, Image as ImageIcon } from 'lucide-react';

export default function MoodboardMiniPreview() {
  const { moodboards } = useMood();
  const topBoard = moodboards[0];

  return (
    <div
      className="scrapbook-card"
      style={{
        padding: '1.75rem',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <WashiTape variant="peach" pattern="striped" width={90} rotation={-1.5} />

      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1.25rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <LayoutGrid size={18} color="var(--peach-deep)" />
            <h3 style={{ fontSize: '1.25rem', margin: 0 }}>Moodboard Studio</h3>
          </div>

          <NavLink
            to="/moodboards"
            className="btn btn-ghost"
            style={{ fontSize: '0.85rem', gap: '0.35rem', color: 'var(--peach-deep)' }}
          >
            <span>Open Studio</span>
            <ArrowRight size={14} />
          </NavLink>
        </div>

        {topBoard ? (
          <div>
            <div style={{ marginBottom: '1rem' }}>
              <h4 style={{ fontSize: '1.1rem', margin: '0 0 0.25rem 0', color: 'var(--text-brown)' }}>
                {topBoard.title}
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                {topBoard.cards.length} scrapbook pieces pinned
              </p>
            </div>

            {/* Mini preview card row */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '0.65rem'
              }}
            >
              {topBoard.cards.slice(0, 3).map((card) => {
                if (card.type === 'image' && card.imageUrl) {
                  return (
                    <div
                      key={card.id}
                      style={{
                        aspectRatio: '1/1',
                        borderRadius: 'var(--radius-xs)',
                        overflow: 'hidden',
                        backgroundColor: '#EDE5D8',
                        border: '1px solid var(--border-paper)',
                        position: 'relative'
                      }}
                    >
                      <img
                        src={card.imageUrl}
                        alt={card.title || 'Moodboard thumbnail'}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                  );
                } else if (card.type === 'color' && card.color) {
                  return (
                    <div
                      key={card.id}
                      style={{
                        aspectRatio: '1/1',
                        borderRadius: 'var(--radius-xs)',
                        backgroundColor: card.color,
                        border: '1px solid var(--border-paper)',
                        display: 'flex',
                        alignItems: 'flex-end',
                        padding: '6px'
                      }}
                    >
                      <span
                        style={{
                          fontSize: '0.68rem',
                          fontFamily: 'monospace',
                          background: 'rgba(255,255,255,0.85)',
                          padding: '1px 4px',
                          borderRadius: '3px'
                        }}
                      >
                        {card.content || card.color}
                      </span>
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={card.id}
                      style={{
                        aspectRatio: '1/1',
                        borderRadius: 'var(--radius-xs)',
                        backgroundColor: card.color || 'var(--paper-cream)',
                        border: '1px solid var(--border-paper)',
                        padding: '8px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-hand)',
                        lineHeight: '1.2',
                        overflow: 'hidden'
                      }}
                    >
                      <span style={{ fontWeight: 600 }}>{card.title}</span>
                      <span style={{ opacity: 0.8, marginTop: '2px' }}>{card.content}</span>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        ) : (
          <div
            style={{
              padding: '2rem 1rem',
              textAlign: 'center',
              backgroundColor: 'var(--paper-cream)',
              borderRadius: 'var(--radius-sm)',
              border: '1px dashed var(--border-paper)'
            }}
          >
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0 0 1rem 0' }}>
              No moodboards created yet.
            </p>
            <NavLink to="/moodboards" className="btn btn-primary" style={{ fontSize: '0.85rem' }}>
              <ImageIcon size={14} />
              <span>Create First Board</span>
            </NavLink>
          </div>
        )}
      </div>

      <div style={{ marginTop: '1.25rem' }}>
        <NavLink
          to="/moodboards"
          className="btn btn-secondary"
          style={{ fontSize: '0.85rem', width: '100%', gap: '0.4rem' }}
        >
          <LayoutGrid size={15} />
          <span>Explore Moodboard Studio</span>
        </NavLink>
      </div>
    </div>
  );
}
