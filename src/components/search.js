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

//get manga from search name

//on load req Manga
export async function load() {

    try {
        
        const mangaRes = await axios.get(mangaDetailsUrl + 'manga?includes[]=author&includes[]=artist&includes[]=cover_art&limit=20', {
            proxy: {
                host: 'https://localhost',
                port: 80
            }
        })
        
        const mangaDetails = mangaRes.data
        
        if (mangaDetails.result !== 'ok') {
            return console.log('There was an error connection to MangaDexAPI, please try again.')
        }
        
        console.log('Established connection with MangaDexAPI')
        
        const results = mangaDetails.data
        
        console.log(`showing ${results.length} results`)

        let modalContent = []

        let id
        let description
        let author
        
        const searchRes = results.map((result) => {

            coverFileName = result.relationships[2].attributes.fileName

            id = result.id
            description = result.attributes.description
            author = result.relationships[0].type
            
            console.log(id)

            modalContent.push({'id': `${result.id}`, 'description': `${result.attributes.description}`, 'author': `${result.relationships[0].type}`, 'translators': ``})

            /* console.log(modalContent) */
            
            const cover = `${mangaCoversUrl}${result.id}/${coverFileName}`

            return (
                <div id='series' key={result.id} className='series'>
                    <h1 id='image' className='title'>{result.attributes.title.en}</h1>
                    <img id='cover' className='mangaCover' src={cover}/>
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