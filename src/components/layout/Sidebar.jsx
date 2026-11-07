import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home,
  Sun,
  BookOpen,
  LayoutGrid,
  Calendar,
  Sparkles,
  RotateCcw,
  Trash2
} from 'lucide-react';
import { useMood } from '../../context/MoodContext';
import { MOODS } from '../../data/moodConstants';
import WashiTape from '../common/WashiTape';

export default function Sidebar() {
  const { getTodayMood, loadDemoData, clearAllData, confirmAction } = useMood();
  const todayMood = getTodayMood();
  const moodConfig = todayMood ? MOODS.find((m) => m.id === todayMood.mood) : null;

  const navItems = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/check-in', label: 'Mood Check-in', icon: Sun },
    { to: '/journal', label: 'My Journal', icon: BookOpen },
    { to: '/moodboards', label: 'Moodboard Studio', icon: LayoutGrid },
    { to: '/calendar', label: 'Mood Calendar', icon: Calendar },
    { to: '/insights', label: 'My Insights', icon: Sparkles }
  ];

  const handleClearData = () => {
    confirmAction({
      title: 'Reset Scrapbook Data?',
      message: 'This will clear all recorded moods, journal entries, and custom moodboards. You can reload the sample demo data anytime.',
      confirmText: 'Reset Everything',
      danger: true,
      onConfirm: () => clearAllData()
    });
  };

  return (
    <aside
      className="app-sidebar-wrapper"
      style={{
        background: 'var(--paper-white)',
        borderRight: '1px solid var(--border-paper)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '1.75rem 1.25rem',
        boxShadow: '2px 0 16px rgba(61,47,40,0.03)',
        overflowY: 'auto'
      }}
    >
      <div>
        {/* Brand Header */}
        <div style={{ position: 'relative', marginBottom: '2rem', padding: '0.5rem 0.5rem' }}>
          <WashiTape variant="peach" pattern="striped" width={75} rotation={-2} />
          <NavLink to="/" style={{ display: 'block', textDecoration: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{ fontSize: '1.75rem' }}>📓</span>
              <div>
                <h1
                  style={{
                    fontSize: '1.5rem',
                    letterSpacing: '0.04em',
                    fontWeight: 700,
                    margin: 0,
                    color: 'var(--text-brown)'
                  }}
                >
                  MOODSPACE
                </h1>
                <p
                  className="font-hand"
                  style={{
                    fontSize: '1.15rem',
                    color: 'var(--peach-deep)',
                    margin: 0,
                    lineHeight: 1
                  }}
                >
                  Every mood deserves a little space.
                </p>
              </div>
            </div>
          </NavLink>
        </div>

        {/* Navigation Links */}
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'nav-link-active' : ''}`
                }
                style={({ isActive }) => ({
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.95rem',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? 'var(--text-brown)' : 'var(--text-muted)',
                  backgroundColor: isActive ? 'var(--peach-soft)' : 'transparent',
                  border: isActive
                    ? '1px solid var(--peach)'
                    : '1px solid transparent',
                  transition: 'all var(--transition-fast)'
                })}
              >
                <Icon size={19} style={{ flexShrink: 0 }} />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Footer Area: Today's Status & Demo Controls */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
        {/* Today's Mood Status Card */}
        {todayMood && moodConfig ? (
          <div
            style={{
              padding: '0.85rem 1rem',
              backgroundColor: moodConfig.bgColor,
              borderRadius: 'var(--radius-sm)',
              border: `1px solid ${moodConfig.borderColor}`,
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}
          >
            <span style={{ fontSize: '1.6rem' }}>{moodConfig.emoji}</span>
            <div style={{ minWidth: 0, flex: 1 }}>
              <span
                style={{
                  fontSize: '0.72rem',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  color: moodConfig.textColor,
                  opacity: 0.8
                }}
              >
                Today's Mood
              </span>
              <p
                style={{
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  color: moodConfig.textColor,
                  margin: 0,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}
              >
                Feeling {moodConfig.label}
              </p>
            </div>
          </div>
        ) : (
          <NavLink
            to="/check-in"
            style={{
              padding: '0.75rem 1rem',
              backgroundColor: 'var(--bg-cream)',
              borderRadius: 'var(--radius-sm)',
              border: '1px dashed var(--border-paper)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              textDecoration: 'none'
            }}
          >
            <span style={{ fontSize: '1.3rem' }}>🌱</span>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              No check-in yet today.<br />
              <strong style={{ color: 'var(--peach-deep)' }}>Log your mood →</strong>
            </div>
          </NavLink>
        )}

        {/* Demo Data & Academic Presentation Bar */}
        <div
          style={{
            padding: '0.85rem',
            backgroundColor: 'var(--paper-cream)',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-paper)'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '0.5rem'
            }}
          >
            <span
              style={{
                fontSize: '0.72rem',
                textTransform: 'uppercase',
                fontWeight: 700,
                letterSpacing: '0.05em',
                color: 'var(--text-muted)'
              }}
            >
              Academic Demo
            </span>
            <span className="font-hand" style={{ fontSize: '0.95rem', color: 'var(--peach-deep)' }}>
              Sample Data
            </span>
          </div>

          <div style={{ display: 'flex', gap: '0.4rem' }}>
            <button
              onClick={loadDemoData}
              className="btn btn-secondary"
              style={{
                fontSize: '0.78rem',
                padding: '0.45rem 0.65rem',
                flex: 1,
                gap: '0.35rem'
              }}
              title="Populate sample moods, scrapbook entries and moodboards"
            >
              <RotateCcw size={13} />
              <span>Load Data</span>
            </button>
            <button
              onClick={handleClearData}
              className="btn btn-ghost"
              style={{
                fontSize: '0.78rem',
                padding: '0.45rem 0.65rem',
                color: 'var(--text-muted)',
                gap: '0.35rem'
              }}
              title="Clear all stored data"
            >
              <Trash2 size={13} />
              <span>Reset</span>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
