import { NavLink, Outlet } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Dashboard', icon: '📊' },
  { path: '/risk-map', label: 'Risk Zones Map', icon: '🗺️' },
  { path: '/risk-trend', label: 'Risk Index Trend', icon: '📈' },
  { path: '/high-risk-beneficiaries', label: 'High-Risk Beneficiaries', icon: '👤' },
  { path: '/flagged-transactions', label: 'Flagged Transactions', icon: '🚩' },
  { path: '/anomaly-analysis', label: 'Anomaly Analysis', icon: '🔍' },
];

export default function Layout() {
  return (
    <div className="min-h-screen bg-slate-900 flex">
      <aside className="w-64 bg-slate-800 border-r border-slate-700 flex flex-col fixed h-full">
        <div className="p-6 border-b border-slate-700">
          <h1 className="text-lg font-semibold text-slate-100">Welfare Leakage</h1>
          <p className="text-xs text-slate-400 mt-1">Intelligence Platform</p>
        </div>
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-colors ${
                  isActive
                    ? 'bg-slate-700 text-blue-300'
                    : 'text-slate-400 hover:bg-slate-700/50 hover:text-slate-200'
                }`
              }
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
        <div className="p-4 border-t border-slate-700 text-xs text-slate-500">
          For Government Use • Audit & Accountability
        </div>
      </aside>
      <main className="flex-1 ml-64 p-8">
        <Outlet />
      </main>
    </div>
  );
}
