import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="page-card">
      <h2>404</h2>
      <p>The page you are looking for does not exist.</p>
      <div className="page-actions">
        <Link to="/sign-in">Go to sign in</Link>
      </div>
    </section>
  )
}
