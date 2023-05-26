import React from 'react'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
export default function SearchComponent({ text, action }) {
    return (
        <div className="searchComponent">
            <form>
                <div className="title">
                    <p className="pera" dangerouslySetInnerHTML={{ __html: text }} />
                </div>
                <div className="searchBox">
                    <div className="searchInput">
                        <span className="icon"><FilterAltOutlinedIcon /></span>
                        <span className='input'>
                            <input type="text" placeholder="Looking for..." />
                            <small>eg: Make up artist, photographer</small>
                        </span>
                        <button className='submitBtn'>Search</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
