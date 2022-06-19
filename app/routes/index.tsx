import GradientCircle from '~/components/GradientCircle';
import IntroImage from '~/components/IntroImage';
import * as FeatureIcons from '~/components/LandingIcons'

interface FeatureBoxProps {
  title: string;
  features: string[];
  icon: React.ReactNode
}

function FeatureBox({ title, features, icon }: FeatureBoxProps) {
  return <div className='text-black ' >
    {/* feature container */}
    <div className='relative -left-4' >
      {icon}
      <h2 className='inline ml-2 capitalize'>{title}</h2>
    </div>
    <div className='mt-4'>
      <ul className='list-disc'>
        {features.map(feature => <li className='py-1 hover:animate-pulse capitalize ' key={feature}>{feature}</li>)}
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
      'Authentication via self sovereign identity - and not passwords or email',
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

const CTA = () => <>
  <a target={'_blank'} className='py-3 bg-white  font-medium shadow-md px-4 border-black border-2 rounded-md relative duration-300 hover:-top-1 top-0' href='https://nextjsexample.distive.com/?channel=books'>{`See Demo >`}</a>
  <a className='py-3 font-medium shadow-md  px-4 ml-4  border-black text-white bg-black border-2 rounded-md relative duration-300 hover:-top-1 top-0' href='https://dashboard.distive.com'>{`Get Started >`}</a>
</>


export default function Index() {
  return (
    <div className=' relative' >


      <div className='p-5 lg:p-20'>
        <div className=' w-full '>
          {/* intro */}
          <div className='relative w-full'>
            {/* intro heading text */}
            <div className='text-center'>
              <img src='/distive_logo.svg' className='w-32 inline' />

              {/* <a href='#' className='inline rounded-full p-2 opacity-60 hover:opacity-100   ml-4  bg-gray-300  border-black text-lg duration-200'>α</a> */}
            </div>
            <h1 className='mt-20 text-center text-5xl font-semibold'>
              {/* The Privacy-First Disqus Alternative */}
              Self Sovereign Audiences
            </h1>
            <h2 className='text-center mt-5  max-w-[80ch] m-auto '>
              Distive is an open-source comment system built for the Web3 Era. It is flexible but powerful, while also giving you and your audience complete sovereignty over your data.
            </h2>
            <div className='mt-20 text-center '>
              {/* CTA */}
              <CTA />
            </div>
            <div
              style={{
                position: 'absolute',
                margin: 'auto',
                filter: 'blur(30px) contrast(2)',
                overflow: 'hidden',
                width: '100%',
                height: '100%',
                zIndex: -30,
                mixBlendMode: 'color-burn' 
              }}
            >

              <div
                className='animate-blob_anim hidden md:block bg-black absolute left-1/2 top-0 rounded-full'
                style={{
                  width: '30vw',
                  height: '20vw'
                }}
              />
              <div
                className='animate-blob_anim hidden md:block bg-blue-300 absolute right-1/3 top-2/3 rounded-full'
                style={{
                  width: '20vw',
                  height: '10vw'
                }}
              />
              <div
                className='animate-blob_anim  hidden md:block bg-green-400 absolute right-1/4 top-1/3 rounded-full'
                style={{
                  width: '15vw',
                  height: '15vw'
                }}
              />

            </div>
          </div>
          <div className='mt-[10vh]'>
            {/* intro image */}
            <img className='max-w-4xl w-full h-auto aspect-square  m-auto' src='/intro_image.svg' />
            {/* <IntroImage/> */}
          </div>
        </div>
        <div className='mt-32 relative'>
          <h2 className='text-center text-3xl font-bold'>Features</h2>
          {/* <img src='/blob.svg' className='absolute'/> */}
          <div
            style={{
              position: 'absolute',
              margin: 'auto',
              filter: 'blur(50px) contrast(2)',
              overflow: 'hidden',
              width: '100%',
              height: '100%',
              zIndex: -30,
              mixBlendMode: 'color-burn',
              opacity: 0.5,

            }}
          >
            <div className='gap-12 grid w-full h-full  mt-10 p-10 ' style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            }}>
              <div
                className=' bg-black rounded-full'
                style={{
                  width: '100%',
                  height: '100%'
                }}
              />

              <div
                className=' bg-green-900 rounded-full'
                style={{
                  width: '100%',
                  height: '100%'
                }}
              />
              <div
                className=' bg-blue-900  rounded-full'
                style={{
                  width: '100%',
                  height: '100%'
                }}
              />
              <div
                className=' bg-red-900 rounded-full'
                style={{
                  width: '100%',
                  height: '100%'
                }}
              />
            </div>
          </div>
          <div className='gap-12 grid relative w-full h-full  mt-10 p-10 rounded-md shadow-lg'
            style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              backgroundColor: '#edf2f4e6',
            }}>
            {/* features */}
            {features.map(feature => <FeatureBox key={feature.title} {...feature} />)}
          </div>
        </div>
        <div className='mt-20 mb- text-center '>
          {/* CTA */}
          <CTA />
        </div>
      </div>
    </div>
  );
}
