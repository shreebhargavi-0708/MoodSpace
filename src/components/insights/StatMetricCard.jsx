import React from 'react';
import WashiTape from '../common/WashiTape';

export default function StatMetricCard({
  icon: Icon,
  title,
  value,
  subtitle,
  tapeColor = 'peach',
  accentColor = 'var(--peach-deep)',
  bgColor = 'var(--paper-white)',
  emoji = ''
}) {
  return (
    <div
      className="scrapbook-card"
      style={{
        padding: '1.75rem 1.5rem',
        position: 'relative',
        backgroundColor: bgColor,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <WashiTape variant={tapeColor} width={80} rotation={-1.5} />

      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>
            {title}
          </span>
          {Icon && (
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.7)',
                border: '1px solid var(--border-paper)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: accentColor
              }}
            >
              <Icon size={16} />
            </div>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.35rem' }}>
          {emoji && <span style={{ fontSize: '2rem', lineHeight: 1 }}>{emoji}</span>}
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '2.4rem',
              fontWeight: 700,
              color: 'var(--text-brown)',
              lineHeight: 1
            }}
          >
            {value}
          </span>
        </div>
      </div>

      {subtitle && (
        <div
          className="font-hand"
          style={{
            fontSize: '1.15rem',
            color: 'var(--text-muted)',
            marginTop: '0.75rem',
            borderTop: '1px dashed var(--border-paper)',
            paddingTop: '0.5rem'
          }}
        >
          {subtitle}
        </div>
      )}
    </div>
  );
}
