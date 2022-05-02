import React from 'react'
import Navbar from '../../components/Navbar'

export default function ResetPasswordPage() {
  return (
    <div>
        <Navbar />
          <div className="container">
          <form>
              <div className="password">
              <div className="spacing">
              <label htmlFor="oldPassword">Old Password</label>
              <input type="text" placeholder='Old Password' />
              </div>

              <div className="spacing">
              <label htmlFor="newPassword">New Password</label>
              <input type="text" placeholder='New Password'/>
              </div>

              <div className="spacing">
              <label htmlFor="confirmpassword">Confirm New Password</label>
              <input type="text" placeholder='Confirm New Password'/>
              </div>
            
              </div>


          </form>
          </div>
        
    </div>
  )
}
