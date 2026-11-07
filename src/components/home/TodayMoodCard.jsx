import React from 'react';
import { NavLink } from 'react-router-dom';
import { useMood } from '../../context/MoodContext';
import { MOODS } from '../../data/moodConstants';
import WashiTape from '../common/WashiTape';
import { Edit3, ArrowRight, Heart } from 'lucide-react';

export default function TodayMoodCard() {
  const { getTodayMood, saveMood } = useMood();
  const todayMood = getTodayMood();
  const moodConfig = todayMood ? MOODS.find((m) => m.id === todayMood.mood) : null;

  return (
    <div
      className="scrapbook-card"
      style={{
        padding: '2rem',
        background: moodConfig ? moodConfig.gradient : 'var(--paper-white)',
        borderColor: moodConfig ? moodConfig.borderColor : 'var(--border-paper)',
        position: 'relative',
        marginBottom: '2rem'
      }}
    >
      <WashiTape
        variant={moodConfig ? moodConfig.id === 'excited' ? 'blush' : moodConfig.id === 'calm' ? 'sage' : 'peach' : 'peach'}
        pattern="striped"
        width={100}
        rotation={-1.5}
      />

      {todayMood && moodConfig ? (
        /* TODAY ALREADY LOGGED */
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <div
                style={{
                  width: '68px',
                  height: '68px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.85)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2.5rem',
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
                    letterSpacing: '0.06em',
                    fontWeight: 700,
                    color: moodConfig.textColor,
                    opacity: 0.8
                  }}
                >
                  Today's Recorded Mood
                </span>
                <h2
                  style={{
                    fontSize: '1.85rem',
                    margin: '0.1rem 0 0.2rem 0',
                    color: moodConfig.textColor
                  }}
                >
                  Feeling {moodConfig.label}
                </h2>
                <p className="font-hand" style={{ fontSize: '1.15rem', color: moodConfig.textColor, margin: 0 }}>
                  “{moodConfig.tagline}”
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <NavLink
                to="/check-in"
                className="btn btn-secondary"
                style={{
                  backgroundColor: 'rgba(255,253,249,0.9)',
                  borderColor: moodConfig.borderColor,
                  color: moodConfig.textColor,
                  fontSize: '0.85rem',
                  gap: '0.4rem'
                }}
              >
                <Edit3 size={15} />
                <span>Update Today's Mood</span>
              </NavLink>
            </div>
          </div>

          {/* Intensity Meter */}
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
            <div style={{ display: 'flex', gap: '0.4rem' }}>
              {[1, 2, 3, 4, 5].map((lvl) => (
                <div
                  key={lvl}
                  style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    backgroundColor:
                      lvl <= todayMood.intensity ? moodConfig.color : 'rgba(0,0,0,0.08)',
                    border: '1.5px solid white',
                    boxShadow: lvl <= todayMood.intensity ? '0 1px 3px rgba(0,0,0,0.15)' : 'none',
                    transition: 'all 200ms ease'
                  }}
                  title={`Level ${lvl} of 5`}
                />
              ))}
            </div>
            <span style={{ fontSize: '0.82rem', color: moodConfig.textColor, opacity: 0.85 }}>
              ({todayMood.intensity}/5)
            </span>
          </div>

          {/* Note if provided */}
          {todayMood.note && (
            <div
              style={{
                padding: '1rem 1.25rem',
                backgroundColor: 'rgba(255, 255, 255, 0.75)',
                borderRadius: 'var(--radius-sm)',
                borderLeft: `4px solid ${moodConfig.color}`,
                fontFamily: 'var(--font-hand)',
                fontSize: '1.25rem',
                color: 'var(--text-brown)',
                lineHeight: '1.5'
              }}
            >
              “{todayMood.note}”
            </div>
          )}
        </div>
      ) : (
        /* TODAY NOT YET LOGGED */
        <div style={{ textAlign: 'center', padding: '1rem 0' }}>
          <div style={{ marginBottom: '1.25rem' }}>
            <span
              style={{
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                fontWeight: 700,
                color: 'var(--peach-deep)'
              }}
            >
              Daily Reflection
            </span>
            <h2 style={{ fontSize: '1.75rem', marginTop: '0.2rem', marginBottom: '0.5rem' }}>
              You haven't checked in with yourself today.
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '480px', margin: '0 auto 1.5rem auto', fontSize: '0.98rem' }}>
              Pick a mood that speaks to you right now, or tap check-in to add a journal note.
            </p>
          </div>

          {/* Quick Select Buttons */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '0.75rem',
              marginBottom: '1.5rem'
            }}
          >
            {MOODS.map((m) => (
              <button
                key={m.id}
                onClick={() => saveMood({ mood: m.id, intensity: 3, note: '' })}
                className="scrapbook-card interactive"
                style={{
                  padding: '1rem 0.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.4rem',
                  backgroundColor: m.bgColor,
                  borderColor: m.borderColor,
                  cursor: 'pointer'
                }}
              >
                <span style={{ fontSize: '1.85rem' }}>{m.emoji}</span>
                <span style={{ fontWeight: 600, fontSize: '0.9rem', color: m.textColor }}>
                  {m.label}
                </span>
                <span style={{ fontSize: '0.72rem', color: m.textColor, opacity: 0.75 }}>
                  1-Click Log
                </span>
              </button>
            ))}
          </div>

          <div>
            <NavLink to="/check-in" className="btn btn-primary" style={{ gap: '0.5rem' }}>
              <span>Open Full Check-in with Notes</span>
              <ArrowRight size={16} />
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
}
