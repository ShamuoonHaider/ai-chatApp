import { NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>AI Chat App</h1>
        <nav className="app-nav" aria-label="Primary">
          <NavLink to="/sign-in">Sign In</NavLink>
          <NavLink to="/sign-up">Sign Up</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </nav>
      </header>
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
