import {Link} from 'react-router-dom';

function Navbar() {
    return <div className="nav-bar">
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <p className="nav-devider"> | </p>
                <li><Link to="/about">About</Link></li>
                <p className="nav-devider"> | </p>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    </div>
}

export default Navbar; 