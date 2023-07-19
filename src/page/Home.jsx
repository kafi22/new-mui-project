import React from 'react'
import UseCustomsApi from '../UserContext/UseCustomsApi'
import { Link } from 'react-router-dom'

const Home = () => {

 const {user} = UseCustomsApi()

 const {email} = user

  return (
    <div>
       <h1> Welcome to {user.email ? (email) : 'Home'} Page</h1>
       <Link to={'dashboard'}>
       Go to dashBoard
       </Link>
    </div>
  )
}

export default Home