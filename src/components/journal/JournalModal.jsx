import React, { useState, useEffect } from 'react';
import { MOODS, PAPER_STYLES, WASHI_TAPES } from '../../data/moodConstants';
import WashiTape from '../common/WashiTape';
import { X, Check } from 'lucide-react';

const STICKER_OPTIONS = ['✨', '🌿', '☕', '🌸', '⭐', '💡', '📷', '🌧️', '🍃', '🕊️'];

export default function JournalModal({
  isOpen,
  entryToEdit = null,
  onClose,
  onSave
}) {
  if (!isOpen) return null;

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [mood, setMood] = useState('calm');
  const [paperStyle, setPaperStyle] = useState('lined');
  const [washiTape, setWashiTape] = useState('peach');
  const [sticker, setSticker] = useState('✨');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (entryToEdit) {
      setTitle(entryToEdit.title || '');
      setContent(entryToEdit.content || '');
      setMood(entryToEdit.mood || 'calm');
      setPaperStyle(entryToEdit.paperStyle || 'lined');
      setWashiTape(entryToEdit.washiTape || 'peach');
      setSticker(entryToEdit.sticker || '✨');
      setDate(entryToEdit.date || new Date().toISOString().split('T')[0]);
    } else {
      setTitle('');
      setContent('');
      setMood('calm');
      setPaperStyle('lined');
      setWashiTape('peach');
      setSticker('✨');
      setDate(new Date().toISOString().split('T')[0]);
    }
    setErrors({});
  }, [entryToEdit, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!title.trim()) newErrors.title = 'Please provide a title for your journal entry';
    if (!content.trim()) newErrors.content = 'Please write a few thoughts for this page';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSave({
      id: entryToEdit?.id,
      title: title.trim(),
      content: content.trim(),
      mood,
      paperStyle,
      washiTape,
      sticker,
      date
    });
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content"
        style={{ maxWidth: '640px' }}
        onClick={(e) => e.stopPropagation()}
      >
        <WashiTape variant={washiTape} width={110} rotation={-1.5} />

        <div className="modal-header">
          <div>
            <h2 style={{ fontSize: '1.4rem', margin: 0 }}>
              {entryToEdit ? 'Edit Journal Page' : 'New Journal Page'}
            </h2>
            <p className="font-hand" style={{ fontSize: '1.1rem', color: 'var(--peach-deep)', margin: 0 }}>
              Capture your thoughts in your digital scrapbook
            </p>
          </div>
          <button onClick={onClose} className="btn-icon btn-ghost" aria-label="Close modal">
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="modal-body" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Title & Date */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem' }}>
              <div>
                <label className="input-label" htmlFor="journal-title">
                  Page Title *
                </label>
                <input
                  id="journal-title"
                  type="text"
                  className="input-field"
                  placeholder="e.g. Afternoon Tea & Sketching..."
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                    if (errors.title) setErrors((prev) => ({ ...prev, title: null }));
                  }}
                  autoFocus
                />
                {errors.title && (
                  <span style={{ fontSize: '0.78rem', color: '#B83A3A', marginTop: '4px', display: 'block' }}>
                    {errors.title}
                  </span>
                )}
              </div>

              <div>
                <label className="input-label" htmlFor="journal-date">
                  Date
                </label>
                <input
                  id="journal-date"
                  type="date"
                  className="input-field"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>

            {/* Mood Selector */}
            <div>
              <label className="input-label">Attach a Mood</label>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(6, 1fr)',
                  gap: '0.5rem'
                }}
              >
                {MOODS.map((m) => {
                  const isSelected = m.id === mood;
                  return (
                    <button
                      type="button"
                      key={m.id}
                      onClick={() => setMood(m.id)}
                      style={{
                        padding: '0.5rem 0.25rem',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: isSelected ? m.bgColor : 'var(--paper-cream)',
                        border: isSelected ? `2px solid ${m.color}` : '1px solid var(--border-paper)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '2px',
                        cursor: 'pointer'
                      }}
                      title={m.label}
                    >
                      <span style={{ fontSize: '1.25rem' }}>{m.emoji}</span>
                      <span style={{ fontSize: '0.68rem', fontWeight: 600, color: m.textColor }}>
                        {m.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Content Textarea */}
            <div>
              <label className="input-label" htmlFor="journal-content">
                Your Thoughts & Memories *
              </label>
              <textarea
                id="journal-content"
                className={`textarea-field paper-${paperStyle}`}
                placeholder="Pour your heart onto this page. Write freely without judgment..."
                value={content}
                onChange={(e) => {
                  setContent(e.target.value);
                  if (errors.content) setErrors((prev) => ({ ...prev, content: null }));
                }}
                style={{
                  minHeight: '160px',
                  fontFamily: paperStyle === 'polaroid' ? 'var(--font-hand)' : 'inherit',
                  fontSize: paperStyle === 'polaroid' ? '1.3rem' : '1rem'
                }}
              />
              {errors.content && (
                <span style={{ fontSize: '0.78rem', color: '#B83A3A', marginTop: '4px', display: 'block' }}>
                  {errors.content}
                </span>
              )}
            </div>

            {/* Paper Style Picker */}
            <div>
              <label className="input-label">Paper Style</label>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(95px, 1fr))',
                  gap: '0.5rem'
                }}
              >
                {PAPER_STYLES.map((style) => (
                  <button
                    type="button"
                    key={style.id}
                    onClick={() => setPaperStyle(style.id)}
                    style={{
                      padding: '0.45rem',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: paperStyle === style.id ? 'var(--peach-soft)' : 'var(--paper-white)',
                      border:
                        paperStyle === style.id
                          ? '2px solid var(--peach-deep)'
                          : '1px solid var(--border-paper)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '2px'
                    }}
                  >
                    <span>{style.icon}</span>
                    <span>{style.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Washi Tape & Sticker Accents */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label className="input-label">Washi Tape Color</label>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {WASHI_TAPES.map((tape) => (
                    <button
                      type="button"
                      key={tape.id}
                      onClick={() => setWashiTape(tape.id)}
                      style={{
                        width: '28px',
                        height: '24px',
                        borderRadius: '3px',
                        backgroundColor: tape.color,
                        border: washiTape === tape.id ? '2px solid var(--text-brown)' : '1px solid rgba(0,0,0,0.15)',
                        cursor: 'pointer',
                        transform: washiTape === tape.id ? 'scale(1.15)' : 'scale(1)',
                        transition: 'transform 150ms ease'
                      }}
                      title={`Tape: ${tape.id}`}
                    />
                  ))}
                </div>
              </div>

              <div>
                <label className="input-label">Scrapbook Sticker</label>
                <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
                  {STICKER_OPTIONS.map((stk) => (
                    <button
                      type="button"
                      key={stk}
                      onClick={() => setSticker(stk)}
                      style={{
                        width: '28px',
                        height: '28px',
                        fontSize: '1rem',
                        borderRadius: '50%',
                        backgroundColor: sticker === stk ? 'var(--peach-soft)' : 'transparent',
                        border: sticker === stk ? '1.5px solid var(--peach-deep)' : '1px solid transparent',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {stk}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button type="button" onClick={onClose} className="btn btn-secondary">
              Cancel
            </button>
            <button type="submit" className="btn btn-primary" style={{ gap: '0.4rem' }}>
              <Check size={16} />
              <span>{entryToEdit ? 'Save Changes' : 'Pin to Journal'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
