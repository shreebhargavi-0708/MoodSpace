import React from 'react';
import { AlertCircle, X } from 'lucide-react';
import WashiTape from './WashiTape';

export default function ConfirmModal({ config }) {
  if (!config || !config.isOpen) return null;

  const { title, message, confirmText = 'Confirm', onConfirm, onCancel, danger = false } = config;

  return (
    <div className="modal-backdrop" onClick={onCancel}>
      <div
        className="modal-content"
        style={{ maxWidth: '440px', padding: '0' }}
        onClick={(e) => e.stopPropagation()}
      >
        <WashiTape variant={danger ? 'blush' : 'peach'} width={100} />

        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: danger ? '#FDF0F0' : '#FFF5E6',
                color: danger ? '#B83A3A' : '#B56B2D',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <AlertCircle size={18} />
            </div>
            <h3 style={{ fontSize: '1.2rem', margin: 0 }}>{title}</h3>
          </div>
          <button onClick={onCancel} className="btn-icon btn-ghost" aria-label="Close dialog">
            <X size={18} />
          </button>
        </div>

        <div className="modal-body" style={{ padding: '1.25rem 1.75rem' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', margin: 0, lineHeight: '1.6' }}>
            {message}
          </p>
        </div>

        <div className="modal-footer" style={{ padding: '1rem 1.75rem 1.25rem 1.75rem' }}>
          <button onClick={onCancel} className="btn btn-secondary">
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className={`btn ${danger ? 'btn-danger' : 'btn-primary'}`}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
