import React from 'react'
import ArtistCard from '../../components/ArtistCard'
import { Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

export default function ArtistDrawerCardsContainer({ drawerOpen, setdrawerOpen }) {
    return (
        <>
            {/* --ArtistDrawerCardsContainer-- */}
            <div className="cardsContainer">
                {drawerOpen &&
                    <div> <Button onClick={() => setdrawerOpen(false)} sx={{ minWidth: "30px" }}><MenuIcon /></Button>
                    </div>
                }
                <p style={{ color: "gray", margin: "10px 5px" }}> cards </p>
                <div className="cards">
                    <ArtistCard />
                    <ArtistCard />
                    <ArtistCard />
                    <ArtistCard />
                    <ArtistCard />
                    <ArtistCard />
                    <ArtistCard />
                    <ArtistCard />
                    <ArtistCard />
                    <ArtistCard />
                    <ArtistCard />
                    <ArtistCard />
                    <ArtistCard />
                    <ArtistCard />
                    <ArtistCard />
                    <ArtistCard />
                </div>
            </div>
        </>
    )
}
