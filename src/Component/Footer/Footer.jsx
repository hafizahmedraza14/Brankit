import React from 'react'
import footer from '../../../public/download (1).png'
import image1 from '../../assets/Group-136.png'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return (
        <div>
            <>
                <section className='bg-[#190E45] py-10 rounded-t-[100px]'>
                    <div>
                        <div className='flex items-start justify-around container mx-auto px-8 py-10 gap-10'>
                            <div>
                                <div className='flex items-center gap-1'>
                                    <img src={footer} className='w-18 h-18' alt="Footer Logo" />
                                    <h2 className='text-4xl font-semibold font-serif text-white'>Brankit</h2>
                                </div>
                                <div>
                                    <h2 className='text-4xl/12 font-semibold text-white mt-4'>
                                        We Think<br />
                                        We Act<br />
                                        We Win
                                    </h2>
                                </div>
                            </div>
                            <div>
                                <h2 className='text-4xl font-semibold text-white'>Services</h2>
                                <div className='flex flex-col gap-4 mt-4'>
                                    <p className='text-white text-lg/6'>Supply Chain Management<br /> Services</p>
                                    <p className='text-white text-lg/6'>Operational Automation<br /> Services</p>
                                    <p className='text-white text-lg/6'>Amazon Brand Management<br /> Services</p>
                                </div>
                            </div>
                            <div>
                                <h2 className='text-4xl font-semibold text-white'>Resources</h2>
                                <div className='flex flex-col gap-4 mt-4'>
                                    <p className='text-white text-lg/6'>Success Stories</p>
                                    <p className='text-white text-lg/6'>What Our Clients Say</p>
                                    <p className='text-white text-lg/6'>Podcast</p>
                                </div>
                            </div>
                            <div>
                                <h2 className='text-4xl font-semibold text-white'>Stay in Touch</h2>
                                <div className='flex items-center gap-2 mt-4 text-white '>
                                    <FaFacebookF className='bg-white text-[#190E45] p-2 text-[3.0rem] rounded-full' />
                                    <FaInstagram className='bg-white text-[#190E45] p-2 text-[3.0rem] rounded-full' />
                                    <FaLinkedinIn className='bg-white text-[#190E45] p-2 text-[3.0rem] rounded-full' />
                                    <FaTiktok className='bg-white text-[#190E45] p-2 text-[3.0rem] rounded-full' />
                                    <FaYoutube className='bg-white text-[#190E45] p-2 text-[3.0rem] rounded-full' />
                                </div>
                            </div>
                        </div>
                        <div className='flex items-start justify-between container mx-auto px-15 pt-10 pb-20 gap-10'>
                            <div>
                                <div className='flex items-center gap-2'>
                                    <h3 className='text-2xl font-semibold text-white'>Email : </h3>
                                    <p className='text-white text-lg/6'>info@brankit.com</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <h3 className='text-2xl font-semibold text-white'>Phone : </h3>
                                    <p className='text-white text-lg/6'>+17373073878</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <h3 className='text-2xl font-semibold text-white'>Address: : </h3>
                                    <p className='text-white text-lg/6'>5900 Balcones Drive Suite 16175 Austin TX, USA 78731</p>
                                </div>
                            </div>
                            <div className='flex gap-2 mt-4 items-center'>
                                <div>
                                    <img src={image1} className='w-full h-auto'/>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center  container mx-auto px-15 pt-10 gap-10 border-t border-white'>
                            <p className='text-white text-xl/6'>© 2026 Brankit. All rights reserved.</p>
                        </div>
                    </div>
                </section>
            </>
        </div>
    )
}

export default Footer