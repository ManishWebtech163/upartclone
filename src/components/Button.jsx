import PropTypes from "prop-types";

export default function Button_common({ text, action, type }) {
    return (
        <button type={type} className='commonButton' onClick={action}>{text}</button>
    )
}

Button_common.propTypes = {
    text: PropTypes.string,
    action: PropTypes.func,
    type: PropTypes.string,
}