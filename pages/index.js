import Image from 'next/image'
import Layout from '../components/Layout'
import { useState } from 'react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {
  const [open, setOpen] = useState(false)

  return (
    <Layout>
      {/* <!-- Carousel wrapper --> */}
      <div
        id='carouselVideoExample'
        className='carousel slide carousel-fade'
        data-mdb-ride='carousel'>
        {/* <!-- Indicators --> */}
        <div className='carousel-indicators'>
          {/* <button
            type='button'
            data-mdb-target='#carouselVideoExample'
            data-mdb-slide-to='0'
            className='active'
            aria-current='true'
            aria-label='Slide 1'></button> */}
          {/* <button
            type='button'
            data-mdb-target='#carouselVideoExample'
            data-mdb-slide-to='1'
            aria-label='Slide 2'></button>
          <button
            type='button'
            data-mdb-target='#carouselVideoExample'
            data-mdb-slide-to='2'
            aria-label='Slide 3'></button>
          <button
            type='button'
            data-mdb-target='#carouselVideoExample'
            data-mdb-slide-to='3'
            aria-label='Slide 4'></button> */}
        </div>

        {/* <!-- Inner --> */}
        <div className='carousel-inner carousel-wrapper'>
          {/* <!-- Single item --> */}
          <div className='carousel-item active' data-mdb-interval='36000'>
            <video className='img-fluid' playsInline autoPlay loop muted>
              <source
                src='https://res.cloudinary.com/wealthguard-insurance-group/video/upload/v1644445555/yacht-video-1_x2dp0w.mp4'
                type='video/mp4'
              />
            </video>
            {/* <div className='carousel-caption d-none d-md-block'>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div> */}
          </div>

          {/* <!-- Single item --> */}
          {/* <div className='carousel-item' data-mdb-interval='9500'>
            <video className='img-fluid' autoPlay loop muted>
              <source
                src='/images/home/slider/videos/2-yacht-flyover-2.mp4'
                type='video/mp4'
              />
            </video>
            <div className='carousel-caption d-none d-md-block'>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div> */}

          {/* <!-- Single item --> */}
          {/* <div className='carousel-item' data-mdb-interval='9500'>
            <video className='img-fluid' autoPlay loop muted>
              <source
                src='/images/home/slider/videos/3-steering-yacht.mp4'
                type='video/mp4'
              />
            </video>
            <div className='carousel-caption d-none d-md-block'>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
          </div> */}

          {/* <!-- Single item --> */}
          {/* <div className='carousel-item' data-mdb-interval='9500'>
            <video className='img-fluid' autoPlay loop muted>
              <source
                src='/images/home/slider/videos/4-man-on-yacht.mp4'
                type='video/mp4'
              />
            </video>
            <div className='carousel-caption d-none d-md-block'>
              <h5>Fourth slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
          </div> */}
        </div>
        {/* <!-- Inner --> */}

        {/* <!-- Controls --> */}
        {/* <button
          className='carousel-control-prev'
          type='button'
          data-mdb-target='#carouselVideoExample'
          data-mdb-slide='prev'>
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-mdb-target='#carouselVideoExample'
          data-mdb-slide='next'>
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'></span>
          <span className='visually-hidden'>Next</span>
        </button> */}
      </div>
      {/* <!-- Carousel wrapper --> */}

      {/* Main content */}
      <div className='bg-white'>
        <div className='max-w-7xl mx-auto py-8 md:py-16 px-4 lg:px-8'>
          <div className='text-left'>
            {/* <h2 className='text-base font-semibold text-indigo-600 tracking-wide uppercase'>
              Pricing
            </h2> */}
            <p className='hidden md:block mt-1 text-4xl font-normal text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl'>
              There&apos;s a <span className='font-extrabold'>better way</span>{' '}
              to protect <br />
              your valued asset.
            </p>
            <p className='md:hidden mt-1 text-4xl font-normal text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl'>
              There&apos;s a <span className='font-extrabold'>better way</span>{' '}
              to protect your valued asset.
            </p>
            <p className='max-w-xl mt-5 text-xl text-gray-500'>
              WealthGuard provides innovative solutions for Yacht insurance.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
