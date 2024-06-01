import React from "react";
import {Box, Typography} from '@mui/material';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import img1 from '../../assets/lesley.png';
import img2 from '../../assets/ahmad.png';
import img3 from '../../assets/heena.png';
import img4 from '../../assets/ankur.png';
import img5 from '../../assets/ahmad-stevens.png';
import Card from "./Card";

export default function Specialist() {
    const datas = [
        { img: img1, title: 'Dr. Lesley Hull', designation: 'Medicine' },
        { img: img2, title: 'Dr. Ahmad Khan', designation: 'Neurologist' },
        { img: img3, title: 'Dr. Heena Sachdeva', designation: 'Orthopadics' },
        { img: img4, title: 'Dr. Ankur Sharma', designation: 'Medicine' },
        { img: img5, title: 'Dr. Ahmad Stevens', designation: 'Neurologist' },
        { img: img1, title: 'Dr. Lesley Hull', designation: 'Medicine' },
        { img: img2, title: 'Dr. Ahmad Khan', designation: 'Neurologist' },
        { img: img3, title: 'Dr. Heena Sachdeva', designation: 'Orthopadics' },
        { img: img4, title: 'Dr. Ankur Sharma', designation: 'Medicine' },
        { img: img5, title: 'Dr. Ahmad Stevens', designation: 'Neurologist' }
    ];

    return (
        <Box py={4}>
            <Typography variant="h1" textAlign="center" px={2} mb={3} >
                Our Medical Specialist
            </Typography>
            <Swiper slidesPerGroup={2}
                modules= {[Autoplay, Pagination]}
                loop = {true}
                centeredSlides = {true}
                spaceBetween={20}
                autoplay = {{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true
                }}
                breakpoints={
                    {
                        767: {
                            slidesPerView: 4
                        }
                    }
                }
            >
                {datas.map((data, index) => (
                    <SwiperSlide key={index}>
                        <Card img = {data.img} name = {data.title} designation = {data.designation} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    )
}
