import { Rating } from "@mui/material"

export const Review = () => {
    return (
        <div className="review">
            <div className="mainReview">
                <div className="userimg">
                    <img src="https://picsum.photos/200/300" alt="" />
                </div>
                <div className="userReview">
                    <p className="name">manish</p>
                    <div className="rating">
                        <Rating value={3} readOnly />
                    </div>
                    <p className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, optio quisquam? Omnis sequi reprehenderit amet veritatis, architecto nisi quod nihil!</p>
                </div>
            </div>
            <div className="reviewReplys">

            </div>
        </div>
    )
}
