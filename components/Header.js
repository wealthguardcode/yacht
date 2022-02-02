import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <Popover as='nav' className='bg-white shadow'>
      {({ open }) => (
        <>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between h-16'>
              <div className='flex'>
                <div className='flex-shrink-0 flex items-center'>
                  <Link href='/'>
                    <a>
                      <img
                        className='block lg:hidden h-8 w-auto'
                        src='/images/wig-logo-full.svg'
                        alt='Workflow'
                      />
                    </a>
                  </Link>
                  <Link href='/'>
                    <a>
                      <img
                        className='hidden lg:block h-8 w-auto'
                        src='/images/wig-logo-full.svg'
                        alt='Workflow'
                      />
                    </a>
                  </Link>
                </div>
                <div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
                  {/* Current: "border-red-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <Link href='/'>
                    <a className='border-red-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'>
                      Home
                    </a>
                  </Link>
                  <a
                    href='#'
                    className='border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'>
                    Link 1
                  </a>
                  <a
                    href='#'
                    className='border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'>
                    Link 2
                  </a>
                  <a
                    href='#'
                    className='border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'>
                    Link 3
                  </a>
                </div>
              </div>
              <div className='-mr-2 flex items-center sm:hidden'>
                {/* Mobile menu button */}
                <Popover.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Popover.Button>
              </div>
            </div>
          </div>

          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'>
            <Popover.Panel className='sm:hidden absolute z-10 bg-white w-full rounded-b-lg'>
              <div className='pt-2 pb-3 space-y-1'>
                {/* Current: "bg-red-50 border-red-500 text-red-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                <Link href='/'>
                  <a className='bg-red-50 border-red-500 text-red-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'>
                    Home
                  </a>
                </Link>
                <Popover.Button
                  as='a'
                  href='#'
                  className='border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'>
                  Link 1
                </Popover.Button>
                <Popover.Button
                  as='a'
                  href='#'
                  className='border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'>
                  Link 2
                </Popover.Button>
                <Popover.Button
                  as='a'
                  href='#'
                  className='border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'>
                  Link 3
                </Popover.Button>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}
