import React from 'react'

const Success = () => {
    return (
        <div>
            <>
                <section className='bg-[#ECF9FF]'>
                    <div className=' mx-auto rounded-xl flex flex-col items-center justify-center gap-8 container mx-auto px-8 py-10'>
                        <div className='flex flex-col items-center justify-center gap-3'>
                            <h1 className=' text-[3.2rem] text-[#190E45] font-bold text-center'>Navigating Success With Us</h1>
                            <p className='text-[1.70rem] text-[#190E45] text-center'>We partner with industry leaders! Join us as we set sail through insightful conversations with experts, sharing the latest knowledge</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">

                            <iframe
                                width="300"
                                height="300"
                                src="https://www.youtube.com/embed/n2Q2bjo9Y2k"
                                border="rounded-lg"
                                title="YouTube video"
                            ></iframe>

                            <iframe
                                width="300"
                                height="300"
                                src="https://www.youtube.com/embed/YJLIZZ13vRo"
                                border="rounded-lg"
                                title="YouTube video"
                            ></iframe>

                            <iframe
                                width="300"
                                height="300"
                                src="https://www.youtube.com/embed/UIiOX7eUVEE"
                                border="rounded-lg"
                                title="YouTube video"
                            ></iframe>

                            <iframe
                                width="300"
                                height="300"
                                src="https://www.youtube.com/embed/YrpCD-kqN68"
                                border="rounded-lg"
                                title="YouTube video"
                            ></iframe>

                        </div>
                    </div>
                </section>
            </>
        </div>
    )
}

export default Success
