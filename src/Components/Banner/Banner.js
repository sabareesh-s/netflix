import React, { useEffect, useState } from 'react'
import { API_KEY, imageUrl } from '../../constants/constants'
import axios from '../../axios'
import './Banner.css'

function Banner() {
    const styleObj = {
        width : "600 px"
    }
    const [movie, setMovie] = useState()
    useEffect(() => {
       axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&language=en-US`).then((response)=>{
           
           setMovie(response.data.results[2])
           
       })
    }, []) 
    return (
    
        <div style={{backgroundImage : `url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
        className="Banner">
            <div className="content">
                <h1 className='title' style={styleObj}>{ movie? movie.title : "" }</h1>
                <div className='banner_buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My list</button>
                </div>   
                <h1 className='description'> { movie ? movie.overview:""}</h1> 
            </div> 
            <div className="fade_bottom"></div>           
        </div>
    )
}

export default Banner
