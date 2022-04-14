import React, { useState } from 'react'

import '../App.css'
import '../assets/style.css'

export default function nav() {

    return (
        <nav className='navbar'>
            <div className='headerCont'>
                <div className='titleCont'>
                    <h1 className='reader'>Manga</h1>
                    <h1 className='manga'>Reader</h1>
                </div>
                <p className='caption'>powered by <a className='mangaDex' href='https://api.mangadex.org/' target='_blank'>MangaDexAPI</a></p>
            </div>
            <div className='searchCont'>
                <input className='searchBar' placeholder='Search'/>
                <button className='searchBtn'>Search</button>
            </div>
            <p className='caption'>Menu</p>
        </nav>
    )
}