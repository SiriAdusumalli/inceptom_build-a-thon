import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Layout from './components/Layout';
import Dashboard from './screens/Dashboard';
import RiskZonesMap from './screens/RiskZonesMap';
import RiskIndexTrend from './screens/RiskIndexTrend';
import HighRiskBeneficiaries from './screens/HighRiskBeneficiaries';
import FlaggedTransactions from './screens/FlaggedTransactions';
import AnomalyAnalysis from './screens/AnomalyAnalysis';
import DrillDownProfile from './screens/DrillDownProfile';

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="risk-map" element={<RiskZonesMap />} />
            <Route path="risk-trend" element={<RiskIndexTrend />} />
            <Route path="high-risk-beneficiaries" element={<HighRiskBeneficiaries />} />
            <Route path="flagged-transactions" element={<FlaggedTransactions />} />
            <Route path="anomaly-analysis" element={<AnomalyAnalysis />} />
            <Route path="profile/:entityType/:id" element={<DrillDownProfile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}
