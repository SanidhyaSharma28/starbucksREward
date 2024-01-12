import React from 'react'
import "../styles/Section5.css"
import 'boxicons'

export default function Section5() {
  return (
    <div id='Sec5'>
      <h2 className='centralise' style={{paddingTop:"45px"}}>Cash or card, you earn Stars</h2>
      <p className='centralise' style={{marginBottom:"90px"}}>No matter how you can pay, you can earn Stars with your morning coffee. Those Stars add up to (really delicious) Rewards</p>
      <div id='sec5container'>
        <div style={{flex:1,marginLeft:"40px"}}>
            <h2>1<box-icon type='solid' style={{width:"12px",height:"12px"}} name='star'></box-icon> per dollar</h2>
            <p>pay as you go </p>
        </div>
        <div style={{display:"flex",justifyContent:"space-between",flex:1,marginLeft:"10px"}}>
            <img style={{height:"120px"}} src="src\utilities\img1.PNG" alt="scanner" />
            <div>
                <h3>Scan and pay separately</h3>
                <p>Use cash or credit/debit card at the register</p>
            </div>
        </div>
        <div style={{display:"flex",justifyContent:"space-between",flex:1,marginLeft:"90px"}}>
            <img style={{height:"120px"}} src="src\utilities\img2.PNG" alt="save" />
            <div>
                <h3>Save payment in the app</h3>
                <p>Check-out faster by saving a credit/debit card or PayPal to your account. You'll be able to order ahead or scan and pay at the register in one step</p>
            </div>
        </div>
        <div style={{flex:1}}></div>

      </div>
      <hr style={{border:"1px solid grey",margin:"0px 30px"}} />
      <div id='sec5container'>
        <div style={{flex:1,marginLeft:"40px"}}>
            <h2>2<box-icon type='solid' style={{width:"12px",height:"12px"}} name='star'></box-icon> per dollar</h2>
            <p>Add funds in the app </p>
        </div>
        <div style={{display:"flex",justifyContent:"space-between",flex:1,marginLeft:"10px"}}>
            <img style={{marginTop:"10px",height:"80px",width:"100px"}} src="src\utilities\img3.PNG" alt="scanner" />
            <div>
                <h3>Preload</h3>
                <p>To save time and earn tar twiceas fast, add money to your digital Starbucks Card using any  payment option.Scan and pay in one step or order ahead in the app.</p>
            </div>
        </div>
        <div style={{display:"flex",justifyContent:"space-between",flex:1,marginLeft:"90px"}}>
            <img style={{marginTop:"10px",height:"80px",width:"100px"}} src="src\utilities\img4.PNG" alt="save" />
            <div>
                <h3>Register your gift card</h3>
                <p>Then use it to pay through the app. You can even consolidate balances from multiple cards in one place </p>
            </div>
        </div>
        <div style={{flex:1}}></div>

      </div>
<hr style={{border:"1px solid grey",margin:"0px 30px"}} />
<div id='sec5container' style={{paddingBottom:"50px"}}>
        <div style={{flex:1,marginLeft:"40px"}}>
            <h2>Up to 3<box-icon type='solid' style={{width:"12px",height:"12px"}} name='star'></box-icon> per dollar</h2>
            <p>With Starbucks's Rewards Visa Card </p>
        </div>
        <a href=""></a>
        <div style={{display:"flex",justifyContent:"space-between",flex:1,marginLeft:"10px"}}>
            <img style={{marginTop:"10px",height:"90px",width:"110px"}} src="src\utilities\img5.PNG" alt="scanner" />
            <div>
                <h3>Earn stars even faster</h3>
                <p>Earn Stars on all purchases you make with our <a href="#"> credit card </a> in and outside of Starbucks. Earn 1 Star per $1 when you digitally preload your Starbucks Card with your Starbucks Rewards Visa Card, and earn 2 Stars per $1 when you pay with that preloaded Starbucks Card.</p>
            </div>
        </div>

        <div style={{flex:1}}></div>
        <div style={{flex:1}}></div>

      </div>

    </div>
  )
}
