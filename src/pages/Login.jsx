
import React, { useState } from 'react';
import { useNavigate, Link, Navigate } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
    localStorage.setItem('user', user);

    // Dummy validation
    if (user && password) {
      localStorage.setItem('Student_Login', 'true');
      let slogin = localStorage.getItem('Student_Login');
      console.log('stdlogin', slogin);
    } else {
      alert('Please enter both username and password');
    }
  };


  const isLogin = localStorage.getItem('Student_Login') === 'true';
  console.log("isLogin", isLogin);

  if (isLogin) {
    return <Navigate to='/jobs' replace />;
  }

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(to right, #6a11cb, #2575fc)', // Gradient background
  };

  const cardStyle = {
    background: 'white',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    // boxShadow: '0 10px 20px rgb(250, 7, 7)',
    width: '100%',
    maxWidth: '380px',
    transition: 'all 0.3s ease-in-out',
  };

  const cardHoverStyle = {
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
    // boxShadow: '0 10px 20px rgb(7, 250, 39)',
  };

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: '600',
    background: 'linear-gradient(to left, #ff7e5f, #feb47b)',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    textAlign: 'center',
  };

  const formLabelStyle = {
    fontWeight: '500',
    fontSize: '1rem',
    color: '#333',
  };

  const inputStyle = {
    padding: '15px',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '1px solid #ddd',
    transition: 'all 0.3s ease',
  };

  const inputFocusStyle = {
    borderColor: '#2575fc',
    outline: 'none',
  };

  const buttonStyle = {
    backgroundColor: '#2575fc',
    border: 'none',
    color: 'white',
    padding: '15px',
    fontSize: '1rem',
    fontWeight: '500',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#1d64e3',
    cursor: 'pointer',
  };

  const footerStyle = {
    fontSize: '1rem',
    color: '#666',
  };

  const linkStyle = {
    color: '#2575fc',
    fontWeight: '500',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  };

  const linkHoverStyle = {
    color: '#1d64e3',
  };

  return (
    <div style={containerStyle}>
      <div
        className="card"
        style={cardStyle}
        onMouseEnter={(e) => (e.target.style.boxShadow = cardHoverStyle.boxShadow)}
        onMouseLeave={(e) => (e.target.style.boxShadow = cardStyle.boxShadow)}
      >
        <h2 style={titleStyle} className="mb-4">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label className="form-label" style={formLabelStyle}>
              Username:
            </label>
            <input
              type="text"
              className="form-control"
              style={inputStyle}
              placeholder="Enter your username"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              required
              onFocus={(e) => (e.target.style.borderColor = inputFocusStyle.borderColor)}
              onBlur={(e) => (e.target.style.borderColor = '#ddd')}
            />
          </div>

          <div className="form-group mb-3">
            <label className="form-label" style={formLabelStyle}>
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              style={inputStyle}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              onFocus={(e) => (e.target.style.borderColor = inputFocusStyle.borderColor)}
              onBlur={(e) => (e.target.style.borderColor = '#ddd')}
            />
          </div>

          <button
            type="submit"
            className="btn"
            style={buttonStyle}
            onMouseEnter={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#2575fc')}
          >
            Login
          </button>
        </form>

        <p style={footerStyle} className="mt-3 text-center">
          Not a member?{' '}
          <Link to="/signup" style={linkStyle} onMouseEnter={(e) => (e.target.style.color = linkHoverStyle.color)} onMouseLeave={(e) => (e.target.style.color = '#2575fc')}>
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
