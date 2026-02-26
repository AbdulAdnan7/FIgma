import React from 'react'

const Services = () => {

    const serviceVariants = [
        {
            id: 1,
            title: 'Search engine optimization',
            cardBg: '#F3F3F3',
            tagBg: '#B9FF66',
            textColor: '#000',
            circleBg: '',
            imageSrc: '/Maginifier.png'
        },
        {
            id: 2,
            title: 'Pay-per-click advertising',
            cardBg: '#B9FF66',
            tagBg: "#F3F3F3",
            textColor: '#000',
            imageSrc: '/click.png'
        },
        {
            id: 3,
            title: 'Social Media Marketing',
            cardBg: '#191A23',
            tagBg: "#F3F3F3",
            textColor: '#F3F3F3',
            imageSrc: '/navs.png'
        },
        {
            id: 4,
            title: 'Email Marketing',
            cardBg: '#F3F3F3',
            tagBg: '#B9FF66',
            textColor: '#000',
            imageSrc: '/emailsill.png'
        },
        {
            id: 5,
            title: 'Content Creation',
            cardBg: '#B9FF66',
            tagBg: '#F3F3F3',
            textColor: '#000',
            imageSrc: '/tab.png'
        },
        {
            id: 6,
            title: 'Analytics and Tracking',
            cardBg: '#191A23',
            tagBg: '#F3F3F3',
            textColor: '#F3F3F3',
            imageSrc: '/charts.png'
        }
    ]

    return (
        <div className=' mt-16 md:mt-24 lg:mt-35 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex items-start gap-10'>
                <h1 className='text-3xl sm:text-4xl lg:text-[40px] font-medium bg-[#B9FF66] w-fit flex flex-col items-start px-3 sm:px-4 lg:px-1.75 py-2 lg:py-0'>Services</h1>
                <p className='text-sm sm:text-base lg:text-lg max-w-3xl'>At our digital marketing agency, we offer a range of services to <br /> help businesses grow and succeed online. These services include:</p>
            </div>

            <div className='mt-20 max-w-7xl md:grid md:grid-cols-2 justify-items-center gap-6 md:gap-6 lg:gap-6'>
       {
        serviceVariants.map((service) => (
             <div key={service.id} className="
      w-96
      mt-6
      md:w-95
      lg:w-150
      rounded-[45px] 
      border-2
      border-[#191A23]  
      shadow-[0_8px_0_0_#191A23]
      transition-all 
      duration-300 
      hover:-translate-y-1 
      hover:shadow-[0_12px_0_0_#191A23]
    " style={{ backgroundColor: service.cardBg  }}>
      <div className="
        flex
        flex-row
        items-center
        justify-between
        p-6.25
        md:p-8.75
        lg:p-12.5
        w-full
        h-full
      ">
        <div className="
          flex
          flex-col
          justify-center
          items-start
          gap-23.25
        ">
          <h3 className="
            text-[#191A23]
            text-2xl
            md:text-3xl
            font-semibold
            m-0
            px-4
            py-2
            rounded-lg 
            inline-block
            w-auto
            max-w-62.5
          " style={{ backgroundColor: service.tagBg }}>
            {service.title}
          </h3>
          
          <a
            href="#"
            className="
              flex
              items-center
              justify-start
              gap-6
              md:gap-4
              lg:gap-2.5
              text-lg
              font-medium
              no-underline
              transition-colors
              hover:text-black
            "
          >
            <span className="
              inline-flex
              h-7.5
              w-7.5
              items-center
              justify-center
              rounded-full
              bg-[#191A23]
              text-white
              text-2xl
              transition-transform
              group-hover:translate-x-1
            ">
              <img src='/Arrow.svg' />
            </span>
            <span style={{ color: service.textColor}}>
            Learn More

            </span>
          </a>
        </div>

        <div className="flex items-center justify-center -p-8">
          <div className="
            flex
            h-30
            w-30
            items-center
            justify-center
            rounded-[30px]
            text-5xl
          ">
            <img src={service.imageSrc} />
          </div>
        </div>
      </div>
    </div>
        ))
       }       
   
          

                
                <div>
                </div>
            </div>
        </div>
    )
}

export default Services