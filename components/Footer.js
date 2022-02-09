const navigation = {
  address: [{ name: '7205 FM 1488 Rd, Ste-A' }, { name: 'Magnolia, TX 77354' }],
  contact: [
    { name: '832-930-3827', href: 'tel:8329303827' },
    {
      name: 'service@wealthguardig.com',
      href: 'mailto:service@wealthguardig.com',
    },
  ],
  links: [
    { name: 'Solutions', href: '/solutions' },
    { name: 'Resources', href: '/resources' },
    { name: 'For Agents', href: '/for-agents' },
    { name: 'Contact', href: '/contact' },
  ],
}

export default function Example() {
  return (
    <footer
      className='bg-gradient-to-r from-red-500 to-red-900'
      aria-labelledby='footer-heading'>
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
        <div className='xl:grid xl:grid-cols-2 xl:gap-8'>
          <div className='space-y-8 xl:col-span-1'>
            <img
              className='h-16'
              src='/images/wig-logo-full.svg'
              alt='WealthGuard Logo'
            />
            {/* <p className='text-gray-500 text-base'>
              Making the world a better place through constructing elegant
              hierarchies.
            </p>
            <div className='flex space-x-6'>
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className='text-gray-400 hover:text-gray-500'>
                  <span className='sr-only'>{item.name}</span>
                  <item.icon className='h-6 w-6' aria-hidden='true' />
                </a>
              ))}
            </div> */}
          </div>
          <div className='mt-12 grid grid-cols-1 gap-8 xl:mt-0 xl:col-span-1'>
            <div className='md:grid md:grid-cols-3 md:gap-8'>
              <div>
                <h3 className='text-sm font-semibold text-gray-400 tracking-wider uppercase'>
                  Address
                </h3>
                <ul role='list' className='mt-4 space-y-4'>
                  {navigation.address.map((item) => (
                    <li key={item.name}>
                      <p className='text-sm text-gray-700'>{item.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='mt-12 md:mt-0'>
                <h3 className='text-sm font-semibold text-gray-400 tracking-wider uppercase'>
                  Contact
                </h3>
                <ul role='list' className='mt-4 space-y-4'>
                  {navigation.contact.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className='text-sm text-gray-700 hover:text-gray-600'
                        target='_blank'
                        rel='noreferrer'>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='mt-12 md:mt-0'>
                <h3 className='text-sm font-semibold text-gray-400 tracking-wider uppercase'>
                  Links
                </h3>
                <ul role='list' className='mt-4 space-y-4'>
                  {navigation.links.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className='text-sm text-gray-700 hover:text-gray-600'>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-12 border-t border-gray-200 pt-8'>
          <p className='text-base text-gray-400 xl:text-center'>
            &copy; {new Date().getFullYear()} WealthGuard, All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
