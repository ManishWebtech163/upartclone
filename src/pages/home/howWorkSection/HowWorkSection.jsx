import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
// --icon--
import SearchIcon from '@mui/icons-material/Search';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import DoneAllIcon from '@mui/icons-material/DoneAll';

export default function HowWorkSection() {
    return (
        <section className="howWorkSection">
            <span className="bgOverlay"></span>
            <div className="containerBig howWorkContainer">
                <div className="boxes">
                    <div className="item points">
                        <h3 className="heading">How it works</h3>
                        <ul>
                            <li>
                                <span className="icon"><SearchIcon /></span>
                                <div>
                                    <p className="title">Find</p>
                                    <p className="pera">Find artists available at your preferred time and location.</p>
                                </div>
                            </li>
                            <li>
                                <span className="icon"><DriveFileRenameOutlineIcon /></span>
                                <div>
                                    <p className="title">Choose</p>
                                    <p className="pera">Pick from detailed packages with reviews, availability, pricing and at-home/venue services.</p>
                                </div>
                            </li>
                            <li>
                                <span className="icon"><EditCalendarIcon /></span>
                                <div>
                                    <p className="title">Book</p>
                                    <p className="pera">Reserve them for your schedule by booking for the required day and time.</p>
                                </div>
                            </li>
                            <li>
                                <span className="icon"><DoneAllIcon /></span>
                                <div>
                                    <p className="title">Enjoy</p>
                                    <p className="pera">Enjoy the service and pay the rest after the job is done.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="item image">
                        <LazyLoadImage src='./images/homePage/howWorkSectionImg.svg' alt='' />
                    </div>
                </div>
            </div>
        </section>
    )
}
