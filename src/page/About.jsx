import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <h2>this is About page</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos odio, voluptatibus soluta delectus assumenda magni cumque iure pariatur veritatis perferendis sequi rem vitae excepturi laboriosam non debitis doloremque. Animi quae incidunt, exercitationem consequatur modi laboriosam magnam dolores soluta a debitis.</p>

        <Link to={'me'}>
        <button>
          Me
        </button>
        </Link>

        <Outlet />
    </div>
  )
}

export default About