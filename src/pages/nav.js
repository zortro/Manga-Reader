import React, { useState } from 'react'

import '../App.css'
import '../assets/style.css'

import account from '../assets/img/account.png'
//import x icon to close modal


//call search(inputname + filters) funcion from ../components/search

export default function Nav() {

    const [hidden, setHidden] = useState(true)

    function menuModal() {
        setHidden(false)
    }

    function closeModal() {
        setHidden(true)
    }

    return (
        <div>
            <div className='navContainer'>
                <nav className='navbar'>
                    <div className='headerCont'>
                        <div className='titleCont'>
                            <h1 className='reader'>Manga</h1>
                            <h1 className='manga'>Reader</h1>
                        </div>
                        <p className='caption'>powered by <a className='mangaDex' href='https://api.mangadex.org/' target='_blank'>MangaDexAPI</a></p>
                    </div>
                    <div className='searchCont'>
                        <input id='query' className='searchBar' placeholder='Search'/>
                        <button className='searchBtn'>Search</button>
                    </div>
                    {
                        hidden === true
                        /* maybe remove this */
                        ? <img onClick={menuModal} src={account} className='menu'/>
                        : <img onClick={closeModal} src={account} className='menu'/>
                    }
                </nav>
            </div>
            <div id='sideBarContainer' className='sideBarContainer'>
                <div className={hidden ? 'sideBar hide' : 'sideBar'}>
                    <ul>
                        <li className='sideBarOption'>
                            My Profile
                        </li>
                        <li className='sideBarOption'>
                            My Favorites
                        </li>
                        <li className='sideBarOption'>
                            My Friends
                        </li>
                        <li className='sideBarOption'>
                            About MangaReader
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}