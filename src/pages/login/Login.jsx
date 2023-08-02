import "./Login.css"

export default function Login() {
  return (
    <div className="login">
      <div className="loginwrapper">
        <div className="loginleft">
            <h3 className="loginlogo">Connector</h3>
            <span className="logindesc">Connet with friends and the world around you on Connector.</span>
        </div>
        <div className="loginright">
            <div className="loginbox">
                <input type="email" placeholder="Email" className="logininput"/>
                <input type="password" placeholder="password" className="logininput"/>
                <button className="loginbutton">Log in</button>
                <span className="loginforget">Forget Password?</span>
                <button className="loginregisterbutton">Create a New Account</button>
            </div>
        </div>
      </div>
    </div>
  )
}
// import "./Login.css";

// export default function Login() {
//   return (
//     <div className="login">
//       <div className="loginwrapper">
//         <div className="loginleft">
//           <h3>Connector</h3>
//           <span className="logindesc">
//             Connect with friends and the world around you on Connector.
//           </span>
//         </div>
//         <div className="loginright">
//           <div className="loginbox"></div>
//         </div>
//       </div>
//     </div>
//   );
// }
