import React from 'react';
import { useMood } from '../../context/MoodContext';
import { CheckCircle2, Info, AlertTriangle, X } from 'lucide-react';

export default function Toast() {
  const { toasts, removeToast } = useMood();

  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="toast-container" role="region" aria-live="polite">
      {toasts.map((toast) => {
        let Icon = CheckCircle2;
        let toastClass = 'toast-success';
        let iconColor = 'var(--sage-deep)';

        if (toast.type === 'info') {
          Icon = Info;
          toastClass = 'toast-info';
          iconColor = 'var(--lavender-deep)';
        } else if (toast.type === 'warning' || toast.type === 'error') {
          Icon = AlertTriangle;
          toastClass = 'toast-warning';
          iconColor = 'var(--peach-deep)';
        }

        return (
          <div key={toast.id} className={`toast-item ${toastClass}`}>
            <Icon size={18} color={iconColor} style={{ flexShrink: 0 }} />
            <span style={{ fontSize: '0.9rem', flex: 1 }}>{toast.message}</span>
            <button
              onClick={() => removeToast(toast.id)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--text-faint)',
                padding: '2px',
                display: 'flex',
                alignItems: 'center'
              }}
              aria-label="Dismiss notification"
            >
              <X size={14} />
            </button>
          </div>
        );
      })}
    </div>
  );
}
