import React from 'react'

export default function HowMakeSection() {
    return (
        <section className="howMakeSection">
            <span className='bgOverlay'></span>
            <div className="containerBig howMakeContainer">
                <h3 className="heading">
                    <span>How we make it Easy</span>
                    <span>for Artists like you?</span>
                </h3>
                {/* --cards-- */}
                <div className="cards">
                    <div className="card">
                        <img src="./images/homePage/howMake/icon1.svg" alt="" />
                        <p className="title">Strong Scial Proof</p>
                    </div>
                    <div className="card">
                        <img src="./images/homePage/howMake/icon2.svg" alt="" />
                        <p className="title">Strong Scial Proof</p>
                    </div>
                    <div className="card">
                        <img src="./images/homePage/howMake/icon3.svg" alt="" />
                        <p className="title">Strong Scial Proof</p>
                    </div>
                    <div className="card">
                        <img src="./images/homePage/howMake/icon4.svg" alt="" />
                        <p className="title">Strong Scial Proof</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
