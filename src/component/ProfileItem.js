import React, { useEffect, useState } from "react";
import './ProfileItem.css';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import HashLoader from "react-spinners/HashLoader";

export default function ProfileItem(props){
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch("https://api.github.com/users/Glhby13")
        .then((response) => response.json())
        .then((json) => setData(json))
        setLoading(true);
    }, []);

    return(
        <a href={"https://github.com/" + data.login} target="_blank" rel="noopener noreferrer">
        <div className="profileItem">
            {loading? loading:<HashLoader size={150} color={"#0024FF"}/>}
            <img src={data.avatar_url} alt={data.avatar_url}></img>
            <p className="name">{data.name}</p>
            <p className="username">{data.login}</p>
            <p>{data.bio}</p>
            <div className="info">
                <div className="company">
                    <ApartmentIcon fontSize="small" style={{marginRight: '8px'}}/>
                    <p>{data.company}</p>
                </div>
                <div> 
                    <LocationOnIcon fontSize="small" style={{marginRight: '8px'}}/>
                    <p>{data.location}</p>
                </div>
                <div>
                    <TwitterIcon fontSize="small" style={{marginRight: '8px'}}/>
                    <p>{`@${data.twitter_username}`}</p>
                </div>
            </div>
        </div>
        </a>
    )
}