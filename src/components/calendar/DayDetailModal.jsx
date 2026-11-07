import React, { useState } from 'react';
import { MOODS, INTENSITY_LABELS } from '../../data/moodConstants';
import WashiTape from '../common/WashiTape';
import { X, Check, Trash2, Calendar as CalIcon, Edit3 } from 'lucide-react';

export default function DayDetailModal({
  dateStr,
  entry,
  isOpen,
  onClose,
  onSaveMood,
  onDeleteMood
}) {
  if (!isOpen || !dateStr) return null;

  const [isEditing, setIsEditing] = useState(!entry);
  const [selectedMoodId, setSelectedMoodId] = useState(entry ? entry.mood : 'calm');
  const [intensity, setIntensity] = useState(entry ? entry.intensity : 3);
  const [note, setNote] = useState(entry ? entry.note || '' : '');

  // Format date display
  const [year, month, day] = dateStr.split('-').map(Number);
  const dateObj = new Date(year, month - 1, day);
  const formattedDate = dateObj.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  const moodConfig = MOODS.find((m) => m.id === (isEditing ? selectedMoodId : entry?.mood)) || MOODS[0];

  const handleSave = (e) => {
    e.preventDefault();
    onSaveMood({
      date: dateStr,
      mood: selectedMoodId,
      intensity,
      note: note.trim()
    });
    setIsEditing(false);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content"
        style={{
          maxWidth: '520px',
          background: isEditing ? 'var(--paper-white)' : moodConfig.bgColor,
          borderColor: moodConfig.borderColor
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <WashiTape variant="peach" width={100} rotation={-1.5} />

        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <CalIcon size={18} color="var(--peach-deep)" />
            <div>
              <h3 style={{ fontSize: '1.25rem', margin: 0 }}>{formattedDate}</h3>
            </div>
          </div>
          <button onClick={onClose} className="btn-icon btn-ghost" aria-label="Close dialog">
            <X size={18} />
          </button>
        </div>

        <div className="modal-body">
          {entry && !isEditing ? (
            /* VIEW SAVED ENTRY */
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2.5rem',
                    boxShadow: 'var(--shadow-sm)',
                    border: `2px solid ${moodConfig.borderColor}`
                  }}
                >
                  {moodConfig.emoji}
                </div>
                <div>
                  <span
                    style={{
                      fontSize: '0.78rem',
                      textTransform: 'uppercase',
                      fontWeight: 700,
                      color: moodConfig.textColor
                    }}
                  >
                    Recorded Mood
                  </span>
                  <h3 style={{ fontSize: '1.5rem', margin: '2px 0', color: moodConfig.textColor }}>
                    Feeling {moodConfig.label}
                  </h3>
                  <p className="font-hand" style={{ fontSize: '1.15rem', color: moodConfig.textColor, margin: 0 }}>
                    “{moodConfig.tagline}”
                  </p>
                </div>
              </div>

              {/* Intensity indicator */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.65rem 1rem',
                  backgroundColor: 'rgba(255,255,255,0.7)',
                  borderRadius: 'var(--radius-sm)',
                  border: `1px solid ${moodConfig.borderColor}`
                }}
              >
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: moodConfig.textColor }}>
                  Felt Intensity:
                </span>
                <div style={{ display: 'flex', gap: '4px' }}>
                  {[1, 2, 3, 4, 5].map((lvl) => (
                    <div
                      key={lvl}
                      style={{
                        width: '16px',
                        height: '16px',
                        borderRadius: '50%',
                        backgroundColor:
                          lvl <= entry.intensity ? moodConfig.color : 'rgba(0,0,0,0.1)'
                      }}
                    />
                  ))}
                </div>
                <span style={{ fontSize: '0.8rem', color: moodConfig.textColor }}>
                  ({entry.intensity}/5 — {INTENSITY_LABELS[entry.intensity]})
                </span>
              </div>

              {/* Note */}
              {entry.note ? (
                <div
                  style={{
                    padding: '1rem 1.25rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    borderRadius: 'var(--radius-sm)',
                    borderLeft: `4px solid ${moodConfig.color}`,
                    fontFamily: 'var(--font-hand)',
                    fontSize: '1.3rem',
                    lineHeight: '1.45',
                    color: 'var(--text-brown)'
                  }}
                >
                  “{entry.note}”
                </div>
              ) : (
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontStyle: 'italic', margin: 0 }}>
                  No written reflection note was recorded for this day.
                </p>
              )}
            </div>
          ) : (
            /* EDIT OR CREATE FORM */
            <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label className="input-label">Select Mood for this Date</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
                  {MOODS.map((m) => {
                    const isSelected = selectedMoodId === m.id;
                    return (
                      <button
                        type="button"
                        key={m.id}
                        onClick={() => setSelectedMoodId(m.id)}
                        style={{
                          padding: '0.75rem 0.5rem',
                          borderRadius: 'var(--radius-sm)',
                          backgroundColor: isSelected ? m.bgColor : 'var(--paper-cream)',
                          border: isSelected ? `2px solid ${m.color}` : '1px solid var(--border-paper)',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '2px',
                          cursor: 'pointer'
                        }}
                      >
                        <span style={{ fontSize: '1.6rem' }}>{m.emoji}</span>
                        <span style={{ fontSize: '0.8rem', fontWeight: 600, color: m.textColor }}>
                          {m.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <label className="input-label" style={{ margin: 0 }}>Intensity</label>
                  <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>
                    {intensity}/5 — {INTENSITY_LABELS[intensity]}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={intensity}
                  onChange={(e) => setIntensity(Number(e.target.value))}
                  className="intensity-slider"
                />
              </div>

              <div>
                <label className="input-label" htmlFor="day-note">
                  Journal Reflection / Note
                </label>
                <textarea
                  id="day-note"
                  className="textarea-field"
                  placeholder="How was this day? Any memorable moment..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  style={{ minHeight: '80px', fontFamily: 'var(--font-hand)', fontSize: '1.2rem' }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '0.5rem' }}>
                {entry && (
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="btn btn-secondary"
                  >
                    Cancel Edit
                  </button>
                )}
                <button type="submit" className="btn btn-primary" style={{ gap: '0.35rem' }}>
                  <Check size={16} />
                  <span>{entry ? 'Update Day Entry' : 'Log Mood for Day'}</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Modal Footer for View mode */}
        {entry && !isEditing && (
          <div className="modal-footer" style={{ justifyContent: 'space-between' }}>
            <button
              onClick={() => {
                onDeleteMood(entry.id);
                onClose();
              }}
              className="btn btn-ghost"
              style={{ color: '#B83A3A', fontSize: '0.85rem', gap: '0.35rem' }}
            >
              <Trash2 size={15} />
              <span>Delete Entry</span>
            </button>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                onClick={() => setIsEditing(true)}
                className="btn btn-secondary"
                style={{ fontSize: '0.85rem', gap: '0.35rem' }}
              >
                <Edit3 size={15} />
                <span>Edit Entry</span>
              </button>
              <button onClick={onClose} className="btn btn-primary" style={{ fontSize: '0.85rem' }}>
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
