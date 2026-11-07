import React from 'react';
import { NavLink } from 'react-router-dom';
import { useMood } from '../../context/MoodContext';
import { MOODS } from '../../data/moodConstants';
import WashiTape from '../common/WashiTape';
import { BookOpen, ArrowRight, PenLine } from 'lucide-react';

export default function RecentJournalSnippet({ onOpenNewEntry }) {
  const { journalEntries } = useMood();
  const recentEntries = journalEntries.slice(0, 2);

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
      <WashiTape variant="blush" pattern="dots" width={90} rotation={2} />

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
            <BookOpen size={18} color="var(--blush-deep)" />
            <h3 style={{ fontSize: '1.25rem', margin: 0 }}>Recent Journal Pages</h3>
          </div>

          <NavLink
            to="/journal"
            className="btn btn-ghost"
            style={{ fontSize: '0.85rem', gap: '0.35rem', color: 'var(--peach-deep)' }}
          >
            <span>View All</span>
            <ArrowRight size={14} />
          </NavLink>
        </div>

        {recentEntries.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {recentEntries.map((entry) => {
              const moodConfig = MOODS.find((m) => m.id === entry.mood);
              return (
                <NavLink
                  key={entry.id}
                  to="/journal"
                  className={`scrapbook-card ${entry.paperStyle ? `paper-${entry.paperStyle}` : 'paper-lined'}`}
                  style={{
                    padding: '1rem 1.25rem',
                    borderRadius: 'var(--radius-sm)',
                    textDecoration: 'none',
                    display: 'block',
                    transition: 'transform var(--transition-fast)'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '0.35rem'
                    }}
                  >
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      📅 {entry.date}
                    </span>
                    {moodConfig && (
                      <span
                        className="stamp-badge"
                        style={{
                          backgroundColor: moodConfig.bgColor,
                          color: moodConfig.textColor,
                          border: `1px solid ${moodConfig.borderColor}`,
                          fontSize: '0.72rem'
                        }}
                      >
                        {moodConfig.emoji} {moodConfig.label}
                      </span>
                    )}
                  </div>
                  <h4
                    style={{
                      fontSize: '1.05rem',
                      margin: '0 0 0.35rem 0',
                      color: 'var(--text-brown)'
                    }}
                  >
                    {entry.title}
                  </h4>
                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: 'var(--text-muted)',
                      margin: 0,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      lineHeight: '1.5'
                    }}
                  >
                    {entry.content}
                  </p>
                </NavLink>
              );
            })}
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
              Your scrapbook journal is currently waiting for its first page.
            </p>
            <NavLink to="/journal" className="btn btn-primary" style={{ fontSize: '0.85rem' }}>
              <PenLine size={14} />
              <span>Write First Journal Page</span>
            </NavLink>
          </div>
        )}
      </div>

      <div style={{ marginTop: '1.25rem', textAlign: 'right' }}>
        <NavLink
          to="/journal"
          className="btn btn-secondary"
          style={{ fontSize: '0.85rem', width: '100%', gap: '0.4rem' }}
        >
          <PenLine size={15} />
          <span>Add New Journal Page</span>
        </NavLink>
      </div>
    </div>
  );
}
