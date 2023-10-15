import { Link } from 'react-router-dom'
import './Navbar.css'
import navlogo from './navlogo.png'

import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar'>
 
<div>
  <Link to={'/'}>
  <img src={navlogo} alt=""  height="170px"/>
  </Link>
 
</div>
<div>
    <h1 className='textnavbar '><b>
        𝔼𝕞𝕡𝕝𝕠𝕪𝕖𝕖 𝔻𝕒𝕥𝕒
        
    {/* Єѫpгѳчёё Дата */}
    
    </b></h1>
</div>
<div>
<Link  className="btn btn-primary btn-lg p-3"   to={'/Create'}>
                Add Data
</Link>
</div>


    </div>
  )
}
