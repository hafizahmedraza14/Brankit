import React from 'react'
import Leader1 from '../../assets/extensive-logo-1080x543-1-768x386.webp'
import Leader2 from '../../assets/Untitled-2-1.png'
import Leader3 from '../../assets/Trustpilot-logo-2.png'
import Leader4 from '../../assets/Helium10_main-logo-image-1-2-300x158.png'

const Leaders = () => {
  return (
    <div>
      <>
        <section className='mx-9 my-16'>
            <div className='flex flex-col items-center justify-center bg-red-800 py-12 gap-10 rounded-xl text-white'>
                <h1 className='text-5xl font-bold text-center'>Trusted By Industry Leaders</h1>
                <div id='images' className='container mx-auto flex items-center justify-around px-8'>
                    <div>
                        <img src={Leader1}alt="Leader 1" className='w-full h-auto rounded-md' />
                    </div>
                    <div>
                        <img src={Leader2}alt="Leader 2" className='w-full h-auto rounded-md' />
                    </div>
                    <div>
                        <img src={Leader3}alt="Leader 3" className='w-full h-auto rounded-md' />
                    </div>
                    <div>
                        <img src={Leader4}alt="Leader 4" className='w-full h-auto rounded-md' />
                    </div>
                </div>

            </div>
        </section>
      </>
    </div>
  )
}

export default Leaders
