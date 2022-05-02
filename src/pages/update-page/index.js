import React from 'react'
import GeneralForm from '../../components/Global/form'
import Navbar from '../../components/Navbar'

export default function UpdatePage() {
  return (
    <div>
        <Navbar />
        <div className="container">

          <GeneralForm />


            <div className="btn">
              <button className='passwordbtn'>Cancel</button>
              <button className='profilebtn'>Update Profile</button>
            </div>

       
        </div>
    </div>
  )
}
