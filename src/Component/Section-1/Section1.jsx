import React from 'react'
import SecImg from '../../assets/Hero-Image-Design-3-1.png'

const Section1 = () => {
  return (
    <div>
      <>
        <section className='my-1 mx-9'>
          <div className='bg-[#D8F5FF] mx-auto rounded-xl shadow-md'>
            <div className='container gap-12 flex items-center py-10 px-8 '>
              <div className='w-1/2'>
                <h1 className='text-5xl/13 font-bold mb-6'>Maximize Ecommerce Profits with Smarter Inventory & Supply Chain Management</h1>
                <p className='text-lg font-bold text-black font-poppins mb-6'>From automated inventory operations to full-stack supply chain visibility, Brankit helps ecommerce brands scale profitably across Amazon, Shopify, and beyond.</p>
                <p className='text-lg text-black font-poppins mb-8'>One father from <span className='font-bold'>Los Angeles</span> transformed his struggling business into a 7-figure brand using our system, generating <span className='font-bold'>$1.1 million</span> in additional revenue and a 3x increase in profits in just 90 days. If you’re ready to eliminate chaos, reduce inventory costs, and grow faster, you’re in the right place.<br />

                  <span className='font-bold'>Brankit</span> empowers ecommerce brands with scalable, customized supply chain and inventory management solutions built for today’s fast-moving digital world.<br />
                  Whether you’re expanding your product catalog, struggling with fulfillment delays, or losing money due to inaccurate inventory tracking, we help you take control with systems designed to streamline operations, reduce costs, and fuel profitable growth.</p>
                <div className='flex gap-6'>
                  <button className='bg-red-700 border-2 border-red-700 text-xl cursor-pointer text-white px-5 py-3 rounded-md hover:bg-red-800 hover:border-red-800 transition duration-300'>Fix Your Supply Chain</button>
                  <button className='bg-transparent border-2 border-red-700 text-xl cursor-pointer text-red-700 px-5 py-3 rounded-md hover:bg-red-800 hover:text-white hover:border-red-800 transition duration-300'>Full Case Study</button>
                </div>
              </div>
              <div className='w-1/2'>
                <img src={SecImg} alt="Section 1 Image" className='w-full h-auto rounded-md shadow-md' />
              </div>
            </div>
            <div className='flex items-center justify-around py-8 border-t border-gray-300'>
              <div className='flex flex-col items-center gap-2'>
                <h3 className='text-red-800 font-bold font-sora text-5xl'>30+</h3>
                <p className='text-lg font-poppins text-red-600'>Brands</p>
              </div>
              <div className='flex flex-col items-center gap-2'>
                <h3 className='text-red-800 font-bold font-sora text-5xl'>2000+</h3>
                <p className='text-lg font-poppins text-red-600'>SKUs</p>
              </div>
              <div className='flex flex-col items-center gap-2'>
                <h3 className='text-red-800 font-bold font-sora text-5xl'>1000+</h3>
                <p className='text-lg font-poppins text-red-600'>Hours Saved</p>
              </div>
              <div className='flex flex-col items-center gap-2'>
                <h3 className='text-red-800 font-bold font-sora text-5xl'>$50M+</h3>
                <p className='text-lg font-poppins text-red-600'>Stock Controlled</p>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  )
}

export default Section1
