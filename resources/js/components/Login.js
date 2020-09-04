import React, {Component} from 'react';

class Login extends Component{
    render(){
        return(
            <div className="vh-100 pt-5">
                <form className="bg-dark text-light m-auto align-self-center p-5 rounded-lg w-50">
                    <h2 className="text-center mb-4">Connection Administrateur</h2>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Votre adresse mail"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Votre mot de passe"
                        />
                    </div>
                    <button type="submit" className="btn btn-light w-100 mt-3">Submit</button>
                </form>
            </div>
        )
    }
}

export default Login;
