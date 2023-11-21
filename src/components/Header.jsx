import sslMark from '../assets/mark.png'

const navigation = [
  { name: 'Companies', href: '/companies' },
  { name: 'Contact', href: '/contact' },
]

function Header() {
  return (
    <header className="">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex h-16 items-center">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Sunset Labs</span>
            <img className="h-12 w-auto" src={sslMark} alt="Sunset Labs Icon"/>
          </a>
        </div>       
        <div className="flex gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-base font-normal leading-6 tracking-widest text-lightBlue hover:text-pink uppercase">
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Header;