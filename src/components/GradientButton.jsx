import PropTypes from "prop-types";

export default function GradientButton({ text, action }) {
    return (
        <button className='gradientButton' onClick={action} >{text}</button>
    )
}

GradientButton.propTypes = {
    text: PropTypes.string,
    action: PropTypes.func,
}