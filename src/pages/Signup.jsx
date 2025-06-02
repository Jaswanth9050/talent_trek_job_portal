import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = form;

    if (!name || !email || !password || !confirmPassword) {
      alert('Please fill out all fields.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    // On successful validation
    navigate('/');
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(to right, #ff7e5f, #feb47b)', // Gradient background
  };

  const cardStyle = {
    background: 'white',
    padding: '30px',
    borderRadius: '12px',
    width: '100%',
    maxWidth: '500px',
    transition: 'all 0.3s ease-in-out',
    border: '1px solid #ddd', // Added subtle border for clarity
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
    borderColor: '#ff7e5f',
    outline: 'none',
  };

  const buttonStyle = {
    backgroundColor: '#ff7e5f',
    border: 'none',
    color: 'white',
    padding: '15px',
    fontSize: '1rem',
    fontWeight: '500',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#feb47b',
    cursor: 'pointer',
  };

  const footerStyle = {
    fontSize: '1rem',
    color: '#666',
  };

  const linkStyle = {
    color: '#ff7e5f',
    fontWeight: '500',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  };

  const linkHoverStyle = {
    color: '#feb47b',
  };

  return (
    <div style={containerStyle}>
      <div
        className="card"
        style={cardStyle}
      >
        <h2 style={titleStyle} className="mb-4">
          Create Account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label className="form-label" style={formLabelStyle}>
              Full Name:
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              style={inputStyle}
              onFocus={(e) => (e.target.style.borderColor = inputFocusStyle.borderColor)}
              onBlur={(e) => (e.target.style.borderColor = '#ddd')}
            />
          </div>

          <div className="form-group mb-3">
            <label className="form-label" style={formLabelStyle}>
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              style={inputStyle}
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
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              style={inputStyle}
              onFocus={(e) => (e.target.style.borderColor = inputFocusStyle.borderColor)}
              onBlur={(e) => (e.target.style.borderColor = '#ddd')}
            />
          </div>

          <div className="form-group mb-3">
            <label className="form-label" style={formLabelStyle}>
              Confirm Password:
            </label>
            <input
              type="password"
              className="form-control"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              required
              style={inputStyle}
              onFocus={(e) => (e.target.style.borderColor = inputFocusStyle.borderColor)}
              onBlur={(e) => (e.target.style.borderColor = '#ddd')}
            />
          </div>

          <button
            type="submit"
            className="btn"
            style={buttonStyle}
            onMouseEnter={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#ff7e5f')}
          >
            Sign Up
          </button>
        </form>

        <p style={footerStyle} className="mt-3 text-center">
          Already a member?{' '}
          <Link
            to="/login"
            style={linkStyle}
            onMouseEnter={(e) => (e.target.style.color = linkHoverStyle.color)}
            onMouseLeave={(e) => (e.target.style.color = '#ff7e5f')}
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
