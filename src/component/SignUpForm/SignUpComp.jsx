import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import authService from '../../services/Authentication'
import { useDispatch } from 'react-redux'
import { loginData,logoutData } from '../../store/authSlice'


const SignUpComp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [name, setName] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const navigate = useNavigate()

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value)
    }

    
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


    const handleSubmit = async (e) => {
        e.preventDefault()
        
        if (email === '' || password === '' || name === '') {
            setError('Please fill in all fields')
        } else if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) {
            setError('Please fill in a valid email')
        } else if (!(passwordRegex.test(password))) {
            setError('Please fill in a password with at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character')
        } else if (password !== confirmPassword) {
            setError('Passwords do not match')
        }
        else {
            setError('')
            try {
                const user = await authService.signup(email, password, name)
                if(user){
                    // await authService.login(email,password)
                    const userData = await authService.getCurrentUser(user);
                    console.log(userData)
                    if(userData){
                        
                        console.log(userData)
                        navigate('/')
                    }
                    console.log('account found succesfully') 
                    return 
                    
                }
                else{
                    console.log('err')
                }
            } catch (error) {
                console.log('signup failed:: Error::', error)
            }
        }
    }

    return (


        <div className='flex flex-col items-center gap-4 justify-center  my-20 mx-6 p-4'>
            <div className='text-4xl font-semibold font-sans   text-center mb-3'>Create an account</div>
            <form onSubmit={handleSubmit} className='  w-1/3'>
                <div className='flex flex-col gap-6  '>
                    <input type="text " placeholder='Name' onChange={handleNameChange} value={name} className=' focus:outline-none border-b-2 border-gray-500 py-2 text-lg font-sans  placceholder:text-gray-300' />
                    <input type="text" placeholder='Email' onChange={handleEmailChange} value={email} className='focus:outline-none border-b-2 border-gray-500 py-2 text-lg font-sans placceholder:text-gray-300' />
                    <input type="text" placeholder='Password' onChange={handlePasswordChange} value={password} className='focus:outline-none border-b-2 border-gray-500 py-2 text-lg font-sans placceholder:text-gray-300' />
                    <input type="text" placeholder='Confirm Password' onChange={handleConfirmPasswordChange} value={confirmPassword} className='focus:outline-none border-b-2 border-gray-500 py-2 text-lg font-sans  placceholder:text-gray-300' />

                    <button type="submit" className='w-full bg-orange-600 text-lg text-white py-2'>Sign up</button>
                </div>
                <div>{error}</div>
            </form>
            <div className='text-gray-400 font-sans text-lg '>already have account? <Link to='/login' className='text-gray-500 border-b-2 border-gray-400 '>log in</Link></div>
        </div>

    )
}

export default SignUpComp