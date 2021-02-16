import React from 'react'
import './Banner.css'

function Banner() {
    function trancate (string, n){
        return string ?.length > n ? string.substring(0,n - 1) + '...': string

    }
    return (
        <header className="banner" style={{
            backgroundImage:`url('https://www.bajajfinservmarkets.in/content/dam/emistoremarketplace/index/20-02-2020/netflix/Netflix-Banner_1080x419.jpg?impolicy=pqmedium')`,
            backgroundSize:'cover',
            backgroundPosition:"center center"

            }}>
                <div className="banner__contents">
                    <h1 className="banner__title ">Movie name</h1>
                    <div className="banner__buttons">
                        <button className="banner__button">play</button>
                        <button className="banner__button">My list</button>
                    </div>
                    <div className="banner__description">
                        {trancate( 'this is a test truncate',150)}
                    </div>
                    <div className="banner--fadeBottom"/>

                </div>
                    
            
        </header>
    )
}

export default Banner
