import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import "../styles/Navbar.css";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav>
      <div className="nav-brand">
        <Link to="/" className="brand-link">
          <h3>BlogPlatform</h3>
        </Link>
      </div>
      
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        
        {user ? (
          <div className="user-section">
            <Link to="/create" className="nav-link create-link">
              Create Post
            </Link>
            <div className="user-info">
              <span className="username">{user.username}</span>
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            </div>
          </div>
        ) : (
          <div className="auth-links">
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/register" className="nav-link register-link">
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}