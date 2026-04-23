import React from 'react'
import story from '../../assets/story.png'
import test2 from '../../assets/test2.png'
import test from '../../assets/test.png'

const Stories = () => {
  return (
    <div>
      <>
        <section className='mx-9 my-16 border-t-2 border-gray-300 pt-16'>
            <div>
                <h2 className='text-6xl font-bold text-center mb-4'>Customer Stories</h2>
                <p className='text-center text-2xl text-black'>We have many reasons to prove our customers love us</p>
            </div>
            <div className='flex items-center justify-center gap-7 container mx-auto px-8 mt-20'>
                <div>
                    <img className='w-90 h-100 rounded-lg' src={story} alt="" />
                </div>
                <div>
                    <img className='w-90 h-100 rounded-lg' src={test2} alt="" />
                </div>
                <div>
                    <img className='w-90 h-100 rounded-lg' src={test} alt="" />
                </div>
            </div>
        </section>
      </>
    </div>
  )
}

export default Stories
