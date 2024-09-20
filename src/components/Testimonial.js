import React, { useRef } from 'react'
import { A11y, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// import './PopularDishes.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonial = () => {
    const swiperRef = useRef(null);
    return (
        <div className='container-fluid p-5'>
            <h3 className='text-center title'>Testimonial</h3>
            <div className="content py-4">
                <Swiper
                    onBeforeInit={(swiper) => { swiperRef.current = swiper; }}
                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    spaceBetween={10}
                    pagination={{dynamicBullets:true}}
                    autoplay={true}
                    loop={true}
                    slidesPerView={1}
                    keyboard={{enabled: true}}
                >
                    <SwiperSlide>
                        <div className="container m-auto d-flex justify-content-center align-items-center flex-column p-5 mb-5 bg-white rounded overflow-auto" style={{boxShadow:"0px 5px 50px rgba(0,0,0,0.1"}}>
                            <small className="my-3 fst-italic text-center">"Working with Bhavesh was an absolute pleasure. Their attention to detail, creativity, and commitment to delivering high-quality work exceeded my expectations. I highly recommend them for any project!"</small>
                            <strong className="my-3">XYZ Person</strong>
                            <small>XYZ company</small>                            
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="container m-auto d-flex justify-content-center align-items-center flex-column p-5 mb-5 bg-white rounded overflow-auto" style={{boxShadow:"0px 5px 50px rgba(0,0,0,0.1"}}>
                            <small className="my-3 fst-italic text-center">"I was impressed with Bhavesh’s ability to quickly grasp our vision and turn it into reality. The project was completed on time, and the final product was flawless. A true professional!"</small>
                            <strong className="my-3">XYZ Person</strong>
                            <small>XYZ company</small>                             
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="container m-auto d-flex justify-content-center align-items-center flex-column p-5 mb-5 bg-white rounded overflow-auto" style={{boxShadow:"0px 5px 50px rgba(0,0,0,0.1"}}>
                            <small className="my-3 fst-italic text-center">"Bhavesh went above and beyond to ensure the success of our project. Their technical expertise and proactive approach made a huge difference in delivering results. A fantastic collaborator!"</small>
                            <strong className="my-3">XYZ Person</strong>
                            <small>XYZ company</small>                            
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="container m-auto d-flex justify-content-center align-items-center flex-column p-5 mb-5 bg-white rounded overflow-auto" style={{boxShadow:"0px 5px 50px rgba(0,0,0,0.1"}}>
                            <small className="my-3 fst-italic text-center">"From start to finish, Bhavesh demonstrated exceptional communication, creativity, and professionalism. Their work helped elevate our brand, and we couldn't be happier with the results."</small>
                            <strong className="my-3">XYZ Person</strong>
                            <small>XYZ company</small>                             
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="container m-auto d-flex justify-content-center align-items-center flex-column p-5 mb-5 bg-white rounded overflow-auto" style={{boxShadow:"0px 5px 50px rgba(0,0,0,0.1"}}>
                            <small className="my-3 fst-italic text-center">"The best part of working with Bhavesh is their dedication to solving problems and delivering top-notch solutions. They consistently exceeded our expectations, and we look forward to working together again."</small>
                            <strong className="my-3">XYZ Person</strong>
                            <small>XYZ company</small>                            
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="container m-auto d-flex justify-content-center align-items-center flex-column p-5 mb-5 bg-white rounded overflow-auto" style={{boxShadow:"0px 5px 50px rgba(0,0,0,0.1"}}>
                            <small className="my-3 fst-italic text-center">"I’ve worked with many professionals, but Bhavesh stands out for their ability to combine creativity with technical skill. Their work has had a measurable impact on our business."</small>
                            <strong className="my-3">XYZ Person</strong>
                            <small>XYZ company</small>                             
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>

    )

}

export default Testimonial