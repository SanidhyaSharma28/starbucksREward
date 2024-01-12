import React from 'react'
import "../styles/Section1.css"
export default function Section1() {
  return (
    <div id='backgroundPic'  >
      <div id='floater'>
      <h1>FREE COFFEE</h1> 
      <h1 id='lower'>IS A TAP AWAY</h1>
      <h4 style={{fontWeight:"normal"}}>Join now to start earning Rewards.</h4>
      <button id='Joinnow'>Join now</button><br />
      <span>Or <a href="#">join in the app</a> for the best experience</span>
      </div>
    </div>
  )
}
