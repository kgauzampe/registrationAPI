 import React from "React";
 import loginIMG from "../../login.svg";

 export class login extends React.Component { 

    constructor(props) {
        super(props);

    }  
    render(){
        return
        <div className="base-container">
            <div className="header">login</div>
            <div className="content">
                <div className="image"> 
                <img src={loginIMG} />
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlfor="username">username</label> 
                        <input type="text" name="username" placeholder="username" />
                    </div>
                    <div className="form-group">
                        <label htmlfor="password">Password</label> 
                        <input type="password" name="password" placeholder="password" />
                    </div>
                </div>
            </div>
        </div>
    }
 }