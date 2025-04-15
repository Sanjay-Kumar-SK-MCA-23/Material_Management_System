import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../axiosRoute';

const styles = {
  fontImport: `
    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');
  `,
  global: `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Quicksand', sans-serif;
    }

    body {
      background: rgb(10, 25, 47);
    }

    section {
      position: absolute;
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2px;
      flex-wrap: wrap;
      overflow: hidden;
    }

    section::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(#000, blue, #000);
      animation: animate 5s linear infinite;
    }

    @keyframes animate {
      0% { transform: translateY(-100%); }
      100% { transform: translateY(100%); }
    }

    section span {
      position: relative;
      display: block;
      width: calc(6.25vw - 2px);
      height: calc(6.25vw - 2px);
      background: #181818;
      z-index: 2;
      transition: 1.5s;
    }

    section span:hover {
      background: blue;
      transition: -10s;
    }

    .signin {
      position: absolute;
      width: 400px;
      background: #222;
      z-index: 1000;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 40px;
      border-radius: 4px;
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.9);
    }

    .signin .content {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 40px;
    }

    .signin .content h2 {
      font-size: 2em;
      color: blue;
      text-transform: uppercase;
    }

    .signin .content .form {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 25px;
    }

    .signin .content .form .inputBox {
      position: relative;
      width: 100%;
    }

    .signin .content .form .inputBox input {
      width: 100%;
      background: #333;
      border: none;
      outline: none;
      padding: 25px 10px 7.5px;
      border-radius: 4px;
      color: #fff;
      font-size: 1em;
    }

    .signin .content .form .inputBox i {
      position: absolute;
      left: 0;
      padding: 15px 10px;
      font-style: normal;
      color: #aaa;
      pointer-events: none;
      transition: 0.5s;
    }

    .signin .content .form .inputBox input:focus ~ i,
    .signin .content .form .inputBox input:valid ~ i {
      transform: translateY(-7.5px);
      font-size: 0.8em;
      color: #fff;
    }

    .signin .content .form .links {
      display: flex;
      justify-content: space-between;
    }

    .signin .content .form .links a {
      color: #fff;
      text-decoration: none;
    }

    .signin .content .form .links a:nth-child(2) {
      color: blue;
      font-weight: 600;
    }

    .signin .content .form .inputBox input[type="submit"] {
      padding: 10px;
      background: blue;
      color: #000;
      font-weight: 600;
      font-size: 1.35em;
      cursor: pointer;
    }

    input[type="submit"]:active {
      opacity: 0.6;
    }

    .error {
      color: red;
      text-align: center;
    }

    @media (max-width: 900px) {
      section span {
        width: calc(10vw - 2px);
        height: calc(10vw - 2px);
      }
    }

    @media (max-width: 600px) {
      section span {
        width: calc(20vw - 2px);
        height: calc(20vw - 2px);
      }
    }
  `,
};

const LoginPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/login', formData);
      const { token, user } = res.data;

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      if (user.role === 'Admin') navigate('/admin/admin-dashboard');
      else if (user.role === 'Employee') navigate('/employee/employee-dashboard');
      else if (user.role === 'Servicer') navigate('/servicer/servicer-dashboard');
      else navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <>
      <style>{styles.fontImport + styles.global}</style>

      <section>
        {Array.from({ length: 400 }).map((_, i) => (
          <span key={i}></span>
        ))}

        <div className="signin">
          <div className="content">
            <h2>Sign In</h2>
            <form className="form" onSubmit={handleSubmit}>
              <div className="inputBox">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <i>Email</i>
              </div>
              <div className="inputBox">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <i>Password</i>
              </div>
              <div className="links">
                <a href="#">Forgot Password</a>
                {/* <a href="/register">Signup</a> */}
              </div>
              {error && <div className="error">{error}</div>}
              <div className="inputBox">
                <input type="submit" value="Login" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
