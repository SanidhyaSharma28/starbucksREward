import React from 'react'
import "../styles/Section4.css"
import Extras from './Extras'


export default function Section4() {
  return (
    <div id='Sec4'>
      <h2 className='centralise'>Endless Extras</h2>
      <p className='centralise'>Joining Starbucks' Rewards means unlocking access to exclusive benefits.Say hello to</p>
      <p id='lowerHead' className='centralise'>easy ordering, tasty Rewards and --yes, free coffee</p>
      <div className='threePics'>
        <Extras src="\utilities\pic1.PNG"  alt="food pic" heading="Fun freebies" desc="Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills" show={true}/>
        <Extras src="\utilities\pic2.PNG"  alt="2nd pic" heading="Order & pay ahead" desc="Enjoy the convenience of in-store,curbside or drive-thru pickup at select stores." show={true}/>
        <Extras src="\utilities\pic3.PNG" alt="coffee" heading="Get to free faster" desc="Earn Stars even quicker with Bonus Star challenges,Double Star Days and exciting games." show={true}/>
      </div>
    </div>
  )
}
