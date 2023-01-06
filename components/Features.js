import { GlobeAltIcon, BellIcon, CalendarIcon } from '@heroicons/react/solid'

const features = [
  {
    name: 'Complete Digital Process',
    description:
      'Book your venue in a few simple steps digitally',
    icon: GlobeAltIcon,
  },
  {
    name: 'Get Notified',
    description:
      'Get notified about your booking status via email',
    icon: BellIcon,
  },
  {
    name: 'No Clashes with other events',
    description:
        'We ensure that your event does not clash with any other event',
    icon: CalendarIcon,
  }
]

export default function Features() 
{
  return (
      <>
    <div className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
          <h2 className="text-base text-fuchsia-800 font-bold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to book venues
          </p>
        </div>
        <div className="mt-10"></div>
          <dl className="space-x-19 md:space-y-19 md:grid md:grid-cols-3 md:gap-x-5 md:gap-y-10">
            {features.map((feature,index) => (
                <div key={index}>
                    <div className="border-2 bg-white border-transparent-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-105 border-white-600">
                        <div key={feature.name} className="relative">
                            <dt>
                            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-fuchsia-800 text-white">
                                <feature.icon className="h-6 w-6" aria-hidden="true" />
                            </div>
                            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-black-500">{feature.description}
                            <br/>
                            </dd>
                        </div>
                    </div>
              </div>
            ))}
          </dl>
      </div>
    </div>
    </>
  )
}
