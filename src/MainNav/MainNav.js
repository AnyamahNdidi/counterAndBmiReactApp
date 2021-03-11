import React from 'react'
import './Mainstyle.css'
import {Link} from 'react-router-dom'

function MainNav() {
    return (
        <div className ="nav">
            <div className ="nav_wrapperHolder">
                <Link to="/Counter" className ="nav_wrapper">
                <button>Counter</button>
                
                </Link>
                <Link to ="/Bmi"className ="nav_wrapper"> 
                    <button>BMI</button>
                </Link>
                
            </div>
            
        </div>
    )
}

export default MainNav
