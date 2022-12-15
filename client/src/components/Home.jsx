import React from 'react'
import image from '../images/self.jpeg'


const Home = () => {


  return (
    <div className='homepage'>
      <h3>Hi,</h3>
      <h1>I'm Thomalita Burbank</h1>
      <h2>| Software Developer |</h2>
      <div className='about-container'>
        <img className='myImage' src={image} />
        <p className='statement'>Building a finished product, starting on blank canvases and creativity, seeing a build from start to finish. Having a creative approach to solve problems and enjoy building this from scratch. Help set a path for to help others grow, I have a gift helping to support the growth of others, community oriented.</p>
      </div>
    </div>
  )
}

export default Home
