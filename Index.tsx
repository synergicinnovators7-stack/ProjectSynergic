import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { NotificationProvider } from './contexts/NotificationContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AnnouncementsPage from './pages/AnnouncementsPage';
import StaffDirectoryPage from './pages/StaffDirectoryPage';
import AssignmentsPage from './pages/AssignmentsPage';
import ParentPortalPage from './pages/ParentPortalPage';
import BlogPage from './pages/BlogPage';
import AdminDashboard from './pages/AdminDashboard';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <ThemeProvider>
      <NotificationProvider>
        <AuthProvider>
          <Router>
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/announcements" element={<AnnouncementsPage />} />
                <Route path="/staff" element={<StaffDirectoryPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route 
                  path="/assignments" 
                  element={
                    <ProtectedRoute roles={['staff', 'admin']}>
                      <AssignmentsPage />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/parent-portal" 
                  element={
                    <ProtectedRoute roles={['parent']}>
                      <ParentPortalPage />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/admin-dashboard" 
                  element={
                    <ProtectedRoute roles={['admin']}>
                      <AdminDashboard />
                    </ProtectedRoute>
                  } 
                />
              </Routes>
            </Layout>
          </Router>
        </AuthProvider>
      </NotificationProvider>
    </ThemeProvider>
  );
}

export default App;
