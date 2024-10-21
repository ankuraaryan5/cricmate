import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

function LiveCoverage() {
  return (
    <div>
      <Navbar />
        <div>
          <form action="submit">
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </form>
        </div>
      <Footer />
    </div>
  )
}

export default LiveCoverage