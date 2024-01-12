import React from 'react'

import "../styles/Section2.css"
import Extras from './Extras'

export default function Section2() {
  return (
    <div className='Sec2cont'>
      <h2 className='centralize'>Getting started is easy..</h2>
      <p className="centralize">Earn Stars and get rewarded in a few easy steps</p>
      <div className='threepics'>
      <Extras src="public\utilities\bullet1.PNG" heading="Create an account" desc="To get started,<a href='#'>join now</a>.You can also <a href='#'> join in the app</a> to get access to the full range of Starbucks' Rewards benefits." show={false} />
      <Extras src="public\utilities\bullet2.PNG" heading="Order and pay how you'd like" desc="Use cash, credit/debit card or save some time and pay right through the app. You'll collect Stars all ways. <a href='#'> Learn how</a>" show={false}/>
      <Extras src="public\utilities\bullet3.PNG" heading="Earn Stars, get Rewards" desc="As you earn Stars, you can redeem them for Rewards-like free food, drinks, and more. Start redeeming with as little as 25 Stars!" show={false} />
      </div>

    </div>
  )
}
