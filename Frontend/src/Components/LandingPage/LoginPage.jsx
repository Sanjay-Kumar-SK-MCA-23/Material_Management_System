import React from 'react';

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
      justify-content: center;
      align-items: center;
      background: #000;
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
      display: black;
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
      position: relative;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
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
      position: relative;
      width: 100%;
      background: #333;
      border: none;
      outline: none;
      padding: 25px 10px 7.5px;
      border-radius: 4px;
      color: #fff;
      font-weight: 500;
      font-size: 1em;
    }

    .signin .content .form .inputBox i {
      position: absolute;
      left: 0;
      padding: 15px 10px;
      font-style: normal;
      color: #aaa;
      transition: 0.5s;
      pointer-events: none;
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
      letter-spacing: 0.05em;
      cursor: pointer;
    }

    input[type="submit"]:active {
      opacity: 0.6;
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
  `
};

const LoginPage = () => {
  return (
    <>
      {/* Inject global styles */}
      <style>
        {styles.fontImport + styles.global}
      </style>

      <section>
        {Array.from({ length: 400 }).map((_, i) => (
          <span key={i}></span>
        ))}

        <div className="signin">
          <div className="content">
            <h2>Sign In</h2>
            <div className="form">
              <div className="inputBox">
                <input type="text" required />
                <i>Username</i>
              </div>
              <div className="inputBox">
                <input type="password" required />
                <i>Password</i>
              </div>
              <div className="links">
                <a href="#">Forgot Password</a>
                <a href="#">Signup</a>
              </div>
              <div className="inputBox">
                <input type="submit" value="Login" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
