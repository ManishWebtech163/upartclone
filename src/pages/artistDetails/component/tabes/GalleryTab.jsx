import { useState } from "react"
import { motion } from 'framer-motion'
import GradientButton from "../../../../components/GradientButton";

export default function GalleryTab() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5,
            }
        }, exit: {
            opacity: 0,
        }
    }

    const imgVariants = {
        hidden: {
            position: "absolute",
            x: "-100%",
            y: "-100%",
            opacity: 0,

        },
        show: {
            x: 0,
            y: 0,
            position: "relative",
            opacity: 1,

        },
        exit: {
            position: "absolute",
            x: "-100%",
            y: "-100%",
            opacity: 0,

        }

    };

    // --addActiveClass--
    const [activeIndex, setactiveIndex] = useState()

    const changeState = (e) => {
        setactiveIndex(() => e)
    }

    return (
        <>
            <div className="artistGalleryContainer">
                <div className="artistGalleryDiv">
                    {/* --artistAlbum-- */}
                    <motion.div className={`artistAlbum ${activeIndex === 1 && 'active'}`} onClick={() => changeState(1)} variants={container} initial="hidden" animate="show" exit="exit">
                        <div className="initialPoint">
                            {activeIndex !== 1 &&
                                <div className="closePoint">
                                    <img src="https://picsum.photos/200/300" alt="" />
                                </div>
                            }
                            <div className="openPoint">
                                <h1>ablum image 20</h1>
                            </div>
                        </div>
                        {activeIndex === 1 &&
                            <>
                                <motion.img src="https://picsum.photos/200/300" alt="" className="artistImages" variants={imgVariants} />
                                <motion.img src="https://picsum.photos/200" alt="" className="artistImages" variants={imgVariants} />
                                <motion.img src="https://picsum.photos/id/237/200/300" alt="" className="artistImages" variants={imgVariants} />
                                <motion.img src="https://picsum.photos/seed/picsum/200/300" alt="" className="artistImages" variants={imgVariants} />
                                <motion.img src="https://picsum.photos/200/300?grayscale" alt="" className="artistImages" variants={imgVariants} />
                                <motion.img src="https://picsum.photos/200/300/?blur" alt="" className="artistImages" variants={imgVariants} />
                            </>
                        }
                    </motion.div>
                    {/* -- */}
                    <motion.div className={`artistAlbum ${activeIndex === 2 && 'active'}`} onClick={() => changeState(2)} variants={container} initial="hidden" animate="show">
                        <div className="initialPoint">
                            {activeIndex !== 2 &&
                                <div className="closePoint">
                                    <img src="https://picsum.photos/200/300" alt="" />
                                </div>
                            }
                            <div className="openPoint">
                                <h1>ablum image 20</h1>
                            </div>
                        </div>
                        {activeIndex === 2 &&
                            <>

                                <motion.img src="https://picsum.photos/200/300" alt="" className="artistImages" variants={imgVariants} />
                                <motion.img src="https://picsum.photos/200" alt="" className="artistImages" variants={imgVariants} />
                                <motion.img src="https://picsum.photos/id/237/200/300" alt="" className="artistImages" variants={imgVariants} />
                                <motion.img src="https://picsum.photos/seed/picsum/200/300" alt="" className="artistImages" variants={imgVariants} />
                                <motion.img src="https://picsum.photos/200/300?grayscale" alt="" className="artistImages" variants={imgVariants} />
                                <motion.img src="https://picsum.photos/200/300/?blur" alt="" className="artistImages" variants={imgVariants} />

                            </>
                        }

                    </motion.div>

                </div>
                {/* --show all button-- */}
                <div className="showAllBtnDiv">
                    <GradientButton text="Show all" />
                </div>
            </div>
        </>
    )
}
