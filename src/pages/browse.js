import React, { useState } from 'react'
import '../assets/style.css'

import { search, load } from '../components/search'

load()

export default function Browse() {

    return (
        <div>
            <nav className='searchBar'>
                <input placeholder="search"/>
                {/* create checkboxes for search filters */}
                <button>search</button>
            </nav>
            <div id='results'/>
        </div>
    )
}