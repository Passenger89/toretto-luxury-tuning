import React from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  let navigate = useNavigate()
  return (
    <div>
      THIS IS THE PROFILE PAGE
      <button onClick={() => navigate('/about')}>About Page</button>
    </div>
  )
}

export default Profile
