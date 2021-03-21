import { useContext, useState } from 'react';
import { UserContext } from "../../App";
import { Redirect, useHistory, useLocation } from "react-router";
import { createUserWithEmailAndPassword, handleFbSignIn, handleGoogleSignIn, handleSignOut, initializeLoginFramwork, signInWithEmailAndPassword } from './LoginManager';
import { Container, Row, Col } from 'react-bootstrap';

function Login() {
  const [newUser, setnewUser] = useState(true);
  const [user, setUser] = useState({
    isSignIn: false,
    newUser: false,
    name: '',
    email: '',
    password: '',
    photo: ''
  })

  initializeLoginFramwork();

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
    handleGoogleSignIn()
      .then(res => {
        setUser(res);
        handleResponse(res, true);
      })
  }
  const fbSignIn = () => {
    handleFbSignIn()
      .then(res => {
        setUser(res);
        handleResponse(res, true);
      })
  }
  const signOut = () => {
    handleSignOut()
      .then(res => {
        handleResponse(res, false);
      })
  }

  const handleResponse = (res, redirect) => {
    setUser(res);
    setLoggedInUser(res);
    if (redirect) {
      history.replace(from);
    }
  }

  const handleChange = (event) => {
    // console.log(event.target.name, event.target.value);
    let isFieldValid = true;
    if (event.target.name === 'email') {
      isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
    }
    if (event.target.name === 'password') {
      const isPasswordValid = event.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(event.target.value)
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo);
    }
  }
  const handleSubmit = (event) => {
    // console.log(user.email, user.password);
    if (newUser && user.email && user.password) {
      // console.log('submitting');
      createUserWithEmailAndPassword(user.name, user.email, user.password)
        .then(res => {
          handleResponse(res, true);
        })
    }
    if (!newUser && user.email && user.password) {
      signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          handleResponse(res, true);
        })
    }
    event.preventDefault();
  }

  const inputStyle = {
    width: '500px',
    marginBottom: "20px",
    border: "none",
    borderBottom: '1px solid #222'
  }
  return (


    <Container>
      <Row>
        <Col>
          <div style={{ textAlign: 'center' }}>
            <form style={{ border: '2px solid orange', marginBottom: '10px',padding:'20px' }} action="" onSubmit={handleSubmit}>
              {newUser ? <h1>Create an account</h1> : <h1>Login</h1>}
              {newUser && <input style={inputStyle} type="text" name="name" onBlur={handleChange} placeholder="Your Name" />}
              <br />
              <input style={inputStyle} type="text" name="email" onBlur={handleChange} placeholder="Your Email" required />
              <br />
              {/* onChange = dile every character console e show korbe && onBlur focus sore gale console e show korbe */}
              <input style={inputStyle} type="password" name="password" onBlur={handleChange} placeholder="Enter Password" required />
              <br />
              <input style={inputStyle} type="password" name="password" onBlur={handleChange} placeholder="Confrim Passowrd" required />
              <br />
              <input type="submit" style={{ marginBottom: "20px",backgroundColor:"orange",width:'200px' }} value={newUser ? "Create an account" : "Login"} />
              {!newUser && <p style={{display:'flex', justifyContent:"center"}}>Don’t have an account? <h6 style={{ cursor: "pointer",textDecoration:'underline' }} onClick={() => setnewUser(true)}> Create an account</h6></p>}
              {newUser && <p style={{display:'flex', justifyContent:"center"}}>Already have an account? <h6 style={{ cursor: "pointer",textDecoration:'underline' }} onClick={() => setnewUser(false)}> Login</h6></p>}
              <br />
            </form>
            {
              user.isSignIn ? <button onClick={signOut}>Sign Out</button> :
                <button onClick={googleSignIn}>Continue with Google</button>
            }
            <br />
            {
              <button onClick={fbSignIn}>Continue with Facebook</button>
            }
            <p style={{ color: "red" }}>{user.error}</p>
            {
              user.success && <p style={{ color: "green" }}>User {newUser ? 'Created' : 'Login'} Successfully</p>
            }
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default Login;
