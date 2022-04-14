import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'

const axios = require('axios')

//base api url
const mangaDetailsUrl = 'https://api.mangadex.org/'
const mangaCoversUrl = 'https://uploads.mangadex.org/covers/'

//process req

//req by genre
//req by author name
//req by manga name

//on hover effects

let coverFileName

//on load req Manga
export async function load() {

    try {
        
        const mangaRes = await axios.get(mangaDetailsUrl + 'manga?includes[]=author&includes[]=artist&includes[]=cover_art&limit=20')
        
        const mangaDetails = mangaRes.data
        
        if (mangaDetails.result !== 'ok') {
            return console.log('There was an error connection to MangaDexAPI, please try again.')
        }
        
        console.log('Established connection with MangaDexAPI')
        
        const results = mangaDetails.data
        
        console.log(`showing ${results.length} results`)
        
        const searchRes = results.map((result) => {

            coverFileName = result.relationships[2].attributes.fileName
            
            const cover = `${mangaCoversUrl}${result.id}/${coverFileName}`

            return (
                <div id='series' key={result.id} className='series'>
                    <div className='titleCard'>
                        <h1 id='image' className='title'>{result.attributes.title.en}</h1>
                    </div> 
                    <img className='mangaCover' src={cover}/>
                    <div className='descBackground'>
                        <p id='description' className='mangaDescription hide'>{result.attributes.description.en}</p>           
                    </div>
                </div>
            )
        })
    
        const loadRes = document.getElementById('defaultResults')
        const root = createRoot(loadRes)
    
        root.render (
            <div className='renderedSearches'>
                {searchRes}
            </div>
        )
    } catch (err) {
        console.log(err)
    }
}