import React, { useState } from 'react'


function Login_comp() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (email === '' || password === '') {
            setError('Please fill in all fields')
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
                    <input type="text" placeholder='Email' onChange={handleEmailChange} value={email} className='px-4 py-2' />
                    <input type="text" placeholder='Password' onChange={handlePasswordChange} value={password} />
                </div>
                <div>{error}</div>
                <button type="submit">Log in</button>
            </form>
        </div>
    )
}

export default Login_comp