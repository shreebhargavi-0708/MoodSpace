import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { MoodProvider, useMood } from './context/MoodContext';
import Sidebar from './components/layout/Sidebar';
import BottomNav from './components/layout/BottomNav';
import Header from './components/layout/Header';
import Toast from './components/layout/Toast';
import ConfirmModal from './components/common/ConfirmModal';

import HomePage from './pages/HomePage';
import CheckInPage from './pages/CheckInPage';
import JournalPage from './pages/JournalPage';
import MoodboardPage from './pages/MoodboardPage';
import CalendarPage from './pages/CalendarPage';
import InsightsPage from './pages/InsightsPage';

function AppLayout() {
  const { confirmModalConfig } = useMood();

  return (
    <div className="app-container">
      {/* Desktop Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="app-main">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/check-in" element={<CheckInPage />} />
            <Route path="/journal" element={<JournalPage />} />
            <Route path="/moodboards" element={<MoodboardPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <BottomNav />

      {/* Global In-App Toast Notifications */}
      <Toast />

      {/* Global Scrapbook Confirm Modal */}
      <ConfirmModal config={confirmModalConfig} />
    </div>
  );
}

export default function App() {
  return (
    <MoodProvider>
      <Router>
        <AppLayout />
      </Router>
    </MoodProvider>
  );
}
