import ImgComponent from "../../../../components/ImgComponent"

const Achievements = () => {
    return (
        <div className="artistAchievementContainer">
            <div className="artistAchievementBoxs">
                {/* -- */}
                <div className="certificatesDiv">
                    <CertificateCard />
                    <CertificateCard />
                    <CertificateCard />
                    <CertificateCard />
                </div>
                {/* -- */}
                <div className="othersDiv">
                    <p className="heading">Other Achievements</p>
                    <div className="list">
                        <ol>
                            <li>
                                <p className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, repellendus.</p>
                                <p className="academyName">Lorem, ipsum.</p>
                                <p className="date">lorem apr 2012</p>
                            </li>
                            <li>
                                <p className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, repellendus.</p>
                                <p className="academyName">Lorem, ipsum.</p>
                                <p className="date">lorem apr 2012</p>
                            </li>
                            <li>
                                <p className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, repellendus.</p>
                                <p className="academyName">Lorem, ipsum.</p>
                                <p className="date">lorem apr 2012</p>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Achievements


// --certificate--
const CertificateCard = () => {
    return (
        <div className="certificateCard">
            <ImgComponent src="https://picsum.photos/200/300" />
            <div className="details">
                <p className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, repellendus.</p>
                <p className="academyName">Lorem, ipsum.</p>
                <p className="date">lorem apr 2012</p>
            </div>
        </div>
    )
}