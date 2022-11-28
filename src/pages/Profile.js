import ProfileItem from "../component/ProfileItem";
import React from "react";
import './Profile.css'


const data = [{username: 'Glhby13', token:'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'}]


export default function Profile() {
    return (
      <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
        <div className="cardContainer">

          {data.map((item, index) => 
          <ProfileItem username={item.username} token={item.token} key={index}/>)}
        </div>
      </div>
    );
  }
  