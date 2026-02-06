import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    const isAuthed = localStorage.getItem('qa-auth') === '1'
    if (isAuthed) {
      navigate('/', { replace: true })
    }
  }, [navigate])

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    if (!email || !password) return
    localStorage.setItem('qa-auth', '1')
    navigate('/', { replace: true })
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-logo">QA</div>
        <h1>QA Report System</h1>
        <p className="login-subtitle">Sistema de Gestion de Reportes de Errores</p>
        <form onSubmit={handleSubmit} className="login-form">
          <label>
            Correo Electronico
            <input
              type="email"
              placeholder="tu@empresa.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Contrasena
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div className="login-actions">
            <label className="login-remember">
              <input type="checkbox" /> Recordarme
            </label>
            <button type="button" className="link-button">Olvide mi contrasena</button>
          </div>
          <button type="submit" className="primary-button">Iniciar Sesion</button>
        </form>
        <div className="login-demo">
          <div><strong>QA:</strong> juan@empresa.com</div>
          <div><strong>Admin:</strong> admin@empresa.com</div>
          <div><strong>Contrasena:</strong> cualquiera (demo)</div>
        </div>
      </div>
    </div>
  )
}

