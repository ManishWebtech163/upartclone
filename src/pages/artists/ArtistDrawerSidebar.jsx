import React from 'react'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SelectField_common from '../../components/formFields/SelectField_common';
export default function ArtistDrawerSidebar({ setdrawerOpen }) {
    return (
        <>
            {/* --sidebar-- */}
            <div className="sideBar">
                <div className="form">
                    <div className="heading">
                        <span><CloseOutlinedIcon sx={{ fontSize: "2em", fontWeight: "300" }} onClick={() => setdrawerOpen(true)} /></span>
                        <h3>Anchors</h3>
                    </div>
                    <form>
                        <div className="search">
                            <span className="icon"><SearchOutlinedIcon /></span>
                            <input type="text" placeholder='Seach artist' />
                        </div>

                        <div className="require">
                            <p className="title">What do you require?</p>
                            <SelectField_common />
                        </div>

                        <div className="require">
                            <p className="title">Price range</p>
                            <div className="priceRange">
                                <input type="number" />
                                <span></span>
                                <input type="number" />
                            </div>
                        </div>

                        <div className="require">
                            <p className="title">Expertise level</p>
                            <SelectField_common />
                        </div>

                        <div className="require">
                            <p className="title">City</p>
                            <SelectField_common />
                        </div>

                        <div className="require">
                            <p className="title">Expertise level</p>
                            <SelectField_common />
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}
