import React, { useState } from 'react'

const SignUpComp = () => {
    const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [error, setError] = useState('')
        const[name,setName] =useState('')
        const[confirmPassword, setConfirmPassword] = useState('')
    
        const handleEmailChange = (e) => {
            setEmail(e.target.value)
        }
        const handlePasswordChange = (e) => {
            setPassword(e.target.value)
        }
        const handleNameChange =(e)=> {
            setName(e.target.value)
        }
        const handleConfirmPasswordChange = (e) => {
            setConfirmPassword(e.target.value)
        }
    
        const handleSubmit = (e) => {
            e.preventDefault()
            if (email === '' || password === ''|| name==='') {
                setError('Please fill in all fields')
            }
            else if (password !== confirmPassword) {
                setError('Passwords do not match')
            }
            else {
                setError('')
                alert(`Logged in as : ${email}`)
            }
        }
    
  return (
    <div className='flex flex-col items-center  gap-5 '>
            <div className='text-2xl font-semibold font-sans'>Log in</div>
            <form onSubmit={handleSubmit} >
                <div className='flex flex-col gap-4'>
                    <input type="text " placeholder='Name' onChange={handleNameChange} value={name} />
                    <input type="text" placeholder='Email' onChange={handleEmailChange} value={email} className='px-4 py-2' />
                    <input type="text" placeholder='Password' onChange={handlePasswordChange} value={password} />
                    <input type="text" placeholder='Confirm Password' onChange={handleConfirmPasswordChange} value={confirmPassword} />

                </div>
                <div>{error}</div>
                <button type="submit">Signup</button>
            </form>
        </div>
  )
}

export default SignUpComp