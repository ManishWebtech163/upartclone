import React from 'react'
import HeroSection from './HeroSection'
import SecondSection from './secondSection/SecondSection'
import SearchSection from './searchSection/SearchSection'
import CategoriesSection from './categoriesSection/CategoriesSection'
import FeaturedArtistsSection from './featuredArtistsSection/FeaturedArtistsSection'
import MasterClassSection from './masterClassSection/MasterClassSection'

export default function Home() {
    return (
        <main>
            <div className="homePage container-fluid">
                <HeroSection />
                <SecondSection />
                <SearchSection />
                <CategoriesSection />
                <FeaturedArtistsSection />
                <MasterClassSection />
            </div>
        </main>
    )
}
