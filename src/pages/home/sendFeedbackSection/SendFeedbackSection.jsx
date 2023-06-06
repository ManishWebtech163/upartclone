import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useForm } from "react-hook-form";
import Textarea_common from '../../../components/formFields/Textarea_common';
import Slider from '@mui/material/Slider';
import GradientButton from '../../../components/gradientButton';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export default function SendFeedbackSection() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = (data) => {
        console.log(data);
    };

    // --styles slider--
    const PrettoSlider = styled(Slider)({
        color: '#C33C54',
        height: 8,
        '& .MuiSlider-track': {
            border: 'none',
        },
        '& .MuiSlider-thumb': {
            height: 24,
            width: 24,
            boxShadow: "0px 0px 20px gray",
            backgroundColor: '#C33C54',
            border: '4px solid #fff',
            '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            },
            '&:before': {
                display: 'none',
            },
        },
        '& .MuiSlider-valueLabel': {
            lineHeight: 1.2,
            fontSize: 12,
            background: 'unset',
            padding: 0,
            width: 32,
            height: 32,
            borderRadius: '50% 50% 50% 0',
            backgroundColor: '#52af77',
            transformOrigin: 'bottom left',
            transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
            '&:before': { display: 'none' },
            '&.MuiSlider-valueLabelOpen': {
                transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
            },
            '& > *': {
                transform: 'rotate(45deg)',
            },
        },
    });

    return (
        <section className="sendFeedbackSection">
            <div className="containerBig sendFeedbackContainer">
                <div className="boxes">
                    <div className="box image">
                        <div className="img">
                            <LazyLoadImage src='./images/homePage/sendFeedbackSectionImg.svg' alt='#' />
                        </div>
                    </div>
                    <div className="box form">
                        <p className="pera">How satisfied are you overall with the support of your Delivery Pattern?</p>
                        <div className="feedBackForm">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="slider">
                                    <ul>
                                        <li>1</li>
                                        <li>2</li>
                                        <li>3</li>
                                        <li>4</li>
                                        <li>5</li>
                                        <li>6</li>
                                        <li>7</li>
                                        <li>8</li>
                                        <li>9</li>
                                        <li>10</li>
                                    </ul>
                                    <div className="slide">
                                        <PrettoSlider
                                            defaultValue={30}
                                            step={10}
                                            min={10}
                                            max={100}
                                            {...register("userFeedBackRating", { required: true })}
                                        />
                                    </div>
                                    <div className="status">
                                        <span>Not Happy</span>
                                        <span>Super Happy</span>
                                    </div>
                                </div>
                                <div className="textArea">
                                    <Textarea_common lable="Start typing something..." rows={5} name="userFeedBack" register={register} validations={{ required: "This input is required.", minLength: { value: 4, message: "min value 4" }, max: 10 }} error={errors.userFeedBack ? true : false} />
                                    <Typography sx={{ color: "red" }}>{errors.userFeedBack?.message}</Typography>
                                </div>
                                <GradientButton text="Send Feedback" type="submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
