import Link from 'next/link'

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Link 1', href: '#' },
    { name: 'Link 2', href: '#' },
    { name: 'Link 3', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className='bg-white'>
      <div className='max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8'>
        <div className='my-8 flex justify-center space-x-6'>
          <Link href='/'>
            <a>
              <img
                className='block h-12 w-auto'
                src='/images/wig-logo-full.svg'
                alt='Workflow'
              />
            </a>
          </Link>
        </div>
        <nav
          className='-mx-5 -my-2 flex flex-wrap justify-center'
          aria-label='Footer'>
          {navigation.main.map((item) => (
            <div key={item.name} className='px-5 py-2'>
              <a
                href={item.href}
                className='text-base text-gray-500 hover:text-gray-900'>
                {item.name}
              </a>
            </div>
          ))}
        </nav>

        <p className='mt-8 text-center text-base text-gray-400'>
          &copy; {new Date().getFullYear()} WealthGuard Insurance Group - All
          rights reserved.
        </p>
      </div>
    </footer>
  )
}
