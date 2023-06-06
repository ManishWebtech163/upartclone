import React from 'react'
import ArtistProfile from './component/ArtistProfile'
import ArtistBio from './component/ArtistBio'
import Tabes from './component/tabes/Tabes'

export default function ArtistDetails() {
    return (
        <main className='artistDetailsPage'>
            <section className="containerExtraBig artistDetailsSection">
                <div className="artistDetailsContainer">
                    <ArtistProfile />
                    <ArtistBio />
                    <Tabes />
                </div>
            </section>
        </main>
    )
}
