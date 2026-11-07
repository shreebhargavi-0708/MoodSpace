import React from 'react';
import { MOODS } from '../../data/moodConstants';
import WashiTape from '../common/WashiTape';
import { X, Edit3, Trash2, Calendar } from 'lucide-react';

export default function JournalDetailModal({
  entry,
  isOpen,
  onClose,
  onEdit,
  onDelete
}) {
  if (!isOpen || !entry) return null;

  const moodConfig = MOODS.find((m) => m.id === entry.mood);
  const paperClass = entry.paperStyle ? `paper-${entry.paperStyle}` : 'paper-lined';

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className={`modal-content ${paperClass}`}
        style={{
          maxWidth: '680px',
          padding: '2.5rem 2rem 2rem 2rem',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <WashiTape
          variant={entry.washiTape || 'peach'}
          position="center"
          width={120}
          rotation={-1}
        />

        {/* Top Header Controls */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1.5rem',
            borderBottom: '1px dashed var(--border-paper)',
            paddingBottom: '1rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              📅 {entry.date}
            </span>
            {moodConfig && (
              <span
                className="stamp-badge"
                style={{
                  backgroundColor: moodConfig.bgColor,
                  color: moodConfig.textColor,
                  border: `1px solid ${moodConfig.borderColor}`,
                  fontSize: '0.75rem'
                }}
              >
                {moodConfig.emoji} Feeling {moodConfig.label}
              </span>
            )}
            {entry.sticker && (
              <span style={{ fontSize: '1.3rem' }} title="Scrapbook sticker">
                {entry.sticker}
              </span>
            )}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <button
              onClick={() => onEdit(entry)}
              className="btn btn-secondary"
              style={{ fontSize: '0.8rem', padding: '0.4rem 0.75rem', gap: '0.35rem' }}
            >
              <Edit3 size={14} />
              <span>Edit</span>
            </button>
            <button
              onClick={() => onDelete(entry)}
              className="btn btn-ghost"
              style={{ fontSize: '0.8rem', padding: '0.4rem 0.75rem', color: '#B83A3A', gap: '0.35rem' }}
            >
              <Trash2 size={14} />
              <span>Delete</span>
            </button>
            <button
              onClick={onClose}
              className="btn-icon btn-ghost"
              style={{ width: '32px', height: '32px' }}
              aria-label="Close page"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Entry Title */}
        <h1
          style={{
            fontSize: '1.9rem',
            color: 'var(--text-brown)',
            marginBottom: '1.25rem',
            lineHeight: '1.3'
          }}
        >
          {entry.title}
        </h1>

        {/* Entry Content */}
        <div
          style={{
            fontSize: entry.paperStyle === 'polaroid' ? '1.35rem' : '1.05rem',
            fontFamily: entry.paperStyle === 'polaroid' ? 'var(--font-hand)' : 'inherit',
            lineHeight: entry.paperStyle === 'lined' ? '28px' : '1.8',
            color: 'var(--text-brown)',
            whiteSpace: 'pre-wrap',
            marginBottom: '2rem'
          }}
        >
          {entry.content}
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px dashed var(--border-paper)',
            paddingTop: '1rem',
            fontSize: '0.8rem',
            color: 'var(--text-faint)'
          }}
        >
          <span className="font-hand" style={{ fontSize: '1.1rem', color: 'var(--peach-deep)' }}>
            MOODSPACE Keepsake Journal
          </span>
          <span>
            {entry.updatedAt ? `Last edited: ${new Date(entry.updatedAt).toLocaleTimeString()}` : ''}
          </span>
        </div>
      </div>
    </div>
  );
}
