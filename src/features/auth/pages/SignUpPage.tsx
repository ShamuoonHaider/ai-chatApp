import { Link } from 'react-router-dom'

export function SignUpPage() {
  return (
    <section className="page-card">
      <h2>Sign Up</h2>
      <p>Create your account to start chatting with AI.</p>

      <form className="auth-form">
        <label>
          Name
          <input type="text" placeholder="Your name" />
        </label>

        <label>
          Email
          <input type="email" placeholder="you@example.com" />
        </label>

        <label>
          Password
          <input type="password" placeholder="Choose a strong password" />
        </label>

        <button type="submit">Create account</button>
      </form>

      <div className="page-actions">
        <Link to="/sign-in">Already have an account?</Link>
      </div>
    </section>
  )
}
