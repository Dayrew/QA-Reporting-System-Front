import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import AppLayout from '../layouts/AppLayout'
import LoginPage from '../features/auth/pages/LoginPage'
import DashboardPage from '../features/dashboard/pages/DashboardPage'
import ErrorsPage from '../features/errors/pages/ErrorsPage'
import ReportsPage from '../features/reports/pages/ReportsPage'
import CatalogsPage from '../features/catalogs/pages/CatalogsPage'
import UsersPage from '../features/users/pages/UsersPage'
import SettingsPage from '../features/settings/pages/SettingsPage'

type RequireAuthProps = {
  children: JSX.Element
}

function RequireAuth({ children }: RequireAuthProps) {
  const location = useLocation()
  const isAuthed = localStorage.getItem('qa-auth') === '1'

  if (!isAuthed) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />
  }

  return children
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            <RequireAuth>
              <AppLayout />
            </RequireAuth>
          }
        >
          <Route index element={<DashboardPage />} />
          <Route path="errors" element={<ErrorsPage />} />
          <Route path="reports" element={<ReportsPage />} />
          <Route path="catalogs" element={<CatalogsPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
