import React from 'react'

const Subscribe = () => {
    return (
        <div>
            <>
                <section className=' py-20'>
                    <div className='bg-white shadow-[0_10px_30px_rgba(0,0,0,0.2)] mx-auto rounded-xl flex flex-col items-center justify-center gap-8 container mx-auto px-20 py-20'>
                        <div>
                            <h1 className=' text-[3.2rem] text-[#190E45] font-bold text-center'>Subscribe</h1>
                            <p className='text-[1.70rem] text-[#190E45] text-center'>Subscribe Our Newsletter to stay updated every moment</p>
                        </div>
                        <div className="flex w-full gap-2">
                            <input
                                type="text"
                                placeholder="Enter your email..."
                                className="w-[80%] p-3 border border-gray-300 rounded-lg outline-none text-white bg-[#190E45]"
                            />
                            <button className="w-[20%] bg-red-600 text-white rounded-lg">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </section>
            </>
        </div>
    )
}

export default Subscribe
