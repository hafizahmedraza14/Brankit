import React from 'react'
import Brand1 from '../../assets/20945985-Converted-01-1.png'
import Brand2 from '../../assets/3254-Converted-01-1.png'
import Brand3 from '../../assets/2456040-01-1.png'


const Brands = () => {
    return (
        <div>
            <>
                <section className='mx-9 my-16'>
                    <div>
                        <div>
                            <h1 className=' text-6xl/16 font-bold text-center mb-15'>End-to-End Supply Chain & Automation Services for Ecommerce Brands</h1>
                        </div>
                        <div className='bg-[#D8F5FF] mx-auto rounded-xl shadow-md  flex items-center justify-center gap-12 container mx-auto px-8 py-10'>
                            <div className='w-1/2'>
                                <h1 className='text-5xl font-bold mb-4'>Ecommerce Supply Chain Management</h1>
                                <p className='text-lg text-gray-500'>We provide end-to-end ecommerce supply chain solutions that align with your business goals. Our process integrates sourcing, supplier management, warehousing, fulfillment, and delivery tracking into one seamless ecosystem. With intelligent tools and automation, we reduce human error, minimize delays, and improve forecasting accuracy.<br />

                                    You gain full visibility into operations, receive real-time reporting, and have access to tools that enable data-driven decision-making. We specialize in:</p><br />
                                <ul className='text-lg text-gray-500'>
                                    <li>Supply chain planning tools</li>
                                    <li>Inventory forecasting systems</li>
                                    <li>Real-time analytics and performance dashboards</li>
                                </ul><br />
                                <p className='text-lg text-gray-500'>With our e-commerce supply chain management services, your<br /> business becomes leaner, faster, and more resilient.</p>
                                <button className='bg-red-700 border-2 border-red-700 text-xl cursor-pointer text-white mt-5 px-5 py-3 rounded-md hover:bg-red-800 hover:border-red-800 transition duration-300'>Book a Supply Chain Strategy Call</button>
                            </div>
                            <div className='w-1/2 flex items-center justify-center rounded-lg shadow-md p-4'>
                                <img src={Brand1} alt="" />
                            </div>
                        </div>
                        <div className='bg-[#f4d6ba] mx-auto rounded-xl shadow-md mt-10 flex items-center justify-center gap-12 container mx-auto px-8 py-10'>
                            <div className='w-1/2 flex items-center justify-center rounded-lg shadow-md p-4'>
                                <img src={Brand2} alt="" />
                            </div>
                            <div className='w-1/2'>
                                <h1 className='text-5xl font-bold mb-4'>Operational Inventory Automation</h1>
                                <p className='text-lg text-gray-500'>Stop wasting time on manual processes. Our inventory automation services help you maintain optimal stock levels, route orders intelligently, and sync data across all platforms. Whether you’re selling on Shopify, Amazon, WooCommerce, or across multiple channels, Brankit brings order to the chaos.<br />

                                    Benefits of our automation framework:</p><br />
                                <ul className='text-lg text-gray-500'>
                                    <li>AI-based forecasting and demand planning</li>
                                    <li>Faster order fulfillment cycles</li>
                                    <li>Reduced warehousing, systems, and labor costs</li>
                                    <li>Real-time sync across warehouses, ERPs, and marketplaces</li>
                                </ul><br />
                                <p className='text-lg text-gray-500'>We help you save hours weekly, cut operational costs, and create a smoother customer experience</p>
                                <button className='bg-red-700 border-2 border-red-700 text-xl cursor-pointer text-white mt-5 px-5 py-3 rounded-md hover:bg-red-800 hover:border-red-800 transition duration-300'>Start Automating Smarter Today</button>
                            </div>
                        </div>
                        <div className='bg-[#FACFE18F] mx-auto rounded-xl shadow-md mt-10 flex items-center justify-center gap-12 container mx-auto px-8 py-10'>
                            <div className='w-1/2'>
                                <h1 className='text-5xl font-bold mb-4'>Amazon Brand & Inventory Management Software Solutions</h1>
                                <p className='text-lg text-gray-500'>Managing Amazon inventory doesn’t have to be overwhelming. Brankit simplifies the process, from FBA prep to real-time restock forecasting, and integrates with AWD and AGL, allowing you to focus on growing your brand, not resolving stockouts and supplier issues.</p><br />
                                <ul className='text-lg text-gray-500'>
                                    <li>We integrate with Amazon Seller Central to deliver:</li>
                                    <li> Automated demand forecasting</li>
                                    <li> Multi-warehouse and AWD sync</li>
                                    <li>Profit tracking at the SKU level</li>
                                    <li> Multi-channel listing management for 2000+ SKUs</li>
                                </ul><br />
                                <p className='text-lg text-gray-500'>Take the guesswork out of operations with a partner that understands the Amazon marketplace.</p>
                                <button className='bg-red-700 border-2 border-red-700 text-xl cursor-pointer text-white mt-5 px-5 py-3 rounded-md hover:bg-red-800 hover:border-red-800 transition duration-300'>Book Youur Brand Management Audit</button>
                            </div>
                            <div className='w-1/2 flex items-center justify-center rounded-lg shadow-md p-4'>
                                <img src={Brand3} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </>
        </div>
    )
}

export default Brands
