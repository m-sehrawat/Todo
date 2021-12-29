import { Signup } from "./signup";
import { Login } from "./login";

export const Navbar = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Todo App</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="">Home</a>
                            <a className="nav-link active" href="" data-bs-toggle="modal" data-bs-target="#signupModal">Signup</a>
                            <a className="nav-link active" href="" data-bs-toggle="modal" data-bs-target="#loginModal">Login</a>
                        </div>
                    </div>
                </div>
            </nav>

            <Signup />

            <Login />

        </div>

    );
};