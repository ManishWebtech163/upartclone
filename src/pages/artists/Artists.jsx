import React from 'react'
import ArtistDrawer from './ArtistDrawer'

export default function Artists() {
    return (
        <main className='artistPage'>
            <section className="containerExtraBig artistSection">
                <div className="artistContainer">
                    {/* --drawer-- */}
                    <ArtistDrawer />
                    {/* --//drawer-- */}
                </div>
            </section>
        </main>
    )
}
