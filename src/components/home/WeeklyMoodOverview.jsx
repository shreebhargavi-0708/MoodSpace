import React from 'react';
import { NavLink } from 'react-router-dom';
import { useMood } from '../../context/MoodContext';
import { MOODS } from '../../data/moodConstants';
import WashiTape from '../common/WashiTape';
import { Calendar, ArrowRight } from 'lucide-react';

export default function WeeklyMoodOverview() {
  const { moods } = useMood();

  // Generate last 7 days array
  const last7Days = Array.from({ length: 7 })
    .map((_, i) => {
      const d = new Date();
      d.setDate(d.getDate() - (6 - i));
      const dateStr = d.toISOString().split('T')[0];
      const entry = moods.find((m) => m.date === dateStr);
      const moodConfig = entry ? MOODS.find((item) => item.id === entry.mood) : null;
      return {
        dateStr,
        dayName: d.toLocaleDateString('en-US', { weekday: 'short' }),
        dayNum: d.getDate(),
        entry,
        moodConfig,
        isToday: i === 6
      };
    });

  // Calculate most frequent mood in these 7 days
  const recordedDays = last7Days.filter((d) => d.entry);
  const moodCounts = {};
  recordedDays.forEach((d) => {
    moodCounts[d.entry.mood] = (moodCounts[d.entry.mood] || 0) + 1;
  });
  let topMoodKey = null;
  let topMoodCount = 0;
  Object.entries(moodCounts).forEach(([m, count]) => {
    if (count > topMoodCount) {
      topMoodCount = count;
      topMoodKey = m;
    }
  });
  const topMoodConfig = topMoodKey ? MOODS.find((m) => m.id === topMoodKey) : null;

  return (
    <div
      className="scrapbook-card"
      style={{
        padding: '1.75rem',
        position: 'relative',
        marginBottom: '2rem'
      }}
    >
      <WashiTape variant="sage" pattern="clean" width={90} rotation={-1} />

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.75rem',
          marginBottom: '1.25rem'
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Calendar size={18} color="var(--sage-deep)" />
            <h3 style={{ fontSize: '1.25rem', margin: 0 }}>Past 7 Days Overview</h3>
          </div>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: '0.2rem 0 0 0' }}>
            {recordedDays.length} of 7 days recorded this week
          </p>
        </div>

        <NavLink
          to="/calendar"
          className="btn btn-ghost"
          style={{ fontSize: '0.85rem', gap: '0.35rem', color: 'var(--peach-deep)' }}
        >
          <span>Open Full Calendar</span>
          <ArrowRight size={14} />
        </NavLink>
      </div>

      {/* 7 Day Bubbles Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: '0.5rem',
          textAlign: 'center'
        }}
      >
        {last7Days.map((d) => (
          <div
            key={d.dateStr}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '0.75rem 0.25rem',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: d.isToday
                ? 'var(--peach-soft)'
                : d.entry
                ? d.moodConfig?.bgColor || 'var(--paper-white)'
                : 'transparent',
              border: d.isToday
                ? '1.5px solid var(--peach)'
                : d.entry
                ? `1px solid ${d.moodConfig?.borderColor || 'var(--border-paper)'}`
                : '1px dashed var(--border-paper)',
              transition: 'transform var(--transition-fast)'
            }}
          >
            <span
              style={{
                fontSize: '0.72rem',
                textTransform: 'uppercase',
                fontWeight: 600,
                color: d.isToday ? 'var(--peach-deep)' : 'var(--text-muted)'
              }}
            >
              {d.dayName}
            </span>
            <span
              style={{
                fontSize: '0.9rem',
                fontWeight: d.isToday ? 700 : 500,
                color: 'var(--text-brown)',
                marginBottom: '0.4rem'
              }}
            >
              {d.dayNum}
            </span>

            {d.entry && d.moodConfig ? (
              <div
                style={{
                  fontSize: '1.4rem',
                  lineHeight: 1,
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.06))'
                }}
                title={`${d.moodConfig.label} (Intensity ${d.entry.intensity}/5)`}
              >
                {d.moodConfig.emoji}
              </div>
            ) : (
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  border: '1px dashed var(--border-paper)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-faint)',
                  fontSize: '0.65rem'
                }}
              >
                —
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Weekly Insight Summary */}
      {topMoodConfig && (
        <div
          style={{
            marginTop: '1.25rem',
            padding: '0.75rem 1rem',
            backgroundColor: 'var(--paper-cream)',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-paper)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.5rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.2rem' }}>🌿</span>
            <span style={{ fontSize: '0.88rem', color: 'var(--text-brown)' }}>
              Weekly Pulse: You felt mostly{' '}
              <strong style={{ color: topMoodConfig.textColor }}>
                {topMoodConfig.label} {topMoodConfig.emoji}
              </strong>{' '}
              over recent days.
            </span>
          </div>
          <span className="font-hand" style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>
            Gentle rhythm
          </span>
        </div>
      )}
    </div>
  );
}
