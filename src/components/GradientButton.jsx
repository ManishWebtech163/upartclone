import React from 'react'

export default function GradientButton({ text, action }) {
    return (
        <button className='gradientButton' onClick={action}>{text}</button>
    )
}
