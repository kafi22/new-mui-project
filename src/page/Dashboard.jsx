import React from 'react'
import { Link } from 'react-router-dom'
import UseCustomsApi from '../UserContext/UseCustomsApi'

const Dashboard = () => {
  const {user} =   UseCustomsApi()
  return (
    <div>
        <h1>hello, {user.email};</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat consequuntur, ipsam laboriosam assumenda fugiat magni quas in atque doloremque nulla. Mollitia, maiores.</p>

        <Link to={'/'}>
        Back to home
        </Link>

    </div>
  )
}

export default Dashboard