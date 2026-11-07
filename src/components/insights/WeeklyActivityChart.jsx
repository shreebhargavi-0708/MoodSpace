import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import WashiTape from '../common/WashiTape';
import { BarChart3 } from 'lucide-react';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function WeeklyActivityChart({ moods }) {
  if (!moods || moods.length === 0) {
    return null;
  }

  // Count moods by day of the week
  const dayCounts = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
  moods.forEach((m) => {
    const parts = m.date.split('-').map(Number);
    const d = new Date(parts[0], parts[1] - 1, parts[2]);
    const dayOfWeek = d.getDay();
    dayCounts[dayOfWeek] = (dayCounts[dayOfWeek] || 0) + 1;
  });

  const chartData = DAYS.map((dayName, idx) => ({
    day: dayName,
    checkIns: dayCounts[idx] || 0
  }));

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div
          style={{
            backgroundColor: 'var(--paper-white)',
            border: '1px solid var(--border-paper)',
            padding: '6px 12px',
            borderRadius: 'var(--radius-sm)',
            boxShadow: 'var(--shadow-paper)',
            fontSize: '0.85rem'
          }}
        >
          <strong style={{ color: 'var(--text-brown)' }}>{data.day}</strong>: {data.checkIns} check-in{data.checkIns !== 1 ? 's' : ''}
        </div>
      );
    }
    return null;
  };

  return (
    <div
      className="scrapbook-card"
      style={{
        padding: '2rem',
        position: 'relative'
      }}
    >
      <WashiTape variant="sage" pattern="clean" width={95} rotation={1.5} />

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
        <BarChart3 size={18} color="var(--sage-deep)" />
        <h3 style={{ fontSize: '1.3rem', margin: 0 }}>Check-in Frequency by Day</h3>
      </div>

      <div style={{ width: '100%', height: '220px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <XAxis
              dataKey="day"
              tickLine={false}
              stroke="var(--text-faint)"
              fontSize={12}
            />
            <YAxis
              allowDecimals={false}
              tickLine={false}
              stroke="var(--text-faint)"
              fontSize={12}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar
              dataKey="checkIns"
              fill="#D7E5D5"
              stroke="#BDD2BA"
              strokeWidth={1.5}
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <p className="font-hand" style={{ fontSize: '1.1rem', color: 'var(--text-muted)', margin: '0.75rem 0 0 0', textAlign: 'center' }}>
        Shows which days of the week you tend to visit your scrapbook most often.
      </p>
    </div>
  );
}
