import React, { useEffect } from 'react'
import { API_KEY } from '../../constants/constants'
import axios from '../../axios'
import './Banner.css'

function Banner() {
    
    return (
        <div className="Banner">
            <div className="content">
                <h1 className='title'>Life of Shine the Great</h1>
                <div className='banner_buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My list</button>
                </div>   
                <h1 className='description'> This is the story of a stupid psychopath who bullies children for a living. The main protagonists in the movie are Shine the theetam and Suresh (A cute plant who drinks water 2 times a week) Based on true incidents.</h1> 
            </div> 
            <div className="fade_bottom"></div>           
        </div>
    )
}

export default Banner
