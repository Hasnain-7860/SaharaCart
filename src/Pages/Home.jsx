import React from 'react'
import Slider from '../Components/Slider'
import Popular from '../Components/Popular'
import Featured from '../Components/Featured'
import Subscribe from '../Components/Subscribe'

const Home = () => {
  return (
    <div>
      <Slider/>
      <Popular/>
      <Featured/>
      <Subscribe/>
      </div>
  )
}

export default Home