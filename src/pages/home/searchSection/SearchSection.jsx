import React from 'react'
import SearchComponent from '../../../components/SearchComponent'

export default function SearchSection() {
    return (
        <section className="searchSection">
            <div className="containerBig">
                <SearchComponent text="Find the best <br/> <span> Professional  Artists </span>and <br/> studios near you" />
            </div>
        </section>
    )
}
