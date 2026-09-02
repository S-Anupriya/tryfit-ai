import React, { useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import './Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle auth logic here
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="login-icon">
            <Sparkles size={28} />
          </div>
          <h1>Welcome to TryFit AI</h1>
          <p>Login to continue your fashion journey.</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-submit-btn">
            <span>Login</span>
            <ArrowRight size={16} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;