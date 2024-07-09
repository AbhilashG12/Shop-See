import React from 'react'
import './/NewsLetter.css'


const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers to your mail</h1>
      <p>Subscribe to our NewsLetter and stay Updated</p>
      <div>
        <input type="email" placeholder='Your email'/>
        <button>Subscribe</button>
      </div>

    </div>
  )
}

export default NewsLetter
