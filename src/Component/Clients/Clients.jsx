import React from 'react'
import { FaStar } from 'react-icons/fa'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Clients = () => {
    return (
        <div>
            <>
                <section className=' pt-20 pb-10 px-20'>
                    <div>
                        <div>
                            <div className='flex flex-col gap-3 items-center justify-center'>
                                <h2 className='text-[#190E45] text-[4.5rem] font-bold text-center'>What Our Clients Say About Us</h2>
                                <p className='text-[#190E45] text-[1.70rem] text-center'>By upholding a 100% retention rate, we prioritize all clients equally, propelling them towards achievements and shared success.</p>
                            </div>
                        </div>
                    </div>

                    <div>

                        <div className='flex items-center justify-end gap-3 mt-5 '>
                            <button className='prev p-3 text-xl rounded-lg bg-gray-200 hover:bg-red-600 hover:text-white cursor-pointer'><IoIosArrowBack /></button>
                            <button className='next p-3 text-xl rounded-lg bg-gray-200 hover:bg-red-600 hover:text-white cursor-pointer'><IoIosArrowForward /></button>
                        </div>

                        <div className="mt-10">

                            <Swiper
                                navigation={{ nextEl: ".next", prevEl: ".prev" }}
                                breakpoints={{
                                    640: { slidesPerView: 1, spaceBetween: 20 },
                                    760: { slidesPerView: 2, spaceBetween: 20 },
                                    1024: { slidesPerView: 3, spaceBetween: 20 },
                                }}
                                loop={true}
                                modules={[Navigation]} className="mySwiper">
                                {
                                    testimonials.map(({ id, title, date, rating, para }) => (
                                        <SwiperSlide key={id} className='bg-transparent border border-red-600 p-5 rounded-lg flex flex-col min-h-[690px]'>
                                            <div className='flex flex-col gap-3'>
                                                <div className='flex items-center justify-between'>
                                                    <span className='flex mt-2 gap-1'>
                                                        {[...Array(5)].map((_, i) => (
                                                            <span key={i} className={`text-lg ${i < rating ? 'text-white bg-red-500' : 'text-gray-300'}`}><FaStar /></span>
                                                        ))}
                                                    </span>
                                                    <p className='text-lg'>{date}</p>
                                                </div>
                                            </div>
                                            <div className='min-h-[16vh]'>
                                                <h3 className='text-[1.8rem]/10 font-bold mt-5'>{title}</h3>
                                                <p className='text-[1.1rem] mt-3'>{para}</p>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>

                        </div>
                    </div>
                </section>
            </>
        </div>
    )
}

export default Clients



const testimonials = [
    {
        id: 1,
        title: "Seamless Supply Chain Management by Brankit",
        rating: 5,
        date: "Aug 18, 2023",
        para: "In my role as a Brand Manager working with an Aggregator, I've had the opportunity of working with Haseeb from Brankit for the past two years. During this time, he played a crucial role in enhancing the efficiency of our supply chain management within the Home & Wellness Category, which boasts a value exceeding $20 million.Haseeb's contributions have been instrumental in refining our replenishment processes for over 1000 SKUs. Additionally, he has seamlessly integrated technological solutions into our operations through the implementation of ERP and inventory management systems.Working with Haseeb has been nothing but great. His professionalism, expertise, and positive work demeanor shine brightly in all our interactions. "
    },
    {
        id: 2,
        title: "Ecommerce Guru",
        rating: 5,
        date: "Aug 30, 2023",
        para: "To sum up my experience with Haseeb, his proficiency in the field, patience, and thoroughness were exemplary in every aspect of his work. From his impeccable attention to detail to his exceptional personal communication skills, he consistently went above and beyond to meet my needs and exceed expectations. Moreover, his unwavering dedication and ability to effectively communicate in English further enhanced the experience as he tutored me along the way in the Ecommerce journey. If you are looking for detail, knowledge and patience, Haseeb is your guy!"
    },
    {
        id: 3,
        title: "Really excellent work all round",
        rating: 5,
        date: "July 06, 2024",
        para: "Really excellent work all round - highly recommended and will continue using their services."
    },
    {
        id: 4,
        title: "Working for half a year with Brankit..",
        rating: 5,
        date: "May 02, 2024",
        para: "Working for half a year with Brankit I am very happy. Keep it up!"
    },
    {
        id: 5,
        title: "Very professional and experienced",
        rating: 5,
        date: "Aug 16, 2023",
        para: "Very professional and experienced. We use them for their supply chain management, and direction advise on other areas we can improve. A+"
    },
    {
        id: 6,
        title: "Highly recommended!",
        rating: 5,
        date: "Aug 18, 2023",
        para: "Their expert team seamlessly integrated with our operations, boosting efficiency and productivity. What sets them apart is their tailored solutions, transparent communication, and unwavering commitment to customer satisfaction. Highly recommended!"
    },
]
