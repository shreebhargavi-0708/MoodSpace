import React, { useState } from 'react';
import WashiTape from '../common/WashiTape';
import { ArrowUp, ArrowDown, Trash2, ImageOff, Quote as QuoteIcon, Palette, StickyNote } from 'lucide-react';

export default function MoodboardCard({
  card,
  index = 0,
  totalCards = 1,
  onMoveUp,
  onMoveDown,
  onDelete
}) {
  const [imageError, setImageError] = useState(false);

  // Subtle rotation for scrapbook feel
  const rotations = [-1.5, 1.2, -0.8, 1.6, -1.2, 0.7];
  const rotation = rotations[index % rotations.length];

  const washiColors = ['peach', 'lavender', 'sage', 'blush'];
  const washiColor = washiColors[index % washiColors.length];

  return (
    <div
      className="scrapbook-card interactive rotate-card-alt"
      style={{
        padding: '1.25rem',
        marginBottom: '1.5rem',
        breakInside: 'avoid',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        transform: `rotate(${rotation}deg)`,
        backgroundColor: card.type === 'note' && card.color ? card.color : 'var(--paper-white)',
        border: '1px solid var(--border-paper)',
        boxShadow: 'var(--shadow-paper)'
      }}
    >
      <WashiTape variant={washiColor} width={80} rotation={rotation > 0 ? -2 : 1.5} />

      {/* CARD CONTENT BY TYPE */}

      {/* 1. IMAGE POLAROID CARD */}
      {card.type === 'image' && (
        <div>
          <div
            className="polaroid-image-container"
            style={{
              aspectRatio: '4/3',
              borderRadius: 'var(--radius-xs)',
              overflow: 'hidden',
              backgroundColor: '#ECE3D7',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {imageError || !card.imageUrl ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: 'var(--text-faint)',
                  padding: '1rem',
                  textAlign: 'center'
                }}
              >
                <ImageOff size={28} />
                <span style={{ fontSize: '0.8rem' }}>Image keepsake unavailable</span>
              </div>
            ) : (
              <img
                src={card.imageUrl}
                alt={card.title || 'Moodboard memory'}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={() => setImageError(true)}
                loading="lazy"
              />
            )}
          </div>

          <div style={{ marginTop: '0.85rem' }}>
            {card.title && (
              <h4
                style={{
                  fontSize: '1.05rem',
                  margin: '0 0 0.25rem 0',
                  color: 'var(--text-brown)'
                }}
              >
                {card.title}
              </h4>
            )}
            {card.content && (
              <p
                className="font-hand"
                style={{
                  fontSize: '1.15rem',
                  color: 'var(--text-muted)',
                  margin: 0,
                  lineHeight: '1.3'
                }}
              >
                {card.content}
              </p>
            )}
          </div>
        </div>
      )}

      {/* 2. QUOTE CARD */}
      {card.type === 'quote' && (
        <div style={{ padding: '0.5rem 0.25rem' }}>
          <QuoteIcon size={24} color="var(--peach-deep)" style={{ opacity: 0.6, marginBottom: '0.5rem' }} />
          <blockquote
            style={{
              fontFamily: 'var(--font-heading)',
              fontStyle: 'italic',
              fontSize: '1.25rem',
              color: 'var(--text-brown)',
              lineHeight: '1.5',
              margin: '0 0 0.75rem 0'
            }}
          >
            “{card.content || card.title}”
          </blockquote>
          {card.title && card.content && (
            <div className="font-hand" style={{ fontSize: '1.15rem', color: 'var(--peach-deep)' }}>
              — {card.title}
            </div>
          )}
        </div>
      )}

      {/* 3. COLOR SWATCH CARD */}
      {card.type === 'color' && (
        <div>
          <div
            style={{
              width: '100%',
              height: '110px',
              borderRadius: 'var(--radius-xs)',
              backgroundColor: card.color || '#F3C8D6',
              boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.08)',
              marginBottom: '0.75rem'
            }}
          />
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <h4 style={{ fontSize: '1rem', margin: 0, color: 'var(--text-brown)' }}>
                {card.title || 'Color Swatch'}
              </h4>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                {card.content || 'Palette tone'}
              </span>
            </div>
            <code
              style={{
                fontFamily: 'monospace',
                fontSize: '0.82rem',
                backgroundColor: 'var(--bg-cream)',
                padding: '3px 7px',
                borderRadius: '4px',
                border: '1px solid var(--border-paper)'
              }}
            >
              {card.color}
            </code>
          </div>
        </div>
      )}

      {/* 4. NOTE CARD */}
      {card.type === 'note' && (
        <div style={{ padding: '0.5rem 0.25rem' }}>
          {card.title && (
            <h4
              style={{
                fontSize: '1.1rem',
                marginBottom: '0.5rem',
                color: 'var(--text-brown)'
              }}
            >
              📌 {card.title}
            </h4>
          )}
          <p
            className="font-hand"
            style={{
              fontSize: '1.3rem',
              color: 'var(--text-brown)',
              lineHeight: '1.45',
              margin: 0,
              whiteSpace: 'pre-wrap'
            }}
          >
            {card.content}
          </p>
        </div>
      )}

      {/* REARRANGE & DELETE ACTIONS */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '1rem',
          borderTop: '1px dashed rgba(61,47,40,0.1)',
          paddingTop: '0.65rem'
        }}
      >
        <div style={{ display: 'flex', gap: '0.25rem' }}>
          <button
            onClick={() => onMoveUp(card.id)}
            disabled={index === 0}
            className="btn-icon btn-ghost"
            style={{
              width: '26px',
              height: '26px',
              opacity: index === 0 ? 0.35 : 1
            }}
            title="Move earlier"
            aria-label="Move card earlier"
          >
            <ArrowUp size={13} />
          </button>
          <button
            onClick={() => onMoveDown(card.id)}
            disabled={index === totalCards - 1}
            className="btn-icon btn-ghost"
            style={{
              width: '26px',
              height: '26px',
              opacity: index === totalCards - 1 ? 0.35 : 1
            }}
            title="Move later"
            aria-label="Move card later"
          >
            <ArrowDown size={13} />
          </button>
        </div>

        <button
          onClick={() => onDelete(card.id)}
          className="btn-icon btn-ghost"
          style={{ width: '26px', height: '26px', color: '#B83A3A' }}
          title="Delete card"
          aria-label="Delete card"
        >
          <Trash2 size={13} />
        </button>
      </div>
    </div>
  );
}
