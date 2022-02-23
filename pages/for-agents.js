import { CheckIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import Layout from '../components/Layout'

const stats = [
  { id: 1, title: 'captive members', number: '1,690' },
  { id: 2, title: 'yachts covered', number: '1000' },
  { id: 3, title: 'in stop-loss premiums', number: '$500M' },
  { id: 4, title: 'renewals to date', number: '3,900' },
]

const features = [
  { id: 1, title: 'Protection against broker-of-record letters' },
  { id: 2, title: 'Comprehensive training programs year-round' },
  { id: 3, title: 'Hands-on mentorship to help you gain early traction' },
  { id: 4, title: 'Insider access to captive members meetings and more' },
]

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

      {/* Stats Section */}
      <div className='bg-gray-900 md:px-24 pt-6 pb-20'>
        <div className='max-w-7xl mx-auto pt-10 md:pt-12 pb-8 md:pb-16 px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl md:text-4xl font-extrabold border-style text-white'>
            <span className='block'>
              <span className='text-red-500'>Wealth</span>
              <span className='text-gray-400'>Guard</span> can help you save
              with Yacht Insurance.
            </span>
          </h2>
          <p className='mt-2 text-lg md:text-xl leading-6 font-medium text-gray-200 py-10'>
            Our agent partners deliver the kind of value that drives remarkable
            growth.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 justify-content-center max-w-2xl mx-auto'>
          {stats.map((stat) => (
            <div
              key={stat.id}
              className='border-3 border-red-500 rounded-lg w-60 flex flex-col px-4 py-6 mx-auto'>
              <p className='text-red-500 text-4xl font-extrabold text-center'>
                {stat.number}+
              </p>
              <p className='text-gray-200 font-semibold tracking-tight mt-1 text-center'>
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* We're with you section */}
      <div className='bg-white grid grid-cols-1 md:grid-cols-2 py-8 max-w-7xl mx-auto'>
        <div className='max-w-3xl mx-auto pt-16 pb-8 md:pb-16 px-4 sm:px-6 lg:px-8'>
          <h2 className='text-2xl md:text-3xl font-extrabold text-gray-900 border-style'>
            <span className='block'>
              We&apos;re with you every step of the way.
            </span>
          </h2>

          <p className='mt-10 text-lg leading-6 text-gray-900'>
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
            Malesuada adipiscing sagittis vel nulla nec. Ac euismod vel sit
            maecenas id pellentesque eu sed consectetur.
          </p>
          <p className='mt-4 text-lg leading-6 text-gray-900'>
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
            Malesuada adipiscing sagittis vel nulla nec. Ac euismod vel sit
            maecenas id pellentesque.
          </p>
        </div>
        <div className='max-w-3xl mx-auto pb-16 md:pt-24 px-4 sm:px-6 lg:px-8 md:flex md:flex-col md:justify-center'>
          <div className='flex flex-col'>
            {features.map((feature) => (
              <p
                key={feature.id}
                className='mt-3 text-lg leading-6 text-gray-900 inline-flex'>
                <CheckIcon className='h-10 text-green-500' />
                <span className='ml-2 self-center'>{feature.title}</span>
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Are you ready section */}
      <div className='bg-gray-900 grid grid-cols-1 md:grid-cols-2 py-8 text-gray-900'>
        <div className='max-w-3xl mx-auto pt-12 md:pt-28 pb-8 md:pb-16 px-4 sm:px-6 lg:px-8'>
          <h2 className='text-2xl md:text-3xl font-extrabold border-style text-white'>
            <span className='block'>Are you ready?</span>
          </h2>
          <p className='mt-4 text-xl leading-6 font-medium text-gray-200 py-4'>
            Donec vitae tortor sed nisi convallis vestibulum a et massa. Quisque
            convallis iaculis urna id egestas.
          </p>
          <p className='mt-2 text-xl leading-6 font-medium text-gray-200 pb-10'>
            Donec vitae tortor sed nisi convallis vestibulum a et massa. Quisque
            convallis iaculis urna id egestas.
          </p>
          <Link href='/contact'>
            <a>
              <button
                type='button'
                className='inline-flex items-center px-4 py-2 border-1 border-red-500 shadow-sm text-base font-bold rounded-2xl text-gray-700 bg-red-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transform transition duration-500 hover:scale-110'>
                Make your move, now.
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
                      fill='currentColor'
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
                            {/* <div className='text-base font-medium text-gray-900'>
                              John Doe
                            </div> */}
                            <div className='text-base font-medium text-red-600'>
                              WealthGuard Agent since 2019
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
              <p className='max-w-xl mx-2 px-2 py-4 text-lg font-medium text-gray-900'>
                Stay informed to get the most out of WealthGuard&apos;s
                Insurance Programs.
              </p>
            </div>
            <div className='flex justify-around items-center py-10 md:py-6'>
              <div className='flex flex-col items-center py-6 md:py-2'>
                <Link href='/images/resources/theWealthGuardDifference.pdf'>
                  <a
                    className='hover:text-red-700'
                    target='_blank'
                    rel='noreferrer'>
                    <img
                      src='/images/resources/theWealthGuardDiffernece-cover.png'
                      alt="WealthGuard's Agent Retention Flyer"
                      className='h-40 w-28 shadow-xl hover:shadow-2xl hover:cursor-pointer mx-auto'
                    />
                    <p className='text-sm my-2'>The WealthGuard Difference</p>
                  </a>
                </Link>
              </div>
              <div className='flex flex-col items-center'>
                <Link href='/images/resources/yachtInsuranceProgram.pdf'>
                  <a
                    className='hover:text-red-700'
                    target='_blank'
                    rel='noreferrer'>
                    <img
                      src='/images/resources/yachtInsuranceProgram-cover.png'
                      alt="WealthGuard's Yacht Insurance Program"
                      className='h-40 w-28 shadow-xl hover:shadow-2xl hover:cursor-pointer mx-auto'
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
