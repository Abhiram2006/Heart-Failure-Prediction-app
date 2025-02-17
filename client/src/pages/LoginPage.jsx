import React from 'react'

const LoginPage = ({ handleLogin, isAdminCheck, error }) => {
    return (
        <div className='container py-2'>
            {error === 'Not Valid User' && <p className='text-danger lead mt-2'>Account Not Registered! Please ask admin to register your account.</p>}
            <div className='py-3'>
                <button className='btn btn-dark' onClick={handleLogin}><i className="fa fa-google" /> Login with Google</button>
            </div>
            <div>
                <button className='btn btn-secondary' onClick={handleLogin}><i className="fa fa-google" /> Admin Login</button>
            </div>
        </div>
    )
}

export default LoginPage