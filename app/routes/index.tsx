import * as FeatureIcons from '~/components/LandingIcons'

interface FeatureBoxProps {
  title: string;
  features: string[];
  icon: React.ReactNode
}

function FeatureBox({ title, features, icon }: FeatureBoxProps) {
  return <div className='text-white' >
    {/* feature container */}
    <div className='relative -left-4' >
      {icon}
      <h2 className='inline ml-2'>{title}</h2>
    </div>
    <div className='mt-4'>
      <ul className='list-disc'>
        {features.map(feature => <li className='py-1 hover:animate-pulse opacity-80 ' key={feature}>{feature}</li>)}
      </ul>
    </div>
  </div>;
}


const features: FeatureBoxProps[] = [
  {
    title: 'Powerful But easy to use',
    features: [
      'Minimal API',
      'Infinitely nestable comment threads',
      'Upvotes/Downvotes',
      'Reactions',
      'Manual & Automatic Moderation',
      'Comment Flagging'
    ],
    icon: FeatureIcons.powerful
  },
  {
    title: 'Censorship Resistant',
    features: [
      'Runs on services controlled by you',
      'Hosted using blockchain technology',
      'Independent from big tech',
      'Globally Distributed'
    ],
    icon: FeatureIcons.censorship
  },
  {
    title: 'Privacy First',
    features: [
      'Data runs through code & services controlled by only you',
      'No ads, tracking, selling data, affliate links, nothing',
      'Authentication via self soverign identity - and not passwords or email',
      'Payments done via blockchain transactions'
    ],
    icon: FeatureIcons.privacy
  },
  {
    title: 'Flexible & Open Source',
    features: [
      'Open Source',
      'Headless API - Frontend agnostic',
      'Supports Server Side Rendering (SSR)',
      'React Hook Library'
    ],
    icon: FeatureIcons.flexible
  }

]



export default function Index() {
  return (
    <div className='p-5 lg:p-20'>

      {/* <img src='/circle_blob.svg' className='absolute -top-72 -z-10'/> */}

      <div className='grid grid-flow-row sm:grid-flow-col '>
        {/* intro */}
        <div className='col-span-1'>
          {/* intro heading text */}
          <div>
            <img src='/zomia_logo.svg' className='w-14 inline' />
            <a href='#' className='inline rounded-full p-2 opacity-60 hover:opacity-100   ml-4  bg-gray-300  border-black text-lg duration-200'>α</a>
          </div>
          <h1 className='mt-10 text-center md:text-left text-5xl font-semibold'>
            The Privacy-First Disqus Alternative
          </h1>
          <h2 className='text-center md:text-left mt-10 max-w-prose'>
            Zomia is an open-source comment system built for the Web3 Era. It is flexible but powerful, while also giving you and your audience complete sovereignty over your data.
          </h2>
          <div className='mt-10 text-center md:text-left mb-10'>
            {/* CTA */}
            <a className='py-3  font-medium shadow-md px-4 border-black border-2 rounded-md relative duration-300 hover:-top-1 top-0' href='/demo'>{`See Demo >`}</a>
            <a className='py-3 font-medium shadow-md  px-4 ml-4  border-black text-white bg-black border-2 rounded-md relative duration-300 hover:-top-1 top-0' href='/getting-started'>{`Get Started >`}</a>
          </div>
        </div>
        <div className='col-span-3'>
          {/* intro image */}
          <img className='w-full' src='/intro_image.svg' />
        </div>
      </div>
      <div className='mt-32'>
        <h2 className='text-center text-3xl font-bold'>Features</h2>
        <div className='gap-12  mt-10 bg-black p-10 rounded-md shadow-xl' style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        }}>
          {/* features */}
          {features.map(feature => <FeatureBox key={feature.title} {...feature} />)}
        </div>
      </div>
      <div className='mt-20 text-center'>
            {/* CTA */}
            <a className='py-3  font-medium shadow-md px-4 border-black border-2 rounded-md relative duration-300 hover:-top-1 top-0' href='/demo'>{`See Demo >`}</a>
            <a className='py-3 font-medium shadow-md  px-4 ml-4  border-black text-white bg-black border-2 rounded-md relative duration-300 hover:-top-1 top-0' href='/getting-started'>{`Get Started >`}</a>
          </div>
    </div>
  );
}