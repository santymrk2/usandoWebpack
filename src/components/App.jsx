import React from 'react';
import useGetUsers from '../hooks/useGetUsers';
import github from '@images/github.png';
import twitter from '@images/twitter.png';
import instagram from '@images/instagram.png';
import '@styles/main.scss';

const API = process.env.API_URL;

const App =  () => {
    const user = useGetUsers(API);
    //
    return(
        <div className="About">
            <div className="card">
                <div className="card_details">
                    <div className="card_photo center circle">
                        <img src={user?.picture?.large} alt={user?.name?.first} />
                        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{enableBackground: `new -580 439 577.9 194`}} xmlSpace="preserve"> <circle cx="50" cy="50" r="40" /> </svg>
                    </div>
                    <p className="card_title">Hi, My name is</p>
                    <p className="card_value">{user?.name?.first} {user?.name?.last}</p>
                </div>
                <div className="card_userdata">
                    <ul>
                        <li>{user.email}</li>
                        <li>{user?.location?.country}</li>
                    </ul>
                </div>
                <div className="card_social">
                    <a href="https://twitter.com/gndx">
                        <img src= { twitter } />
                    </a>
                    <a href="https://github.com/gndx">
                            <img src= { github } />
                    </a>
                    <a href="https://instagram.com/gndx">
                        <img src= { instagram } />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default App;