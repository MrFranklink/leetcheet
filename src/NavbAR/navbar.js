import { Fragment, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import {
  MenuIcon,
  BellIcon,
  XIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from '@heroicons/react/solid';
import './nav.css';
import { Link } from 'react-router-dom';
import './nav.css';


const navigation = [
  { name: 'Home', href: '/', current: false, hasSubMenu: false },
  { name: 'Problems', href: '/Array', current: false, hasSubMenu: false },
  { name: 'User Stats', href: '/Contest', current: false, hasSubMenu: false },
  { name: 'ChatUs', href: '#', current: false, hasSubMenu: false },
  // {
  //   name: 'Interview',
  //   href: '#',
  //   current: false,
  //   hasSubMenu: true,
  //   subMenu: [
  //     { name: 'Online Interview', href: '#', current: false },
  //     { name: 'Assessments', href: '#', current: false },
  //   ],
  // },
  // {
  //   name: 'Store',
  //   href: '#',
  //   current: false,
  //   hasSubMenu: true,
  //   style: { position: 'absolute', marginRight: '20px' },
  //   subMenu: [
  //     { name: 'Redeem', href: '#', current: false },
  //     { name: 'Premium', href: '#', current: false },
  //   ],
  // },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [interviewOpen, setInterviewOpen] = useState(false);
  const [storeOpen, setStoreOpen] = useState(false);

  return (
    <Disclosure as="nav" className="bg-gray-800" >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
  <a href="/" className="flex items-center">
    <img
      className="h-8 w-auto"
      src="/assests/favicon.ico"
      alt="Your Company"
    />
  </a>
</div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <div key={item.name} className="relative group">
                        {item.hasSubMenu ? (
                          <button
                            onClick={() => {
                              if (item.name === 'Interview') {
                                setInterviewOpen(!interviewOpen);
                                setStoreOpen(false);
                              } else if (item.name === 'Store') {
                                setStoreOpen(!storeOpen);
                                setInterviewOpen(false);
                              } else {
                                setInterviewOpen(false);
                                setStoreOpen(false);
                              }
                            }}
                            className={classNames(
                              'text-gray-300',
                              'rounded-md px-3 py-0 text-sm font-medium',
                              {
                                'bg-gray-900 text-white': item.current,
                              }
                            )}
                          >
                            {item.name}
                            {item.hasSubMenu && (
                              <span className="ml-1">
                                {item.name === 'Interview' && interviewOpen ? (
                                  <ChevronUpIcon className="h-4 w-4 inline" />
                                ) : (
                                  <ChevronDownIcon className="h-4 w-4 inline" />
                                )}
                                {item.name === 'Store' && storeOpen ? (
                                  <ChevronUpIcon className="h-4 w-4 inline" />
                                ) : (
                                  <ChevronDownIcon className="h-4 w-4 inline" />
                                )}
                              </span>
                            )}
                          </button>
                        ) : (
                          // Use Link for navigation items that link to routes
                          <Link
                            to={item.href} // Set the 'to' prop to the appropriate route path
                            className={classNames(
                              'rounded-md px-3 py-2 text-sm font-medium',
                              { 'bg-gray-900 text-white': item.current }
                            )}
                          >
                            {item.name}
                          </Link>
                        )}

                        {item.hasSubMenu && (
                          <Transition
                            show={item.name === 'Interview' ? interviewOpen : storeOpen}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <div className="absolute left-0 mt-2 space-y-2 bg-white origin-top-left w-48 py-1 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                              {item.subMenu.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.href}
                                  className="block px-4 py-2 text-sm text-gray-700"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </Transition>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="/assests/man.png"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 ">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/profile"
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Your Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={() => {
                              // Handle sign out logic here
                            }}
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Sign out
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.hasSubMenu ? (
                    <button
                      onClick={() => {
                        if (item.name === 'Interview') {
                          setInterviewOpen(!interviewOpen);
                          setStoreOpen(false);
                        } else if (item.name === 'Store') {
                          setStoreOpen(!storeOpen);
                          setInterviewOpen(false);
                        } else {
                          setInterviewOpen(false);
                          setStoreOpen(false);
                        }
                      }}
                      className={classNames(
                        'text-gray-300',
                        'rounded-md px-3 py-2 text-base font-medium w-full',
                        {
                          'bg-gray-900 text-white': item.current,
                        }
                      )}
                    >
                      {item.name}
                      {item.hasSubMenu && (
                        <span className="ml-1">
                          {item.name === 'Interview' && interviewOpen ? (
                            <ChevronUpIcon className="h-4 w-4 inline" />
                          ) : (
                            <ChevronDownIcon className="h-4 w-4 inline" />
                          )}
                          {item.name === 'Store' && storeOpen ? (
                            <ChevronUpIcon className="h-4 w-4 inline" />
                          ) : (
                            <ChevronDownIcon className="h-4 w-4 inline" />
                          )}
                        </span>
                      )}
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className={classNames(
                        'rounded-md px-3 py-2 text-base font-medium w-full',
                        { 'bg-gray-900 text-white': item.current }
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                  {item.hasSubMenu && (
                    <Transition
                      show={item.name === 'Interview' ? interviewOpen : storeOpen}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <div className="mt-2 space-y-2 bg-white origin-top-left w-full py-1 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                        {item.subMenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </Transition>
                  )}
                </div>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
