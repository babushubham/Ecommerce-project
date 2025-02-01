import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import authService from '../../services/Authentication'


function Login_comp() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const handleSubmit = async(e) => {
        e.preventDefault()
        if (email === '' || password === '') {
            setError('Please fill in all fields')
        } else if(!(emailRegex.test(email))){
        setError('Please fill in a valid email')
        } else if(!(passwordRegex.test(password))){
            setError('Please fill in a password with at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character')
        }
        else {
            setError('')
            try {
                const user = await authService.login(email,password)
                if(user){
                    userData = await authService.getCurrentUser(user);
                    if(userData){
                          
                        navigate('/')
                    }
                    return;

                }
                else{
                    navigate('/signup')
                }
            } catch (err) {
                setError(err)
                console.error(error);
            }

        }
    }

    return (

        <div className='flex flex-col items-center gap-4 justify-center  mb-60 mt-20 mx-6 p-4'>
            <div className='text-4xl font-semibold font-sans   text-center mb-3'>Log in</div>
            <form onSubmit={handleSubmit} className='  w-1/3' >
                <div className='flex flex-col gap-6  '>
                    <input type="text" placeholder='Email' onChange={handleEmailChange} value={email} className=' focus:outline-none border-b-2 border-gray-500 py-2 text-lg font-sans  placceholder:text-gray-300' />
                    <input type="text" placeholder='Password' onChange={handlePasswordChange} value={password} className=' focus:outline-none border-b-2 border-gray-500 py-2 text-lg font-sans  placceholder:text-gray-300'/>
                <button type="submit" className='w-full bg-orange-600 text-lg text-white py-2'>Log in</button>
                </div>
                <div>{error}</div>
            </form>
            <div className='text-gray-400 font-sans text-lg '>Don't have account? <Link to='/signup' className='text-gray-500 border-b-2 border-gray-400 '>Sign Up</Link></div>
        </div>
    )
}

export default Login_comp