import React, { useState } from "react";

function App (){
    const userId = {signupName: "", signupEmail: "",signupPassword: "", signupConfirmPassword: "", isShow: false,
    loginEmail: "",loginPassword: "", isLogin: false};
        
  const [formData, setFormData] = useState(userId);

  function handleFormData(e) {
    const { name, value } = e.target;
    
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function displayData() {
    if (formData.signupPassword === formData.signupConfirmPassword) {
      setFormData((prev) => ({ ...prev, isShow: true }));
    }
  }

  function handleLogin() {
    if (
      formData.loginEmail === formData.signupEmail &&
      formData.loginPassword === formData.signupPassword &&
      formData.isShow
    ) {
      setFormData((prev) => ({ ...prev, isLogin: true }));
    }
  }

  function toggle() {
    setFormData((prev) => ({ ...prev, isLogin: false }));
  }

  return (
    <div id="main">
      <table id="all-users">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
          <tr>
            <td>{formData.isShow ? formData.signupName : ""}</td>
            <td>{formData.isShow ? formData.signupEmail : ""}</td>
            <td>{formData.isShow ? formData.signupPassword : ""}</td>
          </tr>
        </tbody>
      </table>

      {!formData.isLogin && (
    <div>
<form className="signup-form">
<label htmlFor="name">Name</label>
<input type="text" name="signupName" id="signupName" value={formData.signupName}onChange={handleFormData}/>
                    
<label htmlFor="email">Email</label>
<input type="email" name="signupEmail" id="signupEmail" value={formData.signupEmail} onChange={handleFormData}/>
           
<label htmlFor="password">Password</label>
<input type="password"  name="signupPassword" id="signupPassword" value={formData.signupPassword} onChange={handleFormData} />
            
<label htmlFor="confirmPassword">Confirm Password</label>   
<input type="password" name="signupConfirmPassword" id="signupConfirmPassword"  value={formData.signupConfirmPassword} onChange={handleFormData}/>
             
</form>
<button id="signup-button" onClick={displayData}> Signup </button>
    
<form className="login-styles">
        <label htmlFor="loginEmail">Email</label>
<input id="loginEmail" name="loginEmail" type="email" value={formData.loginEmail} onChange={handleFormData}/>        
        <label htmlFor="loginPassword">Password</label>
<input id="loginPassword"  name="loginPassword" type="password" value={formData.loginPassword}onChange={handleFormData}/>
        </form>
<button id="login-button" onClick={handleLogin}> Login </button>
        
        </div>
      )}

      {formData.isLogin && (
        <div>
          <h3 id="username">{formData.isLogin ? formData.signupName : ""}</h3>
          <h3 id="email">{formData.isLogin ? formData.signupEmail : ""}</h3>
          <button id="logout-button" onClick={toggle}>Logout </button> 
        </div>
      )}
    </div>
  );
};

export default App;
