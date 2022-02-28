import Image from 'next/image'
import Layout from '../components/Layout'
import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import ImageSlider from '../components/ImageSlider'
import VideoPlayer from '../components/VideoPlayer'
import Link from 'next/link'

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
        <div className='carousel-indicators'></div>

        {/* <!-- Inner --> */}
        <div className='carousel-inner carousel-wrapper'>
          {/* <!-- Single item --> */}
          <div className='carousel-item active' data-mdb-interval='36000'>
            <img
              src='https://res.cloudinary.com/wealthguard-insurance-group/image/upload/v1644790049/yacht-poster_x783il.png'
              className='block md:hidden h-100'
              alt='Close up of Yacht on bay'
            />
            {/* https://res.cloudinary.com/wealthguard-insurance-group/image/upload/v1644790049/yacht-poster_x783il.png */}
            <VideoPlayer />
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className='bg-white'>
        <div className='max-w-7xl mx-auto py-8 md:py-16 px-4 lg:px-8'>
          <div className='text-left'>
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

      {/* Call Out Section */}
      <div className='bg-white'>
        <div className='max-w-7xl mx-auto px-1 md:px-4 py-8 md:py-16 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='flex felx-col my-6 md:my-16 md:py-10'>
              <p className='max-w-2xl px-2 lg:self-center font-bold text-2xl border-style'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent ac elit tortor.
              </p>
            </div>
            <div className='flex justify-center py-8 md:py-0'>
              <div className='rounded-lg border-4 border-red-500 w-72 h-80 mx-1 md:mx-3 flex flex-col justify-center items-center shadow-2xl shadow-gray-600'>
                <div className='bg-gray-400 rounded-full p-8 md:p-10 relative border-8 border-white -mt-32 rounded-tr-3xl'>
                  <Image
                    className='h-16 md:h-20'
                    src='/images/home/bar-chart.png'
                    alt='Bar chart'
                    height={80}
                    width={80}
                    placeholder='blur'
                    blurDataURL
                  />
                </div>
                <a href='#smarter-stragety' className='hover:text-red-500'>
                  <p className='text-lg md:text-xl text-center px-1 md:px-2 pt-4'>
                    A Smarter Strategy
                  </p>
                  <ChevronDownIcon className='h-20 transform transition duration-500 hover:scale-125 hover:text-red-500 hover:cursor-pointer mx-auto' />
                </a>
              </div>
              <div className='rounded-lg border-4 border-red-500 w-72 h-80 mx-1 md:mx-3 flex flex-col justify-center items-center shadow-2xl shadow-gray-600'>
                <div className='bg-red-400 rounded-full p-8 md:p-10 relative border-8 border-white -mt-32 rounded-tr-3xl'>
                  <Image
                    className='h-16 md:h-20'
                    src='/images/home/hand.png'
                    alt='Hand saving money'
                    height={80}
                    width={80}
                    placeholder='blur'
                    blurDataURL
                  />
                </div>
                <a href='#powerful-cost' className='hover:text-red-500'>
                  <p className='text-lg md:text-xl text-center px-1 md:px-2 pt-4'>
                    Powerful Cost Management
                  </p>
                  <ChevronDownIcon className='h-20 transform transition duration-500 hover:scale-125 hover:text-red-500 hover:cursor-pointer mx-auto' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Slider */}
      <div className='w-full bg-gray-300 py-3'>
        <ImageSlider />
      </div>

      {/* A Smarter Stratey Section */}
      <section id='smarter-stragety'>
        <div className='py-10 bg-gray-900 lg:pt-8 lg:pb-14 lg:overflow-hidden'>
          <div className='mx-auto max-w-7xl lg:px-8'>
            <div className='lg:grid lg:grid-cols-1 lg:gap-8'>
              <div className='mx-auto max-w-lg px-3 md:px-4 sm:max-w-2xl lg:px-0 lg:text-left lg:flex lg:items-center'>
                <div className='lg:py-12'>
                  <p className='uppercase text-red-600 font-bold py-4 mb-3'>
                    A smarter strategy
                  </p>
                  <div className='bg-white rounded-xl px-10 py-4'>
                    <p className='pt-4 text-3xl font-bold text-gray-900 border-style'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div className='py-8'>
                      <p className='mb-4 font-medium'>
                        Nulla maximus, turpis sit amet ultrices efficitur, velit
                        orci rhoncus risus, vel pretium quam sapien a nibh.
                      </p>
                      <p className='mb-4 font-medium'>
                        Vestibulum blandit nibh eget tincidunt tempor. Donec
                        quis lorem nibh. Vivamus commodo neque eu eros congue
                        rhoncus.
                      </p>
                      <p className='font-bold'>
                        That&apos;s yacht insurance done right.
                      </p>
                    </div>
                  </div>
                  <div className='px-4 md:px-0'>
                    <h1 className='text-white text-2xl font-bold py-10'>
                      Is <span className='text-red-500 text-3xl'>Wealth</span>
                      <span className='text-gray-400 text-3xl'>Guard</span>{' '}
                      Yacht Insurance right for you?
                    </h1>
                    <div className='flex mb-3 pb-4'>
                      <p className='text-7xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-red-800'>
                        97%
                      </p>
                      <p className='text-white max-w-md mx-3 py-2'>
                        Orci varius natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus.
                      </p>
                    </div>
                    <div className='text-center'>
                      <button
                        type='button'
                        className='inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-2xl text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transform transition duration-500 hover:scale-110'>
                        More about yacht insurance
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Powerful Cost Management Section */}
      <div
        id='powerful-cost'
        className='bg-gradient-to-r from-red-900 to-red-500 py-12 my-4'>
        <div className='max-w-7xl mx-auto px-1 md:px-4 py-8 md:py-16 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='flex flex-col md:pb-5 mx-auto'>
              <p className='uppercase text-gray-900 mx-2 px-2 font-bold py-4 mb-3'>
                Powerful Cost Management
              </p>
              <p className='max-w-2xl mx-2 px-2 font-bold text-white text-3xl border-style2'>
                Lorem ipsum dolor sit amet, consectetur adipiscing.
              </p>

              <p className='max-w-xl mx-2 px-2 py-4 font-medium text-gray-900'>
                Mauris commodo laoreet ante quis vestibulum. Quisque hendrerit
                urna ultricies sodales elementum. Donec luctus vehicula sapien,
                at consequat lorem laoreet vel. Proin vehicula nisi vel suscipit
                ullamcorper.
              </p>
              <div className='text-center ml-4 lg:ml-0 mb-6'>
                <button
                  type='button'
                  className='inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-2xl text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transform transition duration-500 hover:scale-110'>
                  More about cost management
                </button>
              </div>
            </div>
            <div className='flex justify-center py-8 md:py-0'>
              <div className='rounded-lg border-4 border-gray-700 w-72 h-80 mx-1 md:mx-3 flex flex-col justify-center items-center shadow-2xl shadow-red-900'>
                <div className='bg-gray-900 rounded-full p-8 md:p-10 relative border-8 border-transparent -mt-32 rounded-tr-3xl'>
                  <Image
                    className='h-16 md:h-20'
                    src='/images/home/expense.png'
                    alt='Insurance expenses'
                    height={80}
                    width={80}
                    placeholder='blur'
                    blurDataURL
                  />
                </div>

                <p className='text-lg md:text-xl text-center px-1 md:px-2 pt-4 text-gray-900'>
                  Yacht Cost Intelligence
                </p>
                <p className='mt-3 mx-3 text-gray-900'>Lorem ipsum dolor sit</p>
              </div>
              <div className='rounded-lg border-4 border-gray-700 w-72 h-80 mx-1 md:mx-3 flex flex-col justify-center items-center shadow-2xl shadow-red-900'>
                <div className='bg-gray-400 rounded-full p-8 md:p-10 relative border-8 border-transparent -mt-32 rounded-tr-3xl'>
                  <Image
                    className='h-16 md:h-20'
                    src='/images/home/life-insurance.png'
                    alt='Insurance'
                    height={80}
                    width={80}
                    placeholder='blur'
                    blurDataURL
                  />
                </div>
                <p className='text-lg md:text-xl text-center px-1 md:px-2 pt-4 text-gray-900'>
                  Liability Cost Intelligence
                </p>
                <p className='mt-3 mx-3 text-gray-900'>Lorem ipsum dolor sit</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <section className='bg-white'>
        <div className='max-w-7xl mx-auto px-1 md:px-4 py-8 md:py-24 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='flex flex-col md:pb-5'>
              <p className='max-w-2xl mx-2 px-2 font-bold text-gray-900 text-3xl border-style'>
                Recommended Resources
              </p>
              <p className='max-w-xl mx-2 px-2 py-4 font-medium text-gray-900'>
                Stay informed to get the most out of WealthGuard&apos;s
                Insurance Programs.
              </p>
            </div>
            <div className='flex justify-around items-center'>
              <div className='flex flex-col justify-center items-center text-center py-6 md:py-2 resource-image-container'>
                <Link href='/images/resources/theWealthGuardDifference.pdf'>
                  <a
                    className='hover:text-red-700'
                    target='_blank'
                    rel='noreferrer'>
                    <Image
                      src='/images/resources/theWealthGuardDiffernece-cover.png'
                      className='h-40 w-28 shadow-xl hover:shadow-2xl hover:cursor-pointer'
                      alt="WealthGuard's Agent Retention Flyer"
                      height={160}
                      width={112}
                      placeholder='blur'
                      blurDataURL
                    />
                    <p className='text-sm my-2'>The WealthGuard Difference</p>
                  </a>
                </Link>
              </div>
              <div className='flex flex-col justify-center items-center text-center resource-image-container'>
                <Link href='/images/resources/yachtInsuranceProgram.pdf'>
                  <a
                    className='hover:text-red-700'
                    target='_blank'
                    rel='noreferrer'>
                    <Image
                      src='/images/resources/yachtInsuranceProgram-cover.png'
                      className='h-40 w-28 shadow-black shadow-xl hover:shadow-2xl hover:cursor-pointer'
                      alt="WealthGuard's Yacht Insurance Program"
                      height={160}
                      width={112}
                      placeholder='blur'
                      blurDataURL
                    />
                    <p className='text-sm my-2'>Yacht Insurance Program</p>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <div className='relative bg-gray-900'>
        <div className='h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full'>
          <div className='h-full w-full xl:grid xl:grid-cols-2'>
            <div className='h-full xl:relative xl:col-start-2'>
              <Image
                className='h-full w-full object-cover opacity-50 xl:absolute xl:inset-0'
                src='/images/home/yacht-9.jpeg'
                alt='Yacht docked in the sunset'
                layout='fill'
                objectFit='cover'
                placeholder='blur'
                blurDataURL
              />
              <div
                aria-hidden='true'
                className='absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r'
              />
            </div>
          </div>
        </div>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8'>
          <div className='relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24'>
            <p className='mt-3 text-3xl font-extrabold text-white border-style'>
              Agents Wanted
            </p>
            <p className='mt-5 text-lg text-gray-300'>
              Rhoncus sagittis risus arcu erat lectus bibendum. Ut in adipiscing
              quis in viverra tristique sem. Ornare feugiat viverra eleifend
              fusce orci in quis amet. Sit in et vitae tortor, massa. Dapibus
              laoreet amet lacus nibh integer quis. Eu vulputate diam sit tellus
              quis at.
            </p>
            <div className='mt-12 pb-12'>
              <div className='lg:ml-0 mb-6'>
                <Link href='/for-agents'>
                  <a>
                    <button
                      type='button'
                      className='inline-flex items-center px-4 py-2 border-red-500 shadow-sm text-base font-medium rounded-2xl text-gray-700 bg-red-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transform transition duration-500 hover:scale-110'>
                      Find out what it takes
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
