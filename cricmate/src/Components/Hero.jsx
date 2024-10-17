import React from 'react'
import Navbar from './Navbar'
import ScoreCard from './ScoreCard'
import NewsUpdates from './NewsUpdates'
import Coverage from './Coverage'

function Hero() {
  return (
    <div>
        <Navbar />
        <ScoreCard />
        <Coverage />
        <NewsUpdates />
    </div>
  )
}

export default Hero