import { LazyLoadImage } from 'react-lazy-load-image-component'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PropTypes from 'prop-types'

export default function ArtistCard({ name }) {
    return (
        <div className="artistCard">
            <div className="img">
                <LazyLoadImage src='https://picsum.photos/200/300' alt={name} />
            </div>
            <div className="details">
                <div className="name">Artist’s Name</div>
                <div className="price">$12,000</div>
                <div className="professon"><span className="icon">hi</span>Professional</div>
                <div className="subPrice">$15,000</div>
                <div className="location"><span className='icon'><LocationOnOutlinedIcon sx={{ fontSize: "14px", marginTop: "7px" }} /></span>New Delhi, India</div>
            </div>
        </div>
    )
}

ArtistCard.propTypes = {
    name: PropTypes.string
}