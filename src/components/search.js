import React from 'react'
import { createRoot } from 'react-dom/client'

const axios = require('axios')

//base api url
const mangaDetailsUrl = 'https://api.mangadex.org/'
const mangaCoversUrl = 'https://uploads.mangadex.org/covers/'

//process req
    
//req by genre
//req by author name
//req by manga name

let coverFileName

//on load req Manga
export async function load() {
    try {
        
        const mangaRes = await axios.get(mangaDetailsUrl + 'manga?includes[]=author&includes[]=artist&includes[]=cover_art')
        
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
                <li key={result.id} className='series'>
                    <h1 className='title'>{result.attributes.title.en}</h1>
                    <img className='cover' src={cover}/>
                    <p className='description'>{result.attributes.description.en}</p>           
                </li>
            )
        })
    
        const loadRes = document.getElementById('results')
        const root = createRoot(loadRes)
    
        root.render (
            <div>
                {searchRes}
            </div>
        )
    } catch (err) {
        console.log(err)
    }
}