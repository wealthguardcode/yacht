import Layout from '../components/Layout'

export default function SolutionsPage() {
  return (
    <Layout title={'WIG | Solutions'}>
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
        <div className='max-w-7xl mx-auto py-8 md:py-16 px-4 lg:px-8'>
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
    </Layout>
  )
}
