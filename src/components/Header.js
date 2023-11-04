import { Link, NavLink } from "react-router-dom"

function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>React App</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to='/' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/users' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Users</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/posts' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Posts</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/tasks' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Tasks</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/students' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Students</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Header