import React from 'react'
import {Link} from 'react-router-dom'
const NavBar = (props) => {
   
    return(
       
        <nav>
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo center">Contact form</Link>
                <ul className="right" >
                    <li><Link to="/showmessages">Messages</Link></li>
                    
                  
                </ul>
            </div>
      </nav>
      
    )
}
export default  NavBar