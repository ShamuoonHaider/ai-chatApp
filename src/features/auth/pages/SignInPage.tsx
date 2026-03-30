import { Link } from 'react-router-dom'

export function SignInPage() {
  return (
    <section className="page-card">
      <h2>Sign In</h2>
      <p>Access your AI chat dashboard.</p>

      <form className="auth-form">
        <label>
          Email
          <input type="email" placeholder="you@example.com" />
        </label>

        <label>
          Password
          <input type="password" placeholder="••••••••" />
        </label>

        <button type="submit">Sign In</button>
      </form>

      <div className="page-actions">
        <Link to="/sign-up">Create account</Link>
        <Link to="/dashboard">Go to dashboard</Link>
      </div>
    </section>
  )
}
