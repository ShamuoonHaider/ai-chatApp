import { Link } from 'react-router-dom'

export function DashboardPage() {
  return (
    <section className="page-card">
      <h2>Dashboard</h2>
      <p>Welcome to your AI chat app dashboard.</p>

      <div className="page-actions">
        <Link to="/sign-in">Sign out</Link>
      </div>
    </section>
  )
}
