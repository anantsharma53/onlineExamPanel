import './navbar.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Login from '../signin/signin'

function Navbar() {
    const [showmodleLoginPage, setShowModleLoginPage] = useState(false);
    const [logedin, setLogedin] = useState(localStorage.getItem('logedin') === 'true'); // Parse the value as a boolean
    const navigate = useNavigate();

    const openModal = () => {
        setShowModleLoginPage(true);
    }

    const logout = () => {
        localStorage.setItem('logedin', 'false'); // Update localStorage
        setLogedin(false); // Update the state
        localStorage.removeItem('token');
        navigate('/')
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary navbar-bg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img
                            src="https://mtcedu.co.in/images/mtc-logo.png"
                            style={{ height: '40px', width: '170px' }}
                            alt="Movies Logo"
                        ></img>
                    </a>
                    {logedin ? (
                        <button className='' onClick={logout}>Log out</button>
                    ) : (
                        <button className='' onClick={openModal}>Log in</button>
                    )}
                </div>
            </nav>
            {showmodleLoginPage && <Login setShowModleLoginPage={setShowModleLoginPage} />}
        </>
    );
}

export default Navbar;
