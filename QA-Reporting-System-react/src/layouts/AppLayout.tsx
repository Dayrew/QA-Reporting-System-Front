import { NavLink, Outlet, useNavigate } from 'react-router-dom'

export default function AppLayout() {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('qa-auth')
    navigate('/login', { replace: true })
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="sidebar-brand">QA Reports</div>
        <nav className="sidebar-nav">
          <NavLink to="/" end>Dashboard</NavLink>
          <NavLink to="/errors">Errores</NavLink>
          <NavLink to="/reports">Reportes</NavLink>
          <NavLink to="/catalogs">Catalogos</NavLink>
          <NavLink to="/users">Usuarios</NavLink>
          <NavLink to="/settings">Configuracion</NavLink>
        </nav>
        <div className="sidebar-footer">
          juan<br />QA Tester
          <button type="button" className="link-button" onClick={handleLogout}>Cerrar sesion</button>
        </div>
      </aside>
      <main className="app-content">
        <Outlet />
      </main>
    </div>
  )
}
