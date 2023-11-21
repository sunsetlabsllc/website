const companies = [
  { name: 'Bunn', url: 'https://www.bunn.com/' },
  { name: 'Warner Music Group', url: 'https://www.wmg.com/' },
  { name: 'New Story', url: 'https://newstoryhomes.org/' },
  { name: 'Blue Sky Studios', url: 'https://en.wikipedia.org/wiki/Blue_Sky_Studios' },
  { name: 'Automatic', url: 'https://automattic.com/' },
  { name: 'Medium', url: 'https://medium.com/' },
  { name: 'SpaceX', url: 'https://www.spacex.com/' },
  { name: 'Exposure', url: 'https://exposure.co/' },
  { name: 'MailChimp', url: 'https://mailchimp.com' },
  { name: 'Grayscale', url: 'https://grayscaleapp.com/' },
  { name: 'Nectar', url: 'https://www.usenectar.com/' },  
  { name: 'Beard Shine', url: 'https://beardshine.co' },
  { name: 'SupportNow', url: 'https://supportnow.org' },
  { name: 'Original9', url: 'https://www.original9.com/' },
  { name: 'Edcetera', url: 'https://edcet.com/' },
  { name: 'eCreamery', url: 'https://ecreamery.com/' },
  { name: 'American Muscle', url: 'https://www.americanmuscle.com/' },
  { name: 'Coolibar', url: 'https://www.coolibar.com/' },
  { name: 'Main Cottage', url: 'https://www.mainecottage.com/' },
  { name: 'Fairhaven Health', url: 'https://www.fairhavenhealth.com/' },
  { name: 'Temple University', url: 'https://temple.edu/' },
];

function Companies () {
  return (
    <div className="relative">
      <div className="flex flex-row justify-start items-center mb-14">
        <span className="text-xl sm:text-2xl text-yellow sm:leading-normal">Clients & Investments</span>
        <div className="border-t border-yellow ml-8 w-24"></div>
      </div>
      <div className="mt-6 lg:mt-0 text-2xl sm:text-3xl sm:leading-snug text-gray-600 text-gray">
        {companies.map((company, index) => (
          <div key={company.name} className="inline-block mr-3">
            <a href={company.url} target="_blank" className="text-gray font-thin hover:text-pink border-b border-b-pink" rel="noreferrer">      
              {company.name}
            </a>
            {index !== companies.length - 1 && 
              <span className="font-thin">{','}</span>
            }
          </div>
        ))}
      </div>    
    </div>
  )
}
export default Companies;