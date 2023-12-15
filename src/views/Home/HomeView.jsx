import React from 'react'
import './HomeView.css'
import HomeHero from '../../components/HomeHero/HomeHero'

const HomeView = () => {
  return (
    <div className='HomeView'>
      <HomeHero/>
      <div className='container'>
      </div>
    </div>
  )
}

export default HomeView