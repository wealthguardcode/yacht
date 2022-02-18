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

        <grid className='grid grid-cols-1 md:grid-cols-2 gap-4 justify-content-center max-w-2xl mx-auto'>
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
        </grid>
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
    </Layout>
  )
}
