import React, { useState } from 'react';
import WashiTape from '../common/WashiTape';
import { X, Check } from 'lucide-react';

export default function NewBoardModal({ isOpen, onClose, onCreateBoard }) {
  if (!isOpen) return null;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Please provide a name for your moodboard');
      return;
    }
    onCreateBoard(title.trim(), description.trim());
    setTitle('');
    setDescription('');
    setError('');
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content"
        style={{ maxWidth: '480px' }}
        onClick={(e) => e.stopPropagation()}
      >
        <WashiTape variant="sage" width={95} rotation={-2} />

        <div className="modal-header">
          <div>
            <h2 style={{ fontSize: '1.35rem', margin: 0 }}>Create New Moodboard</h2>
            <p className="font-hand" style={{ fontSize: '1.05rem', color: 'var(--peach-deep)', margin: 0 }}>
              Curate a fresh corner of inspiration
            </p>
          </div>
          <button onClick={onClose} className="btn-icon btn-ghost" aria-label="Close modal">
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="modal-body" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <label className="input-label" htmlFor="board-title">
                Moodboard Title *
              </label>
              <input
                id="board-title"
                type="text"
                className="input-field"
                placeholder="e.g. Summer Memories, Quiet Spaces, Studio Palette..."
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  if (error) setError('');
                }}
                autoFocus
              />
              {error && (
                <span style={{ fontSize: '0.78rem', color: '#B83A3A', marginTop: '4px', display: 'block' }}>
                  {error}
                </span>
              )}
            </div>

            <div>
              <label className="input-label" htmlFor="board-desc">
                Short Description (optional)
              </label>
              <textarea
                id="board-desc"
                className="textarea-field"
                placeholder="What feelings, aesthetics, or ideas does this board explore?"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{ minHeight: '80px' }}
              />
            </div>
          </div>

          <div className="modal-footer">
            <button type="button" onClick={onClose} className="btn btn-secondary">
              Cancel
            </button>
            <button type="submit" className="btn btn-primary" style={{ gap: '0.4rem' }}>
              <Check size={16} />
              <span>Create Board</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
