import PropTypes from 'prop-types'

const Packages = () => {
    return (
        <div className="artistPackagesContainer">
            <div className="artistPackagesBoxs">
                {/* --select activity-- */}
                <div className="activity">
                    <p className="heading">Select an activity</p>
                    <p className="pera">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis eum eveniet iure possimus deleniti architecto?</p>
                    <div className="categoryes">
                        <label htmlFor="wedding">
                            <input type="checkbox" hidden id="wedding" />
                            <p>Wedding</p>
                        </label>
                        <label htmlFor="wedding">
                            <input type="checkbox" hidden id="wedding" />
                            <p>Pre-Wedding Shoot</p>
                        </label>
                        <label htmlFor="wedding">
                            <input type="checkbox" hidden id="wedding" />
                            <p>Party</p>
                        </label>
                    </div>
                </div>
                {/* --select plans-- */}
                <div className="plans">
                    <PlanCard img="https://picsum.photos/id/237/200/300" state="Advanced" price="24,000" />
                    <PlanCard img="https://picsum.photos/id/237/200/300" state="Advanced" price="24,000" />
                    <PlanCard img="https://picsum.photos/id/237/200/300" state="Advanced" price="24,000" />
                </div>
                {/* --select decs-- */}
                <div className="decs">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione maxime dolorum magni natus labore minima. Dolorum veniam numquam possimus veritatis officia. Necessitatibus ducimus nesciunt ipsa ullam magnam beatae facilis est!</p>
                </div>
            </div>
        </div>
    )
}

export default Packages

// --plan card--
const PlanCard = ({ img, state, price }) => {
    return (
        <div className="planCard">
            <div className="icon">
                <img src={img} alt="" />
            </div>
            <p className="state">{state}</p>
            <p className="price">Rs.{price}</p>
            {/* -book btn- */}
            <button>Book Now</button>
        </div>
    )
}

// --proptypes--
PlanCard.propTypes = {
    img: PropTypes.string,
    state: PropTypes.string,
    price: PropTypes.string
}