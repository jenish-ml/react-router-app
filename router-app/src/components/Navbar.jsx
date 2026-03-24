import React from 'react'
import { NavLink, useNavigate, Link } from 'react-router-dom'

const Navbar = () => {const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <nav style={{ padding: '1rem', backgroundColor: '#f0f0f0', display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <NavLink to="/" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
        Home
      </NavLink>
      <NavLink to="/about" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
        About
      </NavLink>
      <NavLink to="/contact" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
        Contact
      </NavLink>
      <NavLink to="/products" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
        Products
      </NavLink>
      <NavLink to="/dashboard" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
        Dashboard
      </NavLink>

      <button onClick={handleGoHome} style={{ marginLeft: 'auto', cursor: 'pointer' }}>
        Go Home (navigate)
      </button>
    </nav>
  );
}

export default Navbar
