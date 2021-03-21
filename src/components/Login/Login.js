import { useContext, useState } from 'react';
import { UserContext } from "../../App";
import { Redirect, useHistory, useLocation } from "react-router";
import { createUserWithEmailAndPassword, handleFbSignIn, handleGoogleSignIn, handleSignOut, initializeLoginFramwork, signInWithEmailAndPassword } from './LoginManager';
import { Container,Row,Col } from 'react-bootstrap';

function Login() {
  const [newUser, setnewUser] = useState(false);
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

  return (


    <Container>
      <Row>
        <Col>
          <div style={{ textAlign: 'center' }}>

            {/* {
                user.isSignIn && <div>
                  <p>Welcome, {user.name}</p>
                  <p>Your email: {user.email}</p>
                  <img src={user.photo} alt="" />
                </div>
              } */}
            <h1>Create an account</h1>

            {/* <p>Name: {user.name}</p> */}
            <input type="checkbox" onChange={() => setnewUser(!newUser)} name="newUser" id="" />
            <label htmlFor="newUser">New User Sign Up</label>

            <form style={{border:'2px solid orange', marginBottom:'10px'}} action="" onSubmit={handleSubmit}>
              {newUser && <input type="text" name="name" onBlur={handleChange} placeholder="Your Name" />}
              <br />
              <input type="text" name="email" class="form-control form-control-sm" onBlur={handleChange} placeholder="Your Email" required />
              <br />
              {/* onChange = dile every character console e show korbe && onBlur focus sore gale console e show korbe */}
              <input type="password" name="password" class="form-control form-control-sm" onBlur={handleChange} placeholder="Enter Password" required />
              <br />
              <input type="password" name="password" class="form-control form-control-sm" onBlur={handleChange} placeholder="Confrim Passowrd" required />
              <br />
              <p>Already have an account? <input type="submit" value={newUser ? "Sign Up" : "Login"} /></p>
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
