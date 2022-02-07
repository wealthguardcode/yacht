import Image from 'next/image'
import Layout from '../components/Layout'
import { useState } from 'react'

const programData = [
  {
    name: 'Link 1',
    href: '#',
    imageSrc: '/images/home/yacht-5.jpeg',
    imageAlt: 'Yacht at the dock.',
  },
  {
    name: 'Link 2',
    href: '#',
    imageSrc: '/images/home/yacht-6.jpeg',
    imageAlt: 'Ariel view of multiple Yachts.',
  },
  {
    name: 'Link 3',
    href: '#',
    imageSrc: '/images/home/yacht-7.jpeg',
    imageAlt: 'Close up side view of Yacht.',
  },
]

const features = [
  {
    name: 'Minimize risk',
    description:
      'Praesent eget ipsum consectetur, interdum justo sed, auctor tortor. Phasellus volutpat finibus felis ac auctor. Integer pharetra consectetur libero, eget suscipit purus elementum ut. Nunc in libero at nulla tempus porta a at nunc.',
    imageSrc: '/images/home/yacht-8.jpeg',
    imageAlt: 'Yacht in action on the water.',
  },
  {
    name: 'Refined details',
    description:
      'Praesent eget ipsum consectetur, interdum justo sed, auctor tortor. Phasellus volutpat finibus felis ac auctor. Integer pharetra consectetur libero, eget suscipit purus elementum ut. Nunc in libero at nulla tempus porta a at nunc.',
    imageSrc: '/images/home/yacht-9.jpeg',
    imageAlt: 'Closeup of docekd yacht in the sunset.',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {
  const [open, setOpen] = useState(false)
  return (
    <Layout>
      {/* Carousel Hero Section */}
      <div
        id='carouselExampleCrossfade'
        className='carousel slide carousel-fade relative'
        data-bs-ride='carousel'>
        <div className='carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4'>
          <button
            type='button'
            data-bs-target='#carouselExampleCrossfade'
            data-bs-slide-to='0'
            className='active'
            aria-current='true'
            aria-label='Slide 1'></button>
          <button
            type='button'
            data-bs-target='#carouselExampleCrossfade'
            data-bs-slide-to='1'
            aria-label='Slide 2'></button>
          <button
            type='button'
            data-bs-target='#carouselExampleCrossfade'
            data-bs-slide-to='2'
            aria-label='Slide 3'></button>
          <button
            type='button'
            data-bs-target='#carouselExampleCrossfade'
            data-bs-slide-to='3'
            aria-label='Slide 4'></button>
        </div>
        <div className='carousel-inner relative w-full overflow-hidden pb-0'>
          <div className='carousel-item active float-left w-full'>
            <img
              src='/images/home/slider/yacht-1.jpeg'
              className='block w-full carousel-image'
              alt='Yacht on the Water'
            />
          </div>
          <div className='carousel-item float-left w-full'>
            <img
              src='/images/home/slider/yacht-2.jpeg'
              className='block w-full carousel-image'
              alt='Yacht in the Sunset'
            />
          </div>
          <div className='carousel-item float-left w-full'>
            <img
              src='/images/home/slider/yacht-3.jpeg'
              className='block w-full carousel-image'
              alt='Yacht in Action'
            />
          </div>
          <div className='carousel-item float-left w-full'>
            <img
              src='/images/home/slider/yacht-4.jpeg'
              className='block w-full carousel-image'
              alt='Yacht closeup'
            />
          </div>
        </div>
        <button
          className='carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0'
          type='button'
          data-bs-target='#carouselExampleCrossfade'
          data-bs-slide='prev'>
          <span
            className='carousel-control-prev-icon inline-block bg-no-repeat'
            aria-hidden='true'></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0'
          type='button'
          data-bs-target='#carouselExampleCrossfade'
          data-bs-slide='next'>
          <span
            className='carousel-control-next-icon inline-block bg-no-repeat'
            aria-hidden='true'></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>

      {/* Main Content Section */}
      <div className='bg-white'>
        <div>
          {/* Hero section */}
          <div className='relative'>
            {/* Background image and overlap */}
            <div
              aria-hidden='true'
              className='hidden absolute inset-0 sm:flex sm:flex-col'>
              <div className='flex-1 relative w-full '>
                <div className='absolute inset-0 overflow-hidden'></div>
                <div className='absolute inset-0 bg-gradient-to-b from-white via-gray-300 to-white opacity-50' />
              </div>
              <div className='w-full bg-white h-32 md:h-40 lg:h-48' />
            </div>

            <div className='relative max-w-3xl mx-auto pb-96 px-4 text-center sm:pb-0 sm:px-6 lg:px-8'>
              {/* Background image and overlap */}
              <div
                aria-hidden='true'
                className='absolute inset-0 flex flex-col sm:hidden'>
                <div className='flex-1 relative w-full '>
                  <div className='absolute inset-0 overflow-hidden'></div>
                  <div className='absolute inset-0 bg-gradient-to-b from-white via-gray-300 to-white  opacity-50' />
                </div>
                <div className='w-full bg-white h-48' />
              </div>
              <div className='relative py-16 lg:py-24'>
                <div className='my-4'>
                  <Image
                    src='/images/wig-logo.png'
                    alt='WealthGuard Logo'
                    className=''
                    height={70}
                    width={70}
                  />
                </div>

                <h1 className='text-4xl font-extrabold tracking-wider text-red-800 md:text-6xl'>
                  Wealth<span className='text-gray-400'>Guard&apos;s</span>
                </h1>
                <div className='mt-4 sm:mt-6'>
                  <h1 className='text-2xl font-extrabold tracking-wide text-gray-800 md:text-4xl'>
                    Yacht Insurance Program
                  </h1>
                </div>
                <div className='mt-4 sm:mt-6'>
                  <p className='max-w-xl mt-5 mx-auto text-lg md:text-xl text-gray-500'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin cursus non velit eu consequat. Maecenas venenatis
                    congue mi tempor venenatis.
                  </p>
                </div>
              </div>
            </div>

            <section
              aria-labelledby='collection-heading'
              className='-mt-96 relative sm:mt-0'>
              <h2 id='collection-heading' className='sr-only'>
                WealthGuard Yacht Insurance Program
              </h2>
              <div className='max-w-md mx-auto grid grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:px-6 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:px-8 lg:gap-x-8 '>
                {programData.map((item) => (
                  <div
                    key={item.name}
                    className='group relative h-96 bg-white rounded-lg shadow-xl sm:h-auto sm:aspect-w-4 sm:aspect-h-5 hover:shadow-red-900 hover:shadow-2xl'>
                    <div>
                      <div
                        aria-hidden='true'
                        className='absolute inset-0 rounded-lg overflow-hidden'>
                        <div className='absolute inset-0 overflow-hidden group-hover:opacity-75 '>
                          <img
                            src={item.imageSrc}
                            alt={item.imageAlt}
                            className='w-full h-full object-center object-cover '
                          />
                        </div>
                        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50' />
                      </div>
                      <div className='absolute inset-0 rounded-lg p-6 flex items-end'>
                        <div>
                          <p aria-hidden='true' className='text-sm text-white'>
                            Learn more
                          </p>
                          <h3 className='mt-1 font-semibold text-white'>
                            <a href={item.href}>
                              <span className='absolute inset-0' />
                              {item.name}
                            </a>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className='bg-white'>
        <div className='max-w-2xl mx-auto py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8'>
          <div className='max-w-3xl mx-auto text-center'>
            <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
              Protect Your Vessel
            </h2>
            <p className='mt-4 text-gray-500'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              in cursus purus. Aliquam ac mauris sed velit blandit semper.
              Aliquam ac mauris sed velit blandit semper.
            </p>
          </div>

          <div className='mt-16 space-y-16'>
            {features.map((feature, featureIdx) => (
              <div
                key={feature.name}
                className='flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center'>
                <div
                  className={classNames(
                    featureIdx % 2 === 0
                      ? 'lg:col-start-1'
                      : 'lg:col-start-8 xl:col-start-9',
                    'mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4'
                  )}>
                  <h3 className='text-lg font-medium text-gray-900'>
                    {feature.name}
                  </h3>
                  <p className='mt-2 text-sm text-gray-500'>
                    {feature.description}
                  </p>
                </div>
                <div
                  className={classNames(
                    featureIdx % 2 === 0
                      ? 'lg:col-start-6 xl:col-start-5'
                      : 'lg:col-start-1',
                    'flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8 shadow-2xl shadow-gray-700 rounded-lg'
                  )}>
                  <div className='aspect-w-5 aspect-h-2 rounded-lg bg-gray-100 overflow-hidden'>
                    <img
                      src={feature.imageSrc}
                      alt={feature.imageAlt}
                      className='object-center object-cover'
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className='bg-white'>
        <div className='relative bg-gray-900'>
          {/* Decorative image and overlay */}
          <div aria-hidden='true' className='absolute inset-0 overflow-hidden'>
            <img
              src='/images/home/yacht-10.jpeg'
              alt='Yachts at the bay in front of cityscape.'
              className='w-full h-full object-center object-cover'
            />
          </div>
          <div
            aria-hidden='true'
            className='absolute inset-0 bg-gray-900 opacity-50'
          />

          <div className='relative max-w-3xl mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-64 lg:px-0'>
            <h1 className='text-4xl font-extrabold tracking-tight text-white lg:text-6xl'>
              Lorem ipsum dolor
            </h1>
            <p className='mt-4 text-xl text-white'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              in cursus purus. Aliquam ac mauris sed velit blandit semper.
              Aliquam ac mauris sed velit blandit semper.
            </p>
            <a
              href='#'
              className='mt-8 inline-block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100'>
              Learn more
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}
