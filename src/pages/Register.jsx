import React from 'react'

const Register = () => {
  return (
    <div className='d-flex justify-content-center'>
      <div className="form-image d-none d-md-block">
        <img src={"https://picsum.photos/800/800"} alt="sample-movie" />
      </div>
      <div className="register-form">
        <h1 className="form-title display-3">Register</h1>
        <form id='register'>
          <div className="mb-3">
            <label htmlFor="last-name" className='form-label'>First Name</label>
            <input type="text" className='form-control' id='firstName' placeholder='Enter your first name..' required/>
          </div>
          <div className="mb-3">
            <label htmlFor="last-name" className='form-label'>Last Name</label>
            <input type="text" className='form-control' id='lastName' placeholder='Enter your last name..' required/>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className='form-label'>Email</label>
            <input type="email" className='form-control' id='email' placeholder='Enter your email address..' required/>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className='form-label'>Password</label>
            <input type="password" className='form-control' id='firstName' placeholder='Enter your password..' required/>
          </div>
          <div className="mb-3">
            <input type="submit" className='btn btn-primary form-control' value="Register"/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register