import React from 'react'
import UseCustomsApi from '../UserContext/UseCustomsApi'

const Home = () => {

 const {user} = UseCustomsApi()
  return (
    <div>
       <h1> this is {user} Page</h1>
    </div>
  )
}

export default Home