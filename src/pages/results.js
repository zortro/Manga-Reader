import React, { useState, useEffect } from 'react'
import '../assets/css/results.css'
import '../App.css'

import { load } from '../components/search'

/* load() */
const mangaDetailsUrl = 'https://api.mangadex.org/'
const mangaCoversUrl = 'https://uploads.mangadex.org/covers/'

let limit = 10

export default function Browse() {

    async function loadTopRated() {

        try {
            const mangaRes = await fetch(`${mangaDetailsUrl} manga?includes[]=author&includes[]=artist&includes[]=cover_art&limit=${limit}`)
            
            const mangaDetails = mangaRes.data

            console.log(mangaDetails)
            
            if (mangaDetails.result !== 'ok') {
                return console.log('There was an error connection to MangaDexAPI, please try again.')
            }

            console.log('Established connection with MangaDexAPI')

            const results = mangaDetails.data
        }
        catch (err) {
            console.log(err)
        }
    }

    loadTopRated()
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