import React from 'react';
import { NavLink } from 'react-router-dom';
import { Sun, Plus } from 'lucide-react';
import { useMood } from '../../context/MoodContext';
import { MOODS } from '../../data/moodConstants';

export default function Header() {
  const { getTodayMood } = useMood();
  const todayMood = getTodayMood();
  const moodConfig = todayMood ? MOODS.find((m) => m.id === todayMood.mood) : null;

  // Format date nicely: "Saturday, November 7"
  const today = new Date();
  const dateFormatted = today.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric'
  });

  return (
    <header className="top-header">
      {/* Left: Mobile Brand & Date */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div className="mobile-brand-wrapper">
          <NavLink to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
            <span style={{ fontSize: '1.4rem' }}>📓</span>
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.25rem', color: 'var(--text-brown)' }}>
              MOODSPACE
            </span>
          </NavLink>
        </div>

        <div className="desktop-date-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            📅 {dateFormatted}
          </span>
          <span
            className="font-hand"
            style={{
              fontSize: '1.05rem',
              color: 'var(--peach-deep)',
              background: 'var(--peach-soft)',
              padding: '2px 8px',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid var(--peach)'
            }}
          >
            A cozy corner for your mind
          </span>
        </div>
      </div>

      {/* Right: Quick Check-in or Today's Mood pill */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        {todayMood && moodConfig ? (
          <NavLink
            to="/check-in"
            className="btn btn-secondary"
            style={{
              padding: '0.45rem 0.95rem',
              fontSize: '0.875rem',
              backgroundColor: moodConfig.bgColor,
              borderColor: moodConfig.borderColor,
              color: moodConfig.textColor
            }}
          >
            <span>{moodConfig.emoji}</span>
            <span>Logged: {moodConfig.label}</span>
          </NavLink>
        ) : (
          <NavLink
            to="/check-in"
            className="btn btn-primary"
            style={{
              padding: '0.45rem 1rem',
              fontSize: '0.875rem',
              gap: '0.4rem'
            }}
          >
            <Sun size={15} />
            <span>Check-in Today</span>
          </NavLink>
        )}
      </div>
    </header>
  );
}
