import React from 'react'
import s1 from '../../assets/s-1.png'
import s2 from '../../assets/s-2.png'
import s3 from '../../assets/s-3.png'
import s4 from '../../assets/s-4.png'
import s5 from '../../assets/s-5.png'


const Leaders = () => {
  return (
    <div>
      <>
        <section className='mx-9 my-16'>
            <div className='flex flex-col items-center justify-center bg-red-800 py-12 gap-15 rounded-xl text-white'>
                <h1 className='text-5xl font-bold text-center'>Onboarded Brands</h1>
                <div id='s-images' className='container mx-auto flex items-center justify-around px-8'>
                    <div>
                        <img src={s1}alt="Slide 1" className='w-full h-[300px] rounded-md' />
                    </div>
                    <div>
                        <img src={s2}alt="Slide 2" className='w-full h-[300px] rounded-md' />
                    </div>
                    <div>
                        <img src={s3}alt="Slide 3" className='w-full h-[300px] rounded-md' />
                    </div>
                    <div>
                        <img src={s4}alt="Slide 4" className='w-full h-[300px] rounded-md' />
                    </div>
                    <div>
                        <img src={s5}alt="Slide 5" className='w-full h-[300px] rounded-md' />
                    </div>
                </div>

            </div>
        </section>
      </>
    </div>
  )
}

export default Leaders
