import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'

const featuredResources = [
  {
    id: 1,
    title: "WealthGuard's Yacht Insurance",
    imgSrc: '/images/resources/yachtInsuranceProgram-cover.png',
    type: 'PDF',
    linkText: 'Read now',
  },
  {
    id: 2,
    title: 'How to Cut Insurance Costs',
    imgSrc: '/images/resources/yachtInsuranceProgram-cover.png',
    type: 'PDF',
    linkText: 'Read now',
  },
  {
    id: 3,
    title: 'Take Control of Yacht Insurance',
    imgSrc: '/images/resources/yachtInsuranceProgram-cover.png',
    type: 'PDF',
    linkText: 'Read now',
  },
]

const resources = [
  {
    id: 1,
    title: "WealthGuard's Yacht Insurance",
    imgSrc: '/images/resources/yachtInsuranceProgram-cover.png',
    type: 'PDF',
    linkText: 'Read now',
  },
  {
    id: 2,
    title: 'How to Cut Insurance Costs',
    imgSrc: '/images/resources/yachtInsuranceProgram-cover.png',
    type: 'PDF',
    linkText: 'Read now',
  },
  {
    id: 3,
    title: 'Take Control of Yacht Insurance',
    imgSrc: '/images/resources/yachtInsuranceProgram-cover.png',
    type: 'PDF',
    linkText: 'Read now',
  },
  {
    id: 4,
    title: 'Take Control of Yacht Insurance',
    imgSrc: '/images/resources/yachtInsuranceProgram-cover.png',
    type: 'PDF',
    linkText: 'Read now',
  },
  {
    id: 5,
    title: 'Take Control of Yacht Insurance',
    imgSrc: '/images/resources/yachtInsuranceProgram-cover.png',
    type: 'PDF',
    linkText: 'Read now',
  },
  {
    id: 6,
    title: 'Take Control of Yacht Insurance',
    imgSrc: '/images/resources/yachtInsuranceProgram-cover.png',
    type: 'PDF',
    linkText: 'Read now',
  },
  {
    id: 7,
    title: 'Take Control of Yacht Insurance',
    imgSrc: '/images/resources/yachtInsuranceProgram-cover.png',
    type: 'PDF',
    linkText: 'Read now',
  },
  {
    id: 8,
    title: 'Take Control of Yacht Insurance',
    imgSrc: '/images/resources/yachtInsuranceProgram-cover.png',
    type: 'PDF',
    linkText: 'Read now',
  },
]

export default function ResourcesPage() {
  return (
    <Layout title={'WIG | Resources'}>
      {/* Featured Resources Section */}
      <div className='bg-white'>
        <div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <p className='mt-1 text-4xl font-extrabold text-gray-900 sm:tracking-tight lg:text-5xl rsc-border-style'>
              Featured Resources
            </p>
            <p className='max-w-3xl mt-5 mx-auto text-lg md:text-xl text-gray-500'>
              Just some of the Yacht Insurance topics we&apos;ve been working on
              lately.
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 items-center place-items-center py-10'>
            {featuredResources.map((resource) => (
              <div
                key={resource.id}
                className='border-3 border-red-500 rounded-xl py-4 px-8 flex flex-col resource-card resources-page-image-container'>
                <p className='text-md py-2 font-medium text-red-700'>
                  {resource.type}
                </p>
                <Link href={resource.imgSrc}>
                  <a target='_blank' rel='noreferrer' className='mx-auto'>
                    <Image
                      src={resource.imgSrc}
                      alt={resource.title}
                      className='h-36 shadow-xl hover:shadow-2xl hover:cursor-pointer'
                      height={336}
                      width={256}
                      priority='true'
                      placeholder='blur'
                      blurDataURL
                    />
                  </a>
                </Link>
                <Link href={resource.imgSrc}>
                  <a
                    className='hover:text-red-700'
                    target='_blank'
                    rel='noreferrer'>
                    <h1 className='text-lg md:text-xl font-bold mt-2'>
                      {resource.title}
                    </h1>
                  </a>
                </Link>
                <Link href={resource.imgSrc}>
                  <a
                    className='hover:text-red-700'
                    target='_blank'
                    rel='noreferrer'>
                    <p className='mt-2 underline'>{resource.linkText}</p>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Heading Section */}
      <div className='bg-gray-900'>
        <div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h2 className='text-base font-semibold text-red-600 tracking-wide uppercase'>
              More
            </h2>
            <p className='mt-1 text-3xl font-extrabold text-gray-300  sm:tracking-wider lg:text-4xl rsc-border-style'>
              WealthGuard Resources
            </p>
            <p className='max-w-xl mt-5 mx-auto text-lg md:text-xl text-gray-400'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse quis elit laoreet, facilisis magna sit amet.
            </p>
          </div>
        </div>
      </div>

      {/* Resource Grid Section */}
      <div className='bg-gray-200'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-center place-items-center py-10'>
          {resources.map((r) => (
            <div
              key={r.id}
              className='bg-white rounded-xl py-4 px-8 flex flex-col resource-card resources-page-image-container'>
              <p className='text-md py-2 font-medium text-red-700'>{r.type}</p>
              <Link href={r.imgSrc}>
                <a target='_blank' rel='noreferrer' className='mx-auto'>
                  <Image
                    src={r.imgSrc}
                    alt={r.title}
                    className='h-36 mx-auto shadow-xl hover:shadow-2xl hover:cursor-pointer'
                    height={336}
                    width={256}
                    priority='true'
                    placeholder='blur'
                    blurDataURL
                  />
                </a>
              </Link>
              <Link href={r.imgSrc}>
                <a
                  className='hover:text-red-700'
                  target='_blank'
                  rel='noreferrer'>
                  <h1 className='text-lg md:text-xl font-bold mt-2'>
                    {r.title}
                  </h1>
                </a>
              </Link>
              <Link href={r.imgSrc}>
                <a
                  className='hover:text-red-700'
                  target='_blank'
                  rel='noreferrer'>
                  <p className='mt-2 underline'>{r.linkText}</p>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className='bg-gray-200 pb-8 pt-2 text-center'>
        <Link href='/contact'>
          <a>
            <button
              type='button'
              className='inline-flex items-center px-12 py-2 border-1 border-red-500 shadow-sm text-base font-medium rounded-2xl text-gray-700 bg-red-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transform transition duration-500 hover:scale-110'>
              Contact us
            </button>
          </a>
        </Link>
      </div>
    </Layout>
  )
}
