import Image from 'next/image'
import Layout from '../components/Layout'

import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import {
  MenuIcon,
  QuestionMarkCircleIcon,
  SearchIcon,
  ShoppingBagIcon,
  XIcon,
} from '@heroicons/react/outline'

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

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {
  const [open, setOpen] = useState(false)
  return (
    <Layout>
      {/* Carousel */}
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
            <Image
              src='/images/home/slider/yacht-1.jpeg'
              className='block w-full'
              height={750}
              width={1950}
              placeholder='blur'
              blurDataURL
              alt='Yacht on the Water'
            />
          </div>
          <div className='carousel-item float-left w-full'>
            <Image
              src='/images/home/slider/yacht-2.jpeg'
              className='block w-full'
              height={750}
              width={1950}
              placeholder='blur'
              blurDataURL
              alt='Yacht in the Sunset'
            />
          </div>
          <div className='carousel-item float-left w-full'>
            <Image
              src='/images/home/slider/yacht-3.jpeg'
              className='block w-full'
              height={750}
              width={1950}
              placeholder='blur'
              blurDataURL
              alt='Yacht in Action'
            />
          </div>
          <div className='carousel-item float-left w-full'>
            <Image
              src='/images/home/slider/yacht-4.jpeg'
              className='block w-full'
              height={750}
              width={1950}
              placeholder='blur'
              blurDataURL
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
      {/* Main Content */}
      <div className='bg-white'>
        <div>
          {/* Hero section */}
          <div className='relative'>
            {/* Background image and overlap */}
            <div
              aria-hidden='true'
              className='hidden absolute inset-0 sm:flex sm:flex-col'>
              <div className='flex-1 relative w-full '>
                <div className='absolute inset-0 overflow-hidden'>
                  {/* <img
                    src='https://tailwindui.com/img/ecommerce-images/home-page-04-hero-full-width.jpg'
                    alt=''
                    className='w-full h-full object-center object-cover'
                  /> */}
                </div>
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
                  <div className='absolute inset-0 overflow-hidden'>
                    {/* <img
                      src='https://tailwindui.com/img/ecommerce-images/home-page-04-hero-full-width.jpg'
                      alt=''
                      className='w-full h-full object-center object-cover'
                    /> */}
                  </div>
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
    </Layout>
  )
}
