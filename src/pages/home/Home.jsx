import React from 'react'
import HeroSection from './HeroSection'
import SecondSection from './secondSection/SecondSection'
import SearchSection from './searchSection/SearchSection'
import CategoriesSection from './categoriesSection/CategoriesSection'
import FeaturedArtistsSection from './featuredArtistsSection/FeaturedArtistsSection'
import MasterClassSection from './masterClassSection/MasterClassSection'
import WhyUpartSection from './whyUpartSection/WhyUpartSection'
import HowMakeSection from './howMakeSection/HowMakeSection'
import HowWorkSection from './howWorkSection/HowWorkSection'
import SendFeedbackSection from './sendFeedbackSection/SendFeedbackSection'
import RegisterFormSection from './registerFromSection/RegisterFormSection'

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
                <WhyUpartSection />
                <HowMakeSection />
                <HowWorkSection />
                <SendFeedbackSection />
                <RegisterFormSection />
            </div>
        </main>
    )
}
