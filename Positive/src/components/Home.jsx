import React from 'react'

const Home = () => {
  return (
    <section className='mx-auto max-w-7xl mt-17.5 px-5'>
        <div className='flex flex-col md:flex-row lg:items-center gap-16 lg:gap-24'>

        <div className='order-2 md:order-1 flex flex-col  gap-6 lg:gap-8.75'>
        <h1 className='font-medium sm:text-4xl md:text-5xl text-3xl lg:text-[60px] leading-[1.1] max-w-125'>Navigate the <br /> digital landscape <br /> for success</h1>
        <p className='lg:text-[20px] text-sm sm:text-base leading-6 lg:leading-7 max-w-117.5 '>Our digital marketing agency helps businesses <br /> grow and succeed online through a range of <br /> services including SEO, PPC, social media marketing, <br /> and content creation.</p>
        <button className='w-fit py-4 px-7 lg:py-5 lg:px-8.75 left-0 bg-black text-white rounded-xl'>Book a Consulation</button>
        </div>
        <div className='order-1 md:order-2'>
           <img src="/Illustration.png" alt="Sound" />
        </div>
        </div>

        </section>
  )
}

export default Home