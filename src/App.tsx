import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ProfileProvider } from './context/ProfileContext';
import { SettingsProvider } from './context/SettingsContext';
import { AppLayout } from './layouts/AppLayout';

// Lazy load pages
const Landing = lazy(() => import('./pages/Landing'));
const Browse = lazy(() => import('./pages/Browse'));
const BrowseMovies = lazy(() => import('./pages/BrowseMovies'));
const BrowseSeries = lazy(() => import('./pages/BrowseSeries'));
const BrowseNew = lazy(() => import('./pages/BrowseNew'));
const Search = lazy(() => import('./pages/Search'));
const TitleDetails = lazy(() => import('./pages/TitleDetails'));
const Watch = lazy(() => import('./pages/Watch'));
const Kids = lazy(() => import('./pages/Kids'));
const MyList = lazy(() => import('./pages/MyList'));
const Downloads = lazy(() => import('./pages/Downloads'));
const Notifications = lazy(() => import('./pages/Notifications'));
const ProfilePicker = lazy(() => import('./pages/ProfilePicker'));
const SignIn = lazy(() => import('./pages/SignIn'));
const SignUp = lazy(() => import('./pages/SignUp'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));
const ResetPassword = lazy(() => import('./pages/ResetPassword'));
const Account = lazy(() => import('./pages/Account'));
const EditProfile = lazy(() => import('./pages/EditProfile'));
const ChangePassword = lazy(() => import('./pages/ChangePassword'));
const Billing = lazy(() => import('./pages/Billing'));
const Settings = lazy(() => import('./pages/Settings'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));
const AdminTitles = lazy(() => import('./pages/AdminTitles'));
const AdminUsers = lazy(() => import('./pages/AdminUsers'));
const AdminReports = lazy(() => import('./pages/AdminReports'));
const AdminSettings = lazy(() => import('./pages/AdminSettings'));
const About = lazy(() => import('./pages/About'));
const Help = lazy(() => import('./pages/Help'));
const LegalTerms = lazy(() => import('./pages/LegalTerms'));
const LegalPrivacy = lazy(() => import('./pages/LegalPrivacy'));
const NotFound = lazy(() => import('./pages/NotFound'));

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthed } = useAuth();
  return isAuthed ? <>{children}</> : <Navigate to="/signin" />;
};

const AdminRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthed, user } = useAuth();
  return isAuthed && user?.role === 'admin' ? <>{children}</> : <Navigate to="/browse" />;
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Pages */}
      <Route path="/" element={<Landing />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot" element={<ForgotPassword />} />
      <Route path="/reset" element={<ResetPassword />} />

      {/* Main Browse Pages (Free) */}
      <Route element={<AppLayout />}>
        <Route path="/browse" element={<Browse />} />
        <Route path="/browse/movies" element={<BrowseMovies />} />
        <Route path="/browse/series" element={<BrowseSeries />} />
        <Route path="/browse/new" element={<BrowseNew />} />
        <Route path="/search" element={<Search />} />
        <Route path="/title/:id" element={<TitleDetails />} />
        <Route path="/watch/:id" element={<Watch />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/my-list" element={<MyList />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profiles" element={<ProfilePicker />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="/legal/terms" element={<LegalTerms />} />
        <Route path="/legal/privacy" element={<LegalPrivacy />} />

        {/* Account (Protected) */}
        <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>} />
        <Route path="/account/profile" element={<ProtectedRoute><EditProfile /></ProtectedRoute>} />
        <Route path="/account/password" element={<ProtectedRoute><ChangePassword /></ProtectedRoute>} />
        <Route path="/account/billing" element={<ProtectedRoute><Billing /></ProtectedRoute>} />
        <Route path="/settings" element={<Settings />} />

        {/* Admin (Protected) */}
        <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
        <Route path="/admin/titles" element={<AdminRoute><AdminTitles /></AdminRoute>} />
        <Route path="/admin/users" element={<AdminRoute><AdminUsers /></AdminRoute>} />
        <Route path="/admin/reports" element={<AdminRoute><AdminReports /></AdminRoute>} />
        <Route path="/admin/settings" element={<AdminRoute><AdminSettings /></AdminRoute>} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <ProfileProvider>
          <SettingsProvider>
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-background"><div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" /></div>}>
              <AppRoutes />
            </Suspense>
          </SettingsProvider>
        </ProfileProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
