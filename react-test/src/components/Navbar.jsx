import React from 'react'

const Navbar = () => {

    const navlinks = [
        { path: 'About Us' },
        { path: 'Products' },
        { path: 'Solutions' },
        { path: 'Developers' },
        { path: 'Pricing' },
        { path: 'Resources' },
    ]


    return (
        <div className='w-full flex  text-white h-20 items-center  justify-center'>

            <div className='w-2/3 px-10'>
                <ul className='flex justify-start gap-x-9'>
                    {navlinks.map((link, index) => (
                        <li key={index}>{link?.path}</li>
                    ))}
                </ul>
            </div>
            <div className='w-1/3 flex items-center gap-x-7'>
                <button>Contact Sales &gt;</button>
                <button className='bg-pink-600 px-4 py-1 rounded-full'>Login <span>&gt;</span> </button>
            </div>

        </div>
    )
}

export default Navbar
