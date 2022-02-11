import Image from 'next/image'
import Slider from 'react-slick'

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

export default function ImageSlider() {
  return (
    <div>
      <Slider {...settings}>
        <div className='relative text-center'>
          <Image
            src='/images/home/yacht-1.jpeg'
            height={300}
            width={350}
            placeholder='blur'
            blurDataURL
            className='px-2 rounded-2xl'
            alt='Yacht on the water'
          />
        </div>
        <div className='relative text-center'>
          <Image
            src='/images/home/yacht-2.jpeg'
            height={300}
            width={350}
            placeholder='blur'
            blurDataURL
            className='px-2 rounded-2xl'
            alt='Yacht on the water in the sunset'
          />
        </div>
        <div className='relative text-center'>
          <Image
            src='/images/home/yacht-3.jpeg'
            height={300}
            width={350}
            placeholder='blur'
            blurDataURL
            className='px-2 rounded-2xl'
            alt='Yacht in action'
          />
        </div>
        <div className='relative text-center'>
          <Image
            src='/images/home/yacht-4.jpeg'
            height={300}
            width={350}
            placeholder='blur'
            blurDataURL
            className='px-2 rounded-2xl'
            alt='Relaxing on a yacht closeup'
          />
        </div>
        <div className='relative text-center'>
          <Image
            src='/images/home/yacht-5.jpeg'
            height={300}
            width={350}
            placeholder='blur'
            blurDataURL
            className='px-2 rounded-2xl'
            alt='Docked yacht upclose'
          />
        </div>
        <div className='relative text-center'>
          <Image
            src='/images/home/yacht-6.jpeg'
            height={300}
            width={350}
            placeholder='blur'
            blurDataURL
            className='px-2 rounded-2xl'
            alt='Numerous Yachts at the dock'
          />
        </div>
        <div className='relative text-center'>
          <Image
            src='/images/home/yacht-7.jpeg'
            height={300}
            width={350}
            placeholder='blur'
            blurDataURL
            className='px-2 rounded-2xl'
            alt='Side view of yacht up close'
          />
        </div>
        <div className='relative text-center'>
          <Image
            src='/images/home/yacht-8.jpeg'
            height={300}
            width={350}
            placeholder='blur'
            blurDataURL
            className='px-2 rounded-2xl'
            alt='Ariel view of a yacht in action'
          />
        </div>
      </Slider>
    </div>
  )
}
