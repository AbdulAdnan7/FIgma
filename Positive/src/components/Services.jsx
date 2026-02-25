import React from 'react'

const Services = () => {
  return (
    <div className=' mt-16 md:mt-24 lg:mt-35 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-start gap-10'>
        <h1 className='text-3xl sm:text-4xl lg:text-[40px] font-medium bg-[#B9FF66] w-fit flex flex-col items-start px-3 sm:px-4 lg:px-1.75 py-2 lg:py-0'>Services</h1>
        <p className='text-sm sm:text-base lg:text-lg max-w-3xl'>At our digital marketing agency, we offer a range of services to <br /> help businesses grow and succeed online. These services include:</p>
        </div>

        <div className='mt-20 max-w-2xl'>
          <div className='flex sm:w-87.5 md:w-100  h-auto lg:w-150 lg:h-77.5 p-12.5 border border-[#191A23] bg-[#F3F3F3] rounded-[45px] items-center justify-between shadow-[0_5px_0_0#191A23]'>
          <div className='flex flex-col justify-center items-start gap-23.25'>
            <div>

           <h1 className='text-xl sm:text-2xl md:text-3xl font-medium bg-[#B9FF66]'>Search engine <br /> optimization</h1>
            </div>
           
           <div className='flex  justify-center lg:justify-start gap-3 sm:gap-4 lg:gap-3.75 items-center'>

           <img src="/Arrow.svg" alt="arrow" className='w-8 h-8 sm:w-5 sm:h-5 lg:w-5 lg:h-5' />
           <p className='text-black text-sm sm:text-base md:text-lg lg:text-[20px] font-normal leading-7 not-italic'>Learn more</p>
           </div>
          </div>


           <div className='w-32 sm:w-36 md:w-40 lg:w-52.5 h-24 md:h-32  lg:h-41.5 shrink-0 flex justify-center items-center'>
            <img src="/Layer.png" alt="Search engine" className='w-full h-full object-contain' />

           </div>

          </div>
          <div>
          </div>
        </div>
    </div>
  )
}

export default Services