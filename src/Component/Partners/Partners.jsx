import React from 'react'
import Leader1 from '../../assets/Helium10_main-logo-image-1-1.png'
import Leader2 from '../../assets/extensive-logo-1080x543-1-768x386.webp'
import Leader3 from '../../assets/sostocked-logo-16x9-social-graph-1.png'
import Leader4 from '../../assets/Copy_of_Copy_of_Original_size_Copy_of_ECOMCY_720x-1-1.png'
import Leader5 from '../../assets/logo_bar04-300x30-4.png'
import Leader6 from '../../assets/logo-dark-on-light-4-1.png'
import Leader7 from '../../assets/logo-1-1.png'
import Leader8 from '../../assets/word-image-48004-3-1-1.png'

const Leaders = () => {
    return (
        <div>
            <>
                <section className='mx-9 my-5'>
                    <div className='flex flex-col items-center justify-center pb-12 gap-10 rounded-xl text-[#190E45]'>
                        <h1 className='text-5xl font-bold text-center'>Our Partners</h1>
                        <div id='images' className='container mx-auto px-8 flex flex-col gap-8'>
                            <div className='flex items-center justify-around gap-10'> 
                                <div>
                                    <img src={Leader1} alt="Leader 1" className='w-full h-auto rounded-md' />
                                </div>
                                <div>
                                    <img src={Leader2} alt="Leader 2" className='w-full h-auto rounded-md' />
                                </div>
                                <div>
                                    <img src={Leader3} alt="Leader 3" className='w-full h-auto rounded-md' />
                                </div>
                                <div>
                                    <img src={Leader4} alt="Leader 4" className='w-full h-auto rounded-md' />
                                </div>
                            </div>
                            <div className='flex items-center justify-around gap-6'> 
                                <div>
                                    <img src={Leader5} alt="Leader 5" className='w-30 h-20 rounded-md' />
                                </div>
                                <div>
                                    <img src={Leader6} alt="Leader 6" className='w-full h-auto rounded-md' />
                                </div>
                                <div>
                                    <img src={Leader7} alt="Leader 7" className='w-full h-auto rounded-md' />
                                </div>
                                <div>
                                    <img src={Leader8} alt="Leader 8" className='w-full h-auto rounded-md' />
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </>
        </div>
    )
}

export default Leaders
