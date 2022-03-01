import Layout from '../components/Layout'
import {
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  PlusCircleIcon,
} from '@heroicons/react/outline'
import Link from 'next/link'
import Image from 'next/image'

export default function SolutionsPage() {
  return (
    <Layout title={'WIG | Solutions'}>
      {/* Image carousel section */}
      <div
        id='carouselExampleCrossfade'
        className='carousel slide carousel-fade'
        data-mdb-ride='carousel'>
        <div className='carousel-indicators'>
          <button
            type='button'
            data-mdb-target='#carouselExampleCrossfade'
            data-mdb-slide-to='0'
            className='active'
            aria-current='true'
            aria-label='Slide 1'></button>
          <button
            type='button'
            data-mdb-target='#carouselExampleCrossfade'
            data-mdb-slide-to='1'
            aria-label='Slide 2'></button>
          <button
            type='button'
            data-mdb-target='#carouselExampleCrossfade'
            data-mdb-slide-to='2'
            aria-label='Slide 3'></button>
        </div>
        <div className='carousel-inner carousel-wrapper'>
          <div className='carousel-item active'>
            <img
              src='/images/solutions/yacht-12.jpeg'
              className='d-block w-100 h-100'
              alt='Close-up yacht sideview'
            />
          </div>
          <div className='carousel-item'>
            <img
              src='/images/solutions/yacht-11.jpeg'
              className='d-block h-100'
              alt='Men on yacht'
            />
          </div>
          <div className='carousel-item'>
            <img
              src='/images/home/yacht-7.jpeg'
              className='d-block h-100'
              alt='Close-up yacht front sideview'
            />
          </div>
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-mdb-target='#carouselExampleCrossfade'
          data-mdb-slide='prev'>
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-mdb-target='#carouselExampleCrossfade'
          data-mdb-slide='next'>
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>

      {/* Main content */}
      <div className='bg-white'>
        <div className='max-w-7xl mx-auto py-8 md:pt-16 px-4 lg:px-8'>
          <div className='text-left'>
            {/* <h2 className='text-base font-semibold text-indigo-600 tracking-wide uppercase'>
              Pricing
            </h2> */}
            <p className='hidden md:block mt-1 text-4xl font-normal text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl'>
              Lorem ipsum <span className='font-extrabold'>dolor sit</span> amet{' '}
              <br />
              consectetur adipiscing.
            </p>
            <p className='md:hidden mt-1 text-4xl font-normal text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl'>
              Lorem ipsum <span className='font-extrabold'>dolor sit </span>amet
              consectetur adipiscing.
            </p>
            <p className='max-w-xl mt-5 text-xl text-gray-500'>
              WealthGuard provides innovative solutions for Yacht insurance.
            </p>
            <h1 className='mt-10 text-gray-900 text-4xl font-semibold border-style'>
              The <span className='text-red-500'>Wealth</span>
              <span className='text-gray-400'>Guard</span> Solution
            </h1>
            <p className='my-8 text-lg max-w-3xl'>
              Vivamus facilisis velit lacinia justo condimentum fringilla.
              Curabitur at rhoncus odio. Aliquam erat volutpat.
            </p>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className='bg-white'>
        <div className='max-w-7xl mx-auto px-1 md:px-4 pt-2 pb-8 md:pt-4 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 my-2'>
            <div className='flex flex-col mx-auto mb-4'>
              <div className='bg-red-500 rounded-lg mx-2.5 mb-2 max-w-3xl'>
                <h1 className='text-gray-900 text-lg md:text-2xl text-center font-extrabold py-2'>
                  Yacht Program Benefits
                </h1>
              </div>
              <div className='relative mr-4 md:ml-2 md:mr-0'>
                <div className='bg-gray-900 rounded-full hidden lg:inline-block lg:absolute z-10 xl:top-1/2 xl:left-1/2 xl:transform xl:translate-x-72 xl:-translate-y-14 disc'>
                  <PlusCircleIcon className='h-12 text-red-500' />
                </div>
              </div>

              <div className='grid grid-cols-1'>
                <div className='flex justify-center'>
                  <div className='flip'>
                    <div className='flip-content'>
                      <div className='flip-front flex flex-col justify-center'>
                        <p className='text-xl md:text-3xl text-center font-medium px-1 lg:px-2 mb-2'>
                          Lorem ipsum dolor
                        </p>
                        <ChevronRightIcon className='h-14' />
                      </div>
                      <div className='flip-back  flex flex-col justify-center'>
                        <p className='text-xl md:text-2xl text-center font-medium px-1 lg:px-2'>
                          Fusce ut ante felis. Aenean ornare vehicula lorem et
                          tristique.
                        </p>
                        <ChevronRightIcon className='h-14' />
                      </div>
                    </div>
                  </div>
                  <div className='bg-gray-900 rounded-full absolute my-32 z-10'>
                    <PlusCircleIcon className='h-12 text-red-500' />
                  </div>

                  <div className='flip'>
                    <div className='flip-content'>
                      <div className='flip-front flex flex-col justify-center'>
                        <p className='text-xl md:text-3xl text-center font-medium px-1 lg:px-2 mb-2'>
                          Lorem ipsum dolor
                        </p>
                        <ChevronRightIcon className='h-14' />
                      </div>
                      <div className='flip-back  flex flex-col justify-center'>
                        <p className='text-xl md:text-2xl text-center font-medium px-1 lg:px-2'>
                          Fusce ut ante felis. Aenean ornare vehicula lorem et
                          tristique.
                        </p>
                        <ChevronRightIcon className='h-14' />
                      </div>
                    </div>
                  </div>
                </div>
                <p className='mx-auto mt-3 md:mt-4 md:text-lg font-medium underline hover:cursor-pointer'>
                  Learn more about WealthGuard Yacht Insurance
                </p>
              </div>
            </div>
            <div className='flex flex-col mx-auto'>
              <div className='bg-gray-900 rounded-lg mx-2.5 mb-2 max-w-3xl'>
                <h1 className='text-gray-50 text-lg md:text-2xl text-center font-extrabold py-2'>
                  Integrated Cost Management
                </h1>
              </div>
              <div className='grid grid-cols-1'>
                <div className='flex justify-center'>
                  <div className='flip'>
                    <div className='flip-content'>
                      <div className='flip-front flex flex-col justify-center'>
                        <p className='text-xl md:text-3xl text-center font-medium px-1 lg:px-2 mb-2'>
                          Lorem ipsum dolor
                        </p>
                        <ChevronRightIcon className='h-14' />
                      </div>
                      <div className='flip-back  flex flex-col justify-center'>
                        <p className='text-xl md:text-2xl text-center font-medium px-1 lg:px-2'>
                          Fusce ut ante felis. Aenean ornare vehicula lorem et
                          tristique.
                        </p>
                        <ChevronRightIcon className='h-14' />
                      </div>
                    </div>
                  </div>
                  <div className='bg-gray-900 rounded-full absolute my-32 z-10'>
                    <PlusCircleIcon className='h-12 text-red-500' />
                  </div>
                  <div className='flip'>
                    <div className='flip-content'>
                      <div className='flip-front flex flex-col justify-center'>
                        <p className='text-xl md:text-3xl text-center font-medium px-1 lg:px-2 mb-2'>
                          Lorem ipsum dolor
                        </p>
                        <ChevronRightIcon className='h-14' />
                      </div>
                      <div className='flip-back  flex flex-col justify-center'>
                        <p className='text-xl md:text-2xl text-center font-medium px-1 lg:px-2'>
                          Fusce ut ante felis. Aenean ornare vehicula lorem et
                          tristique.
                        </p>
                        <ChevronRightIcon className='h-14' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className='mx-auto mt-3 md:mt-4 md:text-lg font-medium underline hover:cursor-pointer'>
                Learn more about WealthGuard Yacht Insurance
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Done Right Section */}
      <div className='bg-gray-900 grid grid-cols-1 md:grid-cols-2 py-8'>
        <div className='max-w-3xl mx-auto pt-16 pb-8 md:pb-16 px-4 sm:px-6 lg:px-8'>
          <h2 className='text-2xl md:text-3xl font-extrabold text-white border-style'>
            <span className='block'>
              <span className='text-red-500'>Wealth</span>
              <span className='text-gray-400'>Guard</span> means insurance done
              right.
            </span>
          </h2>
          <p className='mt-4 text-lg leading-6 font-medium text-gray-200'>
            Self-insurance makes sense.
          </p>
          <p className='mt-4 text-lg leading-6 text-gray-200'>
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
            Malesuada adipiscing sagittis vel nulla nec. Ac euismod vel sit
            maecenas id pellentesque eu sed consectetur. Malesuada adipiscing
            sagittis vel nulla nec.
          </p>
          <p className='mt-4 text-lg leading-6 text-gray-200'>
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
            Malesuada adipiscing sagittis vel nulla nec. Ac euismod vel sit
            maecenas id pellentesque eu sed consectetur. Malesuada adipiscing
            sagittis vel nulla nec.
          </p>
        </div>
        <div className='max-w-3xl mx-auto pb-16 md:pt-24 px-4 sm:px-6 lg:px-8 md:flex md:flex-col md:justify-center'>
          <p className='mt-4 text-lg leading-6 font-medium text-gray-200'>
            The captive makes it possible.
          </p>
          <p className='mt-4 text-lg leading-6 text-gray-200'>
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
            Malesuada adipiscing sagittis vel nulla nec. Ac euismod vel sit
            maecenas id pellentesque eu sed consectetur. Malesuada adipiscing
            sagittis vel nulla nec.
          </p>
          <p className='mt-4 text-lg leading-6 text-gray-200'>
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
            Malesuada adipiscing sagittis vel nulla nec. Ac euismod vel sit
            maecenas id pellentesque eu sed consectetur. Malesuada adipiscing
            sagittis vel nulla nec.
          </p>
        </div>
      </div>

      {/* Ready to save section */}
      <div className='bg-gray-200 grid grid-cols-1 md:grid-cols-2 py-8 text-gray-900'>
        <div className='max-w-3xl mx-auto pt-12 md:pt-28 pb-8 md:pb-16 px-4 sm:px-6 lg:px-8'>
          <h2 className='text-2xl md:text-3xl font-extrabold border-style'>
            <span className='block'>Ready to save with Yacht Insurance?</span>
          </h2>
          <p className='mt-4 text-xl leading-6 font-medium  py-10'>
            Donec ut sem finibus, finibus enim non, dignissim tellus.
          </p>
          <Link href='/contact'>
            <a>
              <button
                type='button'
                className='inline-flex items-center px-4 py-2 border-1 border-red-500 shadow-sm text-base font-medium rounded-2xl text-gray-700 bg-red-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transform transition duration-500 hover:scale-110'>
                Ask us how you can, too.
              </button>
            </a>
          </Link>
        </div>
        <div className='max-w-3xl mx-auto pb-16 pt-6 md:pt-12 px-4 sm:px-6 lg:px-8 md:flex md:flex-col md:justify-center'>
          <div className='bg-white rounded-xl px-4 py-4'>
            <section className='bg-white'>
              <div className='relative max-w-7xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20'>
                <div className='relative lg:flex lg:items-center'>
                  <div className='relative lg:ml-10'>
                    <svg
                      className='absolute top-0 left-0 transform -translate-x-8 -translate-y-24 h-36 w-36 text-red-300 opacity-50'
                      stroke='currentColor'
                      fill='none'
                      viewBox='0 0 144 144'
                      aria-hidden='true'>
                      <path
                        strokeWidth={2}
                        d='M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z'
                      />
                    </svg>
                    <blockquote className='relative'>
                      <div className='text-2xl leading-9 font-medium text-gray-900'>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nemo expedita voluptas culpa sapiente alias
                          molestiae.
                        </p>
                      </div>
                      <footer className='mt-8'>
                        <div className='flex'>
                          <div className='ml-4 lg:ml-0'>
                            <div className='text-base font-medium text-gray-900'>
                              John Doe
                            </div>
                            <div className='text-base font-medium text-red-600'>
                              SVP Coporate Risk Mitigation
                            </div>
                          </div>
                        </div>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <section className='bg-white'>
        <div className='max-w-full mx-auto px-1 md:px-4 py-8 md:py-24 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='flex flex-col md:pb-5 mx-auto py-12 md:py-4'>
              <p className='max-w-xl mx-2 px-2 font-bold text-gray-900 text-3xl border-style'>
                Recommended Resources
              </p>
              <p className='max-w-xl mx-2 px-2 py-4 font-medium text-lg text-gray-900'>
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
    </Layout>
  )
}
