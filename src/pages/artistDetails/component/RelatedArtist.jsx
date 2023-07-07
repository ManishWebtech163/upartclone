import ArtistCard from "../../../components/ArtistCard"


const RelatedArtist = () => {
    return (
        <div className="relatedArtistContainer">
            <div className="heading">Related Artist</div>
            <div className="relatedArtist">
                {/* -cards- */}
                <ArtistCard />
                <ArtistCard />
                <ArtistCard />
                <ArtistCard />
                {/* -/cards- */}
            </div>
        </div>
    )
}

export default RelatedArtist