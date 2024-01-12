import React from 'react'

export default function Extras(props) {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <img src={props.src} alt={props.alt} />
      </div>
      <h3 style={{ textAlign: "center" }}>{props.heading}</h3>
      <p style={{ textAlign: "center", padding: "0px 86px" }} dangerouslySetInnerHTML={{ __html: props.desc }} ></p>
      {props.show && (
        <div style={{ textAlign: "center" }}>
          <a href='#'>Learn more</a>
        </div>
      )}

    </div>
  )
}
