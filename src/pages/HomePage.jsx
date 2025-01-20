import React from 'react'
import Layout_comp from '../component/Layout/Layout_comp'
import authService from '../services/Authentication'
const HomePage = () => {
  if(!(authService.getCurrentUser())){
console.log('user is logged in')
  } else {
    console.log('user is not logged in')
  }
  return (
    <Layout_comp>
      <div className='min-h-screen text-center'>Home</div>
    </Layout_comp>
  )
}

export default HomePage;
