import React from 'react'

export default function Button({ text, action }) {
    return (
        <button className='commonButton' onClick={action}>{text}</button>
    )
}
