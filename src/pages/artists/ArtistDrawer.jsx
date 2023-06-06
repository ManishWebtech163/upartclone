import * as React from 'react';
import ArtistDrawerSidebar from './ArtistDrawerSidebar';
import ArtistDrawerCardsContainer from './ArtistDrawerCardsContainer';
import { useState } from 'react';




export default function ArtistDrawer() {
    const [drawerOpen, setdrawerOpen] = useState(false)

    return (
        <>
            <div className={`artistDrawer ${drawerOpen && "drawerOpen"}`}>
                {/* --sidebar-- */}
                <ArtistDrawerSidebar setdrawerOpen={setdrawerOpen} />
                {/* --cardsContainer-- */}
                <ArtistDrawerCardsContainer drawerOpen={drawerOpen} setdrawerOpen={setdrawerOpen} />
            </div>
        </>
    );
}