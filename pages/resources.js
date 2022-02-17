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

export default function ResourcesPage() {
  return (
    <Layout>
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
                className='border-3 border-red-500 rounded-xl py-4 px-8 flex flex-col resource-card'>
                <p className='text-md py-2 font-medium text-red-700'>
                  {resource.type}
                </p>
                <Link href={resource.imgSrc}>
                  <a target='_blank' rel='noreferrer'>
                    <img
                      src={resource.imgSrc}
                      alt={resource.title}
                      className='h-36 mx-auto shadow-xl hover:shadow-2xl hover:cursor-pointer'
                    />
                  </a>
                </Link>
                <Link href={resource.imgSrc}>
                  <a
                    className='hover:text-red-700'
                    target='_blank'
                    rel='noreferrer'>
                    <h1 className='text-xl font-medium mt-2'>
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
    </Layout>
  )
}
