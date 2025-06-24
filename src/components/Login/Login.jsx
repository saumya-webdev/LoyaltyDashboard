import React, { useState } from 'react';
import './Login.css';
 
const LoginPage = ({ onLoginSuccess }) => {
  const [loginType, setLoginType] = useState('holder');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
 
  const handleSubmit = (e) => {
    e.preventDefault();
 
    const validHolder = userId === 'John Smith' && password === '1234';
    const validSubHolder = userId === 'Emily Smith' && password === '5678';
 
    if (
      (loginType === 'holder' && validHolder) ||
      (loginType === 'subholder' && validSubHolder)
    ) {
      console.log('Login successful:', { loginType, userId, password, rememberMe });
      setError('');
      onLoginSuccess();
    } else {
      setError(
        loginType === 'holder'
          ? 'Invalid Member ID or Password'
          : 'Invalid Sub Holder ID or Password'
      );
    }
  };
 
  return (
<div className="login-container">
<div className="login-left" />
<div className="login-right">
<div className="login-box">
<h1 className="login-title">Welcome to Science Centre Singapore</h1>
<p className="login-subtitle">Please log in to access your membership details and exclusive resources.</p>
 
          <form onSubmit={handleSubmit}>
            {/* Dropdown */}
<label className="login-label">Login Type</label>
<select
              className="login-input"
              value={loginType}
              onChange={(e) => setLoginType(e.target.value)}
>
<option value="holder">Membership Holder</option>
<option value="subholder">Sub Holder</option>
</select>
 
            {}
<label className="login-label" style={{ marginTop: '1rem' }}>
              {loginType === 'holder' ? 'Member ID' : 'Sub Holder ID'}
</label>
<input
              type="text"
              className="login-input"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder={
                loginType === 'holder'
                  ? 'Enter your registered Member ID'
                  : 'Enter your Sub Holder ID'
              }
              required
            />
 
            <label className="login-label" style={{ marginTop: '1rem' }}>Password</label>
<input
              type="password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
 
            <div className="login-remember" style={{ marginTop: '1rem' }}>
<input
                type="checkbox"
                className="login-checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
<label className="login-label" style={{ fontWeight: 'normal' }}>Keep me signed in</label>
</div>
 
            {error && <p className="login-error" style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
 
            <button type="submit" className="login-button" style={{ marginTop: '1.5rem' }}>
              SIGN IN
</button>
</form>
 
          <p className="login-footer">
            New to Science Centre? <a href="#">Create an Account</a>
</p>
</div>
</div>
</div>
  );
};
 
export default LoginPage;