import React from 'react'

export default function Navbar() {
  return (
        <div className='navbar'>
        <nav>
            <div className='logo'>
            <img src='/images/logo.svg' alt='logo' />
            </div>
            <div className='frame'>
             <img src='/images/Frame 103.png' alt='frame'/>
            </div>
           <div className='logoutbtn'> <button>Log Out</button></div>
        </nav>
    </div> 
  )
}
