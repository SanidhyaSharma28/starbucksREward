import React,{useEffect} from 'react'

import "../styles/Section3.css"
import 'boxicons'

export default function Section3() {

  useEffect(() => {
    document.getElementById("defaultOpen").click();
  }, []);

  function openCity(evt, cityName) {
    // document.getElementById("defaultOpen").click();
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with className="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with className="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "flex";
    evt.currentTarget.className += " active";
  }

  return (
    <div id='Sec3'>
      <h2 id='topHeading'>Get your favorites for free</h2>
      <div className="tab">
        <button id="defaultOpen" className="tablinks" onClick={(e) => openCity(e, '25*')}>25<box-icon type='solid' name='star'></box-icon></button>
        <button className="tablinks" onClick={(e) => openCity(e, '50*')}>50<box-icon type='solid' name='star'></box-icon></button>
        <button className="tablinks" onClick={(e) => openCity(e, '150*')}>150<box-icon type='solid' name='star'></box-icon></button>
        <button className="tablinks" onClick={(e) => openCity(e, '200*')}>200<box-icon type='solid' name='star'></box-icon></button>
        <button className="tablinks" onClick={(e) => openCity(e, '400*')}>400<box-icon type='solid' name='star'></box-icon></button>
      </div>

      <div id="25*"  className="tabcontent">
        <img style={{marginLeft:"450px",width:"200px",height:"200px"}} src="src\utilities\coffs.PNG" alt="" />
        <div >
        <h3>Customize your drink</h3>
        <p style={{padding:"0px 300px "}}>Make your drink just right with an extra espresso shot,dairy substitute or a dash of your favorite syrup.</p>
        </div>
      </div>

      <div id="50*" className="tabcontent">
        <img src="src\utilities\starbucks-summer-menu.jpg" style={{marginLeft:"450px",width:"230px",height:"170px"}}  alt="" />
        <div>
        <h3>Free customization options</h3>
        <p style={{padding:"0px 300px "}}> add extras or customizations to your beverage</p>
        </div>
      </div>
      <div id="150*" className="tabcontent">
        <img src="src\utilities\bhg-starbucks-fall-thursdays-7967474-31f54ac21bf44307925d21560b64b856.jpg" style={{marginLeft:"450px",width:"200px",height:"170px"}}  alt="" />
        <div>
        <h3>Free drink or food item</h3>
        <p style={{padding:"0px 300px "}}>Redeem your stars for a free standard menu item.</p>
        </div>
      </div>

      <div id="200*" className="tabcontent">
        <img src="src\utilities\starbucks-marketing-strategy3.jpg" style={{marginLeft:"450px",width:"200px",height:"170px"}}  alt="" />
        <div>
        <h3>Free premium item.</h3>
        <p style={{padding:"0px 300px "}}> Reedem to choose a more premium or handcrafted item.</p>
        </div>
      </div>
      <div id="400*" className="tabcontent">
        <img src="src\utilities\Starbucks®-Essentials10.webp" style={{marginLeft:"450px",width:"200px",height:"200px"}}  alt="" />
        <div>
        <h3>Free merchandise or packaged coffee</h3>
        <p style={{padding:"0px 300px "}}>Get rewards such as free merchandise or packaged coffee to take home</p>
        </div>
      </div>

    </div>

  )
}
