import { useState } from 'react'
import sslMark from '../assets/mark.png'

const navigation = [
  { name: 'Companies', href: '/companies', color: 'lightBlue' },
  { name: 'Contact', href: '/contact', color: 'orange' },
]

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="">
      <nav className="mx-auto flex max-w-7xl items-center justify-end p-6 lg:px-8" aria-label="Global">
        <div className="flex flex-1 h-16 items-center">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Sunset Labs</span>
            <img className="h-12 w-auto" src={sslMark} alt="Sunset Labs Icon"/>
          </a>
        </div>      
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setMobileMenuOpen(mobileMenuOpen ? false : true)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>        
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className={`text-sm font-semibold leading-6 text-${item.color} uppercase`}>
              {item.name}
            </a>
          ))}
        </div>
      </nav>
      <div className={`${mobileMenuOpen ? 'opacity-100' : 'opacity-0'} w-full px-4 md:block md:w-auto absolute z-50 ease-in-out duration-100 transition-opacity`} id="navbar-default">
        <ul className="font-normal flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-lightBlue md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          {navigation.map((item) => (
            <li key={item.name}>
              <a  href={item.href} className="block py-2 px-3 text-darkBlue md:p-0" aria-current="page">
              {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Header;