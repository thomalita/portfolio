import { NavLink } from 'react-router-dom'

const Nav = () => {
     

  return (
    <nav className="nav">
    <h3>Welcome</h3>
    <div>
    <ul>
     <li><NavLink to="/">Home</NavLink></li>
     <li><NavLink to="/projects">Projects</NavLink></li>
     <li><NavLink to="/resume">Resume</NavLink></li>
     </ul>
     </div>
 </nav>
  )
}

export default Nav