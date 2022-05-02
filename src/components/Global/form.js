import React from 'react'

export default function GeneralForm() {
  return (
    <form>

      <div className="row__input__container">

          <div className="input__container">
              <label htmlFor="firstname">First Name</label>
              <input type="text" placeholder='Your First Name' />
          </div>

          <div className="input__container">
              <label htmlFor="lastname">Last Name</label>
              <input type="text" placeholder='Your Last Name'/>
          </div>

      </div>

      <div className='single__row'>
        <label className='block' htmlFor="bio">Bio</label>
        <input className="longtext" type="textarea" placeholder='About you'/>
      </div>

      <div className="row__input__container">

          <div className="input__container">
              <label htmlFor="email">Email Address</label>
              <input type="email" placeholder='Your email address'/>
          </div>

          <div className="input__container">
              <label htmlFor="phone number">Phone Number</label>
              <input type="number" placeholder='Phone' />
        </div>

      </div>

      <h6>Where are you from</h6>

        <div className="row__input__container">

          <div className="input__container">
            <label htmlFor="country">Country/Nationality</label>
            <input type="text" placeholder='Your Country'/>
          </div>

          <div className="input__container">
            <label htmlFor="state">State</label>
            <input type="text" placeholder='Your State' />
          </div>

        </div>

        <div className="row__input__container">
          
          <div className="input__container">
            <label htmlFor="LGA">Local Govt Area</label>
            <input type="text" placeholder='Your LGA'/>
          </div>

          <div className="input__container">
            <label htmlFor="village">Village</label>
            <input type="text" placeholder='Your Village' />
          </div>

        </div>

        <h6>Home Address</h6>

        <div className='single__row'>
          <label className='block' htmlFor="address">Home Address</label>
          <input type="textarea" className='longtext' placeholder='Your Address'/>
        </div>

        <h6>Biometrics</h6>

        <div className="row__input__container">

          <div className="input__container">
            <label htmlFor="dob">D.O.B</label>
            <input type="date" placeholder='Date of Birth'/>
          </div>

          <div className="input__container">
            <label htmlFor="height">Height</label>
            <input type="number" placeholder='height' />
          </div>

        </div>
    </form>
  )
}

