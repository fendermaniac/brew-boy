import React from 'react';
import './Modal.css';

const Modal = ({toggleRegistrationLogin, existingUser, toggleModal}) => {
    return ( 
    <dialog 
      open
      id="modal"
      className="modal"
    > 
    
      {existingUser 
        ? (    <div>
          <h2>Login</h2>
          <form>
            <div className="form-container">
              <label for="email">Email</label>
              <input name="email" placeholder="Enter Email"></input>
              <br/>
              <label for="password">Password</label>
              <input name="password" placeholder="Enter Password"></input>
              <br/>
              <button onClick={toggleModal}>Login</button> 
              <p>Don't have an account? <a href="#" onClick={toggleRegistrationLogin}> Register </a></p>
            </div>
          </form>
         </div>)
        : (
    <div>
     <h2>Register</h2>
     <form>
       <div className="form-container">
         <label for="email">Email</label>
         <input name="email" placeholder="Enter Email"></input>
         <br/>
         <label for="password">Password</label>
         <input name="password" placeholder="Enter Password"></input>
         <br/>
         <button onClick={toggleModal}>Sign Up</button> 
         <p>Already have an account? <a href="#" onClick={toggleRegistrationLogin}> Login </a></p>
       </div>
     </form>
    </div>)
      }
    <div className="login-image"></div>

        
      </dialog> 
    
    );
}
 
export default Modal;