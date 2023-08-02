import "./Register.css"

export default function Register() {
  return (
    <div className="login">
      <div className="loginwrapper">
        <div className="loginleft">
            <h3 className="loginlogo">Connector</h3>
            <span className="logindesc">Connet with friends and the world around you on Connector.</span>
        </div>
        <div className="loginright">
            <div className="loginbox">
            <input type="text" placeholder="Username" className="logininput"/>
            <input type="email" placeholder="Email" className="logininput"/>
            <input type="password" placeholder="Password" className="logininput"/>
            <input type="password" placeholder="Password Again" className="logininput"/>
            <button className="loginbutton">Sign up</button>
            <button className="loginregisterbutton">Log into Account</button>
            </div>
        </div>
      </div>
    </div>
  )
}

