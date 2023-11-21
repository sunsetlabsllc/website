function Contact () {
  return (
    <div className="relative">
     <div className="flex flex-row justify-start items-center mb-14">
        <span className="text-xl sm:text-2xl text-yellow sm:leading-normal">Let's Grab Coffee</span>
        <div className="border-t border-yellow ml-8 w-24"></div>
      </div>
      <div className="mt-6 lg:mt-0 text-2xl sm:text-3xl sm:leading-snug text-gray-600 text-gray font-thin">
        <p>We started Sunset Labs to make a difference through technology, so we're always looking for new talented partners, advisors, and entrepreneurs to work with. Whether you have some ideas scribbled on a napkin or a fully fleshed-out concept, we'd love to grab a coffee and discuss how we can work together. Our inbox is always open at <span className="text-pink tracking-wider">hello[at]sunsetlabs.io</span> — drop us an intro email and let's chat!</p>
      </div>    
    </div>
  )
}
export default Contact;