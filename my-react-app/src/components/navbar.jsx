import {Link} from 'react-router-dom';

function Navbar() {
    return <div className="nav-bar">
        <nav>
            <ul>
                <li className="nav-link"><Link to="/">Home</Link></li>
                <p className="nav-devider"> | </p>
                <li className="nav-link"><Link to="/about">About</Link></li>
                <p className="nav-devider"> | </p>
                <li className="nav-link"><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    </div>
}

export default Navbar; 