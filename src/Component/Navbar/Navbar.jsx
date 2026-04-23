import React from 'react'
import Logo from '../../../public/download (1).png'

const Navbar = () => {
  return (
    <div>
        <>
            <header className='px-8 py-4'>
                <nav className='flex items-center justify-between'>
                    <div id='logo' className='flex items-center gap-1'>
                        <img src={Logo} className='w-18 h-18' alt="Logo" />
                        <h2 className='text-3xl font-bold font-serif text-black '>Brankit</h2>
                    </div>
                    <div>
                        <ul className='flex items-center gap-12 text-lg font-medium text-gray-600'>
                            <li className='hover:text-red-800 cursor-pointer'>Home</li>
                            <li className='hover:text-red-800 cursor-pointer'>About Us</li>
                            <li className='hover:text-red-800 cursor-pointer'>Solutions</li>
                            <li className='hover:text-red-800 cursor-pointer'>Resources</li>
                            <li className='hover:text-red-800 cursor-pointer'>Blogs</li>
                        </ul>
                    </div>
                    <div>
                        <button className='bg-red-700 text-xl cursor-pointer text-white px-5 py-3 rounded-md hover:bg-red-800 transition duration-300'>Schedule a Call</button>
                    </div>
                </nav>
            </header>
        </>
    </div>
  )
}

export default Navbar
