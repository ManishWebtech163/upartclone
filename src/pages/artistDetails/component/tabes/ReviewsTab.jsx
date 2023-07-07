import SelectField_common from "../../../../components/formFields/SelectField_common"
import { Review } from "./Review"
import { ReviewGiveFrom } from "./ReviewGiveFrom"


const ReviewsTab = () => {
    return (
        <>
            <div className="reviwesContainer">
                <div className="item reviwsBox">
                    <div className="fitlerReviewsDiv">
                        <SelectField_common label="Hishest rated" />
                    </div>
                    <div className="reviews">
                        <Review />
                        <Review />
                        <Review />
                        <Review />
                        <Review />
                    </div>
                </div>
                <div className="item giveReviewForm">
                    <ReviewGiveFrom />
                </div>
            </div>
        </>
    )
}

export default ReviewsTab