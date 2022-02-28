import { Fragment, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { SiLinkedin, SiFacebook } from 'react-icons/si'
import Link from 'next/link'
import { useRouter } from 'next/router'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const router = useRouter()
  const [pathName, setPathName] = useState(router.pathname)

  const newPathName = () => {
    setPathName(router.pathname)
  }

  return (
    <>
      <div className='hidden sm:flex w-full px-20 md:px-28 lg:px-36 xl:px-48 py-3 bg-gradient-to-r from-red-500 to-red-900 justify-end'>
        <a
          href='https://www.linkedin.com/company/wealthguardinsurancegroup'
          target='_blank'
          rel='noreferrer'>
          <SiLinkedin
            alt='LinkedIn'
            className='w-5 h-5 mx-4 text-gray-800 hover:text-gray-500 hover:cursor-pointer transform transition duration-500 hover:scale-110'
          />
        </a>
        <a
          href='https://www.facebook.com/WealthGuardig'
          target='_blank'
          rel='noreferrer'>
          <SiFacebook
            alt='Facebook'
            className='w-5 h-5 text-gray-800 hover:text-gray-500 hover:cursor-pointer transform transition duration-500 hover:scale-110'
          />
        </a>
      </div>
      <Popover as='nav' className='bg-gray-300 shadow'>
        {({ open }) => (
          <>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-3'>
              <div className='flex justify-between h-16'>
                <div className='flex-shrink-0 flex items-center'>
                  <Link href='/'>
                    <a>
                      <img
                        className='block lg:hidden h-10 w-auto'
                        src='/images/wig-logo-full.svg'
                        alt='Workflow'
                      />
                    </a>
                  </Link>
                  <Link href='/'>
                    <a>
                      <img
                        className='hidden lg:block h-12 w-auto'
                        src='/images/wig-logo-full.svg'
                        alt='Workflow'
                      />
                    </a>
                  </Link>
                </div>

                <div className='hidden sm:ml-6 sm:flex sm:space-x-4 md:space-x-8 sm:justify-end'>
                  {/* Current: "border-red-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  {/* active-link */}
                  {/* <Link href='/solutions'>
                    <a className='border-transparent hover:border-red-500 text-gray-600 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-md font-medium'>
                      Solutions
                    </a>
                  </Link> */}
                  <Link href='/solutions'>
                    <a
                      className={
                        router.asPath === '/solutions'
                          ? 'active-link hover:text-gray-900 inline-flex items-center px-1 pt-1 text-md font-medium'
                          : 'text-gray-600 hover:text-gray-900 inline-flex items-center px-1 pt-1 text-md font-medium hover-style'
                      }
                      onClick={newPathName}
                      pathname={pathName}>
                      <h1>Solutions</h1>
                    </a>
                  </Link>
                  <Link href='/resources'>
                    <a
                      className={
                        router.asPath === '/resources'
                          ? 'active-link hover:text-gray-900 inline-flex items-center px-1 pt-1 text-md font-medium'
                          : 'text-gray-600 hover:text-gray-900 inline-flex items-center px-1 pt-1 text-md font-medium hover-style'
                      }
                      onClick={newPathName}
                      pathname={pathName}>
                      <h1>Resources</h1>
                    </a>
                  </Link>
                  <Link href='/for-agents'>
                    <a
                      className={
                        router.asPath === '/for-agents'
                          ? 'active-link hover:text-gray-900 inline-flex items-center px-1 pt-1 text-md font-medium'
                          : 'text-gray-600 hover:text-gray-900 inline-flex items-center px-1 pt-1 text-md font-medium hover-style'
                      }
                      onClick={newPathName}
                      pathname={pathName}>
                      <h1>For Agents</h1>
                    </a>
                  </Link>
                  <Link href='/contact'>
                    <a
                      className={
                        router.asPath === '/contact'
                          ? 'active-link hover:text-gray-900 inline-flex items-center px-1 pt-1 text-md font-medium'
                          : 'text-gray-600 hover:text-gray-900 inline-flex items-center px-1 pt-1 text-md font-medium hover-style'
                      }
                      onClick={newPathName}
                      pathname={pathName}>
                      <h1>Contact</h1>
                    </a>
                  </Link>
                  {/* <Link href='/resources'>
                    <a className='border-transparent text-gray-600 hover:border-red-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-md font-medium '>
                      Resources
                    </a>
                  </Link>
                  <Link href='/for-agents'>
                    <a className='border-transparent text-gray-600 hover:border-red-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-md font-medium'>
                      For Agents
                    </a>
                  </Link>
                  <Link href='/contact'>
                    <a className='border-transparent text-gray-600 hover:border-red-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-md font-medium'>
                      Contact
                    </a>
                  </Link> */}
                </div>

                <div className='-mr-2 flex items-center sm:hidden'>
                  {/* Mobile menu button */}
                  <Popover.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500  outline-none'>
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
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-y-0'
              leaveTo='-translate-y-full'>
              <Popover.Panel className='sm:hidden absolute z-10 bg-gray-300 w-full h-full rounded-b-lg'>
                <div className='pt-2 pb-3 space-y-1'>
                  {/* Current: "bg-red-50 border-red-500 text-red-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                  <Link href='/solutions'>
                    <a
                      className={
                        router.asPath === '/solutions'
                          ? 'active-link hover:text-gray-900 inline-block pl-3 pr-4 py-2 text-base font-medium'
                          : 'text-gray-600 hover:text-gray-900 block pl-3 pr-4 py-2 text-base font-medium hover-style'
                      }
                      onClick={newPathName}
                      pathname={pathName}>
                      <h1>Solutions</h1>
                    </a>
                  </Link>
                  <Link href='/resources'>
                    <a
                      className={
                        router.asPath === '/resources'
                          ? 'active-link hover:text-gray-900 inline-block pl-3 pr-4 py-2 text-base font-medium'
                          : 'text-gray-600 hover:text-gray-900 block pl-3 pr-4 py-2 text-base font-medium hover-style'
                      }
                      onClick={newPathName}
                      pathname={pathName}>
                      <h1>Resources</h1>
                    </a>
                  </Link>
                  <Link href='/for-agents'>
                    <a
                      className={
                        router.asPath === '/for-agents'
                          ? 'active-link hover:text-gray-900 inline-block pl-3 pr-4 py-2 text-base font-medium'
                          : 'text-gray-600 hover:text-gray-900 block pl-3 pr-4 py-2 text-base font-medium hover-style'
                      }
                      onClick={newPathName}
                      pathname={pathName}>
                      <h1>For Agents</h1>
                    </a>
                  </Link>
                  <Link href='/contact'>
                    <a
                      className={
                        router.asPath === '/contact'
                          ? 'active-link hover:text-gray-900 inline-block pl-3 pr-4 py-2 text-base font-medium'
                          : 'text-gray-600 hover:text-gray-900 block pl-3 pr-4 py-2 text-base font-medium hover-style'
                      }
                      onClick={newPathName}
                      pathname={pathName}>
                      <h1>Contact</h1>
                    </a>
                  </Link>
                  {/* <Link href='/solutions'>
                    <a className='border-transparent text-gray-600 hover:bg-gray-400 hover:border-gray-700 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'>
                      Solutions
                    </a>
                  </Link> */}
                  {/* <Link href='/resources'>
                    <a className='border-transparent text-gray-600 hover:bg-gray-400 hover:border-gray-700 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'>
                      Resources
                    </a>
                  </Link>
                  <Link href='/for-agents'>
                    <a className='border-transparent text-gray-600 hover:bg-gray-400 hover:border-gray-700 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'>
                      For Agents
                    </a>
                  </Link>
                  <Link href='/contact'>
                    <a className='border-transparent text-gray-600 hover:bg-gray-400 hover:border-gray-700 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'>
                      Contact
                    </a>
                  </Link> */}
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  )
}
