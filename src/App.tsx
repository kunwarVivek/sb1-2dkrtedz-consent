import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Sidebar } from './components/layout/sidebar';
import { Header } from './components/layout/header';
import { Dashboard } from './pages/dashboard';
import { ConsentForms } from './pages/consent-forms';
import { Analytics } from './pages/analytics';
import { Users } from './pages/users';
import { PrivacyCenter } from './pages/privacy-center';
import { Settings } from './pages/settings';
import { Onboarding } from './pages/onboarding';
import { Billing } from './pages/billing';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex flex-1 flex-col">
            <Header />
            <main className="flex-1 overflow-auto bg-gray-50 p-6">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/forms" element={<ConsentForms />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/users" element={<Users />} />
                <Route path="/privacy" element={<PrivacyCenter />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/onboarding" element={<Onboarding />} />
                <Route path="/billing" element={<Billing />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </QueryClientProvider>
  );
}