import React from 'react'
import SignUpComp from '../component/SignUpForm/SignUpComp'
import Layout_comp from '../component/Layout/Layout_comp'


function SignupPage() {
    
    return (
        <div>
            <Layout_comp>
                <SignUpComp />
            </Layout_comp>
        </div>
    )
}

export default SignupPage