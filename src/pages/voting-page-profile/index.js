import React from 'react'
import GeneralForm from '../../components/Global/form'
import Navbar from '../../components/Navbar'

export default function VotingPageProfile() {
  return (
    <div>
        <Navbar />
        <div className="container">
           <GeneralForm />


          <div className="form__bottom__input">

            <div className="row__input__container">
              <div className="input__container">
                <label htmlFor="votelink">Voting link</label>
                <input type="url" />
              </div>

              <div className="input__container">

                <p>Number of Votes: <span>12,000</span></p>
              </div>
              

            </div>


            
          </div>
        
            

            <div className="btn">
              <button className='passwordbtn'>Update Password</button>
              <button className='profilebtn'>Update Profile</button>
            </div>

        
    </div>
  
    </div>
  )
}
