import React, { useState, useEffect } from 'react'
import '../assets/css/results.css'
import '../App.css'

import { load } from '../components/search'

load()

export default function Browse() {

    /*
    instead of hover desc, create modal to display full manga details
    favorite button (star or heart) to mark into local storage (api?)
    to store book id for use in myList
    create to series button that allows to read manga. 
    */
    
    return (
        <div>
            <div id='defaultResults'/>
        </div>
    )
}