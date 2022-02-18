import Layout from '../components/Layout'

export default function ForAgentsPage() {
  return (
    <Layout title={'WIG | For Agents'}>
      {/* Image carousel section */}
      <div
        id='carouselExampleCaptions'
        className='carousel slide'
        data-mdb-ride='carousel'>
        <div className='carousel-indicators'>
          <button
            type='button'
            data-mdb-target='#carouselExampleCaptions'
            data-mdb-slide-to='0'
            className='active'
            aria-current='true'
            aria-label='Slide 1'></button>
          <button
            type='button'
            data-mdb-target='#carouselExampleCaptions'
            data-mdb-slide-to='1'
            aria-label='Slide 2'></button>
          <button
            type='button'
            data-mdb-target='#carouselExampleCaptions'
            data-mdb-slide-to='2'
            aria-label='Slide 3'></button>
        </div>
        <div className='carousel-inner carousel-wrapper'>
          <div className='carousel-item active'>
            <img
              src='/images/for-agents/agents-1.jpeg'
              className='d-block w-100'
              alt='People active and moving'
            />
            {/* <div className='carousel-caption d-none d-md-block'>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div> */}
          </div>
          <div className='carousel-item'>
            <img
              src='/images/for-agents/agents-2.jpeg'
              className='d-block  w-100'
              alt='Woman in front of window'
            />
            {/* <div className='carousel-caption d-none d-md-block'>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div> */}
          </div>
          <div className='carousel-item'>
            <img
              src='/images/for-agents/agents-3.jpeg'
              className='d-block  w-100'
              alt='Business expenses'
            />
            {/* <div className='carousel-caption d-none d-md-block'>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div> */}
          </div>
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-mdb-target='#carouselExampleCaptions'
          data-mdb-slide='prev'>
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-mdb-target='#carouselExampleCaptions'
          data-mdb-slide='next'>
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>

      {/* Main content section */}
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
              You&apos;ll be armed with a breakthrough solution.
            </p>
            <h1 className='mt-10 text-gray-900 text-4xl font-semibold border-style'>
              Why would you choose <span className='text-red-500'>Wealth</span>
              <span className='text-gray-400'>Guard</span>?
            </h1>
            <p className='my-8 text-lg max-w-3xl font-bold'>
              Vivamus facilisis velit lacinia, justo condimentum fringilla
              aliquam erat volutpat?
            </p>
            <p className='my-8 text-lg max-w-3xl'>
              Mauris pharetra eu sem eget rhoncus. Phasellus lectus libero,
              placerat eu magna id, pulvinar imperdiet diam. Maecenas et porta
              turpis.
            </p>
            <p className='my-8 text-lg max-w-3xl'>
              Etiam vitae leo a eros aliquam tincidunt commodo in magna. Nam
              fermentum libero sodales aliquam condimentum. Nam felis sapien,
              ullamcorper fermentum.
            </p>
            <p className='my-8 text-lg max-w-3xl'>
              Maecenas et porta turpis. Pellentesque cursus, est id fermentum
              gravida, metus erat eleifend magna, vel dapibus quam elit eget
              elit.
            </p>
            <p className='my-8 text-lg max-w-3xl'>
              Aenean tincidunt nunc ligula, a aliquet justo condimentum sed.
              Etiam ante ipsum, tristique id augue vel, venenatis finibus purus
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
