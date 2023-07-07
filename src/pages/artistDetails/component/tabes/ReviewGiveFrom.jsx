import Button_common from "../../../../components/Button"
import { Stars } from "../../../../components/formFields/Stars"
import Textarea_common from "../../../../components/formFields/Textarea_common"

export const ReviewGiveFrom = () => {
    return (
        <div className="reviewGiveForm">
            <p className="heading">Tate your experience</p>
            <form>
                <div className="starsDiv">
                    <Stars />
                </div>
                <div className="textarea">
                    <Textarea_common lable="Message" rows={3} />
                </div>
                <div className="submitBtn">
                    <Button_common text="submit" />
                </div>
            </form>
        </div>
    )
}
