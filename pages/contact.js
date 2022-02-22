import Layout from '../components/Layout'

export default function ContactPage() {
  return (
    <Layout title={'WIG | Contact'}>
      <div className='relative bg-gray-500'>
        <div className='absolute inset-0'>
          <img
            className='w-full h-full object-cover'
            src='/images/home/yacht-6.jpeg'
            alt='Yachts docked by seaside cityscape'
          />
          <div
            className='absolute inset-0 bg-gray-500 mix-blend-multiply'
            aria-hidden='true'
          />
        </div>
        <div className='relative max-w-7xl mx-auto pt-24 px-4 sm:px-6 lg:px-8'>
          <h1 className='text-4xl font-extrabold tracking-tight text-white text-center lg:text-5xl'>
            Let&apos;s get you all the information you need.
          </h1>
        </div>
        <div className='min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8 z-9 relative'>
          {/* <div className='sm:mx-auto sm:w-full sm:max-w-md'>
            <img
              className='mx-auto h-12 w-auto'
              src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
              alt='Workflow'
            />
            <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
              Sign in to your account
            </h2>
            <p className='mt-2 text-center text-sm text-gray-600'>
              Or{' '}
              <a
                href='#'
                className='font-medium text-indigo-600 hover:text-indigo-500'>
                start your 14-day free trial
              </a>
            </p>
          </div> */}

          <div className='mt-8 px-4 mx-auto w-full max-w-md md:px-0'>
            <div className='bg-white py-8 px-4 shadow rounded-lg sm:px-10'>
              <form className='space-y-6' action='#' method='POST'>
                <div>
                  <label
                    htmlFor='first-name'
                    className='block text-sm font-medium text-gray-700'>
                    First Name
                  </label>
                  <div className='mt-1'>
                    <input
                      id='first-name'
                      name='first-name'
                      type='text'
                      autoComplete='given-name'
                      required
                      className='py-2 px-4 block w-full shadow-sm focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md'
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor='last-name'
                    className='block text-sm font-medium text-gray-700'>
                    Last Name
                  </label>
                  <div className='mt-1'>
                    <input
                      id='last-name'
                      name='last-name'
                      type='text'
                      autoComplete='family-name'
                      required
                      className='py-2 px-4 block w-full shadow-sm focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md'
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-700'>
                    Email Address
                  </label>
                  <div className='mt-1'>
                    <input
                      id='email'
                      name='email'
                      type='email'
                      autoComplete='email'
                      required
                      className='py-2 px-4 block w-full shadow-sm focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md'
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='company'
                    className='block text-sm font-medium text-gray-700'>
                    Company
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      name='company'
                      id='company'
                      autoComplete='organization'
                      className='py-2 px-4 block w-full shadow-sm focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md'
                    />
                  </div>
                </div>

                <div>
                  <div className='flex justify-between'>
                    <label
                      htmlFor='phone-number'
                      className='block text-sm font-medium text-gray-700'>
                      Phone Number
                    </label>
                    <label
                      htmlFor='phone-number'
                      className='block text-sm font-medium text-gray-400'>
                      Optional
                    </label>
                  </div>

                  <div className='mt-1'>
                    <input
                      id='phone-number'
                      name='phone-number'
                      type='text'
                      autoComplete='tel'
                      className='py-2 px-4 block w-full shadow-sm focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md'
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium text-gray-700'>
                    How can we help you?
                  </label>
                  <div className='mt-1'>
                    <textarea
                      id='message'
                      name='message'
                      rows={4}
                      className='py-2 px-4 block w-full shadow-sm focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md'
                      defaultValue={''}
                    />
                  </div>
                </div>

                <div>
                  <button
                    type='submit'
                    className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
