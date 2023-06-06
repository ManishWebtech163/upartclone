import React, { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export default function ImgComponent({ src, style }) {
    const [loading, setloading] = useState(true)
    const [error, setError] = useState(false)
    let loadingImg = "https://png.pngtree.com/png-clipart/20190918/ourmid/pngtree-load-the-3273350-png-image_1733730.jpg"
    let errorImg = "https://w7.pngwing.com/pngs/595/505/png-transparent-computer-icons-error-closeup-miscellaneous-text-logo.png"
    return (
        <LazyLoadImage src={loading ? loadingImg : [error ? errorImg : src]} onLoad={() => setloading(false)} onError={() => setError(true)} style={style} />
    )
}
