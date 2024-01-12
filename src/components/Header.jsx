import React, { useEffect } from 'react'

import "../styles/Header.css"

export default function Header() {

  useEffect(() => {
    document.getElementById("defaultOpen1").click();
  }, []);

  function Shower(evt, labelname) {
    var i, belowheader, tablinks;
  
    // Get all elements with className="tabcontent" and hide them
    belowheader = document.getElementById("labeller");
    // belowheader.style.display = "none";

  
    // Get all elements with className="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("switcherLinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    belowheader.innerHTML="STARBUCK's "+labelname
    evt.currentTarget.className += " active";
  }

  return (
    <div className='sticky-header'>
        <div id='flexAdd'>

        <div className='switcher' style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <img id="logo" style={{margin:"10px"}} src="public\utilities\starbucks-logo-png.png" alt="starbuck's logo" />
            <button className='switcherLinks' onClick={(e)=>Shower(e,"MENU")} href="#" style={{margin:"0px 10px",textDecoration:"none",color:"black"}}>MENU</button>
            <button id='defaultOpen1' className='switcherLinks' onClick={(e)=>Shower(e,"REWARDS")} href="#" style={{margin:"0px 10px",textDecoration:"none",color:"black"}}>REWARDS</button>
            <button className='switcherLinks' onClick={(e)=>Shower(e,"GIFT CARDS")} href="#" style={{margin:"0px 10px",textDecoration:"none",color:"black"}}>GIFT CARDS</button>
        </div>
        <div style={{display:"flex",alignItems:"center"}} >
            <img href="#" id='Findlocation' style={{marginRight:"0px"}} src="public\utilities\asdadaczc.png" alt="FIND A STORE" />
            <span style={{fontWeight:"normal",cursor:"pointer"}} >Find a store</span>
            <button className='topButton'  style={{margin:"10px",backgroundColor:"white"}}>Sign in</button>
            <button className='topButton'  style={{margin:"10px",color:"white",backgroundColor:"black"}}>Join now</button>
        </div>

        </div>
        <div id='labeller' ></div>
    </div>
  )
}
