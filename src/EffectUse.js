import axios from 'axios';
import React, { useEffect, useState } from 'react';

const gitHubUrl = "https://api.github.com/users/deekshasharma";

function UseEff(){
    const [userData,setUserData] = useState({});

    useEffect(()=>{
        getGitHubUserWithAxios();
        // getGitHubUseWithFeatch();
    },[])

    const getGitHubUseWithFeatch = async() =>{
        const response = await fetch(gitHubUrl);
        const jsondata = await response.json();
        setUserData(jsondata);
    }
 
    const getGitHubUserWithAxios = async() =>{
      const response = await axios.get(gitHubUrl);
      setUserData(response.data)
    }

    return(
        <div className="app">
         <header className="app-header">

         </header>
         <div className="user-container">
           <h1 className="info-item">{userData.name}</h1>
           <h1 className="info-item">{userData.location}</h1>
           <h1 className="info-item">{userData.blog}</h1>
           <h1 className="info-item">{userData.company}</h1>
         </div>
        </div>
    )
}

export default UseEff;