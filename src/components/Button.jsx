import React from 'react'

export default function Button_common({ text, action, type }) {
    return (
        <button type={type} className='commonButton' onClick={action}>{text}</button>
    )
}
