import React from 'react'
import Stocks1 from '../../assets/Group-63.png'
import Stocks2 from '../../assets/Group-157.png'
import Global from '../../assets/Screen-Shot-1-1.png'


const Stocks = () => {
    return (
        <div>
            <>
                <section className='mx-9 my-16'>
                    <div>
                        <div>
                            <h2 className='text-6xl/16 font-bold text-center mb-15'>You Don’t Need More Stock You Need More Control. Let’s Build That.</h2>
                        </div>
                        <div className='flex items-center justify-around gap-10 justify-center container mx-auto px-8'>
                            <div className='border-2 border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center gap-5 w-1/2'>
                                <img className=' w-40 h-40' src={Stocks1} alt="Stocks 1" />
                                <h2 className='text-3xl/16 font-bold text-center '>Capital Locked in Inventory</h2>
                                <p className='text-lg text-gray-600 text-center'>Is too much of your cash tied up in inventory that’s not moving? We implement smarter supply chain strategies and analytics to free up working capital and improve cash flow.</p>
                            </div>
                            <div className='border-2 border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center gap-5 w-1/2'>
                                <img className=' w-40 h-40' src={Stocks2} alt="Stocks 2" />
                                <h2 className='text-3xl/16 font-bold text-center '>Stockouts Causing Missed Sales</h2>
                                <p className='text-lg text-gray-600 text-center'>Every out-of-stock moment costs you money and customer trust. Our predictive systems help you restock proactively, not reactively.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2 className='text-6xl/16 font-bold text-center mb-15 mt-15'>We Turn Challenges Into Success</h2>
                        </div>
                        <div className='flex items-center justify-around gap-10 justify-center container mx-auto px-8'>
                            <div className='w-1/2 flex items-center justify-center rounded-lg shadow-md p-4'>
                                <img src={Global} alt="Global" />
                            </div>
                            <div className='w-1/2 flex flex-col items-center justify-center'>
                                <div className='flex flex-col gap-5'>
                                    <h2 className='text-5xl/16 font-bold'>Achieving a Whopping YoY Growth of <span className='text-red-600'>13%</span> in Revenue and <span className='text-red-600'>3%</span> in Net Profits for a Tool Category Brand</h2>
                                    <p className='text-xl text-gray-600'>Your Path to Profitability Starts when you Streamline Your Supply Chain processes.</p>
                                    <div className='flex items-center gap-5'>
                                        <div className='flex flex-col items-center justify-center gap-2'>
                                           <div className='border-2 border-red-600 rounded-full p-9 w-16 h-16 flex items-center justify-center'><h2 className='text-3xl font-bold text-red-600'>13%</h2></div> 
                                            <p>Revenue Increase</p>
                                        </div>
                                        <div className='flex flex-col items-center justify-center gap-2'>
                                            <div className='border-2 border-red-600 rounded-full p-9 w-16 h-16 flex items-center justify-center'><h2 className='text-3xl font-bold text-red-600'>99%</h2></div>    
                                            <p>In-stock Rate</p>
                                        </div>
                                    </div>
                                    <button className='bg-red-600 text-2xl text-white py-2 px-4 rounded-md hover:bg-red-700'>View all case studies</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        </div>
    )
}

export default Stocks
